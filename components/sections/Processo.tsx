"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Briefing & identidade",
    description: "Entendemos sua marca e objetivos",
  },
  {
    number: "2",
    title: "Protótipo & design",
    description: "Criamos a interface perfeita",
  },
  {
    number: "3",
    title: "Desenvolvimento técnico",
    description: "Transformamos design em código",
  },
  {
    number: "4",
    title: "Lançamento & suporte",
    description: "Publicamos e acompanhamos",
  },
];

export function Processo() {
  return (
    <SectionWrapper id="processo" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
          Processo & Prazos
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Um caminho claro do início ao lançamento
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-azure/30" />
              )}

              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-azure flex items-center justify-center text-white text-2xl font-bold font-heading shadow-brand">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="text-sm text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-panel px-8 py-4 rounded-brand">
            <p className="text-lg text-navy">
              <span className="font-semibold">Prazo médio:</span>{" "}
              <span className="text-azure font-bold">15 a 30 dias úteis</span>
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
