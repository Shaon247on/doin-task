import type { z } from "zod";

import type { signInSchema, signUpSchema } from "@/schemas/auth.schema";

export type SignUpValues = z.infer<typeof signUpSchema>;
export type SignInValues = z.infer<typeof signInSchema>;

export type AuthMode = "signIn" | "signUp";
