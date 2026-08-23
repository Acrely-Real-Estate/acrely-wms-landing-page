const fs = require('fs');
let code = fs.readFileSync('src/data/featureRegistry.ts', 'utf8');

if (!code.includes('Building2')) {
  code = code.replace(/Box, Truck, RotateCcw/, 'Box, Truck, RotateCcw, Building2');
}

const newFeature = `  ,
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
];`;

code = code.replace(/\];\s*$/, newFeature);
fs.writeFileSync('src/data/featureRegistry.ts', code);
