import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  /**
   * Full-bleed background layer rendered behind the content, spanning the
   * entire section (not clamped to the max-w-7xl content column). Use for
   * section-wide gradients, glows or textures.
   */
  bgLayer?: ReactNode;
}

export function SectionWrapper({
  children,
  className,
  id,
  dark = false,
  bgLayer,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        dark ? "bg-navy text-white" : "bg-ivory",
        className
      )}
    >
      {bgLayer}
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
