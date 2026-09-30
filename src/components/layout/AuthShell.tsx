"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

import { HeroGrid } from "@/components/shared/hero-grid";
import {
  AuthTransitionProvider,
  useAuthTransition,
} from "../auth/auth-transition";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import Logo from "../shared/Logo";

// Code-split + desktop only: phones/tablets never download the cards,
// elements or their animations.
const AuthShowcase = dynamic(
  () => import("../auth/auth-showcase").then((m) => m.AuthShowcase),
  {
    ssr: false,
  },
);

/**
 * Form card:
 * slides/rotates out on click, then the new one
 * slides/rotates in from the opposite side.
 */
const panelVariants: Variants = {
  from: (d: number) => ({
    opacity: 0,
    x: 60 * d,
    rotate: 2 * d,
    scale: 0.96,
  }),

  enter: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 26,
    },
  },

  exit: (d: number) => ({
    opacity: 0,
    x: -60 * d,
    rotate: -2 * d,
    scale: 0.96,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  }),
};

function ShellInner({ children }: { children: ReactNode }) {
  const { mode, isLeaving } = useAuthTransition();
  const pathname = usePathname();
  const isDesktop = useIsDesktop();

  const dir = mode === "signIn" ? 1 : -1;

  return (
    <div className="relative isolate min-h-svh overflow-hidden bg-hero">
      <HeroGrid />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-340 flex-col px-4 py-6 sm:px-6 lg:px-8">
        {/* TODO: replace this placeholder with your logo */}
        <Logo isOnlyTest={false} />

        <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-2 lg:gap-16">
          <div className="hidden lg:block">
            {isDesktop && <AuthShowcase mode={mode} />}
          </div>

          <motion.div
            key={pathname}
            custom={dir}
            variants={panelVariants}
            initial={false}
            animate={isLeaving ? "exit" : "enter"}
            className="mx-auto flex w-full max-w-xl flex-col rounded-[28px] bg-white p-6 sm:p-10 lg:max-w-none lg:min-h-175 lg:p-16"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/**
 * Wrap (auth)/layout.tsx children with this.
 * Layout itself stays a server component.
 */
export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <AuthTransitionProvider>
      <ShellInner>{children}</ShellInner>
    </AuthTransitionProvider>
  );
}
