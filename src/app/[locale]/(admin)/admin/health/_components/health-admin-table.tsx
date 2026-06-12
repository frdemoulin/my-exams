"use client";

import * as React from "react";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
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
import toast from "react-hot-toast";

import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { DataTableExportButton } from "@/components/shared/data-table-export-button";
import { DataTablePagination } from "@/components/shared/data-table-pagination";
import { SortableHeader } from "@/components/shared/sortable-header";
import {
  actionMenuContent,
  actionMenuHeader,
  actionMenuItem,
  actionMenuTrigger,
} from "@/components/shared/table-action-menu";
import { TableToolbar } from "@/components/shared/table-toolbar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteHealthEntity,
  HealthAdminRow,
  HealthEntity,
  healthEntityLabels,
} from "@/core/health";
import { localeStringSort } from "@/lib/table";
import { formatDateTime } from "@/lib/utils";

function HealthActions({
  entity,
  row,
}: {
  entity: HealthEntity;
  row: HealthAdminRow;
}) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleDelete = async () => {
    try {
      await deleteHealthEntity(entity, row.id);
      toast.success(`${healthEntityLabels[entity].singular} supprimé`);
      setMenuOpen(false);
      router.refresh();
    } catch {
      toast.error("Suppression impossible. Vérifie les rattachements existants.");
    }
  };

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <button type="button" className={actionMenuTrigger}>
          <span className="sr-only">Ouvrir le menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={actionMenuContent}>
        <div className={actionMenuHeader}>Actions</div>
        <DropdownMenuItem className={actionMenuItem}>
          <Link href={`/admin/health/${entity}/${row.id}`}>Voir</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={actionMenuItem}>
          <Link href={`/admin/health/${entity}/${row.id}/edit`}>Éditer</Link>
        </DropdownMenuItem>
        <ConfirmDeleteDialog
          title={`Supprimer ${healthEntityLabels[entity].definite}`}
          description={`La suppression de « ${row.primary} » est définitive et peut être bloquée si des éléments y sont rattachés.`}
          onConfirm={handleDelete}
          trigger={
            <DropdownMenuItem
              className={actionMenuItem}
              onSelect={(event) => event.preventDefault()}
            >
              Supprimer
            </DropdownMenuItem>
          }
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const localeSort = localeStringSort<HealthAdminRow>();
const booleanFilter = (
  row: { getValue: (columnId: string) => unknown },
  columnId: string,
  value: boolean,
) => row.getValue(columnId) === value;

function getColumns(entity: HealthEntity): ColumnDef<HealthAdminRow>[] {
  return [
    {
      accessorKey: "primary",
      sortingFn: localeSort,
      header: ({ column }) => (
        <SortableHeader label="NOM" column={column} align="left" />
      ),
      cell: ({ row }) => (
        <div className="font-medium text-heading">{row.original.primary}</div>
      ),
    },
    {
      accessorKey: "secondary",
      sortingFn: localeSort,
      header: ({ column }) => (
        <SortableHeader label="CONTEXTE" column={column} align="left" />
      ),
      cell: ({ row }) => row.original.secondary || "—",
    },
    {
      id: "details",
      accessorFn: (row) => row.details.join(", "),
      sortingFn: localeSort,
      header: ({ column }) => (
        <SortableHeader label="DÉTAILS" column={column} align="left" />
      ),
      cell: ({ row }) => (
        <div className="flex max-w-xl flex-wrap gap-1.5">
          {row.original.details.length > 0
            ? row.original.details.map((detail) => (
                <Badge key={detail} variant="secondary">
                  {detail}
                </Badge>
              ))
            : "—"}
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      filterFn: booleanFilter,
      header: ({ column }) => <SortableHeader label="ACTIF" column={column} />,
      cell: ({ row }) => (
        <Badge variant={row.original.isActive ? "default" : "secondary"}>
          {row.original.isActive ? "Oui" : "Non"}
        </Badge>
      ),
    },
    {
      accessorKey: "isPublished",
      filterFn: booleanFilter,
      header: ({ column }) => <SortableHeader label="PUBLIÉ" column={column} />,
      cell: ({ row }) => (
        <Badge variant={row.original.isPublished ? "default" : "outline"}>
          {row.original.isPublished ? "Oui" : "Non"}
        </Badge>
      ),
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }) => (
        <SortableHeader
          label="DERNIÈRE MODIFICATION"
          column={column}
          align="left"
        />
      ),
      cell: ({ row }) => formatDateTime(new Date(row.original.updatedAt)),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => <HealthActions entity={entity} row={row.original} />,
    },
  ];
}

export function HealthAdminTable({
  entity,
  rows,
}: {
  entity: HealthEntity;
  rows: HealthAdminRow[];
}) {
  const router = useRouter();
  const columns = React.useMemo(() => getColumns(entity), [entity]);
  const defaultSorting: SortingState = [{ id: "primary", desc: false }];
  const [sorting, setSorting] = React.useState<SortingState>(defaultSorting);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    initialState: { sorting: defaultSorting },
    state: { columnFilters, globalFilter, sorting },
  });

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement>,
    rowId: string,
  ) => {
    const target = event.target as HTMLElement;
    if (
      target.closest("[data-row-action]") ||
      target.closest("a, button, [role='button'], input, select, textarea") ||
      target.closest("[role='menuitem']")
    ) {
      return;
    }
    router.push(`/admin/health/${entity}/${rowId}`);
  };

  const filteredCount = table.getFilteredRowModel().rows.length;
  const pagination = table.getState().pagination;
  const pageIndex = pagination?.pageIndex ?? 0;
  const pageSize = pagination?.pageSize ?? (rows.length || 10);
  const currentPageCount = table.getRowModel().rows.length;
  const pageFrom =
    filteredCount === 0 ? 0 : Math.min(pageIndex * pageSize + 1, filteredCount);
  const pageTo =
    filteredCount === 0
      ? 0
      : Math.min(pageFrom + currentPageCount - 1, filteredCount);
  const label = healthEntityLabels[entity];

  return (
    <div>
      <TableToolbar
        title={label.listTitle}
        description={`Consulte, filtre et gère les ${label.plural.toLocaleLowerCase("fr")} du référentiel santé.`}
        pageFrom={pageFrom}
        pageTo={pageTo}
        totalCount={filteredCount}
        placeholder={`Rechercher ${label.indefinite}...`}
        value={globalFilter}
        onChange={setGlobalFilter}
        addHref={`/admin/health/${entity}/add`}
        addLabel={`Ajouter ${label.indefinite}`}
        actions={
          <DataTableExportButton
            filename={`sante-${entity}`}
            sheetName={label.plural}
            table={table}
          />
        }
      >
        <StatusFilter
          label="Tous les statuts"
          columnValue={table.getColumn("isActive")?.getFilterValue()}
          onChange={(value) => table.getColumn("isActive")?.setFilterValue(value)}
          yesLabel="Actifs"
          noLabel="Inactifs"
        />
        <StatusFilter
          label="Toutes les publications"
          columnValue={table.getColumn("isPublished")?.getFilterValue()}
          onChange={(value) =>
            table.getColumn("isPublished")?.setFilterValue(value)
          }
          yesLabel="Publiés"
          noLabel="Brouillons"
        />
      </TableToolbar>

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
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={(event) => handleRowClick(event, row.original.id)}
                className="cursor-pointer transition-colors hover:bg-neutral-primary-soft"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    data-row-action={cell.column.id === "actions" || undefined}
                  >
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
      <DataTablePagination table={table} />
    </div>
  );
}

function StatusFilter({
  label,
  columnValue,
  onChange,
  yesLabel,
  noLabel,
}: {
  label: string;
  columnValue: unknown;
  onChange: (value: boolean | undefined) => void;
  yesLabel: string;
  noLabel: string;
}) {
  return (
    <Select
      value={columnValue === undefined ? "all" : String(columnValue)}
      onValueChange={(value) =>
        onChange(value === "all" ? undefined : value === "true")
      }
    >
      <SelectTrigger className="w-[190px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">{label}</SelectItem>
        <SelectItem value="true">{yesLabel}</SelectItem>
        <SelectItem value="false">{noLabel}</SelectItem>
      </SelectContent>
    </Select>
  );
}
