"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db/prisma";
import {
  createExerciseCorrectionSchema,
  CreateExerciseCorrectionErrors,
} from "./exercise-correction.types";

type DeleteExerciseCorrectionOptions = {
  exerciseId?: string;
  revalidatePaths?: string[];
};

export const createExerciseCorrection = async (formData: FormData) => {
  const values = Object.fromEntries(formData.entries());

  const result = createExerciseCorrectionSchema.safeParse({
    exerciseId: values.exerciseId,
    source: values.source,
    url: values.url,
    type: values.type || "pdf",
    quality: values.quality ? Number(values.quality) : undefined,
    author: values.author,
  });

  if (!result.success) {
    const errors: CreateExerciseCorrectionErrors = result.error.format();
    console.error("Invalid exercise correction data: ", errors);
    throw errors;
  }

  const { exerciseId, source, url, type, quality, author } = result.data;

  await prisma.exerciseCorrection.create({
    data: {
      exerciseId,
      source,
      url,
      type,
      quality,
      author,
    },
  });

  revalidatePath(`/admin/exercises/${exerciseId}`);
};

export const deleteExerciseCorrection = async (
  id: string,
  options: DeleteExerciseCorrectionOptions = {}
) => {
  await prisma.exerciseCorrection.delete({
    where: {
      id,
    },
  });

  const paths = new Set(options.revalidatePaths ?? []);
  if (options.exerciseId) {
    paths.add(`/admin/exercises/${options.exerciseId}`);
  }
  paths.forEach((path) => revalidatePath(path));
};
