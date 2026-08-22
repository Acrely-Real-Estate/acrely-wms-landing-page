import React from 'react';
import { BookDemoSection } from '../../components/sections/BookDemoSection';

import { ArrowDown, CheckCircle2, Search, Database, Box, Map, Users, Barcode, GraduationCap, Rocket } from 'lucide-react';

export const ImplementationPage: React.FC = () => {
  const steps = [
    {
      title: "01 Warehouse discovery",
      icon: Search,
      description: "We map your current workflows, integration requirements, and physical layout.",
      duration: "Preparation",
      acrelyHandles: ["Workflow analysis", "ERP integration scoping"],
      clientHandles: ["Providing current process documents", "Identifying key stakeholders"]
    },
    {
      title: "02 Product & SKU import",
      icon: Database,
      description: "Loading your item master data into Acrely.",
      duration: "Data Setup",
      acrelyHandles: ["Data formatting", "Import execution", "Data validation"],
      clientHandles: ["Exporting legacy item data", "Data cleanup"]
    },
    {
      title: "03 Opening inventory migration",
      icon: Box,
      description: "Establishing the starting balances for all stock.",
      duration: "Data Setup",
      acrelyHandles: ["Stock level import", "Validation against legacy system"],
      clientHandles: ["Executing full physical count (if needed)"]
    },
    {
      title: "04 Warehouse & location configuration",
      icon: Map,
      description: "Setting up your physical zones, aisles, and bin locations.",
      duration: "System Setup",
      acrelyHandles: ["Bin location matrix design", "Zone planning", "Tenant provisioning"],
      clientHandles: ["Providing floor plans", "Confirming storage logic"]
    },
    {
      title: "05 Users & permissions",
      icon: Users,
      description: "Creating accounts and defining access controls.",
      duration: "System Setup",
      acrelyHandles: ["Role-based access configuration"],
      clientHandles: ["Providing user list and role matrix"]
    },
    {
      title: "06 Barcode setup",
      icon: Barcode,
      description: "Generating physical labels for locations and validating product scans.",
      duration: "Physical Setup",
      acrelyHandles: ["Generating bin labels", "Testing scanner connectivity"],
      clientHandles: ["Physical application of labels on racks/bins"]
    },
    {
      title: "07 Training",
      icon: GraduationCap,
      description: "Ensuring your team knows how to execute daily operations.",
      duration: "Enablement",
      acrelyHandles: ["Manager training sessions", "Providing training materials"],
      clientHandles: ["Scheduling staff availability", "Completing practice exercises"]
    },
    {
      title: "08 Go-live",
      icon: Rocket,
      description: "System activation and first full shift on Acrely WMS.",
      duration: "Launch",
      acrelyHandles: ["Live issue resolution", "On-standby support"],
      clientHandles: ["Executing live transactions"]
    }
  ];

  return (
    <div className="bg-slate-50 pt-24 pb-12">
      <div className="bg-white border-b border-[#E5E7EB] pt-12 pb-16 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1E40AF] block mb-4">Implementation Process</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-6">
            How we move your warehouse to Acrely.
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Enterprise software shouldn't be a mystery. We use a structured, predictable process to configure your environment, migrate your data, and train your team.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-4 relative">
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-blue-100 rounded-full hidden md:block"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
            <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-12 p-6 md:p-8 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:border-[#1E40AF] transition-colors z-10 group">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-16 h-16 bg-blue-50 text-[#1E40AF] rounded-2xl flex items-center justify-center border-2 border-white shadow-md z-10 group-hover:bg-[#1E40AF] group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="mt-4 px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {step.duration}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                <p className="text-[#475569] text-lg mb-6">{step.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-[#E5E7EB]">
                  <div>
                    <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">Acrely Handles</h4>
                    <ul className="space-y-2">
                      {step.acrelyHandles.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#0F172A] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#1E40AF] shrink-0 mt-0.5" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">Client Handles</h4>
                    <ul className="space-y-2">
                      {step.clientHandles.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#64748B]">
                          <ArrowDown className="w-4 h-4 text-slate-400 shrink-0 mt-0.5 -rotate-45" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
      
      <BookDemoSection />
    </div>
  );
};
