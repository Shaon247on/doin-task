import type { CookiePreferences } from "@/types/cookie-preferences.type";

export const COOKIE_PREFERENCES_COOKIE_NAME = "bytespace-cookie-preferences";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export const ACCEPT_ALL_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: true,
  analytics: true,
  marketing: true,
};

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof document === "undefined") return null;

  const cookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_PREFERENCES_COOKIE_NAME}=`));

  if (!cookie) return null;

  return parseCookiePreferences(
    cookie.slice(COOKIE_PREFERENCES_COOKIE_NAME.length + 1),
  );
}

export function parseCookiePreferences(rawValue: string | undefined): CookiePreferences | null {
  if (!rawValue) return null;

  const candidates = [rawValue];
  try {
    const decoded = decodeURIComponent(rawValue);
    if (decoded !== rawValue) candidates.push(decoded);
  } catch {
    return null;
  }

  for (const candidate of candidates) {
    try {
      const value: unknown = JSON.parse(candidate);
    if (typeof value !== "object" || value === null) return null;

    const preferences = value as Partial<CookiePreferences>;
    if (
      typeof preferences.functional !== "boolean" ||
      typeof preferences.analytics !== "boolean" ||
      typeof preferences.marketing !== "boolean"
    ) {
        continue;
    }

    return {
      necessary: true,
      functional: preferences.functional,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    };
    } catch {
      continue;
    }
  }

  return null;
}

export function saveCookiePreferences(preferences: CookiePreferences): void {
  if (typeof document === "undefined") return;

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_PREFERENCES_COOKIE_NAME}=${encodeURIComponent(JSON.stringify({
    ...preferences,
    necessary: true,
  }))}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;

  window.dispatchEvent(
    new CustomEvent<CookiePreferences>("bytespace-cookie-preferences-updated", {
      detail: { ...preferences, necessary: true },
    }),
  );
}