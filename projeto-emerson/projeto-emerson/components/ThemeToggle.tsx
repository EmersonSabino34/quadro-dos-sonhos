"use client";

import { useRef } from "react";
import { IconMoon, IconSun } from "@/components/icons";

type Theme = "light" | "dark";

/** Mesma chave lida pelo script anti-flash em app/layout.tsx. */
const STORAGE_KEY = "mds-theme";

/**
 * O componente não guarda estado em React de propósito.
 *
 * Qual tema está ativo é decidido por CSS a partir de [data-theme] no <html>
 * (com prefers-color-scheme como fallback), então o ícone troca sem precisar
 * de re-render. Isso elimina o erro de hidratação clássico: o servidor não
 * tem como saber o tema do usuário, e qualquer estado inicial que ele
 * chutasse divergiria do cliente no primeiro paint.
 */
export default function ThemeToggle() {
  const ref = useRef<HTMLButtonElement>(null);

  function resolveCurrent(): Theme {
    const explicit = document.documentElement.dataset.theme;
    if (explicit === "dark" || explicit === "light") return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function apply(next: Theme) {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // modo privado ou storage bloqueado: o tema vale só para esta sessão
    }
  }

  function toggle() {
    const next: Theme = resolveCurrent() === "dark" ? "light" : "dark";

    // A origem do círculo de revelação é o centro do próprio botão, então a
    // luz parece nascer de onde o usuário clicou.
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const root = document.documentElement;
      root.style.setProperty("--sweep-x", `${rect.left + rect.width / 2}px`);
      root.style.setProperty("--sweep-y", `${rect.top + rect.height / 2}px`);
    }

    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduced && typeof doc.startViewTransition === "function") {
      doc.startViewTransition(() => apply(next));
    } else {
      apply(next);
    }
  }

  return (
    <button
      ref={ref}
      type="button"
      className="theme-toggle"
      onClick={toggle}
      title="Alternar tema claro e escuro"
      aria-label="Alternar tema claro e escuro"
    >
      <IconSun className="icon-sun" />
      <IconMoon className="icon-moon" />
    </button>
  );
}
