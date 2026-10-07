import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import ImmersionSection from "@/components/sections/ImmersionSection";
import PlacementJourneySection from "@/components/sections/PlacementJourneySection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <DifferenceSection />
      <ImmersionSection />
      <PlacementJourneySection />
      <CTASection />
    </>
  );
}
