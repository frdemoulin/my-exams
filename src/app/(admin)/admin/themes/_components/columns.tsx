"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Theme } from "@prisma/client";
import { formatDateTime } from "@/lib/utils";
import toast from "react-hot-toast";
import { deleteTheme } from "@/core/theme";
import { ThemeData } from "@/core/theme";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";

const cycleSorting = (column: any) => {
  const state = column.getIsSorted();
  if (state === "asc") column.toggleSorting(true);
  else if (state === "desc") column.clearSorting();
  else column.toggleSorting(false);
};
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
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200"
          onClick={() => cycleSorting(column)}
        >
          DESCRIPTION COURTE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "longDescription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200"
          onClick={() => cycleSorting(column)}
        >
          DESCRIPTION LONGUE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "chapter",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200"
          onClick={() => cycleSorting(column)}
        >
          CHAPITRE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
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
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200 text-left"
          onClick={() => cycleSorting(column)}
        >
          DATE DE DERNIÈRE MODIFICATION
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
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
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link
                href={`/admin/themes/${theme.id}`}
              >
                Voir
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
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
                  className="hover:cursor-pointer"
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
