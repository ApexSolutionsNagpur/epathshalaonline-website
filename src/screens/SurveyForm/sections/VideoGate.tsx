'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { trackEvent } from '@/lib/trackEvent';
import { surveyTranslations } from '@/lib/surveyTranslations';
import type { Language } from '@/types/survey';

// Extend Window interface for YouTube Iframe API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface VideoGateProps {
  language: Language;
  onComplete: () => void;
}

const YOUTUBE_VIDEO_ID = 'XDR5GBEf0BM'; // Requested by user

const VideoGate = ({ language, onComplete }: VideoGateProps) => {
  const t = surveyTranslations[language];
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const [progressText, setProgressText] = useState('0:00 / 0:00');
  const [progressPercent, setProgressPercent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load YouTube Iframe API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (!containerRef.current) return;
      
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1, // Try to autoplay
          mute: 1, // Muted is required for autoplay without user interaction in modern browsers
          controls: 0, // Hides controls to prevent skipping
          disablekb: 1,
          rel: 0,
          modestbranding: 1,
          fs: 0,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            // Attempt autoplay
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
              setProgressPercent(100);
              handleEnded();
            } else if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.UNSTARTED) {
              if (!videoEnded) {
                setIsPlaying(false);
                // Force play if paused unintentionally before ended
                event.target.playVideo();
              }
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoEnded]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          const currentTime = playerRef.current.getCurrentTime();
          const duration = playerRef.current.getDuration();
          if (duration > 0) {
            const curMin = Math.floor(currentTime / 60);
            const curSec = Math.floor(currentTime % 60);
            const totMin = Math.floor(duration / 60);
            const totSec = Math.floor(duration % 60);
            
            setProgressText(
              `${curMin}:${curSec.toString().padStart(2, '0')} / ${totMin}:${totSec.toString().padStart(2, '0')}`
            );
            setProgressPercent((currentTime / duration) * 100);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleEnded = useCallback(() => {
    trackEvent('video_complete', { form: 'survey_2026' });
    setVideoEnded(true);
    setToast(t.videoComplete);
    // Add small delay to let user see completion state before automatically hiding
    setTimeout(() => {
      onComplete();
    }, 1000);
  }, [onComplete, t.videoComplete]);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <>
      <section id="survey-video-gate" className="bg-black min-h-screen w-full flex flex-col justify-center items-center overflow-hidden fixed inset-0 z-[100]">
        <div className="w-full h-full relative flex flex-col justify-center items-center bg-black overflow-hidden">
          
          {/* YouTube Player Container - Full Screen Centered */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div ref={containerRef} className="w-full h-full" />
          </div>

          {/* Overlay to block clicks on the iframe itself, keeping it un-seekable */}
          <div className="absolute inset-0 z-10" />

          {/* Progress Overlay at bottom */}
          <div className="absolute bottom-0 left-0 w-full z-30 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-xs font-bold text-white mb-2 drop-shadow-md">
              Video: {progressText}
            </p>
            <div className="h-1 w-full bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-1000 ease-linear"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

        </div>
      </section>

      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] bg-[#0B3C5D] text-white px-6 py-3 rounded-2xl shadow-2xl text-sm font-bold animate-in fade-in slide-in-from-top-2">
          {toast}
        </div>
      )}
    </>
  );
};

export default VideoGate;

