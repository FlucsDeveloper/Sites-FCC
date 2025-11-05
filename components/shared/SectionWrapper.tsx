import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function SectionWrapper({
  children,
  className,
  container = true,
  padding = "lg",
  id,
  ...props
}: SectionWrapperProps) {
  const paddingStyles = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  return (
    <section
      id={id}
      className={cn(paddingStyles[padding], className)}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 max-w-7xl">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
