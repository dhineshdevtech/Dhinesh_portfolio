import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verified Certifications & Technical Credentials — Dhinesh",
  description:
    "Verified course certificates and technical credentials of Dhinesh, including myGyan Python Foundations for SDE-1 Interviews and Corizo Web Development.",
  alternates: {
    canonical: "https://dhineshdevtech.vercel.app/certificates",
  },
  openGraph: {
    title: "Dhinesh — Verified Certifications & Learning Credentials",
    description:
      "Record of verified technical completions in Python, Data Structures, Algorithms, and Web Development.",
    url: "https://dhineshdevtech.vercel.app/certificates",
    images: ["/profile.webp"],
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
