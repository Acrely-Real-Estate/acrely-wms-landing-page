import React, { useState } from 'react';
import { Layers, Mail, BookOpen, ShieldCheck } from 'lucide-react';
import { LegalModal } from './LegalModal';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-white border-t border-[#E5E7EB] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E5E7EB]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-left cursor-pointer group"
            >
              <div className="w-6 h-6 rounded bg-[#1E40AF] text-white flex items-center justify-center font-bold text-xs shadow-sm group-hover:bg-[#2563EB] transition-colors">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-[#0F172A] tracking-tight text-base">
                Acrely WMS
              </span>
            </Link>
            
            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm font-medium">
              Acrely WMS is a part of the Acrely Real Estate Group. Enterprise-grade warehouse management and logistics automation.
            </p>

            <div className="pt-2 flex flex-col items-start gap-4">
              <a
                href="mailto:info@acrely.in"
                className="inline-flex items-center gap-1.5 text-xs text-[#1E40AF] hover:underline font-semibold"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@acrely.in</span>
              </a>
              
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1E40AF] hover:bg-[#2563EB] px-4 py-2 rounded-md transition-colors shadow-sm cursor-pointer"
              >
                <span>Book a Demo</span>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Product Links */}
            <div>
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">
                Product
              </h4>
              <ul className="space-y-2 text-xs font-medium text-[#64748B]">
                <li>
                  <Link to="/product-tour" className="hover:text-[#0F172A] transition-colors">Product Tour</Link>
                </li>
                <li>
                  <Link to="/features" className="hover:text-[#0F172A] transition-colors">Features</Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-[#0F172A] transition-colors">Pricing</Link>
                </li>
                <li>
                  <Link to="/download" className="hover:text-[#0F172A] transition-colors">Download</Link>
                </li>
                <li>
                  <Link to="/integrations" className="hover:text-[#0F172A] transition-colors">Integrations</Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">
                Resources
              </h4>
              <ul className="space-y-2 text-xs font-medium text-[#64748B]">
                <li>
                  <Link
                    to="/documentation"
                    className="flex items-center gap-1.5 text-[#1E40AF] font-bold hover:underline transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Documentation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="flex items-center gap-1.5 hover:text-[#0F172A] transition-colors">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Security</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-xs font-medium text-[#64748B]">
                <li>
                  <Link to="/about" className="hover:text-[#0F172A] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-[#0F172A] transition-colors">Careers</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#0F172A] transition-colors">Contact Sales</Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-xs font-medium text-[#64748B]">
                <li>
                  <button
                    onClick={() => setLegalModal('privacy')}
                    className="hover:text-[#0F172A] transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalModal('terms')}
                    className="hover:text-[#0F172A] transition-colors cursor-pointer text-left"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-medium text-[#94A3B8]">
            © {new Date().getFullYear()} Acrely. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-[#1E40AF] px-2 py-0.5 rounded bg-blue-50 border border-blue-100 uppercase tracking-wider">
              System Status: All Systems Operational
            </span>
          </div>
        </div>
      </div>

      {/* Global Legal Modal triggered from footer */}
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </footer>
  );
};
