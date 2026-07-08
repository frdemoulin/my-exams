import { DefaultSession } from 'next-auth';
import type { Role } from '@prisma/client';

// d.ts = typescript declaration file
declare module 'next-auth' {
    interface Session {
        user: DefaultSession['user'] & {
            id?: string;
            role?: Role;
        };
        actor?: {
            id: string;
            role: Role;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            adminExpiresAt?: number | null;
        };
        impersonation?: {
            isActive: true;
            actorId: string;
            actorRole: Role;
            actorName?: string | null;
            viewerId: string;
            viewerRole: Role;
            viewerName?: string | null;
            viewerEmail?: string | null;
            startedAt?: number | null;
        };
    }

    interface User {
        role: Role;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        role?: Role;
        actorId?: string;
        actorRole?: Role;
        actorName?: string | null;
        actorEmail?: string | null;
        actorImage?: string | null;
        impersonatedUserId?: string;
        impersonatedUserRole?: Role;
        impersonatedUserName?: string | null;
        impersonatedUserEmail?: string | null;
        impersonatedUserImage?: string | null;
        impersonationStartedAt?: number;
        adminExpiresAt?: number;
    }
}
