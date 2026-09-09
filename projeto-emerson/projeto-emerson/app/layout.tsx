import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Mural dos Sonhos", description: "Visualize seus sonhos, transforme-os em objetivos e crie seu mural com IA." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><main className="app-shell">{children}</main></body></html>;
}
