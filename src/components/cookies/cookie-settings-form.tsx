"use client";

import { useState } from "react";

import { CookiePreferenceFields } from "@/components/cookies/cookie-preference-fields";
import { Button } from "@/components/ui/button";
import {
  ACCEPT_ALL_COOKIE_PREFERENCES,
  DEFAULT_COOKIE_PREFERENCES,
  saveCookiePreferences,
} from "@/lib/cookies/preferences";
import type { CookiePreferences } from "@/types/cookie-preferences.type";

export function CookieSettingsForm({
  initialPreferences,
}: {
  initialPreferences: CookiePreferences;
}) {
  const [preferences, setPreferences] = useState(initialPreferences);
  const [saved, setSaved] = useState(false);

  const save = (nextPreferences: CookiePreferences) => {
    setPreferences(nextPreferences);
    saveCookiePreferences(nextPreferences);
    setSaved(true);
  };

  return (
    <div>
      <CookiePreferenceFields
        preferences={preferences}
        onChange={(nextPreferences) => {
          setPreferences(nextPreferences);
          setSaved(false);
        }}
      />
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button type="button" variant="outline" onClick={() => save(DEFAULT_COOKIE_PREFERENCES)}>
          Reject optional
        </Button>
        <Button type="button" variant="outline" onClick={() => save(ACCEPT_ALL_COOKIE_PREFERENCES)}>
          Accept all
        </Button>
        <Button type="button" onClick={() => save(preferences)}>
          Save preferences
        </Button>
        {saved && (
          <p role="status" className="text-sm text-muted-foreground">
            Your cookie choices have been saved.
          </p>
        )}
      </div>
    </div>
  );
}