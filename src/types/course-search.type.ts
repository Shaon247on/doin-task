import type { Course } from "@/types/course.type";

export type CourseListItem = Course & { category: string };

export type CourseSort = "relevant" | "rating" | "price-asc" | "price-desc";

export type CourseSearchParams = {
  q: string;
  page: number;
  category?: string;
  level?: string;
  sort: CourseSort;
};

export type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};