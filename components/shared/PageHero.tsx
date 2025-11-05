"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-navy overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
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

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-azure/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-azure/8 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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

      <div className="container mx-auto px-4 max-w-7xl relative z-10 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
