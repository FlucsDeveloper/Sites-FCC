# FCC Sites - Site Institucional

Site profissional minimalista e de alta performance para FCC Sites, desenvolvido com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Features

- ✅ Design minimalista e premium
- ✅ Performance otimizada (Lighthouse ≥95)
- ✅ SEO completo com meta tags e Schema.org
- ✅ Formulário de contato integrado com Resend
- ✅ Integração WhatsApp e Calendly
- ✅ Google Analytics 4 e Meta Pixel
- ✅ Acessibilidade WCAG 2.1 AA
- ✅ Animações suaves com Framer Motion
- ✅ Responsivo mobile-first
- ✅ TypeScript para type-safety

## 📋 Pré-requisitos

- Node.js 18+
- npm ou pnpm
- Conta Resend para envio de e-mails (https://resend.com/)

## 🛠️ Instalação

1. Clone ou navegue até o diretório do projeto:
\`\`\`bash
cd fcc-sites
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Configure as variáveis de ambiente:

Copie o arquivo \`.env.local.example\` para \`.env.local\`:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

Edite \`.env.local\` e adicione suas credenciais:
\`\`\`env
RESEND_API_KEY=re_xxxxxxxxx
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/5511982225822
NEXT_PUBLIC_EMAIL=felipe.caltabiano.castro@gmail.com
\`\`\`

## 🏃 Desenvolvimento

Inicie o servidor de desenvolvimento:

\`\`\`bash
npm run dev
\`\`\`

Acesse http://localhost:3000

## 🏗️ Build

Para criar uma build de produção:

\`\`\`bash
npm run build
\`\`\`

Para iniciar o servidor de produção:

\`\`\`bash
npm start
\`\`\`

## 📦 Deploy na Vercel

### Via CLI

1. Instale a CLI da Vercel:
\`\`\`bash
npm install -g vercel
\`\`\`

2. Faça login:
\`\`\`bash
vercel login
\`\`\`

3. Deploy:
\`\`\`bash
vercel
\`\`\`

### Via Dashboard

1. Acesse https://vercel.com/
2. Clique em "Add New Project"
3. Importe seu repositório Git
4. Configure as variáveis de ambiente no dashboard:
   - RESEND_API_KEY
   - NEXT_PUBLIC_GA4_ID
   - NEXT_PUBLIC_META_PIXEL_ID
   - NEXT_PUBLIC_WHATSAPP_URL
   - NEXT_PUBLIC_EMAIL

5. Clique em "Deploy"

## 📁 Estrutura do Projeto

\`\`\`
fcc-sites/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API Route para formulário
│   ├── layout.tsx                # Layout raiz com fonts e analytics
│   ├── page.tsx                  # Home page
│   └── globals.css               # Estilos globais
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Header sticky
│   │   └── Footer.tsx            # Footer
│   ├── sections/
│   │   ├── Hero.tsx              # Seção Hero
│   │   ├── QuemSou.tsx           # Quem Sou
│   │   ├── OQueFaco.tsx          # O Que Faço
│   │   ├── Processo.tsx          # Processo
│   │   ├── ProvasSociais.tsx     # Depoimentos
│   │   ├── Portfolio.tsx         # Portfólio
│   │   ├── Valores.tsx           # Pricing
│   │   ├── Bonus.tsx             # Bônus
│   │   ├── FAQ.tsx               # FAQ
│   │   ├── CTA.tsx               # Contato
│   │   └── ContactForm.tsx       # Formulário
│   ├── ui/
│   │   ├── Button.tsx            # Botão reutilizável
│   │   ├── Card.tsx              # Card reutilizável
│   │   ├── Input.tsx             # Input
│   │   ├── Textarea.tsx          # Textarea
│   │   ├── Select.tsx            # Select
│   │   └── Accordion.tsx         # Accordion (FAQ)
│   └── shared/
│       └── SectionWrapper.tsx    # Container de seções
├── lib/
│   ├── utils.ts                  # Utilities
│   └── analytics.ts              # Tracking GA4/Pixel
├── config/
│   └── site.config.ts            # Configurações do site
├── types/
│   └── index.ts                  # TypeScript types
└── public/
    ├── images/                   # Imagens estáticas
    └── fonts/                    # Fontes locais
\`\`\`

## 🎨 Design System

### Cores
- **Navy**: #0A1538 (fundo/hero)
- **Azure**: #3E70FF (CTA/acentos)
- **Text Dark**: #0B1220 (texto principal)
- **Panel**: #F6F7FA (painéis)
- **Border**: #E9EDF3 (bordas)
- **Muted**: #98A2B3 (texto secundário)

### Tipografia
- **Heading**: Poppins (600/700)
- **Body**: Inter (400/500)

### Raios e Sombras
- **Border Radius**: 16px
- **Shadow Brand**: 0 10px 30px rgba(10,21,56,0.2)

## 🧪 Testes

### Performance (Lighthouse)
\`\`\`bash
npm run build
npm start
# Abra Chrome DevTools > Lighthouse > Rodar audit
\`\`\`

Target: ≥95 em todas as métricas

### Acessibilidade
- Navegação por teclado (Tab)
- Contraste de cores AA
- Screen reader friendly
- prefers-reduced-motion respeitado

## 📝 Checklist de Entrega

- [x] Home completa com todas as seções
- [x] Header sticky funcional
- [x] Hero com efeito sheen e CTA
- [x] Todas as seções implementadas
- [x] Formulário de contato funcional
- [x] API Route com Resend
- [x] Integração WhatsApp
- [x] Integração Calendly
- [x] GA4 e Meta Pixel
- [x] SEO completo
- [x] Acessibilidade WCAG 2.1 AA
- [ ] Lighthouse ≥95 (testar após deploy)
- [ ] Deploy na Vercel

## 🔧 Configuração de Serviços Externos

### Resend (E-mail)
1. Crie uma conta em https://resend.com/
2. Crie uma API Key
3. Configure o domínio de envio (ou use sandbox)
4. Adicione a chave em \`.env.local\`

### Google Analytics 4
1. Crie uma propriedade GA4 em https://analytics.google.com/
2. Copie o ID (formato: G-XXXXXXXXXX)
3. Adicione em \`.env.local\`

### Meta Pixel
1. Crie um Pixel em https://business.facebook.com/
2. Copie o ID do Pixel
3. Adicione em \`.env.local\`

### Calendly
1. Configure sua conta Calendly
2. Atualize o link no componente CTA.tsx (linha do href do botão)

## 📧 Contato

Felipe Caltabiano Castro
- Email: felipe.caltabiano.castro@gmail.com
- WhatsApp: +55 11 98222-5822

## 📄 Licença

© 2025 FCC Sites - Todos os direitos reservados.
