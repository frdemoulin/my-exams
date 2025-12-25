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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTablePagination } from "@/components/shared/data-table-pagination";
import { TableToolbar } from "@/components/shared/table-toolbar";
import { Option } from "@/types/option";

interface DataTableProps<TData, TValue> {
  title: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  subjects: Option[];
}

export function DataTable<TData, TValue>({
  title,
  columns,
  data,
  subjects,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "longDescription", desc: false },
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: "includesString",
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
        placeholder="Rechercher un domaine..."
        value={globalFilter}
        onChange={setGlobalFilter}
        addHref="/admin/domains/add"
        addLabel="Ajouter un domaine"
      >
        <Select
          value={(table.getColumn("subject")?.getFilterValue() as string) ?? "all"}
          onValueChange={(value) =>
            table.getColumn("subject")?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Filtrer par matière" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les matières</SelectItem>
            {subjects.map((subject) => (
              <SelectItem key={subject.value} value={subject.value}>
                {subject.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </TableToolbar>
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
                >
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
