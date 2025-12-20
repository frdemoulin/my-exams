import prisma from "@/lib/db/prisma";
import { Prisma, User } from "@prisma/client";

export type UserDetail = Prisma.UserGetPayload<{
    select: {
        id: true;
        name: true;
        email: true;
        emailVerified: true;
        image: true;
        roles: true;
        createdAt: true;
        updatedAt: true;
        accounts: {
            select: {
                id: true;
                provider: true;
                providerAccountId: true;
                type: true;
                createdAt: true;
                updatedAt: true;
            };
        };
        sessions: {
            select: {
                id: true;
                expires: true;
                createdAt: true;
                updatedAt: true;
            };
        };
        Authenticator: {
            select: {
                credentialID: true;
                credentialDeviceType: true;
                credentialBackedUp: true;
                counter: true;
                transports: true;
                providerAccountId: true;
            };
        };
    };
}>;

export async function fetchUsers(): Promise<User[]> {
    return await prisma.user.findMany({
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });
}

export async function fetchUserById(id: string): Promise<UserDetail | null> {
    return prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            roles: true,
            createdAt: true,
            updatedAt: true,
            accounts: {
                select: {
                    id: true,
                    provider: true,
                    providerAccountId: true,
                    type: true,
                    createdAt: true,
                    updatedAt: true,
                },
            },
            sessions: {
                select: {
                    id: true,
                    expires: true,
                    createdAt: true,
                    updatedAt: true,
                },
            },
            Authenticator: {
                select: {
                    credentialID: true,
                    credentialDeviceType: true,
                    credentialBackedUp: true,
                    counter: true,
                    transports: true,
                    providerAccountId: true,
                },
            },
        },
    });
}
