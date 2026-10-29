import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Directory — Mobile, Web, POS Systems & AI Commercials",
  description:
    "Explore 13 production applications and commercial AI video campaigns engineered by Dhinesh: from Google Play Store transit tracking to luxury e-commerce with AI virtual fitting.",
  alternates: {
    canonical: "https://dhineshdevtech.vercel.app/projects",
  },
  openGraph: {
    title: "Projects Directory | Dhinesh — Engineering Lab",
    description:
      "Production mobile apps, full-stack web platforms, and commercial AI video campaigns.",
    url: "https://dhineshdevtech.vercel.app/projects",
    images: ["/profile.webp"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
