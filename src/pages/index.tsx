import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { FeatureSupport } from "@/components/feature-support";

export default function Home() {
  return (
    <>

      <article className="flex flex-col">
        <HeroSection />

        <FeatureSection />

        <FeatureSupport />
      </article>
    </>
  );
}
