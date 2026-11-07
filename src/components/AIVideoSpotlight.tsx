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
  posterSrc: string;
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
  posterSrc,
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
      <div className="py-3 px-3 sm:px-4 bg-gradient-to-b from-[#f8fbfe] to-[#edf5fe] flex justify-center items-center border-b border-[#e2ecf8]">
        <div
          onClick={togglePlay}
          className="relative w-full max-w-[170px] sm:max-w-[190px] aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-900 shadow-md cursor-pointer group select-none"
        >
          {/* Native HTML5 Video Element with Instant WebP Poster & FastStart Streaming */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            playsInline
            loop
            muted={isMuted}
            preload="none"
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
      id: "durga-gold-jewellery-ad",
      slug: "durga-gold-jewellery-ad",
      title: "Durga Gold – Edition I (Instant Cash & Loan Release)",
      subtitle:
        "High-converting regional commercial for Durga Gold (T. Nagar), demonstrating pledged gold release, digital appraisal, and same-day cash payout.",
      category: "Retail Jewellery",
      videoSrc: "/videos/durga-gold-ad1.mp4",
      posterSrc: "/projects/durga-gold-ad1-thumb.webp",
      deliverable: "9:16 Vertical Reel",
      clientContext: "Strategy 360 • Durga Gold",
      tags: ["Google Vids", "Gemini Veo", "ChatGPT", "CapCut", "Edits"],
    },
    {
      id: "durga-gold-jewellery-ad-2",
      slug: "durga-gold-jewellery-ad-2",
      title: "Durga Gold – Edition II (Jewellery Valuation)",
      subtitle:
        "Luxury boutique edition showcasing transparent gold purity testing, certified diamond appraisal, and instant spot cash liquidation.",
      category: "Retail Jewellery",
      videoSrc: "/videos/durga-gold-ad2.mp4",
      posterSrc: "/projects/durga-gold-ad2-thumb.webp",
      deliverable: "9:16 Vertical Reel",
      clientContext: "Strategy 360 • Durga Gold",
      tags: ["Google Vids", "Gemini Veo", "ChatGPT", "CapCut", "Edits"],
    },
    {
      id: "strategy360-performance-marketing-ad",
      slug: "strategy360-performance-marketing-ad",
      title: "Strategy 360 – Performance Marketing Ad",
      subtitle:
        "High-authority podcast-style ad engineered for Strategy 360, driving direct-response client acquisition for digital marketing services.",
      category: "Agency Marketing",
      videoSrc: "/videos/strategy360-performance-ad.mp4",
      posterSrc: "/projects/strategy360-performance-thumb.webp",
      deliverable: "9:16 Vertical Reel",
      clientContext: "Strategy 360 Agency",
      tags: ["Google Vids", "Gemini Veo", "ChatGPT", "CapCut", "Edits"],
    },
    {
      id: "strategy360-commercial-production-ad",
      slug: "strategy360-commercial-production-ad",
      title: "Strategy 360 – Commercial Brand Growth Ad",
      subtitle:
        "Corporate B2B commercial presenting Strategy 360's creative suite: viral short-form video reels, studio shoots, and full-funnel expansion.",
      category: "Corporate Video",
      videoSrc: "/videos/strategy360-commercial-ad.mp4",
      posterSrc: "/projects/strategy360-commercial-thumb.webp",
      deliverable: "9:16 Vertical Reel",
      clientContext: "Strategy 360 Agency",
      tags: ["Google Vids", "Gemini Veo", "ChatGPT", "CapCut", "Edits"],
    },
  ];

  return (
    <section
      id="ai-video-showcase"
      className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#f8fbfe] text-slate-900 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-9">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <FadeUp delay={0} duration={600}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#0070f3] bg-blue-50 border border-blue-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3] animate-pulse" />
              <span>STRATEGY 360 INTERNSHIP • COMMERCIAL AI VIDEO ADS</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-900 tracking-tight leading-[1.1] pt-1">
              Realistic AI Video Ads &amp; Commercials
            </h2>
          </FadeUp>

          <FadeUp delay={80} duration={650}>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Commercial-grade 9:16 vertical video ads engineered during my creative technologist internship at Strategy 360 (Chennai) for retail jewellery, haute fashion e-commerce, and software agency launches. FastStart streaming optimized for instant mobile playback.
            </p>
          </FadeUp>
        </div>

        {/* 4-Column Portrait Video Showcase Grid (Sleek & Ultra-Fast Loading) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto items-stretch">
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
                Browse All 6 Video Campaigns
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
