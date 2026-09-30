import { MOCK_CREATORS } from "@/mocks/creators.mock";
import type { CreatorPageResult, CreatorSearchParams } from "@/types/creator.type";
import { CREATOR_PAGE_SIZE } from "./constants";

export async function getCreatorBySlug(slug: string) {
  return MOCK_CREATORS.find((creator) => creator.slug === slug) ?? null;
}

export async function getCreators(params: CreatorSearchParams): Promise<CreatorPageResult> {
  const query = params.q.toLocaleLowerCase();
  let creators = MOCK_CREATORS.filter((creator) => {
    const searchable = [creator.name, creator.headline, creator.bio, ...creator.specialties]
      .join(" ")
      .toLocaleLowerCase();

    if (query && !searchable.includes(query)) return false;
    if (params.specialty && !creator.specialties.includes(params.specialty)) return false;
    return true;
  });

  switch (params.sort) {
    case "rating":
      creators = [...creators].sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
      break;
    case "courses":
      creators = [...creators].sort((a, b) => b.courseCount - a.courseCount);
      break;
    case "students":
      creators = [...creators].sort((a, b) => b.studentCount - a.studentCount);
      break;
    default:
      if (query) {
        creators = [...creators].sort(
          (a, b) => Number(!a.name.toLocaleLowerCase().startsWith(query)) - Number(!b.name.toLocaleLowerCase().startsWith(query)),
        );
      }
  }

  const total = creators.length;
  const totalPages = Math.max(1, Math.ceil(total / CREATOR_PAGE_SIZE));
  const page = Math.min(params.page, totalPages);

  return {
    creators: creators.slice((page - 1) * CREATOR_PAGE_SIZE, page * CREATOR_PAGE_SIZE),
    total,
    page,
    pageSize: CREATOR_PAGE_SIZE,
    totalPages,
  };
}