"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const testimonials = [
  {
    quote: "O site ficou leve, elegante e aumentou a confiança dos clientes.",
    author: "Cliente A",
    role: "Empreendedor",
  },
  {
    quote: "Design impecável e performance excelente. Recomendo.",
    author: "Cliente B",
    role: "Marca Premium",
  },
  {
    quote: "Processo claro, resultado acima do esperado.",
    author: "Cliente C",
    role: "Startup",
  },
];

export function ProvasSociais() {
  return (
    <SectionWrapper id="provas-sociais" className="bg-panel">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Resultados que falam por si
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={index} delay={0.2 + index * 0.1}>
            <Card className="h-full">
              <CardContent className="flex flex-col h-full p-6">
                <div className="mb-4">
                  <svg
                    className="w-10 h-10 text-azure"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="flex-1 text-lg text-textDark mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-navy">{testimonial.author}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
