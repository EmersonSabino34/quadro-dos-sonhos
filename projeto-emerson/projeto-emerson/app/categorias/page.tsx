import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  return <><main className="mobile-page"><header className="topbar"><div><p className="eyebrow">ORGANIZE SEUS SONHOS</p><h1>Categorias</h1></div><Link href="/" className="close-button" aria-label="Voltar">×</Link></header><p className="category-lede">Tudo começa com uma intenção. Escolha uma área para adicionar fotos, metas e inspirações.</p><div className="all-categories">{categories.map((category) => <Link href={`/categoria/${category.slug}`} className="all-category" key={category.slug}><span>{category.icon}</span><div><h2>{category.title}</h2><p>{category.description}</p></div><b>→</b></Link>)}</div></main><BottomNav /></>;
}
