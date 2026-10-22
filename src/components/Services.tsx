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
    title: "Flutter Mobile App Development",
    description:
      "Building smooth, high-performance Android mobile applications using a clean Flutter codebase with responsive, pixel-perfect UI and native device performance.",
    tags: ["Flutter", "Dart", "Android", "State Management"],
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
    title: "Modern Full-Stack Web Apps",
    description:
      "Engineering scalable, responsive web platforms using React, Next.js, and TypeScript with fast load times, clean component architecture, and modern UX design.",
    tags: ["Next.js", "React 18", "TypeScript", "Tailwind CSS"],
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
    id: "realtime-tracking",
    number: "03",
    title: "Live GPS & Real-Time Tracking",
    description:
      "Implementing live telemetry engines, bi-directional WebSocket event streams, Google Maps integration, and real-time vehicle/user location monitoring.",
    tags: ["WebSockets", "Google Maps API", "Live Telemetry", "GPS"],
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    id: "backend-architecture",
    number: "04",
    title: "Backend Architecture & APIs",
    description:
      "Designing resilient RESTful APIs, relational & document databases (Supabase, Firebase, Node.js), real-time pub/sub synchronization, and authentication flows.",
    tags: ["Node.js", "Express", "Supabase", "Firebase", "REST APIs"],
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    id: "play-store-launch",
    number: "05",
    title: "Google Play Store Launch",
    description:
      "Complete release pipeline to the Google Play Store — managing Android app bundles (AAB), signing keys, store listing optimization, policy compliance, and version updates.",
    tags: ["Google Play Console", "AAB Bundles", "Keystore Signing", "Release Ops"],
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18l-8-6 8-6v12z"
        />
      </svg>
    ),
  },
  {
    id: "cloud-deployment",
    number: "06",
    title: "Cloud Deployment & Platforms",
    description:
      "Deploying and hosting live web applications and backends on production cloud platforms including Vercel, Render, Supabase, and Firebase with automated CI/CD pipelines.",
    tags: ["Vercel", "Render", "Supabase", "Firebase", "CI/CD"],
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
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
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
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
            Full-Stack Web &amp; Flutter Mobile Engineering
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering cross-platform mobile apps, real-time GPS telemetry pipelines, and cloud-backed web platforms with clean, maintainable architecture.
          </p>
        </div>

        {/* 3x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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

                  <p className="text-sm text-slate-600 leading-relaxed">
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
