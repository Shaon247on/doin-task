"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SearchIcon() {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
    >
      <path
        d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/courses?q=${encodeURIComponent(q)}` : "/courses");
  };

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className="mt-8 flex w-full max-w-xl items-center gap-3 md:mt-12"
    >
      <div className="relative flex-1">
        <SearchIcon />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          aria-label="Search courses, topics or creators"
          className="h-13 w-full rounded-full border-0 bg-white pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground md:text-base"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}