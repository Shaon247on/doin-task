"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { ChevronDownIcon } from "@/components/icons/Icons";

type UrlPaginationProps = {
  page: number;
  totalPages: number;
  hash?: string;
  className?: string;
};

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, index) => from + index);

export function getPageItems(page: number, total: number, siblings = 1) {
  if (total <= siblings * 2 + 5) return range(1, total);

  const left = Math.max(page - siblings, 1);
  const right = Math.min(page + siblings, total);
  const dotsLeft = left > 2;
  const dotsRight = right < total - 1;
  const edgeCount = 3 + siblings * 2;

  if (!dotsLeft && dotsRight) return [...range(1, edgeCount), "dots" as const, total];
  if (dotsLeft && !dotsRight) return [1, "dots" as const, ...range(total - edgeCount + 1, total)];
  return [1, "dots" as const, ...range(left, right), "dots" as const, total];
}

export function UrlPagination({ page, totalPages, hash, className = "" }: UrlPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const hrefFor = (targetPage: number) => {
    const next = new URLSearchParams(searchParams.toString());
    if (targetPage <= 1) next.delete("page");
    else next.set("page", String(targetPage));
    const query = next.toString();
    return `${pathname}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
  };

  const arrowClass =
    "grid size-10 place-items-center rounded-full border border-[#CED0D3] bg-white transition-colors hover:bg-muted sm:size-11";
  const items = getPageItems(page, totalPages);

  return (
    <nav aria-label="Pagination" className={`flex items-center justify-center gap-1 sm:gap-2 ${className}`}>
      {page > 1 ? (
        <Link href={hrefFor(page - 1)} scroll={Boolean(hash)} aria-label="Previous page" className={arrowClass}>
          <ChevronDownIcon className="rotate-90" />
        </Link>
      ) : (
        <span aria-disabled="true" className={`${arrowClass} opacity-40`}>
          <ChevronDownIcon className="rotate-90" />
        </span>
      )}

      {items.map((item, index) =>
        item === "dots" ? (
          <span key={`dots-${index}`} aria-hidden="true" className="px-1 text-foreground/50">
            …
          </span>
        ) : (
          <Link
            key={item}
            href={hrefFor(item)}
            scroll={Boolean(hash)}
            aria-label={`Page ${item}`}
            aria-current={item === page ? "page" : undefined}
            className={`grid size-9 place-items-center rounded-full text-base font-medium transition-colors sm:size-10 ${
              item === page ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            {item}
          </Link>
        ),
      )}

      {page < totalPages ? (
        <Link href={hrefFor(page + 1)} scroll={Boolean(hash)} aria-label="Next page" className={arrowClass}>
          <ChevronDownIcon className="-rotate-90" />
        </Link>
      ) : (
        <span aria-disabled="true" className={`${arrowClass} opacity-40`}>
          <ChevronDownIcon className="-rotate-90" />
        </span>
      )}
    </nav>
  );
}