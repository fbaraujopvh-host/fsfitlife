export interface Product {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  howToUse: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  badge?: string;
  /**
   * Substitua pelo link de checkout do seu programa de afiliado
   * (Hotmart, Monetizze, Eduzz, Amazon Associates, etc.)
   */
  affiliateUrl: string;
  category: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "termogenico-thermo-fire",
    name: "Thermo Fire — Termogênico Avançado",
    tagline: "Acelere a queima de gordura",
    description:
      "Fórmula termogênica com cafeína, extrato de pimenta caiena e chá verde para acelerar o metabolismo e potencializar a queima de gordura durante o treino.",
    longDescription:
      "Thermo Fire é um termogênico de alta performance desenvolvido para quem busca acelerar o metabolismo e maximizar a queima de gordura ao longo do dia. Combina cafeína anidra, extrato de pimenta caiena (capsaicina) e catequinas do chá verde — uma sinergia estudada para elevar a termogênese corporal, aumentar a energia e reduzir a sensação de fadiga durante treinos intensos. Indicado para quem já pratica atividade física e busca um empurrão extra no processo de definição.",
    benefits: [
      "Acelera o metabolismo basal",
      "Aumenta a energia e o foco no treino",
      "Potencializa a queima de gordura localizada",
      "Fórmula 100% natural e vegana",
    ],
    howToUse:
      "Tomar 1 cápsula pela manhã e 1 cápsula 30 minutos antes do treino, com um copo de água. Não exceder 2 cápsulas por dia.",
    price: "R$ 89,90",
    originalPrice: "R$ 179,90",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    badge: "Mais Vendido",
    affiliateUrl: "https://exemplo-checkout.com/thermo-fire",
    category: "Termogênicos",
    rating: 4.9,
    reviews: 2847,
  },
  {
    id: 2,
    slug: "emagrecedor-slim-detox",
    name: "Slim Detox — Emagrecedor Natural",
    tagline: "Desintoxica e reduz o inchaço",
    description:
      "Blend de ingredientes naturais que ajuda a eliminar toxinas, reduzir a retenção de líquidos e diminuir o apetite de forma segura.",
    longDescription:
      "Slim Detox combina extratos vegetais como chá verde, hibisco, gengibre e cavalinha em uma fórmula pensada para apoiar a eliminação de toxinas e reduzir a retenção de líquidos, uma das principais causas do inchaço abdominal. Seus compostos termogênicos leves também ajudam a controlar o apetite entre as refeições, tornando mais fácil manter uma alimentação equilibrada. Ideal para incluir na rotina diária como parte de um programa de reeducação alimentar.",
    benefits: [
      "Reduz a retenção de líquidos",
      "Ajuda a controlar o apetite",
      "Auxilia na desintoxicação do organismo",
      "Sem glúten e sem lactose",
    ],
    howToUse:
      "Diluir 1 sachê em 200ml de água e consumir 1 a 2 vezes ao dia, preferencialmente antes das refeições principais.",
    price: "R$ 69,90",
    originalPrice: "R$ 139,90",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80",
    badge: "🔥 Em Alta",
    affiliateUrl: "https://exemplo-checkout.com/slim-detox",
    category: "Emagrecedores",
    rating: 4.8,
    reviews: 3654,
  },
  {
    id: 3,
    slug: "whey-protein-gold-isolate",
    name: "Whey Protein Gold Isolate",
    tagline: "Ganho de massa magra acelerado",
    description:
      "Whey protein isolado com 27g de proteína por dose, baixo teor de carboidratos e absorção rápida para recuperação muscular.",
    longDescription:
      "Desenvolvido para atletas e praticantes de musculação que buscam o máximo em qualidade proteica, o Whey Protein Gold Isolate entrega 27g de proteína por dose com perfil completo de aminoácidos essenciais, incluindo alta concentração de BCAAs. Sua filtragem por microfiltração garante baixíssimo teor de carboidratos e gorduras, proporcionando absorção rápida — ideal para o pós-treino, quando o corpo mais precisa de nutrientes para iniciar a recuperação muscular.",
    benefits: [
      "27g de proteína por dose",
      "Baixo teor de carboidratos e gorduras",
      "Rica em BCAAs e glutamina",
      "Disponível em 8 sabores",
    ],
    howToUse:
      "Misturar 1 scoop (30g) em 200ml de água ou leite, de preferência logo após o treino ou entre as refeições.",
    price: "R$ 149,90",
    originalPrice: "R$ 259,90",
    discount: "42% OFF",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80",
    affiliateUrl: "https://exemplo-checkout.com/whey-gold-isolate",
    category: "Proteínas",
    rating: 4.8,
    reviews: 6891,
  },
  {
    id: 4,
    slug: "colageno-hidrolisado-skin",
    name: "Colágeno Hidrolisado Skin+",
    tagline: "Pele, cabelo e unhas mais fortes",
    description:
      "Colágeno tipo 1 e 3 com vitamina C e ácido hialurônico, formulado para melhorar elasticidade da pele e fortalecer cabelos e unhas.",
    longDescription:
      "Colágeno Hidrolisado Skin+ combina colágeno tipo 1 e 3 com vitamina C — essencial para a síntese natural de colágeno no organismo — e ácido hialurônico, conhecido por sua capacidade de reter umidade na pele. A fórmula foi pensada para atuar de dentro para fora, ajudando a reduzir a flacidez, melhorar a elasticidade da pele e fortalecer cabelos e unhas em poucas semanas de uso contínuo.",
    benefits: [
      "Colágeno tipo 1 e 3 de alta absorção",
      "Enriquecido com vitamina C e ácido hialurônico",
      "Melhora elasticidade e firmeza da pele",
      "Sem glúten, sabor neutro",
    ],
    howToUse:
      "Misturar 1 dose (10g) em água, suco ou vitamina, 1 vez ao dia, preferencialmente em jejum.",
    price: "R$ 79,90",
    originalPrice: "R$ 159,90",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    badge: "Novo",
    affiliateUrl: "https://exemplo-checkout.com/colageno-skin",
    category: "Beleza & Pele",
    rating: 4.8,
    reviews: 3210,
  },
  {
    id: 5,
    slug: "multivitaminico-energy-complex",
    name: "Energy Complex — Multivitamínico",
    tagline: "Mais energia e imunidade no dia a dia",
    description:
      "Complexo com 12 vitaminas e 8 minerais essenciais para reforçar a imunidade, reduzir o cansaço e manter o foco mental.",
    longDescription:
      "Energy Complex reúne 12 vitaminas (incluindo A, C, D, E e todo o complexo B) e 8 minerais essenciais como zinco, magnésio e selênio em uma única cápsula diária. A fórmula foi desenvolvida para suprir lacunas nutricionais comuns da rotina moderna, ajudando a reduzir o cansaço físico e mental, fortalecer o sistema imunológico e manter o foco e a disposição ao longo do dia.",
    benefits: [
      "12 vitaminas + 8 minerais essenciais",
      "Reforça o sistema imunológico",
      "Reduz cansaço físico e mental",
      "1 cápsula por dia"
    ],
    howToUse:
      "Tomar 1 cápsula ao dia, junto com uma refeição, com auxílio de água.",
    price: "R$ 59,90",
    originalPrice: "R$ 99,90",
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80&sat=-50",
    affiliateUrl: "https://exemplo-checkout.com/energy-complex",
    category: "Vitaminas & Minerais",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 6,
    slug: "omega-3-ultra-concentrado",
    name: "Ômega 3 Ultra Concentrado",
    tagline: "Saúde cardiovascular e cerebral",
    description:
      "Óleo de peixe purificado com alta concentração de EPA e DHA, contribuindo para a saúde do coração, cérebro e articulações.",
    longDescription:
      "Ômega 3 Ultra Concentrado utiliza óleo de peixe de águas profundas, purificado e livre de metais pesados, com alta concentração de EPA e DHA por cápsula. Esses ácidos graxos essenciais são amplamente estudados por seu papel na manutenção da saúde cardiovascular, na função cognitiva e na redução de processos inflamatórios nas articulações — sendo um complemento valioso para quem busca mais qualidade de vida a longo prazo.",
    benefits: [
      "Alta concentração de EPA e DHA",
      "Contribui para a saúde do coração",
      "Apoia a função cognitiva e a memória",
      "Cápsulas sem gosto residual de peixe",
    ],
    howToUse:
      "Tomar 2 cápsulas ao dia, junto às refeições.",
    price: "R$ 64,90",
    originalPrice: "R$ 119,90",
    discount: "45% OFF",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f25?w=800&q=80",
    affiliateUrl: "https://exemplo-checkout.com/omega-3-ultra",
    category: "Vitaminas & Minerais",
    rating: 4.9,
    reviews: 2456,
  },
  {
    id: 7,
    slug: "pre-treino-explosive-pump",
    name: "Explosive Pump — Pré-Treino",
    tagline: "Mais força, foco e resistência",
    description:
      "Pré-treino com cafeína, beta-alanina e citrulina malato para treinos mais intensos, com mais energia e melhor recuperação.",
    longDescription:
      "Explosive Pump foi formulado para atletas que exigem o máximo do próprio desempenho. A combinação de cafeína anidra, beta-alanina e citrulina malato proporciona um aumento perceptível de energia, força e resistência muscular, retardando a fadiga e melhorando o bombeamento sanguíneo durante a série. Ideal para quem treina pesado e quer extrair o máximo de cada repetição.",
    benefits: [
      "Aumenta força e resistência muscular",
      "Melhora o foco e a energia no treino",
      "Potencializa o bombeamento muscular (pump)",
      "Sabores refrescantes",
    ],
    howToUse:
      "Misturar 1 scoop em 300ml de água e consumir 20 a 30 minutos antes do treino.",
    price: "R$ 94,90",
    originalPrice: "R$ 169,90",
    discount: "44% OFF",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    badge: "Premium",
    affiliateUrl: "https://exemplo-checkout.com/explosive-pump",
    category: "Pré-Treino",
    rating: 4.8,
    reviews: 4120,
  },
  {
    id: 8,
    slug: "cha-verde-fat-burn",
    name: "Chá Verde Fat Burn — Cápsulas",
    tagline: "Antioxidante e acelerador metabólico",
    description:
      "Extrato concentrado de chá verde rico em catequinas, com ação antioxidante e auxílio na aceleração do metabolismo.",
    longDescription:
      "Chá Verde Fat Burn entrega o extrato padronizado de chá verde (Camellia sinensis) em alta concentração de catequinas, especialmente EGCG, um dos antioxidantes mais estudados quando o assunto é metabolismo e controle de peso. Auxilia na aceleração discreta do gasto energético em repouso e oferece proteção celular contra radicais livres, sendo uma opção prática para somar à rotina de quem busca um estilo de vida mais saudável.",
    benefits: [
      "Rico em catequinas e EGCG",
      "Ação antioxidante",
      "Auxilia na aceleração do metabolismo",
      "Cápsulas práticas, sem preparo",
    ],
    howToUse:
      "Tomar 1 cápsula, 2 vezes ao dia, antes das principais refeições.",
    price: "R$ 49,90",
    originalPrice: "R$ 89,90",
    discount: "44% OFF",
    image: "https://images.unsplash.com/photo-1556228720-da4e25e3a7c6?w=800&q=80",
    affiliateUrl: "https://exemplo-checkout.com/cha-verde-fatburn",
    category: "Emagrecedores",
    rating: 4.7,
    reviews: 2980,
  },
];
