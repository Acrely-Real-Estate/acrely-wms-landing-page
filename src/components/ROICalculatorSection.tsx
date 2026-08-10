import React, { useState } from 'react';
import { Calculator, TrendingDown, Clock, Users, ArrowRight } from 'lucide-react';

export const ROICalculatorSection: React.FC = () => {
  const [employees, setEmployees] = useState(10);
  const [orders, setOrders] = useState(500);

  // Simplified ROI calculation logic (for demonstration of enterprise value)
  const hourlyRate = 20; // Assume $20/hr
  const hoursSavedPerEmployee = 1.5; // 1.5 hours saved per day per employee
  const daysPerMonth = 22;
  
  const monthlyLaborSavings = employees * hoursSavedPerEmployee * hourlyRate * daysPerMonth;
  const annualLaborSavings = monthlyLaborSavings * 12;

  // Assuming error reduction saves $10 per wrong order, and error rate drops by 2%
  const errorReductionSavingsMonthly = orders * daysPerMonth * 0.02 * 10;
  const errorReductionSavingsAnnual = errorReductionSavingsMonthly * 12;

  const totalAnnualSavings = annualLaborSavings + errorReductionSavingsAnnual;

  return (
    <section className="py-24 bg-[#0F172A] border-b border-slate-800 text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
              Business Case
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Calculate Your Warehouse ROI
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Acrely WMS isn't an expense—it's an operational investment. Estimate your annual savings by reducing manual labor hours and minimizing fulfillment errors.
            </p>

            <div className="space-y-6 bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-300">Warehouse Employees</label>
                  <span className="text-lg font-bold text-white">{employees}</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="100" 
                  value={employees} 
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-300">Orders Processed per Day</label>
                  <span className="text-lg font-bold text-white">{orders.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="5000" 
                  step="50"
                  value={orders} 
                  onChange={(e) => setOrders(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="pt-4 border-t border-slate-700 text-xs text-slate-500 leading-relaxed">
                * Calculation assumes 1.5 hours saved per employee daily through barcode scanning vs paper picking, and a 2% reduction in shipping errors valued at $10/error.
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl text-[#0F172A] relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Estimated ROI</h3>
                  <p className="text-sm text-[#64748B]">Projected annual savings</p>
                </div>
              </div>

              <div className="mb-10">
                <div className="text-6xl font-extrabold text-[#0F172A] tracking-tight">
                  ${totalAnnualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <p className="text-emerald-600 font-bold mt-2 flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4" />
                  Cost reduction per year
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <Clock className="w-5 h-5 text-[#64748B] mb-2" />
                  <div className="text-xl font-bold text-[#0F172A]">${annualLaborSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                  <div className="text-xs text-[#64748B] font-medium">Labor Efficiency Savings</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <Users className="w-5 h-5 text-[#64748B] mb-2" />
                  <div className="text-xl font-bold text-[#0F172A]">${errorReductionSavingsAnnual.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                  <div className="text-xs text-[#64748B] font-medium">Error Reduction Savings</div>
                </div>
              </div>

              <button className="w-full py-4 bg-[#1E40AF] text-white font-bold rounded-xl hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-2">
                Discuss Your ROI with Sales
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
