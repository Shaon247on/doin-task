export type Creator = {
  id: string;
  slug: string;
  name: string;
  avatarUrl: string;
  headline: string;
  bio: string;
  specialties: string[];
  courseCount: number;
  studentCount: number;
  rating: number;
  reviewCount: number;
};

export type CreatorSort = "relevant" | "rating" | "courses" | "students";

export type CreatorSearchParams = {
  q: string;
  page: number;
  specialty?: string;
  sort: CreatorSort;
};

export type CreatorPageResult = {
  creators: Creator[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};