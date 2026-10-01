import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { InnerPageHero } from "@/components/shared/inner-page-hero";

export const metadata: Metadata = { title: "About ByteSpace" };

const PRINCIPLES = [
  {
    number: "01",
    title: "Learn by doing",
    description:
      "Practical courses help learners build useful skills through clear lessons and projects.",
  },
  {
    number: "02",
    title: "Teach what you know",
    description:
      "Creators can share their expertise, shape a course, and support learners along the way.",
  },
  {
    number: "03",
    title: "Keep growing together",
    description:
      "A shared learning space makes it easier to discover new ideas, people, and paths forward.",
  },
];

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="About ByteSpace"
        title="A space to learn, create, and grow."
        description="ByteSpace brings learners and independent creators together through practical courses, thoughtful teaching, and a community built around sharing what we know."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-16 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-hero">
          Why we are here
        </p>
        <div className="max-w-3xl">
          <h2 className="font-poppins text-2xl font-semibold leading-tight sm:text-3xl">
            Good learning should feel within reach.
          </h2>
          <p className="mt-5 text-sm leading-7 text-foreground/75 sm:text-base">
            Learning something new can open a door, change a career, or bring a creative idea to
            life. ByteSpace is designed to make that process approachable: find a course that fits
            your goals, learn from people with hands-on experience, and put new skills to work.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base">
            We also believe expertise grows when it is shared. Our platform gives creators a place
            to organize what they know into useful learning experiences and connect with the people
            who want to learn from them.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-hero">
              What guides us
            </p>
            <h2 className="mt-3 font-poppins text-2xl font-semibold sm:text-3xl">
              Built around shared progress.
            </h2>
          </div>
          <ol className="mt-8 grid gap-0 md:grid-cols-3 md:divide-x md:divide-border">
            {PRINCIPLES.map((principle) => (
              <li key={principle.number} className="border-t border-border py-6 md:border-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <span className="text-sm font-semibold text-hero">{principle.number}</span>
                <h3 className="mt-4 text-lg font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {principle.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between md:py-16 lg:px-8">
        <div>
          <h2 className="font-poppins text-2xl font-semibold">Find your next step.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Start learning or share your experience with the community.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/courses"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Explore courses <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/creators"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold hover:bg-muted"
          >
            Meet creators <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}