import { redirect } from "next/navigation";
import getSession from "@/lib/get-session";
import { LogIn } from "./_components/log-in";

const LogInPage = async () => {
    const session = await getSession();

    if (session?.user) {
        redirect('/')
    }

    return <LogIn />
}

export default LogInPage;