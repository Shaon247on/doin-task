import type { ReactNode } from "react";

type ScaledStageProps = {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
};

export function ScaledStage({ width, height, children, className = "" }: ScaledStageProps) {
  return (
    <div
      className={`relative w-full [--s:0.58] max-[400px]:[--s:0.5] sm:[--s:0.85] md:[--s:1] lg:[--s:0.8] xl:[--s:0.95] 2xl:[--s:1] ${className}`}
      style={{ height: `calc(${height}px * var(--s))` }}
    >
      <div
        className="absolute left-1/2 top-0 origin-top"
        style={{ width, height, marginLeft: -width / 2, transform: "scale(var(--s))" }}
      >
        {children}
      </div>
    </div>
  );
}