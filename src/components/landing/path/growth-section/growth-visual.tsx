import Image from "next/image";

// NOTE: adjust this import to wherever your CourseCard lives.
import { ProgressStatCard } from "@/components/landing/hero/progress-stat-card";
import { ScaledStage } from "../floating-elements/scaled-stage";
import { CourseCard, CourseData } from "@/components/shared/CourseCard";
import { FloatingElement } from "@/components/shared/floating-element";

// Decorative demo data: the card is mostly hidden behind the boy.
// Replace the thumbnail/avatar paths with real images.
const FEATURED_COURSE: CourseData = {
  id: "path-demo",
  slug: "learn-figma-from-beginner",
  title: "Learn Figma from Beginner to Pro",
  thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
  author: { name: "purepearl studio" },
  lessonsCount: 17,
  duration: "2 hours 16 mins",
  commentsCount: 12,
  rating: 4.8,
  level: "Beginner",
  enrolledStudents: [1, 2, 3, 4].map((n) => ({
    id: String(n),
    name: `Student ${n}`,
    avatarUrl: `/avatars/${n}.png`,
  })),
  totalEnrolledCount: 240,
  price: 25,
  billingType: "lifetime",
};

/** Design frame: 577 × 552 */
export function GrowthVisual() {
  return (
    <ScaledStage width={577} height={552}>
      {/* Course card sits behind the boy (decorative, so not focusable/clickable) */}
      <div aria-hidden="true" inert className="pointer-events-none absolute left-0 top-0 z-10 w-[372px]">
        <CourseCard course={FEATURED_COURSE} />
      </div>

      <div className="absolute left-[35px] -top-30 z-20 h-[632px] w-[612px]">
        <Image
          src="/Images/boy.png"
          alt="Smiling student wearing headphones and holding a laptop"
          fill
          sizes="512px"
          className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)]"
        />
      </div>

      <ProgressStatCard className="absolute left-88 top-64 z-30" />

      <FloatingElement
        src="/elements/path/top-spring.png"
        className="left-114 top-48 z-40 w-31.25"
        sizes="125px"
        duration={6.5}
        distance={12}
        rotate={4}
      />
    </ScaledStage>
  );
}