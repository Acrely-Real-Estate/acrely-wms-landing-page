import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}

/**
 * Consistent section header used across all homepage sections.
 * Maintains typography hierarchy and brand colors.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  heading,
  description,
  align = 'center',
  dark = false,
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-16 ${alignClass}`}>
      <span className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${dark ? 'text-blue-400' : 'text-[#1E40AF]'}`}>
        {eyebrow}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${dark ? 'text-white' : 'text-[#0F172A]'}`}>
        {heading}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-[#64748B]'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
