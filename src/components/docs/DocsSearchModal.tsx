import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';
import { DOCS_DATA, DocArticle } from '../../data/docsData';

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (articleId: string) => void;
}

export const DocsSearchModal: React.FC<DocsSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Flatten and search through all articles
  const searchResults: { article: DocArticle; categoryTitle: string; matchedSnippet: string }[] = [];

  if (query.trim().length > 0) {
    const q = query.toLowerCase().trim();

    DOCS_DATA.forEach((cat) => {
      cat.articles.forEach((art) => {
        const titleMatch = art.title.toLowerCase().includes(q);
        const descMatch = art.description.toLowerCase().includes(q);
        let sectionMatch = '';

        art.content.sections.forEach((sec) => {
          const textMatches = sec.text && sec.text.toLowerCase().includes(q);
          if (sec.title.toLowerCase().includes(q) || textMatches) {
            sectionMatch = sec.title + (sec.text ? ': ' + sec.text.substring(0, 80) + '...' : '');
          }
        });

        if (titleMatch || descMatch || sectionMatch) {
          searchResults.push({
            article: art,
            categoryTitle: cat.title,
            matchedSnippet: sectionMatch || art.description,
          });
        }
      });
    });
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4">
      <div
        className="bg-white rounded-xl border border-[#E5E7EB] max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E5E7EB] flex items-center gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-[#1E40AF] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation, APIs, SDKs, guides..."
            className="w-full bg-transparent text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-hidden font-medium"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-[#64748B] hover:text-[#0F172A] p-1 rounded-md transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-semibold text-[#64748B] bg-white border border-[#E5E7EB] rounded shadow-2xs">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="p-3 overflow-y-auto flex-1 divide-y divide-slate-100">
          {query.trim().length === 0 ? (
            <div className="py-8 text-center text-xs text-[#64748B] space-y-2">
              <p className="font-semibold text-[#0F172A]">Search Acrely WMS Documentation</p>
              <p>Type keywords like <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[#1E40AF]">inventory</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[#1E40AF]">REST API</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[#1E40AF]">webhooks</code>, or <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[#1E40AF]">bin mapping</code>.</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#64748B] space-y-1">
              <p className="font-semibold text-[#0F172A] text-sm">No documentation matching "{query}"</p>
              <p>Try searching for broader terms or browse categories in the sidebar.</p>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#64748B] flex items-center justify-between">
                <span>Matching Articles</span>
                <span>{searchResults.length} result{searchResults.length > 1 ? 's' : ''}</span>
              </div>
              {searchResults.map(({ article, categoryTitle, matchedSnippet }) => (
                <button
                  key={article.id}
                  onClick={() => {
                    onSelectArticle(article.id);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg hover:bg-blue-50/60 transition-colors flex items-start justify-between group cursor-pointer border border-transparent hover:border-blue-100"
                >
                  <div className="space-y-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#1E40AF] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {categoryTitle}
                      </span>
                      {article.badge && (
                        <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                          {article.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-[#1E40AF] transition-colors flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#1E40AF] shrink-0" />
                      <span>{article.title}</span>
                    </h4>
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                      {matchedSnippet}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1E40AF] group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-[#E5E7EB] text-[11px] text-[#64748B] flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <CornerDownLeft className="w-3 h-3 text-slate-400" /> to select
            </span>
            <span>•</span>
            <span>Acrely WMS Enterprise Docs</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#0F172A] hover:underline font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
