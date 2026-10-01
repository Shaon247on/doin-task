import type { MetadataRoute } from "next";

import { MOCK_COURSE_DETAILS } from "@/mocks/course-details.mock";
import { MOCK_COURSES } from "@/mocks/coursCard.mocks";
import { MOCK_CREATORS } from "@/mocks/creators.mock";

const STATIC_PATHS = [
  "/",
  "/courses",
  "/creators",
  "/about",
  "/affiliate",
  "/help",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL;
  if (!siteUrl) return [];

  const coursePaths = MOCK_COURSES.filter((course) =>
    MOCK_COURSE_DETAILS.some((details) => details.courseId === course.id),
  ).map((course) => `/courses/${course.slug}/about`);
  const creatorPaths = MOCK_CREATORS.map((creator) => `/creators/${creator.slug}`);
  const paths = [...STATIC_PATHS, ...coursePaths, ...creatorPaths];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : path === "/courses" || path === "/creators" ? 0.9 : 0.7,
  }));
}