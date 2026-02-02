"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import type { Project } from "@/content/site";
import { cn } from "@/components/utils/cn";
import { ButtonLink } from "@/components/ui/Button";

export function ProjectCard({
  project,
  className,
  ctaHref,
  ctaLabel,
  onOpenImage,
  onOpenVideo,
}: {
  project: Project;
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
  onOpenImage?: (src: string, alt: string) => void;
  onOpenVideo?: (src: string, title: string) => void;
}) {
  const reduce = useReducedMotion();

  const cover = useMemo(() => project.media?.images?.[0] ?? null, [project.media]);
  const hasGallery = !!project.media?.images?.length;
  const hasVideo = !!project.media?.videos?.length;

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ duration: reduce ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative z-0 h-full overflow-hidden rounded-3xl bg-card ring-1 ring-border shadow-[0_22px_70px_rgba(17,18,20,0.08)] will-change-transform",
        "hover:z-10",
        className,
      )}
    >
      <div className="relative">
        {cover ? (
          <button
            type="button"
            onClick={() => onOpenImage?.(cover, project.name)}
            className="block w-full text-left"
            aria-label={`View ${project.name} image`}
          >
            <motion.img
              src={cover}
              alt={project.name}
              loading="lazy"
              decoding="async"
              className="h-44 w-full object-cover"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>
        ) : (
          <div className="h-44 w-full bg-[radial-gradient(circle_at_30%_20%,rgba(202,162,31,0.18),transparent_55%),linear-gradient(to_bottom,rgba(17,18,20,0.05),rgba(17,18,20,0.02))]" />
        )}

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-bg/85 px-3 py-1 text-xs text-muted ring-1 ring-border backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {project.status}
        </div>

        {(hasGallery || hasVideo) && (
          <div className="absolute right-4 top-4 flex gap-2">
            {hasGallery ? (
              <div className="rounded-full bg-bg/85 px-3 py-1 text-xs text-muted ring-1 ring-border backdrop-blur">
                Gallery
              </div>
            ) : null}
            {hasVideo ? (
              <button
                type="button"
                onClick={() =>
                  project.media?.videos?.[0]
                    ? onOpenVideo?.(project.media.videos[0], project.name)
                    : null
                }
                className="rounded-full bg-bg/85 px-3 py-1 text-xs text-muted ring-1 ring-border backdrop-blur hover:text-fg transition"
              >
                Video
              </button>
            ) : null}
          </div>
        )}
      </div>

      <div className="flex h-full flex-col p-7">
        <div className="font-display text-xl tracking-tight text-fg">
          {project.name}
        </div>

        {project.locationSummary ? (
          <div className="mt-2 text-sm text-muted">{project.locationSummary}</div>
        ) : null}

        {project.pricing?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.pricing.map((line) => (
              <span
                key={line}
                className="inline-flex items-center rounded-full bg-fg/5 px-3 py-1 text-xs text-muted ring-1 ring-border"
              >
                {line}
              </span>
            ))}
          </div>
        ) : null}

        {project.details?.length ? (
          <ul className="mt-5 space-y-2 text-sm text-muted">
            {project.details.slice(0, 3).map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {ctaHref && ctaLabel ? (
          <div className="mt-7 pt-2">
            <ButtonLink href={ctaHref} variant="secondary" className="w-full">
              {ctaLabel}
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

