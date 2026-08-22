import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 1 – Éléments chimiques et classification périodique
 * Section A – Atomes
 * Quiz 2 – PRACTICE
 *
 * Le quiz 1 « Atomes » (DISCOVER) est déjà validé dans le repo et n'est pas redéfini ici.
 */
export const UE14_CH1_ATOMES_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 25,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Le diamètre caractéristique d'un atome est de l'ordre de $0{,}1\\,\\mathrm{nm}$. Combien cela représente-t-il en ångströms ? Saisissez uniquement la valeur numérique.`,
    answer: { type: 'number', value: 1, tolerance: 0 },
    explanation:
      `$1\\,\\text{Å} = 0{,}1\\,\\mathrm{nm}$. Une dimension de $0{,}1\\,\\mathrm{nm}$ correspond donc à $1\\,\\text{Å}$.`,
  },
  {
    order: 14,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question:
      `Deux isotopes d'un même élément sont comparés sous forme d'atomes neutres. Quelle proposition est la plus juste ?`,
    choices: [
      {
        content: `Ils ont le même nombre de neutrons mais des nombres de protons différents.`,
        correct: false,
        explanation:
          `Faux : des isotopes ont le même numéro atomique $\\mathrm{Z}$ et diffèrent par leur nombre de neutrons.`,
      },
      {
        content: `Ils ont des propriétés chimiques très proches, mais certaines propriétés physiques peuvent différer.`,
        correct: true,
        explanation:
          `Vrai : le même $\\mathrm{Z}$ conduit au même cortège électronique pour des atomes neutres, tandis que la différence de masse peut modifier certaines propriétés physiques.`,
      },
      {
        content: `Ils ont nécessairement la même masse atomique.`,
        correct: false,
        explanation:
          `Faux : leurs nombres de masse $\\mathrm{A}$ sont différents.`,
      },
      {
        content: `Ils appartiennent à deux éléments chimiques différents.`,
        correct: false,
        explanation:
          `Faux : le numéro atomique identifie l'élément chimique et reste identique pour deux isotopes.`,
      },
    ],
    explanation:
      `La relation isotopique conserve $\\mathrm{Z}$ mais modifie $\\mathrm{N}$ et donc $\\mathrm{A}$. Les propriétés chimiques restent très proches, alors que la masse et certaines propriétés physiques peuvent différer.`,
  },
  {
    order: 26,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `L'ion $\\ce{^{27}_{13}Al^{3+}}$ possède combien d'électrons ? Saisissez uniquement la valeur numérique.`,
    answer: { type: 'number', value: 10, tolerance: 0 },
    explanation:
      `L'aluminium possède $\\mathrm{Z}=13$, donc 13 électrons à l'état neutre. La charge $3+$ correspond à la perte de trois électrons : $13-3=10$.`,
  },
  {
    order: 16,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant la masse du noyau et de ses constituants, quelles propositions sont exactes ?`,
    choices: [
      {
        content:
          `Pour un noyau lié, sa masse est inférieure à la somme des masses de ses nucléons pris séparément.`,
        correct: true,
        explanation:
          `Vrai : cette différence correspond au défaut de masse associé à l'énergie de liaison du noyau.`,
      },
      {
        content: `La masse d'un électron est du même ordre de grandeur que celle d'un proton.`,
        correct: false,
        explanation:
          `Faux : l'électron est environ 2 000 fois plus léger qu'un nucléon.`,
      },
      {
        content: `Le noyau du protium $\\ce{^{1}_{1}H}$ ne contient aucun neutron.`,
        correct: true,
        explanation:
          `Vrai : pour le protium, $\\mathrm{A}=1$ et $\\mathrm{Z}=1$, donc $\\mathrm{N}=0$.`,
      },
      {
        content: `Tout noyau atomique contient nécessairement au moins un neutron.`,
        correct: false,
        explanation:
          `Faux : le noyau du protium constitue le contre-exemple classique.`,
      },
    ],
    explanation:
      `La masse atomique est essentiellement portée par les nucléons. Un noyau lié présente un défaut de masse, et le protium rappelle qu'un neutron n'est pas obligatoire dans tout noyau.`,
  },
  {
    order: 17,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question:
      `On propose la notation générique $^{1}_{3}\\mathrm{X}$. Pourquoi ne peut-elle pas correspondre à un nucléide réel ?`,
    choices: [
      {
        content: `Parce qu'un numéro atomique ne peut jamais être supérieur à 2.`,
        correct: false,
        explanation:
          `Faux : de nombreux éléments possèdent un numéro atomique bien supérieur à 2.`,
      },
      {
        content: `Parce qu'elle conduirait à un nombre de neutrons négatif.`,
        correct: true,
        explanation:
          `Vrai : $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}=1-3=-2$, ce qui est physiquement impossible.`,
      },
      {
        content: `Parce qu'un nombre de masse doit toujours être pair.`,
        correct: false,
        explanation:
          `Faux : de nombreux nucléides possèdent un nombre de masse impair.`,
      },
      {
        content: `Parce que tout nucléide doit contenir autant de protons que de neutrons.`,
        correct: false,
        explanation:
          `Faux : l'égalité $\\mathrm{Z}=\\mathrm{N}$ n'est pas une condition générale d'existence d'un nucléide.`,
      },
    ],
    explanation:
      `Une notation nucléaire doit respecter $\\mathrm{A}\\geq\\mathrm{Z}$, puisque $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}$ ne peut pas être négatif.`,
  },
  {
    order: 18,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux propositions compatibles avec un atome électriquement neutre.`,
    choices: [
      {
        content: `Il possède autant de protons que d'électrons.`,
        correct: true,
        explanation:
          `Vrai : la neutralité électrique impose la compensation des charges positives et négatives.`,
      },
      {
        content: `Il peut posséder davantage de neutrons que de protons.`,
        correct: true,
        explanation:
          `Vrai : de nombreux noyaux stables ou radioactifs présentent $\\mathrm{N}>\\mathrm{Z}$.`,
      },
      {
        content: `Il possède nécessairement autant de neutrons que d'électrons.`,
        correct: false,
        explanation:
          `Faux : le nombre d'électrons est égal à $\\mathrm{Z}$ dans l'atome neutre, mais $\\mathrm{N}$ peut être différent.`,
      },
      {
        content: `Il peut posséder moins d'électrons que de protons tout en restant un atome neutre.`,
        correct: false,
        explanation:
          `Faux : une telle espèce serait chargée positivement, donc ce serait un cation.`,
      },
    ],
    explanation:
      `Dans un atome neutre, le nombre d'électrons est égal au nombre de protons. Le nombre de neutrons reste indépendant de cette condition de neutralité.`,
  },
  {
    order: 19,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quelle affirmation rend le mieux compte de la répartition de la masse dans un atome ?`,
    choices: [
      {
        content: `La masse est répartie à parts égales entre le noyau et le nuage électronique.`,
        correct: false,
        explanation:
          `Faux : la masse des électrons est très faible devant celle des nucléons.`,
      },
      {
        content: `La quasi-totalité de la masse est concentrée dans le noyau.`,
        correct: true,
        explanation:
          `Vrai : protons et neutrons portent presque toute la masse de l'atome.`,
      },
      {
        content: `La masse est principalement portée par les électrons de valence.`,
        correct: false,
        explanation:
          `Faux : les électrons de valence sont aussi très légers.`,
      },
      {
        content: `La masse dépend essentiellement du volume occupé par le nuage électronique.`,
        correct: false,
        explanation:
          `Faux : le grand volume électronique ne signifie pas qu'il porte l'essentiel de la masse.`,
      },
    ],
    explanation:
      `Le nuage électronique occupe presque tout le volume atomique, mais la masse est presque entièrement concentrée dans le noyau.`,
  },
  {
    order: 20,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Le fluor 18 est un radionucléide utilisé en imagerie TEP. Pour $\\ce{^{18}_{9}F}$, combien le noyau contient-il de neutrons ? Saisissez uniquement la valeur numérique.`,
    answer: { type: 'number', value: 9, tolerance: 0 },
    explanation:
      `Le fluor possède $\\mathrm{Z}=9$. Pour $\\ce{^{18}_{9}F}$ : $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}=18-9=9$. Le contexte d'imagerie n'intervient pas dans le calcul.`,
  },
  {
    order: 23,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant l'unité de masse atomique, quelles propositions sont exactes ?`,
    choices: [
      {
        content: `Une unité de masse atomique vaut par définition un douzième de la masse d'un atome de carbone 12.`,
        correct: true,
        explanation:
          `Vrai : c'est la définition de l'unité de masse atomique unifiée.`,
      },
      {
        content: `Le dalton et l'unité de masse atomique unifiée correspondent à la même unité de masse.`,
        correct: true,
        explanation:
          `Vrai : $1\\,\\mathrm{Da}=1\\,\\mathrm{u}$.`,
      },
      {
        content: `La masse d'un proton vaut exactement $1\\,\\mathrm{u}$.`,
        correct: false,
        explanation:
          `Faux : elle est voisine de $1\\,\\mathrm{u}$ mais n'est pas exactement égale à cette valeur.`,
      },
      {
        content: `Le symbole de l'unité de masse atomique unifiée est $\\mathrm{kg}$.`,
        correct: false,
        explanation:
          `Faux : son symbole est $\\mathrm{u}$.`,
      },
    ],
    explanation:
      `L'unité de masse atomique est définie à partir du carbone 12. En biochimie, le dalton est utilisé comme unité équivalente.`,
  },
  {
    order: 24,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Une hématie a un diamètre d'environ $7\\,\\mathrm{\\mu m}$, alors qu'un atome mesure environ $0{,}1\\,\\mathrm{nm}$. En ordre de grandeur, combien de fois l'hématie est-elle plus grande en diamètre ? Saisissez uniquement la valeur numérique.`,
    answer: { type: 'number', value: 70000, tolerance: 0 },
    explanation:
      `$7\\,\\mathrm{\\mu m}=7\\times10^{-6}\\,\\mathrm{m}$ et $0{,}1\\,\\mathrm{nm}=10^{-10}\\,\\mathrm{m}$. Le rapport vaut $7\\times10^4=70\\,000$.`,
  },
];
