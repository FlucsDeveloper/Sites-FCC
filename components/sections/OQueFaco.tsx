"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Design personalizado",
    description: "criado do zero para sua marca",
  },
  {
    title: "Integrações com WhatsApp",
    description: "e redes sociais",
  },
  {
    title: "E-commerce leve e rápido",
    description: "checkout otimizado",
  },
  {
    title: "SEO técnico",
    description: "estrutura pensada para Google",
  },
  {
    title: "Métricas e performance",
    description: "Google Analytics e Pixel Meta",
  },
  {
    title: "Automações inteligentes",
    description: "formulários e leads automáticos",
  },
  {
    title: "Segurança e SSL",
    description: "servidor protegido e backups automáticos",
  },
  {
    title: "Hospedagem e suporte",
    description: "contínuo",
  },
];

export function OQueFaco() {
  return (
    <SectionWrapper id="o-que-faco" className="bg-panel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
          O que eu faço
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Serviços completos para transformar sua presença digital
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card hover className="h-full">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-azure/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-azure rounded-full" />
                </div>
                <CardTitle className="text-lg text-navy">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-muted">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
