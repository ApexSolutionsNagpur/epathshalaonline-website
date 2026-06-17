'use client';

import React from 'react';
import Image from 'next/image';
import { surveyTranslations } from '@/lib/surveyTranslations';
import type { Language } from '@/types/survey';

interface SurveyHeroProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const SurveyHero = ({ language, onLanguageChange }: SurveyHeroProps) => {
  const t = surveyTranslations[language];

  return (
    <section className="bg-white py-8 md:py-12 px-4 md:px-14">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl md:text-2xl font-extrabold text-[#0B3C5D] font-heading">
              {t.heroTitle}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#F5F7FA] rounded-full p-1 flex">
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${language === 'hi'
                  ? 'bg-[#0B3C5D] text-white shadow-sm'
                  : 'text-[#6B7280] hover:text-[#0B3C5D]'
                  }`}
                aria-label="हिंदी"
              >
                {t.langHindi}
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${language === 'en'
                  ? 'bg-[#0B3C5D] text-white shadow-sm'
                  : 'text-[#6B7280] hover:text-[#0B3C5D]'
                  }`}
                aria-label="English"
              >
                {t.langEnglish}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p
            className={`text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto ${language === 'hi' ? 'font-noto-sans' : ''
              }`}
          >
            {t.heroSubtext}
          </p>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mt-4 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default SurveyHero;
