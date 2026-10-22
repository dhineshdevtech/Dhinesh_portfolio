"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200/90 py-10 sm:py-12 px-6 sm:px-8 lg:px-12 text-slate-600">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* ========================================================================= */}
        {/* 4-COLUMN SITEMAP GRID                                                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-slate-900 text-sm shadow-2xs">
                D
              </span>
              <span className="font-extrabold text-slate-900 tracking-tight text-lg">
                Dhinesh
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Software Engineer specializing in production web applications, cross-platform Flutter mobile systems, and commercial business platforms.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for New Projects &amp; Roles</span>
            </div>
          </div>

          {/* Column 2: Core Navigation (3 cols on lg) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  Projects &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/certificates"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  Certificates &amp; Credentials
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  Resume &amp; Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  About Dhinesh
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs font-semibold text-slate-800"
                >
                  Get in Touch →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Disciplines (2 cols on lg) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Disciplines
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/projects?category=mobile"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=websites"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  Web Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?category=business"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  Business Software
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/mpnmjec-bus-tracker"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  Bus Tracker System
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/quizforge-ai"
                  className="hover:text-[#0066ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  QuizForge AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Direct (3 cols on lg) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Connect
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://github.com/dhineshdevtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0066ff] transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  <span>GitHub (@dhineshdevtech)</span>
                  <span className="text-[10px] text-slate-400" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dhineshdevtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0066ff] transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  <span>LinkedIn Profile</span>
                  <span className="text-[10px] text-slate-400" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919025873422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0066ff] transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs"
                >
                  <span>WhatsApp Direct</span>
                  <span className="text-[10px] text-slate-400" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dhineshbuilder@gmail.com"
                  className="hover:text-[#0066ff] transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#0066ff] rounded-xs truncate max-w-full"
                >
                  <span>dhineshbuilder@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM METADATA BAR                                                       */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-center sm:text-left">
            <span>© 2026 Dhinesh. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300" aria-hidden="true">•</span>
            <span>Tamil Nadu, India • IST (UTC+5:30)</span>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-[#0066ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <span className="text-xs" aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
