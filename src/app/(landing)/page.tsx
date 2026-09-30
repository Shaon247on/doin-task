import { CoursesSection } from "@/components/landing/couses/CourseSection";
import { CreatorSection } from "@/components/landing/creator/CreatorSection";
import { HeroSection } from "@/components/landing/hero/HeroSection";
import { PartnersSection } from "@/components/landing/partnerLogos/PartnerLogos";
import { CategoriesSection } from "@/components/landing/path/CategoriesSection";
import { PathSection } from "@/components/landing/path/PatrhSection";
import { TestimonialsSection } from "@/components/landing/testimonials/TestiimonialsSection";

function landing() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
      <CategoriesSection />
      <PathSection />
      <CreatorSection />
      <TestimonialsSection />
    </>
  );
}

export default landing;
