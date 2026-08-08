import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue13.shared';
import { SECTION_A_QUESTIONS, SECTION_A_QUIZZES } from './health-training-ue13-histologie-epitheliums-structures-classifications.section-a.seed';
import { SECTION_B_QUESTIONS, SECTION_B_QUIZZES } from './health-training-ue13-histologie-epitheliums-structures-classifications.section-b.seed';
import { SECTION_C_QUESTIONS, SECTION_C_QUIZZES } from './health-training-ue13-histologie-epitheliums-structures-classifications.section-c.seed';
import { SECTION_D_QUESTIONS, SECTION_D_QUIZZES } from './health-training-ue13-histologie-epitheliums-structures-classifications.section-d.seed';
import { SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES } from './health-training-ue13-histologie-epitheliums-structures-classifications.synthesis.seed';
import { normalizeHealthTrainingQuestions, seedHealthTrainingChapter } from './health-training-ue13.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'epitheliums-structures-classifications';

const sections: SeedSection[] = [
{
  order: 1,
  title: 'Définition et propriétés des épithéliums',
  description: 'Définition, polarité, cohésion et principaux types de jonctions des cellules épithéliales.',
  kind: 'THEME',
},
{
  order: 2,
  title: 'Différenciations apicales',
  description: 'Microvillosités, cils vibratiles, stéréocils et cuticule, avec leur structure, leur mobilité et leurs localisations.',
  kind: 'THEME',
},
{
  order: 3,
  title: 'Épithéliums de revêtement',
  description: 'Classification selon le nombre de couches et la forme cellulaire, avec exemples et repères de reconnaissance.',
  kind: 'THEME',
},
{
  order: 4,
  title: 'Épithéliums glandulaires',
  description: 'Formation des glandes, classification des glandes exocrines et endocrines, et principaux modes de sécrétion.',
  kind: 'THEME',
},
{
  order: 5,
  title: 'Synthèse du chapitre',
  description: 'Consolidation transversale des notions du chapitre 2.',
  kind: 'SYNTHESIS',
}
];

const questions: SeedQuestion[] = normalizeHealthTrainingQuestions([...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS]);

const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: ['Repères structuraux de l’épithélium'],
  2: ['Repères structuraux de l’épithélium'],
  3: ['Repères structuraux de l’épithélium'],
  4: ['Repères structuraux de l’épithélium'],
  5: ['Repères structuraux de l’épithélium'],
  6: ['Repères structuraux de l’épithélium'],
  7: ['Repères structuraux de l’épithélium'],
  8: ['Repères structuraux de l’épithélium'],
  9: ['Repères structuraux de l’épithélium'],
  10: ['Repères structuraux de l’épithélium'],
  11: ['Polarité et jonctions épithéliales'],
  12: ['Polarité et jonctions épithéliales'],
  13: ['Polarité et jonctions épithéliales'],
  14: ['Polarité et jonctions épithéliales'],
  15: ['Polarité et jonctions épithéliales'],
  16: ['Polarité et jonctions épithéliales'],
  17: ['Polarité et jonctions épithéliales'],
  18: ['Polarité et jonctions épithéliales'],
  19: ['Polarité et jonctions épithéliales'],
  20: ['Polarité et jonctions épithéliales'],
  21: ['Microvillosités et cils'],
  22: ['Microvillosités et cils'],
  23: ['Microvillosités et cils'],
  24: ['Microvillosités et cils'],
  25: ['Microvillosités et cils'],
  26: ['Microvillosités et cils'],
  27: ['Microvillosités et cils'],
  28: ['Microvillosités et cils'],
  29: ['Microvillosités et cils'],
  30: ['Microvillosités et cils'],
  31: ['Stéréocils et cuticule'],
  32: ['Stéréocils et cuticule'],
  33: ['Stéréocils et cuticule'],
  34: ['Stéréocils et cuticule'],
  35: ['Stéréocils et cuticule'],
  36: ['Stéréocils et cuticule'],
  37: ['Stéréocils et cuticule'],
  38: ['Stéréocils et cuticule'],
  39: ['Stéréocils et cuticule'],
  40: ['Stéréocils et cuticule'],
  41: ['Classer un épithélium de revêtement'],
  42: ['Classer un épithélium de revêtement'],
  43: ['Classer un épithélium de revêtement'],
  44: ['Classer un épithélium de revêtement'],
  45: ['Classer un épithélium de revêtement'],
  46: ['Classer un épithélium de revêtement'],
  47: ['Classer un épithélium de revêtement'],
  48: ['Classer un épithélium de revêtement'],
  49: ['Classer un épithélium de revêtement'],
  50: ['Classer un épithélium de revêtement'],
  51: ['Reconnaissance et nomenclature'],
  52: ['Reconnaissance et nomenclature'],
  53: ['Reconnaissance et nomenclature'],
  54: ['Reconnaissance et nomenclature'],
  55: ['Reconnaissance et nomenclature'],
  56: ['Reconnaissance et nomenclature'],
  57: ['Reconnaissance et nomenclature'],
  58: ['Reconnaissance et nomenclature'],
  59: ['Reconnaissance et nomenclature'],
  60: ['Reconnaissance et nomenclature'],
  61: ['Organisation des glandes exocrines'],
  62: ['Organisation des glandes exocrines'],
  63: ['Organisation des glandes exocrines'],
  64: ['Organisation des glandes exocrines'],
  65: ['Organisation des glandes exocrines'],
  66: ['Organisation des glandes exocrines'],
  67: ['Organisation des glandes exocrines'],
  68: ['Organisation des glandes exocrines'],
  69: ['Organisation des glandes exocrines'],
  70: ['Organisation des glandes exocrines'],
  71: ['Glandes endocrines et modes de sécrétion'],
  72: ['Glandes endocrines et modes de sécrétion'],
  73: ['Glandes endocrines et modes de sécrétion'],
  74: ['Glandes endocrines et modes de sécrétion'],
  75: ['Glandes endocrines et modes de sécrétion'],
  76: ['Glandes endocrines et modes de sécrétion'],
  77: ['Glandes endocrines et modes de sécrétion'],
  78: ['Glandes endocrines et modes de sécrétion'],
  79: ['Glandes endocrines et modes de sécrétion'],
  80: ['Glandes endocrines et modes de sécrétion'],
  81: ['Synthèse du chapitre'],
  82: ['Synthèse du chapitre'],
  83: ['Synthèse du chapitre'],
  84: ['Synthèse du chapitre'],
  85: ['Synthèse du chapitre'],
  86: ['Synthèse du chapitre'],
  87: ['Synthèse du chapitre'],
  88: ['Synthèse du chapitre'],
  89: ['Synthèse du chapitre'],
  90: ['Synthèse du chapitre']
};

export async function seedHealthTrainingUe13HistologieEpitheliumsStructuresClassifications(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE13 Histologie chapitre 2',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
  });
}
