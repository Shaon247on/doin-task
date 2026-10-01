import type { ReactNode } from "react";

import { AuthSwitchLink } from "./auth-transition";

export const AUTH_INPUT_CLASS =
  "h-13 rounded-xl border-[#CED0D3] bg-white px-5 text-base placeholder:text-foreground/40 md:text-base";

export const AUTH_LABEL_CLASS = "text-sm font-medium text-foreground";

export function AuthHeading({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  return (
    <div>
      <p className="text-base text-hero lg:text-lg">{eyebrow}</p>
      <h1 className="mt-1 font-poppins text-3xl font-semibold leading-tight text-foreground sm:text-4xl xl:text-[44px]">
        {title}
      </h1>
    </div>
  );
}

/** "Already have an account? Login" style footer, pinned to the bottom of the card. */
export function AuthSwitch({
  text,
  label,
  href,
}: {
  text: string;
  label: string;
  href: string;
}) {
  return (
    <p className="mt-auto pt-10 text-center text-base text-foreground/80">
      {text}{" "}
      <AuthSwitchLink href={href} className="text-hero underline-offset-4 hover:underline">
        {label}
      </AuthSwitchLink>
    </p>
  );
}