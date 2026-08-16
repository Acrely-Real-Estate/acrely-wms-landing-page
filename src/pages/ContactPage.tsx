import React from 'react';
import { Mail, Building2, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-64px)] pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Contact Acrely
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get in touch with our team for general enquiries, technical support, or partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Sales & Business */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Sales & Partnerships</h2>
            <p className="text-slate-600 mb-6 h-12">Discuss enterprise licensing, reseller partnerships, or customized deployment options.</p>
            <a href="mailto:sales@acrelywms.com" className="inline-flex items-center gap-2 text-lg font-semibold text-[#1E40AF] hover:text-[#2563EB] transition-colors">
              <Mail className="w-5 h-5" />
              sales@acrelywms.com
            </a>
          </div>

          {/* Technical Support */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Technical Support</h2>
            <p className="text-slate-600 mb-6 h-12">Existing customers requiring technical assistance, troubleshooting, or API integration help.</p>
            <a href="mailto:support@acrelywms.com" className="inline-flex items-center gap-2 text-lg font-semibold text-[#1E40AF] hover:text-[#2563EB] transition-colors">
              <Mail className="w-5 h-5" />
              support@acrelywms.com
            </a>
          </div>

          {/* General Enquiries */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm md:col-span-2">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-2">General Enquiries</h2>
                <p className="text-slate-600 max-w-md">For all other questions, media inquiries, or general information about Acrely WMS.</p>
              </div>
              <a href="mailto:info@acrelywms.com" className="inline-flex items-center gap-2 text-lg font-semibold text-[#1E40AF] hover:text-[#2563EB] transition-colors shrink-0">
                <Mail className="w-5 h-5" />
                info@acrelywms.com
              </a>
            </div>
          </div>
        </div>

        {/* Demo CTA */}
        <div className="bg-[#0F172A] text-white p-10 sm:p-12 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Ready to see Acrely WMS in action?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
            Schedule a personalized demonstration of our enterprise warehouse management platform.
          </p>
          <Link
            to="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold rounded-lg transition-colors shadow-lg"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
