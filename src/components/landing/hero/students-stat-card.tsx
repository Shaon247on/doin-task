import { StarIcon } from "@/components/icons/Icons";

// Placeholder avatars: swap for real <Image /> thumbnails when you have them.
const AVATAR_COLORS = [
  "bg-zinc-400",
  "bg-rose-300",
  "bg-amber-300",
  "bg-sky-300",
  "bg-emerald-300",
  "bg-violet-300",
];

export function StudentsStatCard({ className = "", isgreen= false }: { className?: string; isgreen?: boolean}) {
  return (
    <div className={`w-max rounded-xl p-3 ${isgreen ? "bg-primary":"bg-white"} text-card-foreground shadow-sm sm:p-4 ${className}`}>
      <p className="text-sm font-medium sm:text-base">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-[10px] sm:text-xs">
        4.5 <span className="text-muted-foreground">(240)</span>
        <StarIcon width={16} height={16} className="text-primary" color="#003BE2" />
      </p>
      <div className="mt-2 flex items-center pl-2 sm:mt-3">
        {AVATAR_COLORS.map((color, i) => (
          <span
            key={i}
            className={`-ml-2 size-7 rounded-full ring-2 ring-white sm:size-9 ${color}`}
          />
        ))}
        <span className="-ml-2 grid size-7 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground ring-2 ring-white sm:size-9 sm:text-xs">
          2K+
        </span>
      </div>
    </div>
  );
}