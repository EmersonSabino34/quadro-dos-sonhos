import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";
import type { Dream } from "@/lib/data";

type DreamCardProps = {
  dream: Dream;
  /** O primeiro cartão ocupa a largura toda no mobile. */
  featured?: boolean;
  /** Escalona o preenchimento das barras entre cartões vizinhos. */
  delay?: number;
};

export default function DreamCard({ dream, featured = false, delay = 0 }: DreamCardProps) {
  return (
    <Link
      href={`/sonho/${dream.id}`}
      className={featured ? "dream-card dream-card-featured" : "dream-card"}
    >
      <div className="dream-image">
        {/* eslint-disable-next-line @next/next/no-img-element -- fotos externas do Unsplash, sem domínios configurados em next.config */}
        <img src={dream.image} alt={dream.title} loading="lazy" />
        <span className="dream-menu" aria-hidden="true">
          •••
        </span>
        <div className="dream-overlay">
          <p>{dream.category}</p>
          <h3>{dream.title}</h3>
        </div>
      </div>
      <div className="dream-meta">
        <span>Progresso</span>
        <strong>{dream.progress}%</strong>
        <ProgressBar value={dream.progress} small delay={240 + delay} />
        <small>Meta {dream.target}</small>
      </div>
    </Link>
  );
}
