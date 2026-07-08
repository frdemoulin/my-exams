import { NextResponse } from "next/server";

import prisma from "@/lib/db/prisma";
import getSession from "@/lib/auth/get-session";
import { isAdminRole } from "@/lib/auth/roles";
import { getSessionEffectiveRole } from "@/lib/auth/session";

export async function POST(request: Request) {
    const session = await getSession();
    const role = getSessionEffectiveRole(session);
    if (!session?.user || !isAdminRole(role)) {
        return NextResponse.json({ success: false }, { status: 403 });
    }

    let payload: { examPaperId?: string; subjectUrl?: string } | null = null;
    try {
        payload = await request.json();
    } catch {
        payload = null;
    }

    const examPaperId = payload?.examPaperId?.trim();
    const subjectUrl = payload?.subjectUrl?.trim();

    if (!examPaperId || !subjectUrl) {
        return NextResponse.json(
            { success: false, message: "Paramètres invalides." },
            { status: 400 }
        );
    }

    try {
        await prisma.examPaper.update({
            where: { id: examPaperId },
            data: { subjectUrl },
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to update exam paper subjectUrl:", error);
        return NextResponse.json(
            { success: false, message: "Mise à jour impossible." },
            { status: 500 }
        );
    }
}
