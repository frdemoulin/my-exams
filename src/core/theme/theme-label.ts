export type ThemeLabelSource = {
  id: string;
  title: string;
  shortTitle: string | null;
};

export type QuestionThemeLabel = {
  id: string;
  label: string;
};

export function getThemeDisplayLabel(theme: {
  title: string;
  shortTitle: string | null;
}) {
  const shortTitle = theme.shortTitle?.trim();
  return shortTitle && shortTitle.length > 0 ? shortTitle : theme.title.trim();
}

export function buildThemeLabelById(
  themes: ReadonlyArray<ThemeLabelSource>,
) {
  return new Map(
    themes.map((theme) => [theme.id, getThemeDisplayLabel(theme)] as const)
  );
}

export function getQuestionThemeLabels({
  themeIds,
  themeLabelById,
}: {
  themeIds: readonly string[];
  themeLabelById: ReadonlyMap<string, string>;
}) {
  return Array.from(
    new Set(
      themeIds
        .map((themeId) => themeLabelById.get(themeId) ?? null)
        .filter((label): label is string => Boolean(label))
    )
  );
}

export function getQuestionThemes({
  themeIds,
  themeLabelById,
}: {
  themeIds: readonly string[];
  themeLabelById: ReadonlyMap<string, string>;
}) {
  const themes = new Map<string, QuestionThemeLabel>();

  themeIds.forEach((themeId) => {
    const label = themeLabelById.get(themeId);
    if (!label || themes.has(themeId)) {
      return;
    }

    themes.set(themeId, {
      id: themeId,
      label,
    });
  });

  return [...themes.values()];
}
