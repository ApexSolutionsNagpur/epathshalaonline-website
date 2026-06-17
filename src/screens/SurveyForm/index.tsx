'use client';

import React, { useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SurveyHero from './sections/SurveyHero';
import VideoGate from './sections/VideoGate';
import SurveyWizard from './sections/SurveyWizard';
import ThankYouScreen from './sections/ThankYouScreen';
import type { Language } from '@/types/survey';

function SurveyFormInner() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang');
  const schoolParam = searchParams.get('school');
  const initialLang: Language = langParam === 'hi' ? 'hi' : 'en';

  const [language, setLanguage] = useState<Language>(initialLang);
  const [videoWatched, setVideoWatched] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWizard, setShowWizard] = useState(false);

  const handleVideoComplete = useCallback(() => {
    setVideoWatched(true);
  }, []);

  const handleSubmitComplete = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  return (
    <div className="font-body selection:bg-[#FFC107]/30 selection:text-[#1F2937]">
      {!showWizard && !isSubmitted && (
        <>
          <SurveyHero language={language} onLanguageChange={setLanguage} />
          <VideoGate 
            language={language} 
            onVideoComplete={handleVideoComplete} 
            onStartWizard={() => setShowWizard(true)}
          />
        </>
      )}  

      {isSubmitted ? (
        <ThankYouScreen language={language} />
      ) : (
        <div
          className={`transition-all duration-700 ${
            !showWizard
              ? 'opacity-30 pointer-events-none blur-sm select-none'
              : ''
          }`}
        >
          <SurveyWizard
            language={language}
            initialSchoolName={schoolParam || undefined}
            isActive={showWizard}
            onSubmitComplete={handleSubmitComplete}
          />
        </div>
      )}
    </div>
  );
}

export default function SurveyFormScreen() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F7FA]" />}>
      <SurveyFormInner />
    </Suspense>
  );
}
