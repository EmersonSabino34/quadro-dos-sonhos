import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const styles = [
  {
    title: "Inspirador",
    note: "Frases em destaque e energia para realizar.",
    tone: "style-inspiring",
  },
  {
    title: "Criativo",
    note: "Colagem, adesivos e fotos sobrepostas.",
    tone: "style-creative",
  },
  {
    title: "Minimalista",
    note: "Espaço, equilíbrio e foco no essencial.",
    tone: "style-minimal",
  },
];

export default function AiPage() {
  return (
    <main className="page">
      <div className="stagger">
        <PageHeader
          eyebrow="IA Designer"
          title="Crie seu mural"
          action={
            <Link href="/mural" className="icon-button" aria-label="Voltar para o mural">
              ×
            </Link>
          }
        />

        <section className="ai-intro">
          <span aria-hidden="true">✦</span>
          <h2>
            Seus sonhos,
            <br />
            <em>do seu jeito.</em>
          </h2>
          <p>
            Escolha um estilo e deixe a inteligência artificial organizar suas imagens,
            objetivos e frases.
          </p>
        </section>
      </div>

      <Reveal>
        <section className="section">
          <p className="eyebrow">Escolha uma direção</p>
          <div className="style-grid">
            {styles.map((style) => (
              <button className={`style-card ${style.tone}`} key={style.title} type="button">
                <div className="style-art" aria-hidden="true">
                  <span>✦</span>
                  <span>♡</span>
                  <span>✧</span>
                </div>
                <strong>{style.title}</strong>
                <p>{style.note}</p>
                <span className="style-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <button className="btn btn-primary btn-block" type="button">
          Adicionar fotos
          <span className="btn-arrow" aria-hidden="true">
            +
          </span>
        </button>
      </Reveal>
    </main>
  );
}
