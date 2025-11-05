import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OQueFaco } from "@/components/sections/OQueFaco";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Serviços - FCC Sites",
  description: "Criação de sites profissionais, landing pages e e-commerce. Design personalizado, SEO e alta performance.",
};

const servicosDetalhados = [
  {
    title: "Sites Institucionais",
    description: "Presença digital profissional para sua empresa",
    features: [
      "Design personalizado e responsivo",
      "Otimização para mecanismos de busca (SEO)",
      "Integração com redes sociais e WhatsApp",
      "Formulários de contato inteligentes",
      "Google Analytics e métricas",
      "SSL e segurança inclusos"
    ],
    ideal: "Ideal para empresas, profissionais liberais, consultórios e escritórios",
    prazo: "15-20 dias úteis",
    investimento: "A partir de R$ 3.000"
  },
  {
    title: "Landing Pages",
    description: "Páginas de alta conversão para campanhas e lançamentos",
    features: [
      "Design focado em conversão",
      "Copy persuasivo e estratégico",
      "Otimização de velocidade extrema",
      "Integração com ferramentas de marketing",
      "A/B testing pronto",
      "Pixel Facebook e Google Ads"
    ],
    ideal: "Ideal para lançamentos, webinars, captação de leads e vendas diretas",
    prazo: "7-10 dias úteis",
    investimento: "A partir de R$ 2.500"
  },
  {
    title: "E-commerce",
    description: "Loja virtual leve, rápida e otimizada para vendas",
    features: [
      "Catálogo de produtos completo",
      "Carrinho e checkout otimizado",
      "Integração com gateways de pagamento",
      "Painel administrativo",
      "Sistema de estoque",
      "Relatórios de vendas"
    ],
    ideal: "Ideal para marcas que querem vender online com experiência premium",
    prazo: "30-45 dias úteis",
    investimento: "A partir de R$ 6.000"
  }
];

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero
          title="Serviços"
          description="Soluções completas para sua presença digital profissional"
        />

        <OQueFaco />

        {/* Serviços Detalhados */}
        <SectionWrapper className="bg-white">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-navy mb-4">
                  Serviços Detalhados
                </h2>
                <p className="text-xl text-muted">
                  Escolha a solução perfeita para o seu negócio
                </p>
              </div>

              {servicosDetalhados.map((servico, index) => (
                <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                  <Card className="overflow-hidden hover:shadow-brand transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-3xl font-heading font-bold text-navy mb-2">
                            {servico.title}
                          </h3>
                          <p className="text-lg text-muted">
                            {servico.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div>
                          <h4 className="font-semibold text-navy mb-4">O que está incluído:</h4>
                          <ul className="space-y-2">
                            {servico.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-textDark/80">
                                <svg className="w-5 h-5 text-azure mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-panel p-4 rounded-brand border border-border hover:border-azure/30 transition-colors">
                            <p className="text-sm text-muted mb-1">Para quem é ideal</p>
                            <p className="text-textDark">{servico.ideal}</p>
                          </div>
                          <div className="bg-panel p-4 rounded-brand border border-border hover:border-azure/30 transition-colors">
                            <p className="text-sm text-muted mb-1">Prazo de entrega</p>
                            <p className="text-textDark font-semibold">{servico.prazo}</p>
                          </div>
                          <div className="bg-azure/10 p-4 rounded-brand border border-azure/20">
                            <p className="text-sm text-azure mb-1">Investimento</p>
                            <p className="text-2xl text-navy font-bold">{servico.investimento}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="primary" href="#contato">
                          Solicitar Orçamento
                        </Button>
                        <Button variant="outline" href="/portfolio">
                          Ver Exemplos
                        </Button>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* CTA Final */}
        <SectionWrapper className="bg-gradient-to-br from-navy via-navy to-azure/20 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
          <ScrollReveal>
            <div className="max-w-2xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Não encontrou o que procura?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Cada projeto é único. Vamos conversar sobre suas necessidades específicas
              </p>
              <Button variant="ghost" size="lg" href="#contato">
                Falar com Felipe
              </Button>
            </div>
          </ScrollReveal>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
