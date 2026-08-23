
import { 
  Package, Barcode, ClipboardList, Database, Clock, ArrowRightLeft, 
  FileSpreadsheet, ShieldAlert, ArchiveX, Search, CheckSquare, Layers, 
  Lock, CalendarClock, Sparkles, BarChart3, QrCode, HelpCircle, Globe,
  Box, Truck, RotateCcw, Building2
} from 'lucide-react';

export const featureRegistry = [
  {
    id: 'inventory-management',
    title: 'Core Inventory Management',
    isComingSoon: false,
    icon: Database,
    heroHeadline: 'Absolute Inventory Truth',
    heroSubheadline: 'Maintain real-time, 100% accurate visibility across all bins, racks, and facilities.',
    businessValue: 'Eliminate stockouts, ghost inventory, and manual counting.',
    businessProblem: [
      'Warehouses running on Excel or outdated ERPs suffer from delayed inventory updates. When the physical floor does not match the system, pickers cannot find items, orders are delayed, and trust in the data collapses.',
      'Without real-time inventory visibility, businesses suffer from stockouts, over-purchasing, and lost sales due to inaccurate available-to-promise metrics.'
    ],
    workflow: [
      'Receive inbound shipment via scanner',
      'System allocates inventory to specific bins',
      'Live dashboard reflects updated quantities instantly',
      'ERP or storefront receives automatic API update',
      'Order drops into system and allocates stock immediately'
    ],
    capabilities: [
      'Real-time transaction ledger and multi-level UOM conversions',
      'Multi-Warehouse Tracking: Visibility across all physical locations',
      'Global inventory search and Low stock threshold alerts',
      'Historical transaction auditing'
    ],
    benefits: [
      '99.9% Inventory Accuracy',
      'Eliminate physical stock-takes and manual spreadsheets',
      'Reduce carrying costs by optimizing stock levels',
      'Never oversell on your sales channels'
    ],
    industries: ['Retail', 'Food & Beverage', 'Manufacturing', 'All Industries'],
    useCases: [
      'Retailers managing omnichannel fulfillment across stores and distribution centers.',
      'Food & Beverage distributors requiring strict FIFO batch management.',
      'Manufacturers tracking raw material availability.'
    ],
    whyChoose: [
      'Instant synchronization with all mobile scanners',
      'Scalable architecture for millions of SKUs',
      'Immutable audit trails for every movement'
    ],
    faq: [
      { q: 'Can we track inventory across multiple physical buildings?', a: 'Yes, Acrely supports unlimited physical locations, segmented by zones, aisles, and bins.' },
      { q: 'Does it support decimal quantities for weight-based products?', a: 'Yes, inventory can be tracked in eaches, cases, pallets, or decimal weights/volumes.' },
      { q: 'Does it update in real-time?', a: 'Yes. Every scan instantly updates the central database without batch processing delays.' }
    ],
    related: [
      { name: 'Barcode Scanning', id: 'barcodes' },
      { name: 'Receiving', id: 'receiving' },
      { name: 'Location Transfers', id: 'transfers' }
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
      'High-value electronics and equipment require exact traceability. Without serial capture, processing returns or tracking warranty claims is impossible.',
      'When products look identical but carry different warranty lifecycles, manual tracking leads to fraudulent returns and compliance failures.'
    ],
    workflow: [
      'Scan supplier carton upon receipt',
      'System prompts for serial capture',
      'Operator scans individual item serials',
      'System links serials to sales order during picking',
      'Serials are printed on packing slip and saved for warranty tracking'
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
      'Ensure accurate warranty dates',
      'End-to-end traceability'
    ],
    industries: ['Electronics', 'Medical Devices', 'High-Value Goods'],
    useCases: [
      'Medical device distributors tracking implants down to the patient level.',
      'Electronics retailers managing warranty claims on high-value items.',
      'Automotive parts suppliers ensuring component traceability.'
    ],
    whyChoose: [
      'Optimized scanning UI for rapid sequential capture',
      'Configurable validation rules (length, format)'
    ],
    faq: [
      { q: 'Can we scan ranges of serials?', a: 'Yes, if barcodes are sequential, Acrely supports range scanning to save time.' },
      { q: 'Does it prevent duplicate serials?', a: 'Yes, the system enforces uniqueness globally or per SKU based on your configuration.' }
    ],
    related: [
      { name: 'Lot & Batch Tracking', id: 'lot-batch-tracking' },
      { name: 'Receiving', id: 'receiving' },
      { name: 'Returns Management', id: 'damaged-inventory' }
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
      'When a supplier issues a recall, finding exactly which customers received a specific batch is a nightmare without strict lot control.',
      'Mixing lots during picking or putaway destroys traceability, leaving the entire warehouse vulnerable during an audit.'
    ],
    workflow: [
      'Receive inbound pallet and record lot/batch number',
      'System locks lot integrity and prevents mixing',
      'System directs picking by specific lot based on rules',
      'Lot numbers are assigned to outgoing shipments',
      'Manager generates one-click recall reports when needed'
    ],
    capabilities: [
      'Strict lot segregation',
      'Lot attribute tracking (country of origin, supplier, dates)',
      'Instant forward/backward recall tracing',
      'Lot mixing prevention rules'
    ],
    benefits: [
      'Execute targeted recalls in seconds',
      'Pass regulatory audits easily',
      'Maintain product quality standards',
      'Prevent cross-contamination'
    ],
    industries: ['Food & Beverage', 'Pharmaceuticals', 'Chemicals'],
    useCases: [
      'Food distributors ensuring traceability from farm to table.',
      'Pharmaceutical companies complying with FDA track-and-trace mandates.',
      'Chemical manufacturers managing strict lot segregation.'
    ],
    whyChoose: [
      'Enterprise-grade audit reporting',
      'Hard stops on mobile scanners if wrong lot is picked'
    ],
    faq: [
      { q: 'Can we prevent picking mixed lots for one order?', a: 'Yes, strict allocation rules can enforce single-lot fulfillment.' },
      { q: 'How fast can we run a recall report?', a: 'A full forward/backward trace takes seconds, identifying all affected customers and remaining stock.' }
    ],
    related: [
      { name: 'Expiry Tracking & FEFO', id: 'expiry-fefo' },
      { name: 'Serial Number Tracking', id: 'serial-numbers' }
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
      'Relying on human memory for stock rotation leads to expired goods sitting in the back of racks while fresh goods are shipped out.',
      'Sending near-expired goods to strict customers results in rejected shipments, fines, and wasted freight costs.'
    ],
    workflow: [
      'Scan inbound goods and enter expiration date',
      'System assigns FEFO priority to the lot',
      'Allocation engine directs picker to oldest stock first',
      'Scanner blocks picking of fresh stock if older stock exists',
      'System automatically quarantines expired items'
    ],
    capabilities: [
      'FEFO (First Expired, First Out) allocation rules',
      'Shelf-life remaining alerts',
      'Automatic quarantine of expired stock',
      'Customer-specific expiry thresholds'
    ],
    benefits: [
      'Drastically reduce spoilage costs',
      'Prevent shipping expired goods',
      'Automate stock rotation logic',
      'Avoid customer rejection fines'
    ],
    industries: ['Cold Storage', 'FMCG', 'Grocery', 'Pharma'],
    useCases: [
      'Grocery distributors ensuring fresh produce rotates correctly.',
      'Pharma warehouses managing strict expiry compliance.',
      'FMCG companies shipping to retailers with 90-day shelf-life requirements.'
    ],
    whyChoose: [
      'System-enforced rotation (not just recommendations)',
      'Configurable rules per SKU or Customer'
    ],
    faq: [
      { q: 'What if a customer demands a minimum shelf life?', a: 'Acrely allows you to configure minimum remaining shelf life days per customer order.' },
      { q: 'Does the system stop pickers from grabbing newer stock?', a: 'Yes, the scanner will enforce the FEFO rule and reject scans of newer lots.' }
    ],
    related: [
      { name: 'Lot & Batch Tracking', id: 'lot-batch-tracking' },
      { name: 'Stock Aging Analytics', id: 'stock-aging' }
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
      'Shutting down the entire warehouse for a weekend physical count is expensive, stops revenue, and exhausts employees.',
      'Without regular checks, inventory drift goes unnoticed until a picker cannot find an item, delaying a critical order.'
    ],
    workflow: [
      'System generates daily count tasks based on velocity or discrepancies',
      'Worker receives task on mobile device',
      'Worker performs blind count of specific bin',
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
      'Improve tax and financial reporting accuracy',
      'Maintain continuous fulfillment'
    ],
    industries: ['All Industries'],
    useCases: [
      'High-volume eCommerce warehouses requiring 24/7 uptime.',
      'Retailers meeting strict financial audit requirements.',
      'Distribution centers managing high-shrinkage items like electronics.'
    ],
    whyChoose: [
      'Intelligent algorithms prioritize high-value and high-velocity SKUs',
      'Seamless mobile execution'
    ],
    faq: [
      { q: 'Can we do blind counts?', a: 'Yes, you can configure tasks so operators must enter the actual count rather than just verifying a number.' },
      { q: 'Does cycle counting stop picking in that aisle?', a: 'No, counts are isolated to specific bins and do not require full aisle lockdowns.' }
    ],
    related: [
      { name: 'Core Inventory Management', id: 'inventory-management' },
      { name: 'Stock Aging Analytics', id: 'stock-aging' }
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
      'When operators move a pallet to make room but forget to write it down, the WMS directs pickers to an empty bin, causing immediate bottlenecks.',
      'Moving inventory between facilities often results in "black holes" where stock is neither at the origin nor destination.'
    ],
    workflow: [
      'Operator scans LPN / Pallet ID',
      'Operator scans destination bin barcode',
      'Operator confirms move on mobile device',
      'System updates location instantly, maintaining full audit trail'
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
      'Trace internal shrinkage',
      'Eliminate misplaced pallets'
    ],
    industries: ['All Industries'],
    useCases: [
      'Replenishing forward pick faces from bulk storage.',
      'Transferring excess stock to a secondary overflow facility.',
      'Reorganizing aisles for seasonal volume.'
    ],
    whyChoose: [
      'Designed for 2-scan rapid execution on RF guns',
      'Prevents transferring into incompatible zones (e.g., dry to freezer)'
    ],
    faq: [
      { q: 'Does it track goods in transit between facilities?', a: 'Yes, inventory is placed in a "Transit" status until received at the destination.' },
      { q: 'Are transfers audited?', a: 'Yes, every move logs the user, timestamp, origin, and destination.' }
    ],
    related: [
      { name: 'Core Inventory Management', id: 'inventory-management' },
      { name: 'Acrely Scan', id: 'acrely-scan' }
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
      'A damaged box sits on a rack. A picker grabs it to hit their quota. The customer receives a crushed product. Brand damage occurs.',
      'Failing to log damaged inbound freight results in lost vendor claims and absorbed costs.'
    ],
    workflow: [
      'Operator spots damage during receiving or picking',
      'Changes status to "Quarantine" via mobile device',
      'System immediately removes stock from available pool',
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
      'Keep available inventory pools accurate',
      'Ensure regulatory compliance for compromised goods'
    ],
    industries: ['Retail', 'FMCG', 'Electronics', 'Food & Beverage'],
    useCases: [
      'Isolating temperature-abused food shipments.',
      'Logging forklift damage for internal shrink metrics.',
      'Holding inbound freight for QA inspection before release.'
    ],
    whyChoose: [
      'Instant digital locks prevent the allocation engine from assigning bad stock to orders.'
    ],
    faq: [
      { q: 'Can we require a reason code for damage?', a: 'Yes, reason codes are mandatory for auditing purposes.' },
      { q: 'Can stock be quarantined without physically moving it?', a: 'Yes, digital quarantine instantly blocks allocation even if the item is still in a regular bin.' }
    ],
    related: [
      { name: 'Receiving', id: 'receiving' },
      { name: 'Core Inventory Management', id: 'inventory-management' }
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
      'Two orders drop simultaneously. Without reservations, both channels think they have stock, leading to backorders, apologies, and lost customers.',
      'A wholesale B2B order wipes out inventory intended for a highly promoted B2C flash sale.'
    ],
    workflow: [
      'Order drops into WMS',
      'Allocation engine checks priority rules',
      'Stock status changes from "Available" to "Allocated"',
      'Stock becomes invisible to other incoming orders',
      'Picker fulfills reserved stock safely'
    ],
    capabilities: [
      'Soft and hard allocations',
      'Priority-based reservation rules (e.g., B2B over B2C)',
      'Wave and batch allocation logic',
      'Pre-allocating inbound POs to backorders'
    ],
    benefits: [
      'Eliminate overselling across multiple channels',
      'Prioritize VIP customers automatically',
      'Manage promotional stock accurately',
      'Reduce customer service complaints'
    ],
    industries: ['E-Commerce', 'Omnichannel Retail', 'Wholesale'],
    useCases: [
      'Protecting inventory for a flagship retail store replenishment.',
      'Reserving stock for a highly anticipated product drop.',
      'Managing limited edition scarcity across multiple marketplaces.'
    ],
    whyChoose: [
      'Lightning-fast allocation engine prevents race conditions even during high-volume spikes.'
    ],
    faq: [
      { q: 'Can we override a reservation?', a: 'Yes, administrators can manually re-allocate stock if a higher priority order arrives.' },
      { q: 'Does it reserve specific bins?', a: 'It can soft-reserve at the facility level, or hard-reserve down to the specific bin and lot.' }
    ],
    related: [
      { name: 'Picking', id: 'picking' },
      { name: 'Core Inventory Management', id: 'inventory-management' }
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
      'Warehouses run out of space, yet 20% of their racks hold obsolete products that have not moved in two years.',
      'Without aging visibility, capital remains trapped in dead stock while holding costs accumulate.'
    ],
    workflow: [
      'System tracks receipt dates of all LPNs and items',
      'Analytics engine calculates days on hand continuously',
      'Manager runs Aging Report (30/60/90/180+ days)',
      'Action taken: Discount, Return to Vendor, or Liquidate',
      'Warehouse space is reclaimed'
    ],
    capabilities: [
      'Visual aging dashboards',
      'Customizable aging brackets',
      'Storage cost accumulation tracking',
      'Velocity and turnover ratios'
    ],
    benefits: [
      'Reclaim valuable rack space',
      'Make data-driven liquidation decisions',
      'Improve inventory turnover ratios',
      'Reduce carrying costs'
    ],
    industries: ['Apparel', 'Consumer Goods', 'Retail', 'Electronics'],
    useCases: [
      'Identifying last seasons apparel for outlet liquidation.',
      'Charging 3PL clients for long-term storage of slow movers.',
      'Optimizing procurement by flagging over-purchased SKUs.'
    ],
    whyChoose: [
      'Pre-built, executive-ready reports requiring zero configuration.'
    ],
    faq: [
      { q: 'Can it calculate the cost of holding the aged stock?', a: 'Yes, if unit costs and storage rates are configured, it projects holding costs.' },
      { q: 'Does it track aging by lot or by SKU?', a: 'It tracks both. You can see aging per specific lot, or overall velocity per SKU.' }
    ],
    related: [
      { name: 'Insights & Reporting', id: 'insights' },
      { name: 'Zeta AI', id: 'zeta-ai' }
    ]
  },
  {
    id: 'migration-center',
    title: 'Acrely Migration Center',
    isComingSoon: true,
    icon: Package,
    heroHeadline: 'Guided WMS Migration',
    heroSubheadline: 'Move from legacy or existing WMS platforms with guided data import, validation, mapping, and migration workflows.',
    businessValue: 'Reduce migration complexity and make switching WMS platforms more manageable.',
    businessProblem: [
      'Moving from an existing WMS can require extensive consulting, custom work, data cleanup, and manual validation.',
      'Data mapping errors during transition often lead to lost inventory or halted operations on go-live day.'
    ],
    workflow: [
      'Import existing warehouse data (CSV/API)',
      'Automatically map available fields to Acrely schema',
      'System identifies missing, duplicate, or invalid records',
      'Review and validate migration data in staging',
      'Execute migration and maintain history'
    ],
    capabilities: [
      'CSV and structured data import',
      'Data mapping and Validation engine',
      'Duplicate detection and Error identification',
      'Migration preview and Rollback workflows'
    ],
    benefits: [
      'Reduce migration effort and consulting hours',
      'Improve data quality upon entry',
      'Make WMS transitions safer and easier to manage'
    ],
    industries: ['All Industries'],
    useCases: [
      'Migrating from legacy on-premise systems to cloud WMS.',
      'Onboarding new 3PL clients rapidly.',
      'Consolidating multiple warehouse databases into one.'
    ],
    whyChoose: [
      'Guided workflows and traceable migration history prevent critical go-live failures.'
    ],
    faq: [
      { q: 'Can we rollback if a migration fails?', a: 'Yes, staging environments and rollback workflows protect production data.' }
    ],
    related: [
      { name: 'Acrely Sandbox', id: 'acrely-sandbox' },
      { name: 'Multi-Warehouse & Multi-Client', id: 'multi-warehouse-multi-client' }
    ]
  },
  {
    id: 'insights',
    title: 'Acrely Insights',
    isComingSoon: true,
    icon: FileSpreadsheet,
    heroHeadline: 'Operational Reporting & Dashboards',
    heroSubheadline: 'Turn warehouse operational data into accessible reports, dashboards, and actionable visibility.',
    businessValue: 'Make warehouse data easier to understand, export, and use without depending on complex reporting processes.',
    businessProblem: [
      'Operational data often exists inside a WMS but can be difficult to extract for reporting, planning, analytics, and external projects.',
      'Managers waste hours exporting CSVs and running pivot tables just to get basic KPI metrics.'
    ],
    workflow: [
      'Acrely continuously collects operational activity',
      'Data is organized into usable reporting views instantly',
      'Managers select the pre-built dashboards they need',
      'Reports can be exported or scheduled for email delivery'
    ],
    capabilities: [
      'Operational dashboards and KPI tracking',
      'Order history and SKU velocity',
      'Inventory movement analytics',
      'Report exports and scheduled reporting'
    ],
    benefits: [
      'Faster access to warehouse information',
      'Less manual reporting effort',
      'Better operational visibility',
      'Easier data-driven decision making'
    ],
    industries: ['All Industries'],
    useCases: [
      'Daily standup meetings using live dashboard metrics.',
      'End-of-month reporting sent automatically to executives.',
      'Analyzing picker productivity over a quarter.'
    ],
    whyChoose: [
      'Pre-built dashboards with zero configuration needed to start getting value.'
    ],
    faq: [
      { q: 'Can reports be scheduled?', a: 'Yes, you can schedule reports to be emailed daily, weekly, or monthly.' }
    ],
    related: [
      { name: 'Warehouse Command Center', id: 'warehouse-command-center' },
      { name: 'Zeta AI', id: 'zeta-ai' }
    ]
  },
  {
    id: 'zeta-ai',
    title: 'Zeta Warehouse Intelligence',
    isComingSoon: true,
    icon: Sparkles,
    heroHeadline: 'Conversational Warehouse Intelligence',
    heroSubheadline: 'AI-powered warehouse intelligence that helps managers understand operational issues and identify what needs attention.',
    businessValue: 'Turn complex warehouse data into understandable answers and recommended actions.',
    businessProblem: [
      'Warehouse managers spend hours compiling spreadsheets, writing SQL, or building complex reports just to answer simple operational questions. This limits visibility, delays decision-making, and keeps operational data locked away from the people on the floor.',
      'When an anomaly occurs, finding the root cause takes extensive digging.'
    ],
    workflow: [
      'Data is captured normally via WMS scanning operations',
      'User asks Zeta a natural-language question (e.g., "Summarize receiving for today")',
      'Zeta validates the user\'s RBAC permissions',
      'Zeta queries the live operational data safely and analyzes signals',
      'Zeta returns a human-readable summary, data table, and recommended next steps'
    ],
    capabilities: [
      'Natural-language querying: Ask questions without SQL',
      'Operational summaries: Quickly understand daily throughput',
      'Anomaly detection: Surface unusual inventory adjustments',
      'Multi-warehouse analysis: Compare performance across facilities',
      'Recommended actions and explainability'
    ],
    benefits: [
      '100% elimination of manual report building for supported queries',
      'Zero data exposure to unauthorized users due to strict RBAC',
      'Instant access to complex operational insights',
      'Faster decision making'
    ],
    industries: ['All Industries'],
    useCases: [
      'Asking "Why is order #12345 delayed?" and getting a direct answer about missing stock.',
      'Summarizing picker performance for the shift without pulling reports.',
      'Identifying anomalies in cycle count adjustments over the last week.'
    ],
    whyChoose: [
      'Provides human-readable explanations and recommended next steps, completely integrated with your live data.'
    ],
    faq: [
      { q: 'Is my data used to train public AI models?', a: 'No. Zeta operates within a strict enterprise privacy boundary. Your operational data is never shared.' },
      { q: 'Can warehouse floor workers use Zeta?', a: 'Yes, if granted permission, workers can ask Zeta questions like "Where is the nearest empty bin for this pallet?"' }
    ],
    related: [
      { name: 'Insights & Reporting', id: 'insights' },
      { name: 'Smart Error Resolution', id: 'smart-error-resolution' }
    ]
  },
  {
    id: 'workflow-builder',
    title: 'Workflow Builder',
    isComingSoon: true,
    icon: CheckSquare,
    heroHeadline: 'Visual Workflow Configuration',
    heroSubheadline: 'Configure warehouse workflows using visual rules instead of relying on custom development for every operational change.',
    businessValue: 'Give warehouse managers more control over operational configuration.',
    businessProblem: [
      'Simple workflow changes can require developers, consultants, or vendor support.',
      'Adapting to a new customer\'s unique packing requirements takes weeks instead of minutes.'
    ],
    workflow: [
      'Select a warehouse event (e.g., Order Dropped)',
      'Define conditions (e.g., If Customer = VIP)',
      'Select the required action (e.g., Flag for Priority Picking)',
      'Test the workflow in Sandbox',
      'Publish the approved configuration'
    ],
    capabilities: [
      'Visual workflow configuration (If/Then rules)',
      'Extensive conditions and actions',
      'Rule management and priority ordering',
      'Testing, Approval, and publishing workflows',
      'Configuration history and rollback'
    ],
    benefits: [
      'Faster operational changes',
      'Less dependency on developers or IT',
      'More configurable warehouse operations',
      'Adapt to new business requirements instantly'
    ],
    industries: ['3PL', 'E-Commerce', 'Manufacturing'],
    useCases: [
      'Setting up custom routing rules for specific carriers.',
      'Adding QA steps automatically if a product is fragile.',
      'Routing high-value orders to specific secure packing stations.'
    ],
    whyChoose: [
      'Visual rules reduce need for custom code and expensive professional services.'
    ],
    faq: [
      { q: 'Do I need to know how to code?', a: 'No, the visual builder uses simple dropdowns and logic blocks designed for operations managers.' }
    ],
    related: [
      { name: 'Acrely Sandbox', id: 'acrely-sandbox' },
      { name: 'Multi-Warehouse & Multi-Client', id: 'multi-warehouse-multi-client' }
    ]
  },
  {
    id: 'smart-error-resolution',
    title: 'Smart Error Resolution',
    isComingSoon: true,
    icon: HelpCircle,
    heroHeadline: 'Human-Readable Error Guidance',
    heroSubheadline: 'Replace confusing system errors with clear explanations of what happened, why it happened, and what to do next.',
    businessValue: 'Help warehouse workers and managers resolve operational problems faster.',
    businessProblem: [
      'Technical WMS error messages ("Error 409: Constraint Violation") can be difficult for frontline workers to understand.',
      'Cryptic errors lead to workers abandoning tasks, waiting for managers, and halting productivity.'
    ],
    workflow: [
      'System surfaces an operational error',
      'Human-readable explanation is displayed on the scanner',
      'Recommended next steps are provided immediately',
      'Operator follows guidance to retry, fix, or escalate the issue'
    ],
    capabilities: [
      'Human-readable error translation',
      'Root cause identification',
      'Context-aware troubleshooting steps',
      'Error history and analytics'
    ],
    benefits: [
      'Faster problem resolution on the floor',
      'Less confusion for warehouse workers',
      'Reduced dependency on technical support or supervisors',
      'Better operational continuity'
    ],
    industries: ['All Industries'],
    useCases: [
      'Explaining that an item cannot be picked because it is digitally quarantined.',
      'Guiding a user on how to handle a barcode format mismatch.',
      'Instructing a worker to check connectivity when a sync fails.'
    ],
    whyChoose: [
      'Clear guidance reduces time to resolution and worker frustration.'
    ],
    faq: [
      { q: 'Can supervisors see the errors workers are getting?', a: 'Yes, error analytics track common issues so managers can identify training gaps.' }
    ],
    related: [
      { name: 'Zeta AI', id: 'zeta-ai' },
      { name: 'Acrely Scan', id: 'acrely-scan' }
    ]
  },
  {
    id: 'acrely-scan',
    title: 'Acrely Scan',
    isComingSoon: true,
    icon: QrCode,
    heroHeadline: 'Fast Scanning Workflows',
    heroSubheadline: 'Simple barcode and QR scanning workflows designed around fast warehouse execution.',
    businessValue: 'Make receiving, putaway, picking, packing, transfers, and counting easier for frontline workers.',
    businessProblem: [
      'Warehouse workers need fast operational workflows. Navigating complicated screens, dropdowns, and tiny buttons slows down throughput and causes fatigue.',
      'Legacy RF gun interfaces are unintuitive for modern workers.'
    ],
    workflow: [
      'Open Task on Mobile Device',
      'SCAN Item/Location',
      'CONFIRM Quantity',
      'NEXT Task automatically loads'
    ],
    capabilities: [
      'Barcode & QR scanning support',
      'Mobile camera scanning and Rugged handheld scanner support',
      'Optimized flows for Receiving, Putaway, Picking, Packing',
      'High-contrast, large-touch-target UI'
    ],
    benefits: [
      'Faster warehouse execution',
      'Fewer manual entries and taps',
      'Reduced training time for new hires and temps',
      'Lower error rates'
    ],
    industries: ['All Industries'],
    useCases: [
      'Onboarding temporary workers during peak season in minutes.',
      'Executing high-speed piece picking without looking at the screen.',
      'Verifying packing carton contents rapidly.'
    ],
    whyChoose: [
      'Designed relentlessly for rapid, repeatable scanning tasks.'
    ],
    faq: [
      { q: 'Does it work on Android and iOS?', a: 'Yes, Acrely Scan runs on modern mobile operating systems as well as rugged Android enterprise devices (Zebra, Honeywell).' },
      { q: 'Can it use the phone camera?', a: 'Yes, the app can utilize standard smartphone cameras for scanning if dedicated hardware is not available.' }
    ],
    related: [
      { name: 'Barcode Scanning & Printing', id: 'barcodes' },
      { name: 'Picking', id: 'picking' }
    ]
  },
  {
    id: 'multilingual-warehouse',
    title: 'Multilingual Warehouse',
    isComingSoon: true,
    icon: Globe,
    heroHeadline: 'Localized Task Instructions',
    heroSubheadline: 'Provide warehouse workflows and instructions in the languages workers are most comfortable using.',
    businessValue: 'Make warehouse software more accessible to diverse frontline teams.',
    businessProblem: [
      'Warehouse teams often include workers with diverse language backgrounds. Relying on a single language leads to misunderstandings, errors, and safety risks.'
    ],
    workflow: [
      'Worker logs into mobile device and selects preferred language',
      'Interface labels, buttons, and instructions instantly adapt',
      'Worker executes the exact same workflow safely',
      'System logs data centrally in the standard corporate language'
    ],
    capabilities: [
      'Multi-language interface (Spanish, French, Mandarin, etc.)',
      'Localized task instructions and safety warnings',
      'Persistent worker language preferences',
      'Consistent workflow logic across all languages'
    ],
    benefits: [
      'Easier and faster training for diverse teams',
      'Better accessibility and inclusion',
      'Reduced language-related operational errors',
      'More approachable frontline software'
    ],
    industries: ['Distribution', 'Manufacturing', 'Retail', '3PL'],
    useCases: [
      'A facility in Texas allowing operators to seamlessly switch between English and Spanish on their scanners.',
      'Displaying safety warnings in the native language of the operator.'
    ],
    whyChoose: [
      'Improves usability and safety without fragmenting your operational data.'
    ],
    faq: [
      { q: 'Does changing the language affect the data?', a: 'No. The underlying data (SKUs, Locations, Orders) remains consistent; only the UI and instructions are translated.' }
    ],
    related: [
      { name: 'Acrely Scan', id: 'acrely-scan' },
      { name: 'Smart Error Resolution', id: 'smart-error-resolution' }
    ]
  },
  {
    id: 'integrations-hub',
    title: 'Integrations Hub',
    isComingSoon: true,
    icon: ArrowRightLeft,
    heroHeadline: 'Manage System Connections',
    heroSubheadline: 'Manage connections between Acrely WMS and the systems that power warehouse operations.',
    businessValue: 'Make integrations easier to connect, monitor, and troubleshoot.',
    businessProblem: [
      'Integrations can become difficult to manage when every connection requires custom work.',
      'When an API fails silently, orders stop flowing and no one knows why until customers complain.'
    ],
    workflow: [
      'Select integration (ERP, Shopify, Carriers, etc.)',
      'Authenticate securely',
      'Map data fields visually',
      'Test connection and payloads',
      'Activate and monitor live traffic'
    ],
    capabilities: [
      'Connection monitoring and alerting',
      'Visual data mapping tools',
      'Secure Authentication flows',
      'Testing sandboxes and payload error visibility',
      'Integration status dashboards (Connected, Delayed, Failed)'
    ],
    benefits: [
      'Faster troubleshooting of broken connections',
      'Better visibility into integration health',
      'More manageable IT ecosystem',
      'Reduced operational uncertainty'
    ],
    industries: ['E-Commerce', '3PL', 'Wholesale'],
    useCases: [
      'Connecting to Shopify to automatically pull orders and push back tracking numbers.',
      'Integrating with NetSuite or SAP for financial reconciliation.',
      'Connecting to ShipStation for label generation.'
    ],
    whyChoose: [
      'Centralized integration tooling puts IT and Operations on the same page.'
    ],
    faq: [
      { q: 'What happens if a connection fails?', a: 'The Hub queues the payloads, alerts administrators, and allows for one-click retry once the connection is restored.' }
    ],
    related: [
      { name: 'Warehouse Command Center', id: 'warehouse-command-center' },
      { name: 'Migration Center', id: 'migration-center' }
    ]
  },
  {
    id: 'warehouse-command-center',
    title: 'Warehouse Command Center',
    isComingSoon: true,
    icon: BarChart3,
    heroHeadline: 'Centralized Operational View',
    heroSubheadline: 'A consolidated operational dashboard surface for managers to see activity and attention items.',
    businessValue: 'Give managers one place to understand what is happening across the warehouse.',
    businessProblem: [
      'Managers need one place to understand orders, exceptions, and performance across the floor.',
      'Jumping between multiple screens to check picking progress, receiving docks, and outbound queues wastes time.'
    ],
    workflow: [
      'Manager opens Command Center on desktop or large monitor',
      'Real-time widgets display Orders, Exceptions, and Active Workers',
      'Bottlenecks glow red to indicate attention required',
      'Manager drills down into the specific issue and resolves it'
    ],
    capabilities: [
      'Real-time operational overview',
      'Order fulfillment status and tracking',
      'Exception monitoring (missing stock, damaged goods)',
      'Warehouse worker activity tracking',
      'Attention-required alerting'
    ],
    benefits: [
      'Faster operational awareness',
      'Proactive bottleneck management',
      'Quicker problem identification',
      'Data-driven daily standups'
    ],
    industries: ['All Industries'],
    useCases: [
      'Displaying the Command Center on a large TV in the warehouse office.',
      'Monitoring the ratio of incoming receipts to outgoing shipments during peak season.',
      'Tracking how many pickers are active vs on break.'
    ],
    whyChoose: [
      'Single-pane operational dashboards built specifically for high-velocity environments.'
    ],
    faq: [
      { q: 'Is the data live?', a: 'Yes, the Command Center streams real-time updates as scans happen on the floor.' }
    ],
    related: [
      { name: 'Insights & Reporting', id: 'insights' },
      { name: 'Zeta AI', id: 'zeta-ai' }
    ]
  },
  {
    id: 'multi-warehouse-multi-client',
    title: 'Multi-Warehouse & Multi-Client',
    isComingSoon: true,
    icon: Layers,
    heroHeadline: 'Scale Across Warehouses & Clients',
    heroSubheadline: 'Manage multiple warehouses and, where applicable, multiple clients from a unified platform.',
    businessValue: 'Support growing warehouse networks and 3PL operations without separating every operation into unrelated systems.',
    businessProblem: [
      'Managing multiple warehouses or clients across completely separate systems increases operational overhead and creates massive data silos.',
      '3PLs struggle to give individual clients visibility without exposing other clients data.'
    ],
    workflow: [
      'Admin creates new Facility or new Client',
      'Assigns specific users and permissions',
      'System strictly segments inventory, orders, and reporting',
      'Global admins can see aggregated network views'
    ],
    capabilities: [
      'Multiple facility support with independent configurations',
      'Multi-client organization (Tenant architecture)',
      'Client-level visibility portals',
      'Strict User access controls and Data separation',
      'Inter-warehouse transfer tracking'
    ],
    benefits: [
      'Centralized management of your entire network',
      'Easier scaling when acquiring new facilities',
      'Professional client portals for 3PL customers',
      'Support for complex corporate structures'
    ],
    industries: ['3PL', 'Distribution', 'Enterprise Retail'],
    useCases: [
      'A 3PL providing 5 different brands their own login to view only their specific inventory.',
      'A retailer balancing stock across an East Coast and West Coast distribution center.',
      'Managing micro-fulfillment centers alongside a main hub.'
    ],
    whyChoose: [
      'Built from the ground up for multi-tenant and multi-site operations, not bolted on later.'
    ],
    faq: [
      { q: 'Can a worker have access to two warehouses?', a: 'Yes, permissions can be granted per-user for specific facilities or globally.' },
      { q: 'Can clients place orders through their portal?', a: 'Yes, 3PL clients can submit manual orders and view live inventory.' }
    ],
    related: [
      { name: 'Location Transfers', id: 'transfers' },
      { name: 'Integrations Hub', id: 'integrations-hub' }
    ]
  },
  {
    id: 'acrely-sandbox',
    title: 'Acrely Sandbox',
    isComingSoon: true,
    icon: ClipboardList,
    heroHeadline: 'Isolated Testing Environment',
    heroSubheadline: 'Test configuration and workflow changes in an isolated environment before applying them to live warehouse operations.',
    businessValue: 'Give teams a safer way to test operational changes without risking production downtime.',
    businessProblem: [
      'Applying untested changes to production can cause operational disruptions, stop order flow, and confuse workers.',
      'Training new employees on live systems risks accidental data corruption.'
    ],
    workflow: [
      'Clone LIVE SYSTEM data into SANDBOX',
      'Implement proposed configuration changes',
      'TEST workflows using mobile scanners pointed at Sandbox',
      'VALIDATE results',
      'APPROVE and PUBLISH changes to production'
    ],
    capabilities: [
      'Isolated testing environment',
      'Safe workflow and configuration testing',
      'Validation and approval flows',
      'Training environment capability'
    ],
    benefits: [
      'Safer configuration changes',
      'Reduced operational risk',
      'Zero-risk employee training',
      'Greater confidence before deployment'
    ],
    industries: ['Enterprise', 'All Industries'],
    useCases: [
      'Testing a new picking strategy before peak season.',
      'Training a batch of 20 temporary workers on scanners without touching real inventory.',
      'Verifying an ERP integration payload.'
    ],
    whyChoose: [
      'Provides a safe staging area that perfectly mirrors your unique production setup.'
    ],
    faq: [
      { q: 'Is the Sandbox constantly synced with live data?', a: 'You can trigger a data refresh from Production to Sandbox to ensure you are testing against recent data.' }
    ],
    related: [
      { name: 'Release Safety Center', id: 'release-safety-center' },
      { name: 'Workflow Builder', id: 'workflow-builder' }
    ]
  },
  {
    id: 'release-safety-center',
    title: 'Release Safety Center',
    isComingSoon: true,
    icon: Lock,
    heroHeadline: 'Structured Release Testing',
    heroSubheadline: 'Provide a structured process for testing and managing Acrely WMS updates before they reach production.',
    businessValue: 'Reduce operational risk associated with software updates.',
    businessProblem: [
      'Unexpected software changes or vendor updates can disrupt warehouse operations if not validated in advance.',
      'Enterprise IT requires strict change-management protocols.'
    ],
    workflow: [
      'Acrely publishes an upcoming release to staging',
      'Customer tests critical workflows in Sandbox',
      'Customer signs off on validation',
      'Release is deployed to production during scheduled window'
    ],
    capabilities: [
      'Release preview environments',
      'Staging validation checklists',
      'Compatibility checks',
      'Deployment history and tracking',
      'Rollback workflows where supported'
    ],
    benefits: [
      'Safer updates with zero surprises',
      'Better release visibility for IT teams',
      'Reduced deployment risk',
      'Compliance with change management policies'
    ],
    industries: ['Enterprise', 'Pharmaceuticals', 'Highly Regulated Industries'],
    useCases: [
      'Validating that a new WMS feature doesn\'t break an existing custom ERP integration.',
      'Coordinating an update rollout across 10 global facilities.'
    ],
    whyChoose: [
      'Structured release validation workflows put you in control of changes.'
    ],
    faq: [
      { q: 'Can we delay a release?', a: 'Enterprise customers can schedule update windows to align with their operational downtime.' }
    ],
    related: [
      { name: 'Acrely Sandbox', id: 'acrely-sandbox' },
      { name: 'Integrations Hub', id: 'integrations-hub' }
    ]
  },
  {
    id: 'barcodes',
    title: 'Barcode Scanning & Printing',
    isComingSoon: false,
    icon: QrCode,
    heroHeadline: 'Digitize Operations Instantly',
    heroSubheadline: 'Digitize operations with robust barcode and label generation.',
    businessValue: 'Eliminate manual data entry and reading errors.',
    businessProblem: [
      'Manual data entry on the warehouse floor leads to high error rates. Reading part numbers manually causes mis-picks, inaccurate receiving, and slow processing times.'
    ],
    workflow: [
      'Items arrive without labels',
      'Operator selects Purchase Order in Acrely',
      'System generates standardized 1D/2D barcodes',
      'Thermal printer outputs labels instantly',
      'Items are labeled and scanned into location'
    ],
    capabilities: [
      '1D and 2D (QR) Barcode Generation',
      'Custom Label Designer: Format labels for bins, pallets, and items',
      'GS1 Standard Support: Parse complex vendor barcodes automatically',
      'Direct Network Printing: Print instantly without PDF downloads'
    ],
    benefits: [
      'Near-zero data entry errors',
      'Accelerate receiving and picking speed',
      'Standardize supplier labeling compliance'
    ],
    industries: ['All Industries'],
    useCases: [
      'Labeling thousands of tiny electronic components.',
      'Generating massive pallet license plate (LPN) barcodes.',
      'Printing compliance labels for outbound retail shipments.'
    ],
    whyChoose: [
      'Native integration with Zebra and standard thermal printers.'
    ],
    faq: [
      { q: 'Can we design our own labels?', a: 'Yes, the system includes a drag-and-drop label designer.' },
      { q: 'Does it support GS1-128?', a: 'Yes, it can parse multiple data points (Lot, Expiry, SKU) from a single scan.' }
    ],
    related: [
      { name: 'Acrely Scan', id: 'acrely-scan' },
      { name: 'Receiving', id: 'receiving' }
    ]
  },
  {
    id: 'receiving',
    title: 'Inbound Receiving',
    isComingSoon: false,
    icon: Box,
    heroHeadline: 'Streamline Inbound Flow',
    heroSubheadline: 'Process supplier shipments rapidly and accurately against expected POs.',
    businessValue: 'Get stock off the dock and into available inventory faster.',
    businessProblem: [
      'Docks get congested because receiving takes too long. Blind receiving leads to supplier overages, shortages, and invoices that don\'t match physical reality.'
    ],
    workflow: [
      'Truck arrives and operator selects expected PO/ASN',
      'Operator scans items off the truck',
      'System verifies against expected quantities in real-time',
      'Discrepancies are flagged immediately',
      'LPNs (License Plates) generated for putaway'
    ],
    capabilities: [
      'ASN (Advanced Shipping Notice) and PO receiving',
      'Blind and Expected receiving modes',
      'Over/Under tolerance enforcement',
      'Cross-docking identification'
    ],
    benefits: [
      'Clear dock congestion rapidly',
      'Hold suppliers accountable for shortages',
      'Make inventory available for sale sooner',
      'Eliminate manual receiving paperwork'
    ],
    industries: ['Retail', 'Wholesale', 'Distribution'],
    useCases: [
      'Receiving ocean containers with thousands of mixed SKUs.',
      'Processing rapid parcel receipts for small components.',
      'Cross-docking urgent backordered items straight to shipping.'
    ],
    whyChoose: [
      'Highly optimized scanning flow designed for the loading dock.'
    ],
    faq: [
      { q: 'Can we block over-receiving?', a: 'Yes, strict tolerances can be set to prevent receiving more than ordered.' }
    ],
    related: [
      { name: 'Core Inventory Management', id: 'inventory-management' },
      { name: 'Damaged & Quarantined Inventory', id: 'damaged-inventory' }
    ]
  },
  {
    id: 'picking',
    title: 'Order Picking & Fulfillment',
    isComingSoon: false,
    icon: Truck,
    heroHeadline: 'High-Speed Order Fulfillment',
    heroSubheadline: 'Optimize walking paths and direct workers to the exact location with scan verification.',
    businessValue: 'Maximize picker throughput and eliminate shipping errors.',
    businessProblem: [
      'Pickers waste 60% of their time walking inefficient routes. Without scan verification, the wrong items are shipped, resulting in costly returns and angry customers.'
    ],
    workflow: [
      'System batches orders into optimal waves',
      'Picker guided by scanner along shortest path',
      'Picker scans bin, then scans item to verify',
      'Items placed into specific order totes',
      'Completed cart routed to packing station'
    ],
    capabilities: [
      'Wave, Batch, and Zone picking strategies',
      'Pick path optimization (shortest route routing)',
      'Scan-verification (Bin + Item)',
      'Pick-to-cart (Multi-order picking)'
    ],
    benefits: [
      'Increase picks-per-hour by up to 40%',
      'Achieve 99.9% order accuracy',
      'Reduce picker fatigue',
      'Accelerate training for new staff'
    ],
    industries: ['E-Commerce', '3PL', 'Omnichannel Retail'],
    useCases: [
      'Picking 50 e-commerce orders simultaneously on a single cart.',
      'Zone picking where workers stay in specific aisles.',
      'Bulk pallet picking for wholesale B2B orders.'
    ],
    whyChoose: [
      'Advanced algorithmic batching that scales to thousands of orders per hour.'
    ],
    faq: [
      { q: 'Does it support pick-to-light?', a: 'Yes, Acrely can integrate with modern pick-to-light hardware systems.' },
      { q: 'Can we force scanning for every single piece?', a: 'Yes, scan enforcement can be configured at the SKU level.' }
    ],
    related: [
      { name: 'Inventory Reservations', id: 'reservations' },
      { name: 'Barcode Scanning', id: 'barcodes' }
    ]
  }
  ,
  {
    id: '3pl',
    title: '3PL Warehouse Management',
    isComingSoon: false,
    icon: Building2,
    heroHeadline: 'Run every client, warehouse, and order from one system.',
    heroSubheadline: 'Manage multiple clients, segregated inventory, warehouse execution, client visibility, and operational billing from a unified platform.',
    businessValue: 'Support growing client and warehouse complexity.',
    businessProblem: [
      'Client inventory must remain strictly separated.',
      'Different clients have different workflows.',
      'Clients need visibility into their own inventory.',
      'Warehouse operators need a single operational system.',
      'SLA requirements differ by client.',
      'Storage and handling activity needs to be tracked.',
      'Managing multiple client operations in spreadsheets or disconnected systems creates errors.',
      'Billing-related operational data becomes difficult to reconcile.'
    ],
    workflow: [
      'Client ASN',
      'Receiving',
      'Inventory Segregation',
      'Putaway',
      'Storage',
      'Client Order',
      'Picking',
      'Packing',
      'Dispatch',
      'Operational Billing Data'
    ],
    capabilities: [
      'Multi-Client Inventory Segregation: Strict inventory segregation by owner',
      'Client-Level Visibility (Coming Soon): Dedicated portals for live visibility',
      'Role & Permission Controls: Restrict users to specific clients or warehouses',
      'Multi-Warehouse Operations: Unified control across locations',
      'Client-Specific Workflows: Configurable workflows per client',
      'Receiving & Putaway: Capture and segregate inbound stock',
      'Picking, Packing & Dispatch: Full operational execution',
      'Operational Reporting: Track storage and handling activity',
      'Inventory Traceability: Complete audit trails',
      'Inter-Warehouse Transfers: Move stock between facilities securely'
    ],
    benefits: [
      'Reduce client inventory confusion',
      'Improve client visibility',
      'Centralize warehouse execution',
      'Scale to additional clients',
      'Maintain stronger data separation',
      'Reduce operational overhead',
      'Improve SLA visibility',
      'Simplify multi-client warehouse management'
    ],
    industries: ['3PL Logistics', 'Warehousing'],
    useCases: [
      "A 3PL manages five brands. Brand A should see Brand A inventory, orders, and reports. Brand B should NOT see Brand A's information.",
      'A global 3PL administrator can see aggregated operational performance across the network.',
      'Generating operational billing data at the end of the month based on storage and handling activity.'
    ],
    whyChoose: [
      'Built from the ground up to support multi-tenant architectures, making scaling effortless.'
    ],
    faq: [
      { q: 'Can different clients have separate inventory visibility?', a: 'Yes, inventory is strictly segregated by owner.' },
      { q: 'Can users be restricted to specific clients or warehouses?', a: 'Yes, role and permission controls allow you to restrict user access.' },
      { q: 'Can one 3PL manage multiple warehouses?', a: 'Yes, Acrely natively supports multi-warehouse operations.' },
      { q: 'Can clients view their operational information?', a: 'Yes, client-level visibility features ensure they only see their own data.' },
      { q: 'Can workflows differ between clients?', a: 'Yes, workflows are configurable per client to meet diverse SLA requirements.' }
    ],
    related: [
      { name: 'Multi-Warehouse & Multi-Client', id: 'multi-warehouse-multi-client' },
      { name: 'Inventory Management', id: 'inventory-management' },
      { name: 'Receiving', id: 'receiving' },
      { name: 'Picking', id: 'picking' }
    ]
  }
];