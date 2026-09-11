"use client";

import { useState } from "react";
import { IconCheck } from "@/components/icons";

/**
 * As etapas do Plano de Ação.
 *
 * O estado é local e some ao recarregar — quando o back-end entrar, o que
 * muda é de onde vem `initialDone` e para onde vai o toggle; a marcação
 * otimista da UI continua igual.
 *
 * Cada etapa é um <button aria-pressed>, não um checkbox escondido: assim o
 * alvo de toque é a linha inteira e o leitor de tela anuncia o estado sem
 * precisar de label associado.
 */
export default function Checklist({
  steps,
  initialDone = [],
}: {
  steps: string[];
  /** Índices já concluídos no primeiro render. */
  initialDone?: number[];
}) {
  const [done, setDone] = useState<Set<number>>(() => new Set(initialDone));

  function toggle(index: number) {
    setDone((current) => {
      const next = new Set(current);
      if (!next.delete(index)) next.add(index);
      return next;
    });
  }

  return (
    <div className="checklist">
      {steps.map((step, index) => (
        <button
          key={step}
          type="button"
          className="check-row"
          aria-pressed={done.has(index)}
          onClick={() => toggle(index)}
        >
          <span className="check-box" aria-hidden="true">
            <IconCheck />
          </span>
          <span className="check-label">{step}</span>
        </button>
      ))}
    </div>
  );
}
