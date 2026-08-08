import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue13.shared';
import { SECTION_A_QUESTIONS, SECTION_A_QUIZZES } from './health-training-ue13-histologie-definitions-techniques-microscopie.section-a.seed';
import { SECTION_B_QUESTIONS, SECTION_B_QUIZZES } from './health-training-ue13-histologie-definitions-techniques-microscopie.section-b.seed';
import { SECTION_C_QUESTIONS, SECTION_C_QUIZZES } from './health-training-ue13-histologie-definitions-techniques-microscopie.section-c.seed';
import { SECTION_D_QUESTIONS, SECTION_D_QUIZZES } from './health-training-ue13-histologie-definitions-techniques-microscopie.section-d.seed';
import { SECTION_E_QUESTIONS, SECTION_E_QUIZZES } from './health-training-ue13-histologie-definitions-techniques-microscopie.section-e.seed';
import { SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES } from './health-training-ue13-histologie-definitions-techniques-microscopie.synthesis.seed';
import { normalizeHealthTrainingQuestions, seedHealthTrainingChapter } from './health-training-ue13.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'definitions-techniques-microscopie';

const sections: SeedSection[] = [
  {
    order: 1,
    title: "Généralités sur l’histologie",
    description: "Définitions, échelles d’observation, quatre tissus fondamentaux et finalités de l’analyse histologique.",
    kind: 'THEME',
  },
  {
    order: 2,
    title: "Technique histologique",
    description: "Fixation, macroscopie, mise en cassette, inclusion en paraffine, coupe et création de la lame blanche.",
    kind: 'THEME',
  },
  {
    order: 3,
    title: "Colorations histologiques",
    description: "Coloration HES et colorations spécifiques PAS, orcéine et réticuline.",
    kind: 'THEME',
  },
  {
    order: 4,
    title: "Technique cytologique",
    description: "Prélèvements cytologiques, préparation des lames et différences avec l’histologie.",
    kind: 'THEME',
  },
  {
    order: 5,
    title: "Microscopie",
    description: "Microscopie optique, scanner de lame, microscopie électronique à transmission et à balayage.",
    kind: 'THEME',
  },
  {
    order: 6,
    title: "Synthèse du chapitre",
    description: "Consolidation transversale du chapitre, du prélèvement à l’image microscopique.",
    kind: 'SYNTHESIS',
  },
];

const questions: SeedQuestion[] = normalizeHealthTrainingQuestions([
  ...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SECTION_E_QUESTIONS, ...SYNTHESIS_QUESTIONS,
]);

const quizSeeds: SeedQuiz[] = [
  ...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SECTION_E_QUIZZES, ...SYNTHESIS_QUIZZES,
];

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: ["Définitions et échelles de l’histologie"],
  2: ["Définitions et échelles de l’histologie"],
  3: ["Définitions et échelles de l’histologie"],
  4: ["Définitions et échelles de l’histologie"],
  5: ["Tissus fondamentaux et finalités de l’histologie"],
  6: ["Tissus fondamentaux et finalités de l’histologie"],
  7: ["Tissus fondamentaux et finalités de l’histologie"],
  8: ["Tissus fondamentaux et finalités de l’histologie"],
  9: ["Tissus fondamentaux et finalités de l’histologie"],
  10: ["Tissus fondamentaux et finalités de l’histologie"],
  11: ["Applications générales de l’analyse histologique"],
  12: ["Applications générales de l’analyse histologique"],
  13: ["Applications générales de l’analyse histologique"],
  14: ["Applications générales de l’analyse histologique"],
  15: ["Applications générales de l’analyse histologique"],
  16: ["Applications générales de l’analyse histologique"],
  17: ["Applications générales de l’analyse histologique"],
  18: ["Applications générales de l’analyse histologique"],
  19: ["Applications générales de l’analyse histologique"],
  20: ["Applications générales de l’analyse histologique"],
  21: ["Chaîne de préparation histologique"],
  22: ["Chaîne de préparation histologique"],
  23: ["Chaîne de préparation histologique"],
  24: ["Chaîne de préparation histologique"],
  25: ["Chaîne de préparation histologique"],
  26: ["Chaîne de préparation histologique"],
  27: ["Chaîne de préparation histologique"],
  28: ["Chaîne de préparation histologique"],
  29: ["Chaîne de préparation histologique"],
  30: ["Chaîne de préparation histologique"],
  31: ["Qualité technique et création de la lame blanche"],
  32: ["Qualité technique et création de la lame blanche"],
  33: ["Qualité technique et création de la lame blanche"],
  34: ["Qualité technique et création de la lame blanche"],
  35: ["Qualité technique et création de la lame blanche"],
  36: ["Qualité technique et création de la lame blanche"],
  37: ["Qualité technique et création de la lame blanche"],
  38: ["Qualité technique et création de la lame blanche"],
  39: ["Qualité technique et création de la lame blanche"],
  40: ["Qualité technique et création de la lame blanche"],
  41: ["Coloration HES et colorations spécifiques"],
  42: ["Coloration HES et colorations spécifiques"],
  43: ["Coloration HES et colorations spécifiques"],
  44: ["Coloration HES et colorations spécifiques"],
  45: ["Coloration HES et colorations spécifiques"],
  46: ["Coloration HES et colorations spécifiques"],
  47: ["Coloration HES et colorations spécifiques"],
  48: ["Coloration HES et colorations spécifiques"],
  49: ["Coloration HES et colorations spécifiques"],
  50: ["Coloration HES et colorations spécifiques"],
  51: ["Interprétation des colorations histologiques"],
  52: ["Interprétation des colorations histologiques"],
  53: ["Interprétation des colorations histologiques"],
  54: ["Interprétation des colorations histologiques"],
  55: ["Interprétation des colorations histologiques"],
  56: ["Interprétation des colorations histologiques"],
  57: ["Interprétation des colorations histologiques"],
  58: ["Interprétation des colorations histologiques"],
  59: ["Interprétation des colorations histologiques"],
  60: ["Interprétation des colorations histologiques"],
  61: ["Principes de la technique cytologique"],
  62: ["Principes de la technique cytologique"],
  63: ["Principes de la technique cytologique"],
  64: ["Principes de la technique cytologique"],
  65: ["Principes de la technique cytologique"],
  66: ["Principes de la technique cytologique"],
  67: ["Principes de la technique cytologique"],
  68: ["Principes de la technique cytologique"],
  69: ["Principes de la technique cytologique"],
  70: ["Principes de la technique cytologique"],
  71: ["Applications de la cytologie"],
  72: ["Applications de la cytologie"],
  73: ["Applications de la cytologie"],
  74: ["Applications de la cytologie"],
  75: ["Applications de la cytologie"],
  76: ["Applications de la cytologie"],
  77: ["Applications de la cytologie"],
  78: ["Applications de la cytologie"],
  79: ["Applications de la cytologie"],
  80: ["Applications de la cytologie"],
  81: ["Microscopie optique et grossissement"],
  82: ["Microscopie optique et grossissement"],
  83: ["Microscopie optique et grossissement"],
  84: ["Microscopie optique et grossissement"],
  85: ["Microscopie optique et grossissement"],
  86: ["Microscopie optique et grossissement"],
  87: ["Microscopie optique et grossissement"],
  88: ["Microscopie optique et grossissement"],
  89: ["Microscopie optique et grossissement"],
  90: ["Microscopie optique et grossissement"],
  91: ["Microscopie numérique, MET et MEB"],
  92: ["Microscopie numérique, MET et MEB"],
  93: ["Microscopie numérique, MET et MEB"],
  94: ["Microscopie numérique, MET et MEB"],
  95: ["Microscopie numérique, MET et MEB"],
  96: ["Microscopie numérique, MET et MEB"],
  97: ["Microscopie numérique, MET et MEB"],
  98: ["Microscopie numérique, MET et MEB"],
  99: ["Microscopie numérique, MET et MEB"],
  100: ["Microscopie numérique, MET et MEB"],
  101: ["Synthèse de la préparation et de l’observation histologiques"],
  102: ["Synthèse de la préparation et de l’observation histologiques"],
  103: ["Synthèse de la préparation et de l’observation histologiques"],
  104: ["Synthèse de la préparation et de l’observation histologiques"],
  105: ["Synthèse de la préparation et de l’observation histologiques"],
  106: ["Synthèse de la préparation et de l’observation histologiques"],
  107: ["Synthèse de la préparation et de l’observation histologiques"],
  108: ["Synthèse de la préparation et de l’observation histologiques"],
  109: ["Synthèse de la préparation et de l’observation histologiques"],
  110: ["Synthèse de la préparation et de l’observation histologiques"]
};

export async function seedHealthTrainingUe13HistologieDefinitionsTechniquesMicroscopie(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE13 Histologie chapitre 1',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5, 6],
  });
}
