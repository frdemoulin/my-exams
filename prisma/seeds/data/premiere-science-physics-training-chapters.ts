const premiereMatterChapters = [
  'Composition d\'un système initial',
  'Oxydoréduction',
  'Évolution d\'un système chimique',
  'Titrage avec suivi colorimétrique',
  'De la structure à la polarité d\'une entité',
  'De la structure des entités à la cohésion et à la solubilité',
  'Structure d\'espèces chimiques organiques',
  'Synthèses d\'espèces chimiques organiques',
  'Repérage et stockage dans la matière organique',
] as const;

const premiereMotionChapters = [
  'Interactions fondamentales',
  'Description d\'un fluide au repos',
  'Mouvement d\'un système',
] as const;

const premiereEnergyChapters = [
  'Énergie électrique',
  'Énergie cinétique et travail d\'une force',
  'Énergie potentielle et énergie mécanique',
] as const;

const premiereWavesChapters = [
  'Ondes mécaniques progressives',
  'Ondes mécaniques périodiques',
  'Lentilles minces convergentes et images',
  'Couleurs',
  'Modèle ondulatoire et particulaire de la lumière',
] as const;

export const premiereSciencePhysicsTrainingChapters = [
  ...premiereMatterChapters.map((title, index) => ({
    title,
    slug:
      index === 0
        ? 'composition-d-un-systeme-initial'
        : index === 1
          ? 'oxydoreduction'
          : index === 2
            ? 'evolution-d-un-systeme-chimique'
            : index === 3
              ? 'titrage-avec-suivi-colorimetrique'
              : index === 4
                ? 'de-la-structure-a-la-polarite-d-une-entite'
                : index === 5
                  ? 'de-la-structure-des-entites-a-la-cohesion-et-a-la-solubilite'
                  : index === 6
                    ? 'structure-d-especes-chimiques-organiques'
                    : index === 7
                      ? 'syntheses-d-especes-chimiques-organiques'
                      : 'reperage-et-stockage-dans-la-matiere-organique',
    level: 'premiere',
    order: 101 + index,
    domainLongDescriptions: ['Constitution et transformations de la matière'],
    questions: [],
  })),
  ...premiereMotionChapters.map((title, index) => ({
    title,
    slug:
      index === 0
        ? 'interactions-fondamentales'
        : index === 1
          ? 'description-d-un-fluide-au-repos'
          : 'mouvement-d-un-systeme',
    level: 'premiere',
    order: 110 + index,
    domainLongDescriptions: ['Mouvement et interactions'],
    questions: [],
  })),
  ...premiereEnergyChapters.map((title, index) => ({
    title,
    slug:
      index === 0
        ? 'energie-electrique'
        : index === 1
          ? 'energie-cinetique-et-travail-d-une-force'
          : 'energie-potentielle-et-energie-mecanique',
    level: 'premiere',
    order: 113 + index,
    domainLongDescriptions: ['Énergie'],
    questions: [],
  })),
  ...premiereWavesChapters.map((title, index) => ({
    title,
    slug:
      index === 0
        ? 'ondes-mecaniques-progressives'
        : index === 1
          ? 'ondes-mecaniques-periodiques'
          : index === 2
            ? 'lentilles-minces-convergentes-et-images'
            : index === 3
              ? 'couleurs'
              : 'modele-ondulatoire-et-particulaire-de-la-lumiere',
    level: 'premiere',
    order: 116 + index,
    domainLongDescriptions: ['Ondes et signaux'],
    questions: [],
  })),
];