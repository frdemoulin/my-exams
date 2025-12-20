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
import { User } from "@prisma/client";
// import { deleteUser } from "@/actions/user/delete-user";
import { formatDateTime } from "@/lib/utils";
import toast from "react-hot-toast";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import { actionMenuContent, actionMenuItem, actionMenuTrigger } from "@/components/shared/table-action-menu";

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
        <SortableHeader label="NOM D'UTILISATEUR" column={column} />
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <SortableHeader label="EMAIL" column={column} />
      )
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
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" className={actionMenuTrigger}>
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className={actionMenuContent}>
            <DropdownMenuItem className={actionMenuItem}>
              <Link
                href={`/admin/users/${user.id}`}
              >
                Voir
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className={actionMenuItem}>
              <Link
                href={`/admin/users/${user.id}/edit`}
              >
                Éditer
              </Link>
            </DropdownMenuItem>
            <ConfirmDeleteDialog
              onConfirm={() => handleOnClickDeleteButton(user.id)}
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
