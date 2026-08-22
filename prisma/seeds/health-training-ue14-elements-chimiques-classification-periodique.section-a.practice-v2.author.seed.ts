import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.1 – Section A – Atomes – PRACTICE */
export const UE14_CH1_ATOMES_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le diamètre caractéristique d'un atome est d'environ $0{,}1\\,\\mathrm{nm}$. Combien cela représente-t-il en ångströms ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "$1\\,\\text{Å}=0{,}1\\,\\mathrm{nm}$, donc $0{,}1\\,\\mathrm{nm}=1\\,\\text{Å}$."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de deux isotopes d'un même élément, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils ont nécessairement la même stabilité nucléaire.",
        "correct": false,
        "explanation": "La stabilité peut varier fortement d'un isotope à l'autre."
      },
      {
        "content": "Ils possèdent des nombres de neutrons différents.",
        "correct": true,
        "explanation": "La différence isotopique porte sur N."
      },
      {
        "content": "Ils possèdent nécessairement des nombres de masse A différents.",
        "correct": true,
        "explanation": "À Z constant, des N différents donnent des A différents."
      },
      {
        "content": "Ils possèdent nécessairement des charges électriques différentes.",
        "correct": false,
        "explanation": "La charge dépend de l'ionisation, pas de l'isotopie."
      },
      {
        "content": "Ils possèdent le même numéro atomique Z.",
        "correct": true,
        "explanation": "Ils appartiennent au même élément chimique."
      }
    ],
    "explanation": "Même Z, N différent, donc A différent : c'est le cœur de la définition isotopique."
  },
  {
    "order": 26,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "L'ion $\\ce{^{27}_{13}Al^{3+}}$ possède combien d'électrons ?",
    "answer": {
      "type": "number",
      "value": 10,
      "tolerance": 0
    },
    "explanation": "L'aluminium neutre possède 13 électrons. La charge $3+$ correspond à la perte de 3 électrons : $13-3=10$."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la masse du noyau et l'énergie de liaison, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le noyau du protium $\\ce{^{1}_{1}H}$ ne contient aucun neutron.",
        "correct": true,
        "explanation": "Pour A=1 et Z=1, N=0."
      },
      {
        "content": "La masse d'un noyau lié est inférieure à la somme des masses de ses nucléons séparés.",
        "correct": true,
        "explanation": "Cette différence est le défaut de masse."
      },
      {
        "content": "La masse d'un électron est voisine de $1\\,\\mathrm{u}$.",
        "correct": false,
        "explanation": "La masse électronique est très inférieure à 1 u."
      },
      {
        "content": "Le défaut de masse est associé à l'énergie de liaison du noyau.",
        "correct": true,
        "explanation": "La relation $E=\\Delta mc^2$ relie défaut de masse et énergie."
      },
      {
        "content": "Tout noyau contient obligatoirement au moins un neutron.",
        "correct": false,
        "explanation": "Le protium est un contre-exemple."
      }
    ],
    "explanation": "La masse nucléaire réelle reflète l'énergie de liaison ; le protium rappelle qu'un noyau peut ne contenir aucun neutron."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Pourquoi la notation générique $\\ce{^{1}_{3}X}$ ne peut-elle pas correspondre à un nucléide réel ?",
    "choices": [
      {
        "content": "Elle conduirait à un nombre de neutrons négatif.",
        "correct": true,
        "explanation": "$N=A-Z=1-3=-2$, ce qui est impossible."
      },
      {
        "content": "Un nombre de masse doit toujours être pair.",
        "correct": false,
        "explanation": "De nombreux nucléides ont un A impair."
      },
      {
        "content": "Le symbole X est interdit dans une écriture générique.",
        "correct": false,
        "explanation": "X peut être utilisé comme symbole générique."
      },
      {
        "content": "Un nucléide doit avoir autant de protons que de neutrons.",
        "correct": false,
        "explanation": "Cette égalité n'est pas une règle générale."
      },
      {
        "content": "Un numéro atomique ne peut jamais dépasser 2.",
        "correct": false,
        "explanation": "De nombreux éléments ont Z>2."
      }
    ],
    "explanation": "Une notation nucléaire doit respecter $A\\ge Z$ afin que $N=A-Z$ soit un entier positif ou nul."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions compatibles avec un atome électriquement neutre.",
    "choices": [
      {
        "content": "Il peut posséder davantage de neutrons que de protons.",
        "correct": true,
        "explanation": "La neutralité ne contraint pas N."
      },
      {
        "content": "Il possède autant de protons que d'électrons.",
        "correct": true,
        "explanation": "C'est la condition de neutralité."
      },
      {
        "content": "Il peut posséder moins d'électrons que de protons tout en restant neutre.",
        "correct": false,
        "explanation": "Il serait alors chargé positivement."
      },
      {
        "content": "Son noyau ne contient aucune charge positive.",
        "correct": false,
        "explanation": "Les protons du noyau portent les charges positives."
      },
      {
        "content": "Il possède nécessairement autant de neutrons que d'électrons.",
        "correct": false,
        "explanation": "N est indépendant de la neutralité."
      }
    ],
    "explanation": "La neutralité impose seulement l'égalité entre protons et électrons ; le nombre de neutrons peut varier."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation rend le mieux compte de la répartition de la masse dans un atome ?",
    "choices": [
      {
        "content": "La masse dépend essentiellement du volume du nuage électronique.",
        "correct": false,
        "explanation": "Un grand volume n'implique pas une grande masse."
      },
      {
        "content": "Le noyau contribue très peu à la masse de l'atome.",
        "correct": false,
        "explanation": "C'est l'inverse : il en porte presque toute la masse."
      },
      {
        "content": "La quasi-totalité de la masse est concentrée dans le noyau.",
        "correct": true,
        "explanation": "Les protons et neutrons sont beaucoup plus massifs que les électrons."
      },
      {
        "content": "La masse est surtout portée par les électrons de valence.",
        "correct": false,
        "explanation": "Les électrons de valence ont la même faible masse que les autres électrons."
      },
      {
        "content": "La masse est répartie à parts égales entre noyau et électrons.",
        "correct": false,
        "explanation": "La contribution massique des électrons est très faible."
      }
    ],
    "explanation": "Le noyau est minuscule par rapport à l'atome mais concentre presque toute sa masse."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le fluor 18 est utilisé en imagerie TEP. Pour $\\ce{^{18}_{9}F}$, combien le noyau contient-il de neutrons ?",
    "answer": {
      "type": "number",
      "value": 9,
      "tolerance": 0
    },
    "explanation": "$N=A-Z=18-9=9$."
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'unité de masse atomique unifiée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La masse d'un proton est proche de $1\\,\\mathrm{u}$ sans lui être exactement égale.",
        "correct": true,
        "explanation": "La masse du proton est légèrement supérieure à 1 u."
      },
      {
        "content": "Le symbole de l'unité u est kg.",
        "correct": false,
        "explanation": "kg est l'unité SI de masse ; u est une unité atomique."
      },
      {
        "content": "Une unité u vaut un douzième de la masse d'un atome de carbone 12 neutre et au repos dans son état fondamental.",
        "correct": true,
        "explanation": "C'est la définition moderne de l'unité de masse atomique unifiée."
      },
      {
        "content": "Une molécule de masse 100 Da a une masse molaire exactement égale à 100 kg·mol⁻¹.",
        "correct": false,
        "explanation": "Numériquement, 100 Da par molécule correspond approximativement à 100 g·mol⁻¹, pas 100 kg·mol⁻¹."
      },
      {
        "content": "$1\\,\\mathrm{Da}=1\\,\\mathrm{u}$.",
        "correct": true,
        "explanation": "Dalton et unité u correspondent à la même unité."
      }
    ],
    "explanation": "L'unité u et le dalton sont adaptées aux masses microscopiques et se relient naturellement aux masses molaires en g·mol⁻¹."
  },
  {
    "order": 24,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une hématie mesure environ $7\\,\\mathrm{\\mu m}$ de diamètre, contre $0{,}1\\,\\mathrm{nm}$ pour un atome. En ordre de grandeur, combien de fois l'hématie est-elle plus grande en diamètre ?",
    "answer": {
      "type": "number",
      "value": 70000,
      "tolerance": 0
    },
    "explanation": "$7\\,\\mathrm{\\mu m}=7\\times10^{-6}\\,\\mathrm{m}$ et $0{,}1\\,\\mathrm{nm}=10^{-10}\\,\\mathrm{m}$ ; le rapport vaut $7\\times10^4=70\\,000$."
  }
];
