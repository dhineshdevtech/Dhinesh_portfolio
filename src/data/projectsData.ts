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
    description: "Cross-platform Flutter mobile applications built for high performance and everyday use.",
    pitch: "Looking to build a high-performance Flutter or mobile application?",
    pitchCta: "See my mobile app services",
    subcategories: [
      {
        key: "campus-transit",
        title: "Campus Transit",
        description: "Live vehicle GPS telemetry, student arrival tracking, and driver trip companions.",
        projectCount: 2,
        projectSlugs: ["mpnmjec-bus-tracker", "mpnmjec-driver-app"],
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
        projectSlugs: ["quizforge-ai"],
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
    title: "MPNMJEC Bus Tracker",
    tagline: "Live transit tracking mobile app with real-time GPS bus arrivals, sub-second map interpolation, and smart arrival alarms.",
    categoryKey: "mobile",
    subcategoryKey: "campus-transit",
    subcategoryTitle: "Campus Transit",
    badge: "🏆 Live on Google Play Store",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    thumbnail: "/projects/mpnmjec/student_mobile_tracking_mockup.webp",
    details: {
      type: "Production Flutter Mobile App",
      duration: "March 2026 – June 2026",
      role: "Lead Full-Stack & Mobile Developer",
      status: "Live on Google Play Store & Campus Deployed",
      architecture: "Flutter (Dart 3.x), flutter_map (v6), LatLong2, Node.js WebSocket Engine, Supabase PostgreSQL, OSRM",
      clientOrContext: "M.P. Nachimuthu M. Jaganathan Engineering College (MPNMJEC)",
    },
    overview: {
      challenge:
        "College students and staff faced unpredictable daily commutes—frequently missing buses, waiting in extreme weather at rural stops, and having zero visibility into whether a bus was delayed, stuck in traffic, or had already departed.",
      solution:
        "Engineered an official student mobile tracking application on Flutter published on Google Play. Features instant 1-tap 'Live Buses Now' discovery, smooth OpenStreetMap vehicle marker heading rotation, OSRM road-accurate ETAs, and proximity arrival alarms.",
      impact:
        "Delivers 2-second real-time GPS telemetry sync across campus routes, reducing roadside wait times by over 80% with zero dedicated vehicle GPS hardware costs.",
    },
    coreFeatures: [
      {
        title: "Instant 'Live Buses Now' Discovery",
        description: "Dedicated home feed allowing students to jump straight into tracking currently moving buses with 1 tap, bypassing multi-step stop search forms.",
      },
      {
        title: "Stop-to-Stop Route Search & Timeline",
        description: "Interactive pickup and drop-off stop picker displaying active routes, upcoming stops, and road-snapped OSRM driving ETAs.",
      },
      {
        title: "Smooth Real-Time OpenStreetMap Tracking",
        description: "Real-time bus marker heading rotation, live speed indicator, route geometry polylines, and stop markers powered by flutter_map and LatLong2.",
      },
      {
        title: "Smart Proximity Arrival Alarm",
        description: "Configurable background acoustic and vibration alarm triggering 5, 10, or 15 minutes before the bus reaches the student's designated stop.",
      },
    ],
    gallery: [
      {
        url: "/projects/mpnmjec/student_mobile_discovery_mockup.webp",
        caption: "Instant Bus Discovery (Mobile View): 1-tap live tracking feed for currently active college transit routes",
        alt: "MPNMJEC Bus Tracker Instant Discovery Screen",
      },
      {
        url: "/projects/mpnmjec/student_mobile_search_mockup.webp",
        caption: "Stop-Based Search (Mobile View): Interactive pickup & destination stop selector with recent trip history",
        alt: "MPNMJEC Bus Tracker Stop Search Screen",
      },
      {
        url: "/projects/mpnmjec/student_mobile_tracking_mockup.webp",
        caption: "Real-Time Telemetry Map (Mobile View): Live GPS route polyline, vehicle marker rotation, and next-stop ETA sheet",
        alt: "MPNMJEC Bus Tracker Live Telemetry Map Screen",
      },
    ],
    skillsUsed: [
      {
        group: "Mobile & Mapping",
        skills: ["Flutter (Dart 3.x)", "flutter_map (v6)", "latlong2", "audioplayers", "lucide_icons", "shared_preferences"],
      },
      {
        group: "Backend & Realtime",
        skills: ["Node.js", "Express REST API", "WebSockets (ws)", "Supabase (PostgreSQL)", "OSRM Routing"],
      },
      {
        group: "Deployment & Systems",
        skills: ["Google Play Store", "Render Cloud Hosting", "JWT Authentication", "Zero-Hardware Fleet Telemetry"],
      },
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.sixmindslabs.mpnmjecbustracker.student",
      githubUrl: "https://github.com/6ixmindslabs-hue/MPNMJBUSES",
    },
  },

  "mpnmjec-driver-app": {
    slug: "mpnmjec-driver-app",
    title: "MPNMJEC Driver Console",
    tagline: "High-frequency smartphone GPS telemetry app with Android Foreground Service, 2s updates, and offline dead-zone buffering.",
    categoryKey: "mobile",
    subcategoryKey: "campus-transit",
    subcategoryTitle: "Campus Transit",
    badge: "🚀 Live on Google Play Store",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    thumbnail: "/projects/mpnmjec/driver_mobile_mockup.webp",
    details: {
      type: "Driver Telemetry & IoT Mobile App",
      duration: "March 2026 – June 2026",
      role: "Lead Full-Stack & Mobile Developer",
      status: "Live on Google Play Store & Fleet Deployed",
      architecture: "Flutter (Dart 3.x), flutter_foreground_task, Geolocator, WebSockets, Supabase, SQLite Buffer",
      clientOrContext: "MPNMJEC Transport Department Fleet Drivers",
    },
    overview: {
      challenge:
        "Commercial fleet tracking requires expensive proprietary GPS/OBD hardware units ($100s/bus plus monthly SIM subscriptions) and bus drivers operate in high-distraction environments across cellular dead zones.",
      solution:
        "Engineered a zero-hardware-cost driver telemetry app that converts drivers' existing smartphones into IoT beacons. Uses an Android Foreground Service to stream GPS pings every 2 seconds via WebSockets with an automatic 500-point offline SQLite buffer.",
      impact:
        "Delivers continuous 2-second telemetry streaming with zero data loss across rural network dead zones, saving the institution thousands in hardware costs while maintaining 99.8% fleet uptime.",
    },
    coreFeatures: [
      {
        title: "1-Tap Trip Lifecycle & Auto Direction",
        description: "One-touch start, pause, resume, and completion workflow with smart auto-detection of outbound (morning) and return (evening) route schedules.",
      },
      {
        title: "Persistent Android Foreground Service",
        description: "Prevents OS task-killer termination using persistent notifications and wakelocks, streaming GPS uninterrupted when phone is locked or screen off.",
      },
      {
        title: "Offline Dead-Zone Queue (500 Points)",
        description: "Automatically buffers up to 500 GPS telemetry coordinates locally during cellular signal dropouts and flushes them to the server upon reconnection.",
      },
      {
        title: "Geofence Stop & Delay Detection",
        description: "80-meter precision radius geofencing for automated stop arrival/departure triggers and dynamic alerts if the trip deviates by > 5 minutes.",
      },
    ],
    gallery: [
      {
        url: "/projects/mpnmjec/driver_mobile_mockup.webp",
        caption: "Driver Console Interface (Mobile View): 1-tap trip initiation, active GPS streaming, and route leg selector",
        alt: "Driver Console Mobile Interface",
      },
      {
        url: "/projects/mpnmjec/mpnmjec_combined_showcase.webp",
        caption: "End-to-End Transit Architecture: Driver telemetry streaming to cloud WebSocket engine and student apps",
        alt: "Driver Showcase in Ecosystem",
      },
      {
        url: "/projects/mpnmjec/live_map_clean.webp",
        caption: "Real-time fleet tracking view showing driver coordinates broadcasted across campus routes",
        alt: "Live Fleet View",
      },
    ],
    skillsUsed: [
      {
        group: "Mobile & Background OS",
        skills: ["Flutter (Dart 3.x)", "flutter_foreground_task", "geolocator", "permission_handler", "flutter_secure_storage"],
      },
      {
        group: "Real-Time Networking",
        skills: ["WebSockets (ws)", "JWT Driver Authentication", "Offline SQLite Buffer", "Exponential Backoff Reconnect"],
      },
      {
        group: "Deployment & Platform",
        skills: ["Google Play Store", "Android Foreground Services", "Battery Optimization", "Wakelock APIs"],
      },
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.sixmindslabs.mpnmjec.driver",
      githubUrl: "https://github.com/6ixmindslabs-hue/MPNMJBUSES",
    },
  },

  // --------------------------------------------------------------------------
  // 2. WEBSITES -> CAMPUS PLATFORMS
  // --------------------------------------------------------------------------
  "mpnmjec-dispatch-console": {
    slug: "mpnmjec-dispatch-console",
    title: "MPNMJEC Transport OS & Command Center",
    tagline: "Real-time fleet command portal with interactive Leaflet route builder, OSRM road geometry rebuild, and live telemetry dispatch.",
    categoryKey: "websites",
    subcategoryKey: "campus-platforms",
    subcategoryTitle: "Campus Platforms",
    badge: "🛰️ Live Fleet Command Center",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    thumbnail: "/projects/mpnmjec/admin_schedule_laptop_mockup.webp",
    details: {
      type: "Full-Stack Web Dispatch & Routing Portal",
      duration: "March 2026 – June 2026",
      role: "Lead Full-Stack Developer",
      status: "Live in Production / Campus Deployed",
      architecture: "React 19, Vite, Tailwind CSS, Leaflet / react-leaflet, Node.js WebSocket Engine, Supabase PostgreSQL, OSRM",
      clientOrContext: "MPNMJEC Campus Transport Management & Dispatch Desk",
    },
    overview: {
      challenge:
        "Transport supervisors lacked real-time visibility into vehicle positions, schedule delays, or driver punctuality, and had no streamlined mechanism to update multi-stop route geometries without tedious manual surveying.",
      solution:
        "Constructed an institutional transit command center featuring an interactive Leaflet route builder, automated OSRM road-snapped polyline generation, live multi-vehicle WebSocket map monitoring, and Supabase fleet CRUD management.",
      impact:
        "Gives campus dispatchers sub-second live visibility across the entire fleet, automating schedule deviation detection (> 5 min) and eliminating manual coordination during peak student transit hours.",
    },
    coreFeatures: [
      {
        title: "Interactive Leaflet Route Builder",
        description: "Point-and-click map interface with OpenStreetMap / Humanitarian HOT tiles to drop bus stops, re-order waypoints, and preview road geometry.",
      },
      {
        title: "Automated OSRM Geometry Rebuild",
        description: "Converts discrete stop coordinates into road-accurate driving polylines and computes precise route distance and estimated travel times.",
      },
      {
        title: "Live Fleet Telemetry Monitoring",
        description: "Real-time WebSocket map displaying active vehicles, 2-second coordinate pings, current speed compliance, and route completion percentages.",
      },
      {
        title: "Master Fleet, Driver & Schedule CRUD",
        description: "Centralized management of buses, drivers, stops, routes, and morning/evening outbound/return schedule pairings powered by Supabase PostgreSQL.",
      },
    ],
    gallery: [
      {
        url: "/projects/mpnmjec/admin_schedule_laptop_mockup.webp",
        caption: "Fleet Schedule & Asset Rostering (Laptop View): Outbound & return time windows, driver allocations, and bus assignments",
        alt: "MPNMJEC Fleet Schedule & Asset Rostering Laptop Mockup",
      },
      {
        url: "/projects/mpnmjec/admin_laptop_mockup.webp",
        caption: "Interactive Leaflet Route Builder (Laptop View): Checkpoint coordinate editor, route corridor selection, and geofence mapping",
        alt: "MPNMJEC Transport Admin Panel Route Builder Laptop Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Web & Mapping",
        skills: ["React 19", "Vite", "Leaflet", "react-leaflet", "Tailwind CSS", "Zustand", "Lucide React"],
      },
      {
        group: "Backend & Routing",
        skills: ["Node.js", "Express REST API", "WebSockets (ws)", "OSRM (Open Source Routing Machine)", "Supabase (PostgreSQL)"],
      },
      {
        group: "Cloud & Security",
        skills: ["Render Cloud Hosting", "Row-Level Security (RLS)", "JWT Driver Auth", "REST & WebSocket Endpoints"],
      },
    ],
    links: {
      liveUrl: "https://adminmpnmjbuses.vercel.app/",
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
  "quizforge-ai": {
    slug: "quizforge-ai",
    title: "QuizForge – AI Assessment & Anti-Cheat Platform",
    tagline: "AI-powered exam platform generating syllabus-aligned assessments in 5–15 seconds with in-browser anti-cheat proctoring.",
    categoryKey: "websites",
    subcategoryKey: "edutech",
    subcategoryTitle: "EduTech",
    badge: "⚡ Groq LPU AI + Firebase",
    badgeColor: "bg-blue-50 text-[#0070f3] border-blue-200",
    thumbnail: "/projects/quizforge/quizforge_dashboard_laptop.webp",
    details: {
      type: "AI-Powered Assessment & Anti-Cheating Examination Platform",
      duration: "May 2026 – Oct 2026 (~4 Months)",
      role: "Solo Full-Stack Developer",
      status: "Live in Production",
      architecture: "React 18, TypeScript, Vite, Groq LPU AI (batch chunking), Firebase Auth, Cloud Firestore, Tailwind CSS",
      clientOrContext: "Educators, Universities & Technical Training Coordinators",
    },
    overview: {
      challenge:
        "Teachers, educators, and bootcamp coordinators spend hours manually crafting quiz questions, researching multiple-choice options, and typing them into generic form builders (like Google Forms). Worse, standard forms have zero exam security—students easily switch tabs, copy-paste questions into search engines or ChatGPT, and submit multiple times using fake names.",
      solution:
        "Architected QuizForge, an end-to-end exam platform that turns any topic prompt or raw lecture notes into 5 to 50+ balanced, categorized quiz questions in 5–15 seconds using Groq AI with a custom batch-chunking engine. Enforces strict client-side exam proctoring—full-screen lock, tab-blur detection, disabled clipboard/context menus, and automated 3-strike submission.",
      impact:
        "Reduces test authoring time by 90% (from hours to 5–15 seconds), delivers 0-friction testing with no student signups required, enforces 1-attempt identity verification, and prevents digital cheating with automated 3-strike exam termination.",
    },
    coreFeatures: [
      {
        title: "Sub-15s AI Generation with Batch Chunking",
        description: "Harnesses Groq LPU hardware acceleration to generate 1 to 50+ questions from topics or lecture notes. Slices large requests into parallel 25-item chunks with strict JSON schema validation to guarantee zero token truncation.",
      },
      {
        title: "In-Browser Anti-Cheat Proctoring Canvas",
        description: "Locks down the student exam experience with mandatory fullscreen mode, Page Visibility tab-switch tracking, blocked right-click menus, and disabled copy/paste events.",
      },
      {
        title: "Automated 3-Strike Violation Termination",
        description: "Monitors infractions in real time; warns the student on attempts to bypass rules, and automatically calculates the score and forces submission upon the 3rd detected strike.",
      },
      {
        title: "Zero-Friction 1-Attempt Verification",
        description: "Students join instantly without creating accounts. Multi-field verification across student email and registration number enforces a strict single-attempt policy.",
      },
      {
        title: "Creator Studio & Live Response Analytics",
        description: "Visual question editor, 3 difficulty tiers (Easy, Medium, Hard), scheduling windows (valid_from to valid_until), and instant CSV export of all student responses.",
      },
    ],
    gallery: [
      {
        url: "/projects/quizforge/quizforge_dashboard_laptop.webp",
        caption: "QuizForge Creator Dashboard (Laptop View): Quiz management roster, active test counters, and quick actions",
        alt: "QuizForge Creator Dashboard Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_ai_modal_laptop.webp",
        caption: "Groq AI Generation Studio (Laptop View): Topic / study notes synthesis, question count, and difficulty tiers",
        alt: "QuizForge Groq AI Generation Studio Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_proctoring_laptop.webp",
        caption: "Anti-Cheating Monitored Assessment (Laptop View): Fullscreen lock, tab-switch tracking, and 3-strike policy",
        alt: "QuizForge Anti-Cheat Proctoring Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_exam_taking_laptop.webp",
        caption: "Live Candidate Exam Canvas (Laptop View): Single-focus test taking environment with distraction-free layout",
        alt: "QuizForge Live Candidate Exam Canvas Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_analytics_laptop.webp",
        caption: "Real-Time Response Analytics & CSV Export (Laptop View): Candidate scores, timestamps, and one-click data export",
        alt: "QuizForge Response Analytics and CSV Export Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_auth_laptop.webp",
        caption: "Teacher Authentication Portal (Laptop View): Firebase Email/Password & Google OAuth sign-in flow",
        alt: "QuizForge Teacher Authentication Portal Laptop Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "React Router v7", "Lucide React"],
      },
      {
        group: "AI & LLM Orchestration",
        skills: ["Groq SDK (LPU Acceleration)", "Prompt Engineering", "Batch-Chunking Engine", "JSON Schema Enforcement", "Model Auto-Fallback"],
      },
      {
        group: "Backend & Cloud Services",
        skills: ["Firebase Authentication (Email & Google)", "Cloud Firestore (NoSQL)", "Firestore Security Rules", "Vercel Deployment", "CSV Export Engine"],
      },
    ],
    links: {
      liveUrl: "https://quizforge-live.vercel.app",
      githubUrl: "https://github.com/dhineshdevtech/quizforge",
    },
  },
  // Backward-compatibility alias for legacy 6ixquest slug
  "6ixquest-ai": {
    slug: "quizforge-ai",
    title: "QuizForge – AI Assessment & Anti-Cheat Platform",
    tagline: "AI-powered exam platform generating syllabus-aligned assessments in 5–15 seconds with in-browser anti-cheat proctoring.",
    categoryKey: "websites",
    subcategoryKey: "edutech",
    subcategoryTitle: "EduTech",
    badge: "⚡ Groq LPU AI + Firebase",
    badgeColor: "bg-blue-50 text-[#0070f3] border-blue-200",
    thumbnail: "/projects/quizforge/quizforge_dashboard_laptop.webp",
    details: {
      type: "AI-Powered Assessment & Anti-Cheating Examination Platform",
      duration: "May 2026 – Oct 2026 (~4 Months)",
      role: "Solo Full-Stack Developer",
      status: "Live in Production",
      architecture: "React 18, TypeScript, Vite, Groq LPU AI (batch chunking), Firebase Auth, Cloud Firestore, Tailwind CSS",
      clientOrContext: "Educators, Universities & Technical Training Coordinators",
    },
    overview: {
      challenge:
        "Teachers, educators, and bootcamp coordinators spend hours manually crafting quiz questions, researching multiple-choice options, and typing them into generic form builders (like Google Forms). Worse, standard forms have zero exam security—students easily switch tabs, copy-paste questions into search engines or ChatGPT, and submit multiple times using fake names.",
      solution:
        "Architected QuizForge, an end-to-end exam platform that turns any topic prompt or raw lecture notes into 5 to 50+ balanced, categorized quiz questions in 5–15 seconds using Groq AI with a custom batch-chunking engine. Enforces strict client-side exam proctoring—full-screen lock, tab-blur detection, disabled clipboard/context menus, and automated 3-strike submission.",
      impact:
        "Reduces test authoring time by 90% (from hours to 5–15 seconds), delivers 0-friction testing with no student signups required, enforces 1-attempt identity verification, and prevents digital cheating with automated 3-strike exam termination.",
    },
    coreFeatures: [
      {
        title: "Sub-15s AI Generation with Batch Chunking",
        description: "Harnesses Groq LPU hardware acceleration to generate 1 to 50+ questions from topics or lecture notes. Slices large requests into parallel 25-item chunks with strict JSON schema validation to guarantee zero token truncation.",
      },
      {
        title: "In-Browser Anti-Cheat Proctoring Canvas",
        description: "Locks down the student exam experience with mandatory fullscreen mode, Page Visibility tab-switch tracking, blocked right-click menus, and disabled copy/paste events.",
      },
      {
        title: "Automated 3-Strike Violation Termination",
        description: "Monitors infractions in real time; warns the student on attempts to bypass rules, and automatically calculates the score and forces submission upon the 3rd detected strike.",
      },
      {
        title: "Zero-Friction 1-Attempt Verification",
        description: "Students join instantly without creating accounts. Multi-field verification across student email and registration number enforces a strict single-attempt policy.",
      },
      {
        title: "Creator Studio & Live Response Analytics",
        description: "Visual question editor, 3 difficulty tiers (Easy, Medium, Hard), scheduling windows (valid_from to valid_until), and instant CSV export of all student responses.",
      },
    ],
    gallery: [
      {
        url: "/projects/quizforge/quizforge_dashboard_laptop.webp",
        caption: "QuizForge Creator Dashboard (Laptop View): Quiz management roster, active test counters, and quick actions",
        alt: "QuizForge Creator Dashboard Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_ai_modal_laptop.webp",
        caption: "Groq AI Generation Studio (Laptop View): Topic / study notes synthesis, question count, and difficulty tiers",
        alt: "QuizForge Groq AI Generation Studio Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_proctoring_laptop.webp",
        caption: "Anti-Cheating Monitored Assessment (Laptop View): Fullscreen lock, tab-switch tracking, and 3-strike policy",
        alt: "QuizForge Anti-Cheat Proctoring Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_exam_taking_laptop.webp",
        caption: "Live Candidate Exam Canvas (Laptop View): Single-focus test taking environment with distraction-free layout",
        alt: "QuizForge Live Candidate Exam Canvas Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_analytics_laptop.webp",
        caption: "Real-Time Response Analytics & CSV Export (Laptop View): Candidate scores, timestamps, and one-click data export",
        alt: "QuizForge Response Analytics and CSV Export Laptop Mockup",
      },
      {
        url: "/projects/quizforge/quizforge_auth_laptop.webp",
        caption: "Teacher Authentication Portal (Laptop View): Firebase Email/Password & Google OAuth sign-in flow",
        alt: "QuizForge Teacher Authentication Portal Laptop Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "React Router v7", "Lucide React"],
      },
      {
        group: "AI & LLM Orchestration",
        skills: ["Groq SDK (LPU Acceleration)", "Prompt Engineering", "Batch-Chunking Engine", "JSON Schema Enforcement", "Model Auto-Fallback"],
      },
      {
        group: "Backend & Cloud Services",
        skills: ["Firebase Authentication (Email & Google)", "Cloud Firestore (NoSQL)", "Firestore Security Rules", "Vercel Deployment", "CSV Export Engine"],
      },
    ],
    links: {
      liveUrl: "https://quizforge-live.vercel.app",
      githubUrl: "https://github.com/dhineshdevtech/quizforge",
    },
  },

  // --------------------------------------------------------------------------
  // 5. WEBSITES -> CORPORATE & AGENCY WEB
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
    tagline: "High-efficiency Point of Sale & billing counter software with 80mm ESC/POS thermal receipt printing, Firebase Cloud Firestore ledger, and multi-format accounting exports.",
    categoryKey: "business",
    subcategoryKey: "commercial-laundry",
    subcategoryTitle: "Commercial Laundry POS",
    badge: "🧾 80mm ESC/POS + Firebase Firestore",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    thumbnail: "/projects/laundry-pos/laundry_order_counter_laptop.webp",
    details: {
      type: "Commercial Laundry & Dry Wash POS",
      duration: "June 2026 – October 2026",
      role: "Solo Full-Stack Developer",
      status: "Live in Production",
      architecture: "React 18, TypeScript, Vite 5, Tailwind CSS, shadcn/ui, Radix UI, Firebase Auth, Cloud Firestore, 80mm ESC/POS Thermal Print, SheetJS (xlsx), jsPDF",
      clientOrContext: "Commercial Laundry & Dry Wash Enterprises",
    },
    overview: {
      challenge:
        "Commercial laundry and dry wash facilities handled hundreds of garment intake transactions daily using handwritten carbon-copy paper slips. Handwritten slips caused frequent mathematical errors during multi-item calculations (price × quantity) and round-off disputes at checkout. Delivery dates and promised return schedules were regularly lost or miscommunicated. Preparing monthly transaction summaries and billing statements for recurring commercial hotel and resort clients (e.g. JK Residency, URC Lodge) required hours of manual bookkeeping.",
      solution:
        "Engineered Laundry & Dry Wash POS, an enterprise cloud point-of-sale and transaction accounting platform with real-time Firebase Cloud Firestore persistence, Firebase Authentication with role-guarded routes, dedicated 80mm ESC/POS thermal receipt printing, predictive client/item auto-complete, and automated multi-format accounting exports (Excel .xlsx and PDF).",
      impact:
        "Reduced customer intake and checkout turnover from ~2 minutes to under 20 seconds (75% faster), automated subtotal round-off to nearest ₹1, eliminated bookkeeping lag with 1-click SheetJS Excel & jsPDF exports, and secured transactions with Firebase multi-provider authentication.",
    },
    coreFeatures: [
      {
        title: "Dedicated 80mm ESC/POS Thermal Receipt Engine",
        description: "Zero-driver-dependency 80mm thermal receipt printing calibrated to standard POS counter hardware roll widths with automatic print prompt triggers.",
      },
      {
        title: "Firebase Cloud Firestore Transaction Ledger",
        description: "Real-time NoSQL document storage with batched transactions, structured collections, and optimistic UI updates.",
      },
      {
        title: "Multi-Format Accounting & Audit Exports",
        description: "One-click client-side export to structured Excel spreadsheets via SheetJS (.xlsx) and tabular financial audit reports via jsPDF.",
      },
      {
        title: "Predictive Counter Intake & Auto-Suggest",
        description: "Fast garment presets (shirts, sarees, bedcovers) and auto-complete for recurring commercial hotel accounts (JK Residency, URC Lodge) with intake and delivery scheduling.",
      },
      {
        title: "Firebase Auth & Role-Guarded POS Routes",
        description: "Email/password and 1-click Google OAuth authentication with protected route guards preserving active intake screens across sessions.",
      },
    ],
    gallery: [
      {
        url: "/projects/laundry-pos/laundry_order_counter_laptop.webp",
        caption: "Counter Order Generation (Laptop View): Predictive item presets, customer details, and intake/delivery scheduling",
        alt: "Laundry POS Order Intake Laptop Mockup",
      },
      {
        url: "/projects/laundry-pos/laundry_billing_checkout_laptop.webp",
        caption: "Billing Calculations & Checkout (Laptop View): Real-time INR subtotal, round-off adjustment, and 80mm ESC/POS thermal print trigger",
        alt: "Laundry POS Billing and Checkout Laptop Mockup",
      },
      {
        url: "/projects/laundry-pos/laundry_dashboard_ledger_laptop.webp",
        caption: "Transaction Ledger & Accounting Exports (Laptop View): Real-time Firestore orders with 1-click Excel (.xlsx) and PDF reports",
        alt: "Laundry POS Transaction Ledger Laptop Mockup",
      },
      {
        url: "/projects/laundry-pos/laundry_auth_portal_laptop.webp",
        caption: "Staff Authentication Portal (Laptop View): Firebase Email/Password & 1-Click Google OAuth login with route guards",
        alt: "Laundry POS Authentication Portal Laptop Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 18", "TypeScript", "Vite 5", "Tailwind CSS", "shadcn/ui", "Radix UI", "Lucide React"],
      },
      {
        group: "Printing & Document Engines",
        skills: ["80mm ESC/POS Thermal Print CSS", "SheetJS (xlsx)", "jsPDF", "jspdf-autotable"],
      },
      {
        group: "Cloud Backend & Security",
        skills: ["Firebase Authentication (Email & Google)", "Cloud Firestore (NoSQL)", "Firestore Security Rules", "Vercel SPA Hosting"],
      },
    ],
    links: {
      liveUrl: "https://laundrypos-live.vercel.app",
      githubUrl: "https://github.com/dhineshdevtech/Invoice_generator",
    },
  },
  // Backward-compatibility alias for laundry-pos slug
  "laundry-pos": {
    slug: "invoice-generator",
    title: "Quick Laundry POS & Receipt Generator",
    tagline: "High-efficiency Point of Sale & billing counter software with 80mm ESC/POS thermal receipt printing, Firebase Cloud Firestore ledger, and multi-format accounting exports.",
    categoryKey: "business",
    subcategoryKey: "commercial-laundry",
    subcategoryTitle: "Commercial Laundry POS",
    badge: "🧾 80mm ESC/POS + Firebase Firestore",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    thumbnail: "/projects/laundry-pos/laundry_order_counter_laptop.webp",
    details: {
      type: "Commercial Laundry & Dry Wash POS",
      duration: "June 2026 – October 2026",
      role: "Solo Full-Stack Developer",
      status: "Live in Production",
      architecture: "React 18, TypeScript, Vite 5, Tailwind CSS, shadcn/ui, Radix UI, Firebase Auth, Cloud Firestore, 80mm ESC/POS Thermal Print, SheetJS (xlsx), jsPDF",
      clientOrContext: "Commercial Laundry & Dry Wash Enterprises",
    },
    overview: {
      challenge:
        "Commercial laundry and dry wash facilities handled hundreds of garment intake transactions daily using handwritten carbon-copy paper slips. Handwritten slips caused frequent mathematical errors during multi-item calculations (price × quantity) and round-off disputes at checkout. Delivery dates and promised return schedules were regularly lost or miscommunicated. Preparing monthly transaction summaries and billing statements for recurring commercial hotel and resort clients (e.g. JK Residency, URC Lodge) required hours of manual bookkeeping.",
      solution:
        "Engineered Laundry & Dry Wash POS, an enterprise cloud point-of-sale and transaction accounting platform with real-time Firebase Cloud Firestore persistence, Firebase Authentication with role-guarded routes, dedicated 80mm ESC/POS thermal receipt printing, predictive client/item auto-complete, and automated multi-format accounting exports (Excel .xlsx and PDF).",
      impact:
        "Reduced customer intake and checkout turnover from ~2 minutes to under 20 seconds (75% faster), automated subtotal round-off to nearest ₹1, eliminated bookkeeping lag with 1-click SheetJS Excel & jsPDF exports, and secured transactions with Firebase multi-provider authentication.",
    },
    coreFeatures: [
      {
        title: "Dedicated 80mm ESC/POS Thermal Receipt Engine",
        description: "Zero-driver-dependency 80mm thermal receipt printing calibrated to standard POS counter hardware roll widths with automatic print prompt triggers.",
      },
      {
        title: "Firebase Cloud Firestore Transaction Ledger",
        description: "Real-time NoSQL document storage with batched transactions, structured collections, and optimistic UI updates.",
      },
      {
        title: "Multi-Format Accounting & Audit Exports",
        description: "One-click client-side export to structured Excel spreadsheets via SheetJS (.xlsx) and tabular financial audit reports via jsPDF.",
      },
      {
        title: "Predictive Counter Intake & Auto-Suggest",
        description: "Fast garment presets (shirts, sarees, bedcovers) and auto-complete for recurring commercial hotel accounts (JK Residency, URC Lodge) with intake and delivery scheduling.",
      },
      {
        title: "Firebase Auth & Role-Guarded POS Routes",
        description: "Email/password and 1-click Google OAuth authentication with protected route guards preserving active intake screens across sessions.",
      },
    ],
    gallery: [
      {
        url: "/projects/laundry-pos/laundry_order_counter_laptop.webp",
        caption: "Counter Order Generation (Laptop View): Predictive item presets, customer details, and intake/delivery scheduling",
        alt: "Laundry POS Order Intake Laptop Mockup",
      },
      {
        url: "/projects/laundry-pos/laundry_billing_checkout_laptop.webp",
        caption: "Billing Calculations & Checkout (Laptop View): Real-time INR subtotal, round-off adjustment, and 80mm ESC/POS thermal print trigger",
        alt: "Laundry POS Billing and Checkout Laptop Mockup",
      },
      {
        url: "/projects/laundry-pos/laundry_dashboard_ledger_laptop.webp",
        caption: "Transaction Ledger & Accounting Exports (Laptop View): Real-time Firestore orders with 1-click Excel (.xlsx) and PDF reports",
        alt: "Laundry POS Transaction Ledger Laptop Mockup",
      },
      {
        url: "/projects/laundry-pos/laundry_auth_portal_laptop.webp",
        caption: "Staff Authentication Portal (Laptop View): Firebase Email/Password & 1-Click Google OAuth login with route guards",
        alt: "Laundry POS Authentication Portal Laptop Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 18", "TypeScript", "Vite 5", "Tailwind CSS", "shadcn/ui", "Radix UI", "Lucide React"],
      },
      {
        group: "Printing & Document Engines",
        skills: ["80mm ESC/POS Thermal Print CSS", "SheetJS (xlsx)", "jsPDF", "jspdf-autotable"],
      },
      {
        group: "Cloud Backend & Security",
        skills: ["Firebase Authentication (Email & Google)", "Cloud Firestore (NoSQL)", "Firestore Security Rules", "Vercel SPA Hosting"],
      },
    ],
    links: {
      liveUrl: "https://laundrypos-live.vercel.app",
      githubUrl: "https://github.com/dhineshdevtech/Invoice_generator",
    },
  },
};
