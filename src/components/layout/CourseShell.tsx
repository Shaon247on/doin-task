import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

import {
  AdminIcon,
  ChartIcon,
  CheckCircleIcon,
  FolderIcon,
  StarIcon,
  TeamIcon,
  UsersIcon,
  VideoIcon,
} from "@/components/icons/Icons";
import { CourseTabs } from "@/components/course/details/course-tabs";
import { ShareCourseButton } from "@/components/course/details/share-course-button";
import { HeroGrid } from "@/components/shared/hero-grid";
import { Button } from "@/components/ui/button";
import { MOCK_COURSE_LESSONS } from "@/mocks/course-lessons.mock";
import type { Course, CourseDetails } from "@/types/course.type";

type CourseShellProps = {
  course: Course;
  details: CourseDetails;
  children: React.ReactNode;
};

export function CourseShell({ course, details, children }: CourseShellProps) {
  const firstLessons =
    MOCK_COURSE_LESSONS.find((item) => item.courseId === course.id)
      ?.modules.flatMap((module) => module.lessons)
      .slice(0, 3) ?? [];

  return (
    <div className="bg-background">
      <section className="relative isolate min-h-screen max-h-screen w-full bg-hero">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <HeroGrid />
        </div>

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-4 pt-24 pb-8 sm:px-6 md:pt-28 lg:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.95fr)] lg:gap-8 lg:px-8 lg:pb-10">
          <div className="min-w-0 self-center pb-4 text-white">
            <ShareCourseButton title={details.headline} />
            <div className="flex items-start justify-between gap-3">
              <h1 className="max-w-3xl font-poppins text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                {details.headline}
              </h1>
            </div>
            <p className="mt-2 max-w-2xl text-sm font-medium text-white/90 sm:text-base">
              {details.subtitle}
            </p>
            <p className="mt-3 text-sm text-white/90">
              by <span className="font-medium">{course.author.name}</span>
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <span className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground">
                <ChartIcon width={16} height={16} aria-hidden="true" />
                {course.level}
              </span>
              <span className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground">
                <StarIcon
                  width={15}
                  height={15}
                  color="#1745E8"
                  aria-hidden="true"
                />
                {details.rating.toFixed(1)} ({details.reviewCount} reviews)
              </span>
              <span className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground">
                <UsersIcon width={17} height={17} aria-hidden="true" />
                {details.studentCount} students
              </span>
            </div>

            <div className="relative mt-5 aspect-video max-h-[60vh] overflow-hidden rounded-2xl bg-black/10 shadow-sm">
              <Image
                src={details.previewImage}
                alt={`${details.headline} course preview`}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 66vw"
                className="object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-hero shadow-lg sm:size-20"
              >
                <Play size={28} fill="currentColor" className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.95fr)] lg:px-8">
        <aside className="relative z-20 min-w-0 pt-6 lg:col-start-2 lg:row-start-1 lg:-mt-110 xl:-mt-120 lg:pt-0">
          <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
            <h2 className="text-base font-semibold">
              {details.lessonsCount} Lessons ({details.duration})
            </h2>
            <ol className="mt-4 space-y-3">
              {firstLessons.map((lesson, index) => (
                <li
                  key={lesson.id}
                  className="grid grid-cols-[1.25rem_minmax(0,1fr)_auto] gap-2  text-xs xl:text-sm"
                >
                  <span className="text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="line-clamp-2">{lesson.title}</span>
                  <span className="whitespace-nowrap text-hero">
                    {lesson.duration}
                  </span>
                </li>
              ))}
            </ol>
            <Link
              href={`/courses/${course.slug}/lessons`}
              className="mt-3 inline-flex text-sm text-muted-foreground hover:text-foreground"
            >
              {Math.max(0, details.lessonsCount - firstLessons.length)} more
              videos
            </Link>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              {details.enrollmentMessage}
            </p>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-hero">
                ${course.price}
              </span>
              <span className="text-sm text-muted-foreground">
                /{course.billingType}
              </span>
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/sign-up" />}
              className="mt-3 h-12 w-full rounded-full text-base"
            >
              Enroll Now
            </Button>

            <h3 className="mt-5 text-base font-semibold">
              This course includes
            </h3>
            <ul className="mt-3 space-y-2.5">
              {details.includedItems.map((item, index) => {
                const Icon =
                  [FolderIcon, VideoIcon, AdminIcon, TeamIcon][index] ??
                  CheckCircleIcon;

                return (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <Icon
                      width={18}
                      height={18}
                      className="shrink-0 text-hero"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 border-t border-border pt-4">
              <div className="flex items-center gap-3">
                <Image
                  src={details.instructorAvatarUrl}
                  alt={`${course.author.name}, course creator`}
                  width={44}
                  height={44}
                  className="size-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium">{course.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {details.instructorRole}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {details.instructorBio}
              </p>
              <Link
                href={course.author.url ?? "/creators"}
                className="mt-4 inline-flex min-h-9 items-center rounded-full border border-border px-4 text-sm font-medium hover:bg-muted"
              >
                See Full Profile
              </Link>
            </div>
          </div>
        </aside>

        <main className="min-w-0 pb-16 pt-8 lg:col-start-1 lg:row-start-1 lg:pt-8">
          <CourseTabs slug={course.slug} />
          <div className="pt-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
