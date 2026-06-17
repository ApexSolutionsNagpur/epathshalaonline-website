'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Play } from 'lucide-react';
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
  onVideoComplete: () => void;
  onStartWizard: () => void;
}

const YOUTUBE_VIDEO_ID = 'XDR5GBEf0BM'; // Requested by user

const VideoGate = ({ language, onVideoComplete, onStartWizard }: VideoGateProps) => {
  const t = surveyTranslations[language];
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true); // Start showing overlay to ensure user interaction for autoplay
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
          autoplay: 0,
          controls: 0, // Hides controls to prevent skipping
          disablekb: 1,
          rel: 0,
          modestbranding: 1,
          fs: 0,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            setIsReady(true);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
              setProgressPercent(100);
              handleEnded();
            } else if (event.data === window.YT.PlayerState.PLAYING) {
              setShowPlayOverlay(false);
              setIsPlaying(true);
            } else {
              setIsPlaying(false);
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
  }, []);

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
    onVideoComplete();
    setToast(t.videoComplete);
  }, [onVideoComplete, t.videoComplete]);

  const handlePlayClick = useCallback(() => {
    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      playerRef.current.playVideo();
    }
  }, []);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(id);
  }, [toast]);

  const handleStartFormClick = () => {
    trackEvent('fill_form_click', { form: 'survey_2026' });
    onStartWizard();
  };

  return (
    <>
      <section id="survey-video-gate" className="bg-white pb-8 px-4 md:px-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-full relative rounded-2xl overflow-hidden bg-black shadow-xl aspect-video">
              
              {/* YouTube Player Container */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div ref={containerRef} className="w-full h-full" />
              </div>

              {/* Overlay to block clicks on the iframe itself, keeping it un-seekable */}
              <div className="absolute inset-0 z-10" />

              {/* Play Overlay */}
              {showPlayOverlay && !videoEnded && (
                <div
                  onClick={handlePlayClick}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 cursor-pointer"
                >
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-white/30 transition-all flex flex-col items-center gap-2">
                    <Play className="w-12 h-12 text-white fill-white" />
                    <span className="text-white font-bold">{t.videoTapToPlay}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 w-full">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold text-[#6B7280]">
                  {t.videoProgress}: {progressText}
                </p>
                {videoEnded && (
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    ✓ {language === 'hi' ? 'पूरा हुआ' : 'Watched'}
                  </span>
                )}
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#1E5AA8] transition-all duration-1000 ease-linear"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {videoEnded && (
              <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
                <button
                  onClick={handleStartFormClick}
                  className="bg-[#FFC107] text-[#0B3C5D] font-extrabold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-widest flex items-center gap-2 animate-pulse hover:animate-none ring-4 ring-[#FFC107]/30"
                >
                  {t.fillSurveyForm || (language === 'hi' ? 'सर्वे फॉर्म भरें' : 'Fill Survey Form')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#0B3C5D] text-white px-6 py-3 rounded-2xl shadow-2xl text-sm font-bold animate-in fade-in slide-in-from-top-2">
          {toast}
        </div>
      )}
    </>
  );
};

export default VideoGate;

