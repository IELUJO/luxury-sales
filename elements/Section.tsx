import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bg?: 'white' | 'gray' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-brand-gray',
    dark: 'bg-brand-blue text-white'
  };

  return (
    <section id={id} className={`py-20 md:py-28 px-4 md:px-8 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'center', light = false }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span className={`block text-xs font-bold tracking-[0.25em] uppercase mb-3 ${light ? 'text-brand-gold' : 'text-brand-blue/70'}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-serif text-3xl md:text-5xl leading-tight ${light ? 'text-white' : 'text-brand-blue'}`}>
      {title}
    </h2>
    <div className={`h-1 w-20 bg-brand-gold mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);
