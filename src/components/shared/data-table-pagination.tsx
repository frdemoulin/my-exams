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
    "flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm h-9 min-w-[2.25rem] px-3 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const pageBtn = `${baseBtn} w-9 px-0`;
  const activeBtn =
    "text-fg-brand bg-neutral-tertiary-medium border-default-medium hover:text-fg-brand";

  return (
    <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-muted-foreground">
        Page {pageIndex + 1} / {pageCount}
      </div>
      <nav aria-label="Pagination">
        <ul className="flex -space-x-px text-sm">
          <li>
            <button
              className={`${baseBtn} rounded-s-base`}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Précédent
            </button>
          </li>
          {pages.map((p, idx) =>
            p === "..." ? (
              <li key={`ellipsis-${idx}`}>
                <span className={`${pageBtn} cursor-default text-muted-foreground`}>…</span>
              </li>
            ) : (
              <li key={p}>
                <button
                  className={`${pageBtn} ${p === pageIndex ? activeBtn : ""}`}
                  onClick={() => table.setPageIndex(p)}
                  aria-current={p === pageIndex ? "page" : undefined}
                >
                  {p + 1}
                </button>
              </li>
            )
          )}
          <li>
            <button
              className={`${baseBtn} rounded-e-base`}
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
