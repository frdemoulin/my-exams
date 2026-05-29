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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTablePagination } from "@/components/shared/data-table-pagination";
import { DataTableExportButton } from "@/components/shared/data-table-export-button";
import { TableToolbar } from "@/components/shared/table-toolbar";
import { accentInsensitiveIncludesString } from "@/components/shared/data-table-filters";
import { Option } from "@/types/option";
import { formatDateTime } from "@/lib/utils";
import { XlsxExportColumn } from "@/lib/xlsx-export";

import { SubdomainData } from "@/core/subdomain";

interface DataTableProps {
  title: string;
  columns: ColumnDef<SubdomainData, unknown>[];
  data: SubdomainData[];
  subjects: Option[];
  domains: Option[];
}

export function DataTable({ title, columns, data, subjects, domains }: DataTableProps) {
  const router = useRouter();
  const defaultSorting: SortingState = [{ id: "title", desc: false }];
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
    globalFilterFn: accentInsensitiveIncludesString,
    initialState: { sorting: defaultSorting },
    state: { sorting, columnFilters, globalFilter },
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
    router.push(`/admin/subdomains/${rowId}`);
  };

  const filteredCount = table.getFilteredRowModel().rows.length;
  const totalCount = filteredCount;
  const pagination = table.getState().pagination;
  const pageIndex = pagination?.pageIndex ?? 0;
  const pageSize = pagination?.pageSize ?? (data.length || 10);
  const currentPageCount = table.getRowModel().rows.length;
  const pageFrom = filteredCount === 0 ? 0 : Math.min(pageIndex * pageSize + 1, filteredCount);
  const pageTo = filteredCount === 0 ? 0 : Math.min(pageFrom + currentPageCount - 1, filteredCount);
  const exportRows = table.getPrePaginationRowModel().rows.map((row) => row.original);
  const exportColumns: XlsxExportColumn<SubdomainData>[] = [
    { header: "Titre", value: (s) => s.title, width: 30 },
    { header: "Slug", value: (s) => s.slug, width: 24 },
    { header: "Matière", value: (s) => s.subject?.longDescription ?? "N/A", width: 26 },
    { header: "Domaine", value: (s) => s.domain?.longDescription ?? "N/A", width: 30 },
    { header: "Nombre de thèmes", value: (s) => s._count?.themes ?? 0, width: 18 },
    { header: "Ordre", value: (s) => s.order ?? "", width: 8 },
    { header: "Statut", value: (s) => (s.isActive ? "Actif" : "Inactif"), width: 12 },
    {
      header: "Date de dernière modification",
      value: (s) => formatDateTime(s.updatedAt),
      width: 28,
    },
  ];

  const subjectFilterValue =
    (table.getColumn("subject")?.getFilterValue() as string) ?? "all";
  const domainFilterValue =
    (table.getColumn("domain")?.getFilterValue() as string) ?? "all";

  return (
    <div>
      <TableToolbar
        title={title}
        pageFrom={pageFrom}
        pageTo={pageTo}
        totalCount={totalCount}
        placeholder="Rechercher un sous-domaine..."
        value={globalFilter}
        onChange={setGlobalFilter}
        addHref="/admin/subdomains/add"
        addLabel="Ajouter un sous-domaine"
        actions={
          <DataTableExportButton
            columns={exportColumns}
            filename="sous-domaines.xlsx"
            rows={exportRows}
            sheetName="Sous-domaines"
          />
        }
      >
        <Select
          value={subjectFilterValue}
          onValueChange={(value) =>
            table.getColumn("subject")?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-[200px]">
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
        <Select
          value={domainFilterValue}
          onValueChange={(value) =>
            table.getColumn("domain")?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Filtrer par domaine" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les domaines</SelectItem>
            {domains.map((domain) => (
              <SelectItem key={domain.value} value={domain.value}>
                {domain.label}
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
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={header.column.id === "isActive" ? "text-center" : undefined}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
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
                      <TableCell
                        key={cell.id}
                        className={cell.column.id === "isActive" ? "text-center" : undefined}
                        data-row-action={isActionCell || undefined}
                      >
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
