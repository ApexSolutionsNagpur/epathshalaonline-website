"use client";

import React from 'react';
import Hero from './Hero';
import RecognizedSchool from './RecognizedSchool';
import FeaturesRow from './FeaturesRow';
import DiscoverExcellence from './DiscoverExcellence';
import AcademicPrograms from './AcademicPrograms';
import SuccessSection from './SuccessSection';
import Stats from './Stats';
import Testimonials from './Testimonials';
import AdmissionsOpen from './AdmissionsOpen';
import FacilitiesSection from './FacilitiesSection';
import DemoClassModal from './DemoClassModal';
import { useFirstScrollPopup } from '@/hooks/useFirstScrollPopup';
import CTASection from '../EnrollCTA/CTASection';

const HomePageV2 = () => {
  const { isOpen, closeModal } = useFirstScrollPopup(500);

  return (
    <div className="font-sans antialiased text-[#1F2937] bg-[#F5F7FA] min-h-screen">
      <main>
        <Hero />
        <FeaturesRow />
        <DiscoverExcellence />
        <AcademicPrograms />
        <AdmissionsOpen />
        <RecognizedSchool />
        <SuccessSection />
        <FacilitiesSection />
        <Stats />
        <Testimonials />
        <CTASection />
      </main>

      <DemoClassModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default HomePageV2;
