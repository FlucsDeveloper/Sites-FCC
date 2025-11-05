"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site.config";
import { trackCTAClick } from "@/lib/analytics";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { motion } from "framer-motion";

export function CTA() {
  const handleWhatsAppClick = () => {
    trackCTAClick("whatsapp_cta");
  };

  const handleEmailClick = () => {
    trackCTAClick("email_cta");
  };

  return (
    <SectionWrapper id="contato" className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-azure/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <ScrollReveal>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            Vamos criar algo incrível?
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Entre em contato e vamos conversar sobre o seu projeto
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {/* Contact Options */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">
                Formas de contato
              </h3>

              <div className="space-y-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={siteConfig.links.whatsapp}
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Falar com Felipe
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href={siteConfig.links.email}
                  onClick={handleEmailClick}
                  className="w-full flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar e-mail
                </Button>
              </div>
            </div>

            {/* Calendly Embed */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-6">
                  Agende uma conversa
                </h3>
                <div className="bg-panel rounded-brand p-8 text-center border border-border hover:border-azure/30 transition-all duration-300">
                  <p className="text-muted mb-4">
                    Prefere marcar um horário? Escolha o melhor dia e hora para conversarmos.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    href="https://calendly.com/felipe-fcc-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCTAClick("calendly")}
                  >
                    Agendar reunião
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteConfig.contact.email}
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {siteConfig.contact.phone}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal delay={0.4}>
          <div className="bg-panel rounded-brand p-8 border border-border shadow-sm hover:shadow-brand hover:border-azure/30 transition-all duration-300">
            <h3 className="text-2xl font-heading font-bold text-navy mb-6">
              Ou preencha o formulário
            </h3>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
