"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function QuemSou() {
  return (
    <SectionWrapper id="quem-sou" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={0.1}>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
              Quem sou eu
            </h2>

            <div className="space-y-4 text-lg text-textDark/80 leading-relaxed">
              <p>
                Sou <strong className="text-navy">Felipe Caltabiano Castro</strong>, criador da FCC Sites.
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

        <ScrollReveal delay={0.3}>
          <div className="aspect-[3/4] bg-panel rounded-brand overflow-hidden shadow-brand">
            {/* Placeholder para foto */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-panel to-border">
              <svg
                className="w-32 h-32 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
