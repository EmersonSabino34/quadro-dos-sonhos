const questions = [
  { question: "Os cursos são online?", answer: "Sim. As aulas são disponibilizadas online para você acompanhar no seu ritmo." },
  { question: "Preciso ter experiência?", answer: "Não. Os cursos são pensados para explicar cada etapa de forma clara e prática." },
  { question: "Posso assistir pelo celular?", answer: "Sim. Você poderá acompanhar as aulas através de um dispositivo com acesso à internet." },
  { question: "Por quanto tempo terei acesso?", answer: "O período de acesso será informado na página do curso escolhido." },
];

export default function FAQ() {
  return <section id="faq" className="bg-white py-24"><div className="mx-auto max-w-3xl px-5"><div className="mb-14 text-center"><p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#c99b5b]">Dúvidas</p><h2 className="font-serif text-4xl font-bold text-[#713342] md:text-5xl">Perguntas frequentes</h2></div><div>{questions.map((item) => <details key={item.question} className="border-b border-gray-200 py-6"><summary className="cursor-pointer font-bold text-[#2d2525]">{item.question}</summary><p className="mt-4 leading-7 text-[#625858]">{item.answer}</p></details>)}</div></div></section>;
}
