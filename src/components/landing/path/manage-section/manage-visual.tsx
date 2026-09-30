import Image from "next/image";


import { StudentsStatCard } from "@/components/landing/hero/students-stat-card";
import { RevenueCard } from "../revenue-card";
import { ScaledStage } from "../floating-elements/scaled-stage";
import { YearToDateCard } from "../floating-elements/year-to-date-card";
import { FloatingElement } from "@/components/shared/floating-element";

/** Design frame: 541 × 565 */
export function ManageVisual() {
  return (
    <ScaledStage width={541} height={565}>
      {/* Behind the girl */}
      <RevenueCard className="absolute left-16 lg:-left-10 top-2 z-10" />

      <div className="absolute lg:-left-26 top-0 z-20 h-165 w-165.75">
        <Image
          src="/Images/girl.png"
          alt="Smiling student wearing headphones and holding a tablet"
          fill
          sizes="363px"
          className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* In front of the girl */}
      <YearToDateCard className="absolute left-16 lg:-left-10 top-39.5 z-10" />
      <StudentsStatCard className="absolute left-82 lg:left-56 top-98 z-30" />

      <FloatingElement
        src="/elements/path/bottom-spring.png"
        className="left-86 lg:left-60 top-36 z-40 w-35"
        sizes="141px"
        duration={7.5}
        delay={0.5}
        distance={12}
        rotate={-4}
      />
    </ScaledStage>
  );
}