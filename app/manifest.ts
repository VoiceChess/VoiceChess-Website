import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VoiceMate Chess - Voice-Controlled Chess App",
    short_name: "VoiceMate Chess",
    description:
      "Play chess with your voice. Accessible for visually impaired players with real-time audio feedback.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#D4AF37",
    icons: [
      {
        src: "/assets/images/Logo-Background.jpg",
        sizes: "any",
        type: "image/jpg",
      },
    ],
    categories: ["games", "accessibility", "education"],
    orientation: "portrait",
  };
}
