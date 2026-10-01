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
  {
    courseId: "1",
    averageRating: 4.5,
    totalReviews: 59,
    ratingCounts: [
      { stars: 5, count: 40 },
      { stars: 4, count: 12 },
      { stars: 3, count: 5 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 },
    ],
    reviews: [
      {
        id: "figma-review-1",
        author: "Jamie Park",
        role: "Junior Product Designer",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        timeAgo: "2 months ago",
        rating: 5,
        content: "A really approachable first step into Figma. I finished with a working prototype and finally understand how components fit into a design workflow.",
      },
      {
        id: "figma-review-2",
        author: "Noah Bennett",
        role: "Design Student",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        timeAgo: "3 weeks ago",
        rating: 5,
        content: "The lessons are short, clear, and easy to follow along with. The practice files made it simple to revisit the steps after class.",
      },
      {
        id: "figma-review-3",
        author: "Avery Morgan",
        role: "Graphic Designer",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        timeAgo: "1 week ago",
        rating: 4,
        content: "A solid introduction for anyone moving from graphic design into interface design. I would have enjoyed one more advanced prototype example.",
      },
    ],
  },
  {
    courseId: "2",
    averageRating: 4.5,
    totalReviews: 59,
    ratingCounts: [
      { stars: 5, count: 39 },
      { stars: 4, count: 13 },
      { stars: 3, count: 5 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 },
    ],
    reviews: [
      {
        id: "wellness-review-1",
        author: "Taylor Brooks",
        role: "Freelance Designer",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        timeAgo: "4 months ago",
        rating: 5,
        content: "This helped me rethink my week in a practical way. The planning exercises are simple enough to keep using after finishing the course.",
      },
      {
        id: "wellness-review-2",
        author: "Chris Rivera",
        role: "Small Business Owner",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        timeAgo: "6 weeks ago",
        rating: 5,
        content: "I appreciated that the course focuses on sustainable routines instead of squeezing more tasks into the day. The weekly reset is now part of my routine.",
      },
      {
        id: "wellness-review-3",
        author: "Morgan Ellis",
        role: "Content Creator",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        timeAgo: "2 weeks ago",
        rating: 4,
        content: "Clear, thoughtful lessons with ideas I could test immediately. It helped me make room for breaks without feeling behind.",
      },
    ],
  },
];