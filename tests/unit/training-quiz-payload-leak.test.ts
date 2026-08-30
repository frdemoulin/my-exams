import assert from 'node:assert/strict';
import test from 'node:test';

import {
  normalizePersistedPassageQuestion,
  normalizePersistedQuestion,
  evaluateQuestion,
  createMcqStudentAnswerFromIndexes,
} from '../../src/core/questions';

test('normalizePersistedPassageQuestion sanitizes MCQ for quiz passage', () => {
  const persistedMcq = {
    id: 'persisted_mcq_1',
    questionType: 'mcq' as const,
    question: 'Quelle est la bonne réponse ?',
    choices: [
      { id: 'c1', text: 'Option 1' },
      { id: 'c2', text: 'Option 2' },
      { id: 'c3', text: 'Option 3' },
    ],
    answerFormat: 'SINGLE' as const,
    correctChoiceIndexes: [1],
    explanation: 'Explication détaillée confidentielle.',
    choiceExplanations: ['Faux car...', 'Vrai car...', 'Faux car...'],
  };

  const passageQuestion = normalizePersistedPassageQuestion(persistedMcq);

  assert.equal(passageQuestion.id, 'persisted_mcq_1');
  assert.equal(passageQuestion.type, 'mcq');
  assert.ok(!passageQuestion.explanation);
  assert.deepEqual((passageQuestion as any).choiceExplanations ?? [], []);
  if (passageQuestion.type === 'mcq') {
    for (const choice of passageQuestion.choices) {
      assert.equal(choice.correct, false);
    }
  }

  // Ensure JSON flight serialization does not contain the leak
  const flightPayload = JSON.stringify(passageQuestion);
  assert.ok(!flightPayload.includes('Explication détaillée confidentielle'));
  assert.ok(!flightPayload.includes('Vrai car...'));
});

test('normalizePersistedPassageQuestion sanitizes QROC short-answer for quiz passage', () => {
  const persistedShortAnswer = {
    id: 'persisted_qroc_1',
    questionType: 'short-answer' as const,
    question: 'Quelle est la concentration molaire (en mol/L) ?',
    answerPayload: {
      acceptedAnswers: ['0.05', '5e-2', '5*10^-2'],
      caseSensitive: false,
    },
    choices: [],
    explanation: 'Le calcul donne C = n/V = 0.05 mol/L.',
    choiceExplanations: [],
  };

  const passageQuestion = normalizePersistedPassageQuestion(persistedShortAnswer);

  assert.equal(passageQuestion.type, 'short-answer');
  assert.ok(!passageQuestion.explanation);
  assert.deepEqual(passageQuestion.acceptedAnswers, []);

  const flightPayload = JSON.stringify(passageQuestion);
  assert.ok(!flightPayload.includes('0.05'));
  assert.ok(!flightPayload.includes('Le calcul donne'));
});

test('normalizePersistedPassageQuestion sanitizes QZONE hotspot for quiz passage', () => {
  const persistedHotspot = {
    id: 'persisted_hotspot_1',
    questionType: 'hotspot' as const,
    question: 'Pointez le centre de rotation du système :',
    answerPayload: {
      image: { src: '/img/diagram.png', width: 600, height: 400 },
      expectedZones: [
        { id: 'zone_target', x: 50, y: 50, radius: 15, label: 'Centre exact' },
      ],
    },
    choices: [],
    explanation: 'Le centre se situe exactement au point (50, 50).',
    choiceExplanations: [],
  };

  const passageQuestion = normalizePersistedPassageQuestion(persistedHotspot);

  assert.equal(passageQuestion.type, 'hotspot');
  assert.ok(!passageQuestion.explanation);
  assert.deepEqual(passageQuestion.expectedZones, []);

  const flightPayload = JSON.stringify(passageQuestion);
  assert.ok(!flightPayload.includes('Centre exact'));
  assert.ok(!flightPayload.includes('Le centre se situe'));
});
