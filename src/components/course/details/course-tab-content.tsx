import Image from "next/image";

import { CheckCircleIcon, StarIcon, VideoIcon } from "@/components/icons/Icons";
import type { CourseAbout, CourseLessons, CourseReviews } from "@/types/course.type";

export function CourseAboutContent({ about }: { about: CourseAbout }) {
  return (
    <div className="space-y-7">
      <section>
        <h2 className="text-lg font-semibold">Description</h2>
        <div className="mt-3 space-y-4 text-sm leading-6 text-muted-foreground">
          {about.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Sneak Peek</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {about.sneakPeek.map((item) => (
            <div key={item.image} className="relative aspect-4/3 overflow-hidden rounded-xl bg-muted">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Key Points</h2>
        <ul className="mt-3 space-y-2.5">
          {about.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <CheckCircleIcon width={17} height={17} className="mt-0.5 shrink-0 text-hero" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export function CourseLessonsContent({ lessons }: { lessons: CourseLessons }) {
  const totalLessons = lessons.modules.reduce((total, module) => total + module.lessons.length, 0);

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold">Course modules</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {lessons.modules.length} modules · {totalLessons} lessons
          </p>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {lessons.modules.map((module, index) => (
          <details key={module.id} className="group rounded-xl border border-border bg-white">
            <summary className="flex cursor-pointer list-none items-start gap-3 p-4 [&::-webkit-details-marker]:hidden">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">Module {index + 1}: {module.title}</span>
                <span className="mt-1 block text-xs leading-5 text-muted-foreground">{module.description}</span>
              </span>
              <span className="shrink-0 text-xs text-muted-foreground">{module.lessons.length} lessons</span>
            </summary>
            <ol className="border-t border-border px-4 py-2">
              {module.lessons.map((lesson, lessonIndex) => (
                <li
                  key={lesson.id}
                  className="flex items-center gap-3 border-b border-border/70 py-3 last:border-0"
                >
                  <VideoIcon width={17} height={17} className="shrink-0 text-hero" aria-hidden="true" />
                  <span className="min-w-0 flex-1 text-sm">{lesson.title}</span>
                  {lesson.isPreview && (
                    <span className="shrink-0 rounded-full bg-primary/30 px-2 py-1 text-[11px] font-medium">
                      Preview
                    </span>
                  )}
                  <span className="shrink-0 text-xs text-muted-foreground">{lesson.duration}</span>
                  <span className="sr-only">Lesson {lessonIndex + 1}</span>
                </li>
              ))}
            </ol>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CourseReviewsContent({ reviews }: { reviews: CourseReviews }) {
  const maxCount = Math.max(...reviews.ratingCounts.map((item) => item.count), 1);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-lg font-semibold">What learners are saying</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Discover what our learners have to say about their experience with this course.
        </p>
        <div className="mt-5 grid gap-5 rounded-xl border border-border p-4 sm:grid-cols-[auto_1fr] sm:p-5">
          <div className="grid min-w-24 place-items-center rounded-lg bg-primary px-4 py-3 text-center">
            <span className="text-xs">Rating</span>
            <span className="text-3xl font-bold">{reviews.averageRating.toFixed(1)}</span>
          </div>
          <div className="space-y-2">
            {reviews.ratingCounts.map(({ stars, count }) => (
              <div key={stars} className="grid grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-center gap-3">
                <span className="text-xs text-muted-foreground">{stars} stars</span>
                <span className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <span
                    className="block h-full rounded-full bg-primary"
                    style={{ width: `${(count / maxCount) * 100}%` }}
                  />
                </span>
                <span className="text-right text-xs text-muted-foreground">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base font-semibold">Individual reviews</h2>
          <p className="text-xs text-muted-foreground">{reviews.totalReviews} reviews</p>
        </div>
        <div className="mt-4 space-y-4">
          {reviews.reviews.map((review) => (
            <article key={review.id} className="rounded-xl border border-border bg-white p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <Image
                  src={review.avatarUrl}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="text-sm font-medium">{review.author}</h3>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                    <time className="text-xs text-muted-foreground">{review.timeAgo}</time>
                  </div>
                  <div className="mt-3 flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon
                        key={index}
                        width={15}
                        height={15}
                        color={index < review.rating ? "#354052" : "#D1D5DB"}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{review.content}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}