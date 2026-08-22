import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue14.shared';
import { SECTION_A_QUESTIONS } from './health-training-ue14-roles-biologiques-acides-amines-peptides.section-a.seed';
import { SECTION_B_QUESTIONS } from './health-training-ue14-roles-biologiques-acides-amines-peptides.section-b.seed';
import { SECTION_C_QUESTIONS } from './health-training-ue14-roles-biologiques-acides-amines-peptides.section-c.seed';
import { SECTION_D_QUESTIONS } from './health-training-ue14-roles-biologiques-acides-amines-peptides.section-d.seed';
import { SYNTHESIS_QUESTIONS } from './health-training-ue14-roles-biologiques-acides-amines-peptides.synthesis.seed';
import {
  UE14_BIOCH_CH11_V2_QUIZ_MAP,
  UE14_BIOCH_CH11_V2_THEME_LABELS_BY_ORDER,
} from './health-training-ue14-roles-biologiques-acides-amines-peptides.quiz-map-v2.author';
import { seedHealthTrainingChapter } from './health-training-ue14.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'roles-biologiques-acides-amines-peptides';

const sections: SeedSection[] = [
  {
    order: 1,
    title: 'Besoins et utilisations métaboliques des acides aminés',
    description:
      'Apports alimentaires, rôle structural, uréogenèse, interconversions et rôle énergétique.',
    kind: 'THEME',
  },
  {
    order: 2,
    title: 'Précurseurs biologiques et mécanismes de formation des peptides',
    description:
      'Neurotransmetteurs, hème, créatine, définition des peptides, insuline, POMC et synthèse non ribosomale.',
    kind: 'THEME',
  },
  {
    order: 3,
    title: 'Peptides thérapeutiques et hormones peptidiques',
    description:
      'Antibiotiques, cyclosporine, aspartame, hormones, glucagon et peptides natriurétiques.',
    kind: 'THEME',
  },
  {
    order: 4,
    title: 'Facteurs de croissance, cytokines, neuromédiateurs et amyloïde',
    description:
      'Signalisation par facteurs de croissance, cytokines, interférons, chimiokines, opioïdes et peptides Aβ.',
    kind: 'THEME',
  },
  {
    order: 5,
    title: 'Synthèse du chapitre',
    description: 'Révision transversale de l\u2019ensemble du chapitre.',
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

const quizSeeds: SeedQuiz[] = UE14_BIOCH_CH11_V2_QUIZ_MAP as unknown as SeedQuiz[];

export async function seedHealthTrainingUe14RolesBiologiquesAcidesAminesPeptides(
  prisma: PrismaClient,
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE14 Biochimie — Rôles biologiques des acides aminés et des peptides',
    questionThemeLabelsByOrder: UE14_BIOCH_CH11_V2_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
    purgeObsoleteQuestions: true,
  });
}
