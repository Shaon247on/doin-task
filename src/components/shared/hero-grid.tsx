type HeroGridProps = {
  cols?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  rows?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
};

export function HeroGrid({
  cols = {
    base: 6,
    sm: 8,
    md: 10,
    lg: 12,
    xl: 16,
  },
  rows = {
    base: 8,
    sm: 8,
    md: 9,
    lg: 9,
    xl: 10,
  },
}: HeroGridProps) {
  const totalCells = Math.max(
    cols.base! * rows.base!,
    cols.sm! * rows.sm!,
    cols.md! * rows.md!,
    cols.lg! * rows.lg!,
    cols.xl! * rows.xl!,
  );

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        inset-0
        z-0
        grid
        grid-cols-${cols.base}
        grid-rows-${rows.base}

        sm:grid-cols-${cols.sm}
        sm:grid-rows-${rows.sm}

        md:grid-cols-${cols.md}
        md:grid-rows-${rows.md}

        lg:grid-cols-${cols.lg}
        lg:grid-rows-${rows.lg}

        xl:grid-cols-${cols.xl}
        xl:grid-rows-${rows.xl}
      `}
    >
      {Array.from({ length: totalCells }).map((_, index) => (
        <div
          key={index}
          className="border border-white/10"
        />
      ))}
    </div>
  );
}