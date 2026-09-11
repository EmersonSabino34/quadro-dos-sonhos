import Link from "next/link";
import { notFound } from "next/navigation";
import Ambience from "@/components/Ambience";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import WallpaperPreview from "@/components/WallpaperPreview";
import { IconArrowLeft } from "@/components/icons";
import { layoutById, muralById, muralPhotos } from "@/lib/murais";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ layout?: string }>;
};

export const metadata = { title: "Papel de parede" };

export default async function PreviewMuralPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { layout: layoutParam } = await searchParams;

  const mural = muralById(id);
  if (!mural) notFound();

  const layout = (layoutParam ? layoutById(layoutParam) : undefined) ?? layoutById(mural.layoutId);
  if (!layout) notFound();

  return (
    /* Céu estrelado: a tela de ver o resultado é a mais contemplativa do fluxo. */
    <main className="page" data-ambience="stars">
      <Ambience />

      <div className="stagger">
        <PageHeader
          eyebrow="Pré-visualização"
          title={mural.title}
          action={
            <Link
              href={`/mural/${mural.id}/editar`}
              className="icon-button"
              aria-label="Voltar para o editor"
            >
              <IconArrowLeft />
            </Link>
          }
        />

        <WallpaperPreview
          layout={layout}
          photos={muralPhotos(mural)}
          caption={"Disciplina hoje.\nResultados sempre."}
        />
      </div>

      <Reveal>
        <button type="button" className="btn btn-primary btn-block">
          Definir como papel de parede
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
        <p className="muted-copy" style={{ textAlign: "center" }}>
          O VYRA salva a imagem na sua galeria; o papel de parede você aplica pelo
          próprio aparelho.
        </p>
      </Reveal>
    </main>
  );
}
