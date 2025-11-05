import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Servicos } from "@/components/sections/Servicos";
import { QuemSou } from "@/components/sections/QuemSou";
import { ProvasSociais } from "@/components/sections/ProvasSociais";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <QuemSou />
        <ProvasSociais />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
