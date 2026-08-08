import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue13.shared';
import { SECTION_A_QUESTIONS, SECTION_A_QUIZZES } from './health-training-ue13-histologie-tissus-musculaires.section-a.seed';
import { SECTION_B_QUESTIONS, SECTION_B_QUIZZES } from './health-training-ue13-histologie-tissus-musculaires.section-b.seed';
import { SECTION_C_QUESTIONS, SECTION_C_QUIZZES } from './health-training-ue13-histologie-tissus-musculaires.section-c.seed';
import { SECTION_D_QUESTIONS, SECTION_D_QUIZZES } from './health-training-ue13-histologie-tissus-musculaires.section-d.seed';
import { SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES } from './health-training-ue13-histologie-tissus-musculaires.synthesis.seed';
import { normalizeHealthTrainingQuestions, seedHealthTrainingChapter } from './health-training-ue13.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'tissus-musculaires';

const sections: SeedSection[] = [
{
  order: 1,
  title: 'Généralités et classification',
  description: 'Définition du tissu musculaire, propriétés générales et comparaison des trois grands types de muscles.',
  kind: 'THEME',
},
{
  order: 2,
  title: 'Muscle strié squelettique',
  description: 'Organisation conjonctive, sarcomère, triade, types de fibres et innervation motrice.',
  kind: 'THEME',
},
{
  order: 3,
  title: 'Muscle strié cardiaque',
  description: 'Caractères structuraux et fonctionnels du cardiomyocyte et du myocarde.',
  kind: 'THEME',
},
{
  order: 4,
  title: 'Muscle lisse',
  description: 'Organisation du léiomyocyte, mécanismes de contraction et différences entre muscle lisse unitaire et multi-unitaire.',
  kind: 'THEME',
},
{
  order: 5,
  title: 'Synthèse du chapitre',
  description: 'Consolidation transversale des notions du chapitre 4.',
  kind: 'SYNTHESIS',
}
];

const questions: SeedQuestion[] = normalizeHealthTrainingQuestions([...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SYNTHESIS_QUESTIONS]);

const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SYNTHESIS_QUIZZES];

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: ['Repères généraux des tissus musculaires'],
  2: ['Repères généraux des tissus musculaires'],
  3: ['Repères généraux des tissus musculaires'],
  4: ['Repères généraux des tissus musculaires'],
  5: ['Repères généraux des tissus musculaires'],
  6: ['Repères généraux des tissus musculaires'],
  7: ['Repères généraux des tissus musculaires'],
  8: ['Repères généraux des tissus musculaires'],
  9: ['Repères généraux des tissus musculaires'],
  10: ['Repères généraux des tissus musculaires'],
  11: ['Comparer les trois types musculaires'],
  12: ['Comparer les trois types musculaires'],
  13: ['Comparer les trois types musculaires'],
  14: ['Comparer les trois types musculaires'],
  15: ['Comparer les trois types musculaires'],
  16: ['Comparer les trois types musculaires'],
  17: ['Comparer les trois types musculaires'],
  18: ['Comparer les trois types musculaires'],
  19: ['Comparer les trois types musculaires'],
  20: ['Comparer les trois types musculaires'],
  21: ['Organisation du rhabdomyocyte'],
  22: ['Organisation du rhabdomyocyte'],
  23: ['Organisation du rhabdomyocyte'],
  24: ['Organisation du rhabdomyocyte'],
  25: ['Organisation du rhabdomyocyte'],
  26: ['Organisation du rhabdomyocyte'],
  27: ['Organisation du rhabdomyocyte'],
  28: ['Organisation du rhabdomyocyte'],
  29: ['Organisation du rhabdomyocyte'],
  30: ['Organisation du rhabdomyocyte'],
  31: ['Fibres musculaires et innervation motrice'],
  32: ['Fibres musculaires et innervation motrice'],
  33: ['Fibres musculaires et innervation motrice'],
  34: ['Fibres musculaires et innervation motrice'],
  35: ['Fibres musculaires et innervation motrice'],
  36: ['Fibres musculaires et innervation motrice'],
  37: ['Fibres musculaires et innervation motrice'],
  38: ['Fibres musculaires et innervation motrice'],
  39: ['Fibres musculaires et innervation motrice'],
  40: ['Fibres musculaires et innervation motrice'],
  41: ['Le cardiomyocyte et ses jonctions'],
  42: ['Le cardiomyocyte et ses jonctions'],
  43: ['Le cardiomyocyte et ses jonctions'],
  44: ['Le cardiomyocyte et ses jonctions'],
  45: ['Le cardiomyocyte et ses jonctions'],
  46: ['Le cardiomyocyte et ses jonctions'],
  47: ['Le cardiomyocyte et ses jonctions'],
  48: ['Le cardiomyocyte et ses jonctions'],
  49: ['Le cardiomyocyte et ses jonctions'],
  50: ['Le cardiomyocyte et ses jonctions'],
  51: ['Organisation et spécialisations du myocarde'],
  52: ['Organisation et spécialisations du myocarde'],
  53: ['Organisation et spécialisations du myocarde'],
  54: ['Organisation et spécialisations du myocarde'],
  55: ['Organisation et spécialisations du myocarde'],
  56: ['Organisation et spécialisations du myocarde'],
  57: ['Organisation et spécialisations du myocarde'],
  58: ['Organisation et spécialisations du myocarde'],
  59: ['Organisation et spécialisations du myocarde'],
  60: ['Organisation et spécialisations du myocarde'],
  61: ['Organisation du léiomyocyte'],
  62: ['Organisation du léiomyocyte'],
  63: ['Organisation du léiomyocyte'],
  64: ['Organisation du léiomyocyte'],
  65: ['Organisation du léiomyocyte'],
  66: ['Organisation du léiomyocyte'],
  67: ['Organisation du léiomyocyte'],
  68: ['Organisation du léiomyocyte'],
  69: ['Organisation du léiomyocyte'],
  70: ['Organisation du léiomyocyte'],
  71: ['Muscle lisse unitaire et multi-unitaire'],
  72: ['Muscle lisse unitaire et multi-unitaire'],
  73: ['Muscle lisse unitaire et multi-unitaire'],
  74: ['Muscle lisse unitaire et multi-unitaire'],
  75: ['Muscle lisse unitaire et multi-unitaire'],
  76: ['Muscle lisse unitaire et multi-unitaire'],
  77: ['Muscle lisse unitaire et multi-unitaire'],
  78: ['Muscle lisse unitaire et multi-unitaire'],
  79: ['Muscle lisse unitaire et multi-unitaire'],
  80: ['Muscle lisse unitaire et multi-unitaire'],
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

export async function seedHealthTrainingUe13HistologieTissusMusculaires(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE13 Histologie chapitre 4',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5],
  });
}
