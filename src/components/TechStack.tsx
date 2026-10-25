"use client";

import { useState, useEffect, useRef } from "react";

interface TechSkill {
  name: string;
  icon: React.ReactNode;
}

interface TechCategory {
  id: string;
  title: string;
  icon: (cls?: string) => React.ReactNode;
  skills: TechSkill[];
}

const techCategories: TechCategory[] = [
  {
    id: "mobile",
    title: "Mobile",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      {
        name: "Flutter",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M13.8 0L3 10.8l3.3 3.3L20.4 0h-6.6z" fill="#02569B" />
            <path d="M13.8 11.4L7.5 17.7l3.3 3.3 3.3-3.3 6.3-6.3h-6.6z" fill="#0175C2" />
            <path d="M10.8 21l3 3h6.6l-6.3-6.3-3.3 3.3z" fill="#13B9FD" />
          </svg>
        ),
      },
      {
        name: "Dart",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M4.1 3.5L3.5 4.1v10.5l5.8 5.9h10.6l.6-.6V9.3l-5.8-5.8H4.1zm11.2 2.3l3.5 3.5v7.6l-3.5-3.5V5.8zm-7.6 12.4l-2.4-2.4V8.1l2.4 2.4v7.7z"
              fill="#0175C2"
            />
            <path d="M6.5 6.5l4.7 4.7 6.5-6.5-4.7-4.7H6.5z" fill="#00B4AB" />
          </svg>
        ),
      },
      {
        name: "Firebase",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M4.6 17.6L2 3.8a.5.5 0 01.9-.3l4.6 8.7-2.9 5.4z" fill="#FFA000" />
            <path d="M10.4 7.6L8 3.2a.5.5 0 00-.9.1L4.6 17.6l5.8-10z" fill="#F57C00" />
            <path d="M12.9 22.8a1 1 0 001.3 0l7.8-7.8-2.6-13a.5.5 0 00-.9-.2l-5.6 21z" fill="#FFCA28" />
            <path d="M4.6 17.6l8.3 5.2a1 1 0 001.2 0l7.9-7.8-17.4 2.6z" fill="#FFA000" />
          </svg>
        ),
      },
      {
        name: "Provider",
        icon: (
          <svg className="w-4 h-4 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" fill="#38bdf8" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          </svg>
        ),
      },
      {
        name: "Google Maps SDK",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
            <circle cx="12" cy="9" r="2.5" fill="#FFFFFF" />
            <path d="M12 2a7 7 0 00-7 7c0 2.2.9 4.1 2.2 5.5l4.8-12.5z" fill="#4285F4" />
            <path d="M12 2a7 7 0 017 7c0 2.2-.9 4.1-2.2 5.5l-4.8-12.5z" fill="#34A853" />
          </svg>
        ),
      },
      {
        name: "Google Play Console",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M3.6 1.7A1.5 1.5 0 003 3v18a1.5 1.5 0 00.6 1.3l9.8-9.8L3.6 1.7z" fill="#00E3FF" />
            <path d="M16.8 9.1l-3.4 3.4 3.4 3.4 3.9-2.2a1.4 1.4 0 000-2.4l-3.9-2.2z" fill="#FFC800" />
            <path d="M3.6 22.3a1.5 1.5 0 001.9.1l11.3-6.5-3.4-3.4-9.8 9.8z" fill="#FF3A44" />
            <path d="M3.6 1.7l9.8 9.8 3.4-3.4L5.5 1.6a1.5 1.5 0 00-1.9.1z" fill="#00F076" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "web",
    title: "Web & Frontend",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      {
        name: "React 18",
        icon: (
          <svg className="w-4 h-4 text-[#00b4d8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.8" fill="#00b4d8" />
          </svg>
        ),
      },
      {
        name: "Next.js",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" fill="#0f172a" />
            <path d="M8.5 7.5v9M15.5 7.5v9M8.5 7.5l7 9" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path
              d="M4 8h8M8 8v10M13.5 14.5c.8.8 1.8 1.2 3 1.2 1.3 0 2-.6 2-1.5 0-1-.8-1.4-2.2-1.9-1.8-.6-3-1.4-3-3 0-1.7 1.4-2.8 3.5-2.8 1.4 0 2.5.4 3.2 1.1l-1 1.4c-.6-.5-1.4-.8-2.2-.8-1 0-1.7.5-1.7 1.2 0 .8.6 1.2 2 1.7 2 .7 3.2 1.5 3.2 3.2 0 1.9-1.5 3-3.8 3-1.7 0-3-.5-3.8-1.5l1.1-1.3z"
              fill="#ffffff"
            />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9c1.5-3 3.5-3.5 6-1.5 1.5 1.2 2.5 2 4.5 2 3 0 4.5-1.5 5.5-4-1.5 3-3.5 3.5-6 1.5-1.5-1.2-2.5-2-4.5-2-3 0-4.5 1.5-5.5 4zm-4 6c1.5-3 3.5-3.5 6-1.5 1.5 1.2 2.5 2 4.5 2 3 0 4.5-1.5 5.5-4-1.5 3-3.5 3.5-6 1.5-1.5-1.2-2.5-2-4.5-2-3 0-4.5 1.5-5.5 4z"
              fill="#06B6D4"
            />
          </svg>
        ),
      },
      {
        name: "HTML5 / CSS3",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3zm14.3 5h-9l.2 2.5h8.6l-.7 7.5-4.4 1.2-4.4-1.2-.3-3.5h2.5l.1 1.8 2.1.6 2.1-.6.2-2.5H7.7L7 4.5h10.5l-.2 2.5z" fill="#E34F26" />
          </svg>
        ),
      },
      {
        name: "PWA",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#5A0FC8" />
            <path d="M13 3L6 13h5l-1 8 8-11h-5l1-7z" fill="#00F2FE" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7M4 7c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3M4 7h16m-16 5h16"
        />
      </svg>
    ),
    skills: [
      {
        name: "Node.js",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l9 5.2v10.4L12 22.8l-9-5.2V7.2L12 2z" fill="#339933" />
            <path d="M12 6l5.5 3.2v6.4L12 18.8l-5.5-3.2V9.2L12 6z" fill="#ffffff" />
            <path d="M12 8.5l3.2 1.8v3.6L12 15.7l-3.2-1.8v-3.6L12 8.5z" fill="#339933" />
          </svg>
        ),
      },
      {
        name: "Express.js",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#1e293b" />
            <text x="4.5" y="16.5" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">
              ex
            </text>
          </svg>
        ),
      },
      {
        name: "Firebase",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M4.6 17.6L2 3.8a.5.5 0 01.9-.3l4.6 8.7-2.9 5.4z" fill="#FFA000" />
            <path d="M10.4 7.6L8 3.2a.5.5 0 00-.9.1L4.6 17.6l5.8-10z" fill="#F57C00" />
            <path d="M12.9 22.8a1 1 0 001.3 0l7.8-7.8-2.6-13a.5.5 0 00-.9-.2l-5.6 21z" fill="#FFCA28" />
          </svg>
        ),
      },
      {
        name: "Supabase",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M13.5 2.5L2 15.5h10.5L10.5 22.5 22 9.5H11.5l2-7z" fill="#3ECF8E" />
          </svg>
        ),
      },
      {
        name: "WebSockets",
        icon: (
          <svg className="w-4 h-4 text-[#0070f3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 16l-4-4 4-4M17 8l4 4-4 4M14 4l-4 16" />
          </svg>
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 2c-.3 0-5.5 4.5-5.5 11 0 4.5 3.5 7.5 5.5 9 2-1.5 5.5-4.5 5.5-9 0-6.5-5.2-11-5.5-11z" fill="#47A248" />
            <path d="M12 2v20c.5-.4 1.5-1.2 2.2-2.3.8-1.2 1.3-2.6 1.3-4.2 0-3.5-2.2-7.5-3.5-13.5z" fill="#499D4A" />
          </svg>
        ),
      },
      {
        name: "RESTful APIs",
        icon: (
          <svg className="w-4 h-4 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="8" height="5" rx="1.5" />
            <rect x="14" y="5" width="8" height="5" rx="1.5" />
            <rect x="8" y="14" width="8" height="5" rx="1.5" />
            <path d="M6 10v2a2 2 0 002 2h4m6-4v2a2 2 0 01-2 2h-4" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "engineering",
    title: "Software Engineering & Integrations",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    skills: [
      {
        name: "Razorpay SDK",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#0C2340" />
            <path d="M6 19l4.5-14h4l-3 9.5h4.5l-6 4.5z" fill="#3395FF" />
          </svg>
        ),
      },
      {
        name: "Groq & OpenAI APIs",
        icon: (
          <svg className="w-4 h-4 text-[#10a37f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2a10 10 0 0110 10M12 22a10 10 0 01-10-10M2 12a10 10 0 0110-10M22 12a10 10 0 01-10 10" strokeDasharray="3 3" />
          </svg>
        ),
      },
      {
        name: "Git & GitHub",
        icon: (
          <svg className="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        ),
      },
      {
        name: "CI/CD Pipelines",
        icon: (
          <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            <circle cx="12" cy="12" r="3" fill="#34D399" />
          </svg>
        ),
      },
      {
        name: "Clean Architecture",
        icon: (
          <svg className="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="5" rx="1.5" fill="#EEF2FF" />
            <rect x="5" y="10" width="14" height="5" rx="1.5" fill="#E0E7FF" />
            <rect x="7" y="17" width="10" height="5" rx="1.5" fill="#C7D2FE" />
          </svg>
        ),
      },
      {
        name: "Scalable Systems",
        icon: (
          <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="6" rx="2" />
            <rect x="2" y="16" width="20" height="6" rx="2" />
            <path d="M6 8v8M18 8v8" />
            <circle cx="6" cy="5" r="1" fill="#8B5CF6" />
            <circle cx="6" cy="19" r="1" fill="#8B5CF6" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "ai-video",
    title: "AI Video Creation",
    icon: (cls = "w-5 h-5") => (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      {
        name: "Google Vids",
        icon: (
          <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm6 4v8l6-4-6-4z" />
          </svg>
        ),
      },
      {
        name: "Gemini Veo",
        icon: (
          <svg className="w-4 h-4 text-[#8E75FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
          </svg>
        ),
      },
      {
        name: "ChatGPT",
        icon: (
          <svg className="w-4 h-4 text-[#10a37f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2a10 10 0 0110 10M12 22a10 10 0 01-10-10M2 12a10 10 0 0110-10M22 12a10 10 0 01-10 10" strokeDasharray="3 3" />
          </svg>
        ),
      },
      {
        name: "CapCut",
        icon: (
          <svg className="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M4 6l8 6-8 6M20 6l-8 6 8 6" />
          </svg>
        ),
      },
      {
        name: "Edits",
        icon: (
          <svg className="w-4 h-4 text-[#0066ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        ),
      },
    ],
  },
];

interface SecondaryTool {
  name: string;
  icon: React.ReactNode;
}

const secondaryTools: SecondaryTool[] = [
  {
    name: "Postman",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M12 7l4 5-4 5-1.5-1.5L13 12l-2.5-3.5L12 7z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L24 22H0L12 2z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: "Render",
    icon: (
      <svg className="w-3.5 h-3.5 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9z" fill="#e0f2fe" />
      </svg>
    ),
  },
  {
    name: "Bluetooth Web APIs",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#0A84FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" />
      </svg>
    ),
  },
  {
    name: "JWT Authentication",
    icon: (
      <svg className="w-3.5 h-3.5 text-fuchsia-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#fae8ff" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M8 2h4v4H8z" fill="#F24E1E" />
        <path d="M12 2h4a4 4 0 010 8h-4V2z" fill="#FF7262" />
        <path d="M8 6h4v4H8z" fill="#A259FF" />
        <path d="M8 10h4v4H8z" fill="#1ABCFE" />
        <circle cx="14" cy="12" r="2" fill="#1ABCFE" />
        <path d="M8 14h4v4a4 4 0 01-4-4z" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    name: "Android Studio",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3DDC84" />
        <circle cx="8.5" cy="11.5" r="1" fill="#ffffff" />
        <circle cx="15.5" cy="11.5" r="1" fill="#ffffff" />
        <path d="M6 7l2 3m10-3l-2 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "VS Code",
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#007ACC" />
        <path d="M17 3l-8 7-4-3-2 1.5v11l2 1.5 4-3 8 7 4-2V5l-4-2z" fill="#ffffff" transform="scale(0.8) translate(3,3)" />
      </svg>
    ),
  },
  {
    name: "AI-Assisted Engineering",
    icon: (
      <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
      </svg>
    ),
  },
];

export default function TechStack() {
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
      id="skills"
      className="relative py-12 sm:py-14 lg:py-16 px-6 sm:px-8 lg:px-12 bg-white text-slate-900 border-t border-slate-200/80 overflow-hidden"
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
            <span>TECHNICAL ARSENAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Languages, Frameworks &amp; Infrastructure
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Core technologies, generative video tools, and operational frameworks I rely on to build scalable software and commercial video campaigns.
          </p>
        </div>

        {/* 2x2 Tech Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {techCategories.map((category, index) => (
            <div
              key={category.id}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`h-full flex flex-col transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0066ff] hover:shadow-md transition-[border-color,box-shadow] duration-200 space-y-5">
                
                {/* Category Header with Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] group-hover:bg-[#0066ff] group-hover:text-white transition-[background-color,color] duration-200">
                    {category.icon("w-4.5 h-4.5")}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#0066ff] transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Tech Pills Collection */}
                <div className="flex flex-wrap gap-2 pt-1" aria-label={`${category.title} skills`}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 hover:border-[#0066ff]/50 hover:bg-blue-50/40 transition-[background-color,border-color] duration-150 select-none"
                    >
                      <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 'Also working with' Strip */}
        <div
          className={`pt-2 transition-all duration-500 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="p-5 sm:p-6 rounded-xl bg-slate-50/80 border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-center sm:text-left">
            <span className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide whitespace-nowrap flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0066ff]" />
              Also working with:
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
              {secondaryTools.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 transition-colors select-none"
                >
                  <span className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    {tool.icon}
                  </span>
                  <span>{tool.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
