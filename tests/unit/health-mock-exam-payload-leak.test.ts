import assert from 'node:assert/strict';
import test from 'node:test';

import {
  normalizeHealthMockExamPassageQuestion,
  normalizeHealthMockExamQuestion,
} from '../../src/core/health-mock-exam/health-mock-exam.question';
import {
  normalizePersistedPassageQuestion,
  normalizePersistedQuestion,
} from '../../src/core/questions';

test('normalizeHealthMockExamPassageQuestion strips all solution keys and explanations for MCQ', () => {
  const rawMcq = {
    id: 'q_mcq_1',
    questionType: 'mcq',
    answerFormat: 'SINGLE',
    question: 'Quel est le mécanisme principal ?',
    choices: [
      { id: 'choice_a', text: 'Proposition A' },
      { id: 'choice_b', text: 'Proposition B' },
    ],
    correctChoiceIndexes: [1],
    correctChoiceIndex: 1,
    explanation: 'Explication secrète détaillée réservée au corrigé.',
    choiceExplanations: ['Explication A secrète', 'Explication B secrète'],
    themeIds: ['theme_1'],
  };

  const passageQuestion = normalizeHealthMockExamPassageQuestion(rawMcq as any);

  // Assert canonical question is sanitized
  assert.equal(passageQuestion.id, 'q_mcq_1');
  assert.equal(passageQuestion.type, 'mcq');
  assert.ok(!passageQuestion.explanation);
  assert.deepEqual((passageQuestion as any).choiceExplanations ?? [], []);
  if (passageQuestion.type === 'mcq') {
    for (const choice of passageQuestion.choices) {
      assert.equal(choice.correct, false);
    }
  }

  // Serialized JSON test
  const serialized = JSON.stringify(passageQuestion);
  assert.ok(!serialized.includes('Explication secrète'));
  assert.ok(!serialized.includes('Explication A secrète'));
});

test('normalizeHealthMockExamPassageQuestion strips solutions for short-answer (QROC)', () => {
  const rawShortAnswer = {
    id: 'q_qroc_1',
    questionType: 'short-answer',
    answerFormat: 'SHORT_ANSWER',
    question: 'Donnez la valeur numérique en mg/L :',
    answerPayload: {
      acceptedAnswers: ['42', '42.0'],
      caseSensitive: false,
      unit: 'mg/L',
    },
    explanation: 'La valeur correcte est 42 car...',
    choices: [],
    themeIds: ['theme_2'],
  };

  const passageQuestion = normalizeHealthMockExamPassageQuestion(rawShortAnswer as any);

  assert.equal(passageQuestion.type, 'short-answer');
  assert.ok(!passageQuestion.explanation);
  assert.deepEqual(passageQuestion.acceptedAnswers, []);

  const serialized = JSON.stringify(passageQuestion);
  assert.ok(!serialized.includes('42'));
  assert.ok(!serialized.includes('La valeur correcte est 42'));
});

test('normalizeHealthMockExamPassageQuestion strips expected zones for hotspot (QZONE)', () => {
  const rawHotspot = {
    id: 'q_qzone_1',
    questionType: 'hotspot',
    answerFormat: 'HOTSPOT',
    question: 'Cliquez sur la structure anatomique correspondante :',
    answerPayload: {
      image: { src: '/images/anatomy.png', width: 800, height: 600 },
      expectedZones: [
        { id: 'zone_1', x: 25, y: 50, radius: 10, label: 'Zone secrète' },
      ],
    },
    explanation: 'La structure se situe en (25, 50).',
    choices: [],
    themeIds: ['theme_3'],
  };

  const passageQuestion = normalizeHealthMockExamPassageQuestion(rawHotspot as any);

  assert.equal(passageQuestion.type, 'hotspot');
  assert.ok(!passageQuestion.explanation);
  assert.deepEqual(passageQuestion.expectedZones, []);

  const serialized = JSON.stringify(passageQuestion);
  assert.ok(!serialized.includes('Zone secrète'));
  assert.ok(!serialized.includes('La structure se situe'));
});
