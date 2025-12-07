import { DefaultSession } from "next-auth";

// d.ts = typescript declaration file
declare module "next-auth" {
    interface Session {
        user: User & DefaultSession["user"] & { id?: string };
    }

    interface User {
        role: "USER" | "ADMIN";
    }
}
