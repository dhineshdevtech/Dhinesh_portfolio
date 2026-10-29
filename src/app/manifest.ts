import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dhinesh — Web & Mobile Application Developer • AI Video Creator",
    short_name: "Dhinesh DevTech",
    description:
      "Software engineer and AI video creator building scalable web & mobile applications and directing high-converting realistic AI video commercials.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0070f3",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
