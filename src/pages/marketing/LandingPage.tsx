import React from 'react';
import { Hero } from '../../components/sections/Hero';
import { WhyAcrelySection } from '../../components/sections/WhyAcrelySection';
import { OperationalWorkflow } from '../../components/sections/OperationalWorkflow';
import { ZetaSection } from '../../components/sections/ZetaSection';
import { IndustriesSection } from '../../components/sections/IndustriesSection';
import { ROICalculatorSection } from '../../components/sections/ROICalculatorSection';
import { BookDemoSection } from '../../components/sections/BookDemoSection';

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
