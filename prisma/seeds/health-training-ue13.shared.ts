import { compileHealthTrainingAuthorQuestion } from '../../src/core/questions/index';
import type { LegacySeedQuestion, SeedQuestion } from './health-training-ue14.shared';

export type { LegacySeedQuestion, SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
export { seedHealthTrainingChapter } from './health-training-ue14.shared';

const noCorrectChoiceLabel = 'Aucune des propositions précédentes n’est exacte.';
const noCorrectChoiceExplanation =
  'Les quatre propositions précédentes sont fausses : cette réponse permet de valider explicitement ce cas.';

export function normalizeHealthTrainingQuestions(
  questions: SeedQuestion[]
): SeedQuestion[] {
  return questions.map((rawQuestion) => {
    const question = compileHealthTrainingAuthorQuestion(rawQuestion) as LegacySeedQuestion;
    const choices = (question.choices ?? []) as unknown[];
    const correctChoiceIndexes = Array.from(new Set(question.correctChoiceIndexes ?? [])).sort(
      (left, right) => left - right
    );

    if (
      correctChoiceIndexes.some(
        (choiceIndex) => choiceIndex < 0 || choiceIndex >= choices.length
      )
    ) {
      throw new Error(`Index de réponse invalide pour la question ${question.order}.`);
    }

    if (
      question.choiceExplanations &&
      question.choiceExplanations.length !== choices.length
    ) {
      throw new Error(
        `La question ${question.order} doit fournir une explication par proposition.`
      );
    }

    if (correctChoiceIndexes.length > 0) {
      return { ...question, choices, correctChoiceIndexes } as SeedQuestion;
    }

    return {
      ...question,
      choices: [...choices, noCorrectChoiceLabel],
      correctChoiceIndexes: [choices.length],
      choiceExplanations: [
        ...(question.choiceExplanations ?? choices.map(() => '')),
        noCorrectChoiceExplanation,
      ],
    } as SeedQuestion;
  });
}
