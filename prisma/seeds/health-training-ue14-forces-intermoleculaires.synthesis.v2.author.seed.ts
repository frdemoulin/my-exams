import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 4 – Forces intermoléculaires
 * Section C – Synthèse
 */

export const UE14_CH4_SYNTHESIS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 55,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `On compare le méthane $\\ce{CH4}$, le chlorométhane $\\ce{CH3Cl}$ et le méthanol $\\ce{CH3OH}$. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le méthane, apolaire, est principalement associé à de faibles interactions de Van der Waals.`,
        correct: true,
        explanation: `Il ne possède ni dipôle permanent important ni groupe donneur de liaison hydrogène.`,
      },
      {
        content: `Le chlorométhane possède un dipôle permanent et peut donc présenter des interactions dipôle-dipôle.`,
        correct: true,
        explanation: `La liaison C-Cl n'est pas compensée par la géométrie de la molécule.`,
      },
      {
        content: `Le méthanol peut établir des liaisons hydrogène entre ses propres molécules.`,
        correct: true,
        explanation: `Le groupe O-H est donneur et l'oxygène est accepteur.`,
      },
      {
        content: `Le méthane établit des liaisons hydrogène plus fortes que le méthanol.`,
        correct: false,
        explanation: `Une liaison C-H ordinaire n'est pas considérée comme donneur classique dans le modèle du cours.`,
      },
    ],
    explanation:
      `Cette série illustre une progression qualitative : Van der Waals pour une espèce apolaire, dipôle-dipôle pour une espèce polaire, puis liaison hydrogène lorsque les groupes appropriés sont présents.`,
  },
  {
    order: 56,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Dans une organisation favorable du liquide, avec combien de molécules voisines une molécule d'eau peut-elle participer au maximum à des liaisons hydrogène selon le modèle du cours ?`,
    answer: { type: 'number', value: 4, tolerance: 0 },
    explanation:
      `Les deux hydrogènes de $\\ce{H2O}$ peuvent être donneurs et les deux doublets non liants de l'oxygène accepteurs : une molécule peut ainsi participer à quatre liaisons hydrogène avec quatre voisines.`,
  },
  {
    order: 57,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux paires capables d'établir entre elles une liaison hydrogène classique dans le modèle simplifié du cours.`,
    choices: [
      {
        content: `Méthanol $\\ce{CH3OH}$ et eau $\\ce{H2O}$.`,
        correct: true,
        explanation: `Les deux espèces possèdent un groupe donneur O-H et un oxygène accepteur.`,
      },
      {
        content: `Deux molécules d'ammoniac $\\ce{NH3}$.`,
        correct: true,
        explanation: `Une liaison N-H peut être donneuse et le doublet non liant d'un azote voisin accepteur.`,
      },
      {
        content: `Deux molécules de méthane $\\ce{CH4}$.`,
        correct: false,
        explanation: `Le méthane ne possède ni liaison N-H/O-H/F-H ni accepteur adapté.`,
      },
      {
        content: `Deux molécules d'éthène $\\ce{C2H4}$.`,
        correct: false,
        explanation: `L'éthène ne possède pas de donneur classique N-H/O-H/F-H.`,
      },
    ],
    explanation:
      `Une liaison hydrogène classique exige un hydrogène lié à N, O ou F et un atome accepteur électronégatif disposant d'une zone riche en électrons.`,
  },
  {
    order: 58,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Dans le cours, le cis-dichloroéthène est plus polaire que l'isomère trans et présente une température de vaporisation plus élevée. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Dans l'isomère cis, les moments dipolaires ne se compensent pas complètement.`,
        correct: true,
        explanation: `Les deux chlores sont disposés du même côté de la double liaison.`,
      },
      {
        content: `Dans l'isomère trans, la géométrie favorise davantage l'annulation des dipôles.`,
        correct: true,
        explanation: `Les contributions sont davantage opposées.`,
      },
      {
        content: `Des interactions dipôle-dipôle plus importantes dans le cis peuvent contribuer à sa température de vaporisation plus élevée.`,
        correct: true,
        explanation: `Une cohésion plus forte demande davantage d'énergie pour séparer les molécules.`,
      },
      {
        content: `La différence de température impose la rupture de la double liaison du cis lors de sa vaporisation.`,
        correct: false,
        explanation: `La vaporisation ne rompt pas normalement les liaisons covalentes internes.`,
      },
    ],
    explanation:
      `Cet exemple relie géométrie, polarité moléculaire, interactions entre dipôles permanents et propriété macroscopique.`,
  },
  {
    order: 59,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Combien de liaisons hydrogène relient classiquement une paire de bases guanine-cytosine dans l'ADN ?`,
    answer: { type: 'number', value: 3, tolerance: 0 },
    explanation:
      `Le cours retient trois liaisons hydrogène pour une paire G-C, contre deux pour une paire A-T.`,
  },
  {
    order: 60,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Combien de liaisons hydrogène relient classiquement une paire de bases adénine-thymine dans l'ADN ?`,
    answer: { type: 'number', value: 2, tolerance: 0 },
    explanation:
      `Une paire A-T comporte deux liaisons hydrogène dans le modèle classique présenté dans le cours.`,
  },
  {
    order: 61,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `On compare la membrane plasmique et la structure des protéines. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `De nombreuses interactions de Van der Waals entre chaînes hydrocarbonées voisines contribuent à la cohésion des régions hydrophobes d'une membrane.`,
        correct: true,
        explanation: `C'est l'exemple explicitement utilisé dans la fiche.`,
      },
      {
        content: `Des liaisons hydrogène entre groupes du squelette peptidique contribuent à stabiliser certaines structures secondaires des protéines.`,
        correct: true,
        explanation: `Les groupes C=O et N-H peuvent participer à ces interactions.`,
      },
      {
        content: `La cohésion de la membrane impose des liaisons covalentes entre toutes les chaînes lipidiques voisines.`,
        correct: false,
        explanation: `Les lipides restent des molécules distinctes.`,
      },
      {
        content: `La structure des protéines ne dépend d'aucune interaction non covalente.`,
        correct: false,
        explanation: `Plusieurs interactions non covalentes participent au repliement et à la stabilisation.`,
      },
    ],
    explanation:
      `Des interactions individuellement faibles peuvent jouer un rôle biologique majeur lorsqu'elles sont nombreuses et correctement organisées.`,
  },
  {
    order: 62,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Le saccharose est très soluble dans l'eau et le glycérol est un liquide visqueux riche en groupes hydroxyle. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Les nombreux groupes O-H du saccharose permettent de multiples liaisons hydrogène avec l'eau.`,
        correct: true,
        explanation: `Ces interactions favorisent son hydratation et sa solubilité.`,
      },
      {
        content: `Le réseau de liaisons hydrogène du glycérol peut contribuer à sa viscosité élevée.`,
        correct: true,
        explanation: `Une cohésion intermoléculaire importante freine le déplacement relatif des molécules.`,
      },
      {
        content: `Les groupes hydroxyle rendent ces molécules strictement apolaires.`,
        correct: false,
        explanation: `Les liaisons O-H sont fortement polarisées.`,
      },
      {
        content: `Une liaison hydrogène ne peut jamais influencer une propriété macroscopique.`,
        correct: false,
        explanation: `Solubilité, viscosité et températures de changement d'état peuvent être influencées.`,
      },
    ],
    explanation:
      `Les liaisons hydrogène permettent de relier la structure moléculaire à des propriétés comme la solubilité et la viscosité.`,
  },
  {
    order: 63,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `On prend arbitrairement l'intensité d'une interaction de Van der Waals égale à 1 unité. Le cours retient qu'une liaison hydrogène est environ 10 fois plus forte qu'une interaction de Van der Waals et environ 20 fois plus faible qu'une liaison covalente. Dans ce modèle d'ordre de grandeur, quelle intensité relative attribuer à une liaison covalente ?`,
    answer: { type: 'number', value: 200, tolerance: 0 },
    explanation:
      `Si Van der Waals = 1, alors liaison hydrogène ≈ 10. Une liaison covalente environ 20 fois plus forte vaut donc $10\\times20=200$ unités relatives.`,
  },
  {
    order: 64,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux propositions correctes sur les rôles donneur et accepteur de liaison hydrogène.`,
    choices: [
      {
        content: `Une molécule d'eau peut être à la fois donneur et accepteur.`,
        correct: true,
        explanation: `Elle possède des hydrogènes liés à O et deux doublets non liants sur O.`,
      },
      {
        content: `Une molécule de méthanol peut être à la fois donneur et accepteur.`,
        correct: true,
        explanation: `Son groupe O-H donne et son oxygène peut accepter.`,
      },
      {
        content: `L'acétone est un donneur classique de liaison hydrogène grâce à son groupe carbonyle.`,
        correct: false,
        explanation: `L'oxygène carbonylé peut accepter mais la molécule ne possède pas de H lié à O, N ou F.`,
      },
      {
        content: `Le méthane est un excellent donneur classique de liaison hydrogène.`,
        correct: false,
        explanation: `Ses liaisons C-H ne correspondent pas au modèle simplifié du cours.`,
      },
    ],
    explanation:
      `Donner une liaison hydrogène exige un H lié à un atome fortement électronégatif ; accepter exige une zone riche en électrons, souvent un doublet non liant.`,
  },
];

export const UE14_CH4_SYNTHESIS_MASTER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 21,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Pour une liaison diatomique, $\\mu=q\\,d$. On double la distance $d$ sans modifier la valeur de $q$. Sélectionnez exactement les deux propositions correctes.`,
    choices: [
      {
        content: `Le module du moment dipolaire est multiplié par 2.`,
        correct: true,
        explanation: `À q constant, le moment dipolaire est proportionnel à d.`,
      },
      {
        content: `Si le pôle positif et le pôle négatif restent les mêmes, le sens du vecteur moment dipolaire ne change pas.`,
        correct: true,
        explanation: `Modifier la distance ne permute pas les pôles.`,
      },
      {
        content: `Le module du moment dipolaire est divisé par 4.`,
        correct: false,
        explanation: `La loi en $1/d^2$ concerne la force électrostatique, pas la définition $\\mu=q\\,d$.`,
      },
      {
        content: `Le moment dipolaire devient nécessairement nul.`,
        correct: false,
        explanation: `Une séparation de charges non nulle à distance non nulle conserve un moment dipolaire.`,
      },
    ],
    explanation:
      `Il faut distinguer la définition du moment dipolaire, linéaire en d, de la dépendance en $1/d^2$ d'une force électrostatique.`,
  },
  {
    order: 22,
    difficulty: 'HARD',
    format: 'QRM',
    question: `On compare $\\ce{BCl3}$ et $\\ce{H2O}$. Les deux molécules comportent des liaisons polarisées. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `$\\ce{BCl3}$ est apolaire car ses trois moments de liaison s'annulent dans une géométrie trigonale plane symétrique.`,
        correct: true,
        explanation: `La somme vectorielle est nulle.`,
      },
      {
        content: `$\\ce{H2O}$ est polaire car sa géométrie coudée ne permet pas l'annulation des deux moments O-H.`,
        correct: true,
        explanation: `La résultante est orientée globalement vers l'oxygène.`,
      },
      {
        content: `La présence de liaisons polarisées suffit toujours à rendre la molécule entière polaire.`,
        correct: false,
        explanation: `$\\ce{BCl3}$ constitue précisément un contre-exemple.`,
      },
      {
        content: `La formule brute permet à elle seule de connaître la polarité sans information géométrique.`,
        correct: false,
        explanation: `La somme vectorielle exige la géométrie.`,
      },
    ],
    explanation:
      `Le chapitre insiste sur la distinction entre polarisation locale des liaisons et polarité globale de la molécule.`,
  },
  {
    order: 23,
    difficulty: 'HARD',
    format: 'QRM',
    question: `Le cis-dichloroéthène est plus polaire que l'isomère trans. Dans le cours, leurs températures de vaporisation sont respectivement d'environ $60\\,^{\\circ}\\mathrm{C}$ et $47\\,^{\\circ}\\mathrm{C}$. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `La géométrie cis laisse une résultante dipolaire plus importante.`,
        correct: true,
        explanation: `Les dipôles ne s'annulent pas complètement.`,
      },
      {
        content: `Le cis peut donc présenter des attractions dipôle-dipôle plus fortes.`,
        correct: true,
        explanation: `Une polarité globale plus marquée renforce ce type d'interaction.`,
      },
      {
        content: `Une cohésion plus forte peut être cohérente avec une température de vaporisation plus élevée.`,
        correct: true,
        explanation: `Séparer les molécules exige davantage d'énergie.`,
      },
      {
        content: `La différence de température prouve que les deux molécules n'ont pas la même formule brute.`,
        correct: false,
        explanation: `Ce sont précisément deux isomères de même formule brute.`,
      },
    ],
    explanation:
      `L'exemple cis/trans permet de relier directement stéréogéométrie, polarité et cohésion intermoléculaire.`,
  },
  {
    order: 24,
    difficulty: 'HARD',
    format: 'QRM',
    question: `Le butane et l'acétone ont des masses molaires voisines, mais l'acétone bout à une température bien plus élevée. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le carbonyle rend l'acétone polaire.`,
        correct: true,
        explanation: `La liaison C=O possède un dipôle important non compensé.`,
      },
      {
        content: `Des interactions dipôle-dipôle s'ajoutent aux interactions toujours présentes entre molécules d'acétone.`,
        correct: true,
        explanation: `Ces attractions renforcent la cohésion.`,
      },
      {
        content: `Le butane est apolaire et ne bénéficie pas d'un dipôle permanent comparable.`,
        correct: true,
        explanation: `Il est surtout soumis aux interactions de Van der Waals.`,
      },
      {
        content: `La masse molaire identique impose des températures de vaporisation identiques.`,
        correct: false,
        explanation: `La nature des interactions est un facteur majeur.`,
      },
    ],
    explanation:
      `À taille moléculaire comparable, la polarité explique ici une différence importante de température de vaporisation.`,
  },
  {
    order: 25,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Dans une bicouche lipidique, de nombreuses chaînes hydrocarbonées apolaires sont rapprochées. Sélectionnez exactement les deux propositions correctes.`,
    choices: [
      {
        content: `Des dipôles instantanés peuvent apparaître momentanément dans les chaînes.`,
        correct: true,
        explanation: `Les électrons ne restent pas distribués de façon parfaitement symétrique à chaque instant.`,
      },
      {
        content: `L'accumulation de nombreuses interactions de Van der Waals contribue à la cohésion de la région hydrophobe.`,
        correct: true,
        explanation: `Le nombre élevé d'interactions compense en partie leur faible intensité individuelle.`,
      },
      {
        content: `Chaque paire de chaînes forme nécessairement une liaison covalente.`,
        correct: false,
        explanation: `Les chaînes appartiennent à des molécules distinctes et interagissent non covalemment.`,
      },
      {
        content: `Une molécule apolaire est dépourvue de tout mouvement électronique.`,
        correct: false,
        explanation: `Des fluctuations électroniques sont précisément à l'origine des dipôles instantanés.`,
      },
    ],
    explanation:
      `L'exemple membranaire montre comment de très nombreuses interactions faibles peuvent stabiliser un assemblage biologique.`,
  },
  {
    order: 26,
    difficulty: 'HARD',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux paires pour lesquelles une liaison hydrogène classique est possible entre les partenaires indiqués.`,
    choices: [
      {
        content: `$\\ce{H2O}$ et $\\ce{CH3OH}$.`,
        correct: true,
        explanation: `Eau et méthanol possèdent donneur et accepteur.`,
      },
      {
        content: `$\\ce{NH3}$ et $\\ce{H2O}$.`,
        correct: true,
        explanation: `Des liaisons N-H/O-H peuvent donner et les doublets de N/O accepter.`,
      },
      {
        content: `$\\ce{CH4}$ et $\\ce{C2H6}$.`,
        correct: false,
        explanation: `Aucun partenaire ne possède un donneur N-H/O-H/F-H classique.`,
      },
      {
        content: `$\\ce{N2}$ et $\\ce{CCl4}$.`,
        correct: false,
        explanation: `Aucun hydrogène donneur n'est présent.`,
      },
    ],
    explanation:
      `La reconnaissance du donneur et de l'accepteur permet de prévoir rapidement si une liaison hydrogène classique peut s'établir.`,
  },
  {
    order: 27,
    difficulty: 'HARD',
    format: 'QRM',
    question: `À propos des liaisons hydrogène intermoléculaires et intramoléculaires, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Une liaison hydrogène intermoléculaire relie deux molécules ou entités distinctes.`,
        correct: true,
        explanation: `Elle contribue notamment à la cohésion d'un liquide.`,
      },
      {
        content: `Une liaison hydrogène intramoléculaire peut stabiliser une conformation particulière d'une même molécule.`,
        correct: true,
        explanation: `Elle peut réduire certaines libertés de rotation.`,
      },
      {
        content: `Une interaction intramoléculaire est nécessairement une liaison covalente.`,
        correct: false,
        explanation: `Une liaison hydrogène peut être intramoléculaire sans être covalente.`,
      },
      {
        content: `L'aldéhyde salicylique cité dans le cours illustre une stabilisation conformationnelle par liaison hydrogène intramoléculaire.`,
        correct: true,
        explanation: `Cette interaction rigidifie la structure selon l'exemple de la fiche.`,
      },
    ],
    explanation:
      `Le même mécanisme de liaison hydrogène peut agir entre molécules distinctes ou au sein d'une molécule lorsque donneur et accepteur sont suffisamment proches.`,
  },
  {
    order: 28,
    difficulty: 'HARD',
    format: 'QRM',
    question: `On retient l'ordre qualitatif liaison covalente > liaison hydrogène > interaction de Van der Waals. Quelles conséquences sont cohérentes ?`,
    choices: [
      {
        content: `Une liaison hydrogène peut se rompre et se reformer plus facilement qu'une liaison covalente.`,
        correct: true,
        explanation: `Elle est plus faible et donc plus labile.`,
      },
      {
        content: `Un grand nombre de liaisons hydrogène peut néanmoins stabiliser fortement un assemblage.`,
        correct: true,
        explanation: `Les effets s'additionnent.`,
      },
      {
        content: `La vaporisation de l'eau exige la rupture de toutes les liaisons covalentes O-H.`,
        correct: false,
        explanation: `Elle perturbe surtout les interactions entre molécules ; les molécules d'eau restent intactes.`,
      },
      {
        content: `Une interaction de Van der Waals isolée est plus forte qu'une liaison hydrogène.`,
        correct: false,
        explanation: `L'ordre qualitatif retenu est inverse.`,
      },
    ],
    explanation:
      `La hiérarchie des interactions explique qu'une liaison hydrogène soit à la fois stabilisante lorsqu'elle est multipliée et suffisamment réversible pour les systèmes biologiques.`,
  },
  {
    order: 29,
    difficulty: 'HARD',
    format: 'QRM',
    question: `Quelles propositions relient correctement les liaisons hydrogène à des structures biologiques ?`,
    choices: [
      {
        content: `Elles participent à la stabilisation de certaines structures secondaires des protéines.`,
        correct: true,
        explanation: `Les groupes du squelette peptidique peuvent établir des réseaux réguliers.`,
      },
      {
        content: `Elles participent à l'appariement complémentaire des bases dans la double hélice d'ADN.`,
        correct: true,
        explanation: `A-T et G-C sont associées par des liaisons hydrogène.`,
      },
      {
        content: `Leur caractère labile permet des ruptures transitoires compatibles avec l'ouverture locale de l'ADN.`,
        correct: true,
        explanation: `La stabilité n'est pas synonyme d'irréversibilité.`,
      },
      {
        content: `Elles transforment toutes les paires de bases en une seule molécule covalente.`,
        correct: false,
        explanation: `Les deux brins restent des chaînes distinctes associées non covalemment entre les bases.`,
      },
    ],
    explanation:
      `La réversibilité des liaisons hydrogène est particulièrement adaptée aux structures biologiques qui doivent être stables tout en restant dynamiques.`,
  },
  {
    order: 30,
    difficulty: 'HARD',
    format: 'QRM',
    question: `Concernant polarité, miscibilité et interactions, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le méthanol et l'eau sont miscibles et peuvent former entre eux des liaisons hydrogène.`,
        correct: true,
        explanation: `Les deux liquides sont polaires et possèdent des groupes O-H.`,
      },
      {
        content: `Le benzène et $\\ce{CCl4}$ sont tous deux apolaires et sont cohérents avec le repère de miscibilité entre espèces apolaires.`,
        correct: true,
        explanation: `Le cours les classe parmi les molécules apolaires.`,
      },
      {
        content: `Une molécule contenant une liaison polarisée est toujours soluble dans l'eau.`,
        correct: false,
        explanation: `La polarité globale et l'ensemble de la structure doivent être pris en compte.`,
      },
      {
        content: `Une molécule apolaire ne peut subir aucune attraction avec une autre molécule apolaire.`,
        correct: false,
        explanation: `Les interactions de Van der Waals assurent précisément ce type d'attraction.`,
      },
    ],
    explanation:
      `La miscibilité et la cohésion résultent de l'ensemble des interactions possibles, en lien avec la polarité globale des partenaires.`,
  },
  {
    order: 65,
    difficulty: 'HARD',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: `Parmi les dix espèces suivantes, sélectionnez exactement les cinq capables d'agir comme donneur classique de liaison hydrogène dans le modèle du cours.`,
    choices: [
      { content: `$\\ce{H2O}$`, correct: true, explanation: `Ses liaisons O-H peuvent donner.` },
      { content: `$\\ce{NH3}$`, correct: true, explanation: `Ses liaisons N-H peuvent donner.` },
      { content: `$\\ce{HF}$`, correct: true, explanation: `Sa liaison H-F peut donner.` },
      { content: `$\\ce{CH3OH}$`, correct: true, explanation: `Son groupe O-H peut donner.` },
      { content: `$\\ce{CH3CH2OH}$`, correct: true, explanation: `Son groupe O-H peut donner.` },
      { content: `$\\ce{CH3COCH3}$`, correct: false, explanation: `L'acétone peut accepter par O mais ne possède pas de H lié à O, N ou F.` },
      { content: `$\\ce{CH3OCH3}$`, correct: false, explanation: `L'éther peut accepter par O mais ne possède pas de O-H.` },
      { content: `$\\ce{CH4}$`, correct: false, explanation: `Une liaison C-H ordinaire n'est pas un donneur classique ici.` },
      { content: `$\\ce{C6H6}$`, correct: false, explanation: `Le benzène ne possède pas de donneur N-H/O-H/F-H.` },
      { content: `$\\ce{CO2}$`, correct: false, explanation: `La molécule ne contient aucun hydrogène.` },
    ],
    explanation:
      `Le donneur classique porte un hydrogène directement lié à un atome fortement électronégatif N, O ou F.`,
  },
  {
    order: 66,
    difficulty: 'HARD',
    format: 'QRM',
    question: `À propos des forces intermoléculaires, quelles propositions de synthèse sont exactes ?`,
    choices: [
      {
        content: `À charges identiques, rapprocher deux pôles de signes opposés renforce l'attraction électrostatique.`,
        correct: true,
        explanation: `Dans le modèle du cours, la force augmente lorsque la distance diminue.`,
      },
      {
        content: `Le caractère labile d'une liaison hydrogène permet sa rupture et sa reformation.`,
        correct: true,
        explanation: `Cette réversibilité est importante dans les systèmes moléculaires dynamiques.`,
      },
      {
        content: `Des interactions non covalentes nombreuses peuvent influencer des propriétés macroscopiques et stabiliser des structures biologiques.`,
        correct: true,
        explanation: `Cohésion, viscosité, températures de changement d'état et structures biomoléculaires en sont des exemples.`,
      },
      {
        content: `Faire bouillir de l'eau nécessite de rompre les liaisons covalentes O-H des molécules.`,
        correct: false,
        explanation: `L'ébullition sépare les molécules sans les dissocier chimiquement dans les conditions usuelles.`,
      },
    ],
    explanation:
      `Le chapitre relie des forces électrostatiques microscopiques, faibles et réversibles, à des effets collectifs majeurs dans la matière et le vivant.`,
  },
];
