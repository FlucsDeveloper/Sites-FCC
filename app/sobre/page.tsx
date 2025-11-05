import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuemSou } from "@/components/sections/QuemSou";
import { Processo } from "@/components/sections/Processo";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "Sobre - FCC Sites",
  description: "Conheça Felipe Caltabiano Castro e a filosofia por trás da FCC Sites. Design minimalista, tecnologia e performance.",
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero
          title="Sobre a FCC Sites"
          description="Transformando marcas em experiências digitais com design minimalista e performance máxima"
        />

        <QuemSou />

        <SectionWrapper className="bg-panel">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-heading font-bold text-navy mb-6">
                Filosofia de Trabalho
              </h2>
              <div className="space-y-6 text-lg text-textDark/80 leading-relaxed">
                <p>
                  Acredito que um site não é apenas um cartão de visitas digital.
                  É uma ferramenta poderosa de conversão, credibilidade e conexão com seu público.
                </p>
                <p>
                  Por isso, cada projeto é desenvolvido com atenção aos mínimos detalhes:
                  desde a escolha das cores até a otimização técnica para mecanismos de busca.
                </p>
                <p className="font-semibold text-navy text-xl">
                  "A simplicidade é o resultado da sofisticação, não da preguiça."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <Processo />

        <SectionWrapper className="bg-white">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-navy mb-12 text-center">
                Por Que Escolher a FCC Sites?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Foco em Resultados",
                    description: "Sites criados para converter visitantes em clientes, não apenas para impressionar visualmente.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Performance Real",
                    description: "Lighthouse scores acima de 95. Seu site carrega rápido em qualquer dispositivo.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  },
                  {
                    title: "SEO Integrado",
                    description: "Estrutura técnica otimizada desde o primeiro dia para ranquear bem no Google.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Suporte Contínuo",
                    description: "Não te deixo na mão após o lançamento. Suporte técnico e orientação sempre que precisar.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                    <Card className="h-full group hover:shadow-brand transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-azure/10 flex items-center justify-center mb-4 text-azure group-hover:bg-azure group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-navy mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

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
                Vamos trabalhar juntos?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Entre em contato e vamos conversar sobre como transformar sua presença digital
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
