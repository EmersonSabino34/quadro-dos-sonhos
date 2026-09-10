"use client";

import Link from "next/link";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const themes = ["Para hoje", "Motivação", "Fé", "Família", "Amor", "Gratidão", "Sonhos", "Paz"];

const formats = [
  { label: "Story 9:16", glyph: "▯" },
  { label: "Feed 1:1", glyph: "□" },
  { label: "Vertical 4:5", glyph: "▤" },
];

const quotes = [
  "A vida fica mais bonita quando a gente escolhe acreditar nos próprios sonhos.",
  "Tudo o que você precisa para começar já existe dentro de você.",
  "Que nunca falte coragem para transformar planos em memórias.",
];

export default function QuotesPage() {
  const [theme, setTheme] = useState(themes[0]);
  const [format, setFormat] = useState(formats[0].label);
  const [quoteIndex, setQuoteIndex] = useState(0);

  function nextQuote() {
    setQuoteIndex((current) => (current + 1) % quotes.length);
  }

  return (
    <main className="page">
      <div className="stagger">
        <PageHeader
          eyebrow="Seu espaço criativo"
          title="Frases & inspiração"
          action={
            <Link href="/mural" className="icon-button" aria-label="Voltar para o mural">
              ×
            </Link>
          }
        />

        <section className="quote-preview">
          {/* eslint-disable-next-line @next/next/no-img-element -- foto externa do Unsplash */}
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"
            alt="Paisagem inspiradora ao amanhecer"
          />
          <div className="quote-preview-shade" />
          <div className="quote-preview-copy">
            <span aria-hidden="true">✦</span>
            {/* key força o remonte do bloco, então a nova frase entra animada */}
            <blockquote key={quoteIndex}>{quotes[quoteIndex]}</blockquote>
            <small>— Mural dos Sonhos</small>
          </div>
          <button
            className="preview-edit"
            type="button"
            onClick={nextQuote}
            aria-label="Trocar frase"
          >
            ✧
          </button>
        </section>
      </div>

      <Reveal>
        <section className="section">
          <SectionTitle
            eyebrow="Encontre o tom certo"
            title="Qual é a sua vibe?"
            action={<span className="step-count">01 / 03</span>}
          />
          <div className="chip-wrap" role="group" aria-label="Tema da frase">
            {themes.map((item) => (
              <button
                className="chip"
                key={item}
                type="button"
                aria-pressed={theme === item}
                onClick={() => setTheme(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="section">
          <SectionTitle eyebrow="Formato da arte" title="Onde você vai compartilhar?" />
          <div className="format-row" role="group" aria-label="Formato da arte">
            {formats.map((item) => (
              <button
                className="chip chip-format"
                key={item.label}
                type="button"
                aria-pressed={format === item.label}
                onClick={() => setFormat(item.label)}
              >
                <span aria-hidden="true">{item.glyph}</span>
                {item.label}
              </button>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="ai-card">
          <div className="ai-sparkle" aria-hidden="true">
            ✦
          </div>
          <div className="ai-card-body">
            <p className="eyebrow">IA Designer</p>
            <h2>Crie uma frase para esta foto</h2>
            <p>
              A IA combina a imagem e o tema <strong>{theme.toLowerCase()}</strong> para
              sugerir uma mensagem só sua.
            </p>
          </div>
          <button className="ai-card-action" type="button" onClick={nextQuote}>
            Gerar sugestões <span aria-hidden="true">→</span>
          </button>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <button className="btn btn-primary btn-block" type="button">
          Compartilhar arte
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </Reveal>
    </main>
  );
}
