import * as z from "zod";

const email = z
  .string()
  .min(1, "Email is required.")
  .email("Enter a valid email address.");

export const signUpSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(60, "Full name must be at most 60 characters."),
  email,
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(64, "Password must be at most 64 characters.")
    .regex(/[A-Za-z]/, "Password must include at least one letter.")
    .regex(/\d/, "Password must include at least one number."),
});

export const signInSchema = z.object({
  email,
  password: z.string().min(1, "Password is required."),
});