import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function CTASection() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-fg px-8 py-14 text-bg shadow-[0_30px_90px_rgba(17,18,20,0.22)] md:px-14">
            <div className="absolute inset-0">
              <img
                src="/photos/homepage_bg_gated_community.png"
                alt="Background"
                className="h-full w-full object-cover opacity-10 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-fg/80 mix-blend-multiply" />
            </div>
            <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_10%,rgba(202,162,31,0.38),transparent_52%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.10),transparent_55%)]" />
            <div className="relative grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-bg/70">
                  Visit or call
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
                  Our offices are open six days a week.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-bg/75 md:text-base">
                  Please do not hesitate to visit us or call our office any day any time.
                </p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <ButtonLink href="/contact" variant="secondary" className="bg-bg text-fg">
                    Contact us
                  </ButtonLink>
                  <ButtonLink href="/land-for-sale" variant="ghost" className="text-bg hover:bg-white/10">
                    View land on sale
                  </ButtonLink>
                </div>
                <div className="mt-4 text-xs text-bg/70 md:hidden">
                  {site.contact.address}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

