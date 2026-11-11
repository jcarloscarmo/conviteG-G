import React from 'react';

export const StarOrnament: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-[#0E2756] ${className}`}
    aria-hidden="true"
  >
    <path d="M12 1L14.6 9.4L23 12L14.6 14.6L12 23L9.4 14.6L1 12L9.4 9.4L12 1Z" />
  </svg>
);

export const StarDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-3 w-full max-w-[270px] mx-auto my-3 ${className}`}>
    <span className="h-[1px] flex-1 bg-[#0E2756]/55" />
    <StarOrnament className="w-3 h-3 shrink-0" />
    <span className="h-[1px] flex-1 bg-[#0E2756]/55" />
  </div>
);

export const XVMonogram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
    <svg
      viewBox="0 0 280 110"
      className="w-52 sm:w-56 h-auto text-[#0E2756]"
      fill="none"
      aria-label="XV"
    >
      {/* Flowing calligraphic flourish across XV matching the static reference image */}
      <path
        d="M 18 82 C 5 64, 34 40, 82 54 C 122 66, 152 82, 194 64 C 232 48, 258 34, 270 50 C 275 57, 268 68, 256 66"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        className="opacity-80"
      />
      {/* Roman numeral XV in classic high-contrast serif */}
      <text
        x="140"
        y="84"
        textAnchor="middle"
        fill="currentColor"
        className="font-serif-title"
        style={{
          fontSize: '74px',
          fontWeight: 500,
          letterSpacing: '0.04em',
        }}
      >
        XV
      </text>
    </svg>
  </div>
);

export const GGMonogram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex flex-col items-center select-none ${className}`}>
    <div className="font-serif-title text-[#0E2756] flex items-baseline leading-none tracking-tight">
      <span className="text-5xl sm:text-6xl font-medium">G</span>
      <span className="font-script text-3xl sm:text-4xl -mx-1 text-[#1B3F7A]">&amp;</span>
      <span className="text-5xl sm:text-6xl font-medium translate-y-1.5">G</span>
    </div>
  </div>
);
