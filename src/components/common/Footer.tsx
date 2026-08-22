import React from 'react';
import { BookOpen, Layers, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white pt-12 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-[#E5E7EB] pb-12 md:grid-cols-12">
          <div className="space-y-3 md:col-span-5">
            <Link to="/" className="group flex items-center gap-2 text-left">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#1E40AF] text-xs font-bold text-white shadow-sm transition-colors group-hover:bg-[#2563EB]">
                <Layers className="h-3.5 w-3.5" />
              </div>
              <span className="text-base font-bold tracking-tight text-[#0F172A]">Acrely WMS</span>
            </Link>

            <p className="max-w-sm text-xs font-medium leading-relaxed text-[#64748B]">
              Acrely WMS is a part of the Acrely Real Estate Group. Enterprise-grade warehouse management and logistics automation.
            </p>

            <div className="flex flex-col items-start gap-4 pt-2">
              <a
                href="mailto:info@acrelywms.com"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E40AF] hover:underline"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>info@acrelywms.com</span>
              </a>

              <Link
                to="/book-demo"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#1E40AF] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#2563EB]"
              >
                <span>Book a Demo</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-7 lg:grid-cols-4">
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0F172A]">Product</h4>
              <ul className="space-y-2 text-xs font-medium text-[#64748B]">
                <li>
                  <a href="https://demo.acrelywms.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#0F172A]">Explore the Platform (Beta)</a>
                </li>
                <li>
                  <Link to="/features" className="transition-colors hover:text-[#0F172A]">Features</Link>
                </li>
                <li>
                  <Link to="/pricing" className="transition-colors hover:text-[#0F172A]">Pricing</Link>
                </li>
                <li>
                  <Link to="/integrations" className="transition-colors hover:text-[#0F172A]">Integrations</Link>
                </li>
                <li>
                  <Link to="/security" className="transition-colors hover:text-[#0F172A]">Security</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0F172A]">Resources</h4>
              <ul className="space-y-2 text-xs font-medium text-[#64748B]">
                <li>
                  <Link
                    to="/documentation"
                    className="flex items-center gap-1.5 font-bold text-[#1E40AF] transition-colors hover:underline"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Documentation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/implementation" className="transition-colors hover:text-[#0F172A]">Implementation</Link>
                </li>
                <li>
                  <Link to="/download" className="transition-colors hover:text-[#0F172A]">Download</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0F172A]">Company</h4>
              <ul className="space-y-2 text-xs font-medium text-[#64748B]">
                <li>
                  <Link to="/about" className="transition-colors hover:text-[#0F172A]">About Us</Link>
                </li>
                <li>
                  <Link to="/careers" className="transition-colors hover:text-[#0F172A]">Careers</Link>
                </li>
                <li>
                  <Link to="/contact" className="transition-colors hover:text-[#0F172A]">Contact Sales</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0F172A]">Legal</h4>
              <ul className="space-y-2 text-xs font-medium text-[#64748B]">
                <li>
                  <Link to="/privacy" className="block text-left transition-colors hover:text-[#0F172A]">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="block text-left transition-colors hover:text-[#0F172A]">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-[10px] font-medium text-[#94A3B8]">
            © {new Date().getFullYear()} Acrely Real Estate Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="rounded border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1E40AF]">
              System Status: All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
