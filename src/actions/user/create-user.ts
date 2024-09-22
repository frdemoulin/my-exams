import getSession from "@/lib/get-session";

export const createUser = async (formData: FormData) => {
    const session = await getSession();
    const userId = session?.user?.id;

    if (!userId) {
        throw new Error("User not logged in");
    }
    
    const values = Object.fromEntries(formData.entries());

    // TODO: create user in database
}