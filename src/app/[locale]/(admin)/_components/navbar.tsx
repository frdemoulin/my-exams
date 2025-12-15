"use client";

import UserButton from "@/components/shared/user-button";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { APP_NAME } from "@/config/app";

export const Navbar = () => {
    // on récupère les infos de l'utilisateur connecté
    const session = useSession();
    const user = session.data?.user;

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
                {user && <div>Connecté en tant que <span className="font-semibold text-heading">{user?.name}</span></div>}
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
