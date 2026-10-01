import type { ReactNode } from "react";

import { AuthShell } from "@/components/layout/AuthShell";
import { Toaster } from "@/components/ui/sonner";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthShell>{children}</AuthShell>
      <Toaster position="top-center" richColors />
    </>
  );
}