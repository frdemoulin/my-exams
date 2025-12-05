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
import { User } from "@prisma/client";
// import { deleteUser } from "@/actions/user/delete-user";
import { formatDateTime } from "@/lib/utils";
import toast from "react-hot-toast";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";

const cycleSorting = (column: any) => {
  const state = column.getIsSorted();
  if (state === "asc") column.toggleSorting(true);
  else if (state === "desc") column.clearSorting();
  else column.toggleSorting(false);
};

const handleOnClickDeleteButton = async (id: string) => {
  // try {
  //   await deleteUser(id);
  //   toast.success("Utilisateur supprimé");
  // } catch (error) {
  //   toast.error("Erreur dans la suppression de l'utilisateur");
  // }
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200"
          onClick={() => cycleSorting(column)}
        >
          NOM D&apos;UTILISATEUR
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200"
          onClick={() => cycleSorting(column)}
        >
          EMAIL
          <ArrowUpDown className="ml-2 h-4 w-4" />
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
      const user = row.original;

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
                href={`/users/${user.id}`}
              >
                Voir
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`/users/${user.id}/edit`}
              >
                Éditer
              </Link>
            </DropdownMenuItem>
            <ConfirmDeleteDialog
              onConfirm={() => handleOnClickDeleteButton(user.id)}
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
