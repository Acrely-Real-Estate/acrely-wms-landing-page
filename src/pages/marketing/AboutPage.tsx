import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Database, 
  Layers, 
  Play, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Workflow, 
  Zap, 
  User, 
  Users, 
  Briefcase, 
  LineChart, 
  Compass, 
  Network, 
  Clock, 
  Lock,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const capabilityCards = [
    {
      title: "Inventory Control",
      description: "Know what is in the warehouse and where it is.",
      icon: Database
    },
    {
      title: "Workflow Execution",
      description: "Guide teams through operational tasks.",
      icon: Workflow
    },
    {
      title: "Operational Visibility",
      description: "Understand warehouse activity as it happens.",
      icon: Activity
    },
    {
      title: "Decision Support",
      description: "Turn operational data into useful information.",
      icon: LineChart
    }
  ];

  const problemCards = [
    {
      title: "Complex interfaces",
      description: "Warehouse systems can become difficult for frontline users to navigate.",
      icon: Compass
    },
    {
      title: "Disconnected operations",
      description: "Information can become fragmented across systems, spreadsheets and manual processes.",
      icon: Network
    },
    {
      title: "Limited visibility",
      description: "Managers need a clearer picture of inventory and warehouse activity.",
      icon: AlertTriangle
    },
    {
      title: "Operational friction",
      description: "Small errors and unclear workflows can create delays and unnecessary work.",
      icon: Clock
    }
  ];

  const principles = [
    {
      num: "01",
      title: "Ease of Use",
      description: "Warehouse software should be understandable to the people actually using it on the floor."
    },
    {
      num: "02",
      title: "Operational Clarity",
      description: "Users should be able to quickly understand what happened, what is happening, and what requires attention."
    },
    {
      num: "03",
      title: "Configurable Operations",
      description: "Warehouse workflows should adapt to business requirements without requiring unnecessary custom development."
    },
    {
      num: "04",
      title: "Reliable Execution",
      description: "Every operational action should be traceable, consistent and designed for real warehouse conditions."
    }
  ];

  const roles = [
    {
      title: "Warehouse Operators",
      description: "Clear workflows and practical execution tools.",
      icon: User
    },
    {
      title: "Supervisors",
      description: "Better visibility into tasks, inventory and operational exceptions.",
      icon: Users
    },
    {
      title: "Warehouse Managers",
      description: "Centralized operational information for faster decisions.",
      icon: Briefcase
    },
    {
      title: "Business & Operations Teams",
      description: "Useful data and reporting without unnecessary complexity.",
      icon: LineChart
    }
  ];

  const platformCategories = [
    {
      title: "CORE OPERATIONS",
      badge: "Operational Foundation",
      features: [
        { name: "Inventory Management", id: "inventory-management" },
        { name: "Transfers", id: "transfers" },
        { name: "Reservations", id: "reservations" },
        { name: "Counting", id: "cycle-counting" },
        { name: "Damage & Quarantine", id: "damaged-inventory" }
      ]
    },
    {
      title: "TRACEABILITY",
      badge: "Compliance & Audit",
      features: [
        { name: "Serial Numbers", id: "serial-numbers" },
        { name: "Lot & Batch", id: "lot-batch-tracking" },
        { name: "Expiry & FEFO", id: "expiry-fefo" },
        { name: "Stock Aging", id: "stock-aging" }
      ]
    },
    {
      title: "INTELLIGENCE",
      badge: "Insights & Reporting",
      features: [
        { name: "Acrely Insights", id: "insights" },
        { name: "Zeta AI", id: "zeta-ai" },
        { name: "Warehouse Command Center", id: "warehouse-command-center" }
      ]
    },
    {
      title: "WORKFLOW & EXECUTION",
      badge: "On-Floor Execution",
      features: [
        { name: "Workflow Builder", id: "workflow-builder" },
        { name: "Smart Error Resolution", id: "smart-error-resolution" },
        { name: "Acrely Scan", id: "acrely-scan" },
        { name: "Multilingual Warehouse", id: "multilingual-warehouse" }
      ]
    },
    {
      title: "PLATFORM",
      badge: "Enterprise Security",
      features: [
        { name: "Integrations Hub", id: "integrations-hub" },
        { name: "Multi-Warehouse & Multi-Client", id: "multi-warehouse-multi-client" },
        { name: "Acrely Migration Center", id: "migration-center" },
        { name: "Acrely Sandbox", id: "acrely-sandbox" },
        { name: "Release Safety Center", id: "release-safety-center" }
      ]
    }
  ];

  const roadmapPhases = [
    {
      phase: "PHASE 1",
      title: "Core Operational Precision",
      status: "Live & Configurable",
      description: "Establishing bulletproof warehouse fundamentals and scanning workflows.",
      items: [
        "Barcode & QR-based execution (Acrely Scan)",
        "Configurable rules (Workflow Builder)",
        "Core inventory ledgers & multi-level UOMs"
      ]
    },
    {
      phase: "PHASE 2",
      title: "Operational Intelligence",
      status: "Active Development",
      description: "Empowering frontline and back-office staff with smart assisted decision-making.",
      items: [
        "AI-assisted operational intelligence (Zeta AI)",
        "Deeper, standard integrations (Integrations Hub)",
        "Multilingual warehouse interfaces for floor operations"
      ]
    },
    {
      phase: "PHASE 3",
      title: "Multi-Site Scale & Control",
      status: "Roadmap Priority",
      description: "Managing multiple logistics sites with enterprise sandbox and migration environments.",
      items: [
        "Enterprise Multi-Warehouse management",
        "Safer configuration and release safety workflows",
        "Seamless database migrations & sandbox deployments"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-16 font-sans">
      
      {/* SECTION 1 — HERO */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 border-b border-[#E5E7EB] bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1E40AF] bg-blue-50 border border-blue-200/55 rounded">
                ABOUT ACRELY WMS
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
                Warehouse management, <br />
                <span className="text-[#1E40AF]">built around the people</span> who operate it.
              </h1>
              
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
                Acrely WMS is an enterprise warehouse management platform designed to help businesses control inventory, execute warehouse workflows, and understand what is happening across their operations — without unnecessary complexity.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/book-demo"
                  className="px-6 py-3.5 rounded-md bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  Book a Demo
                </Link>
                <a
                  href="https://demo.acrelywms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-md bg-white hover:bg-slate-50 text-[#0F172A] border border-[#E5E7EB] hover:border-slate-300 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  Explore the Platform (Beta)
                </a>
              </div>
            </div>
            
            {/* Right Hero Column: System Mockup */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="w-full max-w-md relative rounded-2xl bg-white border border-[#E5E7EB] shadow-xl overflow-hidden font-sans">
                
                {/* Device Mockup Top Bar */}
                <div className="h-11 bg-slate-900 flex items-center justify-between px-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-white font-semibold tracking-wider text-[10px]">ACRELY SCAN V2.1</span>
                  </div>
                  <div className="text-[10px] text-slate-500">OP-304 // M. KELLER</div>
                </div>
                
                {/* Active Session Area */}
                <div className="p-4 bg-slate-50 border-b border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">ACTIVE WORKFLOW</span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-[#1E40AF] text-[9px] font-semibold">PUTAWAY / STORAGE</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#0F172A]">Task #9482-B • Inbound Pallet</h4>
                  
                  {/* Progress visual */}
                  <div className="mt-2.5 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#1E40AF] h-full w-2/3"></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-500 mt-1">
                    <span>Pallets Placed: 4 of 6</span>
                    <span>66% Complete</span>
                  </div>
                </div>
                
                {/* Handheld Scan Form */}
                <div className="p-4 bg-white space-y-3.5">
                  {/* Action prompt */}
                  <div className="p-2.5 bg-blue-50 border border-blue-100/60 rounded-md flex items-start gap-2.5">
                    <span className="mt-0.5 text-[#1E40AF] font-bold text-xs">→</span>
                    <div>
                      <p className="text-xs font-semibold text-[#1E40AF]">Scan Target Location</p>
                      <p className="text-[10px] text-[#475569] mt-0.5">Please scan the barcode of rack location in Aisle 4.</p>
                    </div>
                  </div>
                  
                  {/* Ledger summary */}
                  <div className="border border-slate-150 rounded-md p-3 text-[11px] bg-slate-50 space-y-1.5">
                    <div className="flex justify-between pb-1.5 border-b border-slate-200 font-mono text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      <span>ITEM DETAILS</span>
                      <span>LEDGER LOGS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">SKU:</span>
                      <span className="font-semibold text-slate-800">ACR-7740-X</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">LOT:</span>
                      <span className="font-semibold text-slate-800">#B2026-08</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">QUANTITY:</span>
                      <span className="font-semibold text-slate-800">48 Units (1 Pallet)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">TARGET:</span>
                      <span className="font-semibold text-[#1E40AF]">04-B-03 (Aisle 4, Tier 3)</span>
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex gap-2">
                    <div className="flex-1 py-1.5 px-3 border border-slate-200 rounded text-center text-[10px] font-medium text-slate-500 bg-slate-50">
                      Hold Task
                    </div>
                    <div className="flex-1 py-1.5 px-3 bg-emerald-600 text-white rounded text-center text-[10px] font-bold shadow-xs flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      Verify Scan
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT WE ARE BUILDING */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Vision details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF]">
                WHAT WE ARE BUILDING
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                A more practical approach to warehouse management.
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Warehouse operations are built around physical movement: receiving, storing, moving, picking, packing, counting and dispatching inventory.
                </p>
                <p>
                  The software controlling those operations should make those movements easier to understand and execute.
                </p>
                <p className="font-semibold text-[#0F172A]">
                  Acrely WMS is being built around that principle.
                </p>
                <p>
                  We focus on operational visibility, inventory accuracy, workflow execution, integrations and tools that help warehouse teams make decisions faster.
                </p>
              </div>
            </div>

            {/* Right Column: Capabilities */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {capabilityCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={i} className="border border-[#E5E7EB] bg-slate-50/50 hover:bg-slate-50 rounded-xl p-5 transition-colors">
                    <div className="w-10 h-10 rounded bg-[#1E40AF]/10 flex items-center justify-center text-[#1E40AF] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5">{card.title}</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — THE PROBLEM WE CARE ABOUT */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB] bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-600 mb-2">
              THE PROBLEM
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Warehouse software should reduce complexity, not add to it.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="bg-white border border-[#E5E7EB] hover:border-slate-300 rounded-xl p-6 transition-colors shadow-2xs">
                  <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center text-red-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">{card.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4 — OUR PRODUCT PHILOSOPHY */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] mb-2">
              OUR PRODUCT PHILOSOPHY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Powerful underneath. Simple where it matters.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((pr, i) => (
              <div key={i} className="border border-[#E5E7EB] bg-white rounded-xl p-6 shadow-2xs relative overflow-hidden flex flex-col justify-between min-h-[180px]">
                <div>
                  <span className="text-2xl font-black text-blue-100 font-mono tracking-tight block mb-2">{pr.num}</span>
                  <h3 className="text-base font-extrabold text-[#0F172A] mb-2">{pr.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{pr.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — BUILT FOR THE WAREHOUSE FLOOR */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB] bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF]">
                BUILT FOR REAL OPERATIONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Designed for the people doing the work.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Too much software is designed for back-office purchasing managers, leaving floor operators to struggle with sluggish, hard-to-read, and non-responsive tools. 
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Acrely WMS is built from the ground up for actual physical workflows, optimizing interfaces for rapid industrial device usage and real-world warehouse layouts.
              </p>
            </div>

            {/* Right List of Roles */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex gap-4 items-start shadow-2xs">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#475569] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A] mb-1">{r.title}</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — THE ACRELY WMS PLATFORM */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] mb-2">
              THE PLATFORM
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              One platform for the warehouse operation.
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Click any of our active or upcoming features below to view detailed workflows and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {platformCategories.map((cat, i) => (
              <div key={i} className="border border-[#E5E7EB] rounded-xl p-5 flex flex-col justify-between bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div>
                  <div className="border-b border-[#E5E7EB] pb-3 mb-4">
                    <span className="text-[10px] font-bold text-[#1E40AF] block uppercase tracking-wider">{cat.title}</span>
                    <span className="text-[9px] font-medium text-slate-400 block mt-0.5">{cat.badge}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <Link 
                          to={`/features/${feat.id}`}
                          className="group flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1E40AF] transition-colors cursor-pointer"
                        >
                          <span className="truncate">{feat.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1E40AF] group-hover:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 — WHY ACRELY */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB] bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF]">
                WHY ACRELY WMS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Built with a different priority.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Acrely WMS is being developed around operational clarity, usability and practical warehouse execution. We do not design for bureaucracy, we design for high-throughput, error-free physical operation.
              </p>
            </div>

            {/* Right Large Statement Cards */}
            <div className="lg:col-span-7 space-y-4">
              {[
                { num: "01", text: "Make warehouse operations easier to understand." },
                { num: "02", text: "Make operational software easier to use." },
                { num: "03", text: "Make warehouse data more useful for the people making decisions." }
              ].map((statement, idx) => (
                <div key={idx} className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex items-center gap-6 shadow-2xs">
                  <span className="text-xl sm:text-2xl font-black text-blue-100 font-mono tracking-tight shrink-0">{statement.num}</span>
                  <p className="text-sm sm:text-base font-bold text-[#0F172A]">{statement.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — OUR APPROACH TO INNOVATION */}
      <section className="py-16 md:py-24 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] mb-2">
              WHAT WE ARE WORKING TOWARD
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Modern warehouse management should keep getting smarter.
            </h2>
          </div>

          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {roadmapPhases.map((phase, idx) => (
              <div key={idx} className="relative bg-white border border-[#E5E7EB] hover:border-slate-300 rounded-xl p-6 flex flex-col justify-between shadow-2xs transition-all">
                
                {/* Horizontal progress/link line overlay on desktop */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200 z-10"></div>
                )}
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                      {phase.phase}
                    </span>
                    <span className={`text-[9px] font-semibold px-2 py-0.5 rounded ${
                      phase.status === "Live & Configurable" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                      phase.status === "Active Development" ? "bg-blue-50 text-blue-700 border border-blue-100" :
                      "bg-amber-50 text-amber-700 border border-amber-150"
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">{phase.title}</h3>
                  <p className="text-xs text-[#64748B] mb-5 leading-relaxed">{phase.description}</p>
                  
                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    {phase.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9 — CLOSING CTA */}
      <section className="bg-[#0F172A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
        
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs sm:text-sm">READY TO SYSTEMATIZE YOUR WAREHOUSE?</span>
          
          <h2 className="text-2xl sm:text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            See how Acrely WMS can fit your operation.
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Explore the platform, review its capabilities, or speak with the Acrely WMS team about your warehouse requirements.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1E40AF] text-white font-bold rounded-md hover:bg-[#2563EB] transition-colors shadow-lg text-sm flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/features"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 text-slate-200 border border-slate-700/80 font-bold rounded-md hover:bg-slate-750 hover:text-white transition-colors text-sm flex items-center justify-center"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
