"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Ambience from "@/components/Ambience";
import StepDots from "@/components/StepDots";
import { IconCheck } from "@/components/icons";

/**
 * Escolher idioma (tela 3).
 *
 * A escolha ainda não troca os textos do app — o projeto não tem camada de
 * i18n. Ela é guardada para quando tiver, e a tela já existe no fluxo para o
 * desenho não mudar depois.
 */
const idiomas = [
  { id: "pt-BR", bandeira: "🇧🇷", label: "Português" },
  { id: "en", bandeira: "🇬🇧", label: "English" },
];

export default function IdiomaPage() {
  const router = useRouter();
  const [escolhido, setEscolhido] = useState("pt-BR");

  return (
    <main className="onboarding" data-ambience="sunrise">
      <Ambience />

      <div className="onboarding-body stagger">
        <StepDots total={5} current={1} />

        <h1 className="onboarding-title">
          Choose
          <br />
          your language
        </h1>

        <div className="choice-list" role="radiogroup" aria-label="Idioma">
          {idiomas.map((idioma) => (
            <button
              type="button"
              role="radio"
              key={idioma.id}
              className="choice-row lang-row"
              aria-checked={idioma.id === escolhido}
              onClick={() => setEscolhido(idioma.id)}
            >
              <span className="lang-flag" aria-hidden="true">
                {idioma.bandeira}
              </span>
              <span className="choice-label">{idioma.label}</span>
              {idioma.id === escolhido ? (
                <span className="lang-check" aria-hidden="true">
                  <IconCheck />
                </span>
              ) : null}
            </button>
          ))}
        </div>

        <p className="onboarding-signature">A better you · A brighter world</p>
      </div>

      <div className="onboarding-foot">
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => router.push("/cadastro")}
        >
          Continuar
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </main>
  );
}
