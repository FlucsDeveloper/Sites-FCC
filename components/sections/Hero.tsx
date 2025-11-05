"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      {/* Animated background with mesh gradient effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(74, 144, 226, 0.08) 0%, transparent 50%),
              linear-gradient(to bottom right, #1a2332 0%, #0f1419 100%)
            `
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles/orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-azure/15 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-azure/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        style={{ opacity, scale, y }}
      >
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo with stagger animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, 0.01, 0.9],
              delay: 0.2
            }}
          >
            <Logo size="lg" animated={true} className="mx-auto mb-8" />
          </motion.div>

          {/* Main heading with character animation */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.6, 0.05, 0.01, 0.9],
                delay: 0.4
              }}
            >
              <motion.span
                className="block mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                FCC Sites
              </motion.span>
              <motion.span
                className="block text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-white via-white/90 to-azure bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Design minimalista. Performance máxima.
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1
            }}
          >
            Sites que inspiram confiança e geram resultados.
          </motion.p>

          {/* CTA Button with hover effect */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.2
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="ghost" size="lg" href="#contato" className="text-lg px-12">
                Quero meu site profissional
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              opacity: { delay: 1.5, duration: 0.8 },
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="w-6 h-10 text-white/40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 40"
              >
                <rect x="5" y="5" width="14" height="24" rx="7" />
                <motion.circle
                  cx="12"
                  cy="12"
                  r="2"
                  fill="currentColor"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </motion.div>
            <span className="text-white/40 text-xs uppercase tracking-wider">Scroll</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
