import type { HealthTrainingAuthorQuestion, SeedQuestion } from './health-training-ue14.shared';
import { UE14_CH1_ATOMES_PRACTICE_V2_QUESTIONS } from './health-training-ue14-elements-chimiques-classification-periodique.section-a.practice-v2.author.seed';

/**
 * UE14 – Chimie générale
 * Chapitre 1.1 – Éléments chimiques et classification périodique
 * Section A – Atomes – DISCOVER
 * Refonte éditoriale consolidée : 5 propositions pour les questions fermées,
 * réponses brassées, explications autonomes et terminologie scientifique harmonisée.
 */
export const UE14_CH1_ATOMES_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition décrit correctement un atome électriquement neutre ?",
    "choices": [
      {
        "content": "Il possède autant de protons que d'électrons.",
        "correct": true,
        "explanation": "La neutralité électrique impose l'égalité entre le nombre de charges positives du noyau et le nombre d'électrons."
      },
      {
        "content": "Il possède nécessairement autant de neutrons que de protons.",
        "correct": false,
        "explanation": "Le nombre de neutrons peut être différent du nombre de protons."
      },
      {
        "content": "Sa masse est principalement portée par les électrons.",
        "correct": false,
        "explanation": "La quasi-totalité de la masse est portée par les nucléons du noyau."
      },
      {
        "content": "Son numéro atomique est égal à son nombre de neutrons.",
        "correct": false,
        "explanation": "Le numéro atomique Z est le nombre de protons."
      },
      {
        "content": "Son noyau est électriquement neutre.",
        "correct": false,
        "explanation": "Le noyau porte une charge positive due aux protons."
      }
    ],
    "explanation": "Un atome neutre possède Z protons et Z électrons. Les neutrons n'interviennent pas dans la neutralité électrique."
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les constituants de l'atome, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le proton porte la charge élémentaire positive +e.",
        "correct": true,
        "explanation": "Le proton possède une charge +e."
      },
      {
        "content": "Le noyau contient les électrons de l'atome.",
        "correct": false,
        "explanation": "Les électrons appartiennent au cortège électronique autour du noyau."
      },
      {
        "content": "Le neutron est électriquement neutre.",
        "correct": true,
        "explanation": "Le neutron ne porte pas de charge électrique nette."
      },
      {
        "content": "L'électron porte la charge élémentaire négative -e.",
        "correct": true,
        "explanation": "L'électron possède une charge -e."
      },
      {
        "content": "La masse d'un électron est voisine de celle d'un proton.",
        "correct": false,
        "explanation": "L'électron est environ 1836 fois plus léger que le proton."
      }
    ],
    "explanation": "Le noyau contient protons et neutrons ; les électrons constituent le cortège électronique. Les nucléons portent presque toute la masse de l'atome."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de neutrons contient le noyau de $\\ce{^{131}_{53}I}$ ?",
    "answer": {
      "type": "number",
      "value": 78,
      "tolerance": 0
    },
    "explanation": "Le nombre de neutrons vaut $N=A-Z=131-53=78$."
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle relation existe entre $\\ce{^{123}_{53}I}$ et $\\ce{^{131}_{53}I}$ ?",
    "choices": [
      {
        "content": "Ils possèdent le même nombre de neutrons.",
        "correct": false,
        "explanation": "Leurs nombres de masse diffèrent à Z identique, donc leurs nombres de neutrons diffèrent."
      },
      {
        "content": "Ce sont deux éléments chimiques différents.",
        "correct": false,
        "explanation": "Un élément chimique est défini par Z, identique ici."
      },
      {
        "content": "Le premier est un cation et le second un anion.",
        "correct": false,
        "explanation": "La notation fournie ne porte aucune charge ionique."
      },
      {
        "content": "Ils constituent exactement le même nucléide.",
        "correct": false,
        "explanation": "Un nucléide est défini par A et Z ; A diffère ici."
      },
      {
        "content": "Ce sont deux isotopes d'un même élément chimique.",
        "correct": true,
        "explanation": "Ils possèdent le même numéro atomique Z=53 mais des nombres de masse différents."
      }
    ],
    "explanation": "Deux isotopes ont le même Z et des nombres de neutrons différents ; leurs nombres de masse A sont donc différents."
  },
  {
    "order": 12,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel terme désigne une espèce nucléaire définie par un nombre de protons Z et un nombre de neutrons N ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "nucléide",
        "un nucléide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Un nucléide est caractérisé par la composition de son noyau : Z protons et N neutrons, avec $A=Z+N$."
  },
  {
    "order": 13,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux égalités exactes.",
    "choices": [
      {
        "content": "$1\\,\\text{Å}=10^{-15}\\,\\mathrm{m}$.",
        "correct": false,
        "explanation": "$10^{-15}$ m correspond plutôt à l'ordre de grandeur nucléaire."
      },
      {
        "content": "$1\\,\\mathrm{u}=1\\,\\mathrm{kg}$.",
        "correct": false,
        "explanation": "L'unité u est une unité microscopique de masse, très inférieure au kilogramme."
      },
      {
        "content": "$1\\,\\mathrm{nm}=10^{-12}\\,\\mathrm{m}$.",
        "correct": false,
        "explanation": "Nano signifie $10^{-9}$."
      },
      {
        "content": "$1\\,\\mathrm{Da}=1\\,\\mathrm{u}$.",
        "correct": true,
        "explanation": "Le dalton et l'unité de masse atomique unifiée sont équivalents."
      },
      {
        "content": "$1\\,\\text{Å}=10^{-10}\\,\\mathrm{m}$.",
        "correct": true,
        "explanation": "L'ångström vaut $10^{-10}$ m."
      }
    ],
    "explanation": "Les échelles atomiques utilisent couramment le nanomètre et l'ångström ; les masses atomiques s'expriment souvent en u ou en Da."
  },
  {
    "order": 21,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pour deux isotopes d'un même élément considérés sous forme d'atomes neutres, quelle proposition est la plus juste ?",
    "choices": [
      {
        "content": "Leurs propriétés chimiques sont très proches, tandis que certaines propriétés physiques peuvent différer.",
        "correct": true,
        "explanation": "Le même Z conduit à une organisation électronique analogue, alors que la masse et la stabilité nucléaire peuvent différer."
      },
      {
        "content": "Ils possèdent nécessairement la même masse.",
        "correct": false,
        "explanation": "Leur nombre de masse A est précisément différent."
      },
      {
        "content": "Ils ont nécessairement la même stabilité nucléaire.",
        "correct": false,
        "explanation": "Un isotope peut être stable et un autre radioactif."
      },
      {
        "content": "Ils se distinguent par leur nombre de protons.",
        "correct": false,
        "explanation": "Des isotopes ont le même nombre de protons."
      },
      {
        "content": "Leurs propriétés chimiques sont nécessairement totalement différentes.",
        "correct": false,
        "explanation": "Ils appartiennent au même élément et possèdent la même structure électronique à l'état neutre."
      }
    ],
    "explanation": "L'isotopie modifie le nombre de neutrons et la masse du noyau sans changer le numéro atomique de l'élément."
  },
  {
    "order": 15,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Un noyau mesure typiquement $10^{-15}\\,\\mathrm{m}$ et un atome $10^{-10}\\,\\mathrm{m}$. En ordre de grandeur, combien de fois l'atome est-il plus grand en dimension linéaire ?",
    "choices": [
      {
        "content": "$10^{10}$ fois.",
        "correct": false,
        "explanation": "Il faut soustraire les exposants lors de la division."
      },
      {
        "content": "$10^2$ fois.",
        "correct": false,
        "explanation": "L'écart entre les exposants est de 5."
      },
      {
        "content": "$10^5$ fois.",
        "correct": true,
        "explanation": "Le rapport vaut $10^{-10}/10^{-15}=10^5$."
      },
      {
        "content": "$10^{15}$ fois.",
        "correct": false,
        "explanation": "Cette valeur ne correspond pas au rapport des dimensions."
      },
      {
        "content": "$10^{-5}$ fois.",
        "correct": false,
        "explanation": "Le rapport atome/noyau est supérieur à 1, pas inférieur."
      }
    ],
    "explanation": "L'atome est environ cent mille fois plus grand que son noyau en dimension linéaire, ce qui illustre le caractère très lacunaire de la matière."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les éléments transuraniens et la radioactivité, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Tout radionucléide est nécessairement produit artificiellement.",
        "correct": false,
        "explanation": "La radioactivité peut être naturelle."
      },
      {
        "content": "Un nucléide naturel est nécessairement stable.",
        "correct": false,
        "explanation": "Il existe de nombreux radionucléides naturels."
      },
      {
        "content": "Un élément transuranien possède un numéro atomique Z supérieur à 92.",
        "correct": true,
        "explanation": "Par définition, les transuraniens se situent au-delà de l'uranium."
      },
      {
        "content": "Tous les isotopes connus des éléments transuraniens sont radioactifs.",
        "correct": true,
        "explanation": "Aucun isotope stable n'est connu pour les éléments de Z>92."
      },
      {
        "content": "Le terme transuranien signifie que le nombre de masse A est supérieur à 92.",
        "correct": false,
        "explanation": "Le critère porte sur le numéro atomique Z, pas sur A."
      }
    ],
    "explanation": "La notion de transuranien repose sur $Z>92$. La radioactivité n'est pas synonyme d'origine artificielle."
  },
  {
    "order": 4,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un échantillon de bore contient 20 % de $\\ce{^{10}B}$ de masse $10\\,\\mathrm{u}$ et 80 % de $\\ce{^{11}B}$ de masse $11\\,\\mathrm{u}$. Quelle est sa masse atomique moyenne en u ?",
    "answer": {
      "type": "number",
      "value": 10.8,
      "tolerance": 0.01
    },
    "explanation": "La moyenne pondérée vaut $0{,}20\\times10+0{,}80\\times11=10{,}8\\,\\mathrm{u}$."
  }
];

export const SECTION_A_QUESTIONS: SeedQuestion[] = [
  ...UE14_CH1_ATOMES_DISCOVER_V2_QUESTIONS,
  ...UE14_CH1_ATOMES_PRACTICE_V2_QUESTIONS,
];
