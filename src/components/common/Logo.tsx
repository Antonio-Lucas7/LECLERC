import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtext = false,
  className = '',
}) => {
  const isLight = variant === 'light';
  const isGold = variant === 'gold';

  // Dimensions based on size
  const sizeMap = {
    sm: { icon: 'w-6 h-6', text: 'text-base tracking-[0.25em]', subText: 'text-[9px]' },
    md: { icon: 'w-8 h-8', text: 'text-xl md:text-2xl tracking-[0.28em]', subText: 'text-[10px]' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl md:text-3xl tracking-[0.32em]', subText: 'text-xs' },
    xl: { icon: 'w-16 h-16', text: 'text-4xl md:text-5xl tracking-[0.36em]', subText: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  const primaryColor = isLight ? '#FAF7F2' : isGold ? '#C5A059' : '#141211';
  const goldAccent = '#C5A059';

  return (
    <div className={`inline-flex flex-col items-center select-none group cursor-pointer ${className}`}>
      <div className="flex items-center gap-2.5 md:gap-3">
        {/* Geometric Monogram Emblem SVG */}
        <div className={`relative ${currentSize.icon} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Outer Diamond/Square Frame */}
            <rect
              x="50"
              y="7"
              width="60.8"
              height="60.8"
              transform="rotate(45 50 7)"
              stroke={primaryColor}
              strokeWidth="2.5"
              strokeOpacity={isLight ? "0.9" : "0.85"}
            />
            {/* Inner Gold Thin Frame */}
            <rect
              x="50"
              y="16"
              width="48"
              height="48"
              transform="rotate(45 50 16)"
              stroke={goldAccent}
              strokeWidth="1.2"
              strokeDasharray="4 2"
            />
            {/* Stylized Monogram L Lettermark */}
            <path
              d="M38 30 V68 H64"
              stroke={primaryColor}
              strokeWidth="4"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            {/* Subtle Gold Accent Dot/Line */}
            <circle cx="64" cy="30" r="3" fill={goldAccent} />
          </svg>
        </div>

        {/* Brand Name Typography */}
        <span
          className={`font-serif font-medium uppercase font-semibold ${currentSize.text} transition-colors duration-300`}
          style={{ color: primaryColor }}
        >
          LECLERC
        </span>
      </div>

      {showSubtext && (
        <span
          className={`mt-1 font-sans uppercase font-light tracking-[0.4em] ${currentSize.subText} opacity-80`}
          style={{ color: isLight ? '#E2D6C6' : isGold ? '#C5A059' : '#6E5341' }}
        >
          MODA FEMININA
        </span>
      )}
    </div>
  );
};
