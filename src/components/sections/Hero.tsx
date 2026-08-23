import React from 'react';
import { ArrowRight, Lock, CheckCircle2, QrCode, Building2, Users, Database, Zap, Smartphone, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import dashboardImage from '../../assets/hero-dashboard-app.png';

export const Hero: React.FC = () => {
  const trustIndicators = [
    { name: 'Barcode Ready', icon: QrCode },
    { name: 'Multi-Warehouse', icon: Building2 },
    { name: 'Role-Based Access', icon: Users },
    { name: 'Real-Time Inventory', icon: Database },
    { name: 'API Ready', icon: Zap },
    { name: 'Mobile Friendly', icon: Smartphone },
  ];

  const targetAudiences = [
    'Manufacturers', 'Distributors', '3PL Logistics', 'Cold Storage', 'FMCG', 'Retail Distribution', 'Wholesale'
  ];

  return (
    <section id="overview" className="pt-16 pb-16 md:pt-24 md:pb-24 border-b border-[#E5E7EB] relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
              Enterprise Warehouse Management Platform
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Warehouse Operations.<br />
              <span className="text-[#1E40AF]">Simplified.</span>
            </h1>

            {/* Target Audience & What it is */}
            <p className="text-lg text-[#334155] font-medium leading-relaxed max-w-xl">
              Built for {targetAudiences.map((aud, i) => (
                <React.Fragment key={aud}>
                  <span className="font-semibold text-[#0F172A]">{aud}</span>
                  {i < targetAudiences.length - 2 ? ', ' : i === targetAudiences.length - 2 ? ' and ' : '. '}
                </React.Fragment>
              ))}
            </p>

            {/* Supporting paragraph */}
            <p className="text-base text-[#64748B] font-normal leading-relaxed max-w-xl">
              Acrely WMS helps warehouse teams manage inventory, inbound receiving, outbound shipping, barcode operations, warehouse locations, stock movements and order fulfillment from one modern enterprise platform.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative">
              
              {/* Primary CTA */}
<Link
  to="/book-demo"
  className="px-8 py-4 rounded-lg bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
>
  <span>Book a Demo</span>
  <ArrowRight className="w-4 h-4" />
</Link>

              {/* Secondary CTA */}
              <a
                href="https://demo.acrelywms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg bg-white hover:bg-slate-50 text-[#0F172A] border border-[#E5E7EB] hover:border-slate-300 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#1E40AF]" />
                <span>Explore the Platform (Beta)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dashboard Screenshot */}
          <div className="lg:col-span-6 relative">
            <img 
              src={dashboardImage} 
              alt="Acrely WMS Dashboard Preview" 
              className="w-full h-auto -rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>

        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-8 border-t border-[#E5E7EB]">
          <p className="text-center text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-8">
            Enterprise Capabilities
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12">
            {trustIndicators.map((indicator, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-[#334155]">
                {(() => { const Icon = indicator.icon; return Icon ? <Icon className="w-5 h-5 text-[#1E40AF]" /> : null; })()}
                <span className="font-semibold text-sm sm:text-base">{indicator.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
