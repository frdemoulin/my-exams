/**
/**
 * Registre des slugs de chapitres Reims officiellement migrés vers le profil 5 propositions (A-E).
 * Pour ces chapitres, les formats fermés (QRU, QRM, QRP) requièrent exactement 5 propositions.
 */
export const REIMS_MIGRATED_CHAPTER_SLUGS = new Set<string>([
  "nomenclature-chimique-fonctions-organiques",
  "isomerie-enantiomerie",
  "hydrocarbures",
]);

export function isReimsMigratedChapter(chapterSlug?: string): boolean {
  if (!chapterSlug) return false;
  return REIMS_MIGRATED_CHAPTER_SLUGS.has(chapterSlug);
}
