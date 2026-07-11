"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContent } from "@/components/ContentProvider";
import { Feather, Users, Sparkles, Ban } from "lucide-react";

const ICONS = [Feather, Users, Sparkles, Ban];

export function TrustBadgesBand() {
  const reduce = useReducedMotion();
  const { HERO } = useContent();

  return (
    <section className="relative bg-bone py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 lg:divide-x lg:divide-border">
          {HERO.badges.map((badge, i) => {
            const Icon = ICONS[i] ?? Feather;
            return (
              <motion.div
                key={badge}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 lg:justify-center lg:px-4"
              >
                <span className="grid place-items-center w-9 h-9 rounded-full bg-honey/10 shrink-0">
                  <Icon className="w-[18px] h-[18px] text-honey" strokeWidth={1.75} />
                </span>
                <span className="text-forest/80 text-sm font-medium leading-tight">
                  {badge}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
