"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxImage({
  src,
  alt,
  className,
  strength = 18,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <div ref={ref} className={className}>
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={reduce ? undefined : { y }}
        loading="lazy"
      />
    </div>
  );
}

