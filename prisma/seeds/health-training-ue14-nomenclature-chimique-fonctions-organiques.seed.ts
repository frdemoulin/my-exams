import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-nomenclature-chimique-fonctions-organiques.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-nomenclature-chimique-fonctions-organiques.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-nomenclature-chimique-fonctions-organiques.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-nomenclature-chimique-fonctions-organiques.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-nomenclature-chimique-fonctions-organiques.synthesis.seed';
import {
  UE14_CH5_V2_QUIZ_MAP,
  UE14_CH5_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-nomenclature-chimique-fonctions-organiques.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences physiques';
const CHAPTER_SLUG = 'nomenclature-chimique-fonctions-organiques';

const sections: SeedSection[] = [
  {
    order: 1,
    title: `Formule brute et composition des molécules organiques`,
    description: `Rôle de la nomenclature, formule brute, éléments constitutifs de la matière organique, valence usuelle de H, des halogènes, de O, de N et de C, microanalyse chimique, calcul de la masse moléculaire et pourcentage massique d'un élément.`,
    kind: 'THEME',
  },
  {
    order: 2,
    title: `Fonctions chimiques oxygénées`,
    description: `Reconnaissance des alcools primaire, secondaire et tertiaire, des acides carboxyliques, éthers, esters, cétones, aldéhydes, peroxydes et carbonates.`,
    kind: 'THEME',
  },
  {
    order: 3,
    title: `Fonctions azotées et soufrées`,
    description: `Reconnaissance des amines primaire, secondaire et tertiaire, des amides, nitriles, carbamates, ammoniums quaternaires et thiols, avec distinction entre amine et ammonium quaternaire.`,
    kind: 'THEME',
  },
  {
    order: 4,
    title: `Chaînes carbonées et nomenclature de base`,
    description: `Carbones primaire, secondaire, tertiaire et quaternaire, distinction entre degré d'un carbone et classe d'un alcool, préfixes méth-, éth-, prop-, groupes alkyles et nomenclature des alcanes simples.`,
    kind: 'THEME',
  },
  {
    order: 5,
    title: `Synthèse du chapitre`,
    description: `Section transversale combinant formule brute et microanalyse, valence des atomes, reconnaissance simultanée de plusieurs fonctions, classe des alcools et degré des carbones, préfixes, groupes alkyles, alcanes et pièges entre fonctions proches.`,
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = [
  ...SECTION_A_QUESTIONS,
  ...SECTION_B_QUESTIONS,
  ...SECTION_C_QUESTIONS,
  ...SECTION_D_QUESTIONS,
  ...SYNTHESIS_QUESTIONS,
];

const quizSeeds: SeedQuiz[] = UE14_CH5_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14NomenclatureChimiqueFonctionsOrganiques(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 chapitre 5 (chimie organique 1)',
    questionThemeLabelsByOrder: UE14_CH5_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    masterCleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
