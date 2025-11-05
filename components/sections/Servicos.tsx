"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Design Responsivo",
    description: "Sites que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência impecável em desktop, tablet e mobile."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Performance Máxima",
    description: "Otimização avançada para carregamento ultrarrápido, melhorando o SEO e a experiência do usuário."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Design Personalizado",
    description: "Interface única e exclusiva que reflete a identidade da sua marca e se destaca da concorrência."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SEO Otimizado",
    description: "Estrutura otimizada para mecanismos de busca, aumentando sua visibilidade no Google e gerando mais leads."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Segurança Garantida",
    description: "Proteção avançada contra ameaças, certificado SSL e práticas de segurança de ponta para proteger seus dados."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Manutenção Contínua",
    description: "Suporte técnico especializado e atualizações regulares para manter seu site sempre atualizado e funcionando perfeitamente."
  }
];

export function Servicos() {
  return (
    <SectionWrapper id="servicos" className="bg-gradient-to-br from-panel via-white to-panel">
      <ScrollReveal>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-azure/10 text-azure rounded-full text-sm font-medium border border-azure/20">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Serviços Premium
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            Soluções completas para seu site
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Do planejamento ao lançamento, cuidamos de cada detalhe para entregar excelência
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={0.1 + index * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="h-full group">
                <CardContent className="p-8">
                  <motion.div
                    className="mb-6 text-azure"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-azure transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.8}>
        <motion.div
          className="mt-16 text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="inline-block bg-gradient-to-r from-azure/10 via-navy/5 to-azure/10 rounded-brand p-8 border border-azure/20">
            <p className="text-lg text-navy mb-4 font-medium">
              Precisa de algo específico que não está listado aqui?
            </p>
            <p className="text-muted">
              Entre em contato para discutirmos suas necessidades específicas e criarmos uma solução personalizada.
            </p>
          </div>
        </motion.div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
