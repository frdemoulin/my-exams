import { signOut } from "@/lib/auth/auth";

export function SignOutButton() {
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <button type="submit">Se déconnecter</button>
        </form>
    )
}