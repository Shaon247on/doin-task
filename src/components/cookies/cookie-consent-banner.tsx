"use client";

import Link from "next/link";
import { useSyncExternalStore, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  ACCEPT_ALL_COOKIE_PREFERENCES,
  DEFAULT_COOKIE_PREFERENCES,
  readCookiePreferences,
  saveCookiePreferences,
} from "@/lib/cookies/preferences";
import type { CookiePreferences } from "@/types/cookie-preferences.type";
import { CookiePreferenceFields } from "./cookie-preference-fields";

const CONSENT_EVENT = "bytespace-cookie-preferences-updated";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  return () => window.removeEventListener(CONSENT_EVENT, onStoreChange);
}

function getConsentSnapshot() {
  return readCookiePreferences() !== null;
}

function getServerConsentSnapshot() {
  return false;
}

export function CookieConsentBanner() {
  const hasConsent = useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [customizing, setCustomizing] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(
    DEFAULT_COOKIE_PREFERENCES,
  );

  if (hasConsent) return null;

  const rejectOptional = () => saveCookiePreferences(DEFAULT_COOKIE_PREFERENCES);
  const acceptAll = () => saveCookiePreferences(ACCEPT_ALL_COOKIE_PREFERENCES);
  const saveCustom = () => saveCookiePreferences(preferences);

  return (
    <aside
      aria-labelledby="cookie-consent-title"
      className="fixed right-3 top-20 z-100 max-h-[calc(100svh-6rem)] w-[min(28rem,calc(100vw-1.5rem))] animate-in slide-in-from-top-4 overflow-y-auto rounded-2xl border border-border bg-white shadow-[0_12px_40px_rgba(15,23,42,0.18)] duration-500 sm:right-5 md:top-24"
    >
      <div className="grid gap-4 p-4 sm:p-5">
        <div className="min-w-0">
          <h2 id="cookie-consent-title" className="text-base font-semibold text-foreground">
            Your privacy choices
          </h2>
          <p className="mt-1 max-w-3xl text-sm leading-5 text-muted-foreground">
            We use necessary cookies to run ByteSpace. With your permission, we also use optional
            cookies to remember preferences, understand site usage, and measure campaigns. Change
            your choice any time in{" "}
            <Link href="/cookies" className="font-medium text-hero underline underline-offset-2">
              cookie settings
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button type="button" variant="outline" size="sm" onClick={rejectOptional}>
            Reject
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-expanded={customizing}
            onClick={() => setCustomizing((open) => !open)}
          >
            {customizing ? "Hide options" : "Customize"}
          </Button>
          <Button type="button" size="sm" onClick={acceptAll}>
            Accept all
          </Button>
        </div>

        {customizing && (
          <div className="space-y-4">
            <CookiePreferenceFields
              preferences={preferences}
              onChange={setPreferences}
            />
            <div className="flex justify-end">
              <Button type="button" onClick={saveCustom}>
                Save my choices
              </Button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}