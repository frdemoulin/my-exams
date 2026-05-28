"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDateTime } from "@/lib/utils";
import { localeStringSort } from "@/lib/table";
import toast from "react-hot-toast";
import { deleteTheme } from "@/core/theme";
import { ThemeData } from "@/core/theme";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import { actionMenuContent, actionMenuHeader, actionMenuItem, actionMenuTrigger } from "@/components/shared/table-action-menu";

const ThemeActions = ({ theme }: { theme: ThemeData }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClickDeleteButton = async () => {
    try {
      await deleteTheme(theme.id, { redirectTo: null, skipSuccessToast: true });
      toast.success("Thème supprimé");
      setMenuOpen(false);
      router.refresh();
    } catch (error) {
      if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
        throw error;
      }
      toast.error("Erreur dans la suppression du thème");
    }
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
          <Link
            href={`/admin/themes/${theme.id}`}
          >
            Voir
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={actionMenuItem}>
          <Link
            href={`/admin/themes/${theme.id}/edit`}
          >
            Éditer
          </Link>
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

const localeSort = localeStringSort<ThemeData>();

const sortLabels = (values: string[]) =>
  [...values].sort((left, right) => left.localeCompare(right, "fr", { sensitivity: "base" }));

const getDomainLabels = (theme: ThemeData) =>
  sortLabels(theme.domains.map((domain) => domain.longDescription));

const getSubjectLabels = (theme: ThemeData) =>
  sortLabels(
    Array.from(
      new Set(
        theme.domains.map(
          (domain) =>
            domain.subject?.shortDescription || domain.subject?.longDescription || ""
        )
      )
    ).filter(Boolean)
  );

const getChapterLabels = (theme: ThemeData) =>
  sortLabels(theme.chapters.map((chapter) => chapter.title));

export const columns: ColumnDef<ThemeData>[] = [
  {
    accessorKey: "title",
    sortingFn: localeSort,
    header: ({ column }) => {
      return (
        <SortableHeader label="TITRE" column={column} />
      )
    },
  },
  {
    id: "domains",
    accessorFn: (row) => getDomainLabels(row).join(", "),
    header: ({ column }) => {
      return (
        <SortableHeader label="DOMAINES" column={column} />
      )
    },
    cell: ({ row }) => {
      return <div>
        {getDomainLabels(row.original).join(", ") || 'N/A'}
      </div>
    },
  },
  {
    id: "subject",
    accessorFn: (row) => getSubjectLabels(row).join(", ") || "N/A",
    sortingFn: localeSort,
    header: ({ column }) => {
      return (
        <SortableHeader label="MATIÈRE" column={column} />
      )
    },
    cell: ({ row }) => {
      return (
        <div>
          {getSubjectLabels(row.original).join(", ") || "N/A"}
        </div>
      )
    },
  },
  {
    id: "chapters",
    accessorFn: (row) => getChapterLabels(row).join(", "),
    sortingFn: localeSort,
    header: ({ column }) => {
      return (
        <SortableHeader label="CHAPITRES" column={column} />
      )
    },
    cell: ({ row }) => {
      return <div>{getChapterLabels(row.original).join(", ") || "N/A"}</div>
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <SortableHeader label="DATE DE DERNIÈRE MODIFICATION" column={column} align="left" />
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
      const theme = row.original;

      return <ThemeActions theme={theme} />
    },
  },
]
