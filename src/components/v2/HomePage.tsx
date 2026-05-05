import React from 'react';
import Hero from './Hero';
import FeaturesRow from './FeaturesRow';
import DiscoverExcellence from './DiscoverExcellence';
import AcademicPrograms from './AcademicPrograms';
import Stats from './Stats';
import Testimonials from './Testimonials';
import CTASection from './CTASection';

const HomePageV2 = () => {
  return (
    <div className="font-sans antialiased text-[#1F2937] bg-[#F5F7FA] min-h-screen">
      <main>
        <Hero />
        <FeaturesRow />
        <DiscoverExcellence />
        <AcademicPrograms />
        <Stats />
        <Testimonials />
        <CTASection />
      </main>
    </div>
  );
};

export default HomePageV2;
