"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Ambience from "@/components/Ambience";
import StepDots from "@/components/StepDots";
import { IconCheck } from "@/components/icons";
import { formatarEuro, planos } from "@/lib/planos";

type Ciclo = "mensal" | "anual";

/**
 * Escolher plano (tela 6).
 *
 * O seletor Mensal/Anual troca o preço dos dois cartões ao mesmo tempo, então
 * a comparação continua honesta: nunca aparece um plano no mensal ao lado de
 * outro no anual.
 */
export default function PlanosPage() {
  const router = useRouter();
  const [ciclo, setCiclo] = useState<Ciclo>("mensal");
  const [escolhido, setEscolhido] = useState<string>("pro");

  return (
    <main className="onboarding" data-ambience="mountains">
      <Ambience />

      <div className="onboarding-body stagger">
        <StepDots total={5} current={4} />

        <h1 className="onboarding-title">Escolha o seu plano</h1>

        <div className="segmented" role="group" aria-label="Ciclo de cobrança">
          <button
            type="button"
            className="segmented-option"
            aria-pressed={ciclo === "mensal"}
            onClick={() => setCiclo("mensal")}
          >
            Mensal
          </button>
          <button
            type="button"
            className="segmented-option"
            aria-pressed={ciclo === "anual"}
            onClick={() => setCiclo("anual")}
          >
            Anual (com desconto)
          </button>
        </div>

        <div className="plan-grid" role="radiogroup" aria-label="Plano">
          {planos.map((plano) => {
            const preco = ciclo === "mensal" ? plano.mensal : plano.anual;
            return (
              <button
                type="button"
                role="radio"
                key={plano.id}
                className={plano.destaque ? "plan-card plan-card-featured" : "plan-card"}
                aria-checked={plano.id === escolhido}
                onClick={() => setEscolhido(plano.id)}
              >
                {plano.destaque ? <span className="plan-badge">Mais popular</span> : null}

                <strong className="plan-name">{plano.nome}</strong>

                <span className="plan-price">
                  {formatarEuro(preco)}
                  <small>/mês</small>
                </span>

                {ciclo === "anual" ? (
                  <span className="plan-billing">cobrado anualmente</span>
                ) : null}

                <span className="plan-summary">{plano.resumo}</span>

                <ul className="plan-features">
                  {plano.recursos.map((recurso) => (
                    <li key={recurso}>
                      <span aria-hidden="true">
                        <IconCheck />
                      </span>
                      {recurso}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </div>

      <div className="onboarding-foot">
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => router.push(`/pagamento?plano=${escolhido}&ciclo=${ciclo}`)}
        >
          Escolher {planos.find((plano) => plano.id === escolhido)?.nome}
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </main>
  );
}
