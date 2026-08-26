import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Play, X, Layers } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import dashboardImage from '../../assets/hero-dashboard-app.png';

// ─── Configuration ──────────────────────────────────────────────────────────
// Replace with the real YouTube embed URL when the walkthrough is ready.
// Example: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
const YOUTUBE_VIDEO_URL = "";
// ─────────────────────────────────────────────────────────────────────────────

const productViews = [
  { label: 'Dashboard', description: 'Operations Overview — real-time warehouse performance and daily task queues.' },
  { label: 'Inventory', description: 'Real-time stock levels across all bins, racks, and warehouses.' },
  { label: 'Scanning', description: 'Barcode-driven workflows for receiving, putaway, picking, and packing.' },
  { label: 'Reporting', description: 'Operational analytics, KPIs, and actionable insights.' },
];

export const ProductVideoSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeView, setActiveView] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    if (!modalOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); };
  }, [modalOpen, closeModal]);

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <>
      <section ref={sectionRef} className="py-24 md:py-32 bg-white border-b border-[#E5E7EB] overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] block mb-2">
              The Product
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              See Acrely WMS in action.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#64748B] leading-relaxed">
              A quick look at how Acrely WMS brings warehouse operations together in one system.
            </motion.p>
          </div>

          {/* Product view tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-8">
            {productViews.map((view, idx) => (
              <button
                key={view.label}
                onClick={() => setActiveView(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeView === idx
                    ? 'bg-[#1E40AF] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100'
                }`}
              >
                {view.label}
              </button>
            ))}
          </motion.div>

          {/* Product Preview */}
          <motion.div variants={fadeUp} className="relative max-w-5xl mx-auto">
            {/* Ambient blue glow */}
            <div
              className="absolute -inset-6 md:-inset-10 rounded-3xl opacity-30 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(30,64,175,0.18) 0%, transparent 70%)' }}
            />

            <div className="relative group" style={{ perspective: '1200px' }}>
              <div
                className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] bg-slate-50 shadow-[0_8px_40px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)] transition-all duration-500 ease-out md:group-hover:shadow-[0_20px_60px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.06)]"
                style={{
                  transformStyle: 'preserve-3d' as const,
                  transform: 'rotateX(2deg)',
                  transition: 'transform 0.5s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.5s ease',
                }}
                onMouseEnter={(e) => { if (window.innerWidth >= 768) (e.currentTarget as HTMLDivElement).style.transform = 'rotateX(0deg) translateY(-4px)'; }}
                onMouseLeave={(e) => { if (window.innerWidth >= 768) (e.currentTarget as HTMLDivElement).style.transform = 'rotateX(2deg)'; }}
              >
                {YOUTUBE_VIDEO_URL ? (
                  <div className="aspect-video">
                    <iframe
                      src={YOUTUBE_VIDEO_URL}
                      title="Acrely WMS Product Walkthrough"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <img
                      src={dashboardImage}
                      alt={`Acrely WMS — ${productViews[activeView].label}`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />

                    {/* Play button */}
                    <button
                      onClick={() => setModalOpen(true)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group/play focus:outline-none"
                      aria-label="Play product walkthrough"
                    >
                      <span className="absolute w-[88px] h-[88px] md:w-[96px] md:h-[96px] rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-white/25" />
                      <span className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#1E40AF] flex items-center justify-center shadow-[0_4px_24px_rgba(30,64,175,0.4)] transition-all duration-300 group-hover/play:scale-110 group-hover/play:shadow-[0_8px_32px_rgba(30,64,175,0.55)] group-focus-visible/play:ring-4 group-focus-visible/play:ring-blue-300/50">
                        <Play className="w-6 h-6 md:w-7 md:h-7 text-white ml-0.5" fill="white" strokeWidth={0} />
                      </span>
                    </button>
                  </div>
                )}

                {/* Top reflection strip */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Active view description */}
            <p className="text-center text-sm text-[#64748B] mt-6 font-medium">
              {productViews[activeView].description}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Coming-soon modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Product walkthrough coming soon">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative z-10 bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_24px_80px_rgba(15,23,42,0.2)] max-w-md w-full px-8 py-10 text-center">
            <button onClick={closeModal} className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30" aria-label="Close">
              <X className="w-4 h-4" />
            </button>
            <div className="mx-auto w-12 h-12 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center mb-6 shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] mb-3">Video Coming Soon</p>
            <h3 className="text-xl font-extrabold text-[#0F172A] mb-3">Product walkthrough coming soon.</h3>
            <p className="text-base text-[#475569] leading-relaxed">We're preparing a walkthrough of Acrely WMS and the workflows behind it.</p>
            <button onClick={closeModal} className="mt-8 px-6 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0F172A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
