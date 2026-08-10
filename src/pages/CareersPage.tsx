import React from 'react';
import { Users, Briefcase, Globe, TrendingUp } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div className="pt-8 bg-white min-h-screen">
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-12 h-12 text-[#1E40AF] mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-6">
            Join Acrely
          </h1>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            We are building the technological foundation for modern enterprise logistics. Join a team dedicated to solving complex operational challenges with elegant software.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Briefcase className="w-10 h-10 text-[#1E40AF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Meaningful Work</h3>
              <p className="text-[#64748B]">Build software that directly impacts how global supply chains and major logistics hubs operate.</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="w-10 h-10 text-[#1E40AF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Continuous Growth</h3>
              <p className="text-[#64748B]">Work alongside experienced engineers and domain experts who prioritize mentorship and learning.</p>
            </div>
            <div className="text-center p-6">
              <Globe className="w-10 h-10 text-[#1E40AF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Flexible Culture</h3>
              <p className="text-[#64748B]">We believe in outcome-driven work, supporting flexible environments that enable you to do your best.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 p-12 rounded-3xl border border-[#E5E7EB] text-center shadow-sm">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Open Positions</h2>
            <p className="text-[#64748B] mb-8 text-lg">
              We are currently fully staffed, but we are always eager to connect with talented engineers, product designers, and logistics experts.
            </p>
            <p className="text-[#334155] font-medium mb-6">
              If you believe you would be a strong fit for our engineering or go-to-market teams, please send your resume and a brief introduction.
            </p>
            <a
              href="mailto:careers@acrely.in"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold text-sm rounded-lg transition-colors shadow-md"
            >
              Email Resume
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
