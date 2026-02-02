import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { ongoingProjects } from "@/content/site";
import { LandForSaleGrid } from "@/components/sections/land/LandForSaleGrid";

export const metadata = {
  title: "Land for Sale",
};

export default function LandForSalePage() {
  return (
    <>
      <PageHeader
        title="Land for Sale"
        description="Browse available land across our ongoing projects and locations."
        backgroundImageSrc="/estateview/DJI_0175.jpg"
        backgroundImageAlt="Estateview"
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/photos/kiritiri_land_aerial_1.png"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <Container className="relative z-10">
          <LandForSaleGrid projects={ongoingProjects} />

          <FadeIn delay={0.12} className="mt-14">
            <div className="rounded-3xl bg-card p-8 ring-1 ring-border md:flex md:items-center md:justify-between">
              <div>
                <div className="font-display text-2xl tracking-tight text-fg">
                  Want a guided site visit?
                </div>
                <p className="mt-2 text-sm text-muted">
                  Please contact our office to visit any day any time.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <ButtonLink href="/contact">Schedule a visit</ButtonLink>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

