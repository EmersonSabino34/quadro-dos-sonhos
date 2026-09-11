"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [{ href: "/", icon: "⌂", label: "Início" }, { href: "/categorias", icon: "▦", label: "Categorias" }, { href: "/ia", icon: "✦", label: "IA Designer" }, { href: "/frases", icon: "❝", label: "Frases" }, { href: "/perfil", icon: "◯", label: "Perfil" }];

export default function BottomNav() {
  const pathname = usePathname();
  return <nav className="bottom-nav" aria-label="Navegação principal"><div className="flex items-center justify-between">{items.map((item) => { const active = pathname === item.href || pathname.startsWith(`${item.href}/`); return <Link key={item.href} href={item.href} className={`flex min-w-14.5 flex-col items-center gap-1.5 ${active ? "text-[#b59fff]" : "text-[#716d7b]"}`}><span className={`flex h-9 w-9 items-center justify-center rounded-xl text-lg ${active ? "bg-[#9b7cff]/15" : ""}`}>{item.icon}</span><span className="text-[10px] font-medium">{item.label}</span></Link>; })}</div></nav>;
}
