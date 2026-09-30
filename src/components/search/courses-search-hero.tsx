import { HeroGrid } from "@/components/shared/hero-grid";
import { SearchBar } from "./search-bar";

export function CoursesSearchHero({ defaultQuery }: { defaultQuery: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-hero px-4 pb-12 pt-28 sm:px-6 md:pb-16 md:pt-36">
      {/* <HeroGrid
        cols={{
          base: 6,
          sm: 8,
          md: 9,
          lg: 12,
          xl: 10,
        }}
        rows={{
          base: 8,
          sm: 8,
          md: 5,
          lg: 6,
          xl: 5,
        }}
      /> */}
      <div className="relative z-10">
        <h1 className="text-center font-poppins text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Find Your Next Course
        </h1>
        <div className="mt-8 md:mt-10">
          <SearchBar key={defaultQuery} defaultQuery={defaultQuery} />
        </div>
      </div>
    </section>
  );
}
