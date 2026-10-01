import Link from "next/link";

import { CourseCard } from "@/components/shared/CourseCard";
import type { CourseListItem } from "@/types/course-search.type";

export function CourseGrid({ courses }: { courses: CourseListItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {courses.map((course) => (
        <li key={course.id}>
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}

export function NoResults({ query }: { query: string }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center">
      <p className="font-poppins text-2xl font-semibold text-foreground">No courses found</p>
      <p className="mt-3 text-foreground/70">
        {query ? `We couldn't find anything for “${query}”. ` : ""}
        Try a different keyword or clear your filters.
      </p>
      <Link
        href="/courses"
        className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-base text-primary-foreground"
      >
        Show all courses
      </Link>
    </div>
  );
}