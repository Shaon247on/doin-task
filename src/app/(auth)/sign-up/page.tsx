import type { Metadata } from "next";

import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = { title: "Create an account" };

export default function JoinPage() {
  return <SignUpForm />;
}