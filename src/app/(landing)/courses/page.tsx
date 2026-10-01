import type { Metadata } from "next";

import { CategoryChips } from "@/components/search/category-chips";
import { CourseGrid, NoResults } from "@/components/search/course-grid";
import { CoursesSearchHero } from "@/components/search/courses-search-hero";
import { CoursesToolbar } from "@/components/search/courses-toolbar";
import { UrlPagination } from "@/components/shared/url-pagination";
import { getCourses } from "@/lib/courses/get-courses";
import { parseCourseSearchParams } from "@/lib/courses/search-params";

export const metadata: Metadata = {
  title: "Online Courses",
  description:
    "Explore practical online courses in design, development, business, marketing, and more on ByteSpace.",
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CoursesPage({ searchParams }: PageProps) {
  const params = parseCourseSearchParams(await searchParams);
  const { items, total, page, totalPages } = await getCourses(params);

  return (
    <>
      <CoursesSearchHero defaultQuery={params.q} />
      <section
        id="results"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
      >
        <CoursesToolbar level={params.level} category={params.category} sort={params.sort} />
        <div className="mt-6">
          <CategoryChips active={params.category ?? "featured"} />
        </div>
        <p className="sr-only" aria-live="polite">
          {total} {total === 1 ? "course" : "courses"} found
        </p>
        <div className="mt-8 lg:mt-12">
          {items.length > 0 ? <CourseGrid courses={items} /> : <NoResults query={params.q} />}
        </div>
        <UrlPagination page={page} totalPages={totalPages} hash="results" className="mt-12 lg:mt-16" />
      </section>
    </>
  );
}
