"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const COLUMNS = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses#categories" },
    { label: "Business", href: "/courses?category=business" },
    { label: "IT", href: "/courses?category=it" },
    { label: "Design", href: "/courses?category=design" },
  ],
  [
    { label: "Development", href: "/courses?category=development" },
    { label: "Marketing", href: "/courses?category=marketing" },
    { label: "Photography", href: "/courses?category=photography" },
    { label: "Finance", href: "/courses?category=finance" },
    { label: "Sport", href: "/courses?category=sport" },
  ],
  [
    { label: "Become a Creator", href: "/join" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

/** Columns fade/slide in one after another when the footer scrolls into view (once). */
export function FooterLinks() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const column: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <motion.nav
      aria-label="Footer"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3"
    >
      {COLUMNS.map((links, i) => (
        <motion.ul key={i} variants={column} className="flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <motion.li key={label} variants={item}>
              <Link
                href={href}
                className="text-[15px] text-foreground/80 transition-colors hover:text-hero"
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      ))}
    </motion.nav>
  );
}