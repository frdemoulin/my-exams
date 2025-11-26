import prisma from "@/lib/db/prisma";
import { ExamPaper } from "@prisma/client";

export type ExamPaperWithRelations = ExamPaper & {
    diploma: { longDescription: string };
    division: { longDescription: string };
    grade: { shortDescription: string };
    teaching: { longDescription: string };
    curriculum: { longDescription: string; shortDescription: string | null };
};

export async function fetchExamPapers(): Promise<ExamPaperWithRelations[]> {
    return await prisma.examPaper.findMany({
        include: {
            diploma: { select: { longDescription: true } },
            division: { select: { longDescription: true } },
            grade: { select: { shortDescription: true } },
            teaching: { select: { longDescription: true } },
            curriculum: { select: { longDescription: true, shortDescription: true } },
        },
        orderBy: [
            { sessionYear: "desc" },
            { createdAt: "desc" },
        ]
    });
}

export async function fetchExamPaperById(id: string): Promise<ExamPaperWithRelations | null> {
    return await prisma.examPaper.findUnique({
        where: { id },
        include: {
            diploma: { select: { longDescription: true } },
            division: { select: { longDescription: true } },
            grade: { select: { shortDescription: true } },
            teaching: { select: { longDescription: true } },
            curriculum: { select: { longDescription: true, shortDescription: true } },
        },
    });
}
