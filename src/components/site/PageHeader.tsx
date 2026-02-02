import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function PageHeader({
  title,
  description,
  backgroundImageSrc,
  backgroundImageAlt,
}: {
  title: string;
  description?: string;
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-grid">
      {backgroundImageSrc ? (
        <div className="absolute inset-0">
          <img
            src={backgroundImageSrc}
            alt={backgroundImageAlt ?? title}
            className="h-full w-full object-cover opacity-25"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/75 to-bg" />
          <div className="absolute inset-0 bg-hero-glow opacity-60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-hero-glow opacity-40" />
      )}

      <Container className="relative py-16 md:py-20">
        <FadeIn>
          <h1 className="font-display text-4xl tracking-tight text-fg md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}

