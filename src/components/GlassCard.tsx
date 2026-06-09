"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl p-6 relative group",
        hover && "hover:border-sage/20",
        className
      )}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow:
                "0 20px 40px -12px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(74, 124, 111, 0.08)",
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
    >
      {hover && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sage/[0.02] to-earth/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
