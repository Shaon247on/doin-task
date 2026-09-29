"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { MenuIcon, ShoppingBagIcon } from "@/components/icons/Icons";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
] as const;

const SCROLL_THRESHOLD = 10;

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
        fill="currentColor"
      />
    </svg>
  );
}

// function Logo() {
//   // Replace the placeholder with your real logo (e.g. next/image or an SVG).
//   return (
//     <Link
//       href="/"
//       aria-label="Home"
//       className="flex h-10 w-32 items-center justify-center rounded-md border border-dashed border-current/40 text-sm font-medium opacity-80"
//     >
//       Logo
//     </Link>
//   );
// }

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Switch to a white background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-white text-foreground shadow-sm"
            : "bg-transparent text-white",
        )}
      >
        <nav
          aria-label="Main"
          className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[1fr_auto] items-center px-4 sm:px-6 md:h-20 md:grid-cols-[1fr_auto_1fr] lg:px-8"
        >
          {/* Left: logo */}
          <div className="flex items-center justify-self-start">
            <Logo />
          </div>

          {/* Center: links (desktop) */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={cn(
                    "relative py-1 text-base font-medium transition-opacity hover:opacity-70",
                    isActive(href) &&
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-current",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: actions */}
          <div className="flex items-center gap-2 justify-self-end sm:gap-3">
            <Link
              href="/sign-in"
              className="hidden rounded-full px-4 py-2 text-base transition-opacity hover:opacity-70 md:inline-block"
            >
              Sign in
            </Link>
            <Link
              href="/join"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95 md:inline-block"
            >
              Join us
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="grid size-10 place-items-center rounded-full transition-colors hover:bg-current/10"
            >
              <ShoppingBagIcon />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="grid size-10 place-items-center rounded-full transition-colors hover:bg-current/10 md:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 md:hidden"
              aria-hidden="true"
            />
            <motion.aside
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(85vw,22rem)] flex-col bg-white text-foreground shadow-xl md:hidden"
            >
              <div className="flex h-16 items-center justify-between px-4">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-10 place-items-center rounded-full transition-colors hover:bg-muted"
                >
                  <CloseIcon />
                </button>
              </div>

              <ul className="flex flex-col gap-1 px-4 pt-4">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isActive(href) ? "page" : undefined}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-muted",
                        isActive(href) && "bg-muted",
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 border-t p-4">
                <Link
                  href="/sign-in"
                  className="rounded-full border px-5 py-3 text-center text-base font-medium transition-colors hover:bg-muted"
                >
                  Sign in
                </Link>
                <Link
                  href="/join"
                  className="rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
                >
                  Join us
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
