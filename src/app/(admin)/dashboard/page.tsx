import { redirect } from "next/navigation";
import { Metadata } from "next";
import getSession from "@/lib/auth/get-session";

export const metadata: Metadata = {
    title: "Accueil",
}

const DashboardPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/log-in?callbackUrl=/dashboard");
    }

    return (
        <div className="p-4">
            Page d&apos;accueil connecté
        </div>
    )
}

export default DashboardPage;