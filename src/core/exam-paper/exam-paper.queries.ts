import prisma from "@/lib/db/prisma";
import { ExamPaper } from "@prisma/client";

export type ExamPaperWithRelations = ExamPaper & {
    diploma: { longDescription: string; shortDescription?: string | null };
    division: { longDescription: string; shortDescription?: string | null } | null;
    grade: { shortDescription: string; longDescription?: string | null };
    teaching: { 
        longDescription: string;
        shortDescription?: string | null;
        subjectId?: string;
        subject: { shortDescription: string; longDescription?: string | null };
    };
    curriculum: { longDescription: string; shortDescription: string | null } | null;
    examinationCenters?: Array<{ id: string; description: string }>;
    themes: Array<{
        id: string;
        shortDescription: string | null;
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
    const allCenterIds = examPapers.flatMap(p => p.examinationCenterIds || []);
    const uniqueCenterIds = [...new Set(allCenterIds)];
    
    const themes = await prisma.theme.findMany({
        where: { id: { in: uniqueThemeIds } },
        select: {
            id: true,
            shortDescription: true,
            longDescription: true,
        }
    });
    const centers = await prisma.examinationCenter.findMany({
        where: { id: { in: uniqueCenterIds } },
        select: { id: true, description: true }
    });
    const centersById = new Map(centers.map(c => [c.id, c]));

    const themesById = new Map(themes.map(t => [t.id, t]));

    return examPapers.map(paper => ({
        ...paper,
        examinationCenters: (paper.examinationCenterIds || [])
            .map(id => centersById.get(id))
            .filter((c): c is NonNullable<typeof c> => c !== undefined),
        themes: paper.themeIds
            .map(id => themesById.get(id))
            .filter((t): t is NonNullable<typeof t> => t !== undefined)
            .sort((a, b) => (a.shortDescription ?? a.longDescription).localeCompare(b.shortDescription ?? b.longDescription))
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
    const allCenterIds = examPapers.flatMap(p => p.examinationCenterIds || []);
    const uniqueCenterIds = [...new Set(allCenterIds)];
    
    const themes = await prisma.theme.findMany({
        where: { id: { in: uniqueThemeIds } },
        select: {
            id: true,
            shortDescription: true,
            longDescription: true,
        }
    });
    const centers = await prisma.examinationCenter.findMany({
        where: { id: { in: uniqueCenterIds } },
        select: { id: true, description: true },
    });

    const themesById = new Map(themes.map(t => [t.id, t]));
    const centersById = new Map(centers.map(c => [c.id, c]));

    // Ajouter les thèmes à chaque exam paper
    return examPapers.map(paper => ({
        ...paper,
        examinationCenters: (paper.examinationCenterIds || [])
            .map(id => centersById.get(id))
            .filter((c): c is NonNullable<typeof c> => c !== undefined),
        themes: paper.themeIds
            .map(id => themesById.get(id))
            .filter((t): t is NonNullable<typeof t> => t !== undefined)
            .sort((a, b) => (a.shortDescription ?? a.longDescription).localeCompare(b.shortDescription ?? b.longDescription))
    }));
}

export async function fetchExamPaperById(id: string): Promise<ExamPaperWithRelations | null> {
    if (!/^[a-f0-9]{24}$/i.test(id)) {
        return null;
    }

    const paper = await prisma.examPaper.findUnique({
        where: { id },
        include: {
            diploma: { select: { longDescription: true, shortDescription: true } },
            division: { select: { longDescription: true, shortDescription: true } },
            grade: { select: { shortDescription: true, longDescription: true } },
            teaching: { 
                select: { 
                    longDescription: true,
                    shortDescription: true,
                    subjectId: true,
                    subject: { select: { shortDescription: true, longDescription: true } }
                } 
            },
            curriculum: { select: { longDescription: true, shortDescription: true } },
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
    const centers = paper.examinationCenterIds?.length
        ? await prisma.examinationCenter.findMany({
            where: { id: { in: paper.examinationCenterIds } },
            select: { id: true, description: true },
          })
        : [];

    return {
        ...paper,
        examinationCenters: centers,
        themes
    };
}

export type DiplomaNavigationItem = {
    id: string;
    longDescription: string;
    shortDescription: string;
};

export type SubjectNavigationItem = {
    id: string;
    longDescription: string;
    shortDescription: string;
};

export type ExamPaperNavigationItem = {
    id: string;
    label: string;
    sessionYear: number;
    subjectUrl: string | null;
    domains: string[];
    exerciseDomains: Array<{
        exerciseNumber: number;
        label: string | null;
        domains: string[];
    }>;
    diploma: {
        longDescription: string;
        shortDescription: string;
    };
    teaching: {
        longDescription: string;
        subject: {
            longDescription: string;
            shortDescription: string;
        };
    };
    corrections: Array<{
        id: string;
        source: string;
        url: string;
        type: string;
        quality: number | null;
    }>;
};

export async function fetchActiveDiplomasWithExamPapers(): Promise<DiplomaNavigationItem[]> {
    return await prisma.diploma.findMany({
        where: {
            isActive: true,
            examPapers: {
                some: {
                    teaching: {
                        isActive: true,
                        subject: { isActive: true },
                    },
                },
            },
        },
        select: {
            id: true,
            longDescription: true,
            shortDescription: true,
        },
        orderBy: { longDescription: "asc" },
    });
}

export async function fetchActiveSubjectsByDiplomaId(diplomaId: string): Promise<SubjectNavigationItem[]> {
    return await prisma.subject.findMany({
        where: {
            isActive: true,
            teachings: {
                some: {
                    isActive: true,
                    examPapers: {
                        some: {
                            diplomaId,
                            diploma: { isActive: true },
                        },
                    },
                },
            },
        },
        select: {
            id: true,
            longDescription: true,
            shortDescription: true,
        },
        orderBy: { longDescription: "asc" },
    });
}

export async function fetchSessionYearsByDiplomaAndSubject(
    diplomaId: string,
    subjectId: string
): Promise<number[]> {
    const sessions = await prisma.examPaper.findMany({
        where: {
            diplomaId,
            diploma: { isActive: true },
            teaching: {
                subjectId,
                isActive: true,
                subject: { isActive: true },
            },
        },
        select: { sessionYear: true },
        distinct: ["sessionYear"],
        orderBy: { sessionYear: "desc" },
    });

    return sessions.map((paper) => paper.sessionYear);
}

export async function fetchExamPapersByScope(params: {
    diplomaId: string;
    subjectId: string;
    sessionYear: number;
}): Promise<ExamPaperNavigationItem[]> {
    const { diplomaId, subjectId, sessionYear } = params;

    const examPapers = await prisma.examPaper.findMany({
        where: {
            diplomaId,
            sessionYear,
            diploma: { isActive: true },
            teaching: {
                subjectId,
                isActive: true,
                subject: { isActive: true },
            },
        },
        select: {
            id: true,
            label: true,
            sessionYear: true,
            subjectUrl: true,
            themeIds: true,
            diploma: {
                select: {
                    longDescription: true,
                    shortDescription: true,
                },
            },
            teaching: {
                select: {
                    longDescription: true,
                    subject: {
                        select: {
                            longDescription: true,
                            shortDescription: true,
                        },
                    },
                },
            },
            corrections: {
                select: {
                    id: true,
                    source: true,
                    url: true,
                    type: true,
                    quality: true,
                },
                orderBy: {
                    quality: "desc",
                },
            },
        },
        orderBy: [
            { sessionDay: "asc" },
            { label: "asc" },
        ],
    });

    if (examPapers.length === 0) {
        return [];
    }

    const exercises = await prisma.exercise.findMany({
        where: {
            examPaperId: { in: examPapers.map((paper) => paper.id) },
        },
        select: {
            examPaperId: true,
            exerciseNumber: true,
            title: true,
            label: true,
            themeIds: true,
        },
    });

    const themeIdsFromExercises = exercises.flatMap((exercise) => exercise.themeIds);
    const themeIdsFromPapers = examPapers.flatMap((paper) => paper.themeIds);
    const themeIds = [...new Set([...themeIdsFromExercises, ...themeIdsFromPapers])];
    if (themeIds.length === 0) {
        return examPapers.map(({ themeIds: _themeIds, ...paper }) => ({
            ...paper,
            domains: [],
            exerciseDomains: [],
        }));
    }

    const themes = await prisma.theme.findMany({
        where: {
            id: { in: themeIds },
        },
        select: {
            id: true,
            domain: {
                select: {
                    id: true,
                    longDescription: true,
                    shortDescription: true,
                    order: true,
                },
            },
        },
    });

    const domainByThemeId = new Map(
        themes.map((theme) => [theme.id, theme.domain])
    );

    type DomainInfo = {
        id: string;
        longDescription: string;
        shortDescription: string;
        order: number | null;
    };

    const buildDomainMap = (themeIds: string[]) => {
        const domainMap = new Map<string, DomainInfo>();
        themeIds.forEach((themeId) => {
            const domain = domainByThemeId.get(themeId);
            if (!domain) return;
            domainMap.set(domain.id, domain);
        });
        return domainMap;
    };

    const sortDomainLabels = (domainMap: Map<string, DomainInfo>) =>
        Array.from(domainMap.values())
            .sort((a, b) => {
                const orderA = a.order ?? Number.POSITIVE_INFINITY;
                const orderB = b.order ?? Number.POSITIVE_INFINITY;
                if (orderA !== orderB) return orderA - orderB;
                return a.longDescription.localeCompare(b.longDescription, "fr", { sensitivity: "base" });
            })
            .map((domain) => domain.longDescription);

    const exercisesByPaperId = new Map<string, typeof exercises>();
    exercises.forEach((exercise) => {
        const existing = exercisesByPaperId.get(exercise.examPaperId) ?? [];
        existing.push(exercise);
        exercisesByPaperId.set(exercise.examPaperId, existing);
    });

    const exerciseDomainsByPaperId = new Map<
        string,
        Array<{ exerciseNumber: number; label: string | null; domains: string[] }>
    >();
    const domainsByPaperId = new Map<string, Map<string, DomainInfo>>();

    exercisesByPaperId.forEach((paperExercises, paperId) => {
        const aggregatedDomainMap = new Map<string, DomainInfo>();
        const sortedExercises = [...paperExercises].sort(
            (a, b) => a.exerciseNumber - b.exerciseNumber
        );

        const exerciseDomains = sortedExercises.map((exercise) => {
            const domainMap = buildDomainMap(exercise.themeIds);
            domainMap.forEach((domain, domainId) => {
                aggregatedDomainMap.set(domainId, domain);
            });

            return {
                exerciseNumber: exercise.exerciseNumber,
                label: exercise.title ?? exercise.label ?? null,
                domains: sortDomainLabels(domainMap),
            };
        });

        exerciseDomainsByPaperId.set(paperId, exerciseDomains);
        domainsByPaperId.set(paperId, aggregatedDomainMap);
    });

    const domainLabelsByPaperId = new Map<string, string[]>();
    examPapers.forEach((paper) => {
        const existingDomainMap = domainsByPaperId.get(paper.id);
        let domainMap = existingDomainMap;

        if (!domainMap || domainMap.size === 0) {
            domainMap = buildDomainMap(paper.themeIds);
        }

        domainLabelsByPaperId.set(
            paper.id,
            sortDomainLabels(domainMap)
        );
    });

    return examPapers.map(({ themeIds: _themeIds, ...paper }) => ({
        ...paper,
        domains: domainLabelsByPaperId.get(paper.id) ?? [],
        exerciseDomains: exerciseDomainsByPaperId.get(paper.id) ?? [],
    }));
}
