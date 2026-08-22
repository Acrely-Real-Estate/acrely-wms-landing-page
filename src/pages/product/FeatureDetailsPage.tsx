import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle,
  BarChart3,
  QrCode,
  ArrowDownToLine,
  Box,
  Truck,
  RotateCcw,
  Sparkles,
  Package,
  FileSpreadsheet,
  CheckSquare,
  Globe,
  ArrowRightLeft,
  ClipboardList,
  Lock,
  Layers
} from 'lucide-react';

import { featureRegistry } from '../../data/featureRegistry';

export const FeatureDetailsPage: React.FC = () => {
  const { featureId } = useParams<{ featureId: string }>();
  const [feature, setFeature] = useState<any>(null);

  useEffect(() => {
    if (featureId) {
      const found = featureRegistry.find(f => f.id === featureId);
      setFeature(found || null);
    }
  }, [featureId]);

  useEffect(() => {
    if (feature) {
      document.title = `${feature.title} | Acrely WMS`;
    }
  }, [feature]);

  if (!feature) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5E7EB] max-w-md text-center">
          <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-[#0F172A] mb-3">Feature Not Found</h1>
          <p className="text-slate-500 mb-8">The feature you are looking for does not exist or has been moved.</p>
          <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E40AF] text-white font-bold rounded-lg hover:bg-[#2563EB] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Features
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-white min-h-screen pb-24">
      
      {/* Header */}
      <section className="bg-slate-900 pt-20 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <Link to="/features" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Features
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <feature.icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {feature.title}
              </h1>
              {feature.isComingSoon && (
                <div className="mt-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          </div>
          <p className="text-slate-300 text-xl leading-relaxed">
            {feature.shortDesc || feature.heroSubheadline}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Business Problem */}
        {feature.businessProblem && (
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
              The Business Problem
            </h2>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
              {Array.isArray(feature.businessProblem) 
                ? feature.businessProblem.map((prob: string, i: number) => (
                    <p key={i} className="text-[#334155] text-lg leading-relaxed">{prob}</p>
                  ))
                : <p className="text-[#334155] text-lg leading-relaxed">{feature.businessProblem}</p>
              }
            </div>
          </section>
        )}

        {/* Operational Workflow */}
        {feature.workflow && feature.workflow.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
              Operational Workflow
            </h2>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm">
              <ol className="relative border-l border-slate-200 ml-3 space-y-8">
                {feature.workflow.map((step: string, idx: number) => (
                  <li key={idx} className="pl-8 relative">
                    <span className="absolute w-6 h-6 bg-[#1E40AF] rounded-full -left-3 flex items-center justify-center text-white text-xs font-bold ring-4 ring-white">
                      {idx + 1}
                    </span>
                    <p className="text-[#334155] font-medium pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Grid: Capabilities & Benefits */}
        <div className="grid md:grid-cols-2 gap-12">
          
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
              Key Capabilities
            </h2>
            <ul className="space-y-4">
              {feature.capabilities?.map((cap: string, idx: number) => {
                const parts = cap.split(': ');
                const title = parts[0];
                const desc = parts.slice(1).join(': ');
                return (
                  <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#1E40AF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F172A] block">{title}</span>
                      {desc && <span className="text-[#64748B] text-sm leading-relaxed block mt-1">{desc}</span>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
              Business Benefits
            </h2>
            <ul className="space-y-4">
              {feature.benefits?.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-medium text-emerald-900">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Use Cases */}
        {feature.useCases && feature.useCases.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
              Common Use Cases
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {feature.useCases.map((useCase: string, idx: number) => (
                <div key={idx} className="bg-slate-50 border border-[#E5E7EB] p-5 rounded-xl">
                  <p className="text-[#334155] text-sm leading-relaxed">{useCase}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {feature.faq && feature.faq.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {feature.faq.map((item: any, idx: number) => (
                <div key={idx} className="bg-white border border-[#E5E7EB] p-6 rounded-xl shadow-sm">
                  <h4 className="flex items-start gap-3 font-bold text-[#0F172A] mb-3">
                    <HelpCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    {item.q}
                  </h4>
                  <p className="text-[#64748B] leading-relaxed pl-8">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Modules */}
        {feature.related && feature.related.length > 0 && (
          <section className="pt-12 border-t border-[#E5E7EB]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748B] mb-6 text-center">
              Explore Related Modules
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {feature.related.map((rel: any, idx: number) => (
                <Link 
                  key={idx}
                  to={`/features/${rel.id || rel.path}`}
                  className="px-6 py-3 bg-white border border-[#E5E7EB] rounded-lg shadow-sm hover:border-[#1E40AF] hover:text-[#1E40AF] transition-colors font-medium text-[#0F172A]"
                >
                  {rel.name}
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
