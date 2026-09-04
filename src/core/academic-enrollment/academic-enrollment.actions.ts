"use server";

import { auth } from "@/lib/auth/auth";
import {
  createAcademicEnrollmentFromSession,
  correctUserAcademicEnrollmentByAdmin,
  deleteUserAcademicEnrollmentByAdmin,
  type OnboardingEnrollmentChoicesInput,
  type AdminCorrectEnrollmentInput,
} from "./academic-enrollment.service";

/**
 * Server Action publique d'onboarding exportée au client.
 * Contrat public strictement limité aux choix pédagogiques (OnboardingEnrollmentChoicesInput).
 * N'accepte aucun argument de session, userId, date, academicYearId, createdBy ou lockedAt.
 * Résout obligatoirement la session côté serveur via auth().
 */
export async function createCurrentUserAcademicEnrollmentFromOnboarding(
  input: OnboardingEnrollmentChoicesInput
) {
  const session = await auth();
  return createAcademicEnrollmentFromSession(session, input);
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
