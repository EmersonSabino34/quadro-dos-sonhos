import Link from "next/link";

export default function About() {
  return <section id="sobre" className="bg-white py-24">
    <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
      <div className="flex min-h-[500px] items-center justify-center rounded-3xl bg-[#f7e8df]">
        <span className="font-serif text-3xl text-[#9c4f61]">Foto da Izabelle</span>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#c99b5b]">Prazer, eu sou</p>
          <h2 className="font-serif text-5xl font-bold text-[#713342]">Izabelle Sabino.</h2>
          <p className="mt-6 text-lg leading-8 text-[#625858]">Cozinhar sempre foi mais do que preparar uma receita para mim.</p>
          <p className="mt-5 text-lg leading-8 text-[#625858]">É transformar ingredientes simples em momentos especiais, compartilhar conhecimento e mostrar que qualquer pessoa pode aprender quando recebe a orientação certa.</p>
          <p className="mt-5 text-lg leading-8 text-[#625858]">Foi pensando nisso que criei meus cursos: para ensinar de maneira simples, prática e próxima.</p>
          <Link href="#cursos" className="mt-8 inline-block rounded-full bg-[#9c4f61] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#713342]">CONHEÇA OS CURSOS</Link></div>
          </div>
          </section>;
}
