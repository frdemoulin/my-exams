import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import { LogOut, Settings } from "lucide-react";
import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { FaCheck, FaDesktop, FaMoon, FaRegSun } from "react-icons/fa6";

interface UserButtonProps {
    user: User;
}

export default function UserButton({ user }: UserButtonProps) {
    const { theme, setTheme } = useTheme();

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
            <DropdownMenuContent className="w-56 bg-background text-foreground">
                <DropdownMenuLabel>{user.name || "User"}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <FaDesktop className="mr-2 size-4" />
                        Thème
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem onClick={() => setTheme("system")} className="flex justify-between">
                                <div className="flex justify-start">
                                    <FaRegSun className="mr-2 size-4" />
                                    Défaut
                                </div>
                                <div>
                                    {theme === "system" && <FaCheck className="ms-2 size-4 text-green-600" />}
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("light")} className="flex justify-between">
                                <div className="flex justify-start">
                                    <FaRegSun className="mr-2 size-4" />
                                    Clair
                                </div>
                                <div>
                                    {theme === "light" && <FaCheck className="ms-2 size-4 text-green-600" />}
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")} className="flex justify-between">
                                <div className="flex justify-start">
                                    <FaMoon className="mr-2 size-4" />
                                    Sombre
                                </div>
                                <div>
                                    {theme === "dark" && <FaCheck className="ms-2 size-4 text-green-600" />}
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuGroup>
                    <Link href="/settings">
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Paramètres</span>
                        </DropdownMenuItem>
                    </Link>
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