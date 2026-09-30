/** Grid of boxes behind the creator CTA. Column/row counts change per breakpoint. */
export function CreatorGrid() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none absolute inset-0 z-0 grid
        grid-cols-9 grid-rows-9
        sm:grid-cols-8 sm:grid-rows-6
        md:grid-cols-10 md:grid-rows-6
        lg:grid-cols-12 lg:grid-rows-6
        xl:grid-cols-16 xl:grid-rows-5
      "
    >
      {Array.from({ length: 160 }).map((_, index) => (
        <div key={index} className="border border-white/10" />
      ))}
    </div>
  );
}