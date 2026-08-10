import React from 'react';
import { Monitor, Smartphone, Apple, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DownloadPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-64px)] pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Acrely WMS
          </h1>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Your warehouse, ready when you are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-slate-100 text-[#0F172A] rounded-xl flex items-center justify-center mb-6">
              <Monitor className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Desktop Application</h2>
            <p className="text-slate-600 mb-6 flex-1">Windows & macOS clients for warehouse administrators.</p>
            <button disabled className="w-full py-3 bg-slate-100 text-slate-400 font-bold rounded-lg cursor-not-allowed">
              Coming Soon
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-slate-100 text-[#0F172A] rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Android Application</h2>
            <p className="text-slate-600 mb-6 flex-1">For rugged warehouse scanners and Android mobile devices.</p>
            <button disabled className="w-full py-3 bg-slate-100 text-slate-400 font-bold rounded-lg cursor-not-allowed">
              Coming Soon
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-slate-100 text-[#0F172A] rounded-xl flex items-center justify-center mb-6">
              <Apple className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-2">iOS Application</h2>
            <p className="text-slate-600 mb-6 flex-1">For iPhone and iPad warehouse floor operators.</p>
            <button disabled className="w-full py-3 bg-slate-100 text-slate-400 font-bold rounded-lg cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>

        <div className="bg-[#0F172A] text-white p-10 sm:p-12 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Want to see the platform?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
            You can access our interactive demonstration environment right from your browser.
          </p>
          <Link
            to="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold rounded-lg transition-colors shadow-lg"
          >
            <span>Open Demo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
