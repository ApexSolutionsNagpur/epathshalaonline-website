import React from 'react';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import ProgramsSection from './sections/ProgramsSection';
import WhyChooseSection from './sections/WhyChooseSection';
import StatsSection from './sections/StatsSection';

export default function ArtShalaScreen() {
  return (
    <div className="font-heading overflow-x-hidden selection:bg-pink-100 selection:text-[#ff4f87]">
      <HeroSection />
      <ExperienceSection />
      <ProgramsSection />
      <WhyChooseSection />
      <StatsSection />
    </div>
  );
}
