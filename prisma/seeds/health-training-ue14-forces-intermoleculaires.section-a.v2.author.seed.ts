import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 4 – Forces intermoléculaires
 * Section A – Polarité des molécules
 */

export const UE14_CH4_POLARITE_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Concernant le vecteur moment dipolaire d'une liaison polarisée, quelle proposition est correcte dans la convention utilisée dans le cours ?`,
    choices: [
      {
        content: `Il est orienté du pôle partiellement positif vers le pôle partiellement négatif.`,
        correct: true,
        explanation: `C'est la convention chimique retenue dans la fiche.`,
      },
      {
        content: `Il est orienté du pôle partiellement négatif vers le pôle partiellement positif.`,
        correct: false,
        explanation: `Cette orientation est opposée à la convention utilisée dans le cours.`,
      },
      {
        content: `Il est toujours nul dès que la molécule est électriquement neutre.`,
        correct: false,
        explanation: `Une molécule neutre peut présenter une séparation dissymétrique de charges partielles.`,
      },
      {
        content: `Il est dirigé vers l'atome le moins électronégatif.`,
        correct: false,
        explanation: `Le pôle négatif se situe du côté de l'atome le plus électronégatif.`,
      },
    ],
    explanation:
      `Une liaison polarisée présente deux charges partielles opposées. Dans la convention du cours, le vecteur moment dipolaire est orienté de $\\delta^{+}$ vers $\\delta^{-}$.`,
  },
  {
    order: 2,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Pour une molécule diatomique, on utilise $\\mu=q\\,d$. Si $q=2{,}0\\times10^{-20}\\,\\mathrm{C}$ et $d=1{,}5\\times10^{-10}\\,\\mathrm{m}$, quelle est la valeur de $\\mu$ en $\\mathrm{C\\cdot m}$ ?`,
    answer: { type: 'number', value: 3.0e-30, tolerance: 0.05e-30 },
    explanation:
      `$\\mu=q\\,d=(2{,}0\\times10^{-20})(1{,}5\\times10^{-10})=3{,}0\\times10^{-30}\\,\\mathrm{C\\cdot m}$.`,
  },
  {
    order: 3,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant le moment dipolaire d'une molécule polyatomique, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Il résulte de la somme vectorielle des moments dipolaires de liaison.`,
        correct: true,
        explanation: `Les directions et les sens des vecteurs doivent être pris en compte.`,
      },
      {
        content: `Il peut être nul alors que plusieurs liaisons de la molécule sont polarisées.`,
        correct: true,
        explanation: `Une géométrie suffisamment symétrique peut conduire à une compensation des dipôles.`,
      },
      {
        content: `Il correspond toujours à la somme arithmétique des modules des dipôles de liaison.`,
        correct: false,
        explanation: `Une addition scalaire ignorerait la géométrie et la direction des vecteurs.`,
      },
      {
        content: `Il dépend uniquement de la formule brute de la molécule.`,
        correct: false,
        explanation: `La géométrie moléculaire est déterminante.`,
      },
    ],
    explanation:
      `La polarité globale dépend à la fois de la polarisation des liaisons et de leur orientation dans l'espace.`,
  },
  {
    order: 4,
    difficulty: 'EASY',
    format: 'QRU',
    question: `La molécule d'eau $\\ce{H2O}$ possède une géométrie coudée. Pourquoi son moment dipolaire global est-il non nul ?`,
    choices: [
      {
        content: `Les deux moments dipolaires des liaisons $\\ce{O-H}$ ne sont pas opposés et leur somme est dirigée globalement vers l'oxygène.`,
        correct: true,
        explanation: `La géométrie coudée empêche l'annulation des deux vecteurs.`,
      },
      {
        content: `La molécule possède une charge électrique entière négative.`,
        correct: false,
        explanation: `L'eau est globalement neutre.`,
      },
      {
        content: `Les deux liaisons $\\ce{O-H}$ sont apolaires.`,
        correct: false,
        explanation: `L'oxygène est plus électronégatif que l'hydrogène.`,
      },
      {
        content: `Les deux moments dipolaires sont exactement opposés.`,
        correct: false,
        explanation: `Ils ne le sont pas dans une géométrie coudée.`,
      },
    ],
    explanation:
      `La neutralité électrique n'empêche pas une molécule d'être polaire. Dans l'eau, la géométrie coudée laisse une résultante dipolaire orientée vers l'oxygène.`,
  },
  {
    order: 5,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux propositions correctes concernant $\\ce{BCl3}$.`,
    choices: [
      {
        content: `Les liaisons $\\ce{B-Cl}$ sont polarisées.`,
        correct: true,
        explanation: `Le chlore est plus électronégatif que le bore.`,
      },
      {
        content: `La somme vectorielle des trois moments dipolaires est nulle dans la géométrie trigonale plane symétrique.`,
        correct: true,
        explanation: `Trois vecteurs identiques séparés d'environ $120^\\circ$ se compensent.`,
      },
      {
        content: `La molécule est nécessairement polaire parce qu'elle contient trois liaisons polarisées.`,
        correct: false,
        explanation: `La géométrie permet leur annulation.`,
      },
      {
        content: `Le moment dipolaire global est orienté vers un seul atome de chlore.`,
        correct: false,
        explanation: `Aucun chlore n'est privilégié dans cette géométrie symétrique.`,
      },
    ],
    explanation:
      `$\\ce{BCl3}$ illustre une molécule apolaire malgré la présence de plusieurs liaisons polarisées.`,
  },
  {
    order: 6,
    difficulty: 'EASY',
    format: 'QRM',
    question: `À propos de $\\ce{CH4}$ et $\\ce{CCl4}$, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Les deux molécules présentent une géométrie tétraédrique symétrique.`,
        correct: true,
        explanation: `Les quatre substituants identiques sont répartis de façon tétraédrique.`,
      },
      {
        content: `Dans $\\ce{CCl4}$, les quatre moments dipolaires $\\ce{C-Cl}$ s'annulent.`,
        correct: true,
        explanation: `La symétrie tétraédrique conduit à une résultante nulle.`,
      },
      {
        content: `$\\ce{CCl4}$ est polaire parce que chacune de ses liaisons $\\ce{C-Cl}$ est polarisée.`,
        correct: false,
        explanation: `Il faut prendre en compte la somme vectorielle des quatre dipôles.`,
      },
      {
        content: `$\\ce{CH4}$ et $\\ce{CCl4}$ sont classées comme molécules polaires dans la fiche.`,
        correct: false,
        explanation: `Elles sont classées parmi les molécules apolaires.`,
      },
    ],
    explanation:
      `Une géométrie très symétrique peut annuler des moments de liaison, même lorsque chaque liaison prise séparément est polarisée.`,
  },
  {
    order: 7,
    difficulty: 'EASY',
    format: 'QRM',
    question: `On compare les isomères cis et trans du dichloroéthène. Quelles propositions sont exactes dans le modèle du cours ?`,
    choices: [
      {
        content: `Dans l'isomère cis, les deux atomes de chlore sont situés du même côté de la double liaison.`,
        correct: true,
        explanation: `C'est la définition géométrique de l'isomère cis considéré.`,
      },
      {
        content: `Dans l'isomère cis, les contributions des liaisons polarisées peuvent s'additionner et donner une résultante non nulle.`,
        correct: true,
        explanation: `La disposition des chlores ne permet pas une compensation complète.`,
      },
      {
        content: `Dans l'isomère trans, la disposition opposée des chlores favorise l'annulation des dipôles.`,
        correct: true,
        explanation: `La symétrie plus élevée favorise leur compensation.`,
      },
      {
        content: `Les deux isomères ont nécessairement le même moment dipolaire puisqu'ils ont la même formule brute.`,
        correct: false,
        explanation: `La géométrie spatiale influence directement la somme vectorielle.`,
      },
    ],
    explanation:
      `L'isomérie géométrique montre que la formule brute ne suffit pas à prévoir la polarité : l'orientation des liaisons est déterminante.`,
  },
  {
    order: 8,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux associations correctes entre molécule et polarité.`,
    choices: [
      {
        content: `Le benzène $\\ce{C6H6}$ est globalement apolaire.`,
        correct: true,
        explanation: `Sa structure symétrique conduit à une résultante dipolaire nulle.`,
      },
      {
        content: `Le méthanol $\\ce{CH3OH}$ est polaire, avec une résultante orientée globalement vers l'oxygène.`,
        correct: true,
        explanation: `Le groupe oxygéné introduit une forte dissymétrie électronique.`,
      },
      {
        content: `La propanone $\\ce{CH3COCH3}$ est apolaire.`,
        correct: false,
        explanation: `Le groupe carbonyle confère à la propanone un moment dipolaire global.`,
      },
      {
        content: `L'eau est moins polaire que le méthane.`,
        correct: false,
        explanation: `Le méthane est apolaire alors que l'eau est très polaire.`,
      },
    ],
    explanation:
      `La polarité globale résulte de la structure complète de la molécule, et non de la seule présence de certains atomes.`,
  },
  {
    order: 9,
    difficulty: 'EASY',
    format: 'QRM',
    question: `Concernant la miscibilité et la polarité, quelles propositions constituent de bons repères qualitatifs dans le cadre du cours ?`,
    choices: [
      {
        content: `Les substances polaires sont généralement miscibles avec des solvants polaires.`,
        correct: true,
        explanation: `Des interactions favorables peuvent s'établir entre espèces de polarités comparables.`,
      },
      {
        content: `Les substances apolaires sont généralement miscibles avec des solvants apolaires.`,
        correct: true,
        explanation: `C'est le repère qualitatif « le semblable dissout le semblable ».`,
      },
      {
        content: `Toute molécule apolaire est parfaitement miscible avec l'eau.`,
        correct: false,
        explanation: `L'eau est très polaire et les substances apolaires y sont généralement peu solubles.`,
      },
      {
        content: `La polarité n'a aucune influence sur la miscibilité.`,
        correct: false,
        explanation: `Elle constitue au contraire un facteur important.`,
      },
    ],
    explanation:
      `La règle « le semblable dissout le semblable » est un repère qualitatif utile, même si la miscibilité réelle dépend aussi d'autres paramètres.`,
  },
  {
    order: 10,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Pour déterminer qualitativement si une molécule est polaire, sélectionnez exactement les deux étapes indispensables.`,
    choices: [
      {
        content: `Repérer les liaisons polarisées et le sens de leurs moments dipolaires.`,
        correct: true,
        explanation: `Il faut identifier les dipôles élémentaires.`,
      },
      {
        content: `Prendre en compte la géométrie afin d'effectuer leur somme vectorielle.`,
        correct: true,
        explanation: `La géométrie détermine si les vecteurs s'additionnent ou se compensent.`,
      },
      {
        content: `Conclure qu'une liaison polarisée rend toujours toute la molécule polaire.`,
        correct: false,
        explanation: `$\\ce{BCl3}$ ou $\\ce{CCl4}$ montrent que c'est faux.`,
      },
      {
        content: `Utiliser uniquement la masse molaire de la molécule.`,
        correct: false,
        explanation: `La masse molaire ne permet pas de déterminer la somme vectorielle des dipôles.`,
      },
    ],
    explanation:
      `La démarche repose sur deux informations : la polarisation des liaisons puis leur disposition géométrique.`,
  },
];

export const UE14_CH4_POLARITE_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 31,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Pour une liaison polarisée, $q=1{,}6\\times10^{-19}\\,\\mathrm{C}$ et $d=120\\,\\mathrm{pm}$. Quelle est la valeur de $\\mu=q\\,d$ en $\\mathrm{C\\cdot m}$ ?`,
    answer: { type: 'number', value: 1.92e-29, tolerance: 0.05e-29 },
    explanation:
      `$120\\,\\mathrm{pm}=1{,}20\\times10^{-10}\\,\\mathrm{m}$, donc $\\mu=(1{,}6\\times10^{-19})(1{,}20\\times10^{-10})=1{,}92\\times10^{-29}\\,\\mathrm{C\\cdot m}$.`,
  },
  {
    order: 32,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `On compare $\\ce{CO2}$, linéaire, et $\\ce{SO2}$, coudée. Les liaisons avec l'oxygène sont polarisées. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Dans $\\ce{CO2}$, les deux moments dipolaires de liaison sont opposés et s'annulent.`,
        correct: true,
        explanation: `La géométrie linéaire et la symétrie conduisent à une résultante nulle.`,
      },
      {
        content: `Dans $\\ce{SO2}$, la géométrie coudée conduit à une résultante dipolaire non nulle.`,
        correct: true,
        explanation: `Les deux vecteurs ne sont pas opposés.`,
      },
      {
        content: `$\\ce{CO2}$ est nécessairement polaire car chaque liaison $\\ce{C=O}$ est polarisée.`,
        correct: false,
        explanation: `Les deux dipôles s'annulent.`,
      },
      {
        content: `$\\ce{SO2}$ est apolaire parce qu'elle possède deux liaisons identiques.`,
        correct: false,
        explanation: `L'identité des liaisons ne suffit pas ; leur orientation est déterminante.`,
      },
    ],
    explanation:
      `La comparaison de $\\ce{CO2}$ et $\\ce{SO2}$ illustre directement l'effet de la géométrie sur la polarité globale.`,
  },
  {
    order: 33,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `À propos de l'ammoniac $\\ce{NH3}$, de géométrie pyramidale, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Les liaisons $\\ce{N-H}$ sont polarisées vers l'azote.`,
        correct: true,
        explanation: `L'azote est plus électronégatif que l'hydrogène.`,
      },
      {
        content: `La molécule possède un moment dipolaire global non nul.`,
        correct: true,
        explanation: `La géométrie pyramidale empêche une annulation complète.`,
      },
      {
        content: `Les trois moments de liaison s'annulent comme dans une géométrie trigonale plane parfaite.`,
        correct: false,
        explanation: `$\\ce{NH3}$ n'est pas trigonal plan.`,
      },
      {
        content: `La neutralité électrique de $\\ce{NH3}$ impose son caractère apolaire.`,
        correct: false,
        explanation: `Une molécule neutre peut être polaire.`,
      },
    ],
    explanation:
      `La géométrie pyramidale de l'ammoniac laisse une résultante dipolaire non nulle.`,
  },
  {
    order: 34,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `On compare les molécules tétraédriques $\\ce{CCl4}$ et $\\ce{CH2Cl2}$. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Dans $\\ce{CCl4}$, les quatre moments $\\ce{C-Cl}$ s'annulent par symétrie.`,
        correct: true,
        explanation: `Les quatre substituants sont identiques.`,
      },
      {
        content: `$\\ce{CH2Cl2}$ possède un moment dipolaire global non nul.`,
        correct: true,
        explanation: `La présence de deux types de substituants rompt la symétrie.`,
      },
      {
        content: `$\\ce{CH2Cl2}$ possède exactement la même symétrie que $\\ce{CCl4}$.`,
        correct: false,
        explanation: `Deux hydrogènes remplacent deux chlores et rompent la symétrie.`,
      },
      {
        content: `Toute molécule tétraédrique est apolaire.`,
        correct: false,
        explanation: `La nature des substituants doit être prise en compte.`,
      },
    ],
    explanation:
      `La géométrie tétraédrique n'implique l'apolarité que si la répartition des substituants permet une compensation des moments de liaison.`,
  },
  {
    order: 35,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Dans le chlorométhane $\\ce{CH3Cl}$, on néglige la faible polarité des liaisons $\\ce{C-H}$. Quelle proposition est correcte ?`,
    choices: [
      {
        content: `La molécule possède un moment dipolaire global orienté vers le chlore.`,
        correct: true,
        explanation: `Le chlore est le pôle $\\delta^{-}$ de la liaison $\\ce{C-Cl}$.`,
      },
      {
        content: `Le chlore porte une charge partielle positive.`,
        correct: false,
        explanation: `Il porte une charge partielle négative.`,
      },
      {
        content: `Les trois hydrogènes annulent exactement le dipôle $\\ce{C-Cl}$.`,
        correct: false,
        explanation: `La molécule n'est pas suffisamment symétrique pour cela.`,
      },
      {
        content: `La molécule est apolaire parce qu'elle est globalement neutre.`,
        correct: false,
        explanation: `Neutralité et polarité ne sont pas contradictoires.`,
      },
    ],
    explanation:
      `Le chlorométhane est une molécule polaire ; sa résultante est orientée globalement vers le chlore.`,
  },
  {
    order: 36,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Le méthanal $\\ce{H2C=O}$ comporte une liaison carbonyle fortement polarisée. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le moment de la liaison $\\ce{C=O}$ est orienté vers l'oxygène.`,
        correct: true,
        explanation: `L'oxygène est plus électronégatif.`,
      },
      {
        content: `Le méthanal possède un moment dipolaire global non nul.`,
        correct: true,
        explanation: `Les liaisons $\\ce{C-H}$ ne compensent pas le dipôle du carbonyle.`,
      },
      {
        content: `Le carbone du carbonyle constitue le pôle négatif principal.`,
        correct: false,
        explanation: `Il est relativement appauvri en électrons et porte plutôt $\\delta^{+}$.`,
      },
      {
        content: `La présence de deux hydrogènes rend obligatoirement la molécule apolaire.`,
        correct: false,
        explanation: `La symétrie n'annule pas la forte contribution du carbonyle.`,
      },
    ],
    explanation:
      `Le groupe carbonyle constitue un motif fortement polarisé qui confère au méthanal un moment dipolaire global.`,
  },
  {
    order: 37,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `On compare $\\ce{BF3}$, trigonale plane, et $\\ce{NH3}$, pyramidale. Sélectionnez exactement les deux propositions correctes.`,
    choices: [
      {
        content: `$\\ce{BF3}$ est apolaire malgré des liaisons $\\ce{B-F}$ polarisées.`,
        correct: true,
        explanation: `Les trois moments s'annulent dans la géométrie trigonale plane symétrique.`,
      },
      {
        content: `$\\ce{NH3}$ est polaire.`,
        correct: true,
        explanation: `Sa géométrie pyramidale laisse une résultante non nulle.`,
      },
      {
        content: `Les deux molécules sont apolaires car elles possèdent trois liaisons autour du centre.`,
        correct: false,
        explanation: `Le nombre de liaisons ne suffit pas.`,
      },
      {
        content: `La polarité dépend uniquement du nombre d'atomes dans la molécule.`,
        correct: false,
        explanation: `La nature et la géométrie des liaisons sont essentielles.`,
      },
    ],
    explanation:
      `Deux molécules comportant trois liaisons autour de l'atome central peuvent avoir des polarités opposées si leur géométrie diffère.`,
  },
  {
    order: 38,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `La molécule $\\ce{PCl5}$ est bipyramidale trigonale avec cinq liaisons $\\ce{P-Cl}$ identiques. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Chaque liaison est polarisée vers le chlore.`,
        correct: true,
        explanation: `Le chlore est plus électronégatif que le phosphore.`,
      },
      {
        content: `Dans cette géométrie symétrique, la somme vectorielle des cinq moments peut être nulle.`,
        correct: true,
        explanation: `Les trois dipôles équatoriaux se compensent et les deux axiaux sont opposés.`,
      },
      {
        content: `Cinq liaisons polarisées imposent nécessairement un moment dipolaire moléculaire non nul.`,
        correct: false,
        explanation: `La géométrie peut permettre une compensation complète.`,
      },
      {
        content: `La molécule est polaire uniquement parce que le chlore est électronégatif.`,
        correct: false,
        explanation: `L'électronégativité ne suffit pas sans l'analyse géométrique.`,
      },
    ],
    explanation:
      `La symétrie de $\\ce{PCl5}$ permet une résultante dipolaire nulle dans le modèle idéal.`,
  },
  {
    order: 39,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `On cherche à prévoir qualitativement la miscibilité. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Le méthanol et l'eau sont miscibles car ce sont deux liquides polaires capables d'interactions favorables.`,
        correct: true,
        explanation: `Ils peuvent notamment établir des liaisons hydrogène.`,
      },
      {
        content: `Le benzène et $\\ce{CCl4}$, tous deux apolaires, sont compatibles avec le repère « le semblable dissout le semblable ».`,
        correct: true,
        explanation: `Leur caractère apolaire favorise leur miscibilité mutuelle.`,
      },
      {
        content: `L'eau et un hydrocarbure apolaire sont toujours parfaitement miscibles.`,
        correct: false,
        explanation: `Ils sont généralement peu miscibles.`,
      },
      {
        content: `La formule brute suffit à prévoir la miscibilité sans connaître la structure.`,
        correct: false,
        explanation: `La polarité dépend notamment de la géométrie.`,
      },
    ],
    explanation:
      `La miscibilité se relie qualitativement à la nature des interactions possibles entre les espèces.`,
  },
  {
    order: 40,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Dans l'exemple du cours, le cis-dichloroéthène est plus polaire que l'isomère trans et sa température de vaporisation est d'environ $60\\,^{\\circ}\\mathrm{C}$ contre $47\\,^{\\circ}\\mathrm{C}$ pour le trans. Quelles propositions sont exactes ?`,
    choices: [
      {
        content: `La polarité plus forte du cis permet des interactions dipôle-dipôle plus importantes.`,
        correct: true,
        explanation: `Une résultante dipolaire plus marquée renforce ces attractions.`,
      },
      {
        content: `Une cohésion intermoléculaire plus importante peut contribuer à une température de vaporisation plus élevée.`,
        correct: true,
        explanation: `Il faut fournir davantage d'énergie pour séparer les molécules.`,
      },
      {
        content: `Le trans doit être plus polaire puisque sa température de vaporisation est plus basse.`,
        correct: false,
        explanation: `Le cours présente au contraire le cis comme plus polaire.`,
      },
      {
        content: `La vaporisation exige de rompre les doubles liaisons $\\ce{C=C}$.`,
        correct: false,
        explanation: `Un changement d'état ne rompt pas normalement les liaisons covalentes internes.`,
      },
    ],
    explanation:
      `Cet exemple relie directement géométrie, moment dipolaire, interactions dipôle-dipôle et propriété macroscopique.`,
  },
  {
    order: 51,
    difficulty: 'MEDIUM',
    format: 'QRPL',
    requiredSelectionCount: 5,
    question: `Parmi les dix espèces suivantes, sélectionnez exactement les cinq molécules possédant un moment dipolaire global non nul (molécules polaires ou peu polaires dans la terminologie de la fiche).`,
    choices: [
      { content: `$\\ce{H2O}$`, correct: true, explanation: `Géométrie coudée et liaisons O-H polarisées.` },
      { content: `$\\ce{NH3}$`, correct: true, explanation: `Géométrie pyramidale et résultante non nulle.` },
      { content: `$\\ce{CH3OH}$`, correct: true, explanation: `Le groupe hydroxyle rend la molécule polaire.` },
      { content: `$\\ce{CH3Cl}$`, correct: true, explanation: `Le dipôle C-Cl n'est pas compensé.` },
      { content: `$\\ce{CH3COCH3}$`, correct: true, explanation: `Le carbonyle confère un moment dipolaire global.` },
      { content: `$\\ce{CH4}$`, correct: false, explanation: `Molécule tétraédrique apolaire.` },
      { content: `$\\ce{CO2}$`, correct: false, explanation: `Les deux dipôles C=O s'annulent dans la géométrie linéaire.` },
      { content: `$\\ce{BCl3}$`, correct: false, explanation: `Les trois dipôles s'annulent dans la géométrie trigonale plane.` },
      { content: `$\\ce{CCl4}$`, correct: false, explanation: `Les quatre dipôles se compensent par symétrie.` },
      { content: `$\\ce{C6H6}$`, correct: false, explanation: `Le benzène est classé apolaire dans la fiche.` },
    ],
    explanation:
      `Pour classer une molécule, il faut associer polarisation des liaisons et géométrie globale.`,
  },
  {
    order: 52,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux molécules dans lesquelles des liaisons polarisées s'annulent globalement par symétrie.`,
    choices: [
      {
        content: `$\\ce{CO2}$`,
        correct: true,
        explanation: `Les deux dipôles C=O sont opposés dans la géométrie linéaire.`,
      },
      {
        content: `$\\ce{BCl3}$`,
        correct: true,
        explanation: `Les trois dipôles B-Cl se compensent dans la géométrie trigonale plane.`,
      },
      {
        content: `$\\ce{NH3}$`,
        correct: false,
        explanation: `La géométrie pyramidale laisse une résultante.`,
      },
      {
        content: `$\\ce{H2O}$`,
        correct: false,
        explanation: `La géométrie coudée laisse une résultante.`,
      },
    ],
    explanation:
      `La symétrie de $\\ce{CO2}$ et $\\ce{BCl3}$ permet une compensation complète de moments dipolaires de liaison pourtant non nuls.`,
  },
];
