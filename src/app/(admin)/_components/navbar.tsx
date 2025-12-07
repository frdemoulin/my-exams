"use client";

import UserButton from "@/components/shared/user-button";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export const Navbar = () => {
    // on récupère les infos de l'utilisateur connecté
    const session = useSession();
    const user = session.data?.user;

    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <div className="fixed text-sm z-50 top-0 px-4 h-14 w-full shadow-sm border-b flex bg-white dark:bg-background justify-between items-center navbar-text">
            <Link className="font-bold text-fg-brand uppercase text-xl" href="/">
                My exams
            </Link>
            {/* Logged user infos */}
            <div className="flex">
                {!user && session.status === "loading" && <Skeleton className="h-4 w-[200px]" />}
                {/* {user && <div>Connecté en tant que <span className="">{user?.name}</span> (<span>{user?.role}</span>)</div>} */}
                {user && <div>Connecté en tant que <span className="">{user?.name}</span></div>}
            </div>

            {/* TODO: Mobile bar */}

            {!user && session.status === "loading" && <Skeleton className="w-10 h-10 rounded-full" />
            }

            {user && (
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <UserButton user={user} />
                </div>
            )}
        </div>
    )
}
