import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const styles = [{ title: "Inspirador", note: "Frases em destaque e energia para realizar.", tone: "inspiring" }, { title: "Criativo", note: "Colagem, adesivos e fotos sobrepostas.", tone: "creative" }, { title: "Minimalista", note: "Espaço, equilíbrio e foco no essencial.", tone: "minimal" }];

export default function AiPage() {
  return <><main className="mobile-page"><header className="topbar"><div><p className="eyebrow">IA DESIGNER</p><h1>Crie seu mural</h1></div><Link href="/" className="close-button" aria-label="Voltar">×</Link></header><section className="ai-intro"><span>✦</span><h2>Seus sonhos,<br /><em>do seu jeito.</em></h2><p>Escolha um estilo e deixe a inteligência artificial organizar suas imagens, objetivos e frases.</p></section><p className="eyebrow style-label">ESCOLHA UMA DIREÇÃO</p><div className="style-grid">{styles.map((style) => <button className={`style-card ${style.tone}`} key={style.title} type="button"><div className="style-art"><span>✦</span><span>♡</span><span>✧</span></div><strong>{style.title}</strong><p>{style.note}</p><span className="style-arrow">→</span></button>)}</div><button className="primary-button share-button" type="button">Adicionar fotos <span>+</span></button></main><BottomNav /></>;
}
