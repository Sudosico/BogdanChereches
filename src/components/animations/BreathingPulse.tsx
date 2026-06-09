"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BreathingPulseProps {
  children?: ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export function BreathingPulse({
  children,
  className,
  scale = 1.03,
  duration = 4,
}: BreathingPulseProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, scale, 1],
        opacity: [0.85, 1, 0.85],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
