// app/perfil/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Perfil() {
  const [nome, setNome] = useState('Emerson'); // Depois vem do banco/user autenticado
  const [email, setEmail] = useState('emerson@example.com');
  const [editando, setEditando] = useState(false);

  const handleSalvar = () => {
    // Aqui salva no backend
    console.log('Perfil atualizado:', { nome, email });
    setEditando(false);
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] px-6 py-10">
      <main className="w-full max-w-md mx-auto">
        {/* Logo e Título */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-600 mb-2">Dream Map</h1>
          <p className="text-sm text-amber-800">Meu Perfil</p>
        </div>

        {/* Foto de perfil (placeholder) */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-amber-200 border-4 border-amber-600 flex items-center justify-center text-5xl font-bold text-amber-800">
            {nome.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Formulário de edição */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              disabled={!editando}
              className="w-full px-5 py-4 rounded-xl border-2 border-amber-600 bg-white text-gray-800 disabled:bg-amber-50 disabled:opacity-80"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!editando}
              className="w-full px-5 py-4 rounded-xl border-2 border-amber-600 bg-white text-gray-800 disabled:bg-amber-50 disabled:opacity-80"
            />
          </div>

          {/* Botões */}
          <div className="pt-4">
            {editando ? (
              <div className="flex gap-4">
                <button
                  onClick={handleSalvar}
                  className="flex-1 py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition"
                >
                  Salvar alterações
                </button>
                <button
                  onClick={() => setEditando(false)}
                  className="flex-1 py-4 bg-gray-300 text-gray-800 font-semibold rounded-xl hover:bg-gray-400 transition"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditando(true)}
                className="w-full py-5 bg-amber-600 text-white font-semibold text-lg rounded-xl hover:bg-amber-700 transition shadow-lg"
              >
                Editar perfil
              </button>
            )}
          </div>
        </div>

        {/* Opções extras */}
        <div className="mt-12 space-y-4 text-center">
          <Link href="/meus-mapas" className="block text-amber-800 underline text-sm">
            Meus Mapas dos Sonhos
          </Link>
          <Link href="/configuracoes" className="block text-amber-800 underline text-sm">
            Configurações
          </Link>
          <button className="block text-red-600 underline text-sm w-full">
            Sair da conta
          </button>
        </div>
      </main>
    </div>
  );
}