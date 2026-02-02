"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/content/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectMediaLightbox } from "@/components/projects/ProjectMediaLightbox";

type LightboxItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; title: string };

export function LandForSaleGrid({ projects }: { projects: readonly Project[] }) {
  const list = useMemo(() => projects, [projects]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<LightboxItem | null>(null);

  const close = () => {
    setOpen(false);
    setItem(null);
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {list.map((p, idx) => (
          <FadeIn key={p.name} delay={0.04 * idx}>
            {/* Keep each grid cell isolated so hover motion can't overlap neighbors */}
            <div className="relative isolate h-full">
              <ProjectCard
                project={p}
                ctaHref="/contact"
                ctaLabel="Request details"
                onOpenImage={(src, alt) => {
                  setItem({ type: "image", src, alt });
                  setOpen(true);
                }}
                onOpenVideo={(src, title) => {
                  setItem({ type: "video", src, title });
                  setOpen(true);
                }}
              />
            </div>
          </FadeIn>
        ))}
      </div>

      <ProjectMediaLightbox open={open} onClose={close} item={item} />
    </>
  );
}

