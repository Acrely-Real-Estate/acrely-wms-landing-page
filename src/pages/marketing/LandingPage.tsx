import React from 'react';
import { Hero } from '../../components/sections/Hero';
import { PhilosophySection } from '../../components/sections/PhilosophySection';
import { OperationalWorkflow } from '../../components/sections/OperationalWorkflow';
import { ProductVideoSection } from '../../components/sections/ProductVideoSection';
import { WhyAcrelySection } from '../../components/sections/WhyAcrelySection';
import { ZetaSection } from '../../components/sections/ZetaSection';
import { ROICalculatorSection } from '../../components/sections/ROICalculatorSection';
import { IndustriesSection } from '../../components/sections/IndustriesSection';
import { BookDemoSection } from '../../components/sections/BookDemoSection';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <PhilosophySection />
      <OperationalWorkflow />
      <ProductVideoSection />
      <WhyAcrelySection />
      <ZetaSection />
      <ROICalculatorSection />
      <IndustriesSection />
      <BookDemoSection />
    </>
  );
};
