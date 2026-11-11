import React from 'react';
import { INVITATION_CONFIG, getWhatsAppConfirmUrl } from '../config/invitation';
import { StarDivider, StarOrnament, XVMonogram } from './OrnamentalFrame';
import { CountdownTimer } from './CountdownTimer';

interface MainInvitationProps {
  onOpenGifts: () => void;
  isRevealed: boolean;
}

export const MainInvitation: React.FC<MainInvitationProps> = ({
  onOpenGifts,
  isRevealed,
}) => {
  const whatsappUrl = getWhatsAppConfirmUrl();

  return (
    <div className="relative w-full min-h-[100dvh] bg-invitation-paper text-[#0E2756] overflow-hidden px-6 pt-12 pb-24 select-none">
      {/* Classic Double-Line Ornamental Border Frame (matching Static Reference Image) */}
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

      {/* Top-Left Watercolor Blue Lily Arrangement */}
      <img
        src="/assets/floral-top-left.png"
        alt=""
        className="pointer-events-none absolute -top-1 -left-1 w-[54%] max-w-[232px] z-20 drop-shadow-[0_4px_10px_rgba(14,39,86,0.08)]"
        draggable={false}
      />

      {/* Middle-Right Side Floral Accent (near Countdown, matching Video) */}
      <img
        src="/assets/floral-side.png"
        alt=""
        className="pointer-events-none absolute right-0 top-[48%] w-[26%] max-w-[112px] -scale-x-100 opacity-95 z-10"
        draggable={false}
      />

      {/* Middle-Left Side Floral Accent (between Zig-Zag Icons, matching Video) */}
      <img
        src="/assets/floral-side.png"
        alt=""
        className="pointer-events-none absolute left-0 top-[63%] w-[25%] max-w-[106px] opacity-95 z-10"
        draggable={false}
      />

      {/* Bottom-Right Watercolor Blue Lily Arrangement */}
      <img
        src="/assets/floral-bottom-right.png"
        alt=""
        className="pointer-events-none absolute -bottom-1 -right-1 w-[56%] max-w-[240px] z-20 drop-shadow-[0_-4px_10px_rgba(14,39,86,0.08)]"
        draggable={false}
      />

      {/* Main Content Container */}
      <div
        className={`relative z-20 flex flex-col items-center text-center transition-all duration-1000 ${
          isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* 1. XV Monogram with Calligraphic Flourish */}
        <div className="mt-6 sm:mt-8">
          <XVMonogram />
        </div>

        <StarDivider className="-mt-1 mb-4" />

        {/* 2. Intro Invitation Text (from Static Image) */}
        <p className="font-serif-title text-[11px] sm:text-xs tracking-[0.2em] leading-relaxed text-[#0E2756] max-w-[310px] font-medium">
          {INVITATION_CONFIG.introTextTop}
          <br />
          {INVITATION_CONFIG.introTextBottom}
        </p>

        {/* 3. Main Script Names: Gabi & Grazy */}
        <h1 className="font-script text-[3.4rem] sm:text-[3.9rem] text-[#0B224E] leading-[1.08] my-3 px-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          {INVITATION_CONFIG.names}
        </h1>

        <StarDivider className="my-3" />

        {/* 4. Secondary Celebration Message (from Static Image) */}
        <p className="font-serif-title text-[11px] sm:text-xs tracking-[0.17em] leading-[1.8] text-[#0E2756] max-w-[330px] font-medium my-2">
          {INVITATION_CONFIG.messageLine1}
          <br />
          {INVITATION_CONFIG.messageLine2}
          <br />
          {INVITATION_CONFIG.messageLine3}
        </p>

        {/* 5. Three-Column Date | Time | Venue Block (from Static Image) */}
        <div className="w-full max-w-[366px] grid grid-cols-[1.05fr_0.72fr_1.23fr] items-stretch mt-6 mb-4 py-1 text-[#0E2756]">
          {/* Column 1: Date */}
          <div className="flex flex-col items-center justify-start px-1.5 border-r border-[#0E2756]/45">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6 mb-2 text-[#0E2756]"
            >
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <circle cx="8" cy="13" r="0.8" fill="currentColor" />
              <circle cx="12" cy="13" r="0.8" fill="currentColor" />
              <circle cx="16" cy="13" r="0.8" fill="currentColor" />
              <circle cx="8" cy="17" r="0.8" fill="currentColor" />
              <circle cx="12" cy="17" r="0.8" fill="currentColor" />
              <circle cx="16" cy="17" r="0.8" fill="currentColor" />
            </svg>
            <span className="font-serif-title text-sm sm:text-[15px] font-semibold tracking-[0.08em] leading-tight">
              {INVITATION_CONFIG.date}
            </span>
            <span className="font-serif-title text-[9.5px] sm:text-[10px] tracking-[0.14em] mt-1 font-medium">
              {INVITATION_CONFIG.dayOfWeek}
            </span>
          </div>

          {/* Column 2: Time */}
          <div className="flex flex-col items-center justify-start px-1.5 border-r border-[#0E2756]/45">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6 mb-2 text-[#0E2756]"
            >
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15.5 14" />
            </svg>
            <span className="font-serif-title text-sm sm:text-[15px] font-semibold tracking-[0.12em] leading-tight">
              {INVITATION_CONFIG.time}
            </span>
          </div>

          {/* Column 3: Venue & Address */}
          <div className="flex flex-col items-center justify-start pl-2 pr-0.5 text-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6 mb-2 text-[#0E2756]"
            >
              <path d="M12 21s-7-5.75-7-11a7 7 0 1 1 14 0c0 5.25-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span className="font-serif-title text-[11px] sm:text-xs font-semibold tracking-[0.12em] leading-tight">
              {INVITATION_CONFIG.venueName}
            </span>
            <span className="font-serif-title text-[8.5px] sm:text-[9px] tracking-[0.09em] leading-[1.45] mt-1 font-medium">
              {INVITATION_CONFIG.venueAddressLine1}
              <br />
              {INVITATION_CONFIG.venueAddressLine2}
              <br />
              {INVITATION_CONFIG.venueCity}
            </span>
          </div>
        </div>

        {/* 6. RSVP Deadline Notice (from Static Image) */}
        <div className="mt-2 mb-1">
          <p className="font-script text-[2rem] sm:text-[2.2rem] text-[#0E2756] leading-tight">
            {INVITATION_CONFIG.rsvpTitle}
          </p>
          <p className="font-serif-title text-[10.5px] sm:text-[11.5px] tracking-[0.2em] font-medium mt-0.5">
            {INVITATION_CONFIG.rsvpDeadline}
          </p>
        </div>

        <StarDivider className="my-2" />

        {/* 7. Real-Time Countdown Timer (from Video Model) */}
        <CountdownTimer />

        {/* 8. Interactive Hint */}
        <div className="flex items-center justify-center gap-2.5 mt-4 mb-5 text-[#0E2756]/90">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-[#0E2756] animate-bounce"
            aria-hidden="true"
          >
            <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
          </svg>
          <span className="font-serif-title text-[10px] sm:text-[11px] tracking-[0.15em] leading-snug text-left font-medium">
            CLIQUE NOS ÍCONES
            <br />
            ABAIXO PARA INTERAGIR
          </span>
        </div>

        {/* 9. Zig-Zag Interactive Action Buttons (matching Video Model) */}
        <div className="w-full max-w-[310px] flex flex-col gap-5 my-2">
          {/* Action 1: Local da Festa (Left Circle + Right Label) */}
          <a
            href={INVITATION_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-start gap-4 text-left focus:outline-none"
          >
            <div className="relative w-[84px] h-[84px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#132E5E] shadow-[0_6px_16px_rgba(14,39,86,0.28)] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
              <div className="absolute inset-[5px] rounded-full border border-white/75 pointer-events-none" />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.4"
                className="w-10 h-10"
              >
                <path d="M12 21s-7-5.75-7-11a7 7 0 1 1 14 0c0 5.25-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.8" />
              </svg>
            </div>
            <span className="font-serif-title text-xs sm:text-[13px] tracking-[0.14em] text-[#0E2756] font-medium leading-relaxed group-hover:text-[#1B4284] transition-colors">
              LOCAL
              <br />
              DA FESTA
            </span>
          </a>

          {/* Action 2: Confirmar Presença (Left Label + Right Circle -> Direct WhatsApp) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-end gap-4 text-right focus:outline-none"
          >
            <span className="font-serif-title text-xs sm:text-[13px] tracking-[0.14em] text-[#0E2756] font-medium leading-relaxed group-hover:text-[#1B4284] transition-colors">
              CONFIRMAR
              <br />
              PRESENÇA
            </span>
            <div className="relative w-[84px] h-[84px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#132E5E] shadow-[0_6px_16px_rgba(14,39,86,0.28)] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
              <div className="absolute inset-[5px] rounded-full border border-white/75 pointer-events-none" />
              <svg
                viewBox="0 0 28 28"
                fill="none"
                stroke="white"
                strokeWidth="1.4"
                className="w-11 h-11"
              >
                <circle cx="12" cy="9.5" r="4.2" />
                <path d="M4.5 21.5c0-3.8 3.4-6.5 7.5-6.5 1.3 0 2.5.3 3.5.8" />
                <circle cx="19.5" cy="18.5" r="4.8" fill="#132E5E" stroke="white" strokeWidth="1.4" />
                <polyline points="17.3 18.5 18.9 20.1 22 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>

          {/* Action 3: Sugestões de Presentes (Left Circle + Right Label -> Dedicated Screen) */}
          <button
            type="button"
            onClick={onOpenGifts}
            className="group flex items-center justify-start gap-4 text-left cursor-pointer focus:outline-none"
          >
            <div className="relative w-[84px] h-[84px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#132E5E] shadow-[0_6px_16px_rgba(14,39,86,0.28)] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
              <div className="absolute inset-[5px] rounded-full border border-white/75 pointer-events-none" />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.4"
                className="w-10 h-10"
              >
                <rect x="3" y="8" width="18" height="4" rx="1" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                <line x1="12" y1="8" x2="12" y2="21" />
                <path d="M12 8H7.5a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8z" />
                <path d="M12 8h4.5a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8z" />
              </svg>
            </div>
            <span className="font-serif-title text-xs sm:text-[13px] tracking-[0.14em] text-[#0E2756] font-medium leading-relaxed group-hover:text-[#1B4284] transition-colors">
              SUGESTÕES
              <br />
              DE PRESENTES
            </span>
          </button>
        </div>

        {/* 10. Manual do Convidado Section (from Video Model) */}
        <div className="w-full max-w-[330px] mt-10 flex flex-col items-center">
          <h2 className="font-script text-[2.2rem] sm:text-[2.45rem] text-[#0E2756] leading-tight mb-5">
            {INVITATION_CONFIG.guestManualTitle}
          </h2>

          <div className="w-full flex flex-col gap-4 text-left">
            {INVITATION_CONFIG.guestManualItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3.5">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 text-[#0E2756]">
                  {item.icon === 'dress' && (
                    <svg viewBox="0 0 28 28" fill="currentColor" className="w-7 h-7">
                      {/* Dress & Suit silhouette matching the reference video */}
                      <path d="M8.5 4.5L10 8l3 9.5H4L7 8l1.5-3.5zM6.5 3h4l-.8 2h-2.4L6.5 3z" />
                      <path d="M17 4h6l1 6-1.5 1v9h-5v-6h-1v6h-2v-9L13 10l1-6h3z" />
                    </svg>
                  )}
                  {item.icon === 'clock' && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 10.41l3.29 3.3-1.42 1.41L11 13V7h2v5.41z" />
                    </svg>
                  )}
                  {item.icon === 'check' && (
                    <svg viewBox="0 0 28 28" fill="currentColor" className="w-7 h-7">
                      <circle cx="10.5" cy="8.5" r="4" />
                      <path d="M3.5 20.5c0-3.5 3.1-6 7-6 1.2 0 2.3.25 3.3.7a6.5 6.5 0 0 0-1.3 3.8c0 .5.06 1 .18 1.5H3.5z" />
                      <path d="M19.5 14a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm-.7 7.3l-2.3-2.3 1.06-1.06 1.24 1.24 2.94-2.94 1.06 1.06-4 4z" />
                    </svg>
                  )}
                </div>
                <p className="font-serif-title text-[10.5px] sm:text-[11px] tracking-[0.11em] leading-[1.55] text-[#0E2756] font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* 11. Closing Script Quote */}
          <p className="font-script text-[2.1rem] sm:text-[2.35rem] text-[#0E2756] leading-tight mt-9 mb-6">
            {INVITATION_CONFIG.closingQuote}
          </p>
        </div>
      </div>
    </div>
  );
};
