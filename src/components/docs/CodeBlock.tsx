import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'text', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden bg-[#0F172A] border border-slate-700 shadow-sm relative group">
      {(title || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700 bg-slate-800/50">
          <span className="text-xs font-mono text-slate-400">{title || language}</span>
          <button
            onClick={handleCopy}
            className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-slate-700 cursor-pointer"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      )}
      <div className="relative">
        {!title && !language && (
          <button
            onClick={handleCopy}
            className="absolute right-2 top-2 p-1.5 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-slate-700 opacity-0 group-hover:opacity-100 cursor-pointer"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        )}
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm font-mono text-slate-300">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
