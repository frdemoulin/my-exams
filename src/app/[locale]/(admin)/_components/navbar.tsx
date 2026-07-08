"use client";

import UserButton from "@/components/shared/user-button";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { APP_NAME } from "@/config/app";
import { getRoleLabel } from "@/lib/auth/roles";

export const Navbar = () => {
    // on récupère les infos de l'utilisateur connecté
    const session = useSession();
    const user = session.data?.user;
    const actor = session.data?.actor;
    const impersonation = session.data?.impersonation;
    const userRoleLabel = getRoleLabel(user?.role);
    const actorRoleLabel = getRoleLabel(actor?.role);
    const viewerRoleLabel = getRoleLabel(impersonation?.viewerRole ?? user?.role);

    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <div className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-default bg-neutral-primary px-4 text-sm shadow-xs">
            <Link className="text-xl font-extrabold uppercase text-heading hover:text-heading" href="/">
                {APP_NAME}
            </Link>
            <div className="flex text-body">
                {!user && session.status === "loading" && <Skeleton className="h-4 w-[200px]" />}
                {user && (
                    <div>
                        {impersonation?.isActive ? (
                            <>
                                Admin <span className="font-semibold text-heading">{actor?.name || actor?.email}</span>{' '}
                                <span className="text-muted-foreground">({actorRoleLabel})</span>{' '}
                                · vue de <span className="font-semibold text-heading">{user.name || user.email}</span>{' '}
                                <span className="text-muted-foreground">({viewerRoleLabel})</span>
                            </>
                        ) : (
                            <>
                                Connecté en tant que <span className="font-semibold text-heading">{user?.name}</span>{' '}
                                <span className="text-muted-foreground">({userRoleLabel})</span>
                            </>
                        )}
                    </div>
                )}
            </div>

            {!user && session.status === "loading" && <Skeleton className="w-10 h-10 rounded-full" />}

            {user && (
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <UserButton user={user} />
                </div>
            )}
        </div>
    )
}
