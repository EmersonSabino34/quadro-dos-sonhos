// app/layout.tsx
import './globals.css'; // Se você tiver um CSS global
import Link from 'next/link';
import { ReactNode } from 'react';
import SessionProviderClient from './providers/SessionProviderClient';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-[#f9f5f0] min-h-screen pb-20"> {/* pb-20 pra dar espaço pra barra */}
        {/* Conteúdo principal das páginas */}
        <main>
          <SessionProviderClient>
            {children}
          </SessionProviderClient>
        </main>

        {/* Barra de navegação inferior fixa (global) */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-amber-600 shadow-2xl">
          <div className="max-w-md mx-auto flex justify-around items-center py-3 px-6">
            <Link href="/dashboard" className="flex flex-col items-center text-amber-800 hover:text-amber-600 transition">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-xs mt-1 font-medium">Início</span>
            </Link>

            <Link href="/mapa-gerado" className="flex flex-col items-center text-amber-800 hover:text-amber-600 transition">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xs mt-1 font-medium">Meu Mapa</span>
            </Link>

            <Link href="/perfil" className="flex flex-col items-center text-amber-600 font-bold">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="text-xs mt-1">Perfil</span>
            </Link>
          </div>
        </nav>
      </body>
    </html>
  );
}