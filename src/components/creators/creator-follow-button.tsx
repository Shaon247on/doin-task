"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export function CreatorFollowButton({
  productCount,
  initialFollowerCount = 0,
}: {
  productCount: number;
  initialFollowerCount?: number;
}) {
  const [following, setFollowing] = useState(false);
  const followerCount = initialFollowerCount + Number(following);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-hero">
          <span className="font-semibold">{productCount.toLocaleString()}</span>
          {productCount === 1 ? "Product" : "Products"}
        </span>
        <span className="inline-flex min-h-10 items-center rounded-full bg-white px-4 text-sm font-medium text-hero">
          {followerCount.toLocaleString()} Followers
        </span>
      </div>
      <Button
        type="button"
        aria-pressed={following}
        onClick={() => setFollowing((current) => !current)}
        className="ml-auto min-h-10 shrink-0 rounded-full px-6 text-sm"
      >
        {following ? "Following" : "Follow"}
      </Button>
    </div>
  );
}