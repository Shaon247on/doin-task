import { notFound } from "next/navigation";

import { CourseLessonsContent } from "@/components/course/details/course-tab-content";
import { getCourseLessonsBySlug } from "@/lib/courses/course-page-data";

type PageProps = { params: Promise<{ slug: string }> };

export default async function CourseLessonsPage({ params }: PageProps) {
  const { slug } = await params;
  const lessons = await getCourseLessonsBySlug(slug);
  if (!lessons) notFound();

  return <CourseLessonsContent lessons={lessons} />;
}