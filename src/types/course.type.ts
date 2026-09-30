export interface Course {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  author: {
    name: string;
    url?: string;
  };
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  enrolledStudents: {
    id: string;
    name: string;
    avatarUrl: string;
  }[];
  totalEnrolledCount: number;
  price: number;
  billingType: string; // e.g. "lifetime", "month", "year"
}

export interface CourseDetails {
  courseId: string;
  headline: string;
  subtitle: string;
  previewImage: string;
  lessonsCount: number;
  duration: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  instructorRole: string;
  instructorBio: string;
  instructorAvatarUrl: string;
  enrollmentMessage: string;
  includedItems: string[];
}

export interface CourseAbout {
  courseId: string;
  description: string[];
  sneakPeek: { image: string; alt: string }[];
  keyPoints: string[];
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
}

export interface CourseLessons {
  courseId: string;
  modules: CourseModule[];
}

export interface CourseReviewItem {
  id: string;
  author: string;
  role: string;
  avatarUrl: string;
  timeAgo: string;
  rating: 1 | 2 | 3 | 4 | 5;
  content: string;
}

export interface CourseRatingCount {
  stars: 1 | 2 | 3 | 4 | 5;
  count: number;
}

export interface CourseReviews {
  courseId: string;
  averageRating: number;
  totalReviews: number;
  ratingCounts: CourseRatingCount[];
  reviews: CourseReviewItem[];
}