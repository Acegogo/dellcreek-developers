"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { ongoingProjects } from "@/content/site";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectMediaLightbox } from "@/components/projects/ProjectMediaLightbox";
import { useState } from "react";

function StatusPill({ status }: { status: string }) {
  const styles =
    status === "Ongoing"
      ? "bg-accent/12 text-accent-2 ring-accent/20"
      : "bg-fg/6 text-muted ring-fg/10";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs ring-1 ${styles}`}
    >
      {status}
    </span>
  );
}

export function FeaturedProjects() {
  const featured = ongoingProjects.filter((p) =>
    ["Peridian Court", "Estateview", "Towncreek Estate", "Mananja"].includes(p.name),
  );

  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; title: string }
    | null
  >(null);

  const close = () => {
    setOpen(false);
    setItem(null);
  };

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Ongoing projects"
            description="A selection of active projects you can explore today."
          />
          <div className="flex gap-3">
            <ButtonLink href="/projects" variant="secondary">
              View all projects
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((p, idx) => (
            <FadeIn key={p.name} delay={0.04 * idx}>
              <div className="h-full">
                <ProjectCard
                  project={p}
                  onOpenImage={(src, alt) => {
                    setItem({ type: "image", src, alt });
                    setOpen(true);
                  }}
                  onOpenVideo={(src, title) => {
                    setItem({ type: "video", src, title });
                    setOpen(true);
                  }}
                  ctaLabel="Request details →"
                  ctaHref={`https://wa.me/254783731111?text=${encodeURIComponent(
                    `Hi, I am interested in ${p.name}. Please share more details.`,
                  )}`}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ProjectMediaLightbox open={open} onClose={close} item={item} />
    </section >
  );
}

