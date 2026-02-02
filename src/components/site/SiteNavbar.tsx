"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/content/site";
import { cn } from "@/components/utils/cn";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/site/Logo";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "relative rounded-full px-3 py-2 text-sm transition",
              active
                ? "text-fg"
                : "text-muted hover:text-fg hover:bg-fg/5",
            )}
          >
            {item.label}
            {active ? (
              <span className="pointer-events-none absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteNavbar() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const last = useMemo(() => ({ y: 0 }), []);
  useMotionValueEvent(scrollY, "change", (y) => {
    const dy = y - last.y;
    last.y = y;

    setCompact(y > 12);

    if (reduce) return;
    if (open) return;
    if (y < 80) return setHidden(false);

    // Subtle hide on scroll down, reveal on scroll up
    if (dy > 8) setHidden(true);
    if (dy < -8) setHidden(false);
  });

  return (
    <motion.header
      initial={false}
      animate={
        reduce
          ? { y: 0 }
          : { y: hidden ? -80 : 0 }
      }
      transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "supports-[backdrop-filter]:backdrop-blur-xl",
      )}
    >
      <div
        className={cn(
          "border-b border-border bg-bg/80",
          compact ? "shadow-[0_10px_40px_rgba(17,18,20,0.08)]" : "shadow-none",
        )}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between",
              compact ? "py-3" : "py-4",
            )}
          >
            <Logo />

            <div className="hidden md:block">
              <NavLinks />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="rounded-full bg-card px-4 py-2 text-sm font-medium text-fg ring-1 ring-border"
              >
                {open ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </Container>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, height: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: reduce ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border bg-bg/95"
            >
              <Container className="py-4">
                <div className="flex flex-col gap-2">
                  <NavLinks onNavigate={() => setOpen(false)} />
                  <div className="pt-2 text-xs text-muted">
                    Krishna Centre • Westlands
                  </div>
                </div>
              </Container>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

