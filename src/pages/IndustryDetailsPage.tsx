import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Factory, Truck, Snowflake, Store, Warehouse, Coffee, Package, Wheat, ArrowRight, CheckCircle2, LayoutGrid, Workflow } from 'lucide-react';
import { BookDemoSection } from '../components/BookDemoSection';

const industryContent = {
  'warehousing': {
    title: 'Warehousing',
    icon: Warehouse,
    description: 'General warehouse management software designed for accuracy, speed, and visibility.',
    challenges: ['Missing inventory', 'Slow order picking', 'Wasted warehouse space', 'Manual data entry errors'],
    solutions: ['Real-time inventory tracking with barcode scanning', 'System-directed picking paths', 'Automated bin allocation', 'API integrations with ERPs'],
    modules: ['Inventory Management', 'Barcode Engine', 'Picking & Packing', 'Reporting Analytics'],
    workflow: 'Receive → Barcode → Putaway → Order Drop → Mobile Pick → Pack → Dispatch'
  },
  '3pl': {
    title: '3PL Logistics',
    icon: Truck,
    description: 'Multi-tenant warehouse software for third-party logistics providers managing diverse client requirements.',
    challenges: ['Mixing client inventory', 'Complex billing cycles', 'Client visibility requests', 'Different SLA requirements'],
    solutions: ['Strict inventory segregation by owner', 'Automated storage and handling billing reports', 'Client portal for live visibility', 'Configurable workflows per client'],
    modules: ['Multi-Tenant Architecture', 'Billing Engine', 'Client Portal', 'Custom Reporting'],
    workflow: 'Client ASN → Receive & Segregate → Storage → Client Order → Pick → Dispatch → Bill'
  },
  'manufacturing': {
    title: 'Manufacturing',
    icon: Factory,
    description: 'Warehouse execution alongside production lines for raw materials and finished goods.',
    challenges: ['Tracking raw materials to production', 'Storing Work-in-Progress (WIP)', 'Finished goods staging', 'Lot traceability'],
    solutions: ['Component issuing to shop floor', 'WIP tracking zones', 'Finished goods receiving workflows', 'End-to-end lot tracking'],
    modules: ['Raw Material Tracking', 'WIP Management', 'Lot/Batch Traceability', 'Production Staging'],
    workflow: 'Receive Raw Materials → Issue to Production → Store WIP → Receive Finished Goods → Dispatch'
  },
  'retail': {
    title: 'Retail',
    icon: Store,
    description: 'High-velocity fulfillment software for omnichannel retail distribution centers.',
    challenges: ['E-commerce order spikes', 'Store replenishment accuracy', 'High return volumes', 'Piece-picking efficiency'],
    solutions: ['Wave and batch picking optimization', 'Cross-docking workflows', 'Streamlined returns processing', 'Mobile cart picking'],
    modules: ['Wave Picking', 'Cross-Docking', 'Returns Management (RMA)', 'Omnichannel Fulfillment'],
    workflow: 'Receive Bulk → Cross-Dock / Putaway → Wave Pick (E-comm) + Pallet Pick (Store) → Dispatch'
  },
  'distribution': {
    title: 'Distribution',
    icon: Package,
    description: 'Heavy-duty warehouse management for wholesale and B2B distribution operations.',
    challenges: ['Moving bulk pallets', 'LTL shipping coordination', 'Inventory allocation', 'Dock door congestion'],
    solutions: ['Forklift-optimized mobile interfaces', 'Pallet license plate (LPN) tracking', 'Rule-based allocation', 'Dock scheduling'],
    modules: ['LPN Tracking', 'Bulk Allocations', 'Dock Management', 'Pallet Building'],
    workflow: 'Receive Pallet → LPN Generation → Bulk Putaway → Bulk Pick → Stage at Dock → Load'
  },
  'cold-storage': {
    title: 'Cold Storage',
    icon: Snowflake,
    description: 'Temperature-controlled warehouse software with strict rotation and compliance rules.',
    challenges: ['Expiry date management', 'Temperature zone enforcement', 'Spoilage costs', 'Compliance audits'],
    solutions: ['FEFO (First Expired, First Out) rules', 'Zone-restricted putaway', 'Shelf-life tracking', 'Audit-ready history logs'],
    modules: ['FEFO Engine', 'Zone Restrictions', 'Expiry Tracking', 'Compliance Audits'],
    workflow: 'Receive (Record Temp/Expiry) → Zone-Specific Putaway → FEFO Pick → Dispatch'
  },
  'food-beverage': {
    title: 'Food & Beverage',
    icon: Coffee,
    description: 'Traceability and inventory software for the food and beverage supply chain.',
    challenges: ['FDA/FSMA compliance', 'Lot tracking for recalls', 'Catch weight variations', 'Shelf-life management'],
    solutions: ['One-click lot recall reports', 'Catch weight capture at receiving', 'Batch number tracking', 'Expiry alerts'],
    modules: ['Lot Traceability', 'Catch Weight Management', 'Recall Reporting', 'Batch Tracking'],
    workflow: 'Receive Batch → Capture Catch Weight → Store → Pick by Lot → Dispatch'
  },
  'fmcg': {
    title: 'FMCG',
    icon: Package,
    description: 'High-speed warehouse software for fast-moving consumer goods.',
    challenges: ['High inventory turnover', 'Continuous replenishment', 'Cycle counting without stopping ops', 'Space utilization'],
    solutions: ['Dynamic slotting recommendations', 'Zero-downtime cycle counts', 'Min/Max replenishment alerts', 'Velocity reports'],
    modules: ['Dynamic Slotting', 'Cycle Counting', 'Replenishment Engine', 'Velocity Analytics'],
    workflow: 'Receive → Dynamic Putaway → High-Volume Pick → Continuous Count → Dispatch'
  },
  'agriculture': {
    title: 'Agriculture',
    icon: Wheat,
    description: 'Flexible storage management for seasonal yields and agricultural products.',
    challenges: ['Seasonal volume spikes', 'Silo/Bulk bin tracking', 'Grade and quality variations', 'Moisture/Weight adjustments'],
    solutions: ['Scalable cloud infrastructure', 'Bulk storage locations', 'Quality attribute tracking', 'Weight-based inventory'],
    modules: ['Bulk Storage', 'Quality Attributes', 'Seasonal Scaling', 'Weight Management'],
    workflow: 'Harvest Receipt → Grade/Attribute Log → Silo Putaway → Bulk Load → Dispatch'
  }
};

export const IndustryDetailsPage: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  
  if (!industryId || !industryContent[industryId as keyof typeof industryContent]) {
    return <Navigate to="/" replace />;
  }

  const content = industryContent[industryId as keyof typeof industryContent];
  const Icon = content.icon;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0F172A] pt-32 pb-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold mb-8 transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/30">
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {content.title}
              </h1>
            </div>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Challenges & Solutions */}
            <div className="space-y-16">
              
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                    <span className="font-bold font-mono">!</span>
                  </div>
                  Industry Challenges
                </h2>
                <ul className="space-y-4">
                  {content.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-[#334155] font-medium">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  How Acrely Solves Them
                </h2>
                <ul className="space-y-4">
                  {content.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 border border-[#1E40AF]/20 bg-blue-50/30 rounded-xl">
                      <CheckCircle2 className="w-6 h-6 text-[#1E40AF] shrink-0" />
                      <span className="text-[#0F172A] font-medium">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Modules & Workflow */}
            <div className="space-y-16">
              
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
                  <LayoutGrid className="w-6 h-6 text-[#1E40AF]" />
                  Recommended Modules
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.modules.map((module, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm text-center font-bold text-[#0F172A] text-sm">
                      {module}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-[#1E40AF]" />
                  Typical Workflow
                </h2>
                <div className="relative">
                  <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-blue-100"></div>
                  <div className="space-y-6">
                    {content.workflow.split(' → ').map((step, idx) => (
                      <div key={idx} className="relative flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-50 border-2 border-[#1E40AF] text-[#1E40AF] flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-sm">
                          {idx + 1}
                        </div>
                        <div className="text-[#0F172A] font-bold">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <BookDemoSection />
    </div>
  );
};
