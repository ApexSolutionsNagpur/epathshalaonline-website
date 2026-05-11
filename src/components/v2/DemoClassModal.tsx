"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronDown, ArrowRight } from 'lucide-react';

interface DemoClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoClassModal: React.FC<DemoClassModalProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
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

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[#0B3C5D]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Side: Promotional Image */}
        <div className="hidden md:block md:w-[45%] relative min-h-[600px]">
          <Image
            src="/images/getstart.jpg" // Using an existing project image
            alt="Demo Class Promotion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="text-3xl font-extrabold mb-2 font-heading uppercase">Shape Your Child's Future</h3>
            <p className="text-white/80 font-body">Experience India's most recognized online school first-hand.</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-[55%] p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          <div className="text-center mb-8">
            <h2 className="text-[#0B3C5D] font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
              BOOK A FREE DEMO CLASS
            </h2>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Programme */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Programme*</label>
              <div className="relative group">
                <select className="w-full h-14 px-5 rounded-2xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all">
                  <option value="">Select Programme</option>
                  <option value="cbse">CBSE Academic</option>
                  <option value="jee">JEE & NEET Foundation</option>
                  <option value="stem">STEM & Coding</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1E5AA8]" size={18} />
              </div>
            </div>

            {/* Grade */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Grade*</label>
              <div className="relative group">
                <select className="w-full h-14 px-5 rounded-2xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all">
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
            </div>

            {/* Student Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Student Name*</label>
              <input 
                type="text" 
                placeholder="Student's Full Name" 
                className="w-full h-14 px-5 rounded-2xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all"
              />
            </div>

            {/* Parent Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Parent Name*</label>
              <input 
                type="text" 
                placeholder="Parent's Full Name" 
                className="w-full h-14 px-5 rounded-2xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address*</label>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full h-14 px-5 rounded-2xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="flex gap-3">
              <div className="w-[80px] space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Code</label>
                <div className="h-14 flex items-center justify-center rounded-2xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-bold">
                  +91
                </div>
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number*</label>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full h-14 px-5 rounded-2xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all"
                />
              </div>
            </div>

            {/* Authorization */}
            <div className="flex items-start gap-3 py-2">
              <input 
                type="checkbox" 
                id="auth" 
                className="mt-1 w-5 h-5 rounded-md border-gray-300 text-[#1E5AA8] focus:ring-[#1E5AA8]/20" 
                defaultChecked
              />
              <label htmlFor="auth" className="text-xs text-gray-500 leading-normal">
                I authorize ePathshala to contact me. This overrides DND.
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] font-extrabold py-5 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group mt-4 uppercase">
              SUBMIT REQUEST <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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
