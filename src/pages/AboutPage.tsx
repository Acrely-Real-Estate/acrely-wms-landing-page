import React from 'react';
import { Building2, Server, ScanLine, ArrowRight } from 'lucide-react';
import { BookDemoSection } from '../components/BookDemoSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-6">
            About Acrely
          </h1>
          <p className="text-xl text-[#64748B] leading-relaxed mb-8">
            Acrely builds enterprise software focused on improving warehouse operations through operational visibility, inventory accuracy, barcode workflows, and scalable warehouse management.
          </p>
          <a
            href="/book-demo"
            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#1E40AF] text-white font-bold rounded-lg hover:bg-[#2563EB] transition-colors shadow-sm"
          >
            Book a Demo
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-[#1E40AF] mb-6 shadow-sm">
              <ScanLine className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Operational Visibility</h3>
            <p className="text-[#475569] leading-relaxed">
              We replace black-box operations with real-time digital tracking. Every physical movement translates to a verified system transaction.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-[#1E40AF] mb-6 shadow-sm">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Enterprise Scalability</h3>
            <p className="text-[#475569] leading-relaxed">
              Built on robust cloud architecture, our systems support high transaction volumes without compromising speed or reliability.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-[#1E40AF] mb-6 shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Warehouse Focus</h3>
            <p className="text-[#475569] leading-relaxed">
              We do not build generic ERP modules. We focus exclusively on the specific challenges of the warehouse floor and supply chain logistics.
            </p>
          </div>
        </div>

        <div className="bg-[#0F172A] rounded-2xl p-12 text-white text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Our Engineering Philosophy</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Software should reduce cognitive load on the floor operator, while providing absolute auditing confidence to the warehouse manager. We design user interfaces that are fast, legible on industrial devices, and resistant to manual error.
          </p>
          <a href="/features" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
            Explore our platform <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
      
      <BookDemoSection />
    </div>
  );
};
