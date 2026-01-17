import prisma from "@/lib/db/prisma";

export type UpsertUserActivityInput = {
    userId: string;
    examPaperId?: string | null;
    exerciseId?: string | null;
    subjectId?: string | null;
    sessionYear?: number | null;
    currentGoalLabel?: string | null;
};

export const upsertUserActivity = async (input: UpsertUserActivityInput) => {
    const {
        userId,
        examPaperId,
        exerciseId,
        subjectId,
        sessionYear,
        currentGoalLabel,
    } = input;

    const updateData: Record<string, string | number | null> = {};
    if (examPaperId !== undefined) updateData.lastExamPaperId = examPaperId;
    if (exerciseId !== undefined) updateData.lastExerciseId = exerciseId;
    if (subjectId !== undefined) updateData.lastSubjectId = subjectId;
    if (sessionYear !== undefined) updateData.lastSessionYear = sessionYear;
    if (currentGoalLabel !== undefined) updateData.currentGoalLabel = currentGoalLabel;

    if (Object.keys(updateData).length === 0) {
        return null;
    }

    return prisma.userActivity.upsert({
        where: { userId },
        update: updateData,
        create: {
            userId,
            lastExamPaperId: examPaperId ?? null,
            lastExerciseId: exerciseId ?? null,
            lastSubjectId: subjectId ?? null,
            lastSessionYear: sessionYear ?? null,
            currentGoalLabel: currentGoalLabel ?? null,
        },
    });
};
