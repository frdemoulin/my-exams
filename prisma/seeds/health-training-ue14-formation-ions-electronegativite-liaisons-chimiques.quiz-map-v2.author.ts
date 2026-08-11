/**
 * Cartographie éditoriale V2
 * UE14 – Chimie générale – Chapitre 2
 * Formation des ions, électronégativité et liaisons chimiques
 */

export const UE14_CH2_V2_QUIZ_MAP = [
  {
    sectionOrder: 1,
    order: 1,
    slug: 'decouvrir-formation-ions',
    title: `Formation des ions et électronégativité`,
    description:
      `Repères fondamentaux sur les cations, les anions, l'énergie d'ionisation, l'affinité électronique et l'électronégativité.`,
    stage: 'DISCOVER' as const,
    questionOrders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    sectionOrder: 1,
    order: 2,
    slug: 'sentrainer-formation-ions',
    title: `Formation des ions et électronégativité`,
    description:
      `Applications sur les configurations ioniques, les tendances périodiques, l'électronégativité et les espèces isoélectroniques.`,
    stage: 'PRACTICE' as const,
    items: [
      {
        type: 'GROUP' as const,
        title: `Ions sodium et chlorure`,
        sharedStatement:
          `Une solution aqueuse de chlorure de sodium contient notamment les ions $\\ce{Na+}$ et $\\ce{Cl-}$. On donne $\\mathrm{Z}(\\ce{Na})=11$, $\\mathrm{Z}(\\ce{Cl})=17$, $\\mathrm{Z}(\\ce{Ne})=10$ et $\\mathrm{Z}(\\ce{Ar})=18$.`,
        questionOrders: [11, 12],
      },
      { type: 'QUESTION' as const, questionOrder: 13 },
      { type: 'QUESTION' as const, questionOrder: 14 },
      { type: 'QUESTION' as const, questionOrder: 15 },
      { type: 'QUESTION' as const, questionOrder: 16 },
      { type: 'QUESTION' as const, questionOrder: 17 },
      { type: 'QUESTION' as const, questionOrder: 18 },
      { type: 'QUESTION' as const, questionOrder: 19 },
      { type: 'QUESTION' as const, questionOrder: 20 },
      {
        type: 'GROUP' as const,
        title: `Ion calcium`,
        sharedStatement:
          `Le calcium est un élément important de l'organisme. On considère son cation $\\ce{Ca^2+}$ et on donne $\\mathrm{Z}(\\ce{Ca})=20$, $\\mathrm{Z}(\\ce{Ar})=18$.`,
        questionOrders: [61, 62],
      },
    ],
  },
  {
    sectionOrder: 2,
    order: 1,
    slug: 'decouvrir-liaisons-chimiques',
    title: `Liaisons chimiques`,
    description:
      `Repères fondamentaux sur les liaisons covalentes et de coordination, la polarisation, les radicaux et la mésomérie.`,
    stage: 'DISCOVER' as const,
    questionOrders: [21, 22, 23, 26, 28, 30, 32, 33, 37, 38],
  },
  {
    sectionOrder: 2,
    order: 2,
    slug: 'sentrainer-liaisons-chimiques',
    title: `Liaisons chimiques`,
    description:
      `Applications sur les règles de stabilité, la coordination, les moments dipolaires, la mésomérie et la rupture des liaisons.`,
    stage: 'PRACTICE' as const,
    items: [
      { type: 'QUESTION' as const, questionOrder: 25 },
      { type: 'QUESTION' as const, questionOrder: 24 },
      {
        type: 'GROUP' as const,
        title: `Formation de l'ion ammonium`,
        sharedStatement:
          `L'ammoniac possède un doublet non liant sur l'azote. En présence d'un proton, il peut former l'ion ammonium selon $\\ce{NH3 + H+ -> NH4+}$.`,
        questionOrders: [27],
      },
      {
        type: 'GROUP' as const,
        title: `Coordination du fer de l'hème`,
        sharedStatement:
          `Dans l'hémoglobine, l'ion $\\ce{Fe^2+}$ de l'hème est coordonné à quatre azotes de l'hème et à un azote d'une histidine ; une sixième position peut fixer transitoirement $\\ce{O2}$.`,
        questionOrders: [29],
      },
      { type: 'QUESTION' as const, questionOrder: 31 },
      { type: 'QUESTION' as const, questionOrder: 36 },
      { type: 'QUESTION' as const, questionOrder: 39 },
      { type: 'QUESTION' as const, questionOrder: 50 },
      {
        type: 'GROUP' as const,
        title: `Radiolyse de l'eau`,
        sharedStatement:
          `En radiothérapie, les rayonnements ionisants peuvent transférer de l'énergie à l'eau cellulaire et provoquer une rupture homolytique d'une liaison $\\ce{O-H}$ : $\\ce{H2O ->[\\gamma] HO. + H.}$.`,
        questionOrders: [40, 41],
      },
      { type: 'QUESTION' as const, questionOrder: 63 },
      { type: 'QUESTION' as const, questionOrder: 64 },
    ],
  },
  {
    sectionOrder: 3,
    order: 1,
    slug: 'sentrainer-synthese-ions-electronegativite-liaisons-chimiques',
    title: `Ions, électronégativité et liaisons chimiques`,
    description:
      `Synthèse appliquée reliant ions, polarisation, coordination, mésomérie et rupture des liaisons dans des contextes biologiques et médicaux.`,
    stage: 'PRACTICE' as const,
    items: [
      {
        type: 'GROUP' as const,
        title: `Sérum physiologique et chlorure de sodium`,
        sharedStatement:
          `Le sérum physiologique est une solution aqueuse contenant notamment du chlorure de sodium. On donne $\\mathrm{Z}(\\ce{Na})=11$ et $\\mathrm{Z}(\\ce{Cl})=17$.`,
        questionOrders: [51, 52],
      },
      { type: 'QUESTION' as const, questionOrder: 53 },
      { type: 'QUESTION' as const, questionOrder: 54 },
      { type: 'QUESTION' as const, questionOrder: 55 },
      { type: 'QUESTION' as const, questionOrder: 56 },
      { type: 'QUESTION' as const, questionOrder: 57 },
      { type: 'QUESTION' as const, questionOrder: 58 },
      {
        type: 'GROUP' as const,
        title: `Radiothérapie et radiolyse de l'eau`,
        sharedStatement:
          `Lors d'une radiolyse, une liaison $\\ce{O-H}$ peut subir une rupture homolytique et former des radicaux. On donne $E_{\\ce{O-H}}=460\\,\\mathrm{kJ\\cdot mol^{-1}}$.`,
        questionOrders: [59, 60],
      },
    ],
  },
  {
    sectionOrder: 3,
    order: 2,
    slug: 'synthese-ions-electronegativite-liaisons-chimiques',
    title: `Ions, électronégativité et liaisons chimiques`,
    description:
      `Maîtrise transversale du chapitre : ionisation, électronégativité, coordination, mésomérie, polarisation et énergie de liaison.`,
    stage: 'MASTER' as const,
    items: [
      { type: 'QUESTION' as const, questionOrder: 34 },
      {
        type: 'GROUP' as const,
        title: `Fluorures et prévention dentaire`,
        sharedStatement:
          `Les ions fluorure sont utilisés dans la prévention de la carie dentaire. On considère notamment le fluorure de sodium $\\ce{NaF}$ ; $\\chi(\\ce{Na})\\approx0{,}9$ et $\\chi(\\ce{F})\\approx4{,}0$.`,
        questionOrders: [42, 43],
      },
      { type: 'QUESTION' as const, questionOrder: 44 },
      { type: 'QUESTION' as const, questionOrder: 45 },
      {
        type: 'GROUP' as const,
        title: `Hémoglobine et monoxyde de carbone`,
        sharedStatement:
          `Dans l'hémoglobine, $\\ce{Fe^2+}$ occupe le centre de l'hème. Cinq positions de coordination sont occupées par des atomes d'azote ; une sixième peut fixer $\\ce{O2}$, auquel le monoxyde de carbone peut se substituer.`,
        questionOrders: [46, 47],
      },
      { type: 'QUESTION' as const, questionOrder: 35 },
      {
        type: 'GROUP' as const,
        title: `Radiothérapie et rupture d'une liaison O-H`,
        sharedStatement:
          `On donne l'énergie de dissociation $E_{\\ce{O-H}}=460\\,\\mathrm{kJ\\cdot mol^{-1}}$ et le nombre d'Avogadro $N_{\\mathrm A}=6{,}0\\times10^{23}\\,\\mathrm{mol^{-1}}$.`,
        questionOrders: [48, 49],
      },
      { type: 'QUESTION' as const, questionOrder: 65 },
      { type: 'QUESTION' as const, questionOrder: 66 },
    ],
  },
] as const;

export const UE14_CH2_V2_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  1: [`Formation d'un cation`],
  2: [`Nombre d'électrons de l'ion magnésium`],
  3: [`Ions isoélectroniques du néon`],
  4: [`Énergie d'ionisation et taille atomique`],
  5: [`Formation des anions et configuration de gaz rare`],
  6: [`Définition de l'électronégativité`],
  7: [`Évolution périodique de l'électronégativité`],
  8: [`Électronégativité de H, C, N et O`],
  9: [`Électronégativité du fluor`],
  10: [`Électronégativité et tendance ionique`],
  11: [`Ion sodium : nombre d'électrons`],
  12: [`Ion chlorure : nombre d'électrons`],
  13: [`Espèces isoélectroniques du néon`],
  14: [`Cations ferreux et ferrique`],
  15: [`Ion ferrique : nombre d'électrons`],
  16: [`Classement H/C/N/O par électronégativité`],
  17: [`Électronégativité des métaux alcalins`],
  18: [`Ionisation et capture électronique : tendances`],
  19: [`Reconnaissance des cations dans une liste longue`],
  20: [`Charge d'un cation après perte d'électrons`],
  21: [`Formation d'une liaison covalente`],
  22: [`Doublets liants et non liants`],
  23: [`Doublet non liant de l'ammoniac`],
  24: [`Valence du carbone et du phosphore`],
  25: [`Règles du duet et de l'octet`],
  26: [`Définition de la liaison de coordination`],
  27: [`Ion ammonium et équivalence des liaisons N-H`],
  28: [`Définition d'un complexe de coordination`],
  29: [`Coordination du fer dans l'hémoglobine`],
  30: [`Polarisation et moment dipolaire d'une liaison`],
  31: [`Calcul de charge partielle à partir du moment dipolaire`],
  32: [`Différence d'électronégativité C-O`],
  33: [`Définition de la mésomérie`],
  34: [`Chlore : configuration, famille, électronégativité et ion`],
  35: [`Cisplatine et coordination à l'ADN`],
  36: [`Protoxyde d'azote et mésomérie`],
  37: [`Rupture homolytique et radicaux`],
  38: [`Limites du modèle de Lewis`],
  39: [`Liaison amide : atome donneur en mésomérie`],
  40: [`Radiolyse de l'eau et rupture homolytique`],
  41: [`Conversion de l'énergie de liaison O-H`],
  42: [`Fluorure : nombre d'électrons`],
  43: [`Fluorure de sodium et caractère ionique`],
  44: [`Liaison peptidique et mésomérie`],
  45: [`Moment dipolaire H-Cl : calcul de charge partielle`],
  46: [`Positions de coordination azotées de l'hémoglobine`],
  47: [`Substitution de ligand par le monoxyde de carbone`],
  48: [`Énergie microscopique d'une liaison O-H`],
  49: [`Radiolyse et réactivité radicalaire`],
  50: [`Définition d'une espèce radicalaire`],
  51: [`Sérum physiologique : ion sodium`],
  52: [`Chlorure de sodium : électroneutralité et ions`],
  53: [`Formation de l'ion ammonium par coordination`],
  54: [`Peroxyde d'hydrogène : liaison sigma et doublets`],
  55: [`Acidité gastrique : moment dipolaire H-Cl`],
  56: [`Cisplatine : centre métallique et ligands`],
  57: [`Hémoglobine : coordination du fer et dioxygène`],
  58: [`Liaison peptidique : caractère partiel de double liaison`],
  59: [`Radiolyse de l'eau et radicaux libres`],
  60: [`Énergie molaire de rupture d'une liaison O-H`],
  61: [`Ion calcium : nombre d'électrons`],
  62: [`Ion calcium : formation et configuration électronique`],
  63: [`Cisplatine : donneurs et accepteur de coordination`],
  64: [`Liaisons polarisées et non polarisées`],
  65: [`Accepteurs de doublets en liaison de coordination`],
  66: [`Calcul avancé de charge partielle`],
};
