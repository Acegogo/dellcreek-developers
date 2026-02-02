import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { CTASection } from "@/components/sections/home/CTASection";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { Hero } from "@/components/sections/home/Hero";
import { HomeServicesPreview } from "@/components/sections/home/HomeServicesPreview";
import { HomeLandPreview } from "@/components/sections/home/HomeLandPreview";
import { HomeCSRPreview } from "@/components/sections/home/HomeCSRPreview";
import { WhyDellcreek } from "@/components/sections/home/WhyDellcreek";
import { TrackRecord } from "@/components/sections/home/TrackRecord";
import { PrimeLocations } from "@/components/sections/home/PrimeLocations";

export default function Home() {
  return (
    <>
      {/* Home */}
      <Hero />
      <HomeLandPreview />
      <WhyDellcreek />
      <TrackRecord />
      <PrimeLocations />
      <FeaturedProjects />
      <AboutPreview />
      <HomeServicesPreview />
      <HomeCSRPreview />
      <CTASection />
    </>
  );
}
