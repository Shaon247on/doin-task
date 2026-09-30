import { notFound } from "next/navigation";

import { CourseReviewsContent } from "@/components/course/details/course-tab-content";
import { getCourseReviewsBySlug } from "@/lib/courses/course-page-data";

type PageProps = { params: Promise<{ slug: string }> };

export default async function CourseReviewsPage({ params }: PageProps) {
  const { slug } = await params;
  const reviews = await getCourseReviewsBySlug(slug);
  if (!reviews) notFound();

  return <CourseReviewsContent reviews={reviews} />;
}