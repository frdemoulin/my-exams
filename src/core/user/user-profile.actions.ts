"use server";

import { revalidatePath } from 'next/cache';
import { auth } from '@/lib/auth/auth';
import { getSessionEffectiveUserId } from '@/lib/auth/session';
import prisma from '@/lib/db/prisma';
import { saveUserPedagogicalProfileSchema } from './user-profile.schemas';

const text = (formData: FormData, key: string) => String(formData.get(key) ?? '').trim();
const strings = (formData: FormData, key: string) =>
  Array.from(
    new Set(
      formData
        .getAll(key)
        .map(String)
        .map((value) => value.trim())
        .filter(Boolean)
    )
  );

export async function saveCurrentUserPedagogicalProfile(formData: FormData) {
  const session = await auth();
  const userId = getSessionEffectiveUserId(session);

  if (!userId) {
    throw new Error('Connexion requise.');
  }

  const result = saveUserPedagogicalProfileSchema.safeParse({
    audience: text(formData, 'audience'),
    secondaryGradeId: text(formData, 'secondaryGradeId'),
    secondaryTeachingIds: strings(formData, 'secondaryTeachingIds'),
    healthInstitutionId: text(formData, 'healthInstitutionId'),
    healthProgramVersionId: text(formData, 'healthProgramVersionId'),
    healthPathwayId: text(formData, 'healthPathwayId'),
    healthCourseUnitId: text(formData, 'healthCourseUnitId'),
    healthTeachingElementId: text(formData, 'healthTeachingElementId'),
  });

  if (!result.success) {
    throw new Error(
      result.error.issues[0]?.message ?? 'Le profil pédagogique est invalide.'
    );
  }

  const normalizedData =
    result.data.audience === 'SECONDARY'
      ? {
          audience: result.data.audience,
          secondaryGradeId: result.data.secondaryGradeId ?? null,
          secondaryTeachingIds: result.data.secondaryTeachingIds,
          healthInstitutionId: null,
          healthProgramVersionId: null,
          healthPathwayId: null,
          healthCourseUnitId: null,
          healthTeachingElementId: null,
        }
      : {
          audience: result.data.audience,
          secondaryGradeId: null,
          secondaryTeachingIds: [],
          healthInstitutionId: result.data.healthInstitutionId ?? null,
          healthProgramVersionId: result.data.healthProgramVersionId ?? null,
          healthPathwayId: result.data.healthPathwayId ?? null,
          healthCourseUnitId: result.data.healthCourseUnitId ?? null,
          healthTeachingElementId: result.data.healthTeachingElementId ?? null,
        };

  if (normalizedData.audience === 'SECONDARY') {
    const grade = await prisma.grade.findUnique({
      where: { id: normalizedData.secondaryGradeId as string },
      select: { id: true },
    });

    if (!grade) {
      throw new Error('Le niveau scolaire sélectionné n’existe plus.');
    }

    if (normalizedData.secondaryTeachingIds.length > 0) {
      const teachings = await prisma.teaching.findMany({
        where: {
          id: { in: normalizedData.secondaryTeachingIds },
        },
        select: {
          id: true,
          gradeId: true,
        },
      });

      if (teachings.length !== normalizedData.secondaryTeachingIds.length) {
        throw new Error('Un ou plusieurs enseignements sélectionnés n’existent plus.');
      }

      if (
        teachings.some(
          (teaching) => teaching.gradeId !== normalizedData.secondaryGradeId
        )
      ) {
        throw new Error('Les enseignements sélectionnés ne correspondent pas à ce niveau.');
      }
    }
  }

  if (normalizedData.audience === 'HEALTH') {
    const institution = await prisma.healthInstitution.findUnique({
      where: { id: normalizedData.healthInstitutionId as string },
      select: { id: true },
    });

    if (!institution) {
      throw new Error('La faculté sélectionnée n’existe plus.');
    }

    if (normalizedData.healthProgramVersionId) {
      const version = await prisma.healthProgramVersion.findUnique({
        where: { id: normalizedData.healthProgramVersionId },
        select: {
          id: true,
          institutionId: true,
        },
      });

      if (!version || version.institutionId !== normalizedData.healthInstitutionId) {
        throw new Error('La maquette sélectionnée n’appartient pas à cette faculté.');
      }
    }

    if (normalizedData.healthPathwayId) {
      const pathway = await prisma.healthPathway.findUnique({
        where: { id: normalizedData.healthPathwayId },
        select: {
          id: true,
          programVersionId: true,
        },
      });

      if (
        !pathway ||
        pathway.programVersionId !== normalizedData.healthProgramVersionId
      ) {
        throw new Error('Le parcours sélectionné n’appartient pas à cette maquette.');
      }
    }

    if (normalizedData.healthCourseUnitId) {
      const courseUnit = await prisma.healthCourseUnit.findUnique({
        where: { id: normalizedData.healthCourseUnitId },
        select: {
          id: true,
          programVersionId: true,
          pathwayId: true,
          isCommonToAllPathways: true,
        },
      });

      if (!courseUnit) {
        throw new Error('L’UE sélectionnée n’existe plus.');
      }

      if (courseUnit.programVersionId !== normalizedData.healthProgramVersionId) {
        throw new Error('L’UE sélectionnée n’appartient pas à cette maquette.');
      }

      if (
        normalizedData.healthPathwayId &&
        courseUnit.pathwayId &&
        courseUnit.pathwayId !== normalizedData.healthPathwayId &&
        !courseUnit.isCommonToAllPathways
      ) {
        throw new Error('L’UE sélectionnée n’appartient pas à ce parcours.');
      }
    }

    if (normalizedData.healthTeachingElementId) {
      const teachingElement = await prisma.healthTeachingElement.findUnique({
        where: { id: normalizedData.healthTeachingElementId },
        select: {
          id: true,
          courseUnitId: true,
        },
      });

      if (
        !teachingElement ||
        teachingElement.courseUnitId !== normalizedData.healthCourseUnitId
      ) {
        throw new Error('L’EC sélectionné n’appartient pas à cette UE.');
      }
    }
  }

  await prisma.userPedagogicalProfile.upsert({
    where: { userId },
    update: normalizedData,
    create: {
      userId,
      ...normalizedData,
    },
  });

  revalidatePath('/dashboard');
  revalidatePath('/sante');
}
