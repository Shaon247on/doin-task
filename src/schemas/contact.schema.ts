import * as z from "zod";

export const contactSchema = z.object({
  creatorSlug: z.string().min(1, "Choose a creator to contact."),
  name: z
    .string()
    .trim()
    .min(2, "Enter at least 2 characters.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z.string().trim().email("Enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(120, "Subject must be 120 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(20, "Your question must be at least 20 characters.")
    .max(3000, "Your question must be 3,000 characters or fewer."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;