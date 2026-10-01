export default function CoursesLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="h-11 w-64 animate-pulse rounded-full bg-muted" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="h-95 animate-pulse rounded-[28px] bg-muted" />
        ))}
      </div>
    </div>
  );
}