import React, { useState } from 'react';
import { INVITATION_CONFIG } from '../config/invitation';

interface EnvelopeSplashProps {
  onStartAudio: () => void;
  onOpened: () => void;
}

export const EnvelopeSplash: React.FC<EnvelopeSplashProps> = ({
  onStartAudio,
  onOpened,
}) => {
  const [phase, setPhase] = useState<'idle' | 'zooming' | 'opening' | 'done'>('idle');

  const handleOpen = () => {
    if (phase !== 'idle') return;
    onStartAudio();
    setPhase('zooming');

    setTimeout(() => {
      setPhase('opening');
    }, 380);

    setTimeout(() => {
      setPhase('done');
      onOpened();
    }, 1350);
  };

  if (phase === 'done') return null;

  return (
    <div
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      aria-label="Clique para abrir o convite de Gabi & Grazy"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#060E1F]/90 cursor-pointer select-none overflow-hidden"
    >
      <div
        className={`relative w-full max-w-[430px] h-[100dvh] max-h-[860px] overflow-hidden transition-transform duration-500 ease-out ${
          phase === 'zooming' ? 'scale-[1.045]' : 'scale-100'
        }`}
      >
        {/* Right Panel with peeking watercolor lilies & corner bouquets */}
        <div
          className={`absolute inset-0 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase === 'opening'
              ? 'translate-x-[102%] opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          <img
            src="/assets/envelope-bg.png"
            alt=""
            className="w-full h-full object-cover object-center pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Left Flap + 3D Wax Seal G&G + Top-left "Gabi & Grazy" title */}
        <div
          className={`absolute inset-0 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase === 'opening'
              ? '-translate-x-[105%] opacity-95'
              : 'translate-x-0 opacity-100'
          }`}
        >
          <img
            src="/assets/envelope-flap.png"
            alt="Envelope G&G"
            className="w-full h-full object-cover object-center pointer-events-none drop-shadow-[8px_0_18px_rgba(9,27,62,0.18)]"
            draggable={false}
          />

          {/* Top-Left Title on the Envelope Flap ("Gabi & Grazy — XV ANOS —") */}
          <div className="absolute top-[4.5%] left-[2%] w-[47%] flex flex-col items-center text-center px-1 pointer-events-none">
            <h1 className="font-script text-[2.25rem] sm:text-[2.55rem] text-[#0B224E] leading-[1.05] drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
              {INVITATION_CONFIG.names}
            </h1>
            <div className="flex items-center justify-center gap-2 w-[86%] mt-1">
              <span className="h-[1px] flex-1 bg-[#0B224E]/60" />
              <span className="font-serif-title text-[10px] sm:text-[11px] tracking-[0.26em] text-[#0B224E] font-medium whitespace-nowrap">
                {INVITATION_CONFIG.subtitle}
              </span>
              <span className="h-[1px] flex-1 bg-[#0B224E]/60" />
            </div>
          </div>

          {/* Interactive Pulse Ring on the 3D Wax Seal */}
          <div
            className="absolute left-[50.2%] top-[50.8%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <span className="w-28 h-28 rounded-full border border-[#1E478A]/35 animate-ping opacity-35" />
          </div>
        </div>
      </div>
    </div>
  );
};
