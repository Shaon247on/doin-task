"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { FILTER_CATEGORIES } from "@/mocks/coursCard.mocks";

interface CourseFiltersProps {
  onFilterChange?: (category: string) => void;
  defaultSelected?: string;
}

interface AnimatedFilterButtonProps {
  category: string;
  index: number;
  activeFilter: string;
  onSelect: (category: string) => void;
  className?: string;
  size?: "default" | "sm";
}

function AnimatedFilterButton({
  category,
  index,
  activeFilter,
  onSelect,
  className = "",
  size = "default",
}: AnimatedFilterButtonProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Button
        size={size}
        variant={activeFilter === category ? "default" : "secondary"}
        onClick={() => onSelect(category)}
        className={className}
      >
        {category}
      </Button>
    </motion.div>
  );
}

function MoreButton({
  index,
  className = "",
  size,
}: {
  index: number;
  className?: string;
  size?: "default" | "sm";
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Button size={size} variant="link" className={className}>
        <Link href="/courses">+ More</Link>
      </Button>
    </motion.div>
  );
}

export function CourseFilters({
  onFilterChange,
  defaultSelected = "Featured",
}: CourseFiltersProps) {
  const [activeFilter, setActiveFilter] =
    useState<string>(defaultSelected);

  const handleSelect = (category: string) => {
    setActiveFilter(category);
    onFilterChange?.(category);
  };

  /*
   * XL
   * 8 / 6 / 4
   */
  const xlRow1 = FILTER_CATEGORIES.slice(0, 8);
  const xlRow2 = FILTER_CATEGORIES.slice(8, 14);
  const xlRow3 = FILTER_CATEGORIES.slice(14, 18);

  /*
   * LG
   * 7 / 6 / 5
   */
  const lgRow1 = FILTER_CATEGORIES.slice(0, 7);
  const lgRow2 = FILTER_CATEGORIES.slice(7, 13);
  const lgRow3 = FILTER_CATEGORIES.slice(13, 18);

  /*
   * MD
   * 5 / 5 / 4 / 4
   */
  const mdRow1 = FILTER_CATEGORIES.slice(0, 5);
  const mdRow2 = FILTER_CATEGORIES.slice(5, 10);
  const mdRow3 = FILTER_CATEGORIES.slice(10, 14);
  const mdRow4 = FILTER_CATEGORIES.slice(14, 18);

  return (
    <div className="w-full pt-10 pb-18">
      {/* =========================
          Mobile
      ========================== */}
      <div className="flex flex-wrap items-center justify-center gap-1 md:hidden">
        {FILTER_CATEGORIES.map((category, index) => (
          <AnimatedFilterButton
            key={category}
            category={category}
            index={index}
            activeFilter={activeFilter}
            onSelect={handleSelect}
            size="sm"
          />
        ))}

        <MoreButton
          index={FILTER_CATEGORIES.length}
          size="sm"
          className="font-semibold"
        />
      </div>

      {/* =========================
          MD: 5 / 5 / 4 / 4
      ========================== */}
      <div className="hidden md:flex lg:hidden flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-2 xl:gap-3">
          {mdRow1.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={index}
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-3 font-medium text-base"
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          {mdRow2.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={index + mdRow1.length}
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-3 font-medium text-base"
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          {mdRow3.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={index + mdRow1.length + mdRow2.length}
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-3 font-medium text-base"
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          {mdRow4.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={
                index +
                mdRow1.length +
                mdRow2.length +
                mdRow3.length
              }
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-3 font-medium text-base"
            />
          ))}

          <MoreButton
            index={FILTER_CATEGORIES.length}
            className="font-semibold text-blue-700 hover:text-blue-900"
          />
        </div>
      </div>

      {/* =========================
          LG: 7 / 6 / 5
      ========================== */}
      <div className="hidden lg:flex xl:hidden flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-2">
          {lgRow1.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={index}
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-4 font-medium text-base"
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          {lgRow2.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={index + lgRow1.length}
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-4 font-medium text-base"
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          {lgRow3.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={index + lgRow1.length + lgRow2.length}
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-4 font-medium text-base"
            />
          ))}

          <MoreButton
            index={FILTER_CATEGORIES.length}
            className="font-semibold text-blue-700 hover:text-blue-900"
          />
        </div>
      </div>

      {/* =========================
          XL: 8 / 6 / 4
      ========================== */}
      <div className="hidden xl:flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-4">
          {xlRow1.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={index}
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-4 font-medium"
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          {xlRow2.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={index + xlRow1.length}
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-4 font-medium"
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          {xlRow3.map((category, index) => (
            <AnimatedFilterButton
              key={category}
              category={category}
              index={index + xlRow1.length + xlRow2.length}
              activeFilter={activeFilter}
              onSelect={handleSelect}
              className="rounded-full px-4 font-medium"
            />
          ))}

          <MoreButton
            index={FILTER_CATEGORIES.length}
            className="font-semibold text-blue-700 hover:text-blue-900"
          />
        </div>
      </div>
    </div>
  );
}