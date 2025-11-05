"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Preços", href: "/precos" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightMode = isScrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isLightMode
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all duration-500"
          >
            <Logo size="sm" animated={false} />
            <span className={cn(
              "text-xl font-heading font-bold transition-colors duration-500",
              isLightMode ? "text-navy" : "text-white"
            )}>
              FCC Sites
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-500 hover:text-azure hover:-translate-y-0.5 relative group",
                  pathname === item.href
                    ? "text-azure"
                    : isLightMode
                    ? "text-textDark"
                    : "text-white/90"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-azure transition-all duration-300",
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant={isLightMode ? "primary" : "ghost"}
              size="md"
              href="#contato"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "block h-0.5 w-full transition-all duration-500",
                  isLightMode ? "bg-navy" : "bg-white",
                  isMobileMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full transition-all duration-500",
                  isLightMode ? "bg-navy" : "bg-white",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full transition-all duration-500",
                  isLightMode ? "bg-navy" : "bg-white",
                  isMobileMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-azure"
                      : "text-textDark hover:text-azure"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="primary"
                size="md"
                href="/contato"
                className="w-full"
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
