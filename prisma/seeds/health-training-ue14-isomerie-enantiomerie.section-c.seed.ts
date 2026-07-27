import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_C_ORDER = 3;

export const SECTION_C_DISCOVERY_QUIZ_SLUG =
  'section-c-discovery-chiralite-enantiomeres-diastereoisomeres';
export const SECTION_C_PRACTICE_QUIZ_SLUG =
  'section-c-practice-chiralite-enantiomeres-diastereoisomeres';

export const SECTION_C_DISCOVERY_QUESTION_ORDERS: number[] = [
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];
export const SECTION_C_PRACTICE_QUESTION_ORDERS: number[] = [
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
];

const FIGURE_BASE_PATH = '/images/training/ue14/isomerie-enantiomerie';

export const SECTION_C_QUIZZES: SeedQuiz[] = [
  {
    order: 1,
    slug: SECTION_C_DISCOVERY_QUIZ_SLUG,
    title: `Chiralité, énantiomères et diastéréoisomères`,
    description: `Identifier un carbone asymétrique, reconnaître une molécule chirale et distinguer des énantiomères de molécules identiques.`,
    stage: 'DISCOVER',
    sectionOrder: SECTION_C_ORDER,
    questionOrders: SECTION_C_DISCOVERY_QUESTION_ORDERS,
  },
  {
    order: 2,
    slug: SECTION_C_PRACTICE_QUIZ_SLUG,
    title: `Chiralité, énantiomères et diastéréoisomères`,
    description: `Raisonner sur des molécules à plusieurs centres asymétriques, distinguer énantiomères, diastéréoisomères et composés méso.`,
    stage: 'PRACTICE',
    sectionOrder: SECTION_C_ORDER,
    questionOrders: SECTION_C_PRACTICE_QUESTION_ORDERS,
  },
];

export const SECTION_C_QUESTIONS: SeedQuestion[] = [
  {
    order: 41,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos de la chiralité :`,
    choices: [
      `Une molécule chirale n'est pas superposable à son image dans un miroir.`,
      `La chiralité se réduit toujours à la présence d'une double liaison $\\mathrm{C{=}C}$.`,
      `Deux molécules images l'une de l'autre dans un miroir peuvent être énantiomères.`,
      `Une molécule chirale est nécessairement superposable à son image dans un miroir après une simple rotation dans l'espace.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Une molécule chirale n'est pas superposable à son image dans un miroir. Dans le cadre du cours, cette propriété est le plus souvent reliée à la présence d'un carbone asymétrique.`,
    choiceExplanations: [
      `C'est la définition opérationnelle de la chiralité.`,
      `Une double liaison peut conduire à une isomérie géométrique, mais elle n'est pas le support usuel de la chiralité étudiée ici.`,
      `Deux images miroir non superposables constituent un couple d'énantiomères.`,
      `Si une simple rotation permettait la superposition, la molécule ne serait pas chirale.`,
    ],
  },
  {
    order: 42,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Dans le cadre du chapitre, un carbone asymétrique $C^{*}$ est classiquement :`,
    choices: [
      `un carbone tétraédrique portant quatre substituants différents.`,
      `un carbone nécessairement engagé dans une double liaison.`,
      `un carbone pouvant être à l'origine d'une chiralité moléculaire.`,
      `un carbone portant obligatoirement deux substituants identiques.`,
    ],
    correctChoiceIndexes: [0, 2],
    explanation:
      `Le cours introduit le carbone asymétrique comme un carbone tétraédrique, donc de type $\mathrm{sp^3}$, lié à quatre substituants différents.`,
    choiceExplanations: [
      `C'est la définition attendue au niveau du cours.`,
      `Un carbone engagé dans une double liaison est trigonal plan et n'est pas un carbone asymétrique au sens classique.`,
      `Un tel centre stéréogène peut rendre la molécule chirale.`,
      `La présence de deux substituants identiques exclut justement l'asymétrie du carbone.`,
    ],
  },
  {
    order: 43,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous présente quatre centres candidats A à D.

![Centres candidats A à D](${FIGURE_BASE_PATH}/figure-c1-centres-candidats.svg)

�' propos des centres repérés A à D :`,
    choices: [
      `Le centre A est un carbone asymétrique.`,
      `Le centre B est un carbone asymétrique.`,
      `Le centre C n'est pas un carbone asymétrique car il porte deux hydrogènes.`,
      `Le centre D n'est pas un carbone asymétrique car il est engagé dans une double liaison.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Dans la figure, seul A porte quatre substituants différents. Le centre B possède deux groupes méthyle identiques, C porte deux hydrogènes, et D est un carbone d'alcène.`,
    choiceExplanations: [
      `A est lié à H, OH, CH3 et Cl : les quatre substituants sont différents.`,
      `B n'est pas asymétrique car deux substituants sont identiques.`,
      `Deux hydrogènes identiques empêchent l'asymétrie.`,
      `Un carbone d'alcène est trigonal plan et n'est pas un carbone asymétrique de type $\mathrm{sp^3}$.`,
    ],
  },
  {
    order: 44,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous compare la glycine et l'alanine.

![Glycine et alanine](${FIGURE_BASE_PATH}/figure-c2-glycine-alanine.svg)

�' propos de ces deux acides aminés :`,
    choices: [
      `La glycine ne possède pas de carbone asymétrique au niveau du carbone $\alpha$.`,
      `L'alanine possède un carbone asymétrique au niveau du carbone $\alpha$.`,
      `La glycine et l'alanine sont toutes deux achirales pour la même raison.`,
      `La présence d'un groupe méthyle à la place d'un hydrogène explique la différence entre glycine et alanine.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Dans la glycine, le carbone $\alpha$ porte deux hydrogènes : il n'est donc pas asymétrique. Dans l'alanine, ce même carbone porte H, NH2, COOH et CH3 : les quatre substituants sont différents.`,
    choiceExplanations: [
      `La glycine est l'acide aminé usuel sans carbone asymétrique au niveau du carbone $\alpha$.`,
      `L'alanine possède bien quatre substituants différents autour de son carbone $\alpha$.`,
      `L'alanine est chirale, contrairement à la glycine.`,
      `Le remplacement d'un H par CH3 supprime la répétition de deux hydrogènes sur le carbone $\alpha$.`,
    ],
  },
  {
    order: 45,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous montre deux molécules X et Y, images l'une de l'autre dans un miroir.

![Deux molécules images dans un miroir](${FIGURE_BASE_PATH}/figure-c3-images-miroir.svg)

�' propos de X et Y :`,
    choices: [
      `X et Y ont la même formule brute.`,
      `X et Y ont la même connectivité.`,
      `Si X et Y ne sont pas superposables, elles constituent un couple d'énantiomères.`,
      `Deux images miroir sont toujours superposables, donc X et Y sont nécessairement identiques.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Des énantiomères ont la même formule brute et la même connectivité ; seule leur disposition spatiale diffère. La relation d'image dans le miroir n'implique pas la superposabilité.`,
    choiceExplanations: [
      `La composition atomique est inchangée.`,
      `La constitution est la même pour des énantiomères.`,
      `C'est précisément la définition d'un couple d'énantiomères.`,
      `Deux images miroir peuvent être non superposables lorsqu'il existe une chiralité.`,
    ],
  },
  {
    order: 46,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de la figure précédente :`,
    choices: [
      `X et Y peuvent être qualifiées de stéréoisomères.`,
      `X et Y sont des diastéréoisomères.`,
      `X et Y peuvent être deux molécules identiques si une rotation dans l'espace suffit à les superposer.`,
      `Dans le cas présenté, le cours conduit à les considérer comme énantiomères.`,
    ],
    correctChoiceIndexes: [0, 3],
    explanation:
      `Les deux molécules de la figure précédente sont présentées comme images l'une de l'autre dans le miroir et non superposables : ce sont donc des stéréoisomères particuliers, les énantiomères.`,
    choiceExplanations: [
      `Tous les énantiomères sont des stéréoisomères.`,
      `Des diastéréoisomères ne sont pas images l'un de l'autre dans un miroir.`,
      `Dans la situation représentée, la non-superposabilité exclut l'identité.`,
      `La figure a précisément été choisie pour illustrer l'énantiomérie.`,
    ],
  },
  {
    order: 47,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des énantiomères :`,
    choices: [
      `Ils ont la même formule brute.`,
      `Ils ont le même enchaînement des atomes.`,
      `Ils diffèrent uniquement par l'agencement spatial.`,
      `Ils appartiennent nécessairement à deux familles chimiques différentes.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Les énantiomères sont deux stéréoisomères de même constitution, images l'un de l'autre dans un miroir et non superposables.`,
    choiceExplanations: [
      `Ils possèdent la même composition atomique.`,
      `Le squelette moléculaire est identique.`,
      `La seule différence porte sur la disposition dans l'espace.`,
      `La famille chimique ne change pas entre deux énantiomères.`,
    ],
  },
  {
    order: 48,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `Parmi les affirmations suivantes sur les molécules chirales et achirales :`,
    choices: [
      `Une molécule possédant un carbone asymétrique est, dans le cadre du cours, généralement chirale.`,
      `Une molécule possédant un plan de symétrie est généralement achirale.`,
      `Une molécule sans carbone asymétrique est nécessairement chirale.`,
      `Une molécule peut être achirale bien qu'elle comporte plusieurs centres asymétriques.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La présence d'un carbone asymétrique suggère une chiralité. Inversement, un plan de symétrie interne peut rendre la molécule achirale, y compris lorsqu'elle porte plusieurs centres asymétriques, comme dans un composé méso.`,
    choiceExplanations: [
      `C'est la situation de base étudiée dans le cours.`,
      `Un plan de symétrie interne s'oppose à la chiralité globale de la molécule.`,
      `L'absence de carbone asymétrique ne crée pas une chiralité par elle-même.`,
      `C'est précisément le cas des composés méso.`,
    ],
  },
  {
    order: 49,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos des notions de configuration et de conformation :`,
    choices: [
      `Deux conformères peuvent s'interconvertir par rotation autour d'une liaison simple.`,
      `Deux énantiomères ne s'obtiennent pas, en général, par simple rotation autour d'une liaison simple.`,
      `Il ne faut pas confondre conformation et configuration.`,
      `Deux molécules non superposables sont toujours de simples conformères.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Le cours insiste sur la distinction entre conformation, liée à des rotations autour de liaisons simples, et configuration, qui caractérise un arrangement spatial ne se modifiant pas sans rupture de liaisons.`,
    choiceExplanations: [
      `C'est le mécanisme classique d'interconversion conformationnelle.`,
      `L'énantiomérie relève de la configuration, pas d'une simple conformation.`,
      `C'est une remarque importante du chapitre.`,
      `Des molécules non superposables peuvent être de vrais stéréoisomères de configuration.`,
    ],
  },
  {
    order: 50,
    difficulty: 'EASY',
    answerFormat: 'MULTIPLE',
    question: `�' propos d'une molécule portant un unique carbone asymétrique :`,
    choices: [
      `Elle peut exister sous deux formes énantiomères.`,
      `Les deux formes ont la même formule brute.`,
      `Les deux formes ont des familles chimiques différentes.`,
      `Les deux formes diffèrent seulement par l'agencement spatial autour du centre stéréogène.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Un seul carbone asymétrique peut conduire à deux images miroir non superposables : un couple d'énantiomères.`,
    choiceExplanations: [
      `Deux dispositions spatiales opposées sont alors possibles.`,
      `Les deux molécules gardent la même composition.`,
      `La famille chimique reste identique.`,
      `La différence réside dans l'arrangement spatial autour du centre stéréogène.`,
    ],
  },
  {
    order: 51,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous représente une molécule à deux centres asymétriques.

![Molécule à deux centres asymétriques](${FIGURE_BASE_PATH}/figure-c4-deux-centres-asymetriques.svg)

�' propos de la molécule représentée :`,
    choices: [
      `Elle possède deux carbones asymétriques repérés par des astérisques.`,
      `Chaque carbone marqué d'un astérisque porte quatre substituants différents.`,
      `Elle ne possède aucun centre stéréogène.`,
      `Les deux centres stéréogènes n'ont pas nécessairement la même configuration.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La molécule représentée a été choisie pour illustrer un composé possédant deux centres asymétriques. Chaque centre doit être examiné séparément.`,
    choiceExplanations: [
      `Deux centres sont volontairement repérés.`,
      `C'est ce qui justifie leur statut de carbones asymétriques.`,
      `Cette proposition contredit l'analyse du schéma.`,
      `Deux centres distincts peuvent porter des configurations identiques ou différentes.`,
    ],
  },
  {
    order: 52,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' partir de la figure précédente, qui montre une molécule à deux centres asymétriques :`,
    choices: [
      `Le nombre maximal de stéréoisomères est de 4.`,
      `Le nombre maximal de stéréoisomères est donné par $2^n$ avec $n$ le nombre de centres asymétriques.`,
      `Avec deux centres asymétriques, la molécule possède nécessairement exactement 4 stéréoisomères.`,
      `L'expression « au plus 4 » est plus rigoureuse que « 4 nécessairement ».`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Pour $n$ centres asymétriques, le nombre maximal de stéréoisomères est $2^n$. Il s'agit d'un maximum, car une symétrie interne peut réduire ce nombre réel.`,
    choiceExplanations: [
      `Ici $n=2$, donc le maximum vaut $2^2=4$.`,
      `C'est la relation classique rappelée dans le cours.`,
      `Un composé méso montre que le nombre réel peut être inférieur au maximum.`,
      `La présence éventuelle d'une symétrie empêche d'affirmer « exactement ».`,
    ],
  },
  {
    order: 53,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos des diastéréoisomères :`,
    choices: [
      `Ce sont des stéréoisomères.`,
      `Ils sont images l'un de l'autre dans un miroir et non superposables.`,
      `Ils ne sont pas images l'un de l'autre dans un miroir.`,
      `Ils diffèrent par la configuration d'au moins un centre stéréogène.`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Les diastéréoisomères sont des stéréoisomères qui ne sont pas en relation d'image dans un miroir. Ils diffèrent par la configuration d'au moins un centre stéréogène, sans inversion de tous les centres à la fois.`,
    choiceExplanations: [
      `Ils appartiennent bien à la catégorie générale des stéréoisomères.`,
      `Cette définition correspond aux énantiomères, pas aux diastéréoisomères.`,
      `C'est le critère discriminant par rapport aux énantiomères.`,
      `Une partie seulement des centres change en général.`,
    ],
  },
  {
    order: 54,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour une même constitution possédant deux centres asymétriques :`,
    choices: [
      `Les formes $(R,R)$ et $(S,S)$ sont énantiomères.`,
      `Les formes $(R,R)$ et $(R,S)$ sont diastéréoisomères.`,
      `Les formes $(R,S)$ et $(S,R)$ sont nécessairement identiques dans tous les cas.`,
      `Entre deux énantiomères, toutes les configurations absolues sont inversées.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Deux énantiomères se déduisent l'un de l'autre par inversion de tous les centres stéréogènes. Si un seul centre est inversé, la relation devient une diastéréoisomérie.`,
    choiceExplanations: [
      `Tous les centres sont inversés : c'est un couple d'énantiomères.`,
      `Un seul des deux centres est modifié : la relation est diastéréoisomérique.`,
      `Cette identité n'est vraie que dans des cas particuliers, notamment méso.`,
      `C'est la règle générale pour un couple d'énantiomères.`,
    ],
  },
  {
    order: 55,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous présente trois stéréoisomères A, B et C d'une même constitution, repérés respectivement comme $(R,R)$, $(S,S)$ et $(R,S)$.

![Trois stéréoisomères d'une même constitution](${FIGURE_BASE_PATH}/figure-c5-trois-stereoisomeres.svg)

�' propos de A, B et C :`,
    choices: [
      `A et B sont énantiomères.`,
      `A et B ont la même constitution.`,
      `A et B sont diastéréoisomères.`,
      `A et B peuvent être considérés comme des stéréoisomères.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Dans la figure précédente, A et B correspondent aux couples $(R,R)$ et $(S,S)$ : tous les centres sont inversés. Ils sont donc énantiomères.`,
    choiceExplanations: [
      `L'inversion simultanée des deux centres définit un couple d'énantiomères.`,
      `Les trois molécules de la figure ont été choisies avec la même connectivité.`,
      `Des images miroir non superposables sont des énantiomères, pas des diastéréoisomères.`,
      `Les énantiomères sont un cas particulier de stéréoisomères.`,
    ],
  },
  {
    order: 56,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à propos de la figure précédente :`,
    choices: [
      `A et C sont diastéréoisomères.`,
      `B et C sont également diastéréoisomères.`,
      `A et C sont énantiomères.`,
      `A, B et C ont la même formule brute.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `A = $(R,R)$, B = $(S,S)$ et C = $(R,S)$. Comme C diffère de A ou de B par un seul centre, la relation est diastéréoisomérique.`,
    choiceExplanations: [
      `Un seul centre diffère entre A et C.`,
      `Le même raisonnement vaut entre B et C.`,
      `Les énantiomères nécessitent l'inversion de tous les centres.`,
      `Les stéréoisomères conservent la même composition atomique.`,
    ],
  },
  {
    order: 57,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Pour deux molécules de même constitution possédant plusieurs centres asymétriques :`,
    choices: [
      `Si tous les centres sont inversés, les deux molécules sont énantiomères.`,
      `Si un seul centre est inversé tandis que les autres restent inchangés, les deux molécules sont diastéréoisomères.`,
      `Si aucun centre n'est inversé, les deux molécules sont forcément énantiomères.`,
      `L'étude peut se raisonner centre par centre.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `La comparaison de plusieurs centres stéréogènes se fait en examinant les configurations une à une. Inversion totale : énantiomérie ; inversion partielle : diastéréoisomérie.`,
    choiceExplanations: [
      `C'est le critère général d'énantiomérie.`,
      `Une inversion partielle conduit à une relation diastéréoisomérique.`,
      `Sans inversion, on reste sur la même molécule.`,
      `Cette méthode est la plus sûre pour ne pas se tromper.`,
    ],
  },
  {
    order: 58,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `La figure ci-dessous représente un composé méso.

![Composé méso](${FIGURE_BASE_PATH}/figure-c6-compose-meso.svg)

�' propos de ce composé :`,
    choices: [
      `Le composé possède au moins deux centres asymétriques.`,
      `Le composé est achiral en raison d'un élément de symétrie interne.`,
      `Le composé est l'énantiomère d'un autre composé méso distinct.`,
      `Le composé est superposable à son image dans un miroir.`,
    ],
    correctChoiceIndexes: [0, 1, 3],
    explanation:
      `Un composé méso porte plusieurs centres asymétriques, mais un plan de symétrie interne le rend achiral ; il est donc superposable à son image dans un miroir.`,
    choiceExplanations: [
      `Un unique centre asymétrique ne suffit pas pour obtenir un composé méso.`,
      `L'achiralité provient précisément de cette symétrie interne.`,
      `Un composé méso est identique à son image miroir.`,
      `C'est la conséquence directe de son achiralité.`,
    ],
  },
  {
    order: 59,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `�' propos du nombre de stéréoisomères d'une molécule possédant trois centres asymétriques :`,
    choices: [
      `Le nombre maximal de stéréoisomères est de 8.`,
      `La molécule possède nécessairement exactement 8 stéréoisomères.`,
      `Une symétrie interne peut réduire le nombre réel de stéréoisomères.`,
      `L'expression rigoureuse est « au plus 8 stéréoisomères ».`,
    ],
    correctChoiceIndexes: [0, 2, 3],
    explanation:
      `Avec trois centres asymétriques, le maximum vaut $2^3=8$. Mais il s'agit d'un maximum théorique, qui peut être abaissé si certaines formes coïncident à cause d'une symétrie interne.`,
    choiceExplanations: [
      `On applique directement la relation $2^n$.`,
      `Le mot « nécessairement » est excessif.`,
      `Les composés méso en donnent une illustration simple.`,
      `Cette formulation respecte le caractère maximal et non obligatoire de $2^n$.`,
    ],
  },
  {
    order: 60,
    difficulty: 'MEDIUM',
    answerFormat: 'MULTIPLE',
    question: `Toujours à partir de la figure du composé méso et des notions du chapitre :`,
    choices: [
      `Un composé méso fait partie des stéréoisomères possibles d'une même constitution.`,
      `Un composé méso peut coexister, pour une même constitution, avec un couple d'énantiomères.`,
      `La présence d'un composé méso montre que le nombre réel de stéréoisomères peut être inférieur à $2^n$.`,
      `Un composé méso est, par définition, un diastéréoisomère de lui-même.`,
    ],
    correctChoiceIndexes: [0, 1, 2],
    explanation:
      `Dans certaines familles à deux centres asymétriques, on peut observer un couple d'énantiomères et une forme méso. Cette dernière illustre le fait que le nombre réel de stéréoisomères peut être inférieur au maximum théorique.`,
    choiceExplanations: [
      `Le composé méso appartient bien à l'ensemble des stéréoisomères d'une même constitution.`,
      `C'est la situation classique de nombreuses molécules à deux centres asymétriques.`,
      `L'exemple méso montre que toutes les combinaisons ne conduisent pas forcément à des espèces distinctes et chirales.`,
      `Une molécule n'est évidemment pas stéréoisomère d'elle-même dans ce sens.`,
    ],
  },
];
