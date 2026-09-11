"use client";

import { useState, useEffect } from "react";
import QRCode from "qrcode";

export default function Checkout() {
  const [metodo, setMetodo] = useState<'pix' | 'cartao' | 'boleto'>('pix');
  const [qrCodeDataURL, setQrCodeDataURL] = useState<string>('');

  // Preço fixo
  const precoBrasil = 'R$ 60,00';
  const precoEuropa = '€ 10,00';
  const isBrasil = true; // Depois detecta automático com geolocation ou moeda
  const precoAtual = isBrasil ? precoBrasil : precoEuropa;

  // Payload PIX exemplo (em produção, gera no backend com tua chave PIX real)
  const pixPayload = `00020126580014BR.GOV.BCB.PIX01361234567890abcdef5204000053039865802BR5925Emerson Dream Map6009SAO PAULO61080540900062290525DREAMMAP2025UNICO6304ABCD`;

  useEffect(() => {
    if (metodo === 'pix') {
      // Gera o QR Code como Data URL
      QRCode.toDataURL(pixPayload, {
        width: 300,
        margin: 2,
        color: {
          dark: '#8b5a2b',  // Marrom madeira pro tema fazendinha
          light: '#f9f5f0',
        },
      })
        .then((url) => {
          setQrCodeDataURL(url);
        })
        .catch((err) => {
          console.error('Erro ao gerar QR Code:', err);
        });
    }
  }, [metodo]);

  return (
    <div className="min-h-screen bg-[#f9f5f0] px-6 py-10">
      <main className="w-full max-w-md mx-auto">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-600 mb-2">Dream Map</h1>
          <p className="text-lg text-amber-800">Acesso Vitalício 2026</p>
        </div>

        {/* Card do produto */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-4 border-amber-600">
          <h2 className="text-2xl font-bold text-center text-amber-900 mb-6">
            Liberte seus sonhos agora
          </h2>

          <div className="text-center mb-8">
            <p className="text-5xl font-bold text-amber-600">{precoAtual}</p>
            <p className="text-sm text-amber-700 mt-2">Pagamento único • Acesso para sempre</p>
          </div>

          {/* Métodos de pagamento */}
          <div className="space-y-4">
            <button
              onClick={() => setMetodo('pix')}
              className={`w-full py-5 rounded-xl border-4 font-semibold transition ${
                metodo === 'pix'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-amber-900 border-amber-600 hover:bg-amber-50'
              }`}
            >
              PIX {isBrasil && `(R$ 60,00)`}
            </button>

            <button
              onClick={() => setMetodo('cartao')}
              className={`w-full py-5 rounded-xl border-4 font-semibold transition ${
                metodo === 'cartao'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-amber-900 border-amber-600 hover:bg-amber-50'
              }`}
            >
              Cartão de Crédito
            </button>

            <button
              onClick={() => setMetodo('boleto')}
              className={`w-full py-5 rounded-xl border-4 font-semibold transition ${
                metodo === 'boleto'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-amber-900 border-amber-600 hover:bg-amber-50'
              }`}
            >
              Boleto QI Referência: DREAMMAP2026
            </button>
          </div>

          {/* QR Code PIX */}
          {metodo === 'pix' && qrCodeDataURL && (
            <div className="mt-10 text-center">
              <img
                src={qrCodeDataURL}
                alt="QR Code PIX"
                className="mx-auto rounded-xl border-4 border-amber-600 shadow-xl"
              />
              <p className="mt-6 text-sm text-amber-800 font-medium">
                Escaneie com o app do seu banco
              </p>
              <p className="text-xs text-amber-700 mt-2">
                Chave: teu@email.com ou CPF • Valor: R$ 60,00
              </p>
            </div>
          )}

          {/* Botão pagar */}
          <button className="w-full mt-10 py-6 bg-green-700 text-white font-bold text-xl rounded-xl hover:bg-green-800 transition shadow-xl">
            Confirmar pagamento
          </button>

          <p className="text-center mt-6 text-xs text-amber-700">
            Comprou, acesso liberado na hora. Sem devolução.
          </p>
        </div>
      </main>
    </div>
  );
}