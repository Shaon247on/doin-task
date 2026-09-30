import type { CSSProperties } from "react";

type BreakpointValues = {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

type HeroGridProps = {
  cols?: BreakpointValues;
  rows?: BreakpointValues;
};

export function HeroGrid({
  cols = {
    base: 6,
    sm: 4,
    md: 10,
    lg: 12,
    xl: 16,
  },
  rows = {
    base: 13,
    sm: 8,
    md: 9,
    lg: 9,
    xl: 9,
  },
}: HeroGridProps) {
  const baseCols = cols.base ?? 6;
  const baseRows = rows.base ?? 5;

  const smCols = cols.sm ?? baseCols;
  const smRows = rows.sm ?? baseRows;

  const mdCols = cols.md ?? smCols;
  const mdRows = rows.md ?? smRows;

  const lgCols = cols.lg ?? mdCols;
  const lgRows = rows.lg ?? mdRows;

  const xlCols = cols.xl ?? lgCols;
  const xlRows = rows.xl ?? lgRows;

  // Generate enough cells for the largest breakpoint.
  const totalCells = xlCols * xlRows;

  const style = {
    "--grid-cols": baseCols,
    "--grid-rows": baseRows,
    "--grid-cols-sm": smCols,
    "--grid-rows-sm": smRows,
    "--grid-cols-md": mdCols,
    "--grid-rows-md": mdRows,
    "--grid-cols-lg": lgCols,
    "--grid-rows-lg": lgRows,
    "--grid-cols-xl": xlCols,
    "--grid-rows-xl": xlRows,
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      style={style}
      className="
        pointer-events-none
        absolute
        inset-0
        z-0

        grid
        grid-cols-[repeat(var(--grid-cols),minmax(0,1fr))]
        grid-rows-[repeat(var(--grid-rows),minmax(0,1fr))]

        sm:grid-cols-[repeat(var(--grid-cols-sm),minmax(0,1fr))]
        sm:grid-rows-[repeat(var(--grid-rows-sm),minmax(0,1fr))]

        md:grid-cols-[repeat(var(--grid-cols-md),minmax(0,1fr))]
        md:grid-rows-[repeat(var(--grid-rows-md),minmax(0,1fr))]

        lg:grid-cols-[repeat(var(--grid-cols-lg),minmax(0,1fr))]
        lg:grid-rows-[repeat(var(--grid-rows-lg),minmax(0,1fr))]

        xl:grid-cols-[repeat(var(--grid-cols-xl),minmax(0,1fr))]
        xl:grid-rows-[repeat(var(--grid-rows-xl),minmax(0,1fr))]
      "
    >
      {Array.from({ length: totalCells }, (_, index) => (
        <div
          key={index}
          className="border border-white/10"
        />
      ))}
    </div>
  );
}