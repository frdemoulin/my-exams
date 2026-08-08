import type { PrismaClient } from '@prisma/client';
import type { SeedQuestion, SeedQuiz, SeedSection } from './health-training-ue13.shared';
import { SECTION_A_QUESTIONS, SECTION_A_QUIZZES } from './health-training-ue13-histologie-tissus-conjonctifs.section-a.seed';
import { SECTION_B_QUESTIONS, SECTION_B_QUIZZES } from './health-training-ue13-histologie-tissus-conjonctifs.section-b.seed';
import { SECTION_C_QUESTIONS, SECTION_C_QUIZZES } from './health-training-ue13-histologie-tissus-conjonctifs.section-c.seed';
import { SECTION_D_QUESTIONS, SECTION_D_QUIZZES } from './health-training-ue13-histologie-tissus-conjonctifs.section-d.seed';
import { SECTION_E_QUESTIONS, SECTION_E_QUIZZES } from './health-training-ue13-histologie-tissus-conjonctifs.section-e.seed';
import { SYNTHESIS_QUESTIONS, SYNTHESIS_QUIZZES } from './health-training-ue13-histologie-tissus-conjonctifs.synthesis.seed';
import { normalizeHealthTrainingQuestions, seedHealthTrainingChapter } from './health-training-ue13.shared';

const SUBJECT_LONG_DESCRIPTION = 'Sciences de la Vie et de la Terre';
const CHAPTER_SLUG = 'tissus-conjonctifs';

const sections: SeedSection[] = [
{
  order: 1,
  title: 'Cellules des tissus conjonctifs',
  description: 'Fibroblastes, adipocytes et principales cellules de défense du tissu conjonctif.',
  kind: 'THEME',
},
{
  order: 2,
  title: 'Matrice extracellulaire',
  description: 'Fibres, substance fondamentale, glycoprotéines et lame basale.',
  kind: 'THEME',
},
{
  order: 3,
  title: 'Classification et tissus conjonctifs non spécialisés',
  description: 'Critères de classification et principaux tissus conjonctifs de soutien.',
  kind: 'THEME',
},
{
  order: 4,
  title: 'Tissu cartilagineux',
  description: 'Cellules du cartilage, matrice cartilagineuse, périchondre, types et croissance du cartilage.',
  kind: 'THEME',
},
{
  order: 5,
  title: 'Tissu osseux',
  description: 'Cellules osseuses, matrice osseuse, périoste, types d’os et organisation de l’ostéon.',
  kind: 'THEME',
},
{
  order: 6,
  title: 'Synthèse du chapitre',
  description: 'Consolidation transversale des notions du chapitre 3.',
  kind: 'SYNTHESIS',
}
];

const questions: SeedQuestion[] = normalizeHealthTrainingQuestions([...SECTION_A_QUESTIONS, ...SECTION_B_QUESTIONS, ...SECTION_C_QUESTIONS, ...SECTION_D_QUESTIONS, ...SECTION_E_QUESTIONS, ...SYNTHESIS_QUESTIONS]);

const quizSeeds: SeedQuiz[] = [...SECTION_A_QUIZZES, ...SECTION_B_QUIZZES, ...SECTION_C_QUIZZES, ...SECTION_D_QUIZZES, ...SECTION_E_QUIZZES, ...SYNTHESIS_QUIZZES];

const QUESTION_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: ['Cellules résidentes des tissus conjonctifs'],
  2: ['Cellules résidentes des tissus conjonctifs'],
  3: ['Cellules résidentes des tissus conjonctifs'],
  4: ['Cellules résidentes des tissus conjonctifs'],
  5: ['Cellules résidentes des tissus conjonctifs'],
  6: ['Cellules résidentes des tissus conjonctifs'],
  7: ['Cellules résidentes des tissus conjonctifs'],
  8: ['Cellules résidentes des tissus conjonctifs'],
  9: ['Cellules résidentes des tissus conjonctifs'],
  10: ['Cellules résidentes des tissus conjonctifs'],
  11: ['Cellules immunitaires et de soutien conjonctif'],
  12: ['Cellules immunitaires et de soutien conjonctif'],
  13: ['Cellules immunitaires et de soutien conjonctif'],
  14: ['Cellules immunitaires et de soutien conjonctif'],
  15: ['Cellules immunitaires et de soutien conjonctif'],
  16: ['Cellules immunitaires et de soutien conjonctif'],
  17: ['Cellules immunitaires et de soutien conjonctif'],
  18: ['Cellules immunitaires et de soutien conjonctif'],
  19: ['Cellules immunitaires et de soutien conjonctif'],
  20: ['Cellules immunitaires et de soutien conjonctif'],
  21: ['Collagène et fibres élastiques'],
  22: ['Collagène et fibres élastiques'],
  23: ['Collagène et fibres élastiques'],
  24: ['Collagène et fibres élastiques'],
  25: ['Collagène et fibres élastiques'],
  26: ['Collagène et fibres élastiques'],
  27: ['Collagène et fibres élastiques'],
  28: ['Collagène et fibres élastiques'],
  29: ['Collagène et fibres élastiques'],
  30: ['Collagène et fibres élastiques'],
  31: ['Substance fondamentale et lame basale'],
  32: ['Substance fondamentale et lame basale'],
  33: ['Substance fondamentale et lame basale'],
  34: ['Substance fondamentale et lame basale'],
  35: ['Substance fondamentale et lame basale'],
  36: ['Substance fondamentale et lame basale'],
  37: ['Substance fondamentale et lame basale'],
  38: ['Substance fondamentale et lame basale'],
  39: ['Substance fondamentale et lame basale'],
  40: ['Substance fondamentale et lame basale'],
  41: ['Classer les tissus conjonctifs'],
  42: ['Classer les tissus conjonctifs'],
  43: ['Classer les tissus conjonctifs'],
  44: ['Classer les tissus conjonctifs'],
  45: ['Classer les tissus conjonctifs'],
  46: ['Classer les tissus conjonctifs'],
  47: ['Classer les tissus conjonctifs'],
  48: ['Classer les tissus conjonctifs'],
  49: ['Classer les tissus conjonctifs'],
  50: ['Classer les tissus conjonctifs'],
  51: ['Tissus conjonctifs de soutien'],
  52: ['Tissus conjonctifs de soutien'],
  53: ['Tissus conjonctifs de soutien'],
  54: ['Tissus conjonctifs de soutien'],
  55: ['Tissus conjonctifs de soutien'],
  56: ['Tissus conjonctifs de soutien'],
  57: ['Tissus conjonctifs de soutien'],
  58: ['Tissus conjonctifs de soutien'],
  59: ['Tissus conjonctifs de soutien'],
  60: ['Tissus conjonctifs de soutien'],
  61: ['Organisation du cartilage'],
  62: ['Organisation du cartilage'],
  63: ['Organisation du cartilage'],
  64: ['Organisation du cartilage'],
  65: ['Organisation du cartilage'],
  66: ['Organisation du cartilage'],
  67: ['Organisation du cartilage'],
  68: ['Organisation du cartilage'],
  69: ['Organisation du cartilage'],
  70: ['Organisation du cartilage'],
  71: ['Types de cartilage et croissance cartilagineuse'],
  72: ['Types de cartilage et croissance cartilagineuse'],
  73: ['Types de cartilage et croissance cartilagineuse'],
  74: ['Types de cartilage et croissance cartilagineuse'],
  75: ['Types de cartilage et croissance cartilagineuse'],
  76: ['Types de cartilage et croissance cartilagineuse'],
  77: ['Types de cartilage et croissance cartilagineuse'],
  78: ['Types de cartilage et croissance cartilagineuse'],
  79: ['Types de cartilage et croissance cartilagineuse'],
  80: ['Types de cartilage et croissance cartilagineuse'],
  81: ['Cellules et matrice osseuses'],
  82: ['Cellules et matrice osseuses'],
  83: ['Cellules et matrice osseuses'],
  84: ['Cellules et matrice osseuses'],
  85: ['Cellules et matrice osseuses'],
  86: ['Cellules et matrice osseuses'],
  87: ['Cellules et matrice osseuses'],
  88: ['Cellules et matrice osseuses'],
  89: ['Cellules et matrice osseuses'],
  90: ['Cellules et matrice osseuses'],
  91: ['Os tissé, os lamellaire et ostéon'],
  92: ['Os tissé, os lamellaire et ostéon'],
  93: ['Os tissé, os lamellaire et ostéon'],
  94: ['Os tissé, os lamellaire et ostéon'],
  95: ['Os tissé, os lamellaire et ostéon'],
  96: ['Os tissé, os lamellaire et ostéon'],
  97: ['Os tissé, os lamellaire et ostéon'],
  98: ['Os tissé, os lamellaire et ostéon'],
  99: ['Os tissé, os lamellaire et ostéon'],
  100: ['Os tissé, os lamellaire et ostéon'],
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

export async function seedHealthTrainingUe13HistologieTissusConjonctifs(
  prisma: PrismaClient
) {
  await seedHealthTrainingChapter({
    prisma,
    subjectLongDescription: SUBJECT_LONG_DESCRIPTION,
    chapterSlug: CHAPTER_SLUG,
    logLabel: 'UE13 Histologie chapitre 3',
    questionThemeLabelsByOrder: QUESTION_THEME_LABELS_BY_ORDER,
    questions,
    sections,
    quizSeeds,
    cleanupSectionOrders: [1, 2, 3, 4, 5, 6],
  });
}
