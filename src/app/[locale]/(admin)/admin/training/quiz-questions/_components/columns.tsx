"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import type { QuizQuestionListItem } from "@/core/chapter";
import { deleteQuizQuestion } from "@/core/chapter";
import { Badge } from "@/components/ui/badge";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDateTime } from "@/lib/utils";
import { localeStringSort } from "@/lib/table";
import { SortableHeader } from "@/components/shared/sortable-header";
import {
  actionMenuContent,
  actionMenuHeader,
  actionMenuItem,
  actionMenuTrigger,
} from "@/components/shared/table-action-menu";

const localeSort = localeStringSort<QuizQuestionListItem>();

const difficultyLabels: Record<string, string> = {
  EASY: "Facile",
  MEDIUM: "Moyen",
  HARD: "Difficile",
};

function toExcerpt(value: string) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= 110) return normalized;
  return `${normalized.slice(0, 107)}...`;
}

function QuizQuestionActions({ question }: { question: QuizQuestionListItem }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteQuizQuestion(question.id, {
        redirectTo: null,
        skipSuccessToast: true,
        revalidatePaths: ["/admin/training/qcms", "/admin/training/quiz-questions"],
      });
      toast.success("Question supprimée");
      setMenuOpen(false);
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

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <button type="button" className={actionMenuTrigger}>
          <span className="sr-only">Ouvrir le menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={actionMenuContent}>
        <div className={actionMenuHeader}>Actions</div>
        <DropdownMenuItem className={actionMenuItem}>
          <Link href={`/admin/training/quiz-questions/${question.id}/edit`}>Éditer</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={actionMenuItem}>
          <Link href={`/admin/training/qcms/${question.chapterId}/edit`}>Voir le QCM</Link>
        </DropdownMenuItem>
        <ConfirmDeleteDialog
          onConfirm={handleDelete}
          trigger={
            <DropdownMenuItem className={actionMenuItem} onSelect={(event) => event.preventDefault()}>
              Supprimer
            </DropdownMenuItem>
          }
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const columns: ColumnDef<QuizQuestionListItem>[] = [
  {
    accessorKey: "question",
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="QUESTION" column={column} align="left" />,
    cell: ({ row }) => <span className="block max-w-xl">{toExcerpt(row.original.question)}</span>,
  },
  {
    id: "chapter",
    accessorFn: (row) => row.chapter.title,
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="QCM" column={column} align="left" />,
    cell: ({ row }) => (
      <Link
        href={`/admin/training/quiz-questions?chapterId=${row.original.chapterId}`}
        className="text-sm text-fg-brand hover:underline"
      >
        {row.original.chapter.title}
      </Link>
    ),
  },
  {
    id: "subject",
    accessorFn: (row) => row.chapter.subject.longDescription,
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="MATIÈRE" column={column} align="left" />,
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => <SortableHeader label="DIFFICULTÉ" column={column} align="left" />,
    cell: ({ row }) => <Badge variant="outline">{difficultyLabels[row.original.difficulty] ?? row.original.difficulty}</Badge>,
  },
  {
    accessorKey: "order",
    header: ({ column }) => <SortableHeader label="ORDRE" column={column} />,
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => <SortableHeader label="PUBLIÉE" column={column} />,
    cell: ({ row }) => (
      <Badge variant={row.original.isPublished ? "default" : "outline"}>
        {row.original.isPublished ? "Oui" : "Non"}
      </Badge>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <SortableHeader label="DERNIÈRE MODIFICATION" column={column} align="left" />
    ),
    cell: ({ row }) => formatDateTime(row.original.updatedAt),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <QuizQuestionActions question={row.original} />,
  },
];