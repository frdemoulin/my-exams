"use client";

import * as React from "react";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import { Theme } from "@prisma/client";

import { deleteTheme, updateTheme } from "@/core/theme";
import { ConfirmDeleteDialog } from "@/components/shared/confirm-delete-dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/utils";
import {
    actionMenuContent,
    actionMenuHeader,
    actionMenuItem,
    actionMenuTrigger,
} from "@/components/shared/table-action-menu";

interface DomainThemesTableProps {
    domainId: string;
    themes: Theme[];
}

export const DomainThemesTable = ({ domainId, themes }: DomainThemesTableProps) => {
    const [rows, setRows] = React.useState<Theme[]>(themes);
    const [editingThemeId, setEditingThemeId] = React.useState<string | null>(null);
    const [draft, setDraft] = React.useState({
        longDescription: "",
        shortDescription: "",
    });
    const [isSaving, setIsSaving] = React.useState(false);

    React.useEffect(() => {
        setRows(themes);
    }, [themes]);

    const startEdit = (theme: Theme) => {
        setEditingThemeId(theme.id);
        setDraft({
            longDescription: theme.longDescription,
            shortDescription: theme.shortDescription ?? "",
        });
    };

    const cancelEdit = () => {
        setEditingThemeId(null);
        setDraft({
            longDescription: "",
            shortDescription: "",
        });
    };

    const saveEdit = async () => {
        if (!editingThemeId) {
            return;
        }

        const formData = new FormData();
        formData.append("longDescription", draft.longDescription);
        formData.append("shortDescription", draft.shortDescription);
        formData.append("domainId", domainId);

        try {
            setIsSaving(true);
            await updateTheme(editingThemeId, formData, {
                redirectTo: null,
                revalidatePaths: [`/admin/domains/${domainId}`],
            });
            setRows((current) =>
                current.map((theme) =>
                    theme.id === editingThemeId
                        ? {
                              ...theme,
                              longDescription: draft.longDescription,
                              shortDescription: draft.shortDescription || null,
                              updatedAt: new Date(),
                          }
                        : theme
                )
            );
            setEditingThemeId(null);
            setDraft({
                longDescription: "",
                shortDescription: "",
            });
            toast.success("Thème mis à jour");
        } catch (error) {
            if (
                error &&
                typeof error === "object" &&
                "digest" in error &&
                String(error.digest).startsWith("NEXT_REDIRECT")
            ) {
                throw error;
            }
            toast.error("Erreur dans la mise à jour du thème");
        } finally {
            setIsSaving(false);
        }
    };

    const handleOnClickDeleteButton = async (id: string) => {
        try {
            await deleteTheme(id, {
                redirectTo: null,
                revalidatePaths: [`/admin/domains/${domainId}`],
            });
            setRows((current) => current.filter((theme) => theme.id !== id));
            toast.success("Thème supprimé");
        } catch (error) {
            if (
                error &&
                typeof error === "object" &&
                "digest" in error &&
                String(error.digest).startsWith("NEXT_REDIRECT")
            ) {
                throw error;
            }
            toast.error("Erreur dans la suppression du thème");
        }
    };

    if (rows.length === 0) {
        return (
            <div className="rounded-base border border-dashed border-default bg-neutral-primary-medium p-6 text-sm text-muted-foreground">
                Aucun thème associé à ce domaine pour le moment.
            </div>
        );
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>DESCRIPTION LONGUE</TableHead>
                    <TableHead>DESCRIPTION COURTE</TableHead>
                    <TableHead>DATE DE DERNIÈRE MODIFICATION</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((theme) => {
                    const isEditing = editingThemeId === theme.id;

                    return (
                        <TableRow key={theme.id}>
                            <TableCell>
                                {isEditing ? (
                                    <Input
                                        value={draft.longDescription}
                                        onChange={(event) =>
                                            setDraft((current) => ({
                                                ...current,
                                                longDescription: event.target.value,
                                            }))
                                        }
                                    />
                                ) : (
                                    theme.longDescription
                                )}
                            </TableCell>
                            <TableCell>
                                {isEditing ? (
                                    <Input
                                        value={draft.shortDescription}
                                        onChange={(event) =>
                                            setDraft((current) => ({
                                                ...current,
                                                shortDescription: event.target.value,
                                            }))
                                        }
                                    />
                                ) : (
                                    theme.shortDescription || "—"
                                )}
                            </TableCell>
                            <TableCell>{formatDateTime(theme.updatedAt)}</TableCell>
                            <TableCell>
                                {isEditing ? (
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Button
                                            type="button"
                                            size="sm"
                                            onClick={saveEdit}
                                            disabled={isSaving}
                                        >
                                            Enregistrer
                                        </Button>
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="secondary"
                                            onClick={cancelEdit}
                                            disabled={isSaving}
                                        >
                                            Annuler
                                        </Button>
                                    </div>
                                ) : (
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
                                                <Link href={`/admin/themes/${theme.id}`}>Voir</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className={`${actionMenuItem} hover:cursor-pointer`}
                                                onSelect={(event) => {
                                                    event.preventDefault();
                                                    startEdit(theme);
                                                }}
                                            >
                                                Éditer
                                            </DropdownMenuItem>
                                            <ConfirmDeleteDialog
                                                onConfirm={() => handleOnClickDeleteButton(theme.id)}
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
                                )}
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};
