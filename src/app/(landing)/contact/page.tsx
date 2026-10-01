import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CircleHelp, ShieldCheck, Users } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { InnerPageHero } from "@/components/shared/inner-page-hero";
import { MOCK_CREATORS } from "@/mocks/creators.mock";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ByteSpace about courses, creators, your account, privacy, or another question.",
};

const CONTACT_PATHS = [
  {
    title: "Course questions",
    description: "Browse the course catalog to find a topic, course, or instructor.",
    href: "/courses",
    action: "Explore courses",
    Icon: BookOpen,
  },
  {
    title: "Creator questions",
    description: "Discover creators and visit their profiles for information about their work.",
    href: "/creators",
    action: "Browse creators",
    Icon: Users,
  },
  {
    title: "Account and enrollment",
    description: "Sign in to your account or create one to continue with enrollment.",
    href: "/sign-in",
    action: "Go to sign in",
    Icon: CircleHelp,
  },
  {
    title: "Privacy and cookies",
    description: "Review and update your saved cookie preferences at any time.",
    href: "/cookies",
    action: "Open cookie settings",
    Icon: ShieldCheck,
  },
];

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const creatorParam = Array.isArray(params.creator) ? params.creator[0] : params.creator;
  const selectedCreatorSlug = MOCK_CREATORS.find(
    (creator) => creator.slug === creatorParam,
  )?.slug;

  return (
    <>
      <InnerPageHero
        eyebrow="Contact ByteSpace"
        title="How can we help?"
        description="Choose the topic closest to your question and we’ll take you to the right place on ByteSpace."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <h2 className="font-poppins text-2xl font-semibold sm:text-3xl">
            Ask a creator
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Choose who you want to contact, then include enough detail for them to understand your
            question.
          </p>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {CONTACT_PATHS.map(({ title, description, href, action, Icon }) => (
              <li key={title} className="py-5">
                <div className="flex items-start gap-3">
                  <Icon size={19} className="mt-0.5 shrink-0 text-hero" aria-hidden="true" />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">{description}</p>
                    <Link
                      href={href}
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-hero hover:underline"
                    >
                      {action}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Want to know more about ByteSpace? Read{" "}
            <Link href="/about" className="font-medium text-hero underline underline-offset-2">
              about us
            </Link>
            .
          </p>
        </div>

        <div className="min-w-0 rounded-2xl border border-border bg-white p-5 sm:p-7">
          <h2 className="font-poppins text-xl font-semibold sm:text-2xl">Send a question</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            We’ll prepare your message for the ByteSpace contact inbox.
          </p>
          <div className="mt-6">
            <ContactForm
              creators={MOCK_CREATORS.map(({ slug, name }) => ({ slug, name }))}
              selectedCreatorSlug={selectedCreatorSlug}
            />
          </div>
        </div>
      </section>
    </>
  );
}