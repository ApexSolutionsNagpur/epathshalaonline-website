import React from 'react';
import Hero from './sections/Hero';
import FeatureStrip from './sections/FeatureStrip';
import Programs from './sections/Programs';
import StatsStrip from './sections/StatsStrip';
import WhyChoose from './sections/WhyChoose';
import AdmissionCTA from '@/components/EnrollCTA/CTASection';

export default function AIRoboticsShalaScreen() {
  return (
    <div className="font-body overflow-x-hidden">
      <Hero />
      <FeatureStrip />
      <Programs />
      <StatsStrip />
      <WhyChoose />
      <AdmissionCTA />
    </div>
  );
}
