import React from 'react';
import { ArrowRight, Code, Database, Webhook, FileSpreadsheet, Server, Building2, ShoppingCart, CheckCircle2, Clock, Calendar, ArrowDown } from 'lucide-react';
import { BookDemoSection } from '../components/docs/BookDemoSection';

export const IntegrationsPage: React.FC = () => {
  const categories = [
    {
      title: "AVAILABLE NOW",
      status: "Live",
      statusIcon: CheckCircle2,
      statusColor: "text-emerald-600",
      statusBg: "bg-emerald-50",
      items: [
        { name: "CSV / Excel", icon: FileSpreadsheet, description: "Upload massive inventory logs or item master files securely.", type: "File Import" },
        { name: "REST API", icon: Code, description: "Full programmatic access to read and write WMS data.", type: "Developer Tool" }
      ]
    },
    {
      title: "IN DEVELOPMENT",
      status: "Coming Soon",
      statusIcon: Clock,
      statusColor: "text-amber-600",
      statusBg: "bg-amber-50",
      items: [
        { name: "Tally", icon: Database, description: "Accounting and inventory synchronization.", type: "Accounting" },
        { name: "Shopify", icon: ShoppingCart, description: "Two-way sync for orders, fulfillment status, and stock levels.", type: "E-Commerce" },
        { name: "QuickBooks", icon: Building2, description: "Sync purchase orders and inventory valuation automatically.", type: "Accounting" }
      ]
    },
    {
      title: "PLANNED / ENTERPRISE",
      status: "Planned / Custom",
      statusIcon: Calendar,
      statusColor: "text-blue-600",
      statusBg: "bg-blue-50",
      items: [
        { name: "SAP", icon: Server, description: "Enterprise-grade integration for global supply chains.", type: "ERP" },
        { name: "Oracle ERP", icon: Server, description: "Seamless flow of fulfillment data back to Oracle.", type: "ERP" }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1E40AF] block mb-4">Connectivity</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-6">
            System Integrations
          </h1>
          <p className="text-xl text-[#64748B] leading-relaxed mb-12">
            Acrely WMS is built to connect with the tools you already use. We believe in transparency—here is exactly what is available today, and what we are building next.
          </p>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm mb-12 max-w-2xl">
            <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-6">Why integrations matter</h3>
            
            <div className="flex flex-col items-center max-w-sm mx-auto">
              <div className="w-full bg-[#1E40AF] text-white font-bold py-3 px-6 rounded-lg text-center shadow-sm">
                Acrely WMS
              </div>
              
              <div className="flex flex-col items-center my-3 text-slate-400">
                <ArrowDown className="w-5 h-5" />
                <ArrowDown className="w-5 h-5 -mt-2" />
              </div>
              
              <div className="w-full bg-slate-100 text-[#0F172A] font-bold py-3 px-6 rounded-lg text-center border border-slate-200">
                ERP / Commerce / Accounting Systems
              </div>
              
              <div className="mt-6 text-sm font-medium text-[#475569] text-center">
                Operational data synchronization
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              <div className="flex flex-wrap items-center gap-3 mb-8 border-b border-[#E5E7EB] pb-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">{category.title}</h2>
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${category.statusBg} ${category.statusColor}`}>
                  <category.statusIcon className="w-3.5 h-3.5" />
                  {category.status}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col h-full shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-slate-50 text-[#1E40AF] flex items-center justify-center border border-slate-100">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.name}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed flex-1">{item.description}</p>
                    
                    {category.status === "Live" && (
                      <a href="/documentation" className="inline-flex items-center gap-1 text-sm font-bold text-[#1E40AF] mt-6 hover:underline">
                        View Documentation <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <BookDemoSection />
    </div>
  );
};
