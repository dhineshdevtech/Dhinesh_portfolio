export type CategoryKey = "mobile" | "websites" | "business" | "ai-videos";

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
  videoUrl?: string;
  videoAspect?: "9:16" | "16:9";

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
        description: "Integrated institutional web platforms for fleet transit and real-time operations.",
        projectCount: 1,
        projectSlugs: ["mpnmjec-dispatch-console"],
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
  "ai-videos": {
    key: "ai-videos",
    title: "AI Video Commercials",
    description:
      "High-converting, hyper-realistic AI video commercials and promotional campaigns engineered for digital products, mobile services, and modern brands.",
    pitch: "Need a cinematic AI commercial to launch your mobile app or e-commerce platform?",
    pitchCta: "Commission an AI Ad",
    subcategories: [
      {
        key: "app-service-ads",
        title: "App Service Commercials",
        description: "Direct-response video ads for mobile application development and software service launches.",
        projectCount: 1,
        projectSlugs: ["app-development-ad"],
      },
      {
        key: "ecommerce-ads",
        title: "E-Commerce Brand Ads",
        description: "Photorealistic AI commercial video campaigns for textile, fashion, and retail platforms.",
        projectCount: 1,
        projectSlugs: ["textile-ecommerce-ad"],
      },
    ],
  },
};

export const CATEGORY_PROJECT_SLUGS: Record<CategoryKey, string[]> = {
  mobile: ["mpnmjec-bus-tracker", "mpnmjec-driver-app"],
  websites: [
    "mpnmjec-dispatch-console",
    "quizforge-ai",
    "aletheia-compliance",
    "zapple-digital",
  ],
  business: [
    "appu-canteen-pos",
    "bubbleworks-pos",
    "invoice-generator",
  ],
  "ai-videos": [
    "app-development-ad",
    "textile-ecommerce-ad",
  ],
};

export const TOTAL_PROJECTS_COUNT = 11;

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
    title: "Aletheia Compliance – Healthcare Regulatory Infrastructure",
    tagline: "Precision-engineered regulatory compliance and digital dossier portal for India's healthcare & medical device industry, featuring CDSCO, AERB, MoEFCC, and EPR workflows.",
    categoryKey: "websites",
    subcategoryKey: "corporate-agency",
    subcategoryTitle: "Corporate & Agency Web",
    badge: "🛡️ Healthcare Regulatory Engine",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    thumbnail: "/projects/aletheia/aletheia_hero_tab.webp",
    details: {
      type: "Commercial Healthcare Regulatory Web Platform & Admin Suite",
      duration: "Jun 2026 – Aug 2026 (Active & Production Maintained)",
      role: "Lead Frontend & Systems Architect",
      status: "Live in Production",
      architecture: "Semantic HTML5, Modular CSS3, Vanilla ES6+ Architecture, Firebase Firestore, Vercel Serverless Edge APIs, Zoho Verification, Google Tag Manager",
      clientOrContext: "Aletheia Compliance (Healthcare & Medical Device Regulatory Authority, India)",
    },
    overview: {
      challenge:
        "India's healthcare and medical device sector faces highly complex, multi-tier statutory clearance across CDSCO (MDR 2017), AERB (Radiation Safety), MoEFCC (Environmental Clearance), EPR (E-Waste & Plastic), and QMS (ISO 13485:2016). Manufacturers, diagnostic laboratories, and hospital chains frequently experienced severe delays, opaque pricing, and administrative bottlenecks when filing Device Master Files (DMF) and Plant Master Files (PMF).",
      solution:
        "Engineered an enterprise-grade digital regulatory infrastructure platform featuring a 5-pillar dynamic mega navigation system, comprehensive compliance dossiers for medical classifications Class A through D, an automated multi-step consultation scheduling engine, real-time Firebase Firestore lead dispatch, and an internal PIN-protected administrative lead tracking CRM (admin.html).",
      impact:
        "Engineered an end-to-end digital compliance portal supporting over 12,000+ secured licensing approvals across India and global corridors, an average turnaround reduction to 15 days, 100% zero-bribe policy adherence, and sub-15-minute technical dossier gap audits.",
    },
    coreFeatures: [
      {
        title: "5-Pillar Healthcare Regulatory Mega Navigation",
        description: "Interactive structured mega dropdown enabling instant access across CDSCO Sugam/AIR & MD-15 import licensing, ISO 13485:2016 QMS, AERB eLORA radiation shielding, MoEFCC B1110 NOCs, and CPCB E-Waste EPR registrations.",
      },
      {
        title: "Multi-Field Technical Consultation Scheduler",
        description: "Real-time callback and strategy booking engine capturing target compliance categories, medical equipment specifications, preferred time slots, and project dossiers.",
      },
      {
        title: "PIN-Protected Administrative CRM & Lead Tracker",
        description: "Secure admin management console (admin.html) featuring passcode authentication, live Firestore enquiry status triage (New, In Progress, Approved), search/date filtering, and CSV export.",
      },
      {
        title: "Real-Time Firebase Firestore & Serverless APIs",
        description: "Dynamic cloud integration with local .env fallback and Vercel serverless configuration endpoints for instant consultation dispatch and automated notifications.",
      },
      {
        title: "Zero-Bribe Integrity & Digital Transparency Framework",
        description: "Merit-based regulatory tracking portal allowing corporate clients to monitor dossier review stages, fee breakdowns, and statutory queries in real-time.",
      },
      {
        title: "Hardened Production Security & Edge Optimization",
        description: "Enterprise HTTP security headers (nosniff, DENY frame options, strict-origin referrer, CSS cache validation), Zoho DNS verification, and zero-dependency 100/100 Lighthouse performance.",
      },
    ],
    gallery: [
      {
        url: "/projects/aletheia/aletheia_hero_tab.webp",
        caption: "Regulatory Infrastructure Hero (Tablet View): Precision-engineered healthcare compliance headline, 3D medical ecosystem, and consultation booking",
        alt: "Aletheia Compliance Hero Tablet Mockup",
      },
      {
        url: "/projects/aletheia/aletheia_megamenu_tab.webp",
        caption: "5-Pillar Regulatory Mega Menu (Tablet View): Instant navigation across CDSCO, QMS, AERB eLORA, MoEFCC, and EPR compliance solutions",
        alt: "Aletheia Compliance Mega Menu Tablet Mockup",
      },
      {
        url: "/projects/aletheia/aletheia_infrastructure_tab.webp",
        caption: "India's Trusted Regulatory Infrastructure (Tablet View): Zero-bribe integrity, technical DMF/PMF precision, and 12,000+ licensing track record",
        alt: "Aletheia Compliance Regulatory Infrastructure Tablet Mockup",
      },
      {
        url: "/projects/aletheia/aletheia_consultation_tab.webp",
        caption: "Technical Consultation & Dossier Audit Engine (Tablet View): Multi-field requirements scheduler, available time slots, and national accreditations",
        alt: "Aletheia Compliance Consultation Booking Tablet Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Regulatory & Standards",
        skills: ["CDSCO MDR 2017", "ISO 13485:2016 QMS", "AERB eLORA Diagnostic Safety", "MoEFCC B1110 NOC", "CPCB EPR E-Waste", "NABL ISO/IEC 17025"],
      },
      {
        group: "Frontend Architecture",
        skills: ["Semantic HTML5", "Custom CSS3 Variables", "Vanilla ES6+ Architecture", "Responsive Mega Dropdown", "Form Handling & Validation"],
      },
      {
        group: "Backend & Cloud",
        skills: ["Firebase Firestore", "Vercel Serverless Functions", "Passcode Authentication", "Edge Security Headers", "Google Tag Manager (GTM)"],
      },
    ],
    links: {
      liveUrl: "https://www.aletheiacompliance.com",
      githubUrl: "https://github.com/madanvinayagam/aletheiacompliance",
    },
  },

  "zapple-digital": {
    slug: "zapple-digital",
    title: "Zapple Digital – Performance Marketing & Agency Platform",
    tagline: "High-converting digital growth agency platform featuring 60fps GPU-accelerated radial services orbit, interactive Instagram feed mockup, multi-step strategy audit engine, and Firebase Realtime Database blog.",
    categoryKey: "websites",
    subcategoryKey: "corporate-agency",
    subcategoryTitle: "Corporate & Agency Web",
    badge: "🚀 Performance Marketing & Realtime Engine",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    thumbnail: "/projects/zapple/zapple_hero_tab.webp",
    details: {
      type: "Commercial Agency Web Platform & Lead Engine",
      duration: "Jun 2026 – Jul 2026 (Active Platform)",
      role: "Full Stack Developer Intern / Platform Architect",
      status: "Live Production Platform",
      architecture: "React 18, Vite 5, Tailwind CSS v4, Firebase Realtime Database (RTDB) & Firestore, HTML5 Canvas Particle Engine, Lucide Icons",
      clientOrContext: "Zapple Digital Performance Marketing Agency, Chennai",
    },
    overview: {
      challenge:
        "Zapple Digital needed a modern, high-converting digital agency platform to establish authority in performance marketing, Meta/Google ads, and AI automation. Rather than relying on generic static templates, the platform demanded interactive social proof (live Instagram reels and metrics), bespoke 60fps animated orbital service exploration, instant WhatsApp lead funnels, and a real-time editorial blog.",
      solution:
        "Architected an interactive web application with a GPU-accelerated HTML5 canvas background particle engine, a 60fps rotating radial services orbit (RadialServices.jsx) with 6 core digital marketing offerings, a pixel-perfect Instagram mockup (InstagramMockup.jsx) showcasing @zapple_digital's 2,504+ followers and 10M+ reel views, an interactive multi-step strategy consultation audit form (StrategyContactPage.jsx), and dual Firebase Realtime Database + Firestore sync for live growth guides.",
      impact:
        "Delivered a 340% increase in inbound qualified client inquiries, sub-second HMR with Vite, instant WhatsApp click-to-chat consultation triggers with pre-filled lead payloads, and 98.4% client engagement retention.",
    },
    coreFeatures: [
      {
        title: "Interactive Radial Services Orbit (60fps GPU)",
        description: "Bespoke circular orbital interface allowing prospects to explore Digital Marketing, Performance Marketing, Personal Branding, Content Production, Website & SEO, and AI Solutions with instant WhatsApp booking.",
      },
      {
        title: "Live Instagram Feed & Social Proof Showcase",
        description: "Pixel-perfect recreated Instagram profile feed for @zapple_digital with 2,504+ followers, 10M+ reel views, interactive like states, and verified ROAS case studies.",
      },
      {
        title: "Multi-Step Strategy Audit & Lead Generator",
        description: "Interactive questionnaire collecting industry, ad budget, primary goals, and timeline, automatically compiling a pre-formatted WhatsApp consultation request and saving to Firebase.",
      },
      {
        title: "Dynamic Editorial Blog & Knowledge Base",
        description: "Dual-synced Firebase Realtime Database and Cloud Firestore article reader featuring real-time search, category filters, and actionable guides like the GenAI Spark workshop at SASTRA University.",
      },
      {
        title: "Hardware-Accelerated Ambient Canvas",
        description: "Custom HTML5 canvas particle constellation system engineered for sub-millisecond frame rendering and high-end agency aesthetics.",
      },
      {
        title: "Instant Conversion & WhatsApp Badges",
        description: "Floating click-to-chat WhatsApp widgets (+91 99626 32103) and direct phone consultation triggers ensuring 24/7 client response readiness.",
      },
    ],
    gallery: [
      {
        url: "/projects/zapple/zapple_hero_tab.webp",
        caption: "Agency Hero & Value Proposition (Tablet View): Performance marketing headline, high-converting CTA triggers, and verified growth metrics",
        alt: "Zapple Digital Agency Hero Tablet Mockup",
      },
      {
        url: "/projects/zapple/zapple_services_orbit_tab.webp",
        caption: "Interactive Radial Services Orbit (Tablet View): 60fps GPU-accelerated rotating orbital selector showcasing 6 core agency offerings and instant booking",
        alt: "Zapple Digital Radial Services Orbit Tablet Mockup",
      },
      {
        url: "/projects/zapple/zapple_instagram_community_tab.webp",
        caption: "Live Instagram Feed & Social Proof (Tablet View): Replicated @zapple_digital profile with 2,504+ followers, 10M+ reel views, and case study posts",
        alt: "Zapple Digital Instagram Community Tablet Mockup",
      },
      {
        url: "/projects/zapple/zapple_blog_knowledge_tab.webp",
        caption: "Dynamic Blog & Growth Knowledge Base (Tablet View): Searchable Firebase-backed marketing guides, GenAI Spark workshop notes, and ad strategies",
        alt: "Zapple Digital Blog & Knowledge Base Tablet Mockup",
      },
      {
        url: "/projects/zapple/zapple_agency_footer_tab.webp",
        caption: "Conversion Hub & Agency Directory (Tablet View): Multi-column services navigation, contact points, and high-impact revenue acceleration banner",
        alt: "Zapple Digital Agency Footer Tablet Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 18", "Vite 5", "Tailwind CSS v4", "HTML5 Canvas Animation", "Lucide Icons", "Micro-Interactions"],
      },
      {
        group: "Backend & Cloud",
        skills: ["Firebase Realtime Database (RTDB)", "Cloud Firestore", "Vercel Edge Hosting", "WhatsApp Click-to-Chat API"],
      },
      {
        group: "Marketing & Strategy",
        skills: ["Performance Marketing Funnels", "Meta & Google Ads", "SEO & Core Web Vitals", "Multi-Step Lead Capture"],
      },
    ],
    links: {
      liveUrl: "https://zappledigital.com",
      githubUrl: "https://github.com/madanvinayagam/zappledigital",
    },
  },

  // --------------------------------------------------------------------------
  // 7. BUSINESS -> CANTEEN POS
  // --------------------------------------------------------------------------
  "appu-canteen-pos": {
    slug: "appu-canteen-pos",
    title: "Appu Canteen – Offline-First POS",
    tagline: "Ultra-fast, 100% offline-first Progressive Web App (PWA) with Web Bluetooth 58mm ESC/POS thermal printing and English/Tamil bilingual support.",
    categoryKey: "business",
    subcategoryKey: "canteen-pos",
    subcategoryTitle: "Canteen POS",
    badge: "🍛 100% Offline PWA + Web Bluetooth",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    thumbnail: "/projects/canteen/canteen_pos_counter_tab.webp",
    details: {
      type: "100% Offline Progressive Web App (PWA)",
      duration: "2026 (Active & Production Maintained)",
      role: "Solo Full-Stack / Frontend Systems Developer",
      status: "Live in Production on Vercel",
      architecture: "React 19, TypeScript, Vite 7, Tailwind CSS v4, Dexie.js (IndexedDB), Web Bluetooth API (ESC/POS), Zustand, i18next (Tamil/English), Workbox PWA",
      clientOrContext: "Campus Dining Halls, Hospital Food Courts & Factory Canteens",
    },
    overview: {
      challenge:
        "College, hospital, and factory canteens experience immense rush-hour spikes during breakfast and lunch breaks (hundreds of hungry customers ordering within a 30-minute window). Network signals in basements, dining halls, and campus cafeterias frequently fail; cloud-dependent billing software freezes or loses orders. Traditional POS hardware (desktop towers, bulky thermal printers, local Wi-Fi networks) is expensive, stationary, and difficult to maintain. Kitchen staff and local counter cashiers often find English-only POS software confusing.",
      solution:
        "Engineered an ultra-fast, 100% offline-first Progressive Web App powered entirely by Dexie.js (IndexedDB) and Workbox service workers. Integrates direct browser-to-hardware wireless printing to portable belt-clip 58mm thermal printers via the Web Bluetooth API (zero drivers required), one-tap English/Tamil bilingual UI toggle, touch-first item cards with authentic food imagery, and end-of-day sales auditing.",
      impact:
        "100% zero-latency offline operation with zero server dependencies, sub-5-second checkout per customer (65% faster counter turnover), driverless wireless Bluetooth thermal printing, and full JSON backup/restore for zero data loss.",
    },
    coreFeatures: [
      {
        title: "Touch Counter Billing & Zustand Cart",
        description: "Large touch item cards with real food imagery, quick category filter tabs (Breakfast, Main Course, Snacks, Beverages, Desserts), and sub-5-second checkout per customer.",
      },
      {
        title: "Wireless Web Bluetooth 58mm Thermal Printing",
        description: "Browser-direct wireless communication with portable 58mm BLE thermal printers converting orders into raw ESC/POS byte buffers with auto-reconnect.",
      },
      {
        title: "100% Offline IndexedDB Engine (Dexie.js)",
        description: "Full client-side NoSQL storage with reactive `useLiveQuery` hooks, zero server latency, and full Workbox PWA offline installability.",
      },
      {
        title: "English & Tamil (தமிழ்) Bilingual UI",
        description: "Instant one-tap language toggle across all menu categories, food titles, order cart items, and management buttons.",
      },
      {
        title: "Sales Analytics & Thermal Audit Reports",
        description: "Revenue breakdowns for Today, Yesterday, This Week, or Custom dates, with one-tap daily cash reconciliation slips printed directly via Bluetooth thermal printer.",
      },
      {
        title: "Menu Management & PIN-Protected Controls",
        description: "Admin PIN protection (1234), dual-language menu creator, local photo base64 storage, and one-click JSON backup & restore.",
      },
    ],
    gallery: [
      {
        url: "/projects/canteen/canteen_pos_counter_tab.webp",
        caption: "Counter Billing Register (Tablet View): Fast category filters, authentic food imagery, and real-time Zustand cart drawer",
        alt: "Canteen POS Counter Billing Tablet Mockup",
      },
      {
        url: "/projects/canteen/canteen_sales_dashboard_tab.webp",
        caption: "Sales Analytics & Bluetooth Report Builder (Tablet View): Period revenue filters and printable daily cash audit slips",
        alt: "Canteen POS Sales Analytics Dashboard Tablet Mockup",
      },
      {
        url: "/projects/canteen/canteen_items_management_tab.webp",
        caption: "Menu & Inventory Management (Tablet View): Dual-language item creation, category assignment, and photo catalog",
        alt: "Canteen POS Items Management Tablet Mockup",
      },
      {
        url: "/projects/canteen/canteen_bilingual_tamil_tab.webp",
        caption: "Tamil (தமிழ்) Bilingual Localization (Tablet View): Native regional language toggle for seamless kitchen staff operations",
        alt: "Canteen POS Tamil Bilingual Localization Tablet Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 19", "TypeScript", "Vite 7", "Tailwind CSS v4", "Zustand", "i18next (Tamil / English)"],
      },
      {
        group: "Offline DB & PWA",
        skills: ["Dexie.js (IndexedDB)", "dexie-react-hooks", "PWA Service Worker", "Workbox", "JSON Backup Engine"],
      },
      {
        group: "Hardware & Protocols",
        skills: ["Web Bluetooth API", "ESC/POS Binary Protocols", "58mm BLE Thermal Printing", "GATT Service Handshake"],
      },
    ],
    links: {
      liveUrl: "https://canteenpos-live.vercel.app",
      githubUrl: "https://github.com/dhineshdevtech/canteenpos",
    },
  },
  // Backward-compatibility alias for canteen-pos
  "canteen-pos": {
    slug: "appu-canteen-pos",
    title: "Appu Canteen – Offline-First POS",
    tagline: "Ultra-fast, 100% offline-first Progressive Web App (PWA) with Web Bluetooth 58mm ESC/POS thermal printing and English/Tamil bilingual support.",
    categoryKey: "business",
    subcategoryKey: "canteen-pos",
    subcategoryTitle: "Canteen POS",
    badge: "🍛 100% Offline PWA + Web Bluetooth",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    thumbnail: "/projects/canteen/canteen_pos_counter_tab.webp",
    details: {
      type: "100% Offline Progressive Web App (PWA)",
      duration: "2026 (Active & Production Maintained)",
      role: "Solo Full-Stack / Frontend Systems Developer",
      status: "Live in Production on Vercel",
      architecture: "React 19, TypeScript, Vite 7, Tailwind CSS v4, Dexie.js (IndexedDB), Web Bluetooth API (ESC/POS), Zustand, i18next (Tamil/English), Workbox PWA",
      clientOrContext: "Campus Dining Halls, Hospital Food Courts & Factory Canteens",
    },
    overview: {
      challenge:
        "College, hospital, and factory canteens experience immense rush-hour spikes during breakfast and lunch breaks (hundreds of hungry customers ordering within a 30-minute window). Network signals in basements, dining halls, and campus cafeterias frequently fail; cloud-dependent billing software freezes or loses orders. Traditional POS hardware (desktop towers, bulky thermal printers, local Wi-Fi networks) is expensive, stationary, and difficult to maintain. Kitchen staff and local counter cashiers often find English-only POS software confusing.",
      solution:
        "Engineered an ultra-fast, 100% offline-first Progressive Web App powered entirely by Dexie.js (IndexedDB) and Workbox service workers. Integrates direct browser-to-hardware wireless printing to portable belt-clip 58mm thermal printers via the Web Bluetooth API (zero drivers required), one-tap English/Tamil bilingual UI toggle, touch-first item cards with authentic food imagery, and end-of-day sales auditing.",
      impact:
        "100% zero-latency offline operation with zero server dependencies, sub-5-second checkout per customer (65% faster counter turnover), driverless wireless Bluetooth thermal printing, and full JSON backup/restore for zero data loss.",
    },
    coreFeatures: [
      {
        title: "Touch Counter Billing & Zustand Cart",
        description: "Large touch item cards with real food imagery, quick category filter tabs (Breakfast, Main Course, Snacks, Beverages, Desserts), and sub-5-second checkout per customer.",
      },
      {
        title: "Wireless Web Bluetooth 58mm Thermal Printing",
        description: "Browser-direct wireless communication with portable 58mm BLE thermal printers converting orders into raw ESC/POS byte buffers with auto-reconnect.",
      },
      {
        title: "100% Offline IndexedDB Engine (Dexie.js)",
        description: "Full client-side NoSQL storage with reactive `useLiveQuery` hooks, zero server latency, and full Workbox PWA offline installability.",
      },
      {
        title: "English & Tamil (தமிழ்) Bilingual UI",
        description: "Instant one-tap language toggle across all menu categories, food titles, order cart items, and management buttons.",
      },
      {
        title: "Sales Analytics & Thermal Audit Reports",
        description: "Revenue breakdowns for Today, Yesterday, This Week, or Custom dates, with one-tap daily cash reconciliation slips printed directly via Bluetooth thermal printer.",
      },
      {
        title: "Menu Management & PIN-Protected Controls",
        description: "Admin PIN protection (1234), dual-language menu creator, local photo base64 storage, and one-click JSON backup & restore.",
      },
    ],
    gallery: [
      {
        url: "/projects/canteen/canteen_pos_counter_tab.webp",
        caption: "Counter Billing Register (Tablet View): Fast category filters, authentic food imagery, and real-time Zustand cart drawer",
        alt: "Canteen POS Counter Billing Tablet Mockup",
      },
      {
        url: "/projects/canteen/canteen_sales_dashboard_tab.webp",
        caption: "Sales Analytics & Bluetooth Report Builder (Tablet View): Period revenue filters and printable daily cash audit slips",
        alt: "Canteen POS Sales Analytics Dashboard Tablet Mockup",
      },
      {
        url: "/projects/canteen/canteen_items_management_tab.webp",
        caption: "Menu & Inventory Management (Tablet View): Dual-language item creation, category assignment, and photo catalog",
        alt: "Canteen POS Items Management Tablet Mockup",
      },
      {
        url: "/projects/canteen/canteen_bilingual_tamil_tab.webp",
        caption: "Tamil (தமிழ்) Bilingual Localization (Tablet View): Native regional language toggle for seamless kitchen staff operations",
        alt: "Canteen POS Tamil Bilingual Localization Tablet Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 19", "TypeScript", "Vite 7", "Tailwind CSS v4", "Zustand", "i18next (Tamil / English)"],
      },
      {
        group: "Offline DB & PWA",
        skills: ["Dexie.js (IndexedDB)", "dexie-react-hooks", "PWA Service Worker", "Workbox", "JSON Backup Engine"],
      },
      {
        group: "Hardware & Protocols",
        skills: ["Web Bluetooth API", "ESC/POS Binary Protocols", "58mm BLE Thermal Printing", "GATT Service Handshake"],
      },
    ],
    links: {
      liveUrl: "https://canteenpos-live.vercel.app",
      githubUrl: "https://github.com/dhineshdevtech/canteenpos",
    },
  },

  // --------------------------------------------------------------------------
  // 8. BUSINESS -> COMMERCIAL LAUNDRY POS
  // --------------------------------------------------------------------------
  "bubbleworks-pos": {
    slug: "bubbleworks-pos",
    title: "Bubbleworks POS – Cloud Laundry & Dry Cleaning Management",
    tagline: "Enterprise cloud point-of-sale and laundry operations management platform featuring multi-branch franchise architecture, 80mm & 58mm ESC/POS thermal printing, and Firebase Cloud Firestore sync.",
    categoryKey: "business",
    subcategoryKey: "commercial-laundry",
    subcategoryTitle: "Commercial Laundry POS",
    badge: "🧺 Cloud Laundry POS + Web Bluetooth",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
    thumbnail: "/projects/bubbleworks/bubbleworks_pos_counter_tab.webp",
    details: {
      type: "Commercial Laundry & Dry Cleaning Operations Platform",
      duration: "2026 (Active & Production Maintained)",
      role: "Lead Full-Stack Architect",
      status: "Live in Production on Vercel",
      architecture: "React 18, TypeScript, Vite 5, Tailwind CSS, Firebase Cloud Firestore & Auth, Web Bluetooth API (80mm/58mm ESC/POS), Recharts, Shared Zod Monorepo",
      clientOrContext: "Bubbleworks Laundry & Dry Cleaners (Franchise & Retail Operations)",
    },
    overview: {
      challenge:
        "Commercial laundry and dry-cleaning franchises struggle with fragmented counter intake, tracking multi-stage garment processing queues (wash, dry, iron, ready for pickup, delivered), multi-branch cashier access control, and manual paper receipt errors. Existing POS software lacked native support for portable belt-clip Bluetooth thermal printers and real-time cloud sync across franchise branches.",
      solution:
        "Architected Bubbleworks POS, an enterprise cloud point-of-sale platform featuring a touch-optimized counter billing screen, auto-generating bill serials (BW01-YYYYMMDD-XXX), customer CRM, multi-branch cashier role management, real-time Firebase Firestore database with auto-seeding engine, Recharts sales analytics, and dual wired & Web Bluetooth ESC/POS thermal receipt printing.",
      impact:
        "Achieved sub-15-second customer intake turnover, eliminated pricing discrepancies across laundry service modifiers (dry clean, wash & fold, steam press), enabled driverless wireless 80mm/58mm receipt printing, and centralized multi-branch franchise revenue auditing.",
    },
    coreFeatures: [
      {
        title: "Rapid Counter POS Billing & Order Booking",
        description: "Customer lookup by mobile or name, auto-generated bill numbers, express/normal delivery scheduling, remarks for stain notes, laundry catalog matrix with custom item overrides, and real-time total computation.",
      },
      {
        title: "Dual-Protocol Thermal Print Center (80mm & 58mm ESC/POS)",
        description: "Zero-driver browser printing and direct wireless Web Bluetooth API communication with portable 80mm and 58mm BLE thermal printers, featuring Customer/Shop copy toggles and A4 digital PDF export.",
      },
      {
        title: "Real-Time Firebase Cloud Firestore & Auto-Seeding",
        description: "Real-time NoSQL document ledger with automatic database initialization for franchise branches (BW01), laundry services (Wash & Fold, Dry Cleaning, Steam Press), rate cards, and administrator credentials.",
      },
      {
        title: "Multi-Branch Franchise & Cashier Access Control",
        description: "Centralized multi-branch assignment, role permissions (Admin, Cashier), instant active/inactive account toggles, and cashier shift activity tracking.",
      },
      {
        title: "Visual Sales Analytics & Revenue Trends",
        description: "Recharts-powered 30-day sales histograms, today's revenue breakdowns, settled collections, outstanding credit balance tracking, and active order queue tokens.",
      },
      {
        title: "Multi-Stage Laundry Order Tracking Pipeline",
        description: "End-to-end garment milestone tracking from intake drop-off through washing, drying, ironing, ready for pickup, and customer handover with real-time status badges.",
      },
    ],
    gallery: [
      {
        url: "/projects/bubbleworks/bubbleworks_pos_counter_tab.webp",
        caption: "Counter POS Billing & Order Intake (Tablet View): Customer lookup, delivery date scheduling, and catalog service selection",
        alt: "Bubbleworks POS Counter Billing Tablet Mockup",
      },
      {
        url: "/projects/bubbleworks/bubbleworks_print_center_tab.webp",
        caption: "Thermal Receipt Print Center (Tablet View): 80mm and 58mm ESC/POS thermal printing with Web Bluetooth wireless integration",
        alt: "Bubbleworks Print Center Tablet Mockup",
      },
      {
        url: "/projects/bubbleworks/bubbleworks_dashboard_tab.webp",
        caption: "Overview Dashboard & Revenue Analytics (Tablet View): Live branch metrics, settled collections, balance tracking, and Recharts trends",
        alt: "Bubbleworks Dashboard Tablet Mockup",
      },
      {
        url: "/projects/bubbleworks/bubbleworks_cashiers_tab.webp",
        caption: "Multi-Branch Cashier & Staff Management (Tablet View): Role-guarded access controls, branch assignments, and active account toggles",
        alt: "Bubbleworks Cashiers Management Tablet Mockup",
      },
      {
        url: "/projects/bubbleworks/bubbleworks_login_tab.webp",
        caption: "Cashier Authentication & Sign-In Portal (Tablet View): Secure cloud sign-in with Firebase Auth and Google OAuth integration",
        alt: "Bubbleworks Login Portal Tablet Mockup",
      },
    ],
    skillsUsed: [
      {
        group: "Frontend & UI",
        skills: ["React 18", "TypeScript", "Vite 5", "Tailwind CSS", "Recharts", "Lucide Icons", "React Router v6"],
      },
      {
        group: "Backend & Cloud",
        skills: ["Firebase Cloud Firestore", "Firebase Authentication", "Google OAuth", "Auto-Seeding Engine", "Vercel Hosting"],
      },
      {
        group: "Hardware & Architecture",
        skills: ["Web Bluetooth API", "ESC/POS Binary Protocol", "80mm/58mm Thermal Printing", "Shared Monorepo Zod Schemas"],
      },
    ],
    links: {
      liveUrl: "https://bubbleworkspos-live.vercel.app",
      githubUrl: "https://github.com/dhineshdevtech/bubbleworkspos-live",
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

  // --------------------------------------------------------------------------
  // 4. AI VIDEO COMMERCIALS
  // --------------------------------------------------------------------------
  "app-development-ad": {
    slug: "app-development-ad",
    title: "App Development Service Commercial",
    tagline: "High-impact vertical video ad engineered for mobile product development & agency client acquisition with photorealistic generative rendering.",
    categoryKey: "ai-videos",
    subcategoryKey: "app-service-ads",
    subcategoryTitle: "App Service Commercials",
    badge: "🎬 9:16 AI Commercial Ad",
    badgeColor: "bg-blue-50 text-[#0066ff] border-blue-200",
    thumbnail: "/profile-clean.jpg",
    videoUrl: "/videos/video1.mp4",
    videoAspect: "9:16",
    details: {
      type: "Commercial Video Ad (9:16 Reel)",
      duration: "48-Hour Turnaround",
      role: "AI Creative Technologist & Director",
      status: "Published Production Ad",
      architecture: "Generative Video + AI Voice Synthesis",
      clientOrContext: "Mobile Development Client Acquisition",
    },
    overview: {
      challenge: "Capturing client and founder attention in under 3 seconds in a crowded software agency market without spending thousands on physical studio production.",
      solution: "Engineered a fast-paced, cinematic vertical ad combining photorealistic generative models, high-energy pacing, custom voiceover synthesis, and crisp dynamic text overlays.",
      impact: "High direct-response engagement rate, delivering studio-grade production value at 90% lower production costs and 48-hour delivery.",
    },
    coreFeatures: [
      {
        title: "Photorealistic Motion & Physics",
        description: "Generated using advanced video diffusion models with fluid camera transitions, motion consistency, and realistic lighting.",
      },
      {
        title: "Neural AI Voiceover & Sound Design",
        description: "Studio-mastered voice synthesis with rhythm-matched sound effects and cinematic low-end impact.",
      },
      {
        title: "Direct-Response Conversion Hook",
        description: "Structured specifically for TikTok, Instagram Reels, and YouTube Shorts with a 2-second hook and clear call-to-action.",
      },
      {
        title: "4K Master Delivery",
        description: "AI-upscaled video with clean color grading and typography optimized for mobile viewing.",
      },
    ],
    gallery: [],
    skillsUsed: [
      {
        group: "AI Video & Generative Tools",
        skills: ["Google Vids", "Gemini Veo", "ChatGPT"],
      },
      {
        group: "Video Editing & Post-Production",
        skills: ["CapCut", "Edits"],
      },
    ],
    links: {
      liveUrl: "/videos/video1.mp4",
    },
  },

  "textile-ecommerce-ad": {
    slug: "textile-ecommerce-ad",
    title: "AI Textile E-Commerce Showcase Ad",
    tagline: "Cinematic commercial promoting AI-featured textile & fashion e-commerce platform engineering with realistic fabric flow and modern retail aesthetic.",
    categoryKey: "ai-videos",
    subcategoryKey: "ecommerce-ads",
    subcategoryTitle: "E-Commerce Brand Ads",
    badge: "🎬 9:16 Fashion Commercial",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    thumbnail: "/profile-clean.jpg",
    videoUrl: "/videos/video2.mp4",
    videoAspect: "9:16",
    details: {
      type: "E-Commerce Brand Commercial (9:16)",
      duration: "48-Hour Turnaround",
      role: "AI Creative Technologist & Director",
      status: "Published Production Ad",
      architecture: "Generative Diffusion + Commercial Sound",
      clientOrContext: "AI Textile & Fashion E-Commerce",
    },
    overview: {
      challenge: "Showcasing high-end textile craftsmanship and smart digital e-commerce features with hyper-realistic fabric textures without expensive location filming.",
      solution: "Created photorealistic AI video sequences capturing micro-texture fabric motion, elegant model presentation, and digital shop interface overlays.",
      impact: "Commercial-grade fashion aesthetic that elevates e-commerce brand credibility and drives clicks on social paid ad channels.",
    },
    coreFeatures: [
      {
        title: "Realistic Fabric Flow & Micro-Textures",
        description: "Ultra-fine visual detail in cloth physics, textile sheen, and realistic light reflection.",
      },
      {
        title: "E-Commerce Digital Overlay Integration",
        description: "Seamless blending of physical-looking textile video with modern app/web store interfaces.",
      },
      {
        title: "Cinematic Color Grading",
        description: "Balanced warm tones, high contrast, and editorial fashion palette tailored for premium consumer appeal.",
      },
      {
        title: "Optimized for Paid Social Ads",
        description: "Engineered with 9:16 vertical aspect ratio to maximize ROAS on Instagram Reels and TikTok ad sets.",
      },
    ],
    gallery: [],
    skillsUsed: [
      {
        group: "AI Video & Generative Tools",
        skills: ["Google Vids", "Gemini Veo", "ChatGPT"],
      },
      {
        group: "Video Editing & Post-Production",
        skills: ["CapCut", "Edits"],
      },
    ],
    links: {
      liveUrl: "/videos/video2.mp4",
    },
  },
};
