import React from "react";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
}

export function CategoryCard({ title, icon }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-40 aspect-square">
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full bg-[#E5FF24] flex items-center justify-center mb-4 text-slate-900">
        {icon}
      </div>
      {/* Category Title */}
      <span className="text-slate-800 font-medium text-[15px] text-center">
        {title}
      </span>
    </div>
  );
}