import type { SeedQuestion } from './health-training-ue14.shared';

export const SYNTHESIS_MASTER_QUESTION_ORDERS: number[] = [
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
];

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    order: 21,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare deux molécules diatomiques dont les moments dipolaires vérifient $\\mu = q\\,d$. La charge séparée $q$ est supposée identique dans les deux molécules, mais la distance interatomique de la seconde est deux fois plus grande.`,
    choices: [
      `Le module du moment dipolaire de la seconde molécule est deux fois plus grand.`,
      `Le moment dipolaire peut notamment s'exprimer en debyes, notés $\\mathrm{D}$.`,
      `Par convention en chimie, le vecteur moment dipolaire est orienté du pôle négatif vers le pôle positif.`,
      `Si $q=0$, l'augmentation de la distance $d$ suffit à créer un moment dipolaire non nul.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `À charge séparée identique, le module du moment dipolaire est proportionnel à la distance : doubler $d$ double donc $\\mu$. En chimie, le vecteur est orienté du pôle $\\delta^{+}$ vers le pôle $\\delta^{-}$. Si aucune charge n'est séparée, $q=0$ et le moment dipolaire reste nul quelle que soit la distance.`,
    choiceExplanations: [
      `Avec $d_{2}=2d_{1}$ et un même $q$, on obtient $\\mu_{2}=q(2d_{1})=2\\mu_{1}$.`,
      `Le debye est l'unité usuelle du moment dipolaire moléculaire.`,
      `La convention chimique est opposée : le vecteur est dirigé du pôle positif vers le pôle négatif.`,
      `La relation $\\mu=q\\,d$ donne nécessairement $\\mu=0$ lorsque $q=0$.`,
    ],
  },
  {
    order: 22,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On compare la molécule trigonale plane $\\mathrm{BCl_{3}}$ et la molécule coudée $\\mathrm{H_{2}O}$.`,
    choices: [
      `Les liaisons $\\mathrm{B-Cl}$ sont polarisées, mais leur somme vectorielle est nulle dans $\\mathrm{BCl_{3}}$.`,
      `Les deux moments dipolaires $\\mathrm{O-H}$ ne s'annulent pas dans la molécule d'eau.`,
      `$\\mathrm{BCl_{3}}$ est nécessairement polaire puisqu'elle contient trois liaisons polarisées.`,
      `$\\mathrm{H_{2}O}$ est apolaire puisque sa charge électrique totale est nulle.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La polarité globale dépend à la fois de la polarisation des liaisons et de leur géométrie. La symétrie trigonale de $\\mathrm{BCl_{3}}$ annule les trois moments dipolaires, tandis que la géométrie coudée de l'eau laisse une résultante dirigée vers l'oxygène.`,
    choiceExplanations: [
      `Les trois vecteurs, de même module et séparés de $120^{\\circ}$, se compensent exactement.`,
      `L'angle $\\mathrm{H-O-H}$ n'est pas de $180^{\\circ}$ : les deux vecteurs ne sont donc pas opposés.`,
      `La présence de liaisons polarisées ne suffit pas à rendre une molécule polaire lorsque la géométrie permet leur annulation.`,
      `Une molécule peut être électriquement neutre tout en présentant une répartition dissymétrique des charges partielles.`,
    ],
  },
  {
    order: 23,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On considère les isomères cis et trans du dichloroéthène. Les deux liaisons $\\mathrm{C-Cl}$ sont polarisées.`,
    choices: [
      `Dans l'isomère cis, les contributions des liaisons $\\mathrm{C-Cl}$ ne s'annulent pas totalement : la molécule est polaire.`,
      `Dans l'isomère trans, la disposition plus symétrique permet une compensation des moments dipolaires.`,
      `L'isomère trans doit avoir une température de vaporisation plus élevée, car il est moins polaire.`,
      `Les deux isomères possèdent nécessairement le même moment dipolaire puisqu'ils ont la même formule brute.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `L'isomérie géométrique modifie l'orientation relative des dipôles. L'isomère cis possède une résultante non nulle, alors que les dipôles de l'isomère trans se compensent beaucoup davantage. La cohésion dipôle-dipôle étant plus importante dans l'isomère cis, sa température de vaporisation est plus élevée dans l'exemple du cours.`,
    choiceExplanations: [
      `Les deux atomes de chlore placés du même côté produisent une résultante dipolaire non nulle.`,
      `La disposition opposée des deux chlores favorise l'annulation vectorielle des dipôles.`,
      `Une polarité plus faible diminue les interactions dipôle-dipôle et tend donc à abaisser la température de vaporisation.`,
      `La formule brute ne décrit pas la disposition spatiale des liaisons, pourtant déterminante pour la polarité.`,
    ],
  },
  {
    order: 24,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le butane et la propanone, ou acétone, ont des masses molaires voisines, mais l'acétone possède une température de vaporisation nettement plus élevée.`,
    choices: [
      `Le groupe carbonyle $\\mathrm{C=O}$ confère à l'acétone un dipôle permanent.`,
      `Des interactions dipôle-dipôle s'ajoutent entre les molécules d'acétone et renforcent leur cohésion.`,
      `Le butane ne subit aucune interaction intermoléculaire puisqu'il est apolaire.`,
      `La vaporisation de l'acétone nécessite la rupture de ses liaisons covalentes $\\mathrm{C-C}$ et $\\mathrm{C=O}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le butane apolaire est principalement soumis aux interactions de Van der Waals. L'acétone possède en plus un dipôle permanent porté par le carbonyle, ce qui renforce la cohésion du liquide. Une vaporisation sépare les molécules sans rompre normalement leurs liaisons covalentes internes.`,
    choiceExplanations: [
      `L'oxygène attire fortement le doublet de la liaison $\\mathrm{C=O}$, ce qui produit un dipôle important.`,
      `Les pôles de signes opposés de molécules voisines peuvent s'attirer.`,
      `Les molécules apolaires subissent notamment des interactions de Van der Waals dues à des dipôles instantanés et induits.`,
      `Un changement d'état est une transformation physique : les molécules conservent leur structure covalente.`,
    ],
  },
  {
    order: 25,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des interactions de Van der Waals et de la cohésion des chaînes hydrocarbonées d'une membrane plasmique :`,
    choices: [
      `Une molécule apolaire ne peut jamais présenter de dipôle, même instantané.`,
      `Une fluctuation du nuage électronique peut créer un dipôle instantané et induire un dipôle chez une molécule voisine.`,
      `Individuellement faibles, ces interactions peuvent devenir importantes lorsqu'elles sont très nombreuses le long de chaînes proches.`,
      `Ces interactions nécessitent obligatoirement un hydrogène lié à $\\mathrm{N}$, $\\mathrm{O}$ ou $\\mathrm{F}$.`,
    ],
    correctChoiceIndexes: [1, 2],
    explanation:
      `L'absence de dipôle permanent n'empêche pas une polarisation momentanée. Les dipôles instantanés et induits expliquent les attractions de Van der Waals entre molécules apolaires. Leur multiplication le long des chaînes carbonées contribue fortement à la cohésion membranaire.`,
    choiceExplanations: [
      `Une molécule apolaire peut connaître une répartition électronique momentanément dissymétrique.`,
      `Le dipôle instantané d'une molécule peut déformer le nuage électronique de sa voisine.`,
      `L'effet cumulé d'un grand nombre d'interactions faibles peut devenir macroscopiquement important.`,
      `Cette condition concerne la liaison hydrogène, et non les interactions de Van der Waals.`,
    ],
  },
  {
    order: 26,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Dans le modèle du cours, entre quelles paires de molécules des liaisons hydrogène intermoléculaires peuvent-elles s'établir ?`,
    choices: [
      `Entre deux molécules de méthanol $\\mathrm{CH_{3}OH}$.`,
      `Entre deux molécules d'ammoniac $\\mathrm{NH_{3}}$.`,
      `Entre deux molécules d'éthylène $\\mathrm{C_{2}H_{4}}$.`,
      `Entre deux molécules de dioxygène $\\mathrm{O_{2}}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Une liaison hydrogène exige un hydrogène lié à un atome fortement électronégatif, classiquement $\\mathrm{N}$, $\\mathrm{O}$ ou $\\mathrm{F}$, ainsi qu'un atome accepteur riche en électrons. Le méthanol et l'ammoniac satisfont ces conditions, contrairement à l'éthylène et au dioxygène.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{O-H}$ peut donner une liaison hydrogène et l'oxygène d'une autre molécule peut l'accepter.`,
      `Une liaison $\\mathrm{N-H}$ peut jouer le rôle de donneur et le doublet non liant d'un autre azote celui d'accepteur.`,
      `Les hydrogènes sont liés au carbone ; le modèle simplifié du cours n'y reconnaît pas de donneur de liaison hydrogène.`,
      `Le dioxygène ne possède aucun atome d'hydrogène et ne peut donc pas fournir de donneur.`,
    ],
  },
  {
    order: 27,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le schéma $\\mathrm{O_{A}-H_{A}\\cdots O_{B}-H_{B}}$ représente une interaction entre deux molécules contenant des groupes $\\mathrm{O-H}$.`,
    choices: [
      `Le trait $\\mathrm{O_{A}-H_{A}}$ représente une liaison covalente intramoléculaire.`,
      `Les pointillés $\\mathrm{H_{A}\\cdots O_{B}}$ représentent une liaison hydrogène intermoléculaire.`,
      `L'atome $\\mathrm{H_{A}}$ est l'accepteur de la liaison hydrogène grâce à un doublet non liant.`,
      `Une molécule d'eau ne peut participer qu'à une seule liaison hydrogène à la fois.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Dans une liaison hydrogène, l'hydrogène lié par covalence à un hétéroatome joue le rôle de donneur, tandis qu'un autre hétéroatome utilise un doublet non liant comme accepteur. Une molécule d'eau peut, dans une organisation favorable, donner deux liaisons hydrogène et en accepter deux.`,
    choiceExplanations: [
      `Le trait plein relie deux atomes appartenant à la même molécule : il s'agit d'une liaison covalente.`,
      `Les pointillés symbolisent l'attraction entre l'hydrogène partiellement positif et l'oxygène accepteur.`,
      `L'hydrogène ne possède pas de doublet non liant ; l'accepteur est ici l'oxygène $\\mathrm{O_{B}}$.`,
      `L'eau peut établir jusqu'à quatre liaisons hydrogène avec des voisines dans une organisation adaptée.`,
    ],
  },
  {
    order: 28,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Concernant l'intensité des liaisons et les changements d'état :`,
    choices: [
      `Dans les ordres de grandeur du cours, on peut retenir : liaison covalente $>$ liaison hydrogène $>$ interaction de Van der Waals.`,
      `La vaporisation de l'eau rompt nécessairement les liaisons covalentes $\\mathrm{O-H}$.`,
      `Une cohésion intermoléculaire plus forte tend à augmenter les températures de fusion et de vaporisation.`,
      `Une liaison hydrogène est plus faible qu'une interaction de Van der Waals prise isolément.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La liaison hydrogène est intermédiaire : plus forte qu'une interaction de Van der Waals isolée, mais beaucoup plus faible qu'une liaison covalente. Les changements d'état affaiblissent ou rompent les interactions entre molécules sans détruire normalement les molécules elles-mêmes.`,
    choiceExplanations: [
      `Cet ordre traduit correctement les ordres de grandeur simplifiés présentés dans le cours.`,
      `Lors de la vaporisation, les molécules d'eau restent des molécules $\\mathrm{H_{2}O}$ ; ce sont surtout les interactions entre elles qui sont vaincues.`,
      `Davantage d'énergie est nécessaire pour séparer des molécules fortement cohésives.`,
      `Le cours indique au contraire qu'une liaison hydrogène est environ dix fois plus forte qu'une interaction de Van der Waals.`,
    ],
  },
  {
    order: 29,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `À propos des rôles biologiques et des propriétés des liaisons hydrogène :`,
    choices: [
      `Elles contribuent à stabiliser certaines structures de protéines ainsi que l'appariement des bases dans la double hélice de l'ADN.`,
      `Elles sont irréversibles, ce qui interdit toute ouverture locale de la double hélice.`,
      `La cohésion de la membrane plasmique est expliquée exclusivement par les liaisons hydrogène entre ses chaînes hydrocarbonées.`,
      `Elles ne peuvent pas être rompues ou réorganisées sous l'action d'un solvant.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Les liaisons hydrogène sont suffisamment fortes et nombreuses pour stabiliser des structures biologiques, mais elles restent labiles. Cette labilité autorise leur rupture et leur réorganisation, notamment lors de l'ouverture de l'ADN. La cohésion des chaînes hydrocarbonées membranaires relève surtout des interactions de Van der Waals dans le modèle du cours.`,
    choiceExplanations: [
      `Elles participent notamment aux hélices, aux feuillets protéiques et à l'appariement complémentaire des bases.`,
      `Leur caractère labile permet précisément des ruptures transitoires lors des processus biologiques.`,
      `Les chaînes hydrocarbonées apolaires sont principalement associées par de nombreuses interactions de Van der Waals.`,
      `Un solvant peut perturber et réorganiser ces interactions non covalentes.`,
    ],
  },
  {
    order: 30,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `À propos de la polarité, de la miscibilité et des interactions intermoléculaires :`,
    choices: [
      `Le tétrachlorure de carbone $\\mathrm{CCl_{4}}$, apolaire, est miscible avec un solvant apolaire comme le benzène.`,
      `Le méthanol, polaire et capable de former des liaisons hydrogène, est miscible avec l'eau.`,
      `Le méthane $\\mathrm{CH_{4}}$ forme avec lui-même un réseau de liaisons hydrogène.`,
      `Tous les items précédents sont faux.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La règle qualitative « le semblable dissout le semblable » permet de prévoir de nombreuses miscibilités : les espèces apolaires se mélangent préférentiellement entre elles, tandis que des molécules polaires capables d'interactions favorables, comme l'eau et le méthanol, sont miscibles. Le méthane ne possède ni groupe $\\mathrm{N-H}$, $\\mathrm{O-H}$ ou $\\mathrm{F-H}$ ni accepteur adapté.`,
    choiceExplanations: [
      `Les deux espèces sont globalement apolaires et présentent des interactions de nature comparable.`,
      `L'eau et le méthanol peuvent établir entre eux des interactions dipôle-dipôle et des liaisons hydrogène.`,
      `Les liaisons $\\mathrm{C-H}$ du méthane ne répondent pas aux conditions du modèle simplifié de la liaison hydrogène.`,
      `Les deux premiers items sont exacts ; les items précédents ne sont donc pas tous faux.`,
    ],
  },
];
