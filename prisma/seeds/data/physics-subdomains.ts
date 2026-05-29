/**
 * Catalogue des sous-domaines de Sciences physiques.
 *
 * Source unique partagée par :
 *  - `prisma/seeds/subdomain.seed.ts` (création initiale)
 *  - `scripts/migrations/2026-05-28-0006-add-subdomains.ts` (migration applicative)
 *
 * Les `themeMatchers` sont des mots-clés normalisés (sans accents, en minuscules)
 * utilisés pour rattacher automatiquement les thèmes existants au bon sous-domaine.
 * Le rattachement reste indicatif : les cas non couverts apparaissent dans le rapport
 * de migration et doivent être repris à la main dans le backoffice.
 */

export type SubdomainSeed = {
  slug: string;
  title: string;
  shortTitle?: string;
  description?: string;
  order: number;
  subjectLongDescription: string;
  domainLongDescription: string;
  /** Liste de mots-clés normalisés cherchés dans le titre/short title des thèmes. */
  themeMatchers: string[];
};

export const SCIENCES_PHYSIQUES_SUBJECT = 'Sciences physiques';

export const physicsSubdomains: SubdomainSeed[] = [
  // ─── Constitution et transformations de la matière ───────────────────────────
  {
    slug: 'acides-bases-ph',
    title: 'Acides, bases et pH',
    shortTitle: 'Acides / bases',
    order: 1,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Constitution et transformations de la matière',
    themeMatchers: [
      'ph',
      'acide',
      'base',
      'oxonium',
      'hydroxyde',
      'constante d acidite',
      'ka',
      'predominance',
      'autoprotolyse',
      'produit ionique',
    ],
  },
  {
    slug: 'titrages-dosages',
    title: 'Titrages et dosages',
    shortTitle: 'Titrages',
    order: 2,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Constitution et transformations de la matière',
    themeMatchers: [
      'titrage',
      'dosage',
      'equivalence',
      'conductimetrique',
      'ph metrique',
      'colorimetrique',
    ],
  },
  {
    slug: 'oxydoreduction',
    title: 'Oxydoréduction',
    shortTitle: 'Oxydoréduction',
    order: 3,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Constitution et transformations de la matière',
    themeMatchers: [
      'oxydoreduction',
      'oxydant',
      'reducteur',
      'couple redox',
      'demi equation',
      'pile',
      'electrolyse',
    ],
  },
  {
    slug: 'cinetique-chimique',
    title: 'Cinétique chimique',
    shortTitle: 'Cinétique',
    order: 4,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Constitution et transformations de la matière',
    themeMatchers: [
      'cinetique',
      'vitesse de reaction',
      'temps de demi reaction',
      'catalyseur',
      'facteur cinetique',
      'loi de vitesse',
    ],
  },
  {
    slug: 'chimie-organique',
    title: 'Chimie organique',
    shortTitle: 'Chimie organique',
    order: 5,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Constitution et transformations de la matière',
    themeMatchers: [
      'organique',
      'alcane',
      'alcool',
      'aldehyde',
      'cetone',
      'ester',
      'acide carboxylique',
      'synthese organique',
      'mecanisme reactionnel',
      'nomenclature',
      'isomerie',
    ],
  },
  {
    slug: 'structure-transformations-matiere',
    title: 'Structure et transformations de la matière',
    shortTitle: 'Structure matière',
    order: 6,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Constitution et transformations de la matière',
    themeMatchers: [
      'atome',
      'molecule',
      'ion',
      'configuration electronique',
      'liaison',
      'solution',
      'concentration',
      'dissolution',
      'avancement',
      'reaction chimique',
      'transformation nucleaire',
      'radioactivite',
    ],
  },

  // ─── Mouvement et interactions ───────────────────────────────────────────────
  {
    slug: 'mecanique-newtonienne',
    title: 'Mécanique newtonienne',
    shortTitle: 'Mécanique',
    order: 1,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Mouvement et interactions',
    themeMatchers: [
      'newton',
      'loi de newton',
      'principe d inertie',
      'referentiel',
      'cinematique',
      'vitesse',
      'acceleration',
      'trajectoire',
      'quantite de mouvement',
    ],
  },
  {
    slug: 'champs-et-forces',
    title: 'Champs et forces',
    shortTitle: 'Champs / forces',
    order: 2,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Mouvement et interactions',
    themeMatchers: [
      'champ',
      'force',
      'interaction',
      'frottement',
      'poussee',
      'tension',
      'reaction du support',
    ],
  },
  {
    slug: 'mouvement-dans-un-champ',
    title: 'Mouvement dans un champ',
    shortTitle: 'Mouvement / champ',
    order: 3,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Mouvement et interactions',
    themeMatchers: [
      'mouvement dans un champ',
      'champ uniforme',
      'chute libre',
      'projectile',
      'parabolique',
      'satellite',
    ],
  },
  {
    slug: 'gravitation',
    title: 'Gravitation',
    shortTitle: 'Gravitation',
    order: 4,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Mouvement et interactions',
    themeMatchers: [
      'gravitation',
      'kepler',
      'orbite',
      'planete',
      'attraction universelle',
      'satellite geostationnaire',
    ],
  },

  // ─── Énergie : conversions et transferts ─────────────────────────────────────
  {
    slug: 'electricite',
    title: 'Électricité',
    shortTitle: 'Électricité',
    order: 1,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Énergie',
    themeMatchers: [
      'electricite',
      'tension',
      'intensite',
      'courant',
      'loi d ohm',
      'kirchhoff',
      'resistance',
      'dipole',
      'generateur',
    ],
  },
  {
    slug: 'circuits-rc',
    title: 'Circuits RC',
    shortTitle: 'RC',
    order: 2,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Énergie',
    themeMatchers: ['circuit rc', 'condensateur', 'charge du condensateur', 'decharge', 'constante de temps'],
  },
  {
    slug: 'transferts-thermiques',
    title: 'Transferts thermiques',
    shortTitle: 'Thermique',
    order: 3,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Énergie',
    themeMatchers: [
      'transfert thermique',
      'conduction',
      'convection',
      'rayonnement',
      'flux thermique',
      'capacite thermique',
      'isolation',
    ],
  },
  {
    slug: 'bilans-energetiques',
    title: 'Bilans énergétiques',
    shortTitle: 'Bilans énergie',
    order: 4,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Énergie',
    themeMatchers: [
      'bilan energetique',
      'energie',
      'travail',
      'energie cinetique',
      'energie potentielle',
      'energie mecanique',
      'conservation de l energie',
    ],
  },
  {
    slug: 'rendement-puissance',
    title: 'Rendement et puissance',
    shortTitle: 'Rendement',
    order: 5,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Énergie',
    themeMatchers: ['rendement', 'puissance', 'puissance utile', 'puissance recue'],
  },

  // ─── Ondes et signaux ────────────────────────────────────────────────────────
  {
    slug: 'ondes-mecaniques',
    title: 'Ondes mécaniques',
    shortTitle: 'Ondes mécaniques',
    order: 1,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Ondes et signaux',
    themeMatchers: [
      'onde mecanique',
      'onde progressive',
      'celerite',
      'periode',
      'frequence',
      'longueur d onde',
    ],
  },
  {
    slug: 'ondes-sonores',
    title: 'Ondes sonores',
    shortTitle: 'Sons',
    order: 2,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Ondes et signaux',
    themeMatchers: [
      'son',
      'sonore',
      'acoustique',
      'niveau sonore',
      'intensite sonore',
      'decibel',
    ],
  },
  {
    slug: 'lumiere',
    title: 'Lumière',
    shortTitle: 'Lumière',
    order: 3,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Ondes et signaux',
    themeMatchers: [
      'lumiere',
      'optique',
      'lentille',
      'image',
      'oeil',
      'lunette',
      'microscope',
      'refraction',
      'reflexion',
      'spectre',
    ],
  },
  {
    slug: 'diffraction-interferences',
    title: 'Diffraction et interférences',
    shortTitle: 'Diffraction',
    order: 4,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Ondes et signaux',
    themeMatchers: ['diffraction', 'interference', 'fentes d young', 'reseau'],
  },
  {
    slug: 'effet-doppler',
    title: 'Effet Doppler',
    shortTitle: 'Doppler',
    order: 5,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Ondes et signaux',
    themeMatchers: ['doppler', 'decalage doppler'],
  },
  {
    slug: 'signaux-capteurs',
    title: 'Signaux et capteurs',
    shortTitle: 'Signaux',
    order: 6,
    subjectLongDescription: SCIENCES_PHYSIQUES_SUBJECT,
    domainLongDescription: 'Ondes et signaux',
    themeMatchers: ['signal', 'capteur', 'numerique', 'echantillonnage', 'transmission'],
  },
];

export const normalizeMatcherText = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’'`]/g, ' ')
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
