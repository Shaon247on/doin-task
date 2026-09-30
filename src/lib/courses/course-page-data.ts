import { MOCK_COURSE_ABOUT } from "@/mocks/course-about.mock";
import { MOCK_COURSE_DETAILS } from "@/mocks/course-details.mock";
import { MOCK_COURSE_LESSONS } from "@/mocks/course-lessons.mock";
import { MOCK_COURSE_REVIEWS } from "@/mocks/course-reviews.mock";
import { getCourseBySlug } from "@/lib/courses/get-courses";

export async function getCourseDetailsBySlug(slug: string) {
  const course = await getCourseBySlug(slug);
  if (!course) return null;

  const details = MOCK_COURSE_DETAILS.find((item) => item.courseId === course.id);
  return details ? { course, details } : null;
}

async function getCourseId(slug: string) {
  const course = await getCourseBySlug(slug);
  return course?.id ?? null;
}

export async function getCourseAboutBySlug(slug: string) {
  const courseId = await getCourseId(slug);
  return courseId
    ? MOCK_COURSE_ABOUT.find((item) => item.courseId === courseId) ?? null
    : null;
}

export async function getCourseLessonsBySlug(slug: string) {
  const courseId = await getCourseId(slug);
  return courseId
    ? MOCK_COURSE_LESSONS.find((item) => item.courseId === courseId) ?? null
    : null;
}

export async function getCourseReviewsBySlug(slug: string) {
  const courseId = await getCourseId(slug);
  return courseId
    ? MOCK_COURSE_REVIEWS.find((item) => item.courseId === courseId) ?? null
    : null;
}