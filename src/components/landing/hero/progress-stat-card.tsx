export function ProgressStatCard({
  value = 55,
  className = "",
}: {
  value?: number;
  className?: string;
}) {
  return (
    <div className={`w-36 rounded-xl bg-white p-3 text-foreground shadow-sm sm:w-56 sm:p-4 ${className}`}>
      <p className="text-xs sm:text-sm">Learning Progress</p>
      <p className="mt-1 text-3xl font-semibold sm:mt-2 sm:text-5xl">{value}%</p>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted sm:mt-3"
      >
        <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}