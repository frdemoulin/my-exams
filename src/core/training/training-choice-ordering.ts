import {
  getTrainingChoicePlainText,
  type TrainingChoiceContent,
} from './training-choice-content';

type ReorderedQuestionChoices = {
  choices: TrainingChoiceContent[];
  correctChoiceIndexes: number[];
};

const normalizeCatchAllChoice = (choice: TrainingChoiceContent) =>
  getTrainingChoicePlainText(choice)
    .trim()
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/[.!?]/g, '')
    .replace(/\s+/g, ' ');

export const isCatchAllChoice = (choice: TrainingChoiceContent) => {
  const normalizedChoice = normalizeCatchAllChoice(choice);

  return (
    normalizedChoice === 'aucune de ces reponses' ||
    normalizedChoice === 'toutes ces reponses' ||
    normalizedChoice === 'tous les items precedents sont faux' ||
    normalizedChoice === 'tous les items precedents sont vrais' ||
    normalizedChoice === 'toutes les propositions precedentes sont fausses' ||
    normalizedChoice === 'toutes les propositions precedentes sont vraies' ||
    normalizedChoice === 'toutes les affirmations precedentes sont fausses' ||
    normalizedChoice === 'toutes les affirmations precedentes sont vraies' ||
    normalizedChoice.startsWith('aucun des items precedents n est') ||
    normalizedChoice.startsWith('aucune des propositions precedentes n est') ||
    normalizedChoice.startsWith('aucune des affirmations precedentes n est')
  );
};

export const reorderCatchAllChoices = (
  choices: TrainingChoiceContent[],
  correctChoiceIndexes: number[]
): ReorderedQuestionChoices => {
  if (choices.length <= 1) {
    return { choices, correctChoiceIndexes };
  }

  const indexedChoices = choices.map((choice, index) => ({
    choice,
    index,
    isCatchAllChoice: isCatchAllChoice(choice),
  }));

  if (!indexedChoices.some((entry) => entry.isCatchAllChoice)) {
    return { choices, correctChoiceIndexes };
  }

  const reorderedChoices = [
    ...indexedChoices.filter((entry) => !entry.isCatchAllChoice),
    ...indexedChoices.filter((entry) => entry.isCatchAllChoice),
  ];

  const reorderedCorrectChoiceIndexes = correctChoiceIndexes
    .map((correctChoiceIndex) =>
      reorderedChoices.findIndex((entry) => entry.index === correctChoiceIndex)
    )
    .filter((index) => index >= 0)
    .sort((left, right) => left - right);

  return {
    choices: reorderedChoices.map((entry) => entry.choice),
    correctChoiceIndexes: reorderedCorrectChoiceIndexes,
  };
};
