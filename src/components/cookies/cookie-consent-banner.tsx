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
      className="fixed inset-x-0 bottom-0 z-[100] animate-in slide-in-from-bottom-8 border-t border-border bg-white shadow-[0_-12px_40px_rgba(15,23,42,0.16)] duration-500"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:px-8">
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

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
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
          <div className="space-y-4 lg:col-span-2">
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