"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ArrowUp, ArrowDown, MoreHorizontal } from "lucide-react";

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
      const isSorted = column.getIsSorted();
      const handleCycleSort = () => {
        if (isSorted === "asc") {
          column.toggleSorting(true);
        } else if (isSorted === "desc") {
          column.clearSorting();
        } else {
          column.toggleSorting(false);
        }
      };
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200"
          onClick={handleCycleSort}
        >
          LABEL
          {isSorted === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : isSorted === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
  },
  {
    accessorKey: "sessionYear",
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      const handleCycleSort = () => {
        if (isSorted === "asc") {
          column.toggleSorting(true);
        } else if (isSorted === "desc") {
          column.clearSorting();
        } else {
          column.toggleSorting(false);
        }
      };
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200"
          onClick={handleCycleSort}
        >
          ANNÉE
          {isSorted === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : isSorted === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
  },
  {
    accessorKey: "teaching.longDescription",
    header: "ENSEIGNEMENT",
  },
  {
    accessorKey: "grade.shortDescription",
    header: "NIVEAU",
  },
  {
    accessorKey: "diploma.longDescription",
    header: "DIPLÔME",
  },
  {
    id: "exercises",
    accessorFn: (row) => row._count?.exercises ?? 0,
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      const handleCycleSort = () => {
        if (isSorted === "asc") {
          column.toggleSorting(true);
        } else if (isSorted === "desc") {
          column.clearSorting();
        } else {
          column.toggleSorting(false);
        }
      };
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200"
          onClick={handleCycleSort}
        >
          EXERCICES
          {isSorted === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : isSorted === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
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
      const isSorted = column.getIsSorted();
      const handleCycleSort = () => {
        if (isSorted === "asc") {
          column.toggleSorting(true);
        } else if (isSorted === "desc") {
          column.clearSorting();
        } else {
          column.toggleSorting(false);
        }
      };
      return (
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200 text-left"
          onClick={handleCycleSort}
        >
          DATE DE DERNIÈRE MODIFICATION
          {isSorted === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : isSorted === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
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
