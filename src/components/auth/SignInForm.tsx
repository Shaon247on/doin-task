"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { signInSchema } from "@/schemas/auth.schema";
import type { SignInValues } from "@/types/auth.type";
import {
  AUTH_INPUT_CLASS,
  AUTH_LABEL_CLASS,
  AuthHeading,
  AuthSwitch,
} from "./auth-form-parts";
import { AuthSocialButtons } from "./auth-social-buttons";

export function SignInForm() {
  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  async function onSubmit(data: SignInValues) {
    console.log(data)
    // TODO: replace with your API call / server action (use `data.email`, `data.password`)
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success("Signed in", { description: "Welcome back to ByteSpace!" });
    form.reset();
  }

  return (
    <div className="flex flex-1 flex-col">
      <AuthHeading eyebrow="Sign In" title="Welcome Back" />

      <form id="form-sign-in" onSubmit={form.handleSubmit(onSubmit)} noValidate className="mt-8 xl:mt-10">
        <FieldGroup className="gap-5">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-sign-in-email" className={AUTH_LABEL_CLASS}>
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-in-email"
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
                <FieldLabel htmlFor="form-sign-in-password" className={AUTH_LABEL_CLASS}>
                  Password
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-in-password"
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="********"
                  autoComplete="current-password"
                  className={AUTH_INPUT_CLASS}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="mt-8 flex justify-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Please wait…" : "Sign In"}
          </Button>
        </div>
      </form>

      <div className="mt-8 flex items-center gap-4 text-sm text-foreground/60" role="separator">
        <span className="h-px flex-1 bg-[#CED0D3]" />
        or
        <span className="h-px flex-1 bg-[#CED0D3]" />
      </div>

      <div className="mt-6">
        <AuthSocialButtons />
      </div>

      <AuthSwitch text="New user?" label="Create an account" href={AUTH_ROUTES.signUp} />
    </div>
  );
}