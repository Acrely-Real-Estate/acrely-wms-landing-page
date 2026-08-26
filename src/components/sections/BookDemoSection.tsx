import React, { useRef } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';

export const BookDemoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#0F172A]">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <div className="relative bg-[#1E293B] rounded-2xl border border-slate-700/50 px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(30,64,175,0.2) 0%, transparent 60%)' }}
          />

          <div className="relative">
            <div className="mx-auto w-12 h-12 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center mb-8 shadow-lg">
              <Layers className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-4">
              Get Started
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to simplify your warehouse?
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
              Schedule an enterprise demonstration and see how Acrely WMS can transform your warehouse operations.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/30"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://demo.acrelywms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg transition-colors border border-white/10"
              >
                Explore the Platform
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};