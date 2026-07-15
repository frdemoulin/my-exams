export const normalizeChoiceExplanations = (
  value: unknown,
  choiceCount = 4
): string[] => {
  const entries = Array.isArray(value) ? value : [];

  return Array.from({ length: choiceCount }, (_, index) => {
    const entry = entries[index];
    return typeof entry === 'string' ? entry : '';
  });
};

export const hasChoiceExplanations = (choiceExplanations: readonly string[]) =>
  choiceExplanations.some((entry) => entry.trim().length > 0);

const ITEMIZED_CORRECTION_MARKER_REGEX =
  /(?:^|\n)\s*(?:[-*•]\s*)?(?:\*\*)?([A-D])(?:\*\*)?\s*(?:vrai(?:e)?|faux|fausse|correcte?|incorrecte?)(?:\*\*)?\s*[:：]\s*/giu;

const stripCorrectionHeading = (value: string) =>
  value
    .replace(/^\s*(?:\*\*)?correction(?:\s+globale)?\s*(?:\*\*)?\s*[:：.]?\s*/iu, '')
    .trim();

export const parseItemizedChoiceExplanations = (
  explanation: string,
  choiceCount = 4
) => {
  const matches = Array.from(explanation.matchAll(ITEMIZED_CORRECTION_MARKER_REGEX));
  const choiceExplanations = Array.from({ length: choiceCount }, () => '');

  if (matches.length === 0) {
    return {
      globalExplanation: explanation,
      choiceExplanations,
    };
  }

  matches.forEach((match, matchIndex) => {
    const label = match[1]?.toUpperCase();
    const choiceIndex = label ? label.charCodeAt(0) - 65 : -1;

    if (choiceIndex < 0 || choiceIndex >= choiceCount) {
      return;
    }

    const contentStart = (match.index ?? 0) + match[0].length;
    const contentEnd =
      matchIndex + 1 < matches.length
        ? matches[matchIndex + 1].index ?? explanation.length
        : explanation.length;
    choiceExplanations[choiceIndex] = explanation
      .slice(contentStart, contentEnd)
      .trim()
      .replace(/\s+$/u, '');
  });

  return {
    globalExplanation: stripCorrectionHeading(
      explanation.slice(0, matches[0].index ?? 0)
    ),
    choiceExplanations,
  };
};

export const resolveChoiceCorrectionContent = ({
  explanation,
  choiceExplanations,
  choiceCount = 4,
}: {
  explanation: string;
  choiceExplanations: unknown;
  choiceCount?: number;
}) => {
  const normalizedChoiceExplanations = normalizeChoiceExplanations(
    choiceExplanations,
    choiceCount
  );

  if (hasChoiceExplanations(normalizedChoiceExplanations)) {
    return {
      explanation,
      choiceExplanations: normalizedChoiceExplanations,
    };
  }

  const parsed = parseItemizedChoiceExplanations(explanation, choiceCount);

  if (!hasChoiceExplanations(parsed.choiceExplanations)) {
    return {
      explanation,
      choiceExplanations: normalizedChoiceExplanations,
    };
  }

  return {
    explanation: parsed.globalExplanation,
    choiceExplanations: parsed.choiceExplanations,
  };
};
