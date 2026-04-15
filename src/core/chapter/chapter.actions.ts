"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import { setCrudSuccessToast } from "@/lib/toast";
import { slugifyText } from "@/lib/utils";
import { createChapterSchema, createQuizQuestionSchema } from "@/lib/validation";
import { CreateChapterErrors, CreateQuizQuestionErrors } from "./chapter.types";

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

async function resolveChapterPublicPaths(chapterId: string) {
  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    select: {
      slug: true,
      subject: {
        select: {
          longDescription: true,
        },
      },
    },
  });

  if (!chapter || chapter.subject.longDescription !== SCIENCE_PHYSICS_SUBJECT) {
    return [] as string[];
  }

  return [TRAINING_BASE_PATH, `${TRAINING_BASE_PATH}/${chapter.slug}`];
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
    select: { slug: true },
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

    const publicPaths = await resolveChapterPublicPaths(id);
    revalidatePaths([
      "/admin/chapters",
      `/admin/chapters/${id}`,
      "/sitemap.xml",
      `${TRAINING_BASE_PATH}/${currentChapter.slug}`,
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
      data: result.data,
    });

    const publicPaths = await resolveChapterPublicPaths(currentQuestion.chapterId);
    revalidatePaths([
      `/admin/chapters/${currentQuestion.chapterId}`,
      ...publicPaths,
      ...(options?.revalidatePaths ?? []),
    ]);

    if (!options?.skipSuccessToast) {
      await setCrudSuccessToast("quizQuestion", "updated");
    }
    if (options?.redirectTo !== null) {
      redirect(options?.redirectTo ?? `/admin/chapters/${currentQuestion.chapterId}`);
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