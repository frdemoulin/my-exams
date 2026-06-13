"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { deleteChapterAssignment, type ChapterDetail } from "@/core/chapter";
import {
  chapterAssignmentContextTypeLabels,
  contentVerticalLabels,
} from "@/core/chapter/chapter.constants";
import { healthCourseUnitCoverageStatusLabels } from "@/core/health/health.schemas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  actionMenuContent,
  actionMenuHeader,
  actionMenuItem,
  actionMenuTrigger,
} from "@/components/shared/table-action-menu";
import { DataTableExportButton } from "@/components/shared/data-table-export-button";
import { formatDateTime } from "@/lib/utils";
import { XlsxExportColumn } from "@/lib/xlsx-export";

interface ChapterAssignmentsTableProps {
  chapterId: string;
  assignments: ChapterDetail["assignments"];
  addHref: string;
}

export function ChapterAssignmentsTable({
  chapterId,
  assignments,
  addHref,
}: ChapterAssignmentsTableProps) {
  const router = useRouter();
  const [rows, setRows] = useState(assignments);
  const sortedRows = useMemo(
    () => [...rows].sort((left, right) => left.order - right.order),
    [rows]
  );

  const exportColumns: XlsxExportColumn<(typeof sortedRows)[number]>[] = [
    {
      header: "Verticale",
      value: (assignment) => contentVerticalLabels[assignment.vertical] ?? assignment.vertical,
      width: 18,
    },
    {
      header: "Type de contexte",
      value: (assignment) =>
        chapterAssignmentContextTypeLabels[assignment.contextType] ?? assignment.contextType,
      width: 22,
    },
    {
      header: "Contexte",
      value: (assignment) => assignment.contextLabel,
      width: 60,
    },
    {
      header: "Ordre",
      value: (assignment) => assignment.order,
      width: 12,
    },
    {
      header: "Couverture",
      value: (assignment) =>
        healthCourseUnitCoverageStatusLabels[assignment.coverageStatus] ??
        assignment.coverageStatus,
      width: 20,
    },
    {
      header: "Dernière modification",
      value: (assignment) => formatDateTime(assignment.updatedAt),
      width: 28,
    },
  ];

  const handleDelete = async (assignmentId: string) => {
    try {
      await deleteChapterAssignment(assignmentId, {
        redirectTo: null,
        skipSuccessToast: true,
        revalidatePaths: [`/admin/chapters/${chapterId}`],
      });
      setRows((current) => current.filter((assignment) => assignment.id !== assignmentId));
      toast.success("Rattachement supprimé");
      router.refresh();
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "digest" in error &&
        String(error.digest).startsWith("NEXT_REDIRECT")
      ) {
        throw error;
      }
      toast.error("Erreur lors de la suppression du rattachement");
    }
  };

  if (sortedRows.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Rattachements</h2>
            <p className="text-sm text-muted-foreground">
              Rattache ce chapitre à un contexte pédagogique précis.
            </p>
          </div>
          <Button asChild>
            <Link href={addHref}>Ajouter un rattachement</Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          Aucun rattachement n&apos;est encore enregistré pour ce chapitre.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Rattachements</h2>
          <p className="text-sm text-muted-foreground">
            Gère la disponibilité du chapitre selon les contextes pédagogiques.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <DataTableExportButton
            columns={exportColumns}
            filename="rattachements"
            rows={sortedRows}
            sheetName="Rattachements"
          />
          <Button asChild>
            <Link href={addHref}>Ajouter un rattachement</Link>
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Verticale</TableHead>
            <TableHead>Contexte</TableHead>
            <TableHead>Ordre</TableHead>
            <TableHead>Couverture</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Dernière modification</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRows.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell>
                <Badge variant="outline">
                  {contentVerticalLabels[assignment.vertical] ?? assignment.vertical}
                </Badge>
              </TableCell>
              <TableCell className="max-w-2xl">
                <div className="space-y-1">
                  <div className="font-medium">{assignment.contextLabel}</div>
                  <div className="text-xs text-muted-foreground">
                    {chapterAssignmentContextTypeLabels[assignment.contextType] ??
                      assignment.contextType}
                  </div>
                </div>
              </TableCell>
              <TableCell>{assignment.order}</TableCell>
              <TableCell>
                <Badge variant="outline">
                  {healthCourseUnitCoverageStatusLabels[assignment.coverageStatus] ??
                    assignment.coverageStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  <Badge variant={assignment.isActive ? "default" : "secondary"}>
                    {assignment.isActive ? "Actif" : "Inactif"}
                  </Badge>
                  <Badge variant={assignment.isPublished ? "default" : "outline"}>
                    {assignment.isPublished ? "Publié" : "Brouillon"}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>{formatDateTime(assignment.updatedAt)}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className={actionMenuTrigger}>
                      <span className="sr-only">Ouvrir le menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className={actionMenuContent}>
                    <div className={actionMenuHeader}>Actions</div>
                    <DropdownMenuItem className={actionMenuItem}>
                      <Link href={`/admin/chapters/${chapterId}/assignments/${assignment.id}/edit`}>
                        Éditer
                      </Link>
                    </DropdownMenuItem>
                    <ConfirmDeleteDialog
                      onConfirm={() => handleDelete(assignment.id)}
                      trigger={
                        <DropdownMenuItem
                          className={actionMenuItem}
                          onSelect={(event) => event.preventDefault()}
                        >
                          Supprimer
                        </DropdownMenuItem>
                      }
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
