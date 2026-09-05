/**
 * Source unique de vérité pour les comptes de démonstration autorisés en DEV / E2E.
 * Strictement interdits et non reconnus en environnement de production.
 */

export const DEMO_ACCOUNT_EMAILS = {
  COLLEGE: 'demo-college@my-exams.local',
  LYCEE: 'demo-lycee@my-exams.local',
  HEALTH: 'demo-sante@my-exams.local',
} as const;

export type DemoAccountUniverse = keyof typeof DEMO_ACCOUNT_EMAILS;

export const DEMO_ACCOUNT_CANONICAL_REASONS: Record<string, string> = {
  [DEMO_ACCOUNT_EMAILS.COLLEGE]: 'Test DEV — compte de démonstration Collège',
  [DEMO_ACCOUNT_EMAILS.LYCEE]: 'Test DEV — compte de démonstration Lycée',
  [DEMO_ACCOUNT_EMAILS.HEALTH]: 'Test DEV — compte de démonstration Santé',
};

export const DEMO_ACCOUNT_EMAIL_SET = new Set<string>(
  Object.values(DEMO_ACCOUNT_EMAILS)
);

export function isDemoAccountEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return DEMO_ACCOUNT_EMAIL_SET.has(email.toLowerCase().trim());
}

export function getCanonicalDemoImpersonationReason(
  email: string | null | undefined
): string | null {
  if (!email) return null;
  const normalized = email.toLowerCase().trim();
  return DEMO_ACCOUNT_CANONICAL_REASONS[normalized] ?? null;
}
