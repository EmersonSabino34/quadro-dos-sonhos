import Link from "next/link";
import type { Category } from "@/lib/data";

/** Atalho compacto usado na trilha horizontal da home. */
export function CategoryPill({ category }: { category: Category }) {
  return (
    <Link href={`/categoria/${category.slug}`} className="category-pill">
      <span aria-hidden="true">{category.icon}</span>
      <p>{category.short}</p>
    </Link>
  );
}

/** Linha completa usada na página de categorias. */
export function CategoryListItem({ category }: { category: Category }) {
  return (
    <Link href={`/categoria/${category.slug}`} className="all-category">
      <span aria-hidden="true">{category.icon}</span>
      <div>
        <h2>{category.title}</h2>
        <p>{category.description}</p>
      </div>
      <b aria-hidden="true">→</b>
    </Link>
  );
}
