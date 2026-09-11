// app/questionario/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Questionario() {
  const [passo, setPasso] = useState(1);
  const [respostas, setRespostas] = useState({
    area: '',
    cor: '',
    frase: '',
    estilo: '',
  });

  const handleSelecao = (campo: string, valor: string) => {
    setRespostas({ ...respostas, [campo]: valor });
    // Avança automaticamente após seleção
    if (passo < 4) {
      setTimeout(() => setPasso(passo + 1), 400);
    }
  };

  const gerarMapa = () => {
    console.log('Respostas:', respostas);
    alert('Seu Mapa dos Sonhos 2026 está sendo gerado... ✨');
    // Aqui redireciona para a tela do mapa gerado
    // router.push('/mapa-gerado')
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] px-6 py-10">
      <main className="w-full max-w-md mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-600 mb-2">Dream Map</h1>
          <p className="text-lg text-amber-800">Monte seu mapa em 60 segundos</p>
          <div className="flex justify-center mt-6">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-10 h-2 rounded-full transition ${
                    i <= passo ? 'bg-amber-600' : 'bg-amber-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Passo 1 - Área principal */}
        {passo === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-amber-600">
            <h2 className="text-2xl font-bold text-center text-amber-900 mb-8">
              Qual área você quer manifestar mais em 2026?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSelecao('area', 'prosperidade')}
                className="py-6 bg-amber-100 rounded-xl border-2 border-amber-600 hover:bg-amber-200 transition text-amber-900 font-medium"
              >
                💰 Prosperidade
              </button>
              <button
                onClick={() => handleSelecao('area', 'amor')}
                className="py-6 bg-amber-100 rounded-xl border-2 border-amber-600 hover:bg-amber-200 transition text-amber-900 font-medium"
              >
                ❤️ Amor & Família
              </button>
              <button
                onClick={() => handleSelecao('area', 'viagens')}
                className="py-6 bg-amber-100 rounded-xl border-2 border-amber-600 hover:bg-amber-200 transition text-amber-900 font-medium"
              >
                ✈️ Viagens
              </button>
              <button
                onClick={() => handleSelecao('area', 'saude')}
                className="py-6 bg-amber-100 rounded-xl border-2 border-amber-600 hover:bg-amber-200 transition text-amber-900 font-medium"
              >
                🧘 Saúde & Equilíbrio
              </button>
            </div>
          </div>
        )}

        {/* Passo 2 - Cor da sorte */}
        {passo === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-amber-600">
            <h2 className="text-2xl font-bold text-center text-amber-900 mb-8">
              Qual sua cor da sorte para 2026?
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleSelecao('cor', 'dourado')}
                className="w-full h-24 rounded-xl bg-yellow-400 border-4 border-amber-600 hover:scale-105 transition"
              />
              <button
                onClick={() => handleSelecao('cor', 'verde')}
                className="w-full h-24 rounded-xl bg-green-500 border-4 border-amber-600 hover:scale-105 transition"
              />
              <button
                onClick={() => handleSelecao('cor', 'rosa')}
                className="w-full h-24 rounded-xl bg-pink-400 border-4 border-amber-600 hover:scale-105 transition"
              />
              <button
                onClick={() => handleSelecao('cor', 'azul')}
                className="w-full h-24 rounded-xl bg-blue-500 border-4 border-amber-600 hover:scale-105 transition"
              />
              <button
                onClick={() => handleSelecao('cor', 'roxo')}
                className="w-full h-24 rounded-xl bg-purple-500 border-4 border-amber-600 hover:scale-105 transition"
              />
              <button
                onClick={() => handleSelecao('cor', 'vermelho')}
                className="w-full h-24 rounded-xl bg-red-500 border-4 border-amber-600 hover:scale-105 transition"
              />
            </div>
          </div>
        )}

        {/* Passo 3 - Frase motivacional */}
        {passo === 3 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-amber-600">
            <h2 className="text-2xl font-bold text-center text-amber-900 mb-8">
              Qual frase mais te move?
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => handleSelecao('frase', 'eu mereco')}
                className="w-full py-6 bg-amber-100 rounded-xl border-2 border-amber-600 hover:bg-amber-200 transition text-amber-900 font-medium"
              >
                Eu mereço tudo isso
              </button>
              <button
                onClick={() => handleSelecao('frase', 'e leve')}
                className="w-full py-6 bg-amber-100 rounded-xl border-2 border-amber-600 hover:bg-amber-200 transition text-amber-900 font-medium"
              >
                É leve, fácil e flui
              </button>
              <button
                onClick={() => handleSelecao('frase', 'ima dinheiro')}
                className="w-full py-6 bg-amber-100 rounded-xl border-2 border-amber-600 hover:bg-amber-200 transition text-amber-900 font-medium"
              >
                Eu sou um ímã de dinheiro
              </button>
            </div>
          </div>
        )}

        {/* Passo 4 - Estilo do board */}
        {passo === 4 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-amber-600">
            <h2 className="text-2xl font-bold text-center text-amber-900 mb-8">
              Escolha o estilo do seu mapa
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={gerarMapa}
                className="bg-amber-100 rounded-xl p-8 border-4 border-amber-600 hover:scale-105 transition"
              >
                <p className="font-bold text-amber-900">Arco-Íris Fofo</p>
              </button>
              <button
                onClick={gerarMapa}
                className="bg-amber-100 rounded-xl p-8 border-4 border-amber-600 hover:scale-105 transition"
              >
                <p className="font-bold text-amber-900">Mural Cortiça</p>
              </button>
              <button
                onClick={gerarMapa}
                className="bg-amber-100 rounded-xl p-8 border-4 border-amber-600 hover:scale-105 transition"
              >
                <p className="font-bold text-amber-900">Clean Bege</p>
              </button>
              <button
                onClick={gerarMapa}
                className="bg-amber-100 rounded-xl p-8 border-4 border-amber-600 hover:scale-105 transition"
              >
                <p className="font-bold text-amber-900">Luxo Dourado</p>
              </button>
            </div>

            <button
              onClick={gerarMapa}
              className="w-full mt-10 py-6 bg-amber-600 text-white font-bold text-xl rounded-xl hover:bg-amber-700 transition shadow-xl"
            >
              Gerar meu mapa mágico agora ✨
            </button>
          </div>
        )}

        {/* Navegação inferior removida daqui — agora global em `app/layout.tsx` */}
      </main>
    </div>
  );
}