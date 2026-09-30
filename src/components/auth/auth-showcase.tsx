"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";

import { CourseCard, type CourseData } from "@/components/shared/CourseCard";
import { FloatingElement } from "@/components/shared/floating-element";
import { StudentsStatCard } from "@/components/landing/hero/students-stat-card";
import type { AuthMode } from "@/types/auth.type";
import { ScaledStage } from "../landing/path/floating-elements/scaled-stage";

const COPY: Record<AuthMode, { title: string; text: string }> = {
  signUp: {
    title: "Sign up and come in",
    text: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  },
  signIn: {
    title: "Welcome back",
    text: "Pick up right where you left off. Sign in to continue your courses and keep building your skills with ByteSpace",
  },
};

// Decorative demo data. Replace the thumbnail paths with real images.
const avatars = [1, 2, 3, 4].map((n) => ({
  id: String(n),
  name: `Student ${n}`,
  avatarUrl: `/avatars/${n}.png`,
}));

const BIG_DATA: CourseData = {
  id: "auth-a",
  slug: "the-power-of-big-data",
  title: "The Power of Big Data",
  thumbnail:
    "https://images.unsplash.com/photo-1561233835-f937539b95b9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  author: { name: "purepearl studio" },
  lessonsCount: 17,
  duration: "2 hours 16 mins",
  commentsCount: 59,
  rating: 4.5,
  level: "Beginner",
  enrolledStudents: avatars,
  totalEnrolledCount: 30,
  price: 25,
  billingType: "lifetime",
};

const DIGITAL: CourseData = {
  ...BIG_DATA,
  id: "auth-b",
  slug: "build-digital-products",
  title: "Build Digital Products",
  thumbnail:
    "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  commentsCount: 24,
};

/** Positions inside the 496 × 558 stage */
const cardVariants: Variants = {
  front: { x: 111, y: 0, zIndex: 20, rotate: [0, 2.5, 0] },
  back: { x: 0, y: 90, zIndex: 10, rotate: [0, -2.5, 0] },
};

function SwapCard({
  course,
  isFront,
}: {
  course: CourseData;
  isFront: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      inert
      initial={false}
      variants={cardVariants}
      animate={isFront ? "front" : "back"}
      transition={{
        default: { type: "spring", stiffness: 130, damping: 18 },
        rotate: { duration: 0.8, ease: "easeInOut" },
        zIndex: { duration: 0, delay: 0.25 },
      }}
      className="pointer-events-none absolute left-0 top-0 w-[372px]"
    >
      <CourseCard course={course} />
    </motion.div>
  );
}

export function AuthShowcase({ mode }: { mode: AuthMode }) {
  const copy = COPY[mode];

  return (
    <div>
      <div className="min-h-36">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="max-w-lg text-white"
          >
            <h2 className="font-poppins text-xl font-medium xl:text-[22px]">
              {copy.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/90 xl:text-lg">
              {copy.text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <ScaledStage width={496} height={558} className="mt-8 xl:mt-12">
        {/* The two cards trade places when the mode changes */}
        <SwapCard course={BIG_DATA} isFront={mode === "signUp"} />
        <SwapCard course={DIGITAL} isFront={mode === "signIn"} />

        <FloatingElement
          src="/elements/auth/ring-green.png"
          className="left-11 top-5 z-30 w-32"
          sizes="102px"
          duration={7}
          distance={10}
          rotate={4}
        />
        <FloatingElement
          src="/elements/auth/cone-green.png"
          className="left-0 top-[420px] z-30 w-[125px]"
          sizes="125px"
          duration={6.5}
          delay={0.4}
          distance={12}
          rotate={-4}
        />
        <FloatingElement
          src="/elements/auth/spring-white.png"
          className="left-95 top-92 z-40 w-30"
          sizes="115px"
          duration={6}
          delay={0.8}
          distance={12}
          rotate={4}
        />
        <StudentsStatCard className="absolute left-57 top-109 z-30" isgreen={true} />
      </ScaledStage>
    </div>
  );
}
