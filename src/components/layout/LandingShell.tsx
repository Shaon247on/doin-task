import type { ReactNode } from "react";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "../shared/Footer";

/**
 * Wraps every page with the shared landing chrome.
 * Server component on purpose: only <Navbar /> needs to be a client component.
 * <main> has no top padding so heroes can sit underneath the transparent navbar;
 * give inner pages their own top padding (e.g. `pt-20`) if they don't start with a hero.
 */
export function LandingShell({ children }: { children: ReactNode }) {
  return (
    <section className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
      <Navbar />
        {children}
        <Footer/>
        </main>
    </section>
  );
}