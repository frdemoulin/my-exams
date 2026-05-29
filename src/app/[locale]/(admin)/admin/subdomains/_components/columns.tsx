"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDateTime } from "@/lib/utils";
import { localeStringSort } from "@/lib/table";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import {
  actionMenuContent,
  actionMenuHeader,
  actionMenuItem,
  actionMenuTrigger,
} from "@/components/shared/table-action-menu";
import { Badge } from "@/components/ui/badge";

import { deleteSubdomain, SubdomainData } from "@/core/subdomain";

const SubdomainActions = ({ subdomain }: { subdomain: SubdomainData }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClickDeleteButton = async () => {
    try {
      await deleteSubdomain(subdomain.id, { redirectTo: null, skipSuccessToast: true });
      toast.success("Sous-domaine supprimé");
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
      toast.error("Erreur dans la suppression du sous-domaine");
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
          <Link href={`/admin/subdomains/${subdomain.id}`}>Voir</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={actionMenuItem}>
          <Link href={`/admin/subdomains/${subdomain.id}/edit`}>Éditer</Link>
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

const localeSort = localeStringSort<SubdomainData>();
const statusSort = (rowA: { original: SubdomainData }, rowB: { original: SubdomainData }) => {
  const a = rowA.original.isActive ? 1 : 0;
  const b = rowB.original.isActive ? 1 : 0;
  return a - b;
};

export const columns: ColumnDef<SubdomainData>[] = [
  {
    accessorKey: "title",
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="TITRE" column={column} />,
  },
  {
    accessorKey: "slug",
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="SLUG" column={column} />,
  },
  {
    id: "subject",
    accessorFn: (row) => row.subject?.longDescription ?? "",
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="MATIÈRE" column={column} />,
    filterFn: (row, _id, value) => {
      if (!value) return true;
      return row.original.subject?.id === value;
    },
    cell: ({ row }) => <div>{row.original.subject?.longDescription || "N/A"}</div>,
  },
  {
    id: "domain",
    accessorFn: (row) => row.domain?.longDescription ?? "",
    sortingFn: localeSort,
    header: ({ column }) => <SortableHeader label="DOMAINE" column={column} />,
    filterFn: (row, _id, value) => {
      if (!value) return true;
      return row.original.domain?.id === value;
    },
    cell: ({ row }) => <div>{row.original.domain?.longDescription || "N/A"}</div>,
  },
  {
    accessorKey: "_count.themes",
    header: ({ column }) => (
      <SortableHeader label="NB DE THÈMES" column={column} align="left" />
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.original._count?.themes ?? 0}</div>
    ),
  },
  {
    accessorKey: "order",
    header: ({ column }) => <SortableHeader label="ORDRE" column={column} align="left" />,
    cell: ({ row }) => <div className="text-center">{row.original.order ?? "—"}</div>,
  },
  {
    accessorKey: "isActive",
    sortingFn: statusSort,
    header: ({ column, table }) => (
      <SortableHeader
        label="STATUT"
        column={column}
        resetSorting={() => table.resetSorting()}
      />
    ),
    cell: ({ row }) => (
      <Badge variant={row.original.isActive ? "default" : "secondary"}>
        {row.original.isActive ? "Actif" : "Inactif"}
      </Badge>
    ),
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
    cell: ({ row }) => <SubdomainActions subdomain={row.original} />,
  },
];
