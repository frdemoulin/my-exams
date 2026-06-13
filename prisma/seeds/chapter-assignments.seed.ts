import { PrismaClient } from "@prisma/client";

export async function seedChapterAssignments(prisma: PrismaClient) {
  const chapters = await prisma.chapter.findMany({
    select: {
      id: true,
      subjectId: true,
      vertical: true,
      order: true,
      isActive: true,
      isPublished: true,
    },
  });

  let updatedChapterCount = 0;
  let createdAssignmentCount = 0;
  let updatedAssignmentCount = 0;

  for (const chapter of chapters) {
    if (!chapter.vertical) {
      await prisma.chapter.update({
        where: { id: chapter.id },
        data: { vertical: "SECONDARY" },
      });
      updatedChapterCount++;
    }

    const canonicalAssignment = await prisma.chapterAssignment.findFirst({
      where: {
        chapterId: chapter.id,
        contextType: "SUBJECT",
      },
      select: {
        id: true,
      },
    });

    const assignmentData = {
      chapterId: chapter.id,
      vertical: (chapter.vertical ?? "SECONDARY") as
        | "SECONDARY"
        | "BTS"
        | "HEALTH"
        | "COMMON",
      contextType: "SUBJECT" as const,
      contextId: chapter.subjectId,
      titleOverride: null,
      shortTitleOverride: null,
      slugOverride: null,
      descriptionOverride: null,
      order: chapter.order,
      coverageStatus: "STRUCTURE_ONLY" as const,
      sourceUrl: null,
      sourceLabel: null,
      sourceCheckedAt: null,
      isActive: chapter.isActive,
      isPublished: chapter.isPublished,
    };

    if (canonicalAssignment) {
      await prisma.chapterAssignment.update({
        where: { id: canonicalAssignment.id },
        data: assignmentData,
      });
      updatedAssignmentCount++;
      continue;
    }

    await prisma.chapterAssignment.create({
      data: assignmentData,
    });
    createdAssignmentCount++;
  }

  console.log(
    `   ✓ ${updatedChapterCount} chapitres corrigés, ${createdAssignmentCount} rattachements créés, ${updatedAssignmentCount} rattachements mis à jour`
  );
}
