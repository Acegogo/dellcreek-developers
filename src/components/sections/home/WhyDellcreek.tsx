import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";

export function WhyDellcreek() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/photos/homepage_bg_modern_apartments.png"
          alt="Background"
          className="h-full w-full object-cover opacity-15"
        />
      </div>
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Why Dellcreek"
          title="Clear guidance. Transparent processes."
          description="We help you make informed decisions with transparency during and after sales, and a team you can reach when you need support."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          <FadeIn className="md:col-span-5">
            <Card className="h-full p-8">
              <div className="font-display text-2xl tracking-tight text-fg">
                What we focus on
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>Creativity & Incorporation — virtual tour experiential marketing</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>Professionalism — experience and expertise in real estate specialties</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>Customer satisfaction — using surveys to understand customer happiness</span>
                </li>
              </ul>
            </Card>
          </FadeIn>

          <FadeIn delay={0.06} className="md:col-span-7">
            <Card className="h-full p-8">
              <div className="font-display text-2xl tracking-tight text-fg">
                A simple experience, end-to-end
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Talk to us",
                    body: "Visit our office or call — we’re open six days a week.",
                  },
                  {
                    title: "Explore options",
                    body: "Compare ongoing projects and land on sale across locations.",
                  },
                  {
                    title: "Get clarity",
                    body: "We guide you through details so you can decide confidently.",
                  },
                  {
                    title: "After-sales support",
                    body: "We remain available during and after the purchase process.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-fg/5 p-6 ring-1 ring-border"
                  >
                    <div className="text-sm font-medium text-fg">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

