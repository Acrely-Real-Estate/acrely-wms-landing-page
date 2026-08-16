import React from 'react';
import { Hero } from '../components/Hero';
import { WhyAcrelySection } from '../components/WhyAcrelySection';
import { OperationalWorkflow } from '../components/OperationalWorkflow';
import { ZetaSection } from '../components/ZetaSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { ROICalculatorSection } from '../components/ROICalculatorSection';
import { BookDemoSection } from '../components/docs/BookDemoSection';

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <OperationalWorkflow />
      <ZetaSection />
      <WhyAcrelySection />
      <ROICalculatorSection />
      <IndustriesSection />
      <BookDemoSection />
    </div>
  );
};
