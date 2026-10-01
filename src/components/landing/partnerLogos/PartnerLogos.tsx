"use client";

import React from "react";
import {
  Waves,
  Sun,
  Zap,
  Flower2,
  Target,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react";

// Partner list data leveraging Lucide Icons
const PARTNERS = [
  { id: "1", name: "Logoipsum", icon: Waves },
  { id: "2", name: "Logoipsum", icon: Sun },
  { id: "3", name: "Logoipsum", icon: Zap },
  { id: "4", name: "Logoipsum", icon: Flower2 },
  { id: "5", name: "Logoipsum", icon: Target },
  { id: "6", name: "Logoipsum", icon: Globe },
  { id: "7", name: "Logoipsum", icon: Layers },
  { id: "8", name: "Logoipsum", icon: Sparkles },
];

// Sub-component for individual logo items
function PartnerLogo({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center space-x-3 text-slate-500 hover:text-slate-900 transition-colors duration-200 shrink-0 select-none cursor-pointer">
      <Icon className="w-8 h-8 stroke-[2.2]" />
      <span className="text-xl font-bold tracking-tight">{name}</span>
    </div>
  );
}

export function PartnersSection() {
  // Duplicate array to guarantee seamless continuous scrolling on wider screens
  const logoList = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-[#f8f9fa] py-10 border-y border-slate-200/60 overflow-hidden w-full">
      {/* Self-contained CSS for smooth infinite looping & pause-on-hover */}
      <style>{`
        @keyframes infiniteMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: infiniteMarquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Left and Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track Container */}
        <div className="overflow-hidden w-full">
          <div className="marquee-track items-center space-x-16">
            {logoList.map((partner, idx) => (
              <PartnerLogo
                key={`${partner.id}-${idx}`}
                name={partner.name}
                icon={partner.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}