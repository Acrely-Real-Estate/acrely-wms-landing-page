import { Package, Barcode, ClipboardList, Database, Clock, ArrowRightLeft, FileSpreadsheet, ShieldAlert, ArchiveX, Search, CheckSquare, Layers, Lock, CalendarClock, Sparkles, BarChart3, QrCode, HelpCircle, Globe } from 'lucide-react';

export const featuresContent = [
  {
    id: 'inventory-management',
    title: 'Core Inventory Management',
    isComingSoon: false,
    icon: Database,
    heroHeadline: 'Absolute Inventory Truth',
    heroSubheadline: 'Maintain real-time, 100% accurate visibility across all bins, racks, and facilities.',
    businessValue: 'Eliminate stockouts, ghost inventory, and manual counting.',
    businessProblem: [
      'Warehouses running on Excel or outdated ERPs suffer from delayed inventory updates. When the physical floor does not match the system, pickers cannot find items, orders are delayed, and trust in the data collapses.'
    ],
    workflow: [
      'Receive inbound shipment',
      'Scan to putaway bin',
      'System updates ledger instantly',
      'Inventory becomes available for picking',
      'Dashboard reflects live stock levels'
    ],
    capabilities: [
      'Real-time transaction ledger',
      'Multi-level UOM (Unit of Measure) conversions',
      'Global inventory search',
      'Low stock threshold alerts',
      'Historical transaction auditing'
    ],
    benefits: [
      'Stop relying on manual spreadsheets',
      'Never oversell on your sales channels',
      'Instantly locate any SKU in the building'
    ],
    industries: ['All Industries'],
    whyChoose: [
      'Instant synchronization with all mobile scanners',
      'Scalable architecture for millions of SKUs',
      'Immutable audit trails for every movement'
    ],
    faqs: [
      { q: 'Does it update in real-time?', a: 'Yes. Every scan instantly updates the central database without batch processing delays.' }
    ]
  },
  {
    id: 'serial-numbers',
    title: 'Serial Number Tracking',
    isComingSoon: true,
    icon: Barcode,
    heroHeadline: 'Track Every Individual Unit',
    heroSubheadline: 'Capture, validate, and trace unique serial numbers from receiving through dispatch.',
    businessValue: 'Enforce warranty compliance and enable item-level traceability.',
    businessProblem: [
      'High-value electronics and equipment require exact traceability. Without serial capture, processing returns or tracking warranty claims is impossible.'
    ],
    workflow: [
      'Scan supplier carton',
      'Prompt for serial capture',
      'Scan individual item serials',
      'Link serials to sales order during picking',
      'Print serials on packing slip'
    ],
    capabilities: [
      'Inbound and outbound serial capture',
      'Duplicate serial prevention',
      'Serial search and history trace',
      'RMA (Return) validation via serial'
    ],
    benefits: [
      'Prevent fraudulent returns',
      'Comply with manufacturer tracking rules',
      'Ensure accurate warranty dates'
    ],
    industries: ['Electronics', 'Medical Devices', 'High-Value Goods'],
    whyChoose: [
      'Optimized scanning UI for rapid sequential capture',
      'Configurable validation rules (length, format)'
    ],
    faqs: [
      { q: 'Can we scan ranges of serials?', a: 'Yes, if barcodes are sequential, Acrely supports range scanning to save time.' }
    ]
  },
  {
    id: 'lot-batch-tracking',
    title: 'Lot & Batch Tracking',
    isComingSoon: true,
    icon: Layers,
    heroHeadline: 'Total Supply Chain Traceability',
    heroSubheadline: 'Manage production batches, capture manufacturing dates, and execute targeted recalls.',
    businessValue: 'Ensure FDA/regulatory compliance and minimize recall impact.',
    businessProblem: [
      'When a supplier issues a recall, finding exactly which customers received a specific batch is a nightmare without strict lot control.'
    ],
    workflow: [
      'Receive inbound pallet',
      'Record lot/batch number',
      'System locks lot integrity',
      'Pick orders by specific lot',
      'Generate one-click recall report'
    ],
    capabilities: [
      'Strict lot segregation',
      'Lot attribute tracking (country of origin, supplier)',
      'Instant forward/backward recall tracing',
      'Lot mixing prevention rules'
    ],
    benefits: [
      'Execute targeted recalls in seconds',
      'Pass regulatory audits easily',
      'Maintain product quality standards'
    ],
    industries: ['Food & Beverage', 'Pharmaceuticals', 'Chemicals'],
    whyChoose: [
      'Enterprise-grade audit reporting',
      'Hard stops on mobile scanners if wrong lot is picked'
    ],
    faqs: [
      { q: 'Can we prevent picking mixed lots for one order?', a: 'Yes, strict allocation rules can enforce single-lot fulfillment.' }
    ]
  },
  {
    id: 'expiry-fefo',
    title: 'Expiry Tracking & FEFO',
    isComingSoon: true,
    icon: CalendarClock,
    heroHeadline: 'Eradicate Inventory Spoilage',
    heroSubheadline: 'Automatically prioritize picking based on First Expired, First Out (FEFO) logic.',
    businessValue: 'Reduce write-offs and ensure product safety.',
    businessProblem: [
      'Relying on human memory for stock rotation leads to expired goods sitting in the back of racks while fresh goods are shipped out.'
    ],
    workflow: [
      'Scan inbound goods',
      'Enter expiration date',
      'System assigns FEFO priority',
      'Allocation engine directs picker to oldest stock',
      'Scanner blocks picking of fresh stock if older stock exists'
    ],
    capabilities: [
      'FEFO allocation rules',
      'Shelf-life remaining alerts',
      'Automatic quarantine of expired stock',
      'Customer-specific expiry thresholds'
    ],
    benefits: [
      'Drastically reduce spoilage costs',
      'Prevent shipping expired goods',
      'Automate stock rotation logic'
    ],
    industries: ['Cold Storage', 'FMCG', 'Grocery', 'Pharma'],
    whyChoose: [
      'System-enforced rotation (not just recommendations)',
      'Configurable rules per SKU or Customer'
    ],
    faqs: [
      { q: 'What if a customer demands a minimum shelf life?', a: 'Acrely allows you to configure minimum remaining shelf life days per customer order.' }
    ]
  },
  {
    id: 'cycle-counting',
    title: 'Cycle Counting',
    isComingSoon: true,
    icon: ClipboardList,
    heroHeadline: 'Continuous Accuracy, Zero Downtime',
    heroSubheadline: 'Perform targeted inventory counts without shutting down warehouse operations.',
    businessValue: 'Maintain 99.9% accuracy and eliminate annual physical counts.',
    businessProblem: [
      'Shutting down the entire warehouse for a weekend physical count is expensive, stops revenue, and exhausts employees.'
    ],
    workflow: [
      'System generates daily count tasks',
      'Worker receives task on mobile device',
      'Worker counts specific bin',
      'Discrepancies flagged for manager approval',
      'Inventory adjusted automatically upon approval'
    ],
    capabilities: [
      'ABC classification counting',
      'Blind counts (hiding expected quantity)',
      'Velocity-based count triggers',
      'Zero-downtime execution'
    ],
    benefits: [
      'Identify shrinkage early',
      'Eliminate massive annual audits',
      'Improve tax and financial reporting accuracy'
    ],
    industries: ['All Industries'],
    whyChoose: [
      'Intelligent algorithms prioritize high-value and high-velocity SKUs',
      'Seamless mobile execution'
    ],
    faqs: [
      { q: 'Can we do blind counts?', a: 'Yes, you can configure tasks so operators must enter the actual count rather than just verifying a number.' }
    ]
  },
  {
    id: 'transfers',
    title: 'Location Transfers',
    isComingSoon: false,
    icon: ArrowRightLeft,
    heroHeadline: 'Fluid Inventory Movement',
    heroSubheadline: 'Track every internal movement from bin to bin, or warehouse to warehouse.',
    businessValue: 'Never lose pallets in transit or between aisles.',
    businessProblem: [
      'When operators move a pallet to make room but forget to write it down, the WMS directs pickers to an empty bin, causing immediate bottlenecks.'
    ],
    workflow: [
      'Scan LPN / Pallet ID',
      'Scan destination bin barcode',
      'Confirm move',
      'System updates location instantly'
    ],
    capabilities: [
      'Ad-hoc bin transfers',
      'System-directed replenishments',
      'Inter-warehouse transit tracking',
      'Cross-docking movements'
    ],
    benefits: [
      'Maintain exact physical/digital alignment',
      'Speed up replenishment cycles',
      'Trace internal shrinkage'
    ],
    industries: ['All Industries'],
    whyChoose: [
      'Designed for 2-scan rapid execution on RF guns',
      'Prevents transferring into incompatible zones (e.g., dry to freezer)'
    ],
    faqs: [
      { q: 'Does it track goods in transit between facilities?', a: 'Yes, inventory is placed in a "Transit" status until received at the destination.' }
    ]
  },
  {
    id: 'damaged-inventory',
    title: 'Damaged & Quarantined Inventory',
    isComingSoon: true,
    icon: ShieldAlert,
    heroHeadline: 'Isolate Risk Immediately',
    heroSubheadline: 'Digitally quarantine damaged goods to prevent accidental fulfillment.',
    businessValue: 'Protect brand reputation and manage vendor claims.',
    businessProblem: [
      'A damaged box sits on a rack. A picker grabs it to hit their quota. The customer receives a crushed product. Brand damage occurs.'
    ],
    workflow: [
      'Operator spots damage',
      'Changes status to "Quarantine" via mobile',
      'System removes stock from available pool',
      'Item physically moved to QA area',
      'Manager processes vendor claim or write-off'
    ],
    capabilities: [
      'Status-based inventory locks',
      'Reason code logging (e.g., Water Damage, Crushed)',
      'Photo capture integration via mobile app',
      'QA inspection workflows'
    ],
    benefits: [
      'Never ship damaged goods',
      'Streamline insurance and vendor claims',
      'Keep available inventory pools accurate'
    ],
    industries: ['Retail', 'FMCG', 'Electronics'],
    whyChoose: [
      'Instant digital locks prevent the allocation engine from assigning bad stock to orders.'
    ],
    faqs: [
      { q: 'Can we require a reason code for damage?', a: 'Yes, reason codes are mandatory for auditing purposes.' }
    ]
  },
  {
    id: 'reservations',
    title: 'Inventory Reservations',
    isComingSoon: false,
    icon: Lock,
    heroHeadline: 'Protect Committed Stock',
    heroSubheadline: 'Hard-allocate inventory to specific orders, preventing double-selling.',
    businessValue: 'Fulfill VIP orders reliably and manage scarcity.',
    businessProblem: [
      'Two orders drop simultaneously. Without reservations, both channels think they have stock, leading to backorders, apologies, and lost customers.'
    ],
    workflow: [
      'Order drops into WMS',
      'Allocation engine checks rules',
      'Stock status changes from "Available" to "Allocated"',
      'Stock is invisible to other incoming orders',
      'Picker fulfills reserved stock'
    ],
    capabilities: [
      'Soft and hard allocations',
      'Priority-based reservation rules (e.g., B2B over B2C)',
      'Wave and batch allocation logic'
    ],
    benefits: [
      'Eliminate overselling across multiple channels',
      'Prioritize VIP customers automatically',
      'Manage promotional stock accurately'
    ],
    industries: ['E-Commerce', 'Omnichannel Retail', 'Wholesale'],
    whyChoose: [
      'Lightning-fast allocation engine prevents race conditions.'
    ],
    faqs: [
      { q: 'Can we override a reservation?', a: 'Yes, administrators can manually re-allocate stock if a higher priority order arrives.' }
    ]
  },
  {
    id: 'stock-aging',
    title: 'Stock Aging Analytics',
    isComingSoon: true,
    icon: ArchiveX,
    heroHeadline: 'Identify Dead Stock Quickly',
    heroSubheadline: 'Analyze inventory velocity and identify capital tied up in slow-moving goods.',
    businessValue: 'Free up warehouse space and improve cash flow.',
    businessProblem: [
      'Warehouses run out of space, yet 20% of their racks hold obsolete products that haven\'t moved in two years.'
    ],
    workflow: [
      'System tracks receipt dates of all LPNs',
      'Analytics engine calculates days on hand',
      'Manager runs Aging Report (30/60/90/180+ days)',
      'Action taken: Discount, Return to Vendor, or Liquidate'
    ],
    capabilities: [
      'Visual aging dashboards',
      'Customizable aging brackets',
      'Storage cost accumulation tracking'
    ],
    benefits: [
      'Reclaim valuable rack space',
      'Make data-driven liquidation decisions',
      'Improve inventory turnover ratios'
    ],
    industries: ['Apparel', 'Consumer Goods', 'Retail'],
    whyChoose: [
      'Pre-built, executive-ready reports requiring zero configuration.'
    ],
    faqs: [
      { q: 'Can it calculate the cost of holding the aged stock?', a: 'Yes, if unit costs and storage rates are configured, it projects holding costs.' }
    ]
  },

  // New planned features added below
  {
    id: 'migration-center',
    title: 'Acrely Migration Center',
    isComingSoon: true,
    icon: Package,
    heroHeadline: 'Guided WMS Migration',
    heroSubheadline: 'Move from legacy or existing WMS platforms with guided data import, validation, mapping, and migration workflows.',
    businessValue: 'Reduce migration complexity and make switching WMS platforms more manageable.',
    businessProblem: ['Moving from an existing WMS can require extensive consulting, custom work, data cleanup, and manual validation.'],
    workflow: [
      'Import existing warehouse data',
      'Automatically map available fields',
      'Identify missing, duplicate, or invalid records',
      'Review and validate migration data',
      'Preview the migration before execution',
      'Execute the migration',
      'Maintain migration history for traceability'
    ],
    capabilities: [
      'CSV and structured data import',
      'Data mapping',
      'Data validation',
      'Duplicate detection',
      'Migration preview',
      'Migration history',
      'Error identification',
      'Rollback/recovery workflows'
    ],
    benefits: [
      'Reduce migration effort',
      'Improve data quality',
      'Reduce manual data preparation',
      'Make WMS transitions easier to manage'
    ],
    industries: ['All Industries'],
    whyChoose: ['Guided workflows and traceable migration history.'],
    faqs: []
  },
  {
    id: 'insights',
    title: 'Acrely Insights',
    isComingSoon: true,
    icon: FileSpreadsheet,
    heroHeadline: 'Operational Reporting & Dashboards',
    heroSubheadline: 'Turn warehouse operational data into accessible reports, dashboards, and actionable visibility.',
    businessValue: 'Make warehouse data easier to understand, export, and use without depending on complex reporting processes.',
    businessProblem: ['Operational data often exists inside a WMS but can be difficult to extract for reporting, planning, analytics, and external projects.'],
    workflow: [
      'Acrely collects operational activity',
      'Data is organized into usable reporting views',
      'Managers select the information they need',
      'Dashboards provide operational visibility',
      'Reports can be exported or scheduled'
    ],
    capabilities: [
      'Operational dashboards',
      'Order history',
      'SKU velocity',
      'Inventory movement',
      'Picking activity',
      'Warehouse performance',
      'Report exports',
      'API/data access',
      'Scheduled reporting'
    ],
    benefits: [
      'Faster access to warehouse information',
      'Less manual reporting',
      'Better operational visibility',
      'Easier data-driven decision making'
    ],
    industries: ['All Industries'],
    whyChoose: ['Pre-built dashboards with export and scheduling options.'],
    faqs: []
  },
  {
    id: 'zeta-ai',
    title: 'Zeta AI',
    isComingSoon: true,
    icon: Sparkles,
    heroHeadline: 'Conversational Warehouse Intelligence',
    heroSubheadline: 'AI-powered warehouse intelligence that helps managers understand operational issues and identify what needs attention.',
    businessValue: 'Turn complex warehouse data into understandable answers and recommended actions.',
    businessProblem: ['Warehouse managers often have to search through multiple screens and reports to understand why something is going wrong.'],
    workflow: [
      'Zeta analyzes available warehouse information',
      'The manager asks a question or reviews an alert',
      'Zeta identifies relevant operational signals',
      'Zeta explains what is happening',
      'Zeta provides a recommended next action where appropriate'
    ],
    capabilities: [
      'Natural-language warehouse questions',
      'Operational analysis',
      'Exception identification',
      'Bottleneck detection',
      'Performance insights',
      'Recommended actions',
      'Conversational warehouse intelligence'
    ],
    benefits: [
      'Faster decision making',
      'Easier access to operational information',
      'Reduced time spent searching through reports',
      'Better visibility into warehouse problems'
    ],
    industries: ['All Industries'],
    whyChoose: ['Provides human-readable explanations and recommended next steps.'],
    faqs: []
  },
  {
    id: 'workflow-builder',
    title: 'Workflow Builder',
    isComingSoon: true,
    icon: CheckSquare,
    heroHeadline: 'Visual Workflow Configuration',
    heroSubheadline: 'Configure warehouse workflows using visual rules instead of relying on custom development for every operational change.',
    businessValue: 'Give warehouse managers more control over operational configuration.',
    businessProblem: ['Simple workflow changes can require developers, consultants, or vendor support.'],
    workflow: [
      'Select a warehouse event',
      'Define conditions',
      'Select the required action',
      'Test the workflow',
      'Publish the approved configuration'
    ],
    capabilities: [
      'Visual workflow configuration',
      'Conditions',
      'Actions',
      'Rule management',
      'Testing',
      'Approval/publishing workflow',
      'Configuration history'
    ],
    benefits: [
      'Faster operational changes',
      'Less dependency on developers',
      'More configurable warehouse operations',
      'Easier workflow management'
    ],
    industries: ['All Industries'],
    whyChoose: ['Visual rules reduce need for custom code.'],
    faqs: []
  },
  {
    id: 'smart-error-resolution',
    title: 'Smart Error Resolution',
    isComingSoon: true,
    icon: HelpCircle,
    heroHeadline: 'Human-Readable Error Guidance',
    heroSubheadline: 'Replace confusing system errors with clear explanations of what happened, why it happened, and what to do next.',
    businessValue: 'Help warehouse workers and managers resolve operational problems faster.',
    businessProblem: ['Technical WMS error messages can be difficult for frontline workers and managers to understand.'],
    workflow: [
      'System surfaces an error',
      'Human-readable explanation displayed',
      'Recommended next steps provided',
      'Operator follows guidance and retries or escalates'
    ],
    capabilities: [
      'Human-readable errors',
      'Error explanations',
      'Cause identification',
      'Recommended next steps',
      'Context-aware troubleshooting',
      'Error history'
    ],
    benefits: [
      'Faster problem resolution',
      'Less confusion for warehouse workers',
      'Reduced dependency on technical support',
      'Better operational continuity'
    ],
    industries: ['All Industries'],
    whyChoose: ['Clear guidance reduces time to resolution.'],
    faqs: []
  },
  {
    id: 'acrely-scan',
    title: 'Acrely Scan',
    isComingSoon: true,
    icon: QrCode,
    heroHeadline: 'Fast Scanning Workflows',
    heroSubheadline: 'Simple barcode and QR scanning workflows designed around fast warehouse execution.',
    businessValue: 'Make receiving, putaway, picking, packing, transfers, and counting easier for frontline workers.',
    businessProblem: ['Warehouse workers need fast operational workflows without navigating complicated screens.'],
    workflow: [
      'SCAN → CONFIRM → NEXT',
      'Use this concept throughout the page.'
    ],
    capabilities: [
      'Barcode scanning',
      'QR scanning',
      'Mobile camera scanning',
      'Handheld scanner support',
      'Receiving',
      'Putaway',
      'Picking',
      'Packing',
      'Inventory transfers',
      'Cycle counting'
    ],
    benefits: [
      'Faster warehouse execution',
      'Fewer manual entries',
      'Easier frontline workflows',
      'Reduced training complexity'
    ],
    industries: ['All Industries'],
    whyChoose: ['Designed for rapid, repeatable scanning tasks.'],
    faqs: []
  },
  {
    id: 'multilingual-warehouse',
    title: 'Multilingual Warehouse',
    isComingSoon: true,
    icon: Globe,
    heroHeadline: 'Localized Task Instructions',
    heroSubheadline: 'Provide warehouse workflows and instructions in the languages workers are most comfortable using.',
    businessValue: 'Make warehouse software more accessible to diverse frontline teams.',
    businessProblem: ['Warehouse teams can include workers with different language backgrounds, while many enterprise systems primarily rely on one language.'],
    workflow: [
      'User selects a supported language',
      'Interface labels and instructions adapt',
      'Operational tasks remain consistent',
      'Workers execute the same workflow in their preferred supported language'
    ],
    capabilities: [
      'Multi-language interface',
      'Localized task instructions',
      'Worker language preferences',
      'Consistent workflow logic across languages'
    ],
    benefits: [
      'Easier training',
      'Better accessibility',
      'Reduced language barriers',
      'More approachable frontline software'
    ],
    industries: ['All Industries'],
    whyChoose: ['Improves usability for diverse frontline teams.'],
    faqs: []
  },
  {
    id: 'integrations-hub',
    title: 'Integrations Hub',
    isComingSoon: true,
    icon: ArrowRightLeft,
    heroHeadline: 'Manage System Connections',
    heroSubheadline: 'Manage connections between Acrely WMS and the systems that power warehouse operations.',
    businessValue: 'Make integrations easier to connect, monitor, and troubleshoot.',
    businessProblem: ['Integrations can become difficult to manage when every connection requires custom work and there is limited visibility into failures.'],
    workflow: [
      'CONNECT → AUTHENTICATE → MAP → TEST → ACTIVATE'
    ],
    capabilities: [
      'Integration management',
      'Connection monitoring',
      'Data mapping',
      'Authentication',
      'Testing',
      'Error visibility',
      'Integration status (Connected, Delayed, Failed)'
    ],
    benefits: [
      'Better integration visibility',
      'Faster troubleshooting',
      'More manageable connections',
      'Reduced operational uncertainty'
    ],
    industries: ['All Industries'],
    whyChoose: ['Centralized integration tooling and monitoring.'],
    faqs: []
  },
  {
    id: 'warehouse-command-center',
    title: 'Warehouse Command Center',
    isComingSoon: true,
    icon: BarChart3,
    heroHeadline: 'Centralized Operational View',
    heroSubheadline: 'A centralized operational view for understanding warehouse activity and identifying issues that need attention.',
    businessValue: 'Give managers one place to understand what is happening across the warehouse.',
    businessProblem: [],
    workflow: [
      'Orders',
      'Fulfilled',
      'Pending',
      'Exceptions',
      'Active Workers',
      'Shipments Pending'
    ],
    capabilities: [
      'Operational overview',
      'Order status',
      'Exception monitoring',
      'Warehouse activity',
      'Performance indicators',
      'Attention-required alerts'
    ],
    benefits: [
      'Faster operational awareness',
      'Easier management',
      'Better visibility',
      'Faster identification of problems'
    ],
    industries: ['All Industries'],
    whyChoose: ['Single-pane operational dashboards for managers.'],
    faqs: []
  },
  {
    id: 'multi-warehouse-multi-client',
    title: 'Multi-Warehouse & Multi-Client',
    isComingSoon: true,
    icon: Layers,
    heroHeadline: 'Scale Across Warehouses & Clients',
    heroSubheadline: 'Manage multiple warehouses and, where applicable, multiple clients from a unified platform.',
    businessValue: 'Support growing warehouse networks and 3PL operations without separating every operation into unrelated systems.',
    businessProblem: ['Managing multiple warehouses or clients across separate systems increases operational overhead and creates data silos.'],
    workflow: [
      'Company → Warehouse A → Warehouse B → Warehouse C',
      'For 3PL: Client A → Inventory, Orders, Users; Client B → Inventory, Orders, Users'
    ],
    capabilities: [
      'Multiple warehouses',
      'Multi-client organization',
      'Client-level visibility',
      'Warehouse-level operations',
      'User access controls',
      'Data separation'
    ],
    benefits: [
      'Centralized management',
      'Easier scaling',
      'Better organizational control',
      'Support for complex warehouse structures'
    ],
    industries: ['3PL', 'Distribution'],
    whyChoose: ['Designed for multi-tenant operations and 3PL workflows.'],
    faqs: []
  },
  {
    id: 'acrely-sandbox',
    title: 'Acrely Sandbox',
    isComingSoon: true,
    icon: ClipboardList,
    heroHeadline: 'Isolated Testing Environment',
    heroSubheadline: 'Test configuration and workflow changes in an isolated environment before applying them to live warehouse operations.',
    businessValue: 'Give teams a safer way to test operational changes.',
    businessProblem: ['Changing live warehouse configuration without proper testing can create operational risk.'],
    workflow: [
      'LIVE SYSTEM',
      '↓',
      'SANDBOX',
      '↓',
      'TEST',
      '↓',
      'VALIDATE',
      '↓',
      'APPROVE',
      '↓',
      'PUBLISH'
    ],
    capabilities: [
      'Isolated testing environment',
      'Workflow testing',
      'Configuration testing',
      'Validation',
      'Approval before publishing',
      'Change review'
    ],
    benefits: [
      'Safer configuration changes',
      'Reduced operational risk',
      'Better testing',
      'Greater confidence before deployment'
    ],
    industries: ['All Industries'],
    whyChoose: ['Provides a safe staging area for operational changes.'],
    faqs: []
  },
  {
    id: 'release-safety-center',
    title: 'Release Safety Center',
    isComingSoon: true,
    icon: Lock,
    heroHeadline: 'Structured Release Testing',
    heroSubheadline: 'Provide a structured process for testing and managing Acrely WMS updates before they reach production.',
    businessValue: 'Reduce operational risk associated with software updates.',
    businessProblem: ['Warehouse operations depend on reliable software, and unexpected changes can disrupt workflows.'],
    workflow: [
      'TEST → VALIDATE → DEPLOY'
    ],
    capabilities: [
      'Release preview',
      'Staging validation',
      'Compatibility checks',
      'Deployment history',
      'Release tracking',
      'Recovery/rollback workflows where supported'
    ],
    benefits: [
      'Safer updates',
      'Better release visibility',
      'Reduced deployment risk',
      'Greater operational confidence'
    ],
    industries: ['All Industries'],
    whyChoose: ['Structured release validation workflows.'],
    faqs: []
  }
];
