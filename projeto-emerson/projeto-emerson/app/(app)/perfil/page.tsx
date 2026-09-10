import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { BotaoSair, IdentidadeSessao } from "@/components/SessaoUI";
import { categories, dreams, overallProgress } from "@/lib/data";

const settings = ["Meu perfil", "Notificações", "Privacidade", "Preferências de estilo"];

export default function ProfilePage() {
  return (
    <main className="page">
      <div className="stagger">
        <PageHeader
          eyebrow="Seu espaço"
          title="Perfil"
          action={
            <Link href="/mural" className="icon-button" aria-label="Voltar para o mural">
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
          {settings.map((item) => (
            <Link href="#" key={item}>
              <span>{item}</span>
              <b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <BotaoSair />
      </Reveal>
    </main>
  );
}
