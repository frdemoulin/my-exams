"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash, Eye } from "lucide-react";
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

export const columns: ColumnDef<CurriculumWithTeachingCount>[] = [
    {
        accessorKey: "name",
        header: "Nom",
    },
    {
        accessorKey: "startYear",
        header: "Début",
        cell: ({ row }) => {
            const startYear = row.original.startYear;
            const startMonth = row.original.startMonth;
            return startMonth ? `${startMonth}/${startYear}` : startYear;
        },
    },
    {
        accessorKey: "endYear",
        header: "Fin",
        cell: ({ row }) => {
            const endYear = row.original.endYear;
            const endMonth = row.original.endMonth;
            if (!endYear) return "—";
            return endMonth ? `${endMonth}/${endYear}` : endYear;
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
                                <Eye className="mr-2 h-4 w-4" />
                                Voir
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={`/admin/curriculums/${curriculum.id}/edit`}>
                                <Pencil className="mr-2 h-4 w-4" />
                                Éditer
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDelete}>
                            <Trash className="mr-2 h-4 w-4" />
                            Supprimer
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
