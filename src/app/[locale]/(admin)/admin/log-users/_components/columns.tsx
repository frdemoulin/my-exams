"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import type { Prisma } from "@prisma/client";

import { Badge } from "@/components/ui/badge";
import { SortableHeader } from "@/components/shared/sortable-header";
import { formatDateTime } from "@/lib/utils";
import { localeStringSort } from "@/lib/table";

export type AuthLogListItem = Prisma.AuthLogGetPayload<{
  include: {
    user: {
      select: {
        id: true;
        name: true;
        email: true;
      };
    };
  };
}>;

const actionLabels: Record<
  string,
  { label: string; variant: "default" | "secondary" }
> = {
  SIGN_IN: { label: "Connexion", variant: "default" },
  SIGN_OUT: { label: "Déconnexion", variant: "secondary" },
};

const localeSort = localeStringSort<AuthLogListItem>();

export const columns: ColumnDef<AuthLogListItem>[] = [
  {
    id: "user",
    accessorFn: (row) => row.user.email || row.user.name || row.user.id,
    sortingFn: localeSort,
    header: ({ column }) => (
      <SortableHeader label="UTILISATEUR" column={column} />
    ),
    cell: ({ row }) => {
      const user = row.original.user;
      const primary = user.name || user.email || "Utilisateur";
      const secondary = user.name && user.email ? user.email : null;
      return (
        <div className="space-y-1">
          <Link href={`/admin/users/${user.id}`} className="text-sm text-fg-brand hover:underline">
            {primary}
          </Link>
          {secondary ? (
            <div className="text-xs text-muted-foreground">{secondary}</div>
          ) : null}
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <SortableHeader label="ACTION" column={column} />
    ),
    filterFn: (row, id, value) => row.getValue(id) === value,
    cell: ({ row }) => {
      const metadata = actionLabels[row.original.action] ?? {
        label: row.original.action,
        variant: "secondary",
      };
      return <Badge variant={metadata.variant}>{metadata.label}</Badge>;
    },
  },
  {
    accessorKey: "provider",
    header: ({ column }) => (
      <SortableHeader label="PROVIDER" column={column} />
    ),
    cell: ({ row }) => (
      <div className="text-sm text-body">{row.original.provider || "—"}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <SortableHeader label="DATE" column={column} align="left" />
    ),
    cell: ({ row }) => (
      <div className="text-center">{formatDateTime(row.original.createdAt)}</div>
    ),
  },
];
