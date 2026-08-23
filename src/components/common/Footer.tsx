import React, { useState } from 'react';
import { ArrowRight, Layers, Mail, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [showYoutubeToast, setShowYoutubeToast] = useState(false);

  const handleYoutubeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowYoutubeToast(true);
    setTimeout(() => setShowYoutubeToast(false), 3000);
  };

  return (
    <footer className="border-t border-[#E5E7EB] bg-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6 pr-4">
            <Link to="/" className="group flex items-center gap-3 text-left inline-flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E40AF] text-white shadow-sm transition-colors group-hover:bg-[#2563EB]">
                <Layers className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">Acrely WMS</span>
            </Link>
            <p className="text-[#64748B] text-[15px] leading-relaxed max-w-sm">
              Acrely WMS is an enterprise warehouse management platform built to simplify inventory, warehouse operations, order fulfillment, and logistics across growing businesses.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            <div>
              <h3 className="text-xs font-bold text-[#0F172A] mb-5 tracking-wider uppercase">Product</h3>
              <ul className="space-y-4 text-[15px] font-medium text-[#64748B]">
                <li><Link to="/features" className="hover:text-[#1E40AF] transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-[#1E40AF] transition-colors">Pricing</Link></li>
                <li><Link to="/integrations" className="hover:text-[#1E40AF] transition-colors">Integrations</Link></li>
                <li><Link to="/security" className="hover:text-[#1E40AF] transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#0F172A] mb-5 tracking-wider uppercase">Company</h3>
              <ul className="space-y-4 text-[15px] font-medium text-[#64748B]">
                <li><Link to="/about" className="hover:text-[#1E40AF] transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-[#1E40AF] transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-[#1E40AF] transition-colors">Contact Sales</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#0F172A] mb-5 tracking-wider uppercase">Resources</h3>
              <ul className="space-y-4 text-[15px] font-medium text-[#64748B]">
                <li><Link to="/product-tour" className="hover:text-[#1E40AF] transition-colors">Product Tour</Link></li>
                <li><Link to="/documentation" className="hover:text-[#1E40AF] transition-colors">Documentation</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="lg:col-span-3 pt-2">
            <h3 className="text-xs font-bold text-[#0F172A] mb-5 tracking-wider uppercase">Contact</h3>
            <div className="space-y-6">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@acrelywms.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2.5 text-[#1E40AF] font-bold text-[15px] hover:underline"
              >
                <Mail className="h-5 w-5 text-[#1E40AF]/70" />
                info@acrelywms.com
              </a>
              <div>
                <Link 
                  to="/book-demo" 
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-[#1E40AF] text-white font-bold rounded-lg hover:bg-[#2563EB] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E40AF]"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <div className="relative flex">
                  <button 
                    onClick={handleYoutubeClick}
                    aria-label="YouTube"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:border-[#FF0000] hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-offset-2"
                  >
                    <Youtube className="h-5 w-5 text-[#FF0000] fill-[#FF0000] [&>path:last-child]:fill-white [&>path:last-child]:stroke-white" />
                  </button>
                  
                  {/* YouTube Toast Message */}
                  {showYoutubeToast && (
                    <div className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0F172A] px-3 py-1.5 text-xs font-semibold text-white shadow-lg animate-in fade-in zoom-in duration-200 z-10">
                      YouTube channel coming soon.
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#0F172A]" />
                    </div>
                  )}
                </div>

                <a 
                  href="https://www.linkedin.com/company/acrelywms"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2"
                >
                  <Linkedin className="h-5 w-5 bg-[#0A66C2] text-white fill-white rounded-[4px] p-[2px] border-none" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] font-medium text-[#94A3B8]">
            © 2026 Acrely Real Estate Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] font-medium text-[#64748B]">
            <Link to="/privacy" className="hover:text-[#0F172A] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#0F172A] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
