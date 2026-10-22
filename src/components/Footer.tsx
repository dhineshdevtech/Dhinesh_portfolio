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
    <footer className="relative bg-white border-t border-slate-200 py-8 sm:py-10 px-6 sm:px-8 lg:px-12 text-slate-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-slate-900 text-sm shadow-2xs">
              D
            </span>
            <span className="font-extrabold text-slate-900 tracking-tight text-lg">
              Dhinesh
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
            Software Engineer • Web &amp; Mobile Application Developer crafting scalable systems and verified cross-platform apps.
          </p>
        </div>

        {/* Center / Right: Social Links & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
            <a
              href="https://github.com/dhineshdevtech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0066ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-xs transition-colors"
            >
              GitHub ↗
            </a>
            <span className="text-slate-300" aria-hidden="true">•</span>
            <a
              href="https://www.linkedin.com/in/dhineshdevtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0066ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-xs transition-colors"
            >
              LinkedIn ↗
            </a>
            <span className="text-slate-300" aria-hidden="true">•</span>
            <Link
              href="/contact"
              className="hover:text-[#0066ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-xs transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-[#0066ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <span className="text-sm" aria-hidden="true">↑</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>© 2026 Dhinesh. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Engineered with</span>
          <span className="text-slate-700 font-semibold">Next.js &amp; Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
