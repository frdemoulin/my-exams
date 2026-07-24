import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant le moment dipolaire d'une liaison :`,
    choices: [
      `Il apparaît lorsque le doublet liant est davantage attiré par l'un des deux atomes.`,
      `Le pôle négatif est porté par l'atome le moins électronégatif.`,
      `Le vecteur moment dipolaire est orienté, par convention en chimie, du pôle positif vers le pôle négatif.`,
      `Une liaison entre deux atomes identiques possède nécessairement un moment dipolaire permanent non nul.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Une différence d'électronégativité déplace le doublet liant vers l'atome le plus électronégatif. Celui-ci porte une charge partielle négative $\\delta^{-}$, tandis que l'autre atome porte une charge partielle positive $\\delta^{+}$.`,
    choiceExplanations: [
      `Le déplacement du doublet liant crée une séparation partielle des charges et donc un dipôle de liaison.`,
      `Le pôle négatif est porté par l'atome le plus électronégatif, qui attire davantage le doublet liant.`,
      `Dans la convention utilisée en chimie, le vecteur est dirigé de $\\delta^{+}$ vers $\\delta^{-}$.`,
      `Entre deux atomes identiques, la différence d'électronégativité est nulle : la liaison n'est pas polarisée.`,
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question: `Pour une molécule diatomique, le module du moment dipolaire peut s'écrire $\\mu = q \\times d$. Dans cette relation :`,
    choices: [
      `$q$ représente la charge séparée et $d$ la distance entre les deux charges.`,
      `$q$ représente la masse de la molécule et $d$ son diamètre.`,
      `$q$ représente l'électronégativité de l'atome central et $d$ le nombre de liaisons.`,
      `$d$ représente l'énergie nécessaire pour rompre la liaison.`,
    ],
    correctChoiceIndexes: [0],
    explanation:
      `Le moment dipolaire dépend de l'importance de la séparation de charges et de la distance qui sépare ces charges. Son unité usuelle en chimie moléculaire est le debye, noté $\\mathrm{D}$.`,
    choiceExplanations: [
      `La relation $\\mu=q\\times d$ associe une charge séparée à une distance de séparation.`,
      `La masse moléculaire n'intervient pas directement dans cette définition.`,
      `L'électronégativité explique l'apparition de la polarisation, mais elle ne correspond pas à $q$ dans cette formule.`,
      `La distance $d$ est une longueur, et non une énergie de liaison.`,
    ],
  },
  {
    order: 3,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant le moment dipolaire d'une molécule polyatomique :`,
    choices: [
      `Il correspond à la somme arithmétique des valeurs absolues de tous les moments dipolaires de liaison.`,
      `Il correspond à la somme vectorielle des moments dipolaires de liaison.`,
      `Il peut être nul alors que la molécule contient plusieurs liaisons polarisées.`,
      `Il dépend uniquement de la formule brute et jamais de la géométrie moléculaire.`,
    ],
    correctChoiceIndexes: [1, 2],
    explanation:
      `La polarité globale dépend à la fois de la polarisation des liaisons et de leur orientation dans l'espace. Des moments dipolaires de liaison peuvent donc se renforcer ou s'annuler.`,
    choiceExplanations: [
      `Les directions doivent être prises en compte : une simple addition des modules est insuffisante.`,
      `Les moments dipolaires sont des vecteurs ; leur somme est donc vectorielle.`,
      `Dans une molécule symétrique, plusieurs dipôles de liaison peuvent s'annuler exactement.`,
      `Deux molécules de même formule brute mais de géométries différentes peuvent présenter des polarités différentes.`,
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La molécule d'eau $\\mathrm{H_{2}O}$ possède une géométrie coudée. Concernant sa polarité :`,
    choices: [
      `Les liaisons $\\mathrm{O-H}$ sont polarisées vers l'oxygène.`,
      `Les deux moments dipolaires de liaison s'annulent exactement.`,
      `Le moment dipolaire global est orienté vers l'atome d'oxygène.`,
      `La molécule d'eau est apolaire car elle est électriquement neutre.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La neutralité électrique d'une molécule n'empêche pas une répartition dissymétrique des charges. Dans l'eau, la géométrie coudée empêche l'annulation des deux dipôles $\\mathrm{O-H}$ : la molécule est polaire.`,
    choiceExplanations: [
      `L'oxygène est plus électronégatif que l'hydrogène et porte une charge partielle négative.`,
      `Les deux liaisons ne sont pas opposées à $180^{\\circ}$ ; leurs moments dipolaires ne s'annulent pas.`,
      `La résultante des deux moments dipolaires est dirigée vers le côté de l'oxygène.`,
      `Une molécule peut être globalement neutre tout en possédant des pôles partiels positif et négatif.`,
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La molécule $\\mathrm{BCl_{3}}$ est trigonale plane et possède trois liaisons $\\mathrm{B-Cl}$ identiques. On peut affirmer que :`,
    choices: [
      `Chaque liaison $\\mathrm{B-Cl}$ est polarisée.`,
      `Les trois moments dipolaires de liaison s'annulent par symétrie.`,
      `La molécule possède nécessairement un moment dipolaire global dirigé vers l'un des atomes de chlore.`,
      `La molécule est apolaire malgré la présence de liaisons polarisées.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La géométrie trigonale plane répartit les trois liaisons identiques à environ $120^{\\circ}$. Leurs moments dipolaires ont même intensité et leur somme vectorielle est nulle.`,
    choiceExplanations: [
      `Le chlore est plus électronégatif que le bore : chaque liaison est polarisée vers le chlore.`,
      `La symétrie de la molécule conduit à une annulation exacte des trois vecteurs.`,
      `Aucun chlore n'est privilégié dans cette géométrie parfaitement symétrique.`,
      `Une molécule peut être apolaire même si chacune de ses liaisons est polarisée.`,
    ],
  },
  {
    order: 6,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant les molécules $\\mathrm{CH_{4}}$ et $\\mathrm{CCl_{4}}$ :`,
    choices: [
      `Elles possèdent toutes deux une géométrie tétraédrique symétrique.`,
      `$\\mathrm{CCl_{4}}$ est polaire car chacune de ses liaisons $\\mathrm{C-Cl}$ est polarisée.`,
      `Dans $\\mathrm{CCl_{4}}$, les moments dipolaires des quatre liaisons s'annulent.`,
      `$\\mathrm{CH_{4}}$ et $\\mathrm{CCl_{4}}$ sont classées parmi les molécules apolaires.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `La polarité globale ne se déduit pas d'une liaison isolée. Dans une géométrie tétraédrique parfaitement symétrique, quatre dipôles identiques s'annulent.`,
    choiceExplanations: [
      `Les quatre substituants identiques sont disposés vers les sommets d'un tétraèdre.`,
      `La présence de liaisons polarisées ne suffit pas : leur somme vectorielle est nulle.`,
      `La symétrie tétraédrique produit une résultante nulle.`,
      `Le méthane et le tétrachlorure de carbone ne possèdent pas de moment dipolaire global permanent.`,
    ],
  },
  {
    order: 7,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `On compare les isomères cis et trans du dichloroéthène. Concernant leurs moments dipolaires :`,
    choices: [
      `Dans l'isomère cis, les deux atomes de chlore sont situés du même côté de la double liaison.`,
      `Dans l'isomère cis, les contributions des liaisons polarisées peuvent s'additionner.`,
      `Dans l'isomère trans, les dipôles s'opposent davantage et peuvent s'annuler.`,
      `Les deux isomères ont nécessairement la même polarité puisqu'ils possèdent la même formule brute.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La disposition spatiale des liaisons intervient dans la somme vectorielle. L'isomère cis est polaire, tandis que la disposition plus symétrique de l'isomère trans conduit à une forte compensation des dipôles.`,
    choiceExplanations: [
      `Le préfixe cis indique que les deux substituants considérés sont du même côté.`,
      `Les composantes des moments dipolaires dirigées vers les chlores se renforcent dans l'isomère cis.`,
      `Dans l'isomère trans, la disposition opposée favorise l'annulation des moments dipolaires.`,
      `Une même formule brute n'impose pas une même géométrie ni une même polarité.`,
    ],
  },
  {
    order: 8,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les associations suivantes entre une molécule et sa polarité :`,
    choices: [
      `Le benzène $\\mathrm{C_{6}H_{6}}$ est classé parmi les molécules apolaires.`,
      `Le méthanol $\\mathrm{CH_{3}OH}$ est une molécule polaire dont le dipôle est orienté globalement vers l'oxygène.`,
      `La propanone, ou acétone, est apolaire car elle possède deux groupes $\\mathrm{CH_{3}}$ identiques.`,
      `L'eau est moins polaire que le méthane.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La polarité résulte de l'ensemble de la structure. Le benzène est globalement symétrique, tandis que les liaisons impliquant l'oxygène créent un dipôle global marqué dans le méthanol et la propanone.`,
    choiceExplanations: [
      `La répartition symétrique des liaisons du benzène conduit à une résultante dipolaire nulle.`,
      `L'oxygène attire fortement les électrons des liaisons voisines ; le méthanol est polaire.`,
      `Le groupe carbonyle $\\mathrm{C=O}$ possède un dipôle important qui n'est pas annulé par les deux groupes méthyle.`,
      `Le méthane est apolaire, alors que l'eau est une molécule très polaire.`,
    ],
  },
  {
    order: 9,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant la miscibilité et la polarité des molécules :`,
    choices: [
      `Les substances polaires sont généralement miscibles avec des solvants polaires.`,
      `Les substances apolaires sont généralement miscibles avec des solvants apolaires.`,
      `Une substance apolaire est toujours parfaitement miscible avec l'eau.`,
      `La polarité des molécules n'a aucune influence sur leur miscibilité.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La règle qualitative « le semblable dissout le semblable » relie la miscibilité à la nature des interactions possibles entre soluté et solvant. Elle constitue un repère général, sans être une loi absolue.`,
    choiceExplanations: [
      `Des molécules polaires peuvent établir entre elles des interactions électrostatiques favorables.`,
      `Des molécules apolaires présentent des interactions de nature comparable entre elles.`,
      `L'eau est très polaire ; les substances apolaires y sont généralement peu solubles.`,
      `La polarité est au contraire un facteur majeur de miscibilité.`,
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour déterminer simplement si une molécule est polaire, il faut :`,
    choices: [
      `Repérer les liaisons susceptibles d'être polarisées à partir des électronégativités.`,
      `Prendre en compte la géométrie de la molécule.`,
      `Effectuer la somme vectorielle des moments dipolaires de liaison.`,
      `Conclure qu'une molécule est polaire dès qu'elle contient au moins une liaison polarisée.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La démarche comporte deux étapes essentielles : identifier les dipôles de liaison, puis étudier leur orientation dans l'espace. Une géométrie symétrique peut annuler des dipôles pourtant importants.`,
    choiceExplanations: [
      `Une différence d'électronégativité permet d'identifier le sens de polarisation d'une liaison.`,
      `La géométrie fixe l'orientation relative des moments dipolaires.`,
      `La polarité globale correspond à la résultante vectorielle de tous les moments dipolaires.`,
      `Les exemples de $\\mathrm{BCl_{3}}$ et $\\mathrm{CCl_{4}}$ montrent qu'une liaison polarisée ne rend pas nécessairement toute la molécule polaire.`,
    ],
  },
  {
    order: 31,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On compare les molécules diatomiques $\\mathrm{Cl_{2}}$ et $\\mathrm{HCl}$.`,
    choices: [
      `La liaison de $\\mathrm{Cl_{2}}$ est apolaire car les deux atomes ont la même électronégativité.`,
      `Dans $\\mathrm{HCl}$, le chlore porte une charge partielle positive.`,
      `Le moment dipolaire de $\\mathrm{HCl}$ est orienté, par convention en chimie, de l'hydrogène vers le chlore.`,
      `$\\mathrm{Cl_{2}}$ et $\\mathrm{HCl}$ sont toutes deux apolaires car elles sont électriquement neutres.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Une molécule diatomique homonucléaire ne présente pas de séparation permanente de charges. Dans $\\mathrm{HCl}$, le chlore, plus électronégatif, porte $\\delta^{-}$ et le vecteur moment dipolaire est dirigé de $\\delta^{+}$ vers $\\delta^{-}$.`,
    choiceExplanations: [
      `Deux atomes identiques attirent de façon identique le doublet liant.`,
      `Le chlore est le pôle négatif de la liaison, et non le pôle positif.`,
      `L'hydrogène porte $\\delta^{+}$ et le chlore $\\delta^{-}$.`,
      `La neutralité globale n'empêche pas l'existence de charges partielles et d'un moment dipolaire.`,
    ],
  },
  {
    order: 32,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On compare $\\mathrm{CO_{2}}$, linéaire, et $\\mathrm{SO_{2}}$, coudée. Les liaisons avec l'oxygène sont polarisées.`,
    choices: [
      `Dans $\\mathrm{CO_{2}}$, les deux moments dipolaires de liaison sont opposés et s'annulent.`,
      `$\\mathrm{SO_{2}}$ est apolaire car elle contient deux liaisons identiques.`,
      `La géométrie coudée de $\\mathrm{SO_{2}}$ conduit à une résultante dipolaire non nulle.`,
      `$\\mathrm{CO_{2}}$ est polaire puisque chaque liaison $\\mathrm{C=O}$ est polarisée.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La polarité moléculaire dépend de la somme vectorielle des dipôles de liaison. Dans la molécule linéaire $\\mathrm{CO_{2}}$, ils s'annulent ; dans la molécule coudée $\\mathrm{SO_{2}}$, ils ne sont pas opposés.`,
    choiceExplanations: [
      `Les deux vecteurs ont même intensité et des directions opposées.`,
      `Deux liaisons identiques ne s'annulent que si leur orientation géométrique le permet.`,
      `La géométrie en V empêche une compensation complète des vecteurs.`,
      `La polarisation des liaisons ne suffit pas à conclure sans considérer la géométrie.`,
    ],
  },
  {
    order: 33,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de la molécule d'ammoniac $\\mathrm{NH_{3}}$, de géométrie pyramidale :`,
    choices: [
      `Les liaisons $\\mathrm{N-H}$ sont polarisées vers l'azote.`,
      `Les trois moments dipolaires de liaison s'annulent exactement par symétrie.`,
      `Le doublet non liant de l'azote participe à la dissymétrie de la molécule.`,
      `La molécule est apolaire puisque les trois hydrogènes sont identiques.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'azote est plus électronégatif que l'hydrogène. La géométrie pyramidale, liée notamment à la présence du doublet non liant, ne permet pas l'annulation des trois moments dipolaires : $\\mathrm{NH_{3}}$ est polaire.`,
    choiceExplanations: [
      `Le doublet liant est davantage attiré par l'azote.`,
      `Une annulation serait possible dans une géométrie trigonale plane parfaitement symétrique, pas dans une pyramide.`,
      `Le doublet non liant modifie la répartition électronique et la géométrie autour de l'azote.`,
      `L'identité des substituants ne suffit pas : leur disposition spatiale est déterminante.`,
    ],
  },
  {
    order: 34,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On compare les molécules tétraédriques $\\mathrm{CCl_{4}}$ et $\\mathrm{CH_{2}Cl_{2}}$.`,
    choices: [
      `Dans $\\mathrm{CCl_{4}}$, les quatre moments dipolaires $\\mathrm{C-Cl}$ s'annulent.`,
      `$\\mathrm{CH_{2}Cl_{2}}$ possède la même symétrie que $\\mathrm{CCl_{4}}$.`,
      `$\\mathrm{CH_{2}Cl_{2}}$ présente un moment dipolaire global non nul.`,
      `Toute molécule tétraédrique est nécessairement apolaire.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `$\\mathrm{CCl_{4}}$ est un tétraèdre parfaitement symétrique. Dans $\\mathrm{CH_{2}Cl_{2}}$, le remplacement de deux chlores par deux hydrogènes rompt cette symétrie : les dipôles ne se compensent plus totalement.`,
    choiceExplanations: [
      `Les quatre liaisons identiques occupent des directions tétraédriques équivalentes.`,
      `La présence de deux types de substituants rompt la symétrie de $\\mathrm{CCl_{4}}$.`,
      `La somme vectorielle des moments de liaison est non nulle.`,
      `Une géométrie tétraédrique peut être polaire lorsque les substituants ne sont pas tous identiques.`,
    ],
  },
  {
    order: 35,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Dans le chlorométhane $\\mathrm{CH_{3}Cl}$, on néglige la faible polarité des liaisons $\\mathrm{C-H}$.`,
    choices: [
      `La liaison $\\mathrm{C-Cl}$ est polarisée vers le chlore.`,
      `Le chlore porte une charge partielle positive.`,
      `La molécule possède un moment dipolaire global orienté vers le chlore.`,
      `La présence de trois hydrogènes suffit à annuler exactement le dipôle $\\mathrm{C-Cl}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le chlore, plus électronégatif que le carbone, constitue le pôle $\\delta^{-}$. La géométrie de $\\mathrm{CH_{3}Cl}$ n'est pas suffisamment symétrique pour annuler le moment de la liaison $\\mathrm{C-Cl}$.`,
    choiceExplanations: [
      `Le doublet liant est déplacé vers le chlore.`,
      `Le chlore porte au contraire une charge partielle négative.`,
      `La résultante moléculaire est dirigée globalement vers le substituant chlore.`,
      `Les trois liaisons $\\mathrm{C-H}$ ne produisent pas une compensation exacte du dipôle $\\mathrm{C-Cl}$.`,
    ],
  },
  {
    order: 36,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Le méthanal, ou formaldéhyde, a pour formule $\\mathrm{H_{2}C=O}$ et une géométrie plane autour du carbone.`,
    choices: [
      `La liaison $\\mathrm{C=O}$ possède un moment dipolaire dirigé vers l'oxygène.`,
      `Les deux liaisons $\\mathrm{C-H}$ rendent nécessairement la molécule apolaire.`,
      `La molécule possède un moment dipolaire global non nul.`,
      `Le carbone porte le pôle négatif principal de la liaison $\\mathrm{C=O}$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La liaison carbonyle est fortement polarisée vers l'oxygène. Les deux liaisons $\\mathrm{C-H}$ disposées symétriquement ne compensent pas ce dipôle : le méthanal est polaire.`,
    choiceExplanations: [
      `L'oxygène est plus électronégatif que le carbone.`,
      `L'identité des deux hydrogènes ne suffit pas à annuler le dipôle du carbonyle.`,
      `La résultante est orientée globalement du carbone vers l'oxygène.`,
      `Le carbone du carbonyle porte une charge partielle positive.`,
    ],
  },
  {
    order: 37,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On compare $\\mathrm{BF_{3}}$, trigonale plane, et $\\mathrm{NH_{3}}$, pyramidale.`,
    choices: [
      `Les liaisons $\\mathrm{B-F}$ sont polarisées, mais $\\mathrm{BF_{3}}$ est apolaire.`,
      `$\\mathrm{NH_{3}}$ est polaire en raison de sa géométrie non plane.`,
      `Les deux molécules sont apolaires car elles possèdent chacune trois liaisons autour de l'atome central.`,
      `La polarité globale dépend uniquement du nombre de liaisons autour de l'atome central.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `$\\mathrm{BF_{3}}$ présente trois dipôles identiques répartis à $120^{\\circ}$, dont la somme est nulle. Dans $\\mathrm{NH_{3}}$, la géométrie pyramidale produit une résultante non nulle.`,
    choiceExplanations: [
      `La symétrie trigonale plane compense les trois moments dipolaires.`,
      `La pyramide trigonale ne permet pas l'annulation des dipôles $\\mathrm{N-H}$.`,
      `Le même nombre de liaisons peut conduire à des géométries et à des polarités différentes.`,
      `La direction des liaisons et la nature des substituants sont aussi indispensables.`,
    ],
  },
  {
    order: 38,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La molécule $\\mathrm{PCl_{5}}$ adopte une géométrie bipyramidale trigonale avec cinq liaisons $\\mathrm{P-Cl}$ identiques.`,
    choices: [
      `Chaque liaison $\\mathrm{P-Cl}$ est polarisée vers le chlore.`,
      `La somme vectorielle des cinq moments dipolaires peut être nulle dans cette géométrie symétrique.`,
      `La présence de cinq liaisons polarisées impose un moment dipolaire moléculaire non nul.`,
      `La molécule est polaire uniquement parce que le chlore est très électronégatif.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les trois dipôles équatoriaux s'annulent dans leur plan, tandis que les deux dipôles axiaux, opposés, s'annulent entre eux. $\\mathrm{PCl_{5}}$ est donc apolaire malgré des liaisons polarisées.`,
    choiceExplanations: [
      `Le chlore attire davantage le doublet de liaison que le phosphore.`,
      `La symétrie bipyramidale permet une compensation complète des vecteurs.`,
      `Le nombre de liaisons polarisées ne suffit pas à déterminer la polarité globale.`,
      `L'électronégativité intervient au niveau des liaisons ; la géométrie détermine ensuite leur résultante.`,
    ],
  },
  {
    order: 39,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `On cherche à prévoir qualitativement la miscibilité de plusieurs couples de substances.`,
    choices: [
      `Le méthanol et l'eau sont généralement miscibles car ce sont deux liquides polaires.`,
      `Le benzène et le tétrachlorure de carbone sont généralement miscibles car ils sont apolaires.`,
      `L'eau et un hydrocarbure apolaire sont toujours parfaitement miscibles.`,
      `La formule brute suffit à prévoir la miscibilité sans connaître la structure ni la polarité.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La règle qualitative « le semblable dissout le semblable » relie la miscibilité à la nature des interactions possibles. Elle nécessite de connaître la polarité réelle des molécules, donc leur structure et leur géométrie.`,
    choiceExplanations: [
      `Les deux molécules peuvent établir des interactions favorables entre dipôles, notamment des liaisons hydrogène.`,
      `Deux espèces apolaires présentent des interactions de nature comparable.`,
      `Les hydrocarbures apolaires sont généralement peu miscibles avec l'eau très polaire.`,
      `Deux isomères de même formule brute peuvent avoir des polarités différentes.`,
    ],
  },
  {
    order: 40,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `À propos de l'effet inductif exercé par un atome électronégatif le long d'une chaîne carbonée :`,
    choices: [
      `Il correspond à une polarisation transmise à distance par les liaisons.`,
      `Son intensité tend à diminuer lorsqu'on s'éloigne de l'hétéroatome.`,
      `Il devient généralement plus intense après chaque liaison $\\mathrm{C-C}$ supplémentaire.`,
      `Il impose toujours un moment dipolaire global nul à la molécule.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Un hétéroatome électronégatif attire la densité électronique et peut polariser les liaisons voisines. Cette influence se transmet le long de la chaîne, mais s'atténue rapidement avec la distance.`,
    choiceExplanations: [
      `La polarisation d'une liaison peut modifier, de proche en proche, la répartition électronique des liaisons voisines.`,
      `L'effet inductif devient généralement faible après quelques liaisons.`,
      `Il s'atténue au lieu de s'amplifier avec la distance.`,
      `L'existence d'un effet inductif n'implique pas une annulation du moment dipolaire global.`,
    ],
  },
];
