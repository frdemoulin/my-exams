import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import { LogOut, Settings } from "lucide-react";
import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";

interface UserButtonProps {
    user: User;
}

export default function UserButton({ user }: UserButtonProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" className="flex-none rounded-full">
                    <Image
                        src={user.image || avatarPlaceholder}
                        // src={avatarPlaceholder}
                        alt="User profile picture"
                        width={50}
                        height={50}
                        className="aspect-square rounded-full bg-background object-cover"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{user.name || "User"}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href="/settings">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Paramètres</span>
                        </Link>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem asChild>
                        <Link href="/">
                            <Lock className="mr-2 h-4 w-4" />
                            Admin
                        </Link>
                    </DropdownMenuItem> */}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <button onClick={() => signOut()} className="flex w-full items-center">
                        <LogOut className="mr-2 h-4 w-4" /> Se déconnecter
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}