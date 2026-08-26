import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Barcode, Check, CheckCircle2 } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 border-b border-[#E5E7EB] bg-white bg-grid-lines overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Headings */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="block text-[#0F172A] mb-2">Complexity inside the system.</span>
            <span className="block text-[#1E40AF]">Simplicity for the operator.</span>
          </h2>
        </motion.div>

        {/* Two Panel Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT PANEL - COMPLEXITY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] text-center lg:text-left">
              What the system handles
            </h3>
            
            <div className="relative bg-slate-100 rounded-xl border border-[#E5E7EB] p-6 sm:p-8 aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center overflow-hidden">
              {/* Connecting Lines (SVG background) */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <path d="M 20% 20% L 80% 80% M 80% 20% L 20% 80% M 50% 10% L 50% 90% M 10% 50% L 90% 50% M 20% 50% L 50% 20% M 50% 80% L 80% 50%" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                <path d="M 30% 30% Q 50% 10% 70% 30% T 70% 70% T 30% 70% T 30% 30%" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              </svg>

              {/* Nodes */}
              <div className="relative w-full h-full">
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E40AF] text-white px-3 py-1.5 text-xs font-bold rounded-md shadow-md z-10">
                  Rules Engine
                </div>
                
                {/* Outer Nodes */}
                <div className="absolute top-[15%] left-[20%] -translate-x-1/2 -translate-y-1/2 bg-slate-200 text-[#334155] px-2 py-1 text-xs font-bold rounded-md border border-[#E5E7EB]">
                  Orders
                </div>
                <div className="absolute top-[15%] right-[20%] translate-x-1/2 -translate-y-1/2 bg-slate-200 text-[#334155] px-2 py-1 text-xs font-bold rounded-md border border-[#E5E7EB]">
                  Inventory
                </div>
                <div className="absolute bottom-[15%] left-[20%] -translate-x-1/2 translate-y-1/2 bg-slate-200 text-[#334155] px-2 py-1 text-xs font-bold rounded-md border border-[#E5E7EB]">
                  Locations
                </div>
                <div className="absolute bottom-[15%] right-[20%] translate-x-1/2 translate-y-1/2 bg-slate-200 text-[#334155] px-2 py-1 text-xs font-bold rounded-md border border-[#E5E7EB]">
                  Movement
                </div>
                
                <div className="absolute top-[50%] left-[10%] -translate-x-1/2 -translate-y-1/2 bg-[#1E40AF] text-white px-2 py-1 text-xs font-bold rounded-md">
                  Suppliers
                </div>
                <div className="absolute top-[50%] right-[10%] translate-x-1/2 -translate-y-1/2 bg-[#1E40AF] text-white px-2 py-1 text-xs font-bold rounded-md">
                  Customers
                </div>
                <div className="absolute top-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-slate-200 text-[#334155] px-2 py-1 text-xs font-bold rounded-md border border-[#E5E7EB]">
                  Permissions
                </div>
                <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 translate-y-1/2 bg-slate-200 text-[#334155] px-2 py-1 text-xs font-bold rounded-md border border-[#E5E7EB]">
                  Lots
                </div>

                <div className="absolute top-[35%] left-[35%] -translate-x-1/2 -translate-y-1/2 bg-slate-200 text-[#334155] px-2 py-1 text-xs font-bold rounded-md border border-[#E5E7EB] opacity-80 scale-90">
                  Zones
                </div>
                <div className="absolute bottom-[35%] right-[35%] translate-x-1/2 translate-y-1/2 bg-slate-200 text-[#334155] px-2 py-1 text-xs font-bold rounded-md border border-[#E5E7EB] opacity-80 scale-90">
                  Racks
                </div>
                <div className="absolute top-[35%] right-[35%] translate-x-1/2 -translate-y-1/2 bg-slate-200 text-[#334155] px-2 py-1 text-xs font-bold rounded-md border border-[#E5E7EB] opacity-80 scale-90">
                  Bins
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL - SIMPLICITY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] text-center lg:text-left">
              What the operator sees
            </h3>
            
            <div className="bg-slate-100 rounded-xl border border-[#E5E7EB] p-6 sm:p-8 flex items-center justify-center">
              {/* Mobile Device Mockup */}
              <div className="w-full max-w-xs bg-white rounded-3xl border-4 border-slate-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)] overflow-hidden flex flex-col h-[400px]">
                {/* Status Bar / Top bar */}
                <div className="bg-slate-800 text-white px-4 py-3 flex items-center justify-between shadow-sm">
                  <span className="text-sm font-semibold tracking-wide">Acrely Scan</span>
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 bg-[#F8FAFC] flex flex-col space-y-3 justify-center">
                  
                  {/* Step 1: Scan */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-2 opacity-50 transition-opacity">
                     <div className="bg-blue-100 p-2 rounded-full text-[#1E40AF]">
                       <Barcode size={24} />
                     </div>
                     <p className="text-sm font-medium text-[#1E40AF]">Scan item barcode</p>
                  </div>

                  {/* Step 2: Confirm */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-2 opacity-50 transition-opacity">
                     <div className="bg-emerald-100 p-2 rounded-full text-emerald-700">
                       <Check size={24} />
                     </div>
                     <p className="text-sm font-medium text-emerald-700">Confirm quantity: 1</p>
                  </div>

                  {/* Step 3: Done */}
                  <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-2 shadow-sm relative overflow-hidden">
                     {/* Subtle pulse animation for active state */}
                     <div className="absolute inset-0 bg-blue-50 opacity-20 animate-pulse"></div>
                     <div className="bg-slate-100 p-2 rounded-full text-slate-700 z-10">
                       <CheckCircle2 size={24} className="text-emerald-500" />
                     </div>
                     <p className="text-sm font-medium text-[#0F172A] z-10">Item received.</p>
                     <p className="text-xs text-[#64748B] z-10">Next task loading...</p>
                  </div>

                </div>
                
                {/* Mock Home Indicator */}
                <div className="bg-[#F8FAFC] pt-1 pb-2 flex justify-center">
                  <div className="w-1/3 h-1 bg-slate-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
