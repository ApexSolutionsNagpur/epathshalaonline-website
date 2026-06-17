'use client';

import React, { useState } from 'react';
import { Loader2, AlertCircle, Edit3 } from 'lucide-react';
import { surveyTranslations } from '@/lib/surveyTranslations';
import { submitSurvey } from '@/services/surveyService';
import { trackEvent } from '@/lib/trackEvent';
import type { Language, SurveyData, Step } from '@/types/survey';

interface StepReviewSubmitProps {
  data: SurveyData;
  language: Language;
  onGoToStep: (step: Step) => void;
  onSubmitComplete: () => void;
}

const LABEL_MAP: Record<string, keyof typeof surveyTranslations.en> = {
  father: 'father',
  mother: 'mother',
  guardian: 'guardian',
  yes: 'yes',
  no: 'no',
  somewhat: 'somewhat',
  veryPositive: 'veryPositive',
  positive: 'positive',
  neutral: 'neutral',
  concerned: 'concerned',
  veryConcerned: 'veryConcerned',
  smartphone: 'smartphone',
  tablet: 'tablet',
  laptop: 'laptop',
  desktop: 'desktop',
  none: 'none',
  count1: 'count1',
  count2: 'count2',
  count3plus: 'count3plus',
  mobileData: 'mobileData',
  broadband: 'broadband',
  both: 'both',
  fast: 'fast',
  average: 'average',
  slow: 'slow',
  dontKnow: 'dontKnow',
  lessThan1hr: 'lessThan1hr',
  hr1to3: 'hr1to3',
  hr3to5: 'hr3to5',
  moreThan5hr: 'moreThan5hr',
  screenTime: 'screenTime',
  cost: 'cost',
  distraction: 'distraction',
  noInternet: 'noInternet',
  preferOffline: 'preferOffline',
  noneConcern: 'noneConcern',
};

function resolveLabel(t: Record<string, string>, value: string): string {
  if (!value) return '—';
  const mappedKey = LABEL_MAP[value];
  if (mappedKey && t[mappedKey]) return t[mappedKey];
  return value;
}

const StepReviewSubmit = ({
  data,
  language,
  onGoToStep,
  onSubmitComplete,
}: StepReviewSubmitProps) => {
  const t = surveyTranslations[language] as Record<string, string>;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const gradeLabel =
    data.grade === 'Nursery'
      ? t.nursery
      : data.grade === 'KG'
        ? t.kg
        : data.grade;

  const sections: { step: Step; title: string; fields: { label: string; value: string }[] }[] = [
    {
      step: 1,
      title: t.step1Title,
      fields: [
        { label: t.studentNameLabel, value: data.studentName || '—' },
        { label: t.gradeLabel, value: gradeLabel || '—' },
        { label: t.schoolNameLabel, value: data.schoolName || '—' },
        { label: t.sectionLabel, value: data.section || '—' },
      ],
    },
    {
      step: 2,
      title: t.step2Title,
      fields: [
        { label: t.parentNameLabel, value: data.parentName || '—' },
        { label: t.relationshipLabel, value: resolveLabel(t, data.relationship) },
        { label: t.mobileLabel, value: data.mobile ? `+91 ${data.mobile}` : '—' },
        { label: t.whatsappCheckbox, value: data.whatsappAvailable ? '✓' : '—' },
        { label: t.emailLabel, value: data.email || '—' },
      ],
    },
    {
      step: 3,
      title: t.step3Title,
      fields: [
        {
          label: t.devicesLabel,
          value:
            data.devices.length > 0
              ? data.devices.map((d) => resolveLabel(t, d)).join(', ')
              : '—',
        },
        {
          label: t.devicesCountLabel,
          value: resolveLabel(t, data.devicesCount),
        },
        {
          label: t.internetAtHomeLabel,
          value: resolveLabel(t, data.internetAtHome),
        },
        ...(data.internetAtHome === 'yes'
          ? [
              {
                label: t.internetTypeLabel,
                value: resolveLabel(t, data.internetType),
              } as const,
            ]
          : []),
        {
          label: t.internetSpeedLabel,
          value: resolveLabel(t, data.internetSpeed),
        },
        {
          label: t.dailyUsageLabel,
          value: resolveLabel(t, data.dailyUsage),
        },
      ],
    },
    {
      step: 4,
      title: t.step4Title,
      fields: [
        {
          label: t.awareOfOnlineLabel,
          value: resolveLabel(t, data.awareOfOnline),
        },
        {
          label: t.childTakenClassLabel,
          value: resolveLabel(t, data.childTakenClass),
        },
        { label: t.opinionLabel, value: resolveLabel(t, data.opinion) },
        {
          label: t.concernsLabel,
          value:
            data.concerns.length > 0
              ? data.concerns.map((c) => resolveLabel(t, c)).join(', ')
              : '—',
        },
        {
          label: t.anticipatedIssuesLabel,
          value: data.anticipatedIssues || '—',
        },
        {
          label: t.ratingLabel,
          value:
            data.rating > 0
              ? `${'★'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)}`
              : '—',
        },
      ],
    },
  ];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitSurvey({
        student_name: data.studentName,
        grade: data.grade,
        school_name: data.schoolName,
        section: data.section,
        parent_name: data.parentName,
        relationship: data.relationship,
        mobile: data.mobile,
        whatsapp_available: data.whatsappAvailable,
        email: data.email,
        devices: data.devices,
        devices_count: data.devicesCount,
        internet_at_home: data.internetAtHome,
        internet_type: data.internetType,
        internet_speed: data.internetSpeed,
        daily_usage: data.dailyUsage,
        aware_of_online: data.awareOfOnline,
        child_taken_class: data.childTakenClass,
        opinion: data.opinion,
        concerns: data.concerns,
        anticipated_issues: data.anticipatedIssues,
        rating: data.rating,
        language,
      });

      trackEvent('form_submit', { form: 'survey_2026', language });
      onSubmitComplete();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.step} className="bg-[#F8F9FA] rounded-xl p-4 md:p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-[#0B3C5D]">{section.title}</h3>
            <button
              type="button"
              onClick={() => onGoToStep(section.step)}
              className="flex items-center gap-1 text-xs font-bold text-[#1E5AA8] hover:text-[#0B3C5D] transition-colors"
              aria-label={`${t.backToEdit} ${section.title}`}
            >
              <Edit3 size={14} />
              {t.backToEdit}
            </button>
          </div>
          <div className="space-y-2">
            {section.fields.map((field) => (
              <div key={field.label} className="flex justify-between items-start gap-4">
                <span className="text-xs text-[#6B7280] shrink-0 max-w-[50%]">
                  {field.label}
                </span>
                <span className="text-xs font-medium text-[#1F2937] text-right break-words max-w-[50%]">
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {submitError && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 text-red-700 border border-red-100">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{submitError}</p>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`w-full ${
          isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FFC107] hover:bg-[#E0A800]'
        } text-[#1F2937] font-extrabold py-5 rounded-2xl shadow-lg transform ${
          !isSubmitting && 'hover:scale-[1.02]'
        } transition-all flex items-center justify-center gap-3 mt-4 uppercase`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            {t.submitting}
          </>
        ) : (
          t.submit
        )}
      </button>
    </div>
  );
};

export default StepReviewSubmit;
