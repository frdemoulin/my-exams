import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createMcqStudentAnswerFromIndexes,
  evaluateQuestion,
  normalizePersistedQuestion,
  normalizePersistedPassageQuestion,
  type Question,
  type StudentAnswer,
} from '../../src/core/questions';

// Test session simulation helpers mimicking training-quiz-session.service logic

type SimulatedAttemptQuestion = {
  id: string;
  questionId: string;
  order: number;
  questionUpdatedAt: Date;
  question: {
    id: string;
    question: string;
    choices: Array<{ id: string; text: string }>;
    correctChoiceIndexes: number[];
    explanation: string;
    updatedAt: Date;
  };
  responsePayload: StudentAnswer | null;
};

type SimulatedAttempt = {
  id: string;
  userId: string;
  chapterId: string;
  quizId: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'ABANDONED';
  score?: number | null;
  maxScore?: number | null;
  attemptQuestions: SimulatedAttemptQuestion[];
};

function simulateSubmitQuizSession({
  attempt,
  userId,
  answers,
}: {
  attempt: SimulatedAttempt | null;
  userId?: string | null;
  answers: Array<{ questionId: string; responsePayload?: any; selectedChoiceIndexes?: number[] }>;
}) {
  if (!attempt) {
    throw new Error('Session de quiz introuvable.');
  }

  if (userId && attempt.userId !== userId) {
    throw new Error('Accès non autorisé à cette session de quiz.');
  }

  if (attempt.status === 'COMPLETED') {
    return {
      status: 'ALREADY_COMPLETED' as const,
      score: attempt.score,
      maxScore: attempt.maxScore,
      idempotent: true,
    };
  }

  if (attempt.status !== 'IN_PROGRESS') {
    throw new Error("Cette session de quiz n'est plus active.");
  }

  const answersByQuestionId = new Map(answers.map((a) => [a.questionId, a]));

  let totalScore = 0;
  let totalMaxScore = 0;
  const evaluatedQuestions: any[] = [];

  // Strictly evaluate ONLY questions belonging to the registered attempt
  for (const aq of attempt.attemptQuestions) {
    if (
      aq.questionUpdatedAt &&
      aq.question.updatedAt &&
      aq.questionUpdatedAt.getTime() !== aq.question.updatedAt.getTime()
    ) {
      throw new Error(
        'Une ou plusieurs questions ont été modifiées depuis le début de votre session. Veuillez recommencer le quiz.'
      );
    }

    const canonicalQuestion = normalizePersistedQuestion({
      id: aq.question.id,
      question: aq.question.question,
      choices: aq.question.choices,
      answerFormat: 'SINGLE',
      correctChoiceIndexes: aq.question.correctChoiceIndexes,
      explanation: aq.question.explanation,
    });

    const submitted = answersByQuestionId.get(aq.question.id);
    let studentAnswer: StudentAnswer | null = null;

    if (submitted?.responsePayload) {
      studentAnswer = submitted.responsePayload;
    } else if (submitted?.selectedChoiceIndexes && canonicalQuestion.type === 'mcq') {
      studentAnswer = createMcqStudentAnswerFromIndexes({
        question: canonicalQuestion,
        selectedChoiceIndexes: submitted.selectedChoiceIndexes,
      });
    }

    const evaluation = studentAnswer
      ? evaluateQuestion(canonicalQuestion, studentAnswer)
      : { questionId: canonicalQuestion.id, status: 'unanswered' as const, score: 0, maxScore: 1 };

    totalScore += evaluation.score;
    totalMaxScore += evaluation.maxScore;
    evaluatedQuestions.push({
      questionId: aq.question.id,
      evaluation,
    });
  }

  // Atomically mark completed
  attempt.status = 'COMPLETED';
  attempt.score = totalScore;
  attempt.maxScore = totalMaxScore;

  return {
    status: 'SUBMITTED' as const,
    score: totalScore,
    maxScore: totalMaxScore,
    evaluatedQuestions,
  };
}

test('Session Security: rejette une session inexistante', () => {
  assert.throws(
    () => {
      simulateSubmitQuizSession({
        attempt: null,
        userId: 'user_123',
        answers: [],
      });
    },
    { message: 'Session de quiz introuvable.' }
  );
});

test('Session Security: rejette une session appartenant à un autre utilisateur', () => {
  const attempt: SimulatedAttempt = {
    id: 'attempt_abc',
    userId: 'user_legitimate_owner',
    chapterId: 'chapter_1',
    quizId: 'quiz_1',
    status: 'IN_PROGRESS',
    attemptQuestions: [],
  };

  assert.throws(
    () => {
      simulateSubmitQuizSession({
        attempt,
        userId: 'user_malicious_attacker',
        answers: [],
      });
    },
    { message: 'Accès non autorisé à cette session de quiz.' }
  );
});

test('Session Security: ignore les questions injectées hors session', () => {
  const attempt: SimulatedAttempt = {
    id: 'attempt_legit',
    userId: 'user_1',
    chapterId: 'chapter_1',
    quizId: 'quiz_1',
    status: 'IN_PROGRESS',
    attemptQuestions: [
      {
        id: 'aq_1',
        questionId: 'q_valid_1',
        order: 1,
        questionUpdatedAt: new Date('2026-01-01'),
        question: {
          id: 'q_valid_1',
          question: 'Question 1',
          choices: ['Option A', 'Option B'] as any,
          correctChoiceIndexes: [0],
          explanation: 'Explication 1',
          updatedAt: new Date('2026-01-01'),
        },
        responsePayload: null,
      },
    ],
  };

  const result = simulateSubmitQuizSession({
    attempt,
    userId: 'user_1',
    answers: [
      { questionId: 'q_valid_1', selectedChoiceIndexes: [0] },
      // Injected rogue question that does not belong to the session
      { questionId: 'q_injected_rogue', selectedChoiceIndexes: [0] },
      { questionId: 'q_another_exam_q', selectedChoiceIndexes: [0] },
    ],
  });

  // Only the genuine session question must be evaluated
  assert.ok(result.evaluatedQuestions);
  assert.equal(result.evaluatedQuestions.length, 1);
  assert.equal(result.evaluatedQuestions[0]?.questionId, 'q_valid_1');
  assert.equal(result.maxScore, 1);
  assert.equal(result.score, 1);
});

test('Session Security: soumission idempotente sans double comptage', () => {
  const attempt: SimulatedAttempt = {
    id: 'attempt_idempotent',
    userId: 'user_1',
    chapterId: 'chapter_1',
    quizId: 'quiz_1',
    status: 'IN_PROGRESS',
    attemptQuestions: [
      {
        id: 'aq_1',
        questionId: 'q_1',
        order: 1,
        questionUpdatedAt: new Date('2026-01-01'),
        question: {
          id: 'q_1',
          question: 'Question 1',
          choices: ['Option A', 'Option B'] as any,
          correctChoiceIndexes: [0],
          explanation: 'Explication',
          updatedAt: new Date('2026-01-01'),
        },
        responsePayload: null,
      },
    ],
  };

  // 1ère soumission
  const firstSubmission = simulateSubmitQuizSession({
    attempt,
    userId: 'user_1',
    answers: [{ questionId: 'q_1', selectedChoiceIndexes: [0] }],
  });

  assert.equal(firstSubmission.status, 'SUBMITTED');
  assert.equal(firstSubmission.score, 1);
  assert.equal(attempt.status, 'COMPLETED');

  // 2ème soumission concurrente / rejeu
  const duplicateSubmission = simulateSubmitQuizSession({
    attempt,
    userId: 'user_1',
    answers: [{ questionId: 'q_1', selectedChoiceIndexes: [0] }],
  });

  assert.equal(duplicateSubmission.status, 'ALREADY_COMPLETED');
  assert.equal(duplicateSubmission.idempotent, true);
  assert.equal(duplicateSubmission.score, 1);
});

test('Session Security: questionUpdatedAt capture la version de question lors du démarrage', () => {
  const initialDate = new Date('2026-01-15T10:00:00Z');
  const laterEditDate = new Date('2026-02-01T14:30:00Z');

  const attemptQuestion: SimulatedAttemptQuestion = {
    id: 'aq_versioned',
    questionId: 'q_chem_1',
    order: 1,
    questionUpdatedAt: initialDate,
    question: {
      id: 'q_chem_1',
      question: 'Question modifiée ultérieurement dans le CMS',
      choices: [{ id: 'c1', text: 'Option A' }],
      correctChoiceIndexes: [0],
      explanation: 'Explication',
      updatedAt: laterEditDate,
    },
    responsePayload: null,
  };

  // L'horodatage capturé au démarrage de la tentative permet de détecter les mutations post-démarrage
  assert.ok(attemptQuestion.question.updatedAt > attemptQuestion.questionUpdatedAt);
  assert.equal(attemptQuestion.questionUpdatedAt.toISOString(), '2026-01-15T10:00:00.000Z');
});

test('Session Security: soumission refusée proprement si questionUpdatedAt diffère de la version courante', () => {
  const initialDate = new Date('2026-01-15T10:00:00Z');
  const laterEditDate = new Date('2026-02-01T14:30:00Z');

  const attempt: SimulatedAttempt = {
    id: 'attempt_mutated_q',
    userId: 'user_1',
    chapterId: 'chapter_1',
    quizId: 'quiz_1',
    status: 'IN_PROGRESS',
    attemptQuestions: [
      {
        id: 'aq_mutated',
        questionId: 'q_chem_1',
        order: 1,
        questionUpdatedAt: initialDate,
        question: {
          id: 'q_chem_1',
          question: 'Question modifiée dans le CMS entre le début et la fin',
          choices: [{ id: 'c1', text: 'Option A modifiée' }],
          correctChoiceIndexes: [0],
          explanation: 'Nouvelle explication',
          updatedAt: laterEditDate,
        },
        responsePayload: null,
      },
    ],
  };

  assert.throws(
    () => {
      simulateSubmitQuizSession({
        attempt,
        userId: 'user_1',
        answers: [{ questionId: 'q_chem_1', selectedChoiceIndexes: [0] }],
      });
    },
    {
      message:
        'Une ou plusieurs questions ont été modifiées depuis le début de votre session. Veuillez recommencer le quiz.',
    }
  );
});
