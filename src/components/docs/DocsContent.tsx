
import React, { useMemo, useEffect, useState } from 'react';
import { ChevronRight, Clock, Calendar } from 'lucide-react';
import { DocArticle, DOCS_DATA } from '../../data/docsData';
import { CodeBlock } from './CodeBlock';
import { DocCallout } from './DocCallout';
import { DocsPagination } from './DocsPagination';

interface DocsContentProps {
  article: DocArticle;
  onSelectArticle: (id: string) => void;
}

export const DocsContent: React.FC<DocsContentProps> = ({ article, onSelectArticle }) => {
  // Find category title for breadcrumbs
  const categoryTitle = useMemo(() => {
    return DOCS_DATA.find(cat => cat.id === article.categoryId)?.title || 'Category';
  }, [article.categoryId]);

  // Calculate prev/next articles
  const { prev, next } = useMemo(() => {
    const flatArticles = DOCS_DATA.flatMap(cat => cat.articles);
    const currentIndex = flatArticles.findIndex(a => a.id === article.id);
    return {
      prev: currentIndex > 0 ? flatArticles[currentIndex - 1] : undefined,
      next: currentIndex >= 0 && currentIndex < flatArticles.length - 1 ? flatArticles[currentIndex + 1] : undefined
    };
  }, [article.id]);

  // Handle active heading highlight for TOC
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!article.toc || article.toc.length === 0) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -80% 0%' }
    );

    article.toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article.toc]);

  return (
    <div className="flex items-start gap-12 pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Main Content Area */}
      <div className="flex-1 min-w-0 max-w-3xl">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm font-medium text-[#64748B] mb-8">
          <span className="text-[#64748B]">Documentation</span>
          <ChevronRight className="w-4 h-4 text-[#CBD5E1]" />
          <span className="text-[#64748B]">{categoryTitle}</span>
          <ChevronRight className="w-4 h-4 text-[#CBD5E1]" />
          <span className="text-[#0F172A] font-semibold">{article.title}</span>
        </nav>

        {/* Title & Meta */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              {article.title}
            </h1>
            {article.badge && (
              <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 rounded-md">
                {article.badge}
              </span>
            )}
          </div>
          
          <p className="text-lg text-[#475569] leading-relaxed mb-6">
            {article.description}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-[#64748B] font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{article.readTime} read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Updated {article.lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="prose prose-slate max-w-none text-[15px]">
          {/* Overview */}
          <p className="text-[#334155] leading-relaxed text-lg mb-10">
            {article.content.overview}
          </p>

          {/* Sections */}
          {article.content.sections.map((section) => (
            <div key={section.id} className="mb-12">
              <h2 
                id={section.id} 
                className="text-2xl font-bold text-[#0F172A] mt-12 mb-6 pb-2 border-b border-[#E5E7EB] scroll-mt-24 group flex items-center gap-2"
              >
                {section.title}
                <a href={`#${section.id}`} className="opacity-0 group-hover:opacity-100 text-[#1E40AF] transition-opacity">
                  #
                </a>
              </h2>
              
              {section.text && (
                <div 
                  className="text-[#334155] leading-relaxed mb-6 space-y-4" 
                  dangerouslySetInnerHTML={{ __html: section.text }} 
                />
              )}

              {section.callout && (
                <DocCallout type={section.callout.type} title={section.callout.title}>
                  <div dangerouslySetInnerHTML={{ __html: section.callout.text }} />
                </DocCallout>
              )}

              {section.codeBlock && (
                <CodeBlock 
                  language={section.codeBlock.language}
                  code={section.codeBlock.code || section.codeBlock.tabs?.[0].code || ''}
                  title={section.codeBlock.tabs?.[0].label}
                />
              )}

              {section.table && (
                <div className="my-8 overflow-x-auto rounded-xl border border-[#E5E7EB] shadow-sm">
                  <table className="w-full text-left text-sm text-[#334155]">
                    <thead className="bg-slate-50 border-b border-[#E5E7EB] text-xs uppercase font-bold text-[#0F172A]">
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th key={i} className="px-6 py-4">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB] bg-white">
                      {section.table.rows.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          {row.map((cell, j) => (
                            <td key={j} className="px-6 py-4" dangerouslySetInnerHTML={{ __html: cell }} />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Pagination Cards */}
        <DocsPagination prev={prev} next={next} onSelectArticle={onSelectArticle} />

      </div>

      {/* Right Sidebar - Table of Contents */}
      {article.toc && article.toc.length > 0 && (
        <div className="hidden xl:block w-64 shrink-0">
          <div className="sticky top-24">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-4">
              On This Page
            </h4>
            <nav className="flex flex-col gap-1.5 relative">
              <div className="absolute left-[3px] top-0 bottom-0 w-px bg-slate-200" />
              {article.toc.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`
                      relative pl-4 py-1 text-sm transition-all duration-200
                      ${isActive 
                        ? 'text-[#1E40AF] font-semibold' 
                        : 'text-[#64748B] hover:text-[#0F172A]'
                      }
                    `}
                  >
                    {isActive && (
                      <div className="absolute left-[2px] top-1/2 -translate-y-1/2 w-[3px] h-4 bg-[#1E40AF] rounded-full" />
                    )}
                    {item.title}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      )}

    </div>
  );
};
