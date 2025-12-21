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
import { deleteTheme } from "@/core/theme";
import { ThemeData } from "@/core/theme";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import { actionMenuContent, actionMenuHeader, actionMenuItem, actionMenuTrigger } from "@/components/shared/table-action-menu";
const handleOnClickDeleteButton = async (id: string) => {
  try {
    await deleteTheme(id);
    toast.success("Thème supprimé");
  } catch (error) {
    if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
      throw error;
    }
    toast.error("Erreur dans la suppression du thème");
  }
}

export const columns: ColumnDef<ThemeData>[] = [
  {
    accessorKey: "shortDescription",
    header: ({ column }) => {
      return (
        <SortableHeader label="DESCRIPTION COURTE" column={column} />
      )
    },
  },
  {
    accessorKey: "longDescription",
    header: ({ column }) => {
      return (
        <SortableHeader label="DESCRIPTION LONGUE" column={column} />
      )
    },
  },
  {
    accessorKey: "chapter",
    header: ({ column }) => {
      return (
        <SortableHeader label="CHAPITRE" column={column} />
      )
    },
    cell: ({ row }) => {
      return <div>
        {row.original.chapter?.longDescription || 'N/A'}
      </div>
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
      const theme = row.original;

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
                href={`/admin/themes/${theme.id}`}
              >
                Voir
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className={actionMenuItem}>
              <Link
                href={`/admin/themes/${theme.id}/edit`}
              >
                Éditer
              </Link>
            </DropdownMenuItem>
            <ConfirmDeleteDialog
              onConfirm={() => handleOnClickDeleteButton(theme.id)}
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
