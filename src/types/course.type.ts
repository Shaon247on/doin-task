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