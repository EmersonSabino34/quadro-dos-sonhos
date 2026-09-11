"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Collage from "@/components/Collage";
import { layouts, type MuralLayout } from "@/lib/murais";

/**
 * Editar Mural (tela 26).
 *
 * As quatro ferramentas das referências — Trocar, Ajustar, Texto e Filtros —
 * mexem de verdade na colagem, e não abrem um painel vazio:
 *
 *   Trocar  · gira a ordem das fotos, então cada uma passa por cada posição
 *   Ajustar · troca o layout sem perder as fotos escolhidas
 *   Texto   · edita a frase sobreposta
 *   Filtros · aplica um tratamento de cor à colagem inteira
 *
 * Nada disso persiste ainda; quando a API entrar, o estado daqui é exatamente
 * o corpo do PATCH.
 */

const filters = [
  { id: "nenhum", label: "Original", css: "none" },
  { id: "quente", label: "Dourado", css: "saturate(1.15) sepia(.22) contrast(1.04)" },
  { id: "frio", label: "Noturno", css: "saturate(.9) hue-rotate(-12deg) brightness(.92)" },
  { id: "suave", label: "Suave", css: "saturate(.75) contrast(.95) brightness(1.05)" },
  { id: "pb", label: "Preto e branco", css: "grayscale(1) contrast(1.08)" },
];

type Tool = "trocar" | "ajustar" | "texto" | "filtros";

export default function MuralEditor({
  muralId,
  initialLayout,
  photos,
  initialCaption,
}: {
  muralId: string;
  initialLayout: MuralLayout;
  photos: string[];
  initialCaption: string;
}) {
  const router = useRouter();

  const [layout, setLayout] = useState(initialLayout);
  const [offset, setOffset] = useState(0);
  const [caption, setCaption] = useState(initialCaption);
  const [filter, setFilter] = useState(filters[0]);
  const [tool, setTool] = useState<Tool | null>(null);

  /** Gira a lista: a foto que estava na posição 1 vai para a última. */
  const ordered = photos.map(
    (_, index) => photos[(index + offset) % photos.length],
  );

  function toggle(next: Tool) {
    setTool((current) => (current === next ? null : next));
  }

  return (
    <>
      <div className="mural-stage" style={{ filter: filter.css }}>
        <Collage layout={layout} photos={ordered} ratio="3 / 4" caption={caption} />
      </div>

      <div className="tool-row" role="toolbar" aria-label="Ferramentas do mural">
        <button
          type="button"
          className="tool-button"
          aria-pressed={tool === "trocar"}
          onClick={() => {
            toggle("trocar");
            setOffset((current) => (current + 1) % photos.length);
          }}
        >
          <span aria-hidden="true">⇄</span>
          Trocar
        </button>

        <button
          type="button"
          className="tool-button"
          aria-pressed={tool === "ajustar"}
          onClick={() => toggle("ajustar")}
        >
          <span aria-hidden="true">⊞</span>
          Ajustar
        </button>

        <button
          type="button"
          className="tool-button"
          aria-pressed={tool === "texto"}
          onClick={() => toggle("texto")}
        >
          <span aria-hidden="true">T</span>
          Texto
        </button>

        <button
          type="button"
          className="tool-button"
          aria-pressed={tool === "filtros"}
          onClick={() => toggle("filtros")}
        >
          <span aria-hidden="true">◑</span>
          Filtros
        </button>
      </div>

      {/* O painel da ferramenta ativa abre logo abaixo da barra, sem tirar a
          colagem da tela — a pessoa vê o efeito enquanto mexe. */}
      {tool === "ajustar" ? (
        <div className="tool-panel glass glass-pad">
          <p className="eyebrow">Layout</p>
          <div className="chip-wrap">
            {layouts.map((option) => (
              <button
                type="button"
                key={option.id}
                className="chip"
                aria-pressed={option.id === layout.id}
                onClick={() => setLayout(option)}
              >
                {option.label} · {option.count}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {tool === "texto" ? (
        <div className="tool-panel glass glass-pad">
          <div className="field" style={{ marginBottom: 0 }}>
            <label htmlFor="legenda">Frase do mural</label>
            <textarea
              id="legenda"
              rows={3}
              value={caption}
              placeholder="Disciplina hoje. Resultados sempre."
              onChange={(event) => setCaption(event.target.value)}
            />
            <span className="field-hint">Uma linha por quebra de parágrafo.</span>
          </div>
        </div>
      ) : null}

      {tool === "filtros" ? (
        <div className="tool-panel glass glass-pad">
          <p className="eyebrow">Tratamento</p>
          <div className="chip-wrap">
            {filters.map((option) => (
              <button
                type="button"
                key={option.id}
                className="chip"
                aria-pressed={option.id === filter.id}
                onClick={() => setFilter(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={() => router.push(`/mural/${muralId}/preview?layout=${layout.id}`)}
      >
        Salvar e ver no celular
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      </button>
    </>
  );
}
