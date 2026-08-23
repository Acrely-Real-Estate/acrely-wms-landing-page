import React from 'react';
import { Settings, Barcode, ScanLine, Map, Building2, Sparkles, ShieldCheck } from 'lucide-react';

export const WhyAcrelySection: React.FC = () => {
  const usps = [
    {
      title: "Operational Control",
      icon: Settings,
      description: "Define workflows, set bin strategies, and manage receiving, picking, and packing processes with absolute precision."
    },
    {
      title: "Barcode-Driven Workflows",
      icon: Barcode,
      description: "Replace paper picking and manual data entry with scan-verified operations that eliminate human error."
    },
    {
      title: "Inventory Traceability",
      icon: ScanLine,
      description: "Track every movement, lot number, serial number, and expiry date from inbound receipt to outbound dispatch."
    },
    {
      title: "Multi-Warehouse Visibility",
      icon: Building2,
      description: "Manage stock levels, transfers, and order routing across your entire network of facilities from a single dashboard."
    },
    {
      title: "Zeta Warehouse Intelligence",
      icon: Sparkles,
      description: "Ask questions about your warehouse data in natural language and surface operational insights without manually building every report."
    },
    {
      title: "Auditability",
      icon: ShieldCheck,
      description: "Maintain a permanent, immutable record of who moved what, when, and where for compliance and operational review."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] block mb-2">
            Why Acrely WMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Built for the warehouse floor.
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Move away from Excel, manual processes, and generic ERP modules. Upgrade to a system designed specifically for the realities of the warehouse floor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {usps.map((usp, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border ${usp.title.includes('Zeta') ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-[#1E40AF] border-slate-200'}`}>
                {(() => { const Icon = usp.icon; return Icon ? <Icon className="w-6 h-6" /> : null; })()}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{usp.title}</h3>
              <p className="text-[#475569] leading-relaxed text-sm">
                {usp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
