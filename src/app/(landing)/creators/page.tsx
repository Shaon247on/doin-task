import type { Metadata } from "next";

import { CreatorFilters } from "@/components/creators/creator-filters";
import { CreatorGrid, NoCreatorsFound } from "@/components/creators/creator-grid";
import { CreatorSearchHero } from "@/components/creators/creator-search-hero";
import { UrlPagination } from "@/components/shared/url-pagination";
import { getCreators } from "@/lib/creators/get-creators";
import { parseCreatorSearchParams } from "@/lib/creators/search-params";

export const metadata: Metadata = { title: "Creators" };

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CreatorsPage({ searchParams }: PageProps) {
  const params = parseCreatorSearchParams(await searchParams);
  const { creators, total, page, totalPages } = await getCreators(params);

  return (
    <>
      <CreatorSearchHero defaultQuery={params.q} />
      <section
        id="creators-results"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
      >
        <CreatorFilters specialty={params.specialty} sort={params.sort} />
        <p className="sr-only" aria-live="polite">
          {total} {total === 1 ? "creator" : "creators"} found
        </p>
        <div className="mt-8 lg:mt-10">
          {creators.length > 0 ? (
            <CreatorGrid creators={creators} />
          ) : (
            <NoCreatorsFound query={params.q} />
          )}
        </div>
        <UrlPagination
          page={page}
          totalPages={totalPages}
          hash="creators-results"
          className="mt-10 lg:mt-14"
        />
      </section>
    </>
  );
}
