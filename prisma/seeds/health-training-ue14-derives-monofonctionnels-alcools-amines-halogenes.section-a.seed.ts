import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_ALCOHOLS_DISCOVERY_QUIZ_SLUG =
  'section-a-discovery-alcools-proprietes-classes';
export const SECTION_A_HYDRATION_REDUCTION_PRACTICE_QUIZ_SLUG =
  'section-a-practice-preparation-alcools-hydratation-reduction';
export const SECTION_A_ORGANOMAGNESIUM_MASTER_QUIZ_SLUG =
  'section-a-master-preparation-alcools-organomagnesiens';

export const SECTION_A_ALCOHOLS_DISCOVERY_QUESTION_ORDERS: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
export const SECTION_A_HYDRATION_REDUCTION_PRACTICE_QUESTION_ORDERS: number[] = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
export const SECTION_A_ORGANOMAGNESIUM_MASTER_QUESTION_ORDERS: number[] = [
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
];

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_A_ALCOHOLS_DISCOVERY_QUIZ_SLUG,
    title: `Alcools : fonction, propriétés et classes`,
    description:
      `Reconnaître la fonction alcool, comprendre la formation de liaisons hydrogène et distinguer les alcools primaires, secondaires et tertiaires.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_A_ORDER,
    questionOrders: SECTION_A_ALCOHOLS_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 2,
    slug: SECTION_A_HYDRATION_REDUCTION_PRACTICE_QUIZ_SLUG,
    title: `Préparation des alcools par hydratation et réduction`,
    description:
      `Prévoir les alcools obtenus par hydratation d'un alcène ou par réduction d'un acide carboxylique, d'un aldéhyde ou d'une cétone.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_A_ORDER,
    items: [
      { type: 'QUESTION', questionOrder: 11 },
      { type: 'QUESTION', questionOrder: 12 },
      { type: 'QUESTION', questionOrder: 13 },
      { type: 'QUESTION', questionOrder: 14 },
      { type: 'QUESTION', questionOrder: 15 },
      { type: 'QUESTION', questionOrder: 16 },
      { type: 'QUESTION', questionOrder: 17 },
      {
        type: 'GROUP',
        title: `Trois composés oxygénés à réduire`,
        sharedStatement:
          `Dans un laboratoire de synthèse, on souhaite préparer un alcool à partir de chacun des composés suivants : **A**, l'acide propanoïque $\mathrm{CH_3{-}CH_2{-}COOH}$ ; **B**, le propanal $\mathrm{CH_3{-}CH_2{-}CHO}$ ; **C**, la propanone $\mathrm{CH_3{-}CO{-}CH_3}$.`,
        questionOrders: [18, 19, 20],
      },
    ],
  },
  {
    order: 3,
    slug: SECTION_A_ORGANOMAGNESIUM_MASTER_QUIZ_SLUG,
    title: `Préparation des alcools par les organomagnésiens`,
    description:
      `Déterminer la classe et la structure des alcools obtenus après addition d'un organomagnésien sur un aldéhyde, une cétone ou un ester, puis hydrolyse.`,
    stage: 'MASTER',
    sectionOrder: SECTION_A_ORDER,
    items: [
      { type: 'QUESTION', questionOrder: 21 },
      { type: 'QUESTION', questionOrder: 22 },
      { type: 'QUESTION', questionOrder: 23 },
      { type: 'QUESTION', questionOrder: 24 },
      { type: 'QUESTION', questionOrder: 25 },
      { type: 'QUESTION', questionOrder: 26 },
      { type: 'QUESTION', questionOrder: 27 },
      {
        type: 'GROUP',
        title: `Addition du bromure de méthylmagnésium`,
        sharedStatement:
          `On fait réagir séparément le bromure de méthylmagnésium $\mathrm{CH_3MgBr}$ avec **A**, l'éthanal $\mathrm{CH_3{-}CHO}$ ; **B**, la propanone $\mathrm{CH_3{-}CO{-}CH_3}$ ; **C**, l'éthanoate d'éthyle $\mathrm{CH_3{-}COO{-}CH_2{-}CH_3}$. Chaque réaction est suivie d'une hydrolyse.`,
        questionOrders: [28, 29, 30],
      },
    ],
  },
];

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos de la fonction alcool :`,
    choices: [
      `Sa formule générale peut s'écrire $\mathrm{R{-}OH}$.`,
      `Le groupe $\mathrm{-OH}$ est appelé groupe hydroxyle.`,
      `Dans un alcool, l'oxygène n'est jamais lié à un atome de carbone.`,
      `Le symbole $\mathrm{R}$ représente nécessairement un atome d'hydrogène.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Un alcool comporte un groupe hydroxyle $\mathrm{-OH}$ lié à un radical carboné, noté $\mathrm{R}$.`,
    choiceExplanations: [
      `Cette écriture résume la structure générale d'un alcool monofonctionnel.`,
      `Le motif caractéristique de la fonction alcool est le groupe hydroxyle.`,
      `L'oxygène du groupe hydroxyle est précisément lié au radical carboné.`,
      `Le symbole $\mathrm{R}$ désigne un radical ou groupe carboné.`,
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant les liaisons hydrogène formées par les alcools :`,
    choices: [
      `Elles sont possibles grâce au groupe $\mathrm{O{-}H}$.`,
      `L'hydrogène porté par l'oxygène peut intervenir dans une liaison hydrogène.`,
      `Un alcool ne peut établir aucune interaction avec l'eau.`,
      `La présence du groupe $\mathrm{-OH}$ rend nécessairement l'alcool ionique.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La forte polarisation de la liaison $\mathrm{O{-}H}$ permet aux molécules d'alcool de participer à des liaisons hydrogène, notamment entre elles et avec l'eau.`,
    choiceExplanations: [
      `Le motif $\mathrm{O{-}H}$ est indispensable à cette propriété dans un alcool.`,
      `L'hydrogène lié à l'oxygène constitue le site donneur de liaison hydrogène.`,
      `Au contraire, le groupe hydroxyle permet des interactions favorables avec l'eau.`,
      `Une molécule peut être polaire et former des liaisons hydrogène sans être ionique.`,
    ],
  },
  {
    order: 3,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La classe d'un alcool est déterminée à partir du carbone portant le groupe $\mathrm{-OH}$. Ainsi :`,
    choices: [
      `Un alcool primaire possède un carbone fonctionnel lié à un seul autre carbone.`,
      `Un alcool secondaire possède un carbone fonctionnel lié à deux autres carbones.`,
      `Un alcool tertiaire possède un carbone fonctionnel lié à trois autres carbones.`,
      `La classe dépend uniquement du nombre total d'atomes de carbone de la molécule.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Il faut compter le nombre de carbones directement liés au carbone qui porte le groupe hydroxyle : un, deux ou trois pour un alcool primaire, secondaire ou tertiaire.`,
    choiceExplanations: [
      `Le carbone fonctionnel d'un alcool primaire est lié à un seul groupe carboné.`,
      `Deux voisins carbonés définissent un alcool secondaire.`,
      `Trois voisins carbonés définissent un alcool tertiaire.`,
      `Une longue molécule peut porter un alcool primaire, secondaire ou tertiaire selon la position du groupe $\mathrm{-OH}$.`,
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `L'éthanol $\mathrm{CH_3{-}CH_2{-}OH}$ est notamment utilisé comme antiseptique et comme solvant. À propos de sa structure :`,
    choices: [
      `Il possède une fonction alcool.`,
      `Le carbone portant $\mathrm{-OH}$ est lié à un seul autre carbone.`,
      `Il s'agit d'un alcool primaire.`,
      `Il s'agit d'un alcool tertiaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans l'éthanol, le groupe hydroxyle est porté par un carbone terminal $\mathrm{CH_2}$ lié à un seul autre carbone : l'alcool est primaire.`,
    choiceExplanations: [
      `Le motif $\mathrm{-CH_2{-}OH}$ contient bien une fonction alcool.`,
      `Le carbone fonctionnel est seulement voisin du groupe $\mathrm{CH_3}$.`,
      `Un seul voisin carboné correspond à un alcool primaire.`,
      `Un alcool tertiaire nécessiterait trois voisins carbonés autour du carbone fonctionnel.`,
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Le propan-2-ol $\mathrm{CH_3{-}CH(OH){-}CH_3}$ est couramment employé comme désinfectant. Concernant cette molécule :`,
    choices: [
      `Le carbone portant $\mathrm{-OH}$ est lié à deux carbones.`,
      `La fonction alcool est secondaire.`,
      `Le groupe hydroxyle est porté par un carbone terminal.`,
      `La fonction alcool est tertiaire.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le carbone fonctionnel du propan-2-ol est lié aux deux groupes méthyle : il s'agit d'un alcool secondaire.`,
    choiceExplanations: [
      `Les deux groupes $\mathrm{CH_3}$ sont directement liés au carbone fonctionnel.`,
      `Deux voisins carbonés définissent une fonction alcool secondaire.`,
      `Le groupe $\mathrm{-OH}$ est porté par le carbone central.`,
      `Un alcool tertiaire comporterait trois substituants carbonés sur ce carbone.`,
    ],
  },
  {
    order: 6,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `On considère le 2-méthylpropan-2-ol $\mathrm{(CH_3)_3C{-}OH}$.`,
    choices: [
      `Le carbone portant $\mathrm{-OH}$ est lié à trois carbones.`,
      `La fonction alcool est tertiaire.`,
      `Le carbone fonctionnel ne porte aucun hydrogène.`,
      `La molécule possède trois groupes hydroxyle.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le carbone fonctionnel est lié à trois groupes méthyle et au groupe hydroxyle. Il ne porte donc aucun hydrogène et la fonction alcool est tertiaire.`,
    choiceExplanations: [
      `Les trois groupes $\mathrm{CH_3}$ sont directement liés au carbone fonctionnel.`,
      `Trois voisins carbonés caractérisent un alcool tertiaire.`,
      `Ses quatre liaisons sont établies avec trois carbones et un oxygène.`,
      `La formule ne comporte qu'un seul groupe $\mathrm{-OH}$.`,
    ],
  },
  {
    order: 7,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `On compare le butan-1-ol $\mathrm{CH_3{-}CH_2{-}CH_2{-}CH_2{-}OH}$ et le butan-2-ol $\mathrm{CH_3{-}CH(OH){-}CH_2{-}CH_3}$.`,
    choices: [
      `Le butan-1-ol est un alcool primaire.`,
      `Le butan-2-ol est un alcool secondaire.`,
      `Les deux molécules ont la même formule brute $\mathrm{C_4H_{10}O}$.`,
      `Le déplacement du groupe $\mathrm{-OH}$ peut modifier la classe de l'alcool.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Les deux molécules possèdent la même composition, mais le carbone fonctionnel n'a pas le même nombre de voisins carbonés : un dans le butan-1-ol et deux dans le butan-2-ol.`,
    choiceExplanations: [
      `Le carbone terminal portant $\mathrm{-OH}$ n'est lié qu'à un carbone.`,
      `Le carbone portant $\mathrm{-OH}$ est lié à deux carbones.`,
      `Le décompte donne quatre carbones, dix hydrogènes et un oxygène dans les deux cas.`,
      `La classe dépend de l'environnement immédiat du carbone fonctionnel.`,
    ],
  },
  {
    order: 8,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `On considère le 3-méthylbutan-2-ol $\mathrm{CH_3{-}CH(OH){-}CH(CH_3){-}CH_3}$.`,
    choices: [
      `La molécule contient cinq atomes de carbone.`,
      `Le carbone portant $\mathrm{-OH}$ est lié à deux carbones.`,
      `La fonction alcool est tertiaire.`,
      `La molécule ne possède qu'un seul groupe hydroxyle.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le carbone fonctionnel est relié à un groupe méthyle et à un fragment carboné ramifié : il possède deux voisins carbonés et porte donc une fonction alcool secondaire.`,
    choiceExplanations: [
      `Quatre carbones appartiennent à la chaîne principale et un au substituant méthyle.`,
      `Le carbone fonctionnel est relié à deux fragments carbonés.`,
      `Deux voisins carbonés correspondent à un alcool secondaire, non tertiaire.`,
      `Un seul motif $\mathrm{-OH}$ apparaît dans la formule.`,
    ],
  },
  {
    order: 9,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `On compare le propan-1-ol et le propan-2-ol. À propos de ces deux molécules :`,
    choices: [
      `Elles possèdent chacune un groupe hydroxyle.`,
      `Elles peuvent toutes deux former des liaisons hydrogène.`,
      `Le propan-1-ol est primaire tandis que le propan-2-ol est secondaire.`,
      `Elles possèdent nécessairement le même enchaînement d'atomes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les deux molécules sont des alcools de formule brute $\mathrm{C_3H_8O}$, mais le groupe hydroxyle n'occupe pas la même position.`,
    choiceExplanations: [
      `Chaque molécule est monofonctionnelle et ne contient qu'un groupe $\mathrm{-OH}$.`,
      `La liaison $\mathrm{O{-}H}$ leur permet de participer à des liaisons hydrogène.`,
      `La position terminale ou centrale du groupe hydroxyle modifie la classe.`,
      `Leur formule brute est identique, mais leur structure diffère.`,
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `À propos des alcools monofonctionnels :`,
    choices: [
      `Ils comportent un groupe hydroxyle lié à un radical carboné.`,
      `Leur classe dépend de l'environnement du carbone portant $\mathrm{-OH}$.`,
      `Ils sont capables de former des liaisons hydrogène grâce au groupe $\mathrm{O{-}H}$.`,
      `Toutes les propositions précédentes sont exactes.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Les trois premières propositions reprennent les caractéristiques essentielles de la fonction alcool ; l'item récapitulatif est donc également exact.`,
    choiceExplanations: [
      `Il s'agit de la définition structurale générale d'un alcool.`,
      `Il faut compter les voisins carbonés du carbone fonctionnel.`,
      `La liaison polarisée $\mathrm{O{-}H}$ est à l'origine de cette propriété.`,
      `Les trois affirmations précédentes sont effectivement justes.`,
    ],
  },
  {
    order: 11,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `L'hydratation acido-catalysée d'un alcène :`,
    choices: [
      `Correspond à une addition sur la double liaison $\mathrm{C{=}C}$.`,
      `Ajoute globalement un hydrogène et un groupe hydroxyle.`,
      `Conduit à un alcool.`,
      `Correspond à l'élimination d'une molécule d'eau.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'hydratation ajoute les éléments de l'eau de part et d'autre de la double liaison et transforme l'alcène en alcool.`,
    choiceExplanations: [
      `La liaison pi de l'alcène disparaît au cours de l'addition.`,
      `Les éléments ajoutés sont $\mathrm{H}$ et $\mathrm{OH}$.`,
      `Le bilan du cours est alcène + eau, en milieu acide, donnant un alcool.`,
      `L'élimination d'eau correspond au processus inverse : la déshydratation d'un alcool.`,
    ],
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Au cours de l'hydratation d'un alcène non symétrique telle qu'elle est présentée dans la fiche :`,
    choices: [
      `Le squelette carboné de départ est conservé.`,
      `Le groupe $\mathrm{-OH}$ peut se fixer sur l'un ou l'autre des carbones de l'ancienne double liaison.`,
      `Le produit conserve nécessairement la double liaison $\mathrm{C{=}C}$.`,
      `Plusieurs alcools de position peuvent être envisagés.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La fiche représente les deux orientations possibles de l'addition de $\mathrm{H}$ et de $\mathrm{OH}$ sur un alcène non symétrique.`,
    choiceExplanations: [
      `Aucune liaison carbone-carbone n'est rompue dans le bilan simplifié.`,
      `Les deux orientations conduisent à des positions différentes du groupe hydroxyle.`,
      `La double liaison est consommée par la réaction d'addition.`,
      `Les orientations possibles peuvent fournir des alcools de position distincts.`,
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `L'éthène $\mathrm{CH_2{=}CH_2}$ est hydraté en présence d'eau et d'un catalyseur acide.`,
    choices: [
      `Le produit est l'éthanol $\mathrm{CH_3{-}CH_2{-}OH}$.`,
      `La transformation est une hydratation d'alcène.`,
      `L'alcool obtenu est primaire.`,
      `Le produit comporte encore une double liaison carbone-carbone.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'éthène est symétrique : l'addition de $\mathrm{H}$ et de $\mathrm{OH}$ conduit uniquement à l'éthanol, qui est un alcool primaire.`,
    choiceExplanations: [
      `L'ajout des éléments de l'eau transforme $\mathrm{CH_2{=}CH_2}$ en $\mathrm{CH_3{-}CH_2{-}OH}$.`,
      `Le réactif organique est un alcène et le bilan correspond à l'ajout d'eau.`,
      `Le carbone portant $\mathrm{-OH}$ est lié à un seul autre carbone.`,
      `La double liaison est remplacée par une liaison simple.`,
    ],
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Dans le modèle simplifié de la fiche, l'hydratation du propène $\mathrm{CH_3{-}CH{=}CH_2}$ peut conduire aux deux alcools de position correspondants.`,
    choices: [
      `Le propan-1-ol peut être représenté parmi les produits possibles.`,
      `Le propan-2-ol peut être représenté parmi les produits possibles.`,
      `L'un de ces alcools est primaire et l'autre secondaire.`,
      `Un alcool tertiaire est nécessairement formé.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Selon l'orientation de l'addition, le groupe hydroxyle peut se retrouver sur le carbone terminal ou central, donnant respectivement un alcool primaire ou secondaire.`,
    choiceExplanations: [
      `La fixation de $\mathrm{-OH}$ sur le carbone terminal conduit au propan-1-ol.`,
      `La fixation de $\mathrm{-OH}$ sur le carbone central conduit au propan-2-ol.`,
      `Le carbone fonctionnel possède respectivement un ou deux voisins carbonés.`,
      `Aucun carbone du propène ne permet d'obtenir un carbone fonctionnel lié à trois carbones.`,
    ],
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant la réduction d'un composé carbonylé en alcool :`,
    choices: [
      `La liaison $\mathrm{C{=}O}$ est transformée en motif portant $\mathrm{-OH}$.`,
      `La réduction ne crée pas nécessairement de nouvelle liaison carbone-carbone.`,
      `La classe de l'alcool dépend de la nature du composé carbonylé initial.`,
      `Cette transformation correspond à l'oxydation d'un alcool.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La réduction modifie le groupe carbonyle sans allonger le squelette carboné. Un aldéhyde donne un alcool primaire et une cétone un alcool secondaire.`,
    choiceExplanations: [
      `Le carbone carbonylé devient le carbone portant le groupe hydroxyle.`,
      `Les réducteurs cités apportent des hydrogènes sans ajouter de fragment carboné.`,
      `L'environnement carboné du groupe carbonyle détermine celui du futur alcool.`,
      `Il s'agit du sens inverse de l'oxydation d'un alcool.`,
    ],
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `D'après la fiche, un acide carboxylique peut être réduit en alcool à l'aide de $\mathrm{BH_3}$.`,
    choices: [
      `Le produit obtenu est un alcool primaire.`,
      `$\mathrm{BH_3}$ est présenté comme un réducteur suffisamment puissant pour cette transformation.`,
      `Le produit est nécessairement un alcool secondaire.`,
      `Le nombre de carbones de la chaîne est conservé.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La réduction du groupe $\mathrm{-COOH}$ transforme son carbone en groupe $\mathrm{-CH_2OH}$ sans modifier le squelette carboné.`,
    choiceExplanations: [
      `Le carbone fonctionnel du produit est lié à un seul carbone.`,
      `La fiche distingue cette réduction de celles réalisées avec le réducteur plus doux $\mathrm{NaBH_4}$.`,
      `Un alcool secondaire nécessiterait deux voisins carbonés autour du carbone fonctionnel.`,
      `Le carbone du groupe carboxyle reste présent dans le produit.`,
    ],
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La réduction d'un aldéhyde par $\mathrm{NaBH_4}$ :`,
    choices: [
      `Conduit à un alcool primaire.`,
      `Transforme le motif $\mathrm{-CHO}$ en motif $\mathrm{-CH_2OH}$.`,
      `Utilise le réducteur doux cité dans la fiche.`,
      `Conduit nécessairement à un alcool tertiaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Un aldéhyde possède déjà un hydrogène sur le carbone carbonylé. Après réduction, ce carbone porte le groupe $\mathrm{-OH}$ et devient un groupe terminal $\mathrm{-CH_2OH}$.`,
    choiceExplanations: [
      `Le carbone fonctionnel du produit n'est lié qu'à un seul carbone.`,
      `Le groupe carbonyle de l'aldéhyde est converti en alcool.`,
      `$\mathrm{NaBH_4}$ est le réducteur indiqué pour les aldéhydes dans la fiche.`,
      `Le carbone fonctionnel ne possède pas trois voisins carbonés.`,
    ],
  },
  {
    order: 18,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant la réduction du composé **A** :`,
    choices: [
      `Le réducteur indiqué dans la fiche est $\mathrm{BH_3}$.`,
      `Le produit attendu est le propan-1-ol.`,
      `Le produit est un alcool primaire.`,
      `La fiche indique spécifiquement $\mathrm{NaBH_4}$ pour réduire cet acide carboxylique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'acide propanoïque est réduit par $\mathrm{BH_3}$ en propan-1-ol, sans perte du carbone carboxylique.`,
    choiceExplanations: [
      `$\mathrm{BH_3}$ est le réducteur puissant associé aux acides dans le cours.`,
      `$\mathrm{CH_3{-}CH_2{-}COOH}$ devient $\mathrm{CH_3{-}CH_2{-}CH_2OH}$.`,
      `Le carbone portant $\mathrm{-OH}$ est terminal et lié à un seul carbone.`,
      `$\mathrm{NaBH_4}$ est indiqué pour les aldéhydes et les cétones dans cette fiche.`,
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant la réduction du composé **B** :`,
    choices: [
      `$\mathrm{NaBH_4}$ peut être utilisé selon la fiche.`,
      `Le produit attendu est le propan-1-ol.`,
      `Le produit est un alcool primaire.`,
      `Le produit attendu est le propan-2-ol.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La réduction du propanal transforme le groupe $\mathrm{-CHO}$ en $\mathrm{-CH_2OH}$ et conduit au propan-1-ol.`,
    choiceExplanations: [
      `$\mathrm{NaBH_4}$ est le réducteur doux indiqué pour les aldéhydes.`,
      `Le squelette à trois carbones est conservé et l'alcool reste terminal.`,
      `Le carbone fonctionnel n'est lié qu'à un seul autre carbone.`,
      `Le propan-2-ol résulterait de la réduction de la propanone.`,
    ],
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant la réduction du composé **C** :`,
    choices: [
      `$\mathrm{NaBH_4}$ peut être utilisé selon la fiche.`,
      `Le produit attendu est le propan-2-ol.`,
      `Le produit est un alcool secondaire.`,
      `Le produit est un alcool primaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La propanone est une cétone : sa réduction par $\mathrm{NaBH_4}$ conduit au propan-2-ol, dont le carbone fonctionnel est lié à deux carbones.`,
    choiceExplanations: [
      `$\mathrm{NaBH_4}$ est le réducteur cité pour les cétones.`,
      `Le groupe carbonyle central devient un groupe $\mathrm{-CH(OH)-}$.`,
      `Le carbone fonctionnel reste lié aux deux groupes méthyle.`,
      `Un alcool primaire aurait un carbone fonctionnel lié à un seul carbone.`,
    ],
  },
  {
    order: 21,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `À propos des organomagnésiens utilisés pour préparer des alcools :`,
    choices: [
      `Leur formule générale peut s'écrire $\mathrm{RMgX}$.`,
      `Le groupe carboné $\mathrm{R}$ est transféré sur le carbone du groupe carbonyle.`,
      `Une hydrolyse permet d'obtenir l'alcool final.`,
      `Un organomagnésien est lui-même un alcool.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'organomagnésien apporte un nouveau fragment carboné au carbone électrophile du groupe carbonyle. L'intermédiaire formé est ensuite hydrolysé pour donner l'alcool.`,
    choiceExplanations: [
      `$\mathrm{R}$ est un radical carboné, $\mathrm{Mg}$ le magnésium et $\mathrm{X}$ un halogène.`,
      `Cette étape forme une nouvelle liaison carbone-carbone.`,
      `L'hydrolyse transforme l'intermédiaire oxygéné en groupe hydroxyle.`,
      `Il s'agit d'un réactif organométallique, non d'un alcool.`,
    ],
  },
  {
    order: 22,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Après hydrolyse, l'addition d'un organomagnésien sur un aldéhyde conduit selon la fiche à :`,
    choices: [
      `Un alcool secondaire.`,
      `La formation d'une nouvelle liaison carbone-carbone.`,
      `Un carbone fonctionnel lié aux deux fragments carbonés issus de l'aldéhyde et de l'organomagnésien.`,
      `Un alcool tertiaire dans tous les cas.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le carbone de l'aldéhyde est initialement lié à un hydrogène et à un groupe carboné. L'ajout du groupe de l'organomagnésien lui donne deux voisins carbonés : l'alcool obtenu est secondaire.`,
    choiceExplanations: [
      `Deux substituants carbonés entourent le carbone portant $\mathrm{-OH}$.`,
      `Le fragment $\mathrm{R'}$ de l'organomagnésien se lie au carbone carbonylé.`,
      `Le produit conserve le groupe de l'aldéhyde et reçoit celui de l'organomagnésien.`,
      `Trois voisins carbonés seraient nécessaires pour obtenir un alcool tertiaire.`,
    ],
  },
  {
    order: 23,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Après hydrolyse, l'addition d'un organomagnésien sur une cétone :`,
    choices: [
      `Conduit à un alcool tertiaire.`,
      `Ajoute un troisième substituant carboné au carbone du groupe carbonyle.`,
      `Conduit nécessairement à un alcool secondaire.`,
      `Implique la formation d'une liaison carbone-carbone.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Le carbone carbonylé d'une cétone est déjà lié à deux groupes carbonés. L'organomagnésien en ajoute un troisième : l'alcool final est tertiaire.`,
    choiceExplanations: [
      `Le carbone portant $\mathrm{-OH}$ possède finalement trois voisins carbonés.`,
      `Le groupe $\mathrm{R}$ de l'organomagnésien devient le troisième substituant.`,
      `Une cétone ne conduit pas à un alcool secondaire dans cette addition.`,
      `Le groupe organique du réactif se fixe directement sur le carbone carbonylé.`,
    ],
  },
  {
    order: 24,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Lorsqu'un ester réagit avec un organomagnésien puis subit une hydrolyse :`,
    choices: [
      `L'alcool final est tertiaire.`,
      `L'organomagnésien réagit deux fois avec l'ester.`,
      `On retrouve deux fois dans le produit le substituant apporté par l'organomagnésien.`,
      `Une seule addition d'organomagnésien suffit dans le bilan présenté par la fiche.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le cours insiste sur la double réaction de l'organomagnésien avec l'ester. Le carbone fonctionnel final porte le groupe acyle initial et deux groupes identiques issus du réactif.`,
    choiceExplanations: [
      `Le carbone portant $\mathrm{-OH}$ est finalement lié à trois groupes carbonés.`,
      `Deux équivalents du réactif sont incorporés dans le bilan simplifié.`,
      `Le même radical de l'organomagnésien apparaît deux fois autour du carbone fonctionnel.`,
      `Cette proposition contredit la double addition explicitement signalée dans la fiche.`,
    ],
  },
  {
    order: 25,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `On compare les réactions d'un même organomagnésien avec un aldéhyde, une cétone et un ester.`,
    choices: [
      `L'aldéhyde conduit à un alcool secondaire après hydrolyse.`,
      `La cétone conduit à un alcool tertiaire après hydrolyse.`,
      `L'ester conduit à un alcool tertiaire après double addition puis hydrolyse.`,
      `La nature du composé carbonylé ne change jamais la classe de l'alcool obtenu.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La classe du produit dépend du nombre initial de substituants carbonés du carbone carbonylé et du nombre d'additions de l'organomagnésien.`,
    choiceExplanations: [
      `L'aldéhyde apporte un groupe carboné et l'organomagnésien un second.`,
      `La cétone possède déjà deux groupes carbonés avant l'addition.`,
      `L'ester reçoit deux fois le substituant du réactif et donne un alcool tertiaire.`,
      `Les trois familles de substrats ne conduisent pas toutes à la même classe d'alcool.`,
    ],
  },
  {
    order: 26,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `On souhaite préparer le 2-méthylpropan-2-ol $\mathrm{(CH_3)_3C{-}OH}$ par addition d'un organomagnésien sur un composé carbonylé, puis hydrolyse.`,
    choices: [
      `La propanone $\mathrm{CH_3{-}CO{-}CH_3}$ peut constituer le composé carbonylé.`,
      `Le bromure de méthylmagnésium $\mathrm{CH_3MgBr}$ peut apporter le troisième groupe méthyle.`,
      `Le produit obtenu est un alcool tertiaire.`,
      `Un aldéhyde portant un seul groupe carboné conduirait directement à ce produit par une seule addition de $\mathrm{CH_3MgBr}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La propanone porte déjà deux groupes méthyle. L'addition d'un troisième groupe méthyle fourni par $\mathrm{CH_3MgBr}$ conduit, après hydrolyse, au tert-butanol.`,
    choiceExplanations: [
      `Son carbone carbonylé est lié à deux groupes méthyle.`,
      `Le groupe $\mathrm{CH_3}$ du réactif devient le troisième substituant.`,
      `Le carbone portant $\mathrm{-OH}$ est lié à trois carbones.`,
      `Une seule addition sur un aldéhyde donnerait seulement un alcool secondaire.`,
    ],
  },
  {
    order: 27,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question:
      `Le propanal $\mathrm{CH_3{-}CH_2{-}CHO}$ réagit avec le bromure de méthylmagnésium $\mathrm{CH_3MgBr}$, puis le milieu est hydrolysé.`,
    choices: [
      `Le produit comporte quatre atomes de carbone.`,
      `Le produit est le butan-2-ol $\mathrm{CH_3{-}CH(OH){-}CH_2{-}CH_3}$.`,
      `L'alcool obtenu est secondaire.`,
      `Le groupe méthyle supplémentaire provient de l'organomagnésien.`,
    ],
    correctChoiceIndexes: [0, 1, 2, 3],
    explanation:
      `Le groupe méthyle du réactif se fixe sur le carbone de l'aldéhyde. Celui-ci se retrouve lié à un groupe éthyle, un groupe méthyle, un hydrogène et le groupe hydroxyle.`,
    choiceExplanations: [
      `Les trois carbones du propanal sont complétés par le carbone du groupe méthyle transféré.`,
      `La chaîne obtenue correspond à $\mathrm{CH_3{-}CH_2{-}CH(OH){-}CH_3}$.`,
      `Le carbone fonctionnel possède deux voisins carbonés.`,
      `L'organomagnésien forme la nouvelle liaison carbone-carbone.`,
    ],
  },
  {
    order: 28,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant la réaction avec le composé **A** :`,
    choices: [
      `Le produit est le propan-2-ol.`,
      `L'alcool obtenu est secondaire.`,
      `Un groupe méthyle de l'organomagnésien est ajouté au carbone de l'aldéhyde.`,
      `L'alcool obtenu est tertiaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'éthanal apporte un groupe méthyle et un hydrogène autour du carbone carbonylé ; l'organomagnésien ajoute un second groupe méthyle. Le produit est donc le propan-2-ol.`,
    choiceExplanations: [
      `Le produit possède la structure $\mathrm{CH_3{-}CH(OH){-}CH_3}$.`,
      `Le carbone fonctionnel est lié à deux groupes méthyle.`,
      `Cette addition crée la seconde liaison entre le carbone fonctionnel et un groupe méthyle.`,
      `Trois groupes carbonés seraient nécessaires pour une fonction alcool tertiaire.`,
    ],
  },
  {
    order: 29,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant la réaction avec le composé **B** :`,
    choices: [
      `Le produit est le 2-méthylpropan-2-ol.`,
      `L'alcool obtenu est tertiaire.`,
      `Une nouvelle liaison carbone-carbone est formée.`,
      `Le produit est un alcool secondaire.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La propanone possède deux groupes méthyle autour du carbone carbonylé. L'organomagnésien en ajoute un troisième, ce qui donne le tert-butanol après hydrolyse.`,
    choiceExplanations: [
      `Le produit peut s'écrire $\mathrm{(CH_3)_3C{-}OH}$.`,
      `Le carbone fonctionnel est lié à trois groupes méthyle.`,
      `Le groupe méthyle du réactif se lie au carbone carbonylé.`,
      `Trois voisins carbonés excluent la classe secondaire.`,
    ],
  },
  {
    order: 30,
    difficulty: 'HARD',
    answerFormat: 'MULTIPLE',
    question: `Concernant la réaction avec le composé **C** :`,
    choices: [
      `L'organomagnésien intervient deux fois dans le bilan de la réaction.`,
      `Deux groupes méthyle provenant de $\mathrm{CH_3MgBr}$ se retrouvent sur le carbone fonctionnel.`,
      `Le produit final est le 2-méthylpropan-2-ol.`,
      `Le groupe éthoxy $\mathrm{-O{-}CH_2{-}CH_3}$ reste lié au carbone portant $\mathrm{-OH}$ dans le produit final.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `L'éthanoate d'éthyle fournit le groupe méthyle initial du carbone acyle. La double addition de $\mathrm{CH_3MgBr}$ ajoute deux autres groupes méthyle : le produit final est le tert-butanol.`,
    choiceExplanations: [
      `La particularité des esters est la double réaction avec l'organomagnésien.`,
      `Les deux additions apportent deux substituants identiques.`,
      `Le carbone fonctionnel est finalement lié à trois groupes méthyle.`,
      `Le groupe éthoxy est éliminé au cours du mécanisme et ne figure pas dans l'alcool final.`,
    ],
  },
];
