import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg border border-[#E5E7EB] max-w-xl w-full p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-150 max-h-[85vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E40AF]">
              {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">
                {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-[#64748B]">Acrely Enterprise OS • Version 1.0</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#64748B] hover:text-[#0F172A] p-1 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legal Content */}
        <div className="py-4 overflow-y-auto text-xs text-[#64748B] space-y-4 leading-relaxed pr-2">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Data Processing Practices</strong><br />
                Acrely operates enterprise-grade cloud infrastructure. Any operational logs, inventory metrics, or account information processed by Acrely WMS are encrypted in transit and at rest using standard AES-256 protocols.
              </p>
              <p>
                <strong>2. Telemetry & Analytics</strong><br />
                During the Private Beta phase, system performance metrics are collected solely for security, performance optimization, and bug remediation within Acrely OS.
              </p>
              <p>
                <strong>3. Contact & Inquiries</strong><br />
                For data protection inquiries or enterprise compliance documentation, please contact our team at <strong>info@acrely.in</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Beta Services Terms</strong><br />
                Acrely WMS is currently under active development. Access during pre-release or Private Beta is governed by explicit enterprise partner agreements provided by Acrely.
              </p>
              <p>
                <strong>2. Legal Ownership Notice & Intellectual Property</strong><br />
                Acrely is an enterprise software company building next-generation platforms for real estate, warehousing, and commercial operations. Products including Acrely WMS (Warehouse Rental Management System), Acrely PMS (Property Management System), and future Acrely solutions are proprietary technologies owned by Acrely. All trademarks, product names, software, documentation, user interfaces, designs, graphics, logos, and source code are the exclusive intellectual property of Acrely and are protected under applicable intellectual property laws. Unauthorized copying, reproduction, modification, reverse engineering, distribution, or commercial use is strictly prohibited without prior written permission from Acrely.
              </p>
              <p>
                <strong>3. Enterprise Support</strong><br />
                Service level agreements (SLAs) will be provided upon full commercial deployment. For early inquiries, write to <strong>info@acrely.in</strong>.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#E5E7EB] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-semibold text-xs rounded-md transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};
