import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Meu Mapa dos Sonhos",
    short_name: "Mapa dos Sonhos",
    description: "Crie seu mapa de visualização pessoal e transforme sonhos em realidade com fotos, metas e manifestação.",
    start_url: "/",
    scope: "/",
    display: "standalone", // App instalado sem barra do navegador
    background_color: "#fefdfb", // Cor de fundo enquanto carrega
    theme_color: "#d4af37", // Cor da barra de status (dourado principal)
    orientation: "portrait-primary",
    categories: ["lifestyle", "productivity", "education"],
    lang: "pt-BR",

    icons: [
      // Android / Chrome
      {
        src: "/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },

      // Apple Touch Icons
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    screenshots: [
      // Para lojas (Google Play, Microsoft Store, etc.)
      {
        src: "/screenshots/screenshot-mobile-1.png",
        sizes: "1080x1920",
        type: "image/png",
        form_factor: "narrow",
        label: "Mapa dos Sonhos no celular",
      },
      {
        src: "/screenshots/screenshot-desktop-1.png",
        sizes: "1920x1080",
        type: "image/png",
        form_factor: "wide",
        label: "Mapa dos Sonhos no desktop",
      },
    ],

    shortcuts: [
      {
        name: "Criar Novo Mural",
        short_name: "Novo Mural",
        description: "Comece um novo mapa de visualização",
        url: "/perfil",
        icons: [{ src: "/icons/shortcut-new.png", sizes: "96x96" }],
      },
      {
        name: "Meu Mural Atual",
        short_name: "Meu Mural",
        description: "Acesse seu mapa de sonhos atual",
        url: "/mural",
        icons: [{ src: "/icons/shortcut-mural.png", sizes: "96x96" }],
      },
    ],

    prefer_related_applications: false,
  };
}