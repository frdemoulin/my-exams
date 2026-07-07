'use client';

import { useEffect, useMemo, useState, useTransition } from 'react';
import { useSession } from 'next-auth/react';
import { LogOut, Settings } from "lucide-react";
import { User } from "next-auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { signOut } from "next-auth/react";
import toast from 'react-hot-toast';

import { canImpersonateRole, isAdminRole } from '@/lib/auth/roles';

interface UserButtonProps {
    user: User;
}

export default function UserButton({ user }: UserButtonProps) {
    const { data: session } = useSession();
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [impersonationOptions, setImpersonationOptions] = useState<
        Array<{ id: string; label: string; secondaryLabel: string | null; role: string }>
    >([]);
    const [isPending, startTransition] = useTransition();

    const initials = (() => {
        if (!user.name) return "U";
        const parts = user.name.split(" ").filter(Boolean);
        if (parts.length >= 2) {
            return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
        }
        const first = parts[0].slice(0, 2).toUpperCase();
        return first || "U";
    })();

    const actorId = session?.actor?.id ?? session?.user?.id ?? null;
    const actorRole = session?.actor?.role ?? session?.user?.role ?? null;
    const impersonation = session?.impersonation;
    const isAdmin = isAdminRole(actorRole);
    const canImpersonate = canImpersonateRole(actorRole);
    const currentViewerId = impersonation?.viewerId ?? actorId ?? '';
    const actorLabel = session?.actor?.name || session?.actor?.email || 'Mon compte';

    useEffect(() => {
        if (!isAdmin) {
            setImpersonationOptions([]);
            return;
        }

        let isMounted = true;

        const loadCandidates = async () => {
            try {
                setIsLoadingUsers(true);
                const response = await fetch('/api/admin/impersonation/users');
                const payload = (await response.json().catch(() => null)) as
                    | {
                        success?: boolean;
                        users?: Array<{
                            id: string;
                            label: string;
                            secondaryLabel: string | null;
                            role: string;
                        }>;
                        error?: string;
                    }
                    | null;

                if (!response.ok) {
                    throw new Error(payload?.error || 'Impossible de charger les comptes.');
                }

                if (isMounted) {
                    setImpersonationOptions(payload?.users ?? []);
                }
            } catch (error) {
                if (isMounted) {
                    setImpersonationOptions([]);
                }
            } finally {
                if (isMounted) {
                    setIsLoadingUsers(false);
                }
            }
        };

        void loadCandidates();

        return () => {
            isMounted = false;
        };
    }, [isAdmin]);

    const selectedValue = useMemo(() => currentViewerId || '__self', [currentViewerId]);

    const handleImpersonationChange = (value: string) => {
        if (!actorId || value === selectedValue) {
            return;
        }

        startTransition(async () => {
            try {
                if (value === actorId) {
                    const response = await fetch('/api/admin/impersonation/stop', {
                        method: 'POST',
                    });
                    const payload = (await response.json().catch(() => null)) as
                        | { error?: string }
                        | null;

                    if (!response.ok) {
                        throw new Error(
                            payload?.error || 'Impossible de quitter la bascule utilisateur.'
                        );
                    }

                    window.location.assign(
                        `${window.location.pathname}${window.location.search}${window.location.hash}`
                    );
                    return;
                }

                const response = await fetch('/api/admin/impersonation/start', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId: value }),
                });
                const payload = (await response.json().catch(() => null)) as
                    | { error?: string; redirectTo?: string }
                    | null;

                if (!response.ok) {
                    throw new Error(
                        payload?.error || 'Impossible de lancer la bascule utilisateur.'
                    );
                }

                window.location.assign(payload?.redirectTo || '/dashboard');
            } catch (error) {
                toast.error(
                    error instanceof Error
                        ? error.message
                        : 'Impossible de changer de compte.'
                );
            }
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="flex-none h-9 w-9 rounded-full border border-default bg-neutral-primary shadow-xs p-0 hover:bg-neutral-secondary-soft focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1"
                    variant="ghost"
                >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-xs font-semibold uppercase text-white">
                        {initials}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 w-56 overflow-hidden rounded-base border border-default bg-neutral-primary-medium p-0 text-body shadow-lg">
                <div className="border-b border-default px-4 py-3 text-sm text-heading">
                    <div className="font-semibold">{user.name || "Utilisateur"}</div>
                </div>
                <div className="p-2 text-sm font-medium text-body">
                    {isAdmin ? (
                        <>
                            <DropdownMenuLabel className="px-3 pb-2 pt-1 text-xs uppercase tracking-wide text-muted-foreground">
                                Bascule utilisateur
                            </DropdownMenuLabel>
                            <div className="px-2 pb-2">
                                <Select
                                    value={selectedValue}
                                    disabled={!canImpersonate || isLoadingUsers || isPending}
                                    onValueChange={handleImpersonationChange}
                                >
                                    <SelectTrigger className="h-9 w-full bg-neutral-primary-soft text-left text-xs">
                                        <SelectValue
                                            placeholder={
                                                isLoadingUsers
                                                    ? 'Chargement...'
                                                    : 'Choisir un compte'
                                            }
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {actorId ? (
                                            <SelectItem value={actorId}>
                                                {actorLabel}
                                            </SelectItem>
                                        ) : null}
                                        {impersonationOptions.map((option) => (
                                            <SelectItem key={option.id} value={option.id}>
                                                {option.secondaryLabel
                                                    ? `${option.label} · ${option.secondaryLabel}`
                                                    : option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {!canImpersonate ? (
                                    <p className="mt-2 text-[11px] leading-4 text-muted-foreground">
                                        Réservé aux admins.
                                    </p>
                                ) : null}
                            </div>
                            <DropdownMenuSeparator />
                        </>
                    ) : null}
                    <DropdownMenuItem asChild className="block w-full rounded-base px-3 py-2 text-body hover:bg-neutral-tertiary-medium hover:text-heading focus:bg-neutral-tertiary-medium focus:text-heading">
                        <Link href="/settings" className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Paramètres
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="block w-full rounded-base px-3 py-2 text-fg-danger hover:bg-neutral-tertiary-medium hover:text-heading focus:bg-neutral-tertiary-medium focus:text-heading">
                        <button onClick={() => signOut({ callbackUrl: "/" })} className="flex w-full items-center gap-2">
                            <LogOut className="h-4 w-4" /> Se déconnecter
                        </button>
                    </DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
