import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CreatorProfileHero } from "@/components/creators/creator-profile-hero";
import { CoursesToolbar } from "@/components/search/courses-toolbar";
import { CourseGrid, NoResults } from "@/components/search/course-grid";
import { UrlPagination } from "@/components/shared/url-pagination";
import { getCreatorBySlug } from "@/lib/creators/get-creators";
import {
  getCreatorCourseCount,
  getCreatorCourses,
} from "@/lib/courses/get-courses";
import { parseCourseSearchParams } from "@/lib/courses/search-params";

type CreatorPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: CreatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const creator = await getCreatorBySlug(slug);
  return {
    title: creator?.name ?? "Creator not found",
    description: creator
      ? `${creator.headline}. Explore ${creator.name}'s courses and teaching on ByteSpace.`
      : "This ByteSpace creator could not be found.",
  };
}

export default async function CreatorProfilePage({ params, searchParams }: CreatorPageProps) {
  const [{ slug }, rawSearchParams] = await Promise.all([params, searchParams]);
  const creator = await getCreatorBySlug(slug);
  if (!creator) notFound();

  const filters = parseCourseSearchParams(rawSearchParams);
  const { items, total, page, totalPages } = await getCreatorCourses(creator.id, filters);
  const productCount = getCreatorCourseCount(creator.id);

  return (
    <>
      <CreatorProfileHero creator={creator} productCount={productCount} />
      <section
        id="creator-courses"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-9 sm:px-6 lg:px-8 lg:py-12"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">Published courses</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {total} {total === 1 ? "course" : "courses"}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <CoursesToolbar
            level={filters.level}
            category={filters.category}
            sort={filters.sort}
          />
        </div>
        <p className="sr-only" aria-live="polite">
          {total} {total === 1 ? "course" : "courses"} found
        </p>
        <div className="mt-7 lg:mt-9">
          {items.length > 0 ? <CourseGrid courses={items} /> : <NoResults query={filters.q} />}
        </div>
        <UrlPagination
          page={page}
          totalPages={totalPages}
          hash="creator-courses"
          className="mt-10 lg:mt-14"
        />
      </section>
    </>
  );
}