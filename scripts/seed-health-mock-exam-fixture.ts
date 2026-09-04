import {
  HealthBlockType,
  HealthProgramType,
  HealthStudyLevel,
  PrismaClient,
  QuizAnswerFormat,
  QuizDifficulty,
} from "@prisma/client";

import {
  seedHealthMockExam,
  type HealthMockExamSeed,
} from "../prisma/seeds/health-mock-exams.seed";
import { getThemeDisplayLabel } from "../src/core/theme/theme-label";
import { loadProjectEnv } from "./lib/load-env";

loadProjectEnv();

export const healthMockExamFixture = {
  institutionSlug: "my-exams-fixture-health-university",
  institutionName: "My Exams Fixture Health University",
  programCode: "MY_EXAMS_FIXTURE",
  programVersionSlug: "fixture-l1-sante-2026",
  courseUnitSlug: "fixture-examen-blanc-sante",
  teachingElementSlug: "interface-uness",
  examSlug: "fixture-uness-mixte",
  examTitle: "Fixture examen blanc UNESS",
} as const;

async function upsertProgram(prisma: PrismaClient) {
  return prisma.healthProgram.upsert({
    where: { code: healthMockExamFixture.programCode },
    update: {
      type: HealthProgramType.OTHER,
      label: "Programme fixture My Exams Santé",
      description: "Programme technique réservé aux tests d'examen blanc.",
      isActive: true,
      isPublished: true,
    },
    create: {
      type: HealthProgramType.OTHER,
      code: healthMockExamFixture.programCode,
      label: "Programme fixture My Exams Santé",
      description: "Programme technique réservé aux tests d'examen blanc.",
      isActive: true,
      isPublished: true,
    },
  });
}

async function upsertInstitution(prisma: PrismaClient) {
  return prisma.healthInstitution.upsert({
    where: { slug: healthMockExamFixture.institutionSlug },
    update: {
      name: healthMockExamFixture.institutionName,
      shortName: "Fixture Santé",
      city: "Test",
      region: "Fixture",
      department: "00",
      isActive: true,
      isPublished: true,
    },
    create: {
      name: healthMockExamFixture.institutionName,
      shortName: "Fixture Santé",
      slug: healthMockExamFixture.institutionSlug,
      uaiCode: "FIXTURE00",
      city: "Test",
      region: "Fixture",
      department: "00",
      isActive: true,
      isPublished: true,
    },
  });
}

async function upsertProgramVersion(
  prisma: PrismaClient,
  input: {
    institutionId: string;
    programId: string;
  },
) {
  const data = {
    institutionId: input.institutionId,
    programId: input.programId,
    label: "Fixture L1 Santé - 2026",
    slug: healthMockExamFixture.programVersionSlug,
    academicYear: "2026-2027",
    studyLevel: HealthStudyLevel.L1,
    notes: "Maquette courte réservée aux tests automatisés d'examen blanc.",
    isCurrent: true,
    isActive: true,
    isPublished: true,
  };
  const existingVersion = await prisma.healthProgramVersion.findFirst({
    where: {
      institutionId: input.institutionId,
      slug: healthMockExamFixture.programVersionSlug,
    },
    select: { id: true },
  });

  return existingVersion
    ? prisma.healthProgramVersion.update({
        where: { id: existingVersion.id },
        data,
      })
    : prisma.healthProgramVersion.create({ data });
}

async function upsertHealthBlock(
  prisma: PrismaClient,
  input: {
    programVersionId: string;
  },
) {
  const data = {
    programVersionId: input.programVersionId,
    pathwayId: null,
    type: HealthBlockType.HEALTH,
    title: "Bloc fixture",
    slug: "bloc-fixture",
    description: "Bloc technique réservé aux tests automatisés.",
    order: 1,
    isActive: true,
    isPublished: true,
  };
  const existingBlock = await prisma.healthBlock.findFirst({
    where: {
      programVersionId: input.programVersionId,
      pathwayId: null,
      slug: data.slug,
    },
    select: { id: true },
  });

  return existingBlock
    ? prisma.healthBlock.update({
        where: { id: existingBlock.id },
        data,
      })
    : prisma.healthBlock.create({ data });
}

async function upsertCourseUnit(
  prisma: PrismaClient,
  input: {
    programVersionId: string;
    blockId: string;
  },
) {
  const data = {
    programVersionId: input.programVersionId,
    pathwayId: null,
    blockId: input.blockId,
    code: "FIX-EB",
    title: "Fixture examen blanc Santé",
    shortTitle: "Fixture EB",
    slug: healthMockExamFixture.courseUnitSlug,
    description: "UE technique courte pour valider les formats UNESS en examen blanc.",
    semester: 1,
    ects: 1,
    order: 1,
    isCommonToAllPathways: true,
    isHealthAccessRelevant: true,
    coverageStatus: "READY" as const,
    isActive: true,
    isPublished: true,
  };
  const existingCourseUnit = await prisma.healthCourseUnit.findFirst({
    where: {
      programVersionId: input.programVersionId,
      pathwayId: null,
      slug: healthMockExamFixture.courseUnitSlug,
    },
    select: { id: true },
  });

  return existingCourseUnit
    ? prisma.healthCourseUnit.update({
        where: { id: existingCourseUnit.id },
        data,
      })
    : prisma.healthCourseUnit.create({ data });
}

async function upsertTeachingElement(
  prisma: PrismaClient,
  input: {
    courseUnitId: string;
  },
) {
  const data = {
    courseUnitId: input.courseUnitId,
    code: "UNESS",
    title: "Interface UNESS",
    shortTitle: "UNESS",
    slug: healthMockExamFixture.teachingElementSlug,
    description: "EC technique pour tester QRU, QRM, QRP et QROC en examen blanc.",
    order: 1,
    coverageStatus: "READY" as const,
    quizAnswerFormatDefault: QuizAnswerFormat.SINGLE,
    isActive: true,
    isPublished: true,
  };
  const existingTeachingElement = await prisma.healthTeachingElement.findFirst({
    where: {
      courseUnitId: input.courseUnitId,
      slug: healthMockExamFixture.teachingElementSlug,
    },
    select: { id: true },
  });

  return existingTeachingElement
    ? prisma.healthTeachingElement.update({
        where: { id: existingTeachingElement.id },
        data,
      })
    : prisma.healthTeachingElement.create({ data });
}

async function deleteFixtureAttempts(prisma: PrismaClient, courseUnitId: string) {
  const exam = await prisma.healthMockExam.findFirst({
    where: {
      courseUnitId,
      slug: healthMockExamFixture.examSlug,
    },
    select: { id: true },
  });

  if (!exam) return;

  const attempts = await prisma.userHealthMockExamAttempt.findMany({
    where: { mockExamId: exam.id },
    select: { id: true },
  });
  const attemptIds = attempts.map((attempt) => attempt.id);

  if (attemptIds.length === 0) return;

  await prisma.userHealthMockExamAttemptSectionResult.deleteMany({
    where: { attemptId: { in: attemptIds } },
  });
  await prisma.userHealthMockExamAttemptQuestion.deleteMany({
    where: { attemptId: { in: attemptIds } },
  });
  await prisma.userHealthMockExamAttempt.deleteMany({
    where: { id: { in: attemptIds } },
  });
}

function buildMockExamSeed(): HealthMockExamSeed {
  return {
    institutionNameContains: healthMockExamFixture.institutionName,
    programVersionSlug: healthMockExamFixture.programVersionSlug,
    courseUnitSlug: healthMockExamFixture.courseUnitSlug,
    title: healthMockExamFixture.examTitle,
    slug: healthMockExamFixture.examSlug,
    description: "Examen blanc court mixant QRU, QRM, QRP, QROC et QZONE.",
    instructions:
      "Fixture technique : répondez aux formats UNESS présentés, puis soumettez l'examen.",
    durationMinutes: 15,
    questionCount: 5,
    version: 1,
    order: 1,
    isPublished: true,
    themeIdsByQuestionStableId: {},
    sections: [
      {
        teachingElementSlug: healthMockExamFixture.teachingElementSlug,
        title: "Interface UNESS",
        order: 1,
        questionCount: 5,
        firstQuestion: 1,
        lastQuestion: 5,
        questions: [
          {
            slug: "fixture-qru-reponse-unique",
            order: 1,
            globalOrder: 1,
            difficulty: QuizDifficulty.EASY,
            questionType: "QRU",
            answerFormat: QuizAnswerFormat.SINGLE,
            question: "QRU — Question à réponse unique : quelle proposition est vraie ?",
            choices: [
              "Une QRU attend une seule réponse.",
              "Une QRU attend plusieurs réponses.",
              "Une QRU est une question ouverte.",
              "Une QRU est une zone à pointer.",
            ],
            correctChoiceIndexes: [0],
            explanation: "Une QRU appartient à la famille QCM et attend exactement une réponse.",
            choiceExplanations: [
              "Exact.",
              "Ce libellé correspond à une QRM.",
              "Ce libellé correspond à une question ouverte.",
              "Ce libellé correspond à une QZONE.",
            ],
          },
          {
            slug: "fixture-qrm-reponses-multiples",
            order: 2,
            globalOrder: 2,
            difficulty: QuizDifficulty.EASY,
            questionType: "QRM",
            answerFormat: QuizAnswerFormat.MULTIPLE,
            question: "QRM — Question à réponses multiples : quels formats appartiennent à la famille QCM ?",
            choices: [
              "QRU",
              "QROC",
              "QRM",
              "QZONE",
            ],
            correctChoiceIndexes: [0, 2],
            explanation: "QRU et QRM sont deux variantes de la famille QCM.",
            choiceExplanations: [
              "Exact : QRU est une variante de QCM.",
              "QROC est une question ouverte à rédaction courte.",
              "Exact : QRM est une variante de QCM.",
              "QZONE est une question à zone à pointer.",
            ],
          },
          {
            slug: "fixture-qrp-nombre-precise",
            order: 3,
            globalOrder: 3,
            difficulty: QuizDifficulty.MEDIUM,
            questionType: "QRP",
            answerFormat: QuizAnswerFormat.MULTIPLE,
            question: "QRP — Question à nombre de réponses précisé : sélectionnez exactement deux réponses ouvertes.",
            choices: [
              "QRU",
              "QROC",
              "QRM",
              "QROL",
            ],
            correctChoiceIndexes: [1, 3],
            answerPayload: {
              requiredSelectionCount: 2,
            },
            explanation: "QROC et QROL sont des questions ouvertes ; la QRP précise ici deux réponses.",
            choiceExplanations: [
              "QRU est une réponse unique dans la famille QCM.",
              "Exact : QROC est ouverte et courte.",
              "QRM est une réponse multiple dans la famille QCM.",
              "Exact : QROL est ouverte et longue.",
            ],
          },
          {
            slug: "fixture-qroc-reponse-courte",
            order: 4,
            globalOrder: 4,
            difficulty: QuizDifficulty.EASY,
            questionType: "QROC",
            answerFormat: QuizAnswerFormat.SINGLE,
            question: "QROC — Question ouverte à rédaction courte : combien de lettres contient le code QCM ?",
            choices: [],
            correctChoiceIndexes: [],
            answerPayload: {
              answerType: "number",
              numericAnswer: {
                value: 3,
                tolerance: 0,
              },
            },
            explanation: "Le code QCM contient trois lettres.",
            choiceExplanations: [],
          },
          {
            slug: "fixture-qzone-pointage",
            order: 5,
            globalOrder: 5,
            difficulty: QuizDifficulty.EASY,
            questionType: "QZONE",
            answerFormat: QuizAnswerFormat.SINGLE,
            question: "QZONE — Question à zone à pointer : cliquez sur le carbone asymétrique C5.",
            choices: [],
            correctChoiceIndexes: [],
            answerPayload: {
              image: {
                src: "/images/training/ue14/biochimie/glucides-generalites-structure/fischer-dernier-carbone-asymetrique-qzone.svg",
                alt: "Support visuel QZONE fixture",
                width: 700,
                height: 900,
              },
              expectedZones: [
                {
                  id: "c5",
                  label: "C5",
                  x: 0.5,
                  y: 0.72,
                  tolerance: 0.1,
                },
              ],
            },
            explanation: "La zone attendue est au niveau de C5 (x=50%, y=72%).",
            choiceExplanations: [],
          },
        ],
      },
    ],
  };
}

async function resolveFixtureTheme(prisma: PrismaClient) {
  const theme = await prisma.theme.findFirst({
    where: {
      title: {
        not: "",
      },
    },
    orderBy: [{ shortTitle: "asc" }, { title: "asc" }],
    select: {
      id: true,
      title: true,
      shortTitle: true,
    },
  });

  if (!theme) {
    throw new Error("Aucun Theme existant n'est disponible pour la fixture examen blanc.");
  }

  return {
    id: theme.id,
    label: getThemeDisplayLabel(theme),
  };
}

export async function seedHealthMockExamFixture(prisma: PrismaClient) {
  const [program, institution] = await Promise.all([
    upsertProgram(prisma),
    upsertInstitution(prisma),
  ]);
  const fixtureTheme = await resolveFixtureTheme(prisma);
  const programVersion = await upsertProgramVersion(prisma, {
    institutionId: institution.id,
    programId: program.id,
  });
  const block = await upsertHealthBlock(prisma, {
    programVersionId: programVersion.id,
  });
  const courseUnit = await upsertCourseUnit(prisma, {
    programVersionId: programVersion.id,
    blockId: block.id,
  });

  await upsertTeachingElement(prisma, { courseUnitId: courseUnit.id });
  await deleteFixtureAttempts(prisma, courseUnit.id);
  const seed = buildMockExamSeed();
  seed.themeIdsByQuestionStableId = {
    "fixture-qru-reponse-unique": [fixtureTheme.id],
    "fixture-qrm-reponses-multiples": [fixtureTheme.id],
    "fixture-qrp-nombre-precise": [fixtureTheme.id],
  };
  await seedHealthMockExam(prisma, seed);

  const exam = await prisma.healthMockExam.findFirstOrThrow({
    where: {
      courseUnitId: courseUnit.id,
      slug: healthMockExamFixture.examSlug,
    },
    select: {
      id: true,
      slug: true,
      title: true,
      questionCount: true,
    },
  });

  return {
    courseUnitId: courseUnit.id,
    courseUnitSlug: courseUnit.slug,
    programVersionId: programVersion.id,
    mockExamId: exam.id,
    examSlug: exam.slug,
    examTitle: exam.title,
    questionCount: exam.questionCount,
    themeLabel: fixtureTheme.label,
  };
}

async function main() {
  const prisma = new PrismaClient();

  try {
    const fixture = await seedHealthMockExamFixture(prisma);
    console.log(
      `Fixture examen blanc prête : ${fixture.examTitle} (${fixture.courseUnitId}/${fixture.examSlug}).`,
    );
  } finally {
    await prisma.$disconnect();
  }
}

if (process.argv[1]?.endsWith("seed-health-mock-exam-fixture.ts")) {
  main().catch((error) => {
    console.error("Erreur lors du seed de la fixture examen blanc Santé :", error);
    process.exit(1);
  });
}
