"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BlurFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  blur?: number;
  once?: boolean;
}

export function BlurFadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  blur = 10,
  once = true,
}: BlurFadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
