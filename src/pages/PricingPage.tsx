import React from 'react';
import { Check, Sparkles, Users, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlanProps {
  name: string;
  badge?: string;
  price: number | 'Custom';
  description: string;
  features: string[];
  cta: string;
  ctaSecondary?: string;
  isPopular?: boolean;
  ctaLink: string;
}

const PlanCard: React.FC<PlanProps> = ({ 
  name, 
  badge, 
  price, 
  description, 
  features, 
  cta, 
  ctaSecondary, 
  isPopular,
  ctaLink
}) => {
  return (
    <div className={`relative flex flex-col bg-white rounded-2xl shadow-sm border ${isPopular ? 'border-[#1E40AF] shadow-md' : 'border-[#E5E7EB]'}`}>
      {isPopular && badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E40AF] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full whitespace-nowrap z-10">
          {badge}
        </div>
      )}
      
      <div className={`p-5 sm:p-6 border-b ${isPopular ? 'border-blue-100 bg-blue-50/30 rounded-t-2xl' : 'border-[#E5E7EB]'}`}>
        <h3 className="text-xl font-bold text-[#0F172A] mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-extrabold text-[#0F172A]">
            {typeof price === 'number' ? `$${price}` : price}
          </span>
          {typeof price === 'number' && (
            <span className="text-[#64748B] text-sm font-medium ml-1">/ month</span>
          )}
        </div>
        <p className="text-[#475569] text-sm leading-relaxed min-h-[60px]">
          {description}
        </p>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <ul className="space-y-4 flex-1 mb-8">
          {features.map((feature, idx) => {
            const isZeta = feature.includes('Zeta');
            return (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className={`text-sm ${isZeta ? 'font-bold text-[#0F172A]' : 'text-[#334155]'} leading-relaxed`}>
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-3 mt-auto">
          <Link
            to={ctaLink}
            state={{ selectedPlan: name }}
            className={`w-full py-3.5 px-4 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
              isPopular
                ? 'bg-[#1E40AF] text-white hover:bg-[#2563EB] shadow-md'
                : 'bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0]'
            }`}
          >
            {cta}
          </Link>
          {ctaSecondary && (
            <a
              href="https://demo.acrelywms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-lg font-bold text-sm bg-white border border-[#E5E7EB] text-[#0F172A] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              {ctaSecondary}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const PricingPage: React.FC = () => {
  const featuresData = [
    {
      category: "Zeta Warehouse Intelligence",
      features: [
        { name: "Inventory analysis", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Operational summaries", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Exception analysis", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Cross-warehouse analysis", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "AI-assisted reporting", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Warehouse Management",
      features: [
        { name: "Warehouses", free: "1", starter: "1", growth: "Up to 3", pro: "Multiple", enterprise: "Custom" },
        { name: "Product & SKU management", free: "✓", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Bin & location management", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced warehouse configuration", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Inventory",
      features: [
        { name: "Basic inventory visibility", free: "✓", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Stock adjustments & transfers", free: "-", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Cycle counting", free: "-", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced inventory controls", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Barcode & Identification",
      features: [
        { name: "Basic barcode scanning", free: "✓", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced barcode workflows", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
      ]
    },
    {
      category: "Receiving",
      features: [
        { name: "Basic receiving", free: "✓", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Purchase orders", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced receiving", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Putaway",
      features: [
        { name: "Basic putaway", free: "-", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Directed putaway", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Picking",
      features: [
        { name: "Basic picking", free: "-", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced picking", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Wave / batch picking", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Packing",
      features: [
        { name: "Basic packing", free: "-", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced packing", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Dispatch",
      features: [
        { name: "Basic dispatch", free: "-", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Dispatch management", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Returns",
      features: [
        { name: "Returns", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced returns", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Reporting & Analytics",
      features: [
        { name: "Standard reports", free: "Limited", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Operational dashboards", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced analytics", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" },
        { name: "Executive reporting", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" },
        { name: "Audit logs", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Integrations",
      features: [
        { name: "Standard API", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced API capabilities", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" },
        { name: "Integration tools", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" },
        { name: "ERP integrations", free: "-", starter: "-", growth: "-", pro: "-", enterprise: "✓" },
        { name: "Custom API integrations", free: "-", starter: "-", growth: "-", pro: "-", enterprise: "✓" },
        { name: "Data migration", free: "-", starter: "-", growth: "-", pro: "-", enterprise: "✓" }
      ]
    },
    {
      category: "Security & Administration",
      features: [
        { name: "User roles", free: "-", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Role-based permissions", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Advanced RBAC", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" },
        { name: "SSO", free: "-", starter: "-", growth: "-", pro: "-", enterprise: "✓" },
        { name: "Advanced security controls", free: "-", starter: "-", growth: "-", pro: "-", enterprise: "✓" },
        { name: "Audit capabilities", free: "-", starter: "-", growth: "-", pro: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Support",
      features: [
        { name: "Standard support", free: "-", starter: "✓", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Priority support", free: "-", starter: "-", growth: "✓", pro: "✓", enterprise: "✓" },
        { name: "Dedicated onboarding", free: "-", starter: "-", growth: "-", pro: "-", enterprise: "✓" },
        { name: "Dedicated account management", free: "-", starter: "-", growth: "-", pro: "-", enterprise: "✓" },
        { name: "SLA options", free: "-", starter: "-", growth: "-", pro: "-", enterprise: "✓" }
      ]
    }
  ];

  const renderTableCell = (value: string) => {
    if (value === '✓') {
      return <Check className="w-5 h-5 text-emerald-500 mx-auto" />;
    }
    if (value === '-') {
      return <span className="text-slate-300 mx-auto block w-max">-</span>;
    }
    return <span className="font-medium text-sm text-[#334155]">{value}</span>;
  };

  return (
    <div className="bg-slate-50 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E40AF] block mb-4">Acrely WMS Pricing</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-[#64748B] leading-relaxed mb-8">
            Choose the Acrely WMS plan that fits your operation. Start with the capabilities you need today and scale as your warehouse network grows.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          <PlanCard 
            name="Free"
            price={0}
            description="Explore Acrely WMS with a limited environment designed for evaluation and very small operations."
            features={[
              "1 user",
              "1 warehouse",
              "Product & SKU management",
              "Basic inventory visibility",
              "Basic barcode scanning",
              "Basic receiving",
              "Basic stock movements",
              "Basic dashboard",
              "Limited reports",
              "Demo/sample data",
              "Zeta Not included"
            ]}
            cta="Get Started"
            ctaLink="/download"
          />
          <PlanCard 
            name="Starter"
            price={49}
            description="Core warehouse management for small teams moving beyond spreadsheets and basic inventory tools."
            features={[
              "2 users",
              "1 warehouse",
              "Product & SKU management",
              "Inventory management",
              "Barcode scanning",
              "Receiving",
              "Basic putaway",
              "Stock transfers",
              "Cycle counting",
              "Basic picking",
              "Basic packing",
              "Basic dispatch",
              "Basic reports",
              "User roles",
              "Standard support",
              "Zeta Limited allocation"
            ]}
            cta="Request Access"
            ctaLink="/contact"
          />
          <PlanCard 
            name="Growth"
            badge="Most Popular"
            isPopular={true}
            price={99}
            description="Complete warehouse workflows for growing operations that need stronger control, traceability, and process discipline."
            features={[
              "5 users",
              "Up to 3 warehouses",
              "Everything in Starter",
              "Purchase orders",
              "Advanced receiving",
              "Directed putaway",
              "Bin & location management",
              "Batch / lot tracking",
              "Expiry tracking",
              "Advanced barcode workflows",
              "Picking workflows",
              "Packing workflows",
              "Dispatch management",
              "Returns",
              "Cycle counting",
              "Stock adjustments",
              "Transfer orders",
              "Operational dashboards",
              "Advanced reports",
              "API access",
              "Mobile warehouse workflows",
              "Role-based permissions",
              "Priority support",
              "Zeta 1,000 credits/month"
            ]}
            cta="Request Access"
            ctaLink="/contact"
          />
          <PlanCard 
            name="Professional"
            price={149}
            description="Advanced control for complex and multi-warehouse operations requiring deeper inventory control, automation, analytics, and governance."
            features={[
              "10 users",
              "Multiple warehouses",
              "Everything in Growth",
              "Advanced warehouse configuration",
              "Advanced inventory controls",
              "Advanced barcode workflows",
              "Batch / lot / serial tracking",
              "Advanced picking strategies",
              "Wave / batch picking",
              "Advanced packing workflows",
              "Advanced returns",
              "Approval workflows",
              "Advanced role-based access control",
              "Custom operational workflows",
              "Advanced analytics",
              "Executive reporting",
              "Audit logs",
              "Advanced API capabilities",
              "Integration tools",
              "Data export",
              "Priority support",
              "Zeta 3,000 credits/month"
            ]}
            cta="Request Access"
            ctaLink="/contact"
          />
          <PlanCard 
            name="Enterprise"
            price="Custom"
            description="Built around your warehouse network, integration requirements, security model, operating model, and deployment requirements."
            features={[
              "Custom users",
              "Custom warehouse count",
              "Everything in Professional",
              "Enterprise integrations",
              "ERP / WMS integrations",
              "Custom API integrations",
              "Data migration assistance",
              "Custom workflows",
              "SSO",
              "Advanced security controls",
              "Enterprise audit capabilities",
              "Dedicated onboarding",
              "Dedicated account management",
              "Priority / enterprise support",
              "SLA options",
              "Custom deployment requirements",
              "Custom reporting",
              "Contract-based commercial terms",
              "Zeta Custom allocation"
            ]}
            cta="Talk to Sales"
            ctaSecondary="Book Enterprise Demo"
            ctaLink="/contact"
          />
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Zeta Intelligence Section */}
        <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-8 sm:p-12 mb-20 text-white shadow-lg overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/30 to-transparent pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Zeta Warehouse Intelligence
              </div>
              <h2 className="text-3xl font-bold mb-4">Ask your warehouse questions in plain language.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Zeta is Acrely WMS's warehouse intelligence layer. Authorized users can ask operational questions in natural language and receive AI-assisted analysis using the warehouse data available to their account.
              </p>

              <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 mb-8">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Example questions</div>
                <div className="space-y-3">
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-sm text-slate-300">"How many Fresh Apples are currently available?"</div>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-sm text-slate-300">"Which products are approaching expiry?"</div>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-sm text-slate-300">"Summarize today's receiving activity."</div>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-sm text-slate-300">"Which warehouse has the highest stock variance this week?"</div>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-sm text-slate-300">"Show unusual inventory movements across our warehouses."</div>
                  <div className="text-[10px] text-amber-500/80 font-bold tracking-widest uppercase mt-4">DEMONSTRATION EXAMPLES</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 mb-6">
                <h3 className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-6">Zeta Credit Packages</h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                    <span className="font-bold text-lg">1,000 credits</span>
                    <div className="text-right">
                      <span className="font-bold text-xl">$10</span>
                      <span className="text-slate-400 text-sm"> / month</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                    <span className="font-bold text-lg">3,000 credits</span>
                    <div className="text-right">
                      <span className="font-bold text-xl">$25</span>
                      <span className="text-slate-400 text-sm"> / month</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                    <span className="font-bold text-lg">10,000 credits</span>
                    <div className="text-right">
                      <span className="font-bold text-xl">$60</span>
                      <span className="text-slate-400 text-sm"> / month</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-medium text-slate-400">Additional 10,000 credits</span>
                    <div className="text-right">
                      <span className="font-bold text-slate-300">$60</span>
                      <span className="text-slate-500 text-sm"> / month</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 mt-auto">
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Zeta credits represent AI usage within Acrely WMS. Different requests consume different amounts depending on the complexity of the operation.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex justify-between"><span>Simple warehouse question</span> <span className="font-medium text-slate-300">~1 credit</span></li>
                  <li className="flex justify-between"><span>Operational summary</span> <span className="font-medium text-slate-300">~5 credits</span></li>
                  <li className="flex justify-between"><span>Detailed report</span> <span className="font-medium text-slate-300">~10 credits</span></li>
                  <li className="flex justify-between"><span>Complex analysis</span> <span className="font-medium text-slate-300">~20 credits</span></li>
                  <li className="flex justify-between"><span>Deep multi-warehouse analysis</span> <span className="font-medium text-slate-300">30+ credits</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Scale Your Plan */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0F172A] mb-4">Scale your plan when you need more capacity</h2>
            <p className="text-[#64748B] text-lg max-w-3xl mx-auto">
              Your plan includes a defined number of users and warehouses. Additional capacity can be added without immediately moving to a higher plan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-[#0F172A] mb-3">Additional Users</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                For customers who need more warehouse operators, supervisors, or managers than their plan includes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-[#0F172A] mb-3">Additional Warehouses</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                For customers expanding their warehouse network.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-[#0F172A] mb-3">Additional Zeta Credits</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                For customers whose AI usage exceeds their included allocation.
              </p>
            </div>
          </div>
        </div>

        {/* Compare Features Table */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0F172A] mb-4">Compare Acrely WMS capabilities</h2>
            <p className="text-[#64748B] text-lg">See what is included across the Acrely WMS platform and its intelligence capabilities.</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[900px]">
                <thead>
                  <tr className="border-b border-[#E5E7EB] bg-slate-50">
                    <th className="p-4 sm:p-6 w-[25%] font-bold text-[#0F172A]">Capability</th>
                    <th className="p-4 sm:p-6 text-center font-bold text-[#0F172A]">Free</th>
                    <th className="p-4 sm:p-6 text-center font-bold text-[#0F172A]">Starter</th>
                    <th className="p-4 sm:p-6 text-center font-bold text-[#1E40AF] bg-blue-50/50 relative">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E40AF]"></div>
                      Growth
                    </th>
                    <th className="p-4 sm:p-6 text-center font-bold text-[#0F172A]">Professional</th>
                    <th className="p-4 sm:p-6 text-center font-bold text-[#0F172A]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featuresData.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      <tr className="bg-slate-100/50 border-y border-[#E5E7EB]">
                        <td colSpan={6} className="px-4 sm:px-6 py-3 font-bold text-xs uppercase tracking-wider text-[#64748B]">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, fIdx) => (
                        <tr key={fIdx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                          <td className="px-4 sm:px-6 py-4 text-sm font-medium text-[#334155]">
                            {feature.name}
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center border-l border-slate-100/50">
                            {renderTableCell(feature.free)}
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center border-l border-slate-100/50">
                            {renderTableCell(feature.starter)}
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center border-l border-slate-100/50 bg-blue-50/20">
                            {renderTableCell(feature.growth)}
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center border-l border-slate-100/50">
                            {renderTableCell(feature.pro)}
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center border-l border-slate-100/50">
                            {renderTableCell(feature.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Questions about Pricing */}
        <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-8 sm:p-12 mb-12 text-center text-white shadow-lg">
          <h2 className="text-3xl font-extrabold mb-4">Questions about pricing?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Our team can help you determine the right plan for your warehouse network, discuss implementation requirements, or configure a custom Enterprise package.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://demo.acrelywms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#0F172A] font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
            >
              Contact Sales
            </a>
            <a
              href="https://demo.acrelywms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-white border border-slate-700 font-bold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Book Enterprise Demo
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
