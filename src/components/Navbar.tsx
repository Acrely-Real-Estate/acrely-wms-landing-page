import React, { useEffect, useRef, useState } from 'react';
import {
 BookOpenText,
 Boxes,
 BriefcaseBusiness,
 Building2,
 ChevronDown,
 Download,
 Layers,
 Menu,
 PackageCheck,
 PhoneCall,
 ShieldCheck,
 Workflow,
 X,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type DropdownKey = 'product' | 'solutions' | 'resources' | 'company';

type NavItem = {
 label: string;
 path: string;
 description?: string;
 icon?: React.ComponentType<{ className?: string }>;
};

type NavGroup = {
 key: DropdownKey;
 label: string;
 items: NavItem[];
};

export const Navbar: React.FC = () => {
 const location = useLocation();
 const desktopNavRef = useRef<HTMLDivElement | null>(null);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
 const [openMobileSections, setOpenMobileSections] = useState<Record<DropdownKey, boolean>>({
   product: true,
   solutions: true,
   resources: true,
   company: true,
 });

 const navGroups: NavGroup[] = [
   {
     key: 'product',
     label: 'Product',
     items: [
       { label: 'Explore the Platform (Beta)', path: 'https://demo.acrelywms.com', description: 'See how Acrely WMS works.', icon: BookOpenText },
       { label: 'Features', path: '/features', description: 'Explore warehouse management capabilities.', icon: Layers },
       { label: 'Pricing', path: '/pricing', description: 'View Acrely WMS plans.', icon: PackageCheck },
       { label: 'Integrations', path: '/integrations', description: 'Connect Acrely with your existing systems.', icon: Workflow },
       { label: 'Security', path: '/security', description: 'Learn how Acrely approaches platform and data security.', icon: ShieldCheck },
     ],
   },
   {
     key: 'solutions',
     label: 'Solutions',
     items: [
       { label: 'Inventory Management', path: '/features/inventory-management', description: 'Maintain real-time stock visibility across your operations.', icon: Boxes },
       { label: 'Warehouse Operations', path: '/features/warehouse-command-center', description: 'Give managers one view of day-to-day execution.', icon: Workflow },
       { label: '3PL', path: '/features/multi-warehouse-multi-client', description: 'Support growing client and warehouse complexity.', icon: Building2 },
       { label: 'Multi-Warehouse', path: '/features/multi-warehouse-multi-client', description: 'Scale operations across locations with unified control.', icon: Layers },
     ],
   },
   {
     key: 'resources',
     label: 'Resources',
     items: [
       { label: 'Documentation', path: '/documentation', description: 'Explore setup guides, workflows, and platform references.', icon: BookOpenText },
       { label: 'Implementation', path: '/implementation', description: 'Plan a smooth rollout and onboarding timeline.', icon: PackageCheck },
       { label: 'Download', path: '/download', description: 'Access materials and release details.', icon: Download },
     ],
   },
   {
     key: 'company',
     label: 'Company',
     items: [
       { label: 'About Us', path: '/about', description: 'Learn more about Acrely and our mission.', icon: Building2 },
       { label: 'Careers', path: '/careers', description: 'Explore opportunities to join the team.', icon: BriefcaseBusiness },
       { label: 'Contact Sales', path: '/contact', description: 'Talk with our team about your warehouse needs.', icon: PhoneCall },
     ],
   },
 ];

 const isPathActive = (path: string) => {
   if (path === '/') {
     return location.pathname === '/';
   }

   return location.pathname === path || location.pathname.startsWith(`${path}/`);
 };

 const isGroupActive = (items: NavItem[]) => items.some((item) => isPathActive(item.path));

 useEffect(() => {
   setIsMobileMenuOpen(false);
 }, [location.pathname]);

 useEffect(() => {
   if (isMobileMenuOpen) {
     document.body.style.overflow = 'hidden';
   } else {
     document.body.style.overflow = '';
   }

   return () => {
     document.body.style.overflow = '';
   };
 }, [isMobileMenuOpen]);

 useEffect(() => {
   const handleEscKey = (event: KeyboardEvent) => {
     if (event.key === 'Escape') {
       setIsMobileMenuOpen(false);
       setOpenDropdown(null);
     }
   };

   if (isMobileMenuOpen || openDropdown) {
     document.addEventListener('keydown', handleEscKey);
   }

   return () => {
     document.removeEventListener('keydown', handleEscKey);
   };
 }, [isMobileMenuOpen, openDropdown]);

 useEffect(() => {
   if (!openDropdown) {
     return;
   }

   const handleClickOutside = (event: MouseEvent) => {
     const target = event.target as Node;
     if (desktopNavRef.current && !desktopNavRef.current.contains(target)) {
       setOpenDropdown(null);
     }
   };

   document.addEventListener('mousedown', handleClickOutside);
   return () => document.removeEventListener('mousedown', handleClickOutside);
 }, [openDropdown]);

 return (
   <>
     <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative z-50 gap-4">
         <Link
           to="/"
           className="flex items-center gap-2.5 group cursor-pointer text-left z-50 relative shrink-0"
           onClick={() => setIsMobileMenuOpen(false)}
         >
           <div className="w-8 h-8 rounded-md bg-[#1E40AF] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-[#2563EB] transition-colors">
             <Layers className="w-4 h-4" />
           </div>
           <span className="font-semibold text-[#0F172A] tracking-tight text-lg">Acrely</span>
         </Link>

         <div className="hidden lg:flex flex-1 justify-center min-w-0">
           <nav ref={desktopNavRef} className="relative flex items-center justify-center gap-1 text-sm font-medium text-[#64748B]">
             {navGroups.map((group) => {
               const isOpen = openDropdown === group.key;
               const groupIsActive = isGroupActive(group.items);

               return (
                 <div
                   key={group.key}
                   className="relative"
                   onMouseEnter={() => setOpenDropdown(group.key)}
                   onMouseLeave={() => setOpenDropdown((current) => (current === group.key ? null : current))}
                 >
                   <button
                     type="button"
                     className={`group inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30 focus-visible:ring-offset-2 ${
                       isOpen || groupIsActive ? 'text-[#0F172A]' : 'text-[#64748B] hover:text-[#0F172A]'
                     }`}
                     onClick={() => setOpenDropdown(isOpen ? null : group.key)}
                     aria-expanded={isOpen}
                     aria-haspopup="menu"
                   >
                     <span className={isOpen || groupIsActive ? 'font-semibold' : 'font-medium'}>{group.label}</span>
                     <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                   </button>

                   {isOpen && (
                     <div className="absolute left-1/2 top-full z-50 pt-3 -translate-x-1/2">
                       <div className="w-[26rem] rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
                         <div className="space-y-1">
                           {group.items.map((item) => {
                             const Icon = item.icon;
                             const isActive = isPathActive(item.path);
                             const isExternal = item.path.startsWith('http');

                             if (isExternal) {
                               return (
                                 <a
                                   key={item.label}
                                   href={item.path}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group flex items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-slate-50 text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30 focus-visible:ring-offset-2"
                                   onClick={() => setOpenDropdown(null)}
                                 >
                                   <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#1E40AF] group-hover:bg-white transition-colors">
                                     {Icon ? <Icon className="h-4 w-4" /> : null}
                                   </div>
                                   <div className="min-w-0 flex-1">
                                     <div className="text-sm font-semibold text-[#0F172A]">
                                       {item.label}
                                     </div>
                                     {item.description ? (
                                       <div className="mt-0.5 text-xs leading-5 text-[#64748B]">{item.description}</div>
                                     ) : null}
                                   </div>
                                 </a>
                               );
                             }

                             return (
                               <Link
                                 key={item.label}
                                 to={item.path}
                                 className={`group flex items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30 focus-visible:ring-offset-2 ${
                                   isActive ? 'bg-blue-50 text-[#0F172A]' : 'hover:bg-slate-50 text-[#0F172A]'
                                 }`}
                                 onClick={() => setOpenDropdown(null)}
                               >
                                 <div
                                   className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                                     isActive ? 'border-blue-200 bg-[#1E40AF] text-white' : 'border-slate-200 bg-slate-50 text-[#1E40AF] group-hover:bg-white'
                                   }`}
                                 >
                                   {Icon ? <Icon className="h-4 w-4" /> : null}
                                 </div>
                                 <div className="min-w-0 flex-1">
                                   <div className={`text-sm font-semibold ${isActive ? 'text-[#1E40AF]' : 'text-[#0F172A]'}`}>
                                     {item.label}
                                   </div>
                                   {item.description ? (
                                     <div className="mt-0.5 text-xs leading-5 text-[#64748B]">{item.description}</div>
                                   ) : null}
                                 </div>
                               </Link>
                             );
                           })}
                         </div>
                       </div>
                     </div>
                   )}
                 </div>
               );
             })}

             <Link
               to="/pricing"
               className={`inline-flex items-center rounded-lg px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30 focus-visible:ring-offset-2 ${
                 isPathActive('/pricing') ? 'text-[#0F172A] font-semibold' : 'text-[#64748B] hover:text-[#0F172A]'
               }`}
             >
               Pricing
             </Link>
           </nav>
         </div>

         <div className="flex items-center gap-3 shrink-0 z-50 relative">
           <a
             href="/book-demo"
             target="_blank"
             rel="noopener noreferrer"
             className="hidden sm:inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-[#1E40AF] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30 focus-visible:ring-offset-2"
           >
             Book a Demo
           </a>

           <button
             type="button"
             className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30 focus-visible:ring-offset-2"
             onClick={(event) => {
               event.preventDefault();
               event.stopPropagation();
               setIsMobileMenuOpen((current) => !current);
             }}
             aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
             aria-expanded={isMobileMenuOpen}
           >
             {isMobileMenuOpen ? <X className="h-6 w-6 text-[#0F172A]" /> : <Menu className="h-6 w-6 text-[#0F172A]" />}
           </button>
         </div>
       </div>
     </header>

     {isMobileMenuOpen && (
       <div
         className="fixed inset-0 z-[90] bg-slate-900/40 backdrop-blur-sm lg:hidden"
         aria-hidden="true"
         onClick={() => setIsMobileMenuOpen(false)}
       />
     )}

     <div
       className={`fixed left-0 right-0 top-16 bottom-0 z-[95] overflow-y-auto border-t border-[#E5E7EB] bg-white transition-transform duration-300 ease-in-out lg:hidden ${
         isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
       }`}
     >
       <div className="flex min-h-full flex-col gap-4 px-4 py-5">
         {navGroups.map((group) => (
           <div key={group.key} className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-slate-50/70">
             <button
               type="button"
               className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-base font-semibold text-[#0F172A]"
               onClick={() =>
                 setOpenMobileSections((current) => ({
                   ...current,
                   [group.key]: !current[group.key],
                 }))
               }
               aria-expanded={openMobileSections[group.key]}
             >
               <span>{group.label}</span>
               <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSections[group.key] ? 'rotate-180' : ''}`} />
             </button>

             {openMobileSections[group.key] && (
               <div className="border-t border-[#E5E7EB] bg-white">
                 {group.items.map((item) => {
                   const isExternal = item.path.startsWith('http');
                   
                   if (isExternal) {
                     return (
                       <a
                         key={item.label}
                         href={item.path}
                         target="_blank"
                         rel="noopener noreferrer"
                         onClick={() => setIsMobileMenuOpen(false)}
                         className="flex items-start gap-3 px-4 py-3 text-sm text-[#0F172A] transition-colors hover:bg-slate-50"
                       >
                         <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[#1E40AF]">
                           {item.icon ? <item.icon className="h-4 w-4" /> : null}
                         </div>
                         <div className="flex-1">
                           <div className="font-semibold">{item.label}</div>
                           {item.description ? <div className="mt-0.5 text-xs leading-5 text-[#64748B]">{item.description}</div> : null}
                         </div>
                       </a>
                     );
                   }

                   return (
                     <Link
                       key={item.label}
                       to={item.path}
                       onClick={() => setIsMobileMenuOpen(false)}
                       className={`flex items-start gap-3 px-4 py-3 text-sm text-[#0F172A] transition-colors hover:bg-slate-50 ${
                         isPathActive(item.path) ? 'bg-blue-50 text-[#1E40AF]' : ''
                       }`}
                     >
                       <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[#1E40AF]">
                         {item.icon ? <item.icon className="h-4 w-4" /> : null}
                       </div>
                       <div className="flex-1">
                         <div className="font-semibold">{item.label}</div>
                         {item.description ? <div className="mt-0.5 text-xs leading-5 text-[#64748B]">{item.description}</div> : null}
                       </div>
                     </Link>
                   );
                 })}
               </div>
             )}
           </div>
         ))}

         <Link
           to="/pricing"
           onClick={() => setIsMobileMenuOpen(false)}
           className={`rounded-2xl border px-4 py-3.5 text-base font-semibold transition-colors ${
             isPathActive('/pricing') ? 'border-blue-200 bg-blue-50 text-[#1E40AF]' : 'border-[#E5E7EB] bg-slate-50 text-[#0F172A]'
           }`}
         >
           Pricing
         </Link>

         <div className="pt-2 pb-6">
           <a
             href="/book-demo"
             target="_blank"
             rel="noopener noreferrer"
             onClick={() => setIsMobileMenuOpen(false)}
             className="inline-flex w-full items-center justify-center rounded-xl bg-[#1E40AF] px-4 py-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#2563EB]"
           >
             Book a Demo
           </a>
         </div>
       </div>
     </div>
   </>
 );
};
