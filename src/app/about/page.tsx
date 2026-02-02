import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { mission, vision } from "@/content/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Dellcreek"
        description="We are engaged in the Real Estate business of buying and selling of properties, construction and selling of apartments to our consumers all around the country."
        backgroundImageSrc="/towncreek/DJI_0194.jpg"
        backgroundImageAlt="Towncreek Estate"
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/photos/homepage_bg_gated_community.png"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Why choose us"
            title="Transparency during and after sales."
            description="We are transparent in all the processes during and after sales by helping you make informed decisions."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Real estate",
                body: "Buying and selling of properties, construction and selling of apartments.",
              },
              {
                title: "Capabilities",
                body: "Real Estate Development and Petrol Station Specialists.",
              },
              {
                title: "Availability",
                body: "Our offices are open six days a week. Please do not hesitate to visit us or call our office any day any time.",
              },
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={0.04 * idx}>
                <Card className="p-7">
                  <div className="font-display text-xl tracking-tight text-fg">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <FadeIn>
            <Card className="p-9 md:p-12">
              <div className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className="md:col-span-7">
                  <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                    Vision
                  </div>
                  <div className="mt-4 font-display text-3xl tracking-tight text-fg">
                    {vision}
                  </div>
                  <div className="mt-8 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                    Mission
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {mission}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <div className="rounded-3xl bg-fg/5 p-7 ring-1 ring-border">
                    <div className="text-sm font-medium text-fg">
                      Products offered
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-muted">
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        Land
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        Houses
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        Petrol stations
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        Warehouses
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

