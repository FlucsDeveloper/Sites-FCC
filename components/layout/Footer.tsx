import { siteConfig } from "@/config/site.config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/80">
              © {currentYear} FCC Sites — Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.links.email}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
