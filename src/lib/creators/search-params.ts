import type { CreatorSearchParams, CreatorSort } from "@/types/creator.type";
import { CREATOR_SORT_OPTIONS, CREATOR_SPECIALTIES, DEFAULT_CREATOR_SORT } from "./constants";

type RawParams = Record<string, string | string[] | undefined>;

const first = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export function parseCreatorSearchParams(raw: RawParams): CreatorSearchParams {
  const q = (first(raw.q) ?? "").trim().slice(0, 100);
  const pageNumber = Number.parseInt(first(raw.page) ?? "1", 10);
  const page = Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : 1;
  const specialty = first(raw.specialty);
  const sort = first(raw.sort);

  return {
    q,
    page,
    specialty:
      specialty && CREATOR_SPECIALTIES.some((item) => item === specialty)
        ? specialty
        : undefined,
    sort: CREATOR_SORT_OPTIONS.some((option) => option.value === sort)
      ? (sort as CreatorSort)
      : DEFAULT_CREATOR_SORT,
  };
}