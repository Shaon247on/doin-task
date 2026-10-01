"use client";

import {
  ChartIcon,
  FilterIcon,
  MenuIcon,
  ModulesIcon,
} from "@/components/icons/Icons";
import { PillSelect } from "@/components/shared/pill-select";
import { useQueryParams } from "@/hooks/use-query-params";
import { CATEGORIES, DEFAULT_SORT, LEVELS, SORT_OPTIONS } from "@/lib/courses/constants";
import type { CourseSort } from "@/types/course-search.type";

const LEVEL_OPTIONS = [{ value: "", label: "All levels" }, ...LEVELS];
const CATEGORY_OPTIONS = CATEGORIES.map((category) =>
  category.value === "featured" ? { ...category, value: "" } : category,
);

type Props = { level?: string; category?: string; sort: CourseSort };

export function CoursesToolbar({ level = "", category = "", sort }: Props) {
  const { setParams } = useQueryParams();
  const activeCount = [level, category, sort !== DEFAULT_SORT ? sort : ""].filter(Boolean).length;
  const clearAll = () => setParams({ level: null, category: null, sort: null });

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearAll}
            title="Clear all filters"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 text-sm font-medium transition-colors hover:bg-muted"
          >
            <FilterIcon aria-hidden="true" width={16} height={16} />
            Clear filters ({activeCount})
          </button>
        )}
        <PillSelect
          label="Level"
          value={level}
          options={LEVEL_OPTIONS}
          onChange={(value) => setParams({ level: value })}
          icon={<ChartIcon aria-hidden="true" width={18} height={18} />}
        />
        <PillSelect
          label="Category"
          value={category}
          options={CATEGORY_OPTIONS}
          onChange={(value) => setParams({ category: value })}
          icon={<ModulesIcon aria-hidden="true" width={18} height={18} />}
        />
      </div>
      <PillSelect
        label="Sort by"
        value={sort}
        options={SORT_OPTIONS}
        highlightWhenSet={false}
        onChange={(value) => setParams({ sort: value === DEFAULT_SORT ? null : value })}
        icon={<MenuIcon aria-hidden="true" width={18} height={18} />}
      />
    </div>
  );
}