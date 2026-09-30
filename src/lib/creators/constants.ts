import type { CreatorSort } from "@/types/creator.type";

export const CREATOR_PAGE_SIZE = 9;

export const CREATOR_SPECIALTIES = [
  "UI/UX Design",
  "Marketing",
  "Development",
  "Illustration",
  "Animation",
  "Photography",
  "Business",
  "Writing",
] as const;

export const CREATOR_SORT_OPTIONS: { value: CreatorSort; label: string }[] = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Top rated" },
  { value: "courses", label: "Most courses" },
  { value: "students", label: "Most students" },
];

export const DEFAULT_CREATOR_SORT: CreatorSort = "relevant";