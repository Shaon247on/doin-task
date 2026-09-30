"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

import { AUTH_ROUTES } from "@/lib/auth/routes";
import type { AuthMode } from "@/types/auth.type";

const EXIT_MS = 320;

type AuthTransitionValue = {
  /** Mode of the page we are on, or of the page we are switching to (updates instantly on click) */
  mode: AuthMode;
  /** true while the current form is animating out, right before the route changes */
  isLeaving: boolean;
  goTo: (href: string) => void;
};

const AuthTransitionContext = createContext<AuthTransitionValue | null>(null);

export function useAuthTransition() {
  const ctx = useContext(AuthTransitionContext);
  if (!ctx) throw new Error("useAuthTransition must be used inside <AuthTransitionProvider>");
  return ctx;
}

const modeFromPath = (path: string): AuthMode =>
  path.startsWith(AUTH_ROUTES.signIn) ? "signIn" : "signUp";

/**
 * Coordinates the sign-in <-> sign-up switch:
 * click -> cards start swapping + current form animates out -> router.push -> new form animates in.
 * (Back/forward buttons skip the exit phase and just play the enter animation.)
 */
export function AuthTransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduce = useReducedMotion();
  const [pending, setPending] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setPending(null);
  }, [pathname]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const goTo = useCallback(
    (href: string) => {
      if (href === pathname) return;
      if (reduce) {
        router.push(href);
        return;
      }
      setPending(href);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => router.push(href), EXIT_MS);
    },
    [pathname, reduce, router]
  );

  const value = useMemo<AuthTransitionValue>(
    () => ({
      mode: modeFromPath(pending ?? pathname),
      isLeaving: pending !== null,
      goTo,
    }),
    [pending, pathname, goTo]
  );

  return <AuthTransitionContext.Provider value={value}>{children}</AuthTransitionContext.Provider>;
}

/** Link between the two auth pages that plays the swap animation before navigating. */
export function AuthSwitchLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const { goTo } = useAuthTransition();

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // let the browser handle new-tab / modified clicks
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    goTo(href);
  };

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}