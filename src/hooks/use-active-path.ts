import { usePathname } from "next/navigation";

export function useActivePath(): (path: string) => boolean {
    const pathname = usePathname();

    const isActivePath = (path: string) => {
        if (path === "/" && pathname !== path) {
            return false;
        }
        if (path === "/admin") {
            return pathname === "/admin";
        }
        return pathname === path || pathname.startsWith(`${path}/`);
    }

    return isActivePath;
}
