import React from "react";
import ServiceHero from '../services/ServiceHero'
import FeaturesSection from "../services/FeaturesSection";
import CraftedMaterialSection from "../services/CraftedMaterialSection";
import TestThree from "../services/TestThree"

export default function service() {
  return (
    <>
      <ServiceHero />
      <FeaturesSection />
      <CraftedMaterialSection />
      <TestThree/>
    </>
  );
}