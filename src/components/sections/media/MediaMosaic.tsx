"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectMediaLightbox } from "@/components/projects/ProjectMediaLightbox";
import { cn } from "@/components/utils/cn";

const tiles = [
  { src: "/towncreek/DJI_0193.jpg", alt: "Towncreek Estate" },
  { src: "/estateview/DJI_0166.jpg", alt: "Estateview" },
  { src: "/peridian/DJI_0150.jpg", alt: "Peridian Court" },
  { src: "/mananja/5773629566152199048.jpg", alt: "Mananja" },
  { src: "/towncreek/DJI_0209.jpg", alt: "Towncreek Estate" },
  { src: "/estateview/DJI_0177.jpg", alt: "Estateview" },
] as const;

type Item =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; title: string };

export function MediaMosaic({
  className,
  withVideos = false,
}: {
  className?: string;
  withVideos?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item | null>(null);

  const close = () => {
    setOpen(false);
    setItem(null);
  };

  const videoButtons = useMemo(() => {
    if (!withVideos) return [];
    return [
      { src: "/Videos/mananja machakos.mp4", title: "Mananja" },
      { src: "/Videos/nelions ridge, naromoru.mp4", title: "Narumoru, Laikipia" },
    ] as const;
  }, [withVideos]);

  return (
    <>
      <FadeIn className={className}>
        <div className="grid gap-3 md:grid-cols-12">
          {tiles.map((t, idx) => (
            <button
              key={`${t.src}-${idx}`}
              type="button"
              onClick={() => {
                setItem({ type: "image", src: t.src, alt: t.alt });
                setOpen(true);
              }}
              className={cn(
                "group relative overflow-hidden rounded-3xl ring-1 ring-border",
                idx === 0 ? "md:col-span-6 md:row-span-2" : "md:col-span-3",
                idx === 3 ? "md:col-span-6" : "",
              )}
              aria-label={`Open ${t.alt}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                className={cn(
                  "h-full w-full object-cover transition duration-500",
                  "group-hover:scale-[1.03]",
                )}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-70" />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-bg/85 px-3 py-1 text-xs text-muted ring-1 ring-border backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t.alt}
              </div>
            </button>
          ))}

          {videoButtons.length ? (
            <div className="md:col-span-12 mt-3 flex flex-wrap gap-2">
              {videoButtons.map((v) => (
                <button
                  key={v.src}
                  type="button"
                  onClick={() => {
                    setItem({ type: "video", src: v.src, title: v.title });
                    setOpen(true);
                  }}
                  className="rounded-full bg-card px-4 py-2 text-xs text-muted ring-1 ring-border hover:text-fg hover:bg-bg transition"
                >
                  Watch video: {v.title}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </FadeIn>

      <ProjectMediaLightbox open={open} onClose={close} item={item} />
    </>
  );
}

