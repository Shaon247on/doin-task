import { MOCK_COURSES } from "@/mocks/coursCard.mocks";
import type {
  CourseListItem,
  CourseSearchParams,
  PaginatedResult,
} from "@/types/course-search.type";
import { PAGE_SIZE } from "./constants";

const CATEGORIES_BY_COURSE = [
  "ui-ux-design",
  "marketing",
  "creative-marketing",
  "marketing",
  "ui-ux-design",
  "creative-marketing",
];

const COURSES: CourseListItem[] = MOCK_COURSES.map((course, index) => ({
  ...course,
  category: CATEGORIES_BY_COURSE[index % CATEGORIES_BY_COURSE.length],
}));

export async function getCourses(
  params: CourseSearchParams,
): Promise<PaginatedResult<CourseListItem>> {
  const query = params.q.toLowerCase();
  let items = COURSES.filter((course) => {
    if (
      query &&
      !course.title.toLowerCase().includes(query) &&
      !course.author.name.toLowerCase().includes(query)
    ) {
      return false;
    }
    if (params.category && course.category !== params.category) return false;
    if (params.level && course.level.toLowerCase() !== params.level) return false;
    return true;
  });

  switch (params.sort) {
    case "rating":
      items = [...items].sort((a, b) => b.rating - a.rating);
      break;
    case "price-asc":
      items = [...items].sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      items = [...items].sort((a, b) => b.price - a.price);
      break;
    default:
      if (query) {
        items = [...items].sort(
          (a, b) =>
            Number(!a.title.toLowerCase().startsWith(query)) -
            Number(!b.title.toLowerCase().startsWith(query)),
        );
      }
  }

  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(params.page, totalPages);

  return {
    items: items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    total,
    page,
    pageSize: PAGE_SIZE,
    totalPages,
  };
}

export async function getCourseBySlug(slug: string): Promise<CourseListItem | null> {
  return COURSES.find((course) => course.slug === slug) ?? null;
}