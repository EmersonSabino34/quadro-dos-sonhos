// app/cadastro/page.tsx
'use client';

import { useState } from 'react';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');

    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }

    // Aqui você vai conectar com seu backend depois
    console.log('Dados do cadastro:', { nome, email, senha });

    // Limpa os campos após sucesso (simulação)
    setNome('');
    setEmail('');
    setSenha('');
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] flex items-center justify-center px-6">
      <main className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-600 mb-2">Dream Map</h1>
          <p className="text-sm text-amber-800">Crie o mapa dos seus sonhos para 2026</p>
        </div>

        {/* Mensagem de erro */}
        {erro && (
          <p className="text-red-600 text-center mb-4 text-sm">{erro}</p>
        )}

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border-2 border-amber-600 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-700"
          />

          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border-2 border-amber-600 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-700"
          />

          <input
            type="password"
            placeholder="Crie uma senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border-2 border-amber-600 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-700"
          />

          <button
            type="submit"
            className="w-full py-5 bg-amber-600 text-white font-semibold text-lg rounded-xl hover:bg-amber-700 transition shadow-lg"
          >
            Criar minha conta
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-amber-800">
          Já tem conta? <span className="font-semibold underline">Entrar</span>
        </p>
      </main>
    </div>
  );
}