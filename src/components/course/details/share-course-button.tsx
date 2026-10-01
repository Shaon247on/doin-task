"use client";

import { useState } from "react";

import { ShareIcon } from "@/components/icons/Icons";
import { Button } from "@/components/ui/button";

export function ShareCourseButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const shareCourse = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={shareCourse}
      aria-label={copied ? "Course link copied" : "Share course"}
      className="absolute right-2 top-20 md:top-24 lg:top-40 lg:right-0 gap-2 rounded-full bg-primary px-4 text-primary-foreground hover:bg-primary/90"
    >
      <ShareIcon width={16} height={16} aria-hidden="true" />
      {copied ? "Copied" : "Share"}
    </Button>
  );
}