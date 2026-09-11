## 1 - SaaS

### 1.2 - Web & WPA & Responsivo
#### 1.2 - Nextjs React
#### 1.2 - Python

### 1.3 - Backend
#### 1.3 - Python Flask
#### 1.3 - NodeJS
#### 1.3 - Python Django
#### 1.3 - Java
#### 1.3 - PHP
#### 1.3 - PHP Laravel
#### 1.3 - Go
#### 1.4 - CShart
#### 1.4 - .Net

### 2. Projeto 1

#### 2.2 Frontend
#### 2.2 Nextjs

#### 2.3 Backend
#### 2.2 NodeJS


### 3. Funções
#### 3.1 - Home site Desejos
#### 3.1 - Login
#### 3.1 - Cadastro
#### 3.1 - Dashboard

izabelle-sabino/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Categories.tsx
│   ├── FeaturedCourses.tsx
│   ├── Method.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
│
├── public/
│   └── images/
│       ├── izabelle.jpg
│       ├── bolo.jpg
│       ├── doces.jpg
│       └── salgados.jpg
│
├── package.json
└── tailwind.config.ts
HEADER
   ↓
HERO
   ↓
IDENTIFICAÇÃO
   ↓
BOLOS | DOCES | SALGADOS
   ↓
CURSOS EM DESTAQUE
   ↓
MÉTODO IZABELLE
   ↓
SOBRE IZABELLE
   ↓
DEPOIMENTOS
   ↓
FAQ
   ↓
CTA DE VENDA
   ↓
FOOTER

app/
├── page.tsx                    → Home
├── cursos/
│   ├── page.tsx                → Todos os cursos
│   ├── bolos/
│   │   └── page.tsx            → Cursos de bolos
│   ├── doces/
│   │   └── page.tsx            → Cursos de doces
│   ├── salgados/
│   │   └── page.tsx            → Cursos de salgados
│   └── [slug]/
│       └── page.tsx            → Página individual do curso
├── receitas/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── sobre/
│   └── page.tsx
├── depoimentos/
│   └── page.tsx
└── contato/
    └── page.tsx