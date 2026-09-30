"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import {
  contactSchema,
  type ContactFormValues,
} from "@/schemas/contact.schema";

type CreatorOption = {
  slug: string;
  name: string;
};

export function ContactForm({
  creators,
  selectedCreatorSlug = "",
}: {
  creators: CreatorOption[];
  selectedCreatorSlug?: string;
}) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      creatorSlug: selectedCreatorSlug,
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (values: ContactFormValues) => {
    const inbox = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (!inbox) {
      toast.info("Your question is ready", {
        description:
          "It has not been sent because a contact inbox is not configured yet.",
      });
      return;
    }

    const creator = creators.find((item) => item.slug === values.creatorSlug);

    const subject = encodeURIComponent(values.subject);

    const body = encodeURIComponent(
      `Question for: ${creator?.name ?? "ByteSpace creator"}\nFrom: ${values.name} <${values.email}>\n\n${values.message}`,
    );

    const mailtoUrl = `mailto:${inbox}?subject=${subject}&body=${body}`;

    window.location.assign(mailtoUrl);

    toast.success("Your email app is opening", {
      description:
        "Review your question there and send it to the ByteSpace team.",
    });
  };

  return (
    <>
      <Toaster position="top-center" richColors />

      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FieldGroup className="gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-name">Your name</FieldLabel>

                  <Input
                    {...field}
                    id="contact-name"
                    autoComplete="name"
                    placeholder="Name"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-border bg-white px-4 md:text-base"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-email">Email address</FieldLabel>

                  <Input
                    {...field}
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-border bg-white px-4 md:text-base"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="creatorSlug"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-creator">Ask a creator</FieldLabel>

                <select
                  {...field}
                  id="contact-creator"
                  aria-invalid={fieldState.invalid}
                  className="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                >
                  <option value="">Choose a creator</option>

                  {creators.map((creator) => (
                    <option key={creator.slug} value={creator.slug}>
                      {creator.name}
                    </option>
                  ))}
                </select>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>

                <Input
                  {...field}
                  id="contact-subject"
                  placeholder="What is your question about?"
                  aria-invalid={fieldState.invalid}
                  className="h-12 rounded-xl border-border bg-white px-4 md:text-base"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-message">Your question</FieldLabel>

                <textarea
                  {...field}
                  id="contact-message"
                  rows={6}
                  maxLength={3000}
                  placeholder="Write your question here..."
                  aria-invalid={fieldState.invalid}
                  className="w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-base outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                />

                <FieldDescription>
                  {field.value.length}/3000 characters
                </FieldDescription>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-5 text-muted-foreground">
            Your message is prepared for the ByteSpace contact inbox. It will
            open in your email app when an inbox is configured.
          </p>

          <Button type="submit" disabled={form.formState.isSubmitting}>
            Send question
          </Button>
        </div>
      </form>
    </>
  );
}
