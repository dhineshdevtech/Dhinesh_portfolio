import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dhinesh — Engineering Philosophy, Tech Stack & Background",
  description:
    "Learn more about Dhinesh: Full-stack software engineer and cross-platform mobile developer based in Chennai, India. Specializing in Next.js, React Native, Python, Firebase, and commercial generative AI video.",
  alternates: {
    canonical: "https://dhineshdevtech.vercel.app/about",
  },
  openGraph: {
    title: "About Dhinesh | Software Engineer & AI Video Creator",
    description:
      "Engineering philosophy, production architecture, and creative AI background of Dhinesh (Chennai, India).",
    url: "https://dhineshdevtech.vercel.app/about",
    images: ["/profile.webp"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
