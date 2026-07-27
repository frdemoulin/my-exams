import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_A_ORDER = 1;

export const SECTION_A_DISCOVERY_QUIZ_SLUG = 'section-a-discovery-formes-isomerie';
export const SECTION_A_PRACTICE_QUIZ_SLUG = 'section-a-practice-formes-isomerie';

export const SECTION_A_DISCOVERY_QUESTION_ORDERS: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
export const SECTION_A_PRACTICE_QUESTION_ORDERS: number[] = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export const SECTION_A_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_A_DISCOVERY_QUIZ_SLUG,
    title: `Les différentes formes d'isomérie`,
    description:
      `Définir l'isomérie et reconnaître les isoméries fonctionnelle et de position, tout en distinguant la tautomérie.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_A_ORDER,
    questionOrders: SECTION_A_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 2,
    slug: SECTION_A_PRACTICE_QUIZ_SLUG,
    title: `Les différentes formes d'isomérie`,
    description:
      `Comparer des formules et des structures, classer les relations entre molécules et raisonner sur les équilibres tautomériques.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_A_ORDER,
    questionOrders: SECTION_A_PRACTICE_QUESTION_ORDERS,
  },
];

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de l'isomérie :`,
    choices: [
      `Deux isomères possèdent la même formule brute.`,
      `Deux isomères possèdent nécessairement la même formule développée.`,
      `Deux isomères peuvent présenter des propriétés pharmacologiques différentes.`,
      `Deux molécules de masses molaires différentes peuvent être isomères l'une de l'autre.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Des isomères ont la même composition atomique, donc la même formule brute et la même masse molaire, mais un agencement des atomes différent. Cette différence de structure peut modifier leurs propriétés physiques, chimiques ou pharmacologiques.`,
    choiceExplanations: [
      `La conservation de la formule brute constitue le critère indispensable de l'isomérie.`,
      `Des formules développées différentes permettent précisément de distinguer les isomères.`,
      `La structure influence les interactions d'une molécule avec une cible biologique.`,
      `Une formule brute identique impose une masse molaire identique.`,
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Deux molécules possèdent la même formule brute mais appartiennent à deux familles chimiques différentes. Dans le cadre du cours :`,
    choices: [
      `Elles peuvent être des isomères fonctionnels.`,
      `Elles sont nécessairement des isomères de position.`,
      `Leurs groupes caractéristiques peuvent être différents.`,
      `Elles doivent avoir des masses molaires différentes.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `L'isomérie fonctionnelle associe des molécules de même formule brute mais portant des fonctions chimiques différentes. Leur composition, et donc leur masse molaire, reste identique.`,
    choiceExplanations: [
      `C'est la définition de l'isomérie fonctionnelle retenue dans le chapitre.`,
      `L'isomérie de position conserve au contraire la même fonction chimique.`,
      `Une fonction aldéhyde peut par exemple être remplacée par une fonction cétone pour une même formule brute.`,
      `Une même formule brute correspond à une même masse molaire.`,
    ],
  },
  {
    order: 3,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Le propanal $\\mathrm{CH_3{-}CH_2{-}CHO}$ et la propanone $\\mathrm{CH_3{-}CO{-}CH_3}$ possèdent la formule brute $\\mathrm{C_3H_6O}$.`,
    choices: [
      `Le propanal appartient à la famille des aldéhydes.`,
      `La propanone appartient à la famille des cétones.`,
      `Ces deux molécules sont des isomères fonctionnels.`,
      `Ces deux molécules sont des isomères de position puisqu'il suffit de déplacer le groupe carbonyle.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le propanal porte un groupe carbonyle terminal caractéristique d'un aldéhyde, alors que celui de la propanone est situé entre deux carbones et caractérise une cétone. Le changement de famille chimique conduit à une isomérie fonctionnelle.`,
    choiceExplanations: [
      `Le motif terminal $\\mathrm{-CHO}$ est celui d'un aldéhyde.`,
      `Le motif $\\mathrm{-CO-}$ situé entre deux carbones est celui d'une cétone.`,
      `Même formule brute et fonctions différentes : il s'agit d'isomérie fonctionnelle.`,
      `La nature de la fonction change ; ce n'est donc pas une simple isomérie de position.`,
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `L'éthanol $\\mathrm{CH_3{-}CH_2{-}OH}$ et l'éther diméthylique $\\mathrm{CH_3{-}O{-}CH_3}$ ont tous deux pour formule brute $\\mathrm{C_2H_6O}$.`,
    choices: [
      `L'éthanol possède une fonction alcool.`,
      `L'éther diméthylique possède une fonction éther.`,
      `Ces deux molécules sont des isomères fonctionnels.`,
      `Ces deux molécules sont deux écritures d'un même équilibre tautomérique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La même formule brute peut correspondre ici à une fonction alcool ou à une fonction éther. Les deux structures sont distinctes et ne se transforment pas l'une en l'autre par un simple équilibre tautomérique.`,
    choiceExplanations: [
      `Le groupe $\\mathrm{-OH}$ porté par un carbone saturé caractérise un alcool.`,
      `Un oxygène lié à deux groupes carbonés caractérise un éther.`,
      `Les deux fonctions diffèrent alors que la formule brute reste identique.`,
      `La tautomérie implique un réarrangement réversible particulier, notamment d'un proton et d'une liaison $\\pi$.`,
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de l'isomérie de position :`,
    choices: [
      `Les molécules comparées possèdent la même formule brute.`,
      `Elles conservent la même chaîne carbonée et la même fonction chimique.`,
      `La fonction ou un substituant occupe une position différente.`,
      `Elle impose nécessairement l'apparition d'une nouvelle famille chimique.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans l'isomérie de position, la nature de la chaîne et de la fonction est conservée ; seule la localisation de la fonction, d'une liaison multiple ou d'un substituant change.`,
    choiceExplanations: [
      `Comme pour toute isomérie, la formule brute doit être identique.`,
      `La fonction chimique reste la même, contrairement à l'isomérie fonctionnelle.`,
      `Le déplacement sur la chaîne constitue le coeur de cette isomérie.`,
      `Un changement de famille correspondrait à une isomérie fonctionnelle.`,
    ],
  },
  {
    order: 6,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `On compare le propan-1-ol $\\mathrm{CH_3{-}CH_2{-}CH_2{-}OH}$ et le propan-2-ol $\\mathrm{CH_3{-}CH(OH){-}CH_3}$.`,
    choices: [
      `Ils possèdent tous deux la formule brute $\\mathrm{C_3H_8O}$.`,
      `Ils appartiennent tous deux à la famille des alcools.`,
      `Ils sont isomères de position.`,
      `Ils sont isomères fonctionnels.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les deux molécules ont la même chaîne à trois carbones et la même fonction alcool. Seule la position du groupe $\\mathrm{-OH}$ change, du carbone 1 au carbone 2.`,
    choiceExplanations: [
      `Le décompte des atomes donne $\\mathrm{C_3H_8O}$ dans les deux cas.`,
      `Les deux structures contiennent le même groupe caractéristique alcool.`,
      `Le déplacement du groupe hydroxyle définit ici l'isomérie de position.`,
      `La fonction chimique ne change pas.`,
    ],
  },
  {
    order: 7,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Les hexan-1-ol, hexan-2-ol et hexan-3-ol sont trois alcools de formule brute $\\mathrm{C_6H_{14}O}$.`,
    choices: [
      `Ils possèdent la même chaîne carbonée non ramifiée.`,
      `Ils diffèrent par la position du groupe hydroxyle.`,
      `Ils constituent des isomères de position.`,
      `L'un d'eux est nécessairement un éther.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La chaîne à six carbones et la fonction alcool sont conservées. Le groupe hydroxyle se trouve respectivement sur les carbones 1, 2 ou 3.`,
    choiceExplanations: [
      `Le préfixe hexan- désigne la même chaîne principale saturée à six carbones.`,
      `Les indices 1, 2 et 3 localisent le groupe $\\mathrm{-OH}$.`,
      `La variation de l'indice de position sans changement de fonction correspond à une isomérie de position.`,
      `Les trois composés portent la terminaison -ol et sont des alcools.`,
    ],
  },
  {
    order: 8,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Dans le cadre du cours, la tautomérie :`,
    choices: [
      `Met en jeu deux formes d'une même molécule en équilibre.`,
      `Peut impliquer le déplacement d'un proton et d'une double liaison.`,
      `Doit être distinguée de l'isomérie fonctionnelle.`,
      `Associe toujours deux espèces de formules brutes différentes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La tautomérie correspond à un équilibre réversible entre deux formes structurales, souvent obtenu par déplacement d'un proton et réorganisation d'une liaison $\\pi$. Les deux formes conservent la même formule brute.`,
    choiceExplanations: [
      `Les formes tautomères peuvent coexister en proportions variables à l'équilibre.`,
      `C'est notamment le cas de la tautomérie céto-énolique.`,
      `Le support insiste sur cette distinction, même si les deux formes présentent des motifs fonctionnels différents.`,
      `Aucun atome n'est ajouté ni retiré lors de l'interconversion.`,
    ],
  },
  {
    order: 9,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `La propanone peut être en équilibre avec sa forme énolique $\\mathrm{CH_2{=}C(OH){-}CH_3}$. Concernant cet équilibre céto-énolique :`,
    choices: [
      `La forme cétonique contient un groupe carbonyle $\\mathrm{C{=}O}$.`,
      `La forme énolique contient à la fois une double liaison $\\mathrm{C{=}C}$ et un groupe $\\mathrm{-OH}$.`,
      `Les deux formes possèdent la même formule brute.`,
      `Le passage d'une forme à l'autre correspond à une simple rotation autour d'une liaison simple.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La tautomérie céto-énolique réorganise un proton et une double liaison : le motif carbonyle devient un motif alcène-alcool, sans changement de formule brute.`,
    choiceExplanations: [
      `La forme cétonique est caractérisée par le groupe $\\mathrm{C{=}O}$.`,
      `Le terme énol associe précisément alcène et alcool.`,
      `Les atomes sont conservés au cours de l'équilibre.`,
      `Une rotation ne déplace ni proton ni liaison double et ne produit pas un autre tautomère.`,
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des relations entre formule brute, fonction et position :`,
    choices: [
      `Une formule brute unique peut correspondre à plusieurs molécules.`,
      `Deux isomères de position appartiennent nécessairement à des familles chimiques différentes.`,
      `Deux isomères fonctionnels possèdent des fonctions chimiques différentes.`,
      `Deux formes tautomères doivent être considérées comme deux conformations obtenues par rotation autour d'une liaison $\\sigma$.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `La formule brute ne décrit pas l'enchaînement des atomes. Une même composition peut donc conduire à plusieurs structures, reliées notamment par isomérie fonctionnelle ou de position. La tautomérie implique une réorganisation de liaisons, et non une simple rotation conformationnelle.`,
    choiceExplanations: [
      `C'est précisément ce que montre l'existence des isomères.`,
      `Ils conservent la même fonction et diffèrent par sa localisation.`,
      `Le changement de fonction définit l'isomérie fonctionnelle.`,
      `Une conformation résulte d'une rotation autour d'une liaison simple, sans modification de la connectivité.`,
    ],
  },
  {
    order: 11,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Parmi les couples suivants, lesquels sont constitués de molécules isomères ?`,
    choices: [
      `Le butan-1-ol $\\mathrm{C_4H_{10}O}$ et l'éthoxyéthane $\\mathrm{C_4H_{10}O}$.`,
      `Le butan-1-ol $\\mathrm{C_4H_{10}O}$ et le butan-2-ol $\\mathrm{C_4H_{10}O}$.`,
      `Le propanal $\\mathrm{C_3H_6O}$ et le propan-1-ol $\\mathrm{C_3H_8O}$.`,
      `Le butane $\\mathrm{C_4H_{10}}$ et le but-1-ène $\\mathrm{C_4H_8}$.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Deux molécules ne peuvent être isomères que si leurs formules brutes sont identiques. Les deux premiers couples remplissent ce critère, contrairement aux deux derniers.`,
    choiceExplanations: [
      `Même formule brute, mais fonctions alcool et éther différentes : ce sont des isomères fonctionnels.`,
      `Même formule brute et même fonction alcool, placée différemment : ce sont des isomères de position.`,
      `Les nombres d'hydrogènes diffèrent : ces molécules ne sont pas isomères.`,
      `Les formules brutes diffèrent de deux hydrogènes.`,
    ],
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `La formule brute $\\mathrm{C_3H_6O}$ peut correspondre à plusieurs structures. Parmi les propositions suivantes, lesquelles sont compatibles avec cette formule ?`,
    choices: [
      `Le propanal $\\mathrm{CH_3{-}CH_2{-}CHO}$.`,
      `La propanone $\\mathrm{CH_3{-}CO{-}CH_3}$.`,
      `L'alcool allylique $\\mathrm{CH_2{=}CH{-}CH_2OH}$.`,
      `Le propan-1-ol $\\mathrm{CH_3{-}CH_2{-}CH_2OH}$.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le propanal, la propanone et l'alcool allylique contiennent chacun trois carbones, six hydrogènes et un oxygène. Le propan-1-ol est saturé et possède huit hydrogènes.`,
    choiceExplanations: [
      `Le décompte conduit à $\\mathrm{C_3H_6O}$.`,
      `Le décompte conduit également à $\\mathrm{C_3H_6O}$.`,
      `La double liaison réduit de deux le nombre d'hydrogènes par rapport au propan-1-ol.`,
      `Sa formule brute est $\\mathrm{C_3H_8O}$.`,
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On compare le propanal et la propanone. Quelle démarche permet de classer correctement leur relation ?`,
    choices: [
      `Vérifier d'abord qu'ils ont la même formule brute.`,
      `Constater que leurs groupes carbonyles occupent des environnements différents.`,
      `Conclure à une isomérie de position parce que le nombre d'atomes est identique.`,
      `Identifier une fonction aldéhyde pour l'un et une fonction cétone pour l'autre.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Après vérification de la formule brute, il faut comparer les fonctions. Un carbonyle terminal lié à un hydrogène appartient à un aldéhyde ; un carbonyle lié à deux carbones appartient à une cétone. La relation est donc une isomérie fonctionnelle.`,
    choiceExplanations: [
      `Sans formule brute identique, aucune relation d'isomérie n'est possible.`,
      `L'environnement du carbone carbonylé permet de distinguer aldéhyde et cétone.`,
      `Le simple maintien de la formule brute ne suffit pas à conclure à une isomérie de position.`,
      `Le changement de famille chimique est le critère décisif.`,
    ],
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le 1-chloropropane $\\mathrm{CH_3{-}CH_2{-}CH_2Cl}$ et le 2-chloropropane $\\mathrm{CH_3{-}CHCl{-}CH_3}$ :`,
    choices: [
      `Possèdent la même formule brute $\\mathrm{C_3H_7Cl}$.`,
      `Ont la même chaîne carbonée.`,
      `Diffèrent par la position de l'atome de chlore.`,
      `Sont des isomères fonctionnels.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La chaîne propane et la nature du substituant chlore sont conservées. Seul l'indice de position change : il s'agit d'une isomérie de position.`,
    choiceExplanations: [
      `Les deux structures contiennent trois carbones, sept hydrogènes et un chlore.`,
      `Dans les deux cas, le squelette carboné est celui du propane.`,
      `Le chlore est porté par le carbone 1 ou le carbone 2.`,
      `Aucune nouvelle fonction chimique n'apparaît.`,
    ],
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On compare le but-1-ène $\\mathrm{CH_2{=}CH{-}CH_2{-}CH_3}$ et le but-2-ène $\\mathrm{CH_3{-}CH{=}CH{-}CH_3}$.`,
    choices: [
      `Ils possèdent tous deux la formule brute $\\mathrm{C_4H_8}$.`,
      `Ils diffèrent par la position de la double liaison.`,
      `Ils constituent des isomères de position.`,
      `Ils appartiennent à deux familles chimiques différentes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les deux molécules sont des alcènes à quatre carbones. La double liaison commence au carbone 1 ou au carbone 2, sans changement de famille chimique.`,
    choiceExplanations: [
      `Un alcène acyclique à quatre carbones possède ici la formule $\\mathrm{C_4H_8}$.`,
      `Les indices 1 et 2 repèrent la localisation de la liaison multiple.`,
      `Le déplacement de la double liaison sur la même chaîne relève de l'isomérie de position.`,
      `Les deux molécules appartiennent à la famille des alcènes.`,
    ],
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Le propan-1-ol $\\mathrm{CH_3{-}CH_2{-}CH_2OH}$, le propan-2-ol $\\mathrm{CH_3{-}CH(OH){-}CH_3}$ et le méthoxyéthane $\\mathrm{CH_3{-}O{-}CH_2{-}CH_3}$ possèdent tous la formule brute $\\mathrm{C_3H_8O}$.`,
    choices: [
      `Le propan-1-ol et le propan-2-ol sont isomères de position.`,
      `Le propan-1-ol et le méthoxyéthane sont isomères fonctionnels.`,
      `Le propan-2-ol et le méthoxyéthane appartiennent à la même famille chimique.`,
      `Les trois molécules ont la même masse molaire.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Les deux propanols ne diffèrent que par la position du groupe hydroxyle. Le méthoxyéthane est un éther : il est isomère fonctionnel des deux alcools. La formule brute commune impose une même masse molaire.`,
    choiceExplanations: [
      `Même chaîne, même fonction, position différente du groupe $\\mathrm{-OH}$.`,
      `Les fonctions alcool et éther sont différentes.`,
      `Le propan-2-ol est un alcool tandis que le méthoxyéthane est un éther.`,
      `La masse molaire dépend de la formule brute, identique ici.`,
    ],
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant un équilibre tautomérique céto-énolique :`,
    choices: [
      `La transformation est réversible.`,
      `Elle peut déplacer simultanément un proton et une liaison $\\pi$.`,
      `La forme cétonique et la forme énolique ont des formules brutes différentes.`,
      `Les proportions des deux formes peuvent dépendre des conditions expérimentales.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Un équilibre tautomérique est dynamique et réversible. Il conserve la formule brute, mais sa position peut dépendre notamment du solvant, de la température ou d'autres conditions expérimentales.`,
    choiceExplanations: [
      `Le symbole d'équilibre traduit le passage possible dans les deux sens.`,
      `Le proton et les électrons de la double liaison sont réorganisés.`,
      `Les mêmes atomes sont présents avant et après la transformation.`,
      `Comme tout équilibre chimique, sa composition peut varier avec les conditions.`,
    ],
  },
  {
    order: 18,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `L'uracile peut être représenté sous des formes lactame et lactime en équilibre. Dans le cadre du cours :`,
    choices: [
      `Ces formes illustrent une tautomérie.`,
      `Le passage d'une forme à l'autre implique une réorganisation de protons et de liaisons doubles.`,
      `Les différentes formes possèdent la même formule brute.`,
      `Elles doivent être classées comme des isomères de position indépendants et sans équilibre entre eux.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les formes lactame et lactime de l'uracile sont des formes tautomères : elles partagent la même composition atomique et s'interconvertissent par déplacement de protons et réorganisation des liaisons $\\pi$.`,
    choiceExplanations: [
      `L'exemple illustre une tautomérie pertinente pour certaines bases azotées.`,
      `La connectivité des hydrogènes et la localisation des doubles liaisons sont modifiées.`,
      `Aucun atome n'est gagné ou perdu lors de l'interconversion.`,
      `La présence d'un équilibre exclut cette description comme simples isomères de position indépendants.`,
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `En pharmacologie, deux composés de même formule brute peuvent présenter des effets différents. Cette observation s'explique notamment parce que :`,
    choices: [
      `Une même formule brute peut correspondre à des fonctions chimiques différentes.`,
      `La disposition et l'enchaînement des atomes influencent les interactions avec les cibles biologiques.`,
      `Une formule brute identique garantit une activité pharmacologique identique.`,
      `Des isomères possèdent nécessairement des masses molaires différentes.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les récepteurs et les enzymes reconnaissent des structures moléculaires précises. Une différence de fonction ou d'agencement atomique peut donc modifier l'affinité, l'activité ou le devenir d'un composé, malgré une formule brute identique.`,
    choiceExplanations: [
      `Des isomères fonctionnels peuvent porter des groupes caractéristiques très différents.`,
      `La structure détermine en partie les interactions moléculaires.`,
      `La formule brute ne suffit pas à prévoir l'activité biologique.`,
      `La formule brute commune impose au contraire la même masse molaire.`,
    ],
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour classer correctement la relation entre deux structures moléculaires :`,
    choices: [
      `Il faut d'abord comparer leurs formules brutes.`,
      `Si les formules brutes sont identiques et les fonctions différentes, une isomérie fonctionnelle est possible.`,
      `Si la chaîne et la fonction sont identiques mais que la fonction change de position, il peut s'agir d'isomérie de position.`,
      `Si deux formes sont en équilibre par déplacement d'un proton et d'une liaison $\\pi$, il s'agit nécessairement de deux conformères.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La démarche commence par la formule brute. On compare ensuite les fonctions, puis la chaîne et la position des groupes. Un équilibre avec déplacement d'un proton et d'une liaison $\\pi$ relève de la tautomérie, et non de la conformation.`,
    choiceExplanations: [
      `Une formule brute différente exclut immédiatement l'isomérie.`,
      `Le changement de fonction est le critère de l'isomérie fonctionnelle.`,
      `Le déplacement d'une fonction conservée sur la même chaîne caractérise l'isomérie de position.`,
      `Des conformères diffèrent par rotation autour d'une liaison simple sans réorganisation de la connectivité.`,
    ],
  },
];
