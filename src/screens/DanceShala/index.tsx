'use client';
import React from 'react';
import HeroSection from './sections/HeroSection';
import FeatureStrip from './sections/FeatureStrip';
import ProgramsSection from './sections/ProgramsSection';
import StatsSection from './sections/StatsSection';
import WhyChooseSection from './sections/WhyChooseSection';
import CTASection from '@/components/EnrollCTA/CTASection';

const DanceShalaScreen = () => {
  return (
    <div className="font-body selection:bg-dance-peach selection:text-dance-orange">
      <HeroSection />
      <FeatureStrip />
      <ProgramsSection />
      <StatsSection />
      <div className='overflow-hidden bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: "url('/images/danceshala/whychooseimg.png')" }} >
        <WhyChooseSection />
        <CTASection />
      </div>
    </div>
  );
};

export default DanceShalaScreen;
