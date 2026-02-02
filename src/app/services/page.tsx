import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { MediaMosaic } from "@/components/sections/media/MediaMosaic";
import {
  futurePlan,
  productsOffered,
  services,
  targetMarket,
} from "@/content/site";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="What we do, who we serve, and the kinds of projects we’re building."
        backgroundImageSrc="/towncreek/DJI_0209.jpg"
        backgroundImageAlt="Towncreek Estate"
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/photos/homepage_bg_modern_apartments.png"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <Container className="relative z-10">
          <MediaMosaic className="mb-10" withVideos />

          <div className="grid gap-6 md:grid-cols-12">
            <FadeIn className="md:col-span-5">
              <Card className="p-7">
                <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                  Products offered
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted">
                  {productsOffered.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>

            <FadeIn delay={0.06} className="md:col-span-7">
              <Card className="p-7">
                <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                  Target market
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted">
                  {targetMarket.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s, idx) => (
              <FadeIn key={s.title} delay={0.04 * idx}>
                <Card className="h-full p-7">
                  <div className="font-display text-xl tracking-tight text-fg">
                    {s.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.12} className="mt-14">
            <Card className="p-9 md:p-12">
              <div className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className="md:col-span-7">
                  <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                    Future plan
                  </div>
                  <div className="mt-4 font-display text-3xl tracking-tight text-fg">
                    What we aim to build next.
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Our plans include expanding land sales and growing into
                    apartments, petrol stations, and warehouses.
                  </p>
                </div>
                <div className="md:col-span-5">
                  <div className="rounded-3xl bg-fg/5 p-7 ring-1 ring-border">
                    <ul className="space-y-3 text-sm text-muted">
                      {futurePlan.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

