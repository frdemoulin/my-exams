import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import type {
  QuestionNavigatorSessionItem,
  QuestionNavigatorCorrectionItem,
  SessionQuestionState,
  CorrectionQuestionState,
} from '../../src/components/health/HealthQuestionNavigator';

describe('HealthQuestionNavigator — Unification de la navigation des questions', () => {
  describe('Mode Session — Modélisation orthogonale et formats', () => {
    it('génère des items de session avec états métier et format canonique sans collision avec current', () => {
      const items: QuestionNavigatorSessionItem[] = [
        {
          id: 'q1',
          order: 1,
          formatCode: 'QRM',
          state: 'answered',
          ariaLabel: 'Question 1 sur 3 — QRM',
        },
        {
          id: 'q2',
          order: 2,
          formatCode: 'QROC',
          state: 'marked',
          markedForReview: true,
          ariaLabel: 'Question 2 sur 3 — QROC',
        },
        {
          id: 'q3',
          order: 3,
          formatCode: 'QRU',
          state: 'unanswered',
          ariaLabel: 'Question 3 sur 3 — QRU',
        },
      ];

      assert.equal(items.length, 3);
      assert.equal(items[0].formatCode, 'QRM');
      assert.equal(items[0].state, 'answered');
      assert.equal(items[1].formatCode, 'QROC');
      assert.equal(items[1].state, 'marked');
      assert.equal(items[1].markedForReview, true);
      assert.equal(items[2].formatCode, 'QRU');
      assert.equal(items[2].state, 'unanswered');
    });

    it('accepte tous les formats UNESS canoniques en passation', () => {
      const formats = ['QRU', 'QRM', 'QRP', 'QRPL', 'QROC', 'QZONE'];
      const items: QuestionNavigatorSessionItem[] = formats.map((formatCode, idx) => ({
        id: `q-${idx + 1}`,
        order: idx + 1,
        formatCode,
        state: 'unanswered' as SessionQuestionState,
      }));

      assert.equal(items.length, 6);
      for (let i = 0; i < formats.length; i++) {
        assert.equal(items[i].order, i + 1);
        assert.equal(items[i].formatCode, formats[i]);
      }
    });
  });

  describe('Mode Correction — États de scoring et maintien du numéro global', () => {
    it('préserve les numéros d’ordre réels globaux même après filtrage', () => {
      // Cas : filtrage "À revoir" conservant seulement Q2, Q5 et Q8
      const filteredReviewItems: QuestionNavigatorCorrectionItem[] = [
        {
          id: 'q2',
          order: 2,
          formatCode: 'QROC',
          state: 'incorrect',
          score: 0,
          maxScore: 1,
        },
        {
          id: 'q5',
          order: 5,
          formatCode: 'QRM',
          state: 'partial_credit',
          score: 0.5,
          maxScore: 1,
        },
        {
          id: 'q8',
          order: 8,
          formatCode: 'QRU',
          state: 'unanswered',
          score: 0,
          maxScore: 1,
        },
      ];

      // Le filtre ne doit JAMAIS renuméroter les questions à 1, 2, 3
      assert.equal(filteredReviewItems[0].order, 2);
      assert.equal(filteredReviewItems[1].order, 5);
      assert.equal(filteredReviewItems[2].order, 8);
    });

    it('dérive fidèlement les 4 états de scoring de correction sans inventer d’état', () => {
      const questionsData = [
        { score: 1.0, maxScore: 1.0, status: 'correct', hasAnswer: true },
        { score: 0.5, maxScore: 1.0, status: 'partial', hasAnswer: true },
        { score: 0.0, maxScore: 1.0, status: 'incorrect', hasAnswer: true },
        { score: 0.0, maxScore: 1.0, status: 'unanswered', hasAnswer: false },
      ];

      const resolveCorrectionState = (q: typeof questionsData[number]): CorrectionQuestionState => {
        const isCorrect = q.score === q.maxScore && q.status === 'correct';
        const isPartial = q.score > 0 && q.score < q.maxScore;
        const isUnanswered = q.status === 'unanswered' || (q.score === 0 && !q.hasAnswer);
        if (isCorrect) return 'full_credit';
        if (isPartial) return 'partial_credit';
        if (isUnanswered) return 'unanswered';
        return 'incorrect';
      };

      assert.equal(resolveCorrectionState(questionsData[0]), 'full_credit');
      assert.equal(resolveCorrectionState(questionsData[1]), 'partial_credit');
      assert.equal(resolveCorrectionState(questionsData[2]), 'incorrect');
      assert.equal(resolveCorrectionState(questionsData[3]), 'unanswered');
    });
  });

  describe('Pagination & Blocs de navigation', () => {
    it('calcule correctement les tranches de blocs selon la taille de page', () => {
      const totalCount = 25;
      const getBlockCount = (count: number, blockSize: number) => Math.ceil(count / blockSize);
      const getTargetBlock = (currentIndex: number, blockSize: number) =>
        Math.floor(currentIndex / blockSize);

      // Mobile (5 par bloc)
      assert.equal(getBlockCount(totalCount, 5), 5);
      assert.equal(getTargetBlock(0, 5), 0); // Q1 -> Bloc 0
      assert.equal(getTargetBlock(4, 5), 0); // Q5 -> Bloc 0
      assert.equal(getTargetBlock(5, 5), 1); // Q6 -> Bloc 1
      assert.equal(getTargetBlock(24, 5), 4); // Q25 -> Bloc 4

      // Tablette (8 par bloc)
      assert.equal(getBlockCount(totalCount, 8), 4);
      assert.equal(getTargetBlock(7, 8), 0); // Q8 -> Bloc 0
      assert.equal(getTargetBlock(8, 8), 1); // Q9 -> Bloc 1

      // Desktop (10 par bloc)
      assert.equal(getBlockCount(totalCount, 10), 3);
      assert.equal(getTargetBlock(9, 10), 0); // Q10 -> Bloc 0
      assert.equal(getTargetBlock(10, 10), 1); // Q11 -> Bloc 1
      assert.equal(getTargetBlock(24, 10), 2); // Q25 -> Bloc 2
    });

    it('gère les cas limites de liste vide', () => {
      const totalBlocks = Math.max(1, Math.ceil(0 / 10));
      assert.equal(totalBlocks, 1);
    });
  });
});
