import React from 'react';
import Hero from './sections/Hero';
import FeatureStrip from './sections/FeatureStrip';
import Programs from './sections/Programs';
import StatsCounter from './sections/StatsCounter';
import WhyChoose from './sections/WhyChoose';
import CTASection from '@/components/EnrollCTA/CTASection';

export default function SportsShalaScreen() {
  return (
    <div className="font-body overflow-x-hidden">
      <Hero />
      <FeatureStrip />
      <Programs />
      <StatsCounter />
      <WhyChoose />
      <CTASection />
    </div>
  );
}
