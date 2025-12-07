import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

type SortState = false | "asc" | "desc";

export function SortIcon({ direction }: { direction: SortState }) {
  return (
    <ArrowUp
      className={cn(
        "ml-2 h-4 w-4 transition-transform",
        direction === "desc" && "rotate-180",
        !direction && "opacity-50"
      )}
    />
  );
}
