"use client";

import { type Table } from "@tanstack/react-table";

function buildPageList(total: number, current: number): Array<number | "..."> {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i);
  const pages = new Set<number>();
  pages.add(0);
  pages.add(total - 1);
  pages.add(current);
  pages.add(current - 1);
  pages.add(current + 1);
  pages.add(current - 2);
  pages.add(current + 2);
  const sorted = Array.from(pages).filter((p) => p >= 0 && p < total).sort((a, b) => a - b);
  const result: Array<number | "..."> = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) {
      result.push(sorted[i]);
      continue;
    }
    if (sorted[i] - sorted[i - 1] === 1) {
      result.push(sorted[i]);
    } else {
      result.push("...");
      result.push(sorted[i]);
    }
  }
  return result;
}

export function DataTablePagination<T>({ table }: { table: Table<T> }) {
  const pageCount = table.getPageCount();
  const pageIndex = table.getState().pagination?.pageIndex ?? 0;
  if (pageCount <= 1) return null;

  const pages = buildPageList(pageCount, pageIndex);

  const baseBtn =
    "inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700";
  const activeBtn =
    "bg-blue-600 border-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:border-blue-600 dark:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-800";

  return (
    <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-muted-foreground">
        Page {pageIndex + 1} / {pageCount}
      </div>
      <nav aria-label="Pagination">
        <ul className="inline-flex items-center gap-1">
          <li>
            <button
              className={`${baseBtn} rounded-l-md`}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Précédent
            </button>
          </li>
          {pages.map((p, idx) =>
            p === "..." ? (
              <li key={`ellipsis-${idx}`}>
                <span className={`${baseBtn} cursor-default`}>…</span>
              </li>
            ) : (
              <li key={p}>
                <button
                  className={`${baseBtn} ${p === pageIndex ? activeBtn : ""}`}
                  onClick={() => table.setPageIndex(p)}
                  aria-current={p === pageIndex ? "page" : undefined}
                  style={
                    p === pageIndex
                      ? {
                          backgroundColor: "#2563eb",
                          color: "#ffffff",
                          borderColor: "#2563eb",
                        }
                      : undefined
                  }
                >
                  {p + 1}
                </button>
              </li>
            )
          )}
          <li>
            <button
              className={`${baseBtn} rounded-r-md`}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Suivant
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
