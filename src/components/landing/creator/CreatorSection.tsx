import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { CreatorElements } from "./creator-elements"
import { HeroGrid } from "@/components/shared/hero-grid";
import { CreatorGrid } from "./creator-grid";

/** Layers (bottom → top): bg-hero → grid (z-0) → floating elements (z-10) → content (z-20) */
export function CreatorSection() {
  return (
    <section
      id="become-creator"
      className="relative isolate flex items-center justify-center overflow-hidden bg-hero py-24 lg:min-h-[488px] lg:py-20"
    >
      <CreatorGrid />
      <CreatorElements />

      <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="max-w-xl font-poppins text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-6 max-w-4xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7 lg:mt-10 lg:leading-[30px]">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link href="/sign-up" className={`mt-8 lg:mt-10 ${buttonVariants()}`}>
          Join as Creator
        </Link>
      </div>
    </section>
  );
}