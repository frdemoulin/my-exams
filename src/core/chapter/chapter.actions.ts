"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/db/prisma";
import {
  getPrimaryCorrectChoiceIndex,
  resolveCorrectChoiceIndexes,
  resolveQuizAnswerFormat,
} from "@/core/quiz/quiz-answer-format";
import { inferTrainingQuizStageFromOrder } from "@/core/training/training-stage";
import { setCrudSuccessToast, setToastCookie } from "@/lib/toast";
import { slugifyText } from "@/lib/utils";
import {
  createChapterSchema,
  createChapterAssignmentSchema,
  createQuizQuestionSchema,
  updateTrainingStructureSchema,
} from "@/lib/validation";
import {
  CreateChapterErrors,
  CreateChapterAssignmentErrors,
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

function parseOptionalDate(value: FormDataEntryValue | null) {
  const rawValue = String(value ?? "").trim();
  if (!rawValue) return undefined;

  const parsedDate = new Date(`${rawValue}T12:00:00.000Z`);
  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error("Date invalide");
  }

  return parsedDate;
}

function parseOptionalText(value: unknown) {
  const normalized = String(value ?? "").trim();
  return normalized.length > 0 ? normalized : undefined;
}

async function ensureChapterAssignmentContextExists(
  contextType: "SUBJECT" | "HEALTH_COURSE_UNIT" | "HEALTH_TEACHING_ELEMENT" | "BTS_TEACHING" | "GENERIC",
  contextId: string
) {
  switch (contextType) {
    case "SUBJECT": {
      const subject = await prisma.subject.findUnique({
        where: { id: contextId },
        select: { id: true, longDescription: true },
      });

      if (!subject) {
        throw new Error("Matière de contexte introuvable");
      }
      return subject;
    }
    case "HEALTH_COURSE_UNIT": {
      const courseUnit = await prisma.healthCourseUnit.findUnique({
        where: { id: contextId },
        select: { id: true, title: true },
      });

      if (!courseUnit) {
        throw new Error("UE santé de contexte introuvable");
      }
      return courseUnit;
    }
    case "HEALTH_TEACHING_ELEMENT":
      {
        const teachingElement = await prisma.healthTeachingElement.findUnique({
          where: { id: contextId },
          select: { id: true, title: true },
        });

        if (!teachingElement) {
          throw new Error("EC santé de contexte introuvable");
        }
        return teachingElement;
      }
    case "BTS_TEACHING":
      throw new Error("Le modèle BTS n'est pas encore disponible dans cette branche");
    case "GENERIC":
      return { id: contextId };
    default:
      throw new Error("Type de contexte de rattachement invalide");
  }
}

function normalizeChapterAssignmentData(data: {
  chapterId: string;
  vertical: "SECONDARY" | "BTS" | "HEALTH" | "COMMON";
  contextType: "SUBJECT" | "HEALTH_COURSE_UNIT" | "HEALTH_TEACHING_ELEMENT" | "BTS_TEACHING" | "GENERIC";
  contextId: string;
  titleOverride?: string;
  shortTitleOverride?: string;
  slugOverride?: string;
  descriptionOverride?: string;
  order: number;
  coverageStatus: "STRUCTURE_ONLY" | "THEMES_MAPPED" | "QUESTIONS_AVAILABLE" | "READY";
  sourceUrl?: string;
  sourceLabel?: string;
  sourceCheckedAt?: string;
  isActive: boolean;
  isPublished: boolean;
}) {
  return {
    ...data,
    titleOverride: parseOptionalText(data.titleOverride),
    shortTitleOverride: parseOptionalText(data.shortTitleOverride),
    slugOverride: parseOptionalText(data.slugOverride),
    descriptionOverride: parseOptionalText(data.descriptionOverride),
    sourceUrl: parseOptionalText(data.sourceUrl),
    sourceLabel: parseOptionalText(data.sourceLabel),
    sourceCheckedAt: data.sourceCheckedAt
      ? new Date(`${data.sourceCheckedAt}T12:00:00.000Z`)
      : undefined,
  };
}

function parseChoices(formData: FormData) {
  return formData
    .getAll("choices")
    .map((choice) => String(choice).trim());
}

function parseCorrectChoiceIndexes(formData: FormData) {
  const values = formData
    .getAll("correctChoiceIndexes")
    .map((value) => Number(value))
    .filter((value) => Number.isInteger(value));

  if (values.length > 0) {
    return values;
  }

  const legacyEntry = formData.get("correctChoiceIndex");
  if (legacyEntry == null) {
    return [];
  }

  const legacyValue = Number(legacyEntry);
  return Number.isInteger(legacyValue) ? [legacyValue] : [];
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

async function syncCanonicalChapterAssignment(
  chapterId: string,
  chapter: {
    vertical: "SECONDARY" | "BTS" | "HEALTH" | "COMMON";
    subjectId: string;
    order: number;
    coverageStatus: "STRUCTURE_ONLY" | "THEMES_MAPPED" | "QUESTIONS_AVAILABLE" | "READY";
    sourceUrl?: string | undefined;
    sourceLabel?: string | undefined;
    sourceCheckedAt?: string | undefined;
    isActive: boolean;
    isPublished: boolean;
  }
) {
  const existingSubjectAssignment = await prisma.chapterAssignment.findFirst({
    where: {
      chapterId,
      contextType: "SUBJECT",
    },
    select: { id: true },
  });

  if (chapter.vertical !== "SECONDARY") {
    if (existingSubjectAssignment) {
      await prisma.chapterAssignment.delete({ where: { id: existingSubjectAssignment.id } });
    }
    return;
  }

  const normalizedData = normalizeChapterAssignmentData({
    chapterId,
    vertical: "SECONDARY",
    contextType: "SUBJECT",
    contextId: chapter.subjectId,
    order: chapter.order,
    coverageStatus: chapter.coverageStatus,
    sourceUrl: chapter.sourceUrl,
    sourceLabel: chapter.sourceLabel,
    sourceCheckedAt: chapter.sourceCheckedAt,
    isActive: chapter.isActive,
    isPublished: chapter.isPublished,
  });

  if (existingSubjectAssignment) {
    await prisma.chapterAssignment.update({
      where: { id: existingSubjectAssignment.id },
      data: normalizedData,
    });
    return;
  }

  await prisma.chapterAssignment.create({
    data: normalizedData,
  });
}

export async function createChapter(
  formData: FormData,
  options?: ChapterActionOptions
) {
  const vertical = String(formData.get("vertical") ?? "SECONDARY").trim() as
    | "SECONDARY"
    | "BTS"
    | "HEALTH"
    | "COMMON";
  const title = String(formData.get("title") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const slug = slugifyText(rawSlug || title);
  const shortTitle = parseOptionalText(formData.get("shortTitle"));
  const description = parseOptionalText(formData.get("description"));
  const level = String(formData.get("level") ?? "").trim();
  const order = parseNumber(formData.get("order"));
  const subjectId = String(formData.get("subjectId") ?? "").trim();
  const domainIds = formData
    .getAll("domainIds")
    .map((domainId) => String(domainId))
    .filter(Boolean);
  const coverageStatus = String(formData.get("coverageStatus") ?? "STRUCTURE_ONLY").trim() as
    | "STRUCTURE_ONLY"
    | "THEMES_MAPPED"
    | "QUESTIONS_AVAILABLE"
    | "READY";
  const sourceUrl = parseOptionalText(formData.get("sourceUrl"));
  const sourceLabel = parseOptionalText(formData.get("sourceLabel"));
  const sourceCheckedAt = parseOptionalDate(formData.get("sourceCheckedAt"));
  const isActive = parseBoolean(formData.get("isActive"), true);
  const isPublished = parseBoolean(formData.get("isPublished"), false);

  const result = createChapterSchema.safeParse({
    vertical,
    title,
    slug,
    shortTitle,
    description,
    level,
    order,
    subjectId,
    domainIds,
    coverageStatus,
    sourceUrl,
    sourceLabel,
    sourceCheckedAt: sourceCheckedAt ? sourceCheckedAt.toISOString().slice(0, 10) : undefined,
    isActive,
    isPublished,
  });

  if (!result.success) {
    const errors: CreateChapterErrors = result.error.format();
    throw errors;
  }

  try {
    const chapter = await prisma.chapter.create({
      data: {
        ...result.data,
        sourceCheckedAt: result.data.sourceCheckedAt
          ? new Date(`${result.data.sourceCheckedAt}T12:00:00.000Z`)
          : undefined,
      },
      select: { id: true },
    });

    await syncCanonicalChapterAssignment(chapter.id, {
      vertical: result.data.vertical,
      subjectId: result.data.subjectId,
      order: result.data.order,
      coverageStatus: result.data.coverageStatus,
      sourceUrl: result.data.sourceUrl,
      sourceLabel: result.data.sourceLabel,
      sourceCheckedAt: result.data.sourceCheckedAt,
      isActive: result.data.isActive,
      isPublished: result.data.isPublished,
    });

    const publicPaths = await resolveChapterPublicPaths(chapter.id);
    revalidatePaths([
      "/admin/chapters",
      `/admin/chapters/${chapter.id}`,
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
  const vertical = String(formData.get("vertical") ?? "SECONDARY").trim() as
    | "SECONDARY"
    | "BTS"
    | "HEALTH"
    | "COMMON";
  const shortTitle = parseOptionalText(formData.get("shortTitle"));
  const description = parseOptionalText(formData.get("description"));
  const level = String(formData.get("level") ?? "").trim();
  const order = parseNumber(formData.get("order"));
  const subjectId = String(formData.get("subjectId") ?? "").trim();
  const domainIds = formData
    .getAll("domainIds")
    .map((domainId) => String(domainId))
    .filter(Boolean);
  const coverageStatus = String(formData.get("coverageStatus") ?? "STRUCTURE_ONLY").trim() as
    | "STRUCTURE_ONLY"
    | "THEMES_MAPPED"
    | "QUESTIONS_AVAILABLE"
    | "READY";
  const sourceUrl = parseOptionalText(formData.get("sourceUrl"));
  const sourceLabel = parseOptionalText(formData.get("sourceLabel"));
  const sourceCheckedAt = parseOptionalDate(formData.get("sourceCheckedAt"));
  const isActive = parseBoolean(formData.get("isActive"), true);
  const isPublished = parseBoolean(formData.get("isPublished"), false);

  const result = createChapterSchema.safeParse({
    vertical,
    title,
    slug,
    shortTitle,
    description,
    level,
    order,
    subjectId,
    domainIds,
    coverageStatus,
    sourceUrl,
    sourceLabel,
    sourceCheckedAt: sourceCheckedAt ? sourceCheckedAt.toISOString().slice(0, 10) : undefined,
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
      data: {
        ...result.data,
        sourceCheckedAt: result.data.sourceCheckedAt
          ? new Date(`${result.data.sourceCheckedAt}T12:00:00.000Z`)
          : undefined,
      },
    });

    await syncCanonicalChapterAssignment(id, {
      vertical: result.data.vertical,
      subjectId: result.data.subjectId,
      order: result.data.order,
      coverageStatus: result.data.coverageStatus,
      sourceUrl: result.data.sourceUrl,
      sourceLabel: result.data.sourceLabel,
      sourceCheckedAt: result.data.sourceCheckedAt,
      isActive: result.data.isActive,
      isPublished: result.data.isPublished,
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

export async function createChapterAssignment(
  chapterId: string,
  formData: FormData,
  options?: ChapterActionOptions
) {
  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    select: { id: true, subjectId: true },
  });

  if (!chapter) {
    throw new Error("Chapitre introuvable");
  }

  const vertical = String(formData.get("vertical") ?? "SECONDARY").trim() as
    | "SECONDARY"
    | "BTS"
    | "HEALTH"
    | "COMMON";
  const contextType = String(formData.get("contextType") ?? "").trim() as
    | "SUBJECT"
    | "HEALTH_COURSE_UNIT"
    | "HEALTH_TEACHING_ELEMENT"
    | "BTS_TEACHING"
    | "GENERIC";
  const contextId = String(formData.get("contextId") ?? "").trim();
  const titleOverride = parseOptionalText(formData.get("titleOverride"));
  const shortTitleOverride = parseOptionalText(formData.get("shortTitleOverride"));
  const slugOverride = parseOptionalText(formData.get("slugOverride"));
  const descriptionOverride = parseOptionalText(formData.get("descriptionOverride"));
  const order = parseNumber(formData.get("order"));
  const coverageStatus = String(formData.get("coverageStatus") ?? "STRUCTURE_ONLY").trim() as
    | "STRUCTURE_ONLY"
    | "THEMES_MAPPED"
    | "QUESTIONS_AVAILABLE"
    | "READY";
  const sourceUrl = parseOptionalText(formData.get("sourceUrl"));
  const sourceLabel = parseOptionalText(formData.get("sourceLabel"));
  const sourceCheckedAt = parseOptionalDate(formData.get("sourceCheckedAt"));
  const isActive = parseBoolean(formData.get("isActive"), true);
  const isPublished = parseBoolean(formData.get("isPublished"), true);

  const result = createChapterAssignmentSchema.safeParse({
    chapterId: chapter.id,
    vertical,
    contextType,
    contextId,
    titleOverride,
    shortTitleOverride,
    slugOverride,
    descriptionOverride,
    order,
    coverageStatus,
    sourceUrl,
    sourceLabel,
    sourceCheckedAt: sourceCheckedAt ? sourceCheckedAt.toISOString().slice(0, 10) : undefined,
    isActive,
    isPublished,
  });

  if (!result.success) {
    const errors: CreateChapterAssignmentErrors = result.error.format();
    throw errors;
  }

  await ensureChapterAssignmentContextExists(result.data.contextType, result.data.contextId);

  try {
    const assignment = await prisma.chapterAssignment.create({
      data: {
        ...normalizeChapterAssignmentData(result.data),
        sourceCheckedAt: result.data.sourceCheckedAt
          ? new Date(`${result.data.sourceCheckedAt}T12:00:00.000Z`)
          : undefined,
      },
      select: { id: true },
    });

    revalidatePaths([
      "/admin/chapters",
      `/admin/chapters/${chapterId}`,
      `/admin/chapters/${chapterId}/assignments/${assignment.id}/edit`,
      ...(options?.revalidatePaths ?? []),
    ]);

    if (!options?.skipSuccessToast) {
      await setCrudSuccessToast("chapterAssignment", "created");
    }
    if (options?.redirectTo !== null) {
      redirect(options?.redirectTo ?? `/admin/chapters/${chapterId}`);
    }
  } catch (error: any) {
    if (error?.code === "P2002") {
      throw new Error("Un rattachement avec ce contexte et cet ordre existe déjà");
    }
    throw error;
  }
}

export async function updateChapterAssignment(
  id: string,
  formData: FormData,
  options?: ChapterActionOptions
) {
  const currentAssignment = await prisma.chapterAssignment.findUnique({
    where: { id },
    select: {
      id: true,
      chapterId: true,
    },
  });

  if (!currentAssignment) {
    throw new Error("Rattachement introuvable");
  }

  const vertical = String(formData.get("vertical") ?? "SECONDARY").trim() as
    | "SECONDARY"
    | "BTS"
    | "HEALTH"
    | "COMMON";
  const contextType = String(formData.get("contextType") ?? "").trim() as
    | "SUBJECT"
    | "HEALTH_COURSE_UNIT"
    | "HEALTH_TEACHING_ELEMENT"
    | "BTS_TEACHING"
    | "GENERIC";
  const contextId = String(formData.get("contextId") ?? "").trim();
  const titleOverride = parseOptionalText(formData.get("titleOverride"));
  const shortTitleOverride = parseOptionalText(formData.get("shortTitleOverride"));
  const slugOverride = parseOptionalText(formData.get("slugOverride"));
  const descriptionOverride = parseOptionalText(formData.get("descriptionOverride"));
  const order = parseNumber(formData.get("order"));
  const coverageStatus = String(formData.get("coverageStatus") ?? "STRUCTURE_ONLY").trim() as
    | "STRUCTURE_ONLY"
    | "THEMES_MAPPED"
    | "QUESTIONS_AVAILABLE"
    | "READY";
  const sourceUrl = parseOptionalText(formData.get("sourceUrl"));
  const sourceLabel = parseOptionalText(formData.get("sourceLabel"));
  const sourceCheckedAt = parseOptionalDate(formData.get("sourceCheckedAt"));
  const isActive = parseBoolean(formData.get("isActive"), true);
  const isPublished = parseBoolean(formData.get("isPublished"), true);

  const result = createChapterAssignmentSchema.safeParse({
    chapterId: currentAssignment.chapterId,
    vertical,
    contextType,
    contextId,
    titleOverride,
    shortTitleOverride,
    slugOverride,
    descriptionOverride,
    order,
    coverageStatus,
    sourceUrl,
    sourceLabel,
    sourceCheckedAt: sourceCheckedAt ? sourceCheckedAt.toISOString().slice(0, 10) : undefined,
    isActive,
    isPublished,
  });

  if (!result.success) {
    const errors: CreateChapterAssignmentErrors = result.error.format();
    throw errors;
  }

  await ensureChapterAssignmentContextExists(result.data.contextType, result.data.contextId);

  try {
    await prisma.chapterAssignment.update({
      where: { id },
      data: {
        ...normalizeChapterAssignmentData(result.data),
        sourceCheckedAt: result.data.sourceCheckedAt
          ? new Date(`${result.data.sourceCheckedAt}T12:00:00.000Z`)
          : undefined,
      },
    });

    revalidatePaths([
      "/admin/chapters",
      `/admin/chapters/${currentAssignment.chapterId}`,
      `/admin/chapters/${currentAssignment.chapterId}/assignments/${id}/edit`,
      ...(options?.revalidatePaths ?? []),
    ]);

    if (!options?.skipSuccessToast) {
      await setCrudSuccessToast("chapterAssignment", "updated");
    }
    if (options?.redirectTo !== null) {
      redirect(options?.redirectTo ?? `/admin/chapters/${currentAssignment.chapterId}`);
    }
  } catch (error: any) {
    if (error?.code === "P2002") {
      throw new Error("Un rattachement avec ce contexte et cet ordre existe déjà");
    }
    throw error;
  }
}

export async function deleteChapterAssignment(
  id: string,
  options?: ChapterActionOptions
) {
  const currentAssignment = await prisma.chapterAssignment.findUnique({
    where: { id },
    select: {
      id: true,
      chapterId: true,
    },
  });

  if (!currentAssignment) {
    throw new Error("Rattachement introuvable");
  }

  await prisma.chapterAssignment.delete({
    where: { id },
  });

  revalidatePaths([
    "/admin/chapters",
    `/admin/chapters/${currentAssignment.chapterId}`,
    ...(options?.revalidatePaths ?? []),
  ]);

  if (!options?.skipSuccessToast) {
    await setCrudSuccessToast("chapterAssignment", "deleted");
  }
  if (options?.redirectTo !== null) {
    redirect(options?.redirectTo ?? `/admin/chapters/${currentAssignment.chapterId}`);
  }
}

export async function createQuizQuestion(
  chapterId: string,
  formData: FormData,
  options?: QuizQuestionActionOptions
) {
  const difficulty = String(formData.get("difficulty") ?? "").trim();
  const answerFormat = String(formData.get("answerFormat") ?? "SINGLE").trim();
  const question = String(formData.get("question") ?? "").trim();
  const choices = parseChoices(formData);
  const correctChoiceIndexes = parseCorrectChoiceIndexes(formData);
  const explanation = String(formData.get("explanation") ?? "").trim();
  const order = parseNumber(formData.get("order"));
  const isPublished = parseBoolean(formData.get("isPublished"), false);

  const result = createQuizQuestionSchema.safeParse({
    difficulty,
    answerFormat,
    question,
    choices,
    correctChoiceIndexes,
    explanation,
    order,
    isPublished,
  });

  if (!result.success) {
    const errors: CreateQuizQuestionErrors = result.error.format();
    throw errors;
  }

  try {
    const normalizedAnswerFormat = resolveQuizAnswerFormat(result.data.answerFormat);
    const normalizedCorrectChoiceIndexes = resolveCorrectChoiceIndexes({
      answerFormat: normalizedAnswerFormat,
      correctChoiceIndexes: result.data.correctChoiceIndexes,
      choiceCount: result.data.choices.length,
    });

    await prisma.quizQuestion.create({
      data: {
        chapterId,
        difficulty: result.data.difficulty,
        answerFormat: normalizedAnswerFormat,
        question: result.data.question,
        choices: result.data.choices,
        correctChoiceIndexes: normalizedCorrectChoiceIndexes,
        correctChoiceIndex: getPrimaryCorrectChoiceIndex({
          answerFormat: normalizedAnswerFormat,
          correctChoiceIndexes: normalizedCorrectChoiceIndexes,
          choiceCount: result.data.choices.length,
        }),
        explanation: result.data.explanation,
        order: result.data.order,
        isPublished: result.data.isPublished,
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
  const answerFormat = String(formData.get("answerFormat") ?? "SINGLE").trim();
  const question = String(formData.get("question") ?? "").trim();
  const choices = parseChoices(formData);
  const correctChoiceIndexes = parseCorrectChoiceIndexes(formData);
  const explanation = String(formData.get("explanation") ?? "").trim();
  const order = parseNumber(formData.get("order"));
  const isPublished = parseBoolean(formData.get("isPublished"), false);

  const result = createQuizQuestionSchema.safeParse({
    difficulty,
    answerFormat,
    question,
    choices,
    correctChoiceIndexes,
    explanation,
    order,
    isPublished,
  });

  if (!result.success) {
    const errors: CreateQuizQuestionErrors = result.error.format();
    throw errors;
  }

  try {
    const normalizedAnswerFormat = resolveQuizAnswerFormat(result.data.answerFormat);
    const normalizedCorrectChoiceIndexes = resolveCorrectChoiceIndexes({
      answerFormat: normalizedAnswerFormat,
      correctChoiceIndexes: result.data.correctChoiceIndexes,
      choiceCount: result.data.choices.length,
    });

    await prisma.quizQuestion.update({
      where: { id },
      data: {
        chapterId,
        difficulty: result.data.difficulty,
        answerFormat: normalizedAnswerFormat,
        question: result.data.question,
        choices: result.data.choices,
        correctChoiceIndexes: normalizedCorrectChoiceIndexes,
        correctChoiceIndex: getPrimaryCorrectChoiceIndex({
          answerFormat: normalizedAnswerFormat,
          correctChoiceIndexes: normalizedCorrectChoiceIndexes,
          choiceCount: result.data.choices.length,
        }),
        explanation: result.data.explanation,
        order: result.data.order,
        isPublished: result.data.isPublished,
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
