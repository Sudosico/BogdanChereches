"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  // The first review is featured in the big card; the rest scroll in an
  // auto-advancing strip that the user can also drag/swipe. After any manual
  // interaction it rests briefly, then resumes drifting slowly. Duplicated
  // once for a seamless loop.
  const featured = TESTIMONIALS.reviews[0];
  const base = TESTIMONIALS.reviews.slice(1);
  const trackReviews = [...base, ...base];
  const count = base.length;

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const SPEED = 0.35; // px per frame -> gentle drift
    const RESUME_DELAY = 1500; // ms to wait after the user interacts

    let raf = 0;
    let pausedUntil = 0;
    let period = 0;
    let pos = el.scrollLeft; // float accumulator (scrollLeft itself rounds to int)
    let wasActive = false;

    const measure = () => {
      const second = el.children.item(count) as HTMLElement | null;
      period = second ? second.offsetLeft : el.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);

    const bump = () => {
      pausedUntil = performance.now() + RESUME_DELAY;
    };

    const step = (now: number) => {
      const active = now >= pausedUntil && period > 0;
      if (active) {
        // Re-sync the float position to the real scroll offset whenever we
        // resume (after a pause or a manual drag/scroll) so it never jumps.
        if (!wasActive) pos = el.scrollLeft;
        pos += SPEED;
        if (pos >= period) pos -= period;
        el.scrollLeft = pos;
      }
      wasActive = active;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    // Pause briefly whenever the user scrolls the strip (wheel / touch). We do
    // NOT listen to the "scroll" event, since our own programmatic scrolling
    // fires it and would pause the loop forever.
    const onWheel = () => bump();
    const onTouch = () => bump();
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", onTouch, { passive: true });
    el.addEventListener("touchmove", onTouch, { passive: true });

    // Mouse drag-to-scroll (touch uses the browser's native horizontal scroll).
    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.style.cursor = "grabbing";
      bump();
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      e.preventDefault();
      el.scrollLeft = startScroll - (e.clientX - startX);
      bump();
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      el.style.cursor = "grab";
      bump();
    };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouch);
      el.removeEventListener("touchmove", onTouch);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [count]);

  return (
    <SectionWrapper className="bg-ivory-dark/30 overflow-visible">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
        <ScrollReveal className="lg:col-span-5">
          <span className="text-sage text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
            Testimoniale
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-navy leading-[1.1] mb-4">
            {TESTIMONIALS.title}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {TESTIMONIALS.subtitle}
          </p>

          {/* Aggregate rating */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-earth text-earth" />
              ))}
            </div>
            <span className="text-navy font-semibold">5.0</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span className="text-muted-foreground text-sm">
              {TESTIMONIALS.reviews.length} recenzii
            </span>
          </div>
        </ScrollReveal>

        {/* Featured review — large card */}
        <ScrollReveal className="lg:col-span-7" direction="right">
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-[8rem] font-heading font-bold text-sage/[0.05] leading-none select-none pointer-events-none">
              &ldquo;
            </div>
            <div className="bento-card rounded-3xl p-8 md:p-10 relative">
              <p className="text-navy text-lg md:text-xl leading-relaxed mb-8 font-medium">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage/20 to-earth/20 flex items-center justify-center text-sage font-bold text-lg">
                  {featured.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy">{featured.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {featured.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Auto-scrolling + manually draggable testimonial strip */}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto overscroll-x-contain cursor-grab select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {trackReviews.map((review, i) => (
            <motion.div
              key={`${review.name}-${i}`}
              className="bento-card rounded-2xl p-6 w-[340px] shrink-0"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-earth text-earth" />
                ))}
              </div>
              <p className="text-navy/80 leading-relaxed mb-5 text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-9 h-9 rounded-full bg-sage/10 flex items-center justify-center text-sage font-semibold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">
                    {review.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
