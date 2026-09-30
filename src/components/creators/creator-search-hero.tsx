"use client";

import { useState, type FormEvent } from "react";
import { Search, X } from "lucide-react";

import { HeroGrid } from "@/components/shared/hero-grid";
import { useQueryParams } from "@/hooks/use-query-params";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CreatorSearchHero({ defaultQuery }: { defaultQuery: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-hero px-4 pb-12 pt-28 sm:px-6 md:pb-16 md:pt-36">
      <HeroGrid />
      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
          The people behind the courses
        </p>
        <h1 className="mt-3 text-center font-poppins text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Meet your next mentor
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-white/85 sm:text-base">
          Learn from experienced creators who turn their craft into practical, thoughtful courses.
        </p>
        <CreatorSearch defaultQuery={defaultQuery} />
      </div>
    </section>
  );
}

function CreatorSearch({ defaultQuery }: { defaultQuery: string }) {
  const { searchParams, setParams } = useQueryParams();
  const [value, setValue] = useState(defaultQuery);
  const hasQuery = Boolean(value) || searchParams.has("q");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParams({ q: value.trim() }, { hash: "creators-results" });
  };

  const clearQuery = () => {
    setValue("");
    setParams({ q: null }, { hash: "creators-results" });
  };

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className="mx-auto mt-7 flex w-full max-w-2xl items-center gap-3 sm:mt-9"
    >
      <div className="relative min-w-0 flex-1">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          type="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search creators or specialties"
          aria-label="Search creators or specialties"
          enterKeyHint="search"
          className="h-13 w-full rounded-full border-0 bg-white pl-12 pr-12 text-base text-foreground placeholder:text-muted-foreground md:text-base [&::-webkit-search-cancel-button]:hidden"
        />
        {hasQuery && (
          <button
            type="button"
            onClick={clearQuery}
            aria-label="Clear creator search"
            className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <X aria-hidden="true" size={18} />
          </button>
        )}
      </div>
      <Button type="submit" className="h-13 rounded-full px-6 text-base">
        Search
      </Button>
    </form>
  );
}