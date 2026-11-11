import React, { useEffect, useState } from 'react';
import { INVITATION_CONFIG } from '../config/invitation';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const target = new Date(INVITATION_CONFIG.targetDateISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  const units = [
    { value: pad(timeLeft.days), label: 'DIAS' },
    { value: pad(timeLeft.hours), label: 'HORAS' },
    { value: pad(timeLeft.minutes), label: 'MINUTOS' },
    { value: pad(timeLeft.seconds), label: 'SEGUNDOS' },
  ];

  return (
    <div className="flex flex-col items-center my-4 select-none">
      <p className="font-script text-4xl sm:text-[2.6rem] text-[#0E2756] leading-tight mb-1">
        Faltam:
      </p>

      <div className="flex items-start justify-center gap-1.5 sm:gap-2.5 text-[#0E2756]">
        {units.map((unit, idx) => (
          <React.Fragment key={unit.label}>
            <div className="flex flex-col items-center min-w-[54px] sm:min-w-[62px]">
              <span className="font-serif-body text-4xl sm:text-[2.65rem] font-normal tracking-wider leading-none tabular-nums">
                {unit.value}
              </span>
              <span className="font-serif-title text-[9px] sm:text-[10px] tracking-[0.16em] text-[#0E2756]/85 mt-2 uppercase font-medium">
                {unit.label}
              </span>
            </div>
            {idx < units.length - 1 && (
              <span className="font-serif-body text-3xl sm:text-4xl leading-none pt-0.5 opacity-80">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
