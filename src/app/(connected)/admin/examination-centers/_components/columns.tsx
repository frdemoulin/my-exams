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
import { ExaminationCenter } from "@prisma/client";
import { formatDateTime } from "@/lib/utils";
import toast from "react-hot-toast";
import { deleteExaminationCenter } from "@/actions/examination-center/delete-examination-center";

const handleOnClickDeleteButton = async (id: string) => {
  try {
    await deleteExaminationCenter(id);
    toast.success("Centre d'examen supprimé");
  } catch (error) {
    if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
      throw error;
    }
    toast.error("Erreur dans la suppression du centre d'examen");
  }
}

export const columns: ColumnDef<ExaminationCenter>[] = [
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date de création
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center">{formatDateTime(row.original.createdAt)}</div>
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const examinationCenter = row.original;

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
                href={`/admin/examination-centers/${examinationCenter.id}`}
              >
                Voir
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="hover:cursor-pointer"
                href={`/admin/examination-centers/${examinationCenter.id}/edit`}
              >
                Éditer
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer" onClick={() => handleOnClickDeleteButton(examinationCenter.id)}>
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]