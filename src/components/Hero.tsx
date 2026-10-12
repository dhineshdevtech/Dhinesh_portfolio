"use client";

import Image from "next/image";

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
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Eyebrow badge with accent line */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#0070f3] to-[#00f2fe] rounded-full" />
            <span className="text-xs sm:text-[13px] font-bold tracking-widest uppercase text-[#0070f3]">
              Full-Stack Developer • Software Engineer
            </span>
          </div>

          {/* Main Display Headline with signature cyan dot */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Dhinesh
            <span className="inline-block w-3.5 h-3.5 ml-1.5 rounded-full bg-gradient-to-r from-[#0070f3] to-[#00f2fe] shadow-[0_0_12px_#00f2fe] animate-pulse align-baseline" />
          </h1>

          {/* Role Subtitle */}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-700">
            Full-Stack Developer &amp;{" "}
            <span className="bg-gradient-to-r from-[#0070f3] to-[#00c2ff] bg-clip-text text-transparent">
              Next.js Engineer
            </span>
          </h2>

          {/* Impact Bio Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Passionate software developer specializing in building and shipping scalable,
            high-performance web applications with Next.js, TypeScript, and modern full-stack architectures.
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
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Let&apos;s Work Together</span>
            </button>
          </div>

          {/* Metric Stats Counters (Bottom Bar) */}
          <div className="pt-8 border-t border-[#d8e6f8] grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                15<span className="text-[#0070f3]">+</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Projects Built
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                5<span className="text-[#0070f3]">+</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Hackathons &amp; Wins
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                2<span className="text-[#0070f3]">+</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Centerpiece (5 cols on large screens) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] sm:aspect-square rounded-3xl bg-white/70 backdrop-blur-xl border border-[#dce8f8] shadow-[0_20px_50px_rgba(0,112,243,0.12)] p-6 sm:p-8 flex items-center justify-center">
            {/* Top-Right Floating Status Pill */}
            <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md border border-[#d8e6f8] text-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
              <span>Available for Projects</span>
            </div>

            {/* Central Profile Avatar with Glowing Cyan-Azure Ring */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-1 bg-gradient-to-tr from-[#0047ab] via-[#0070f3] to-[#00f2fe] shadow-[0_8px_36px_rgba(0,112,243,0.38)] hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                <Image
                  src="/profile.jpg"
                  alt="Dhinesh"
                  fill
                  sizes="(max-width: 640px) 192px, 240px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bottom-Left Floating Code Snippet Terminal Card */}
            <div className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 z-20 w-[240px] sm:w-[260px] rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.25)] text-left animate-fadeIn">
              {/* Terminal Window Header with dots */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">dhinesh.ts</span>
              </div>

              {/* Terminal Code snippet with syntax colors */}
              <div className="font-mono text-[11px] leading-relaxed text-slate-300">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-[#00f2fe]">dev</span> = {"{"}
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-emerald-400">&apos;Full-Stack&apos;</span>,
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">stack:</span>{" "}
                  <span className="text-amber-300">[&apos;Next.js&apos;, &apos;TS&apos;]</span>
                </p>
                <p>{"};"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
