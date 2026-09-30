import { GrowthContent } from "./growth-content";
import { GrowthVisual } from "./growth-visual";

export function GrowthRow() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
      <GrowthContent />
      <GrowthVisual />
    </div>
  );
}