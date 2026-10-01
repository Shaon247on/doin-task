"use client";

import { toast } from "sonner";

import { FacebookIcon, GoogleIcon } from "@/components/icons/Icons";
import { Button } from "@/components/ui/button";

const buttonClass = "size-18 rounded-xl border-[#CED0D3] bg-white hover:bg-muted";

export function AuthSocialButtons() {
  // TODO: replace with your real OAuth calls (e.g. signIn("google"))
  const onProvider = (provider: string) => toast.info(`${provider} sign-in isn't connected yet.`);

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        type="button"
        variant="outline"
        aria-label="Continue with Facebook"
        className={buttonClass}
        onClick={() => onProvider("Facebook")}
      >
        <FacebookIcon width={24} height={24} className="size-6" />
      </Button>
      <Button
        type="button"
        variant="outline"
        aria-label="Continue with Google"
        className={buttonClass}
        onClick={() => onProvider("Google")}
      >
        <GoogleIcon width={24} height={24} className="size-6 text-foreground" />
      </Button>
    </div>
  );
}