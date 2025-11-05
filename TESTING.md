# 🧪 Guia de Testes - FCC Sites

## 📋 Checklist Completo de Testes

### ✅ Estrutura e Layout

- [ ] **Header**
  - [ ] Logo aparece corretamente
  - [ ] Menu de navegação com todos os links
  - [ ] Header fica sticky ao rolar
  - [ ] Cor muda ao rolar (transparente → branco)
  - [ ] Botão "Contato" em destaque
  - [ ] Menu mobile funciona (< 1024px)
  - [ ] Links de navegação funcionam (scroll suave)

- [ ] **Footer**
  - [ ] Copyright com ano correto
  - [ ] Links de e-mail e WhatsApp funcionam
  - [ ] Aparece em todas as páginas

### ✅ Seções da Home

- [ ] **Hero**
  - [ ] Ocupa altura total da viewport
  - [ ] Efeito sheen no título funciona
  - [ ] CTA "Quero meu site profissional" funciona
  - [ ] Indicador de scroll (↓) aparece
  - [ ] Scroll suave para próxima seção

- [ ] **Quem Sou**
  - [ ] Grid 2 colunas (desktop) / 1 coluna (mobile)
  - [ ] Texto completo e legível
  - [ ] Placeholder de imagem aparece
  - [ ] Animação ao aparecer no viewport

- [ ] **O Que Faço**
  - [ ] Grid 2×4 (desktop) / 1 coluna (mobile)
  - [ ] 8 cards visíveis
  - [ ] Hover elevação funciona
  - [ ] Ícones aparecem corretamente

- [ ] **Processo**
  - [ ] 4 passos visíveis
  - [ ] Badges numerados (1-4)
  - [ ] Linha conectora entre passos (desktop)
  - [ ] Prazo aparece destacado

- [ ] **Provas Sociais**
  - [ ] 3 depoimentos visíveis
  - [ ] Cards com aspas
  - [ ] Nome e role dos clientes

- [ ] **Portfólio**
  - [ ] Casa 9 Viagens destacado
  - [ ] Tags aparecem
  - [ ] Botão "Ver mais projetos" funciona

- [ ] **Valores**
  - [ ] 3 cards de pricing
  - [ ] Card "Avançado" destacado
  - [ ] Glass effect nos cards
  - [ ] Lista de features visível
  - [ ] CTA "Ver detalhes por WhatsApp" funciona

- [ ] **Bônus**
  - [ ] Grid 2×2 (desktop) / 1 coluna (mobile)
  - [ ] 4 bônus visíveis
  - [ ] Ícones de check aparecem

- [ ] **FAQ**
  - [ ] Accordion com 6 perguntas
  - [ ] Clique abre/fecha resposta
  - [ ] Ícone de seta rotaciona
  - [ ] Uma pergunta aberta por vez

- [ ] **CTA/Contato**
  - [ ] Botão WhatsApp funciona
  - [ ] Botão E-mail funciona
  - [ ] Botão Calendly funciona
  - [ ] Formulário aparece completo
  - [ ] Informações de contato visíveis

### ✅ Formulário de Contato

- [ ] **Campos**
  - [ ] Nome (obrigatório)
  - [ ] E-mail (obrigatório, validação)
  - [ ] WhatsApp (máscara de telefone)
  - [ ] Tipo de site (select)
  - [ ] Orçamento (select)
  - [ ] Mensagem (obrigatória, textarea)

- [ ] **Validação**
  - [ ] Erro se campos obrigatórios vazios
  - [ ] Erro se e-mail inválido
  - [ ] Máscara de telefone formata corretamente

- [ ] **Envio**
  - [ ] Botão muda para "Enviando..." durante submit
  - [ ] Mensagem de sucesso aparece
  - [ ] Formulário limpa após sucesso
  - [ ] Mensagem de erro aparece se falhar
  - [ ] E-mail chega na caixa de entrada

- [ ] **Honeypot**
  - [ ] Campo "company" não é visível
  - [ ] Bots são bloqueados

### ✅ Responsividade

Teste nos seguintes breakpoints:

- [ ] **Mobile (360px - 767px)**
  - [ ] Menu hamburger aparece
  - [ ] Seções empilham verticalmente
  - [ ] Texto legível em tamanho menor
  - [ ] Botões ocupam largura total
  - [ ] Cards em coluna única

- [ ] **Tablet (768px - 1023px)**
  - [ ] Grid 2 colunas onde aplicável
  - [ ] Menu ainda no hamburger
  - [ ] Espaçamentos adequados

- [ ] **Desktop (1024px+)**
  - [ ] Menu horizontal visível
  - [ ] Grid completo (2×4, 3 colunas)
  - [ ] Max-width 1280px respeitado
  - [ ] Espaçamentos amplos

### ✅ Performance

- [ ] **Lighthouse Audit**
  - [ ] Performance ≥95
  - [ ] Accessibility ≥95
  - [ ] Best Practices ≥95
  - [ ] SEO ≥95

- [ ] **Core Web Vitals**
  - [ ] LCP (Largest Contentful Paint) ≤ 1.8s
  - [ ] FID (First Input Delay) ≤ 100ms
  - [ ] CLS (Cumulative Layout Shift) ≤ 0.01

- [ ] **Otimizações**
  - [ ] Imagens em formato webp
  - [ ] Lazy loading ativo
  - [ ] Fontes otimizadas (WOFF2)
  - [ ] JavaScript minificado
  - [ ] CSS inline crítico

### ✅ SEO

- [ ] **Meta Tags**
  - [ ] Title correto em todas as páginas
  - [ ] Description única
  - [ ] Open Graph tags (og:title, og:description, og:image)
  - [ ] Twitter Card tags

- [ ] **Estrutura**
  - [ ] H1 único por página
  - [ ] Hierarquia de headings correta (H1 → H2 → H3)
  - [ ] Semantic HTML (header, main, section, footer)
  - [ ] Links com texto descritivo

- [ ] **Indexação**
  - [ ] robots.txt existe
  - [ ] sitemap.xml existe
  - [ ] Canonical URL configurado

### ✅ Acessibilidade (WCAG 2.1 AA)

- [ ] **Navegação por Teclado**
  - [ ] Tab navega por todos os elementos interativos
  - [ ] Shift+Tab volta
  - [ ] Enter ativa botões e links
  - [ ] Escape fecha modais/menus

- [ ] **Foco Visível**
  - [ ] Todos os elementos têm outline visível ao focar
  - [ ] Cor de foco contrasta com fundo
  - [ ] Foco nunca fica "preso"

- [ ] **Contraste de Cores**
  - [ ] Texto escuro em fundo claro ≥ 4.5:1
  - [ ] Texto claro em fundo escuro ≥ 4.5:1
  - [ ] Botões e links têm contraste suficiente

- [ ] **ARIA e Labels**
  - [ ] Inputs têm labels associados
  - [ ] Botões têm aria-label quando necessário
  - [ ] Landmarks semânticos corretos
  - [ ] aria-current em navegação ativa

- [ ] **Screen Readers**
  - [ ] Conteúdo é lido em ordem lógica
  - [ ] Imagens têm alt text descritivo
  - [ ] Links têm texto descritivo
  - [ ] Mensagens de erro são anunciadas

- [ ] **Reduced Motion**
  - [ ] Animações desabilitam com prefers-reduced-motion
  - [ ] Site continua funcional sem animações

### ✅ Integrações

- [ ] **WhatsApp**
  - [ ] Link abre conversa corretamente
  - [ ] Número correto (+55 11 98222-5822)
  - [ ] Evento GA4 dispara ao clicar

- [ ] **E-mail**
  - [ ] Link abre cliente de e-mail
  - [ ] E-mail correto (felipe.caltabiano.castro@gmail.com)
  - [ ] Evento GA4 dispara ao clicar

- [ ] **Calendly**
  - [ ] Link abre página Calendly
  - [ ] Evento GA4 dispara ao clicar

- [ ] **Google Analytics 4**
  - [ ] Script carrega corretamente
  - [ ] Pageview é registrado
  - [ ] Evento form_submit funciona
  - [ ] Evento cta_click funciona
  - [ ] Evento calendly_open funciona

- [ ] **Meta Pixel**
  - [ ] Script carrega corretamente
  - [ ] PageView é registrado
  - [ ] Eventos customizados funcionam

- [ ] **Resend (E-mail)**
  - [ ] API Key configurada
  - [ ] E-mails chegam na caixa de entrada
  - [ ] Template HTML renderiza corretamente
  - [ ] Informações do form aparecem no e-mail

### ✅ Cross-Browser Testing

Teste nos seguintes navegadores:

- [ ] **Chrome (latest)**
  - [ ] Desktop
  - [ ] Mobile

- [ ] **Safari (latest)**
  - [ ] Desktop (macOS)
  - [ ] Mobile (iOS)

- [ ] **Firefox (latest)**
  - [ ] Desktop

- [ ] **Edge (latest)**
  - [ ] Desktop

### ✅ Security

- [ ] **Formulário**
  - [ ] Honeypot anti-spam funciona
  - [ ] Validação server-side implementada
  - [ ] Rate limiting (se implementado)
  - [ ] Sem exposição de API keys no client

- [ ] **Headers**
  - [ ] HTTPS ativo
  - [ ] Security headers configurados (se aplicável)

## 🔍 Como Testar

### Teste Manual

1. Abra o site em diferentes navegadores
2. Redimensione a janela para testar responsividade
3. Use DevTools para simular dispositivos móveis
4. Navegue pelo site usando apenas teclado
5. Preencha e envie o formulário

### Lighthouse Audit

\`\`\`bash
# Build e start
npm run build
npm start

# Abra http://localhost:3000
# F12 > Lighthouse > Run audit
\`\`\`

### axe DevTools (Acessibilidade)

1. Instale a extensão axe DevTools
2. Abra o site
3. F12 > axe DevTools > Scan ALL of my page
4. Corrija problemas encontrados

### Google Analytics DebugView

1. Abra https://analytics.google.com/
2. Vá para Admin > DebugView
3. Navegue pelo site
4. Verifique eventos em tempo real

## 📊 Critérios de Aceite

Para considerar o projeto **completo e pronto para produção**:

- ✅ **100% das seções** implementadas e funcionais
- ✅ **Lighthouse ≥95** em todas as métricas
- ✅ **WCAG 2.1 AA** compliance
- ✅ **Formulário funcional** com e-mails chegando
- ✅ **Responsivo** em todos os breakpoints
- ✅ **Cross-browser** funcional
- ✅ **Analytics** trackando corretamente
- ✅ **Zero erros** no console

## 🐛 Como Reportar Bugs

Se encontrar problemas, documente:

1. **Descrição**: O que aconteceu?
2. **Passos para reproduzir**: Como chegar no bug?
3. **Comportamento esperado**: O que deveria acontecer?
4. **Screenshots**: Se possível
5. **Ambiente**: Navegador, SO, versão

---

**Happy Testing! 🎉**
