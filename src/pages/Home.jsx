import React from "react";
import HomeHero from "../HomeSection/HomeHero";
import CraftedSection from "../HomeSection/CraftedSection";
import ModernDesignSection from "../HomeSection/ModernDesignSection";
import WhyChooseUs from "../HomeSection/WhyChooseUs";
import TestimonialsSection from "../HomeSection/TestimonialsSection";
import RecentBlogSection from "../HomeSection/RecentBlogSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CraftedSection />
      <ModernDesignSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <RecentBlogSection />
    </>
  );
}
