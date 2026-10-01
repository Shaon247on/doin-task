type ProgressStatCardProps = {
  value?: number;
  className?: string;
  /** Always use the large size (for scaled compositions) instead of shrinking on small screens. */
  fixed?: boolean;
};

export function ProgressStatCard({ value = 55, className = "", fixed = false }: ProgressStatCardProps) {
  const box = fixed ? "w-[232px] p-4" : "w-36 p-3 sm:w-56 sm:p-4";
  const label = fixed ? "text-sm" : "text-xs sm:text-sm";
  const number = fixed ? "mt-2 text-5xl" : "mt-1 text-3xl sm:mt-2 sm:text-5xl";
  const bar = fixed ? "mt-3" : "mt-2 sm:mt-3";

  return (
    <div className={`rounded-xl bg-white text-foreground shadow-sm ${box} ${className}`}>
      <p className={label}>Learning Progress</p>
      <p className={`font-semibold ${number}`}>{value}%</p>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`h-1.5 w-full overflow-hidden rounded-full bg-muted ${bar}`}
      >
        <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}