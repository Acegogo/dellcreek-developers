"use client";

import { useState } from "react";
import type { Project } from "@/content/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectMediaLightbox } from "@/components/projects/ProjectMediaLightbox";

type Item =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; title: string };

export function ProjectsGrid({
  projects,
  columns = 3,
}: {
  projects: readonly Project[];
  columns?: 2 | 3;
}) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item | null>(null);

  const close = () => {
    setOpen(false);
    setItem(null);
  };

  return (
    <>
      <div className={columns === 2 ? "grid gap-6 md:grid-cols-2" : "grid gap-6 md:grid-cols-3"}>
        {projects.map((p, idx) => (
          <FadeIn key={p.name} delay={0.02 * idx}>
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
            />
          </FadeIn>
        ))}
      </div>

      <ProjectMediaLightbox open={open} onClose={close} item={item} />
    </>
  );
}

