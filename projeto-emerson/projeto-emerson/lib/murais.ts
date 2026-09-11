import { photoUrl } from "@/lib/data";

/**
 * O Mural VYRA — telas 24 a 27 das referências.
 *
 * Um mural é uma seleção de 10 a 20 fotos organizadas por um layout de
 * colagem. O layout não guarda coordenadas em pixel: guarda quantas colunas a
 * grade tem e quantas células cada foto ocupa. Assim a mesma colagem serve ao
 * cartão de 160px da lista, ao editor em tela cheia e ao papel de parede
 * 9:16 — muda só o tamanho da grade, nunca a composição.
 */

/** Banco de fotos do protótipo. Vira upload do usuário quando a API entrar. */
export const photoBank = [
  photoUrl("1506905925346-21bda4d32df4"), // montanha ao amanhecer
  photoUrl("1502602898657-3e91760cbb34"), // Paris
  photoUrl("1493976040374-85c8e12f0c0e"), // Japão
  photoUrl("1496442226666-8d4d0e62e6e9"), // Nova York
  photoUrl("1570077188670-e3a8d69ac5ff"), // Santorini
  photoUrl("1519681393784-d120267933ba"), // montanhas nevadas
  photoUrl("1464822759023-fed622ff2c3b"), // pico ao sol
  photoUrl("1483347756197-71ef80e95f73"), // aurora
  photoUrl("1544367567-0f2fcb009e0b"), // ioga
  photoUrl("1509440159596-0249088772ff"), // confeitaria
  photoUrl("1497366754035-f200968a6e72"), // escritório
  photoUrl("1511895426328-dc8714191300"), // família
  photoUrl("1600585154340-be6161a56a0c"), // casa
  photoUrl("1554224155-6726b3ff858f"), // finanças
  photoUrl("1507692049790-de58290a4334"), // fé
  photoUrl("1523240795612-9a054b0db644"), // estudos
  photoUrl("1513364776144-60967b0f800f"), // lazer
  photoUrl("1516321318423-f06f85e504b3"), // celebração
  photoUrl("1470071459604-3b5ec3a7fe05"), // névoa
  photoUrl("1499209974431-9dddcece7f88"), // horizonte
];

/**
 * Um passo do layout: quantas colunas e quantas linhas aquela foto ocupa.
 * `[2, 2]` é a foto grande de destaque; `[1, 1]` é uma célula comum.
 */
export type Span = [columns: number, rows: number];

export type MuralLayout = {
  id: string;
  label: string;
  /** Quantas fotos o layout usa. */
  count: number;
  /** Colunas da grade. */
  columns: number;
  /** Um span por foto, na ordem. */
  spans: Span[];
  /** O que este layout faz pela composição, em uma linha. */
  note: string;
};

/** Repete [1,1] n vezes — a base de todo layout. */
function cells(n: number): Span[] {
  return Array.from({ length: n }, () => [1, 1] as Span);
}

/**
 * Os cinco layouts pedidos no briefing. Cada um resolve a colagem de um jeito
 * diferente: um destaque só, dois destaques, faixas largas, mosaico uniforme
 * e o formato de revista, mais denso.
 */
export const layouts: MuralLayout[] = [
  {
    id: "destaque",
    label: "Destaque",
    count: 10,
    columns: 3,
    // 3x2 + 9 celulas = area 15 = 5 linhas cheias de 3 colunas.
    spans: [[3, 2], ...cells(9)],
    note: "Uma foto grande comanda a composição.",
  },
  {
    id: "equilibrio",
    label: "Equilíbrio",
    count: 12,
    columns: 4,
    // 4 + 2 + 10 = area 16 = 4 linhas cheias de 4 colunas.
    spans: [[2, 2], [2, 1], ...cells(10)],
    note: "Um destaque e uma faixa, o resto em grade.",
  },
  {
    id: "faixas",
    label: "Faixas",
    count: 15,
    columns: 4,
    // 4 + 2 + 2 + 12 = area 20 = 5 linhas cheias de 4 colunas.
    spans: [[4, 1], [2, 1], [2, 1], ...cells(12)],
    note: "Faixas largas atravessando a grade.",
  },
  {
    id: "mosaico",
    label: "Mosaico",
    count: 16,
    columns: 4,
    // 16 celulas = 4 linhas cheias.
    spans: cells(16),
    note: "Todas as fotos com o mesmo peso.",
  },
  {
    id: "revista",
    label: "Revista",
    count: 20,
    columns: 5,
    // 4 + 3 + 18 = area 25 = 5 linhas cheias de 5 colunas.
    spans: [[2, 2], [3, 1], ...cells(18)],
    note: "Denso, com um bloco de respiro no topo.",
  },
];

/**
 * A área total de um layout, em células.
 *
 * Ela PRECISA ser múltiplo exato de `columns`: quando não é, sobra uma célula
 * vazia no canto da colagem, porque o `grid-auto-flow: dense` fecha buracos no
 * meio mas não inventa foto para completar a última linha.
 */
export function layoutArea(layout: MuralLayout) {
  return layout.spans.reduce((total, [c, r]) => total + c * r, 0);
}

export function layoutById(id: string) {
  return layouts.find((layout) => layout.id === id);
}

export type Mural = {
  id: string;
  title: string;
  subtitle: string;
  layoutId: string;
  /** Índices no photoBank, na ordem em que entram no layout. */
  photos: number[];
};

/** Os murais já salvos (tela 24). */
export const murais: Mural[] = [
  {
    id: "1",
    title: "Minha Melhor Versão",
    subtitle: "15 fotos · 100% você",
    layoutId: "faixas",
    photos: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  },
  {
    id: "2",
    title: "Meus Lugares",
    subtitle: "10 fotos · viagens",
    layoutId: "destaque",
    photos: [1, 2, 3, 4, 5, 6, 19, 18, 0, 7],
  },
];

export function muralById(id: string) {
  return murais.find((mural) => mural.id === id);
}

/** As fotos de um mural, já resolvidas em URLs. */
export function muralPhotos(mural: Mural) {
  return mural.photos.map((index) => photoBank[index % photoBank.length]);
}
