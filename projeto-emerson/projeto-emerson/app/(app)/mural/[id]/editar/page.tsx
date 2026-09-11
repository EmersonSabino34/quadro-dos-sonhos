import Link from "next/link";
import { notFound } from "next/navigation";
import Ambience from "@/components/Ambience";
import MuralEditor from "@/components/MuralEditor";
import PageHeader from "@/components/PageHeader";
import { IconArrowLeft } from "@/components/icons";
import { layoutById, muralById, muralPhotos } from "@/lib/murais";

type Props = {
  params: Promise<{ id: string }>;
  /** `?layout=` chega da tela de escolha de layout. */
  searchParams: Promise<{ layout?: string }>;
};

export const metadata = { title: "Editar mural" };

export default async function EditarMuralPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { layout: layoutParam } = await searchParams;

  const mural = muralById(id);
  if (!mural) notFound();

  // O layout da URL ganha do layout salvo: é a escolha que a pessoa acabou de
  // fazer na tela anterior. Um valor inválido cai no layout do próprio mural.
  const layout = (layoutParam ? layoutById(layoutParam) : undefined) ?? layoutById(mural.layoutId);
  if (!layout) notFound();

  return (
    <main className="page" data-ambience="aurora">
      <Ambience />

      <div className="stagger">
        <PageHeader
          eyebrow="Passo 2 de 2"
          title="Editar mural"
          action={
            <Link href="/mural" className="icon-button" aria-label="Voltar para os murais">
              <IconArrowLeft />
            </Link>
          }
        />

        <MuralEditor
          muralId={mural.id}
          initialLayout={layout}
          photos={muralPhotos(mural)}
          initialCaption={"Disciplina hoje.\nResultados sempre."}
        />
      </div>
    </main>
  );
}
