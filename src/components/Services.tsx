"use client";

import { useState, useEffect, useRef } from "react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: (cls?: string) => React.ReactNode;
}

const servicesList: ServiceItem[] = [
  {
    id: "flutter-mobile",
    number: "01",
    title: "Flutter Mobile Apps",
    description:
      "High-performance Android & cross-platform mobile apps, built for scale and published directly to the Google Play Store.",
    tags: ["Flutter", "Dart", "Android", "Google Play Console"],
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "fullstack-web",
    number: "02",
    title: "Full-Stack Web Apps",
    description:
      "Fast, responsive web applications and modern dashboards built with clean architecture, high performance, and SEO in mind.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "ai-video-ads",
    number: "03",
    title: "Realistic AI Video Ads",
    description:
      "High-converting 9:16 vertical video commercials and promotional campaigns engineered to drive real product sales.",
    tags: ["Google Vids", "Gemini Veo", "ChatGPT", "CapCut", "Edits"],
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "backend-cloud",
    number: "04",
    title: "Backend & Real-Time Cloud",
    description:
      "Scalable REST APIs, live GPS telemetry, and cloud database architectures with instant real-time data synchronization.",
    tags: ["Node.js", "Supabase", "Firebase", "WebSockets"],
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function Services() {
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
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-12 sm:py-14 lg:py-16 px-6 sm:px-8 lg:px-12 bg-slate-50/60 text-slate-900 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div
          className={`space-y-3 max-w-3xl text-left transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0066ff] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
            <span>CORE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Software Development &amp; AI Video Creation
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            I develop production-ready mobile and web applications that scale, and produce realistic AI video commercials that drive real sales.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`h-full flex flex-col transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0066ff] hover:shadow-md transition-[border-color,box-shadow] duration-200 overflow-hidden space-y-5">
                {/* Top Row: Index Badge & Clean Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {service.number}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] group-hover:bg-[#0066ff] group-hover:text-white transition-[background-color,color] duration-200">
                    {service.icon("w-5 h-5")}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#0066ff] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-3 flex flex-wrap gap-1.5 border-t border-slate-100">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
