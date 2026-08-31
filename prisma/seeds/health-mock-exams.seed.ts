import path from "node:path";
import { existsSync } from "node:fs";

import type { Prisma, PrismaClient, QuizAnswerFormat, QuizDifficulty } from "@prisma/client";

import {
  assertHealthMockExamCanBePublished,
  type HealthMockExamValidationInput,
} from "../../src/core/health-mock-exam/health-mock-exam.validation";

import { reimsUe14MockExams } from "./data/health-mock-exams-reims-ue14";
import {
  resolveThemeIdsByQuestionStableId,
  type ThemeIdsByQuestionStableId,
} from "./health-mock-exam-theme-ids";

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
  themeIdsByQuestionStableId?: ThemeIdsByQuestionStableId;
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
  const themeIdsByQuestionStableId = await resolveThemeIdsByQuestionStableId({
    prisma,
    themeIdsByQuestionStableId: seed.themeIdsByQuestionStableId,
    stableIds: seed.sections.flatMap((section) =>
      section.questions.map((question) => question.slug)
    ),
    contextLabel: `examen blanc ${seed.slug}`,
  });

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
          type: "MOCK_EXAM",
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
          type: "MOCK_EXAM",
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
        themeIds:
          themeIdsByQuestionStableId.get(question.slug.toLowerCase()) ?? [],
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

export type HealthMockExamSeederAction =
  | { action: "CREATE" }
  | { action: "REGENERATE"; existingExamId: string }
  | { action: "PRESERVE"; existingExamId: string; attemptsCount: number };

export function determineMockExamSeederAction(
  existingExam: {
    id: string;
    _count?: { attempts: number };
  } | null | undefined,
): HealthMockExamSeederAction {
  if (!existingExam) {
    return { action: "CREATE" };
  }
  if (existingExam._count && existingExam._count.attempts > 0) {
    return {
      action: "PRESERVE",
      existingExamId: existingExam.id,
      attemptsCount: existingExam._count.attempts,
    };
  }
  return { action: "REGENERATE", existingExamId: existingExam.id };
}

export function assertHealthMockExamMatchesSeed(
  dbExam: {
    type?: string;
    title: string;
    slug: string;
    description: string | null;
    instructions: string | null;
    durationMinutes: number;
    questionCount: number;
    version?: number;
    order: number;
    isPublished: boolean;
    sections: Array<{
      title: string;
      order: number;
      questionCount: number;
      firstQuestion: number;
      lastQuestion: number;
      teachingElement: { slug: string };
      questionGroups: Array<{
        title: string | null;
        sharedStatement: string;
        order: number;
        questions?: Array<{ slug: string }>;
      }>;
      questions: Array<{
        slug: string;
        order: number;
        globalOrder: number;
        difficulty: QuizDifficulty;
        questionType?: string | null;
        answerFormat?: QuizAnswerFormat | null;
        question: string;
        questionDiagram?: unknown;
        choices: unknown;
        correctChoiceIndex?: number;
        correctChoiceIndexes: number[];
        answerPayload?: unknown;
        explanation: string;
        choiceExplanations: unknown;
        isPublished?: boolean;
        themeIds: string[];
      }>;
    }>;
    _count?: { attempts: number };
  },
  seed: HealthMockExamSeed,
  themeIdsByQuestionStableId: Map<string, string[]>,
) {
  const reasons: string[] = [];

  if (dbExam.type !== undefined && dbExam.type !== "MOCK_EXAM") {
    reasons.push(`Type mismatch : attendu « MOCK_EXAM », reçu « ${dbExam.type} »`);
  }
  if (dbExam.version !== undefined && dbExam.version !== (seed.version ?? 1)) {
    reasons.push(`Version mismatch : attendu ${seed.version ?? 1}, reçu ${dbExam.version}`);
  }
  if (dbExam.title !== seed.title) reasons.push(`Titre mismatch : attendu « ${seed.title} », reçu « ${dbExam.title} »`);
  if (dbExam.slug !== seed.slug) reasons.push(`Slug mismatch : attendu « ${seed.slug} », reçu « ${dbExam.slug} »`);
  if (dbExam.durationMinutes !== seed.durationMinutes) reasons.push(`durationMinutes mismatch : attendu ${seed.durationMinutes}, reçu ${dbExam.durationMinutes}`);
  if (dbExam.questionCount !== seed.questionCount) reasons.push(`questionCount mismatch : attendu ${seed.questionCount}, reçu ${dbExam.questionCount}`);
  if (dbExam.order !== seed.order) reasons.push(`order mismatch : attendu ${seed.order}, reçu ${dbExam.order}`);
  if (dbExam.isPublished !== seed.isPublished) reasons.push(`isPublished mismatch : attendu ${seed.isPublished}, reçu ${dbExam.isPublished}`);
  if ((dbExam.description ?? null) !== (seed.description ?? null)) reasons.push(`description mismatch`);
  if ((dbExam.instructions ?? null) !== (seed.instructions ?? null)) reasons.push(`instructions mismatch`);

  if (dbExam.sections.length !== seed.sections.length) {
    reasons.push(`Nombre de sections mismatch : attendu ${seed.sections.length}, reçu ${dbExam.sections.length}`);
    throw new Error(
      `L'examen « ${seed.slug} » possède ${dbExam._count?.attempts ?? "des"} tentative(s) mais diverge du seed canonique :\n- ${reasons.join("\n- ")}`,
    );
  }

  const sortedDbSections = [...dbExam.sections].sort((a, b) => a.order - b.order);
  const sortedSeedSections = [...seed.sections].sort((a, b) => a.order - b.order);

  for (let i = 0; i < sortedSeedSections.length; i++) {
    const dbSec = sortedDbSections[i];
    const seedSec = sortedSeedSections[i];
    const secPrefix = `Section ${i + 1} (${seedSec.teachingElementSlug})`;

    if (dbSec.title !== seedSec.title) reasons.push(`${secPrefix} titre mismatch : attendu « ${seedSec.title} », reçu « ${dbSec.title} »`);
    if (dbSec.order !== seedSec.order) reasons.push(`${secPrefix} order mismatch : attendu ${seedSec.order}, reçu ${dbSec.order}`);
    if (dbSec.teachingElement.slug !== seedSec.teachingElementSlug) reasons.push(`${secPrefix} EC mismatch : attendu « ${seedSec.teachingElementSlug} », reçu « ${dbSec.teachingElement.slug} »`);
    if (dbSec.questionCount !== seedSec.questionCount) reasons.push(`${secPrefix} questionCount mismatch : attendu ${seedSec.questionCount}, reçu ${dbSec.questionCount}`);
    if (dbSec.firstQuestion !== seedSec.firstQuestion) reasons.push(`${secPrefix} firstQuestion mismatch : attendu ${seedSec.firstQuestion}, reçu ${dbSec.firstQuestion}`);
    if (dbSec.lastQuestion !== seedSec.lastQuestion) reasons.push(`${secPrefix} lastQuestion mismatch : attendu ${seedSec.lastQuestion}, reçu ${dbSec.lastQuestion}`);
    if (dbSec.questions.length !== seedSec.questions.length) reasons.push(`${secPrefix} nombre de questions mismatch : attendu ${seedSec.questions.length}, reçu ${dbSec.questions.length}`);

    const seedGroups = seedSec.groups ?? [];
    const sortedDbGroups = [...dbSec.questionGroups].sort((a, b) => a.order - b.order);
    const sortedSeedGroups = [...seedGroups].sort((a, b) => a.order - b.order);

    if (sortedDbGroups.length !== sortedSeedGroups.length) {
      reasons.push(`${secPrefix} nombre de groupes mismatch : attendu ${sortedSeedGroups.length}, reçu ${sortedDbGroups.length}`);
    } else {
      for (let g = 0; g < sortedSeedGroups.length; g++) {
        const dbG = sortedDbGroups[g];
        const seedG = sortedSeedGroups[g];
        if ((dbG.title ?? null) !== (seedG.title ?? null)) reasons.push(`${secPrefix} Groupe ${seedG.key} titre mismatch`);
        if (dbG.sharedStatement !== seedG.sharedStatement) reasons.push(`${secPrefix} Groupe ${seedG.key} énoncé partagé mismatch`);
        if (dbG.order !== seedG.order) reasons.push(`${secPrefix} Groupe ${seedG.key} order mismatch`);

        // Check group question membership (sorted slugs)
        const expectedQuestionSlugs = seedSec.questions
          .filter((q) => q.groupKey === seedG.key)
          .map((q) => q.slug.toLowerCase())
          .sort();
        const dbQuestionSlugs = (dbG.questions ?? [])
          .map((q) => q.slug.toLowerCase())
          .sort();

        if (JSON.stringify(dbQuestionSlugs) !== JSON.stringify(expectedQuestionSlugs)) {
          reasons.push(
            `${secPrefix} Groupe ${seedG.key} questions rattachées mismatch : attendu [${expectedQuestionSlugs.join(",")}], reçu [${dbQuestionSlugs.join(",")}]`,
          );
        }
      }
    }

    const sortedDbQ = [...dbSec.questions].sort((a, b) => a.order - b.order);
    const sortedSeedQ = [...seedSec.questions].sort((a, b) => a.order - b.order);

    for (let k = 0; k < sortedSeedQ.length; k++) {
      const dbQ = sortedDbQ[k];
      const seedQ = sortedSeedQ[k];
      if (!dbQ) {
        reasons.push(`${secPrefix} Question ${seedQ.slug} absente en BDD`);
        continue;
      }
      const qPrefix = `Question ${seedQ.slug} (globalOrder ${seedQ.globalOrder})`;

      if (dbQ.slug !== seedQ.slug) reasons.push(`${qPrefix} slug mismatch : attendu ${seedQ.slug}, reçu ${dbQ.slug}`);
      if (dbQ.order !== seedQ.order) reasons.push(`${qPrefix} order mismatch : attendu ${seedQ.order}, reçu ${dbQ.order}`);
      if (dbQ.globalOrder !== seedQ.globalOrder) reasons.push(`${qPrefix} globalOrder mismatch : attendu ${seedQ.globalOrder}, reçu ${dbQ.globalOrder}`);
      if (dbQ.difficulty !== seedQ.difficulty) reasons.push(`${qPrefix} difficulty mismatch : attendu ${seedQ.difficulty}, reçu ${dbQ.difficulty}`);
      if (dbQ.questionType !== (seedQ.questionType ?? "mcq")) reasons.push(`${qPrefix} questionType mismatch : attendu ${seedQ.questionType ?? "mcq"}, reçu ${dbQ.questionType}`);
      if (dbQ.answerFormat !== seedQ.answerFormat) reasons.push(`${qPrefix} answerFormat mismatch : attendu ${seedQ.answerFormat}, reçu ${dbQ.answerFormat}`);
      if (dbQ.question !== seedQ.question) reasons.push(`${qPrefix} énoncé mismatch`);
      if ((dbQ.explanation ?? "") !== (seedQ.explanation ?? "")) reasons.push(`${qPrefix} explanation mismatch`);

      if (dbQ.isPublished !== undefined && dbQ.isPublished !== true) {
        reasons.push(`${qPrefix} isPublished mismatch : attendu true, reçu ${dbQ.isPublished}`);
      }
      const expectedCorrectIndex = seedQ.correctChoiceIndexes[0] ?? -1;
      if (dbQ.correctChoiceIndex !== undefined && dbQ.correctChoiceIndex !== expectedCorrectIndex) {
        reasons.push(`${qPrefix} correctChoiceIndex mismatch : attendu ${expectedCorrectIndex}, reçu ${dbQ.correctChoiceIndex}`);
      }

      if (JSON.stringify(dbQ.choices) !== JSON.stringify(seedQ.choices)) {
        reasons.push(`${qPrefix} choices mismatch`);
      }
      if (JSON.stringify(dbQ.correctChoiceIndexes) !== JSON.stringify(seedQ.correctChoiceIndexes)) {
        reasons.push(`${qPrefix} correctChoiceIndexes mismatch`);
      }
      if (JSON.stringify(dbQ.choiceExplanations) !== JSON.stringify(seedQ.choiceExplanations)) {
        reasons.push(`${qPrefix} choiceExplanations mismatch`);
      }
      if (JSON.stringify(dbQ.questionDiagram ?? null) !== JSON.stringify(seedQ.questionDiagram ?? null)) {
        reasons.push(`${qPrefix} questionDiagram mismatch`);
      }
      if (JSON.stringify(dbQ.answerPayload ?? null) !== JSON.stringify(seedQ.answerPayload ?? null)) {
        reasons.push(`${qPrefix} answerPayload mismatch`);
      }

      const expectedThemeIds = themeIdsByQuestionStableId.get(seedQ.slug.toLowerCase()) ?? [];
      const dbThemesSorted = [...dbQ.themeIds].sort();
      const expectedThemesSorted = [...expectedThemeIds].sort();
      if (JSON.stringify(dbThemesSorted) !== JSON.stringify(expectedThemesSorted)) {
        reasons.push(`${qPrefix} themeIds mismatch : attendu [${expectedThemesSorted.join(",")}], reçu [${dbThemesSorted.join(",")}]`);
      }
    }
  }

  if (reasons.length > 0) {
    throw new Error(
      `L'examen « ${seed.slug} » en base de données possède ${dbExam._count?.attempts ?? "des"} tentative(s) mais diverge du seed canonique :\n- ${reasons.join("\n- ")}`,
    );
  }
}

export async function seedHealthMockExams(prisma: PrismaClient) {
  for (const seed of reimsUe14MockExams) {
    const courseUnit = await resolveCourseUnit(prisma, seed);
    const existingExam = await prisma.healthMockExam.findFirst({
      where: { courseUnitId: courseUnit.id, slug: seed.slug },
      include: {
        sections: {
          include: {
            teachingElement: { select: { slug: true } },
            questionGroups: {
              include: { questions: { select: { slug: true } } },
            },
            questions: true,
          },
        },
        _count: { select: { attempts: true } },
      },
    });

    const action = determineMockExamSeederAction(existingExam);

    if (action.action === "PRESERVE") {
      const themeIdsByQuestionStableId = await resolveThemeIdsByQuestionStableId({
        prisma,
        themeIdsByQuestionStableId: seed.themeIdsByQuestionStableId,
        stableIds: seed.sections.flatMap((section) =>
          section.questions.map((question) => question.slug)
        ),
        contextLabel: `examen blanc ${seed.slug}`,
      });

      assertHealthMockExamMatchesSeed(
        existingExam!,
        seed,
        themeIdsByQuestionStableId,
      );

      console.log(
        `L'examen « ${seed.slug} » possède ${action.attemptsCount} tentative(s) et est strictement conforme au seed canonique ; conservation sans régénération.`,
      );
      continue;
    }

    await seedHealthMockExam(prisma, seed);
  }
}
