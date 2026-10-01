"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "./cart-provider";

export function CartDrawer() {
  const {
    isOpen,
    items,
    itemCount,
    subtotal,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      previouslyFocused?.focus();
    };
  }, [closeCart, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80]">
          <motion.button
            type="button"
            aria-label="Close cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/45"
          />
          <motion.aside
            id="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 34 }}
            className="absolute inset-y-0 right-0 flex h-dvh w-full max-w-md flex-col bg-white text-foreground shadow-2xl sm:max-w-lg"
          >
            <header className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4 sm:px-6">
              <div>
                <h2 id="cart-title" className="text-lg font-semibold">
                  Your cart
                </h2>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {itemCount} {itemCount === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="grid size-10 place-items-center rounded-full transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </header>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-muted text-muted-foreground">
                  <ShoppingBag size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">Your cart is empty</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                  Browse the catalog and add a course to continue learning.
                </p>
                <Button
                  render={<Link href="/courses" onClick={closeCart} />}
                  nativeButton={false}
                  className="mt-5 rounded-full"
                >
                  Browse courses
                </Button>
              </div>
            ) : (
              <>
                <ul className="min-h-0 flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6">
                  {items.map(({ course, quantity }) => (
                    <li
                      key={course.id}
                      className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 border-b border-border pb-5 last:border-0"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                        <Image
                          src={course.thumbnail}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="line-clamp-2 text-sm font-semibold leading-5">
                              {course.title}
                            </h3>
                            <p className="mt-1 text-xs text-muted-foreground">
                              by {course.author.name}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(course.id)}
                            aria-label={`Remove ${course.title} from cart`}
                            className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                          >
                            <Trash2 size={16} aria-hidden="true" />
                          </button>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                          <div className="inline-flex h-9 items-center rounded-full border border-border">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(course.id)}
                              aria-label={`Decrease ${course.title} quantity`}
                              disabled={quantity <= 1}
                              className="grid size-9 place-items-center rounded-l-full hover:bg-muted disabled:opacity-40"
                            >
                              <Minus size={14} aria-hidden="true" />
                            </button>
                            <span className="min-w-8 text-center text-sm tabular-nums">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => increaseQuantity(course.id)}
                              aria-label={`Increase ${course.title} quantity`}
                              className="grid size-9 place-items-center rounded-r-full hover:bg-muted"
                            >
                              <Plus size={14} aria-hidden="true" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold tabular-nums">
                            ${(course.price * quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <footer className="shrink-0 border-t border-border bg-white px-5 py-5 sm:px-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-muted-foreground">Subtotal</span>
                    <span className="text-xl font-bold tabular-nums">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Taxes, if applicable, are calculated at checkout.
                  </p>
                  <Button type="button" disabled className="mt-4 h-12 w-full rounded-full">
                    Checkout unavailable in demo
                  </Button>
                  <Link
                    href="/courses"
                    onClick={closeCart}
                    className="mt-3 flex min-h-10 items-center justify-center text-sm font-medium text-hero hover:underline"
                  >
                    Continue shopping
                  </Link>
                </footer>
              </>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}