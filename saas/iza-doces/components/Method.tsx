const steps = [
  { number: "01", title: "Aprenda", text: "Entenda cada etapa da preparação de forma simples e prática." },
  { number: "02", title: "Pratique", text: "Coloque o conhecimento em ação e desenvolva suas habilidades." },
  { number: "03", title: "Crie", text: "Use as técnicas para adaptar receitas e criar suas próprias combinações." },
];

export default function Method() {
  return <section className="bg-[#f7e8df] py-24"><div className="mx-auto max-w-7xl px-5"><div className="mx-auto mb-14 max-w-2xl text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#c99b5b]">Método Izabelle Sabino</p><h2 className="font-serif text-4xl font-bold text-[#713342] md:text-5xl">Mais do que receitas.</h2><p className="mt-5 text-lg text-[#625858]">Aprenda a entender o processo para conseguir reproduzir e adaptar as receitas com muito mais segurança.</p></div><div className="grid gap-6 md:grid-cols-3">{steps.map((step) => <div key={step.number} className="rounded-3xl bg-white p-9 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#9c4f61] font-serif text-xl text-white">{step.number}</div><h3 className="mt-6 font-serif text-2xl font-bold text-[#713342]">{step.title}</h3><p className="mt-3 text-[#625858]">{step.text}</p></div>)}</div></div></section>;
}
