"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  ColumnFiltersState,
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "@/components/shared/data-table-pagination";
import { DataTableExportButton } from "@/components/shared/data-table-export-button";
import { TableToolbar } from "@/components/shared/table-toolbar";
import { accentInsensitiveIncludesString } from "@/components/shared/data-table-filters";
import { isEditableQuestionFormatCode } from "@/core/questions/question-format";
import { normalizePersistedQuestionFormat } from "@/core/questions/question-persistence";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface DataTableProps<TData extends { id: string }, TValue> {
  title: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  description?: string;
  addHref: string;
  filterLabel?: string;
  formatFilterOptions?: string[];
}

export function DataTable<TData extends { id: string }, TValue>({
  title,
  columns,
  data,
  description,
  addHref,
  filterLabel,
  formatFilterOptions = [],
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const defaultSorting: SortingState = [{ id: "question", desc: false }];
  const [sorting, setSorting] = React.useState<SortingState>(defaultSorting);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const handleSortingChange = (
    updater: SortingState | ((prev: SortingState) => SortingState)
  ) => {
    setSorting((current) => {
      const next = typeof updater === "function" ? updater(current) : updater;
      return next.length === 0 ? defaultSorting : next;
    });
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: handleSortingChange,
    onColumnFiltersChange: setColumnFilters,
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: accentInsensitiveIncludesString,
    initialState: {
      sorting: defaultSorting,
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });
  const questionFormatColumn = table.getColumn("questionFormat");
  const selectedQuestionFormat =
    (questionFormatColumn?.getFilterValue() as string | undefined) ?? "all";
  const resolveRowHref = (row: TData) =>
    isEditableQuestionFormatCode(normalizePersistedQuestionFormat(row))
      ? `/admin/training/quiz-questions/${row.id}/edit`
      : null;

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement>,
    row: TData
  ) => {
    const rowHref = resolveRowHref(row);
    if (!rowHref) {
      return;
    }

    const target = event.target as HTMLElement;
    if (
      target.closest("[data-row-action]") ||
      target.closest("a, button, [role='button'], input, select, textarea") ||
      target.closest("[role='menuitem']")
    ) {
      return;
    }
    router.push(rowHref);
  };

  const filteredCount = table.getFilteredRowModel().rows.length;
  const totalCount = filteredCount;
  const pagination = table.getState().pagination;
  const pageIndex = pagination?.pageIndex ?? 0;
  const pageSize = pagination?.pageSize ?? (data.length || 10);
  const currentPageCount = table.getRowModel().rows.length;
  const pageFrom = filteredCount === 0 ? 0 : Math.min(pageIndex * pageSize + 1, filteredCount);
  const pageTo = filteredCount === 0 ? 0 : Math.min(pageFrom + currentPageCount - 1, filteredCount);

  return (
    <div>
      <TableToolbar
        title={title}
        description={description}
        pageFrom={pageFrom}
        pageTo={pageTo}
        totalCount={totalCount}
        placeholder="Rechercher une question..."
        value={globalFilter}
        onChange={setGlobalFilter}
        actions={
          <DataTableExportButton
            filename={title}
            sheetName={title}
            table={table}
          />
        }
        addHref={addHref}
        addLabel="Ajouter une question"
      >
        {formatFilterOptions.length > 0 ? (
          <Select
            value={selectedQuestionFormat}
            onValueChange={(value) => {
              questionFormatColumn?.setFilterValue(value === "all" ? undefined : value);
            }}
          >
            <SelectTrigger
              aria-label="Filtrer par format UNESS"
              className="w-full md:w-[260px]"
            >
              <SelectValue placeholder="Tous les formats UNESS" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les formats UNESS</SelectItem>
              {formatFilterOptions.map((formatLabel) => (
                <SelectItem key={formatLabel} value={formatLabel}>
                  {formatLabel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : null}
        {filterLabel ? (
          <Button asChild size="sm" variant="outline">
            <Link href="/admin/training/quiz-questions">Série: {filterLabel}</Link>
          </Button>
        ) : null}
      </TableToolbar>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => {
              const rowHref = resolveRowHref(row.original);

              return (
                <TableRow
                  key={row.id}
                  onClick={(event) => handleRowClick(event, row.original)}
                  className={cn(
                    "transition-colors hover:bg-neutral-primary-soft",
                    rowHref ? "cursor-pointer" : "cursor-default"
                  )}
                >
                  {row.getVisibleCells().map((cell) => {
                    const isActionCell = cell.column.id === "actions";
                    return (
                      <TableCell key={cell.id} data-row-action={isActionCell || undefined}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Aucun résultat.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  );
}
