export type CategoryKey = "mobile" | "websites" | "business";

export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  categoryKey: CategoryKey;
  subcategoryKey: string;
  subcategoryTitle: string;
  badge: string;
  badgeColor: string;
  thumbnail: string;

  // Project Details Box
  details: {
    type: string;
    duration: string;
    role: string;
    status: string;
    architecture: string;
    clientOrContext: string;
  };

  // Project Overview
  overview: {
    challenge: string;
    solution: string;
    impact: string;
  };

  // Core Features
  coreFeatures: {
    title: string;
    description: string;
  }[];

  // Project Gallery
  gallery: {
    url: string;
    caption: string;
    alt: string;
  }[];

  // Technologies & Skills Used
  skillsUsed: {
    group: string;
    skills: string[];
  }[];

  // Project Links
  links: {
    playStore?: string;
    liveUrl?: string;
    githubUrl?: string;
  };
}

export interface SubcategoryMeta {
  key: string;
  title: string;
  description: string;
  projectCount: number;
  projectSlugs: string[];
}

export interface CategoryData {
  key: CategoryKey;
  title: string;
  description: string;
  pitch: string;
  pitchCta: string;
  subcategories: SubcategoryMeta[];
}

export const CATEGORIES_DATA: Record<CategoryKey, CategoryData> = {
  mobile: {
    key: "mobile",
    title: "Mobile Apps",
    description: "Cross-platform mobile apps and native device automation built for high performance and everyday use.",
    pitch: "Looking to build a high-performance Flutter or native Android mobile application?",
    pitchCta: "See my mobile app services",
    subcategories: [
      {
        key: "campus-transit",
        title: "Campus Transit",
        description: "Live vehicle GPS telemetry, student arrival tracking, and driver trip companions.",
        projectCount: 2,
        projectSlugs: ["mpnmjec-bus-tracker", "mpnmjec-driver-app"],
      },
      {
        key: "native-automation",
        title: "Native OS Automation",
        description: "Voice-driven mobile automation, accessibility service hooks, and structured LLM intent execution.",
        projectCount: 1,
        projectSlugs: ["aira-copilot"],
      },
    ],
  },
  websites: {
    key: "websites",
    title: "Web Platforms",
    description: "Modern web platforms, high-throughput generative AI engines, and institutional systems.",
    pitch: "Looking to build an AI platform, institutional portal, or full-stack web application?",
    pitchCta: "Discuss your web product",
    subcategories: [
      {
        key: "campus-platforms",
        title: "Campus Platforms",
        description: "Integrated institutional web platforms for fleet dispatch, biometric attendance, and department financial ledgers.",
        projectCount: 3,
        projectSlugs: ["mpnmjec-dispatch-console", "mpnmjec-attendance-system", "mpnmjec-fine-management"],
      },
      {
        key: "edutech",
        title: "EduTech",
        description: "AI-assisted exam synthesis, instant quiz generation, and live candidate assessment rooms.",
        projectCount: 1,
        projectSlugs: ["6ixquest-ai"],
      },
      {
        key: "conversational-ai",
        title: "Conversational AI & CRM",
        description: "Autonomous WhatsApp Web lead qualification agents and real-time CRM dashboards.",
        projectCount: 1,
        projectSlugs: ["fusion-ai-crm"],
      },
      {
        key: "corporate-agency",
        title: "Corporate & Agency Web",
        description: "Regulatory compliance portals and digital agency showcase platforms.",
        projectCount: 2,
        projectSlugs: ["aletheia-compliance", "zapple-digital"],
      },
    ],
  },
  business: {
    key: "business",
    title: "Business Software",
    description: "Offline-first point of sale registers, hardware peripheral integrations, and enterprise billing systems.",
    pitch: "Need an offline-first POS, Bluetooth thermal printing, or commercial billing software?",
    pitchCta: "Explore business solutions",
    subcategories: [
      {
        key: "canteen-pos",
        title: "Canteen POS",
        description: "High-speed counter billing with zero-downtime offline storage and Bluetooth thermal receipt printing.",
        projectCount: 1,
        projectSlugs: ["appu-canteen-pos"],
      },
      {
        key: "commercial-laundry",
        title: "Commercial Laundry POS",
        description: "Enterprise billing monorepos and cloud point-of-sale receipt generators for laundry services.",
        projectCount: 2,
        projectSlugs: ["bubbleworks-pos", "invoice-generator"],
      },
    ],
  },
};

export const PROJECTS_DATA: Record<string, ProjectDetail> = {
  // --------------------------------------------------------------------------
  // 1. MOBILE -> CAMPUS TRANSIT
  // --------------------------------------------------------------------------
  "mpnmjec-bus-tracker": {
    slug: "mpnmjec-bus-tracker",
    title: "MPNMJEC Student Bus Tracker",
    tagline: "Live transit tracking platform connecting 1,000+ students with real-time GPS bus arrivals over WebSockets.",
    categoryKey: "mobile",
    subcategoryKey: "campus-transit",
    subcategoryTitle: "Campus Transit",
    badge: "🏆 Live on Google Play Store",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    thumbnail: "/projects/mpnmjec/mpnmjec_combined_showcase.webp",
    details: {
      type: "Live Production Flutter App",
      duration: "August 2025 – Present",
      role: "Lead Mobile & Backend Developer",
      status: "Live in Production",
      architecture: "Flutter Mobile (Dart), Google Maps SDK, Node.js WebSocket Engine, Supabase",
      clientOrContext: "MPNMJEC Engineering College / 6ixminds Labs",
    },
    overview: {
      challenge:
        "College students routinely faced severe uncertainty regarding daily bus arrival times, unexpected transit delays, and multi-district route changes, resulting in hours of wasted stop wait times.",
      solution:
        "Engineered an official student mobile tracking application published on Google Play. Features live bus discovery, animated vehicle map markers, arrival countdown timers, and emergency route push alerts.",
      impact:
        "Active across 1,000+ daily student commuters, slashing roadside bus stop wait times by over 80% while restoring transit predictability across the college fleet.",
    },
    coreFeatures: [
      {
        title: "Live Bus Discovery",
        description: "Instantly view all currently running buses without needing to select complicated origin and destination forms.",
      },
      {
        title: "Real-Time Google Maps Marker Interpolation",
        description: "Smooth coordinate smoothing and polyline rendering updating at sub-second latency.",
      },
      {
        title: "Stop Timetable & ETA",
        description: "Dynamic estimated arrival timestamps tailored to the student's designated boarding stop.",
      },
      {
        title: "Emergency Broadcast Alerts",
        description: "Instant push notifications for sudden breakdown notices, driver substitutions, or weather delays.",
      },
    ],
    gallery: [
      {
        url: "/projects/mpnmjec/mpnmjec_combined_showcase.webp",
        caption: "Cross-Platform Transport Ecosystem: Student Mobile App, Driver Companion, and Admin Map",
        alt: "MPNMJEC Combined Showcase",
      },
      {
        url: "/projects/mpnmjec/student_home_clean.webp",
        caption: "Student Flutter Mobile Interface displaying bus schedule, active routes, and estimated arrival time",
        alt: "Student App Interface",
      },
      {
        url: "/projects/mpnmjec/live_map_clean.webp",
        caption: "Real-time Google Maps live vehicle tracking with speed indicator and dynamic driver marker",
        alt: "Live Map Tracking Screen",
      },
    ],
    skillsUsed: [
      {
        group: "Mobile & Frontend",
        skills: ["Flutter (Dart)", "Provider State Management", "Google Maps SDK", "Material 3"],
      },
      {
        group: "Backend & Realtime",
        skills: ["Node.js", "Express", "WebSocket (ws)", "Supabase", "Render Cloud Hosting"],
      },
      {
        group: "Deployment",
        skills: ["Google Play Console", "App Signing Keystores", "Crashlytics", "Network Retry Logic"],
      },
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.sixmindslabs.mpnmjecbustracker.student",
      githubUrl: "https://github.com/6ixmindslabs-hue/MPNMJBUSES",
    },
  },

  "mpnmjec-driver-app": {
    slug: "mpnmjec-driver-app",
    title: "MPNMJEC Driver Companion App",
    tagline: "Dedicated driver mobile tool for persistent background GPS pinging, route locking, and automated telemetry.",
    categoryKey: "mobile",
    subcategoryKey: "campus-transit",
    subcategoryTitle: "Campus Transit",
    badge: "🛰️ Background GPS Telemetry",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    thumbnail: "/projects/mpnmjec/driver_trip_clean.webp",
    details: {
      type: "Commercial Driver Mobile App",
      duration: "2025 – Present",
      role: "Lead Mobile Developer",
      status: "Live in Fleet Production",
      architecture: "Flutter (Dart), Background Geolocation API, WebSocket Stream, Battery Saver Engine",
      clientOrContext: "MPNMJEC Transport Department Drivers",
    },
    overview: {
      challenge:
        "Bus drivers operate in high-distraction environments with varying cellular connectivity. The system required a one-touch interface that broadcasts telemetry continuously without battery drain or manual intervention.",
      solution:
        "Built a lightweight, robust Flutter driver companion app. Drivers select their assigned bus, tap 'Start Trip', and the app manages persistent background GPS coordinate broadcasting with offline queue retry logic.",
      impact:
        "Achieved 99.8% GPS telemetry uptime across 15+ daily campus routes with zero distraction to operating drivers.",
    },
    coreFeatures: [
      {
        title: "One-Tap Trip Initiation",
        description: "Simplified interface with giant high-contrast touch controls designed specifically for drivers in transit.",
      },
      {
        title: "Persistent Background Location Service",
        description: "Continues high-precision GPS coordinate broadcasting even when the phone is locked or screen is off.",
      },
      {
        title: "Offline Network Queue Recovery",
        description: "Locally buffers coordinates during intermittent cellular dead-zones and flushes packets upon reconnect.",
      },
      {
        title: "Emergency Incident Trigger",
        description: "Single-tap SOS button to instantly alert dispatchers of mechanical breakdowns or road hazards.",
      },
    ],
    gallery: [
      {
        url: "/projects/mpnmjec/driver_trip_clean.webp",
        caption: "Driver Companion App designed for single-tap trip start, route lock, and emergency trigger",
        alt: "Driver Companion Interface",
      },
      {
        url: "/projects/mpnmjec/mpnmjec_combined_showcase.webp",
        caption: "Ecosystem overview showing the driver telemetry stream connecting directly to student maps",
        alt: "Driver Showcase in Ecosystem",
      },
    ],
    skillsUsed: [
      {
        group: "Mobile & OS",
        skills: ["Flutter (Dart)", "Background Geolocation", "Wakelock APIs", "Battery Optimization"],
      },
      {
        group: "Telemetry Protocols",
        skills: ["WebSocket Pings", "JSON Stream Serialization", "Network State Monitoring"],
      },
    ],
    links: {
      githubUrl: "https://github.com/6ixmindslabs-hue/MPNMJBUSES",
    },
  },

  // --------------------------------------------------------------------------
  // 2. MOBILE -> NATIVE OS AUTOMATION
  // --------------------------------------------------------------------------
  "aira-copilot": {
    slug: "aira-copilot",
    title: "Aira – Android AI Voice & Automation Assistant",
    tagline: "Android-native Kotlin AI assistant prototype executing device actions via voice and accessibility APIs.",
    categoryKey: "mobile",
    subcategoryKey: "native-automation",
    subcategoryTitle: "Native OS Automation",
    badge: "🧠 Kotlin + Android Accessibility APIs",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    thumbnail: "/projects/aira/dashboard-preview.svg",
    details: {
      type: "Android Native Prototype & Intent Engine",
      duration: "2025 – 2026",
      role: "Lead Android & AI Engineer",
      status: "Active Working Prototype",
      architecture: "Android Kotlin, Jetpack Compose, Room DB, Android AccessibilityService, Node.js Intent Backend",
      clientOrContext: "Open-Source Mobile Automation Project",
    },
    overview: {
      challenge:
        "Modern mobile voice assistants are restricted to walled-garden ecosystems and cannot reliably automate multi-step repetitive tasks across third-party Android apps without custom developer SDKs.",
      solution:
        "Architected Aira, a native Android assistant that captures voice commands, passes transcripts to a Node.js intent backend for strict JSON action parsing, and executes real UI interactions via Android Accessibility APIs.",
      impact:
        "Successfully automated hands-free tasks including message drafting, settings toggles, clipboard actions, and Tasker automation bridging with zero vendor lock-in.",
    },
    coreFeatures: [
      {
        title: "Android Accessibility Execution Engine",
        description: "Uses a dedicated AccessibilityService to inspect UI node hierarchies, click buttons, and scroll views.",
      },
      {
        title: "Strict JSON Intent Backend",
        description: "Node.js Express + Zod microservice converting arbitrary voice phrases into validated deterministic action payloads.",
      },
      {
        title: "Local Room Database History",
        description: "Full on-device command audit log with replay capabilities using Room and Coroutines.",
      },
      {
        title: "Tasker Automation Bridge",
        description: "Inter-process broadcast receiver enabling seamless integration with existing Android automation plugins.",
      },
    ],
    gallery: [
      {
        url: "/projects/aira/dashboard-preview.svg",
        caption: "Aira Android Dashboard: Voice listener status, recent intent history, and execution logs",
        alt: "Aira Dashboard Preview",
      },
      {
        url: "/projects/aira/confirmation-preview.svg",
        caption: "Action Confirmation & Security Verification dialog prior to executing device accessibility tasks",
        alt: "Aira Confirmation Dialog",
      },
    ],
    skillsUsed: [
      {
        group: "Android Native",
        skills: ["Kotlin", "Android Accessibility APIs", "Room DB (SQLite)", "Coroutines", "Tasker Intent Bridge"],
      },
      {
        group: "Backend Intent Engine",
        skills: ["Node.js", "Express", "Zod Validation", "OpenAI / Gemini API", "Structured JSON Schemas"],
      },
    ],
    links: {
      githubUrl: "https://github.com/dhineshdevtech/Aira",
    },
  },

  // --------------------------------------------------------------------------
  // 3. WEBSITES -> CAMPUS PLATFORMS
  // --------------------------------------------------------------------------
  "mpnmjec-dispatch-console": {
    slug: "mpnmjec-dispatch-console",
    title: "MPNMJEC Live Telemetry & GPS Dispatch Console",
    tagline: "Central fleet dispatch dashboard featuring real-time vehicle map tracking, speed alerts, and route rosters.",
    categoryKey: "websites",
    subcategoryKey: "campus-platforms",
    subcategoryTitle: "Campus Platforms",
    badge: "🛰️ Live Telemetry Dashboard",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    thumbnail: "/projects/mpnmjec/admin_panel_clean.webp",
    details: {
      type: "Real-Time Telemetry Dispatch Portal",
      duration: "2025 – 2026",
      role: "Lead Full-Stack Developer",
      status: "Live in Production",
      architecture: "React 18, Leaflet / Google Maps API, Node.js WebSocket Engine, Supabase",
      clientOrContext: "Campus Security & Fleet Transport Desk",
    },
    overview: {
      challenge:
        "During peak hours, severe weather, or unexpected delays, transport supervisors had zero centralized visual insight into where college buses were located or whether drivers were speeding.",
      solution:
        "Constructed a high-throughput telemetry dispatch dashboard that connects directly to the Node.js WebSocket broadcast engine, displaying live vehicle coordinates, route polylines, and speed alarms.",
      impact:
        "Sub-100ms fleet tracking across the multi-district transport network, empowering dispatchers to proactively manage route detours and enforce campus transit safety.",
    },
    coreFeatures: [
      {
        title: "Multi-Vehicle Live Map View",
        description: "Simultaneous real-time tracking of all active college buses on an interactive map canvas.",
      },
      {
        title: "Speed Threshold Compliance",
        description: "Automated visual and acoustic indicators triggered whenever a bus exceeds designated safe campus speed limits.",
      },
      {
        title: "Route & Driver Shift Rostering",
        description: "Assign drivers, relief operators, and stop sequences with immediate database sync.",
      },
      {
        title: "Emergency Broadcast Override",
        description: "One-click dispatch console to push urgent breakdown announcements to all students on an affected route.",
      },
    ],
    gallery: [
      {
        url: "/projects/mpnmjec/admin_panel_clean.webp",
        caption: "Admin Dispatch View displaying active vehicles, current speeds, and route status indicators",
        alt: "Admin Telemetry Dashboard",
      },
      {
        url: "/projects/mpnmjec/live_map_clean.webp",
        caption: "High-resolution Live Map telematics view showing active GPS polyline and stop markers",
        alt: "Live Map View",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & Maps",
        skills: ["React 18", "Leaflet / Google Maps API", "Tailwind CSS", "Recharts"],
      },
      {
        group: "Realtime Telemetry",
        skills: ["WebSocket (ws)", "Node.js", "Express", "Supabase", "Geofencing Algorithms"],
      },
    ],
    links: {
      githubUrl: "https://github.com/6ixmindslabs-hue/MPNMJBUSES",
    },
  },

  "mpnmjec-attendance-system": {
    slug: "mpnmjec-attendance-system",
    title: "MPNMJEC Smart Attendance & Face Biometrics Suite",
    tagline: "Academic attendance platform featuring on-device MediaPipe facial recognition, role dashboards, and biometric kiosk.",
    categoryKey: "websites",
    subcategoryKey: "campus-platforms",
    subcategoryTitle: "Campus Platforms",
    badge: "👁️ MediaPipe Face Vision + FastAPI",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
    thumbnail: "/projects/attendance/kiosk-login.png",
    details: {
      type: "Full-Stack AI Institutional Attendance System",
      duration: "2025 – 2026",
      role: "Lead Full-Stack & Computer Vision Engineer",
      status: "Production Ready / Dockerized",
      architecture: "Python FastAPI, MediaPipe Tasks Vision, PostgreSQL (asyncpg), SQLAlchemy 2.0, React, Docker",
      clientOrContext: "MPNMJEC Academic Administration & Department Faculty",
    },
    overview: {
      challenge:
        "Traditional pen-and-paper roll call in large collegiate lecture halls wastes 15+ minutes per period, invites proxy attendance, and delays semester attendance reporting for advisors and department heads.",
      solution:
        "Engineered an institutional smart attendance platform featuring 6 role-based web dashboards (Admin, Principal, HOD, Advisor, Faculty, Student) paired with an edge biometric kiosk utilizing MediaPipe facial landmark recognition.",
      impact:
        "Reduced class roll-call overhead to under 30 seconds per cohort with zero proxy attendance and instantaneous automated timetable attendance audits.",
    },
    coreFeatures: [
      {
        title: "On-Device Face Biometric Kiosk",
        description: "Standalone biometric mode using `@mediapipe/tasks-vision` for instant face detection and student ID matching.",
      },
      {
        title: "6 Role-Based Access Portals",
        description: "Granular permissions for Principal (college-wide analytics), HOD (department metrics), Faculty (subject logs), and Students.",
      },
      {
        title: "Async FastAPI & SQLAlchemy 2.0 Backend",
        description: "High-throughput asynchronous Python API with Alembic migrations and PostgreSQL connection pooling.",
      },
      {
        title: "Dockerized Hugging Face & Vercel Deployment",
        description: "Containerized deployment architecture built for reproducible scaling across institutional server infrastructure.",
      },
    ],
    gallery: [
      {
        url: "/projects/attendance/kiosk-login.png",
        caption: "Standalone Biometric Face Attendance Kiosk Mode for classroom wall terminals",
        alt: "Biometric Kiosk Screen",
      },
      {
        url: "/projects/attendance/admin-login.png",
        caption: "Role-Based Administrative Portal Login for HODs, Advisors, and Department Principals",
        alt: "Admin Login Screen",
      },
    ],
    skillsUsed: [
      {
        group: "Computer Vision & AI",
        skills: ["MediaPipe Tasks Vision", "Facial Landmark Detection", "Edge Biometrics"],
      },
      {
        group: "Backend & Database",
        skills: ["Python 3.11", "FastAPI", "SQLAlchemy 2.0", "Alembic", "PostgreSQL (asyncpg)", "Docker"],
      },
      {
        group: "Frontend",
        skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      },
    ],
    links: {
      githubUrl: "https://github.com/dhineshdevtech/demo-mpnmjec-attendance-system",
    },
  },

  "mpnmjec-fine-management": {
    slug: "mpnmjec-fine-management",
    title: "MPNMJEC ECE Department Fine & Ledger System",
    tagline: "Institutional financial ledger for tracking student disciplinary dues, department spending, and instant receipts.",
    categoryKey: "websites",
    subcategoryKey: "campus-platforms",
    subcategoryTitle: "Campus Platforms",
    badge: "💰 Institutional Ledger & Receipts",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    thumbnail: "/projects/fine-management/hero.png",
    details: {
      type: "Departmental Financial & Ledger Management System",
      duration: "2025",
      role: "Solo Full-Stack Developer",
      status: "Deployed for Department Administration",
      architecture: "React 19, Vite, Tailwind CSS v4, Firebase Firestore & Auth, Recharts",
      clientOrContext: "MPNMJEC Electronics & Communication Engineering Department",
    },
    overview: {
      challenge:
        "Departmental fines, lab component damage dues, and symposium student fund collections were manually maintained in physical paper registers, making financial reconciliation error-prone and lacking formal receipts.",
      solution:
        "Constructed an automated financial ledger portal. Staff easily log fines, track payment statuses, issue instant digital PDF receipts, record department expenditures, and generate end-of-year audit reports.",
      impact:
        "100% financial audit accuracy across academic semesters, eliminating paper ledger losses and providing transparent receipt proofs to students and parents.",
    },
    coreFeatures: [
      {
        title: "Instant Digital Receipt Generation",
        description: "Produces standardized printable receipts with automated ledger serial IDs and timestamped payment proofs.",
      },
      {
        title: "Dual Ledger (Income & Spending)",
        description: "Tracks incoming student payments alongside departmental expenses with real-time balance calculations.",
      },
      {
        title: "Student Financial Dossier",
        description: "Search any student by register number to inspect past dues, resolved payments, and historical payment receipts.",
      },
      {
        title: "Semester Visual Analytics",
        description: "Interactive Recharts histograms showcasing collection trends, outstanding dues, and departmental expenditures.",
      },
    ],
    gallery: [
      {
        url: "/projects/fine-management/hero.png",
        caption: "Department Financial Dashboard with Income, Expense ledgers, and student search",
        alt: "Fine Management Dashboard",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 19", "Vite", "Tailwind CSS v4", "Recharts", "Lucide Icons"],
      },
      {
        group: "Backend & Data",
        skills: ["Firebase Firestore", "Firebase Authentication", "PDF Receipt Generation", "Audit Rules"],
      },
    ],
    links: {},
  },

  // --------------------------------------------------------------------------
  // 4. WEBSITES -> EDUTECH
  // --------------------------------------------------------------------------
  "6ixquest-ai": {
    slug: "6ixquest-ai",
    title: "6ixQuest – AI Quiz & Assessment Hub",
    tagline: "AI-assisted exam platform generating comprehensive assessments in 5 seconds with Groq Cloud Llama 3.",
    categoryKey: "websites",
    subcategoryKey: "edutech",
    subcategoryTitle: "EduTech",
    badge: "⚡ Groq AI + Supabase",
    badgeColor: "bg-blue-50 text-[#0070f3] border-blue-200",
    thumbnail: "/projects/6ixquest/home.webp",
    details: {
      type: "SaaS EdTech Platform",
      duration: "2025",
      role: "Lead Full-Stack & AI Engineer",
      status: "Live Platform",
      architecture: "React 18, TypeScript, Groq Cloud (Llama 3 70B), Supabase PostgreSQL, Tailwind CSS",
      clientOrContext: "Educators, Universities & Technical Recruiters",
    },
    overview: {
      challenge:
        "Drafting balanced, rigorous exam questionnaires and candidate evaluation rubrics traditionally takes educators hours of manual authoring, formatting, and grading.",
      solution:
        "Architected 6ixQuest, an AI assessment platform using Groq Cloud's high-throughput Llama 3 inference. Generates custom multiple-choice exams in seconds, shares public test rooms, and grades candidates automatically.",
      impact:
        "Reduced test preparation and grading time by 90%, generating production-ready assessments in under 5 seconds with instant candidate score breakdown analytics.",
    },
    coreFeatures: [
      {
        title: "Sub-5-Second AI Generation",
        description: "Leverages Groq Cloud Llama-3 70B model for near-instant conceptual questionnaire synthesis.",
      },
      {
        title: "Public Candidate Test Rooms",
        description: "Generates secure, shareable assessment links with timed countdowns and real-time auto-submit.",
      },
      {
        title: "Automated Grading & Feedback",
        description: "Candidates receive instantaneous score breakdowns with question-by-question rationales.",
      },
      {
        title: "Supabase RLS Security",
        description: "Row-level security ensuring strict tenant privacy for instructor question banks and candidate records.",
      },
    ],
    gallery: [
      {
        url: "/projects/6ixquest/home.webp",
        caption: "6ixQuest Platform Dashboard: Exam generator, active quiz rooms, and candidate roster",
        alt: "6ixQuest Home Screen",
      },
      {
        url: "/projects/6ixquest/login.webp",
        caption: "Secure Authentication portal integrated with Supabase OAuth and session security",
        alt: "6ixQuest Authentication Screen",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend",
        skills: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      },
      {
        group: "AI & Backend",
        skills: ["Groq Cloud Inference (Llama 3)", "Prompt Engineering", "Supabase PostgreSQL", "Row-Level Security (RLS)"],
      },
    ],
    links: {
      liveUrl: "https://6ix-quest.vercel.app",
      githubUrl: "https://github.com/dhineshdevtech/6ixQuest",
    },
  },

  // --------------------------------------------------------------------------
  // 5. WEBSITES -> CONVERSATIONAL AI & CRM
  // --------------------------------------------------------------------------
  "fusion-ai-crm": {
    slug: "fusion-ai-crm",
    title: "Fusion AI CRM – Autonomous WhatsApp Agent",
    tagline: "Autonomous WhatsApp sales agent qualifying leads 24/7 with Groq LLMs and synchronizing to a real-time CRM.",
    categoryKey: "websites",
    subcategoryKey: "conversational-ai",
    subcategoryTitle: "Conversational AI & CRM",
    badge: "🤖 Autonomous WhatsApp Agent + Groq",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    thumbnail: "/projects/fusion-ai/dashboard.png",
    details: {
      type: "AI Lead Automation & CRM Platform",
      duration: "2025 – 2026",
      role: "Lead Full-Stack AI Engineer",
      status: "Production System",
      architecture: "Node.js, whatsapp-web.js, Groq AI SDK, Supabase Realtime, React 18, Tailwind CSS",
      clientOrContext: "6ixminds Labs Inbound Sales Operations",
    },
    overview: {
      challenge:
        "High-value sales leads contacting agencies via WhatsApp outside working hours frequently go cold due to delayed human responses, leading to missed deals and lost revenue.",
      solution:
        "Engineered Fusion AI CRM, an autonomous WhatsApp Web agent powered by Groq Llama 3. The agent engages prospects, remembers conversation context, qualifies budget/timeline requirements, and syncs lead cards to a React CRM.",
      impact:
        "100% instantaneous lead response time 24/7, capturing qualified prospect dossiers and scheduling discovery meetings without human sales intervention.",
    },
    coreFeatures: [
      {
        title: "Autonomous WhatsApp Daemon",
        description: "Runs headless WhatsApp Web sessions with QR pairing, auto-reconnect, and multi-chat concurrency.",
      },
      {
        title: "Silent CRM Data Extraction",
        description: "AI extracts prospect name, business, budget, timeline, and meeting intent silently alongside natural conversational replies.",
      },
      {
        title: "Real-Time Supabase Sync",
        description: "CRM dashboard reflects new leads and conversation updates instantaneously via Supabase websocket subscriptions.",
      },
      {
        title: "Interactive Lead Kanban Dashboard",
        description: "React CRM interface to review lead scores, full WhatsApp chat transcripts, and deal stages.",
      },
    ],
    gallery: [
      {
        url: "/projects/fusion-ai/dashboard.png",
        caption: "Fusion AI CRM Dashboard displaying lead pipeline, qualification metrics, and conversation activity",
        alt: "Fusion AI CRM Dashboard",
      },
      {
        url: "/projects/fusion-ai/leads.png",
        caption: "Detailed Lead View showing parsed prospect parameters, timeline, budget, and chat transcripts",
        alt: "Lead Details Screen",
      },
    ],
    skillsUsed: [
      {
        group: "AI & WhatsApp",
        skills: ["whatsapp-web.js", "Groq AI SDK (Llama 3)", "Prompt Engineering", "Intent Extraction"],
      },
      {
        group: "Backend & Database",
        skills: ["Node.js", "Express", "Supabase Realtime", "PostgreSQL", "Session Persistence"],
      },
      {
        group: "Frontend",
        skills: ["React 18", "Tailwind CSS", "Lucide Icons", "Kanban Architecture"],
      },
    ],
    links: {
      githubUrl: "https://github.com/dhineshdevtech/whatsapp_automation",
    },
  },

  // --------------------------------------------------------------------------
  // 6. WEBSITES -> CORPORATE & AGENCY WEB
  // --------------------------------------------------------------------------
  "aletheia-compliance": {
    slug: "aletheia-compliance",
    title: "Aletheia Compliance – Regulatory Advisory Platform",
    tagline: "Regulatory advisory web platform offering CDSCO, AERB, EPR, and MoEFCC compliance workflows and lead dispatch.",
    categoryKey: "websites",
    subcategoryKey: "corporate-agency",
    subcategoryTitle: "Corporate & Agency Web",
    badge: "⚖️ Regulatory Infrastructure Platform",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    thumbnail: "/projects/aletheia/hero.png",
    details: {
      type: "Corporate Advisory Web Platform & Lead Engine",
      duration: "2025 – 2026",
      role: "Frontend & Full-Stack Developer",
      status: "Live in Production",
      architecture: "HTML5, Vanilla JavaScript, CSS3, Firebase Firestore & Auth, Vercel",
      clientOrContext: "Aletheia Compliance Consultants, India",
    },
    overview: {
      challenge:
        "Medical device manufacturers and industrial enterprises navigating complex Indian statutory compliances (CDSCO, AERB, MoEFCC) lacked a clear, accessible digital resource to assess requirements and schedule expert audits.",
      solution:
        "Built a high-performance regulatory infrastructure portal detailing statutory frameworks, interactive consultation inquiry funnels, and an administrative consultation triage system.",
      impact:
        "Drives hundreds of enterprise regulatory inquiries per month with sub-second page loads and seamless Firebase lead notifications.",
    },
    coreFeatures: [
      {
        title: "Statutory Framework Portals",
        description: "Dedicated deep-dive modules for CDSCO medical device clearance, AERB radiological compliance, and EPR waste rules.",
      },
      {
        title: "Smart Consultation Intake",
        description: "Multi-step client advisory request form routing company details directly into Firestore for rapid consultant dispatch.",
      },
      {
        title: "Administrative Consultation Console",
        description: "Authenticated admin view allowing compliance officers to triage incoming filings and track consultation statuses.",
      },
      {
        title: "Zero-Dependency Performance",
        description: "Ultra-lean Vanilla JavaScript architecture ensuring 100/100 Lighthouse performance scores and instant navigation.",
      },
    ],
    gallery: [
      {
        url: "/projects/aletheia/hero.png",
        caption: "Aletheia Compliance Portal: Regulatory infrastructure hero, certification tracks, and consultation CTA",
        alt: "Aletheia Compliance Hero Screen",
      },
    ],
    skillsUsed: [
      {
        group: "Core Web",
        skills: ["HTML5", "Vanilla JavaScript (ES6+)", "Custom CSS3 Design System", "SEO Optimization"],
      },
      {
        group: "Backend & Cloud",
        skills: ["Firebase Firestore", "Firebase Auth", "Serverless Form Handlers", "Vercel Hosting"],
      },
    ],
    links: {
      githubUrl: "https://github.com/madanvinayagam/aletheiacompliance",
    },
  },

  "zapple-digital": {
    slug: "zapple-digital",
    title: "Zapple Digital – Digital Agency Showcase",
    tagline: "Dynamic marketing agency web platform featuring interactive radial service trays, client showcases, and dynamic blog.",
    categoryKey: "websites",
    subcategoryKey: "corporate-agency",
    subcategoryTitle: "Corporate & Agency Web",
    badge: "🚀 Agency Showcase & Lead Engine",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    thumbnail: "/projects/aletheia/hero.png",
    details: {
      type: "Commercial Digital Agency Web Application",
      duration: "2025",
      role: "Lead Frontend Developer",
      status: "Live Production Platform",
      architecture: "React 18, Vite, Firebase Firestore, Tailwind CSS, Lucide Icons",
      clientOrContext: "Zapple Digital Marketing Agency, Chennai",
    },
    overview: {
      challenge:
        "A growing digital agency needed a striking web presence that immediately conveyed creativity, technical capability, and social-proof through bespoke animations rather than cookie-cutter templates.",
      solution:
        "Engineered an interactive agency web platform with animated canvas particle backgrounds, radial service selection hubs, Instagram brand mockups, and integrated strategy-booking modals.",
      impact:
        "Elevated client conversion rates by 40%, generating inbound qualified marketing leads directly into the agency's consultation pipeline.",
    },
    coreFeatures: [
      {
        title: "Interactive Radial Services Hub",
        description: "Bespoke circular interactive UI allowing clients to explore SEO, Web Development, and Social Media packages.",
      },
      {
        title: "High-Conversion Lead Modal",
        description: "Context-aware popup triggering consultation booking based on specific service tray interactions.",
      },
      {
        title: "Dynamic Editorial Blog System",
        description: "Direct Firestore-backed article reader displaying categorized growth guides and case studies.",
      },
      {
        title: "Smooth Canvas & Ambient Particle Engine",
        description: "Hardware-accelerated fluid visual atmosphere creating a memorable brand first-impression.",
      },
    ],
    gallery: [
      {
        url: "/projects/aletheia/hero.png",
        caption: "Zapple Digital Showcase featuring interactive services and conversion widgets",
        alt: "Zapple Digital Screen",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 18", "Vite", "Tailwind CSS", "Canvas Animations", "Micro-Interactions"],
      },
      {
        group: "Cloud & Backend",
        skills: ["Firebase Firestore", "Firebase Hosting", "Form Automation"],
      },
    ],
    links: {
      githubUrl: "https://github.com/madanvinayagam/zappledigital",
    },
  },

  // --------------------------------------------------------------------------
  // 7. BUSINESS -> CANTEEN POS
  // --------------------------------------------------------------------------
  "appu-canteen-pos": {
    slug: "appu-canteen-pos",
    title: "Appu Canteen – Offline-First POS",
    tagline: "Commercial counter POS with zero-downtime offline IndexedDB sync and Web Bluetooth ESC/POS thermal printing.",
    categoryKey: "business",
    subcategoryKey: "canteen-pos",
    subcategoryTitle: "Canteen POS",
    badge: "🧾 Offline-First PWA + Bluetooth Printing",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    thumbnail: "/projects/canteen/01-billing-screen.webp",
    details: {
      type: "Commercial Retail POS & Hardware",
      duration: "November 2025 – Present",
      role: "Lead Full-Stack Developer",
      status: "Deployed at Commercial Counters",
      architecture: "React 19, TypeScript, IndexedDB (Dexie.js), Web Bluetooth API, ESC/POS Binary Protocols, PWA",
      clientOrContext: "Campus Food Centers & Retail Stores / 6ixminds Labs",
    },
    overview: {
      challenge:
        "High-density food counters face revenue loss and customer dissatisfaction when internet drops or cloud POS systems freeze mid-transaction during peak rush hours.",
      solution:
        "Engineered an offline-first POS architecture that operates completely uninterrupted without internet. Persists transactions locally in IndexedDB and connects directly to Bluetooth 58mm/80mm thermal receipt printers.",
      impact:
        "100% operational uptime through internet dropouts, cutting queue wait times by 65% with sub-second order calculation and slip printing.",
    },
    coreFeatures: [
      {
        title: "Zero-Downtime Offline Mode",
        description: "Transactions, catalog updates, and order bills persist locally and sync back when online.",
      },
      {
        title: "Wireless Bluetooth Thermal Printing",
        description: "Direct Web Bluetooth API integration to print kitchen slips and customer bills instantly without drivers.",
      },
      {
        title: "End-of-Day Sales Ledger",
        description: "Comprehensive financial summary breakdown with cash-in-drawer audit and payment reports.",
      },
      {
        title: "Quick-Key Item Search & Multilingual UI",
        description: "Sub-10ms response time using in-memory indexed queries, with multi-language i18n support.",
      },
    ],
    gallery: [
      {
        url: "/projects/canteen/01-billing-screen.webp",
        caption: "High-speed Checkout Register with Category Shortcuts and Instant Order Cart",
        alt: "Billing Screen",
      },
      {
        url: "/projects/canteen/02-sales-dashboard.webp",
        caption: "Real-time Sales Analytics Dashboard displaying daily turnover, hourly peaks, and top items",
        alt: "Sales Dashboard Screen",
      },
      {
        url: "/projects/canteen/03-items-management.webp",
        caption: "Inventory & Pricing Editor with stock toggle and quick-search catalog",
        alt: "Items Management Screen",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & Architecture",
        skills: ["React 19", "TypeScript", "Tailwind CSS", "IndexedDB (Dexie)", "Zustand", "PWA Service Worker"],
      },
      {
        group: "Hardware & Protocols",
        skills: ["Web Bluetooth API", "ESC/POS Binary Protocols", "Thermal Slip Byte Formats"],
      },
    ],
    links: {
      liveUrl: "https://offline-canteen-billing-system.vercel.app/",
      githubUrl: "https://github.com/dhineshdevtech/OFFLINE-CANTEEN-BILLING-SYSTEM",
    },
  },

  // --------------------------------------------------------------------------
  // 8. BUSINESS -> COMMERCIAL LAUNDRY POS
  // --------------------------------------------------------------------------
  "bubbleworks-pos": {
    slug: "bubbleworks-pos",
    title: "Bubbleworks – Enterprise Laundry Billing Monorepo",
    tagline: "Commercial laundry & dry-cleaning management monorepo with Next.js 15, Prisma ORM, Express 5, and PostgreSQL.",
    categoryKey: "business",
    subcategoryKey: "commercial-laundry",
    subcategoryTitle: "Commercial Laundry POS",
    badge: "📦 Next.js 15 Monorepo + Prisma",
    badgeColor: "bg-blue-50 text-[#0070f3] border-blue-200",
    thumbnail: "/projects/bubbleworks/dashboard.png",
    details: {
      type: "Commercial Enterprise Billing Monorepo",
      duration: "2025 – 2026",
      role: "Lead Full-Stack Architect",
      status: "Production Monorepo",
      architecture: "Next.js 15, React 18, Express 5, Prisma ORM, PostgreSQL, Shared Zod Schemas, Turborepo",
      clientOrContext: "Commercial Laundry & Dry Cleaning Franchises",
    },
    overview: {
      challenge:
        "Commercial dry-cleaning chains need multi-stage order tracking (wash, dry, press, pack, delivered) and centralized pricing across multiple physical branches without data sync inconsistencies.",
      solution:
        "Architected an enterprise monorepo featuring a Next.js 15 operational web dashboard, a high-performance Express 5 API powered by Prisma ORM and PostgreSQL, and shared validation schemas across apps.",
      impact:
        "Unified multi-branch laundry order processing, garment tag printing, and customer SMS pickup notifications within a robust type-safe codebase.",
    },
    coreFeatures: [
      {
        title: "Monorepo Workspace Architecture",
        description: "Clean separation: `apps/web` (Next.js 15 UI), `apps/api` (Express backend), and `packages/shared` (Zod schemas).",
      },
      {
        title: "Prisma ORM & PostgreSQL Data Layer",
        description: "Type-safe database migrations, relational schema models, and automated seeding scripts.",
      },
      {
        title: "Multi-Stage Garment Workflow",
        description: "Tracks individual items from intake drop-off through wash, dry-clean, quality check, and customer pickup.",
      },
      {
        title: "Customer Ledger & Payment Tracking",
        description: "Full transaction accounting with support for advance deposits, partial balances, and credit ledger history.",
      },
    ],
    gallery: [
      {
        url: "/projects/bubbleworks/dashboard.png",
        caption: "Bubbleworks Enterprise Dashboard showing active laundry orders, revenue metrics, and processing status",
        alt: "Bubbleworks Dashboard Screen",
      },
      {
        url: "/projects/bubbleworks/order.png",
        caption: "Garment Intake & Order Creation View with item modifiers, garment care tags, and total calculations",
        alt: "Garment Intake Order Screen",
      },
    ],
    skillsUsed: [
      {
        group: "Monorepo & Frontend",
        skills: ["Next.js 15", "React 18", "Tailwind CSS", "TypeScript", "Zod"],
      },
      {
        group: "Backend & Database",
        skills: ["Express 5", "Prisma ORM", "PostgreSQL", "Bcrypt", "REST APIs"],
      },
    ],
    links: {
      githubUrl: "https://github.com/madanvinayagam/bubbleworks-laundry-pos",
    },
  },

  "invoice-generator": {
    slug: "invoice-generator",
    title: "Quick Laundry POS & Receipt Generator",
    tagline: "Lightweight cloud POS for laundry counters featuring automated cash round-off and 80mm thermal receipt printing.",
    categoryKey: "business",
    subcategoryKey: "commercial-laundry",
    subcategoryTitle: "Commercial Laundry POS",
    badge: "🧾 Cloud POS + 80mm Thermal Receipts",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    thumbnail: "/projects/bubbleworks/invoice-order.png",
    details: {
      type: "Commercial POS Web Application",
      duration: "2025",
      role: "Full-Stack Developer",
      status: "Live Cloud Application",
      architecture: "React, TypeScript, Vite, Tailwind CSS, Radix UI / Shadcn, Supabase PostgreSQL",
      clientOrContext: "Retail Dry Cleaners & Quick Laundry Outlets",
    },
    overview: {
      challenge:
        "Compact counter setups in quick-service laundry shops require a rapid web POS to create orders, calculate totals with cash round-offs, and print standard 80mm thermal receipts without complex hardware.",
      solution:
        "Built a responsive cloud POS using React and Supabase. Staff quickly select wash items, apply discounts, adjust round-off pennies, and trigger instant formatted 80mm thermal receipt prints.",
      impact:
        "Reduced customer order intake time to under 10 seconds per ticket with cloud order backups and instant exportable CSV audit records.",
    },
    coreFeatures: [
      {
        title: "80mm Thermal Receipt Formatting",
        description: "Formatted print CSS stylesheet outputting clean, professional 80mm slips with itemized breakdowns and store headers.",
      },
      {
        title: "Automated Round-Off Ledger",
        description: "Smart billing calculations that account for currency round-offs and payment method reconciliations.",
      },
      {
        title: "Supabase Cloud Order Backup",
        description: "Immediate cloud persistence with offline error protection and instant order ID generation.",
      },
      {
        title: "Export & Transaction Audit",
        description: "One-click export of end-of-day transactions and order summaries to Excel/CSV spreadsheets.",
      },
    ],
    gallery: [
      {
        url: "/projects/bubbleworks/invoice-order.png",
        caption: "Quick Order Intake View with live item pricing, modifiers, and instant receipt preview",
        alt: "Invoice Generator Order Screen",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "Print CSS"],
      },
      {
        group: "Cloud Backend",
        skills: ["Supabase PostgreSQL", "Row-Level Security", "REST Endpoints"],
      },
    ],
    links: {
      liveUrl: "https://invoice-generator-sage-five.vercel.app",
      githubUrl: "https://github.com/dhineshdevtech/Invoice_generator",
    },
  },
};
