"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export function Logo({ className = "", size = "md", animated = true }: LogoProps) {
  const sizes = {
    sm: {
      container: "w-10 h-10",
      text: "text-sm",
      svg: "w-10 h-10"
    },
    md: {
      container: "w-14 h-14",
      text: "text-lg",
      svg: "w-14 h-14"
    },
    lg: {
      container: "w-24 h-24",
      text: "text-3xl",
      svg: "w-24 h-24"
    },
  };

  const containerVariants = {
    initial: { scale: 0.5, opacity: 0, rotate: -180 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
        staggerChildren: 0.1
      }
    }
  };

  const pathVariants = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: 0.3 + i * 0.1,
          duration: 0.8,
          ease: "easeInOut" as const
        },
        opacity: {
          delay: 0.3 + i * 0.1,
          duration: 0.3
        }
      }
    })
  };

  const glowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const Container = animated ? motion.div : "div";
  const Path = animated ? motion.path : "path";
  const Circle = animated ? motion.circle : "circle";

  return (
    <Container
      className={`${sizes[size].container} ${className} relative flex items-center justify-center`}
      variants={animated ? containerVariants : undefined}
      initial={animated ? "initial" : undefined}
      animate={animated ? "animate" : undefined}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={sizes[size].svg}
      >
        {/* Glow effect */}
        {animated && (
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#glow)"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />
        )}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A90E2" />
            <stop offset="50%" stopColor="#1a2332" />
            <stop offset="100%" stopColor="#4A90E2" />
          </linearGradient>
          <radialGradient id="glow">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer hexagon */}
        <Path
          d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          custom={0}
          variants={animated ? pathVariants : undefined}
          initial={animated ? "initial" : undefined}
          animate={animated ? "animate" : undefined}
        />

        {/* Inner hexagon */}
        <Path
          d="M50 15 L75 30 L75 70 L50 85 L25 70 L25 30 Z"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          fill="none"
          custom={1}
          variants={animated ? pathVariants : undefined}
          initial={animated ? "initial" : undefined}
          animate={animated ? "animate" : undefined}
        />

        {/* F letter */}
        <Path
          d="M35 35 L35 65 M35 35 L45 35 M35 48 L42 48"
          stroke="#1a2332"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={2}
          variants={animated ? pathVariants : undefined}
          initial={animated ? "initial" : undefined}
          animate={animated ? "animate" : undefined}
        />

        {/* C letters */}
        <Path
          d="M55 35 Q50 35 50 40 L50 60 Q50 65 55 65"
          stroke="#4A90E2"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          custom={3}
          variants={animated ? pathVariants : undefined}
          initial={animated ? "initial" : undefined}
          animate={animated ? "animate" : undefined}
        />
        <Path
          d="M65 35 Q60 35 60 40 L60 60 Q60 65 65 65"
          stroke="#4A90E2"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          custom={4}
          variants={animated ? pathVariants : undefined}
          initial={animated ? "initial" : undefined}
          animate={animated ? "animate" : undefined}
        />

        {/* Center dot */}
        <Circle
          cx="50"
          cy="50"
          r="2"
          fill="#4A90E2"
          custom={5}
          variants={animated ? pathVariants : undefined}
          initial={animated ? "initial" : undefined}
          animate={animated ? "animate" : undefined}
        />
      </svg>
    </Container>
  );
}
