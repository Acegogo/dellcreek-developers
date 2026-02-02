import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { csrStatement } from "@/content/site";

export function HomeCSRPreview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="CSR"
            title="Environmental responsibility"
            description="Protecting ecosystems and supporting a sustainable future."
          />
          <ButtonLink href="/csr" variant="secondary">
            Read CSR
          </ButtonLink>
        </div>

        <FadeIn delay={0.06} className="mt-12">
          <Card className="p-9 md:p-12">
            <p className="text-sm leading-relaxed text-muted">{csrStatement}</p>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}

