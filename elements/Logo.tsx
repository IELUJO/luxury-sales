import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-blue';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <img 
        src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-completo-IELujo.png" 
        alt="IELujo Logo" 
        className={`h-10 md:h-12 w-auto object-contain ${variant === 'light' ? 'brightness-0 invert' : ''}`}
      />
      
      {/* Text */}
      <div className={`flex flex-col items-start`}>
          <span className="font-serif text-2xl tracking-widest font-bold text-brand-gold leading-none">IELujo</span>
          <div className={`flex flex-col items-start text-[0.5rem] md:text-[0.6rem] uppercase tracking-[0.2em] ${textColor} leading-tight mt-1`}>
              <span>Instituto Europeo</span>
              <span>del Lujo</span>
          </div>
      </div>
    </div>
  );
};

export const AnahuacLogo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
   return (
    <div className={`flex items-center ${className}`}>
        <img 
            src="https://www.ielujo.com/wp-content/uploads/2025/12/Logo-Qnahuac-Mexico-sin-fondo-c.png" 
            alt="Anahuac Logo" 
            className={`h-9 md:h-10 w-auto object-contain ${variant === 'light' ? 'brightness-0 invert' : ''}`} 
        />
    </div>
   );
};
