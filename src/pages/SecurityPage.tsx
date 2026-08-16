import React from 'react';
import { BookDemoSection } from '../components/docs/BookDemoSection';

export const SecurityPage: React.FC = () => {
  const faqSections = [
    {
      category: "Data & Infrastructure",
      questions: [
        {
          q: "Where is customer data stored?",
          a: "All tenant data is hosted securely on Google Cloud Platform (GCP) or AWS, depending on regional availability. Data is logically isolated per tenant.",
          status: "AVAILABLE NOW"
        },
        {
          q: "How is data protected?",
          a: "All data is encrypted in transit using TLS 1.2+ and at rest using AES-256.",
          status: "AVAILABLE NOW"
        },
        {
          q: "How are backups handled?",
          a: "Databases undergo daily automated backups with point-in-time recovery capabilities. Backups are stored in a secondary geographic zone.",
          status: "AVAILABLE NOW"
        }
      ]
    },
    {
      category: "Access & Identity",
      questions: [
        {
          q: "How are passwords protected?",
          a: "Passwords are never stored in plaintext. They are salted and hashed using bcrypt.",
          status: "AVAILABLE NOW"
        },
        {
          q: "Is Multi-Factor Authentication (MFA) available?",
          a: "MFA via authenticator apps (TOTP) is in development for administrative accounts.",
          status: "IN DEVELOPMENT"
        },
        {
          q: "What happens when an employee leaves?",
          a: "Administrators can instantly disable user accounts, immediately terminating all active sessions and scanner access.",
          status: "AVAILABLE NOW"
        },
        {
          q: "Can access be revoked remotely?",
          a: "Yes. If a mobile scanner is lost, managers can force-logout the device from the admin dashboard.",
          status: "AVAILABLE NOW"
        }
      ]
    },
    {
      category: "Permissions & Roles",
      questions: [
        {
          q: "Can users be restricted by role?",
          a: "Yes. Acrely features Role-Based Access Control (RBAC). Pickers only see picking tasks, while managers have access to reports and adjustments.",
          status: "AVAILABLE NOW"
        },
        {
          q: "Can users be restricted to specific warehouses?",
          a: "Yes. In multi-warehouse environments, users can be assigned to specific physical facilities, preventing them from viewing or altering stock in other locations.",
          status: "AVAILABLE NOW"
        }
      ]
    },
    {
      category: "Auditing & Compliance",
      questions: [
        {
          q: "Can inventory adjustments be audited?",
          a: "Every manual inventory adjustment (e.g., cycle count corrections) logs the exact user, timestamp, previous quantity, and new quantity.",
          status: "AVAILABLE NOW"
        },
        {
          q: "Can administrators see who changed something?",
          a: "Yes, the item history ledger permanently records the user ID associated with every receipt, move, pick, and dispatch.",
          status: "AVAILABLE NOW"
        },
        {
          q: "Are administrative audit logs available?",
          a: "Comprehensive logs for administrative actions (e.g., changing permissions, exporting data) are currently planned.",
          status: "PLANNED"
        }
      ]
    },
    {
      category: "Enterprise Features",
      questions: [
        {
          q: "What security controls are available to Enterprise customers?",
          a: "Enterprise customers receive Single Sign-On (SAML/SSO), dedicated tenant infrastructure (single-tenant hosting), and custom data retention policies.",
          status: "ENTERPRISE"
        }
      ]
    }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'AVAILABLE NOW':
        return 'bg-green-100 text-green-700';
      case 'IN DEVELOPMENT':
        return 'bg-blue-100 text-blue-700';
      case 'PLANNED':
        return 'bg-amber-100 text-amber-700';
      case 'ENTERPRISE':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-slate-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-sm font-bold uppercase tracking-wider text-[#1E40AF] block mb-4">Trust & Security</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-6">
          Answers to your security questions.
        </h1>
        <p className="text-xl text-[#64748B] leading-relaxed">
          We believe security is built on transparency. Here is exactly how we protect your warehouse data, manage access, and maintain operational continuity.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-12">
          {faqSections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6 pb-2 border-b-2 border-slate-200">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.questions.map((item, qIdx) => (
                  <div key={qIdx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <h3 className="text-lg font-bold text-[#0F172A]">{item.q}</h3>
                      <span className={`shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${getStatusStyle(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[#475569] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <BookDemoSection />
    </div>
  );
};
