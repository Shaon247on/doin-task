import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { HeroGrid } from "@/components/shared/hero-grid";

export const metadata: Metadata = {
  title: "Page not found",
};

/**
 * Global 404 (renders inside the root layout, so the navbar comes from LandingShell).
 * Layers: bg-hero → grid image → content.
 */
export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-hero px-4 pb-16 pt-28 sm:px-6 lg:pt-20">
      <HeroGrid />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* Big 404 that fades into the background toward the bottom */}
        <p
          aria-hidden="true"
          className="select-none bg-linear-to-b from-primary from-35% to-primary/10 bg-clip-text font-poppins text-[clamp(7rem,34vw,30.5rem)] font-semibold leading-[0.8] text-transparent"
        >
          404
        </p>

        <h1 className="-mt-2 font-poppins text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:-mt-4 sm:text-5xl md:text-6xl xl:text-7xl">
          <span className="sr-only">404. </span>
          The page you are looking for doesn&rsquo;t exist
        </h1>

        <p className="mt-5 max-w-xl text-sm text-white/90 sm:text-base md:mt-8 md:text-lg">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link href="/" className={`mt-8 md:mt-10 ${buttonVariants()}`}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}