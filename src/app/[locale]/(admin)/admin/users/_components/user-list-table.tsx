"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search, X, ChevronLeft, ChevronRight, UserCheck, AlertCircle, Eye, UserX } from "lucide-react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { AdminUserListItem } from "@/core/user";

interface UserListTableProps {
  users: AdminUserListItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  activeYearCode: string | null;
  currentSearch: string;
}

export function UserListTable({
  users,
  totalCount,
  page,
  pageSize,
  totalPages,
  activeYearCode,
  currentSearch,
}: UserListTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = React.useState(currentSearch);
  const [isPending, startTransition] = React.useTransition();
  const { data: session } = useSession();

  const canImpersonate = session?.user?.role === "ADMIN";
  const actorId = session?.actor?.id ?? session?.user?.id;

  const updateQueryParams = (newSearch: string, newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    const trimmed = newSearch.trim();
    if (trimmed) {
      params.set("q", trimmed);
    } else {
      params.delete("q");
    }

    if (newPage > 1) {
      params.set("page", String(newPage));
    } else {
      params.delete("page");
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateQueryParams(searchValue, 1);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    updateQueryParams("", 1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    updateQueryParams(searchValue, newPage);
  };

  const handleImpersonation = (targetUserId: string) => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/admin/impersonation/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: targetUserId }),
        });
        const payload = (await response.json().catch(() => null)) as
          | { error?: string; redirectTo?: string }
          | null;

        if (!response.ok) {
          throw new Error(payload?.error || "Impossible de lancer la bascule utilisateur.");
        }

        toast.success("Bascule utilisateur activée");
        window.location.assign(payload?.redirectTo || "/dashboard");
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Impossible de lancer la bascule utilisateur."
        );
      }
    });
  };

  const startIndex = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const endIndex = Math.min(page * pageSize, totalCount);

  return (
    <div className="space-y-4">
      {/* Barre d'outils et recherche serveur */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher par nom ou email..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-9 pr-8"
          />
          {searchValue ? (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </form>

        <div className="text-sm text-muted-foreground self-center">
          {totalCount === 0
            ? "Aucun résultat"
            : `${startIndex}–${endIndex} sur ${totalCount} utilisateur${totalCount > 1 ? "s" : ""}`}
        </div>
      </div>

      {/* Tableau des utilisateurs */}
      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Utilisateur</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Affectation {activeYearCode ? `(${activeYearCode})` : ""}</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                  Aucun utilisateur trouvé.
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => {
                const isSelf = actorId === user.id;
                const isActiveViewer = session?.impersonation?.viewerId === user.id;

                return (
                  <TableRow key={user.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium text-body">
                      {user.name || <span className="text-muted-foreground italic">Non renseigné</span>}
                    </TableCell>
                    <TableCell className="text-body font-mono text-xs">
                      {user.email || <span className="text-muted-foreground italic">Non renseigné</span>}
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.roles === "ADMIN" ? "default" : "secondary"}>
                        {user.roles}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-body">
                      {user.activeEnrollment ? (
                        <span className="font-medium">{user.activeEnrollment.scopeLabel}</span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {!activeYearCode ? (
                        <Badge variant="outline" className="text-muted-foreground">
                          Aucune année active
                        </Badge>
                      ) : user.activeEnrollment ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-full px-2.5 py-0.5">
                          <UserCheck className="h-3.5 w-3.5" />
                          Affecté
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-full px-2.5 py-0.5">
                          <AlertCircle className="h-3.5 w-3.5" />
                          Onboarding requis
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/users/${user.id}`}>
                          <Button variant="outline" size="sm" className="h-8 gap-1">
                            <Eye className="h-3.5 w-3.5" />
                            Voir
                          </Button>
                        </Link>

                        {canImpersonate && !isSelf ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-xs text-muted-foreground hover:text-foreground hidden lg:inline-flex"
                            disabled={isPending || isActiveViewer}
                            onClick={() => !isActiveViewer && handleImpersonation(user.id)}
                          >
                            {isActiveViewer ? "Actif" : "Impersonner"}
                          </Button>
                        ) : null}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination serveur */}
      {totalPages > 1 ? (
        <div className="flex items-center justify-between py-2">
          <div className="text-xs text-muted-foreground">
            Page {page} sur {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1 || isPending}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Précédent
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= totalPages || isPending}
            >
              Suivant
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
