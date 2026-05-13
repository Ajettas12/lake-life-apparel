import Hero from "@/components/sections/Hero";
import WhoWeServePreview from "@/components/sections/WhoWeServePreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import MinnesotaMade from "@/components/sections/MinnesotaMade";
import WhyUs from "@/components/sections/WhyUs";
import HowItWorks from "@/components/sections/HowItWorks";
import BoundaryWaters from "@/components/sections/BoundaryWaters";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeServePreview />
      <ServicesPreview />
      <MinnesotaMade />
      <WhyUs />
      <HowItWorks />
      <BoundaryWaters />
      <FinalCTA />
    </>
  );
}
