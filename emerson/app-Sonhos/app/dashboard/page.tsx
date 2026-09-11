// app/dashboard/page.tsx
'use client';

import Link from 'next/link';

export default function Dashboard() {
  // Simulação de dados do usuário (depois vem do contexto/auth)
  const nomeUsuario = 'Emerson';

  return (
    <div className="min-h-screen bg-[#f9f5f0] px-6 py-10">
      <main className="w-full max-w-md mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-600 mb-2">Dream Map</h1>
          <p className="text-lg text-amber-800">
            Olá, <span className="font-semibold">{nomeUsuario}</span>! ✨
          </p>
          <p className="text-sm text-amber-700 mt-2">
            Pronto para manifestar o seu 2026?
          </p>
        </div>

        {/* Card principal - Criar novo mapa */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-amber-600 text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Monte seu Mapa dos Sonhos 2026
          </h2>
          <p className="text-amber-800 mb-8">
            Responda algumas perguntas rápidas e gere seu vision board personalizado em segundos.
          </p>

          <Link href="/questionario">
            <button className="w-full py-6 bg-amber-600 text-white font-bold text-xl rounded-xl hover:bg-amber-700 transition shadow-lg">
              Criar meu mapa agora
            </button>
          </Link>
        </div>

        {/* Opções rápidas */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-amber-900 text-center">
            Ou escolha um template pronto
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-100 rounded-xl p-6 text-center border-2 border-amber-600">
              <p className="font-medium text-amber-900">Arco-Íris Fofo</p>
            </div>
            <div className="bg-amber-100 rounded-xl p-6 text-center border-2 border-amber-600">
              <p className="font-medium text-amber-900">Mural de Cortiça</p>
            </div>
            <div className="bg-amber-100 rounded-xl p-6 text-center border-2 border-amber-600">
              <p className="font-medium text-amber-900">Clean Bege</p>
            </div>
            <div className="bg-amber-100 rounded-xl p-6 text-center border-2 border-amber-600">
              <p className="font-medium text-amber-900">Luxo Dourado</p>
            </div>
          </div>
        </div>

        {/* Meus mapas salvos */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-amber-900 text-center mb-4">
            Meus Mapas Anteriores
          </h3>
          <p className="text-center text-amber-700 text-sm">
            Nenhum mapa salvo ainda. Crie o primeiro!
          </p>
        </div>

        {/* Navegação inferior removida daqui — agora global em `app/layout.tsx` */}
      </main>
    </div>
  );
}