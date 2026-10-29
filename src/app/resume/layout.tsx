import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Career Experience — Dhinesh",
  description:
    "Professional engineering resume of Dhinesh: Full-Stack Web & Mobile Developer with production deployments across Google Play Store, POS systems, and commercial AI video campaigns.",
  alternates: {
    canonical: "https://dhineshdevtech.vercel.app/resume",
  },
  openGraph: {
    title: "Dhinesh — Professional Resume & Technical Credentials",
    description:
      "Core skills, production accomplishments, education, and career experience of Dhinesh.",
    url: "https://dhineshdevtech.vercel.app/resume",
    images: ["/profile.webp"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
