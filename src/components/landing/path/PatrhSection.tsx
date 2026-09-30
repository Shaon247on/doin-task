import { GrowthRow } from "./growth-section/growth-row";
import { ManageRow } from "./manage-section/manage-row";
import { PathBackground } from "./floating-elements/path-background";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function PathSection() {
  return (
    <section id="path" className="relative isolate overflow-hidden bg-background py-16 md:py-24">
      <PathBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 md:gap-24 lg:px-8">
        <ScrollReveal distance={30}>
          <GrowthRow />
        </ScrollReveal>
        <ScrollReveal delay={0.12} distance={30}>
          <ManageRow />
        </ScrollReveal>
      </div>
    </section>
  );
}