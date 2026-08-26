import React, { useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';

export const ZetaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Zeta — Warehouse Intelligence
            </div>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-6 ml-3 border border-amber-500/20">
              In Development
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              Warehouse intelligence, built into the WMS.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              Zeta turns the operational data already captured by Acrely WMS into answers warehouse teams can understand and act on. Ask questions about your warehouse data in natural language and surface operational insights without manually building every report.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://demo.acrelywms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Explore the Platform (Beta) <ArrowRight className="w-4 h-4" />
              </a>
              <Link 
                to="/pricing"
                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-white/5 text-white font-bold rounded-lg hover:bg-white/10 transition-colors border border-white/10"
              >
                See Pricing
              </Link>
            </div>
          </motion.div>
          
          <motion.div variants={fadeRight} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-full" />
            <div className="relative bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm">Zeta Assistant</div>
                <div className="ml-auto text-xs text-slate-500 uppercase tracking-widest font-bold">Demonstration Data</div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700/50">
                  <p className="text-sm font-medium">How many units of Fresh Apples are available across all warehouses?</p>
                </div>
                
                <div className="bg-blue-900/20 rounded-xl p-4 border border-blue-500/20">
                  <p className="text-sm text-slate-300 mb-3">Based on current inventory records, there are <strong className="text-white">1,240 units</strong> of Fresh Apples available.</p>
                  <div className="bg-slate-900/50 rounded flex text-xs overflow-hidden border border-slate-700/50">
                    <div className="p-2 border-r border-slate-700/50 w-1/2">
                      <div className="text-slate-500 mb-1">Chennai Main</div>
                      <div className="font-bold">850 units</div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="text-slate-500 mb-1">Bangalore Hub</div>
                      <div className="font-bold">390 units</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700/50">
                  <p className="text-sm font-medium">Which products are approaching expiry?</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
