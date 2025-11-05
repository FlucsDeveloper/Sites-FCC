import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Portfólio - FCC Sites",
  description: "Veja projetos desenvolvidos pela FCC Sites. Sites profissionais com design minimalista e alta performance.",
};

const projetos = [
  {
    titulo: "Casa 9 Viagens",
    categoria: "Site Institucional",
    descricao: "Agência de viagens com foco em experiências únicas e personalizadas",
    tags: ["Design Minimalista", "SEO Otimizado", "Alta Performance"],
    desafio: "Criar uma presença digital que transmitisse a essência sensorial das viagens",
    solucao: "Site clean com foco em imagens impactantes, navegação intuitiva e calls-to-action estratégicos",
    resultado: "Aumento de 45% nas solicitações de orçamento nos primeiros 3 meses"
  },
  {
    titulo: "Em Breve",
    categoria: "E-commerce",
    descricao: "Loja virtual de produtos premium",
    tags: ["E-commerce", "Checkout Otimizado", "Design Premium"],
    desafio: "Criar experiência de compra premium com alta conversão",
    solucao: "Design focado em produto, checkout simplificado em 2 etapas",
    resultado: "Projeto em desenvolvimento"
  },
  {
    titulo: "Em Breve",
    categoria: "Landing Page",
    descricao: "Campanha de lançamento de produto digital",
    tags: ["Conversão", "Copy Estratégico", "A/B Testing"],
    desafio: "Maximizar conversão em campanha de lançamento",
    solucao: "Landing page focada com elementos de prova social e escassez",
    resultado: "Projeto em desenvolvimento"
  }
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero
          title="Portfólio"
          description="Projetos que transformam marcas em experiências digitais memoráveis"
        />

        {/* Grid de Projetos */}
        <SectionWrapper className="bg-white">
          <div className="max-w-6xl mx-auto space-y-12">
            {projetos.map((projeto, index) => (
              <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                <Card className="overflow-hidden group hover:shadow-brand transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Mockup/Imagem */}
                    <div className="aspect-video bg-gradient-to-br from-panel to-border rounded-brand flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <div className="text-center p-8 relative z-10">
                        <h3 className="text-2xl font-heading font-bold text-navy mb-2">
                          {projeto.titulo}
                        </h3>
                        <p className="text-muted mb-4">{projeto.categoria}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {projeto.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-azure/10 text-azure text-sm rounded-full border border-azure/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Informações */}
                    <div className="space-y-6 flex flex-col justify-center">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-navy mb-2">
                          {projeto.titulo}
                        </h3>
                        <p className="text-muted">
                          {projeto.descricao}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="border-l-4 border-azure pl-4">
                          <h4 className="font-semibold text-navy mb-2">Desafio</h4>
                          <p className="text-textDark/80 text-sm">
                            {projeto.desafio}
                          </p>
                        </div>

                        <div className="border-l-4 border-azure/50 pl-4">
                          <h4 className="font-semibold text-navy mb-2">Solução</h4>
                          <p className="text-textDark/80 text-sm">
                            {projeto.solucao}
                          </p>
                        </div>

                        <div className="bg-azure/10 p-4 rounded-brand border border-azure/20">
                          <h4 className="font-semibold text-azure mb-2">Resultado</h4>
                          <p className="text-navy font-semibold text-sm">
                            {projeto.resultado}
                          </p>
                        </div>
                      </div>

                      {index === 0 && (
                        <div className="flex gap-4">
                          <Button variant="primary" href="#contato">
                            Quero um Site Assim
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>

        {/* Categorias */}
        <SectionWrapper className="bg-panel">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-heading font-bold text-navy mb-6">
                Tipos de Projetos
              </h2>
              <p className="text-xl text-muted mb-12">
                Experiência em diferentes tipos de soluções digitais
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    categoria: "Sites Institucionais",
                    descricao: "Presença digital profissional para empresas e marcas",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )
                  },
                  {
                    categoria: "E-commerce",
                    descricao: "Lojas virtuais otimizadas para conversão",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  {
                    categoria: "Landing Pages",
                    descricao: "Páginas de alta conversão para campanhas",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                    <Card className="text-center h-full group hover:shadow-brand transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-azure/10 flex items-center justify-center mx-auto mb-4 text-azure group-hover:bg-azure group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <h3 className="font-semibold text-navy mb-2">
                          {item.categoria}
                        </h3>
                        <p className="text-sm text-muted">
                          {item.descricao}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
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
                Pronto para ter um site assim?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Vamos criar algo incrível para a sua marca
              </p>
              <Button variant="ghost" size="lg" href="#contato">
                Solicitar Orçamento
              </Button>
            </div>
          </ScrollReveal>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
