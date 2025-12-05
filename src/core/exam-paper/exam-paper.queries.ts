import prisma from "@/lib/db/prisma";
import { ExamPaper } from "@prisma/client";

export type ExamPaperWithRelations = (ExamPaper & {
    source?: 'OFFICIEL' | 'APMEP' | 'LABOLYCEE' | 'AUTRE';
    sourceUrl?: string | null;
}) & {
    diploma: { longDescription: string };
    division: { longDescription: string };
    grade: { shortDescription: string };
    teaching: { 
        longDescription: string;
        subject: { shortDescription: string };
    };
    curriculum: { longDescription: string; shortDescription: string | null };
    examinationCenters?: Array<{ id: string; description: string }>;
    themes: Array<{
        id: string;
        shortDescription: string;
        longDescription: string;
    }>;
    corrections: Array<{
        id: string;
        source: string;
        url: string;
        type: string;
        quality: number | null;
    }>;
    _count?: {
        exercises: number;
    };
};

export async function fetchExamPapers(): Promise<ExamPaperWithRelations[]> {
    const examPapers = await prisma.examPaper.findMany({
        include: {
            diploma: { select: { longDescription: true } },
            division: { select: { longDescription: true } },
            grade: { select: { shortDescription: true } },
            teaching: { 
                select: { 
                    longDescription: true,
                    subject: { select: { shortDescription: true } }
                } 
            },
            curriculum: { select: { longDescription: true, shortDescription: true } },
            examinationCenters: { select: { id: true, description: true } },
            corrections: {
                select: {
                    id: true,
                    source: true,
                    url: true,
                    type: true,
                    quality: true,
                }
            },
            _count: {
                select: { exercises: true }
            }
        },
        orderBy: [
            { sessionYear: "desc" },
            { createdAt: "desc" },
        ]
    });

    // Récupérer tous les thèmes
    const allThemeIds = examPapers.flatMap(p => p.themeIds);
    const uniqueThemeIds = [...new Set(allThemeIds)];
    
    const themes = await prisma.theme.findMany({
        where: { id: { in: uniqueThemeIds } },
        select: {
            id: true,
            shortDescription: true,
            longDescription: true,
        }
    });

    const themesById = new Map(themes.map(t => [t.id, t]));

    return examPapers.map(paper => ({
        ...paper,
        themes: paper.themeIds
            .map(id => themesById.get(id))
            .filter((t): t is NonNullable<typeof t> => t !== undefined)
            .sort((a, b) => a.shortDescription.localeCompare(b.shortDescription))
    }));
}

export async function fetchExamPapersForSearch(): Promise<ExamPaperWithRelations[]> {
    const examPapers = await prisma.examPaper.findMany({
        where: {
            enrichmentStatus: "completed", // Ne montrer que les sujets enrichis
        },
        include: {
            diploma: { select: { longDescription: true } },
            division: { select: { longDescription: true } },
            grade: { select: { shortDescription: true } },
            teaching: { 
                select: { 
                    longDescription: true,
                    subject: { select: { shortDescription: true } }
                } 
            },
            curriculum: { select: { longDescription: true, shortDescription: true } },
            examinationCenters: { select: { id: true, description: true } },
            corrections: {
                select: {
                    id: true,
                    source: true,
                    url: true,
                    type: true,
                    quality: true,
                },
                orderBy: {
                    quality: "desc" // Meilleures corrections en premier
                }
            }
        },
        orderBy: [
            { sessionYear: "desc" },
            { createdAt: "desc" },
        ]
    });

    // Récupérer tous les thèmes en une seule requête
    const allThemeIds = examPapers.flatMap(p => p.themeIds);
    const uniqueThemeIds = [...new Set(allThemeIds)];
    
    const themes = await prisma.theme.findMany({
        where: { id: { in: uniqueThemeIds } },
        select: {
            id: true,
            shortDescription: true,
            longDescription: true,
        }
    });

    const themesById = new Map(themes.map(t => [t.id, t]));

    // Ajouter les thèmes à chaque exam paper
    return examPapers.map(paper => ({
        ...paper,
        themes: paper.themeIds
            .map(id => themesById.get(id))
            .filter((t): t is NonNullable<typeof t> => t !== undefined)
            .sort((a, b) => a.shortDescription.localeCompare(b.shortDescription))
    }));
}

export async function fetchExamPaperById(id: string): Promise<ExamPaperWithRelations | null> {
    const paper = await prisma.examPaper.findUnique({
        where: { id },
        include: {
            diploma: { select: { longDescription: true } },
            division: { select: { longDescription: true } },
            grade: { select: { shortDescription: true } },
            teaching: { 
                select: { 
                    longDescription: true,
                    subject: { select: { shortDescription: true } }
                } 
            },
            curriculum: { select: { longDescription: true, shortDescription: true } },
            examinationCenters: { select: { id: true, description: true } },
            corrections: {
                select: {
                    id: true,
                    source: true,
                    url: true,
                    type: true,
                    quality: true,
                }
            }
        },
    });

    if (!paper) return null;

    // Récupérer les thèmes
    const themes = await prisma.theme.findMany({
        where: { id: { in: paper.themeIds } },
        select: {
            id: true,
            shortDescription: true,
            longDescription: true,
        },
        orderBy: {
            shortDescription: "asc"
        }
    });

    return {
        ...paper,
        themes
    };
}
