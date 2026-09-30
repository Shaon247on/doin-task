import type { CourseLessons } from "@/types/course.type";

const lessonTitles = [
  "Understanding the essentials",
  "Planning your creative direction",
  "Building a strong visual system",
  "Working with color and type",
  "Creating reusable components",
  "Preparing assets for delivery",
  "Reviewing and refining your work",
  "Putting your skills into practice",
  "Exploring professional workflows",
  "Sharing your finished project",
  "Improving accessibility",
  "Managing feedback and revisions",
  "Publishing across platforms",
  "Organizing your source files",
  "Building a polished portfolio",
  "Course recap and next steps",
];

const moduleInfo = [
  {
    id: "module-1",
    title: "Introduction to Digital Assets",
    description: "Lay the groundwork with core concepts and a clear creative process.",
  },
  {
    id: "module-2",
    title: "Design Principles for Impact",
    description: "Apply hierarchy, contrast, color, and typography with intention.",
  },
  {
    id: "module-3",
    title: "User-Centric Design Strategies",
    description: "Shape useful experiences around the needs of real audiences.",
  },
  {
    id: "module-4",
    title: "Interactive Media and Engagement",
    description: "Create engaging digital experiences for modern platforms.",
  },
  {
    id: "module-5",
    title: "Project Showcase and Critique",
    description: "Present your work, gather feedback, and make focused improvements.",
  },
  {
    id: "module-6",
    title: "Optimizing Assets for Platforms",
    description: "Prepare and deliver accessible assets across different devices.",
  },
  {
    id: "module-7",
    title: "Portfolio and Next Steps",
    description: "Bring your work together and plan your next creative project.",
  },
];

export const MOCK_COURSE_LESSONS: CourseLessons[] = [
  {
    courseId: "3",
    modules: moduleInfo.map((module, moduleIndex) => ({
      ...module,
      lessons: lessonTitles.map((title, lessonIndex) => ({
        id: `${module.id}-lesson-${lessonIndex + 1}`,
        title: `${title} - Part ${lessonIndex + 1}`,
        duration: moduleIndex < 6 ? "13 mins" : "12 mins",
        isPreview: moduleIndex === 0 && lessonIndex === 0,
      })),
    })),
  },
];