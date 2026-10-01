import Link from "next/link";

import { FooterLinks } from "./footer-links";
import { FooterNewsletter } from "./footer-newsletter";
import Logo from "./Logo";

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#CED0D3] bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-17.5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <div  className="mb-4">
              <Logo />
            </div>
            <FooterNewsletter />
          </div>

          <FooterLinks />
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-[#CED0D3] py-6 text-xs text-foreground/80 sm:flex-row sm:items-center sm:justify-between lg:mt-32">
          <p>
            &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="transition-colors hover:text-hero">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
