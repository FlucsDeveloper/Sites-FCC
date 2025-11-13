"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function QuemSou() {
  return (
    <SectionWrapper id="quem-sou" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal delay={0.1}>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
              Quem sou eu
            </h2>

            <div className="space-y-4 text-lg text-textDark/80 leading-relaxed">
              <p>
                Sou <strong className="text-navy">Felipe Caltabiano Castro</strong>, criador da FCC Sites.
              </p>
              <p className="text-base text-textDark/70">
                CPF: 416.645.638-57
              </p>
              <p>
                Acredito que um site precisa unir estética, clareza e desempenho.
              </p>
              <p>
                Minha missão é transformar marcas em experiências digitais vivas,
                com design que inspira, tecnologia que funciona e performance que impressiona.
              </p>
              <blockquote className="border-l-4 border-azure pl-6 italic text-navy">
                "Simplicidade é o novo luxo."
              </blockquote>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
