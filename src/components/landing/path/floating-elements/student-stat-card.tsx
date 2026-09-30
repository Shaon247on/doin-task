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

type StudentsStatCardProps = {
  className?: string;
  /** Always use the large size (for scaled compositions) instead of shrinking on small screens. */
  fixed?: boolean;
};

export function StudentsStatCard({ className = "", fixed = false }: StudentsStatCardProps) {
  const pad = fixed ? "p-4" : "p-3 sm:p-4";
  const title = fixed ? "text-base" : "text-sm sm:text-base";
  const meta = fixed ? "text-xs" : "text-[10px] sm:text-xs";
  const row = fixed ? "mt-3" : "mt-2 sm:mt-3";
  const avatar = fixed ? "size-9" : "size-7 sm:size-9";
  const badgeText = fixed ? "text-xs" : "text-[10px] sm:text-xs";

  return (
    <div className={`w-max rounded-xl bg-white text-foreground shadow-sm ${pad} ${className}`}>
      <p className={`font-medium ${title}`}>Happy Students</p>
      <p className={`mt-0.5 flex items-center gap-1 ${meta}`}>
        4.5 <span className="text-muted-foreground">(240)</span>
        <StarIcon width={12} height={12} className="text-primary" />
      </p>
      <div className={`flex items-center pl-2 ${row}`}>
        {AVATAR_COLORS.map((color, i) => (
          <span key={i} className={`-ml-2 rounded-full ring-2 ring-white ${avatar} ${color}`} />
        ))}
        <span
          className={`-ml-2 grid place-items-center rounded-full bg-primary font-semibold text-primary-foreground ring-2 ring-white ${avatar} ${badgeText}`}
        >
          2K+
        </span>
      </div>
    </div>
  );
}