import type { PrismaClient } from "@prisma/client";
import type { HealthTrainingAuthorQuestion } from "@/core/questions/health-author-question.types";
import { compileHealthTrainingAuthorQuestion } from "../../../../src/core/questions/health-author-question-compiler";
import {
  resolveThemeIdsByQuestionStableId,
  type ThemeTitlesByQuestionStableId,
  type ThemeIdsByQuestionStableId,
} from "../../health-mock-exam-theme-ids";

type ColleSectionInput = {
  title: string;
  teachingElementKey: "CHIMIE" | "BIOCHIMIE" | "BIOLOGIE_CELLULAIRE";
  questions: HealthTrainingAuthorQuestion[];
};

type ColleInput = {
  code: string;
  title: string;
  description: string;
  durationSeconds: number;
  order: number;
  sections: ColleSectionInput[];
  themeIdsByQuestionStableId?: ThemeIdsByQuestionStableId;
  themeTitlesByQuestionStableId?: ThemeTitlesByQuestionStableId;
};

const normalize = (value: string | null | undefined) =>
  (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function findTeachingElement(courseUnit: any, key: ColleSectionInput["teachingElementKey"]) {
  const tests: Record<string, (s: string) => boolean> = {
    CHIMIE: (s) => s.includes("chimie") && !s.includes("biochimie"),
    BIOCHIMIE: (s) => s.includes("biochimie"),
    BIOLOGIE_CELLULAIRE: (s) => s.includes("biologie cellulaire") || s.includes("biologie-cellulaire"),
  };
  return courseUnit.teachingElements.find((te: any) => {
    const hay = [te.slug, te.code, te.title, te.name].map(normalize).join(" ");
    return tests[key](hay);
  });
}

export async function seedHealthColleUE14(prisma: PrismaClient, input: ColleInput) {
  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: { OR: [{ slug: "ue14" }, { slug: { startsWith: "ue14" } }], isActive: true },
    include: { teachingElements: true },
  });
  if (!courseUnit) throw new Error(`Impossible de trouver l'UE14 pour ${input.code}.`);

  const existing = await prisma.healthMockExam.findFirst({ where: { courseUnitId: courseUnit.id, slug: input.code.toLowerCase() } });
  if (existing) {
    await prisma.userHealthMockExamAttempt.deleteMany({ where: { mockExamId: existing.id } });
    await prisma.healthMockExam.delete({ where: { id: existing.id } });
  }

  let globalOrder = 0;
  const preparedSections = input.sections.map((section, sectionIndex) => {
    const te = findTeachingElement(courseUnit, section.teachingElementKey);
    if (!te) throw new Error(`Élément pédagogique ${section.teachingElementKey} introuvable pour ${input.code}.`);
    const compiled = section.questions.map((q) => compileHealthTrainingAuthorQuestion(q));
    const firstQuestion = globalOrder + 1;
    const questions = compiled.map((q, index) => {
      globalOrder += 1;
      const stableId = `${input.code.toLowerCase()}-q${String(globalOrder).padStart(2, "0")}`;
      return {
        stableId,
        slug: stableId,
        difficulty: (q.difficulty as "EASY" | "MEDIUM" | "HARD") ?? "MEDIUM",
        questionType: q.questionType ?? "mcq",
        question: q.question,
        questionDiagram: (q.questionDiagram as any) ?? undefined,
        choices: (q.choices as any) ?? [],
        answerFormat: q.answerFormat ?? "SINGLE",
        correctChoiceIndexes: q.correctChoiceIndexes ?? [],
        correctChoiceIndex: q.correctChoiceIndexes?.[0] ?? 0,
        answerPayload: (q.answerPayload as any) ?? undefined,
        explanation: q.explanation ?? "",
        choiceExplanations: (q.choiceExplanations as any) ?? [],
        order: index + 1,
        globalOrder,
        isPublished: true,
      };
    });
    return {
      teachingElementId: te.id,
      title: section.title,
      order: sectionIndex + 1,
      questionCount: questions.length,
      firstQuestion,
      lastQuestion: globalOrder,
      questions,
    };
  });
  const themeIdsByQuestionStableId = await resolveThemeIdsByQuestionStableId({
    prisma,
    themeIdsByQuestionStableId: input.themeIdsByQuestionStableId,
    themeTitlesByQuestionStableId: input.themeTitlesByQuestionStableId,
    stableIds: preparedSections.flatMap((section) =>
      section.questions.map((question) => question.stableId)
    ),
    contextLabel: `colle ${input.code.toLowerCase()}`,
    coverageMode: "empty-or-complete",
  });
  const sections = preparedSections.map((section) => ({
    ...section,
    questions: {
      create: section.questions.map(({ stableId, ...question }) => ({
        ...question,
        themeIds: themeIdsByQuestionStableId.get(stableId) ?? [],
      })),
    },
  }));

  const minutesCompatibility = Math.ceil(input.durationSeconds / 60);
  return prisma.healthMockExam.create({ data: {
    courseUnitId: courseUnit.id, type: "COLLE", title: input.title, slug: input.code.toLowerCase(),
    description: input.description,
    instructions: `Colle UE14 Reims — ${globalOrder} questions — ${input.durationSeconds / 60} min — Notation UNESS`,
    durationMinutes: minutesCompatibility,
    durationSeconds: input.durationSeconds,
    questionCount: globalOrder, version: 1, order: input.order, isPublished: true,
    sections: { create: sections },
  }});
}
