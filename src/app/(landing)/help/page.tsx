import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CircleHelp, Mail, UserRound } from "lucide-react";

import { InnerPageHero } from "@/components/shared/inner-page-hero";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Get answers about finding courses, managing your ByteSpace account, contacting creators, and privacy settings.",
};

const HELP_TOPICS = [
  {
    title: "Finding a course",
    description: "Browse topics, compare courses, and find a learning path that suits you.",
    href: "/courses",
    action: "Browse courses",
    Icon: BookOpen,
  },
  {
    title: "Your account",
    description: "Sign in to continue, or create an account to get started with ByteSpace.",
    href: "/sign-in",
    action: "Go to your account",
    Icon: UserRound,
  },
  {
    title: "Still need a hand?",
    description: "Send our team a message and include the details of what you need help with.",
    href: "/contact",
    action: "Contact support",
    Icon: Mail,
  },
];

const FAQS = [
  {
    question: "How do I find a course?",
    answer:
      "Visit the courses page to browse the catalog. You can search by topic and use the available categories and filters to narrow your options.",
  },
  {
    question: "How do I create a ByteSpace account?",
    answer:
      "Choose Sign up from the site navigation and complete the registration form. If you already have an account, use Sign in instead.",
  },
  {
    question: "Where can I learn about a course or its creator?",
    answer:
      "Open a course to review its details, lessons, and creator information. You can also browse creator profiles to learn more about their work.",
  },
  {
    question: "How do I contact a creator?",
    answer:
      "Use the Contact page to choose a creator and send a message with your question. Include the course name and relevant details so they can respond helpfully.",
  },
  {
    question: "How can I update my cookie preferences?",
    answer:
      "Open Cookie Settings from the site footer to review and update your optional cookie preferences.",
  },
  {
    question: "I still have a question. What should I do?",
    answer:
      "Visit the Contact page and send our team a message. Please avoid including passwords or other sensitive account information.",
  },
];

export default function HelpPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="ByteSpace help center"
        title="A little help goes a long way."
        description="Find quick answers about courses, accounts, creators, and your ByteSpace preferences."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-hero">
            Start here
          </p>
          <h2 className="mt-3 font-poppins text-2xl font-semibold sm:text-3xl">
            What can we help with?
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Pick a topic for the fastest way to get where you need to go.
          </p>

          <ul className="mt-7 divide-y divide-border border-y border-border">
            {HELP_TOPICS.map(({ title, description, href, action, Icon }) => (
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
                      {action} <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <CircleHelp size={21} className="shrink-0 text-hero" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-hero">
                Frequently asked questions
              </p>
              <h2 className="mt-1 font-poppins text-2xl font-semibold sm:text-3xl">
                Quick answers.
              </h2>
            </div>
          </div>

          <div className="mt-6 divide-y divide-border border-y border-border">
            {FAQS.map(({ question, answer }, index) => (
              <details key={question} className="group py-5" open={index === 0}>
                <summary className="cursor-pointer list-none pr-8 text-sm font-semibold marker:hidden after:float-right after:-mr-8 after:text-lg after:leading-5 after:text-hero after:content-['+'] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring group-open:after:content-['−'] sm:text-base">
                  {question}
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Didn’t find your answer?{" "}
            <Link href="/contact" className="font-medium text-hero underline underline-offset-2">
              Get in touch with us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}