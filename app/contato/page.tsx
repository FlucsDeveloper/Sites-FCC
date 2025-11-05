import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { PageHero } from "@/components/shared/PageHero";

export const metadata = {
  title: "Contato - FCC Sites",
  description: "Entre em contato com Felipe Caltabiano Castro. WhatsApp, e-mail ou agende uma reunião.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero
          title="Vamos conversar?"
          description="Escolha a melhor forma de entrar em contato"
        />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
