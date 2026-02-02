import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { csrStatement } from "@/content/site";

export const metadata = {
  title: "CSR",
};

export default function CSRPage() {
  return (
    <>
      <PageHeader
        title="CSR"
        description="Our commitment to sustainability and responsible stewardship."
        backgroundImageSrc="/photos/homepage_bg_gated_community.png"
        backgroundImageAlt="CSR Background"
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/photos/maraigushu_naivasha_aerial.png"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <Container className="relative z-10">
          <FadeIn>
            <Card className="p-9 md:p-12">
              <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                CSR
              </div>
              <div className="mt-5 font-display text-3xl tracking-tight text-fg">
                {csrStatement}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  "Protect, restore and promote sustainable use of terrestrial ecosystems",
                  "Sustainably manage forests",
                  "Combat desertification",
                  "Halt and reverse land degradation and halt biodiversity loss",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl bg-fg/5 p-6 ring-1 ring-border"
                  >
                    <div className="flex gap-3 text-sm text-muted">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

