"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Qual é o prazo de desenvolvimento?",
    answer:
      "O prazo médio é de 15 a 30 dias úteis, dependendo da complexidade do projeto. Sites mais simples podem ficar prontos em 2 semanas, enquanto projetos mais robustos com e-commerce ou funcionalidades customizadas podem levar até 4 semanas.",
  },
  {
    question: "Como funciona o processo de criação?",
    answer:
      "Seguimos 4 etapas: (1) Briefing & identidade - conhecemos sua marca e objetivos, (2) Protótipo & design - criamos a interface, (3) Desenvolvimento técnico - transformamos o design em código, (4) Lançamento & suporte - publicamos e acompanhamos os primeiros dias.",
  },
  {
    question: "O que preciso enviar para começar?",
    answer:
      "Você precisa fornecer: logo da marca, textos do site, imagens (se tiver), cores da identidade visual, e referências de sites que você gosta. Se não tiver tudo pronto, não tem problema - posso ajudar a desenvolver o conteúdo.",
  },
  {
    question: "A hospedagem está incluída?",
    answer:
      "A hospedagem não está incluída no valor do projeto, mas indico as melhores opções (Vercel, Netlify, ou outras) e faço todo o setup inicial. Os custos de hospedagem geralmente são baixos (R$ 0 a R$ 50/mês dependendo do tráfego).",
  },
  {
    question: "Quantas revisões estão incluídas?",
    answer:
      "Cada plano inclui 2 rodadas de revisões durante o desenvolvimento. Mudanças maiores após o lançamento podem ser orçadas separadamente. Meu objetivo é acertar desde o início através de um briefing bem detalhado.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é dividido em 2 etapas: 50% no início do projeto (após aprovação do briefing) e 50% na entrega final (antes de publicar). Aceito PIX e transferência bancária.",
  },
];

export function FAQ() {
  return (
    <SectionWrapper id="faq" className="bg-panel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Tudo o que você precisa saber
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionWrapper>
  );
}
