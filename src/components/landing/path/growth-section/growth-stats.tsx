const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export function GrowthStats() {
  return (
    <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 sm:gap-x-12 lg:mt-12">
      {STATS.map(({ value, label }) => (
        <div key={label}>
          <dd className="font-poppins text-3xl font-medium text-hero sm:text-4xl">{value}</dd>
          <dt className="mt-1 text-base text-foreground/70 lg:text-lg">{label}</dt>
        </div>
      ))}
    </dl>
  );
}