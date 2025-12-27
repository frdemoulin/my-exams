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
import { Diploma } from "@prisma/client";
import { formatDateTime } from "@/lib/utils";
import toast from "react-hot-toast";
import { deleteDiploma } from "@/core/diploma";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import { actionMenuContent, actionMenuHeader, actionMenuItem, actionMenuTrigger } from "@/components/shared/table-action-menu";
import { localeStringSort } from "@/lib/table";
import { Badge } from "@/components/ui/badge";

const handleOnClickDeleteButton = async (id: string) => {
  try {
    await deleteDiploma(id);
    toast.success("Diplôme supprimé");
  } catch (error) {
    if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
      throw error;
    }
    toast.error("Erreur dans la suppression du diplôme");
  }
}

const localeSort = localeStringSort<Diploma>();

export const columns: ColumnDef<Diploma>[] = [
  {
    accessorKey: "longDescription",
    sortingFn: localeSort,
    header: ({ column }) => {
      return (
        <SortableHeader label="DESCRIPTION LONGUE" column={column} />
      )
    },
  },
  {
    accessorKey: "shortDescription",
    sortingFn: localeSort,
    header: ({ column }) => {
      return (
        <SortableHeader label="DESCRIPTION COURTE" column={column} />
      )
    },
  },
  {
    accessorKey: "isActive",
    header: "STATUT",
    cell: ({ row }) => {
      const label = row.original.isActive ? "Actif" : "Inactif";
      return (
        <Badge variant={row.original.isActive ? "default" : "secondary"}>
          {label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <SortableHeader label="DATE DE DERNIÈRE MODIFICATION" column={column} align="left" />
      )
    },
    cell: ({ row }) => {
      return <div className="text-center">{formatDateTime(row.original.updatedAt)}</div>
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const diploma = row.original;

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
                  <Link
                    href={`/admin/diplomas/${diploma.id}`}
                  >
                    Voir
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className={actionMenuItem}>
                  <Link
                    href={`/admin/diplomas/${diploma.id}/edit`}
                  >
                    Éditer
                  </Link>
                </DropdownMenuItem>
                <ConfirmDeleteDialog
                  onConfirm={() => handleOnClickDeleteButton(diploma.id)}
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
      )
    },
  },
]
