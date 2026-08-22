import React, { useState } from 'react';
import { Check, Sparkles, Users, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlanProps {
  name: string;
  badge?: string;
  price: number | 'Custom';
  hasPromotion?: boolean;
  description: string;
  features: string[];
  cta: string;
  ctaSecondary?: string;
  isPopular?: boolean;
  ctaLink: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

const PlanCard: React.FC<PlanProps> = ({ 
  name, 
  badge, 
  price, 
  hasPromotion,
  description, 
  features, 
  cta, 
  ctaSecondary, 
  isPopular,
  ctaLink,
  isSelected,
  onSelect
}) => {
  return (
    <div 
      className={`relative flex flex-col bg-white rounded-2xl border transition-all cursor-pointer ${
        isSelected 
          ? 'border-[#1E40AF] ring-2 ring-[#1E40AF] shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform scale-[1.02] z-20' 
          : isPopular 
            ? 'border-blue-200 shadow-sm hover:shadow-md hover:border-blue-300 z-10' 
            : 'border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-blue-300 z-10'
      }`}
      onClick={onSelect}
    >
      {isPopular && badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E40AF] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full whitespace-nowrap z-30">
          {badge}
        </div>
      )}
      
      <div className={`p-5 sm:p-6 border-b ${isPopular ? 'border-blue-100 bg-blue-50/30 rounded-t-2xl' : 'border-[#E5E7EB]'}`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-[#0F172A]">{name}</h3>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-[#1E40AF] bg-[#1E40AF]' : 'border-slate-300'}`}>
            {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
          </div>
        </div>
        <div className="mb-4 min-h-[70px] flex flex-col justify-center">
          {price === 'Custom' ? (
            <span className="text-4xl font-extrabold text-[#0F172A]">Custom</span>
          ) : hasPromotion ? (
            <div className="flex flex-col items-start gap-1">
              <span className="text-[26px] sm:text-3xl xl:text-[26px] font-extrabold text-[#0F172A] leading-tight">
                FREE FOR 1 MONTH
              </span>
              <span className="text-[#64748B] text-base font-medium line-through decoration-[#94A3B8]">
                ${price} / month
              </span>
            </div>
          ) : (
            <div>
              <span className="text-4xl font-extrabold text-[#0F172A]">${price}</span>
              <span className="text-[#64748B] text-sm font-medium ml-1">/ month</span>
            </div>
          )}
        </div>
        <p className="text-[#475569] text-sm leading-relaxed min-h-[72px]">
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
          <button
            className={`w-full py-3.5 px-4 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
              isSelected
                ? 'bg-[#1E40AF] text-white shadow-md'
                : isPopular
                  ? 'bg-blue-50 text-[#1E40AF] hover:bg-blue-100'
                  : 'bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0]'
            }`}
          >
            {isSelected ? 'Selected' : cta}
          </button>
          {ctaSecondary && (
            <Link
              to="/book-demo"
              className="w-full py-3.5 px-4 rounded-lg font-bold text-sm bg-white border border-[#E5E7EB] text-[#0F172A] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {ctaSecondary}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'plan' | 'addons'>('plan');
  const [selectedPlan, setSelectedPlan] = useState<string>('Growth');
  const [additionalUsers, setAdditionalUsers] = useState<number>(0);
  const [additionalWarehouses, setAdditionalWarehouses] = useState<number>(0);
  const [selectedZeta, setSelectedZeta] = useState<string>('none');

  const PROMOTION_ACTIVE = true;

  const PLAN_PRICING: Record<string, number | 'Custom'> = {
    Free: 0,
    Starter: 49,
    Growth: 99,
    Professional: 149,
    Enterprise: 'Custom'
  };

  const ADDON_PRICING = {
    user: 6,
    warehouse: 150
  };

  const ZETA_PACKAGES = [
    { id: 'none', label: 'No additional credits', price: 0 },
    { id: '1k', label: '1,000 credits', price: 10 },
    { id: '3k', label: '3,000 credits', price: 25 },
    { id: '10k', label: '10,000 credits', price: 60 },
  ];

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

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    if (activeTab === 'addons') {
      setActiveTab('plan');
    }
  };

  const basePrice = PLAN_PRICING[selectedPlan];
  const isCustom = basePrice === 'Custom';
  const addonsTotal = (additionalUsers * ADDON_PRICING.user) + 
                      (additionalWarehouses * ADDON_PRICING.warehouse) + 
                      (ZETA_PACKAGES.find(p => p.id === selectedZeta)?.price || 0);
  const totalMonthly = isCustom ? 'Custom' : (basePrice as number) + addonsTotal;

  return (
    <div className="bg-slate-50 pt-24 pb-48">
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

        {/* Two-Tab Configurator Header */}
        <div className="max-w-[600px] mx-auto mb-10">
          <div className="flex bg-slate-200/50 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('plan')}
              className={`flex-1 py-3 px-6 text-sm sm:text-base font-bold rounded-lg transition-all ${
                activeTab === 'plan' 
                  ? 'bg-white text-[#0F172A] shadow-sm border border-slate-200' 
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Plan & Pricing
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={`flex-1 py-3 px-6 text-sm sm:text-base font-bold rounded-lg transition-all ${
                activeTab === 'addons' 
                  ? 'bg-white text-[#0F172A] shadow-sm border border-slate-200' 
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Add-ons & Capacity
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="mb-20">
          {/* Tab 1: Plan & Pricing */}
          <div className={`${activeTab === 'plan' ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <PlanCard 
                name="Free"
                price={0}
                hasPromotion={false}
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
                isSelected={selectedPlan === 'Free'}
                onSelect={() => handlePlanSelect('Free')}
              />
              <PlanCard 
                name="Starter"
                price={49}
                hasPromotion={PROMOTION_ACTIVE}
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
                isSelected={selectedPlan === 'Starter'}
                onSelect={() => handlePlanSelect('Starter')}
              />
              <PlanCard 
                name="Growth"
                badge="Most Popular"
                isPopular={true}
                price={99}
                hasPromotion={PROMOTION_ACTIVE}
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
                isSelected={selectedPlan === 'Growth'}
                onSelect={() => handlePlanSelect('Growth')}
              />
              <PlanCard 
                name="Professional"
                price={149}
                hasPromotion={PROMOTION_ACTIVE}
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
                isSelected={selectedPlan === 'Professional'}
                onSelect={() => handlePlanSelect('Professional')}
              />
              <PlanCard 
                name="Enterprise"
                price="Custom"
                hasPromotion={false}
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
                isSelected={selectedPlan === 'Enterprise'}
                onSelect={() => handlePlanSelect('Enterprise')}
              />
            </div>
            
            {/* Proceed to Add-ons Prompt */}
            <div className="mt-12 text-center">
              <p className="text-lg text-slate-500 mb-6">Need more capacity? Add users, warehouses, or Zeta credits without immediately changing your plan.</p>
              <button 
                onClick={() => setActiveTab('addons')}
                className="px-8 py-4 bg-white border border-slate-200 text-[#0F172A] font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                Configure Add-ons & Capacity
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tab 2: Add-ons & Capacity */}
          <div className={`${activeTab === 'addons' ? 'block' : 'hidden'}`}>
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Users Config */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Additional Users
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Add more warehouse operators, supervisors, or managers to your plan.</p>
                  </div>
                  <div className="mt-4 sm:mt-0 text-left sm:text-right">
                    <div className="text-3xl font-extrabold text-[#0F172A]">${additionalUsers * ADDON_PRICING.user}</div>
                    <div className="text-sm font-medium text-slate-500">/ month</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-6">
                  <button 
                    onClick={() => setAdditionalUsers(Math.max(0, additionalUsers - 1))} 
                    className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors font-bold text-xl"
                    aria-label="Decrease users"
                  >
                    -
                  </button>
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={additionalUsers}
                      onChange={(e) => setAdditionalUsers(parseInt(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      aria-label="Additional Users slider"
                    />
                    <div className="flex justify-between text-[10px] sm:text-xs font-bold text-slate-400 mt-3 uppercase tracking-wider">
                      <span>0 users</span>
                      <span className="text-[#0F172A] text-sm">{additionalUsers} users</span>
                      <span>100 users</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAdditionalUsers(additionalUsers + 1)} 
                    className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors font-bold text-xl"
                    aria-label="Increase users"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Warehouses Config */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      Additional Warehouses
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Add additional warehouse locations as your operation expands.</p>
                  </div>
                  <div className="mt-4 sm:mt-0 text-left sm:text-right">
                    <div className="text-3xl font-extrabold text-[#0F172A]">${additionalWarehouses * ADDON_PRICING.warehouse}</div>
                    <div className="text-sm font-medium text-slate-500">/ month</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-6">
                  <button 
                    onClick={() => setAdditionalWarehouses(Math.max(0, additionalWarehouses - 1))} 
                    className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors font-bold text-xl"
                    aria-label="Decrease warehouses"
                  >
                    -
                  </button>
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={additionalWarehouses}
                      onChange={(e) => setAdditionalWarehouses(parseInt(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      aria-label="Additional Warehouses slider"
                    />
                    <div className="flex justify-between text-[10px] sm:text-xs font-bold text-slate-400 mt-3 uppercase tracking-wider">
                      <span>0 warehouses</span>
                      <span className="text-[#0F172A] text-sm">{additionalWarehouses} warehouses</span>
                      <span>20 warehouses</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAdditionalWarehouses(additionalWarehouses + 1)} 
                    className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors font-bold text-xl"
                    aria-label="Increase warehouses"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Zeta Config */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-[#0F172A]">Zeta Intelligence Credits</h3>
                </div>
                <p className="text-sm text-slate-500 mb-6">Zeta is Acrely WMS's AI warehouse intelligence layer. Ask operational questions in natural language.</p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ZETA_PACKAGES.map((pkg) => (
                    <div 
                      key={pkg.id}
                      onClick={() => setSelectedZeta(pkg.id)}
                      className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between h-full ${
                        selectedZeta === pkg.id 
                          ? 'border-[#1E40AF] bg-blue-50/30 shadow-sm' 
                          : 'border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedZeta === pkg.id ? 'border-[#1E40AF] bg-[#1E40AF]' : 'border-slate-300'}`}>
                            {selectedZeta === pkg.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
                          </div>
                        </div>
                        <div className="font-bold text-[#0F172A] leading-tight mb-2">{pkg.label}</div>
                      </div>
                      <div className="mt-4">
                        <div className={`text-lg font-extrabold ${selectedZeta === pkg.id ? 'text-[#1E40AF]' : 'text-slate-700'}`}>
                          {pkg.price === 0 ? 'Included' : `$${pkg.price}`}
                        </div>
                        {pkg.price > 0 && <div className="text-xs font-medium text-slate-500">/ month</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-[#0F172A] font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
            >
              Contact Sales
            </Link>
            <Link
              to="/book-demo"
              className="px-8 py-4 bg-transparent text-white border border-slate-700 font-bold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Book Enterprise Demo
            </Link>
          </div>
        </div>

      </div>

      {/* Sticky Live Summary */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] transform transition-transform">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            <div className="flex-shrink-0 flex items-center gap-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Your Plan</div>
                <div className="font-bold text-lg text-[#0F172A] flex items-center gap-2">
                  {selectedPlan} 
                </div>
              </div>
            </div>
            
            {(additionalUsers > 0 || additionalWarehouses > 0 || selectedZeta !== 'none') && (
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
            )}

            <div className="flex gap-6 sm:gap-8 whitespace-nowrap">
              {additionalUsers > 0 && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Additional Users</div>
                  <div className="font-medium text-[#0F172A]">{additionalUsers} <span className="text-slate-400">(${additionalUsers * ADDON_PRICING.user})</span></div>
                </div>
              )}
              {additionalWarehouses > 0 && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Additional Warehouses</div>
                  <div className="font-medium text-[#0F172A]">{additionalWarehouses} <span className="text-slate-400">(${additionalWarehouses * ADDON_PRICING.warehouse})</span></div>
                </div>
              )}
              {selectedZeta !== 'none' && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Zeta Credits</div>
                  <div className="font-medium text-[#0F172A]">
                    {ZETA_PACKAGES.find(p => p.id === selectedZeta)?.label} 
                    <span className="text-slate-400 ml-1">(${ZETA_PACKAGES.find(p => p.id === selectedZeta)?.price})</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between lg:justify-end gap-6 w-full lg:w-auto border-t border-slate-100 lg:border-t-0 pt-3 lg:pt-0">
            <div className="text-left lg:text-right">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Total Recurring</div>
              
              {isCustom ? (
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Custom Pricing</div>
              ) : (
                <div className="flex flex-col">
                  {PROMOTION_ACTIVE && selectedPlan !== 'Free' ? (
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">First Month</span>
                        <span className="text-lg font-extrabold text-emerald-600 leading-none">FREE</span>
                      </div>
                      <div className="w-px h-8 bg-slate-200"></div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Then</span>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-none">
                          ${totalMonthly}
                          <span className="text-sm text-slate-500 font-medium ml-1">/ mo</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-none">
                      ${totalMonthly}
                      <span className="text-sm text-slate-500 font-medium ml-1">/ mo</span>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="py-3.5 px-8 bg-[#1E40AF] text-white font-bold rounded-xl hover:bg-[#2563EB] transition-colors shadow-md flex-shrink-0 text-center"
            >
              {isCustom ? 'Talk to Sales' : 'Get Started'}
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
