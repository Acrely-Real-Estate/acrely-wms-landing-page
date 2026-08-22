import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'overview', title: 'Overview' },
  { id: 'service', title: 'Acrely WMS Service' },
  { id: 'accounts', title: 'Customer Accounts' },
  { id: 'authorized-users', title: 'Authorized Users' },
  { id: 'customer-data', title: 'Customer Data' },
  { id: 'responsibilities', title: 'Customer Responsibilities' },
  { id: 'acceptable-use', title: 'Acceptable Use' },
  { id: 'subscriptions', title: 'Subscriptions and Payments' },
  { id: 'trials', title: 'Trials and Pilot Deployments' },
  { id: 'integrations', title: 'Integrations and Third-Party Services' },
  { id: 'ip', title: 'Software and Intellectual Property' },
  { id: 'feedback', title: 'Customer Feedback' },
  { id: 'confidentiality', title: 'Confidentiality' },
  { id: 'availability', title: 'Service Availability' },
  { id: 'support', title: 'Support' },
  { id: 'suspension', title: 'Suspension' },
  { id: 'termination', title: 'Termination' },
  { id: 'data-after', title: 'Data After Termination' },
  { id: 'disclaimer', title: 'Disclaimer' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'changes-service', title: 'Changes to the Service' },
  { id: 'changes-terms', title: 'Changes to These Terms' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'entire-agreement', title: 'Entire Agreement' },
  { id: 'contact', title: 'Contact' },
];

export const TermsPage: React.FC = () => {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    document.title = 'Terms of Service | Acrely WMS';
    const desc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    desc.setAttribute('name', 'description');
    desc.setAttribute('content', 'Terms governing access to and use of Acrely WMS.');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(desc);

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://acrelywms.com/terms');
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">Terms of Service</h1>
          <p className="text-lg text-[#64748B] mt-3">The terms governing access to and use of Acrely WMS.</p>
          <div className="mt-3 text-sm text-[#94A3B8]">Last Updated: August 2026</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <div className="hidden lg:block sticky top-24">
              <div className="rounded-lg border border-[#E5E7EB] bg-white p-4">
                <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Contents</div>
                <nav className="space-y-1 text-sm">
                  {SECTIONS.map(sec => (
                    <button key={sec.id} onClick={() => { scrollTo(sec.id); setActive(sec.id); }} className={`w-full text-left transition-colors px-2 py-1 rounded ${active === sec.id ? 'bg-blue-50 text-[#1E40AF] font-semibold' : 'text-[#475569] hover:bg-slate-50'}`}>
                      {sec.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:hidden mb-4">
              <details className="border border-[#E5E7EB] rounded-md">
                <summary className="px-4 py-3 text-sm font-semibold cursor-pointer">Contents</summary>
                <div className="p-3 space-y-1">
                  {SECTIONS.map(sec => (
                    <button key={sec.id} onClick={() => scrollTo(sec.id)} className="w-full text-left block px-2 py-1 rounded text-[#475569] hover:bg-slate-50">
                      {sec.title}
                    </button>
                  ))}
                </div>
              </details>
            </div>
          </aside>

          <article className="lg:col-span-9 prose prose-slate mx-auto max-w-none">
            <section id="overview" className="mb-6">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                These Terms of Service ("Terms") govern access to and use of Acrely WMS, a warehouse management software platform operated by Acrely Real Estate Group ("Acrely", "we", "us", or "our"). By accessing or using Acrely WMS, you agree to these Terms. If you are using Acrely WMS on behalf of a company or other organization, you represent that you have authority to bind that organization to these Terms.
              </p>
            </section>

            <section id="service" className="mb-6">
              <h3 className="text-xl font-bold">1. The Acrely WMS Service</h3>
              <p>
                Acrely WMS provides software designed to help businesses manage warehouse operations, including functions such as inventory management, receiving, putaway, picking, packing, dispatch, warehouse workflows, barcode-based operations, reporting, integrations, operational analytics, and warehouse configuration.
              </p>
              <p className="mt-2">The exact functionality available to a customer depends on its subscription, plan, deployment, configuration, and applicable agreement with Acrely.</p>
            </section>

            <section id="accounts" className="mb-6">
              <h3 className="text-xl font-bold">2. Customer Accounts</h3>
              <p>Customers may be required to create accounts to access certain features. You are responsible for providing accurate account information, protecting account credentials, managing authorized users, maintaining appropriate access permissions, preventing unauthorized account access, and informing Acrely of suspected security incidents. You are responsible for activities conducted through your organization's accounts.</p>
            </section>

            <section id="authorized-users" className="mb-6">
              <h3 className="text-xl font-bold">3. Authorized Users</h3>
              <p>A customer may provide access to Acrely WMS to employees, contractors, operators, administrators, or other authorized personnel. Customers are responsible for ensuring that authorized users use the service appropriately, protect their credentials, follow applicable security requirements, do not misuse the service, and do not attempt to gain unauthorized access.</p>
            </section>

            <section id="customer-data" className="mb-6">
              <h3 className="text-xl font-bold">4. Customer Data</h3>
              <p>Customers retain their rights and ownership in the data they submit to Acrely WMS, subject to the rights necessary for Acrely to operate the service. Customer Data may include warehouse, inventory, order, product, employee, supplier, operational, and configuration information.</p>
              <p className="mt-2">Acrely may process Customer Data only as reasonably necessary to provide the service, maintain the service, secure the service, provide support, prevent abuse, improve service reliability, comply with applicable law, and perform obligations under the customer agreement.</p>
            </section>

            <section id="responsibilities" className="mb-6">
              <h3 className="text-xl font-bold">5. Customer Responsibilities</h3>
              <p>Customers are responsible for the accuracy of information entered into Acrely WMS, proper warehouse configuration, user permissions, barcode and product information, inventory data, integration configuration, compliance with applicable laws, training users where necessary, and maintaining appropriate operational procedures.</p>
            </section>

            <section id="acceptable-use" className="mb-6">
              <h3 className="text-xl font-bold">6. Acceptable Use</h3>
              <p>You must not use Acrely WMS to violate applicable law, gain unauthorized access to systems or accounts, introduce malicious software, attack or disrupt the service, attempt to bypass security controls, reverse engineer the service except where permitted by applicable law, copy or reproduce proprietary components without authorization, abuse APIs or system resources, or use the service to interfere with another customer's environment. Acrely may take reasonable action when misuse creates a security, operational, or legal risk.</p>
            </section>

            <section id="subscriptions" className="mb-6">
              <h3 className="text-xl font-bold">7. Subscriptions and Payments</h3>
              <p>Paid access to Acrely WMS may require a subscription or other commercial arrangement. Pricing, billing cycles, usage limits, implementation fees, and other commercial terms will be communicated through the applicable order form, subscription agreement, pricing page, or other written agreement. Unless otherwise stated, fees are non-refundable except where required by applicable law or expressly agreed by Acrely.</p>
            </section>

            <section id="trials" className="mb-6">
              <h3 className="text-xl font-bold">8. Trials and Pilot Deployments</h3>
              <p>Acrely may provide trials, demonstrations, proof-of-concept deployments, or warehouse pilot programs. Pilot environments may have limited functionality, usage restrictions, limited support, temporary data retention, experimental features, and performance limitations. Pilot functionality may change during development.</p>
            </section>

            <section id="integrations" className="mb-6">
              <h3 className="text-xl font-bold">9. Integrations and Third-Party Services</h3>
              <p>Acrely WMS may integrate with third-party platforms. Acrely is not responsible for third-party service outages, changes made by third-party providers, third-party API limitations, third-party pricing, third-party security incidents, or losses caused by a third-party service. Customers are responsible for ensuring that their use of connected services is authorized.</p>
            </section>

            <section id="ip" className="mb-6">
              <h3 className="text-xl font-bold">10. Software and Intellectual Property</h3>
              <p>Acrely and its licensors retain all rights, title, and interest in Acrely WMS, software code, user interface designs, documentation, logos, branding, product architecture, algorithms, platform technology, proprietary processes, and Acrely trademarks. These Terms do not transfer ownership of Acrely's intellectual property to customers. Subject to these Terms, Acrely grants customers a limited, non-exclusive, non-transferable right to access and use the service during the applicable subscription period.</p>
            </section>

            <section id="feedback" className="mb-6">
              <h3 className="text-xl font-bold">11. Customer Feedback</h3>
              <p>Customers may provide suggestions, ideas, recommendations, or feedback regarding Acrely WMS. Acrely may use such feedback to improve or develop its products without owing compensation for that feedback, provided that Acrely does not disclose the customer's confidential information in doing so.</p>
            </section>

            <section id="confidentiality" className="mb-6">
              <h3 className="text-xl font-bold">12. Confidentiality</h3>
              <p>Each party may receive confidential information from the other party. Confidential information must be used only for the purposes of the relationship, protected using reasonable measures, and shared only with people who need to know it and are appropriately bound to confidentiality obligations. Confidentiality obligations do not apply to information that is publicly available without breach, was already lawfully known, is independently developed, is lawfully received from another source, or must be disclosed by law.</p>
            </section>

            <section id="availability" className="mb-6">
              <h3 className="text-xl font-bold">13. Service Availability</h3>
              <p>Acrely will use reasonable efforts to maintain the availability and reliability of Acrely WMS. However, the service may occasionally be unavailable because of planned maintenance, emergency maintenance, infrastructure failures, security incidents, internet or telecommunications failures, third-party service failures, or events outside Acrely's reasonable control. Specific uptime commitments, service levels, and remedies may be defined in a separate Service Level Agreement.</p>
            </section>

            <section id="support" className="mb-6">
              <h3 className="text-xl font-bold">14. Support</h3>
              <p>Support availability depends on the customer's plan or applicable agreement. Acrely may provide technical support, documentation, troubleshooting, system diagnostics, implementation assistance, and integration assistance. Support does not guarantee that every issue will be resolved immediately.</p>
            </section>

            <section id="suspension" className="mb-6">
              <h3 className="text-xl font-bold">15. Suspension</h3>
              <p>Acrely may temporarily suspend access to the service when reasonably necessary to protect the security of the platform, prevent abuse, address a serious security threat, prevent harm to other customers, comply with legal requirements, address non-payment, or respond to a material breach of these Terms. Where reasonably practical, Acrely will provide notice before suspension.</p>
            </section>

            <section id="termination" className="mb-6">
              <h3 className="text-xl font-bold">16. Termination</h3>
              <p>A customer may terminate its subscription according to the applicable commercial agreement. Acrely may terminate or suspend access where a customer materially breaches these Terms and fails to remedy the breach within a reasonable period after receiving notice, where applicable. Upon termination, customer access will end according to the applicable agreement.</p>
            </section>

            <section id="data-after" className="mb-6">
              <h3 className="text-xl font-bold">17. Data After Termination</h3>
              <p>Following termination, Acrely may provide mechanisms for customers to export their data where provided under the applicable plan or agreement. After the applicable retention period, Acrely may delete or anonymize customer data, except where retention is required for legal, security, accounting, dispute-resolution, or other legitimate purposes.</p>
            </section>

            <section id="disclaimer" className="mb-6">
              <h3 className="text-xl font-bold">18. Disclaimer</h3>
              <p>Acrely WMS is provided as a software service designed to assist warehouse operations. Acrely does not guarantee that the service will be completely error-free, that every warehouse workflow will be suitable for every business, that inventory records will always be accurate, that customer configurations will always produce the desired operational result, or that third-party integrations will always operate without interruption. Customers remain responsible for verifying operational information and making business decisions based on their own requirements and circumstances.</p>
            </section>

            <section id="liability" className="mb-6">
              <h3 className="text-xl font-bold">19. Limitation of Liability</h3>
              <p>To the maximum extent permitted by applicable law, Acrely will not be responsible for indirect, incidental, special, consequential, or punitive damages arising from the use of the service. Any specific limitation of liability, including applicable monetary caps, will be governed by the customer's commercial agreement with Acrely where one exists. Nothing in these Terms limits liability where such limitation is prohibited by applicable law.</p>
            </section>

            <section id="indemnification" className="mb-6">
              <h3 className="text-xl font-bold">20. Indemnification</h3>
              <p>To the extent permitted by applicable law, customers may be responsible for claims arising from their unlawful use of the service, their violation of these Terms, their violation of third-party rights, their misuse of customer or user data, their unauthorized use of integrations, or their violation of applicable laws. Specific indemnification obligations may be established in the applicable customer agreement.</p>
            </section>

            <section id="changes-service" className="mb-6">
              <h3 className="text-xl font-bold">21. Changes to the Service</h3>
              <p>Acrely may modify, improve, replace, or discontinue features of the service from time to time. We will make reasonable efforts to avoid materially disrupting core functionality for existing customers. Certain features may be introduced as beta, experimental, or preview functionality and may be changed or removed.</p>
            </section>

            <section id="changes-terms" className="mb-6">
              <h3 className="text-xl font-bold">22. Changes to These Terms</h3>
              <p>Acrely may update these Terms when reasonably necessary because of changes to the service, changes in business practices, security requirements, legal or regulatory requirements, or changes to commercial arrangements. Material changes may be communicated through the service, website, email, or another reasonable method. Continued use of Acrely WMS after the effective date of updated Terms constitutes acceptance of the updated Terms, to the extent permitted by law.</p>
            </section>

            <section id="governing-law" className="mb-6">
              <h3 className="text-xl font-bold">23. Governing Law</h3>
              <p>These Terms will be governed by the laws of India, unless a separate written agreement with the customer provides otherwise. Any disputes will be subject to the jurisdiction specified in the applicable customer agreement or, where no such agreement exists, the courts having appropriate jurisdiction under applicable law.</p>
            </section>

            <section id="entire-agreement" className="mb-6">
              <h3 className="text-xl font-bold">24. Entire Agreement</h3>
              <p>These Terms, together with any applicable order form, subscription agreement, Service Level Agreement, Data Processing Agreement, and other written agreements between Acrely and the customer, constitute the agreement governing use of Acrely WMS. If there is a conflict between these Terms and a separately signed customer agreement, the signed agreement will control to the extent of the conflict.</p>
            </section>

            <section id="contact" className="mb-12">
              <h3 className="text-xl font-bold">25. Contact</h3>
              <p>For questions regarding these Terms:</p>
              <div className="mt-3">
                <div className="font-semibold">Acrely Real Estate Group</div>
                <div>Acrely WMS</div>
                <div className="mt-2">legal@acrelywms.com</div>
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

export default TermsPage;
