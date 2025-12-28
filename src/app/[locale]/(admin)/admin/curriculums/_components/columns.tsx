"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { deleteCurriculum } from "@/core/curriculum";
import toast from "react-hot-toast";
import type { CurriculumWithTeachingCount } from "@/core/curriculum";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import { SortableHeader } from "@/components/shared/sortable-header";
import { actionMenuContent, actionMenuHeader, actionMenuItem, actionMenuTrigger } from "@/components/shared/table-action-menu";
import { localeStringSort } from "@/lib/table";

const localeSort = localeStringSort<CurriculumWithTeachingCount>();

const CurriculumActions = ({ curriculum }: { curriculum: CurriculumWithTeachingCount }) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            await deleteCurriculum(curriculum.id, { skipSuccessToast: true });
            toast.success("Programme supprimé avec succès");
            router.refresh();
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "NEXT_REDIRECT") {
                    throw error;
                }
                toast.error(error.message);
            } else {
                toast.error("Une erreur est survenue");
            }
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button type="button" className={actionMenuTrigger}>
                    <span className="sr-only">Ouvrir le menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={actionMenuContent}>
                <div className={actionMenuHeader}>Actions</div>
                <DropdownMenuItem asChild className={actionMenuItem}>
                    <Link href={`/admin/curriculums/${curriculum.id}`}>
                        Voir
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={actionMenuItem}>
                    <Link href={`/admin/curriculums/${curriculum.id}/edit`}>
                        Éditer
                    </Link>
                </DropdownMenuItem>
                <ConfirmDeleteDialog
                    onConfirm={handleDelete}
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

export const columns: ColumnDef<CurriculumWithTeachingCount>[] = [
    {
        accessorKey: "longDescription",
        sortingFn: localeSort,
        header: ({ column }) => (
            <SortableHeader label="NOM" column={column} />
        ),
    },
    {
        accessorKey: "startDate",
        header: ({ column }) => (
            <SortableHeader label="DATE DE DÉBUT" column={column} />
        ),
        cell: ({ row }) => {
            const startDate = row.original.startDate;
            return new Date(startDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
        },
    },
    {
        accessorKey: "endDate",
        header: ({ column }) => (
            <SortableHeader label="FIN" column={column} />
        ),
        cell: ({ row }) => {
            const endDate = row.original.endDate;
            if (!endDate) return "—";
            return new Date(endDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
        },
    },
    {
        accessorKey: "isActive",
        header: ({ column }) => (
            <SortableHeader label="STATUT" column={column} />
        ),
        cell: ({ row }) => {
            const isActive = row.original.isActive;
            return (
                <Badge variant={isActive ? "default" : "secondary"}>
                    {isActive ? "Actif" : "Inactif"}
                </Badge>
            );
        },
    },
    {
        id: "courseCount",
        header: ({ column }) => (
            <SortableHeader label="ENSEIGNEMENTS" column={column} />
        ),
        cell: ({ row }) => {
            return (
                <span className="text-muted-foreground">
                    {row.original._count.teachings}
                </span>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const curriculum = row.original;

            return <CurriculumActions curriculum={curriculum} />;
        },
    },
];
