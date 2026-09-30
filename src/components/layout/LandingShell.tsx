import type { ReactNode } from "react";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "../shared/Footer";

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