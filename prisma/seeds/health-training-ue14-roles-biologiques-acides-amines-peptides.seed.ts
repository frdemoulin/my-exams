import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_ORDER, SECTION_A_QUESTIONS, SECTION_A_QUIZZES, SECTION_A_THEME_LABELS_BY_ORDER } from './health-training-ue14-roles-biologiques-acides-amines-peptides.section-a.seed';
import { SECTION_B_ORDER, SECTION_B_QUESTIONS, SECTION_B_QUIZZES, SECTION_B_THEME_LABELS_BY_ORDER } from './health-training-ue14-roles-biologiques-acides-amines-peptides.section-b.seed';
import { SECTION_C_ORDER, SECTION_C_QUESTIONS, SECTION_C_QUIZZES, SECTION_C_THEME_LABELS_BY_ORDER } from './health-training-ue14-roles-biologiques-acides-amines-peptides.section-c.seed';
import { SECTION_D_ORDER, SECTION_D_QUESTIONS, SECTION_D_QUIZZES, SECTION_D_THEME_LABELS_BY_ORDER } from './health-training-ue14-roles-biologiques-acides-amines-peptides.section-d.seed';
import { SYNTHESIS_SECTION_ORDER, SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES, SYNTHESIS_THEME_LABELS_BY_ORDER } from './health-training-ue14-roles-biologiques-acides-amines-peptides.synthesis.seed';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = "roles-biologiques-acides-amines-peptides";

const sections: SeedSection[] = [
  { order: SECTION_A_ORDER, title: "Besoins et utilisations métaboliques des acides aminés", description: "Apports alimentaires, rôle structural, uréogenèse, interconversions et rôle énergétique.", kind: 'THEME' },
  { order: SECTION_B_ORDER, title: "Précurseurs biologiques et mécanismes de formation des peptides", description: "Neurotransmetteurs, hème, créatine, définition des peptides, insuline, POMC et synthèse non ribosomale.", kind: 'THEME' },
  { order: SECTION_C_ORDER, title: "Peptides thérapeutiques et hormones peptidiques", description: "Antibiotiques, cyclosporine, aspartame, hormones, glucagon et peptides natriurétiques.", kind: 'THEME' },
  { order: SECTION_D_ORDER, title: "Facteurs de croissance, cytokines, neuromédiateurs et amyloïde", description: "Signalisation par facteurs de croissance, cytokines, interférons, chimiokines, opioïdes et peptides Aβ.", kind: 'THEME' },
  { order: SYNTHESIS_SECTION_ORDER, title: "Synthèse du chapitre", description: "Révision transversale de l’ensemble du chapitre.", kind: 'SYNTHESIS' },
];

const questions: SeedQuestion[] = [...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS];
const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];
const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = { ...SECTION_A_THEME_LABELS_BY_ORDER, ...SECTION_B_THEME_LABELS_BY_ORDER, ...SECTION_C_THEME_LABELS_BY_ORDER, ...SECTION_D_THEME_LABELS_BY_ORDER, ...SYNTHESIS_THEME_LABELS_BY_ORDER };

export async function seedHealthTrainingUe14RolesBiologiquesAcidesAminesPeptides(prisma: PrismaClient) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: "UE14 Biochimie — Rôles biologiques des acides aminés et des peptides",
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [SECTION_A_ORDER, SECTION_B_ORDER, SECTION_C_ORDER, SECTION_D_ORDER, SYNTHESIS_SECTION_ORDER],
  });
}
