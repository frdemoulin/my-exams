import prisma from "@/lib/db/prisma";

export async function fetchDashboardStats() {
    const [
        diplomasCount,
        divisionsCount,
        gradesCount,
        subjectsCount,
        coursesCount,
        curriculumsCount,
        activeCurriculumsCount,
        themesCount,
        examinationCentersCount,
        usersCount,
    ] = await Promise.all([
        prisma.diploma.count(),
        prisma.division.count(),
        prisma.grade.count(),
        prisma.subject.count(),
        prisma.teaching.count(),
        prisma.curriculum.count(),
        prisma.curriculum.count({ where: { isActive: true } }),
        prisma.theme.count(),
        prisma.examinationCenter.count(),
        prisma.user.count(),
    ]);

    return {
        diplomas: diplomasCount,
        divisions: divisionsCount,
        grades: gradesCount,
        subjects: subjectsCount,
        courses: coursesCount,
        curriculums: {
            total: curriculumsCount,
            active: activeCurriculumsCount,
            inactive: curriculumsCount - activeCurriculumsCount,
        },
        themes: themesCount,
        examinationCenters: examinationCentersCount,
        users: usersCount,
    };
}

export async function fetchRecentCurriculums() {
    return await prisma.curriculum.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            longDescription: true,
            startDate: true,
            isActive: true,
            createdAt: true,
        },
    });
}

export async function fetchRecentTeachings() {
    return await prisma.teaching.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: {
            grade: {
                select: {
                    shortDescription: true,
                },
            },
            subject: {
                select: {
                    shortDescription: true,
                },
            },
        },
    });
}
