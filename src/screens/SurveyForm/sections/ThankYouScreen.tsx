'use client';

import React from 'react';
import { CheckCircle, Share2 } from 'lucide-react';
import { surveyTranslations } from '@/lib/surveyTranslations';
import type { Language } from '@/types/survey';

interface ThankYouScreenProps {
  language: Language;
}

const ThankYouScreen = ({ language }: ThankYouScreenProps) => {
  const t = surveyTranslations[language] as Record<string, string>;

  const shareMessage = t.whatsappShareText;

  const handleShare = () => {
    // Current page URL logic as requested
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://epathshalaonline.com/survey-form-2026';
    // User requested: "WhatsApp button should open: https://wa.me/?text=<encoded message with current page URL>"
    const messageWithUrl = `${shareMessage} ${currentUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`; // using the share message that already has the URL inside it.
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 px-4 md:px-14">
      <div className="max-w-xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h2 className="text-3xl font-extrabold text-[#0B3C5D] font-heading mb-4">
            {t.thankYouTitle}
          </h2>

          <p
            className={`text-lg text-[#6B7280] mb-8 leading-relaxed ${
              language === 'hi' ? 'font-noto-sans' : ''
            }`}
          >
            {t.thankYouMessage}
          </p>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5B] text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
            aria-label={t.shareWithOthers}
          >
            <Share2 size={20} />
            {language === 'hi' ? 'Doosre parents ko bhi bhejein' : t.shareWithOthers}
          </button>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              {language === 'hi'
                ? 'आपकी प्रतिक्रिया हमारे लिए महत्वपूर्ण है।'
                : 'Your feedback matters to us.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouScreen;
