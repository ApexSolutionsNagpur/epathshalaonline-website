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

  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "hi">(initialLang);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <ThankYouScreen language={selectedLanguage} />;
  }

  if (!videoCompleted || !showWizard) {
    return (
      <VideoGate
        language={selectedLanguage}
        onComplete={() => {
          setVideoCompleted(true);
          setShowWizard(true);
        }}
      />
    );
  }

  return (
    <SurveyWizard
      language={selectedLanguage}
      initialSchoolName={schoolParam || undefined}
      isActive={showWizard}
      onSubmitComplete={() => setSubmitted(true)}
    />
  );
}

export default function SurveyFormScreen() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F7FA]" />}>
      <SurveyFormInner />
    </Suspense>
  );
}
