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
import { formatDateTime } from "@/lib/utils";
import toast from "react-hot-toast";
import { deleteTeaching } from "@/core/teaching";
import { TeachingWithRelations } from "@/core/teaching";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";

const handleOnClickDeleteButton = async (id: string) => {
  try {
    await deleteTeaching(id);
    toast.success("Enseignement supprimé");
  } catch (error) {
    if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
      throw error;
    }
    toast.error("Erreur dans la suppression de l'enseignement");
  }
}

export const columns: ColumnDef<TeachingWithRelations>[] = [
  {
    accessorKey: "longDescription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom de l'enseignement
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "shortDescription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom court
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "grade.shortDescription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Niveau
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "subject.shortDescription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Matière
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date de dernière modification
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
      const teaching = row.original;

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
              <Link href={`/admin/teachings/${teaching.id}`}>
                Voir
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`/admin/teachings/${teaching.id}/edit`}
              >
                Éditer
              </Link>
            </DropdownMenuItem>
            <ConfirmDeleteDialog
              onConfirm={() => handleOnClickDeleteButton(teaching.id)}
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
