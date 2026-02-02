import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/components/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg shadow-[0_12px_48px_rgba(17,18,20,0.16)] hover:translate-y-[-1px] hover:shadow-[0_18px_60px_rgba(17,18,20,0.18)] " +
    "after:ml-1 after:inline-block after:h-2 after:w-2 after:rounded-full after:bg-accent after:transition-transform hover:after:scale-110",
  secondary:
    "bg-card text-fg ring-1 ring-border hover:bg-bg hover:translate-y-[-1px] hover:ring-accent/35",
  ghost: "text-fg hover:bg-fg/5 hover:text-fg",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}

