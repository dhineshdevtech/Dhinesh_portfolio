import { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/data/projectsData";

const BASE_URL = "https://dhineshdevtech.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/certificates`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic Project Routes
  const projectRoutes: MetadataRoute.Sitemap = Object.keys(PROJECTS_DATA).map(
    (slug) => {
      // Give higher priority to flagship featured projects
      const isFeatured = [
        "vanya-ecommerce",
        "mpnmjec-bus-tracker",
        "durga-gold-jewellery-ad",
        "bubbleworks-pos",
        "quizforge-ai",
      ].includes(slug);

      return {
        url: `${BASE_URL}/projects/${slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: isFeatured ? 0.9 : 0.8,
      };
    }
  );

  return [...staticRoutes, ...projectRoutes];
}
