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
import { deleteExamPaper } from "@/core/exam-paper";
import { ExamPaperWithRelations } from "@/core/exam-paper/exam-paper.queries";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";

const handleOnClickDeleteButton = async (id: string) => {
  try {
    await deleteExamPaper(id);
    toast.success("Sujet d'examen supprimé");
  } catch (error) {
    if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
      throw error;
    }
    toast.error("Erreur dans la suppression du sujet d'examen");
  }
}

export const columns: ColumnDef<ExamPaperWithRelations>[] = [
  {
    accessorKey: "label",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Label
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "sessionYear",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Année
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "teaching.longDescription",
    header: "Enseignement",
  },
  {
    accessorKey: "grade.shortDescription",
    header: "Niveau",
  },
  {
    accessorKey: "diploma.longDescription",
    header: "Diplôme",
  },
  {
    id: "examinationCenters",
    header: "Centres d'examen",
    cell: ({ row }) => {
      const centerIds = row.original.examinationCenterIds || [];
      if (centerIds.length === 0) return <div>-</div>;
      return <div>{centerIds.length} centre(s)</div>;
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
      const examPaper = row.original;

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
                href={`/admin/exam-papers/${examPaper.id}`}
              >
                Voir
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`/admin/exam-papers/${examPaper.id}/edit`}
              >
                Éditer
              </Link>
            </DropdownMenuItem>
            <ConfirmDeleteDialog
              onConfirm={() => handleOnClickDeleteButton(examPaper.id)}
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
