# Delivroo Express — Landing Page

Landing page institucional do Delivroo Express, apresentando a plataforma
para os dois públicos que ela conecta: **lojistas** que precisam de entrega
e **entregadores** independentes.

Segue a mesma identidade visual do
[delivroo-express-store-web](https://github.com/jccintr/delivroo-express-store-web)
(cores, tipografia e logo idênticos), com capturas de tela reais do app do
entregador ([delivroo-rider-android](https://github.com/jccintr/delivroo-rider-android)).

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, mesmo setup do store-web)
- react-icons

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

Gera os arquivos estáticos em `dist/` — pode subir em qualquer hosting
estático (Vercel, Netlify, GitHub Pages, etc.).

## Antes de publicar

Edite `src/config.js` e preencha os links reais:

- `STORE_SIGNUP_URL` — URL de cadastro da loja (rota `/cadastro` do
  delivroo-express-store-web, ex: `https://app.delivroo.express/cadastro`)
- `RIDER_APP_URL` — onde o entregador baixa/acessa o app (loja de apps
  quando publicado, ou uma página de espera/APK enquanto isso)

Esses dois valores são usados em todos os botões de call-to-action da
página (Navbar, seções, rodapé).

## Estrutura

```
src/
  components/
    Logo.jsx        — mesma marca do store-web
    PhoneFrame.jsx   — moldura de celular para as capturas de tela
  sections/
    Navbar.jsx
    Hero.jsx
    HowItWorks.jsx      — fluxo em 3 passos, loja e entregador lado a lado
    StoreBenefits.jsx   — comparação com manter um entregador fixo
    StoreFeatures.jsx   — recursos do painel da loja
    RiderShowcase.jsx   — as duas telas reais do app do entregador
    FinalCTA.jsx
    Footer.jsx
  config.js          — links externos de cadastro (editar antes de publicar)
  App.jsx
```
