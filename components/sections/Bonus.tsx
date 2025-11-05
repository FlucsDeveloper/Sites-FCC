"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { motion } from "framer-motion";

const bonuses = [
  {
    title: "Tutorial de edição do conteúdo",
    description: "Aprenda a atualizar seu site facilmente",
  },
  {
    title: "Integração com e-mail e formulários",
    description: "Capture leads automaticamente",
  },
  {
    title: "Diagnóstico de SEO inicial",
    description: "Análise completa da otimização",
  },
  {
    title: "Consultoria digital de posicionamento",
    description: "Estratégia para destacar sua marca",
  },
];

export function Bonus() {
  return (
    <SectionWrapper id="bonus" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
          Bônus Inclusos
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Valor extra para garantir seu sucesso
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {bonuses.map((bonus, index) => (
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
                  <svg
                    className="w-6 h-6 text-azure"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg text-navy">
                  {bonus.title}
                </CardTitle>
                <p className="text-sm text-muted">
                  {bonus.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
