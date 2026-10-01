import { CheckCircleIcon } from "@/components/icons/Icons";

const ITEMS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function ManageChecklist() {
  return (
    <ul className="mt-8 flex flex-col gap-4 lg:mt-10">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center gap-3 text-base font-medium text-foreground lg:text-lg">
          <CheckCircleIcon aria-hidden="true" className="shrink-0 text-hero" />
          {item}
        </li>
      ))}
    </ul>
  );
}