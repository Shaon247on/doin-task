"use client";

import { useQueryParams } from "@/hooks/use-query-params";
import { CATEGORIES } from "@/lib/courses/constants";

export function CategoryChips({ active }: { active: string }) {
  const { setParams } = useQueryParams();

  return (
    <div
      role="group"
      aria-label="Course categories"
      className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-none sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {CATEGORIES.map(({ value, label }) => {
        const isActive = value === active;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            onClick={() =>
              setParams({ category: value === "featured" || isActive ? null : value })
            }
            className={`h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-colors ${
              isActive
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-[#CED0D3] bg-white hover:bg-muted"
            }`}
          >
            {label}
          </button>
        );
      })}
      {active !== "featured" && (
        <button
          type="button"
          onClick={() => setParams({ category: null })}
          className="h-11 shrink-0 px-2 text-sm font-medium text-hero underline underline-offset-4"
        >
          Clear category
        </button>
      )}
    </div>
  );
}