'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { surveyTranslations } from '@/lib/surveyTranslations';
import type { Language, SurveyData } from '@/types/survey';

interface StepOnlineLearningOpinionProps {
  data: SurveyData;
  onChange: <K extends keyof SurveyData>(field: K, value: SurveyData[K]) => void;
  errors: Record<string, string>;
  language: Language;
}

const OPINION_KEYS = ['veryPositive', 'positive', 'neutral', 'concerned', 'veryConcerned'] as const;
const CONCERN_KEYS = [
  'screenTime',
  'cost',
  'distraction',
  'noInternet',
  'preferOffline',
  'noneConcern',
] as const;

function RadioGroup({
  label,
  options,
  value,
  onChange,
  name,
  t,
  cols = 3,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (key: string) => void;
  name: string;
  t: Record<string, string>;
  cols?: number;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</p>
      <div
        className={`grid gap-2`}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {options.map((key) => (
          <label
            key={key}
            className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl border cursor-pointer transition-all text-center ${
              value === key
                ? 'bg-[#0B3C5D] text-white border-[#0B3C5D]'
                : 'bg-[#F8F9FA] text-[#1F2937] border-gray-100 hover:border-gray-200'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={key}
              checked={value === key}
              onChange={() => onChange(key)}
              className="sr-only"
              aria-label={t[key]}
            />
            <span className="text-sm font-medium">{t[key]}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

const StepOnlineLearningOpinion = ({
  data,
  onChange,
  errors,
  language,
}: StepOnlineLearningOpinionProps) => {
  const t = surveyTranslations[language] as Record<string, string>;

  const toggleConcern = (concern: string) => {
    if (concern === 'noneConcern') {
      onChange('concerns', data.concerns.includes('noneConcern') ? [] : ['noneConcern']);
      return;
    }
    const filtered = data.concerns.filter((c) => c !== 'noneConcern');
    const idx = filtered.indexOf(concern);
    if (idx >= 0) {
      filtered.splice(idx, 1);
    } else {
      filtered.push(concern);
    }
    onChange('concerns', filtered);
  };

  return (
    <div className="space-y-6">
      {/* Awareness */}
      <RadioGroup
        label={t.awareOfOnlineLabel}
        options={['yes', 'no', 'somewhat']}
        value={data.awareOfOnline}
        onChange={(v) => onChange('awareOfOnline', v)}
        name="awareOfOnline"
        t={t}
        cols={3}
      />

      {/* Child taken online class */}
      <RadioGroup
        label={t.childTakenClassLabel}
        options={['yes', 'no']}
        value={data.childTakenClass}
        onChange={(v) => onChange('childTakenClass', v)}
        name="childTakenClass"
        t={t}
        cols={2}
      />

      {/* Opinion */}
      <RadioGroup
        label={t.opinionLabel}
        options={OPINION_KEYS}
        value={data.opinion}
        onChange={(v) => onChange('opinion', v)}
        name="opinion"
        t={t}
        cols={3}
      />

      {/* Concerns (multi-checkbox) */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          {t.concernsLabel}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {CONCERN_KEYS.map((key) => {
            const isSelected = data.concerns.includes(key);
            return (
              <label
                key={key}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#0B3C5D] text-white border-[#0B3C5D]'
                    : 'bg-[#F8F9FA] text-[#1F2937] border-gray-100 hover:border-gray-200'
                } ${key === 'noneConcern' ? 'col-span-full md:col-span-1' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleConcern(key)}
                  className="sr-only"
                  aria-label={t[key]}
                />
                <div
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                    isSelected ? 'bg-white border-white' : 'bg-transparent border-gray-300'
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="w-3 h-3 text-[#0B3C5D]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium">{t[key]}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Anticipated issues (textarea) */}
      <div className="space-y-1.5">
        <label
          htmlFor="anticipatedIssues"
          className="text-xs font-bold text-gray-500 uppercase tracking-wider"
        >
          {t.anticipatedIssuesLabel}
        </label>
        <textarea
          id="anticipatedIssues"
          value={data.anticipatedIssues}
          onChange={(e) => {
            if (e.target.value.length <= 200) {
              onChange('anticipatedIssues', e.target.value);
            }
          }}
          placeholder={t.anticipatedIssuesPlaceholder}
          rows={3}
          className={`w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border ${
            errors.anticipatedIssues ? 'border-red-300' : 'border-gray-100'
          } text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all resize-none`}
          aria-describedby={
            errors.anticipatedIssues ? 'anticipatedIssues-error' : 'chars-left'
          }
        />
        <div className="flex justify-between items-center">
          {errors.anticipatedIssues && (
            <p id="anticipatedIssues-error" className="text-xs text-red-500">
              {errors.anticipatedIssues}
            </p>
          )}
          <p id="chars-left" className="text-xs text-gray-400 ml-auto">
            {200 - data.anticipatedIssues.length} {t.charsLeft}
          </p>
        </div>
      </div>

      {/* Star rating */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          {t.ratingLabel}
        </p>
        <div className="flex gap-2" role="radiogroup" aria-label={t.ratingLabel}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onChange('rating', star)}
              className="transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FFC107]/50 rounded"
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
              role="radio"
              aria-checked={data.rating === star}
            >
              <Star
                className={`w-8 h-8 md:w-10 md:h-10 transition-all ${
                  star <= data.rating
                    ? 'fill-[#FFC107] text-[#FFC107]'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepOnlineLearningOpinion;
