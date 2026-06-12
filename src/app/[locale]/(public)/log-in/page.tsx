import { Metadata } from "next";
import { redirect } from "next/navigation";
import getSession from "@/lib/auth/get-session";
import { LogIn } from "./_components/log-in";

export const metadata: Metadata = {
    title: "Connexion",
    robots: {
        index: false,
        follow: false,
    },
};

type LogInPageProps = {
    searchParams: Promise<{ callbackUrl?: string | string[] }>;
};

function getSafeCallbackPath(value?: string | string[]) {
    const callbackUrl = Array.isArray(value) ? value[0] : value;
    if (!callbackUrl?.startsWith("/")) return "/";

    try {
        const url = new URL(callbackUrl, "http://callback.local");
        return url.origin === "http://callback.local"
            ? `${url.pathname}${url.search}${url.hash}`
            : "/";
    } catch {
        return "/";
    }
}

const LogInPage = async ({ searchParams }: LogInPageProps) => {
    const session = await getSession();
    const { callbackUrl } = await searchParams;
    const safeCallbackPath = getSafeCallbackPath(callbackUrl);

    if (session?.user) {
        redirect(safeCallbackPath)
    }

    return <LogIn callbackPath={safeCallbackPath} />
}

export default LogInPage;
