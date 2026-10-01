import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageHero } from "@/components/shared/inner-page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how ByteSpace handles personal information, cookies, data retention, and privacy requests.",
};

const SECTIONS = [
  {
    id: "information-we-handle",
    title: "Information we handle",
    paragraphs: [
      "Depending on how you use ByteSpace, you may provide information such as your name, email address, account details, messages, and information you submit when contacting a creator or our team.",
      "Our website and service providers may also process technical information needed to deliver and protect the service, such as browser and device details, basic usage events, and log data.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    paragraphs: [
      "We use information to operate and maintain ByteSpace, manage accounts, provide course and creator features, respond to requests, protect the service, and communicate about updates you have chosen to receive.",
      "We may also use information to understand and improve the reliability and usability of the platform, and to meet applicable legal obligations.",
    ],
  },
  {
    id: "cookies-and-preferences",
    title: "Cookies and preferences",
    paragraphs: [
      "ByteSpace uses necessary storage to support core site features and remember your privacy choices. Optional cookies may be used only according to your selections and applicable requirements.",
      "You can review or change your cookie choices on the Cookie Settings page.",
    ],
    link: { href: "/cookies", label: "Open Cookie Settings" },
  },
  {
    id: "sharing-information",
    title: "When information is shared",
    paragraphs: [
      "We may share information with service providers who help operate ByteSpace, such as providers of hosting, security, communications, and payment services. They may process information only as needed to provide their services to us.",
      "We may also disclose information when required by law, to protect people or the service, or as part of a business transfer. We do not sell personal information.",
    ],
  },
  {
    id: "retention-and-security",
    title: "Retention and security",
    paragraphs: [
      "We keep information for as long as it is needed for the purposes described here, including to provide the service, resolve disputes, and meet legal requirements. Retention periods depend on the type of information and why it was collected.",
      "We use reasonable safeguards designed to protect information. No internet transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    id: "your-choices",
    title: "Your choices and rights",
    paragraphs: [
      "You can update your cookie choices at any time. You may also contact us to ask about accessing, correcting, or deleting personal information associated with you. Depending on where you live, you may have additional privacy rights under local law.",
      "We may need to verify your identity before responding, and some information may need to be retained where the law allows or requires it.",
    ],
  },
  {
    id: "children",
    title: "Children’s privacy",
    paragraphs: [
      "ByteSpace is not intended for children who are not permitted to use online services under the laws that apply to them. We do not knowingly collect personal information from children in violation of those laws. Contact us if you believe a child has provided personal information to us.",
    ],
  },
  {
    id: "policy-changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy as ByteSpace changes or when legal requirements change. The updated version will appear on this page with a revised date. If a change requires additional notice, we will provide it as required by law.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Privacy at ByteSpace"
        title="Privacy Policy"
        description="This policy explains how information is handled when you visit or use ByteSpace."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <p className="text-sm text-muted-foreground">Last updated: October 1, 2026</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
          <nav aria-label="Privacy policy sections" className="h-fit border-y border-border py-5 lg:sticky lg:top-24">
            <h2 className="text-sm font-semibold">On this page</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {SECTIONS.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-sm text-muted-foreground hover:text-hero hover:underline">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 divide-y divide-border border-y border-border">
            {SECTIONS.map(({ id, title, paragraphs, link }) => (
              <section key={id} id={id} className="scroll-mt-8 py-7 first:pt-6 last:pb-6">
                <h2 className="font-poppins text-xl font-semibold sm:text-2xl">{title}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base">
                    {paragraph}
                  </p>
                ))}
                {link && (
                  <Link href={link.href} className="mt-4 inline-flex text-sm font-medium text-hero underline underline-offset-2">
                    {link.label}
                  </Link>
                )}
              </section>
            ))}
            <section id="contact" className="scroll-mt-8 py-7 last:pb-6">
              <h2 className="font-poppins text-xl font-semibold sm:text-2xl">Contact us</h2>
              <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base">
                For privacy questions or requests, please use our <Link href="/contact" className="font-medium text-hero underline underline-offset-2">contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}