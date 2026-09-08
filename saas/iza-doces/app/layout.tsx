import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Izabelle Sabino | Cursos de Bolos, Doces e Salgados",
  description:
    "Aprenda a preparar bolos, doces e salgados incríveis com Izabelle Sabino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}