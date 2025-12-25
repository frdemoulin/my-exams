import type { SortingFn } from "@tanstack/react-table";

export const localeStringSort = <TData,>(): SortingFn<TData> => {
  return (rowA, rowB, columnId) => {
    const aValue = rowA.getValue(columnId);
    const bValue = rowB.getValue(columnId);

    const aText = aValue === null || aValue === undefined ? "" : String(aValue);
    const bText = bValue === null || bValue === undefined ? "" : String(bValue);

    return aText.localeCompare(bText, "fr", { sensitivity: "base", numeric: true });
  };
};
