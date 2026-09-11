import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { BotaoSair, IdentidadeSessao } from "@/components/SessaoUI";
import { categories, dreams, overallProgress } from "@/lib/data";

/** As linhas do perfil (tela 29). Só Configurações já tem tela; as outras
    ficam como botões para não virarem links quebrados. */
const settings = [
  { label: "Minha conta", href: null },
  { label: "Meu plano", href: "/planos" },
  { label: "Meus murais", href: "/mural" },
  { label: "Minhas conquistas", href: "/conquistas" },
  { label: "Configurações", href: "/configuracoes" },
  { label: "Ajuda e suporte", href: "/ajuda" },
  { label: "Sobre o VYRA", href: "/sobre" },
];

export default function ProfilePage() {
  return (
    <main className="page">
      <div className="stagger">
        <PageHeader
          eyebrow="Seu espaço"
          title="Perfil"
          action={
            <Link href="/inicio" className="icon-button" aria-label="Voltar para o início">
              ×
            </Link>
          }
        />

        <section className="profile-card">
          <IdentidadeSessao />
          <div className="profile-stats">
            <div>
              <strong>{dreams.length}</strong>
              <span>sonhos</span>
            </div>
            <div>
              <strong>{categories.length}</strong>
              <span>categorias</span>
            </div>
            <div>
              <strong>{overallProgress}%</strong>
              <span>progresso</span>
            </div>
          </div>
        </section>
      </div>

      <Reveal>
        <div className="settings-list">
          {settings.map((item) =>
            item.href ? (
              <Link href={item.href} key={item.label}>
                <span>{item.label}</span>
                <b aria-hidden="true">→</b>
              </Link>
            ) : (
              <button type="button" key={item.label}>
                <span>{item.label}</span>
                <b aria-hidden="true">→</b>
              </button>
            ),
          )}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <BotaoSair />
      </Reveal>
    </main>
  );
}
