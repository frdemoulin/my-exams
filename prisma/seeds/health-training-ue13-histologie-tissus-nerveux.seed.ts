import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue13.shared';
import { SECTION_A_QUESTIONS, SECTION_A_QUIZZES } from './health-training-ue13-histologie-tissus-nerveux.section-a.seed';
import { SECTION_B_QUESTIONS, SECTION_B_QUIZZES } from './health-training-ue13-histologie-tissus-nerveux.section-b.seed';
import { SECTION_C_QUESTIONS, SECTION_C_QUIZZES } from './health-training-ue13-histologie-tissus-nerveux.section-c.seed';
import { SECTION_D_QUESTIONS, SECTION_D_QUIZZES } from './health-training-ue13-histologie-tissus-nerveux.section-d.seed';
import { SECTION_E_QUESTIONS, SECTION_E_QUIZZES } from './health-training-ue13-histologie-tissus-nerveux.section-e.seed';
import { SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES } from './health-training-ue13-histologie-tissus-nerveux.synthesis.seed';
import { normalizeHealthTrainingQuestions, seedHealthTrainingChapter } from './health-training-ue13.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'tissus-nerveux';

const sections: SeedSection[] = [
{
  order: 1,
  title: 'Organisation générale du tissu nerveux',
  description: 'Composition du tissu nerveux et distinction entre SNC et SNP.',
  kind: 'THEME',
},
{
  order: 2,
  title: 'Neurones et synapses',
  description: 'Morphologie du neurone, classifications et organisation des synapses.',
  kind: 'THEME',
},
{
  order: 3,
  title: 'Névroglie du système nerveux central',
  description: 'Astrocytes, oligodendrocytes, microgliocytes et épendymocytes.',
  kind: 'THEME',
},
{
  order: 4,
  title: 'Névroglie du système nerveux périphérique',
  description: 'Cellules de Schwann, fibres de Remak, myélinisation périphérique et cellules satellites.',
  kind: 'THEME',
},
{
  order: 5,
  title: 'Nerfs périphériques',
  description: 'Organisation histologique des nerfs périphériques et de leurs gaines conjonctives.',
  kind: 'THEME',
},
{
  order: 6,
  title: 'Synthèse du chapitre',
  description: 'Consolidation transversale des notions du chapitre 5.',
  kind: 'SYNTHESIS',
}
];

const questions: SeedQuestion[] = normalizeHealthTrainingQuestions([...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SECTION_E_QUESTIONS, ...SYNTHESIS_QUESTIONS]);

const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SECTION_E_QUIZZES, ...SYNTHESIS_QUIZZES];

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: ['Constitution du tissu nerveux'],
  2: ['Constitution du tissu nerveux'],
  3: ['Constitution du tissu nerveux'],
  4: ['Constitution du tissu nerveux'],
  5: ['Constitution du tissu nerveux'],
  6: ['Constitution du tissu nerveux'],
  7: ['Constitution du tissu nerveux'],
  8: ['Constitution du tissu nerveux'],
  9: ['Constitution du tissu nerveux'],
  10: ['Constitution du tissu nerveux'],
  11: ['SNC, SNP, substance grise et substance blanche'],
  12: ['SNC, SNP, substance grise et substance blanche'],
  13: ['SNC, SNP, substance grise et substance blanche'],
  14: ['SNC, SNP, substance grise et substance blanche'],
  15: ['SNC, SNP, substance grise et substance blanche'],
  16: ['SNC, SNP, substance grise et substance blanche'],
  17: ['SNC, SNP, substance grise et substance blanche'],
  18: ['SNC, SNP, substance grise et substance blanche'],
  19: ['SNC, SNP, substance grise et substance blanche'],
  20: ['SNC, SNP, substance grise et substance blanche'],
  21: ['Morphologie et classification des neurones'],
  22: ['Morphologie et classification des neurones'],
  23: ['Morphologie et classification des neurones'],
  24: ['Morphologie et classification des neurones'],
  25: ['Morphologie et classification des neurones'],
  26: ['Morphologie et classification des neurones'],
  27: ['Morphologie et classification des neurones'],
  28: ['Morphologie et classification des neurones'],
  29: ['Morphologie et classification des neurones'],
  30: ['Morphologie et classification des neurones'],
  31: ['Organisation et types de synapses'],
  32: ['Organisation et types de synapses'],
  33: ['Organisation et types de synapses'],
  34: ['Organisation et types de synapses'],
  35: ['Organisation et types de synapses'],
  36: ['Organisation et types de synapses'],
  37: ['Organisation et types de synapses'],
  38: ['Organisation et types de synapses'],
  39: ['Organisation et types de synapses'],
  40: ['Organisation et types de synapses'],
  41: ['Astrocytes, oligodendrocytes et microglie'],
  42: ['Astrocytes, oligodendrocytes et microglie'],
  43: ['Astrocytes, oligodendrocytes et microglie'],
  44: ['Astrocytes, oligodendrocytes et microglie'],
  45: ['Astrocytes, oligodendrocytes et microglie'],
  46: ['Astrocytes, oligodendrocytes et microglie'],
  47: ['Astrocytes, oligodendrocytes et microglie'],
  48: ['Astrocytes, oligodendrocytes et microglie'],
  49: ['Astrocytes, oligodendrocytes et microglie'],
  50: ['Astrocytes, oligodendrocytes et microglie'],
  51: ['Épendymocytes et interfaces du SNC'],
  52: ['Épendymocytes et interfaces du SNC'],
  53: ['Épendymocytes et interfaces du SNC'],
  54: ['Épendymocytes et interfaces du SNC'],
  55: ['Épendymocytes et interfaces du SNC'],
  56: ['Épendymocytes et interfaces du SNC'],
  57: ['Épendymocytes et interfaces du SNC'],
  58: ['Épendymocytes et interfaces du SNC'],
  59: ['Épendymocytes et interfaces du SNC'],
  60: ['Épendymocytes et interfaces du SNC'],
  61: ['Cellules de Schwann et myélinisation périphérique'],
  62: ['Cellules de Schwann et myélinisation périphérique'],
  63: ['Cellules de Schwann et myélinisation périphérique'],
  64: ['Cellules de Schwann et myélinisation périphérique'],
  65: ['Cellules de Schwann et myélinisation périphérique'],
  66: ['Cellules de Schwann et myélinisation périphérique'],
  67: ['Cellules de Schwann et myélinisation périphérique'],
  68: ['Cellules de Schwann et myélinisation périphérique'],
  69: ['Cellules de Schwann et myélinisation périphérique'],
  70: ['Cellules de Schwann et myélinisation périphérique'],
  71: ['Cellules satellites et distinctions SNC/SNP'],
  72: ['Cellules satellites et distinctions SNC/SNP'],
  73: ['Cellules satellites et distinctions SNC/SNP'],
  74: ['Cellules satellites et distinctions SNC/SNP'],
  75: ['Cellules satellites et distinctions SNC/SNP'],
  76: ['Cellules satellites et distinctions SNC/SNP'],
  77: ['Cellules satellites et distinctions SNC/SNP'],
  78: ['Cellules satellites et distinctions SNC/SNP'],
  79: ['Cellules satellites et distinctions SNC/SNP'],
  80: ['Cellules satellites et distinctions SNC/SNP'],
  81: ['Organisation d’un nerf périphérique'],
  82: ['Organisation d’un nerf périphérique'],
  83: ['Organisation d’un nerf périphérique'],
  84: ['Organisation d’un nerf périphérique'],
  85: ['Organisation d’un nerf périphérique'],
  86: ['Organisation d’un nerf périphérique'],
  87: ['Organisation d’un nerf périphérique'],
  88: ['Organisation d’un nerf périphérique'],
  89: ['Organisation d’un nerf périphérique'],
  90: ['Organisation d’un nerf périphérique'],
  91: ['Reconnaître un nerf en coupe'],
  92: ['Reconnaître un nerf en coupe'],
  93: ['Reconnaître un nerf en coupe'],
  94: ['Reconnaître un nerf en coupe'],
  95: ['Reconnaître un nerf en coupe'],
  96: ['Reconnaître un nerf en coupe'],
  97: ['Reconnaître un nerf en coupe'],
  98: ['Reconnaître un nerf en coupe'],
  99: ['Reconnaître un nerf en coupe'],
  100: ['Reconnaître un nerf en coupe'],
  101: ['Synthèse du chapitre'],
  102: ['Synthèse du chapitre'],
  103: ['Synthèse du chapitre'],
  104: ['Synthèse du chapitre'],
  105: ['Synthèse du chapitre'],
  106: ['Synthèse du chapitre'],
  107: ['Synthèse du chapitre'],
  108: ['Synthèse du chapitre'],
  109: ['Synthèse du chapitre'],
  110: ['Synthèse du chapitre']
};

export async function seedHealthTrainingUe13HistologieTissusNerveux(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE13 Histologie chapitre 5',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5, 6],
  });
}
