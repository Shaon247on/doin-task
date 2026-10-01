import Image from "next/image";

import { HeroGrid } from "@/components/shared/hero-grid";
import { Badge } from "@/components/ui/badge";
import type { Creator } from "@/types/creator.type";
import { CreatorFollowButton } from "./creator-follow-button";

export function CreatorProfileHero({
  creator,
  productCount,
}: {
  creator: Creator;
  productCount: number;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-hero">
      <HeroGrid />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-24 text-white sm:px-6 sm:pb-12 md:pt-28 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-5">
          <Image
            src={creator.avatarUrl}
            alt={`${creator.name} portrait`}
            width={88}
            height={88}
            priority
            sizes="(max-width: 640px) 72px, 88px"
            className="size-18 shrink-0 rounded-2xl object-cover sm:size-22"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-poppins text-2xl font-semibold leading-tight sm:text-3xl">
                {creator.name}
              </h1>
              <Badge className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                Creator
              </Badge>
            </div>
            <p className="mt-2 text-sm text-white/85 sm:text-base">
              {creator.headline}
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-5xl whitespace-pre-line text-sm leading-6 text-white/90 sm:mt-7 sm:text-base sm:leading-7">
          {creator.bio}
        </p>

        <div className="mt-7">
          <CreatorFollowButton
            productCount={productCount}
            initialFollowerCount={creator.followerCount}
          />
        </div>
      </div>
    </section>
  );
}