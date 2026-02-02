"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatNumber(n: number, useGrouping = true) {
  return new Intl.NumberFormat("en-KE", { useGrouping }).format(n);
}

function CountUp({
  end,
  suffix,
  durationMs = 1200,
  useGrouping = true,
}: {
  end: number;
  suffix?: string;
  durationMs?: number;
  useGrouping?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { amount: 0.45, once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(end);
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = easeOutCubic(t);
      setValue(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, end, inView, reduce]);

  return (
    <span ref={ref}>
      {formatNumber(value, useGrouping)}
      {suffix ?? ""}
    </span>
  );
}

export function TrackRecord() {
  // User-provided headline metrics
  const stats = useMemo(
    () =>
      [
        { label: "Since", end: 2015, suffix: "", useGrouping: false },
        { label: "Projects", end: 110, suffix: "+" },
        { label: "Happy clients", end: 20000, suffix: "+" },
        { label: "Title deeds issued", end: 15000, suffix: "+" },
      ] as const,
    [],
  );

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/photos/project_road_repair_final.png"
          alt="Background"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <Container>
        <div className="mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-accent">
            Track record
          </h2>
          <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-fg md:text-5xl">
            A quick snapshot
          </h3>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Built on trust, delivery, and long-term value.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <FadeIn key={s.label} delay={0.04 * idx}>
              <div className="rounded-3xl bg-white/40 p-8 ring-1 ring-fg/5 backdrop-blur-md transition hover:bg-white/60">
                <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
                  {s.label}
                </div>
                <div className="mt-4 font-display text-5xl tracking-tight text-fg">
                  <CountUp
                    end={s.end}
                    suffix={s.suffix}
                    // @ts-ignore - straightforward passed prop
                    useGrouping={s.useGrouping}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

