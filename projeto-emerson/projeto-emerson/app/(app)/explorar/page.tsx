import Link from "next/link";
import { CategoryListItem } from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <main className="page">
      <div className="stagger">
        <PageHeader
          eyebrow="Organize seus sonhos"
          title="Categorias"
          action={
            <Link href="/mural" className="icon-button" aria-label="Voltar para o mural">
              ×
            </Link>
          }
        />
        <p className="page-lede">
          Tudo começa com uma intenção. Escolha uma área para adicionar fotos, metas e
          inspirações.
        </p>
      </div>

      <Reveal>
        <div className="all-categories">
          {categories.map((category) => (
            <CategoryListItem key={category.slug} category={category} />
          ))}
        </div>
      </Reveal>
    </main>
  );
}
