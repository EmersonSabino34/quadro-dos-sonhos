/**
 * Conjunto de ícones do design system.
 *
 * SVG inline em vez de glifos de texto (⌂ ▦ ◯): os glifos mudavam de
 * tamanho e peso entre Windows, iOS e Android, e não herdavam currentColor
 * de forma previsível. Aqui tudo é traço de 1.6 e herda a cor do pai.
 */

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function IconHome({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="20" height="20">
      <path d="M3.5 10.6 12 3.8l8.5 6.8" />
      <path d="M5.8 9.4V20h12.4V9.4" />
      <path d="M9.8 20v-5.2h4.4V20" />
    </svg>
  );
}

export function IconGrid({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="20" height="20">
      <rect x="3.5" y="3.5" width="7" height="7" rx="2.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2.2" />
    </svg>
  );
}

export function IconSparkle({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="20" height="20">
      <path d="M12 3.2 13.7 9 19.5 10.7 13.7 12.4 12 18.2 10.3 12.4 4.5 10.7 10.3 9Z" />
      <path d="M18.4 16.3l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7Z" />
    </svg>
  );
}

export function IconQuote({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="20" height="20">
      <path d="M9.6 6.4C6.9 7.5 5.2 9.9 5.2 12.8c0 2.4 1.4 4 3.4 4 1.8 0 3.1-1.2 3.1-3 0-1.7-1.2-2.9-2.8-2.9-.3 0-.6 0-.8.1.3-1.4 1.3-2.6 2.8-3.3Z" />
      <path d="M18.6 6.4C15.9 7.5 14.2 9.9 14.2 12.8c0 2.4 1.4 4 3.4 4 1.8 0 3.1-1.2 3.1-3 0-1.7-1.2-2.9-2.8-2.9-.3 0-.6 0-.8.1.3-1.4 1.3-2.6 2.8-3.3Z" />
    </svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="20" height="20">
      <circle cx="12" cy="8.4" r="3.9" />
      <path d="M4.8 20.2c.9-3.6 3.7-5.6 7.2-5.6s6.3 2 7.2 5.6" />
    </svg>
  );
}

export function IconSun({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.6v2.2M12 19.2v2.2M4.3 4.3l1.6 1.6M18.1 18.1l1.6 1.6M2.6 12h2.2M19.2 12h2.2M4.3 19.7l1.6-1.6M18.1 5.9l1.6-1.6" />
    </svg>
  );
}

export function IconMoon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20.4 14.4A8.6 8.6 0 0 1 9.6 3.6a8.7 8.7 0 1 0 10.8 10.8Z" />
    </svg>
  );
}
