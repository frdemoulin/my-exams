import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie générale
 * Chapitre 1 – Éléments chimiques et classification périodique
 * Section B – Organisation et configuration électronique
 */

export const UE14_CH1_ORGANISATION_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 30,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle association entre nombre quantique et information décrite est correcte ?`,
    choices: [
      {
        content: `$\\mathrm{n}$ décrit la couche électronique.`,
        correct: true,
        explanation: `Vrai : le nombre quantique principal $\\mathrm{n}$ repère la couche électronique.`,
      },
      {
        content: `$\\ell$ indique directement le nombre de neutrons du noyau.`,
        correct: false,
        explanation: `Faux : $\\ell$ décrit la sous-couche électronique.`,
      },
      {
        content: `$\\mathrm{m}$ donne le nombre total d'électrons de l'atome.`,
        correct: false,
        explanation: `Faux : $\\mathrm{m}$ repère une orbitale au sein d'une sous-couche.`,
      },
      {
        content: `$\\mathrm{s}$ indique le numéro atomique de l'élément.`,
        correct: false,
        explanation: `Faux : $\\mathrm{s}$ décrit le spin de l'électron.`,
      },
    ],
    explanation:
      `Les quatre variables quantiques utilisées dans le cours décrivent successivement couche ($\\mathrm{n}$), sous-couche ($\\ell$), orbitale ($\\mathrm{m}$) et spin ($\\mathrm{s}$).`,
  },
  {
    order: 31,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Quelle valeur de $\\ell$ correspond à une sous-couche $\\mathrm{p}$ ?`,
    answer: { type: 'number', value: 1, tolerance: 0 },
    explanation:
      `La correspondance est $\\mathrm{s}\\leftrightarrow \\ell=0$, $\\mathrm{p}\\leftrightarrow \\ell=1$, $\\mathrm{d}\\leftrightarrow \\ell=2$, $\\mathrm{f}\\leftrightarrow \\ell=3$.`,
  },
  {
    order: 32,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle configuration électronique correspond à l'atome de bore ($\\mathrm{Z}=5$) dans son état fondamental ?`,
    choices: [
      {
        content: `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^1$`,
        correct: true,
        explanation: `Vrai : la configuration contient bien cinq électrons.`,
      },
      {
        content: `$1\\mathrm{s}^2\\,2\\mathrm{s}^1\\,2\\mathrm{p}^2$`,
        correct: false,
        explanation: `Faux : la sous-couche $2\\mathrm{s}$ doit être remplie avant $2\\mathrm{p}$.`,
      },
      {
        content: `$1\\mathrm{s}^2\\,2\\mathrm{p}^3$`,
        correct: false,
        explanation: `Faux : la sous-couche $2\\mathrm{s}$ ne peut pas être sautée.`,
      },
      {
        content: `$1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^2$`,
        correct: false,
        explanation: `Faux : cette configuration contient six électrons et correspond au carbone.`,
      },
    ],
    explanation:
      `Le remplissage suit l'ordre d'énergie croissante : $1\\mathrm{s}$, puis $2\\mathrm{s}$, puis $2\\mathrm{p}$.`,
  },
  {
    order: 33,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle proposition décrit correctement le nombre quantique principal $\\mathrm{n}$ ?`,
    choices: [
      {
        content: `Il repère la couche électronique et donne une indication sur le niveau d'énergie.`,
        correct: true,
        explanation: `Vrai : $\\mathrm{n}$ est associé à la couche et au niveau énergétique principal.`,
      },
      {
        content: `Il donne la position exacte de l'électron autour du noyau.`,
        correct: false,
        explanation: `Faux : une orbitale décrit une probabilité de présence, pas une trajectoire exacte.`,
      },
      {
        content: `Il ne peut prendre que les valeurs 0, 1, 2 et 3.`,
        correct: false,
        explanation: `Faux : $\\mathrm{n}$ prend les valeurs entières positives 1, 2, 3, 4...`,
      },
      {
        content: `Il détermine le nombre de neutrons du noyau.`,
        correct: false,
        explanation: `Faux : les neutrons sont décrits par $\\mathrm{N}=\\mathrm{A}-\\mathrm{Z}$.`,
      },
    ],
    explanation:
      `Dans le cadre du cours, $\\mathrm{n}=1,2,3,4...$ correspond aux couches $\\mathrm{K}$, $\\mathrm{L}$, $\\mathrm{M}$, $\\mathrm{N}$...`,
  },
  {
    order: 34,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle représentation en cases quantiques correspond à l'atome d'azote ($\\mathrm{Z}=7$) dans son état fondamental ?`,
    choices: [
      {
        content: {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['up', 'up', 'up'] },
          ],
        },
        correct: true,
        explanation:
          `Vrai : l'azote a la configuration $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^3$, avec un électron dans chacune des trois orbitales $2\\mathrm{p}$.`,
      },
      {
        content: {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'up', 'empty'] },
          ],
        },
        correct: false,
        explanation:
          `Faux : cette répartition forme un doublet avant d'occuper les trois orbitales $2\\mathrm{p}$, contrairement à la règle de Hund.`,
      },
      {
        content: {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['up'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'up', 'up'] },
          ],
        },
        correct: false,
        explanation:
          `Faux : la sous-couche $2\\mathrm{s}$ doit être remplie avant $2\\mathrm{p}$.`,
      },
      {
        content: {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'empty'] },
          ],
        },
        correct: false,
        explanation: `Faux : cette proposition contient huit électrons, et non sept.`,
      },
    ],
    explanation:
      `Pour $2\\mathrm{p}^3$, la règle de Hund impose d'occuper séparément les trois orbitales avant tout appariement.`,
  },
  {
    order: 35,
    difficulty: 'EASY',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux correspondances correctes entre $\\ell$ et une sous-couche.`,
    choices: [
      { content: `$\\ell=0 \\rightarrow \\mathrm{s}$`, correct: true, explanation: `Correspondance correcte.` },
      { content: `$\\ell=1 \\rightarrow \\mathrm{d}$`, correct: false, explanation: `$\\ell=1$ correspond à $\\mathrm{p}$.` },
      { content: `$\\ell=2 \\rightarrow \\mathrm{d}$`, correct: true, explanation: `Correspondance correcte.` },
      { content: `$\\ell=3 \\rightarrow \\mathrm{p}$`, correct: false, explanation: `$\\ell=3$ correspond à $\\mathrm{f}$.` },
    ],
    explanation:
      `Les correspondances usuelles sont $0\\to\\mathrm{s}$, $1\\to\\mathrm{p}$, $2\\to\\mathrm{d}$ et $3\\to\\mathrm{f}$.`,
  },
  {
    order: 36,
    difficulty: 'EASY',
    format: 'QRU',
    question:
      `Selon la convention retenue dans le cours, quelle est la couche de valence de l'atome de fer ($\\mathrm{Z}=26$), dont la configuration se termine par $4\\mathrm{s}^2\\,3\\mathrm{d}^6$ ?`,
    choices: [
      { content: `La couche $\\mathrm{K}$, avec $1\\mathrm{s}^2$.`, correct: false, explanation: `La couche K correspond à $\\mathrm{n}=1$.` },
      { content: `La couche $\\mathrm{L}$, avec $2\\mathrm{s}^2\\,2\\mathrm{p}^6$.`, correct: false, explanation: `La couche L correspond à $\\mathrm{n}=2$.` },
      { content: `La couche $\\mathrm{M}$, avec les électrons $3\\mathrm{d}^6$.`, correct: false, explanation: `Le cours retient la couche de plus grand $\\mathrm{n}$ pour définir la couche de valence.` },
      { content: `La couche $\\mathrm{N}$, avec $4\\mathrm{s}^2$.`, correct: true, explanation: `Le plus grand nombre quantique principal occupé est $\\mathrm{n}=4$.` },
    ],
    explanation:
      `Dans l'approche du cours, la couche de valence est la couche de nombre quantique principal le plus élevé ; pour le fer, il s'agit donc de la couche $\\mathrm{N}$ contenant $4\\mathrm{s}^2$.`,
  },
  {
    order: 37,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Combien de valeurs différentes de $\\ell$ sont autorisées pour la couche $\\mathrm{n}=4$ ?`,
    answer: { type: 'number', value: 4, tolerance: 0 },
    explanation:
      `Pour une couche de nombre quantique principal $\\mathrm{n}$, $\\ell$ peut prendre les valeurs de 0 à $\\mathrm{n}-1$. Pour $\\mathrm{n}=4$ : 0, 1, 2 et 3, soit quatre valeurs.`,
  },
  {
    order: 38,
    difficulty: 'EASY',
    format: 'QROC',
    question: `Combien d'orbitales comporte une sous-couche $\\mathrm{p}$ ?`,
    answer: { type: 'number', value: 3, tolerance: 0 },
    explanation:
      `Une sous-couche contient $2\\ell+1$ orbitales. Pour $\\mathrm{p}$, $\\ell=1$, donc $2\\times1+1=3$ orbitales.`,
  },
  {
    order: 39,
    difficulty: 'EASY',
    format: 'QRU',
    question: `Quelle représentation respecte la règle de Hund pour une sous-couche $\\mathrm{p}$ contenant trois électrons ?`,
    choices: [
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '\\mathrm{p}', boxes: ['up', 'up', 'up'] }] },
        correct: true,
        explanation: `Vrai : chaque orbitale est occupée par un électron avant tout appariement.`,
      },
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '\\mathrm{p}', boxes: ['pair', 'up', 'empty'] }] },
        correct: false,
        explanation: `Faux : un doublet est formé alors qu'une orbitale reste vide.`,
      },
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '\\mathrm{p}', boxes: ['pair', 'empty', 'up'] }] },
        correct: false,
        explanation: `Faux : là encore, une orbitale reste vide alors qu'un doublet est déjà formé.`,
      },
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '\\mathrm{p}', boxes: ['pair', 'pair', 'empty'] }] },
        correct: false,
        explanation: `Faux : cette proposition contient quatre électrons et ne correspond pas à $\\mathrm{p}^3$.`,
      },
    ],
    explanation:
      `La règle de Hund impose une occupation simple des orbitales dégénérées avant l'appariement des électrons.`,
  },
];

export const UE14_CH1_ORGANISATION_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    order: 28,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant les quatre variables quantiques utilisées dans le cours, quelles propositions sont exactes ?`,
    choices: [
      { content: `$\\mathrm{n}$ repère une couche électronique.`, correct: true, explanation: `Vrai.` },
      { content: `$\\ell$ repère une sous-couche électronique.`, correct: true, explanation: `Vrai.` },
      { content: `$\\mathrm{m}$ distingue les orbitales d'une même sous-couche.`, correct: true, explanation: `Vrai.` },
      { content: `$\\mathrm{s}$ ne peut prendre qu'une seule valeur.`, correct: false, explanation: `Faux : le spin admet deux valeurs, $+1/2$ et $-1/2$.` },
    ],
    explanation:
      `Les quatre variables quantiques permettent de caractériser progressivement couche, sous-couche, orbitale et spin.`,
  },
  {
    order: 29,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Combien d'orbitales comporte une sous-couche $\\mathrm{d}$ ?`,
    answer: { type: 'number', value: 5, tolerance: 0 },
    explanation:
      `Pour $\\mathrm{d}$, $\\ell=2$. Le nombre d'orbitales vaut $2\\ell+1=5$.`,
  },
  {
    order: 40,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quelle représentation en cases quantiques correspond à l'oxygène ($\\mathrm{Z}=8$) dans son état fondamental ?`,
    choices: [
      {
        content: {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'up', 'up'] },
          ],
        },
        correct: true,
        explanation: `Vrai : $1\\mathrm{s}^2\\,2\\mathrm{s}^2\\,2\\mathrm{p}^4$ en respectant Hund.`,
      },
      {
        content: {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'empty'] },
          ],
        },
        correct: false,
        explanation: `Faux : l'appariement est excessif alors qu'une orbitale $2\\mathrm{p}$ reste vide.`,
      },
      {
        content: {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['up'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'up'] },
          ],
        },
        correct: false,
        explanation: `Faux : la sous-couche $2\\mathrm{s}$ doit être remplie avant $2\\mathrm{p}$.`,
      },
      {
        content: {
          type: 'quantum-boxes',
          orbitals: [
            { label: '1\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{s}', boxes: ['pair'] },
            { label: '2\\mathrm{p}', boxes: ['pair', 'pair', 'pair'] },
          ],
        },
        correct: false,
        explanation: `Faux : cette configuration contient dix électrons.`,
      },
    ],
    explanation:
      `L'oxygène possède huit électrons. Sa sous-couche $2\\mathrm{p}^4$ comporte un doublet et deux électrons célibataires.`,
  },
  {
    order: 41,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quelle représentation viole spécifiquement la règle de Hund pour une sous-couche $\\mathrm{p}^3$ ?`,
    choices: [
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '\\mathrm{p}', boxes: ['up', 'up', 'up'] }] },
        correct: false,
        explanation: `Cette répartition respecte Hund.`,
      },
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '\\mathrm{p}', boxes: ['pair', 'up', 'empty'] }] },
        correct: true,
        explanation: `Un doublet est créé alors qu'une orbitale de même énergie reste vide.`,
      },
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '\\mathrm{p}', boxes: ['down', 'down', 'down'] }] },
        correct: false,
        explanation: `Les trois orbitales sont occupées séparément ; le sens commun des spins ne viole pas la règle présentée ici.`,
      },
      {
        content: { type: 'quantum-boxes', orbitals: [{ label: '\\mathrm{p}', boxes: ['up', 'up', 'down'] }] },
        correct: false,
        explanation: `Les trois orbitales sont occupées séparément ; la question cible l'appariement prématuré.`,
      },
    ],
    explanation:
      `Dans le cadre du cours, la règle de Hund impose d'abord un électron par orbitale avant la formation d'un second électron dans une orbitale.`,
  },
  {
    order: 42,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quelle définition d'une orbitale atomique est la plus conforme au cours ?`,
    choices: [
      { content: `Une trajectoire circulaire précise décrite par l'électron.`, correct: false, explanation: `Le modèle orbitalaire ne fournit pas de trajectoire précise.` },
      { content: `Un volume de l'espace associé à une probabilité de présence de l'électron.`, correct: true, explanation: `C'est la définition qualitative retenue par le cours.` },
      { content: `Une région située uniquement à l'intérieur du noyau.`, correct: false, explanation: `Les orbitales concernent le nuage électronique.` },
      { content: `Une sous-couche pouvant contenir un nombre illimité d'électrons.`, correct: false, explanation: `Une orbitale accueille au maximum deux électrons.` },
    ],
    explanation:
      `Une orbitale atomique décrit un domaine de probabilité de présence de l'électron ; elle ne correspond pas à une orbite classique.`,
  },
  {
    order: 43,
    difficulty: 'MEDIUM',
    format: 'QRM',
    question: `Concernant la forme et l'organisation des orbitales atomiques, quelles propositions sont exactes ?`,
    choices: [
      { content: `Une sous-couche $\\mathrm{s}$ comporte une seule orbitale.`, correct: true, explanation: `Vrai : $\\ell=0$, donc une orbitale.` },
      { content: `Une sous-couche $\\mathrm{p}$ comporte trois orbitales.`, correct: true, explanation: `Vrai : $\\ell=1$, donc trois orbitales.` },
      { content: `Une orbitale $\\mathrm{s}$ est décrite par une symétrie sphérique.`, correct: true, explanation: `Vrai dans la représentation qualitative du cours.` },
      { content: `Une orbitale permet de connaître la position exacte de l'électron à tout instant.`, correct: false, explanation: `Faux : elle décrit une probabilité de présence.` },
    ],
    explanation:
      `La géométrie des orbitales traduit une distribution de probabilité. Les sous-couches $\\mathrm{s}$ et $\\mathrm{p}$ comportent respectivement une et trois orbitales.`,
  },
  {
    order: 44,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Combien d'électrons occupent la sous-couche $3\\mathrm{d}$ dans l'état fondamental du fer considéré dans l'énoncé commun ?`,
    answer: { type: 'number', value: 6, tolerance: 0 },
    explanation:
      `Pour le fer ($\\mathrm{Z}=26$), le cours donne une configuration se terminant par $4\\mathrm{s}^2\\,3\\mathrm{d}^6$.`,
  },
  {
    order: 45,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question: `Selon la convention du cours, combien d'électrons comporte la couche de valence du fer considéré dans l'énoncé commun ?`,
    answer: { type: 'number', value: 2, tolerance: 0 },
    explanation:
      `La couche de valence est celle de plus grand $\\mathrm{n}$ : ici $\\mathrm{n}=4$, avec $4\\mathrm{s}^2$, soit deux électrons.`,
  },
  {
    order: 46,
    difficulty: 'MEDIUM',
    format: 'QRP',
    requiredSelectionCount: 2,
    question: `Sélectionnez exactement les deux quadruplets de nombres quantiques possibles.`,
    choices: [
      {
        content: `$(\\mathrm{n}=2,\\ell=1,\\mathrm{m}=0,\\mathrm{s}=+\\tfrac12)$`,
        correct: true,
        explanation: `Toutes les valeurs respectent les domaines autorisés.`,
      },
      {
        content: `$(\\mathrm{n}=3,\\ell=2,\\mathrm{m}=-2,\\mathrm{s}=-\\tfrac12)$`,
        correct: true,
        explanation: `Toutes les valeurs sont permises pour une sous-couche $3\\mathrm{d}$.`,
      },
      {
        content: `$(\\mathrm{n}=2,\\ell=2,\\mathrm{m}=0,\\mathrm{s}=+\\tfrac12)$`,
        correct: false,
        explanation: `Pour $\\mathrm{n}=2$, $\\ell$ ne peut valoir que 0 ou 1.`,
      },
      {
        content: `$(\\mathrm{n}=3,\\ell=1,\\mathrm{m}=2,\\mathrm{s}=-\\tfrac12)$`,
        correct: false,
        explanation: `Pour $\\ell=1$, $\\mathrm{m}$ ne peut prendre que -1, 0 ou +1.`,
      },
    ],
    explanation:
      `Les contraintes sont $0\\leq\\ell\\leq\\mathrm{n}-1$, $-\\ell\\leq\\mathrm{m}\\leq\\ell$ et deux valeurs possibles pour le spin.`,
  },
  {
    order: 47,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Selon la règle $\\mathrm{n}+\\ell$ présentée dans le cours, quelle sous-couche est remplie juste avant $3\\mathrm{d}$ ?`,
    answer: {
      type: 'text',
      acceptedAnswers: ['4s', '4 s', '4s2', '4 s2'],
      normalization: { trim: true, collapseWhitespace: true, caseSensitive: false, ignoreAccents: true },
    },
    explanation:
      `L'ordre présenté est $1\\mathrm{s}$, $2\\mathrm{s}$, $2\\mathrm{p}$, $3\\mathrm{s}$, $3\\mathrm{p}$, $4\\mathrm{s}$, $3\\mathrm{d}$... La sous-couche attendue est donc $4\\mathrm{s}$.`,
  },
  {
    order: 5,
    difficulty: 'MEDIUM',
    format: 'QRU',
    question: `Quelle est la capacité électronique maximale d'une sous-couche $\\mathrm{d}$ ?`,
    choices: [
      { content: `2 électrons`, correct: false, explanation: `C'est la capacité d'une seule orbitale.` },
      { content: `6 électrons`, correct: false, explanation: `C'est la capacité d'une sous-couche $\\mathrm{p}$.` },
      { content: `10 électrons`, correct: true, explanation: `Une sous-couche $\\mathrm{d}$ comporte cinq orbitales de deux électrons chacune.` },
      { content: `14 électrons`, correct: false, explanation: `C'est la capacité d'une sous-couche $\\mathrm{f}$.` },
    ],
    explanation:
      `Pour $\\ell=2$, il existe $2\\ell+1=5$ orbitales. À deux électrons par orbitale, la capacité maximale vaut 10.`,
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    format: 'QROC',
    question:
      `Dans le modèle présenté dans le cours, combien d'électrons peut contenir au maximum la couche $\\mathrm{M}$ ($\\mathrm{n}=3$) lorsqu'elle est complète ?`,
    answer: { type: 'number', value: 18, tolerance: 0 },
    explanation:
      `La couche $\\mathrm{M}$ regroupe $3\\mathrm{s}^2$, $3\\mathrm{p}^6$ et $3\\mathrm{d}^{10}$ : $2+6+10=18$ électrons.`,
  },
];
