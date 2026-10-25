"use client";

import { useState, useRef, useEffect } from "react";

interface CompactVideoShowcaseProps {
  videoUrl: string;
  title?: string;
  subtitle?: string;
}

export default function CompactVideoShowcase({
  videoUrl,
  title = "Commercial Video",
  subtitle = "9:16 Vertical Reel",
}: CompactVideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const seekTime = Number(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="rounded-2xl bg-slate-950 border-2 border-slate-900 shadow-xl p-3 sm:p-3.5 text-center max-w-[240px] sm:max-w-[260px] mx-auto select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-2 text-[11px] text-white/80 font-mono">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {title}
        </span>
        <span className="text-[10px] text-white/60 font-medium">{subtitle}</span>
      </div>

      {/* 9:16 Portrait Video Viewport */}
      <div
        onClick={togglePlay}
        className="relative w-full aspect-[9/16] max-h-[420px] sm:max-h-[450px] rounded-xl overflow-hidden bg-black shadow-inner cursor-pointer group"
      >
        <video
          ref={videoRef}
          src={videoUrl}
          playsInline
          loop
          muted={isMuted}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover"
        />

        {/* Top Sound Toggle Button */}
        <button
          type="button"
          onClick={toggleMute}
          className="absolute top-2.5 right-2.5 z-20 p-1.5 rounded-full bg-slate-950/70 backdrop-blur-md text-white hover:bg-[#0070f3] transition-colors border border-white/20 cursor-pointer shadow-md"
          title={isMuted ? "Unmute" : "Mute"}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg className="w-3.5 h-3.5 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>

        {/* Center Play/Pause Pulse Indicator */}
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100 bg-slate-950/30"
          }`}
        >
          <div className="w-11 h-11 rounded-full bg-white/95 text-slate-950 shadow-xl flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-105">
            {isPlaying ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>

        {/* Bottom Clean Control Bar (No 3-Dots, No Fullscreen, No Volume Popup) */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-0 inset-x-0 z-20 p-2.5 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent flex flex-col gap-1.5"
        >
          {/* Custom Time Scrubber Bar */}
          <div className="relative w-full flex items-center group/scrub">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#0066ff] focus:outline-none"
              style={{
                background: `linear-gradient(to right, #0066ff ${progressPercent}%, rgba(255,255,255,0.2) ${progressPercent}%)`,
              }}
            />
          </div>

          {/* Time & Play/Pause State */}
          <div className="flex items-center justify-between text-[10px] text-white/80 font-mono">
            <button
              type="button"
              onClick={togglePlay}
              className="text-white hover:text-[#0066ff] transition-colors font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                  </svg>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Play</span>
                </>
              )}
            </button>
            <span>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
