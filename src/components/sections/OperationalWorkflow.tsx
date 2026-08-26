import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  ArrowDownToLine, 
  Database, 
  ClipboardList, 
  Package, 
  Send, 
  Settings, 
  CheckCircle2 
} from 'lucide-react';

const stages = [
  {
    id: 'receiving',
    label: 'Receive',
    icon: Truck,
    title: 'Inbound Receiving',
    description: 'Log truck arrivals, unload goods, perform quality inspection, and confirm received quantities against purchase orders.',
    systemAction: 'System records receipt, generates barcodes, and updates expected inventory.',
    operator: 'Dock Receiver',
    highlight: 'Eliminates lost manifests and ghost receipts.',
  },
  {
    id: 'putaway',
    label: 'Put Away',
    icon: ArrowDownToLine,
    title: 'Directed Putaway',
    description: 'System calculates optimal storage location based on zone, rack availability, product type, and rotation rules.',
    systemAction: 'Directs worker to exact bin via mobile scanner. Confirms placement with barcode scan.',
    operator: 'Putaway Worker',
    highlight: 'Prevents misplaced pallets and wasted warehouse space.',
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: Database,
    title: 'Live Inventory',
    description: 'Real-time visibility across all bins, racks, zones, and warehouses. Every scan instantly updates the central ledger.',
    systemAction: 'Maintains transaction-level audit trail. Triggers low-stock alerts and reorder signals.',
    operator: 'System (Automated)',
    highlight: '99.9% inventory accuracy without manual spreadsheets.',
  },
  {
    id: 'picking',
    label: 'Pick',
    icon: ClipboardList,
    title: 'Order Picking',
    description: 'Orders drop in via API or manual entry. System generates optimized pick lists and routes workers through the warehouse.',
    systemAction: 'Batches orders, calculates shortest path, validates each pick via barcode scan.',
    operator: 'Picker',
    highlight: 'Eliminates wrong-item shipments and reduces walk time.',
  },
  {
    id: 'packing',
    label: 'Pack',
    icon: Package,
    title: 'Packing & Verification',
    description: 'Picked items are verified, packed into cartons, and labeled for shipment. System generates packing slips.',
    systemAction: 'Validates pack contents against order. Prevents missing or incorrect items.',
    operator: 'Packer',
    highlight: 'Zero packing errors with scan verification.',
  },
  {
    id: 'dispatch',
    label: 'Dispatch',
    icon: Send,
    title: 'Outbound Dispatch',
    description: 'Packed shipments are scanned to the outbound dock, assigned to carriers, and marked as shipped.',
    systemAction: 'Deducts shipped stock, updates order status, triggers ASN to downstream systems.',
    operator: 'Shipping Clerk',
    highlight: 'Prevents loading wrong orders onto wrong trucks.',
  },
];

export const OperationalWorkflow: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const activeStageData = stages[activeStage];
  const Icon = activeStageData.icon;

  return (
    <section className="bg-[#F8FAFC] border-b border-[#E5E7EB] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] mb-3">
            The Complete Operation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            How Acrely WMS Works
          </h2>
          <p className="text-lg text-[#64748B]">
            Follow a product from the inbound dock to the outbound dispatch. See how Acrely orchestrates every movement.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="relative mb-8 max-w-4xl mx-auto">
          {/* Background line for progress bar effect */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#E5E7EB] -translate-y-1/2 hidden md:block z-0" />
          
          <div className="relative z-10 flex overflow-x-auto hide-scrollbar gap-2 md:justify-between pb-4 md:pb-0">
            {stages.map((stage, index) => {
              const TabIcon = stage.icon;
              const isActive = activeStage === index;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(index)}
                  className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-lg transition-colors flex-shrink-0 ${
                    isActive 
                      ? 'bg-[#1E40AF] text-white shadow-sm' 
                      : 'bg-white md:bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 border border-[#E5E7EB] md:border-transparent'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <TabIcon className="w-5 h-5" />
                  <span className="font-medium">{stage.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8 lg:p-12 min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStageData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="w-16 h-16 bg-blue-50 text-[#1E40AF] rounded-xl border border-blue-100 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-[#64748B] mb-2 uppercase tracking-wide">
                      Step {activeStage + 1} of {stages.length}
                    </div>
                    <h3 className="text-3xl font-extrabold text-[#0F172A] mb-4">
                      {activeStageData.title}
                    </h3>
                    <p className="text-lg text-[#64748B] leading-relaxed mb-6">
                      {activeStageData.description}
                    </p>
                    
                    <div className="inline-flex items-center bg-slate-100 rounded-full px-4 py-1.5 border border-[#E5E7EB]">
                      <span className="text-sm font-medium text-[#334155]">
                        Performed by: <span className="text-[#0F172A] font-semibold">{activeStageData.operator}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-50 rounded-xl p-6 border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-5 h-5 text-[#1E40AF]" />
                      <h4 className="font-semibold text-[#0F172A]">What the System Does</h4>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      {activeStageData.systemAction}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6 border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <h4 className="font-semibold text-[#0F172A]">Key Benefit</h4>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      {activeStageData.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
