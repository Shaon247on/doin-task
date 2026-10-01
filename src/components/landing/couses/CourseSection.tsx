"use client";

import { motion, type Variants } from "framer-motion";

import { Title } from "@/components/shared/Title";
import { MOCK_COURSES } from "@/mocks/coursCard.mocks";
import { CourseCard } from "@/components/shared/CourseCard";
import { CourseFilters } from "./course-filters";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

export function CoursesSection() {
  return (
    <section className="bg-slate-50/50 px-4 py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <Title
            title="Discover Your Passion, Build Your Skills"
            subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <CourseFilters />
        </motion.div>

        {/* Course cards */}
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
        >
          {MOCK_COURSES.slice(0, 9).map((course) => (
            <motion.div key={course.id} variants={cardItem}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="text-center mt-6">
        <Link href={"/courses"}>
          <Button>Browse More</Button>
        </Link>
      </div>
    </section>
  );
}
