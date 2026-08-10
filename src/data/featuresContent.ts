import { Package, Barcode, ClipboardList, Database, Clock, ArrowRightLeft, FileSpreadsheet, ShieldAlert, ArchiveX, Search, CheckSquare, Layers, Lock, CalendarClock, Sparkles } from 'lucide-react';

export const featuresContent = [
  {
    id: 'inventory-management',
    title: 'Core Inventory Management',
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
  }
];
