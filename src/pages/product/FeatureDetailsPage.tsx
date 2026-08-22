import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle,
  BarChart3,
  QrCode,
  ArrowDownToLine,
  Box,
  Truck,
  RotateCcw,
  Sparkles,
  Package,
  FileSpreadsheet,
  CheckSquare,
  Globe,
  ArrowRightLeft,
  ClipboardList,
  Lock,
  Layers
} from 'lucide-react';

const featuresData: Record<string, any> = {
  'zeta-intelligence': {
    title: 'Zeta Warehouse Intelligence',
    icon: Sparkles,
    shortDesc: 'Warehouse intelligence, built into the WMS.',
    businessProblem: 'Warehouse managers spend hours compiling spreadsheets, writing SQL, or building complex reports just to answer simple operational questions. This limits visibility, delays decision-making, and keeps operational data locked away from the people on the floor.',
    workflow: [
      'Data is captured normally via WMS scanning operations.',
      'User asks Zeta a natural-language question (e.g., "Summarize receiving for today").',
      'Zeta validates the user\'s RBAC permissions.',
      'Zeta queries the live operational data safely.',
      'Zeta returns a human-readable summary and data table.'
    ],
    capabilities: [
      'Natural-language querying: Ask questions without SQL or report builders.',
      'Operational summaries: Quickly understand daily throughput and variances.',
      'Anomaly detection: Surface unusual inventory adjustments automatically.',
      'Multi-warehouse analysis: Compare performance across facilities.'
    ],
    roi: [
      { metric: '100%', description: 'Elimination of manual report building for supported queries' },
      { metric: 'Zero', description: 'Data exposure to unauthorized users due to strict RBAC adherence' },
      { metric: 'Instant', description: 'Access to complex operational insights' }
    ]
  },

  'inventory': {
    title: 'Real-Time Inventory Control',
    icon: BarChart3,
    shortDesc: 'Eliminate systemic discrepancies with live, auditable stock visibility.',
    businessProblem: 'Without real-time inventory visibility, businesses suffer from stockouts, over-purchasing, and lost sales due to inaccurate available-to-promise metrics. Spreadsheets and legacy systems require manual reconciliation, leading to costly delays.',
    workflow: [
      'Goods received via scanner.',
      'System allocates inventory to specific bins.',
      'Live dashboard reflects updated quantities instantly.',
      'ERP or storefront receives automatic API update.',
      'Order drops into system and allocates stock immediately.'
    ],
    capabilities: [
      'Multi-Warehouse Tracking: Visibility across all physical locations.',
      'Serial & Lot Tracking: Traceability for compliance and recalls.',
      'Low Stock Alerts: Automated reorder point notifications.',
      'Cycle Counting: Non-disruptive continuous inventory verification.'
    ],
    benefits: [
      '99.9% Inventory Accuracy',
      'Eliminate physical stock-takes',
      'Reduce carrying costs by optimizing stock levels',
      'Prevent dead stock accumulation'
    ],
    useCases: [
      'Retailers managing omnichannel fulfillment across stores and distribution centers.',
      'Food & Beverage distributors requiring strict FIFO batch management.',
      'Manufacturers tracking raw material availability.'
    ],
    faq: [
      { q: 'Can we track inventory across multiple physical buildings?', a: 'Yes, Acrely supports unlimited physical locations, segmented by zones, aisles, and bins.' },
      { q: 'Does it support decimal quantities for weight-based products?', a: 'Yes, inventory can be tracked in eaches, cases, pallets, or decimal weights/volumes.' }
    ],
    related: [
      { name: 'Barcode Scanning', path: 'barcodes' },
      { name: 'Receiving', path: 'receiving' }
    ]
  },
  'barcodes': {
    title: 'Barcode Scanning & Printing',
    icon: QrCode,
    shortDesc: 'Digitize operations with robust barcode and label generation.',
    businessProblem: 'Manual data entry on the warehouse floor leads to high error rates. Reading part numbers manually causes mis-picks, inaccurate receiving, and slow processing times.',
    workflow: [
      'Items arrive without labels.',
      'Operator selects Purchase Order in Acrely.',
      'System generates standardized 1D/2D barcodes.',
      'Thermal printer outputs labels instantly.',
      'Items are labeled and scanned into location.'
    ],
    capabilities: [
      'Custom Label Designer: Match your specific label requirements.',
      'GS1 Standard Support: Compatible with global supply chain standards.',
      'Direct Printer Integration: Native support for Zebra and Honeywell printers.',
      'Mobile App Scanner: Turn any smartphone or industrial PDA into a scanner.'
    ],
    benefits: [
      'Eliminate manual data entry errors',
      'Increase receiving speed by 40%',
      'Ensure 100% picking accuracy',
      'Standardize inventory labeling'
    ],
    useCases: [
      'Relabeling imported goods for local compliance.',
      'Generating pallet license plates (LPNs) for bulk storage.',
      'Scanning serial numbers for high-value electronics.'
    ],
    faq: [
      { q: 'Do we need proprietary scanners?', a: 'No, our web app works with any Bluetooth scanner or Android/iOS device camera, though we recommend industrial Android PDAs for high volume.' },
      { q: 'Can we use our existing supplier barcodes?', a: 'Yes, you can alias existing supplier UPCs/EANs to your internal SKU numbers.' }
    ],
    related: [
      { name: 'Inventory Control', path: 'inventory' },
      { name: 'Picking', path: 'picking' }
    ]
  },
  'receiving': {
    title: 'Inbound Receiving',
    icon: ArrowDownToLine,
    shortDesc: 'Process inbound freight with speed and strict validation.',
    businessProblem: 'Dock bottlenecks occur when receivers must manually verify paperwork against physical goods, leading to yard congestion and delayed availability of stock for sales.',
    workflow: [
      'Advance Shipping Notice (ASN) or PO is loaded.',
      'Truck arrives at dock door.',
      'Receiver scans items as they are unloaded.',
      'System flags overages, shortages, or damages instantly.',
      'Putaway tasks are automatically generated.'
    ],
    capabilities: [
      'Blind & Directed Receiving: Force validation or guide the receiver.',
      'Quality Hold Status: Quarantine damaged goods immediately.',
      'Cross-docking: Route urgent inventory directly to shipping dock.',
      'Vendor Performance Metrics: Track supplier accuracy.'
    ],
    benefits: [
      'Reduce dock-to-stock time',
      'Hold vendors accountable for discrepancies',
      'Prevent damaged stock from entering inventory pool',
      'Clear dock congestion'
    ],
    useCases: [
      'High-volume distributors receiving mixed pallets.',
      'Manufacturers inspecting raw materials before acceptance.',
      '3PLs processing inbound shipments for multiple clients.'
    ],
    faq: [
      { q: 'How are over-shipments handled?', a: 'Based on your settings, the system can block receiving over PO quantity, or accept it with a supervisor override flag.' },
      { q: 'Can we attach photos of damaged freight?', a: 'Yes, the mobile interface allows capturing and attaching photos directly to the receipt record.' }
    ],
    related: [
      { name: 'Purchase Orders', path: 'po' },
      { name: 'Inventory Control', path: 'inventory' }
    ]
  },
  'picking': {
    title: 'Advanced Wave Picking',
    icon: Box,
    shortDesc: 'Optimize picker routes and maximize fulfillment throughput.',
    businessProblem: 'Inefficient walking paths and single-order picking models cripple warehouse throughput. Pickers waste hours backtracking across the warehouse floor.',
    workflow: [
      'System batches 50 pending orders based on priority.',
      'Wave generated and assigned to available picker.',
      'Picker guided along optimized path on mobile device.',
      'Picker scans bin, then scans item to verify.',
      'Goods dropped at packing station.'
    ],
    capabilities: [
      'Batch & Wave Picking: Consolidate picks across multiple orders.',
      'Zone Picking: Confine pickers to specific warehouse areas.',
      'Route Optimization: Shortest-path routing logic.',
      'Pick-to-Light Integration ready.'
    ],
    benefits: [
      'Double picking throughput',
      'Reduce picker fatigue and walking distance',
      'Achieve 99.9% order accuracy',
      'Easily onboard temporary labor'
    ],
    useCases: [
      'E-commerce fulfillment centers processing thousands of small orders daily.',
      'Wholesale distributors assembling mixed pallets.',
      'Retail replenishment picking.'
    ],
    faq: [
      { q: 'Does the system tell the picker where to go?', a: 'Yes, it provides a step-by-step sequential list ordered by physical bin locations to prevent backtracking.' },
      { q: 'What happens if a bin is empty?', a: 'The picker marks it as a "short pick", which triggers a cycle count task and attempts to route them to a secondary location.' }
    ],
    related: [
      { name: 'Packing', path: 'packing' },
      { name: 'Barcode Scanning', path: 'barcodes' }
    ]
  },
  'migration-center': {
    title: 'Acrely Migration Center',
    isComingSoon: true,
    icon: Package,
    shortDesc: 'Guided data import, mapping and migration workflows for WMS transitions.',
    businessProblem: 'Moving from a legacy WMS typically requires extensive consulting, manual data cleanup, and custom scripts to map and validate datasets.',
    workflow: [
      'Import existing warehouse data',
      'Map fields automatically and manually',
      'Identify and resolve data issues',
      'Preview migration and validate',
      'Execute migration and record history'
    ],
    capabilities: [
      'CSV and structured data import',
      'Automated and manual data mapping',
      'Duplicate detection and validation',
      'Migration preview and dry-run',
      'Migration history and traceability'
    ],
    benefits: [
      'Reduce migration effort and consulting time',
      'Improve data quality at go-live',
      'Reduce manual preparation tasks',
      'Traceable migration history for audits'
    ]
  },
  'insights': {
    title: 'Acrely Insights',
    isComingSoon: true,
    icon: FileSpreadsheet,
    shortDesc: 'Operational dashboards, reporting and scheduled exports for warehouse data.',
    businessProblem: 'Operational data is often trapped in operational systems and difficult to extract for reporting, planning, and analytics.',
    workflow: [
      'Collect operational activity',
      'Organize into reporting views',
      'Select and configure dashboards',
      'Export or schedule reports for stakeholders'
    ],
    capabilities: [
      'Operational dashboards and tiles',
      'Order history and SKU velocity',
      'Inventory movement analytics',
      'Report exports and scheduled reports',
      'API/data access for external analytics'
    ],
    benefits: [
      'Faster access to operational information',
      'Reduce manual reporting effort',
      'Improve decision-making with timely data'
    ]
  },
  'zeta-ai': {
    title: 'Zeta AI',
    isComingSoon: true,
    icon: Sparkles,
    shortDesc: 'Conversational warehouse intelligence to surface issues and recommended actions.',
    businessProblem: 'Managers spend time searching across screens and reports to understand operational problems.',
    workflow: [
      'Analyze operational signals',
      'Manager asks a question or reviews an alert',
      'Zeta identifies relevant signals and explains findings',
      'Zeta suggests recommended next steps where appropriate'
    ],
    capabilities: [
      'Natural-language questions',
      'Operational analysis and summaries',
      'Exception and bottleneck detection',
      'Recommended actions and explainability'
    ],
    benefits: [
      'Faster decision making',
      'Reduced time searching for answers',
      'Clearer operational visibility'
    ]
  },
  'workflow-builder': {
    title: 'Workflow Builder',
    isComingSoon: true,
    icon: CheckSquare,
    shortDesc: 'Visual rule-based workflow configuration for operational events.',
    businessProblem: 'Small workflow changes often require developer time or vendor support.',
    workflow: [
      'Select event',
      'Define conditions',
      'Select action',
      'Test and publish'
    ],
    capabilities: [
      'Visual workflow configuration',
      'Conditions & actions',
      'Testing and approval flows',
      'Configuration history and rollback'
    ],
    benefits: [
      'Faster operational changes',
      'Reduced developer dependency',
      'More flexible operations'
    ]
  },
  'smart-error-resolution': {
    title: 'Smart Error Resolution',
    isComingSoon: true,
    icon: HelpCircle,
    shortDesc: 'Clear, human-readable error explanations with recommended remediation steps.',
    businessProblem: 'Technical error messages can be cryptic and slow down frontline problem resolution.',
    workflow: [
      'System surfaces an error',
      'Human-readable explanation displayed',
      'Recommended next steps provided',
      'Operator follows guidance or escalates'
    ],
    capabilities: [
      'Human-readable messages',
      'Cause identification',
      'Recommended remediation',
      'Error history and context'
    ],
    benefits: [
      'Faster issue resolution',
      'Reduced confusion for frontline workers',
      'Lower support load'
    ]
  },
  'acrely-scan': {
    title: 'Acrely Scan',
    isComingSoon: true,
    icon: QrCode,
    shortDesc: 'Barcode and QR scanning workflows optimized for speed: SCAN → CONFIRM → NEXT.',
    businessProblem: 'Frontline workers need streamlined scanning flows without navigating complex screens.',
    workflow: [
      'SCAN → CONFIRM → NEXT'
    ],
    capabilities: [
      'Barcode & QR scanning',
      'Mobile camera scanning',
      'Handheld scanner support',
      'Receiving, putaway, picking, packing, transfers, counting'
    ],
    benefits: [
      'Faster execution on the floor',
      'Fewer manual entries',
      'Reduced training complexity'
    ]
  },
  'multilingual-warehouse': {
    title: 'Multilingual Warehouse',
    isComingSoon: true,
    icon: Globe,
    shortDesc: 'Localized interfaces and instructions to support frontline language preferences.',
    businessProblem: 'Workforces with diverse language backgrounds need localized instructions for safe and accurate execution.',
    workflow: [
      'User selects preferred language',
      'Interface labels and instructions adapt',
      'Workers execute tasks with consistent workflow logic'
    ],
    capabilities: [
      'Multi-language UI',
      'Localized task instructions',
      'Worker language preferences'
    ],
    benefits: [
      'Easier training',
      'Better accessibility',
      'Reduced language-related errors'
    ]
  },
  'integrations-hub': {
    title: 'Integrations Hub',
    isComingSoon: true,
    icon: ArrowRightLeft,
    shortDesc: 'Manage, monitor, and troubleshoot connections to external systems.',
    businessProblem: 'Connection failures and lack of visibility make integrations hard to operate and troubleshoot.',
    workflow: [
      'CONNECT → AUTHENTICATE → MAP → TEST → ACTIVATE'
    ],
    capabilities: [
      'Connection monitoring',
      'Data mapping tools',
      'Authentication flows',
      'Testing and error visibility'
    ],
    benefits: [
      'Faster troubleshooting',
      'Better visibility into integration health',
      'More manageable connections'
    ]
  },
  'warehouse-command-center': {
    title: 'Warehouse Command Center',
    isComingSoon: true,
    icon: BarChart3,
    shortDesc: 'A consolidated operational dashboard surface for managers to see activity and attention items.',
    businessProblem: 'Managers need one place to understand orders, exceptions, and performance across the floor.',
    workflow: [
      'Operational overview, orders, exceptions, active workers, pending shipments'
    ],
    capabilities: [
      'Operational overview',
      'Exception monitoring',
      'Performance indicators',
      'Attention-required alerts'
    ],
    benefits: [
      'Faster operational awareness',
      'Easier management',
      'Quicker problem identification'
    ]
  },
  'multi-warehouse-multi-client': {
    title: 'Multi-Warehouse & Multi-Client',
    isComingSoon: true,
    icon: Layers,
    shortDesc: 'Manage multiple warehouses and clients from a unified platform for 3PL and multi-site operations.',
    businessProblem: 'Scaling across warehouses or clients often creates silos and operational complexity.',
    workflow: [
      'Company → Warehouse A → Warehouse B → Warehouse C; Client-level separation for 3PLs'
    ],
    capabilities: [
      'Multiple warehouses',
      'Multi-client organization',
      'Client-level visibility',
      'User access controls',
      'Data separation'
    ],
    benefits: [
      'Centralized management',
      'Easier scaling',
      'Support for complex warehouse structures'
    ]
  },
  'acrely-sandbox': {
    title: 'Acrely Sandbox',
    isComingSoon: true,
    icon: ClipboardList,
    shortDesc: 'Isolated environment for testing configuration and workflow changes prior to production.',
    businessProblem: 'Applying untested changes to production can cause operational disruptions.',
    workflow: [
      'LIVE SYSTEM → SANDBOX → TEST → VALIDATE → APPROVE → PUBLISH'
    ],
    capabilities: [
      'Isolated testing environment',
      'Workflow and configuration testing',
      'Validation and approval flows'
    ],
    benefits: [
      'Safer configuration changes',
      'Reduced operational risk',
      'Greater confidence before deployment'
    ]
  },
  'release-safety-center': {
    title: 'Release Safety Center',
    isComingSoon: true,
    icon: Lock,
    shortDesc: 'Structured processes and checks to validate releases before they reach production.',
    businessProblem: 'Unexpected software changes can disrupt warehouse operations if not validated in advance.',
    workflow: [
      'TEST → VALIDATE → DEPLOY'
    ],
    capabilities: [
      'Release preview',
      'Staging validation',
      'Compatibility checks',
      'Deployment history and tracking'
    ],
    benefits: [
      'Safer updates',
      'Better release visibility',
      'Reduced deployment risk'
    ]
  }
};

export const FeatureDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [feature, setFeature] = useState<any>(null);

  useEffect(() => {
    if (id && featuresData[id]) {
      setFeature(featuresData[id]);
    } else {
      // Default to inventory if not found
      setFeature(featuresData['inventory']);
    }
  }, [id]);

  if (!feature) return null;

  return (
    <div className="pt-16 bg-white min-h-screen pb-24">
      
      {/* Header */}
      <section className="bg-slate-900 pt-20 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <Link to="/features" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Features
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <feature.icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {feature.title}
              </h1>
              {feature.isComingSoon && (
                <div className="mt-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          </div>
          <p className="text-slate-300 text-xl leading-relaxed">
            {feature.shortDesc}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Business Problem */}
        <section>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
            The Business Problem
          </h2>
          <p className="text-[#334155] text-lg leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-200">
            {feature.businessProblem}
          </p>
        </section>

        {/* Operational Workflow */}
        <section>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
            Operational Workflow
          </h2>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm">
            <ol className="relative border-l border-slate-200 ml-3 space-y-8">
              {feature.workflow.map((step: string, idx: number) => (
                <li key={idx} className="pl-8 relative">
                  <span className="absolute w-6 h-6 bg-[#1E40AF] rounded-full -left-3 flex items-center justify-center text-white text-xs font-bold ring-4 ring-white">
                    {idx + 1}
                  </span>
                  <p className="text-[#334155] font-medium pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Grid: Capabilities & Benefits */}
        <div className="grid md:grid-cols-2 gap-12">
          
          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
              Key Capabilities
            </h2>
            <ul className="space-y-4">
              {feature.capabilities.map((cap: string, idx: number) => {
                const [title, desc] = cap.split(': ');
                return (
                  <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#1E40AF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F172A] block">{title}</span>
                      {desc && <span className="text-[#64748B] text-sm leading-relaxed block mt-1">{desc}</span>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
              Business Benefits
            </h2>
            <ul className="space-y-4">
              {feature.benefits.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-medium text-emerald-900">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
            Common Use Cases
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {feature.useCases.map((useCase: string, idx: number) => (
              <div key={idx} className="bg-slate-50 border border-[#E5E7EB] p-5 rounded-xl">
                <p className="text-[#334155] text-sm leading-relaxed">{useCase}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-b border-[#E5E7EB] pb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {feature.faq.map((item: any, idx: number) => (
              <div key={idx} className="bg-white border border-[#E5E7EB] p-6 rounded-xl shadow-sm">
                <h4 className="flex items-start gap-3 font-bold text-[#0F172A] mb-3">
                  <HelpCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  {item.q}
                </h4>
                <p className="text-[#64748B] leading-relaxed pl-8">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Modules */}
        <section className="pt-12 border-t border-[#E5E7EB]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748B] mb-6 text-center">
            Explore Related Modules
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {feature.related.map((rel: any, idx: number) => (
              <Link 
                key={idx}
                to={`/features/${rel.path}`}
                className="px-6 py-3 bg-white border border-[#E5E7EB] rounded-lg shadow-sm hover:border-[#1E40AF] hover:text-[#1E40AF] transition-colors font-medium text-[#0F172A]"
              >
                {rel.name}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
