import type { CourseReviews } from "@/types/course.type";

export const MOCK_COURSE_REVIEWS: CourseReviews[] = [
  {
    courseId: "3",
    averageRating: 4.8,
    totalReviews: 172,
    ratingCounts: [
      { stars: 5, count: 149 },
      { stars: 4, count: 16 },
      { stars: 3, count: 4 },
      { stars: 2, count: 2 },
      { stars: 1, count: 1 },
    ],
    reviews: [
      {
        id: "review-1",
        author: "PurePearl Studio",
        role: "UI/UX Designer",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        timeAgo: "A year ago",
        rating: 5,
        content:
          "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
      },
      {
        id: "review-2",
        author: "Albert Flores",
        role: "Product Designer",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        timeAgo: "8 months ago",
        rating: 5,
        content:
          "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience.",
      },
      {
        id: "review-3",
        author: "Cody Fisher",
        role: "Visual Designer",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        timeAgo: "6 months ago",
        rating: 5,
        content:
          "The project showcase and critique modules created a collaborative environment where I could refine my skills and build confidence in my work.",
      },
      {
        id: "review-4",
        author: "Brooklyn Simmons",
        role: "Creative Director",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        timeAgo: "3 months ago",
        rating: 4,
        content:
          "The lessons on optimizing digital assets for different platforms were especially useful. The material is clear, thoughtfully paced, and easy to apply.",
      },
    ],
  },
];