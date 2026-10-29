import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Project Commissions — Work with Dhinesh",
  description:
    "Get in touch with Dhinesh for full-stack engineering contracts, cross-platform mobile app development, or commercial AI video ad commissions. Based in Chennai, available for global remote work.",
  alternates: {
    canonical: "https://dhineshdevtech.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Dhinesh | Full-Stack & Mobile Developer • AI Video Creator",
    description:
      "Commission an AI commercial ad, discuss software engineering roles, or collaborate on web & mobile apps.",
    url: "https://dhineshdevtech.vercel.app/contact",
    images: ["/profile.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
