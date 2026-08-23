import React from 'react';
import { Factory, Truck, Snowflake, Store, Warehouse, Coffee, ArrowRight, Package, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      id: 'warehousing',
      title: 'Warehousing',
      icon: Warehouse,
      description: 'Streamline general inventory management, space utilization, and basic fulfillment workflows.',
    },
    {
      id: '3pl',
      title: '3PL Logistics',
      icon: Truck,
      description: 'Manage multiple clients, billing, and isolated inventory within shared warehouse facilities.',
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: Factory,
      description: 'Track raw materials, WIP inventory, and finished goods alongside production lines.',
    },
    {
      id: 'retail',
      title: 'Retail',
      icon: Store,
      description: 'Handle high-volume piece picking, cross-docking, and store replenishment strategies.',
    },
    {
      id: 'distribution',
      title: 'Distribution',
      icon: Package,
      description: 'Optimize bulk receiving, pallet moves, and large-scale outbound routing.',
    },
    {
      id: 'cold-storage',
      title: 'Cold Storage',
      icon: Snowflake,
      description: 'Enforce strict temperature zoning, FEFO rotation, and compliance tracking.',
    },
    {
      id: 'food-beverage',
      title: 'Food & Beverage',
      icon: Coffee,
      description: 'Manage batch numbers, expiry dates, recall readiness, and lot traceability.',
    },
    {
      id: 'fmcg',
      title: 'FMCG',
      icon: Package,
      description: 'High-velocity flow-through, fast-moving stock positioning, and cycle counting.',
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      icon: Wheat,
      description: 'Handle seasonal volume spikes, bulk storage bins, and varying unit measures.',
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] block mb-2">
            Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Designed for Specialized Operations
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Different industries have different compliance rules and velocity requirements. Acrely WMS adapts to your operational constraints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#1E40AF] transition-colors group flex flex-col h-full shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E40AF] flex items-center justify-center mb-6">
                {(() => { const Icon = industry.icon; return Icon ? <Icon className="w-6 h-6" /> : null; })()}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{industry.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed flex-grow">
                {industry.description}
              </p>
              <Link to={`/industries/${industry.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#1E40AF] mt-6 group-hover:text-[#2563EB] transition-colors">
                Explore solution <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
