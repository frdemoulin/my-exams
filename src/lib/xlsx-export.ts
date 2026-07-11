import type { Cell, Row } from "write-excel-file/browser";

export type XlsxCellValue = string | number | boolean | Date | null | undefined;

export type XlsxExportColumn<TData> = {
  header: string;
  value: (row: TData) => XlsxCellValue;
  width?: number;
};

export type XlsxExportHeader = {
  header: string;
  width?: number;
};

type ExportRowsToXlsxOptions<TData> = {
  autoFilter?: boolean;
  columns: XlsxExportColumn<TData>[];
  filename: string;
  rows: TData[];
  sheetName?: string;
};

type ExportMatrixToXlsxOptions = {
  autoFilter?: boolean;
  filename: string;
  headers: XlsxExportHeader[];
  rows: XlsxCellValue[][];
  sheetName?: string;
};

const ensureXlsxExtension = (filename: string) =>
  filename.toLowerCase().endsWith(".xlsx") ? filename : `${filename}.xlsx`;

const sanitizeSheetName = (sheetName: string) =>
  sheetName.replace(/[\\/?*:[\]]/g, " ").trim().slice(0, 31) || "Export";

const getSpreadsheetColumnLabel = (index: number) => {
  let currentIndex = index;
  let label = "";

  while (currentIndex >= 0) {
    label = String.fromCharCode(65 + (currentIndex % 26)) + label;
    currentIndex = Math.floor(currentIndex / 26) - 1;
  }

  return label;
};

const toXlsxCell = (value: XlsxCellValue): Cell => {
  if (value === null || value === undefined) {
    return "";
  }

  if (value instanceof Date) {
    return { value, type: Date };
  }

  if (typeof value === "number") {
    return { value, type: Number };
  }

  if (typeof value === "boolean") {
    return { value, type: Boolean };
  }

  return { value, type: String };
};

export async function exportRowsToXlsx<TData>({
  autoFilter = false,
  columns,
  filename,
  rows,
  sheetName = "Export",
}: ExportRowsToXlsxOptions<TData>) {
  const { default: writeXlsxFile } = await import("write-excel-file/browser");
  const headerRow: Row = columns.map((column) => ({
    value: column.header,
    type: String,
    fontWeight: "bold",
  }));
  const dataRows: Row[] = rows.map((row) =>
    columns.map((column) => toXlsxCell(column.value(row)))
  );

  const autoFilterRef =
    autoFilter && columns.length > 0
      ? `A1:${getSpreadsheetColumnLabel(columns.length - 1)}${rows.length + 1}`
      : null;

  await writeXlsxFile(
    [headerRow, ...dataRows],
    {
      columns: columns.map((column) => ({ width: column.width ?? 18 })),
      sheet: sanitizeSheetName(sheetName),
      stickyRowsCount: autoFilterRef ? 1 : undefined,
    }
  ).toFile(ensureXlsxExtension(filename));
}

export async function exportMatrixToXlsx({
  autoFilter = false,
  filename,
  headers,
  rows,
  sheetName = "Export",
}: ExportMatrixToXlsxOptions) {
  const { default: writeXlsxFile } = await import("write-excel-file/browser");
  const headerRow: Row = headers.map((header) => ({
    value: header.header,
    type: String,
    fontWeight: "bold",
  }));
  const dataRows: Row[] = rows.map((row) => row.map(toXlsxCell));

  const autoFilterRef =
    autoFilter && headers.length > 0
      ? `A1:${getSpreadsheetColumnLabel(headers.length - 1)}${rows.length + 1}`
      : null;

  await writeXlsxFile(
    [headerRow, ...dataRows],
    {
      columns: headers.map((header) => ({ width: header.width ?? 18 })),
      sheet: sanitizeSheetName(sheetName),
      stickyRowsCount: autoFilterRef ? 1 : undefined,
    }
  ).toFile(ensureXlsxExtension(filename));
}
