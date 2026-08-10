import React, { useState, useEffect } from 'react';
import { Layers, BookOpen, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Product Tour', path: '/product-tour' },
    { name: 'Features', path: '/features' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Security', path: '/security' },
{ name: 'Implementation', path: '/implementation' },
    { name: 'Integrations', path: '/integrations' },
    { name: 'Download', path: '/download' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    // Close menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
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
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative z-50">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group cursor-pointer text-left z-50 relative"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 rounded-md bg-[#1E40AF] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-[#2563EB] transition-colors">
              <Layers className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#0F172A] tracking-tight text-lg">Acrely</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#64748B]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors cursor-pointer ${
                  location.pathname === link.path ? 'text-[#1E40AF] font-semibold' : 'hover:text-[#0F172A]'
                }`}
              >
                {link.name === 'Documentation' ? (
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {link.name}
                  </span>
                ) : (
                  link.name
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3 z-50 relative">
            <Link
              to="/book-demo"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1E40AF] hover:bg-[#2563EB] px-3.5 py-1.5 rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Book Demo</span>
            </Link>
            
            <button 
              type="button"
              className="lg:hidden p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center min-h-[44px] min-w-[44px] cursor-pointer relative z-50"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen(prev => !prev);
              }}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0F172A]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0F172A]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] lg:hidden" 
          aria-hidden="true" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-16 left-0 right-0 bottom-0 bg-white lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out border-t border-[#E5E7EB] z-[95] ${
          isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-6 min-h-full">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                  location.pathname === link.path 
                    ? 'text-[#1E40AF] bg-blue-50' 
                    : 'text-[#0F172A] hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-3">
                  {link.name === 'Documentation' && <BookOpen className="w-5 h-5 text-[#1E40AF]" />}
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-6 border-t border-slate-100 pb-8">
            <Link
              to="/book-demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#1E40AF] hover:bg-[#2563EB] px-4 py-4 rounded-xl transition-colors shadow-sm cursor-pointer min-h-[44px]"
            >
              <span>Book Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
