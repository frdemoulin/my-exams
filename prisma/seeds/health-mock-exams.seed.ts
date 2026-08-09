import path from "node:path";
import { existsSync } from "node:fs";

import type { Prisma, PrismaClient, QuizAnswerFormat, QuizDifficulty } from "@prisma/client";

import {
  assertHealthMockExamCanBePublished,
  type HealthMockExamValidationInput,
} from "@/core/health-mock-exam/health-mock-exam.validation";

import { reimsUe14MockExams } from "./data/health-mock-exams-reims-ue14";

export type HealthMockExamSeedQuestion = {
  slug: string;
  order: number;
  globalOrder: number;
  groupKey?: string;
  difficulty: QuizDifficulty;
  questionType?: string;
  answerFormat: QuizAnswerFormat;
  question: string;
  questionDiagram?: unknown;
  choices: unknown[];
  correctChoiceIndexes: number[];
  answerPayload?: Prisma.InputJsonValue;
  explanation: string;
  choiceExplanations: string[];
};

export type HealthMockExamSeedGroup = {
  key: string;
  order: number;
  title?: string;
  sharedStatement: string;
};

export type HealthMockExamSeedSection = {
  teachingElementSlug: string;
  title: string;
  order: number;
  questionCount: number;
  firstQuestion: number;
  lastQuestion: number;
  groups?: HealthMockExamSeedGroup[];
  questions: HealthMockExamSeedQuestion[];
};

export type HealthMockExamSeed = {
  institutionNameContains: string;
  programVersionSlug: string;
  courseUnitSlug: string;
  title: string;
  slug: string;
  description?: string;
  instructions?: string;
  durationMinutes: number;
  questionCount: number;
  version?: number;
  order: number;
  isPublished: boolean;
  sections: HealthMockExamSeedSection[];
};

function publicMediaExists(publicPath: string) {
  const publicDirectory = path.resolve(process.cwd(), "public");
  const resolvedPath = path.resolve(publicDirectory, `.${publicPath}`);

  return (
    resolvedPath.startsWith(`${publicDirectory}${path.sep}`) &&
    existsSync(resolvedPath)
  );
}

async function resolveCourseUnit(
  prisma: PrismaClient,
  seed: HealthMockExamSeed,
) {
  const institutions = await prisma.healthInstitution.findMany({
    where: {
      OR: [
        { name: { contains: seed.institutionNameContains, mode: "insensitive" } },
        { shortName: { contains: seed.institutionNameContains, mode: "insensitive" } },
      ],
    },
    select: { id: true, name: true },
  });

  if (institutions.length !== 1) {
    throw new Error(
      `Résolution de l'établissement ambiguë ou absente pour « ${seed.institutionNameContains} ».`,
    );
  }

  const programVersion = await prisma.healthProgramVersion.findUnique({
    where: {
      institutionId_slug: {
        institutionId: institutions[0].id,
        slug: seed.programVersionSlug,
      },
    },
    select: { id: true },
  });
  if (!programVersion) {
    throw new Error(`Maquette introuvable : ${seed.programVersionSlug}.`);
  }

  const courseUnit = await prisma.healthCourseUnit.findFirst({
    where: {
      programVersionId: programVersion.id,
      slug: seed.courseUnitSlug,
    },
    select: {
      id: true,
      slug: true,
      teachingElements: {
        select: { id: true, slug: true },
      },
    },
  });
  if (!courseUnit) {
    throw new Error(`UE introuvable : ${seed.courseUnitSlug}.`);
  }

  return courseUnit;
}

function buildValidationInput(
  seed: HealthMockExamSeed,
  courseUnit: {
    id: string;
    slug: string;
    teachingElements: Array<{ id: string; slug: string }>;
  },
): HealthMockExamValidationInput {
  return {
    courseUnitId: courseUnit.id,
    courseUnitSlug: courseUnit.slug,
    durationMinutes: seed.durationMinutes,
    questionCount: seed.questionCount,
    sections: seed.sections.map((section) => {
      const teachingElement = courseUnit.teachingElements.find(
        (element) => element.slug === section.teachingElementSlug,
      );
      if (!teachingElement) {
        throw new Error(`EC introuvable : ${section.teachingElementSlug}.`);
      }

      return {
        id: section.teachingElementSlug,
        teachingElementId: teachingElement.id,
        teachingElementSlug: teachingElement.slug,
        title: section.title,
        order: section.order,
        questionCount: section.questionCount,
        firstQuestion: section.firstQuestion,
        lastQuestion: section.lastQuestion,
        groups: (section.groups ?? []).map((group) => ({
          id: group.key,
          title: group.title ?? null,
          sharedStatement: group.sharedStatement,
          order: group.order,
        })),
        questions: section.questions.map((question) => ({
          id: question.slug,
          slug: question.slug,
          order: question.order,
          globalOrder: question.globalOrder,
          groupId: question.groupKey ?? null,
          isPublished: true,
          questionType: question.questionType ?? null,
          question: question.question,
          choices: question.choices,
          answerFormat: question.answerFormat,
          correctChoiceIndex: question.correctChoiceIndexes[0] ?? -1,
          correctChoiceIndexes: question.correctChoiceIndexes,
          answerPayload: question.answerPayload ?? null,
          explanation: question.explanation,
          choiceExplanations: question.choiceExplanations,
        })),
      };
    }),
  };
}

export async function seedHealthMockExam(prisma: PrismaClient, seed: HealthMockExamSeed) {
  const courseUnit = await resolveCourseUnit(prisma, seed);

  if (seed.isPublished) {
    assertHealthMockExamCanBePublished(buildValidationInput(seed, courseUnit), {
      mediaExists: publicMediaExists,
    });
  }

  const existingExam = await prisma.healthMockExam.findFirst({
    where: { courseUnitId: courseUnit.id, slug: seed.slug },
    select: {
      id: true,
      _count: { select: { attempts: true } },
    },
  });

  if (existingExam?._count.attempts) {
    throw new Error(
      `L'examen « ${seed.slug} » possède déjà des tentatives et ne peut plus être régénéré par seed.`,
    );
  }

  const exam = existingExam
    ? await prisma.healthMockExam.update({
        where: { id: existingExam.id },
        data: {
          title: seed.title,
          description: seed.description ?? null,
          instructions: seed.instructions ?? null,
          durationMinutes: seed.durationMinutes,
          questionCount: seed.questionCount,
          version: seed.version ?? 1,
          order: seed.order,
          isPublished: false,
        },
      })
    : await prisma.healthMockExam.create({
        data: {
          courseUnitId: courseUnit.id,
          title: seed.title,
          slug: seed.slug,
          description: seed.description ?? null,
          instructions: seed.instructions ?? null,
          durationMinutes: seed.durationMinutes,
          questionCount: seed.questionCount,
          version: seed.version ?? 1,
          order: seed.order,
          isPublished: false,
        },
      });

  const existingSections = await prisma.healthMockExamSection.findMany({
    where: { mockExamId: exam.id },
    select: { id: true },
  });
  const existingSectionIds = existingSections.map((section) => section.id);

  if (existingSectionIds.length > 0) {
    await prisma.healthMockExamQuestion.deleteMany({
      where: { examSectionId: { in: existingSectionIds } },
    });
    await prisma.healthMockExamQuestionGroup.deleteMany({
      where: { examSectionId: { in: existingSectionIds } },
    });
  }

  await prisma.healthMockExamSection.deleteMany({ where: { mockExamId: exam.id } });

  for (const sectionSeed of seed.sections) {
    const teachingElement = courseUnit.teachingElements.find(
      (element) => element.slug === sectionSeed.teachingElementSlug,
    );
    if (!teachingElement) {
      throw new Error(`EC introuvable : ${sectionSeed.teachingElementSlug}.`);
    }

    const section = await prisma.healthMockExamSection.create({
      data: {
        mockExamId: exam.id,
        teachingElementId: teachingElement.id,
        title: sectionSeed.title,
        order: sectionSeed.order,
        questionCount: sectionSeed.questionCount,
        firstQuestion: sectionSeed.firstQuestion,
        lastQuestion: sectionSeed.lastQuestion,
      },
      select: { id: true },
    });
    const groupsByKey = new Map<string, string>();

    for (const groupSeed of sectionSeed.groups ?? []) {
      const group = await prisma.healthMockExamQuestionGroup.create({
        data: {
          examSectionId: section.id,
          title: groupSeed.title ?? null,
          sharedStatement: groupSeed.sharedStatement,
          order: groupSeed.order,
        },
        select: { id: true },
      });
      groupsByKey.set(groupSeed.key, group.id);
    }

    await prisma.healthMockExamQuestion.createMany({
      data: sectionSeed.questions.map((question) => ({
        examSectionId: section.id,
        groupId: question.groupKey ? groupsByKey.get(question.groupKey) : undefined,
        slug: question.slug,
        difficulty: question.difficulty,
        questionType: question.questionType ?? "mcq",
        question: question.question,
        questionDiagram: question.questionDiagram as Prisma.InputJsonValue | undefined,
        choices: question.choices as Prisma.InputJsonValue,
        answerFormat: question.answerFormat,
        correctChoiceIndexes: question.correctChoiceIndexes,
        correctChoiceIndex: question.correctChoiceIndexes[0] ?? -1,
        answerPayload: question.answerPayload ?? undefined,
        explanation: question.explanation,
        choiceExplanations: question.choiceExplanations as Prisma.InputJsonValue,
        order: question.order,
        globalOrder: question.globalOrder,
        isPublished: true,
      })),
    });
  }

  if (seed.isPublished) {
    await prisma.healthMockExam.update({
      where: { id: exam.id },
      data: { isPublished: true },
    });
  }
}

export async function seedHealthMockExams(prisma: PrismaClient) {
  for (const seed of reimsUe14MockExams) {
    await seedHealthMockExam(prisma, seed);
  }
}
