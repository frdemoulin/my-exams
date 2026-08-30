import type { HealthColleV1 } from './health-colle.types';

export const HEALTH_COLLES_UE14_V1: HealthColleV1[] = [
  {
    id: 'c01',
    code: 'C01',
    title: 'Chimie — Fondamentaux',
    scopeLine: 'Chimie générale · Ch. 1 à 4',
    contentLine:
      'Éléments chimiques et classification · Liaisons et électronégativité · Orbitales moléculaires · Forces intermoléculaires',
    questionCount: 20,
    durationMinutes: 30,
    durationLabel: '30 min',
    ecCode: 'Chimie',
    description: 'Évaluation sur les notions fondamentales de chimie générale.',
  },
  {
    id: 'c02',
    code: 'C02',
    title: 'Biochimie — Glucides',
    scopeLine: 'Glucides · Ch. 1 à 3',
    contentLine: 'Généralités et structure des glucides · Oses simples et dérivés · Osides',
    questionCount: 20,
    durationMinutes: 30,
    durationLabel: '30 min',
    ecCode: 'Biochimie',
    description: 'Évaluation ciblée sur les glucides et leurs structures.',
  },
  {
    id: 'c03',
    code: 'C03',
    title: 'Biologie cellulaire — Architecture cellulaire',
    scopeLine: 'Biologie cellulaire · Ch. 1 à 3',
    contentLine:
      'Organisation et méthodes d’étude de la cellule · Membrane plasmique et transports · Cytosquelette',
    questionCount: 20,
    durationMinutes: 30,
    durationLabel: '30 min',
    ecCode: 'Biologie cellulaire',
    description: 'Évaluation sur l’organisation, la membrane et le cytosquelette.',
  },
  {
    id: 'c04',
    code: 'C04',
    title: 'Chimie — Des atomes aux molécules organiques',
    scopeLine: 'Chimie générale + Orga · Ch. 1 à 7',
    contentLine:
      'Chimie générale complète (Ch. 1 à 4) · Nomenclature et fonctions · Isomérie et énantiomérie · Hydrocarbures',
    questionCount: 25,
    durationMinutes: 37.5,
    durationLabel: '37 min 30 s',
    ecCode: 'Chimie',
    description: 'Décloisonnement de la chimie générale et début de la chimie organique.',
  },
  {
    id: 'c05',
    code: 'C05',
    title: 'Biochimie — Lipides',
    scopeLine: 'Biochimie · Ch. 4 à 8 + rappels Ch. 1 à 3',
    contentLine:
      'Introduction aux lipides et acides gras · Eicosanoïdes · Glycérides · Sphingolipides · Stérols et stéroïdes',
    questionCount: 25,
    durationMinutes: 37.5,
    durationLabel: '37 min 30 s',
    badgeType: 'CUMULATIVE',
    badgeLabel: 'Cumulative',
    ecCode: 'Biochimie',
    description: 'Évaluation sur les lipides avec remobilisation des notions de glucides.',
  },
  {
    id: 'c06',
    code: 'C06',
    title: 'Biologie cellulaire — Trafic et compartiments',
    scopeLine: 'Biologie cellulaire · Ch. 4 à 6 + rappels Ch. 1 à 3',
    contentLine:
      'Système endomembranaire (endocytose, exocytose, RE, Golgi, lysosomes) · Peroxysomes · Rappels membrane et cytosquelette',
    questionCount: 20,
    durationMinutes: 30,
    durationLabel: '30 min',
    badgeType: 'CUMULATIVE',
    badgeLabel: 'Cumulative',
    ecCode: 'Biologie cellulaire',
    description: 'Trafic endomembranaire et peroxysomes avec remobilisation des fondamentaux cellulaires.',
  },
  {
    id: 'c07',
    code: 'C07',
    title: 'Chimie — Fonctions et réactivité',
    scopeLine: 'Chimie générale + Orga · Ch. 8 à 11',
    contentLine:
      'Alcools, amines et dérivés halogénés · Esters et amides · Aldéhydes et cétones · Acides carboxyliques',
    questionCount: 25,
    durationMinutes: 37.5,
    durationLabel: '37 min 30 s',
    badgeType: 'CUMULATIVE',
    badgeLabel: 'Cumulative',
    ecCode: 'Chimie',
    description: 'Synthèse progressive couvrant les fonctions organiques et la réactivité.',
  },
  {
    id: 'c08',
    code: 'C08',
    title: 'Biochimie — Acides aminés et protéines',
    scopeLine: 'Biochimie · Ch. 9 à 13 + acquis antérieurs',
    contentLine:
      'Structure et rôles des acides aminés, peptides et protéines (parties 1 et 2) · Rappels glucides et lipides',
    questionCount: 25,
    durationMinutes: 37.5,
    durationLabel: '37 min 30 s',
    badgeType: 'CUMULATIVE',
    badgeLabel: 'Cumulative',
    ecCode: 'Biochimie',
    description: 'Évaluation approfondie sur la structure et les fonctions des protéines.',
  },
  {
    id: 'c09',
    code: 'C09',
    title: 'Biologie cellulaire — Cellule intégrée',
    scopeLine: 'Biologie cellulaire · Ch. 7 à 9 + rappels Ch. 1 à 6',
    contentLine:
      'Mitochondrie · Le noyau · Le cycle cellulaire · Synthèse compartiments et architecture',
    questionCount: 25,
    durationMinutes: 37.5,
    durationLabel: '37 min 30 s',
    badgeType: 'CUMULATIVE',
    badgeLabel: 'Cumulative',
    ecCode: 'Biologie cellulaire',
    description: 'Évaluation de synthèse sur l’intégration cellulaire et le cycle cellulaire.',
  },
  {
    id: 'c10',
    code: 'C10',
    title: 'Chimie — Colle cumulative EC',
    scopeLine: 'Toute la Chimie · Chimie générale + Chimie organique',
    contentLine: 'Chimie générale complète (Ch. 1 à 4) · Chimie organique complète (Ch. 1 à 8)',
    questionCount: 30,
    durationMinutes: 45,
    durationLabel: '45 min',
    badgeType: 'CUMULATIVE_EC',
    badgeLabel: 'Cumulative',
    ecCode: 'Chimie',
    description: 'Colle récapitulative couvrant l’intégralité de l’EC de Chimie.',
  },
  {
    id: 'c11',
    code: 'C11',
    title: 'Biochimie — Colle cumulative EC',
    scopeLine: 'Toute la Biochimie · cumulative',
    contentLine: 'Glucides · Lipides · Protéines · Enzymologie (15 chapitres)',
    questionCount: 30,
    durationMinutes: 45,
    durationLabel: '45 min',
    badgeType: 'CUMULATIVE_EC',
    badgeLabel: 'Cumulative',
    ecCode: 'Biochimie',
    description: 'Colle récapitulative couvrant l’intégralité de l’EC de Biochimie.',
  },
  {
    id: 'c12',
    code: 'C12',
    title: 'Grande colle UE14',
    scopeLine: '3 EC · Chimie + Biochimie + Biologie cellulaire',
    contentLine: 'Chimie : toute l’EC · Biochimie : toute l’EC · Biologie cellulaire : toute l’EC',
    questionCount: 50,
    durationMinutes: 75,
    durationLabel: '75 min',
    badgeType: 'GRANDE_COLLE',
    badgeLabel: 'Cumulative',
    ecCode: 'UE14',
    description: 'Épreuve transversale d’évaluation globale UE14.',
  },
];

/**
 * Recherche une colle Santé par son slug ou son code (ex: 'c01' ou 'C01').
 */
export function getHealthColleBySlug(slug: string | null | undefined): HealthColleV1 | undefined {
  if (!slug) return undefined;
  const normalized = slug.trim().toLowerCase();
  return HEALTH_COLLES_UE14_V1.find(
    (c) => c.id.toLowerCase() === normalized || c.code.toLowerCase() === normalized
  );
}

/**
 * Formate une durée d'évaluation Santé en chaîne canonique.
 * Exemples:
 * - 1800 s (30 min) -> "30 min"
 * - 2250 s (37.5 min) -> "37 min 30 s"
 * - 2700 s (45 min) -> "45 min"
 * - 4500 s (75 min) -> "75 min"
 * - 9000 s (150 min) -> "150 min"
 */
export function formatHealthEvaluationDuration(
  durationSeconds?: number | null,
  durationMinutes?: number | null
): string {
  let totalSeconds = 0;
  if (typeof durationSeconds === 'number' && Number.isFinite(durationSeconds) && durationSeconds > 0) {
    totalSeconds = Math.round(durationSeconds);
  } else if (typeof durationMinutes === 'number' && Number.isFinite(durationMinutes) && durationMinutes > 0) {
    totalSeconds = Math.round(durationMinutes * 60);
  }

  if (totalSeconds <= 0) return '0 min';

  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;

  if (secs > 0) {
    return `${mins} min ${secs} s`;
  }
  return `${mins} min`;
}

/**
 * Détermine si les instructions d'une évaluation contiennent une consigne spécifique réelle
 * (ex: "Calculatrice interdite") plutôt qu'un texte de métadonnées standard
 * ("Colle UE14 Reims — 20 questions — 30 min — Notation UNESS").
 */
export function isSpecificInstruction(instructions: string | null | undefined): boolean {
  if (!instructions) return false;
  const trimmed = instructions.trim();
  if (trimmed.length === 0) return false;

  // Métadonnées standard explicitement identifiées
  const isBoilerplateMetadata =
    /^colle\s+ue\d+\s+reims\s*—\s*\d+\s+questions\s*—\s*[\d.]+\s*(?:min|s|h)?(?:\s*\d+\s*s)?\s*—\s*notation\s+uness$/i.test(
      trimmed
    );
  if (isBoilerplateMetadata) return false;

  const isGenericTakingNotice =
    /^cette\s+colle\s+comporte\s+\d+\s+questions\s+de\s+diff[ée]rents\s+formats\./i.test(trimmed);
  if (isGenericTakingNotice) return false;

  return true;
}
