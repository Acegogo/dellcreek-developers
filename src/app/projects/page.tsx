import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { MediaMosaic } from "@/components/sections/media/MediaMosaic";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import {
  completedConstructionProjects,
  completedPropertySales,
  ongoingProjects,
} from "@/content/site";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Explore our ongoing developments, completed construction work, and past property sales."
        backgroundImageSrc="/photos/homepage_bg_mixed_development.png"
        backgroundImageAlt="Mixed Development"
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/photos/kambiti_land_aerial_1.png"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <Container className="relative z-10">
          <MediaMosaic className="mb-10" withVideos />

          <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            Ongoing projects
          </div>
          <div className="mt-6">
            <ProjectsGrid projects={ongoingProjects} />
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">

            <FadeIn>
              <Card className="h-full p-7">
                <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                  Completed construction projects
                </div>
                <div className="mt-6 grid gap-6">
                  {completedConstructionProjects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative overflow-hidden rounded-2xl bg-muted/5 ring-1 ring-border transition hover:bg-muted/10 hover:shadow-lg"
                    >
                      {item.image && (
                        <div className="relative h-48 w-full overflow-hidden bg-muted">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h4 className="font-display text-lg font-medium text-fg">{item.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.06}>
              <Card className="p-7">
                <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                  Completed property sales
                </div>
                <div className="mt-6 grid gap-6">
                  {completedPropertySales.map((item) => (
                    <div
                      key={item.name}
                      className="group relative overflow-hidden rounded-2xl bg-muted/5 ring-1 ring-border transition hover:bg-muted/10 hover:shadow-lg"
                    >
                      {item.image && (
                        <div className="relative h-48 w-full overflow-hidden bg-muted">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h4 className="font-display text-lg font-medium text-fg">{item.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}

