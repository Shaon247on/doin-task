import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Gift, Link2 } from "lucide-react";

import { InnerPageHero } from "@/components/shared/inner-page-hero";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Partner with ByteSpace to recommend practical courses to your audience and earn rewards for eligible referrals.",
};

const STEPS = [
  {
    number: "01",
    title: "Apply to partner",
    description:
      "Tell us about your audience, the topics you cover, and how you plan to share ByteSpace.",
  },
  {
    number: "02",
    title: "Share your link",
    description:
      "Once approved, receive a tracked referral link to include in your content and recommendations.",
  },
  {
    number: "03",
    title: "Track your impact",
    description:
      "See how your referrals are performing and review eligible rewards in your partner account.",
  },
];

const BENEFITS = [
  {
    title: "A useful fit for your audience",
    description:
      "Recommend practical courses from independent creators to people who are ready to learn.",
    Icon: Gift,
  },
  {
    title: "Clear referral tracking",
    description:
      "Use a dedicated link to connect your recommendations with eligible course enrollments.",
    Icon: Link2,
  },
  {
    title: "Insight into performance",
    description:
      "Understand which of your recommendations help learners discover their next course.",
    Icon: BarChart3,
  },
];

export default function AffiliatePage() {
  return (
    <>
      <InnerPageHero
        eyebrow="ByteSpace partners"
        title="Share learning. Grow together."
        description="Connect your community with practical courses from independent creators, and earn rewards for eligible referrals through the ByteSpace Affiliate Program."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-hero">
            A partnership that makes sense
          </p>
          <h2 className="mt-3 max-w-md font-poppins text-2xl font-semibold leading-tight sm:text-3xl">
            Help your audience find their next skill.
          </h2>
        </div>
        <div className="max-w-3xl">
          <p className="text-sm leading-7 text-foreground/75 sm:text-base">
            If you create content, run a community, or regularly recommend learning resources,
            ByteSpace gives you a straightforward way to share courses you genuinely believe in.
            Approved affiliates receive a referral link and can earn rewards on qualifying activity,
            subject to the program terms.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base">
            We review each application to make sure the partnership is a good fit for learners,
            creators, and your audience.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-hero">
              How it works
            </p>
            <h2 className="mt-3 font-poppins text-2xl font-semibold sm:text-3xl">
              From application to referral.
            </h2>
          </div>
          <ol className="mt-8 grid gap-0 md:grid-cols-3 md:divide-x md:divide-border">
            {STEPS.map((step) => (
              <li
                key={step.number}
                className="border-t border-border py-6 md:border-0 md:px-6 md:first:pl-0 md:last:pr-0"
              >
                <span className="text-sm font-semibold text-hero">{step.number}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-hero">
            Made for thoughtful recommendations
          </p>
          <h2 className="mt-3 font-poppins text-2xl font-semibold sm:text-3xl">
            A simple way to share what you value.
          </h2>
        </div>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ title, description, Icon }) => (
            <li key={title} className="border-t border-border pt-5">
              <Icon size={22} className="text-hero" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:py-14 lg:px-8">
          <div>
            <h2 className="font-poppins text-2xl font-semibold">Interested in partnering?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Contact our team with a little about your audience and the kind of content you create.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Contact our team <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}