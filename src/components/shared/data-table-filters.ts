import type { FilterFn } from "@tanstack/react-table";
import { normalizeSearchText } from "@/lib/utils";

export const accentInsensitiveIncludesString: FilterFn<any> = (
  row,
  columnId,
  filterValue
) => {
  const normalizedFilter = normalizeSearchText(filterValue);
  if (!normalizedFilter) return true;

  const normalizedRowValue = normalizeSearchText(row.getValue(columnId));
  return normalizedRowValue.includes(normalizedFilter);
};
