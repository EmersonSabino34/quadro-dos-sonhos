import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#fffaf6] to-[#f7e8df]">
      <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#c99b5b]">Cursos de culinária com Izabelle Sabino</p>
          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-[#713342] md:text-6xl lg:text-7xl">Transforme sua paixão por receitas em <span className="text-[#c99b5b]">resultados.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#625858]">Aprenda a preparar bolos, doces e salgados deliciosos, com técnicas práticas e aulas passo a passo para você cozinhar com muito mais confiança.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#cursos" className="rounded-full bg-[#9c4f61] px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-[#9c4f61]/20 transition hover:-translate-y-1 hover:bg-[#713342]">QUERO APRENDER COM A IZABELLE</Link>
            <Link href="#categorias" className="rounded-full border-2 border-[#9c4f61] px-7 py-4 text-center text-sm font-bold text-[#9c4f61] transition hover:bg-[#9c4f61] hover:text-white">VER OS CURSOS</Link>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="flex h-[500px] w-[380px] items-center justify-center overflow-hidden rounded-t-[200px] rounded-b-[30px] bg-[#ead1c7] shadow-2xl"><span className="font-serif text-3xl text-[#9c4f61]/60">Foto da Izabelle</span></div>
          <div className="absolute bottom-8 right-0 max-w-[220px] rounded-2xl bg-white p-5 shadow-2xl"><strong className="block text-xl text-[#9c4f61]">+ Receitas</strong><span className="text-sm text-[#625858]">Aprenda técnicas para criar receitas incríveis.</span></div>
        </div>
      </div>
    </section>
  );
}
