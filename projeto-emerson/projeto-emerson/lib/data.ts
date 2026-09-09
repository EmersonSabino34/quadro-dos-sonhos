export type Category = { slug: string; title: string; icon: string; description: string; image: string };

const categoryData = [
  ["lugares", "Lugares que desejo conhecer", "✈️", "Viagens, destinos e experiências pelo mundo.", "1502602898657-3e91760cbb34"],
  ["carreira", "Trabalho e carreira", "💼", "Profissão, negócios, crescimento e conquistas.", "1497366754035-f200968a6e72"],
  ["familia", "Família", "👨‍👩‍👧", "Momentos, pessoas e sonhos em família.", "1511895426328-dc8714191300"],
  ["casa", "Casa e patrimônio", "🏡", "Casa própria, decoração, carros e patrimônio.", "1600585154340-be6161a56a0c"],
  ["financas", "Finanças", "💰", "Liberdade financeira, investimentos e prosperidade.", "1554224155-6726b3ff858f"],
  ["relacionamentos", "Relacionamentos", "❤️", "Amor, casamento e conexões especiais.", "1519741497674-611481863552"],
  ["saude", "Saúde e bem-estar", "🧘", "Saúde física, mental e qualidade de vida.", "1545389336-cf090694435e"],
  ["espiritualidade", "Religião / Espiritualidade", "🙏", "Fé, espiritualidade, propósito e paz.", "1507692049790-de58290a4334"],
  ["estudos", "Estudos", "🎓", "Cursos, formação, idiomas e conhecimento.", "1523240795612-9a054b0db644"],
  ["lazer", "Lazer e hobbies", "🎨", "Hobbies, diversão, criatividade e experiências.", "1513364776144-60967b0f800f"],
  ["outros", "Outros sonhos", "🌟", "Tudo aquilo que você deseja realizar.", "1516321318423-f06f85e504b3"],
] as const;

export const categories: Category[] = categoryData.map(([slug, title, icon, description, photo]) => ({ slug, title, icon, description, image: `https://images.unsplash.com/photo-${photo}?auto=format&fit=crop&w=900&q=85` }));
