"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import {
  IconGrid,
  IconHome,
  IconQuote,
  IconSparkle,
  IconUser,
} from "@/components/icons";

/**
 * `also` lista prefixos de rota que ainda pertencem a este item de menu.
 * Sem isso, /sonho/1 e /categoria/lugares deixavam o menu inteiro apagado,
 * porque nenhuma das rotas filhas bate com o href do item pai.
 */
const items = [
  { href: "/mural", label: "Início", Icon: IconHome, also: ["/sonho"] },
  { href: "/categorias", label: "Categorias", Icon: IconGrid, also: ["/categoria"] },
  { href: "/ia", label: "IA Designer", Icon: IconSparkle, also: [] },
  { href: "/frases", label: "Frases", Icon: IconQuote, also: [] },
  { href: "/perfil", label: "Perfil", Icon: IconUser, also: [] },
];

export default function NavRail() {
  const pathname = usePathname();

  function isActive(href: string, also: string[]) {
    if (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)) {
      return true;
    }
    return also.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
  }

  return (
    <nav className="nav" aria-label="Navegação principal">
      {/* Só aparece no layout de trilha lateral (>= 1024px) */}
      <div className="nav-brand">
        <span className="nav-brand-mark" aria-hidden="true">
          ✦
        </span>
        <div>
          <strong>Mural dos Sonhos</strong>
          <span>Visualize · Realize</span>
        </div>
      </div>

      <div className="nav-items">
        {items.map(({ href, label, Icon, also }) => {
          const active = isActive(href, also);
          return (
            <Link
              key={href}
              href={href}
              className="nav-item"
              aria-current={active ? "page" : undefined}
            >
              <span className="nav-icon">
                <Icon />
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </div>

      {/* No desktop o toggle mora no pé da trilha; no mobile, no cabeçalho */}
      <div className="nav-footer">
        <ThemeToggle />
      </div>
    </nav>
  );
}
