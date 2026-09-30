"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { signUpSchema } from "@/schemas/auth.schema";
import type { SignUpValues } from "@/types/auth.type";
import {
  AUTH_INPUT_CLASS,
  AUTH_LABEL_CLASS,
  AuthHeading,
  AuthSwitch,
} from "./auth-form-parts";

export function SignUpForm() {
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", email: "", password: "" },
    mode: "onTouched",
  });

  async function onSubmit(data: SignUpValues) {
    // TODO: replace with your API call / server action
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success("Account created", {
      description: `Welcome to ByteSpace, ${data.fullName.split(" ")[0]}!`,
    });
    form.reset();
  }

  return (
    <div className="flex flex-1 flex-col">
      <AuthHeading
        eyebrow="Create an Account"
        title={
          <>
            Welcome to
            <br />
            ByteSpace
          </>
        }
      />

      <form id="form-sign-up" onSubmit={form.handleSubmit(onSubmit)} noValidate className="mt-8 lg:mt-10">
        <FieldGroup className="gap-5">
          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-sign-up-name" className={AUTH_LABEL_CLASS}>
                  Full Name
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-up-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Jamie Davis"
                  autoComplete="name"
                  className={AUTH_INPUT_CLASS}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-sign-up-email" className={AUTH_LABEL_CLASS}>
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-up-email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="designer@example.com"
                  autoComplete="email"
                  className={AUTH_INPUT_CLASS}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-sign-up-password" className={AUTH_LABEL_CLASS}>
                  Password
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-up-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="********"
                  autoComplete="new-password"
                  className={AUTH_INPUT_CLASS}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="mt-8 flex justify-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Please wait…" : "Continue"}
          </Button>
        </div>
      </form>

      <AuthSwitch text="Already have an account?" label="Login" href={AUTH_ROUTES.signIn} />
    </div>
  );
}