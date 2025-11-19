import prisma from "@/lib/db/prisma";
import { User } from "@prisma/client";

export async function fetchUsers(): Promise<User[]> {
    return await prisma.user.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}
