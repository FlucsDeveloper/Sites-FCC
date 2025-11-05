"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { formatPhoneNumber, validateEmail } from "@/lib/utils";
import { trackFormSubmit } from "@/lib/analytics";
import type { ContactFormData } from "@/types";

export function ContactForm() {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    email: "",
    whatsapp: "",
    type: "",
    budget: "",
    message: "",
    company: "", // Honeypot
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "whatsapp") {
      setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.company) {
      setSubmitStatus("success");
      return;
    }

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        setSubmitStatus("success");
        trackFormSubmit("contact");
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          type: "",
          budget: "",
          message: "",
          company: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
            Nome completo *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            E-mail *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-navy mb-2">
            WhatsApp
          </label>
          <Input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="(11) 98222-5822"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-navy mb-2">
            Tipo de site
          </label>
          <Select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="institucional">Institucional</option>
            <option value="landing-page">Landing Page</option>
            <option value="ecommerce">E-commerce</option>
            <option value="portfolio">Portfólio</option>
            <option value="outro">Outro</option>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-navy mb-2">
          Orçamento estimado
        </label>
        <Select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Selecione...</option>
          <option value="3000">Até R$ 3.000 (Essencial)</option>
          <option value="4500">R$ 3.000 - R$ 5.000 (Avançado)</option>
          <option value="6000">R$ 5.000+ (Premium)</option>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
          Mensagem *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Conte mais sobre seu projeto..."
          rows={5}
        />
      </div>

      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </Button>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-brand text-green-800" role="alert">
          Mensagem enviada com sucesso! Entrarei em contato em breve.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-brand text-red-800" role="alert">
          Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por WhatsApp.
        </div>
      )}
    </form>
  );
}
