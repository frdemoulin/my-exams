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
import { Subject } from "@prisma/client";
import { formatDateTime } from "@/lib/utils";
import toast from "react-hot-toast";
import { deleteSubject } from "@/core/subject";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortIcon } from "@/components/shared/sort-icon";

const cycleSorting = (column: any) => {
  const state = column.getIsSorted();
  if (state === "asc") column.toggleSorting(true);
  else if (state === "desc") column.clearSorting();
  else column.toggleSorting(false);
};

const handleOnClickDeleteButton = async (id: string) => {
  try {
    await deleteSubject(id);
    toast.success("Matière supprimée");
  } catch (error) {
    if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
      throw error;
    }
    toast.error("Erreur dans la suppression de la matière");
  }
}

export const columns: ColumnDef<Subject>[] = [
  {
    accessorKey: "shortDescription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-heading dark:text-heading hover:bg-transparent hover:text-heading dark:hover:bg-transparent dark:hover:text-heading focus-visible:ring-2 focus-visible:ring-neutral-tertiary"
          onClick={() => cycleSorting(column)}
        >
          DESCRIPTION COURTE
          <SortIcon direction={column.getIsSorted()} />
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
          className="text-xs font-semibold uppercase tracking-wide text-heading hover:bg-transparent hover:text-heading dark:hover:bg-transparent dark:hover:text-heading focus-visible:ring-2 focus-visible:ring-neutral-tertiary"
          onClick={() => cycleSorting(column)}
        >
          DESCRIPTION LONGUE
          <SortIcon direction={column.getIsSorted()} />
        </Button>
      )
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-heading hover:bg-transparent hover:text-heading dark:hover:bg-transparent dark:hover:text-heading focus-visible:ring-2 focus-visible:ring-neutral-tertiary text-left"
          onClick={() => cycleSorting(column)}
        >
          DATE DE DERNIÈRE MODIFICATION
          <SortIcon direction={column.getIsSorted()} />
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
      const subject = row.original;

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
                href={`/admin/subjects/${subject.id}`}
              >
                Voir
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`/admin/subjects/${subject.id}/edit`}
              >
                Éditer
              </Link>
            </DropdownMenuItem>
            <ConfirmDeleteDialog
              onConfirm={() => handleOnClickDeleteButton(subject.id)}
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
