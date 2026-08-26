import React, { useRef } from 'react';
import { Settings, Barcode, ScanLine, Building2, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, useInView } from 'motion/react';

export const WhyAcrelySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const usps = [
    {
      title: "Operational Control",
      icon: Settings,
      description: "Define workflows, set bin strategies, and manage receiving, picking, and packing processes with absolute precision.",
      accent: "bg-blue-50 text-[#1E40AF] border-blue-100",
    },
    {
      title: "Barcode-Driven Workflows",
      icon: Barcode,
      description: "Replace paper picking and manual data entry with scan-verified operations that eliminate human error.",
      accent: "bg-blue-50 text-[#1E40AF] border-blue-100",
    },
    {
      title: "Inventory Traceability",
      icon: ScanLine,
      description: "Track every movement, lot number, serial number, and expiry date from inbound receipt to outbound dispatch.",
      accent: "bg-blue-50 text-[#1E40AF] border-blue-100",
    },
    {
      title: "Multi-Warehouse Visibility",
      icon: Building2,
      description: "Manage stock levels, transfers, and order routing across your entire network of facilities from a single dashboard.",
      accent: "bg-blue-50 text-[#1E40AF] border-blue-100",
    },
    {
      title: "Zeta Warehouse Intelligence",
      icon: Sparkles,
      description: "Ask questions about your warehouse data in natural language and surface operational insights without manually building every report.",
      accent: "bg-[#1E40AF] text-white border-blue-700",
    },
    {
      title: "Auditability",
      icon: ShieldCheck,
      description: "Maintain a permanent, immutable record of who moved what, when, and where for compliance and operational review.",
      accent: "bg-blue-50 text-[#1E40AF] border-blue-100",
    }
  ];

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white border-b border-[#E5E7EB]">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] block mb-2">
            Why Acrely WMS
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Built for the warehouse floor.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#64748B] leading-relaxed">
            Move away from Excel, manual processes, and generic ERP modules. Upgrade to a system designed specifically for the realities of the warehouse floor.
          </motion.p>
        </div>

        <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                variants={fadeUp}
                className="group bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-[0_8px_40px_rgba(15,23,42,0.08)] hover:border-slate-300 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border ${usp.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#1E40AF] transition-colors">{usp.title}</h3>
                <p className="text-[#475569] leading-relaxed text-sm">
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
