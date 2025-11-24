"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { deleteCurriculum } from "@/core/curriculum";
import toast from "react-hot-toast";
import type { CurriculumWithTeachingCount } from "@/core/curriculum";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";

export const columns: ColumnDef<CurriculumWithTeachingCount>[] = [
    {
        accessorKey: "longDescription",
        header: "Nom",
    },
    {
        accessorKey: "startDate",
        header: "Date de début",
        cell: ({ row }) => {
            const startDate = row.original.startDate;
            return new Date(startDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
        },
    },
    {
        accessorKey: "endDate",
        header: "Fin",
        cell: ({ row }) => {
            const endDate = row.original.endDate;
            if (!endDate) return "—";
            return new Date(endDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
        },
    },
    {
        accessorKey: "isActive",
        header: "Statut",
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
        header: "Enseignements",
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
        cell: ({ row }) => {
            const curriculum = row.original;

            const handleDelete = async () => {
                try {
                    await deleteCurriculum(curriculum.id);
                    toast.success("Programme supprimé avec succès");
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
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Ouvrir le menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                            <Link href={`/admin/curriculums/${curriculum.id}`}>
                                Voir
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={`/admin/curriculums/${curriculum.id}/edit`}>
                                Éditer
                            </Link>
                        </DropdownMenuItem>
                        <ConfirmDeleteDialog
                            onConfirm={handleDelete}
                            trigger={
                                <DropdownMenuItem
                                    className="hover:cursor-pointer"
                                    onSelect={(event) => event.preventDefault()}
                                >
                                    Supprimer
                                </DropdownMenuItem>
                            }
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
