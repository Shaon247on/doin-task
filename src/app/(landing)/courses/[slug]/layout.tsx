import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { CourseShell } from "@/components/layout/CourseShell";
import { getCourseDetailsBySlug } from "@/lib/courses/course-page-data";

type CourseLayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CourseLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCourseDetailsBySlug(slug);
  return {
    title: data?.details.headline ?? "Course not found",
    description: data
      ? `Explore ${data.details.headline}, a ${data.course.level.toLowerCase()} course by ${data.course.author.name} on ByteSpace.`
      : "This ByteSpace course could not be found.",
  };
}

export default async function CourseLayout({ children, params }: CourseLayoutProps) {
  const { slug } = await params;
  const data = await getCourseDetailsBySlug(slug);
  if (!data) notFound();

  return (
    <CourseShell course={data.course} details={data.details}>
      {children}
    </CourseShell>
  );
}