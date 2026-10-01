"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send `email` to your newsletter API / server action here.
    setDone(true);
    setEmail("");
  };

  return (
    <div>
      <p className="max-w-lg text-sm text-foreground/80 sm:text-[15px]">
        Stay Up to date with our latest features and releases by joining our newsletter.
      </p>

      <form onSubmit={onSubmit} className="mt-8 flex max-w-lg items-center gap-3 sm:gap-4 lg:mt-10">
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setDone(false);
          }}
          placeholder="Enter your email"
          aria-label="Email address"
          className="h-13 flex-1 rounded-full border-[#CED0D3] bg-white px-5 text-base sm:px-6 md:text-base"
        />
        <Button type="submit">Subscribe</Button>
      </form>

      <p aria-live="polite" className="mt-3 min-h-5 text-sm text-hero">
        {done ? "Thanks for subscribing!" : ""}
      </p>

      <p className="mt-2 max-w-sm text-xs leading-5 text-foreground/70">
        By subscribing, you agree to our{" "}
        <Link href="/privacy" className="underline-offset-2 hover:underline">
          Privacy Policy
        </Link>{" "}
        and consent to receive updates from our company.
      </p>
    </div>
  );
}