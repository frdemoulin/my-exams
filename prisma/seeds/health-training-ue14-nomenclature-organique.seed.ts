import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { UE14_CH12_SECTION_A_V2_QUESTIONS } from './health-training-ue14-nomenclature-organique.section-a.v2.author.seed';
import { UE14_CH12_SECTION_B_V2_QUESTIONS } from './health-training-ue14-nomenclature-organique.section-b.v2.author.seed';
import { UE14_CH12_SECTION_C_V2_QUESTIONS } from './health-training-ue14-nomenclature-organique.section-c.v2.author.seed';
import { UE14_CH12_SECTION_D_V2_QUESTIONS } from './health-training-ue14-nomenclature-organique.section-d.v2.author.seed';
import { UE14_CH12_SECTION_E_V2_QUESTIONS } from './health-training-ue14-nomenclature-organique.section-e.v2.author.seed';
import { UE14_CH12_SYNTHESIS_V2_QUESTIONS } from './health-training-ue14-nomenclature-organique.synthesis.v2.author.seed';
import {
  UE14_CH12_V2_QUIZ_MAP,
  UE14_CH12_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-nomenclature-organique.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'nomenclature-organique';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `La méthode : chaîne principale et numérotation`,
    description: `Identification de la fonction principale, sélection de la chaîne carbonée, sens de numérotation, substituants et insaturations.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Alcools, thiols et amines`,
    description: `Nomenclature des alcools, thiols et amines : suffixes, locants, ramifications et substitutions sur l'azote.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Aldéhydes, cétones et nitriles`,
    description: `Nomenclature des aldéhydes, cétones et nitriles : carbone fonctionnel, suffixes et numérotation.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Acides, esters et amides`,
    description: `Nomenclature des acides carboxyliques, des esters et des amides, y compris les formes ramifiées et N-substituées.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Molécules polyfonctionnelles et priorités`,
    description: `Hiérarchie des groupes fonctionnels, détermination de la fonction principale et expression des fonctions secondaires.`,
    kind: 'THEME',
  },
  {
    order: 6,
    title: `Synthèse du chapitre`,
    description: `Consolidation transversale de la méthode de nomenclature et entraînement global sur les familles étudiées.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  ...UE14_CH12_SECTION_A_V2_QUESTIONS as unknown as SeedQuestion[],
  ...UE14_CH12_SECTION_B_V2_QUESTIONS as unknown as SeedQuestion[],
  ...UE14_CH12_SECTION_C_V2_QUESTIONS as unknown as SeedQuestion[],
  ...UE14_CH12_SECTION_D_V2_QUESTIONS as unknown as SeedQuestion[],
  ...UE14_CH12_SECTION_E_V2_QUESTIONS as unknown as SeedQuestion[],
  ...UE14_CH12_SYNTHESIS_V2_QUESTIONS as unknown as SeedQuestion[],
];

const quizSeeds: SeedQuiz[] = UE14_CH12_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14NomenclatureOrganique(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 12 (chimie organique 8)',
    questionThemeLabelsByOrder: UE14_CH12_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5, 6],
    purgeObsoleteQuestions: true,
  });
}
