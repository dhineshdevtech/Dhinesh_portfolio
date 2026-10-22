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
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
    title: "Testing & Reliability",
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
    title: "Performance & UX",
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
    title: "CI/CD & Releases",
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
      className="relative py-12 sm:py-14 lg:py-16 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-6 sm:space-y-8">
          <div
            className={`space-y-3 max-w-2xl mx-auto transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0066ff] flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
              <span>ENGINEERING RIGOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              How I Engineer Software
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Beyond building screens — the architectural disciplines and engineering standards behind every app I ship.
            </p>
          </div>

          {/* 6 Practices in a Single Responsive Row */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 justify-items-center items-start pt-2 transition-all duration-700 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {engineeringPractices.map((practice, index) => (
              <div
                key={practice.id}
                style={{ transitionDelay: `${index * 50}ms` }}
                className="group flex flex-col items-center gap-3 cursor-default"
              >
                {/* Node Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-[#0066ff] group-hover:bg-blue-50/50 group-hover:border-[#0066ff]/40 transition-[background-color,border-color,color] duration-200 shadow-2xs">
                  {practice.icon("w-6 h-6 sm:w-7 sm:h-7")}
                </div>

                {/* Practice Label */}
                <span className="text-xs sm:text-sm font-semibold text-slate-800 text-center tracking-tight group-hover:text-[#0066ff] transition-colors leading-snug">
                  {practice.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Automation Callout Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200 max-w-3xl mx-auto transition-all duration-500 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0066ff]">
              ADDITIONAL SPECIALIZATION
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              AI Integrations &amp; Workflow Automations
            </h3>

            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Alongside core mobile and web applications, I build lightweight AI workflows and business automations that eliminate manual overhead and speed up data processing.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066ff] hover:text-[#0052cc] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-md transition-colors cursor-pointer"
              >
                <span>Discuss an automation or AI feature</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* GitHub Proof Banner */}
        <div
          className={`text-center space-y-4 max-w-xl mx-auto transition-all duration-500 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Review Source Repositories &amp; Commits
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            All featured projects feature clean git commit histories, semantic branch architecture, and verified codebases on GitHub.
          </p>

          <div className="pt-1">
            <a
              href="https://github.com/dhineshdevtech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-900 bg-white border border-slate-300 hover:border-[#0066ff] hover:text-[#0066ff] shadow-xs hover:shadow-sm transition-[border-color,color,box-shadow,transform] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>Visit GitHub Profile</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
