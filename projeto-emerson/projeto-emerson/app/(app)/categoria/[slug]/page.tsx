import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { categories } from "@/lib/data";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug) ?? categories[0];

  return (
    <main className="page">
      <div className="stagger">
        <PageHeader
          eyebrow="Categoria"
          title={
            <>
              <span aria-hidden="true">{category.icon}</span> {category.short}
            </>
          }
          action={
            <Link
              href="/explorar"
              className="icon-button"
              aria-label="Voltar para categorias"
            >
              ×
            </Link>
          }
        />

        <section className="detail-hero">
          {/* eslint-disable-next-line @next/next/no-img-element -- fotos externas do Unsplash */}
          <img src={category.image} alt={category.title} />
          <div className="detail-hero-copy">
            <p className="eyebrow">Seu foco</p>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>
        </section>
      </div>

      <Reveal>
        <section className="section">
          <SectionTitle
            eyebrow="Inspirações"
            title="Adicione ao seu mural"
            action={<span className="step-count">0 itens</span>}
          />
          <div className="empty-state">
            <span aria-hidden="true">✦</span>
            <h2>Comece por uma imagem</h2>
            <p>
              Adicione uma foto, uma frase ou um objetivo para dar forma a este sonho.
            </p>
            <button className="btn btn-primary" type="button">
              Adicionar conteúdo
              <span className="btn-arrow" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
