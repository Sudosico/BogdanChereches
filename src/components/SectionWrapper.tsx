import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  dark = false,
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
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
