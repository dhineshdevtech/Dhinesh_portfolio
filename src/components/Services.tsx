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
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "payment-gateways",
    number: "04",
    title: "Payment Gateways & Integrations",
    description:
      "Integrating secure payment checkout flows like Razorpay and Stripe, third-party REST APIs, automated transaction handling, and robust security verification.",
    tags: ["Razorpay", "Stripe", "REST APIs", "Secure Checkout"],
    icon: (cls = "w-6 h-6") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
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
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      className="relative py-12 sm:py-14 lg:py-16 px-6 sm:px-8 lg:px-12 bg-[#f8fbfe] text-slate-900 border-t border-[#d5e5f8] overflow-hidden"
    >
      {/* Apple-style gradient section boundary line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0070f3]/35 to-transparent pointer-events-none" />

      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#00f2fe]/8 via-[#0070f3]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#0070f3]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header (Down to Up Entrance Animation) */}
        <div
          className={`space-y-4 max-w-3xl text-left transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0070f3] flex items-center gap-2.5">
            <span className="text-slate-400">02</span>
            <span>SERVICES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
            Full-Stack Web &amp; Flutter Mobile Developer
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Building high-performance Flutter mobile apps, real-time tracking platforms, and production cloud systems with clean, scalable architecture.
          </p>
        </div>

        {/* 3x2 Services Grid (Apple Crisp Border & Staggered Elevation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              style={{ transitionDelay: `${index * 100 + 80}ms` }}
              className={`h-full flex flex-col transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="group relative flex flex-col justify-between h-full p-7 sm:p-8 rounded-2xl bg-white border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 hover:border-[#0070f3] active:border-[#0070f3] shadow-[0_2px_8px_rgba(15,23,42,0.05),0_12px_30px_rgba(0,112,243,0.06)] hover:shadow-[0_4px_16px_rgba(15,23,42,0.08),0_20px_45px_rgba(0,112,243,0.16)] active:shadow-[0_2px_10px_rgba(0,112,243,0.25)] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] cursor-default overflow-hidden select-none space-y-6">
                
                {/* Top Row: Index Number Pill & Icon Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black tracking-wider text-[#0070f3] bg-[#edf4fd] border border-[#cde0f8] px-2.5 py-1 rounded-lg shadow-2xs">
                    {service.number}
                  </span>

                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#eaf3fe] to-[#edf4fd] border border-[#cde0f8] flex items-center justify-center text-[#0070f3] group-hover:scale-110 group-hover:bg-[#0070f3] group-hover:text-white transition-all duration-300 shadow-2xs">
                    {service.icon("w-5 h-5 transition-transform duration-300 group-hover:scale-110")}
                  </div>
                </div>

                {/* Middle: Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-[22px] font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#0070f3] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-[#edf4fc]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold text-slate-600 bg-[#f0f6fe] border border-[#dce8f8]"
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
