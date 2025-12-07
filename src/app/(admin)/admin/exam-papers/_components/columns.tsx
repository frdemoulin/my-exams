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
import { deleteExamPaper } from "@/core/exam-paper";
import { ExamPaperWithRelations } from "@/core/exam-paper/exam-paper.queries";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import { actionMenuContent, actionMenuItem, actionMenuTrigger } from "@/components/shared/table-action-menu";

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
      return <SortableHeader label="LABEL" column={column} />
    },
  },
  {
    accessorKey: "sessionYear",
    header: ({ column }) => {
      return <SortableHeader label="ANNÉE" column={column} />
    },
  },
  {
    accessorKey: "teaching.longDescription",
    header: () => (
      <span className="text-xs font-semibold uppercase tracking-wide text-heading">
        ENSEIGNEMENT
      </span>
    ),
  },
  {
    accessorKey: "grade.shortDescription",
    header: () => (
      <span className="text-xs font-semibold uppercase tracking-wide text-heading">
        NIVEAU
      </span>
    ),
  },
  {
    accessorKey: "diploma.longDescription",
    header: () => (
      <span className="text-xs font-semibold uppercase tracking-wide text-heading">
        DIPLÔME
      </span>
    ),
  },
  {
    id: "exercises",
    accessorFn: (row) => row._count?.exercises ?? 0,
    header: ({ column }) => {
      return <SortableHeader label="EXERCICES" column={column} />
    },
    cell: ({ row }) => {
      const exerciseCount = row.original._count?.exercises ?? 0;
      if (exerciseCount === 0) return <div className="text-muted-foreground text-center">-</div>;
      return <div className="text-center">{exerciseCount}</div>;
    },
    filterFn: (row, id, value) => {
      const exerciseCount = row.original._count?.exercises ?? 0;
      // value peut être: "0" (sans exercices), "1+" (avec exercices), ou undefined (pas de filtre)
      if (!value) return true;
      if (value === "0") return exerciseCount === 0;
      if (value === "1+") return exerciseCount > 0;
      return true;
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return <SortableHeader label="DATE DE DERNIÈRE MODIFICATION" column={column} align="left" />
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
            <button type="button" className={actionMenuTrigger}>
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className={actionMenuContent}>
            <DropdownMenuItem className={actionMenuItem}>
              <Link
                href={`/admin/exam-papers/${examPaper.id}`}
              >
                Voir
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className={actionMenuItem}>
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
