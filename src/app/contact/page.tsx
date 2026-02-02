import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Our offices are open six days a week. Please do not hesitate to visit us or call our office any day any time."
        backgroundImageSrc="/photos/homepage_bg_modern_apartments.png"
        backgroundImageAlt="Modern Apartments"
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/photos/homepage_bg_mixed_development.png"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <Container className="relative z-10">
          <div className="grid gap-6 md:grid-cols-12">
            <FadeIn className="md:col-span-7">
              <ContactForm toEmail={site.contact.email} />
            </FadeIn>

            <FadeIn delay={0.06} className="md:col-span-5">
              <Card className="p-7">
                <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                  Details
                </div>

                <div className="mt-5 space-y-4 text-sm text-muted">
                  <div>
                    <div className="text-fg font-medium">Email</div>
                    <a
                      className="mt-1 inline-block hover:text-fg transition"
                      href={`mailto:${site.contact.email}`}
                    >
                      {site.contact.email}
                    </a>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="text-fg font-medium">Phone</div>
                    <div className="mt-1 grid gap-1">
                      {site.contact.phones.map((p) => (
                        <a
                          key={p}
                          className="inline-block hover:text-fg transition"
                          href={`tel:${p.replaceAll(" ", "")}`}
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="text-fg font-medium">Location</div>
                    <div className="mt-1">{site.contact.address}</div>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl bg-fg/5 p-6 ring-1 ring-border">
                  <div className="text-sm font-medium text-fg">
                    For faster help
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Tell us which project you’re interested in (Peridian Court,
                    Estateview, Towncreek Estate, Karen Hills, or any of the
                    listed locations) and we’ll share the relevant details.
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}

