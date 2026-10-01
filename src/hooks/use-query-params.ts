"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type ParamValue = string | number | null | undefined;

type SetOptions = {
  resetPage?: boolean;
  replace?: boolean;
  hash?: string;
};

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParams = useCallback(
    (updates: Record<string, ParamValue>, options: SetOptions = {}) => {
      const { resetPage = true, replace = false, hash } = options;
      const next = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(updates)) {
        if (value === null || value === undefined || value === "") next.delete(key);
        else next.set(key, String(value));
      }
      if (resetPage && !("page" in updates)) next.delete("page");

      const query = next.toString();
      const url = `${pathname}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
      router[replace ? "replace" : "push"](url, { scroll: Boolean(hash) });
    },
    [pathname, router, searchParams],
  );

  return { searchParams, setParams };
}