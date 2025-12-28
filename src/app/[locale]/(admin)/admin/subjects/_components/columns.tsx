"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Subject } from "@prisma/client";
import { formatDateTime } from "@/lib/utils";
import { localeStringSort } from "@/lib/table";
import toast from "react-hot-toast";
import { deleteSubject } from "@/core/subject";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import { actionMenuContent, actionMenuHeader, actionMenuItem, actionMenuTrigger } from "@/components/shared/table-action-menu";
import { Badge } from "@/components/ui/badge";

const SubjectActions = ({ subject }: { subject: Subject }) => {
  const router = useRouter();

  const handleOnClickDeleteButton = async () => {
    try {
      await deleteSubject(subject.id, { redirectTo: null, skipSuccessToast: true });
      toast.success("Matière supprimée");
      router.refresh();
    } catch (error) {
      if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
        throw error;
      }
      toast.error("Erreur dans la suppression de la matière");
    }
  };

  return (
    <DropdownMenu>
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
            href={`/admin/subjects/${subject.id}`}
          >
            Voir
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={actionMenuItem}>
          <Link
            href={`/admin/subjects/${subject.id}/edit`}
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

const localeSort = localeStringSort<Subject>();

export const columns: ColumnDef<Subject>[] = [
  {
    accessorKey: "longDescription",
    sortingFn: localeSort,
    header: ({ column }) => {
      return (
        <SortableHeader label="DESCRIPTION LONGUE" column={column} />
      )
    },
  },
  {
    accessorKey: "shortDescription",
    sortingFn: localeSort,
    header: ({ column }) => {
      return (
        <SortableHeader label="DESCRIPTION COURTE" column={column} />
      )
    },
  },
  {
    accessorKey: "isActive",
    header: ({ column, table }) => {
      return (
        <SortableHeader
          label="STATUT"
          column={column}
          resetSorting={() => table.resetSorting()}
        />
      )
    },
    cell: ({ row }) => {
      const label = row.original.isActive ? "Active" : "Inactive";
      return (
        <Badge variant={row.original.isActive ? "default" : "secondary"}>
          {label}
        </Badge>
      );
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
      const subject = row.original;

      return <SubjectActions subject={subject} />
    },
  },
]
