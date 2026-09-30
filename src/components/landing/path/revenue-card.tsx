type RevenueCardProps = {
  label?: string;
  period?: string;
  amount?: string;
  progress?: number;
  className?: string;
};

export function RevenueCard({
  label = "Total Revenue",
  period = "July 1-28",
  amount = "$120.29",
  progress = 60,
  className = "",
}: RevenueCardProps) {
  return (
    <div className={`w-55 rounded-xl bg-hero p-4 text-white ${className}`}>
      <p className="text-[15px] font-medium leading-tight">{label}</p>
      <p className="text-[9px] text-white/70">{period}</p>
      <p className="mt-2 text-2xl font-semibold">{amount}</p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}