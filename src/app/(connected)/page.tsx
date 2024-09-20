import { redirect } from "next/navigation";
import { Metadata } from "next";
import getSession from "@/lib/get-session";

export const metadata: Metadata = {
    title: "Accueil",
}

const DashboardPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/log-in?callbackUrl=/");
    }

    return (
        <div className="p-4">
            Page d&apos;accueil connecté
            Bouton se déconnecter
        </div>
    )
}

export default DashboardPage;