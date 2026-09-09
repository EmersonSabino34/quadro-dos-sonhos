"use client";

import Link from "next/link";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";

const themes = ["Para hoje", "Motivação", "Fé", "Família", "Amor", "Gratidão", "Sonhos", "Paz"];
const formats = ["Story 9:16", "Feed 1:1", "Vertical 4:5"];
const quotes = [
  "A vida fica mais bonita quando a gente escolhe acreditar nos próprios sonhos.",
  "Tudo o que você precisa para começar já existe dentro de você.",
  "Que nunca falte coragem para transformar planos em memórias.",
];

export default function QuotesPage() {
  const [theme, setTheme] = useState("Para hoje");
  const [format, setFormat] = useState("Story 9:16");
  const [quoteIndex, setQuoteIndex] = useState(0);

  return (
    <>
      <main className="mobile-page quotes-page">
        <header className="topbar"><div><p className="eyebrow">SEU ESPAÇO CRIATIVO</p><h1>Frases & inspiração</h1></div><Link href="/" className="close-button" aria-label="Voltar">×</Link></header>
        <section className="quote-editor-preview">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85" alt="Paisagem inspiradora" />
          <div className="quote-preview-shade" />
          <div className="quote-preview-copy"><span>✦</span><blockquote>{quotes[quoteIndex]}</blockquote><small>— Mural dos Sonhos</small></div>
          <button className="preview-edit" type="button" onClick={() => setQuoteIndex((quoteIndex + 1) % quotes.length)} aria-label="Trocar frase">✧</button>
        </section>
        <section className="editor-section"><div className="section-heading"><div><p className="eyebrow">ENCONTRE O TOM CERTO</p><h2>Qual é a sua vibe?</h2></div><span className="step-count">01 / 03</span></div><div className="theme-grid">{themes.map((item) => <button className={`theme-chip ${theme === item ? "selected" : ""}`} key={item} type="button" onClick={() => setTheme(item)}>{item}</button>)}</div></section>
        <section className="editor-section"><div className="section-heading"><div><p className="eyebrow">FORMATO DA ARTE</p><h2>Onde você vai compartilhar?</h2></div></div><div className="format-row">{formats.map((item) => <button className={`format-chip ${format === item ? "selected" : ""}`} key={item} type="button" onClick={() => setFormat(item)}><span>{item.startsWith("Story") ? "▯" : item.startsWith("Feed") ? "□" : "▤"}</span>{item}</button>)}</div></section>
        <section className="ai-quote-card"><div className="ai-sparkle">✦</div><div><p className="eyebrow">IA DESIGNER</p><h2>Crie uma frase para esta foto</h2><p>A IA combina a imagem e o tema <strong>{theme.toLowerCase()}</strong> para sugerir uma mensagem só sua.</p></div><button type="button" onClick={() => setQuoteIndex((quoteIndex + 1) % quotes.length)}>Gerar sugestões <span>→</span></button></section>
        <button className="primary-button share-button" type="button">Compartilhar arte <span>→</span></button>
      </main>
      <BottomNav />
    </>
  );
}
