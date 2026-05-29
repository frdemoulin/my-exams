"use client";

import * as React from "react";
import type { Table as TanstackTable } from "@tanstack/react-table";
import { Download } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  exportMatrixToXlsx,
  exportRowsToXlsx,
  XlsxCellValue,
  XlsxExportColumn,
  XlsxExportHeader,
} from "@/lib/xlsx-export";

type DataTableExportButtonProps<TData> = {
  columns?: XlsxExportColumn<TData>[];
  disabled?: boolean;
  filename: string;
  headers?: XlsxExportHeader[];
  label?: string;
  rows?: TData[];
  sheetName?: string;
  table?: TanstackTable<TData>;
  values?: XlsxCellValue[][];
};

const EXCLUDED_COLUMN_IDS = new Set(["actions", "select"]);

const humanizeColumnId = (columnId: string) =>
  columnId
    .replace(/[_\.]/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/^./, (char) => char.toUpperCase());

const toExportValue = (value: unknown): XlsxCellValue => {
  if (
    value === null ||
    value === undefined ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    value instanceof Date
  ) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => toExportValue(item)).join(", ");
  }

  return String(value);
};

const buildColumnsFromTable = <TData,>(table: TanstackTable<TData>): XlsxExportColumn<TData>[] => {
  const tableRows = table.getPrePaginationRowModel().rows;

  return table
    .getVisibleLeafColumns()
    .filter((column) => !EXCLUDED_COLUMN_IDS.has(column.id))
    .map((column) => ({
      header:
        typeof column.columnDef.header === "string"
          ? column.columnDef.header
          : humanizeColumnId(column.id),
      value: (row) => {
        const tableRow = tableRows.find((currentRow) => currentRow.original === row);
        return toExportValue(tableRow?.getValue(column.id));
      },
      width: Math.max(14, Math.min(36, humanizeColumnId(column.id).length + 8)),
    }));
};

export function DataTableExportButton<TData>({
  columns,
  disabled,
  filename,
  headers,
  label = "Exporter XLSX",
  rows,
  sheetName,
  table,
  values,
}: DataTableExportButtonProps<TData>) {
  const [isExporting, setIsExporting] = React.useState(false);
  const exportRows = table
    ? table.getPrePaginationRowModel().rows.map((row) => row.original)
    : rows ?? [];
  const exportColumns = table ? buildColumnsFromTable(table) : columns ?? [];
  const exportCount = values ? values.length : exportRows.length;
  const hasExportData = values
    ? values.length > 0 && Boolean(headers?.length)
    : exportRows.length > 0 && exportColumns.length > 0;

  const handleExport = async () => {
    setIsExporting(true);
    try {
      if (values && headers) {
        await exportMatrixToXlsx({ filename, headers, rows: values, sheetName });
      } else {
        await exportRowsToXlsx({ columns: exportColumns, filename, rows: exportRows, sheetName });
      }
      toast.success(`${exportCount} ligne${exportCount > 1 ? "s" : ""} exportée${exportCount > 1 ? "s" : ""}`);
    } catch {
      toast.error("Erreur pendant l'export XLSX");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      type="button"
      variant="default"
      size="sm"
      onClick={handleExport}
      disabled={disabled || isExporting || !hasExportData}
      className="font-semibold"
    >
      <Download className="h-4 w-4" />
      {isExporting ? "Export..." : label}
    </Button>
  );
}