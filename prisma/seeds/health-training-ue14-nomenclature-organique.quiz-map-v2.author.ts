/**
 * Cartographie éditoriale V2
 * UE14 – Chimie organique – Chapitre 2.8
 * Nomenclature organique
 */

export const UE14_CH12_V2_QUIZ_MAP = [
  {
    sectionOrder: 1,
    order: 1,
    slug: 'section-a-discovery-methode-chaine-principale',
    title: `Trouver la chaîne principale et la fonction`,
    description: `Repères méthodologiques pour identifier la fonction principale et déterminer la chaîne carbonée prioritaire.`,
    stage: 'DISCOVER' as const,
    questionOrders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    sectionOrder: 1,
    order: 2,
    slug: 'section-a-practice-numerotation-construction-nom',
    title: `Numéroter et construire le nom`,
    description: `Applications de la méthode pour choisir le sens de numérotation et assembler préfixes, radicaux et suffixes.`,
    stage: 'PRACTICE' as const,
    questionOrders: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  },
  {
    sectionOrder: 2,
    order: 1,
    slug: 'section-b-discovery-alcools-thiols-amines',
    title: `Alcools, thiols et amines`,
    description: `Repères de nomenclature sur les fonctions hydroxyle, thiol et amine (substituants vs suffixes).`,
    stage: 'DISCOVER' as const,
    questionOrders: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
  },
  {
    sectionOrder: 2,
    order: 2,
    slug: 'section-b-practice-alcools-thiols-amines',
    title: `Alcools, thiols et amines`,
    description: `Entraînement à la nomenclature systématique des alcools, thiols et amines mono- et polyfonctionnels.`,
    stage: 'PRACTICE' as const,
    questionOrders: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
  },
  {
    sectionOrder: 3,
    order: 1,
    slug: 'section-c-discovery-aldehydes-cetones-nitriles',
    title: `Aldéhydes, cétones et nitriles`,
    description: `Repères sur les fonctions carbonylées et nitriles : carbone fonctionnel, suffixes -al, -one, -nitrile et préfixes.`,
    stage: 'DISCOVER' as const,
    questionOrders: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  },
  {
    sectionOrder: 3,
    order: 2,
    slug: 'section-c-practice-aldehydes-cetones-nitriles',
    title: `Aldéhydes, cétones et nitriles`,
    description: `Applications de la nomenclature systématique aux structures comportant des fonctions carbo-carbonylées et nitriles.`,
    stage: 'PRACTICE' as const,
    questionOrders: [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
  },
  {
    sectionOrder: 4,
    order: 1,
    slug: 'section-d-discovery-acides-esters-amides',
    title: `Acides, esters et amides`,
    description: `Repères sur la nomenclature des acides carboxyliques et de leurs dérivés (esters, amides, anhydrides, halogénures).`,
    stage: 'DISCOVER' as const,
    questionOrders: [67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
  },
  {
    sectionOrder: 4,
    order: 2,
    slug: 'section-d-practice-acides-esters-amides',
    title: `Acides, esters et amides`,
    description: `Entraînement à la construction des noms systématiques des acides et dérivés carboxyliques.`,
    stage: 'PRACTICE' as const,
    questionOrders: [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
  },
  {
    sectionOrder: 5,
    order: 1,
    slug: 'section-e-discovery-fonction-principale-priorite',
    title: `Fonction principale et ordre de priorité`,
    description: `Repères sur les règles de priorité IUPAC entre fonctions concurrentes et le choix des préfixes secondaires.`,
    stage: 'DISCOVER' as const,
    questionOrders: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98],
  },
  {
    sectionOrder: 5,
    order: 2,
    slug: 'section-e-practice-nomenclature-polyfonctionnelle',
    title: `Nomenclature polyfonctionnelle`,
    description: `Applications complexes de nomenclature sur des molécules comportant plusieurs fonctions différentes.`,
    stage: 'PRACTICE' as const,
    questionOrders: [99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
  },
  {
    sectionOrder: 6,
    order: 1,
    slug: 'section-f-synthesis-practice-methode-complete',
    title: `Réviser la méthode complète`,
    description: `Consolidation globale de toutes les étapes de la nomenclature IUPAC sur l'ensemble des fonctions du programme.`,
    stage: 'PRACTICE' as const,
    questionOrders: [111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
  },
  {
    sectionOrder: 6,
    order: 2,
    slug: 'section-f-synthesis-master-nomenclature',
    title: `Maîtriser la nomenclature`,
    description: `Évaluation de maîtrise transversale sur la nomenclature systématique sans guidage intermédiaire.`,
    stage: 'MASTER' as const,
    questionOrders: [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132],
  },
];

export const UE14_CH12_V2_THEME_LABELS_BY_ORDER: Record<number, string[]> = Object.fromEntries(
  Array.from({ length: 132 }, (_, i) => {
    const order = i + 1;
    if (order <= 22) return [order, ['Méthode : chaîne principale et numérotation']];
    if (order <= 44) return [order, ['Alcools, thiols et amines']];
    if (order <= 66) return [order, ['Aldéhydes, cétones et nitriles']];
    if (order <= 88) return [order, ['Acides, esters et amides']];
    if (order <= 110) return [order, ['Molécules polyfonctionnelles et priorités']];
    return [order, ['Synthèse de nomenclature organique']];
  })
);
