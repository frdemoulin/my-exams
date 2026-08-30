import type {
  ThemeIdsByQuestionStableId,
  ThemeTitlesByQuestionStableId,
} from "../../health-mock-exam-theme-ids";

export {
  UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID,
  type Ue14ColleThemeMappedStableId,
} from "./health-colle-ue14-theme-mapping.final";

import { UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID } from "./health-colle-ue14-theme-mapping.final";

export const UE14_COLLE_THEME_TITLES_BY_QUESTION_STABLE_ID = {} satisfies ThemeTitlesByQuestionStableId;

export function getUE14ColleThemeIdsByQuestionStableId(colleCode: string) {
  const stableIdPrefix = `${colleCode.trim().toLowerCase()}-`;

  return Object.fromEntries(
    Object.entries(UE14_COLLE_THEME_IDS_BY_QUESTION_STABLE_ID)
      .filter(([stableId]) =>
        stableId.trim().toLowerCase().startsWith(stableIdPrefix)
      )
      .map(([stableId, themeIds]) => [stableId, [...themeIds]])
  ) as ThemeIdsByQuestionStableId;
}

export function getUE14ColleThemeTitlesByQuestionStableId(colleCode: string) {
  const stableIdPrefix = `${colleCode.trim().toLowerCase()}-`;

  return Object.fromEntries(
    Object.entries(UE14_COLLE_THEME_TITLES_BY_QUESTION_STABLE_ID).filter(
      ([stableId]) => stableId.trim().toLowerCase().startsWith(stableIdPrefix)
    )
  ) as ThemeTitlesByQuestionStableId;
}
