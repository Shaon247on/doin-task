"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CourseStatCard } from "./course-stat-card";
import { ProgressStatCard } from "./progress-stat-card";
import { StudentsStatCard } from "./students-stat-card";

/**
 * Responsive hero visual:
 * - Green ring scales with the hero stage
 * - Boy remains centered and anchored to the bottom
 * - Stat cards reposition at each breakpoint
 */
export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="
        relative z-20 mx-auto mt-auto w-full max-w-220 xl:max-w-280
        overflow-visible

        h-[clamp(420px,110vw,260px)]

        sm:h-[clamp(440px,65vw,560px)]

        md:h-[clamp(480px,55vw,560px)]

        lg:h-[clamp(440px,46vh,560px)]
      "
    >
      {/* Green ring */}
      <motion.div
        className="
          absolute bottom-0 left-1/2
          
          h-[43.5vh]
          w-full
          -translate-x-1/2

          sm:w-full

          md:w-full

          lg:left-0
          lg:w-full
          lg:translate-x-0
        "
        initial={reduceMotion ? false : { opacity: 0, scale: 0.18, y: 38 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "50% 100%" }}
      >
        <Image
          src="/elements/hero/ring-half-green.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 1120px, 100vw"
          className="
            select-none
            object-contain
            object-bottom
          "
        />
      </motion.div>

      {/* Boy */}
      <motion.div
        className="
          absolute
          left-[50%]
          h-full
          w-[82%]
          -translate-x-1/2

          sm:w-[63%]

          md:w-[59%]

          lg:w-[52%]
          xl:w-[53%]
        "
        initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 190,
          damping: 20,
          delay: reduceMotion ? 0 : 1.25,
        }}
      >
        <Image
          src="/Images/boy.png"
          alt="Smiling student wearing headphones and holding a laptop"
          fill
          priority
        //   sizes="(min-width: 1024px) 540px, (min-width: 240px) 550px, 92vw"
          className="
            select-none
            object-contain
            object-bottom

            scale-[1.12]

            sm:scale-[1.3]

            md:scale-[1.24]

            lg:scale-[1.3]
            xl:scale-[1.18]
          "
        />
      </motion.div>

      {/* Course card */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.82 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
          delay: reduceMotion ? 0 : 2.1,
        }}
        className="
        hidden sm:block
        absolute
        left-[2%]
        top-[40%]
        z-30

        w-[clamp(150px,42vw,250px)]

        sm:left-[12%]
        sm:top-[39%]

        md:left-[13%]
        md:top-[42%]

        lg:left-[17%]
        lg:top-[12%]

        xl:left-[23%]
        xl:top-[18%]
  "
      >
        <CourseStatCard />
      </motion.div>

      {/* Progress card */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.82 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
          delay: reduceMotion ? 0 : 2.26,
        }}
        className="
        absolute
        right-[0%]
        top-[50%]
        z-30

        w-[clamp(145px,38vw,224px)]

        sm:right-[6%]
        sm:top-[44%]

        md:right-[8%]
        md:top-[41%]

        lg:right-auto
        lg:left-[62%]
        lg:top-[15%]

        xl:right-auto
        xl:left-[59%]
        xl:top-[18%]
  "
      >
        <ProgressStatCard />
      </motion.div>

      {/* Students card */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.82 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
          delay: reduceMotion ? 0 : 2.42,
        }}
        className="
        absolute
        bottom-[7%]
        left-[2%]
        z-30

        sm:bottom-auto
        sm:left-[2%]
        sm:top-[69%]

        md:left-[8%]
        md:top-[73%]

        lg:left-[12%]
        lg:top-[60%]

        xl:left-[18.5%]
        xl:top-[59%]
    "
      >
        <StudentsStatCard />
      </motion.div>
    </div>
  );
}
