import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { primePlotAreas } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";

export function PrimeLocations() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Prime locations"
            title="Plots across key areas in Kenya"
            description="We have prime plots in several locations — explore what’s available and reach out for details."
          />
          <ButtonLink href="/land-for-sale" variant="secondary">
            View land for sale
          </ButtonLink>
        </div>

        <FadeIn delay={0.06} className="mt-12">
          <div className="flex flex-wrap gap-3">
            {primePlotAreas.map((loc) => (
              <span
                key={loc}
                className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm text-muted ring-1 ring-border"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {loc}
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

