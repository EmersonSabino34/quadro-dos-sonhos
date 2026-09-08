import Link from "next/link";

const courses = [
  { category: "BOLOS", title: "Bolos Perfeitos", description: "Aprenda massas fofinhas, recheios equilibrados e acabamentos incríveis." },
  { category: "DOCES", title: "Doces Irresistíveis", description: "Aprenda receitas e técnicas para criar doces saborosos e bonitos." },
  { category: "SALGADOS", title: "Salgados de Sucesso", description: "Aprenda preparos saborosos e versáteis para diferentes ocasiões." },
];

export default function FeaturedCourses() {
  return <section id="cursos" className="bg-white py-24"><div className="mx-auto max-w-7xl px-5"><div className="mb-14 max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#c99b5b]">Aprenda com a Izabelle</p><h2 className="font-serif text-4xl font-bold text-[#713342] md:text-5xl">Comece pelo curso que mais combina com você.</h2><p className="mt-5 text-lg text-[#625858]">Conteúdo pensado para você aprender novas receitas, dominar técnicas e cozinhar com mais segurança.</p></div><div className="grid gap-6 md:grid-cols-3">{courses.map((course) => <article key={course.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-white transition hover:-translate-y-2 hover:shadow-xl"><div className="flex h-56 items-center justify-center bg-[#f7e8df]"><span className="font-serif text-xl text-[#9c4f61]">Foto do curso</span></div><div className="p-7"><span className="text-[11px] font-bold tracking-[2px] text-[#c99b5b]">{course.category}</span><h3 className="mt-2 font-serif text-2xl font-bold text-[#713342]">{course.title}</h3><p className="mt-3 text-[#625858]">{course.description}</p><Link href="#cursos" className="mt-6 inline-block rounded-full bg-[#9c4f61] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#713342]">CONHECER CURSO</Link></div></article>)}</div></div></section>;
}
