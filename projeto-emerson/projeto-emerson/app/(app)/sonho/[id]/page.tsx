import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProgressBar from "@/components/ProgressBar";
import Reveal from "@/components/Reveal";
import { dreams } from "@/lib/data";

export default async function DreamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Antes esta página era fixa em "Conhecer Paris" e ignorava o id da rota.
  const dream = dreams.find((item) => item.id === id) ?? dreams[0];

  return (
    <main className="page">
      <div className="stagger">
        <PageHeader
          eyebrow="Detalhes do sonho"
          title={dream.title}
          action={
            <Link href="/inicio" className="icon-button" aria-label="Voltar para o mural">
              ×
            </Link>
          }
        />

        <section className="detail-hero">
          {/* eslint-disable-next-line @next/next/no-img-element -- fotos externas do Unsplash */}
          <img src={dream.image} alt={dream.title} />
          <button className="detail-hero-fav" type="button" aria-label="Favoritar sonho">
            ♡
          </button>
        </section>

        <div className="dream-detail-title">
          <div>
            <p className="eyebrow">{dream.category}</p>
            <h2>{dream.title}</h2>
          </div>
          <strong>{dream.progress}%</strong>
        </div>
      </div>

      <ProgressBar value={dream.progress} delay={380} />

      <Reveal>
        <div className="goal-grid">
          <div>
            <span>Data desejada</span>
            <b>2027</b>
          </div>
          <div>
            <span>Meta financeira</span>
            <b>{dream.target}</b>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <button className="btn btn-primary btn-block" type="button">
          Atualizar progresso
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </Reveal>
    </main>
  );
}
