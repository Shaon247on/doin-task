
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Your site",
  description: "Your description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <div>
        {children}
      </div>
    </section>
  );
}