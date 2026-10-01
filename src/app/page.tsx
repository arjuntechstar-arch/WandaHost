import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { DomainSearchSection } from "@/components/home/DomainSearchSection";
import { InteractiveShowcaseSection } from "@/components/home/InteractiveShowcaseSection";
import { HostingSection } from "@/components/home/HostingSection";
import { ArchitectureSection } from "@/components/home/ArchitectureSection";
import { BusinessServicesSection } from "@/components/home/BusinessServicesSection";
import { DotNetSection } from "@/components/home/DotNetSection";
import { AIServicesSection } from "@/components/home/AIServicesSection";
import { ManagedCloudSection } from "@/components/home/ManagedCloudSection";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { WhyWandaHost } from "@/components/home/WhyWandaHost";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust/benefit strip */}
      <TrustStrip />

      {/* 3. Domain Search */}
      <DomainSearchSection />

      {/* 4. Interactive Server & AI Showcase Sandbox */}
      <InteractiveShowcaseSection />

      {/* 5. Hosting section */}
      <HostingSection />

      {/* 5. Infrastructure section */}
      <ArchitectureSection />

      {/* 6. Business services */}
      <BusinessServicesSection />

      {/* 7. .NET specialist section */}
      <DotNetSection />

      {/* 8. AI section */}
      <AIServicesSection />

      {/* 9. Managed cloud section */}
      <ManagedCloudSection />

      {/* 10. Pricing teaser */}
      <PricingTeaser />

      {/* 11. Why WandaHost */}
      <WhyWandaHost />

      {/* 12. Final CTA */}
      <FinalCTA />
    </div>
  );
}
