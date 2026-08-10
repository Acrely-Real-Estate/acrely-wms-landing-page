import React from 'react';
import { featuresContent } from '../data/featuresContent';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, ArrowRight } from 'lucide-react';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-8">
      <section className="py-16 md:py-24 bg-slate-50/50 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] block mb-2">
              Platform Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Enterprise-grade tools for modern warehouse operations
            </h1>
            <p className="text-[#64748B] text-base sm:text-lg mt-3 leading-relaxed">
              Acrely WMS provides a comprehensive suite of capabilities designed to automate workflows, maximize occupancy, and increase profitability across your real estate portfolio.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {featuresContent.map((feature) => {
              const Icon = feature.icon;
              const businessValue = feature.businessValue;

              return (
                <Link
                  key={feature.id}
                  to={`/features/${feature.id}`}
                  className="group bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#1E40AF] flex items-center justify-center mb-6 group-hover:bg-[#1E40AF] group-hover:text-white group-hover:border-[#1E40AF] transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight mb-3 group-hover:text-[#1E40AF] transition-colors leading-snug">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      {feature.heroSubheadline.length > 120 ? feature.heroSubheadline.substring(0, 117) + '...' : feature.heroSubheadline}
                    </p>
                  </div>

                  <div>
                    <div className="mb-6 p-3 rounded-lg bg-emerald-50/50 border border-emerald-100/80">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="block text-[10px] font-bold text-emerald-800 uppercase tracking-wider mb-0.5">Business Value</span>
                          <span className="block text-xs font-medium text-emerald-900 leading-snug">{businessValue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1E40AF]">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
      
      {/* Short CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold mb-6">Ready to modernize your warehouse operations?</h2>
          <p className="text-blue-200 text-lg mb-10">Join leading enterprise operators scaling their business with Acrely WMS.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#1E40AF] font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/product-tour"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/30 font-bold text-sm rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <span>Product Tour</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
