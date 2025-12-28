"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import {
  ColumnDef,
  ColumnFiltersState,
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
import type { ExerciseListItem } from "./columns";

interface DataTableProps {
  title: string;
  columns: ColumnDef<ExerciseListItem, unknown>[];
  data: ExerciseListItem[];
}

export function DataTable({ title, columns, data }: DataTableProps) {
  const router = useRouter();
  const defaultSorting: SortingState = [{ id: "updatedAt", desc: true }];
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
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: "includesString",
    initialState: {
      sorting: defaultSorting,
    },
    state: {
      sorting,
      columnFilters,
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
    router.push(`/admin/exercises/${rowId}`);
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
        pageFrom={pageFrom}
        pageTo={pageTo}
        totalCount={totalCount}
        placeholder="Rechercher un exercice..."
        value={globalFilter}
        onChange={setGlobalFilter}
      />
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
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
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
