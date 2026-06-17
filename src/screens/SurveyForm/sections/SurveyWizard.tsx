'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { surveyTranslations } from '@/lib/surveyTranslations';
import { trackEvent } from '@/lib/trackEvent';
import type { Language, SurveyData, Step } from '@/types/survey';
import StepStudentDetails from './steps/StepStudentDetails';
import StepParentDetails from './steps/StepParentDetails';
import StepTechConnectivity from './steps/StepTechConnectivity';
import StepOnlineLearningOpinion from './steps/StepOnlineLearningOpinion';
import StepReviewSubmit from './steps/StepReviewSubmit';

interface SurveyWizardProps {
  language: Language;
  initialSchoolName?: string;
  isActive?: boolean;
  onSubmitComplete: () => void;
}

const TOTAL_STEPS = 5;

const INITIAL_DATA: SurveyData = {
  studentName: '',
  grade: '',
  schoolName: '',
  section: '',
  parentName: '',
  relationship: 'father',
  mobile: '',
  whatsappAvailable: false,
  email: '',
  devices: [],
  devicesCount: '',
  internetAtHome: '',
  internetType: '',
  internetSpeed: '',
  dailyUsage: '',
  awareOfOnline: '',
  childTakenClass: '',
  opinion: '',
  concerns: [],
  anticipatedIssues: '',
  rating: 0,
};

const SurveyWizard = ({ language, initialSchoolName, isActive, onSubmitComplete }: SurveyWizardProps) => {
  const t = surveyTranslations[language];
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    ...INITIAL_DATA,
    schoolName: initialSchoolName || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formStartedRef = useRef(false);
  const wizardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll to wizard when it becomes active
    if (isActive && wizardRef.current) {
      wizardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isActive]);

  const updateField = useCallback(
    <K extends keyof SurveyData>(field: K, value: SurveyData[K]) => {
      // Auto-format mobile with +91 if not present and is being edited
      if (field === 'mobile' && typeof value === 'string') {
        const numericVal = value.replace(/\D/g, '');
        // If it starts with 91 and is more than 10 digits, we might assume it has country code
        // But to keep it simple as requested "auto-format with +91" in UI (though the field is just string)
        // Let's just store the value and handle it in validation/submission.
      }

      setSurveyData((prev) => ({ ...prev, [field]: value }));

      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }

      if (!formStartedRef.current) {
        formStartedRef.current = true;
        trackEvent('form_start', { form: 'survey_2026' });
      }
    },
    [errors],
  );

  const validateStep = useCallback(
    (step: Step): boolean => {
      const newErrors: Record<string, string> = {};

      switch (step) {
        case 1: {
          if (!surveyData.studentName.trim())
            newErrors.studentName = `${t.studentNameLabel} ${t.required}`;
          if (!surveyData.grade)
            newErrors.grade = `${t.gradeLabel} ${t.required}`;
          if (!surveyData.schoolName.trim())
            newErrors.schoolName = `${t.schoolNameLabel} ${t.required}`;
          break;
        }
        case 2: {
          if (!surveyData.parentName.trim())
            newErrors.parentName = `${t.parentNameLabel} ${t.required}`;
          if (!surveyData.relationship)
            newErrors.relationship = `${t.relationshipLabel} ${t.required}`;
          
          let phoneDigits = surveyData.mobile.replace(/\D/g, '');
          if (phoneDigits.startsWith('91') && phoneDigits.length === 12) {
             phoneDigits = phoneDigits.substring(2);
          }

          if (!surveyData.mobile.trim()) {
            newErrors.mobile = `${t.mobileLabel} ${t.required}`;
          } else if (phoneDigits.length !== 10 || !/^[6-9]\d{9}$/.test(phoneDigits)) {
            newErrors.mobile = t.invalidPhone;
          }
          if (surveyData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(surveyData.email)) {
            newErrors.email = t.invalidEmail;
          }
          break;
        }
        case 3: {
          break;
        }
        case 4: {
          if (surveyData.anticipatedIssues.length > 200) {
            newErrors.anticipatedIssues = t.maxChars;
          }
          break;
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [surveyData, t],
  );

  const handleNext = useCallback(() => {
    if (!validateStep(currentStep)) return;
    trackEvent('survey_step_complete', { step: currentStep, form: 'survey_2026' });
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS) as Step);
    if (wizardRef.current) {
      wizardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep, validateStep]);

  const handleBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1) as Step);
    if (wizardRef.current) {
      wizardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const goToStep = useCallback((step: Step) => {
    setCurrentStep(step);
    if (wizardRef.current) {
      wizardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const progressPercent = ((currentStep - 1) / TOTAL_STEPS) * 100;

  const stepLabels = [
    t.step1Title,
    t.step2Title,
    t.step3Title,
    t.step4Title,
    t.step5Title,
  ];

  return (
    <section id="survey-wizard" ref={wizardRef} className="py-8 px-4 md:px-14">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Progress bar */}
          <div className="h-1.5 bg-gray-100">
            <div
              className="h-full bg-[#1E5AA8] transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Step indicator */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between">
              {stepLabels.map((label, index) => {
                const stepNum = (index + 1) as Step;
                const isActive = stepNum === currentStep;
                const isCompleted = stepNum < currentStep;
                return (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#0B3C5D] text-white shadow-md scale-110'
                          : isCompleted
                            ? 'bg-[#1E5AA8] text-white'
                            : 'bg-gray-100 text-gray-400'
                      }`}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      {isCompleted ? '✓' : stepNum}
                    </div>
                    <span
                      className={`text-[10px] font-medium hidden md:block ${
                        isActive ? 'text-[#0B3C5D]' : 'text-gray-400'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step content */}
          <div className="px-6 pb-6">
            <div className="mb-6">
              <h2 className="text-xl font-extrabold text-[#0B3C5D] font-heading">
                {t.step} {currentStep} {t.of} {TOTAL_STEPS}: {stepLabels[currentStep - 1]}
              </h2>
            </div>

            {currentStep === 1 && (
              <StepStudentDetails
                data={surveyData}
                onChange={updateField}
                errors={errors}
                language={language}
              />
            )}
            {currentStep === 2 && (
              <StepParentDetails
                data={surveyData}
                onChange={updateField}
                errors={errors}
                language={language}
              />
            )}
            {currentStep === 3 && (
              <StepTechConnectivity
                data={surveyData}
                onChange={updateField}
                errors={errors}
                language={language}
              />
            )}
            {currentStep === 4 && (
              <StepOnlineLearningOpinion
                data={surveyData}
                onChange={updateField}
                errors={errors}
                language={language}
              />
            )}
            {currentStep === 5 && (
              <StepReviewSubmit
                data={surveyData}
                language={language}
                onGoToStep={goToStep}
                onSubmitComplete={onSubmitComplete}
              />
            )}

            {/* Navigation */}
            {currentStep < TOTAL_STEPS && (
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                    currentStep === 1
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-[#6B7280] hover:text-[#0B3C5D] hover:bg-gray-50'
                  }`}
                  aria-label={t.back}
                >
                  <ChevronLeft size={18} />
                  {t.back}
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] font-bold rounded-xl shadow-lg hover:scale-105 transition-all"
                  aria-label={t.next}
                >
                  {t.next}
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyWizard;
