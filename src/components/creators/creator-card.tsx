import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { StarIcon, UsersIcon } from "@/components/icons/Icons";
import { Badge } from "@/components/ui/badge";
import type { Creator } from "@/types/creator.type";

export function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-[#CED0D3] bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <div className="flex items-start gap-4">
        <Image
          src={creator.avatarUrl}
          alt={`${creator.name} portrait`}
          width={72}
          height={72}
          sizes="72px"
          className="size-16 shrink-0 rounded-full object-cover sm:size-[72px]"
        />
        <div className="min-w-0 flex-1 pt-1">
          <h2 className="truncate text-lg font-semibold text-foreground sm:text-xl">
            <Link
              href={`/creators/${creator.slug}`}
              className="rounded-sm outline-none transition-colors hover:text-hero focus-visible:ring-2 focus-visible:ring-ring"
            >
              {creator.name}
            </Link>
          </h2>
          <p className="mt-1 line-clamp-2 text-sm leading-5 text-muted-foreground">
            {creator.headline}
          </p>
        </div>
      </div>

      <p className="mt-5 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">
        {creator.bio}
      </p>

      <ul aria-label={`${creator.name} specialties`} className="mt-4 flex flex-wrap gap-2">
        {creator.specialties.slice(0, 3).map((specialty) => (
          <li key={specialty}>
            <Badge variant="secondary" className="max-w-full truncate rounded-full px-3 py-1 text-xs font-medium">
              {specialty}
            </Badge>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-sm">
        <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
          <StarIcon width={15} height={15} color="#1745E8" aria-hidden="true" />
          {creator.rating.toFixed(1)}
          <span className="font-normal text-muted-foreground">({creator.reviewCount.toLocaleString()})</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <UsersIcon width={17} height={17} aria-hidden="true" />
          {creator.studentCount.toLocaleString()} learners
        </span>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{creator.courseCount}</span>{" "}
          {creator.courseCount === 1 ? "course" : "courses"}
        </p>
        <Link
          href={`/creators/${creator.slug}`}
          aria-label={`View ${creator.name}'s profile`}
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          View profile
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}