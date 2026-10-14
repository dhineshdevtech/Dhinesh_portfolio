"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "dhineshbuilder@gmail.com";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#f0f6fe] text-slate-900 border-t border-[#d8e6f7] overflow-hidden"
    >
      {/* Apple-style gradient section boundary line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0070f3]/40 to-transparent pointer-events-none" />

      {/* Cyber Azure ambient light orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#00f2fe]/20 via-[#0070f3]/12 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#0070f3]/8 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-10 sm:space-y-12">
        {/* Availability Beacon Pill */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold text-slate-800 bg-white border border-[#cde0f8] shadow-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Available for new projects &amp; engineering opportunities</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <div
          className={`space-y-5 transition-all duration-700 delay-100 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.06]">
            Have a project in mind?
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Let&apos;s build something useful, scalable, and production-ready.
          </p>
        </div>

        {/* Primary Call to Action Button */}
        <div
          className={`transition-all duration-700 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20-%20Let's%20Work%20Together`}
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] hover:from-[#005cd6] hover:to-[#00a8e0] shadow-[0_8px_25px_rgba(0,112,243,0.35)] hover:shadow-[0_12px_35px_rgba(0,112,243,0.45)] transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Let&apos;s Work Together</span>
              <span className="text-white/80 group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold text-slate-800 bg-white border-2 border-[#bfd8f6] hover:border-[#0070f3] hover:text-[#0070f3] shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-700">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Channels & Info Quick Strip */}
        <div
          className={`pt-8 border-t border-[#d8e6f8] transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {/* Email Channel */}
            <a
              href={`mailto:${email}`}
              className="p-4 rounded-xl bg-white/80 border border-[#cde0f8] hover:border-[#0070f3] hover:bg-white text-center transition-all group"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-[#0070f3]">
                Email Directly
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1 truncate">
                {email}
              </div>
            </a>

            {/* LinkedIn Channel */}
            <a
              href="https://www.linkedin.com/in/dhineshdevtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/80 border border-[#cde0f8] hover:border-[#0070f3] hover:bg-white text-center transition-all group"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-[#0070f3]">
                LinkedIn
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1 flex items-center justify-center gap-1">
                <span>Connect with Me</span>
                <span className="text-[#0070f3]">↗</span>
              </div>
            </a>

            {/* GitHub Channel */}
            <a
              href="https://github.com/dhineshdevtech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/80 border border-[#cde0f8] hover:border-[#0070f3] hover:bg-white text-center transition-all group"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-[#0070f3]">
                GitHub
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1 flex items-center justify-center gap-1">
                <span>@dhineshdevtech</span>
                <span className="text-[#0070f3]">↗</span>
              </div>
            </a>
          </div>

          <p className="text-xs text-slate-500 mt-6">
            Based in Tamil Nadu, India • Open to worldwide remote contracts &amp; engineering opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
