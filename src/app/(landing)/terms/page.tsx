import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageHero } from "@/components/shared/inner-page-hero";

export const metadata: Metadata = { title: "Terms of Service | ByteSpace" };

const SECTIONS = [
  {
    title: "Using ByteSpace",
    paragraphs: [
      "These terms apply when you access or use the ByteSpace website and services. By using ByteSpace, you agree to follow these terms and applicable law. If you do not agree, do not use the service.",
      "You must be legally able to enter into an agreement to use ByteSpace. If you use the service on behalf of an organization, you confirm that you are authorized to accept these terms for it.",
    ],
  },
  {
    title: "Your account",
    paragraphs: [
      "Keep your account information accurate and take reasonable steps to protect your sign-in credentials. You are responsible for activity through your account and should contact us promptly if you suspect unauthorized use.",
      "We may restrict or suspend access when reasonably necessary to protect users, the service, or to address a violation of these terms or applicable law.",
    ],
  },
  {
    title: "Courses and creators",
    paragraphs: [
      "ByteSpace helps learners discover courses and creators. Course descriptions, content, and creator materials are provided by their respective creators. Review the information on a course page before enrolling or relying on its content.",
      "Course access, pricing, and any purchase-specific conditions are presented with the relevant course or checkout flow. Any additional terms shown there apply to that transaction. Where a third-party payment provider is used, its terms and privacy practices also apply.",
    ],
  },
  {
    title: "Acceptable use",
    paragraphs: [
      "Do not misuse ByteSpace, interfere with its operation, attempt to access accounts or systems without permission, distribute harmful code, or use the service in a way that violates another person’s rights or the law.",
      "Do not copy, redistribute, or make course materials available to others unless you have permission from the rights holder or the law allows it.",
    ],
  },
  {
    title: "Content and intellectual property",
    paragraphs: [
      "ByteSpace and its licensors retain rights in the platform, branding, and materials they provide. Creators retain rights in their own content. These terms do not transfer ownership of either.",
      "If you submit content or feedback, you confirm you have the rights needed to share it. You grant ByteSpace permission to use that material as reasonably necessary to operate and improve the features through which you submitted it.",
    ],
  },
  {
    title: "Third-party services",
    paragraphs: [
      "ByteSpace may link to or work with third-party services. Those services are governed by their own terms and policies, and ByteSpace is not responsible for services it does not operate.",
    ],
  },
  {
    title: "Availability and disclaimers",
    paragraphs: [
      "We work to keep ByteSpace useful and available, but features may change and uninterrupted access is not guaranteed. To the extent permitted by law, the service is provided as available and without warranties that cannot be excluded under applicable law.",
      "Course content is for learning and general information. It is not a substitute for professional advice tailored to your circumstances.",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "To the extent permitted by law, ByteSpace is not liable for indirect, incidental, special, or consequential loss arising from your use of the service. Nothing in these terms excludes or limits liability that cannot legally be excluded or limited.",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms as the service or applicable requirements change. The updated terms will be posted here with a revised date. If you continue using ByteSpace after an update takes effect, your use is subject to the updated terms, except where applicable law requires another process.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Using ByteSpace"
        title="Terms of Service"
        description="These terms explain the basic rules for using ByteSpace and its learning services."
      />

      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <p className="text-sm text-muted-foreground">Last updated: October 1, 2026</p>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {SECTIONS.map(({ title, paragraphs }) => (
            <section key={title} className="py-7 first:pt-6 last:pb-6">
              <h2 className="font-poppins text-xl font-semibold sm:text-2xl">{title}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <section className="py-7 last:pb-6">
            <h2 className="font-poppins text-xl font-semibold sm:text-2xl">Contact us</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base">
              Questions about these terms? Reach us through the <Link href="/contact" className="font-medium text-hero underline underline-offset-2">contact page</Link>.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}