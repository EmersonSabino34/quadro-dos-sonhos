import Link from "next/link";

const categories = [
  { title: "Bolos", description: "Aprenda massas, recheios, montagem, cobertura e técnicas para criar bolos incríveis.", image: "Foto de bolo" },
  { title: "Doces", description: "Descubra receitas e técnicas para preparar doces deliciosos e irresistíveis.", image: "Foto de doces" },
  { title: "Salgados", description: "Aprenda preparos saborosos e práticos para sua família, eventos ou para vender.", image: "Foto de salgados" },
];

export default function Categories() {
  return (
    <section id="categorias" className="bg-[#fffaf6] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-14 max-w-2xl text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#c99b5b]">Escolha sua paixão</p><h2 className="font-serif text-4xl font-bold text-[#713342] md:text-5xl">Qual é a sua próxima receita?</h2><p className="mt-5 text-lg text-[#625858]">Escolha uma categoria e descubra tudo o que você pode aprender.</p></div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => <article key={category.title} className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/5 transition hover:-translate-y-2 hover:shadow-xl"><div className="flex h-64 items-center justify-center bg-[#f7e8df]"><span className="font-serif text-2xl text-[#9c4f61]">{category.image}</span></div><div className="p-7"><h3 className="font-serif text-3xl font-bold text-[#713342]">{category.title}</h3><p className="mt-3 text-[#625858]">{category.description}</p><Link href="#cursos" className="mt-5 inline-block text-sm font-bold text-[#9c4f61]">VER CURSOS -&gt;</Link></div></article>)}
        </div>
      </div>
    </section>
  );
}
