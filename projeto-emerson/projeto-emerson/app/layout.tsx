import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

/**
 * Fraunces para display (serifada variável, com um pouco de personalidade) e
 * Inter para interface. Antes o projeto caía em Georgia e Arial, que mudam de
 * métrica em cada sistema operacional. next/font hospeda as duas localmente,
 * então não há requisição ao Google nem salto de layout ao carregar.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mural dos Sonhos",
  description:
    "Visualize seus sonhos, transforme-os em objetivos e crie seu mural com IA.",
};

/** Pinta a barra do navegador na mesma cor do fundo, em cada tema. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0910" },
  ],
};

/**
 * Roda antes do primeiro paint para evitar o flash de tema branco em quem
 * escolheu escuro. Só estampa data-theme quando existe escolha salva — sem
 * ela, o CSS resolve pelo prefers-color-scheme e o app continua seguindo o
 * sistema do usuário mesmo se ele mudar depois.
 */
const themeInit = `(function(){try{var t=localStorage.getItem("mds-theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      {/* O shell fica em cada route group: (site) é público e não tem
          navegação do app; (app) monta a barra/trilha do NavRail. */}
      <body>{children}</body>
    </html>
  );
}
