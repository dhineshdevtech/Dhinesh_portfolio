"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

interface VideoCardProps {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  videoSrc: string;
  tags: string[];
  deliverable: string;
  clientContext: string;
}

function VideoPlayerCard({
  slug,
  title,
  subtitle,
  category,
  videoSrc,
  tags,
  deliverable,
  clientContext,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="flex flex-col h-full rounded-2xl bg-white border-2 border-[#bfd8f6] shadow-xs overflow-hidden transition-all duration-200 hover:border-[#0070f3] hover:shadow-md">
      
      {/* Compact 9:16 Portrait Video Viewport */}
      <div className="py-3 px-4 bg-gradient-to-b from-[#f8fbfe] to-[#edf5fe] flex justify-center items-center border-b border-[#e2ecf8]">
        <div
          onClick={togglePlay}
          className="relative w-full max-w-[170px] sm:max-w-[190px] aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-900 shadow-md cursor-pointer group select-none"
        >
          {/* Native HTML5 Video Element */}
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            loop
            muted={isMuted}
            preload="metadata"
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Top Info Bar Overlay */}
          <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between pointer-events-none">
            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wide uppercase bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
              {deliverable}
            </span>

            {/* Mute / Unmute Button */}
            <button
              type="button"
              onClick={toggleMute}
              className="pointer-events-auto p-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:bg-[#0070f3] transition-colors border border-white/20 cursor-pointer"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>

          {/* Center Play/Pause Indicator */}
          <div
            className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-150 pointer-events-none ${
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100 bg-slate-950/25"
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-white/95 text-slate-900 shadow-lg flex items-center justify-center backdrop-blur-sm">
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

          {/* Bottom Status Hint */}
          <div className="absolute bottom-2 left-2 right-2 z-20 flex items-center justify-between text-[9px] text-white/90 bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 pointer-events-none">
            <span className="flex items-center gap-1 font-medium">
              <span className={`w-1 h-1 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
              {isPlaying ? "Playing" : "Click to play"}
            </span>
            <span className="font-mono text-slate-300">
              {isMuted ? "Muted" : "Sound On"}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content & Details (Compact) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5 text-left">
          {/* Eyebrow Category */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-50 text-[#0070f3] border border-blue-200">
              {category}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              {clientContext}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
            {title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
            {subtitle}
          </p>
        </div>

        {/* AI Toolchain Badges & Action */}
        <div className="space-y-2.5 pt-2.5 border-t border-slate-100 text-left">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-50 text-slate-700 border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-1">
            <Link
              href={`/projects/${slug}`}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#0070f3] hover:bg-[#005bb5] shadow-xs hover:shadow transition-all active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-[#0070f3]"
            >
              <span>View Case Study &amp; Workflow</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function AIVideoSpotlight() {
  const videoAds = [
    {
      id: "app-development-ad",
      slug: "app-development-ad",
      title: "App Development Service Commercial",
      subtitle:
        "High-energy vertical video ad engineered for mobile product development & agency client acquisition with photorealistic generative rendering.",
      category: "Mobile Service Commercial",
      videoSrc: "/videos/video1.mp4",
      deliverable: "9:16 Vertical Reel",
      clientContext: "Client Acquisition Ad",
      tags: ["Google Vids", "Gemini Veo", "ChatGPT", "CapCut", "Edits"],
    },
    {
      id: "textile-ecommerce-ad",
      slug: "textile-ecommerce-ad",
      title: "AI Textile E-Commerce Showcase Ad",
      subtitle:
        "Cinematic commercial promoting AI-featured textile & fashion e-commerce platform engineering with realistic fabric flow physics.",
      category: "E-Commerce Fashion Ad",
      videoSrc: "/videos/video2.mp4",
      deliverable: "9:16 Vertical Reel",
      clientContext: "Fashion E-Commerce Ad",
      tags: ["Google Vids", "Gemini Veo", "ChatGPT", "CapCut", "Edits"],
    },
  ];

  return (
    <section
      id="ai-video-showcase"
      className="relative py-10 sm:py-12 px-6 sm:px-8 lg:px-12 bg-[#f8fbfe] text-slate-900 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-9">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <FadeUp delay={0} duration={600}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#0070f3] bg-blue-50 border border-blue-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3] animate-pulse" />
              <span>COMMERCIAL CREATIVE PIPELINE</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-900 tracking-tight leading-[1.1] pt-1">
              Realistic AI Video Ads &amp; Commercials
            </h2>
          </FadeUp>

          <FadeUp delay={80} duration={650}>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Commercial-grade 9:16 vertical video ads engineered for mobile apps, SaaS launches, and e-commerce brands with photorealistic visual diffusion and neural voiceover.
            </p>
          </FadeUp>
        </div>

        {/* 2-Column Portrait Video Showcase Grid (Sleek & Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto items-stretch">
          {videoAds.map((ad, idx) => (
            <FadeUp key={ad.id} delay={120 + idx * 80} duration={700} className="h-full">
              <VideoPlayerCard {...ad} />
            </FadeUp>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <FadeUp delay={240} duration={700}>
          <div className="rounded-2xl border-2 border-[#bfd8f6] bg-white p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Need a High-Converting AI Video Commercial for Your Product?
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Studio-grade visual quality, prompt-engineered consistency, and delivery in under 48 hours.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/projects?category=ai-videos"
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Browse Video Directory
              </Link>
              <Link
                href="/contact"
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#0070f3] hover:bg-[#005bb5] shadow-xs transition-colors"
              >
                Commission an Ad →
              </Link>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
