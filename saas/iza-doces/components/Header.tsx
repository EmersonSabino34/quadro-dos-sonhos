"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Início", href: "/" },
  { label: "Cursos", href: "#cursos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Receitas", href: "#receitas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#9c4f61]/10 bg-[#fffaf6]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="leading-none">
          <span className="block font-serif text-2xl font-bold text-[#713342]">Izabelle Sabino</span>
          <span className="block text-center text-[8px] tracking-[4px] text-[#c99b5b]">RECEITAS &amp; CURSOS</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-semibold text-[#2d2525] transition hover:text-[#9c4f61]">
              {link.label}
            </Link>
          ))}
          <Link href="#cursos" className="rounded-full bg-[#9c4f61] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#713342]">Quero aprender</Link>
        </nav>

        <button type="button" onClick={() => setOpen(!open)} className="text-2xl text-[#9c4f61] lg:hidden" aria-label="Abrir menu">
          {open ? "x" : "="}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#9c4f61]/10 bg-[#fffaf6] px-5 py-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="font-semibold text-[#2d2525]">{link.label}</Link>
            ))}
            <Link href="#cursos" onClick={() => setOpen(false)} className="rounded-full bg-[#9c4f61] px-6 py-3 text-center font-bold text-white">Quero aprender</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
