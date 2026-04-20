type ReorderedQuestionChoices = {
  choices: string[];
  correctChoiceIndex: number;
};

const normalizeCatchAllChoice = (choice: string) =>
  choice
    .trim()
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.!?]/g, '')
    .replace(/\s+/g, ' ');

export const isCatchAllChoice = (choice: string) => {
  const normalizedChoice = normalizeCatchAllChoice(choice);

  return (
    normalizedChoice === 'aucune de ces reponses' ||
    normalizedChoice === 'toutes ces reponses'
  );
};

export const reorderCatchAllChoices = (
  choices: string[],
  correctChoiceIndex: number
): ReorderedQuestionChoices => {
  if (choices.length <= 1) {
    return { choices, correctChoiceIndex };
  }

  const indexedChoices = choices.map((choice, index) => ({
    choice,
    index,
    isCatchAllChoice: isCatchAllChoice(choice),
  }));

  if (!indexedChoices.some((entry) => entry.isCatchAllChoice)) {
    return { choices, correctChoiceIndex };
  }

  const reorderedChoices = [
    ...indexedChoices.filter((entry) => !entry.isCatchAllChoice),
    ...indexedChoices.filter((entry) => entry.isCatchAllChoice),
  ];

  const reorderedCorrectChoiceIndex = reorderedChoices.findIndex(
    (entry) => entry.index === correctChoiceIndex
  );

  return {
    choices: reorderedChoices.map((entry) => entry.choice),
    correctChoiceIndex:
      reorderedCorrectChoiceIndex >= 0
        ? reorderedCorrectChoiceIndex
        : correctChoiceIndex,
  };
};