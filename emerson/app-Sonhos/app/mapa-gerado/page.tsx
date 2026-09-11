'use client';

import { useState } from 'react';
import translations from '../translations';

// Simulação das respostas do questionário (depois vem de contexto ou params)
const respostasSimuladas = {
  area: 'prosperidade',
  cor: 'dourado',
  frase: 'eu mereco',
  estilo: 'luxo-dourado',
};

export default function MapaGerado() {
  const [imagensAdicionadas, setImagensAdicionadas] = useState<string[]>([]);

  // Segurança: translations pode estar vazio em dev; usamos fallback
  const areaKey = respostasSimuladas.area as string;
  const frasesArea: string[] = (translations as any)?.pt?.frases?.[areaKey] ?? [
    'Acredite no seu poder e aja todos os dias.',
  ];
  const fraseAleatoria = frasesArea[Math.floor(Math.random() * frasesArea.length)];

  // Função simulada pra adicionar foto (depois conecta com input file real)
  const adicionarFoto = () => {
    setImagensAdicionadas((s) => [...s, `/placeholder-${s.length + 1}.jpg`]);
  };

  // Função de compartilhamento (abre nativo do celular)
  const compartilhar = (plataforma: string) => {
    alert(`Compartilhando no ${plataforma}... ✨ (em produção abre o app nativo)`);
  };

  const baixar = () => {
    alert('Baixando seu Mapa dos Sonhos 2026... 📲');
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] px-6 py-10 pb-32">
      <main className="w-full max-w-md mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-600 mb-2">Dream Map</h1>
          <p className="text-2xl text-amber-900 font-semibold">Seu Mapa dos Sonhos 2026</p>
          <p className="text-sm text-amber-700 mt-2">Toque nos espaços para adicionar suas fotos</p>
        </div>

        {/* Vision Board - Estilo Luxo Dourado (exemplo) */}
        <div className="relative bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-200 rounded-3xl shadow-2xl p-8 border-8 border-amber-600 overflow-hidden">
          {/* Arco-íris sutil no topo */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300 opacity-30 rounded-t-3xl"></div>

          {/* Título central */}
          <div className="text-center mt-8 mb-8 relative z-10">
            <h2 className="text-3xl font-bold text-amber-900">2026 - Meu Ano de Ouro</h2>
            <p className="text-lg italic text-amber-800 mt-4 max-w-sm mx-auto">"{fraseAleatoria}"</p>
          </div>

          {/* Grid de placeholders para fotos */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            {[1, 2, 3, 4, 5, 6].map((slot) => (
              <div
                key={slot}
                onClick={adicionarFoto}
                className="aspect-square bg-white/80 rounded-2xl border-4 border-dashed border-amber-600 flex items-center justify-center cursor-pointer hover:bg-white/90 transition"
              >
                {imagensAdicionadas[slot - 1] ? (
                  <div className="w-full h-full bg-gray-200 rounded-xl border-2 border-amber-500" />
                ) : (
                  <p className="text-amber-700 text-center px-4 text-sm font-medium">+ Adicionar foto do sonho</p>
                )}
              </div>
            ))}
          </div>

          {/* Frase final no rodapé */}
          <p className="text-center mt-10 text-amber-900 font-bold text-lg">Sonhe • Acredite • Realize ✨</p>
        </div>

        {/* Botões de ação */}
        <div className="mt-12 space-y-5">
          <button onClick={adicionarFoto} className="w-full py-5 bg-amber-600 text-white font-bold text-lg rounded-xl hover:bg-amber-700 transition shadow-lg">
            + Adicionar mais fotos
          </button>

          <div className="grid grid-cols-2 gap-4">
            <button onClick={baixar} className="py-5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition">
              Baixar Mapa
            </button>
            <button onClick={() => compartilhar('WhatsApp')} className="py-5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition">
              Compartilhar
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <button onClick={() => compartilhar('Instagram')} className="py-3 bg-pink-500 text-white rounded-xl text-sm">
              Instagram
            </button>
            <button onClick={() => compartilhar('Facebook')} className="py-3 bg-blue-600 text-white rounded-xl text-sm">
              Facebook
            </button>
            <button onClick={() => compartilhar('Pinterest')} className="py-3 bg-red-600 text-white rounded-xl text-sm">
              Pinterest
            </button>
          </div>
        </div>

        {/* Navegação inferior removida daqui — agora global em `app/layout.tsx` */}
      </main>
    </div>
  );
}
