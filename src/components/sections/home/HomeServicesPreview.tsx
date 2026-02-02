import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { services } from "@/content/site";

export function HomeServicesPreview() {
  const top = services.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <img
          src="/photos/maraigushu_naivasha_aerial.png"
          alt="Background"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg" />
      </div>

      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Capabilities and offerings"
            description="The ways we help clients buy, build, and invest with confidence."
          />
          <ButtonLink href="/services" variant="secondary">
            View services
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {top.map((s, idx) => (
            <FadeIn key={s.title} delay={0.04 * idx}>
              <Card className="h-full p-7 transition-transform hover:-translate-y-1">
                <div className="font-display text-xl tracking-tight text-fg">
                  {s.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

