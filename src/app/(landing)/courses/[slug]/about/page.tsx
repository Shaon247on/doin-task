import { notFound } from "next/navigation";

import { CourseAboutContent } from "@/components/course/details/course-tab-content";
import { getCourseAboutBySlug } from "@/lib/courses/course-page-data";

type PageProps = { params: Promise<{ slug: string }> };

export default async function CourseAboutPage({ params }: PageProps) {
  const { slug } = await params;
  const about = await getCourseAboutBySlug(slug);
  if (!about) notFound();

  return <CourseAboutContent about={about} />;
}