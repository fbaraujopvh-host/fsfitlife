# Eu Te Indico — Suplementos & Emagrecedores

Site de vitrine de afiliados construído em [Astro](https://astro.build), focado em suplementos, termogênicos e emagrecedores. Cada produto tem sua própria página de detalhe; o botão de compra leva ao checkout do link de afiliado.

## Estrutura

```text
/
├── src/
│   ├── components/      # Header, Hero, carrosséis, Footer, etc.
│   ├── data/
│   │   └── products.ts  # Catálogo de produtos (edite aqui)
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro          # Página inicial / vitrine
│       └── produto/[slug].astro # Página de detalhe do produto (gerada para cada produto)
└── public/               # Favicon, brand kit
```

## Como adicionar/editar produtos

Edite [`src/data/products.ts`](src/data/products.ts). Cada produto precisa de:

- `slug`: identificador único usado na URL (`/produto/<slug>`), apenas letras minúsculas, números e hífens.
- `affiliateUrl`: **substitua pela URL real de checkout do seu link de afiliado** (Hotmart, Monetizze, Eduzz, Amazon Associates, etc.).
- `image`: URL da imagem do produto.
- Demais campos (`description`, `longDescription`, `benefits`, `howToUse`, preços, categoria, avaliação) controlam o que aparece na vitrine e na página de detalhe.

Ao salvar o arquivo, o Astro gera automaticamente uma página `/produto/<slug>` para cada produto da lista — não é preciso criar páginas manualmente.

## Comandos

| Comando           | Ação                                          |
| :----------------- | :--------------------------------------------- |
| `npm install`       | Instala as dependências                        |
| `npm run dev`        | Inicia o servidor local em `localhost:4321`   |
| `npm run build`      | Gera o build de produção em `./dist/`          |
| `npm run preview`    | Visualiza o build de produção localmente       |

## Deploy

O projeto já está configurado para deploy estático na [Vercel](https://vercel.com) (`vercel.json`). Basta conectar o repositório do GitHub ao seu projeto na Vercel — o build (`npm run build`) e o diretório de saída (`dist`) já estão definidos.
