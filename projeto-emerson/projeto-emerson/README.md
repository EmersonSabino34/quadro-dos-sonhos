# Mural dos Sonhos

App Next.js 16 (App Router) para visualizar sonhos, organizá-los por categoria e
gerar murais e frases com IA.

```bash
npm run dev     # sobe a API mock e depois o app
npm run build
npm run lint
```

`npm run dev` orquestra dois processos: o **json-server sobe primeiro** (porta
3333) e o Next só inicia depois que a API responde, via `wait-on`. App em
`http://localhost:3000`, API em `http://localhost:3333`.

O plano de trabalho e o status de cada tela ficam em
[10-setembro-plano-inicio.md](10-setembro-plano-inicio.md).

---

## Design system

O visual não vive espalhado pelos componentes: tudo sai de uma camada de tokens.
Trocar uma variável em `app/styles/tokens.css` muda o app inteiro, nos dois temas.

### Camadas de CSS

`app/globals.css` importa as camadas nesta ordem — da mais genérica para a mais
específica, para que a cascata funcione a favor e não contra:

| Arquivo | Responsabilidade |
| --- | --- |
| `styles/tokens.css` | Cor, tipografia, espaço, raio, sombra, easing. Fonte única de verdade. |
| `styles/base.css` | Reset, canvas com aurora, tipografia padrão, foco, scrollbar. |
| `styles/motion.css` | Keyframes, cascata de entrada, scroll reveal, `prefers-reduced-motion`. |
| `styles/layout.css` | Shell do app, navegação adaptativa, contêiner de página. |
| `styles/components.css` | Botões, cartões, chips, hero, perfil — o catálogo visual. |

### Tema claro e escuro

Light é a base em `:root`. Dark é aplicado em dois lugares, com os mesmos valores:

1. `@media (prefers-color-scheme: dark)`, guardado por `:not([data-theme="light"])`
   para que a escolha manual sempre vença o sistema.
2. `:root[data-theme="dark"]`, que é a escolha explícita do usuário.

Nenhuma cor é definida apenas dentro de uma media query, então o toggle funciona
nas duas direções. A preferência persiste em `localStorage` (`mds-theme`) e um
script inline no `<head>` a aplica antes do primeiro paint — sem flash de tela
branca em quem usa o tema escuro. Quem nunca tocou no toggle continua seguindo o
sistema operacional.

A troca é animada com a View Transitions API: o tema novo é revelado por um
círculo que cresce a partir do próprio botão clicado.

### Responsividade

Três regimes de layout, uma única árvore de DOM:

| Largura | Layout |
| --- | --- |
| `< 1024px` | Barra de navegação inferior fixa, conteúdo em coluna única. |
| `>= 1024px` | A navegação vira trilha lateral fixa com marca e rótulos. |
| `>= 1320px` | Entra uma terceira coluna (`.page-split` + `.page-aside`) com resumo e frases. |

O hero passa a duas colunas em `>= 860px`, a grade de sonhos vai de 2 para 3
colunas em `>= 700px`, e a lista de categorias para 2 colunas em `>= 760px`.
Tipografia e gutters usam `clamp()`, então escalam entre os breakpoints em vez de
pular.

### Movimento

- Entrada em cascata (`.stagger`) no cabeçalho e no hero de cada página.
- Scroll reveal via `IntersectionObserver` (`<Reveal>`), que solta o alvo depois
  de revelar para não re-animar.
- Barras de progresso preenchem do zero com uma varredura de luz.
- Hover só dentro de `@media (hover: hover)`, para o toque não herdar estados
  presos; press usa `transform`, que não causa reflow.
- Todo o movimento é desligado em `prefers-reduced-motion: reduce`, mantendo o
  conteúdo visível.

### Acessibilidade

Os 13 pares de cor texto/fundo dos dois temas passam WCAG AA (4.5:1). Estado
ativo de navegação usa `aria-current="page"`, os chips usam `aria-pressed`, as
barras de progresso são `role="progressbar"` com valor, e o foco é visível via
token `--ring`.

---

## Estrutura

```
app/
├── layout.tsx              shell, fontes, script de tema, viewport
├── globals.css             importa as camadas de estilo
├── styles/                 o design system (tabela acima)
├── page.tsx                home
├── categorias/             lista de categorias
├── categoria/[slug]/       detalhe da categoria
├── sonho/[id]/             detalhe do sonho
├── ia/                     IA designer
├── frases/                 editor de frases
└── perfil/                 perfil e ajustes

components/
├── NavRail.tsx             navegação adaptativa (barra / trilha)
├── ThemeToggle.tsx         troca de tema com View Transitions
├── Reveal.tsx              scroll reveal
├── PageHeader.tsx          cabeçalho de página
├── SectionTitle.tsx        cabeçalho de seção
├── DreamCard.tsx           cartão de sonho
├── CategoryCard.tsx        pílula e linha de categoria
├── ProgressBar.tsx         barra de progresso acessível
└── icons.tsx               ícones SVG de traço

lib/
└── data.ts                 categorias, sonhos e progresso médio
```

As fontes são **Fraunces** (display) e **Inter** (interface), auto-hospedadas via
`next/font` — sem requisição ao Google e sem salto de layout.

## Dados

Duas fontes, por enquanto:

- **`db.json` + json-server** (porta 3333) — `usuarios`, `desejos`, `categorias`
  e `frases`. Cadastro e login já usam. Todo acesso passa por `lib/api.ts`.
- **`lib/data.ts`** — mock estático em código, ainda usado pelas telas internas.
  A migração para a API é o item 9 do plano.

Banco de dados real e autenticação de verdade são o item 10. Enquanto isso a
senha fica em texto puro e a sessão em `localStorage` — protótipo, não produção.
As imagens vêm do Unsplash por URL.
