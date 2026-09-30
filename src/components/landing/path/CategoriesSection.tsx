import React from "react";
import { CategoryCard } from "./category-card";
import {
  EditIcon,
  CodeIcon,
  MonitorIcon,
  CameraProfileIcon,
  TeamIcon,
  CalculatorIcon, // Using VideoCamera for Photography as proxy
} from "@/components/icons/Icons"; // Assuming you saved your icons in a file here
import { Title } from "@/components/shared/Title";

// Mapping data based on Frame 10.png
const CATEGORIES_DATA = [
  {
    id: "1",
    title: "Design",
    icon: <EditIcon width={28} height={28} />,
  },
  {
    id: "2",
    title: "Development",
    icon: <CodeIcon width={28} height={28} />,
  },
  {
    id: "3",
    title: "IT & Software",
    icon: <MonitorIcon width={28} height={28} />,
  },
  {
    id: "4",
    title: "Business",
    // ModulesIcon serves as a structural icon for business
    icon: <CalculatorIcon width={28} height={28} />,
  },
  {
    id: "5",
    title: "Marketing",
    // Share/Video used here as proxy for the broadcast icon in image
    icon: <TeamIcon width={28} height={28} />,
  },
  {
    id: "6",
    title: "Photography",
    // VideoCamera used as proxy for the camera icon in image
    icon: <CameraProfileIcon width={28} height={28} />,
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 px-4 w-full">
      <Title
        title="Explore Diverse Learning Paths at Bytespace"
        subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />
      <div className="max-w-7xl mx-auto mt-4 md:mt-8 lg:mt-16">
        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-6 lg:gap-2 xl:gap-10 md:overflow-visible no-scrollbar">
          {CATEGORIES_DATA.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
