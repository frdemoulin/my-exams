import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 4 – Forces intermoléculaires
 * Section B – Interactions entre molécules
 */

export const UE14_CH4_INTERACTIONS_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 11,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos des interactions intermoléculaires, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Elles s'exercent entre des molécules ou des groupes distincts.`,
        correct: true,
        explanation: `Le préfixe « inter- » renvoie à une interaction entre entités distinctes.`,
      },
      {
        content: `Elles sont généralement plus faibles qu'une liaison covalente.`,
        correct: true,
        explanation: `Les interactions non covalentes sont moins énergétiques qu'une liaison covalente.`,
      },
      {
        content: `Elles correspondent exclusivement aux liaisons covalentes à l'intérieur d'une molécule.`,
        correct: false,
        explanation: `Une liaison covalente interne est intramoléculaire.`,
      },
      {
        content: `Elles nécessitent toujours des ions portant des charges entières.`,
        correct: false,
        explanation: `Des molécules neutres polaires ou apolaires peuvent interagir.`,
      },
    ],
    explanation:
      `Les interactions intermoléculaires contribuent à la cohésion de la matière sans modifier l'enchaînement covalent des molécules.`,
  },
  {
    order: 12,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant les interactions de Van der Waals entre molécules apolaires, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Une fluctuation momentanée du nuage électronique peut créer un dipôle instantané.`,
        correct: true,
        explanation: `La répartition électronique n'est pas parfaitement figée.`,
      },
      {
        content: `Un dipôle instantané peut induire une polarisation dans une molécule voisine.`,
        correct: true,
        explanation: `Cette polarisation induite permet une attraction temporaire.`,
      },
      {
        content: `Chaque molécule doit posséder un dipôle permanent.`,
        correct: false,
        explanation: `Les molécules apolaires peuvent justement subir ces interactions.`,
      },
      {
        content: `Elles sont plus fortes qu'une liaison covalente.`,
        correct: false,
        explanation: `Elles sont beaucoup plus faibles individuellement.`,
      },
    ],
    explanation:
      `Les interactions de Van der Waals peuvent résulter de dipôles instantanés et induits, même entre molécules globalement apolaires.`,
  },
  {
    order: 13,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux caractéristiques correctes des interactions de Van der Waals dans le modèle du cours.`,
    choices: [
      {
        content: `Elles sont faibles lorsqu'elles sont considérées individuellement.`,
        correct: true,
        explanation: `Une interaction isolée est de faible intensité.`,
      },
      {
        content: `Leur très grand nombre peut contribuer fortement à la cohésion de la matière.`,
        correct: true,
        explanation: `L'effet cumulatif peut devenir important.`,
      },
      {
        content: `Elles sont absentes des substances apolaires.`,
        correct: false,
        explanation: `Elles sont particulièrement importantes pour expliquer la cohésion entre espèces apolaires.`,
      },
      {
        content: `Elles forment systématiquement de nouvelles liaisons covalentes.`,
        correct: false,
        explanation: `Il s'agit d'interactions non covalentes.`,
      },
    ],
    explanation:
      `Le caractère faible d'une interaction de Van der Waals n'empêche pas un effet macroscopique lorsque des milliers d'interactions s'additionnent.`,
  },
  {
    order: 14,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Les chaînes hydrocarbonées des lipides membranaires sont très proches les unes des autres. Dans le modèle simplifié de la fiche, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `De nombreuses interactions de Van der Waals entre chaînes contribuent à la cohésion de la membrane plasmique.`,
        correct: true,
        explanation: `La fiche cite explicitement la membrane plasmique comme exemple.`,
      },
      {
        content: `Une grande surface de contact peut multiplier les interactions faibles.`,
        correct: true,
        explanation: `Davantage d'atomes proches signifie davantage d'interactions possibles.`,
      },
      {
        content: `Les chaînes de lipides voisins doivent former entre elles de nouvelles liaisons covalentes permanentes.`,
        correct: false,
        explanation: `Les lipides restent des molécules distinctes.`,
      },
      {
        content: `Seules les molécules d'eau subissent des interactions de Van der Waals.`,
        correct: false,
        explanation: `Ces interactions existent aussi entre chaînes carbonées apolaires.`,
      },
    ],
    explanation:
      `La cohésion des régions hydrophobes membranaires peut être renforcée par l'accumulation de nombreuses interactions faibles entre chaînes.`,
  },
  {
    order: 15,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle proposition décrit correctement une interaction dipôle-dipôle entre deux molécules polaires ?`,
    choices: [
      {
        content: `Le pôle partiellement positif d'une molécule est attiré par le pôle partiellement négatif d'une autre.`,
        correct: true,
        explanation: `C'est l'origine électrostatique de cette interaction.`,
      },
      {
        content: `Deux pôles de même signe s'attirent préférentiellement.`,
        correct: false,
        explanation: `Des charges de même signe se repoussent.`,
      },
      {
        content: `Elle exige la formation d'une nouvelle liaison covalente.`,
        correct: false,
        explanation: `Il s'agit d'une interaction non covalente.`,
      },
      {
        content: `Elle n'existe qu'entre molécules apolaires.`,
        correct: false,
        explanation: `Elle met en jeu des dipôles permanents de molécules polaires.`,
      },
    ],
    explanation:
      `Les molécules polaires peuvent s'orienter de façon à rapprocher leurs pôles partiels de signes opposés.`,
  },
  {
    order: 16,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Quelles conséquences générales peut avoir une augmentation de la cohésion intermoléculaire ?`,
    choices: [
      {
        content: `Elle peut tendre à augmenter la température de vaporisation.`,
        correct: true,
        explanation: `Il faut davantage d'énergie pour éloigner les molécules.`,
      },
      {
        content: `Elle peut tendre à augmenter la température de fusion.`,
        correct: true,
        explanation: `Le cours relie une cohésion accrue à des températures de changement d'état plus élevées.`,
      },
      {
        content: `Elle impose la rupture des liaisons covalentes lors de l'ébullition.`,
        correct: false,
        explanation: `La vaporisation est un changement d'état physique.`,
      },
      {
        content: `Elle rend toujours la substance moins visqueuse.`,
        correct: false,
        explanation: `Une forte cohésion peut au contraire contribuer à une viscosité élevée.`,
      },
    ],
    explanation:
      `Des attractions plus fortes entre molécules nécessitent généralement davantage d'énergie pour les séparer ou les réorganiser.`,
  },
  {
    order: 17,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Le butane et la propanone, ou acétone, ont des masses molaires voisines. Sélectionnez exactement les deux propositions expliquant pourquoi l'acétone a une température de vaporisation plus élevée.`,
    choices: [
      {
        content: `L'acétone est polaire alors que le butane est apolaire.`,
        correct: true,
        explanation: `Le groupe carbonyle de l'acétone lui confère un dipôle permanent.`,
      },
      {
        content: `Des interactions dipôle-dipôle s'ajoutent entre molécules d'acétone.`,
        correct: true,
        explanation: `Ces attractions renforcent la cohésion du liquide.`,
      },
      {
        content: `Le butane possède nécessairement les interactions les plus fortes parce qu'il est apolaire.`,
        correct: false,
        explanation: `Le caractère apolaire ne renforce pas les interactions par rapport à un dipôle permanent comparable.`,
      },
      {
        content: `Deux substances de masses molaires proches ont obligatoirement la même température de vaporisation.`,
        correct: false,
        explanation: `La nature des interactions intermoléculaires est déterminante.`,
      },
    ],
    explanation:
      `À masses molaires proches, la présence d'un dipôle permanent dans l'acétone explique des interactions supplémentaires et une cohésion plus forte.`,
  },
  {
    order: 18,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Pour qu'une liaison hydrogène classique puisse s'établir dans le modèle du cours, sélectionnez exactement les deux conditions essentielles.`,
    choices: [
      {
        content: `Un hydrogène doit être lié à un atome très électronégatif, typiquement $\\ce{N}$, $\\ce{O}$ ou $\\ce{F}$.`,
        correct: true,
        explanation: `Cette liaison rend l'hydrogène fortement $\\delta^{+}$.`,
      },
      {
        content: `Un autre atome électronégatif, typiquement $\\ce{N}$, $\\ce{O}$ ou $\\ce{F}$, doit pouvoir jouer le rôle d'accepteur.`,
        correct: true,
        explanation: `Il fournit une zone riche en électrons, souvent un doublet non liant.`,
      },
      {
        content: `L'hydrogène doit obligatoirement être lié au carbone.`,
        correct: false,
        explanation: `Une liaison C-H ordinaire n'est pas un donneur classique dans le modèle simplifié du cours.`,
      },
      {
        content: `Les deux partenaires doivent porter des charges électriques entières.`,
        correct: false,
        explanation: `Les charges mises en jeu sont généralement partielles.`,
      },
    ],
    explanation:
      `La liaison hydrogène associe un donneur X-H fortement polarisé et un atome accepteur électronégatif riche en électrons.`,
  },
  {
    order: 19,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Dans les ordres de grandeur simplifiés donnés par la fiche, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Une liaison hydrogène est environ vingt fois plus faible qu'une liaison covalente.`,
        correct: true,
        explanation: `C'est l'ordre de grandeur retenu dans le cours.`,
      },
      {
        content: `Une liaison hydrogène est environ dix fois plus forte qu'une interaction de Van der Waals isolée.`,
        correct: true,
        explanation: `C'est également l'ordre de grandeur donné.`,
      },
      {
        content: `Une liaison hydrogène est plus forte qu'une liaison covalente.`,
        correct: false,
        explanation: `Elle est nettement plus faible.`,
      },
      {
        content: `Une interaction de Van der Waals est plus forte qu'une liaison hydrogène.`,
        correct: false,
        explanation: `L'ordre indiqué dans la fiche est inverse.`,
      },
    ],
    explanation:
      `On retient qualitativement : liaison covalente > liaison hydrogène > interaction de Van der Waals.`,
  },
  {
    order: 20,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos du réseau de liaisons hydrogène de l'eau, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Une molécule d'eau peut, dans une organisation favorable, participer à quatre liaisons hydrogène avec des voisines.`,
        correct: true,
        explanation: `Deux hydrogènes peuvent être donneurs et deux doublets de l'oxygène accepteurs.`,
      },
      {
        content: `Ce réseau contribue à la température de vaporisation anormalement élevée de l'eau.`,
        correct: true,
        explanation: `La cohésion du liquide est fortement renforcée.`,
      },
      {
        content: `L'oxygène de l'eau ne possède aucun doublet non liant.`,
        correct: false,
        explanation: `Il en possède deux.`,
      },
      {
        content: `L'eau ne peut jamais jouer le rôle d'accepteur de liaison hydrogène.`,
        correct: false,
        explanation: `Ses doublets non liants lui permettent précisément de jouer ce rôle.`,
      },
    ],
    explanation:
      `Chaque molécule d'eau peut être à la fois donneur et accepteur, ce qui permet un réseau intermoléculaire étendu.`,
  },
];

export const UE14_CH4_INTERACTIONS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 41,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `On compare les interactions dominantes entre molécules de méthane $\\ce{CH4}$, de chlorométhane $\\ce{CH3Cl}$ et de méthanol $\\ce{CH3OH}$. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Entre molécules de méthane, les interactions de Van der Waals sont les principales attractions.`,
        correct: true,
        explanation: `Le méthane est apolaire.`,
      },
      {
        content: `Le chlorométhane peut présenter des interactions dipôle-dipôle.`,
        correct: true,
        explanation: `Il possède un dipôle permanent.`,
      },
      {
        content: `Deux molécules de méthanol peuvent former des liaisons hydrogène.`,
        correct: true,
        explanation: `Le groupe O-H peut donner et l'oxygène peut accepter.`,
      },
      {
        content: `Le méthane forme des liaisons hydrogène grâce à ses liaisons C-H.`,
        correct: false,
        explanation: `Les liaisons C-H ordinaires ne répondent pas au modèle simplifié du donneur de liaison hydrogène.`,
      },
    ],
    explanation:
      `Cette série permet de distinguer successivement interactions de Van der Waals, dipôle-dipôle et liaison hydrogène.`,
  },
  {
    order: 42,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `On donne les températures de vaporisation approximatives : $\\ce{CH4}$ : $-161\\,^{\\circ}\\mathrm{C}$ ; $\\ce{NH3}$ : $-33\\,^{\\circ}\\mathrm{C}$ ; $\\ce{H2O}$ : $100\\,^{\\circ}\\mathrm{C}$. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Les liaisons hydrogène renforcent la cohésion de $\\ce{NH3}$ et de $\\ce{H2O}$ par rapport au méthane.`,
        correct: true,
        explanation: `N-H et O-H permettent ces interactions.`,
      },
      {
        content: `Le réseau étendu de liaisons hydrogène de l'eau contribue à sa température de vaporisation très élevée.`,
        correct: true,
        explanation: `Chaque molécule d'eau peut participer à plusieurs interactions.`,
      },
      {
        content: `La masse molaire suffit à elle seule à expliquer ces trois valeurs.`,
        correct: false,
        explanation: `La nature des interactions est essentielle.`,
      },
      {
        content: `Le méthane présente les interactions intermoléculaires les plus fortes.`,
        correct: false,
        explanation: `Il ne présente principalement que de faibles interactions de Van der Waals.`,
      },
    ],
    explanation:
      `Les températures de changement d'état constituent un indice macroscopique de la cohésion intermoléculaire.`,
  },
  {
    order: 43,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `À propos du fluorure d'hydrogène $\\ce{HF}$, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `L'hydrogène porte une charge partielle positive.`,
        correct: true,
        explanation: `Le fluor attire fortement les électrons de la liaison covalente.`,
      },
      {
        content: `Le fluor d'une molécule voisine peut jouer le rôle d'accepteur de liaison hydrogène.`,
        correct: true,
        explanation: `Il possède des doublets non liants.`,
      },
      {
        content: `La liaison covalente H-F à l'intérieur d'une molécule est elle-même une liaison hydrogène.`,
        correct: false,
        explanation: `La liaison H-F interne est covalente polarisée.`,
      },
      {
        content: `Dans l'organisation simplifiée retenue dans le cours, une molécule de $\\ce{HF}$ peut participer à deux liaisons hydrogène avec ses voisines, l'une comme donneur et l'autre comme accepteur.`,
        correct: true,
        explanation: `C'est le schéma en chaîne présenté dans la fiche pour le fluorure d'hydrogène.`,
      },
    ],
    explanation:
      `Dans une chaîne de HF, une molécule peut être donneuse par son H et accepteur par son F.`,
  },
  {
    order: 44,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Dans un mélange d'eau et de méthanol $\\ce{CH3OH}$, sélectionnez exactement les deux propositions correctes.`,
    choices: [
      {
        content: `L'oxygène de l'eau peut accepter une liaison hydrogène donnée par le groupe O-H du méthanol.`,
        correct: true,
        explanation: `L'oxygène possède des doublets non liants.`,
      },
      {
        content: `L'eau peut donner une liaison hydrogène vers l'oxygène du méthanol.`,
        correct: true,
        explanation: `L'oxygène du méthanol peut jouer le rôle d'accepteur.`,
      },
      {
        content: `La miscibilité repose uniquement sur des interactions de Van der Waals.`,
        correct: false,
        explanation: `Les liaisons hydrogène jouent un rôle majeur.`,
      },
      {
        content: `Le méthanol ne peut jamais être accepteur de liaison hydrogène.`,
        correct: false,
        explanation: `Son oxygène possède des doublets non liants.`,
      },
    ],
    explanation:
      `L'eau et le méthanol peuvent tous deux agir comme donneurs et accepteurs, ce qui favorise leur miscibilité.`,
  },
  {
    order: 45,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `L'éthanol $\\ce{CH3CH2OH}$ et l'éther diméthylique $\\ce{CH3OCH3}$ ont la même formule brute $\\ce{C2H6O}$. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `L'éthanol peut donner des liaisons hydrogène entre ses propres molécules grâce à sa liaison O-H.`,
        correct: true,
        explanation: `Il possède un hydrogène lié directement à l'oxygène.`,
      },
      {
        content: `L'éther diméthylique peut accepter une liaison hydrogène grâce à l'oxygène.`,
        correct: true,
        explanation: `Son oxygène possède des doublets non liants.`,
      },
      {
        content: `L'éther diméthylique peut donner une liaison hydrogène classique entre ses propres molécules.`,
        correct: false,
        explanation: `Il ne possède aucun hydrogène directement lié à O, N ou F.`,
      },
      {
        content: `La formule brute identique impose des propriétés intermoléculaires identiques.`,
        correct: false,
        explanation: `La connectivité des atomes modifie les possibilités d'interaction.`,
      },
    ],
    explanation:
      `Deux isomères de même formule brute peuvent présenter des capacités différentes de donation de liaison hydrogène.`,
  },
  {
    order: 46,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Deux molécules d'acide éthanoïque $\\ce{CH3COOH}$ peuvent former un dimère cyclique. Sélectionnez exactement les deux propositions correctes.`,
    choices: [
      {
        content: `L'hydrogène du groupe O-H peut jouer le rôle de donneur.`,
        correct: true,
        explanation: `Il est fortement polarisé.`,
      },
      {
        content: `L'oxygène carbonylé peut jouer le rôle d'accepteur.`,
        correct: true,
        explanation: `Il possède des doublets non liants.`,
      },
      {
        content: `Le dimère est créé par deux nouvelles liaisons covalentes O-H entre molécules.`,
        correct: false,
        explanation: `Les deux interactions sont des liaisons hydrogène.`,
      },
      {
        content: `Cette association diminue nécessairement la cohésion entre les deux molécules.`,
        correct: false,
        explanation: `Les interactions attractives renforcent leur association.`,
      },
    ],
    explanation:
      `Un acide carboxylique possède à la fois un site donneur et un site accepteur permettant la formation de dimères par deux liaisons hydrogène.`,
  },
  {
    order: 47,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Le glycérol possède trois groupes hydroxyle et une viscosité élevée. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Ses groupes O-H permettent la formation d'un réseau de liaisons hydrogène.`,
        correct: true,
        explanation: `Le glycérol peut multiplier les interactions avec ses voisines.`,
      },
      {
        content: `Une forte cohésion intermoléculaire peut contribuer à sa viscosité.`,
        correct: true,
        explanation: `Les molécules se déplacent moins facilement les unes par rapport aux autres.`,
      },
      {
        content: `Le glycérol est apolaire car il contient trois carbones.`,
        correct: false,
        explanation: `Les trois groupes hydroxyle lui confèrent un fort caractère polaire.`,
      },
      {
        content: `Ses groupes hydroxyle empêchent toute interaction avec l'eau.`,
        correct: false,
        explanation: `Ils favorisent au contraire les liaisons hydrogène avec l'eau.`,
      },
    ],
    explanation:
      `Les nombreux groupes hydroxyle du glycérol expliquent une forte capacité à établir des liaisons hydrogène et contribuent à sa viscosité.`,
  },
  {
    order: 48,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Dans l'aldéhyde salicylique, une liaison hydrogène peut se former à l'intérieur d'une même molécule entre deux groupes voisins. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Il s'agit d'une liaison hydrogène intramoléculaire.`,
        correct: true,
        explanation: `Le donneur et l'accepteur appartiennent au même édifice moléculaire.`,
      },
      {
        content: `Elle peut limiter certaines rotations et stabiliser une conformation plus rigide.`,
        correct: true,
        explanation: `L'interaction peut verrouiller une géométrie particulière.`,
      },
      {
        content: `Une liaison hydrogène relie obligatoirement deux molécules distinctes.`,
        correct: false,
        explanation: `Elle peut être intermoléculaire ou intramoléculaire.`,
      },
      {
        content: `Cette interaction rend nécessairement la molécule plus flexible.`,
        correct: false,
        explanation: `Elle peut au contraire réduire la liberté conformationnelle.`,
      },
    ],
    explanation:
      `Les liaisons hydrogène peuvent aussi stabiliser localement la géométrie d'une molécule unique.`,
  },
  {
    order: 49,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `À propos des liaisons hydrogène dans les biomolécules, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Elles contribuent à stabiliser certaines hélices et certains feuillets des protéines.`,
        correct: true,
        explanation: `Les groupes amide du squelette peptidique peuvent former des réseaux de liaisons hydrogène.`,
      },
      {
        content: `Une paire guanine-cytosine comporte classiquement trois liaisons hydrogène, contre deux pour une paire adénine-thymine.`,
        correct: true,
        explanation: `C'est le décompte retenu dans le cours.`,
      },
      {
        content: `Les deux brins d'ADN sont unis uniquement par des liaisons covalentes entre bases complémentaires.`,
        correct: false,
        explanation: `Les bases des deux brins sont notamment associées par des interactions non covalentes.`,
      },
      {
        content: `Le caractère labile des liaisons hydrogène interdit toute ouverture de la double hélice.`,
        correct: false,
        explanation: `Cette labilité permet au contraire des ruptures transitoires.`,
      },
    ],
    explanation:
      `Les liaisons hydrogène sont assez nombreuses pour stabiliser des structures biologiques tout en restant réversibles.`,
  },
  {
    order: 50,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant les interactions intermoléculaires et les changements d'état, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Une cohésion plus importante tend à élever les températures de fusion et de vaporisation.`,
        correct: true,
        explanation: `Davantage d'énergie est nécessaire pour séparer ou réorganiser les molécules.`,
      },
      {
        content: `Lors de la vaporisation, les molécules sont éloignées sans rupture systématique de leurs liaisons covalentes.`,
        correct: true,
        explanation: `La vaporisation est un changement physique.`,
      },
      {
        content: `Une liaison hydrogène est plus faible qu'une interaction de Van der Waals dans les ordres de grandeur du cours.`,
        correct: false,
        explanation: `La fiche donne l'ordre inverse.`,
      },
      {
        content: `Les interactions intermoléculaires sont irréversibles.`,
        correct: false,
        explanation: `Elles peuvent se rompre et se reformer.`,
      },
    ],
    explanation:
      `Les propriétés macroscopiques des liquides traduisent en partie l'intensité et le nombre des interactions entre molécules.`,
  },
  {
    order: 53,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Dans un modèle électrostatique simplifié, l'intensité d'une attraction varie comme $F\\propto1/d^2$. Si la distance entre les deux partenaires est doublée sans modifier les charges, par quel facteur la force est-elle multipliée ?`,
    answer: { type: 'number', value: 0.25, tolerance: 0.001 },
    explanation:
      `Si $d$ devient $2d$, alors $F$ est multipliée par $1/2^2=1/4=0{,}25$.`,
  },
  {
    order: 54,
    difficulty: 'MEDIUM',
    format: 'QZONE',
    question: `Dans le schéma, cliquez sur la liaison hydrogène intermoléculaire entre le méthanol et l'eau.`,
    image: {
      src: '/images/training/ue14/chimie/liaison-hydrogene-methanol-eau-qzone.svg',
      alt: 'Schéma d’une molécule de méthanol et d’une molécule d’eau reliées par une liaison hydrogène en pointillés',
      width: 1100,
      height: 520,
    },
    expectedZones: [
      {
        id: 'hydrogen-bond',
        label: `Liaison hydrogène O···H`,
        x: 0.51,
        y: 0.50,
        tolerance: 0.075,
      },
    ],
    explanation:
      `La liaison hydrogène est représentée par les pointillés entre l'oxygène accepteur du méthanol et l'hydrogène $\\delta^{+}$ lié à l'oxygène de la molécule d'eau. Les traits pleins correspondent aux liaisons covalentes internes aux molécules.`,
  },
];
