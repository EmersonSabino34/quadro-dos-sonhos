mural-dos-sonhos/
├── app/
│   ├── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   │
│   ├── onboarding/
│   │   ├── page.tsx
│   │   ├── ia/
│   │   │   └── page.tsx
│   │   └── objetivos/
│   │       └── page.tsx
│   │
│   ├── home/
│   │   └── page.tsx
│   │
│   ├── categorias/
│   │   └── page.tsx
│   │
│   ├── categoria/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── adicionar/
│   │   └── page.tsx
│   │
│   ├── sonho/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── ia/
│   │   ├── page.tsx
│   │   ├── opcoes/
│   │   │   └── page.tsx
│   │   └── mural/
│   │       └── page.tsx
│   │
│   ├── frases/
│   │   └── page.tsx
│   │
│   ├── perfil/
│   │   └── page.tsx
│   │
│   ├── configuracoes/
│   │   └── page.tsx
│   │
│   ├── planos/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   └── assinatura/
│       └── page.tsx
│
├── components/
│   ├── BottomNav.tsx
│   ├── DreamCard.tsx
│   ├── CategoryCard.tsx
│   ├── SectionTitle.tsx
│   ├── ProgressBar.tsx
│   └── PhoneFrame.tsx
│
├── lib/
│   └── data.ts
│
└── public/
    └── images/

## Executar o projeto

O projeto Next.js está dentro da pasta `projeto-emerson`. O erro `ENOENT` acontecia
porque `npm run dev` era executado em `C:\dev\projeto-emerson`, onde não existia
`package.json`.

Agora os comandos funcionam diretamente nessa pasta externa:

```bash
npm run dev
```

Também é possível executar dentro da pasta do projeto:

```bash
cd projeto-emerson
npm run dev
```