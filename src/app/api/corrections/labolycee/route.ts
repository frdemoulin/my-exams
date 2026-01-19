import { NextResponse } from "next/server";

import getSession from "@/lib/auth/get-session";
import prisma from "@/lib/db/prisma";
import { extractLabolyceePdfData } from "@/lib/corrections/labolycee";

export async function POST(request: Request) {
    const session = await getSession();
    const role = (session?.user as any)?.role;
    if (!session?.user || role !== "ADMIN") {
        return NextResponse.json(
            { success: false, subjectPdfs: [], correctionPdfs: [] },
            { status: 403 }
        );
    }

    let payload: { url?: string; examPaperId?: string } | null = null;
    try {
        payload = await request.json();
    } catch {
        payload = null;
    }

    const url = payload?.url?.trim();
    const examPaperId = payload?.examPaperId?.trim();
    if (!url || !examPaperId) {
        return NextResponse.json(
            { success: false, message: "Paramètres manquants.", subjectPdfs: [], correctionPdfs: [] },
            { status: 400 }
        );
    }

    if (!url.includes("labolycee.org")) {
        return NextResponse.json(
            { success: false, message: "URL non reconnue pour Labolycee.", subjectPdfs: [], correctionPdfs: [] },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(url, {
            headers: {
                "user-agent":
                    "Mozilla/5.0 (compatible; MyExamsBot/1.0; +https://my-exams.onrender.com)",
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { success: false, message: "Impossible de récupérer la page source.", subjectPdfs: [], correctionPdfs: [] },
                { status: 400 }
            );
        }

        const html = await response.text();
        const { subjectPdf, exerciseCorrections, exerciseSubjects } = extractLabolyceePdfData(
            html,
            url
        );

        const examPaper = await prisma.examPaper.findUnique({
            where: { id: examPaperId },
            select: { id: true, subjectUrl: true },
        });

        if (!examPaper) {
            return NextResponse.json(
                { success: false, message: "Sujet introuvable.", subjectPdf: null, corrections: [] },
                { status: 404 }
            );
        }

        if (subjectPdf && examPaper.subjectUrl !== subjectPdf) {
            await prisma.examPaper.update({
                where: { id: examPaperId },
                data: { subjectUrl: subjectPdf },
            });
        }

        const exercises = await prisma.exercise.findMany({
            where: { examPaperId },
            select: { id: true, exerciseNumber: true },
        });
        const exerciseByNumber = new Map(
            exercises.map((exercise) => [exercise.exerciseNumber, exercise.id])
        );

        const subjectUpdates = exerciseSubjects
            .map((subject) => {
                const exerciseId = exerciseByNumber.get(subject.exerciseNumber);
                if (!exerciseId) return null;
                return { id: exerciseId, exerciseUrl: subject.pdfUrl };
            })
            .filter((value): value is NonNullable<typeof value> => value !== null);

        if (subjectUpdates.length > 0) {
            await Promise.all(
                subjectUpdates.map((update) =>
                    prisma.exercise.update({
                        where: { id: update.id },
                        data: { exerciseUrl: update.exerciseUrl },
                    })
                )
            );
        }

        const correctionsToCreate = exerciseCorrections
            .map((correction) => {
                const exerciseId = exerciseByNumber.get(correction.exerciseNumber);
                if (!exerciseId) return null;
                return {
                    exerciseId,
                    source: "LaboLycée",
                    url: correction.pdfUrl,
                    type: "pdf",
                };
            })
            .filter((value): value is NonNullable<typeof value> => value !== null);

        if (correctionsToCreate.length > 0) {
            for (const correction of correctionsToCreate) {
                const existing = await prisma.exerciseCorrection.findFirst({
                    where: {
                        exerciseId: correction.exerciseId,
                        source: correction.source,
                        url: correction.url,
                    },
                });
                if (!existing) {
                    await prisma.exerciseCorrection.create({
                        data: correction,
                    });
                }
            }
        }

        return NextResponse.json({
            success: true,
            subjectPdf: subjectPdf ?? null,
            corrections: exerciseCorrections,
            exerciseSubjects,
            createdCorrections: correctionsToCreate.length,
            updatedExerciseSubjects: subjectUpdates.length,
        });
    } catch (error) {
        console.error("Labolycee correction scrape error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Erreur lors de l'analyse de la source.",
                subjectPdf: null,
                corrections: [],
                exerciseSubjects: [],
            },
            { status: 500 }
        );
    }
}
