"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Prisma } from "@prisma/client";
import toast from "react-hot-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDateTime } from "@/lib/utils";
import { localeStringSort } from "@/lib/table";
import { deleteExercise } from "@/core/exercise";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import {
  actionMenuContent,
  actionMenuHeader,
  actionMenuItem,
  actionMenuTrigger,
} from "@/components/shared/table-action-menu";
import { Badge } from "@/components/ui/badge";

export type ExerciseListItem = Prisma.ExerciseGetPayload<{
  include: {
    examPaper: {
      select: {
        id: true;
        label: true;
        sessionYear: true;
        teaching: {
          select: {
            longDescription: true;
            shortDescription: true;
            grade: {
              select: {
                shortDescription: true;
              };
            };
            subject: {
              select: {
                shortDescription: true;
              };
            };
          };
        };
      };
    };
  };
}>;

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "destructive" }> = {
  pending: { label: "En attente", variant: "secondary" },
  completed: { label: "Enrichi", variant: "default" },
  failed: { label: "Échec", variant: "destructive" },
};

const localeSort = localeStringSort<ExerciseListItem>();

const ExerciseActions = ({ exercise }: { exercise: ExerciseListItem }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClickDeleteButton = async () => {
    const result = await deleteExercise(exercise.id);
    if (!result.success) {
      toast.error(result.error ?? "Erreur dans la suppression de l'exercice");
      return;
    }
    toast.success("Exercice supprimé");
    setMenuOpen(false);
    router.refresh();
  };

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <button type="button" className={actionMenuTrigger}>
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={actionMenuContent}>
        <div className={actionMenuHeader}>Actions</div>
        <DropdownMenuItem className={actionMenuItem}>
          <Link href={`/admin/exercises/${exercise.id}`}>Voir</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={actionMenuItem}>
          <Link href={`/admin/exercises/${exercise.id}/edit`}>Éditer</Link>
        </DropdownMenuItem>
        <ConfirmDeleteDialog
          onConfirm={handleOnClickDeleteButton}
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
  );
};

export const columns: ColumnDef<ExerciseListItem>[] = [
  {
    id: "exercise",
    accessorFn: (row) => row.label || `Exercice ${row.exerciseNumber}`,
    sortingFn: localeSort,
    header: ({ column }) => (
      <SortableHeader label="EXERCICE" column={column} />
    ),
    cell: ({ row }) => (
      <div className="font-medium text-heading">
        {row.original.label || `Exercice ${row.original.exerciseNumber}`}
      </div>
    ),
  },
  {
    id: "examPaper",
    accessorFn: (row) => row.examPaper.label,
    sortingFn: localeSort,
    header: ({ column }) => (
      <SortableHeader label="SUJET" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-sm text-body">{row.original.examPaper.label}</div>
    ),
  },
  {
    id: "sessionYear",
    accessorFn: (row) => row.examPaper.sessionYear,
    header: ({ column }) => (
      <SortableHeader label="SESSION" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-center text-sm text-body">{row.original.examPaper.sessionYear}</div>
    ),
  },
  {
    id: "teaching",
    accessorFn: (row) =>
      row.examPaper.teaching.shortDescription || row.examPaper.teaching.longDescription,
    sortingFn: localeSort,
    header: ({ column }) => (
      <SortableHeader label="ENSEIGNEMENT" column={column} />
    ),
    cell: ({ row }) => {
      const teaching = row.original.examPaper.teaching;
      const label = teaching.shortDescription || teaching.longDescription;
      const grade = teaching.grade.shortDescription;
      const subject = teaching.subject.shortDescription;
      return (
        <div className="space-y-1">
          <div className="text-sm text-body">{label}</div>
          <div className="text-xs text-muted-foreground">
            {grade} • {subject}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "enrichmentStatus",
    header: ({ column }) => (
      <SortableHeader label="STATUT IA" column={column} />
    ),
    cell: ({ row }) => {
      const status = row.original.enrichmentStatus;
      const metadata = statusLabels[status] ?? {
        label: status,
        variant: "secondary",
      };
      return <Badge variant={metadata.variant}>{metadata.label}</Badge>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <SortableHeader label="DATE DE DERNIÈRE MODIFICATION" column={column} align="left" />
    ),
    cell: ({ row }) => (
      <div className="text-center">{formatDateTime(row.original.updatedAt)}</div>
    ),
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const exercise = row.original;

      return <ExerciseActions exercise={exercise} />;
    },
  },
];
