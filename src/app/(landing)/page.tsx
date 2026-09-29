import { CoursesSection } from "@/components/landing/couses/CourseSection";
import { HeroSection } from "@/components/landing/hero/HeroSection";
import { PartnersSection } from "@/components/landing/partnerLogos/PartnerLogos";
import React from "react";

function landing() {
  return (
    <>
      <HeroSection />
      <PartnersSection/>
      <CoursesSection/>
    </>
  );
}

export default landing;
