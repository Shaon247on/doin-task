import Link from "next/link";

import { CreatorCard } from "@/components/creators/creator-card";
import type { Creator } from "@/types/creator.type";

export function CreatorGrid({ creators }: { creators: Creator[] }) {
  return (
    <ul className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {creators.map((creator) => (
        <li key={creator.id} className="min-w-0">
          <CreatorCard creator={creator} />
        </li>
      ))}
    </ul>
  );
}

export function NoCreatorsFound({ query }: { query: string }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center">
      <p className="font-poppins text-2xl font-semibold text-foreground">No creators found</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {query ? `We couldn't find a creator matching “${query}”. ` : "No creators match those filters. "}
        Try another search or clear your filters.
      </p>
      <Link
        href="/creators"
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
      >
        Show all creators
      </Link>
    </div>
  );
}