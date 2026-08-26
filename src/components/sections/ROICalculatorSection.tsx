import React, { useState } from 'react';
import { Calculator, TrendingUp, Users, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../ui/AnimatedSection';

export const ROICalculatorSection: React.FC = () => {
  const [employees, setEmployees] = useState(15);
  const [dailyOrders, setDailyOrders] = useState(500);

  const avgHourlyRate = 22;
  const hoursPerDay = 8;
  const daysPerYear = 260;
  
  const currentLaborCost = employees * avgHourlyRate * hoursPerDay * daysPerYear;
  const laborEfficiencyGain = 0.18; // 18% efficiency improvement
  const laborSavings = currentLaborCost * laborEfficiencyGain;

  const costPerError = 45; // Cost to fix, reship, or refund an error
  const currentErrorRate = 0.025; // 2.5% error rate
  const totalAnnualOrders = dailyOrders * daysPerYear;
  const currentErrorCost = totalAnnualOrders * currentErrorRate * costPerError;
  
  const errorReduction = 0.85; // 85% reduction in errors
  const errorSavings = currentErrorCost * errorReduction;

  const totalSavings = laborSavings + errorSavings;

  return (
    <section className="py-24 md:py-32 bg-[#0F172A] border-b border-slate-800 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block mb-2">
            ROI Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Cost of Doing Nothing
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            See how much you could save in the first year by upgrading to Acrely WMS and eliminating manual errors and operational friction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto items-center">
          
          {/* Sliders Container */}
          <div className="bg-[#1E293B] rounded-2xl border border-slate-700/50 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Your Operations</h3>
            </div>

            <div className="space-y-10">
              {/* Employee Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-bold text-slate-300">Warehouse Employees</label>
                  <span className="text-2xl font-bold text-white">{employees}</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="100" 
                  value={employees} 
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-500 mt-2">
                  <span>2</span>
                  <span>100+</span>
                </div>
              </div>

              {/* Orders Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-bold text-slate-300">Average Daily Orders</label>
                  <span className="text-2xl font-bold text-white">{dailyOrders.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="5000" 
                  step="50"
                  value={dailyOrders} 
                  onChange={(e) => setDailyOrders(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs font-semibold text-slate-500 mt-2">
                  <span>50</span>
                  <span>5,000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Container */}
          <div className="space-y-6">
            
            <div className="bg-[#1E293B] rounded-2xl border border-slate-700/50 p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <TrendingUp className="w-32 h-32 text-blue-400" />
              </div>
              
              <h4 className="text-sm font-bold text-slate-400 mb-2">Projected Annual Savings</h4>
              <div className="text-5xl sm:text-6xl font-extrabold text-white mb-8 tracking-tight">
                ${totalSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-300">Labor Efficiency</div>
                    <div className="text-emerald-400 font-bold">+${laborSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-300">Error Reduction</div>
                    <div className="text-blue-400 font-bold">+${errorSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/book-demo" className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#1E40AF] text-white font-bold rounded-xl hover:bg-[#2563EB] transition-colors shadow-lg">
              Start Saving Today <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>
      </AnimatedSection>
    </section>
  );
};
