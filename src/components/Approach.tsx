"use client";

import { useState, useEffect, useRef } from "react";

interface PracticeItem {
  id: string;
  title: string;
  icon: (cls?: string) => React.ReactNode;
}

const engineeringPractices: PracticeItem[] = [
  {
    id: "clean-architecture",
    title: "Clean Architecture",
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "scalable-systems",
    title: "Scalable Systems",
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="6" cy="6" r="3" strokeWidth={2} />
        <circle cx="18" cy="6" r="3" strokeWidth={2} />
        <circle cx="12" cy="18" r="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 7.5l4 7M15.5 7.5l-4 7M9 6h6" />
      </svg>
    ),
  },
  {
    id: "api-integration",
    title: "API Integration",
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v4M15 3v4M7 7h10a2 2 0 012 2v4a6 6 0 01-6 6h-2a6 6 0 01-6-6V9a2 2 0 012-2zM12 19v4"
        />
      </svg>
    ),
  },
  {
    id: "testing",
    title: "Testing",
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 7H9L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "performance",
    title: "Performance",
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l2.5 2.5M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>
    ),
  },
  {
    id: "cicd",
    title: "CI/CD",
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      ref={sectionRef}
      id="approach"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 border-t border-[#d8e6f7] overflow-hidden"
    >
      {/* Apple-style gradient section boundary line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0070f3]/35 to-transparent pointer-events-none" />

      {/* Subtle background ambient cyber glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#00f2fe]/8 via-[#0070f3]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
        {/* ========================================================================= */}
        {/* 1. 04 APPROACH: How I Engineer Software                                   */}
        {/* ========================================================================= */}
        <div className="text-center space-y-12">
          {/* Section Header */}
          <div
            className={`space-y-4 max-w-2xl mx-auto transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0070f3] flex items-center justify-center gap-2">
              <span className="text-slate-400">04</span>
              <span>APPROACH</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              How I Engineer Software
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Beyond building screens — the practices behind every app I ship.
            </p>
          </div>

          {/* 6 Circular Practices in a Single Responsive Row */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center items-start pt-4 transition-all duration-700 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {engineeringPractices.map((practice, index) => (
              <div
                key={practice.id}
                style={{ transitionDelay: `${index * 60 + 100}ms` }}
                className="group flex flex-col items-center gap-3.5 cursor-default"
              >
                {/* Circular Icon Node */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#f0f6fe] border border-[#cde0f8] flex items-center justify-center text-slate-700 group-hover:text-[#0070f3] group-hover:bg-white group-hover:border-[#0070f3] group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(0,112,243,0.25)] transition-all duration-300 shadow-2xs">
                  {practice.icon("w-7 h-7 transition-transform duration-300 group-hover:scale-105")}
                </div>

                {/* Practice Label */}
                <span className="text-xs sm:text-sm font-bold text-slate-800 text-center tracking-tight group-hover:text-[#0070f3] transition-colors leading-snug">
                  {practice.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ALSO OFFERED: AI & Business Automation                                 */}
        {/* ========================================================================= */}
        <div
          className={`text-center space-y-5 max-w-2xl mx-auto transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="font-mono text-xs font-bold tracking-widest uppercase text-[#0070f3]">
            ALSO OFFERED
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            AI &amp; Business Automation
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Alongside app development, I build lightweight AI chatbots and automation workflows for businesses that want to cut down repetitive tasks and missed leads.
          </p>

          {/* Clean Inline Bullets */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-700 pt-1">
            <span>AI Chatbot Integration</span>
            <span className="text-[#0070f3] font-bold">•</span>
            <span>Business Automation</span>
            <span className="text-[#0070f3] font-bold">•</span>
            <span>Analytics &amp; Insights</span>
          </div>

          {/* Minimal Text Link with Arrow */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#0070f3] hover:text-[#005cd6] hover:underline underline-offset-4 transition-all cursor-pointer group"
            >
              <span>Ask about AI &amp; automation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. GITHUB PROOF BANNER: Want to see how I build?                         */}
        {/* ========================================================================= */}
        <div
          className={`text-center space-y-5 max-w-xl mx-auto transition-all duration-700 delay-400 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* GitHub Octocat Vector Logo */}
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-[#f0f6fe] border border-[#cde0f8] flex items-center justify-center text-slate-900 shadow-2xs hover:scale-110 hover:text-[#0070f3] hover:border-[#0070f3] transition-all">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Want to see how I build?
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore my GitHub for projects, code, experiments, and development work.
          </p>

          <div className="pt-2">
            <a
              href="https://github.com/dhineshbuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] hover:from-[#005cd6] hover:to-[#00a8e0] shadow-[0_6px_20px_rgba(0,112,243,0.35)] hover:shadow-[0_8px_25px_rgba(0,112,243,0.45)] transition-all hover:scale-[1.03] active:scale-[0.98] group cursor-pointer"
            >
              <span>Visit My GitHub</span>
              <span className="text-white/90 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
