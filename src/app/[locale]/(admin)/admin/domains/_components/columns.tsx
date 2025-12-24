"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDateTime } from "@/lib/utils";
import toast from "react-hot-toast";
import { deleteDomain } from "@/core/domain";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import { actionMenuContent, actionMenuHeader, actionMenuItem, actionMenuTrigger } from "@/components/shared/table-action-menu";
import { DomainData } from "@/core/domain";

const disciplineLabels: Record<string, string> = {
  PHYSIQUE: "Physique",
  CHIMIE: "Chimie",
  TRANSVERSAL: "Transversal",
};

const handleOnClickDeleteButton = async (id: string) => {
  try {
    await deleteDomain(id);
    toast.success("Domaine supprimé");
  } catch (error) {
    if (error && typeof error === "object" && "digest" in error && String(error.digest).startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    toast.error("Erreur dans la suppression du domaine");
  }
};

export const columns: ColumnDef<DomainData>[] = [
  {
    accessorKey: "shortDescription",
    header: ({ column }) => (
      <SortableHeader label="DESCRIPTION COURTE" column={column} />
    ),
  },
  {
    accessorKey: "longDescription",
    header: ({ column }) => (
      <SortableHeader label="DESCRIPTION LONGUE" column={column} />
    ),
  },
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <SortableHeader label="MATIÈRE" column={column} />
    ),
    filterFn: (row, _id, value) => {
      if (!value) {
        return true;
      }
      return row.original.subject?.id === value;
    },
    cell: ({ row }) => (
      <div>{row.original.subject?.longDescription || "N/A"}</div>
    ),
  },
  {
    accessorKey: "discipline",
    header: ({ column }) => (
      <SortableHeader label="DISCIPLINE" column={column} />
    ),
    cell: ({ row }) => (
      <div>{row.original.discipline ? disciplineLabels[row.original.discipline] : "—"}</div>
    ),
  },
  {
    accessorKey: "order",
    header: ({ column }) => (
      <SortableHeader label="ORDRE" column={column} align="left" />
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.original.order ?? "—"}</div>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <SortableHeader label="DATE DE DERNIÈRE MODIFICATION" column={column} align="left" />
    ),
    cell: ({ row }) => (
      <div className="text-center">{formatDateTime(row.original.updatedAt)}</div>
    ),
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const domain = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" className={actionMenuTrigger}>
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className={actionMenuContent}>
            <div className={actionMenuHeader}>Actions</div>
            <DropdownMenuItem className={actionMenuItem}>
              <Link href={`/admin/domains/${domain.id}`}>Voir</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className={actionMenuItem}>
              <Link href={`/admin/domains/${domain.id}/edit`}>Éditer</Link>
            </DropdownMenuItem>
            <ConfirmDeleteDialog
              onConfirm={() => handleOnClickDeleteButton(domain.id)}
              trigger={
                <DropdownMenuItem
                  className={`${actionMenuItem} hover:cursor-pointer`}
                  onSelect={(event) => event.preventDefault()}
                >
                  Supprimer
                </DropdownMenuItem>
              }
            />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
