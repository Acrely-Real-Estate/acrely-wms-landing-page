import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BookDemoSection: React.FC = () => {
  return (
    <div className="bg-[#0F172A] border-t border-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">READY TO SEE ACRELY WMS IN ACTION?</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          See how Acrely WMS can fit your warehouse operations.
        </h2>
        <div className="flex justify-center mt-8">
          <Link
            to="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E40AF] text-white font-bold rounded-lg hover:bg-[#2563EB] transition-colors shadow-lg"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
