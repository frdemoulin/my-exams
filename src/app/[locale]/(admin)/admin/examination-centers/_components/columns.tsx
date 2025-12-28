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
import { ExaminationCenter } from "@prisma/client";
import { formatDateTime } from "@/lib/utils";
import { localeStringSort } from "@/lib/table";
import toast from "react-hot-toast";
import { deleteExaminationCenter } from "@/core/examination-center";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import { actionMenuContent, actionMenuHeader, actionMenuItem, actionMenuTrigger } from "@/components/shared/table-action-menu";
import { Badge } from "@/components/ui/badge";

const ExaminationCenterActions = ({ examinationCenter }: { examinationCenter: ExaminationCenter }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClickDeleteButton = async () => {
    try {
      await deleteExaminationCenter(examinationCenter.id, { redirectTo: null, skipSuccessToast: true });
      toast.success("Centre d'examen supprimé");
      setMenuOpen(false);
      router.refresh();
    } catch (error) {
      if (error && typeof error === 'object' && 'digest' in error && String(error.digest).startsWith('NEXT_REDIRECT')) {
        throw error;
      }
      toast.error("Erreur dans la suppression du centre d'examen");
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
            href={`/admin/examination-centers/${examinationCenter.id}`}
          >
            Voir
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={actionMenuItem}>
          <Link
            href={`/admin/examination-centers/${examinationCenter.id}/edit`}
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

const localeSort = localeStringSort<ExaminationCenter>();

export const columns: ColumnDef<ExaminationCenter>[] = [
  {
    accessorKey: "description",
    sortingFn: localeSort,
    header: ({ column }) => {
      return (
        <SortableHeader label="DESCRIPTION" column={column} />
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
      const label = row.original.isActive ? "Actif" : "Inactif";
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
      const examinationCenter = row.original;

      return <ExaminationCenterActions examinationCenter={examinationCenter} />
    },
  },
]
