"use server";

import { auth } from "@/lib/auth/auth";
import { getSessionEffectiveUserId } from "@/lib/auth/session";
import {
  createAndLockUserAcademicEnrollment,
  correctUserAcademicEnrollmentByAdmin,
  deleteUserAcademicEnrollmentByAdmin,
  AcademicEnrollmentError,
  type OnboardingEnrollmentChoicesInput,
  type AdminCorrectEnrollmentInput,
} from "./academic-enrollment.service";

/**
 * Intention utilisateur dédiée : crée l'affectation annuelle lors de l'onboarding.
 * Résout la session serveur et l'effectiveUserId, l'année active courante,
 * et force createdBy = 'SELF_ONBOARDING'.
 */
export async function createCurrentUserAcademicEnrollmentFromOnboarding(
  input: OnboardingEnrollmentChoicesInput
) {
  const session = await auth();
  const effectiveUserId = getSessionEffectiveUserId(session);
  if (!effectiveUserId) {
    throw new AcademicEnrollmentError(
      "Authentification requise pour effectuer son affectation pédagogique.",
      "UNAUTHENTICATED"
    );
  }

  return createAndLockUserAcademicEnrollment({
    userId: effectiveUserId,
    audience: input.audience,
    secondaryGradeId: input.secondaryGradeId,
    secondaryTeachingIds: input.secondaryTeachingIds,
    healthProgramVersionId: input.healthProgramVersionId,
    healthPathwayId: input.healthPathwayId,
    date: input.date,
    createdBy: "SELF_ONBOARDING",
  });
}

/**
 * Action serveur de rectification administrative (ADMIN uniquement).
 * Résout la session serveur et applique la vérification de rôle.
 */
export async function correctUserAcademicEnrollmentByAdminAction(
  input: AdminCorrectEnrollmentInput
) {
  const session = await auth();
  return correctUserAcademicEnrollmentByAdmin(input, session);
}

/**
 * Action serveur de suppression administrative (ADMIN uniquement).
 * Résout la session serveur et applique la vérification de rôle.
 */
export async function deleteUserAcademicEnrollmentByAdminAction(input: {
  enrollmentId: string;
}) {
  const session = await auth();
  return deleteUserAcademicEnrollmentByAdmin(input, session);
}
