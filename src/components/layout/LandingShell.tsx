import type { ReactNode } from "react";

import { Navbar } from "@/components/shared/Navbar";

/**
 * Wraps every page with the shared landing chrome.
 * Server component on purpose: only <Navbar /> needs to be a client component.
 * <main> has no top padding so heroes can sit underneath the transparent navbar;
 * give inner pages their own top padding (e.g. `pt-20`) if they don't start with a hero.
 */
export function LandingShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      {/* <Footer /> goes here later */}
    </div>
  );
}