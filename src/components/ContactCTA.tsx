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
      className="relative py-12 sm:py-14 lg:py-16 px-6 sm:px-8 lg:px-12 bg-slate-50/70 text-slate-900 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Availability Beacon Pill */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 bg-white border border-slate-200 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for new projects &amp; engineering opportunities</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <div
          className={`space-y-3 transition-all duration-700 delay-100 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Have a project in mind?
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Let&apos;s build something resilient, scalable, and production-ready.
          </p>
        </div>

        {/* Primary Call to Action Button */}
        <div
          className={`transition-all duration-700 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20-%20Let's%20Work%20Together`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#0066ff] hover:bg-[#0052cc] shadow-xs hover:shadow-md transition-[background-color,box-shadow,transform] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] cursor-pointer group"
            >
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Let&apos;s Work Together</span>
              <span className="text-white/80 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-live="polite"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:border-[#0066ff] hover:text-[#0066ff] shadow-xs transition-[border-color,color,background-color,transform] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] cursor-pointer"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-700 font-bold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Direct Channels Quick Grid */}
        <div
          className={`pt-6 border-t border-slate-200/90 transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {/* Email Channel */}
            <a
              href={`mailto:${email}`}
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#0066ff] text-center transition-[border-color,box-shadow] shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] group"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-[#0066ff]">
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
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#0066ff] text-center transition-[border-color,box-shadow] shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] group"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-[#0066ff]">
                LinkedIn
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1 flex items-center justify-center gap-1">
                <span>Connect Profile</span>
                <span className="text-[#0066ff]" aria-hidden="true">↗</span>
              </div>
            </a>

            {/* GitHub Channel */}
            <a
              href="https://github.com/dhineshdevtech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#0066ff] text-center transition-[border-color,box-shadow] shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] group"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-[#0066ff]">
                GitHub
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1 flex items-center justify-center gap-1">
                <span>@dhineshdevtech</span>
                <span className="text-[#0066ff]" aria-hidden="true">↗</span>
              </div>
            </a>
          </div>

          <p className="text-xs text-slate-500 mt-5">
            Based in Tamil Nadu, India • Open to remote worldwide engineering opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
