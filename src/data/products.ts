export interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  badge?: string;
  affiliateUrl: string;
  category: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Suplemento Emagrecedor Premium",
    tagline: "O emagrecedor nº 1 do Brasil",
    description: "Fórmula exclusiva com ingredientes naturais que aceleram o metabolismo, reduzem o apetite e promovem a queima de gordura de forma segura e eficiente.",
    benefits: ["Acelera o metabolismo", "Reduz o apetite", "Queima gordura localizada", "100% natural"],
    price: "R$ 97,00",
    originalPrice: "R$ 197,00",
    discount: "51% OFF",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    badge: "Mais Vendido",
    affiliateUrl: "#comprar-produto-1",
    category: "Saúde & Bem-estar",
    rating: 4.9,
    reviews: 2847,
  },
  {
    id: 2,
    name: "Curso de Marketing Digital",
    tagline: "Do zero ao primeiro salário online",
    description: "Aprenda a ganhar dinheiro na internet com um método comprovado por mais de 50 mil alunos. Conteúdo completo, atualizado e com suporte vitalício.",
    benefits: ["Acesso vitalício", "+200 videoaulas", "Certificado reconhecido", "Suporte exclusivo"],
    price: "R$ 197,00",
    originalPrice: "R$ 497,00",
    discount: "60% OFF",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    badge: "🔥 Em Alta",
    affiliateUrl: "#comprar-produto-2",
    category: "Educação",
    rating: 4.8,
    reviews: 5120,
  },
  {
    id: 3,
    name: "Kit Skincare Completo",
    tagline: "Pele radiante em 30 dias",
    description: "Kit completo para cuidados com a pele com sérum, hidratante e protetor solar. Dermatologicamente testado e aprovado por milhares de clientes.",
    benefits: ["Dermatologicamente testado", "Sem parabenos", "Vegano", "Resultados em 30 dias"],
    price: "R$ 129,90",
    originalPrice: "R$ 249,90",
    discount: "48% OFF",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    badge: "Novo",
    affiliateUrl: "#comprar-produto-3",
    category: "Beleza",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 4,
    name: "Colágeno Hidrolisado Turbo",
    tagline: "Rejuvenesça por dentro e por fora",
    description: "Colágeno tipo 1 e 3 com vitamina C e ácido hialurônico. Melhora a elasticidade da pele, fortalece cabelos e unhas em até 4 semanas.",
    benefits: ["Colágeno tipo 1 e 3", "Vitamina C", "Ácido hialurônico", "Sem glúten"],
    price: "R$ 79,90",
    originalPrice: "R$ 159,90",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    affiliateUrl: "#comprar-produto-4",
    category: "Saúde & Bem-estar",
    rating: 4.8,
    reviews: 3210,
  },
  {
    id: 5,
    name: "Curso de Investimentos",
    tagline: "Faça seu dinheiro trabalhar por você",
    description: "Aprenda a investir com segurança na renda fixa, ações e FIIs. Método simples para iniciantes com acompanhamento de especialistas do mercado financeiro.",
    benefits: ["Acesso por 1 ano", "Comunidade VIP", "Planilhas exclusivas", "Mentoria mensal"],
    price: "R$ 247,00",
    originalPrice: "R$ 597,00",
    discount: "59% OFF",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    badge: "Premium",
    affiliateUrl: "#comprar-produto-5",
    category: "Finanças",
    rating: 4.9,
    reviews: 4456,
  },
  {
    id: 6,
    name: "Proteína Whey Gold",
    tagline: "Ganho muscular acelerado",
    description: "Whey protein concentrado e isolado com 25g de proteína por dose. Ideal para pós-treino, recuperação muscular e ganho de massa magra.",
    benefits: ["25g de proteína", "Low carb", "Sem lactose", "10 sabores disponíveis"],
    price: "R$ 149,90",
    originalPrice: "R$ 279,90",
    discount: "46% OFF",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80",
    affiliateUrl: "#comprar-produto-6",
    category: "Fitness",
    rating: 4.7,
    reviews: 6891,
  },
];
