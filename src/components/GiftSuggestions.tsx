import React, { useState } from 'react';
import { INVITATION_CONFIG, GiftItem } from '../config/invitation';
import { GGMonogram, StarDivider, StarOrnament } from './OrnamentalFrame';
import { Check, Copy, ChevronLeft } from 'lucide-react';

interface GiftSuggestionsProps {
  onBack: () => void;
}

const GiftIcon: React.FC<{ type: GiftItem['icon'] }> = ({ type }) => {
  switch (type) {
    case 'shoe':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
          <path d="M4 21c3 0 6-2 9-6l3 3c3 1 8 1.5 11 2.5 1 .4 1.5 1.5 1 2.5H4v-2z" />
          <path d="M6 23v3h3v-3M14 23h14" strokeLinecap="round" />
        </svg>
      );
    case 'necklace':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
          <path d="M7 7c1.5 7 5 12 9 12s7.5-5 9-12" strokeLinecap="round" />
          <path d="M16 19l-2.8 3.2a2 2 0 0 0 0 2.6l2.8 3.2 2.8-3.2a2 2 0 0 0 0-2.6L16 19z" />
        </svg>
      );
    case 'pajama':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
          <path d="M11 6l-6 5 3 4 2-2v12h12V13l2 2 3-4-6-5-3 3h-4l-3-3z" strokeLinejoin="round" />
          <line x1="16" y1="9" x2="16" y2="25" />
        </svg>
      );
    case 'hair':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
          <rect x="10" y="11" width="12" height="16" rx="2.5" />
          <path d="M13 11V8h6v3M16 8V5h4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="10" y1="16" x2="22" y2="16" />
        </svg>
      );
    case 'perfume':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
          <path d="M9 15c0-2.5 2-4.5 4.5-4.5h5c2.5 0 4.5 2 4.5 4.5v7c0 2.5-2 4.5-4.5 4.5h-5C11 26.5 9 24.5 9 22v-7z" />
          <rect x="13.5" y="7" width="5" height="3.5" />
          <line x1="12" y1="5" x2="20" y2="5" strokeLinecap="round" />
          <circle cx="16" cy="18.5" r="2.5" />
        </svg>
      );
    case 'makeup':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
          <rect x="7" y="15" width="6" height="11" rx="1" />
          <path d="M8 15V9.5c0-1.5 4-3 4-0.5V15" />
          <ellipse cx="20.5" cy="22.5" rx="5.5" ry="3" />
          <ellipse cx="20.5" cy="15.5" rx="5" ry="4" />
        </svg>
      );
    case 'pants':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
          <path d="M9 6h14l2 20h-6.5L16 14l-2.5 12H7L9 6z" strokeLinejoin="round" />
          <line x1="9" y1="9.5" x2="23" y2="9.5" />
        </svg>
      );
  }
};

export const GiftSuggestions: React.FC<GiftSuggestionsProps> = ({ onBack }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPix = async (id: string, key: string) => {
    try {
      await navigator.clipboard.writeText(key);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev));
      }, 2400);
    } catch {
      // Fallback copy
      const textarea = document.createElement('textarea');
      textarea.value = key;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev));
      }, 2400);
    }
  };

  return (
    <div className="relative w-full min-h-[100dvh] bg-invitation-paper text-[#0E2756] overflow-hidden px-5 pt-10 pb-20 select-none animate-fade-up">
      {/* Classic Double-Line Ornamental Frame */}
      <div
        className="pointer-events-none absolute inset-3 border border-[#0E2756]/45 z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[16px] border border-[#0E2756]/35 z-10"
        aria-hidden="true"
      />

      {/* Top-Right & Bottom-Left Corner Star Flourishes */}
      <div
        className="pointer-events-none absolute top-2.5 right-2.5 z-20 bg-[#E2EDFD] p-1"
        aria-hidden="true"
      >
        <StarOrnament className="w-4 h-4" />
      </div>
      <div
        className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 bg-[#E2EDFD] p-1"
        aria-hidden="true"
      >
        <StarOrnament className="w-4 h-4" />
      </div>

      {/* Top-Left & Bottom-Right Watercolor Lily Bouquets */}
      <img
        src="/assets/floral-top-left.png"
        alt=""
        className="pointer-events-none absolute -top-1 -left-1 w-[50%] max-w-[210px] z-20"
        draggable={false}
      />
      <img
        src="/assets/floral-bottom-right.png"
        alt=""
        className="pointer-events-none absolute -bottom-1 -right-1 w-[52%] max-w-[220px] z-20"
        draggable={false}
      />

      <div className="relative z-20 flex flex-col items-center text-center">
        {/* Top G&G Monogram (matching Video Model) */}
        <GGMonogram className="mt-4 mb-1" />

        {/* Script Heading */}
        <h1 className="font-script text-[2.45rem] sm:text-[2.75rem] text-[#0B224E] leading-tight mt-1">
          {INVITATION_CONFIG.giftsTitle}
        </h1>

        <StarDivider className="my-1.5 max-w-[220px]" />

        {/* Blue Ribbon Gift Box Illustration from the PHP Gift Art */}
        <img
          src="/assets/gift-box.png"
          alt="Caixa de presente com lírio azul"
          className="w-44 sm:w-48 h-auto my-1 pointer-events-none drop-shadow-[0_6px_12px_rgba(14,39,86,0.12)]"
          draggable={false}
        />

        {/* Animated Horizontal Gift Bars (matching Video 00:15 - 00:17) */}
        <div className="w-full max-w-[340px] flex flex-col gap-2.5 mt-2">
          {INVITATION_CONFIG.giftItems.map((item, idx) => (
            <div
              key={item.id}
              style={{ animationDelay: `${idx * 75}ms` }}
              className="opacity-0 animate-slide-bar flex items-center w-full"
            >
              {/* Left Circular Icon Badge */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#3A5D96] border-2 border-[#E2EDFD] shadow-[0_3px_10px_rgba(14,39,86,0.25)] flex items-center justify-center shrink-0 z-10 -mr-4">
                <GiftIcon type={item.icon} />
              </div>

              {/* Navy Horizontal Pill Bar */}
              <div className="flex-1 min-h-[44px] bg-[#132E5E] text-white rounded-r-lg py-2.5 pl-6 pr-3 shadow-[0_4px_12px_rgba(14,39,86,0.2)] flex items-center justify-center text-center">
                <span className="font-serif-title text-[10.5px] sm:text-[11.5px] tracking-[0.13em] font-medium leading-snug">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* PIX Gift Cards Section (from PHP Gift Art + 1-Click Copy) */}
        <div className="w-full max-w-[340px] flex flex-col gap-2.5 mt-5">
          {INVITATION_CONFIG.pixItems.map((pix) => {
            const isCopied = copiedId === pix.id;
            return (
              <button
                key={pix.id}
                type="button"
                onClick={() => handleCopyPix(pix.id, pix.key)}
                className="group relative w-full rounded-full bg-gradient-to-b from-[#DAE8FC] to-[#C8DDFB] border border-[#0E2756]/30 px-4 py-2.5 shadow-[0_4px_10px_rgba(14,39,86,0.14),inset_0_1px_1px_rgba(255,255,255,0.85)] flex items-center justify-between gap-2 cursor-pointer transition-all hover:border-[#0E2756]/60 active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* PIX Official Diamond Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-[#0E2756] shrink-0"
                  >
                    <path d="M15.45 16.52l-3.01-3.01a.63.63 0 0 0-.88 0l-3.01 3.01a2.62 2.62 0 0 1-1.85.77H5.9l3.8 3.8a3.25 3.25 0 0 0 4.6 0l3.8-3.8h-.8c-.7 0-1.36-.27-1.85-.77zM8.55 7.48l3.01 3.01c.24.24.64.24.88 0l3.01-3.01c.49-.5 1.15-.77 1.85-.77h.8l-3.8-3.8a3.25 3.25 0 0 0-4.6 0l-3.8 3.8h.8c.7 0 1.36.27 1.85.77z" />
                    <path d="M21.09 9.7l-2.18-2.18h-.81c-.46 0-.9.18-1.22.51l-3.01 3.01a1.87 1.87 0 0 1-2.64 0L8.22 8.03a1.72 1.72 0 0 0-1.22-.51h-.81L4.01 9.7a3.25 3.25 0 0 0 0 4.6l2.18 2.18h.81c.46 0 .9-.18 1.22-.51l3.01-3.01a1.87 1.87 0 0 1 2.64 0l3.01 3.01c.32.33.76.51 1.22.51h.81l2.18-2.18a3.25 3.25 0 0 0 0-4.6z" />
                  </svg>
                  <span className="font-serif-body text-sm sm:text-[15px] font-semibold text-[#0E2756] truncate">
                    {pix.label}
                  </span>
                </div>

                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-sans-clean font-semibold tracking-wider uppercase transition-colors shrink-0 ${
                    isCopied
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#132E5E] text-white group-hover:bg-[#1E4282]'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copiar
                    </>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <StarDivider className="my-4 max-w-[230px]" />

        {/* Heartfelt Footer Message */}
        <p className="font-serif-body italic text-base sm:text-[17px] text-[#0E2756] max-w-[290px] leading-snug mb-6 font-medium">
          {INVITATION_CONFIG.giftFooterQuote}
        </p>

        {/* "< VOLTAR" Button (matching Video 00:17) */}
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#132E5E] text-white font-serif-title text-xs tracking-[0.18em] px-6 py-2.5 shadow-[0_4px_12px_rgba(14,39,86,0.28)] hover:bg-[#1C3F7C] active:scale-95 transition-all cursor-pointer mb-6"
        >
          <ChevronLeft className="w-4 h-4 -ml-1" />
          VOLTAR
        </button>
      </div>
    </div>
  );
};
