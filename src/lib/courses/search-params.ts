import type { CourseSearchParams, CourseSort } from "@/types/course-search.type";
import { CATEGORIES, DEFAULT_SORT, LEVELS, SORT_OPTIONS } from "./constants";

type RawParams = Record<string, string | string[] | undefined>;

const first = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export function parseCourseSearchParams(raw: RawParams): CourseSearchParams {
  const q = (first(raw.q) ?? "").trim().slice(0, 100);
  const pageNumber = Number.parseInt(first(raw.page) ?? "1", 10);
  const page = Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : 1;
  const category = first(raw.category);
  const level = first(raw.level);
  const sort = first(raw.sort);

  return {
    q,
    page,
    category:
      category && category !== "featured" && CATEGORIES.some((item) => item.value === category)
        ? category
        : undefined,
    level: level && LEVELS.some((item) => item.value === level) ? level : undefined,
    sort: SORT_OPTIONS.some((item) => item.value === sort)
      ? (sort as CourseSort)
      : DEFAULT_SORT,
  };
}