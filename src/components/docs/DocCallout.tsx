import React from 'react';
import { Lightbulb, AlertTriangle, Info, CheckCircle } from 'lucide-react';

interface DocCalloutProps {
  type: 'tip' | 'warning' | 'info' | 'note' | 'best-practice';
  title?: string;
  children: React.ReactNode;
}

export const DocCallout: React.FC<DocCalloutProps> = ({ type, title, children }) => {
  const styles = {
    tip: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      icon: <Lightbulb className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />,
      text: 'text-amber-900',
      defaultTitle: 'Tip'
    },
    warning: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />,
      text: 'text-red-900',
      defaultTitle: 'Warning'
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />,
      text: 'text-blue-900',
      defaultTitle: 'Information'
    },
    note: {
      bg: 'bg-slate-50',
      border: 'border-slate-200',
      icon: <Info className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />,
      text: 'text-slate-900',
      defaultTitle: 'Note'
    },
    'best-practice': {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      icon: <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />,
      text: 'text-emerald-900',
      defaultTitle: 'Best Practice'
    }
  };

  const currentStyle = styles[type] || styles.note;

  return (
    <div className={`my-6 flex items-start gap-3 p-4 rounded-xl border ${currentStyle.bg} ${currentStyle.border}`}>
      {currentStyle.icon}
      <div>
        <h5 className={`font-bold ${currentStyle.text} mb-1`}>{title || currentStyle.defaultTitle}</h5>
        <div className={`text-sm ${currentStyle.text} opacity-90 leading-relaxed`}>
          {children}
        </div>
      </div>
    </div>
  );
};
