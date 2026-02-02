"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="h-full w-full"
        >
          <img
            src="/photos/homepage_bg_luxury_villas.png"
            alt="Background"
            className="h-full w-full object-cover opacity-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/80 to-bg" />
      </div>

      <div className="absolute -top-24 left-1/2 h-[540px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(202,162,31,0.22),transparent_62%)]" />

      <Container className="relative py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs text-muted ring-1 ring-border">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {site.tagline} • {site.location}
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-fg md:text-6xl">
                Where Real Estate gets Real.
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Dellcreek Developers Limited provides more than what you expect
                from a real estate company. We are transparent in all the
                processes during and after sales by helping you make informed
                decisions.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/land-for-sale">Explore land for sale</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Talk to our team
                </ButtonLink>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: reduce ? 0 : 0.12,
              }}
              className="rounded-3xl bg-card p-6 ring-1 ring-border shadow-[0_26px_80px_rgba(17,18,20,0.10)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                    Featured media
                  </div>
                  <div className="mt-3 font-display text-2xl tracking-tight text-fg">
                    Towncreek Estate (Thika)
                  </div>
                </div>
                <div className="rounded-2xl bg-fg/5 px-3 py-2 text-xs text-muted">
                  Motion-safe
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <img
                  src="/towncreek/DJI_0193.jpg"
                  alt="Towncreek Estate"
                  className="h-28 w-full rounded-2xl object-cover ring-1 ring-border"
                  loading="lazy"
                />
                <img
                  src="/towncreek/DJI_0204.jpg"
                  alt="Towncreek Estate"
                  className="h-28 w-full rounded-2xl object-cover ring-1 ring-border"
                  loading="lazy"
                />
                <img
                  src="/estateview/DJI_0160.jpg"
                  alt="Estateview"
                  className="h-28 w-full rounded-2xl object-cover ring-1 ring-border"
                  loading="lazy"
                />
                <img
                  src="/peridian/DJI_0137.jpg"
                  alt="Peridian Court"
                  className="h-28 w-full rounded-2xl object-cover ring-1 ring-border"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

