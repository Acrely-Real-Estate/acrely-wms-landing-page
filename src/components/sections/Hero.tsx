import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Play, QrCode, Building2, Users, Database, Zap, Smartphone } from 'lucide-react';

const trustIndicators = [
  { name: 'Barcode Ready', icon: QrCode },
  { name: 'Multi-Warehouse', icon: Building2 },
  { name: 'Role-Based Access', icon: Users },
  { name: 'Real-Time Inventory', icon: Database },
  { name: 'API Ready', icon: Zap },
  { name: 'Mobile Friendly', icon: Smartphone },
];

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const warehouseVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  const trustVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.7,
      },
    },
  };

  return (
    <section id="overview" className="relative bg-[#0F172A] pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-20 lg:pb-24 overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TEXT CONTENT */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
              Enterprise Warehouse Management Platform
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            <span className="block">Run the warehouse.</span>
            <span className="block text-[#60A5FA]">Not the software.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Acrely WMS handles the complexity of warehouse operations — receiving, inventory, picking, packing, dispatch — so your team can focus on moving goods, not fighting software.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/book-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold rounded-lg px-8 py-4 transition-colors"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://demo.acrelywms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-lg px-8 py-4 transition-colors"
            >
              <Play className="w-5 h-5" />
              Explore the Platform
            </a>
          </motion.div>
        </motion.div>

        {/* WAREHOUSE VISUALIZATION */}
        <motion.div 
          variants={warehouseVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 lg:mt-32 w-full max-w-5xl mx-auto h-[300px] md:h-[450px] lg:h-[480px] flex items-center justify-center relative"
          style={{ perspective: '1200px' }}
          role="img"
          aria-label="3D Warehouse Visualization"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
            style={{
              transform: 'rotateX(55deg) rotateZ(-45deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Floor Plane */}
            <div className="absolute inset-0 bg-[#0F172A] border border-slate-700/50 shadow-[0_20px_50px_rgba(15,23,42,0.8)] rounded-xl overflow-hidden">
               {/* Grid */}
               <div 
                 className="absolute inset-0 opacity-20" 
                 style={{ 
                   backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
                 }} 
               />
            </div>

            {/* Zones */}
            {/* Receiving Dock */}
            <div className="absolute top-8 left-8 w-24 h-48 md:w-40 md:h-80 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
              <div className="w-full h-full flex flex-col gap-2 p-3 animate-pulse">
                <div className="w-full h-1/3 bg-blue-500/20 rounded-md border border-blue-500/20" />
                <div className="w-full h-1/3 bg-blue-500/20 rounded-md border border-blue-500/20" />
              </div>
            </div>

            {/* Storage Racks */}
            <div className="absolute top-8 right-8 bottom-32 left-40 md:left-56 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 p-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="relative w-full h-full">
                  {/* Shadow */}
                  <div className="absolute inset-0 bg-black/60 translate-x-2 translate-y-2 rounded-sm blur-[2px]" />
                  {/* Block */}
                  <div
                    className="absolute inset-0 bg-[#1E293B] border border-slate-600 rounded-sm flex flex-col justify-evenly px-2"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <div className="w-full h-px bg-slate-600" />
                    <div className="w-full h-px bg-slate-600" />
                    <div className="w-full h-px bg-slate-600" />
                  </div>
                </div>
              ))}
            </div>

            {/* Packing / Dispatch Area */}
            <div className="absolute bottom-8 right-8 left-40 md:left-56 h-20 md:h-24 bg-indigo-500/10 border border-indigo-500/30 rounded-lg flex items-center justify-center gap-4 px-4">
               {/* Conveyor / Stations */}
               <div className="w-16 h-8 md:w-24 md:h-12 bg-indigo-500/20 rounded border border-indigo-500/30 animate-pulse" />
               <div className="w-16 h-8 md:w-24 md:h-12 bg-indigo-500/20 rounded border border-indigo-500/30 animate-pulse" style={{ animationDelay: '500ms' }} />
            </div>

            {/* Moving Goods (Dots) */}
            <motion.div
              animate={{ 
                x: [40, 160, 160, 40], 
                y: [40, 40, 240, 40] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 bg-blue-400 rounded-sm shadow-[0_0_10px_rgba(96,165,250,0.8)]"
              style={{ transform: 'translateZ(20px)' }}
            />
            
            <motion.div
              animate={{ 
                x: [160, 40, 40, 160], 
                y: [240, 240, 40, 240] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{ transform: 'translateZ(20px)' }}
            />
          </motion.div>
        </motion.div>

        {/* TRUST INDICATORS */}
        <motion.div 
          variants={trustVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 lg:mt-24 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {trustIndicators.map((indicator, idx) => {
            const Icon = indicator.icon;
            return (
              <div key={idx} className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold text-slate-400">{indicator.name}</span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
