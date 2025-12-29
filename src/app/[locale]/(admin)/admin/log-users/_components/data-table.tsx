"use client";

import * as React from "react";

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
import type { AuthLogListItem } from "./columns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTableProps {
  title: string;
  columns: ColumnDef<AuthLogListItem, unknown>[];
  data: AuthLogListItem[];
}

export function DataTable({ title, columns, data }: DataTableProps) {
  const defaultSorting: SortingState = [{ id: "createdAt", desc: true }];
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
        placeholder="Rechercher un utilisateur..."
        value={globalFilter}
        onChange={setGlobalFilter}
      >
        <Select
          value={(table.getColumn("action")?.getFilterValue() as string) ?? "all"}
          onValueChange={(value) =>
            table.getColumn("action")?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Filtrer par action" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les actions</SelectItem>
            <SelectItem value="SIGN_IN">Connexion</SelectItem>
            <SelectItem value="SIGN_OUT">Déconnexion</SelectItem>
          </SelectContent>
        </Select>
      </TableToolbar>
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
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
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
