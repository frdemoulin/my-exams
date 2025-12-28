import { Column } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { SortIcon } from "@/components/shared/sort-icon";

export const cycleSorting = (
  column: Column<any, unknown>,
  resetSorting?: () => void
) => {
  const state = column.getIsSorted();
  if (state === "asc") column.toggleSorting(true);
  else if (state === "desc") {
    if (resetSorting) {
      resetSorting();
    } else {
      column.clearSorting();
    }
  }
  else column.toggleSorting(false);
};

type SortableHeaderProps = {
  column: Column<any, unknown>;
  label: string;
  align?: "left" | "center";
  resetSorting?: () => void;
};

export function SortableHeader({
  column,
  label,
  align = "center",
  resetSorting,
}: SortableHeaderProps) {
  return (
    <Button
      variant="ghost"
      className={`text-xs font-semibold uppercase tracking-wide text-heading dark:text-heading hover:bg-transparent hover:text-heading dark:hover:bg-transparent dark:hover:text-heading focus-visible:ring-2 focus-visible:ring-neutral-tertiary ${align === "left" ? "justify-start" : ""}`}
      onClick={() => cycleSorting(column, resetSorting)}
    >
      {label}
      <SortIcon direction={column.getIsSorted()} />
    </Button>
  );
}
