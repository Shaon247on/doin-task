export function HeroGrid() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        grid
        grid-cols-6
        grid-rows-8

        sm:grid-cols-8
        sm:grid-rows-8

        md:grid-cols-10
        md:grid-rows-9

        lg:grid-cols-12
        lg:grid-rows-9

        xl:grid-cols-16
        xl:grid-rows-10
      "
    >
      {Array.from({ length: 160 }).map((_, index) => (
        <div
          key={index}
          className="border border-white/10"
        />
      ))}
    </div>
  );
}