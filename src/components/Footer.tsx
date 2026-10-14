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
    <footer className="relative bg-white border-t border-[#dce8f8] py-14 px-6 sm:px-8 lg:px-12 text-slate-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2.5 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#edf4fd] border border-[#d8e6f8] flex items-center justify-center font-black text-slate-900 text-sm shadow-2xs">
              D<span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] ml-0.5" />
            </span>
            <span className="font-extrabold text-slate-900 tracking-tight text-lg">
              Dhinesh<span className="text-[#0070f3]">.</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
            Web &amp; Mobile Application Developer • Crafting scalable modern web apps and high-performance cross-platform mobile experiences.
          </p>
        </div>

        {/* Center / Right: Social Links & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
            <a
              href="https://github.com/dhineshdevtech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0070f3] transition-colors"
            >
              GitHub ↗
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://www.linkedin.com/in/dhineshdevtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0070f3] transition-colors"
            >
              LinkedIn ↗
            </a>
            <span className="text-slate-300">•</span>
            <Link
              href="/contact"
              className="hover:text-[#0070f3] transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-[#f0f6fe] border border-[#d8e6f8] hover:bg-[#e4effd] hover:text-[#0070f3] transition-all cursor-pointer shadow-2xs"
          >
            <span>Back to top</span>
            <span className="text-sm">↑</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#edf3fb] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© 2026 Dhinesh. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Built with</span>
          <span className="text-[#0070f3] font-semibold">Next.js &amp; Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
