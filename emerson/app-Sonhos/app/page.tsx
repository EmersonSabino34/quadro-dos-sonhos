"use client";

import { useEffect, useState } from "react";

const imagens = [
  { src: "https://picsum.photos/id/1011/400", tema: "viagem" },
  { src: "https://picsum.photos/id/1015/400", tema: "dinheiro" },
  { src: "https://picsum.photos/id/1024/400", tema: "carreira" },
  { src: "https://picsum.photos/id/1035/400", tema: "saúde" },
  { src: "https://picsum.photos/id/1043/400", tema: "felicidade" },
  { src: "https://picsum.photos/id/1050/400", tema: "liberdade" },
];

const frases: Record<string, string[]> = {
  viagem: ["O mundo está esperando por você."],
  dinheiro: ["A abundância flui para sua vida."],
  carreira: ["Seu crescimento é inevitável."],
  saúde: ["Seu corpo é forte e equilibrado."],
  felicidade: ["A felicidade mora no agora."],
  liberdade: ["Você cria a vida que deseja."],
};

export default function Home() {
  const [destaque, setDestaque] = useState(imagens[0]);

  useEffect(() => {
    const dia = new Date().getDate();
    const index = dia % imagens.length;
    setDestaque(imagens[index]);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>🌟 Quadro dos Sonhos</h1>

        {/* ENQUETE */}
        <section>
          <h2>Sobre você</h2>
          <select>
            <option>Sexo</option>
            <option>Feminino</option>
            <option>Masculino</option>
            <option>Prefiro não informar</option>
          </select>
          <input placeholder="Sua profissão" />
          <input placeholder="Seu maior sonho" />
        </section>

        {/* IMAGENS */}
        <section>
          <h2>Escolha suas imagens</h2>
          <div className="images">
            {imagens.map((img, i) => (
              <img
                key={i}
                src={img.src}
                onClick={() => setDestaque(img)}
                className={destaque.src === img.src ? "active" : ""}
              />
            ))}
          </div>
        </section>

        {/* DESTAQUE */}
        <section className="highlight">
          <h2>✨ Destaque do Dia</h2>
          <img src={destaque.src} />
          <p className="quote">{frases[destaque.tema][0]}</p>
        </section>
      </div>
    </div>
  );
}
