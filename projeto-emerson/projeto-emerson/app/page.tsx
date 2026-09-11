import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import { categories } from "@/lib/data";

const dreams = [
  { title: "Conhecer Paris", category: "Lugares", progress: 35, target: "€ 3.000", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85" },
  { title: "Meu cantinho", category: "Casa e patrimônio", progress: 20, target: "R$ 80.000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85" },
  { title: "Mais tempo em família", category: "Família", progress: 68, target: "2026", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85" },
];

export default function HomePage() {
  return (
    <>
      <main className="mobile-page">
        <header className="topbar">
          <div><p className="eyebrow">DOMINGO, 27 DE ABRIL</p><h1>Olá, Ana <span>✦</span></h1></div>
          <Link href="/perfil" aria-label="Abrir perfil" className="profile-avatar">AS</Link>
        </header>
        <section className="hero-card">
          <div className="hero-glow" />
          <div className="hero-copy"><p className="hero-kicker">SEU MURAL, SUA VISÃO</p><h2>Visualize.<br /><em>Acredite.</em><br />Realize.</h2><p>Transforme seus sonhos em planos possíveis, um passo de cada vez.</p><Link href="/ia" className="primary-button">✦ Criar mural com IA <span>→</span></Link></div>
          <div className="hero-orbit"><span>✦</span><span>♡</span><span>✧</span></div>
        </section>
        <section className="progress-section"><div className="section-heading"><div><p className="eyebrow">SEU PROGRESSO</p><h2>Sonhos em movimento</h2></div><strong>32%</strong></div><div className="progress-track"><div style={{ width: "32%" }} /></div><p className="muted-copy">Você está mais perto do que imagina.</p></section>
        <section className="dreams-section"><div className="section-heading"><div><p className="eyebrow">COLEÇÃO PESSOAL</p><h2>Meus sonhos</h2></div><Link href="/categorias" className="text-link">Ver todos →</Link></div><div className="dream-grid">
          {dreams.map((dream, index) => <Link href="/sonho/1" key={dream.title} className={`dream-card ${index === 0 ? "dream-card-featured" : ""}`}><div className="dream-image"><img src={dream.image} alt={dream.title} /><span className="dream-menu">•••</span><div className="dream-overlay"><p>{dream.category}</p><h3>{dream.title}</h3></div></div><div className="dream-meta"><span>Progresso</span><strong>{dream.progress}%</strong><div className="progress-track small"><div style={{ width: `${dream.progress}%` }} /></div><small>Meta {dream.target}</small></div></Link>)}
        </div></section>
        <section className="category-section"><div className="section-heading"><div><p className="eyebrow">EXPLORE</p><h2>Por categoria</h2></div><Link href="/categorias" className="text-link">Ver todas →</Link></div><div className="category-row">
          {categories.slice(0, 6).map((category) => <Link href={`/categoria/${category.slug}`} key={category.slug} className="category-pill"><span>{category.icon}</span><p>{category.title.split(" ")[0]}</p></Link>)}
        </div></section>
        <section className="quote-banner"><div><p className="eyebrow">FRASES & INSPIRAÇÃO</p><h2>Uma frase pode mudar<br />o seu dia.</h2><Link href="/frases" className="text-link light">Criar uma arte →</Link></div><div className="quote-mark">❞</div></section>
      </main>
      <BottomNav />
    </>
  );
}
