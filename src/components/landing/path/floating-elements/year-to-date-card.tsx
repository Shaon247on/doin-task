type YearToDateCardProps = {
  year?: string;
  amount?: string;
  change?: string;
  className?: string;
};

export function YearToDateCard({
  year = "2023",
  amount = "$1,200.38",
  change = "+12$",
  className = "",
}: YearToDateCardProps) {
  return (
    <div className={`w-33.5 rounded-xl bg-hero p-4 text-white ${className}`}>
      <p className="text-sm font-medium leading-tight">Year to Date</p>
      <p className="text-[9px] text-white/70">{year}</p>
      <p className="mt-2 whitespace-nowrap text-[22px] font-semibold leading-none">{amount}</p>
      <span className="mt-3 inline-block rounded-full bg-primary px-2 py-1 text-[9px] font-semibold text-primary-foreground">
        {change}
      </span>
    </div>
  );
}