"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import type { Prisma } from "@prisma/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { SortableHeader } from "@/components/shared/sortable-header";
import {
  actionMenuContent,
  actionMenuHeader,
  actionMenuItem,
  actionMenuTrigger,
} from "@/components/shared/table-action-menu";
import { formatDateTime, normalizeExamPaperLabel } from "@/lib/utils";
import { localeStringSort } from "@/lib/table";
import { ReenrichExerciseButton } from "@/components/admin/reenrich-exercise-button";

export type EditorialExerciseListItem = Prisma.ExerciseGetPayload<{
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

const statusLabels: Record<
  string,
  { label: string; variant: "default" | "secondary" | "destructive" }
> = {
  pending: { label: "En attente", variant: "secondary" },
  completed: { label: "Enrichi", variant: "default" },
  failed: { label: "Échec", variant: "destructive" },
};

const qualityIssueLabels: Record<string, string> = {
  summary: "Résumé manquant",
  "summary-short": "Résumé trop court",
  "summary-long": "Résumé trop long",
  themes: "Thèmes manquants",
  duration: "Durée manquante",
  difficulty: "Difficulté manquante",
  statement: "Énoncé manquant",
  "statement-short": "Énoncé trop court",
  keywords: "Mots-clés manquants",
};

const localeSort = localeStringSort<EditorialExerciseListItem>();

const getQualityIssueKeys = (exercise: EditorialExerciseListItem) => {
  const issues: string[] = [];
  const summary = exercise.summary?.trim() ?? "";
  if (!summary) {
    issues.push("summary");
  } else {
    if (summary.length < 120) issues.push("summary-short");
    if (summary.length > 320) issues.push("summary-long");
  }
  if (!exercise.themeIds || exercise.themeIds.length === 0) issues.push("themes");
  if (!exercise.estimatedDuration) issues.push("duration");
  if (!exercise.estimatedDifficulty) issues.push("difficulty");
  const statement = exercise.statement?.trim() ?? "";
  if (!statement) {
    issues.push("statement");
  } else if (statement.length < 200) {
    issues.push("statement-short");
  }
  if (!exercise.keywords || exercise.keywords.length < 3) issues.push("keywords");
  return issues;
};

const normalizeEnrichmentStatus = (status: string) => {
  if (status === "completed" || status === "pending" || status === "failed") {
    return status;
  }
  return "pending";
};

const EditorialExerciseActions = ({ exercise }: { exercise: EditorialExerciseListItem }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const enrichmentStatus = normalizeEnrichmentStatus(exercise.enrichmentStatus);

  return (
    <div className="flex items-center gap-2">
      <ReenrichExerciseButton
        exerciseId={exercise.id}
        exerciseNumber={exercise.exerciseNumber}
        enrichmentStatus={enrichmentStatus}
      />
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const columns: ColumnDef<EditorialExerciseListItem>[] = [
  {
    id: "exercise",
    accessorFn: (row) => row.label || `Exercice ${row.exerciseNumber}`,
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="EXERCICE" column={column} />,
    cell: ({ row }) => (
      <div className="font-medium text-heading">
        {row.original.label || `Exercice ${row.original.exerciseNumber}`}
      </div>
    ),
  },
  {
    id: "examPaper",
    accessorFn: (row) =>
      normalizeExamPaperLabel(row.examPaper.label) ?? row.examPaper.label,
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="SUJET" column={column} />,
    cell: ({ row }) => (
      <div className="text-sm text-body">
        {normalizeExamPaperLabel(row.original.examPaper.label) ??
          row.original.examPaper.label}
      </div>
    ),
  },
  {
    id: "sessionYear",
    accessorFn: (row) => row.examPaper.sessionYear,
    header: ({ column }) => <SortableHeader label="SESSION" column={column} />,
    cell: ({ row }) => (
      <div className="text-center text-sm text-body">{row.original.examPaper.sessionYear}</div>
    ),
  },
  {
    id: "teaching",
    accessorFn: (row) =>
      row.examPaper.teaching.shortDescription || row.examPaper.teaching.longDescription,
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="ENSEIGNEMENT" column={column} />,
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
    header: ({ column }) => <SortableHeader label="STATUT IA" column={column} />,
    cell: ({ row }) => {
      const status = row.original.enrichmentStatus;
      const metadata = statusLabels[status] ?? { label: status, variant: "secondary" };
      return <Badge variant={metadata.variant}>{metadata.label}</Badge>;
    },
  },
  {
    id: "qualityIssues",
    accessorFn: (row) => getQualityIssueKeys(row),
    header: "QUALITÉ",
    enableGlobalFilter: false,
    enableSorting: false,
    filterFn: (row, id, value) => {
      if (!value) return true;
      const issues = row.getValue<string[]>(id) ?? [];
      if (value === "needs-review") {
        return issues.length > 0 || row.original.enrichmentStatus !== "completed";
      }
      return issues.includes(value as string);
    },
    cell: ({ row }) => {
      const issues = getQualityIssueKeys(row.original);
      if (issues.length === 0) {
        return <Badge variant="default">OK</Badge>;
      }
      return (
        <div className="flex flex-wrap gap-2">
          {issues.map((issue) => (
            <Badge key={issue} variant="secondary">
              {qualityIssueLabels[issue] ?? issue}
            </Badge>
          ))}
        </div>
      );
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
    cell: ({ row }) => <EditorialExerciseActions exercise={row.original} />,
  },
];
