import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quadro dos Sonhos",
    short_name: "Sonhos",
    start_url: "/",
    display: "standalone",
    background_color: "#6a11cb",
    theme_color: "#6a11cb",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
