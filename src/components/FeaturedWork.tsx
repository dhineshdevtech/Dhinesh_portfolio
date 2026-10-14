"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryKey } from "@/data/projectsData";

interface FeaturedProject {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  backdropBg: string;
  badgeBg: string;
  badgeLabel?: string;
  liveUrl?: string;
  githubUrl?: string;
  type: "mpnmjec" | "6ixquest" | "canteen" | "aira";
  categories: CategoryKey[];
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "mpnmjec-buses",
    slug: "mpnmjec-bus-tracker",
    category: "CAMPUS TRANSIT • MOBILE",
    title: "MPNMJEC Bus Tracking Platform",
    description:
      "A complete college transport ecosystem connecting a live Flutter student app, driver companion, and React admin dashboard with WebSocket real-time fleet GPS tracking.",
    tags: ["Flutter", "React", "Node.js", "WebSockets", "Google Maps API"],
    backdropBg: "from-sky-100/70 via-[#f0f6fe] to-blue-50/60 border-sky-200/70",
    badgeBg: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    badgeLabel: "🏆 Live on Google Play Store",
    liveUrl: "https://play.google.com/store/apps/details?id=com.sixmindslabs.mpnmjecbustracker.student",
    githubUrl: "https://github.com/6ixmindslabs-hue/MPNMJBUSES",
    type: "mpnmjec",
    categories: ["mobile"],
  },
  {
    id: "6ixquest-ai",
    slug: "6ixquest-ai",
    category: "EDUTECH • AI PLATFORM",
    title: "6ixQuest – AI Quiz & Assessment Hub",
    description:
      "AI-assisted assessment platform allowing educators to generate quizzes with Groq AI, distribute public assessment links, and inspect candidate performance analytics in real time.",
    tags: ["React 18", "TypeScript", "Groq AI", "Supabase", "Vite"],
    backdropBg: "from-blue-100/60 via-[#f0f6fe] to-indigo-50/60 border-blue-200/70",
    badgeBg: "bg-blue-50 text-[#0070f3] border border-blue-200",
    badgeLabel: "⚡ Groq AI + Supabase",
    liveUrl: "https://6ix-quest.vercel.app",
    githubUrl: "https://github.com/dhineshdevtech/6ixQuest",
    type: "6ixquest",
    categories: ["websites"],
  },
  {
    id: "canteen-pos",
    slug: "appu-canteen-pos",
    category: "CANTEEN POS • BLUETOOTH BLE",
    title: "Appu Canteen – Offline-First POS",
    description:
      "High-speed offline-friendly canteen billing system engineered for rapid counter checkout, live sales analytics, inventory management, and Bluetooth thermal printing.",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "PWA", "Bluetooth API"],
    backdropBg: "from-amber-100/60 via-[#fffcf5] to-orange-50/60 border-amber-200/70",
    badgeBg: "bg-amber-50 text-amber-800 border border-amber-200",
    badgeLabel: "🧾 Bluetooth Thermal Printing",
    liveUrl: "https://offline-canteen-billing-system.vercel.app/",
    githubUrl: "https://github.com/dhineshdevtech/OFFLINE-CANTEEN-BILLING-SYSTEM",
    type: "canteen",
    categories: ["business"],
  },
  {
    id: "aira-assistant",
    slug: "aira-copilot",
    category: "OS AUTOMATION • ANDROID KOTLIN",
    title: "Aira – Android AI Voice Assistant",
    description:
      "Android-native Kotlin AI assistant prototype capturing voice commands via 'Hey Aira' wake phrase, structured JSON intent parsing, and device accessibility automation.",
    tags: ["Android Kotlin", "Node.js", "Accessibility APIs", "Room DB"],
    backdropBg: "from-purple-100/60 via-[#faf7ff] to-slate-50/60 border-purple-200/70",
    badgeBg: "bg-purple-50 text-purple-800 border border-purple-200",
    badgeLabel: "🎙️ Native Voice Automation",
    liveUrl: "https://github.com/dhineshdevtech/Aira",
    githubUrl: "https://github.com/dhineshdevtech/Aira",
    type: "aira",
    categories: ["mobile"],
  },
];

function ProjectVisualPreview({ type }: { type: FeaturedProject["type"] }) {
  if (type === "mpnmjec") {
    return (
      <div className="relative w-full h-full select-none">
        <Image
          src="/projects/mpnmjec/mpnmjec_showcase_light.webp"
          alt="MPNMJEC Bus Tracking Ecosystem - Combined Multi-App Showcase"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    );
  }

  if (type === "6ixquest") {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4 select-none">
        {/* Main Desktop Screen */}
        <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[180px] sm:h-[205px] rounded-xl overflow-hidden border-2 border-[#d0e2f8] shadow-[0_8px_30px_rgba(0,112,243,0.12)] bg-white">
          {/* Browser Header Bar */}
          <div className="h-5 bg-slate-100 px-2.5 flex items-center justify-between border-b border-slate-200">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[8px] font-mono font-medium text-slate-500">6ix-quest.vercel.app</span>
            <span className="w-2" />
          </div>
          <div className="relative w-full h-[calc(100%-20px)]">
            <Image
              src="/projects/6ixquest/home.webp"
              alt="6ixQuest AI Quiz Platform"
              fill
              className="object-cover object-top"
              sizes="400px"
            />
          </div>
        </div>

        {/* Floating Mobile Login Preview (Right Side) */}
        <div className="absolute -bottom-1 right-6 sm:right-10 w-[75px] sm:w-[90px] h-[135px] sm:h-[150px] rounded-xl overflow-hidden border-2 border-cyan-300 shadow-xl bg-white z-10 hidden xs:block">
          <Image
            src="/projects/6ixquest/login.webp"
            alt="6ixQuest Authentication Screen"
            fill
            className="object-cover object-top"
            sizes="90px"
          />
        </div>
      </div>
    );
  }

  if (type === "canteen") {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4 select-none">
        {/* Main Billing POS Screen */}
        <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[180px] sm:h-[205px] rounded-xl overflow-hidden border-2 border-amber-300/80 shadow-[0_8px_30px_rgba(245,158,11,0.15)] bg-white">
          {/* POS Window Header */}
          <div className="h-5 bg-amber-50 px-2.5 flex items-center justify-between border-b border-amber-200">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[8px] font-mono font-bold text-amber-800">Appu Canteen POS • Counter</span>
            <span className="w-2" />
          </div>
          <div className="relative w-full h-[calc(100%-20px)]">
            <Image
              src="/projects/canteen/01-billing-screen.webp"
              alt="Appu Canteen POS Billing Screen"
              fill
              className="object-cover object-top"
              sizes="400px"
            />
          </div>
        </div>

        {/* Floating Sales Dashboard Snippet */}
        <div className="absolute -bottom-1 right-6 sm:right-10 w-[120px] sm:w-[145px] h-[85px] sm:h-[95px] rounded-xl overflow-hidden border-2 border-emerald-300 shadow-xl bg-white z-10 hidden xs:block">
          <Image
            src="/projects/canteen/02-sales-dashboard.webp"
            alt="Appu Canteen Sales Dashboard"
            fill
            className="object-cover object-top"
            sizes="150px"
          />
        </div>
      </div>
    );
  }

  // Aira
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-3 px-4 py-4 select-none">
      {/* Android Device 1: Dashboard */}
      <div className="relative w-[110px] sm:w-[135px] h-[185px] sm:h-[205px] rounded-2xl overflow-hidden border-2 border-purple-200/90 shadow-[0_8px_25px_rgba(168,85,247,0.15)] bg-white p-1 flex items-center justify-center">
        <Image
          src="/projects/aira/dashboard-preview-light.svg"
          alt="Aira Voice Assistant Dashboard"
          fill
          className="object-contain p-0.5"
          sizes="140px"
        />
      </div>

      {/* Android Device 2: Confirmation Dialog */}
      <div className="relative w-[110px] sm:w-[135px] h-[185px] sm:h-[205px] rounded-2xl overflow-hidden border-2 border-sky-200/90 shadow-[0_8px_25px_rgba(0,194,255,0.18)] bg-white p-1 flex items-center justify-center -translate-y-1">
        <Image
          src="/projects/aira/confirmation-preview-light.svg"
          alt="Aira Voice Action Confirmation Flow"
          fill
          className="object-contain p-0.5"
          sizes="140px"
        />
      </div>
    </div>
  );
}

export default function FeaturedWork() {
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
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 border-t border-[#d5e5f8] overflow-hidden"
    >
      {/* Apple-style gradient section boundary line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0070f3]/35 to-transparent pointer-events-none" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-gradient-to-tr from-[#00f2fe]/10 via-[#0070f3]/6 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0070f3]/6 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Header (Down to Up Entrance Animation) */}
        <div
          className={`space-y-4 max-w-3xl text-left transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0070f3] flex items-center gap-2.5">
            <span className="text-slate-400">01</span>
            <span>FEATURED WORK</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
            Real Products, Shipped
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            <span className="text-[#0070f3] font-bold">12+</span> production-ready web and mobile
            applications built as a software engineer — from a live Google Play Store bus tracking
            system to AI assessment engines and offline-first POS counters. Here&apos;s some of the strongest work.
          </p>
        </div>

        {/* 2x2 Project Cards Grid (Staggered Down to Up Entrance Animation) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${index * 130 + 100}ms` }}
              className={`h-full flex flex-col transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div
                className="group relative flex flex-col h-full rounded-2xl bg-white border-2 border-[#bfd8f6] ring-1 ring-slate-900/5 hover:border-[#0070f3] active:border-[#0070f3] shadow-[0_2px_8px_rgba(15,23,42,0.05),0_14px_36px_rgba(0,112,243,0.09)] hover:shadow-[0_4px_14px_rgba(15,23,42,0.08),0_24px_50px_rgba(0,112,243,0.18)] active:shadow-[0_2px_10px_rgba(0,112,243,0.25)] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] cursor-pointer overflow-hidden select-none"
              >
              {/* TOP PREVIEW AREA (Mockups + Pinned Category Pill) */}
              <div
                className={`relative h-64 sm:h-72 w-full bg-gradient-to-b ${project.backdropBg} border-b-2 border-[#d2e4f8] flex items-center justify-center overflow-hidden`}
              >
                {/* Pinned Category Tag Badge (Top-Left) */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
                  <span
                    className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase shadow-xs bg-white/95 text-slate-800 border border-[#d8e6f8]"
                  >
                    {project.category}
                  </span>

                  {project.badgeLabel && (
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide shadow-2xs ${project.badgeBg}`}
                    >
                      {project.badgeLabel}
                    </span>
                  )}
                </div>

                {/* Real Screenshot Preview */}
                <ProjectVisualPreview type={project.type} />
              </div>

              {/* BOTTOM CONTENT AREA */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-5 text-left bg-white">
                <div className="space-y-2.5">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#0070f3] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl text-xs font-semibold text-slate-700 bg-[#f0f6fe] border border-[#dce8f8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link Bar */}
                <div className="pt-3 flex items-center justify-between border-t border-[#edf4fc]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0070f3] transition-colors"
                  >
                    <span>View Case Study</span>
                    <span>↗</span>
                  </Link>

                  <a
                    href={project.liveUrl || project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold text-[#0070f3] hover:text-[#0052cc] transition-colors group-hover:gap-2.5 duration-200"
                  >
                    <span>{project.liveUrl ? "Live Demo" : "View Source"}</span>
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* BOTTOM CTA: "See All My Projects" button (Down to Up Entrance Animation) */}
        <div
          className={`pt-6 flex justify-center transition-all duration-700 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#0070f3] to-[#00c2ff] hover:from-[#005cd6] hover:to-[#00a8e0] shadow-[0_8px_30px_rgba(0,112,243,0.35)] hover:shadow-[0_12px_40px_rgba(0,194,255,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>See All My Projects (13+)</span>
            <span className="ml-2 text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
