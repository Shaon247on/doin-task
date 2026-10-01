"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { label: "About", path: "about" },
  { label: "Lesson", path: "lessons" },
  { label: "Reviews", path: "reviews" },
] as const;

export function CourseTabs({ slug }: { slug: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Course sections" className="flex gap-2 border-b border-border">
      {TABS.map(({ label, path }) => {
        const href = `/courses/${slug}/${path}`;
        const active = pathname === href;

        return (
          <Link
            key={path}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`relative -mb-px inline-flex min-h-11 items-center rounded-t-lg px-4 text-sm font-medium transition-colors ${
              active
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}