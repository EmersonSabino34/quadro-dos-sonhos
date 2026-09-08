const testimonials = [
  "Eu nunca imaginei que conseguiria fazer bolos assim. As explicações são muito fáceis de entender!",
  "Finalmente consegui acertar minhas receitas. O passo a passo fez toda a diferença.",
  "Comecei fazendo para minha família e hoje já consigo fazer encomendas.",
];

export default function Testimonials() {
  return <section id="depoimentos" className="bg-[#fffaf6] py-24"><div className="mx-auto max-w-7xl px-5"><div className="mx-auto mb-14 max-w-2xl text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#c99b5b]">Resultados</p><h2 className="font-serif text-4xl font-bold text-[#713342] md:text-5xl">Quem aprende com a Izabelle, recomenda.</h2></div><div className="grid gap-6 md:grid-cols-3">{testimonials.map((testimonial) => <article key={testimonial} className="rounded-3xl bg-white p-8 shadow-lg shadow-black/5"><div className="mb-5 tracking-[3px] text-[#c99b5b]">*****</div><p className="italic leading-7 text-[#625858]">&quot;{testimonial}&quot;</p><strong className="mt-6 block text-[#713342]">- Nome da aluna</strong></article>)}</div></div></section>;
}
