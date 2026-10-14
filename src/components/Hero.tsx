"use client";

import Image from "next/image";
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
      className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 px-6 sm:px-8 lg:px-12 bg-[#f0f6fe] overflow-hidden"
    >
      {/* Background ambient cyber-blue glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#00f2fe]/20 via-[#0070f3]/12 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#00f2fe]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Authority & Introduction (7 cols on large screens) */}
        <div className="lg:col-span-7 space-y-6 text-left animate-slide-in-left">
          {/* Eyebrow badge with accent line */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#0070f3] to-[#00f2fe] rounded-full" />
            <span className="text-xs sm:text-[13px] font-bold tracking-widest uppercase text-[#0070f3]">
              Software Engineer • Web &amp; Mobile
            </span>
          </div>

          {/* Main Display Headline with signature cyan dot */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Dhinesh
            <span className="inline-block w-3.5 h-3.5 ml-1.5 rounded-full bg-gradient-to-r from-[#0070f3] to-[#00f2fe] shadow-[0_0_12px_#00f2fe] animate-pulse align-baseline" />
          </h1>

          {/* Role Subtitle */}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-700">
            Web &amp;{" "}
            <span className="bg-gradient-to-r from-[#0070f3] to-[#00c2ff] bg-clip-text text-transparent">
              Mobile Application Developer
            </span>
          </h2>

          {/* Impact Bio Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Passionate software developer specializing in building and shipping scalable,
            high-performance web applications, cross-platform mobile experiences, and modern full-stack systems.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] hover:from-[#005cd6] hover:to-[#00a8e0] shadow-[0_6px_20px_rgba(0,112,243,0.35)] hover:shadow-[0_8px_25px_rgba(0,112,243,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>View My Work</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-[#cde0f8] bg-white text-slate-800 hover:bg-[#f6faff] hover:border-[#0070f3] hover:text-[#0070f3] shadow-xs hover:shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#0070f3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              <span>Let&apos;s Work Together</span>
            </button>
          </div>

          {/* Metric Stats Counters (Bottom Bar - 3 Columns) */}
          <div className="pt-8 border-t border-[#d8e6f8] grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {TOTAL_PROJECTS_COUNT}<span className="text-[#0070f3]">+</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Projects Built
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 sm:gap-1.5 h-9 sm:h-10">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Full-Stack
                </span>
                <span className="text-lg sm:text-xl drop-shadow-xs" role="img" aria-label="End-to-End Build">
                  🔄
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                End-to-End Build
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                100<span className="text-[#0070f3]">%</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Dedication &amp; Quality
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Centerpiece (5 cols on large screens) */}
        <div className="lg:col-span-5 flex justify-center items-center animate-slide-in-right">
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] aspect-[4/5] sm:aspect-square rounded-3xl bg-white/70 backdrop-blur-xl border border-[#dce8f8] shadow-[0_20px_50px_rgba(0,112,243,0.12)] p-4 sm:p-6 flex items-center justify-center">
            {/* Top-Right Floating Status Pill */}
            <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md border border-[#d8e6f8] text-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
              <span>Available for Projects</span>
            </div>

            {/* Profile Avatar (Extra Large Size) */}
            <div className="relative group/avatar cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden">
                <Image
                  src="/profile.webp"
                  alt="Dhinesh - Web and Mobile Application Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bottom-Left Floating Code Snippet Terminal Card (Light Theme) */}
            <div className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 z-20 w-[240px] sm:w-[260px] rounded-2xl bg-white/95 backdrop-blur-xl border border-[#d6e5f7] p-3.5 shadow-[0_14px_36px_rgba(0,112,243,0.12)] text-left animate-fadeIn">
              {/* Terminal Window Header with dots */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#e5effa]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-mono font-medium text-slate-500">dhinesh.ts</span>
              </div>

              {/* Terminal Code snippet with light syntax colors */}
              <div className="font-mono text-[11px] leading-relaxed text-slate-700">
                <p>
                  <span className="text-[#0070f3] font-semibold">const</span>{" "}
                  <span className="text-[#09172c] font-bold">dev</span> = {"{"}
                </p>
                <p className="pl-3">
                  <span className="text-slate-500">role:</span>{" "}
                  <span className="text-emerald-600 font-medium">&apos;Web &amp; Mobile Dev&apos;</span>,
                </p>
                <p className="pl-3">
                  <span className="text-slate-500">stack:</span>{" "}
                  <span className="text-amber-600 font-medium">[&apos;React&apos;, &apos;Mobile&apos;, &apos;TS&apos;]</span>
                </p>
                <p className="text-slate-700">{"};"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
