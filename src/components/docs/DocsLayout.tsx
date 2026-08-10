import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Search, CheckCircle, ArrowLeft, Layers, HelpCircle } from 'lucide-react';
import { DocsSidebar } from './DocsSidebar';
import { DocsContent } from './DocsContent';
import { DocsSearchModal } from './DocsSearchModal';
import { DOCS_DATA, DocArticle } from '../../data/docsData';

export const DocsLayout: React.FC = () => {
  const navigate = useNavigate();
  const [activeArticleId, setActiveArticleId] = useState<string>('system-overview');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Keyboard shortcut listener for ⌘K or /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Find current active article object
  let currentArticle: DocArticle | undefined;
  for (const cat of DOCS_DATA) {
    const found = cat.articles.find((a) => a.id === activeArticleId);
    if (found) {
      currentArticle = found;
      break;
    }
  }

  // Fallback if not found
  if (!currentArticle) {
    currentArticle = DOCS_DATA[0].articles[0];
  }

  const handleSelectArticle = (id: string) => {
    setActiveArticleId(id);
    setIsMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col font-sans antialiased scroll-smooth">
      {/* Top Docs Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB] h-16">
        {/* Progress bar */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-[#1E40AF] transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          
          {/* Brand + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="lg:hidden p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Documentation Navigation"
            >
              {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2.5 group cursor-pointer text-left"
            >
              <div className="w-8 h-8 rounded-md bg-[#1E40AF] text-white flex items-center justify-center font-bold text-sm shadow-2xs group-hover:bg-[#2563EB] transition-colors">
                <Layers className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#0F172A] tracking-tight text-lg">Acrely</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1E40AF] border border-blue-200/80">
                  Docs
                </span>
              </div>
            </button>
          </div>

          {/* Quick Search Trigger (Center) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#64748B] flex items-center justify-between transition-colors cursor-pointer group shadow-xs"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#1E40AF]" />
                <span>Search documentation...</span>
              </div>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-200 rounded shadow-2xs">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Header Action Links */}
          <div className="flex items-center gap-3 text-xs font-medium text-[#64748B]">
            {/* Status Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>API: Operational</span>
            </div>
            
            {/* Back to previous page button */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E40AF] hover:text-[#2563EB] bg-blue-50 hover:bg-blue-100/80 border border-blue-200/80 px-3 py-1.5 rounded-md transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Documentation Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex items-start relative">
        
        {/* Desktop Left Sidebar (Fixed / Sticky) */}
        <div className="hidden lg:block w-72 shrink-0 h-[calc(100vh-4rem)] sticky top-16 z-30">
          <DocsSidebar
            activeArticleId={activeArticleId}
            onSelectArticle={handleSelectArticle}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        </div>

        {/* Mobile Slide-Over Sidebar Drawer */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-2xs transition-opacity"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
            
            {/* Panel */}
            <div className="relative w-80 max-w-full bg-white h-full shadow-2xl flex flex-col z-10 border-r border-[#E5E7EB]">
              <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
                <span className="font-bold text-sm text-[#0F172A]">Documentation Menu</span>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1 text-slate-500 hover:text-[#0F172A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <DocsSidebar
                  activeArticleId={activeArticleId}
                  onSelectArticle={handleSelectArticle}
                  onOpenSearch={() => {
                    setIsMobileSidebarOpen(false);
                    setIsSearchOpen(true);
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Center Main Article Content */}
        <main className="flex-1 min-w-0 bg-white">
          <DocsContent article={currentArticle} onSelectArticle={handleSelectArticle} />
        </main>
      </div>

      {/* Global Search Modal */}
      <DocsSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={handleSelectArticle}
      />
    </div>
  );
};
