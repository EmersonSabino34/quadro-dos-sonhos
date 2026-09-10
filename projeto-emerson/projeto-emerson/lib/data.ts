const UNSPLASH = "https://images.unsplash.com/photo-";
const CROP = "?auto=format&fit=crop&w=900&q=85";

export type Category = {
  slug: string;
  title: string;
  /** Rótulo curto para a trilha horizontal, onde não cabe o título inteiro. */
  short: string;
  icon: string;
  description: string;
  image: string;
};

const categoryData = [
  ["lugares", "Lugares que desejo conhecer", "Lugares", "✈️", "Viagens, destinos e experiências pelo mundo.", "1502602898657-3e91760cbb34"],
  ["carreira", "Trabalho e carreira", "Carreira", "💼", "Profissão, negócios, crescimento e conquistas.", "1497366754035-f200968a6e72"],
  ["familia", "Família", "Família", "👨‍👩‍👧", "Momentos, pessoas e sonhos em família.", "1511895426328-dc8714191300"],
  ["casa", "Casa e patrimônio", "Casa", "🏡", "Casa própria, decoração, carros e patrimônio.", "1600585154340-be6161a56a0c"],
  ["financas", "Finanças", "Finanças", "💰", "Liberdade financeira, investimentos e prosperidade.", "1554224155-6726b3ff858f"],
  ["relacionamentos", "Relacionamentos", "Amor", "❤️", "Amor, casamento e conexões especiais.", "1519741497674-611481863552"],
  ["saude", "Saúde e bem-estar", "Saúde", "🧘", "Saúde física, mental e qualidade de vida.", "1545389336-cf090694435e"],
  ["espiritualidade", "Religião / Espiritualidade", "Fé", "🙏", "Fé, espiritualidade, propósito e paz.", "1507692049790-de58290a4334"],
  ["estudos", "Estudos", "Estudos", "🎓", "Cursos, formação, idiomas e conhecimento.", "1523240795612-9a054b0db644"],
  ["lazer", "Lazer e hobbies", "Lazer", "🎨", "Hobbies, diversão, criatividade e experiências.", "1513364776144-60967b0f800f"],
  ["outros", "Outros sonhos", "Outros", "🌟", "Tudo aquilo que você deseja realizar.", "1516321318423-f06f85e504b3"],
] as const;

export const categories: Category[] = categoryData.map(
  ([slug, title, short, icon, description, photo]) => ({
    slug,
    title,
    short,
    icon,
    description,
    image: `${UNSPLASH}${photo}${CROP}`,
  }),
);

export type Dream = {
  id: string;
  title: string;
  category: string;
  /** 0 a 100. */
  progress: number;
  target: string;
  image: string;
};

const dreamData = [
  ["1", "Conhecer Paris", "Lugares", 35, "€ 3.000", "1502602898657-3e91760cbb34"],
  ["2", "Meu cantinho", "Casa e patrimônio", 20, "R$ 80.000", "1600585154340-be6161a56a0c"],
  ["3", "Mais tempo em família", "Família", 68, "2026", "1511895426328-dc8714191300"],
] as const;

export const dreams: Dream[] = dreamData.map(([id, title, category, progress, target, photo]) => ({
  id,
  title,
  category,
  progress,
  target,
  image: `${UNSPLASH}${photo}${CROP}`,
}));

/** Média de progresso dos sonhos, usada no resumo da home. */
export const overallProgress = Math.round(
  dreams.reduce((sum, dream) => sum + dream.progress, 0) / dreams.length,
);
