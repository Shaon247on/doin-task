export function CourseStatCard({ className = "" }: { className?: string }) {
  return (
    <div className={`w-max rounded-xl bg-white px-3 py-2.5 text-foreground shadow-sm sm:px-4 sm:py-3 ${className}`}>
      <p className="text-sm font-medium sm:text-base">UI/UX Design</p>
      <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">
        200 Courses &bull; 1000+ Students
      </p>
    </div>
  );
}