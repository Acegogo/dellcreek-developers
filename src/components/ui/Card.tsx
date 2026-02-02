import type { ReactNode } from "react";
import { cn } from "@/components/utils/cn";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-card ring-1 ring-border shadow-[0_22px_70px_rgba(17,18,20,0.08)] transition " +
          "hover:shadow-[0_28px_90px_rgba(17,18,20,0.10)] hover:ring-accent/35",
        className,
      )}
    >
      {children}
    </div>
  );
}

