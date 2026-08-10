import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Download, 
  Barcode, 
  MapPin, 
  Database, 
  CheckSquare, 
  Package, 
  Truck, 
  BarChart4, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookDemoSection } from '../components/BookDemoSection';

const tourSteps = [
  { 
    id: 'dashboard', 
    title: '01 Dashboard', 
    icon: LayoutDashboard,
    whatItIs: "The operational control center for warehouse managers and shift supervisors.",
    whyItMatters: "Provides immediate visibility into today's workload, pending tasks, and potential bottlenecks before they affect fulfillment.",
    howItWorks: "Aggregates real-time data from all warehouse activities into a single view.",
    userAction: "Managers log in and review inbound expected deliveries, pending outbound orders, and active picker progress.",
    systemUpdate: "Continuously refreshes based on floor execution (scans, receipts, dispatches).",
    previewTitle: "Morning Briefing",
    previewData: [
      { label: "Expected Inbound", value: "12 Deliveries" },
      { label: "Pending Orders", value: "145 Orders" },
      { label: "Active Pickers", value: "8 Operators" },
      { label: "Exceptions", value: "2 Stockouts" }
    ]
  },
  { 
    id: 'receiving', 
    title: '02 Receiving', 
    icon: Download,
    whatItIs: "The process of accepting inbound inventory from suppliers or transfers.",
    whyItMatters: "Accurate receiving prevents downstream inventory errors. If it enters the warehouse incorrectly, every subsequent step is compromised.",
    howItWorks: "Matches physical deliveries against Purchase Orders or Advanced Shipping Notices (ASNs).",
    userAction: "Receiving staff verify the delivery paperwork, inspect goods, and confirm received quantities against the PO.",
    systemUpdate: "Updates 'Inbound' status to 'Received' and places items in the staging area awaiting putaway.",
    previewTitle: "Receiving Verification",
    previewData: [
      { label: "PO Reference", value: "PO-2023-889" },
      { label: "Supplier", value: "Fresh Farms Inc." },
      { label: "Expected", value: "500 Cases" },
      { label: "Received", value: "500 Cases (Verified)" }
    ]
  },
  { 
    id: 'barcode', 
    title: '03 Barcode & ID', 
    icon: Barcode,
    whatItIs: "Product identification and verification.",
    whyItMatters: "Eliminates manual data entry and visual identification errors. Fast, accurate scans are the foundation of warehouse execution.",
    howItWorks: "Acrely supports standard 1D/2D barcodes, UPC, EAN, and custom internal SKUs.",
    userAction: "Operator scans the product barcode using a mobile scanner or tablet.",
    systemUpdate: "Validates the scanned item against the expected product record and logs the timestamp.",
    previewTitle: "Barcode Scan",
    previewData: [
      { label: "Scanned Item", value: "Fresh Apples (Gala)" },
      { label: "SKU", value: "FR-APL-GLA-01" },
      { label: "Barcode", value: "890123456789" },
      { label: "Match", value: "Valid ✓" }
    ]
  },
  { 
    id: 'putaway', 
    title: '04 Putaway', 
    icon: MapPin,
    whatItIs: "Moving received inventory from the staging area to its storage location.",
    whyItMatters: "Ensures products are stored in the correct zone (e.g., cold storage) and can be easily found for picking.",
    howItWorks: "Directs operators to the optimal bin/rack location based on product rules.",
    userAction: "Operator transports the pallet/case, scans the destination bin barcode, and deposits the items.",
    systemUpdate: "Inventory is officially moved from 'Staging' to the designated physical location in the database.",
    previewTitle: "Putaway Task",
    previewData: [
      { label: "Item", value: "Tomatoes (Roma)" },
      { label: "Quantity", value: "50 Cases" },
      { label: "Directed Location", value: "Zone C, Aisle 4, Bin 12" },
      { label: "Status", value: "Location Confirmed" }
    ]
  },
  { 
    id: 'inventory', 
    title: '05 Inventory', 
    icon: Database,
    whatItIs: "The master record of all stock across the warehouse network.",
    whyItMatters: "Provides the ground truth for sales, operations, and finance. Prevents overselling and stockouts.",
    howItWorks: "Maintains real-time balances tracking SKU, quantity, location, lot, and expiry.",
    userAction: "Managers search, filter, and audit inventory levels. Staff perform cycle counts.",
    systemUpdate: "Aggregates all receipts, movements, and dispatches to reflect current available stock.",
    previewTitle: "Inventory Record",
    previewData: [
      { label: "SKU", value: "VG-POT-RUS-05" },
      { label: "Item", value: "Potatoes (Russet)" },
      { label: "Available", value: "1,200 kg" },
      { label: "Lot / Expiry", value: "L-998 / 2026-12-01" }
    ]
  },
  { 
    id: 'picking', 
    title: '06 Picking', 
    icon: CheckSquare,
    whatItIs: "Retrieving items from storage locations to fulfill customer orders.",
    whyItMatters: "Picking speed and accuracy directly impact customer satisfaction and labor costs.",
    howItWorks: "Generates pick lists and routes operators through the warehouse efficiently.",
    userAction: "Picker receives a task, navigates to the location, scans the bin, scans the product, and picks the quantity.",
    systemUpdate: "Allocates the stock, updates the pick status, and moves inventory to the packing zone.",
    previewTitle: "Pick Task Executed",
    previewData: [
      { label: "Order", value: "ORD-9921" },
      { label: "Location", value: "Zone A, Aisle 1, Bin 05" },
      { label: "Item", value: "Bananas (Cavendish)" },
      { label: "Action", value: "Picked 10 Boxes" }
    ]
  },
  { 
    id: 'packing', 
    title: '07 Packing', 
    icon: Package,
    whatItIs: "Consolidating picked items into shipping containers.",
    whyItMatters: "The final quality check before an order leaves the warehouse.",
    howItWorks: "Verifies that all required items for an order are present.",
    userAction: "Packer scans each picked item into a carton, seals it, and generates a shipping label.",
    systemUpdate: "Changes order status to 'Packed' and generates carton contents records.",
    previewTitle: "Packing Verification",
    previewData: [
      { label: "Order", value: "ORD-9921" },
      { label: "Carton", value: "Box 1 of 1" },
      { label: "Items Packed", value: "4 of 4 Items Verified" },
      { label: "Status", value: "Ready for Dispatch" }
    ]
  },
  { 
    id: 'dispatch', 
    title: '08 Dispatch', 
    icon: Truck,
    whatItIs: "Loading packed orders onto outbound transport.",
    whyItMatters: "Completes the warehouse cycle and initiates customer delivery and invoicing.",
    howItWorks: "Groups packed orders by carrier or route.",
    userAction: "Dock worker scans outbound cartons onto the truck and signs off the manifest.",
    systemUpdate: "Deducts inventory from total stock and marks the order as 'Shipped'.",
    previewTitle: "Dispatch Confirmation",
    previewData: [
      { label: "Carrier", value: "FastFreight Logistics" },
      { label: "Route", value: "North Region - R04" },
      { label: "Cartons Loaded", value: "128 Cartons" },
      { label: "Status", value: "Dispatched (09:45 AM)" }
    ]
  },
  { 
    id: 'reports', 
    title: '09 Reports', 
    icon: BarChart4,
    whatItIs: "Operational visibility and historical analysis.",
    whyItMatters: "Allows management to identify trends, measure productivity, and optimize operations.",
    howItWorks: "Transforms transactional data into structured dashboards and exportable reports.",
    userAction: "Management generates reports on inventory turnover, picker performance, or receiving volume.",
    systemUpdate: "Queries the database without affecting floor performance.",
    previewTitle: "Operational Dashboard",
    previewData: [
      { label: "Orders Fulfilled", value: "342 Today" },
      { label: "Pick Accuracy", value: "99.8%" },
      { label: "Receiving Volume", value: "1,250 Pallets" },
      { label: "Stock Value", value: "$4.2M" }
    ]
  },
  { 
    id: 'zeta', 
    title: '10 Zeta Intelligence', 
    icon: Sparkles,
    whatItIs: "Acrely's natural-language warehouse intelligence layer.",
    whyItMatters: "Democratizes data access. Managers can ask complex questions without needing database skills.",
    howItWorks: "Uses AI to interpret user questions, query warehouse data, and generate analysis.",
    userAction: "User types a question like: 'Which products are approaching expiry?'",
    systemUpdate: "Analyzes relevant records and presents a clear, actionable summary. (DEMONSTRATION DATA)",
    previewTitle: "Zeta Response (Demo)",
    previewData: [
      { label: "Query", value: "\"Show products expiring in 30 days\"" },
      { label: "Analysis", value: "Found 3 batches approaching expiry." },
      { label: "Action", value: "L-992 (Milk): 4 days remaining" },
      { label: "Action", value: "L-114 (Yogurt): 12 days remaining" }
    ]
  }
];

export const ProductTourPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(tourSteps[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, current) => {
            return (prev.boundingClientRect.top < current.boundingClientRect.top) ? prev : current;
          });
          if (topEntry.intersectionRatio >= 0.2) {
            setActiveStep(topEntry.target.id);
          }
        }
      },
      {
        rootMargin: '-10% 0px -40% 0px',
        threshold: [0.2, 0.5, 1.0]
      }
    );

    tourSteps.forEach((step) => {
      const el = document.getElementById(step.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1E40AF] block mb-4">Acrely WMS Product Tour</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-6">
            The Complete Operational Journey
          </h1>
          <p className="text-xl text-[#64748B] leading-relaxed max-w-3xl mx-auto">
            See exactly what happens inside your warehouse after you start using Acrely. From the moment a truck arrives to final dispatch and intelligence reporting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12 relative items-start">
        {/* Sticky Sidebar Navigation */}
        <div className="hidden md:block w-72 shrink-0 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-6 no-scrollbar pb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-6 pl-4">Operational Workflow</div>
          <nav className="space-y-1 relative before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-slate-200">
            {tourSteps.map((step) => {
              const isActive = activeStep === step.id;
              const Icon = step.icon;
              return (
                <a
                  key={step.id}
                  href={`#${step.id}`}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all relative z-10 ${
                    isActive 
                      ? 'bg-blue-50 text-[#1E40AF] font-bold shadow-sm ring-1 ring-blue-100' 
                      : 'text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 font-medium'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white text-[#1E40AF] shadow-sm' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{step.title}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Tour Content */}
        <div className="flex-1 max-w-3xl space-y-24 pb-24">
          {tourSteps.map((step) => {
            const Icon = step.icon;
            const isZeta = step.id === 'zeta';
            return (
              <div key={step.id} id={step.id} className="scroll-mt-32">
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${
                    isZeta ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : 'bg-blue-50 text-[#1E40AF] border border-blue-100'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0F172A]">{step.title}</h2>
                </div>

                {isZeta && (
                  <div className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-md text-xs font-bold text-indigo-700 uppercase tracking-wider mb-6">
                    Optional Add-on
                  </div>
                )}

                <div className="grid gap-6 mb-10">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">What it is</h3>
                    <p className="text-[#0F172A] font-medium text-lg leading-relaxed mb-6 pb-6 border-b border-slate-100">
                      {step.whatItIs}
                    </p>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">Why it matters</h3>
                    <p className="text-[#475569] leading-relaxed mb-6 pb-6 border-b border-slate-100">
                      {step.whyItMatters}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">What the user does</h3>
                        <p className="text-[#475569] text-sm leading-relaxed">{step.userAction}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">What the system updates</h3>
                        <p className="text-[#475569] text-sm leading-relaxed">{step.systemUpdate}</p>
                      </div>
                    </div>
                  </div>

                  {/* UI Preview Card */}
                  <div className={`rounded-2xl border shadow-md overflow-hidden ${
                    isZeta ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-[#E5E7EB]'
                  }`}>
                    <div className={`px-6 py-4 border-b flex justify-between items-center ${
                      isZeta ? 'border-slate-800 bg-slate-900/50' : 'border-slate-100 bg-slate-50'
                    }`}>
                      <span className={`text-sm font-bold ${isZeta ? 'text-slate-300' : 'text-[#0F172A]'}`}>{step.previewTitle}</span>
                      {isZeta && <span className="text-[10px] font-bold tracking-widest uppercase text-amber-500/90">DEMONSTRATION DATA</span>}
                    </div>
                    <div className="p-6 grid sm:grid-cols-2 gap-y-6 gap-x-8">
                      {step.previewData.map((data, idx) => (
                        <div key={idx}>
                          <div className={`text-xs font-medium mb-1 ${
                            isZeta ? 'text-slate-500' : 'text-[#64748B]'
                          }`}>{data.label}</div>
                          <div className={`font-medium ${
                            isZeta ? 'text-slate-200' : 'text-[#0F172A]'
                          }`}>{data.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
      
      <BookDemoSection />
    </div>
  );
};
