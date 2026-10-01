const BALLS = [
  // lime, top-left
  "bg-primary/50 left-[-20%] top-[-6%] size-[260px] md:left-[11%] md:top-[-12%] md:size-[480px]",
  // blue, top-right
  "bg-hero/15 left-[70%] top-[3%] size-[240px] md:left-[84%] md:top-[4%] md:size-[420px]",
  // blue, left-middle
  "bg-hero/20 left-[-30%] top-[40%] size-[200px] md:left-[-8%] md:top-[39%] md:size-[320px]",
  // lime, bottom-left
  "bg-primary/45 left-[-30%] top-[76%] size-[260px] md:left-[-12%] md:top-[72%] md:size-[420px]",
  // blue, bottom-right
  "bg-hero/25 left-[60%] top-[78%] size-[300px] md:left-[74%] md:top-[73%] md:size-[520px]",
];

export function PathBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {BALLS.map((cls, i) => (
        <span key={i} className={`absolute rounded-full blur-[80px] md:blur-[120px] ${cls}`} />
      ))}
    </div>
  );
}