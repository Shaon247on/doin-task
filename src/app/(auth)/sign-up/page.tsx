import type { Metadata } from "next";

import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Create an account",
  robots: { index: false, follow: true },
};

export default function JoinPage() {
  return <SignUpForm />;
}