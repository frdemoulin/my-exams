"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
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
import { TableToolbar } from "@/components/shared/table-toolbar";
import { accentInsensitiveIncludesString } from "@/components/shared/data-table-filters";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DataTableProps<TData extends { id: string }, TValue> {
  title: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  description?: string;
  addHref: string;
  filterLabel?: string;
}

export function DataTable<TData extends { id: string }, TValue>({
  title,
  columns,
  data,
  description,
  addHref,
  filterLabel,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const defaultSorting: SortingState = [{ id: "question", desc: false }];
  const [sorting, setSorting] = React.useState<SortingState>(defaultSorting);
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
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: accentInsensitiveIncludesString,
    initialState: {
      sorting: defaultSorting,
    },
    state: {
      sorting,
      globalFilter,
    },
  });

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement>,
    rowId: string
  ) => {
    const target = event.target as HTMLElement;
    if (
      target.closest("[data-row-action]") ||
      target.closest("a, button, [role='button'], input, select, textarea") ||
      target.closest("[role='menuitem']")
    ) {
      return;
    }
    router.push(`/admin/training/quiz-questions/${rowId}/edit`);
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
        addHref={addHref}
        addLabel="Ajouter une question"
      >
        {filterLabel ? (
          <Button asChild size="sm" variant="outline">
            <Link href="/admin/training/quiz-questions">Filtre: {filterLabel}</Link>
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
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={(event) => handleRowClick(event, row.original.id)}
                className="cursor-pointer transition-colors hover:bg-neutral-primary-soft"
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
            ))
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