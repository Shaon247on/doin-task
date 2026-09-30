import { ManageContent } from "./manage-content";
import { ManageVisual } from "./manage-visual";

/** Visual is on the left on desktop, but the text comes first when stacked on mobile/tablet. */
export function ManageRow() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
      <div className="order-2 lg:order-1">
        <ManageVisual />
      </div>
      <div className="order-1 lg:order-2 lg:pl-8">
        <ManageContent />
      </div>
    </div>
  );
}