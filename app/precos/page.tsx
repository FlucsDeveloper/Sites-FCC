import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Valores } from "@/components/sections/Valores";
import { Bonus } from "@/components/sections/Bonus";
import { FAQ } from "@/components/sections/FAQ";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Preços - FCC Sites",
  description: "Planos transparentes e completos para criação do seu site profissional. A partir de R$ 3.000.",
};

export default function PrecosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero
          title="Preços"
          description="Planos transparentes para cada necessidade"
        />

        <Valores />

        <Bonus />

        {/* Comparativo Detalhado */}
        <SectionWrapper className="bg-white">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-navy mb-4">
                  Comparativo Detalhado
                </h2>
                <p className="text-xl text-muted">
                  Entenda o que está incluído em cada plano
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gradient-to-r from-panel to-panel/50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-navy rounded-tl-brand">Funcionalidade</th>
                      <th className="text-center p-4 font-semibold text-navy">Essencial</th>
                      <th className="text-center p-4 font-semibold text-navy">Avançado</th>
                      <th className="text-center p-4 font-semibold text-navy rounded-tr-brand">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { feature: "Design personalizado", essencial: true, avancado: true, premium: true },
                      { feature: "Responsivo (mobile/tablet/desktop)", essencial: true, avancado: true, premium: true },
                      { feature: "SEO básico", essencial: true, avancado: true, premium: true },
                      { feature: "SSL e segurança", essencial: true, avancado: true, premium: true },
                      { feature: "Formulário de contato", essencial: true, avancado: true, premium: true },
                      { feature: "Integração WhatsApp", essencial: true, avancado: true, premium: true },
                      { feature: "Google Analytics", essencial: false, avancado: true, premium: true },
                      { feature: "Meta Pixel", essencial: false, avancado: true, premium: true },
                      { feature: "Blog integrado", essencial: false, avancado: true, premium: true },
                      { feature: "Animações avançadas", essencial: false, avancado: false, premium: true },
                      { feature: "E-commerce", essencial: false, avancado: false, premium: true },
                      { feature: "Área administrativa", essencial: false, avancado: false, premium: true },
                      { feature: "Consultoria de posicionamento", essencial: false, avancado: false, premium: true },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-panel/30 transition-colors">
                        <td className="p-4 text-textDark font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          {row.essencial ? (
                            <svg className="w-6 h-6 text-azure mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="text-muted text-xl">—</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.avancado ? (
                            <svg className="w-6 h-6 text-azure mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="text-muted text-xl">—</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.premium ? (
                            <svg className="w-6 h-6 text-azure mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="text-muted text-xl">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <FAQ />

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
                Pronto para começar?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Entre em contato e vamos conversar sobre o melhor plano para você
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="ghost" size="lg" href="#contato">
                  Solicitar Orçamento
                </Button>
                <Button variant="outline" size="lg" href="https://wa.me/5511982225822" target="_blank">
                  WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
