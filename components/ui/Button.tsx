"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, href, children, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    const baseStyles = "inline-flex items-center justify-center rounded-brand font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group";

    const variants = {
      primary: "bg-gradient-to-r from-azure to-blue-600 text-white shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-azure",
      ghost: "bg-transparent text-white border-2 border-white hover:bg-white/10 backdrop-blur-sm",
      outline: "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    const MotionComponent = motion.button;
    const MotionLink = motion.a;

    const motionProps = {
      whileHover: prefersReducedMotion ? {} : {
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" }
      },
      whileTap: prefersReducedMotion ? {} : {
        scale: 0.98,
        y: 0,
        transition: { duration: 0.1 }
      },
    };

    const rippleEffect = (
      <span className="absolute inset-0 overflow-hidden rounded-brand">
        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      </span>
    );

    if (href) {
      return (
        <MotionLink
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...motionProps}
          {...(props as any)}
        >
          {rippleEffect}
          <span className="relative z-10">{children}</span>
        </MotionLink>
      );
    }

    return (
      <MotionComponent
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref as any}
        {...motionProps}
        {...props}
      >
        {rippleEffect}
        <span className="relative z-10">{children}</span>
      </MotionComponent>
    );
  }
);

Button.displayName = "Button";

export { Button };
