import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";

import { LandingShell } from "@/components/layout/LandingShell";

export const metadata: Metadata = {
  description:
    "Explore practical courses, learn from independent creators, and build your next skill with ByteSpace.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <section >
      <div>
        <LandingShell>{children}</LandingShell>
      </div>
    </section>
  );
}
