"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { encerrarSessao, useSessao } from "@/lib/auth";

/**
 * Pedacinhos de UI que dependem de quem está logado.
 *
 * Ficam juntos num arquivo só porque são todos variações do mesmo problema:
 * a sessão vive no localStorage, então só existe no cliente, e cada um precisa
 * de um fallback para o primeiro render.
 */

const VISITANTE = { nome: "Visitante", iniciais: "··" };

function primeiroNome(nome: string) {
  return nome.trim().split(/\s+/)[0] ?? nome;
}

/** "Olá, Ana ✦" no cabeçalho do mural. */
export function SaudacaoSessao() {
  const { sessao, carregando } = useSessao();

  return (
    <>
      Olá, {carregando ? "…" : primeiroNome(sessao?.nome ?? VISITANTE.nome)}{" "}
      <span aria-hidden="true">✦</span>
    </>
  );
}

/** Avatar com as iniciais de quem está logado. */
export function AvatarSessao() {
  const { sessao, carregando } = useSessao();

  return (
    <Link href="/perfil" className="avatar" aria-label="Abrir perfil">
      {carregando ? "" : (sessao?.iniciais ?? VISITANTE.iniciais)}
    </Link>
  );
}

/** Bloco de identidade do topo da página de perfil. */
export function IdentidadeSessao() {
  const { sessao, carregando } = useSessao();

  if (carregando) {
    // Placeholder com a mesma altura do conteúdo real, para o cartão não pular.
    return (
      <>
        <div className="avatar avatar-lg" aria-hidden="true" />
        <h2>&nbsp;</h2>
        <p>&nbsp;</p>
      </>
    );
  }

  return (
    <>
      <div className="avatar avatar-lg">{sessao?.iniciais ?? VISITANTE.iniciais}</div>
      <h2>{sessao?.nome ?? VISITANTE.nome}</h2>
      <p>{sessao ? sessao.email : "Você não está em nenhuma conta."}</p>
    </>
  );
}

/** Encerra a sessão e devolve a pessoa para a landing. */
export function BotaoSair() {
  const router = useRouter();
  const { sessao, carregando } = useSessao();

  if (carregando) return null;

  if (!sessao) {
    return (
      <Link href="/login" className="btn btn-primary btn-block">
        Entrar na minha conta
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="btn btn-ghost btn-block"
      onClick={() => {
        encerrarSessao();
        router.push("/");
      }}
    >
      Sair da conta
    </button>
  );
}
