'use client';

import React from 'react';
import { surveyTranslations } from '@/lib/surveyTranslations';
import type { Language, SurveyData } from '@/types/survey';

interface StepParentDetailsProps {
  data: SurveyData;
  onChange: <K extends keyof SurveyData>(field: K, value: SurveyData[K]) => void;
  errors: Record<string, string>;
  language: Language;
}

const RELATIONS = ['father', 'mother', 'guardian'] as const;

const StepParentDetails = ({ data, onChange, errors, language }: StepParentDetailsProps) => {
  const t = surveyTranslations[language];

  return (
    <div className="space-y-5">
      {/* Parent name */}
      <div className="space-y-1.5">
        <label
          htmlFor="parentName"
          className="text-xs font-bold text-gray-500 uppercase tracking-wider"
        >
          {t.parentNameLabel} <span className="text-red-400">*</span>
        </label>
        <input
          id="parentName"
          type="text"
          value={data.parentName}
          onChange={(e) => onChange('parentName', e.target.value)}
          placeholder={t.parentNamePlaceholder}
          className={`w-full h-12 px-5 rounded-xl bg-[#F8F9FA] border ${
            errors.parentName ? 'border-red-300' : 'border-gray-100'
          } text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
          aria-describedby={errors.parentName ? 'parentName-error' : undefined}
        />
        {errors.parentName && (
          <p id="parentName-error" className="text-xs text-red-500">
            {errors.parentName}
          </p>
        )}
      </div>

      {/* Relationship */}
      <fieldset className="space-y-2">
        <legend className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          {t.relationshipLabel} <span className="text-red-400">*</span>
        </legend>
        <div className="flex gap-3">
          {RELATIONS.map((rel) => (
            <label
              key={rel}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                data.relationship === rel
                  ? 'bg-[#0B3C5D] text-white border-[#0B3C5D]'
                  : 'bg-[#F8F9FA] text-[#1F2937] border-gray-100 hover:border-gray-200'
              }`}
            >
              <input
                type="radio"
                name="relationship"
                value={rel}
                checked={data.relationship === rel}
                onChange={(e) =>
                  onChange(
                    'relationship',
                    e.target.value as 'father' | 'mother' | 'guardian',
                  )
                }
                className="sr-only"
                aria-label={t[rel]}
              />
              <span className="text-sm font-medium">{t[rel]}</span>
            </label>
          ))}
        </div>
        {errors.relationship && (
          <p className="text-xs text-red-500">{errors.relationship}</p>
        )}
      </fieldset>

      {/* Mobile */}
      <div className="space-y-1.5">
        <label
          htmlFor="mobile"
          className="text-xs font-bold text-gray-500 uppercase tracking-wider"
        >
          {t.mobileLabel} <span className="text-red-400">*</span>
        </label>
        <div className="flex gap-3">
          <div className="w-[80px] h-12 flex items-center justify-center rounded-xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-bold text-sm shrink-0">
            +91
          </div>
          <div className="flex-1">
            <input
              id="mobile"
              type="tel"
              value={data.mobile}
              onChange={(e) =>
                onChange('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))
              }
              placeholder="9876543210"
              maxLength={10}
              className={`w-full h-12 px-5 rounded-xl bg-[#F8F9FA] border ${
                errors.mobile ? 'border-red-300' : 'border-gray-100'
              } text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
              aria-describedby={errors.mobile ? 'mobile-error' : undefined}
            />
          </div>
        </div>
        {errors.mobile && (
          <p id="mobile-error" className="text-xs text-red-500">
            {errors.mobile}
          </p>
        )}
      </div>

      {/* WhatsApp checkbox */}
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={data.whatsappAvailable}
          onChange={(e) => onChange('whatsappAvailable', e.target.checked)}
          className="w-5 h-5 rounded-md border-gray-300 text-[#1E5AA8] focus:ring-[#1E5AA8]/20"
        />
        <span className="text-sm text-[#6B7280] group-hover:text-[#1F2937] transition-colors">
          {t.whatsappCheckbox}
        </span>
      </label>

      {/* Email */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-xs font-bold text-gray-500 uppercase tracking-wider"
        >
          {t.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder={t.emailPlaceholder}
          className={`w-full h-12 px-5 rounded-xl bg-[#F8F9FA] border ${
            errors.email ? 'border-red-300' : 'border-gray-100'
          } text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>
    </div>
  );
};

export default StepParentDetails;
