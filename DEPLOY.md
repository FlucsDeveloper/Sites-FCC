# 🚀 Guia de Deploy - FCC Sites

## ✅ Checklist Pré-Deploy

Antes de fazer o deploy, certifique-se de que:

- [ ] Todas as seções estão implementadas e funcionando
- [ ] Formulário de contato está testado localmente
- [ ] Variáveis de ambiente estão configuradas
- [ ] Projeto builda sem erros (\`npm run build\`)
- [ ] Links do WhatsApp e e-mail estão corretos

## 📦 Opção 1: Deploy via Vercel CLI

### 1. Instalar Vercel CLI

\`\`\`bash
npm install -g vercel
\`\`\`

### 2. Login na Vercel

\`\`\`bash
vercel login
\`\`\`

Siga as instruções para autenticar.

### 3. Deploy

No diretório do projeto, execute:

\`\`\`bash
vercel
\`\`\`

Responda às perguntas:
- Set up and deploy? **Y**
- Which scope? (selecione sua conta)
- Link to existing project? **N**
- What's your project's name? **fcc-sites** (ou outro nome)
- In which directory is your code located? **./** (pressione Enter)

### 4. Configurar Variáveis de Ambiente

Após o primeiro deploy, configure as variáveis:

\`\`\`bash
vercel env add RESEND_API_KEY
vercel env add NEXT_PUBLIC_GA4_ID
vercel env add NEXT_PUBLIC_META_PIXEL_ID
vercel env add NEXT_PUBLIC_WHATSAPP_URL
vercel env add NEXT_PUBLIC_EMAIL
\`\`\`

Para cada variável:
1. Cole o valor quando solicitado
2. Selecione os ambientes: **Production**, **Preview**, **Development**

### 5. Redeploy com Variáveis

\`\`\`bash
vercel --prod
\`\`\`

## 🌐 Opção 2: Deploy via Dashboard Vercel

### 1. Preparar Repositório Git

Se ainda não inicializou o Git:

\`\`\`bash
cd fcc-sites
git init
git add .
git commit -m "Initial commit: FCC Sites completo"
\`\`\`

Crie um repositório no GitHub/GitLab/Bitbucket e faça push:

\`\`\`bash
git remote add origin <URL_DO_SEU_REPO>
git branch -M main
git push -u origin main
\`\`\`

### 2. Importar no Vercel

1. Acesse https://vercel.com/
2. Clique em **"Add New..."** → **"Project"**
3. Selecione **"Import Git Repository"**
4. Conecte sua conta do GitHub/GitLab/Bitbucket
5. Selecione o repositório **fcc-sites**
6. Clique em **"Import"**

### 3. Configurar Build Settings

Na página de configuração:
- **Framework Preset**: Next.js
- **Root Directory**: ./
- **Build Command**: \`npm run build\`
- **Output Directory**: (deixe padrão)
- **Install Command**: \`npm install\`

### 4. Adicionar Variáveis de Ambiente

Na seção "Environment Variables", adicione:

| Name | Value |
|------|-------|
| RESEND_API_KEY | re_xxxxxxxxx |
| NEXT_PUBLIC_GA4_ID | G-XXXXXXXXXX |
| NEXT_PUBLIC_META_PIXEL_ID | XXXXXXXXXX |
| NEXT_PUBLIC_WHATSAPP_URL | https://wa.me/5511982225822 |
| NEXT_PUBLIC_EMAIL | felipe.caltabiano.castro@gmail.com |

### 5. Deploy

Clique em **"Deploy"**

O deploy levará cerca de 2-3 minutos.

## 🧪 Testes Pós-Deploy

Após o deploy, teste:

### 1. Funcionalidade Básica

- [ ] Site carrega corretamente
- [ ] Todas as seções são visíveis
- [ ] Navegação por âncoras funciona
- [ ] Header sticky funciona
- [ ] Animações aparecem no scroll
- [ ] Design responsivo em mobile

### 2. Formulário de Contato

- [ ] Preencha o formulário com dados reais
- [ ] Clique em "Enviar mensagem"
- [ ] Verifique se aparece mensagem de sucesso
- [ ] Verifique se o e-mail chegou em felipe.caltabiano.castro@gmail.com

### 3. Integrações

- [ ] Clique no botão WhatsApp → deve abrir conversa
- [ ] Clique no botão E-mail → deve abrir cliente de e-mail
- [ ] Clique em "Agendar reunião" → deve abrir Calendly
- [ ] Abra DevTools → Console → verifique eventos GA4

### 4. Performance (Lighthouse)

1. Abra o site no Chrome
2. Abra DevTools (F12)
3. Vá para a aba **Lighthouse**
4. Selecione:
   - Mode: **Navigation**
   - Device: **Desktop** e **Mobile**
   - Categories: **Performance, Accessibility, Best Practices, SEO**
5. Clique em **"Analyze page load"**

**Target**: ≥95 em todas as métricas

### 5. Acessibilidade

- [ ] Navegue pelo site usando apenas Tab/Shift+Tab
- [ ] Verifique se todos os elementos interativos são acessíveis
- [ ] Foco visível em todos os elementos
- [ ] Use um screen reader (NVDA/VoiceOver) para testar

## 🔧 Troubleshooting

### Erro: "Formulário não envia"

1. Verifique se RESEND_API_KEY está configurada corretamente
2. Verifique logs no dashboard Vercel: https://vercel.com/[seu-projeto]/logs
3. Teste a API localmente primeiro

### Erro: "Analytics não está trackando"

1. Verifique se GA4_ID e META_PIXEL_ID estão configurados
2. Abra o console do navegador e procure por erros
3. Use o Google Analytics DebugView para verificar eventos

### Erro de Build

1. Verifique se todas as dependências estão em package.json
2. Limpe o cache: \`vercel --force\`
3. Verifique os logs de build no dashboard Vercel

## 🔐 Configuração de Domínio Personalizado

### Via Vercel Dashboard

1. Vá para o seu projeto na Vercel
2. Clique em **"Settings"** → **"Domains"**
3. Adicione seu domínio (ex: fccsites.com.br)
4. Siga as instruções para configurar DNS

### Configuração DNS

No seu provedor de domínio, adicione:

**Tipo A**:
- Host: @
- Value: 76.76.21.21

**Tipo CNAME**:
- Host: www
- Value: cname.vercel-dns.com

## 📊 Monitoramento

### Vercel Analytics

Ative o Vercel Analytics para métricas de performance:
1. Vá para o projeto na Vercel
2. Clique em **"Analytics"**
3. Ative **"Enable Analytics"**

### Google Analytics

Acesse https://analytics.google.com/ para ver:
- Pageviews
- Eventos customizados (form_submit, cta_click)
- Conversões

### Resend Dashboard

Acesse https://resend.com/emails para monitorar:
- E-mails enviados
- Taxa de entrega
- Erros

## 🚨 Comandos Úteis

\`\`\`bash
# Ver logs em tempo real
vercel logs --follow

# Listar deploys
vercel ls

# Ver variáveis de ambiente
vercel env ls

# Remover variável
vercel env rm NOME_DA_VARIAVEL

# Fazer rollback
vercel rollback [deployment-url]
\`\`\`

## 📞 Suporte

Se encontrar problemas:

1. Verifique a documentação: https://nextjs.org/docs
2. Verifique logs no Vercel Dashboard
3. Entre em contato com felipe.caltabiano.castro@gmail.com

---

**Deployment realizado com sucesso! 🎉**

Próximos passos:
- [ ] Configurar domínio personalizado
- [ ] Ativar Vercel Analytics
- [ ] Monitorar métricas no GA4
- [ ] Testar formulário com e-mails reais
- [ ] Compartilhar link do preview
