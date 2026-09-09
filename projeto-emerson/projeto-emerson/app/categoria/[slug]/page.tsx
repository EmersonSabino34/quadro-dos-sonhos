import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import { categories } from "@/lib/data";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug) ?? categories[0];
  return <><main className="mobile-page"><header className="topbar"><div><p className="eyebrow">CATEGORIA</p><h1>{category.icon} {category.title.split(" ")[0]}</h1></div><Link href="/categorias" className="close-button" aria-label="Voltar">×</Link></header><section className="category-detail-hero"><img src={category.image} alt={category.title} /><div><p className="eyebrow">SEU FOCO</p><h2>{category.title}</h2><p>{category.description}</p></div></section><div className="section-heading detail-heading"><div><p className="eyebrow">INSPIRAÇÕES</p><h2>Adicione ao seu mural</h2></div><span className="text-link">0 itens</span></div><div className="empty-state"><span>✦</span><h2>Comece por uma imagem</h2><p>Adicione uma foto, uma frase ou um objetivo para dar forma a este sonho.</p><button className="primary-button" type="button">Adicionar conteúdo <b>+</b></button></div></main><BottomNav /></>;
}
