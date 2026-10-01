"use client";

import { ChartIcon, FilterIcon, UsersIcon } from "@/components/icons/Icons";
import { PillSelect } from "@/components/shared/pill-select";
import { useQueryParams } from "@/hooks/use-query-params";
import {
  CREATOR_SORT_OPTIONS,
  CREATOR_SPECIALTIES,
  DEFAULT_CREATOR_SORT,
} from "@/lib/creators/constants";
import type { CreatorSort } from "@/types/creator.type";

const SPECIALTY_OPTIONS = [
  { value: "", label: "All specialties" },
  ...CREATOR_SPECIALTIES.map((specialty) => ({ value: specialty, label: specialty })),
];

type CreatorFiltersProps = {
  specialty?: string;
  sort: CreatorSort;
};

export function CreatorFilters({ specialty = "", sort }: CreatorFiltersProps) {
  const { setParams } = useQueryParams();
  const activeCount = [specialty, sort !== DEFAULT_CREATOR_SORT ? sort : ""].filter(Boolean).length;
  const clearFilters = () => setParams({ specialty: null, sort: null });

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 text-sm font-medium transition-colors hover:bg-muted"
          >
            <FilterIcon width={16} height={16} aria-hidden="true" />
            Clear filters ({activeCount})
          </button>
        )}
        <PillSelect
          label="Specialty"
          value={specialty}
          options={SPECIALTY_OPTIONS}
          onChange={(value) => setParams({ specialty: value })}
          icon={<ChartIcon width={18} height={18} aria-hidden="true" />}
        />
      </div>
      <PillSelect
        label="Sort by"
        value={sort}
        options={CREATOR_SORT_OPTIONS}
        highlightWhenSet={false}
        onChange={(value) => setParams({ sort: value === DEFAULT_CREATOR_SORT ? null : value })}
        icon={<UsersIcon width={18} height={18} aria-hidden="true" />}
      />
    </div>
  );
}