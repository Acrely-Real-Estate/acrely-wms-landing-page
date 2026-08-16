import React from 'react';
import { ArrowRight, Lock, CheckCircle2, QrCode, Building2, Users, Database, Zap, Smartphone, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

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

          {/* Right Column: Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-white border border-[#E5E7EB] shadow-2xl overflow-hidden aspect-[4/3] flex flex-col -rotate-1 hover:rotate-0 transition-transform duration-500">
              
              {/* Fake Window Header */}
              <div className="h-10 bg-slate-100 border-b border-[#E5E7EB] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-500 shadow-xs">
                    <Lock className="w-3 h-3 text-slate-400" />
                    demo.acrelywms.com
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content Mockup */}
              <div className="flex-1 bg-slate-50 p-3 sm:p-5 flex gap-4">
                 {/* Sidebar Mockup */}
                 <div className="w-1/4 bg-white rounded-xl border border-slate-200 p-3 hidden sm:flex flex-col gap-3 shadow-sm">
                   <div className="h-4 w-2/3 bg-slate-200 rounded mb-4" />
                   <div className="h-8 bg-blue-50 rounded-lg border border-blue-100" />
                   <div className="h-8 bg-slate-50 rounded-lg" />
                   <div className="h-8 bg-slate-50 rounded-lg" />
                   <div className="h-8 bg-slate-50 rounded-lg" />
                   <div className="h-8 bg-slate-50 rounded-lg" />
                   <div className="mt-auto h-8 bg-slate-50 rounded-lg" />
                 </div>
                 
                 {/* Main Content Mockup */}
                 <div className="flex-1 flex flex-col gap-4">
                   <div className="flex justify-between items-center">
                     <div className="h-6 w-32 bg-slate-200 rounded" />
                     <div className="h-8 w-24 bg-[#1E40AF] rounded-lg shadow-sm" />
                   </div>
                   {/* Stats Grid Mockup */}
                   <div className="grid grid-cols-3 gap-3">
                     {[1, 2, 3].map((i) => (
                       <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col gap-2">
                         <div className="h-3 w-1/2 bg-slate-200 rounded" />
                         <div className="h-6 w-3/4 bg-slate-800 rounded" />
                       </div>
                     ))}
                   </div>
                   {/* Table Mockup */}
                   <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                     <div className="h-10 border-b border-slate-100 bg-slate-50 flex items-center px-2 sm:px-4 gap-2 sm:gap-4">
                       <div className="h-3 w-6 sm:w-8 bg-slate-200 rounded shrink-0" />
                       <div className="h-3 w-16 sm:w-20 bg-slate-200 rounded shrink-0" />
                       <div className="h-3 w-16 bg-slate-200 rounded hidden sm:block shrink-0" />
                       <div className="h-3 w-10 sm:w-12 bg-slate-200 rounded ml-auto shrink-0" />
                     </div>
                     <div className="flex-1 p-2 sm:p-4 flex flex-col gap-4">
                       {[1, 2, 3, 4].map((i) => (
                         <div key={i} className="flex items-center gap-2 sm:gap-4 border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                           <div className="h-3 w-6 sm:w-8 bg-slate-100 rounded shrink-0" />
                           <div className="h-3 w-16 sm:w-24 bg-slate-100 rounded shrink-0" />
                           <div className="h-3 w-20 sm:w-32 bg-slate-50 rounded hidden sm:block shrink-0" />
                           <div className="h-4 w-10 sm:w-12 bg-emerald-100 rounded-full ml-auto shrink-0" />
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
              </div>

            </div>
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
                <indicator.icon className="w-5 h-5 text-[#1E40AF]" />
                <span className="font-semibold text-sm sm:text-base">{indicator.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
