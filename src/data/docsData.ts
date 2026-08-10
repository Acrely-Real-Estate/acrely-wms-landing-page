
export interface DocArticle {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  lastUpdated: string;
  readTime: string;
  badge?: string;
  toc?: { id: string; title: string }[];
  content: {
    overview: string;
    sections: {
      id: string;
      title: string;
      text?: string;
      callout?: {
        type: 'info' | 'warning' | 'tip';
        title: string;
        text: string;
      };
      codeBlock?: {
        language: string;
        code?: string;
        tabs?: { label: string; code: string }[];
      };
      table?: {
        headers: string[];
        rows: string[][];
      };
    }[];
  };
}

export interface DocCategory {
  id: string;
  title: string;
  iconName: string;
  articles: DocArticle[];
}

export const DOCS_DATA: DocCategory[] = [
  
  {
    id: 'getting-started',
    title: 'Getting Started',
    iconName: 'Book',
    articles: [
      {
        id: 'getting-started',
        categoryId: 'getting-started',
        title: 'Getting Started',
        description: 'Comprehensive guide to getting started in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of getting started.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Provides the initial login, dashboard overview, and basic navigation of the system.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Ensures new users can immediately understand where to find their tasks.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Administrators invite users via email. No physical configuration required for basic login.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Users log in via the web portal or mobile app using their credentials or SSO.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'All active users have access to Getting Started flows.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If you cannot log in, verify your email address or contact your warehouse administrator to check if your account is active.'
            }
          ]
        }
      }
    ]
  },

  {
    id: 'configuration',
    title: 'Warehouse Setup',
    iconName: 'Settings',
    articles: [
      {
        id: 'warehouse-setup',
        categoryId: 'configuration',
        title: 'Warehouse Setup',
        description: 'Comprehensive guide to warehouse setup in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of warehouse setup.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Defines the physical layout of your facility, including zones, aisles, racks, and bins.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Without accurate locations, the WMS cannot direct putaway or picking efficiently.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Go to Settings > Locations. Define your location naming convention (e.g., Zone-Aisle-Bin) and generate barcodes.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Managers use this module to adjust physical layouts. Floor operators do not edit layouts.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Warehouse Manager or Administrator role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If a location does not exist, verify that the aisle and zone are properly nested in the hierarchy.'
            }
          ]
        }
      },
{
        id: 'products',
        categoryId: 'configuration',
        title: 'Products & SKUs',
        description: 'Comprehensive guide to products & skus in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of products & skus.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Maintains the master record of all items stored in the warehouse.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Consistent product data prevents receiving errors and picking mistakes.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Import products via CSV or API. Define weight, dimensions, barcode variants, and unit of measure (UOM).'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Users search for products to view inventory levels or scan barcodes to pull up product details.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Product creation requires Manager role. Viewing is available to all.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If a barcode scan fails, check the Product record to ensure the barcode alias is correctly linked to the SKU.'
            }
          ]
        }
      },
{
        id: 'barcode-setup',
        categoryId: 'configuration',
        title: 'Barcode Setup',
        description: 'Comprehensive guide to barcode setup in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of barcode setup.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Generates physical labels for bins and products, and configures scanner hardware.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Scanning is the primary input method. Faulty barcodes halt operations.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Navigate to Hardware > Barcodes. Select the label format (ZPL/PDF) and printer IP.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Users apply printed labels to physical bins. Scanners automatically read standard 1D/2D formats.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires IT Admin or Warehouse Manager role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If a scanner beeps but does nothing, verify the scanner is configured to transmit carriage return (Enter) after scanning.'
            }
          ]
        }
      }
    ]
  },

  {
    id: 'operations',
    title: 'Daily Operations',
    iconName: 'Truck',
    articles: [
      {
        id: 'receiving',
        categoryId: 'operations',
        title: 'Receiving',
        description: 'Comprehensive guide to receiving in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of receiving.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Processes inbound shipments against Purchase Orders or ASNs.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Prevents incorrect inventory from entering the warehouse ecosystem.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Create a PO or ASN. Define expected quantities.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Operators scan the dock door, scan the inbound item, confirm quantity, and apply an internal LPN (License Plate Number) if required.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Receiving Clerk or Manager role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If receiving shows an overage, the system blocks it by default. A Manager must override or quarantine the excess stock.'
            }
          ]
        }
      },
{
        id: 'putaway',
        categoryId: 'operations',
        title: 'Putaway',
        description: 'Comprehensive guide to putaway in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of putaway.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Directs received goods to their optimal storage location.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Ensures high-velocity items are easily accessible and cold-chain rules are respected.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Configure putaway rules based on product categories (e.g., Hazmat, Cold Storage).'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Scan the item LPN, follow the system-directed route, scan the destination bin, and deposit the item.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Floor Operator or Manager role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If a bin is physically full but the system directs putaway there, the operator can select "Location Full" to trigger a system recount and receive a new destination.'
            }
          ]
        }
      },
{
        id: 'inventory',
        categoryId: 'operations',
        title: 'Inventory Management',
        description: 'Comprehensive guide to inventory management in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of inventory management.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Provides real-time visibility into stock levels, lots, and expiry dates.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Maintains the single source of truth for all physical goods.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'No explicit configuration. Driven by receipts and dispatches.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Users filter by SKU, location, or status (Available, Quarantined, Allocated).'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'View access is global. Adjustments require Manager role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If inventory is physically missing, quarantine the system balance and trigger an immediate cycle count.'
            }
          ]
        }
      },
{
        id: 'picking',
        categoryId: 'operations',
        title: 'Picking',
        description: 'Comprehensive guide to picking in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of picking.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Guides operators to retrieve products for outbound orders.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Directly impacts order fulfillment speed and accuracy.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Configure wave picking, batch picking, or discrete picking strategies based on order volume.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Operator accepts a pick task, walks to the directed location, scans the bin, scans the item, and confirms quantity.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Floor Operator role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If an item is missing from the bin during picking, the operator flags a "Short Pick", which automatically reroutes the task to an alternate bin or flags a stockout.'
            }
          ]
        }
      },
{
        id: 'packing',
        categoryId: 'operations',
        title: 'Packing',
        description: 'Comprehensive guide to packing in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of packing.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Verifies picked items and prepares them in shipping cartons.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'The final quality check before dispatch.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Set up carton sizes and default packing slip printers.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Packer scans the order ID, scans each item into the box, and prints the shipping label.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Packer or Manager role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If an extra item is scanned during packing, the system flashes red and prevents label generation until the item is removed.'
            }
          ]
        }
      },
{
        id: 'dispatch',
        categoryId: 'operations',
        title: 'Dispatch',
        description: 'Comprehensive guide to dispatch in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of dispatch.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Loads packed cartons onto outbound carrier vehicles.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Completes the warehouse lifecycle and triggers customer invoicing.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Configure carrier integrations and loading dock zones.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Scan the shipping label and the truck manifest to confirm loading.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Dispatcher role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If a carton is left behind, the manifest will show as incomplete. Re-scan the dock staging area.'
            }
          ]
        }
      },
{
        id: 'cycle-counting',
        categoryId: 'operations',
        title: 'Cycle Counting',
        description: 'Comprehensive guide to cycle counting in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of cycle counting.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Performs continuous, partial inventory audits without halting warehouse operations.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Replaces disruptive annual physical counts and maintains high inventory accuracy.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Define count frequencies (e.g., count high-value items monthly, low-value annually).'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Operators receive count tasks, scan the bin, and blindly enter the physical quantity.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Floor Operator role. Approvals require Manager role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If a count discrepancy occurs, the system will prompt a second blind count by a different operator before requiring Manager approval.'
            }
          ]
        }
      }
    ]
  },

  {
    id: 'administration',
    title: 'Administration',
    iconName: 'Users',
    articles: [
      {
        id: 'users',
        categoryId: 'administration',
        title: 'Users',
        description: 'Comprehensive guide to users in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of users.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Manages system accounts, contact details, and active sessions.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Ensures only authorized personnel can access the WMS.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Navigate to Users > Add User. Send email invitation.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Users accept the invite and set their password.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Administrator role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If a user is locked out, an Administrator can send a password reset link or unlock the account manually.'
            }
          ]
        }
      },
{
        id: 'permissions',
        categoryId: 'administration',
        title: 'Permissions',
        description: 'Comprehensive guide to permissions in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of permissions.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Restricts access via Role-Based Access Control (RBAC).'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Prevents unauthorized inventory adjustments or viewing of financial data.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Create Roles (e.g., Picker, Manager). Assign specific module read/write permissions to each role.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Users automatically inherit the access levels of their assigned role.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Administrator role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If an operator cannot see a task, verify their Role includes "View" permissions for that specific warehouse zone.'
            }
          ]
        }
      },
{
        id: 'reports',
        categoryId: 'administration',
        title: 'Reports',
        description: 'Comprehensive guide to reports in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of reports.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Generates historical data on performance and throughput.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Critical for measuring KPIs like pick accuracy and inventory turnover.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Schedule automated email reports or build custom dashboards.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Select date ranges and export to CSV or PDF.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Manager or Executive role.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If a report is empty, ensure the selected date range contains actual transactions and that the user has permission to view that warehouse.'
            }
          ]
        }
      }
    ]
  },

  {
    id: 'developer',
    title: 'Developer & API',
    iconName: 'Code',
    articles: [
      {
        id: 'api',
        categoryId: 'developer',
        title: 'API',
        description: 'Comprehensive guide to api in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of api.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Provides programmatic access to WMS data.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Enables custom integrations with legacy ERPs or custom storefronts.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'Generate a Bearer Token in Settings > API Keys.'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Developers send RESTful JSON requests to api.acrely.in.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Requires Administrator role to generate keys.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If API requests return 401 Unauthorized, verify the token has not expired and that the IP address is whitelisted if IP restrictions are enabled.'
            }
          ]
        }
      }
    ]
  },

  {
    id: 'support',
    title: 'Support',
    iconName: 'LifeBuoy',
    articles: [
      {
        id: 'faq',
        categoryId: 'support',
        title: 'FAQ',
        description: 'Comprehensive guide to faq in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of faq.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Frequently asked questions about Acrely WMS.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Provides immediate self-service answers.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'N/A'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Search for keywords related to the issue.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Available to all users.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If the FAQ does not answer the question, contact support@acrely.in.'
            }
          ]
        }
      },
{
        id: 'troubleshooting',
        categoryId: 'support',
        title: 'Troubleshooting',
        description: 'Comprehensive guide to troubleshooting in Acrely WMS.',
        lastUpdated: 'August 2026',
        readTime: '4 min read',
        toc: [
          { id: 'what', title: 'What it does' },
          { id: 'why', title: 'Why it matters' },
          { id: 'configure', title: 'How to configure it' },
          { id: 'operate', title: 'How users operate it' },
          { id: 'permissions', title: 'Required permissions' },
          { id: 'troubleshoot', title: 'Troubleshooting' }
        ],
        content: {
          overview: 'This guide covers the end-to-end process of troubleshooting.',
          sections: [
            {
              id: 'what',
              title: 'What it does',
              text: 'Steps to resolve common hardware or connectivity issues.'
            },
            {
              id: 'why',
              title: 'Why it matters',
              text: 'Minimizes downtime on the warehouse floor.'
            },
            {
              id: 'configure',
              title: 'How to configure it',
              text: 'N/A'
            },
            {
              id: 'operate',
              title: 'How users operate it',
              text: 'Follow step-by-step diagnostic workflows.'
            },
            {
              id: 'permissions',
              title: 'Required permissions',
              text: 'Available to all users.'
            },
            {
              id: 'troubleshoot',
              title: 'Troubleshooting',
              text: 'If connectivity drops, verify the warehouse Wi-Fi. The mobile app will cache scans locally and sync when reconnected.'
            }
          ]
        }
      }
    ]
  }
];
