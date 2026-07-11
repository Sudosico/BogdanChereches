"use client";

import { useContent } from "@/components/ContentProvider";
import { cn } from "@/lib/utils";

interface ReassuranceStripProps {
  className?: string;
  tone?: "light" | "dark";
  align?: "start" | "center";
}

export function ReassuranceStrip({
  className,
  tone = "light",
  align = "start",
}: ReassuranceStripProps) {
  const { REASSURANCE } = useContent();
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2",
        align === "center" ? "justify-center" : "justify-start",
        className
      )}
    >
      {REASSURANCE.map((item, i) => (
        <li key={item} className="flex items-center gap-2">
          {i > 0 && (
            <span
              className={cn(
                "w-1 h-1 rounded-full",
                tone === "dark" ? "bg-bone/30" : "bg-forest/25"
              )}
            />
          )}
          <span
            className={cn(
              "text-xs sm:text-sm font-medium",
              tone === "dark" ? "text-bone/65" : "text-forest/65"
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
