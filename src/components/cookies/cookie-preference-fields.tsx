"use client";

import type { CookiePreferences } from "@/types/cookie-preferences.type";

const COOKIE_CATEGORIES = [
  {
    key: "necessary",
    label: "Strictly necessary",
    description: "Required for core site features, security, and saved consent choices.",
    required: true,
  },
  {
    key: "functional",
    label: "Functional",
    description: "Remember choices that make your experience more convenient.",
    required: false,
  },
  {
    key: "analytics",
    label: "Analytics",
    description: "Help us understand how the site is used so we can improve it.",
    required: false,
  },
  {
    key: "marketing",
    label: "Marketing",
    description: "Help measure relevant campaigns and communications.",
    required: false,
  },
] as const;

type PreferenceKey = keyof CookiePreferences;

type CookiePreferenceFieldsProps = {
  preferences: CookiePreferences;
  onChange: (preferences: CookiePreferences) => void;
  disabled?: boolean;
};

export function CookiePreferenceFields({
  preferences,
  onChange,
  disabled = false,
}: CookiePreferenceFieldsProps) {
  const updatePreference = (key: PreferenceKey, checked: boolean) => {
    if (key === "necessary") return;
    onChange({ ...preferences, [key]: checked, necessary: true });
  };

  return (
    <fieldset disabled={disabled} className="min-w-0">
      <legend className="sr-only">Cookie categories</legend>
      <div className="divide-y divide-border border-y border-border">
        {COOKIE_CATEGORIES.map(({ key, label, description, required }) => (
          <label
            key={key}
            className="flex cursor-pointer items-start gap-3 py-4 first:pt-4 last:pb-4"
          >
            <input
              type="checkbox"
              checked={preferences[key]}
              disabled={required || disabled}
              onChange={(event) => updatePreference(key, event.target.checked)}
              className="mt-1 size-4 shrink-0 accent-[var(--heroBg)] disabled:cursor-not-allowed"
            />
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-foreground">
                {label}
                {required && (
                  <span className="text-xs font-normal text-muted-foreground">Always active</span>
                )}
              </span>
              <span className="mt-1 block text-sm leading-5 text-muted-foreground">
                {description}
              </span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}