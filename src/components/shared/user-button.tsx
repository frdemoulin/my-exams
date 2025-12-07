import { LogOut, Settings } from "lucide-react";
import { User } from "next-auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

interface UserButtonProps {
    user: User;
}

export default function UserButton({ user }: UserButtonProps) {
    const initials = (() => {
        if (!user.name) return "U";
        const parts = user.name.split(" ").filter(Boolean);
        if (parts.length >= 2) {
            return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
        }
        const first = parts[0].slice(0, 2).toUpperCase();
        return first || "U";
    })();

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
                    <DropdownMenuItem asChild className="block w-full rounded-base px-3 py-2 text-body hover:bg-neutral-tertiary-medium hover:text-heading focus:bg-neutral-tertiary-medium focus:text-heading">
                        <Link href="/settings" className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Paramètres
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="block w-full rounded-base px-3 py-2 text-fg-danger hover:bg-neutral-tertiary-medium hover:text-heading focus:bg-neutral-tertiary-medium focus:text-heading">
                        <button onClick={() => signOut()} className="flex w-full items-center gap-2">
                            <LogOut className="h-4 w-4" /> Se déconnecter
                        </button>
                    </DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
