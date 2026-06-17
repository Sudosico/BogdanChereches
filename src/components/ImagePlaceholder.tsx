"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Leaf, ImagePlus } from "lucide-react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

export function ImagePlaceholder({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  priority = false,
  quality,
}: ImagePlaceholderProps) {
  const isPlaceholder = src.includes("placeholder");
  // The portrait must be the real Bogdan — never a generated face. Show a clean
  // reserved slot only while his photo is still a placeholder; the real file
  // (/images/bogdan.jpg) renders as normal photography below.
  const isPersonSlot = src.includes("bogdan") && src.includes("placeholder");

  // Reserved slot for a real person photo: clean, intentional empty frame.
  if (isPersonSlot) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-cream border-2 border-dashed border-forest/15",
          fill ? "absolute inset-0" : "",
          className
        )}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={`${alt} (spațiu rezervat pentru fotografie)`}
      >
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative flex flex-col items-center gap-3 text-forest/35 px-6 text-center">
          <span className="grid place-items-center w-14 h-14 rounded-full bg-forest/5">
            <ImagePlus className="w-6 h-6" strokeWidth={1.5} />
          </span>
          <span className="text-sm font-semibold text-forest/55">{alt}</span>
          <span className="text-[11px] tracking-wide text-forest/40">
            Spațiu rezervat pentru o fotografie reală
          </span>
        </div>
      </div>
    );
  }

  // Branded placeholder — a composed forest panel, never a grey box.
  if (isPlaceholder) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-forest",
          fill ? "absolute inset-0" : "",
          className
        )}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_10%,rgba(190,138,62,0.18),transparent_55%)]" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 organic-blob bg-forest-soft/40 blur-2xl" />
        <div className="absolute inset-0 noise-texture opacity-40" />
        <div className="relative flex flex-col items-center gap-3 text-bone/30">
          <Leaf className="w-9 h-9" strokeWidth={1.25} />
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  // Real photography — light brand treatment so warmth shows but stays cohesive.
  const wrapperClass = cn(
    "img-forest-tint relative overflow-hidden",
    fill ? "absolute inset-0" : "inline-block"
  );

  return fill ? (
    <div className={wrapperClass}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("img-forest object-cover", className)}
        priority={priority}
        quality={quality}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
      />
    </div>
  ) : (
    <div className={wrapperClass} style={{ width, height }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("img-forest", className)}
        priority={priority}
        quality={quality}
      />
    </div>
  );
}
