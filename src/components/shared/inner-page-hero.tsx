import { HeroGrid } from "@/components/shared/hero-grid";

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function InnerPageHero({ eyebrow, title, description }: InnerPageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-hero px-4 pb-12 pt-28 text-white sm:px-6 md:pb-16 md:pt-36">
      <HeroGrid />
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-poppins text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
    </section>
  );
}