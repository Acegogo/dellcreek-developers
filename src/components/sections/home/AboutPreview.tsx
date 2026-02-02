import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { primePlotAreas } from "@/content/site";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Buying, selling, and building — across Kenya."
          description="We are engaged in buying and selling of properties, construction and selling of apartments to our consumers all around the country."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          <FadeIn className="md:col-span-7">
            <Card className="h-full p-8">
              <div className="font-display text-2xl tracking-tight text-fg">
                Prime plots in key locations.
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                We have prime plots in{" "}
                {primePlotAreas.slice(0, -1).join(", ")}, and {primePlotAreas.at(-1)}
                {" "}and across the country.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/about" variant="secondary">
                  Learn more
                </ButtonLink>
                <ButtonLink href="/services" variant="ghost">
                  View services
                </ButtonLink>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.06} className="md:col-span-5">
            <Card className="p-8">
              <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                Our focus
              </div>
              <div className="mt-4 space-y-4 text-sm text-muted">
                <div>
                  <div className="font-medium text-fg">Creativity & Incorporation</div>
                  <div className="mt-1">Virtual tour experiential marketing.</div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-medium text-fg">Professionalism</div>
                  <div className="mt-1">
                    Acknowledging experience and expertise in various real estate specialties.
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-medium text-fg">Customer satisfaction</div>
                  <div className="mt-1">
                    Customer satisfaction surveys as a standard approach for collecting data on customer happiness.
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

