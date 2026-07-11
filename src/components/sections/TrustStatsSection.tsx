"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "@/components/ContentProvider";

function AnimatedStat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  // Start at the final value so the real number is in the SSR/no-JS DOM (and
  // survives an IntersectionObserver misfire). When scrolled into view the
  // effect resets to 0 and animates up, off-screen, so there is no flash.
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const steps = 40;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        const eased = 1 - Math.pow(1 - step / steps, 3);
        setCount(Math.round(eased * value));
        if (step >= steps) {
          setCount(value);
          clearInterval(interval);
        }
      }, 1500 / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="relative text-center px-4 py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
        <span className="tabular-nums text-navy">{count}</span>
        <span className="text-sage">{suffix}</span>
      </div>
      <div className="w-8 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent mx-auto mb-3" />
      <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em]">
        {label}
      </p>
    </motion.div>
  );
}

export function TrustStatsSection() {
  const { TRUST_STATS } = useContent();
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Decorative large number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 decorative-number font-heading select-none pointer-events-none">
        Bowen
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {TRUST_STATS.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
