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
import { SortIcon } from "@/components/shared/sort-icon";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    actionMenuContent,
    actionMenuHeader,
    actionMenuItem,
    actionMenuTrigger,
} from "@/components/shared/table-action-menu";
import { TableToolbar } from "@/components/shared/table-toolbar";
import { normalizeSearchText } from "@/lib/utils";

interface DomainThemesTableProps {
    domainId: string;
    themes: Theme[];
    addHref?: string;
}

type SortKey = "title" | "shortTitle" | "shortDescription" | "longDescription" | "updatedAt";

const PAGE_SIZE_OPTIONS = [10, 25, 50];

function buildPageList(total: number, current: number): Array<number | "..."> {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i);
    const pages = new Set<number>();
    pages.add(0);
    pages.add(total - 1);
    pages.add(current);
    pages.add(current - 1);
    pages.add(current + 1);
    pages.add(current - 2);
    pages.add(current + 2);

    const sorted = Array.from(pages)
        .filter((page) => page >= 0 && page < total)
        .sort((a, b) => a - b);
    const result: Array<number | "..."> = [];

    for (let index = 0; index < sorted.length; index += 1) {
        if (index === 0) {
            result.push(sorted[index]);
            continue;
        }

        if (sorted[index] - sorted[index - 1] === 1) {
            result.push(sorted[index]);
        } else {
            result.push("...");
            result.push(sorted[index]);
        }
    }

    return result;
}

export const DomainThemesTable = ({ domainId, themes, addHref }: DomainThemesTableProps) => {
    const [rows, setRows] = React.useState<Theme[]>(themes);
    const [editingThemeId, setEditingThemeId] = React.useState<string | null>(null);
    const [openMenuId, setOpenMenuId] = React.useState<string | null>(null);
    const [draft, setDraft] = React.useState({
        title: "",
        shortTitle: "",
        longDescription: "",
        shortDescription: "",
    });
    const [isSaving, setIsSaving] = React.useState(false);
    const [sortState, setSortState] = React.useState<{
        key: SortKey | null;
        direction: "asc" | "desc";
    }>({
        key: "title",
        direction: "asc",
    });
    const [globalFilter, setGlobalFilter] = React.useState("");
    const [pageIndex, setPageIndex] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(PAGE_SIZE_OPTIONS[0]);

    React.useEffect(() => {
        setRows(themes);
        setPageIndex(0);
    }, [themes]);

    React.useEffect(() => {
        setPageIndex(0);
    }, [globalFilter]);

    const cycleSort = (key: SortKey) => {
        setSortState((current) => {
            if (current.key !== key) {
                return { key, direction: "asc" };
            }
            if (current.direction === "asc") {
                return { key, direction: "desc" };
            }
            return { key: "title", direction: "asc" };
        });
    };

    const filteredRows = React.useMemo(() => {
        const normalizedFilter = normalizeSearchText(globalFilter);

        if (!normalizedFilter) {
            return rows;
        }

        return rows.filter((theme) =>
            [
                theme.title,
                theme.shortTitle,
                theme.shortDescription,
                theme.longDescription,
            ]
                .map((value) => normalizeSearchText(value))
                .some((value) => value.includes(normalizedFilter))
        );
    }, [globalFilter, rows]);

    const sortedRows = React.useMemo(() => {
            if (!sortState.key) {
                return filteredRows;
            }

        const direction = sortState.direction === "asc" ? 1 : -1;
        const compareString = (a: string, b: string) =>
            a.localeCompare(b, "fr", { sensitivity: "base", numeric: true });

        return [...filteredRows].sort((a, b) => {
            if (sortState.key === "updatedAt") {
                return direction * (a.updatedAt.getTime() - b.updatedAt.getTime());
            }

            const aValue =
                sortState.key === "title"
                    ? a.title
                    : sortState.key === "shortTitle"
                    ? a.shortTitle ?? ""
                    : sortState.key === "shortDescription"
                    ? a.shortDescription
                    : a.longDescription;
            const bValue =
                sortState.key === "title"
                    ? b.title
                    : sortState.key === "shortTitle"
                    ? b.shortTitle ?? ""
                    : sortState.key === "shortDescription"
                    ? b.shortDescription
                    : b.longDescription;

            return direction * compareString(aValue, bValue);
        });
    }, [filteredRows, sortState]);

    const pageCount = Math.max(1, Math.ceil(sortedRows.length / pageSize));
    const safePageIndex = Math.min(pageIndex, pageCount - 1);
    const paginatedRows = React.useMemo(() => {
        const start = safePageIndex * pageSize;
        return sortedRows.slice(start, start + pageSize);
    }, [pageSize, safePageIndex, sortedRows]);
    const pages = React.useMemo(
        () => buildPageList(pageCount, safePageIndex),
        [pageCount, safePageIndex]
    );
    const pageFrom = sortedRows.length === 0 ? 0 : safePageIndex * pageSize + 1;
    const pageTo = sortedRows.length === 0
        ? 0
        : Math.min(pageFrom + paginatedRows.length - 1, sortedRows.length);

    React.useEffect(() => {
        if (pageIndex !== safePageIndex) {
            setPageIndex(safePageIndex);
        }
    }, [pageIndex, safePageIndex]);

    const startEdit = (theme: Theme) => {
        setEditingThemeId(theme.id);
        setDraft({
            title: theme.title,
            shortTitle: theme.shortTitle ?? "",
            longDescription: theme.longDescription,
            shortDescription: theme.shortDescription,
        });
    };

    const cancelEdit = () => {
        setEditingThemeId(null);
        setDraft({
            title: "",
            shortTitle: "",
            longDescription: "",
            shortDescription: "",
        });
    };

    const saveEdit = async () => {
        if (!editingThemeId) {
            return;
        }

        const formData = new FormData();
        formData.append("title", draft.title);
        formData.append("shortTitle", draft.shortTitle);
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
                              title: draft.title,
                              shortTitle: draft.shortTitle || null,
                              longDescription: draft.longDescription,
                              shortDescription: draft.shortDescription,
                              updatedAt: new Date(),
                          }
                        : theme
                )
            );
            setEditingThemeId(null);
            setDraft({
                title: "",
                shortTitle: "",
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
                skipSuccessToast: true,
                revalidatePaths: [`/admin/domains/${domainId}`],
            });
            setRows((current) => current.filter((theme) => theme.id !== id));
            toast.success("Thème supprimé");
            setOpenMenuId(null);
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

    return (
        <div>
            <TableToolbar
                title="Thèmes associés"
                pageFrom={pageFrom}
                pageTo={pageTo}
                totalCount={sortedRows.length}
                placeholder="Rechercher un thème..."
                value={globalFilter}
                onChange={setGlobalFilter}
                addHref={addHref}
                addLabel="Ajouter un thème"
            />
            {rows.length === 0 ? (
                <div className="rounded-base border border-dashed border-default bg-neutral-primary-medium p-6 text-sm text-muted-foreground">
                    Aucun thème associé à ce domaine pour le moment.
                </div>
            ) : (
                <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <Button
                                variant="ghost"
                                className="text-xs font-semibold uppercase tracking-wide text-heading dark:text-heading hover:bg-transparent hover:text-heading dark:hover:bg-transparent dark:hover:text-heading focus-visible:ring-2 focus-visible:ring-neutral-tertiary justify-start"
                                onClick={() => cycleSort("title")}
                            >
                                TITRE
                                <SortIcon
                                    direction={
                                        sortState.key === "title"
                                            ? sortState.direction
                                            : false
                                    }
                                />
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button
                                variant="ghost"
                                className="text-xs font-semibold uppercase tracking-wide text-heading dark:text-heading hover:bg-transparent hover:text-heading dark:hover:bg-transparent dark:hover:text-heading focus-visible:ring-2 focus-visible:ring-neutral-tertiary justify-start"
                                onClick={() => cycleSort("shortTitle")}
                            >
                                TITRE COURT
                                <SortIcon
                                    direction={
                                        sortState.key === "shortTitle"
                                            ? sortState.direction
                                            : false
                                    }
                                />
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button
                                variant="ghost"
                                className="text-xs font-semibold uppercase tracking-wide text-heading dark:text-heading hover:bg-transparent hover:text-heading dark:hover:bg-transparent dark:hover:text-heading focus-visible:ring-2 focus-visible:ring-neutral-tertiary justify-start"
                                onClick={() => cycleSort("shortDescription")}
                            >
                                DESCRIPTION COURTE
                                <SortIcon
                                    direction={
                                        sortState.key === "shortDescription"
                                            ? sortState.direction
                                            : false
                                    }
                                />
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button
                                variant="ghost"
                                className="text-xs font-semibold uppercase tracking-wide text-heading dark:text-heading hover:bg-transparent hover:text-heading dark:hover:bg-transparent dark:hover:text-heading focus-visible:ring-2 focus-visible:ring-neutral-tertiary justify-start"
                                onClick={() => cycleSort("longDescription")}
                            >
                                DESCRIPTION LONGUE
                                <SortIcon
                                    direction={
                                        sortState.key === "longDescription"
                                            ? sortState.direction
                                            : false
                                    }
                                />
                            </Button>
                        </TableHead>
                        <TableHead>
                            <Button
                                variant="ghost"
                                className="text-xs font-semibold uppercase tracking-wide text-heading dark:text-heading hover:bg-transparent hover:text-heading dark:hover:bg-transparent dark:hover:text-heading focus-visible:ring-2 focus-visible:ring-neutral-tertiary justify-start"
                                onClick={() => cycleSort("updatedAt")}
                            >
                                DATE DE DERNIÈRE MODIFICATION
                                <SortIcon
                                    direction={
                                        sortState.key === "updatedAt"
                                            ? sortState.direction
                                            : false
                                    }
                                />
                            </Button>
                        </TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedRows.length ? (
                        paginatedRows.map((theme) => {
                            const isEditing = editingThemeId === theme.id;

                            return (
                                <TableRow key={theme.id}>
                                    <TableCell>
                                        {isEditing ? (
                                            <Input
                                                value={draft.title}
                                                onChange={(event) =>
                                                    setDraft((current) => ({
                                                        ...current,
                                                        title: event.target.value,
                                                    }))
                                                }
                                            />
                                        ) : (
                                            theme.title
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {isEditing ? (
                                            <Input
                                                value={draft.shortTitle}
                                                onChange={(event) =>
                                                    setDraft((current) => ({
                                                        ...current,
                                                        shortTitle: event.target.value,
                                                    }))
                                                }
                                            />
                                        ) : (
                                            theme.shortTitle || "—"
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
                                            theme.shortDescription
                                        )}
                                    </TableCell>
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
                                            <DropdownMenu
                                                open={openMenuId === theme.id}
                                                onOpenChange={(open) => setOpenMenuId(open ? theme.id : null)}
                                            >
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
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                                Aucun thème ne correspond à la recherche.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {pageCount > 1 ? (
                <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center">
                    <span>
                        Affichage {pageFrom}-{pageTo} sur {sortedRows.length} thèmes
                    </span>
                    <div className="flex items-center gap-2">
                        <span>Par page</span>
                        <Select
                            value={String(pageSize)}
                            onValueChange={(value) => {
                                setPageSize(Number(value));
                                setPageIndex(0);
                            }}
                        >
                            <SelectTrigger className="h-9 w-[88px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {PAGE_SIZE_OPTIONS.map((option) => (
                                    <SelectItem key={option} value={String(option)}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <nav aria-label="Pagination des thèmes">
                    <ul className="flex -space-x-px text-sm">
                        <li>
                            <button
                                className="flex h-9 items-center justify-center rounded-s-base border border-default-medium bg-neutral-secondary-medium px-3 font-medium text-body transition-colors hover:bg-neutral-tertiary-medium hover:text-heading disabled:cursor-not-allowed disabled:opacity-50"
                                disabled={safePageIndex === 0}
                                onClick={() => setPageIndex((current) => Math.max(0, current - 1))}
                                type="button"
                            >
                                Précédent
                            </button>
                        </li>
                        {pages.map((page, index) =>
                            page === "..." ? (
                                <li key={`ellipsis-${index}`}>
                                    <span className="flex h-9 min-w-[2.25rem] items-center justify-center border border-default-medium bg-neutral-secondary-medium px-3 text-muted-foreground">
                                        …
                                    </span>
                                </li>
                            ) : (
                                <li key={page}>
                                    <button
                                        aria-current={page === safePageIndex ? "page" : undefined}
                                        className={`flex h-9 min-w-[2.25rem] items-center justify-center border border-default-medium px-3 font-medium transition-colors ${
                                            page === safePageIndex
                                                ? "bg-neutral-tertiary-medium text-fg-brand"
                                                : "bg-neutral-secondary-medium text-body hover:bg-neutral-tertiary-medium hover:text-heading"
                                        }`}
                                        onClick={() => setPageIndex(page)}
                                        type="button"
                                    >
                                        {page + 1}
                                    </button>
                                </li>
                            )
                        )}
                        <li>
                            <button
                                className="flex h-9 items-center justify-center rounded-e-base border border-default-medium bg-neutral-secondary-medium px-3 font-medium text-body transition-colors hover:bg-neutral-tertiary-medium hover:text-heading disabled:cursor-not-allowed disabled:opacity-50"
                                disabled={safePageIndex >= pageCount - 1}
                                onClick={() =>
                                    setPageIndex((current) => Math.min(pageCount - 1, current + 1))
                                }
                                type="button"
                            >
                                Suivant
                            </button>
                        </li>
                    </ul>
                </nav>
                </div>
            ) : null}
                </>
            )}
        </div>
    );
};
