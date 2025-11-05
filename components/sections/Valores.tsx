"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { trackCTAClick } from "@/lib/analytics";

const pricingTiers = [
  {
    name: "Essencial",
    price: "R$ 3.000",
    description: "Profissionais individuais",
    features: [
      "Design responsivo",
      "SEO básico",
      "SSL incluído",
      "Suporte pós-lançamento",
    ],
  },
  {
    name: "Avançado",
    price: "R$ 4.500",
    description: "Pequenas empresas e startups",
    features: [
      "Tudo do Essencial",
      "Integrações avançadas",
      "Analytics e métricas",
      "Formulários customizados",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "R$ 6.000",
    description: "Marcas exigentes",
    features: [
      "Tudo do Avançado",
      "E-commerce completo",
      "Animações personalizadas",
      "Consultoria de posicionamento",
    ],
  },
];

export function Valores() {
  const handleCTAClick = () => {
    trackCTAClick('pricing_cta');
  };

  return (
    <SectionWrapper id="valores" className="bg-navy">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Valores
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Planos transparentes para cada necessidade
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "relative rounded-brand p-8 transition-all duration-300",
              tier.highlighted
                ? "glass scale-105 border-2 border-azure"
                : "glass"
            )}
          >
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-azure text-white px-4 py-1 rounded-full text-sm font-semibold">
                Mais popular
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-white/70 text-sm mb-4">{tier.description}</p>
              <div className="text-4xl font-bold text-white mb-1">
                {tier.price}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <svg
                    className="w-5 h-5 text-azure mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
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
        <p className="text-white/80 mb-6">
          Todos os planos incluem design responsivo, SEO básico, SSL e suporte pós-lançamento.
        </p>
        <Button
          variant="ghost"
          size="lg"
          href="#contato"
          onClick={handleCTAClick}
        >
          Ver detalhes por WhatsApp
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
