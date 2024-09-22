import { DefaultSession } from "next-auth";

// d.ts = typescript declaration file
declare module "next-auth" {
    interface Session {
        user: User & DefaultSession["user"];
    }

    interface User {
        role: "USER" | "ADMIN";
    }
}