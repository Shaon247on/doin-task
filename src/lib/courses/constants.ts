import type { CourseSort } from "@/types/course-search.type";

export const PAGE_SIZE = 15;

export const CATEGORIES = [
  { value: "featured", label: "Featured" },
  { value: "music", label: "Music" },
  { value: "drawing-painting", label: "Drawing & Painting" },
  { value: "marketing", label: "Marketing" },
  { value: "animation", label: "Animation" },
  { value: "social-media", label: "Social Media" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "creative-marketing", label: "Creative Marketing" },
  { value: "cooking", label: "Cooking" },
] as const;

export const LEVELS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
] as const;

export const SORT_OPTIONS: { value: CourseSort; label: string }[] = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Top rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export const DEFAULT_SORT: CourseSort = "relevant";