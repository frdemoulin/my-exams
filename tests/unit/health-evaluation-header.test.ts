import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  formatHealthEvaluationDuration,
  getHealthColleBySlug,
  isSpecificInstruction,
  HEALTH_COLLES_UE14_V1,
} from '../../src/core/health-colle';

describe('Health Evaluation Intro Header & Helpers', () => {
  describe('formatHealthEvaluationDuration', () => {
    it('formate correctement les durées rondes en minutes', () => {
      assert.equal(formatHealthEvaluationDuration(1800), '30 min');
      assert.equal(formatHealthEvaluationDuration(2700), '45 min');
      assert.equal(formatHealthEvaluationDuration(4500), '75 min');
      assert.equal(formatHealthEvaluationDuration(9000), '150 min');
      assert.equal(formatHealthEvaluationDuration(null, 30), '30 min');
      assert.equal(formatHealthEvaluationDuration(null, 45), '45 min');
      assert.equal(formatHealthEvaluationDuration(null, 75), '75 min');
    });

    it('formate correctement les durées fractionnaires avec secondes', () => {
      assert.equal(formatHealthEvaluationDuration(2250), '37 min 30 s');
      assert.equal(formatHealthEvaluationDuration(null, 37.5), '37 min 30 s');
      assert.equal(formatHealthEvaluationDuration(90), '1 min 30 s');
    });

    it('gère les valeurs nulles, indéfinies ou négatives', () => {
      assert.equal(formatHealthEvaluationDuration(null, null), '0 min');
      assert.equal(formatHealthEvaluationDuration(undefined, undefined), '0 min');
      assert.equal(formatHealthEvaluationDuration(0), '0 min');
      assert.equal(formatHealthEvaluationDuration(-10), '0 min');
    });
  });

  describe('getHealthColleBySlug & Source unique de périmètre', () => {
    it('retrouve C01 et son périmètre complet de chimie générale', () => {
      const c01 = getHealthColleBySlug('c01');
      assert.ok(c01);
      assert.equal(c01.code, 'C01');
      assert.equal(c01.title, 'Chimie — Fondamentaux');
      assert.equal(c01.scopeLine, 'Chimie générale · Ch. 1 à 4');
      assert.equal(
        c01.contentLine,
        'Éléments chimiques et classification · Liaisons et électronégativité · Orbitales moléculaires · Forces intermoléculaires'
      );
      assert.equal(c01.questionCount, 20);
      assert.equal(c01.durationMinutes, 30);
    });

    it('retrouve C04 avec sa durée 37 min 30 s et son périmètre Ch. 1 à 7', () => {
      const c04 = getHealthColleBySlug('c04');
      assert.ok(c04);
      assert.equal(c04.code, 'C04');
      assert.equal(c04.scopeLine, 'Chimie générale + Orga · Ch. 1 à 7');
      assert.equal(
        c04.contentLine,
        'Chimie générale complète (Ch. 1 à 4) · Nomenclature et fonctions · Isomérie et énantiomérie · Hydrocarbures'
      );
      assert.equal(c04.questionCount, 25);
      assert.equal(c04.durationMinutes, 37.5);
      assert.equal(formatHealthEvaluationDuration(null, c04.durationMinutes), '37 min 30 s');
    });

    it('retrouve C10 (Chimie cumulative EC) et C11 (Biochimie cumulative EC)', () => {
      const c10 = getHealthColleBySlug('c10');
      assert.ok(c10);
      assert.equal(c10.badgeType, 'CUMULATIVE_EC');
      assert.equal(c10.scopeLine, 'Toute la Chimie · Chimie générale + Chimie organique');
      assert.equal(
        c10.contentLine,
        'Chimie générale complète (Ch. 1 à 4) · Chimie organique complète (Ch. 1 à 8)'
      );
      assert.equal(c10.questionCount, 30);
      assert.equal(c10.durationMinutes, 45);

      const c11 = getHealthColleBySlug('c11');
      assert.ok(c11);
      assert.equal(c11.badgeType, 'CUMULATIVE_EC');
      assert.equal(c11.scopeLine, 'Toute la Biochimie · cumulative');
      assert.equal(c11.contentLine, 'Glucides · Lipides · Protéines · Enzymologie (15 chapitres)');
      assert.equal(c11.questionCount, 30);
      assert.equal(c11.durationMinutes, 45);
    });

    it('retrouve C12 (Grande colle UE14 multi-EC)', () => {
      const c12 = getHealthColleBySlug('c12');
      assert.ok(c12);
      assert.equal(c12.badgeType, 'GRANDE_COLLE');
      assert.equal(c12.scopeLine, '3 EC · Chimie + Biochimie + Biologie cellulaire');
      assert.equal(
        c12.contentLine,
        'Chimie : toute l’EC · Biochimie : toute l’EC · Biologie cellulaire : toute l’EC'
      );
      assert.equal(c12.questionCount, 50);
      assert.equal(c12.durationMinutes, 75);
      assert.equal(formatHealthEvaluationDuration(null, c12.durationMinutes), '75 min');
    });

    it('gère les codes insensibles à la casse et les slugs inexistants', () => {
      assert.equal(getHealthColleBySlug('C02')?.id, 'c02');
      assert.equal(getHealthColleBySlug('  c03  ')?.id, 'c03');
      assert.equal(getHealthColleBySlug('inconnu'), undefined);
      assert.equal(getHealthColleBySlug(null), undefined);
    });

    it('toutes les 12 colles UE14 sont bien configurées dans HEALTH_COLLES_UE14_V1', () => {
      assert.equal(HEALTH_COLLES_UE14_V1.length, 12);
      for (const colle of HEALTH_COLLES_UE14_V1) {
        assert.ok(colle.id);
        assert.ok(colle.code);
        assert.ok(colle.title);
        assert.ok(colle.scopeLine);
        assert.ok(colle.contentLine);
        assert.ok(colle.questionCount > 0);
        assert.ok(colle.durationMinutes > 0);
      }
    });
  });

  describe('isSpecificInstruction', () => {
    it('filtre les métadonnées standard de colles', () => {
      assert.equal(
        isSpecificInstruction('Colle UE14 Reims — 20 questions — 30 min — Notation UNESS'),
        false
      );
      assert.equal(
        isSpecificInstruction('Colle UE14 Reims — 25 questions — 37.5 min — Notation UNESS'),
        false
      );
      assert.equal(
        isSpecificInstruction('Colle UE14 Reims — 25 questions — 37 min 30 s — Notation UNESS'),
        false
      );
      assert.equal(
        isSpecificInstruction('Colle UE14 Reims — 50 questions — 75 min — Notation UNESS'),
        false
      );
      assert.equal(
        isSpecificInstruction(
          "Cette colle comporte 20 questions de différents formats. La consigne propre à chaque question est indiquée au moment où elle s'affiche. Navigation libre pendant l'épreuve avec barème UNESS."
        ),
        false
      );
      assert.equal(isSpecificInstruction(''), false);
      assert.equal(isSpecificInstruction(null), false);
      assert.equal(isSpecificInstruction(undefined), false);
    });

    it('conserve les vraies consignes spécifiques utiles', () => {
      assert.equal(isSpecificInstruction('Calculatrice interdite.'), true);
      assert.equal(
        isSpecificInstruction('Utilisez le document fourni pour les questions 12 à 15.'),
        true
      );
      assert.equal(
        isSpecificInstruction(
          "Fixture technique : répondez aux formats UNESS présentés, puis soumettez l'examen."
        ),
        true
      );
    });
  });
});
