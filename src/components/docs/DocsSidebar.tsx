import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Rocket, BookOpen, Code, Terminal, Plug, Shield, Server, History, Folder, Sparkles } from 'lucide-react';
import { DOCS_DATA } from '../../data/docsData';

interface DocsSidebarProps {
  activeArticleId: string;
  onSelectArticle: (id: string) => void;
  onOpenSearch: () => void;
}

const IconMap: Record<string, React.FC<any>> = {
  Rocket,
  BookOpen,
  Code,
  Terminal,
  Plug,
  Shield,
  Server,
  History,
  Folder,
  Sparkles
};

export const DocsSidebar: React.FC<DocsSidebarProps> = ({
  activeArticleId,
  onSelectArticle,
  onOpenSearch,
}) => {
  // Store expanded state per category
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    DOCS_DATA.forEach(cat => {
      // Auto-expand category that contains the active article
      const hasActive = cat.articles.some(a => a.id === activeArticleId);
      initialState[cat.id] = hasActive; // By default open if it has the active article. Or open all?
      // For enterprise docs, usually all or top level are open, or at least active one. Let's open all by default for discoverability.
      initialState[cat.id] = true; 
    });
    return initialState;
  });

  const toggleCategory = (catId: string) => {
    setExpandedCategories(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      {/* Mobile search bar trigger is handled in DocsLayout, but we can put one here for desktop */}
      <div className="p-4 border-b border-[#E5E7EB] lg:hidden shrink-0 bg-white">
        <button
          onClick={onOpenSearch}
          className="w-full px-3 py-2 bg-slate-50 hover:bg-slate-100 border border-[#E5E7EB] rounded-lg text-sm text-[#64748B] flex items-center gap-2 cursor-pointer shadow-xs transition-colors"
        >
          <Search className="w-4 h-4 text-[#1E40AF]" />
          <span>Search documentation...</span>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-200">
        {DOCS_DATA.map((category) => {
          const IconComponent = IconMap[category.iconName] || Folder;
          const isExpanded = expandedCategories[category.id];

          return (
            <div key={category.id} className="space-y-1">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between group cursor-pointer py-1.5"
              >
                <div className="flex items-center gap-2.5 text-sm font-bold text-[#0F172A] group-hover:text-[#1E40AF] transition-colors">
                  <IconComponent className="w-4 h-4 text-[#64748B] group-hover:text-[#1E40AF] transition-colors" />
                  {category.title}
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {isExpanded && (
                <ul className="pt-1 pb-2 space-y-0.5">
                  {category.articles.map((article) => {
                    const isActive = activeArticleId === article.id;
                    return (
                      <li key={article.id}>
                        <button
                          onClick={() => onSelectArticle(article.id)}
                          className={`
                            w-full text-left pl-7 pr-3 py-1.5 text-[13px] rounded-md transition-all duration-200 relative
                            ${isActive
                              ? 'bg-blue-50/80 text-[#1E40AF] font-semibold'
                              : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 cursor-pointer'
                            }
                          `}
                        >
                          {isActive && (
                            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
                          )}
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate leading-relaxed">{article.title}</span>
                            {article.badge && (
                              <span className="shrink-0 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-blue-100 text-[#1E40AF] rounded-sm">
                                {article.badge}
                              </span>
                            )}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};
