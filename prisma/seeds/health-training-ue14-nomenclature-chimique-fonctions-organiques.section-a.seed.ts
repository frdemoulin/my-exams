import type { SeedQuestion } from './health-training-ue14.shared';

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  {
    order: 1,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la nomenclature chimique :`,
    choices: [
      `Elle permet de désigner précisément les molécules.`,
      `Elle vise à faciliter la communication entre chimistes de langues différentes.`,
      `Elle repose uniquement sur les noms commerciaux des médicaments.`,
      `Elle est inutile pour les molécules de structure complexe.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La nomenclature chimique fournit un langage commun et précis. Elle permet d'identifier les composés indépendamment des noms usuels ou commerciaux.`,
    choiceExplanations: [
      `La fonction première de la nomenclature est de nommer les espèces chimiques sans ambiguïté.`,
      `Une nomenclature internationale facilite les échanges scientifiques.`,
      `Un nom commercial, comme celui d'un médicament, n'est pas un nom chimique officiel.`,
      `Plus une molécule est complexe, plus une désignation rigoureuse est utile.`,
    ],
  },
  {
    order: 2,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Une formule brute :`,
    choices: [
      `Indique la nature des éléments présents dans une molécule.`,
      `Indique le nombre d'atomes de chaque élément.`,
      `Permet toujours de connaître l'enchaînement exact des atomes.`,
      `Permet toujours d'identifier les fonctions chimiques présentes.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La formule brute décrit la composition élémentaire d'une molécule, mais pas nécessairement sa structure. Plusieurs molécules différentes peuvent partager une même formule brute.`,
    choiceExplanations: [
      `Les symboles chimiques renseignent sur la nature des éléments.`,
      `Les indices précisent le nombre d'atomes de chaque élément.`,
      `L'enchaînement des atomes nécessite une formule développée, semi-développée ou topologique.`,
      `Une même formule brute peut correspondre à des fonctions différentes.`,
    ],
  },
  {
    order: 3,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `L'éthanol, notamment utilisé dans les solutions hydroalcooliques, a pour formule brute $\\mathrm{C_2H_6O}$ ; cette même formule peut aussi correspondre à l'éther diméthylique $\\mathrm{CH_3{-}O{-}CH_3}$. Concernant cette formule brute :`,
    choices: [
      `Elle correspond à une molécule contenant deux atomes de carbone.`,
      `Elle correspond à une molécule contenant six atomes d'oxygène.`,
      `Elle suffit à distinguer l'éthanol de l'éther diméthylique.`,
      `Elle décrit la composition de la molécule sans préciser sa structure.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `$\\mathrm{C_2H_6O}$ indique deux carbones, six hydrogènes et un oxygène. Elle peut notamment correspondre à deux structures différentes : l'éthanol $\\mathrm{CH_3{-}CH_2{-}OH}$ et l'éther diméthylique $\\mathrm{CH_3{-}O{-}CH_3}$.`,
    choiceExplanations: [
      `L'indice 2 placé après $\\mathrm{C}$ indique deux atomes de carbone.`,
      `L'oxygène ne porte aucun indice : il n'y en a donc qu'un seul.`,
      `Ces deux molécules ont la même formule brute mais des structures différentes.`,
      `La formule brute ne donne pas l'ordre de liaison entre les atomes.`,
    ],
  },
  {
    order: 4,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les éléments suivants, lesquels sont fréquemment constitutifs de la matière organique ?`,
    choices: [
      `Le carbone.`,
      `L'hydrogène.`,
      `L'oxygène.`,
      `Le sodium.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les molécules organiques sont principalement constituées de carbone et d'hydrogène, souvent associés à l'oxygène, à l'azote, au soufre ou aux halogènes.`,
    choiceExplanations: [
      `Le carbone constitue l'ossature de la majorité des molécules organiques.`,
      `L'hydrogène est très fréquemment lié au carbone et aux hétéroatomes.`,
      `L'oxygène est présent dans de nombreuses fonctions organiques.`,
      `Le sodium peut être présent dans certains sels, mais il ne fait pas partie des éléments caractéristiques de base de la matière organique.`,
    ],
  },
  {
    order: 5,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Concernant les valences usuelles dans les molécules organiques neutres :`,
    choices: [
      `L'hydrogène est généralement monovalent.`,
      `L'oxygène est généralement divalent.`,
      `L'azote est généralement trivalent.`,
      `Le carbone est généralement divalent.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans les représentations usuelles, l'hydrogène forme une liaison, l'oxygène deux, l'azote trois et le carbone quatre.`,
    choiceExplanations: [
      `L'hydrogène forme habituellement une seule liaison covalente.`,
      `L'oxygène forme généralement deux liaisons simples ou une liaison double.`,
      `L'azote neutre forme habituellement trois liaisons.`,
      `Le carbone est classiquement tétravalent et forme quatre liaisons au total.`,
    ],
  },
  {
    order: 6,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question:
      `Le méthane $\\mathrm{CH_4}$, le méthanal $\\mathrm{H_2C{=}O}$ et le cyanure d'hydrogène $\\mathrm{HC\\equiv N}$ illustrent différentes possibilités de liaison autour d'un carbone. Un atome de carbone tétravalent peut donc former :`,
    choices: [
      `Quatre liaisons simples.`,
      `Une liaison double et deux liaisons simples.`,
      `Une liaison triple et une liaison simple.`,
      `Une seule liaison simple au maximum.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `La tétravalence du carbone signifie que la somme des ordres de liaison autour du carbone vaut généralement quatre : par exemple 4 liaisons simples dans $\\mathrm{CH_4}$, 1 liaison double et 2 simples dans $\\mathrm{H_2C{=}O}$, ou 1 liaison triple et 1 simple dans $\\mathrm{HC\\equiv N}$.`,
    choiceExplanations: [
      `Quatre liaisons simples correspondent à un total de quatre.`,
      `Une liaison double compte pour deux et deux liaisons simples pour deux autres.`,
      `Une liaison triple compte pour trois et une liaison simple pour une.`,
      `Une seule liaison simple ne satisfait pas la tétravalence usuelle du carbone neutre.`,
    ],
  },
  {
    order: 7,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La microanalyse chimique d'un composé pur permet :`,
    choices: [
      `D'identifier les éléments présents.`,
      `De déterminer le pourcentage massique de chaque élément.`,
      `De connaître directement la disposition spatiale des atomes.`,
      `De déterminer toujours la formule brute exacte sans autre information.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La microanalyse renseigne sur la composition élémentaire. Pour obtenir une formule brute sans ambiguïté, il faut généralement connaître aussi la masse molaire du composé.`,
    choiceExplanations: [
      `L'analyse élémentaire révèle quels éléments constituent le composé.`,
      `Elle fournit la part massique de chaque élément.`,
      `La disposition spatiale nécessite d'autres méthodes et représentations.`,
      `Sans masse molaire, on obtient souvent seulement une formule empirique ou une formule à un facteur multiplicatif près.`,
    ],
  },
  {
    order: 8,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question:
      `L'éthanol, notamment présent dans les solutions hydroalcooliques, a pour formule brute $\\mathrm{C_2H_6O}$. Données : $M_{\\mathrm{C}} = 12\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$, $M_{\\mathrm{H}} = 1\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et $M_{\\mathrm{O}} = 16\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. Quelle est sa masse molaire ?`,
    choices: [
      `$28\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `$44\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `$46\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `$92\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `La masse molaire est la somme des contributions de tous les atomes : $M = 2\\times12 + 6\\times1 + 1\\times16 = 46\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
    choiceExplanations: [
      `Cette valeur ne tient pas compte de tous les atomes de la formule.`,
      `$44\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ correspondrait par exemple à $\\mathrm{CO_2}$.`,
      `Le calcul correct donne $24 + 6 + 16 = 46\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `Cette valeur correspond au double de la masse molaire réelle.`,
    ],
  },
  {
    order: 9,
    difficulty: 'EASY',
    answerFormat: 'SINGLE',
    question:
      `Données : $M_{\\mathrm{C}} = 12\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et $M_{\\mathrm{O}} = 16\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. Dans le dioxyde de carbone $\\mathrm{CO_2}$, le pourcentage massique de carbone est environ égal à :`,
    choices: [
      `$12\\,\\%$.`,
      `$27\\,\\%$.`,
      `$50\\,\\%$.`,
      `$73\\,\\%$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `La masse molaire de $\\mathrm{CO_2}$ vaut $12 + 2\\times16 = 44\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. La part du carbone vaut donc $\\dfrac{12}{44}\\times100 \\approx 27\\,\\%$.`,
    choiceExplanations: [
      `Le nombre 12 est la masse atomique relative du carbone, pas son pourcentage massique dans $\\mathrm{CO_2}$.`,
      `$\\dfrac{12}{44}\\times100 \\approx 27\\,\\%$.`,
      `Le carbone ne représente pas la moitié de la masse du dioxyde de carbone.`,
      `Cette valeur correspond approximativement à la part massique totale de l'oxygène.`,
    ],
  },
  {
    order: 10,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Pour déterminer une formule brute à partir d'une microanalyse :`,
    choices: [
      `Les pourcentages massiques permettent d'établir les proportions relatives des éléments.`,
      `La connaissance de la masse molaire peut permettre de lever une ambiguïté.`,
      `La formule brute renseigne nécessairement sur la géométrie de la molécule.`,
      `Deux molécules différentes ne peuvent jamais avoir la même formule brute.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La microanalyse conduit d'abord aux rapports entre les nombres d'atomes. La masse molaire permet ensuite, lorsqu'elle est connue, de passer de la formule empirique à la formule brute exacte.`,
    choiceExplanations: [
      `On convertit les pourcentages en quantités de matière relatives pour obtenir les rapports atomiques.`,
      `Une formule empirique peut devoir être multipliée par un entier pour retrouver la formule brute.`,
      `La géométrie n'est pas indiquée par la seule formule brute.`,
      `Des isomères ont précisément la même formule brute mais des structures différentes.`,
    ],
  },
  {
    order: 11,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `�' propos de la formule semi-développée $\\mathrm{CH_3{-}CH(OH){-}CH_2{-}NH_2}$ :`,
    choices: [
      `Sa formule brute est $\\mathrm{C_3H_9NO}$.`,
      `Elle contient trois atomes de carbone et un atome d'azote.`,
      `Sa formule brute est $\\mathrm{C_3H_7NO}$.`,
      `Elle contient deux atomes d'oxygène.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Il faut compter tous les atomes, y compris les hydrogènes portés par les groupes $\\mathrm{OH}$ et $\\mathrm{NH_2}$. On obtient trois carbones, neuf hydrogènes, un azote et un oxygène.`,
    choiceExplanations: [
      `Le décompte conduit bien à $\\mathrm{C_3H_9NO}$.`,
      `Les trois groupes carbonés sont $\\mathrm{CH_3}$, $\\mathrm{CH}$ et $\\mathrm{CH_2}$.`,
      `Cette proposition oublie deux hydrogènes, notamment ceux portés par les hétéroatomes.`,
      `La molécule ne comporte qu'un seul atome d'oxygène, dans le groupe $\\mathrm{OH}$.`,
    ],
  },
  {
    order: 12,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `On compare le propan-1-ol $\\mathrm{CH_3{-}CH_2{-}CH_2{-}OH}$, le propan-2-ol $\\mathrm{CH_3{-}CH(OH){-}CH_3}$ et le méthoxyéthane $\\mathrm{CH_3{-}O{-}CH_2{-}CH_3}$.`,
    choices: [
      `Elles possèdent toutes la formule brute $\\mathrm{C_3H_8O}$.`,
      `La formule brute suffit à les distinguer les unes des autres.`,
      `Elles illustrent qu'une même composition élémentaire peut correspondre à plusieurs structures.`,
      `Elles possèdent des masses molaires différentes.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Les trois structures contiennent chacune trois carbones, huit hydrogènes et un oxygène. Elles ont donc la même formule brute et la même masse molaire, mais des enchaînements atomiques différents.`,
    choiceExplanations: [
      `Le comptage des atomes donne $\\mathrm{C_3H_8O}$ dans les trois cas.`,
      `La formule brute est identique ; elle ne permet donc pas de les distinguer.`,
      `Ces molécules constituent un exemple de structures différentes partageant une même formule brute.`,
      `Une même formule brute implique une même masse molaire.`,
    ],
  },
  {
    order: 13,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Concernant la validité des représentations suivantes pour des molécules neutres usuelles :`,
    choices: [
      `Dans $\\mathrm{CH_3{-}O{-}CH_3}$, l'oxygène forme deux liaisons simples, ce qui respecte sa divalence usuelle.`,
      `Dans $\\mathrm{CH_3{-}NH_2}$, l'azote forme trois liaisons, ce qui respecte sa trivalence usuelle.`,
      `Un carbone neutre portant cinq liaisons simples respecte sa tétravalence.`,
      `Un hydrogène neutre peut former simultanément deux liaisons covalentes simples.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Les valences usuelles constituent un moyen rapide de vérifier une structure : H forme généralement une liaison, O deux, N trois et C quatre.`,
    choiceExplanations: [
      `L'oxygène est lié aux deux carbones par deux liaisons simples.`,
      `L'azote est lié au carbone et à deux hydrogènes, soit trois liaisons.`,
      `Cinq liaisons dépassent la tétravalence usuelle du carbone neutre.`,
      `L'hydrogène est monovalent dans les molécules organiques usuelles.`,
    ],
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question:
      `Données : $M_{\\mathrm{C}} = 12\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$, $M_{\\mathrm{H}} = 1\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et $M_{\\mathrm{O}} = 16\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. Quelle est la masse molaire de l'acide éthanoïque $\\mathrm{C_2H_4O_2}$ ?`,
    choices: [
      `$44\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `$46\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `$60\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `$76\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `La masse molaire vaut $2\\times12 + 4\\times1 + 2\\times16 = 24 + 4 + 32 = 60\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
    choiceExplanations: [
      `Cette valeur correspond à la masse molaire du dioxyde de carbone.`,
      `Cette valeur correspond à celle de l'éthanol $\\mathrm{C_2H_6O}$.`,
      `Le calcul complet conduit à $60\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `Cette valeur résulte d'un décompte incorrect des atomes.`,
    ],
  },
  {
    order: 15,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Un glucide impliqué dans le métabolisme énergétique possède une formule empirique $\\mathrm{CH_2O}$ et une masse molaire de $180\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. Données : $M_{\\mathrm{C}} = 12\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$, $M_{\\mathrm{H}} = 1\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et $M_{\\mathrm{O}} = 16\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
    choices: [
      `La masse molaire de l'unité empirique $\\mathrm{CH_2O}$ vaut $30\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `La formule brute est $\\mathrm{C_6H_{12}O_6}$.`,
      `La formule brute est nécessairement identique à la formule empirique.`,
      `Le facteur multiplicatif entre formule empirique et formule brute vaut 3.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `L'unité $\\mathrm{CH_2O}$ a une masse molaire de $12 + 2 + 16 = 30\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. Le rapport $180/30 = 6$ conduit à la formule brute $\\mathrm{C_6H_{12}O_6}$.`,
    choiceExplanations: [
      `Le calcul donne bien $30\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `Chaque indice de la formule empirique est multiplié par 6.`,
      `La formule brute peut être un multiple entier de la formule empirique.`,
      `Le facteur vaut 6, et non 3.`,
    ],
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question:
      `La microanalyse d'un glucide donne : $\\mathrm{C} = 40{,}0\\,\\%$, $\\mathrm{H} = 6{,}7\\,\\%$ et $\\mathrm{O} = 53{,}3\\,\\%$. Quelle est sa formule empirique ? Données : $M_{\\mathrm{C}} = 12\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$, $M_{\\mathrm{H}} = 1\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et $M_{\\mathrm{O}} = 16\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
    choices: [
      `$\\mathrm{CHO}$.`,
      `$\\mathrm{CH_2O}$.`,
      `$\\mathrm{C_2H_2O}$.`,
      `$\\mathrm{C_2H_4O_2}$.`,
    ],
    correctChoiceIndexes: [1],
    explanation:
      `Pour $100\\,\\mathrm{g}$ de composé : $n(\\mathrm{C}) = 40/12 \\approx 3{,}33$, $n(\\mathrm{H}) = 6{,}7/1 = 6{,}7$ et $n(\\mathrm{O}) = 53{,}3/16 \\approx 3{,}33$. En divisant par la plus petite valeur, on obtient le rapport $1:2:1$, soit $\\mathrm{CH_2O}$.`,
    choiceExplanations: [
      `Le rapport hydrogène/carbone est proche de 2, et non de 1.`,
      `Les rapports molaires conduisent à $1:2:1$.`,
      `Cette proposition ne respecte pas les rapports obtenus.`,
      `Cette formule a la même formule empirique, mais ce n'est pas la formule empirique réduite demandée.`,
    ],
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la microanalyse et de la détermination d'une formule brute :`,
    choices: [
      `La pureté de l'échantillon est importante pour obtenir des pourcentages fiables.`,
      `La microanalyse fournit directement la géométrie tridimensionnelle de la molécule.`,
      `Sans connaître la masse molaire, plusieurs formules brutes peuvent correspondre à une même formule empirique.`,
      `La somme des pourcentages massiques mesurés doit être proche de $100\\,\\%$ si tous les éléments ont été pris en compte.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `La microanalyse donne une composition massique. Elle suppose un échantillon suffisamment pur et permet d'établir une formule empirique. La masse molaire est souvent nécessaire pour obtenir la formule brute exacte.`,
    choiceExplanations: [
      `Des impuretés modifieraient les proportions mesurées.`,
      `La géométrie nécessite d'autres méthodes expérimentales ou représentations.`,
      `Par exemple, $\\mathrm{CH_2O}$ peut conduire à $\\mathrm{C_2H_4O_2}$, $\\mathrm{C_3H_6O_3}$, etc.`,
      `Une somme très différente de $100\\,\\%$ signale généralement un élément non pris en compte ou une erreur expérimentale.`,
    ],
  },
  {
    order: 18,
    difficulty: 'MEDIUM',
    answerFormat: 'SINGLE',
    question:
      `L'urée, déchet azoté produit par le foie puis éliminé dans les urines, a pour formule brute $\\mathrm{CH_4N_2O}$. Données : $M_{\\mathrm{C}} = 12\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$, $M_{\\mathrm{H}} = 1\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$, $M_{\\mathrm{N}} = 14\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et $M_{\\mathrm{O}} = 16\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. Le pourcentage massique d'azote vaut environ :`,
    choices: [
      `$23\\,\\%$.`,
      `$40\\,\\%$.`,
      `$47\\,\\%$.`,
      `$70\\,\\%$.`,
    ],
    correctChoiceIndexes: [2],
    explanation:
      `La masse molaire de l'urée vaut $12 + 4 + 2\\times14 + 16 = 60\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. L'azote représente $28/60\\times100 \\approx 46{,}7\\,\\%$.`,
    choiceExplanations: [
      `Cette valeur correspond approximativement à la moitié de la contribution réelle de l'azote.`,
      `La contribution de l'azote dépasse $40\\,\\%$.`,
      `Le calcul donne environ $46{,}7\\,\\%$, soit $47\\,\\%$.`,
      `L'azote ne représente pas $70\\,\\%$ de la masse totale.`,
    ],
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question:
      `Une microanalyse conduit à la formule empirique $\\mathrm{C_2H_4O}$. La masse molaire mesurée est $88\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. Données : $M_{\\mathrm{C}} = 12\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$, $M_{\\mathrm{H}} = 1\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$ et $M_{\\mathrm{O}} = 16\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
    choices: [
      `La masse molaire de $\\mathrm{C_2H_4O}$ vaut $44\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `La formule brute est $\\mathrm{C_4H_8O_2}$.`,
      `La formule brute est $\\mathrm{C_2H_4O}$.`,
      `Le facteur multiplicatif vaut 4.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `La masse molaire de la formule empirique vaut $2\\times12 + 4\\times1 + 16 = 44\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$. Comme $88/44 = 2$, la formule brute est $\\mathrm{C_4H_8O_2}$.`,
    choiceExplanations: [
      `Le calcul donne bien $44\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `Tous les indices sont multipliés par 2.`,
      `Cette formule aurait une masse molaire de seulement $44\\,\\mathrm{g}\\cdot\\mathrm{mol}^{-1}$.`,
      `Le facteur multiplicatif vaut 2.`,
    ],
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour vérifier la cohérence d'une formule développée ou semi-développée d'une molécule organique neutre :`,
    choices: [
      `On peut contrôler que chaque carbone totalise généralement quatre liaisons.`,
      `On peut contrôler que chaque oxygène totalise généralement deux liaisons.`,
      `On peut ignorer les hydrogènes portés par les hétéroatomes lors du calcul de la formule brute.`,
      `La formule brute suffit toujours à vérifier la position exacte de chaque liaison.`,
    ],
    correctChoiceIndexes: [0, 1],
    explanation:
      `Le contrôle des valences usuelles aide à repérer rapidement une représentation impossible. Pour établir la formule brute, il faut compter tous les atomes, y compris les hydrogènes liés à l'oxygène, à l'azote ou au soufre.`,
    choiceExplanations: [
      `La tétravalence du carbone constitue un contrôle essentiel.`,
      `La divalence usuelle de l'oxygène permet de vérifier ses liaisons.`,
      `Ces hydrogènes appartiennent pleinement à la formule brute.`,
      `La formule brute ne décrit ni l'ordre ni la position des liaisons.`,
    ],
  },
];
