import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://dhineshdevtech.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dhinesh — Web & Mobile Application Developer • AI Video Creator",
    template: "%s | Dhinesh",
  },
  description:
    "Full-stack engineer, cross-platform mobile developer (React Native, Next.js, Python), and AI video creator in Chennai, India. Creator of MPNMJEC Bus Tracker on Google Play Store, VANYA Luxury E-commerce with AI Virtual Try-On, and Strategy 360 commercial AI video ads.",
  keywords: [
    "Dhinesh",
    "Dhinesh V",
    "dhineshdevtech",
    "Full Stack Developer Chennai",
    "Web Application Developer Chennai",
    "React Native Developer India",
    "Next.js 16 Expert",
    "Mobile App Developer Chennai",
    "AI Video Creator",
    "Commercial AI Video Ads",
    "Strategy 360",
    "Python Developer",
    "SDE-1",
    "Google Play Store Bus Tracker",
    "MPNMJEC Bus Tracker",
    "VANYA Luxury E-commerce",
    "AI Virtual Try-On",
    "Bubbleworks POS",
    "Tailwind CSS",
    "Firebase Firestore",
    "TypeScript Developer",
  ],
  authors: [{ name: "Dhinesh", url: BASE_URL }],
  creator: "Dhinesh",
  publisher: "Dhinesh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Dhinesh — Engineering Portfolio & AI Creative Pipeline",
    title: "Dhinesh — Web & Mobile Application Developer • AI Video Creator",
    description:
      "Full-stack engineer and AI video creator building scalable web & mobile applications and directing high-converting realistic AI video commercials.",
    images: [
      {
        url: "/profile.webp",
        width: 1254,
        height: 1254,
        alt: "Dhinesh — Software Engineer & AI Video Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhinesh — Web & Mobile Application Developer • AI Video Creator",
    description:
      "Full-stack engineer, cross-platform mobile developer, and AI video creator based in Chennai, India.",
    images: ["/profile.webp"],
    creator: "@dhineshdevtech",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "uuAvcfu6evriuRkbVp8iOoDnabO0uKvP5jzmxhOfUVE",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai, Tamil Nadu, India",
    "geo.position": "13.0827;80.2707",
    ICBM: "13.0827, 80.2707",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Dhinesh",
      alternateName: ["Dhinesh V", "dhineshdevtech"],
      jobTitle: [
        "Full-Stack Software Engineer",
        "Mobile Application Developer",
        "AI Video Creator",
      ],
      description:
        "Full-stack engineer, cross-platform mobile developer, and AI creative technologist based in Chennai, India. Specializing in Next.js, React Native, Python, Firebase, and commercial generative AI video pipelines.",
      url: BASE_URL,
      image: `${BASE_URL}/profile.webp`,
      email: "mailto:dhineshbuilder@gmail.com",
      telephone: "+919025873422",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/dhineshdevtech",
        "https://www.linkedin.com/in/dhineshdevtech/",
        "https://www.instagram.com/dhinesh.devtech",
        BASE_URL,
      ],
      worksFor: {
        "@type": "Organization",
        name: "Strategy 360",
        location: "Chennai, Tamil Nadu, India",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Python",
        "Firebase Firestore",
        "REST APIs",
        "Mobile App Development",
        "E-Commerce Architecture",
        "AI Video Generation",
        "Gemini Veo",
        "Google Vids",
        "CapCut",
        "Generative AI",
        "Point of Sale (POS) Systems",
        "Real-Time GPS Tracking",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Dhinesh — Engineering Portfolio & AI Studio",
      description:
        "Portfolio of Dhinesh: Full-Stack Web & Mobile Developer and Commercial AI Video Creator.",
      publisher: {
        "@id": `${BASE_URL}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
