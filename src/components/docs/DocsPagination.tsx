import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { DocArticle } from '../../data/docsData';

interface DocsPaginationProps {
  prev?: DocArticle;
  next?: DocArticle;
  onSelectArticle: (id: string) => void;
}

export const DocsPagination: React.FC<DocsPaginationProps> = ({ prev, next, onSelectArticle }) => {
  return (
    <div className="mt-16 pt-8 border-t border-[#E5E7EB] grid sm:grid-cols-2 gap-4">
      {prev ? (
        <button 
          onClick={() => onSelectArticle(prev.id)}
          className="group flex flex-col items-start p-4 rounded-xl border border-[#E5E7EB] hover:border-[#1E40AF] hover:shadow-md transition-all bg-white cursor-pointer text-left"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748B] group-hover:text-[#1E40AF] transition-colors mb-2">
            <ArrowLeft className="w-4 h-4" />
            Previous
          </div>
          <div className="text-lg font-bold text-[#0F172A] mb-1">{prev.title}</div>
          {prev.description && (
            <div className="text-sm text-[#64748B] line-clamp-1">{prev.description}</div>
          )}
        </button>
      ) : <div />}

      {next ? (
        <button 
          onClick={() => onSelectArticle(next.id)}
          className="group flex flex-col items-end text-right p-4 rounded-xl border border-[#E5E7EB] hover:border-[#1E40AF] hover:shadow-md transition-all bg-white cursor-pointer"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748B] group-hover:text-[#1E40AF] transition-colors mb-2">
            Next
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="text-lg font-bold text-[#0F172A] mb-1">{next.title}</div>
          {next.description && (
            <div className="text-sm text-[#64748B] line-clamp-1">{next.description}</div>
          )}
        </button>
      ) : <div />}
    </div>
  );
};
