"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Portfolio() {
  return (
    <SectionWrapper id="portfolio" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
          Portfólio
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Projetos que transformam marcas em experiências
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-brand overflow-hidden bg-panel shadow-brand">
          {/* Mockup placeholder */}
          <div className="aspect-video flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy">
                Casa 9 Viagens
              </h3>
              <p className="text-lg text-muted max-w-lg">
                Estética sensorial, navegação leve, foco em conversão.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                <span className="px-3 py-1 bg-azure/10 text-azure text-sm rounded-full">
                  Design Minimalista
                </span>
                <span className="px-3 py-1 bg-azure/10 text-azure text-sm rounded-full">
                  Alta Performance
                </span>
                <span className="px-3 py-1 bg-azure/10 text-azure text-sm rounded-full">
                  SEO Otimizado
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" href="/portfolio">
            Ver mais projetos
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
