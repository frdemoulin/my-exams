"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import type { ChapterListItem } from "@/core/chapter";
import { deleteChapter } from "@/core/chapter";
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

const localeSort = localeStringSort<ChapterListItem>();

function ChapterActions({ chapter }: { chapter: ChapterListItem }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteChapter(chapter.id, { redirectTo: null, skipSuccessToast: true });
      toast.success("Chapitre supprimé");
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
      toast.error("Erreur lors de la suppression du chapitre");
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
          <Link href={`/admin/chapters/${chapter.id}`}>Voir</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={actionMenuItem}>
          <Link href={`/admin/chapters/${chapter.id}/edit`}>Éditer</Link>
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

export const columns: ColumnDef<ChapterListItem>[] = [
  {
    accessorKey: "title",
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="CHAPITRE" column={column} align="left" />,
  },
  {
    id: "subject",
    accessorFn: (row) => row.subject.longDescription,
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="MATIÈRE" column={column} align="left" />,
  },
  {
    accessorKey: "level",
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="NIVEAU" column={column} align="left" />,
  },
  {
    accessorKey: "order",
    header: ({ column, table }) => (
      <SortableHeader label="ORDRE" column={column} resetSorting={() => table.resetSorting()} />
    ),
  },
  {
    accessorKey: "isActive",
    header: ({ column }) => <SortableHeader label="ACTIF" column={column} />,
    cell: ({ row }) => (
      <Badge variant={row.original.isActive ? "default" : "secondary"}>
        {row.original.isActive ? "Oui" : "Non"}
      </Badge>
    ),
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => <SortableHeader label="PUBLIÉ" column={column} />,
    cell: ({ row }) => (
      <Badge variant={row.original.isPublished ? "default" : "outline"}>
        {row.original.isPublished ? "Oui" : "Non"}
      </Badge>
    ),
  },
  {
    id: "quizQuestionsCount",
    accessorFn: (row) => row._count.quizQuestions,
    header: ({ column }) => <SortableHeader label="QCM" column={column} />,
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
    cell: ({ row }) => <ChapterActions chapter={row.original} />,
  },
];