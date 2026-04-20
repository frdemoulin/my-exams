"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { inferTrainingQuizStageFromOrder } from "@/core/training/training-stage";
import { setCrudSuccessToast, setToastCookie } from "@/lib/toast";
import { slugifyText } from "@/lib/utils";
import {
  createChapterSchema,
  createQuizQuestionSchema,
  updateTrainingStructureSchema,
} from "@/lib/validation";
import {
  CreateChapterErrors,
  CreateQuizQuestionErrors,
  UpdateTrainingStructureErrors,
} from "./chapter.types";

type ChapterActionOptions = {
  redirectTo?: string | null;
  revalidatePaths?: string[];
  skipSuccessToast?: boolean;
};

type QuizQuestionActionOptions = {
  redirectTo?: string | null;
  revalidatePaths?: string[];
  skipSuccessToast?: boolean;
};

const SCIENCE_PHYSICS_SUBJECT = "Sciences physiques";
const TRAINING_BASE_PATH = "/entrainement/sciences-physiques";

function resolveSciencePhysicsPaths(chapter: {
  slug: string;
  level: string;
  subject: {
    longDescription: string;
  };
}) {
  if (chapter.subject.longDescription !== SCIENCE_PHYSICS_SUBJECT) {
    return [] as string[];
  }

  return [
    '/entrainement',
    TRAINING_BASE_PATH,
    `${TRAINING_BASE_PATH}/niveaux/${slugifyText(chapter.level)}`,
    `${TRAINING_BASE_PATH}/${chapter.slug}`,
  ];
}

function parseBoolean(value: FormDataEntryValue | null, defaultValue: boolean) {
  if (value == null) return defaultValue;
  return value === "true";
}

function parseNumber(value: FormDataEntryValue | null) {
  return Number(value);
}

function parseChoices(formData: FormData) {
  return formData
    .getAll("choices")
    .map((choice) => String(choice).trim());
}

function parseTrainingStructurePayload(formData: FormData) {
  const rawStructure = String(formData.get("structure") ?? "").trim();

  if (!rawStructure) {
    return { sections: [] };
  }

  try {
    return JSON.parse(rawStructure) as unknown;
  } catch {
    throw new Error("Structure d'entraînement invalide");
  }
}

async function resolveChapterPublicPaths(chapterId: string) {
  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    select: {
      slug: true,
      level: true,
      subject: {
        select: {
          longDescription: true,
        },
      },
    },
  });

  if (!chapter) {
    return [] as string[];
  }

  return resolveSciencePhysicsPaths(chapter);
}

function revalidatePaths(paths: string[]) {
  new Set(paths).forEach((path) => revalidatePath(path));
}

export async function createChapter(
  formData: FormData,
  options?: ChapterActionOptions
) {
  const title = String(formData.get("title") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const slug = slugifyText(rawSlug || title);
  const level = String(formData.get("level") ?? "").trim();
  const order = parseNumber(formData.get("order"));
  const subjectId = String(formData.get("subjectId") ?? "").trim();
  const domainIds = formData
    .getAll("domainIds")
    .map((domainId) => String(domainId))
    .filter(Boolean);
  const isActive = parseBoolean(formData.get("isActive"), true);
  const isPublished = parseBoolean(formData.get("isPublished"), false);

  const result = createChapterSchema.safeParse({
    title,
    slug,
    level,
    order,
    subjectId,
    domainIds,
    isActive,
    isPublished,
  });

  if (!result.success) {
    const errors: CreateChapterErrors = result.error.format();
    throw errors;
  }

  try {
    const chapter = await prisma.chapter.create({
      data: result.data,
      select: { id: true },
    });

    const publicPaths = await resolveChapterPublicPaths(chapter.id);
    revalidatePaths([
      "/admin/chapters",
      "/sitemap.xml",
      ...publicPaths,
      ...(options?.revalidatePaths ?? []),
    ]);

    if (!options?.skipSuccessToast) {
      await setCrudSuccessToast("chapter", "created");
    }
    if (options?.redirectTo !== null) {
      redirect(options?.redirectTo ?? `/admin/chapters/${chapter.id}`);
    }
  } catch (error: any) {
    if (error?.code === "P2002") {
      throw new Error("Un chapitre avec ce slug ou cet ordre existe déjà pour cette matière");
    }
    throw error;
  }
}

export async function updateChapter(
  id: string,
  formData: FormData,
  options?: ChapterActionOptions
) {
  const currentChapter = await prisma.chapter.findUnique({
    where: { id },
    select: {
      slug: true,
      level: true,
      subject: {
        select: {
          longDescription: true,
        },
      },
    },
  });

  if (!currentChapter) {
    throw new Error("Chapitre introuvable");
  }

  const title = String(formData.get("title") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const slug = slugifyText(rawSlug || title);
  const level = String(formData.get("level") ?? "").trim();
  const order = parseNumber(formData.get("order"));
  const subjectId = String(formData.get("subjectId") ?? "").trim();
  const domainIds = formData
    .getAll("domainIds")
    .map((domainId) => String(domainId))
    .filter(Boolean);
  const isActive = parseBoolean(formData.get("isActive"), true);
  const isPublished = parseBoolean(formData.get("isPublished"), false);

  const result = createChapterSchema.safeParse({
    title,
    slug,
    level,
    order,
    subjectId,
    domainIds,
    isActive,
    isPublished,
  });

  if (!result.success) {
    const errors: CreateChapterErrors = result.error.format();
    throw errors;
  }

  try {
    await prisma.chapter.update({
      where: { id },
      data: result.data,
    });

    const oldPublicPaths = resolveSciencePhysicsPaths(currentChapter);
    const publicPaths = await resolveChapterPublicPaths(id);
    revalidatePaths([
      "/admin/chapters",
      `/admin/chapters/${id}`,
      "/sitemap.xml",
      ...oldPublicPaths,
      ...publicPaths,
      ...(options?.revalidatePaths ?? []),
    ]);

    if (!options?.skipSuccessToast) {
      await setCrudSuccessToast("chapter", "updated");
    }
    if (options?.redirectTo !== null) {
      redirect(options?.redirectTo ?? `/admin/chapters/${id}`);
    }
  } catch (error: any) {
    if (error?.code === "P2002") {
      throw new Error("Un chapitre avec ce slug ou cet ordre existe déjà pour cette matière");
    }
    throw error;
  }
}

export async function deleteChapter(id: string, options?: ChapterActionOptions) {
  const publicPaths = await resolveChapterPublicPaths(id);

  await prisma.chapter.delete({
    where: { id },
  });

  revalidatePaths([
    "/admin/chapters",
    "/sitemap.xml",
    ...publicPaths,
    ...(options?.revalidatePaths ?? []),
  ]);

  if (!options?.skipSuccessToast) {
    await setCrudSuccessToast("chapter", "deleted");
  }
  if (options?.redirectTo !== null) {
    redirect(options?.redirectTo ?? "/admin/chapters");
  }
}

export async function createQuizQuestion(
  chapterId: string,
  formData: FormData,
  options?: QuizQuestionActionOptions
) {
  const difficulty = String(formData.get("difficulty") ?? "").trim();
  const question = String(formData.get("question") ?? "").trim();
  const choices = parseChoices(formData);
  const correctChoiceIndex = parseNumber(formData.get("correctChoiceIndex"));
  const explanation = String(formData.get("explanation") ?? "").trim();
  const order = parseNumber(formData.get("order"));
  const isPublished = parseBoolean(formData.get("isPublished"), false);

  const result = createQuizQuestionSchema.safeParse({
    difficulty,
    question,
    choices,
    correctChoiceIndex,
    explanation,
    order,
    isPublished,
  });

  if (!result.success) {
    const errors: CreateQuizQuestionErrors = result.error.format();
    throw errors;
  }

  try {
    await prisma.quizQuestion.create({
      data: {
        chapterId,
        ...result.data,
      },
    });

    const publicPaths = await resolveChapterPublicPaths(chapterId);
    revalidatePaths([
      `/admin/chapters/${chapterId}`,
      ...publicPaths,
      ...(options?.revalidatePaths ?? []),
    ]);

    if (!options?.skipSuccessToast) {
      await setCrudSuccessToast("quizQuestion", "created");
    }
    if (options?.redirectTo !== null) {
      redirect(options?.redirectTo ?? `/admin/chapters/${chapterId}`);
    }
  } catch (error: any) {
    if (error?.code === "P2002") {
      throw new Error("Une question avec cet ordre existe déjà pour ce chapitre");
    }
    throw error;
  }
}

export async function updateQuizQuestion(
  id: string,
  formData: FormData,
  options?: QuizQuestionActionOptions
) {
  const currentQuestion = await prisma.quizQuestion.findUnique({
    where: { id },
    select: { chapterId: true },
  });

  if (!currentQuestion) {
    throw new Error("Question introuvable");
  }

  const difficulty = String(formData.get("difficulty") ?? "").trim();
  const chapterId = String(formData.get("chapterId") ?? currentQuestion.chapterId).trim() || currentQuestion.chapterId;
  const question = String(formData.get("question") ?? "").trim();
  const choices = parseChoices(formData);
  const correctChoiceIndex = parseNumber(formData.get("correctChoiceIndex"));
  const explanation = String(formData.get("explanation") ?? "").trim();
  const order = parseNumber(formData.get("order"));
  const isPublished = parseBoolean(formData.get("isPublished"), false);

  const result = createQuizQuestionSchema.safeParse({
    difficulty,
    question,
    choices,
    correctChoiceIndex,
    explanation,
    order,
    isPublished,
  });

  if (!result.success) {
    const errors: CreateQuizQuestionErrors = result.error.format();
    throw errors;
  }

  try {
    await prisma.quizQuestion.update({
      where: { id },
      data: {
        chapterId,
        ...result.data,
      },
    });

    const oldPublicPaths = await resolveChapterPublicPaths(currentQuestion.chapterId);
    const newPublicPaths = await resolveChapterPublicPaths(chapterId);
    revalidatePaths([
      `/admin/chapters/${currentQuestion.chapterId}`,
      `/admin/chapters/${chapterId}`,
      ...oldPublicPaths,
      ...newPublicPaths,
      ...(options?.revalidatePaths ?? []),
    ]);

    if (!options?.skipSuccessToast) {
      await setCrudSuccessToast("quizQuestion", "updated");
    }
    if (options?.redirectTo !== null) {
      redirect(options?.redirectTo ?? `/admin/chapters/${chapterId}`);
    }
  } catch (error: any) {
    if (error?.code === "P2002") {
      throw new Error("Une question avec cet ordre existe déjà pour ce chapitre");
    }
    throw error;
  }
}

export async function deleteQuizQuestion(
  id: string,
  options?: QuizQuestionActionOptions
) {
  const currentQuestion = await prisma.quizQuestion.findUnique({
    where: { id },
    select: { chapterId: true },
  });

  if (!currentQuestion) {
    throw new Error("Question introuvable");
  }

  await prisma.quizQuestion.delete({
    where: { id },
  });

  const publicPaths = await resolveChapterPublicPaths(currentQuestion.chapterId);
  revalidatePaths([
    `/admin/chapters/${currentQuestion.chapterId}`,
    ...publicPaths,
    ...(options?.revalidatePaths ?? []),
  ]);

  if (!options?.skipSuccessToast) {
    await setCrudSuccessToast("quizQuestion", "deleted");
  }
  if (options?.redirectTo !== null) {
    redirect(options?.redirectTo ?? `/admin/chapters/${currentQuestion.chapterId}`);
  }
}

export async function updateTrainingStructure(
  chapterId: string,
  formData: FormData,
  options?: ChapterActionOptions
) {
  const currentChapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    select: { id: true },
  });

  if (!currentChapter) {
    throw new Error("Chapitre introuvable");
  }

  const parsedPayload = parseTrainingStructurePayload(formData);
  const result = updateTrainingStructureSchema.safeParse(parsedPayload);

  if (!result.success) {
    const errors: UpdateTrainingStructureErrors = result.error.format();
    throw errors;
  }

  const chapterQuestions = await prisma.quizQuestion.findMany({
    where: { chapterId },
    select: { id: true },
  });
  const chapterQuestionIds = new Set(chapterQuestions.map((question) => question.id));

  const invalidQuestionId = result.data.sections
    .flatMap((section) => section.quizzes)
    .flatMap((quiz) => quiz.quizItems)
    .flatMap((item) =>
      item.type === "QUESTION" ? [item.questionId] : item.questionIds
    )
    .find((questionId) => !chapterQuestionIds.has(questionId));

  if (invalidQuestionId) {
    throw new Error("Une ou plusieurs questions sélectionnées n'appartiennent pas à ce chapitre");
  }

  try {
    await prisma.$transaction(async (tx) => {
      const existingQuizzes = await tx.trainingQuiz.findMany({
        where: { chapterId },
        select: { id: true },
      });

      if (existingQuizzes.length > 0) {
        await tx.trainingQuizQuestion.deleteMany({
          where: {
            quizId: { in: existingQuizzes.map((quiz) => quiz.id) },
          },
        });
      }

      await tx.trainingQuiz.deleteMany({
        where: { chapterId },
      });
      await tx.chapterSection.deleteMany({
        where: { chapterId },
      });

      for (const section of result.data.sections) {
        const createdSection = await tx.chapterSection.create({
          data: {
            chapterId,
            title: section.title,
            description: section.description || null,
            order: section.order,
            kind: section.kind,
            isPublished: section.isPublished,
            themeIds: section.themeIds,
          },
          select: {
            id: true,
          },
        });

        for (const quiz of section.quizzes) {
          const quizStage = inferTrainingQuizStageFromOrder(quiz.order);

          const createdQuiz = await tx.trainingQuiz.create({
            data: {
              chapterId,
              sectionId: createdSection.id,
              slug: slugifyText(quiz.slug),
              title: quiz.title,
              description: quiz.description || null,
              order: quiz.order,
              stage: quizStage,
              isPublished: quiz.isPublished,
            },
            select: {
              id: true,
            },
          });

          let questionOrder = 1;
          const orderedQuizItems = [...quiz.quizItems].sort(
            (left, right) => left.order - right.order
          );

          for (const item of orderedQuizItems) {
            if (item.type === "QUESTION") {
              await tx.trainingQuizQuestion.create({
                data: {
                  quizId: createdQuiz.id,
                  questionId: item.questionId,
                  order: questionOrder,
                },
              });
              questionOrder += 1;

              continue;
            }

            const createdGroup = await tx.trainingQuizQuestionGroup.create({
              data: {
                quizId: createdQuiz.id,
                title: item.title || null,
                sharedStatement: item.sharedStatement,
                order: item.order,
              },
              select: {
                id: true,
              },
            });

            for (const questionId of item.questionIds) {
              await tx.trainingQuizQuestion.create({
                data: {
                  quizId: createdQuiz.id,
                  groupId: createdGroup.id,
                  questionId,
                  order: questionOrder,
                },
              });
              questionOrder += 1;
            }
          }
        }
      }
    });

    const publicPaths = await resolveChapterPublicPaths(chapterId);
    revalidatePaths([
      `/admin/chapters/${chapterId}`,
      `/admin/training/qcms/${chapterId}/edit`,
      ...publicPaths,
      ...(options?.revalidatePaths ?? []),
    ]);

    if (!options?.skipSuccessToast) {
      await setToastCookie("success", "Structure d'entraînement enregistrée");
    }
    if (options?.redirectTo !== null) {
      redirect(options?.redirectTo ?? `/admin/training/qcms/${chapterId}/edit`);
    }
  } catch (error: any) {
    if (error?.code === "P2002") {
      throw new Error("Un ordre de section, un ordre de quiz ou un slug de quiz est déjà utilisé dans ce chapitre");
    }
    throw error;
  }
}