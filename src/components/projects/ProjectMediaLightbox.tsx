"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; title: string };

export function ProjectMediaLightbox({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: MediaItem | null;
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (!open) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && item ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-black/70"
          />

          <motion.div
            initial={reduce ? { scale: 1 } : { scale: 0.98, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={reduce ? { scale: 1 } : { scale: 0.98, y: 10 }}
            transition={{ duration: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[61] w-full max-w-5xl overflow-hidden rounded-3xl bg-bg ring-1 ring-border"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="text-sm font-medium text-fg">
                {item.type === "image" ? item.alt : item.title}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full px-3 py-2 text-sm text-muted hover:text-fg hover:bg-fg/5 transition"
              >
                Close
              </button>
            </div>

            <div className="bg-black">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-[78vh] w-full object-contain"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  playsInline
                  className="max-h-[78vh] w-full"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

