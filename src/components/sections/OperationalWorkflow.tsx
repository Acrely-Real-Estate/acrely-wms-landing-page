import React, { useState } from 'react';
import { Truck, Box, CheckSquare, Barcode, Printer, ScanLine, Building2, Map, Grid, Layers, Database, ShoppingCart, ClipboardList, UserCheck, Package, Send, BarChart } from 'lucide-react';

export const OperationalWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    { title: "Receive Truck", icon: Truck, who: "Dock Receiver", action: "Logs arrival in Acrely WMS", value: "Tracks inbound SLA", errorReduced: "Eliminates lost manifests" },
    { title: "Unload Goods", icon: Box, who: "Forklift Operator", action: "Confirms quantity unloaded", value: "Updates pending receiving", errorReduced: "Prevents ghost receipts" },
    { title: "Quality Inspection", icon: CheckSquare, who: "QA Inspector", action: "Records pass/fail metrics", value: "Quarantines bad stock", errorReduced: "Stops defective shipments" },
    { title: "Generate Barcode", icon: Barcode, who: "System", action: "Auto-generates unique LPN", value: "Standardizes tracking", errorReduced: "Removes duplicate IDs" },
    { title: "Print Label", icon: Printer, who: "Receiver", action: "Prints via integrated Zebra", value: "Physical identification", errorReduced: "Stops illegible handwriting" },
    { title: "Scan Product", icon: ScanLine, who: "Putaway Worker", action: "Scans label to initiate move", value: "Validates handling unit", errorReduced: "Prevents moving wrong pallet" },
    { title: "Assign Warehouse", icon: Building2, who: "System", action: "Routes to correct facility", value: "Multi-site accuracy", errorReduced: "Wrong-site inventory" },
    { title: "Assign Zone", icon: Map, who: "System", action: "Selects temp/dry zone", value: "Ensures compliance", errorReduced: "Spoilage or compliance fines" },
    { title: "Assign Rack", icon: Grid, who: "System", action: "Finds optimal rack path", value: "Maximizes density", errorReduced: "Wasted warehouse space" },
    { title: "Assign Bin", icon: Layers, who: "System", action: "Directs to specific bin", value: "Precise putaway", errorReduced: "Lost pallets in aisles" },
    { title: "Inventory Updated", icon: Database, who: "System", action: "Commits stock to ledger", value: "Real-time visibility", errorReduced: "Delayed ERP syncs" },
    { title: "Order Received", icon: ShoppingCart, who: "ERP/API", action: "Injects sales order", value: "Automated fulfillment", errorReduced: "Manual data entry typos" },
    { title: "Pick Task Generated", icon: ClipboardList, who: "System", action: "Batches orders for efficiency", value: "Reduces travel time", errorReduced: "Inefficient walk paths" },
    { title: "Worker Picks", icon: UserCheck, who: "Picker", action: "Scans bin and item", value: "Validates exact item", errorReduced: "Wrong item shipped" },
    { title: "Packing", icon: Package, who: "Packer", action: "Scans into carton", value: "Generates packing slip", errorReduced: "Missing items in box" },
    { title: "Dispatch", icon: Send, who: "Shipping", action: "Scans to outbound dock", value: "Triggers ASN", errorReduced: "Loading wrong truck" },
    { title: "Inventory Updated", icon: Database, who: "System", action: "Deducts shipped stock", value: "Accurate stock levels", errorReduced: "Overselling on channels" },
    { title: "Reports", icon: BarChart, who: "Manager", action: "Reviews productivity", value: "Continuous improvement", errorReduced: "Blind operational bottlenecks" }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] block mb-2">
            The Complete Operation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            How Acrely WMS Works
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Follow a product from the inbound dock to the outbound dispatch. See exactly how our system orchestrates every movement.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Interactive Steps List */}
          <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm h-[600px] flex flex-col">
            <div className="p-4 border-b border-[#E5E7EB] bg-slate-50 font-bold text-[#0F172A]">
              Operational Workflow
            </div>
            <div className="overflow-y-auto flex-1 p-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-200">
              {workflowSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const Icon = step.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${isActive ? 'bg-[#1E40AF] text-white' : 'hover:bg-slate-50 text-[#334155]'}`}
                  >
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${isActive ? 'bg-white/20' : 'bg-slate-100 text-[#64748B]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-[#0F172A]'}`}>{step.title}</div>
                      <div className={`text-xs ${isActive ? 'text-blue-100' : 'text-[#64748B]'}`}>{step.who}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step Detail Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 lg:p-12 shadow-sm flex-1 flex flex-col justify-center relative overflow-hidden">
              
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                {React.createElement(workflowSteps[activeStep].icon, { className: "w-64 h-64 text-[#1E40AF]" })}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-50 text-[#1E40AF] rounded-xl flex items-center justify-center mb-8 border border-blue-100">
                  {React.createElement(workflowSteps[activeStep].icon, { className: "w-8 h-8" })}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-slate-100 text-[#475569] text-xs font-bold uppercase tracking-wider rounded">
                    Step {activeStep + 1} of {workflowSteps.length}
                  </span>
                  <span className="text-[#64748B] text-sm font-medium">Performed by: <strong className="text-[#0F172A]">{workflowSteps[activeStep].who}</strong></span>
                </div>

                <h3 className="text-3xl font-extrabold text-[#0F172A] mb-8">
                  {workflowSteps[activeStep].title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">What Acrely WMS Does</h4>
                    <p className="text-lg text-[#0F172A] font-medium">{workflowSteps[activeStep].action}</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-[#E5E7EB]">
                    <div>
                      <h4 className="text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">Business Value</h4>
                      <div className="flex items-start gap-2">
                        <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[#334155] font-medium">{workflowSteps[activeStep].value}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">Errors Reduced</h4>
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">!</div>
                        <span className="text-[#334155] font-medium">{workflowSteps[activeStep].errorReduced}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between pt-6 border-t border-[#E5E7EB]">
                  <button 
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="text-sm font-bold text-[#1E40AF] disabled:opacity-30 disabled:cursor-not-allowed hover:underline"
                  >
                    Previous Step
                  </button>
                  <button 
                    onClick={() => setActiveStep(prev => Math.min(workflowSteps.length - 1, prev + 1))}
                    disabled={activeStep === workflowSteps.length - 1}
                    className="px-4 py-2 bg-[#0F172A] text-white text-sm font-bold rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next Step
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
