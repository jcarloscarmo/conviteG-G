import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { EnvelopeSplash } from './components/EnvelopeSplash';
import { MainInvitation } from './components/MainInvitation';
import { GiftSuggestions } from './components/GiftSuggestions';

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'main' | 'gifts'>('main');
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStartAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.85;
    audio.currentTime = 0;
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.muted = false;
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      });
    } else {
      const nextMuted = !isMuted;
      audio.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleOpenGifts = () => {
    setCurrentScreen('gifts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setCurrentScreen('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#060E1F] flex justify-center items-start">
      {/* Full MP3 Background Music ("Goo Goo Dolls - Iris") */}
      <audio
        ref={audioRef}
        src="/assets/music.mp3"
        loop
        preload="auto"
        className="hidden"
        aria-hidden="true"
      />

      {/* Interactive Splash Envelope Overlay */}
      <EnvelopeSplash
        onStartAudio={handleStartAudio}
        onOpened={() => setIsOpened(true)}
      />

      {/* Mobile-First Invitation Container */}
      <main className="relative w-full max-w-[430px] min-h-[100dvh] shadow-[0_0_60px_rgba(0,0,0,0.75)] overflow-x-hidden">
        {/* Floating Audio Control Button */}
        {isOpened && (
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={isMuted || !isPlaying ? 'Ativar música' : 'Silenciar música'}
            className="fixed top-5 right-5 sm:right-[calc(50%-200px)] z-40 w-10 h-10 rounded-full bg-[#132E5E]/90 text-white border border-white/60 shadow-[0_4px_14px_rgba(9,27,62,0.35)] flex items-center justify-center backdrop-blur-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            {isMuted || !isPlaying ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4 animate-pulse" />
            )}
          </button>
        )}

        {currentScreen === 'main' ? (
          <MainInvitation
            onOpenGifts={handleOpenGifts}
            isRevealed={isOpened}
          />
        ) : (
          <GiftSuggestions onBack={handleBackToMain} />
        )}
      </main>
    </div>
  );
};

export default App;
