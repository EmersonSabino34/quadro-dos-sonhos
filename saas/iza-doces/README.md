# ✨ Izabelle Sabino — Receitas & Cursos

<div align="center">

**Uma experiência digital para transformar paixão por receitas em aprendizado, confiança e resultados.**

<br />

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge\&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss)

</div>

---

## 🌸 Sobre o projeto

O **Izabelle Sabino — Receitas & Cursos** é um projeto de site institucional e comercial desenvolvido para apresentar a marca, divulgar cursos e futuramente realizar a venda de conteúdos relacionados à culinária.

A proposta é criar uma experiência visual elegante, acolhedora e moderna, transmitindo a sensação de uma marca premium sem perder a proximidade com o público.

O projeto foi pensado para atender pessoas interessadas em aprender:

* 🍰 Bolos
* 🍬 Doces
* 🥐 Salgados
* 📚 Técnicas culinárias
* 💰 Preparações para venda
* 👩‍🍳 Desenvolvimento de habilidades na cozinha

---

## 🎯 Objetivo

O principal objetivo do projeto é transformar visitantes em alunos.

Para isso, a página utiliza uma estrutura de **landing page orientada à conversão**, combinando:

> **Apresentação → Interesse → Autoridade → Prova social → Oferta → Conversão**

A comunicação foi construída para responder às principais dúvidas do visitante e conduzi-lo naturalmente até os cursos.

---

# 🖥️ Estrutura atual

A Home Page está organizada nas seguintes seções:

```text
┌─────────────────────────────────────┐
│              HEADER                 │
├─────────────────────────────────────┤
│               HERO                  │
│       Proposta + CTA principal      │
├─────────────────────────────────────┤
│             CATEGORIAS              │
│       Bolos • Doces • Salgados      │
├─────────────────────────────────────┤
│               CURSOS                │
│        Cards dos cursos             │
├─────────────────────────────────────┤
│               MÉTODO                │
│       Aprenda • Pratique • Crie     │
├─────────────────────────────────────┤
│                SOBRE                │
│          História da Izabelle       │
├─────────────────────────────────────┤
│            DEPOIMENTOS              │
│              Social Proof           │
├─────────────────────────────────────┤
│                FAQ                  │
│         Perguntas frequentes        │
├─────────────────────────────────────┤
│            CTA FINAL                │
│        Convite para começar        │
├─────────────────────────────────────┤
│              FOOTER                 │
└─────────────────────────────────────┘
```

---

# ✨ Identidade visual

A identidade visual foi pensada para transmitir:

* Elegância
* Feminilidade
* Acolhimento
* Gastronomia artesanal
* Sofisticação
* Proximidade
* Confiança

### 🎨 Paleta

| Cor       | Uso                  |
| --------- | -------------------- |
| `#FFFaf6` | Fundo principal      |
| `#F7E8DF` | Fundos secundários   |
| `#9C4F61` | Cor principal / CTAs |
| `#713342` | Títulos e contraste  |
| `#C99B5B` | Detalhes e destaque  |
| `#2D2525` | Texto principal      |
| `#625858` | Texto secundário     |

A combinação de tons rosados, creme e dourado cria uma estética delicada e premium.

---

# 🧱 Stack utilizada

## Next.js

Framework principal utilizado para construção da aplicação.

```text
Next.js 15
```

Benefícios:

* Renderização otimizada
* SEO
* Roteamento baseado em arquivos
* Excelente performance
* Estrutura escalável

---

## React

Biblioteca utilizada para construção da interface.

```text
React 19
```

A interface é dividida em componentes independentes para facilitar manutenção e evolução.

---

## TypeScript

O projeto utiliza TypeScript para melhorar:

* Segurança do código
* Autocomplete
* Manutenção
* Organização
* Escalabilidade

---

## Tailwind CSS

O projeto utiliza Tailwind CSS 4 juntamente com CSS customizado para construção da identidade visual.

---

# 📁 Arquitetura

```text
izabelle-sabino/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Categories.tsx
│   ├── Courses.tsx
│   ├── Method.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
│
├── public/
│   └── images/
│
├── package.json
├── postcss.config.mjs
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

# 🧩 Componentes

Cada parte importante da página foi isolada em um componente.

### `Header.tsx`

Responsável pela navegação principal.

Inclui:

* Logo
* Menu
* Links internos
* CTA
* Menu mobile

---

### `Hero.tsx`

É a primeira impressão do visitante.

Apresenta:

**Headline**

> Transforme sua paixão por receitas em resultados.

**Descrição**

> Aprenda a preparar bolos, doces e salgados deliciosos, com técnicas práticas e aulas passo a passo.

**CTA principal**

> QUERO APRENDER COM A IZABELLE

---

### `Categories.tsx`

Apresenta as três principais áreas de conhecimento:

```text
🍰 BOLOS
🍬 DOCES
🥐 SALGADOS
```

O objetivo é fazer o visitante identificar rapidamente o conteúdo que deseja aprender.

---

### `Courses.tsx`

Área comercial da Home.

Cada curso possui:

* Categoria
* Nome
* Descrição
* Imagem
* CTA

Exemplo:

```text
BOLOS

Bolos Perfeitos

Aprenda massas, recheios, montagem,
cobertura e técnicas para criar
bolos incríveis.

[ CONHECER CURSO ]
```

---

### `Method.tsx`

Apresenta o método de ensino:

```text
01 — APRENDA

02 — PRATIQUE

03 — CRIE
```

Essa seção ajuda a diferenciar a proposta de simplesmente entregar receitas.

---

### `About.tsx`

Área destinada à construção de autoridade e conexão com a marca.

A seção apresenta a Izabelle e explica:

* Quem ela é
* Sua visão
* Seu propósito
* Por que criou os cursos

---

### `Testimonials.tsx`

Área de prova social.

Futuramente deverá receber depoimentos reais de alunos.

> ⚠️ Os depoimentos atualmente presentes no código são placeholders e devem ser substituídos por depoimentos reais antes da publicação.

---

### `FAQ.tsx`

Responde às principais objeções e dúvidas.

Exemplos:

* O curso é online?
* Preciso ter experiência?
* Posso assistir pelo celular?
* Quanto tempo tenho de acesso?
* Recebo certificado?
* Como comprar?

---

### `FinalCTA.tsx`

Última oportunidade de conversão da página.

Mensagem:

> Sua próxima receita pode ser o começo de algo novo.

CTA:

```text
QUERO COMEÇAR AGORA
```

---

### `Footer.tsx`

Contém:

* Logo
* Descrição
* Navegação
* Redes sociais
* Contato
* Copyright

---

# 🚀 Instalação

Clone o projeto:

```bash
git clone SEU_REPOSITORIO
```

Entre na pasta:

```bash
cd izabelle-sabino
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

---

# 🛠️ Scripts

| Comando         | Função                               |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria a versão de produção            |
| `npm run start` | Executa a versão de produção         |
| `npm run lint`  | Verifica problemas no código         |

---

# 📱 Responsividade

O projeto foi desenvolvido pensando em diferentes tamanhos de tela.

### Desktop

```text
┌────────────────────────────────────────────┐
│ Logo       Menu       CTA                  │
├────────────────────────────────────────────┤
│                                            │
│  Headline                  Foto Izabelle   │
│  Texto                                     │
│  CTA                                       │
│                                            │
└────────────────────────────────────────────┘
```

### Mobile

```text
┌──────────────────────┐
│ Logo             ☰   │
├──────────────────────┤
│                      │
│      Foto            │
│                      │
│    Headline          │
│                      │
│       CTA            │
│                      │
└──────────────────────┘
```

---

# 🖼️ Imagens

As imagens deverão ficar dentro de:

```text
public/images/
```

Estrutura recomendada:

```text
public/
└── images/
    ├── izabelle.jpg
    ├── bolo.jpg
    ├── doces.jpg
    ├── salgados.jpg
    ├── curso-bolos.jpg
    ├── curso-doces.jpg
    └── curso-salgados.jpg
```

### Recomendações

Para manter a qualidade visual:

* Fotografias profissionais
* Boa iluminação
* Fundo limpo
* Alta resolução
* Fotos reais dos produtos
* Fotos reais da Izabelle

A fotografia terá papel importante na percepção de valor da marca.

---

# 💰 Estratégia comercial

A Home foi estruturada para funcionar como uma porta de entrada para o ecossistema de produtos da Izabelle.

A evolução planejada é:

```text
VISITANTE
   ↓
HOME
   ↓
CATEGORIA
   ↓
CURSO
   ↓
PÁGINA DE VENDAS
   ↓
CHECKOUT
   ↓
ALUNO
```

---

# 🛒 Próxima estrutura de páginas

O projeto poderá evoluir para:

```text
/
│
├── /cursos
│
├── /cursos/bolos
│
├── /cursos/doces
│
├── /cursos/salgados
│
├── /cursos/bolos-perfeitos
│
├── /cursos/doces-irresistiveis
│
├── /cursos/salgados-de-sucesso
│
├── /sobre
│
├── /receitas
│
├── /receitas/[slug]
│
├── /contato
│
├── /login
│
└── /minha-conta
```

---

# 🔮 Roadmap

## Fase 01 — Landing Page

* [x] Header
* [x] Hero
* [x] Categorias
* [x] Cursos
* [x] Método
* [x] Sobre
* [x] Depoimentos
* [x] FAQ
* [x] CTA final
* [x] Footer
* [x] Responsividade

---

## Fase 02 — Catálogo

* [ ] Página de cursos
* [ ] Página individual de cada curso
* [ ] Filtros por categoria
* [ ] Cards comerciais
* [ ] Preços
* [ ] Ofertas
* [ ] Bônus
* [ ] FAQ individual

---

## Fase 03 — Conversão

* [ ] Integração com checkout
* [ ] WhatsApp
* [ ] Pixel / Analytics
* [ ] Eventos de conversão
* [ ] Página de obrigado
* [ ] Recuperação de vendas
* [ ] Cupons

---

## Fase 04 — Área do aluno

```text
/login
   ↓
/minha-conta
   ↓
/meus-cursos
   ↓
/curso/[id]
   ↓
/aula/[id]
```

Possíveis funcionalidades:

* Login
* Cadastro
* Dashboard
* Meus cursos
* Aulas
* Progresso
* Materiais
* Receitas
* Certificados

---

# 📈 SEO

A aplicação já possui uma estrutura inicial de metadata.

Exemplo:

```tsx
export const metadata = {
  title: "Izabelle Sabino | Cursos de Bolos, Doces e Salgados",
  description:
    "Aprenda a preparar bolos, doces e salgados incríveis com Izabelle Sabino.",
};
```

Futuramente recomenda-se implementar:

* Open Graph
* Twitter Cards
* Sitemap
* Robots.txt
* Schema.org
* Dados estruturados de cursos
* SEO individual por curso
* SEO para receitas
* URLs amigáveis

---

# ⚡ Performance

O projeto foi estruturado pensando em performance desde o início.

Boas práticas recomendadas:

* Utilizar `next/image`
* Otimizar imagens
* Utilizar WebP/AVIF
* Evitar JavaScript desnecessário
* Carregar fontes adequadamente
* Utilizar componentes reutilizáveis
* Manter páginas leves

---

# 🔐 Segurança

Quando o projeto passar a trabalhar com usuários e pagamentos, deverão ser adicionadas medidas específicas para:

* Autenticação
* Autorização
* Proteção de rotas
* Dados dos usuários
* Webhooks
* Checkout
* Controle de acesso aos cursos

**Nunca armazenar informações sensíveis diretamente no frontend.**

---

# 🧠 Princípios do projeto

O desenvolvimento deve seguir alguns princípios:

### 01 — Clareza

O visitante deve entender rapidamente:

> Quem é a Izabelle?

> O que ela ensina?

> Para quem é?

> Como posso aprender?

---

### 02 — Conversão

Todo elemento importante deve ter uma função clara.

Não basta ser bonito.

O design precisa ajudar o usuário a avançar.

---

### 03 — Confiança

A marca deve utilizar:

* Fotos reais
* Depoimentos reais
* Informações transparentes
* Resultados verdadeiros
* Comunicação humana

---

### 04 — Escalabilidade

O projeto deve permitir adicionar novos cursos sem precisar reconstruir toda a aplicação.

---

# 🎨 Direção de design

A estética recomendada para a marca é:

```text
Elegante
    +
Artesanal
    +
Acolhedora
    +
Feminina
    +
Premium
```

Evitar:

* Excesso de cores
* Gradientes exagerados
* Muitos elementos simultâneos
* Tipografia difícil de ler
* Animações excessivas
* Visual genérico de plataforma de cursos

---

# 📌 Conteúdo que ainda precisa ser substituído

Antes do lançamento, os seguintes conteúdos devem ser personalizados:

* [ ] Foto oficial da Izabelle
* [ ] Fotos reais dos bolos
* [ ] Fotos reais dos doces
* [ ] Fotos reais dos salgados
* [ ] Nome definitivo dos cursos
* [ ] Preços
* [ ] Condições de pagamento
* [ ] Benefícios reais
* [ ] Bônus
* [ ] Garantia
* [ ] Depoimentos reais
* [ ] Instagram oficial
* [ ] WhatsApp
* [ ] E-mail
* [ ] Informações sobre certificado
* [ ] Política de privacidade
* [ ] Termos de uso

---

# 🤝 Contribuição

Para contribuir:

```bash
git checkout -b feature/minha-feature
```

Faça suas alterações e depois:

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
git push origin feature/minha-feature
```

---

# 📄 Licença

Este projeto é propriedade de **Izabelle Sabino**.

O código, identidade visual, textos, imagens e materiais relacionados ao projeto não devem ser reutilizados ou distribuídos sem autorização.

---

<div align="center">

### 🍰 Feito para transformar receitas em experiências.

**Izabelle Sabino — Receitas & Cursos**

</div>
