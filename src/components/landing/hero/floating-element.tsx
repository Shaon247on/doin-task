"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type FloatingElementProps = {
  src: string;
  /** Position + width classes, e.g. "left-[4%] top-[70%] w-[16%]" */
  className: string;
  sizes: string;
  delay?: number;
  duration?: number;
  distance?: number;
  rotate?: number;
};

/** Decorative image that drifts gently up and down. Respects reduced-motion. */
export function FloatingElement({
  src,
  className,
  sizes,
  delay = 0,
  duration = 6,
  distance = 12,
  rotate = 0,
}: FloatingElementProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={reduce ? undefined : { y: [0, -distance, 0], rotate: [0, rotate, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={0}
        height={0}
        sizes={sizes}
        className="h-auto w-full select-none"
        draggable={false}
      />
    </motion.div>
  );
}