import React, { useState } from 'react';
import { Mail, Check, Copy } from 'lucide-react';

interface FooterCTAProps {
  onOpenContact: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('business@acrelywms.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          Interested in Acrely WMS?
        </h2>

        {/* Subtitle */}
        <p className="text-[#64748B] text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Contact our team to learn more about upcoming releases.
        </p>

        {/* Mail Button + Copy Email Utility */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3">
          
          {/* Main mailto Button */}
          <a
            href="mailto:business@acrelywms.com"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#1E40AF] hover:bg-[#2563EB] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <Mail className="w-4 h-4" />
            <span>business@acrelywms.com</span>
          </a>

          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-4 py-3 rounded-md bg-slate-50 hover:bg-slate-100 border border-[#E5E7EB] text-[#0F172A] font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Address Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                <span className="text-[#64748B]">Copy Address</span>
              </>
            )}
          </button>

        </div>

      </div>
    </section>
  );
};
