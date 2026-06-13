export const contentVerticalValues = [
  "SECONDARY",
  "BTS",
  "HEALTH",
  "COMMON",
] as const;

export type ContentVertical = (typeof contentVerticalValues)[number];

export const contentVerticalLabels: Record<ContentVertical, string> = {
  SECONDARY: "Secondaire",
  BTS: "BTS",
  HEALTH: "Santé",
  COMMON: "Commun",
};

export const chapterLevelValues = [
  "premiere",
  "terminale",
] as const;

export type ChapterLevel = (typeof chapterLevelValues)[number];

export const chapterLevelLabels: Record<ChapterLevel, string> = {
  premiere: "Première",
  terminale: "Terminale",
};

export function getChapterLevelLabel(level: string) {
  return chapterLevelLabels[level as ChapterLevel] ?? level;
}

export const chapterAssignmentContextTypeValues = [
  "SUBJECT",
  "HEALTH_COURSE_UNIT",
  "HEALTH_TEACHING_ELEMENT",
  "BTS_TEACHING",
  "GENERIC",
] as const;

export type ChapterAssignmentContextType =
  (typeof chapterAssignmentContextTypeValues)[number];

export const chapterAssignmentContextTypeLabels: Record<
  ChapterAssignmentContextType,
  string
> = {
  SUBJECT: "Matière",
  HEALTH_COURSE_UNIT: "UE santé",
  HEALTH_TEACHING_ELEMENT: "EC santé",
  BTS_TEACHING: "Enseignement BTS",
  GENERIC: "Générique",
};
