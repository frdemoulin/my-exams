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
  columns: XlsxExportColumn<TData>[];
  filename: string;
  rows: TData[];
  sheetName?: string;
};

type ExportMatrixToXlsxOptions = {
  filename: string;
  headers: XlsxExportHeader[];
  rows: XlsxCellValue[][];
  sheetName?: string;
};

const ensureXlsxExtension = (filename: string) =>
  filename.toLowerCase().endsWith(".xlsx") ? filename : `${filename}.xlsx`;

const sanitizeSheetName = (sheetName: string) =>
  sheetName.replace(/[\\/?*:[\]]/g, " ").trim().slice(0, 31) || "Export";

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

  await writeXlsxFile([headerRow, ...dataRows], {
    columns: columns.map((column) => ({ width: column.width ?? 18 })),
    sheet: sanitizeSheetName(sheetName),
  }).toFile(ensureXlsxExtension(filename));
}

export async function exportMatrixToXlsx({
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

  await writeXlsxFile([headerRow, ...dataRows], {
    columns: headers.map((header) => ({ width: header.width ?? 18 })),
    sheet: sanitizeSheetName(sheetName),
  }).toFile(ensureXlsxExtension(filename));
}