import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { ongoingProjects } from "@/content/site";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export function HomeLandPreview() {
  const landPreview = ongoingProjects.filter((p) =>
    ["Peridian Court", "Estateview", "Towncreek Estate"].includes(p.name),
  );

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Land on sale"
            title="Plots currently on offer"
            description="Explore a few of our current land opportunities."
          />
          <div className="flex gap-3">
            <ButtonLink href="/land-for-sale" variant="secondary">
              View all land
            </ButtonLink>
          </div>
        </div>

        <FadeIn delay={0.06} className="mt-12">
          <ProjectsGrid projects={landPreview} columns={3} />
        </FadeIn>
      </Container>
    </section>
  );
}

