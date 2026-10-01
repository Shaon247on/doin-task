import type { ReactNode } from "react";

import { ChevronDownIcon } from "@/components/icons/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Option = { value: string; label: string };

type PillSelectProps = {
  label: string;
  value: string;
  options: readonly Option[];
  onChange: (value: string) => void;
  icon?: ReactNode;
  variant?: "outline" | "lime";
  highlightWhenSet?: boolean;
};

export function PillSelect({
  label,
  value,
  options,
  onChange,
  icon,
  variant = "outline",
  highlightWhenSet = true,
}: PillSelectProps) {
  const selected = options.find((option) => option.value === value);
  const styles =
    variant === "lime"
      ? "h-13 border-transparent bg-primary px-5 text-base text-primary-foreground"
      : `h-11 bg-white px-4 text-sm ${
          highlightWhenSet && value
            ? "border-hero text-hero"
            : "border-[#CED0D3] text-foreground"
        }`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={label}
        className={`inline-flex items-center gap-2 rounded-full border font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-popup-open:ring-3 data-popup-open:ring-ring/30 ${styles}`}
      >
        {icon}
        <span className="whitespace-nowrap">{selected?.label ?? label}</span>
        <ChevronDownIcon width={18} height={18} aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}