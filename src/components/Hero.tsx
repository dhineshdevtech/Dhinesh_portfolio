"use client";

import Image from "next/image";
import Link from "next/link";
import { TOTAL_PROJECTS_COUNT } from "@/data/projectsData";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-14 px-6 sm:px-8 lg:px-12 bg-[#f0f6fe]/60 bg-tech-grid overflow-hidden border-b border-slate-200/70"
    >
      {/* Precision ambient lighting — restrained and purposeful */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#0066ff]/8 to-transparent blur-2xl pointer-events-none -z-10" 
      />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Technical Authority & Value Proposition */}
        <div className="lg:col-span-7 space-y-6 text-left animate-slide-in-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0066ff]" />
            <span className="text-xs font-mono font-semibold tracking-wide uppercase text-slate-700">
              Web &amp; Mobile Developer • Realistic AI Video Ads
            </span>
          </div>

          {/* Main Display Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
              Dhinesh
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-700 tracking-tight">
              Software Engineer &amp; AI Video Creator
            </h2>
          </div>

          {/* Impact Bio */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            I develop production-ready mobile and web applications that scale. I also produce realistic AI video commercials that drive real sales.
          </p>

          {/* Action CTA Buttons with accessible focus-visible */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0066ff] hover:bg-[#0052cc] shadow-xs hover:shadow-md transition-[background-color,box-shadow,transform] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Explore Featured Work</span>
            </button>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 shadow-xs transition-[border-color,background-color,color,transform] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
            >
              <svg
                className="w-4 h-4 text-[#0066ff] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                />
              </svg>
              <span>Let&apos;s Talk</span>
              <span
                className="text-slate-400 group-hover:text-slate-700 transition-colors text-xs font-mono ml-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>

          {/* Metric Stats Counters */}
          <div className="pt-6 border-t border-slate-200/90 flex items-center justify-start gap-4 sm:gap-6 lg:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                {TOTAL_PROJECTS_COUNT}<span className="text-[#0066ff]">+</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                Shipped Systems
              </div>
            </div>

            <div className="h-9 w-px bg-slate-200 shrink-0" aria-hidden="true" />

            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                Production
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                Web &amp; Mobile
              </div>
            </div>

            <div className="h-9 w-px bg-slate-200 shrink-0" aria-hidden="true" />

            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0066ff] tracking-tight whitespace-nowrap">
                Photoreal
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                AI Video Ads
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Centerpiece & Authentic Telemetry */}
        <div className="lg:col-span-5 flex justify-center items-center animate-slide-in-right">
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] aspect-[4/5] sm:aspect-square rounded-3xl bg-white border border-slate-200 shadow-md p-4 sm:p-6 flex items-center justify-center">
            {/* Status Pill: Available for Projects */}
            <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            {/* Profile Avatar */}
            <div className="relative group/avatar transition-transform duration-200 hover:scale-[1.02]">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
                <Image
                  src="/profile.webp"
                  alt="Dhinesh - Web and Mobile Application Developer & AI Video Creator"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bottom-Left Real Technical Verification Card */}
            <div className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-5 z-20 w-[250px] sm:w-[270px] rounded-xl bg-white border border-slate-200 p-3.5 shadow-lg text-left animate-fadeIn">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0066ff]">
                  Production Verification
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px] text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Google Play:</span>
                  <span className="font-semibold text-emerald-700">Live Release</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Stack:</span>
                  <span className="font-semibold text-slate-800">Flutter • Next.js • TS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Creative AI:</span>
                  <span className="font-semibold text-[#0066ff]">Realistic Video Ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
