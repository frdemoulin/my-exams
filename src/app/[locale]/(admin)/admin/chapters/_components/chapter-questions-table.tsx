"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { deleteQuizQuestion, type ChapterDetail } from "@/core/chapter";
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
import { formatDateTime } from "@/lib/utils";

interface ChapterQuestionsTableProps {
  chapterId: string;
  questions: ChapterDetail["quizQuestions"];
  addHref: string;
}

const difficultyLabels: Record<string, string> = {
  EASY: "Facile",
  MEDIUM: "Moyen",
  HARD: "Difficile",
};

function toExcerpt(value: string) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= 140) return normalized;
  return `${normalized.slice(0, 137)}...`;
}

export function ChapterQuestionsTable({
  chapterId,
  questions,
  addHref,
}: ChapterQuestionsTableProps) {
  const router = useRouter();
  const [rows, setRows] = useState(questions);
  const sortedRows = useMemo(() => [...rows].sort((a, b) => a.order - b.order), [rows]);

  const handleDelete = async (questionId: string) => {
    try {
      await deleteQuizQuestion(questionId, {
        redirectTo: null,
        skipSuccessToast: true,
        revalidatePaths: [`/admin/chapters/${chapterId}`],
      });
      setRows((current) => current.filter((question) => question.id !== questionId));
      toast.success("Question supprimée");
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
      toast.error("Erreur lors de la suppression de la question");
    }
  };

  if (sortedRows.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Questions</h2>
            <p className="text-sm text-muted-foreground">
              Ajoute des QCM directement rattachés à ce chapitre.
            </p>
          </div>
          <Button asChild>
            <Link href={addHref}>Ajouter une question</Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          Aucune question n&apos;est encore enregistrée pour ce chapitre.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Questions</h2>
          <p className="text-sm text-muted-foreground">
            Gère les QCM de ce chapitre sans quitter sa fiche.
          </p>
        </div>
        <Button asChild>
          <Link href={addHref}>Ajouter une question</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ordre</TableHead>
            <TableHead>Difficulté</TableHead>
            <TableHead>Question</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Dernière modification</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRows.map((question) => (
            <TableRow key={question.id}>
              <TableCell>{question.order}</TableCell>
              <TableCell>
                <Badge variant="outline">{difficultyLabels[question.difficulty] ?? question.difficulty}</Badge>
              </TableCell>
              <TableCell className="max-w-xl">{toExcerpt(question.question)}</TableCell>
              <TableCell>
                <Badge variant={question.isPublished ? "default" : "secondary"}>
                  {question.isPublished ? "Publiée" : "Brouillon"}
                </Badge>
              </TableCell>
              <TableCell>{formatDateTime(question.updatedAt)}</TableCell>
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
                      <Link href={`/admin/chapters/${chapterId}/questions/${question.id}/edit`}>
                        Éditer
                      </Link>
                    </DropdownMenuItem>
                    <ConfirmDeleteDialog
                      onConfirm={() => handleDelete(question.id)}
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