import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const SECTIONS = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use-information', title: 'How We Use Information' },
  { id: 'customer-data', title: 'Customer Data' },
  { id: 'product-improvement', title: 'Use of Information for Product Improvement' },
  { id: 'cookies', title: 'Cookies and Similar Technologies' },
  { id: 'service-providers', title: 'Service Providers and Third Parties' },
  { id: 'integrations', title: 'Integrations' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'export-deletion', title: 'Customer Data Export and Deletion' },
  { id: 'international', title: 'International Data Processing' },
  { id: 'privacy-rights', title: 'Your Privacy Rights' },
  { id: 'childrens-privacy', title: "Children's Privacy" },
  { id: 'changes', title: 'Changes to This Privacy Policy' },
  { id: 'contact', title: 'Contact Us' },
];

export const PrivacyPage: React.FC = () => {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observers = useRef<Record<string, IntersectionObserver | null>>({});

  useEffect(() => {
    document.title = 'Privacy Policy | Acrely WMS';
    const desc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    desc.setAttribute('name', 'description');
    desc.setAttribute('content', 'How Acrely WMS collects, uses, and protects information for customers and users.');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(desc);

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://acrelywms.com/privacy');
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);
  }, []);

  useEffect(() => {
    const sectionElements = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const options = { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0 };
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };
    const obs = new IntersectionObserver(callback, options);
    sectionElements.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <div className="pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">Privacy at Acrely</h1>
          <p className="text-lg text-[#64748B] mt-3">How we collect, use and protect information across Acrely WMS.</p>
          <div className="mt-3 text-sm text-[#94A3B8]">Last Updated: August 2026</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contents */}
          <aside className="lg:col-span-3">
            <div className="hidden lg:block sticky top-24">
              <div className="rounded-lg border border-[#E5E7EB] bg-white p-4">
                <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Contents</div>
                <nav className="space-y-1 text-sm">
                  {SECTIONS.map(sec => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`w-full text-left transition-colors px-2 py-1 rounded ${active === sec.id ? 'bg-blue-50 text-[#1E40AF] font-semibold' : 'text-[#475569] hover:bg-slate-50'}`}>
                      {sec.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Mobile contents toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 border border-[#E5E7EB] rounded-md text-sm font-semibold text-[#0F172A]"
              >
                <span>Contents</span>
                <span className="text-[#64748B]">{mobileOpen ? 'Hide' : 'Show'}</span>
              </button>
              {mobileOpen && (
                <div className="mt-2 rounded-md border border-[#E5E7EB] bg-white p-3">
                  <nav className="space-y-1 text-sm">
                    {SECTIONS.map(sec => (
                      <button key={sec.id} onClick={() => scrollTo(sec.id)} className="w-full text-left block px-2 py-1 rounded text-[#475569] hover:bg-slate-50">
                        {sec.title}
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </aside>

          {/* Right: Content */}
          <article className="lg:col-span-9 prose prose-slate mx-auto max-w-none">
            <section id="introduction" className="mb-8">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p>
                Acrely WMS is a warehouse management platform operated by Acrely Real Estate Group ("Acrely", "we", "us", or "our").
                This Privacy Policy explains how we collect, use, protect, store, and otherwise process information when you visit our website, use Acrely WMS, communicate with us, or otherwise interact with our services.
                Acrely is committed to responsible handling of information and to maintaining appropriate safeguards for the data entrusted to us.
                By using Acrely WMS or our website, you acknowledge the practices described in this Privacy Policy.
              </p>
            </section>

            <section id="information-we-collect" className="mb-8">
              <h3 className="text-xl font-bold">2. Information We Collect</h3>
              <p>Depending on how you interact with Acrely, we may collect different categories of information.</p>

              <h4 className="font-semibold mt-4">2.1 Account and Contact Information</h4>
              <p>When you create an account, request a demonstration, contact our team, or become a customer, we may collect:</p>
              <ul>
                <li>Name</li>
                <li>Business email address</li>
                <li>Phone number</li>
                <li>Job title</li>
                <li>Company name</li>
                <li>Company address</li>
                <li>Country and region</li>
                <li>Login credentials</li>
                <li>Account preferences</li>
                <li>Communications with Acrely</li>
              </ul>

              <h4 className="font-semibold mt-4">2.2 Warehouse and Operational Information</h4>
              <p>Customers may enter information into Acrely WMS relating to their warehouse operations. This may include:</p>
              <ul>
                <li>Product and SKU information</li>
                <li>Inventory records</li>
                <li>Warehouse locations</li>
                <li>Purchase and receiving information</li>
                <li>Picking and packing information</li>
                <li>Shipment information</li>
                <li>Orders</li>
                <li>Stock movements</li>
                <li>Barcode information</li>
                <li>Employee or operator identifiers</li>
                <li>Warehouse activity records</li>
                <li>Operational performance information</li>
                <li>Workflow and configuration information</li>
              </ul>

              <p className="mt-3">Customers remain responsible for determining what information is entered into their Acrely WMS environment and ensuring that such information is collected and used lawfully.</p>

              <h4 className="font-semibold mt-4">2.3 Technical Information</h4>
              <p>When you use our website or services, we may automatically receive technical information such as:</p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Approximate geographic information</li>
                <li>Login activity</li>
                <li>Usage information</li>
                <li>Error and diagnostic information</li>
                <li>Service performance information</li>
                <li>Security and authentication logs</li>
              </ul>
            </section>

            <section id="how-we-use-information" className="mb-8">
              <h3 className="text-xl font-bold">3. How We Use Information</h3>
              <p>We use information for legitimate business and service purposes, including to:</p>
              <ul>
                <li>Provide and operate Acrely WMS</li>
                <li>Create and manage accounts</li>
                <li>Process customer requests</li>
                <li>Provide customer support</li>
                <li>Maintain warehouse workflows</li>
                <li>Process and display operational information</li>
                <li>Improve system performance</li>
                <li>Monitor system reliability</li>
                <li>Detect and prevent security incidents</li>
                <li>Diagnose technical problems</li>
                <li>Develop new features</li>
                <li>Improve the user experience</li>
                <li>Communicate important service information</li>
                <li>Process billing and payments</li>
                <li>Meet legal and regulatory obligations</li>
                <li>Protect the rights, property, and security of Acrely, our customers, and users</li>
              </ul>

              <p className="mt-3 font-semibold">We do not sell customer warehouse data as a product.</p>
            </section>

            <section id="customer-data" className="mb-8">
              <h3 className="text-xl font-bold">4. Customer Data</h3>
              <p>
                Acrely WMS is designed to process operational information on behalf of businesses using the platform.
                Where a customer uses Acrely WMS to process information relating to its employees, customers, suppliers, products, or warehouse operations, the customer is generally responsible for determining the purposes for which that information is processed.
                Acrely processes such information to provide the services requested by the customer and according to the customer's instructions, applicable agreements, and applicable law.
              </p>
            </section>

            <section id="product-improvement" className="mb-8">
              <h3 className="text-xl font-bold">5. Use of Information for Product Improvement</h3>
              <p>
                We may use appropriately aggregated, anonymized, or de-identified information to understand service performance, identify operational trends, improve reliability, and develop Acrely products.
                We will not use identifiable customer warehouse information for unrelated commercial purposes without an appropriate legal basis or authorization.
              </p>
            </section>

            <section id="cookies" className="mb-8">
              <h3 className="text-xl font-bold">6. Cookies and Similar Technologies</h3>
              <p>Our website may use cookies and similar technologies to:</p>
              <ul>
                <li>Maintain website functionality</li>
                <li>Understand website usage</li>
                <li>Improve performance</li>
                <li>Remember preferences</li>
                <li>Protect the website from abuse</li>
                <li>Understand how visitors interact with our services</li>
              </ul>
              <p className="mt-3">You may be able to control cookies through your browser settings.</p>
            </section>

            <section id="service-providers" className="mb-8">
              <h3 className="text-xl font-bold">7. Service Providers and Third Parties</h3>
              <p>
                Acrely may use trusted third-party service providers to operate parts of our business and infrastructure. These providers may support services such as cloud hosting, database infrastructure, authentication, email delivery, customer support, analytics, payment processing, security monitoring, and system monitoring.
                Such providers may access information only to the extent reasonably necessary to perform services for Acrely and are expected to maintain appropriate security and confidentiality protections.
              </p>
            </section>

            <section id="integrations" className="mb-8">
              <h3 className="text-xl font-bold">8. Integrations</h3>
              <p>
                Acrely WMS may connect with third-party systems such as ERP platforms, e-commerce platforms, transportation systems, shipping platforms, barcode and scanning systems, automation systems, business intelligence platforms, and accounting systems.
                When you enable an integration, information may be transferred between Acrely and the connected service according to the configuration and permissions established by you or your organization.
                Third-party services are governed by their own terms and privacy policies.
              </p>
            </section>

            <section id="data-security" className="mb-8">
              <h3 className="text-xl font-bold">9. Data Security</h3>
              <p>
                Acrely takes reasonable technical and organizational measures designed to protect information against unauthorized access, alteration, disclosure, loss, or destruction. Security measures may include access controls, authentication mechanisms, encryption where appropriate, network and infrastructure protections, logging and monitoring, backup and recovery procedures, security testing, employee access controls, and incident response procedures.
              </p>
              <p className="mt-3">No internet-based service can guarantee absolute security. We continuously work to reduce security risks and improve our security controls.</p>
            </section>

            <section id="data-retention" className="mb-8">
              <h3 className="text-xl font-bold">10. Data Retention</h3>
              <p>
                We retain information for as long as reasonably necessary to provide the services, maintain business records, meet contractual obligations, resolve disputes, maintain security, and comply with applicable legal requirements. When information is no longer reasonably required, we may delete, anonymize, or securely dispose of it, subject to applicable law and contractual obligations.
              </p>
            </section>

            <section id="export-deletion" className="mb-8">
              <h3 className="text-xl font-bold">11. Customer Data Export and Deletion</h3>
              <p>
                Subject to the applicable customer agreement, customers may request access to, export of, or deletion of their data. Specific procedures may depend on the customer's subscription, contractual requirements, technical limitations, legal obligations, and security requirements. Acrely may retain limited information where required for legitimate legal, security, accounting, or regulatory purposes.
              </p>
            </section>

            <section id="international" className="mb-8">
              <h3 className="text-xl font-bold">12. International Data Processing</h3>
              <p>
                Depending on the infrastructure and service providers used by Acrely, information may be processed or stored in countries other than the country where the customer or user is located. Where required, Acrely will take appropriate measures for such processing in accordance with applicable law.
              </p>
            </section>

            <section id="privacy-rights" className="mb-8">
              <h3 className="text-xl font-bold">13. Your Privacy Rights</h3>
              <p>
                Depending on applicable law and your relationship with Acrely, you may have rights relating to your personal information, including rights to request information about processing, request access to personal information, request correction of inaccurate information, request deletion where applicable, withdraw consent where processing is based on consent, raise a privacy-related complaint, and exercise other rights provided by applicable law. Requests may be subject to verification and applicable legal limitations.
              </p>
            </section>

            <section id="childrens-privacy" className="mb-8">
              <h3 className="text-xl font-bold">14. Children's Privacy</h3>
              <p>
                Acrely WMS is a business-to-business service and is not directed toward children. We do not knowingly seek to collect personal information from children for independent use of the service.
              </p>
            </section>

            <section id="changes" className="mb-8">
              <h3 className="text-xl font-bold">15. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business practices. When we make material changes, we may provide an appropriate notice through our website, service, or other communication channels. The updated policy will include a revised "Last Updated" date.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h3 className="text-xl font-bold">16. Contact Us</h3>
              <p>
                For privacy-related questions, requests, or concerns:
              </p>
              <div className="mt-3">
                <div className="font-semibold">Acrely Real Estate Group</div>
                <div>Acrely WMS</div>
                <div className="mt-2">privacy@acrelywms.com</div>
                <div>https://acrelywms.com</div>
              </div>
            </section>

            <div className="text-sm text-[#94A3B8]">Acrely Real Estate Group • © {new Date().getFullYear()} • All rights reserved.</div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
