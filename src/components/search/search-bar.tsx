"use client";

import { useState, type FormEvent } from "react";
import { Search, X } from "lucide-react";

import { useQueryParams } from "@/hooks/use-query-params";
import { Input } from "@/components/ui/input";

export function SearchBar({ defaultQuery = "" }: { defaultQuery?: string }) {
  const { searchParams, setParams } = useQueryParams();
  const [value, setValue] = useState(defaultQuery);
  const hasQuery = Boolean(value) || searchParams.has("q");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParams({ q: value.trim() }, { hash: "results" });
  };

  return (
    <form role="search" onSubmit={onSubmit} className="mx-auto flex w-full max-w-2xl items-center">
      <div className="relative w-full">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          type="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Course, topic, creator"
          aria-label="Search courses, topics or creators"
          enterKeyHint="search"
          className="h-13 w-full rounded-full border-0 bg-white pl-12 pr-12 text-base text-foreground placeholder:text-muted-foreground md:text-base [&::-webkit-search-cancel-button]:hidden"
        />
        {hasQuery && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              setParams({ q: null }, { hash: "results" });
            }}
            aria-label="Clear search query"
            title="Clear search"
            className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <X aria-hidden="true" size={18} />
          </button>
        )}
      </div>
    </form>
  );
}