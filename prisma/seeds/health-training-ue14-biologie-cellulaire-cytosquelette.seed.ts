/** UE14 – Biologie cellulaire – Chapitre 3 : Cytosquelette — V2 active refonte finale */
import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-biologie-cellulaire-cytosquelette.synthesis.seed';
import { UE14_CELL_CH3_V2_QUIZ_MAP, UE14_CELL_CH3_V2_THEME_LABELS_BY_ORDER } from './health-training-ue14-biologie-cellulaire-cytosquelette.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';
const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'cytosquelette';
const sections: SeedSection[] = [
  { order: 1, title: 'Organisation générale et microtubules', description: 'Trois réseaux, structure, polarité, centrosome et instabilité dynamique.', kind: 'THEME' },
  { order: 2, title: 'Structures et fonctions des microtubules', description: 'Centrioles, cils, flagelles, moteurs moléculaires et fuseau mitotique.', kind: 'THEME' },
  { order: 3, title: 'Filaments d’actine : structure et dynamique', description: 'Actine G/F, nucléation, treadmilling, faisceaux et réseaux.', kind: 'THEME' },
  { order: 4, title: 'Actomyosine, migration et filaments intermédiaires', description: 'Myosines, migration, FI, jonctions et résistance mécanique.', kind: 'THEME' },
  { order: 5, title: 'Synthèse du chapitre', description: 'Révision transversale du cytosquelette.', kind: 'SYNTHESIS' },
];
const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = UE14_CELL_CH3_V2_QUIZ_MAP as unknown as SeedQuiz[];
export async function seedHealthTrainingUe14BiologieCellulaireCytosquelette(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biologie cellulaire — chapitre 3',
    questionThemeLabelsByOrder: UE14_CELL_CH3_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
