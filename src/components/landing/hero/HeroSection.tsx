import { HeroElements } from "./hero-elements";
import { HeroGrid } from "./hero-grid";
import { HeroHeading } from "./hero-heading";
import { HeroSearch } from "./hero-search";
import { HeroVisual } from "./hero-visual";

/**
 * Layer order (bottom → top):
 *  bg-hero → HeroGrid (z-0) → HeroElements (z-10) → content + HeroVisual (z-20)
 * Height: full screen on desktop (lg+); on tablet/mobile it is at least one screen and grows with content.
 * Requires `--color-hero: var(--heroBg);` in the @theme block of globals.css.
 */
export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-hero lg:h-screen lg:max-h-screen lg:min-h-screen">
      <HeroGrid />
      <HeroElements />

      <div className="relative z-40 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-0 md:pb-10 pt-28 text-center sm:px-6 md:pt-24 lg:px-8">
        <HeroHeading />
        <HeroSearch />
      </div>

      <HeroVisual />
    </section>
  );
}