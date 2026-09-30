import type { Metadata } from "next";
import { cookies } from "next/headers";

import { CookieSettingsForm } from "@/components/cookies/cookie-settings-form";
import {
  COOKIE_PREFERENCES_COOKIE_NAME,
  DEFAULT_COOKIE_PREFERENCES,
  parseCookiePreferences,
} from "@/lib/cookies/preferences";

export const metadata: Metadata = { title: "Cookie Settings" };

export default async function CookieSettingsPage() {
  const cookieStore = await cookies();
  const initialPreferences =
    parseCookiePreferences(cookieStore.get(COOKIE_PREFERENCES_COOKIE_NAME)?.value) ??
    DEFAULT_COOKIE_PREFERENCES;

  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
      <p className="text-sm font-medium text-hero">Privacy</p>
      <h1 className="mt-2 font-poppins text-3xl font-semibold text-foreground sm:text-4xl">
        Cookie settings
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
        Choose which optional cookies ByteSpace may use. Necessary cookies are always active because
        the site needs them to function and remember your privacy choices.
      </p>

      <div className="mt-8">
        <CookieSettingsForm initialPreferences={initialPreferences} />
      </div>
    </section>
  );
}