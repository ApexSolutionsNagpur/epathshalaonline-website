import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronDown, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { captureLead } from '@/services/leadService';
import { trackEvent } from '@/lib/trackEvent';
import { trackLead } from '@/lib/trackLead';

interface DemoClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoClassModal: React.FC<DemoClassModalProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [formData, setFormData] = useState({
    programme: '',
    grade: '',
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    city: '',
    authorize: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitStatus(null);

      // Track form view - funnel start
      if (typeof window !== 'undefined') {
        if (window.gtag) {
          window.gtag('event', 'form_view', {
            form_name: 'demo_class_enrollment'
          });
        }
        if (window.fbq) {
          window.fbq('track', 'ViewContent', {
            content_name: 'demo_class_enrollment_form'
          });
        }
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.programme) newErrors.programme = 'Programme is required';
    if (!formData.grade) newErrors.grade = 'Grade is required';
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
      newErrors.phone = 'Invalid Indian mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await captureLead({
        tenant_slug: 'ppp',
        form_id: 2,
        student_first_name: formData.studentName.trim(),
        parent_first_name: formData.parentName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        grade_level: formData.grade,
        city: formData.city.trim(),
        source: typeof window !== 'undefined' ? window.location.href : ''
      });

      // Fire conversion events to GA4, Meta Pixel, and Clarity
      trackLead({
        form_name: 'demo_class_enrollment',
        programme: formData.programme,
        grade: formData.grade,
        city: formData.city.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        student_name: formData.studentName.trim(),
        parent_name: formData.parentName.trim(),
        value: 0,
      });

      setSubmitStatus({
        type: 'success',
        message: 'Your request has been submitted successfully!'
      });

      setFormData({
        programme: '',
        grade: '',
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        city: '',
        authorize: true
      });

      setTimeout(() => {
        if (isOpen) onClose();
      }, 3000);

    } catch (error: unknown) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#0B3C5D]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-t-[2.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-all duration-500 ease-out animate-in slide-in-from-bottom md:slide-in-from-none md:zoom-in-95 md:fade-in">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 md:right-4 z-10 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Side: Promotional Image */}
        <div className="hidden md:block md:w-[45%] relative min-h-[600px]">
          <Image
            src="/images/modelimage.png" // Using an existing project image
            alt="Demo Class Promotion"
            width={500}
            height={500}
            className='object-cover h-full w-full'
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="text-3xl font-extrabold mb-2 font-heading uppercase">{"Shape Your Child's Future"}</h3>
            <p className="text-white/80 font-body">{"Experience India's most recognized online school first-hand."}</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-[55%] p-4 md:p-6 overflow-y-auto max-h-[90vh]">
          <div className="text-center mb-6 pt-4 md:pt-0">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4 md:hidden"></div>
            <h2 className="text-[#0B3C5D] font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
              Student Enrollment Form
            </h2>
          </div>

          {submitStatus && (
            <div className={`mb-6 p-4 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
              }`}>
              {submitStatus.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>

            <div className='flex gap-2 w-full'>
              {/* Programme */}
              <div className="space-y-1.5 w-full">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Programme*</label>
                <div className="relative group">
                  <select
                    name="programme"
                    value={formData.programme}
                    onChange={handleChange}
                    className={`w-full h-12 px-5 rounded-2xl bg-[#F8F9FA] border ${errors.programme ? 'border-red-300' : 'border-gray-100'} text-[#1F2937] font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
                  >
                    <option value="">Select Programme</option>
                    <option value="cbse">CBSE Academic</option>
                    <option value="jee">JEE & NEET Foundation</option>
                    <option value="stem">STEM & Coding</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1E5AA8]" size={18} />
                </div>
                {errors.programme && <p className="text-[10px] text-red-500 ml-1">{errors.programme}</p>}
              </div>

              {/* Grade */}
              <div className="space-y-1.5  w-full">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Grade*</label>
                <div className="relative group">
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className={`w-full h-12 px-5 rounded-2xl bg-[#F8F9FA] border ${errors.grade ? 'border-red-300' : 'border-gray-100'} text-[#1F2937] font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
                  >
                    <option value="">Select Grade</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1E5AA8]" size={18} />
                </div>
                {errors.grade && <p className="text-[10px] text-red-500 ml-1">{errors.grade}</p>}
              </div>
            </div>

            {/* Student Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Student Name*</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Student's Full Name"
                className={`w-full h-12 px-5 rounded-2xl bg-[#F8F9FA] border ${errors.studentName ? 'border-red-300' : 'border-gray-100'} text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
              />
              {errors.studentName && <p className="text-[10px] text-red-500 ml-1">{errors.studentName}</p>}
            </div>

            {/* Parent Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Parent Name*</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Parent's Full Name"
                className={`w-full h-12 px-5 rounded-2xl bg-[#F8F9FA] border ${errors.parentName ? 'border-red-300' : 'border-gray-100'} text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
              />
              {errors.parentName && <p className="text-[10px] text-red-500 ml-1">{errors.parentName}</p>}
            </div>

            <div className='flex gap-2 w-full'>
              {/* Email Address */}
              <div className="space-y-1.5 w-full">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full h-12 px-5 rounded-2xl bg-[#F8F9FA] border ${errors.email ? 'border-red-300' : 'border-gray-100'} text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
                />
                {errors.email && <p className="text-[10px] text-red-500 ml-1">{errors.email}</p>}
              </div>

              {/* City */}
              <div className="space-y-1.5 w-full">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">City*</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className={`w-full h-12 px-5 rounded-2xl bg-[#F8F9FA] border ${errors.city ? 'border-red-300' : 'border-gray-100'} text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
                />
                {errors.city && <p className="text-[10px] text-red-500 ml-1">{errors.city}</p>}
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex gap-3">
              <div className="w-[80px] space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Code</label>
                <div className="h-12 flex items-center justify-center rounded-2xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-bold">
                  +91
                </div>
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  maxLength={10}
                  className={`w-full h-12 px-5 rounded-2xl bg-[#F8F9FA] border ${errors.phone ? 'border-red-300' : 'border-gray-100'} text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
                />
                {errors.phone && <p className="text-[10px] text-red-500 ml-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Authorization */}
            <div className="flex items-center gap-3 py-2">
              <input
                type="checkbox"
                id="auth"
                name="authorize"
                checked={formData.authorize}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded-md border-gray-300 text-[#1E5AA8] focus:ring-[#1E5AA8]/20"
              />
              <label htmlFor="auth" className="text-xs text-gray-500 leading-normal">
                I authorize ePathshala to contact me. This overrides DND.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FFC107] hover:bg-[#E0A800]'} text-[#1F2937] font-extrabold py-5 rounded-2xl shadow-lg transform ${!isSubmitting && 'hover:scale-[1.02]'} transition-all flex items-center justify-center gap-3 group mt-4 uppercase`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  SUBMITTING...
                </>
              ) : (
                <>
                  SUBMIT REQUEST <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </>
              )}
            </button>

            {/* Privacy Policy */}
            <div className="text-center mt-6">
              <button className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px] hover:text-[#1E5AA8] transition-colors">
                PRIVACY POLICY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoClassModal;
