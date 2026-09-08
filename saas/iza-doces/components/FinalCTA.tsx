import Link from "next/link";

export default function FinalCTA() {
  return <section className="bg-gradient-to-br from-[#713342] to-[#9c4f61] py-28 text-center text-white"><div className="mx-auto max-w-4xl px-5"><h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">Sua próxima receita pode ser o começo de algo novo.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">Aprenda com a Izabelle, pratique no seu ritmo e descubra tudo o que você é capaz de criar.</p><Link href="#cursos" className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-bold text-[#9c4f61] transition hover:-translate-y-1 hover:bg-[#f7e8df]">QUERO COMEÇAR AGORA</Link></div></section>;
}
