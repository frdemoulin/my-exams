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

const LogInPage = async () => {
    const session = await getSession();

    if (session?.user) {
        redirect('/')
    }

    return <LogIn />
}

export default LogInPage;
