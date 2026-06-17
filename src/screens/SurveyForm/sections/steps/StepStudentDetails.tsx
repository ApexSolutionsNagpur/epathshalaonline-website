'use client';

import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { surveyTranslations } from '@/lib/surveyTranslations';
import type { Language, SurveyData } from '@/types/survey';

interface StepStudentDetailsProps {
  data: SurveyData;
  onChange: <K extends keyof SurveyData>(field: K, value: SurveyData[K]) => void;
  errors: Record<string, string>;
  language: Language;
}

const GRADES = ['Nursery', 'KG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const SECTIONS = ['A', 'B', 'C', 'D'];

const StepStudentDetails = ({ data, onChange, errors, language }: StepStudentDetailsProps) => {
  const t = surveyTranslations[language];
  const searchParams = useSearchParams();
  const schoolPrefill = searchParams.get('school');
  const prefilledRef = useRef(false);

  useEffect(() => {
    if (schoolPrefill && !prefilledRef.current) {
      onChange('schoolName', schoolPrefill);
      prefilledRef.current = true;
    }
  }, [schoolPrefill, onChange]);

  return (
    <div className="space-y-5">
      {/* Student name */}
      <div className="space-y-1.5">
        <label
          htmlFor="studentName"
          className="text-xs font-bold text-gray-500 uppercase tracking-wider"
        >
          {t.studentNameLabel} <span className="text-red-400">*</span>
        </label>
        <input
          id="studentName"
          type="text"
          value={data.studentName}
          onChange={(e) => onChange('studentName', e.target.value)}
          placeholder={t.studentNamePlaceholder}
          className={`w-full h-12 px-5 rounded-xl bg-[#F8F9FA] border ${
            errors.studentName ? 'border-red-300' : 'border-gray-100'
          } text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
          aria-describedby={errors.studentName ? 'studentName-error' : undefined}
        />
        {errors.studentName && (
          <p id="studentName-error" className="text-xs text-red-500">
            {errors.studentName}
          </p>
        )}
      </div>

      {/* Grade */}
      <div className="space-y-1.5">
        <label
          htmlFor="grade"
          className="text-xs font-bold text-gray-500 uppercase tracking-wider"
        >
          {t.gradeLabel} <span className="text-red-400">*</span>
        </label>
        <div className="relative group">
          <select
            id="grade"
            value={data.grade}
            onChange={(e) => onChange('grade', e.target.value)}
            className={`w-full h-12 px-5 rounded-xl bg-[#F8F9FA] border appearance-none ${
              errors.grade ? 'border-red-300' : 'border-gray-100'
            } text-[#1F2937] font-medium focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
            aria-describedby={errors.grade ? 'grade-error' : undefined}
          >
            <option value="">{t.gradePlaceholder}</option>
            {GRADES.map((g) => (
              <option key={g} value={g}>
                {g === 'Nursery' ? t.nursery : g === 'KG' ? t.kg : g}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={18}
          />
        </div>
        {errors.grade && (
          <p id="grade-error" className="text-xs text-red-500">
            {errors.grade}
          </p>
        )}
      </div>

      {/* School name */}
      <div className="space-y-1.5">
        <label
          htmlFor="schoolName"
          className="text-xs font-bold text-gray-500 uppercase tracking-wider"
        >
          {t.schoolNameLabel} <span className="text-red-400">*</span>
          {/* TODO: replace with school list dropdown once provided */}
        </label>
        <input
          id="schoolName"
          type="text"
          value={data.schoolName}
          onChange={(e) => onChange('schoolName', e.target.value)}
          placeholder={t.schoolNamePlaceholder}
          className={`w-full h-12 px-5 rounded-xl bg-[#F8F9FA] border ${
            errors.schoolName ? 'border-red-300' : 'border-gray-100'
          } text-[#1F2937] font-medium placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all`}
          aria-describedby={errors.schoolName ? 'schoolName-error' : undefined}
        />
        {errors.schoolName && (
          <p id="schoolName-error" className="text-xs text-red-500">
            {errors.schoolName}
          </p>
        )}
      </div>

      {/* Section */}
      <div className="space-y-1.5">
        <label
          htmlFor="section"
          className="text-xs font-bold text-gray-500 uppercase tracking-wider"
        >
          {t.sectionLabel}{' '}
          <span className="text-gray-400 font-normal">{t.sectionOptional}</span>
        </label>
        <div className="relative group">
          <select
            id="section"
            value={data.section}
            onChange={(e) => onChange('section', e.target.value)}
            className="w-full h-12 px-5 rounded-xl bg-[#F8F9FA] border border-gray-100 text-[#1F2937] font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#1E5AA8]/20 transition-all"
          >
            <option value="">{t.sectionPlaceholder}</option>
            {SECTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={18}
          />
        </div>
      </div>
    </div>
  );
};

export default StepStudentDetails;
