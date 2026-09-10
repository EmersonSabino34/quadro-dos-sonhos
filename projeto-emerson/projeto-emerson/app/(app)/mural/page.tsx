import Link from "next/link";
import { CategoryPill } from "@/components/CategoryCard";
import DreamCard from "@/components/DreamCard";
import PageHeader from "@/components/PageHeader";
import ProgressBar from "@/components/ProgressBar";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { AvatarSessao, SaudacaoSessao } from "@/components/SessaoUI";
import { categories, dreams, overallProgress } from "@/lib/data";

/** "DOMINGO, 27 DE ABRIL" — antes fixo no JSX, agora sempre o dia de hoje. */
function todayLabel() {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })
    .format(new Date())
    .toUpperCase();
}

export default function HomePage() {
  return (
    <main className="page page-split">
      <div>
        {/* .stagger faz o cabeçalho e o hero entrarem em cascata no load */}
        <div className="stagger">
          <PageHeader
            eyebrow={todayLabel()}
            title={<SaudacaoSessao />}
            action={<AvatarSessao />}
          />

          <section className="hero">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-copy">
              <p className="hero-kicker">Seu mural, sua visão</p>
              <h2>
                Visualize.
                <br />
                <em>Acredite.</em>
                <br />
                Realize.
              </h2>
              <p className="hero-lede">
                Transforme seus sonhos em planos possíveis, um passo de cada vez.
              </p>
              <Link href="/ia" className="btn btn-primary">
                ✦ Criar mural com IA
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            <div className="hero-orbit" aria-hidden="true">
              <span>✦</span>
              <span>♡</span>
              <span>✧</span>
            </div>
          </section>
        </div>

        <Reveal>
          <section className="section">
            <SectionTitle
              eyebrow="Seu progresso"
              title="Sonhos em movimento"
              action={<strong>{overallProgress}%</strong>}
            />
            <ProgressBar value={overallProgress} delay={320} />
            <p className="muted-copy">Você está mais perto do que imagina.</p>
          </section>
        </Reveal>

        <Reveal delay={80}>
          <section className="section">
            <SectionTitle
              eyebrow="Coleção pessoal"
              title="Meus sonhos"
              action={
                <Link href="/categorias" className="text-link">
                  Ver todos <span aria-hidden="true">→</span>
                </Link>
              }
            />
            <div className="dream-grid">
              {dreams.map((dream, index) => (
                <DreamCard
                  key={dream.id}
                  dream={dream}
                  featured={index === 0}
                  delay={index * 110}
                />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={80}>
          <section className="section">
            <SectionTitle
              eyebrow="Explore"
              title="Por categoria"
              action={
                <Link href="/categorias" className="text-link">
                  Ver todas <span aria-hidden="true">→</span>
                </Link>
              }
            />
            <div className="category-row">
              {categories.slice(0, 8).map((category) => (
                <CategoryPill key={category.slug} category={category} />
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* Vira coluna lateral fixa a partir de 1320px; abaixo disso, segue
          o fluxo normal no fim da página. */}
      <aside className="page-aside">
        <Reveal delay={120}>
          <section className="quote-banner">
            <div>
              <p className="eyebrow">Frases &amp; inspiração</p>
              <h2>
                Uma frase pode mudar
                <br />
                o seu dia.
              </h2>
              <Link href="/frases" className="text-link">
                Criar uma arte <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="quote-mark" aria-hidden="true">
              ❞
            </div>
          </section>
        </Reveal>

        <Reveal delay={160}>
          <div className="stat-card">
            <p className="eyebrow">Resumo</p>
            <div className="stat-row">
              <span>Sonhos ativos</span>
              <strong>{dreams.length}</strong>
            </div>
            <div className="stat-row">
              <span>Categorias</span>
              <strong>{categories.length}</strong>
            </div>
            <div className="stat-row">
              <span>Progresso médio</span>
              <strong>{overallProgress}%</strong>
            </div>
          </div>
        </Reveal>
      </aside>
    </main>
  );
}
