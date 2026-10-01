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
  {
    courseId: "1",
    modules: [
      {
        id: "figma-foundations",
        title: "Getting Started with Figma",
        description: "Learn the workspace and create a clean foundation for your first design file.",
        lessons: [
          { id: "figma-1", title: "Welcome and course project", duration: "8 mins", isPreview: true },
          { id: "figma-2", title: "Tour the Figma workspace", duration: "8 mins" },
          { id: "figma-3", title: "Pages, layers, and frames", duration: "8 mins" },
          { id: "figma-4", title: "Move, resize, and align objects", duration: "8 mins" },
          { id: "figma-5", title: "Use color and typography styles", duration: "8 mins" },
          { id: "figma-6", title: "Organize your first design file", duration: "8 mins" },
        ],
      },
      {
        id: "figma-interface-design",
        title: "Designing Your First Interface",
        description: "Turn a simple brief into a consistent, well-structured interface.",
        lessons: [
          { id: "figma-7", title: "Plan the screen layout", duration: "8 mins" },
          { id: "figma-8", title: "Create reusable components", duration: "8 mins" },
          { id: "figma-9", title: "Build buttons and form controls", duration: "8 mins" },
          { id: "figma-10", title: "Apply spacing and visual hierarchy", duration: "8 mins" },
          { id: "figma-11", title: "Adapt the design for mobile", duration: "8 mins" },
          { id: "figma-12", title: "Review and refine your screen", duration: "8 mins" },
        ],
      },
      {
        id: "figma-prototyping",
        title: "Prototyping and Sharing",
        description: "Connect your screens and prepare the finished project for feedback.",
        lessons: [
          { id: "figma-13", title: "Connect screens and interactions", duration: "8 mins" },
          { id: "figma-14", title: "Add transitions to your prototype", duration: "8 mins" },
          { id: "figma-15", title: "Preview the complete user flow", duration: "8 mins" },
          { id: "figma-16", title: "Share your work for feedback", duration: "8 mins" },
          { id: "figma-17", title: "Wrap up and next steps", duration: "8 mins" },
        ],
      },
    ],
  },
  {
    courseId: "2",
    modules: [
      {
        id: "wellness-awareness",
        title: "Understanding Your Work Rhythm",
        description: "Notice how your energy, attention, and routines affect your day.",
        lessons: [
          { id: "wellness-1", title: "Welcome and course reflection", duration: "8 mins", isPreview: true },
          { id: "wellness-2", title: "Define productivity on your terms", duration: "8 mins" },
          { id: "wellness-3", title: "Map your energy through the day", duration: "8 mins" },
          { id: "wellness-4", title: "Spot common sources of stress", duration: "8 mins" },
          { id: "wellness-5", title: "Set boundaries around your focus", duration: "8 mins" },
          { id: "wellness-6", title: "Choose a personal wellbeing goal", duration: "8 mins" },
        ],
      },
      {
        id: "wellness-planning",
        title: "Planning for Meaningful Work",
        description: "Make a realistic plan that supports focus without filling every moment.",
        lessons: [
          { id: "wellness-7", title: "Choose your most important work", duration: "8 mins" },
          { id: "wellness-8", title: "Break projects into manageable steps", duration: "8 mins" },
          { id: "wellness-9", title: "Build a flexible weekly rhythm", duration: "8 mins" },
          { id: "wellness-10", title: "Schedule focused work sessions", duration: "8 mins" },
          { id: "wellness-11", title: "Use breaks to restore attention", duration: "8 mins" },
          { id: "wellness-12", title: "Protect time for life outside work", duration: "8 mins" },
        ],
      },
      {
        id: "wellness-habits",
        title: "Building Sustainable Habits",
        description: "Practice small changes and learn how to keep adjusting your approach.",
        lessons: [
          { id: "wellness-13", title: "Make new habits easier to start", duration: "8 mins" },
          { id: "wellness-14", title: "Create a calmer end-of-day routine", duration: "8 mins" },
          { id: "wellness-15", title: "Review your progress without judgment", duration: "8 mins" },
          { id: "wellness-16", title: "Adjust your plan when life changes", duration: "8 mins" },
          { id: "wellness-17", title: "Create your personal weekly reset", duration: "8 mins" },
        ],
      },
    ],
  },
];