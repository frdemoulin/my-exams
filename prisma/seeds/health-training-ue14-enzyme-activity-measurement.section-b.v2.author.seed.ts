import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — 4.2 Mesure d'une activité enzymatique — Section B — Michaelis-Menten et paramètres cinétiques */
export const UE14_BIOCH_CH15_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'équation de Michaelis-Menten ?",
    "choices": [
      {
        "content": "Lorsque [S]=Km, v0=Vmax/2.",
        "correct": true,
        "explanation": "C'est une propriété algébrique de l'équation."
      },
      {
        "content": "Lorsque [S]≪Km, v0 est approximativement proportionnelle à [S].",
        "correct": true,
        "explanation": "Le régime est quasi du premier ordre en substrat."
      },
      {
        "content": "Pour un modèle simple, v0=Vmax[S]/(Km+[S]).",
        "correct": true,
        "explanation": "C'est la forme classique de l'équation."
      },
      {
        "content": "Lorsque [S]≫Km, v0 tend vers Vmax.",
        "correct": true,
        "explanation": "L'enzyme devient saturée et la vitesse devient quasi indépendante de [S]."
      },
      {
        "content": "Vmax est obtenue quand [S]=0.",
        "correct": false,
        "explanation": "La vitesse est alors nulle."
      }
    ],
    "explanation": "Michaelis-Menten décrit une hyperbole : v0=Vmax[S]/(Km+[S]), avec demi-vitesse à [S]=Km."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant la constante de Michaelis Km, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Km est une vitesse exprimée en mol/s.",
        "correct": false,
        "explanation": "Km a l'unité d'une concentration."
      },
      {
        "content": "Km est la concentration de substrat donnant v0=Vmax/2 dans le modèle de Michaelis-Menten.",
        "correct": true,
        "explanation": "C'est sa définition cinétique la plus sûre."
      },
      {
        "content": "Km est toujours exactement la constante de dissociation Kd.",
        "correct": false,
        "explanation": "Ce n'est pas vrai en général."
      },
      {
        "content": "Km dépend uniquement de la quantité totale d'enzyme utilisée.",
        "correct": false,
        "explanation": "Dans le modèle idéal, il ne dépend pas de [E]t."
      },
      {
        "content": "Km correspond à [S] lorsque v0=Vmax.",
        "correct": false,
        "explanation": "À [S]=Km, v0=Vmax/2."
      }
    ],
    "explanation": "Km est avant tout un paramètre cinétique ; son interprétation directe comme « affinité » est conditionnelle."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle relation permet de calculer Vmax à partir de kcat et [E]t ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Vmax = kcat[E]t",
        "Vmax=kcat×[E]t"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Vmax est une capacité de réaction dépendant de la quantité d'enzyme ; kcat en est la normalisation molaire."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la fraction d'occupation des sites dans le modèle simple ?",
    "choices": [
      {
        "content": "À [S]≫Km, la fraction ES/[E]t tend vers 1.",
        "correct": true,
        "explanation": "La saturation est approchée asymptotiquement."
      },
      {
        "content": "La fraction occupée peut dépasser 1.",
        "correct": false,
        "explanation": "Elle est comprise entre 0 et 1."
      },
      {
        "content": "À [S]=Km, la fraction ES/[E]t vaut 1/2.",
        "correct": true,
        "explanation": "La moitié de l'enzyme est alors sous forme ES dans ce modèle."
      },
      {
        "content": "À [S]=0, la fraction occupée vaut 1.",
        "correct": false,
        "explanation": "Elle vaut 0."
      },
      {
        "content": "La fraction occupée est indépendante de [S].",
        "correct": false,
        "explanation": "Elle augmente avec [S]."
      }
    ],
    "explanation": "Dans le modèle simple, v0/Vmax et [ES]/[E]t suivent [S]/(Km+[S])."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant les régimes d'ordre apparent en Michaelis-Menten, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Ordre zéro signifie vitesse nulle.",
        "correct": false,
        "explanation": "Cela signifie ici indépendance approximative vis-à-vis de [S]."
      },
      {
        "content": "À faible [S], la vitesse est indépendante de [S].",
        "correct": false,
        "explanation": "Elle est approximativement proportionnelle à [S]."
      },
      {
        "content": "À forte [S] devant Km, la vitesse devient approximativement d'ordre zéro en [S].",
        "correct": true,
        "explanation": "v0≈Vmax."
      },
      {
        "content": "À forte [S], la vitesse est proportionnelle à [S] sans limite.",
        "correct": false,
        "explanation": "Elle tend vers Vmax."
      },
      {
        "content": "À faible [S] devant Km, la vitesse est approximativement du premier ordre en [S].",
        "correct": true,
        "explanation": "v0≈(Vmax/Km)[S]."
      }
    ],
    "explanation": "Le modèle passe d'un régime approximativement d'ordre 1 à faible [S] à un régime d'ordre 0 à forte [S].",
    "requiredSelectionCount": 2
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les conditions de vitesse initiale, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une forte courbure de P(t) est préférable pour estimer une pente initiale simple.",
        "correct": false,
        "explanation": "On privilégie la zone initiale linéaire."
      },
      {
        "content": "La concentration de produit doit rester faible pendant la fenêtre de mesure.",
        "correct": true,
        "explanation": "La réaction inverse est alors limitée."
      },
      {
        "content": "L'inactivation de l'enzyme n'a aucun effet sur la pente.",
        "correct": false,
        "explanation": "Elle diminue la vitesse au cours du temps."
      },
      {
        "content": "La stabilité de l'enzyme doit être suffisante pendant l'essai.",
        "correct": true,
        "explanation": "Une inactivation fausserait la pente."
      },
      {
        "content": "La portion utilisée pour calculer v0 doit être approximativement linéaire.",
        "correct": true,
        "explanation": "Une courbure signale que les conditions évoluent."
      }
    ],
    "explanation": "La vitesse initiale est estimée dans une courte fenêtre où substrat et enzyme restent pratiquement stables et produit faible."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant les calculs simples de Michaelis-Menten, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Vmax est atteinte exactement dès [S]=2Km.",
        "correct": false,
        "explanation": "On est alors à 2/3 Vmax."
      },
      {
        "content": "Si [S]=Km/3, alors v0=0,25 Vmax.",
        "correct": true,
        "explanation": "(1/3)/(1+1/3)=1/4."
      },
      {
        "content": "Si [S]=9Km, v0=0,50Vmax.",
        "correct": false,
        "explanation": "Elle vaut 0,90Vmax."
      },
      {
        "content": "Si [S]=3Km, v0=3Vmax.",
        "correct": false,
        "explanation": "La vitesse est 0,75Vmax."
      },
      {
        "content": "Si [S]=Km/3, v0=0,75Vmax.",
        "correct": false,
        "explanation": "Elle vaut 0,25Vmax."
      }
    ],
    "explanation": "Les rapports [S]/Km permettent de calculer rapidement la fraction de Vmax atteinte."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Avec kcat=100 s⁻¹ et [E]t=2 nM, quelle est Vmax en nM·s⁻¹ ?",
    "answer": {
      "type": "number",
      "value": 200,
      "tolerance": 0
    },
    "explanation": "La relation Vmax=kcat[E]t permet de passer d'une capacité volumique au turnover par site actif."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant l'équation de Michaelis-Menten, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Vmax est obtenue quand [S]=0.",
        "correct": false,
        "explanation": "La vitesse est alors nulle."
      },
      {
        "content": "L'équation prédit une relation strictement linéaire v0-[S] à toutes concentrations.",
        "correct": false,
        "explanation": "La courbe est hyperbolique."
      },
      {
        "content": "Lorsque [S]=Km, v0=Vmax/2.",
        "correct": true,
        "explanation": "C'est une propriété algébrique de l'équation."
      },
      {
        "content": "À très forte [S], v0 diminue forcément vers zéro dans le modèle de base.",
        "correct": false,
        "explanation": "Elle tend vers Vmax."
      },
      {
        "content": "Lorsque [S]=Km, v0=Vmax.",
        "correct": false,
        "explanation": "La vitesse vaut la moitié de Vmax."
      }
    ],
    "explanation": "Michaelis-Menten décrit une hyperbole : v0=Vmax[S]/(Km+[S]), avec demi-vitesse à [S]=Km."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la constante de Michaelis Km, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Km est une vitesse exprimée en mol/s.",
        "correct": false,
        "explanation": "Km a l'unité d'une concentration."
      },
      {
        "content": "Km n'est pas généralement égal à la constante de dissociation Kd de ES.",
        "correct": true,
        "explanation": "L'égalité n'apparaît que dans certaines limites, notamment rapid-equilibrium."
      },
      {
        "content": "Km est la concentration de substrat donnant v0=Vmax/2 dans le modèle de Michaelis-Menten.",
        "correct": true,
        "explanation": "C'est sa définition cinétique la plus sûre."
      },
      {
        "content": "Un Km plus faible n'implique pas universellement une plus forte affinité sans information mécanistique.",
        "correct": true,
        "explanation": "Cette interprétation pédagogique est une approximation."
      },
      {
        "content": "Km dépend du mécanisme et des constantes microscopiques.",
        "correct": true,
        "explanation": "Dans le schéma simple Briggs-Haldane, Km=(k-1+kcat)/k1."
      }
    ],
    "explanation": "Km est avant tout un paramètre cinétique ; son interprétation directe comme « affinité » est conditionnelle."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'équation de Michaelis-Menten ?",
    "choices": [
      {
        "content": "Lorsque [S]=Km, v0=Vmax/2.",
        "correct": true,
        "explanation": "C'est une propriété algébrique de l'équation."
      },
      {
        "content": "Lorsque [S]=Km, v0=Vmax.",
        "correct": false,
        "explanation": "La vitesse vaut la moitié de Vmax."
      },
      {
        "content": "Lorsque [S]≫Km, v0 tend vers Vmax.",
        "correct": true,
        "explanation": "L'enzyme devient saturée et la vitesse devient quasi indépendante de [S]."
      },
      {
        "content": "L'équation prédit une relation strictement linéaire v0-[S] à toutes concentrations.",
        "correct": false,
        "explanation": "La courbe est hyperbolique."
      },
      {
        "content": "À très forte [S], v0 diminue forcément vers zéro dans le modèle de base.",
        "correct": false,
        "explanation": "Elle tend vers Vmax."
      }
    ],
    "explanation": "Michaelis-Menten décrit une hyperbole : v0=Vmax[S]/(Km+[S]), avec demi-vitesse à [S]=Km."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Km est-il toujours égal à une constante de dissociation Kd ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, seulement dans certaines conditions",
        "non, pas en général"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Km est avant tout un paramètre cinétique ; son interprétation directe comme « affinité » est conditionnelle."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la vitesse maximale Vmax ?",
    "choices": [
      {
        "content": "Vmax est l'asymptote de la courbe v0 en fonction de [S] dans le modèle de Michaelis-Menten.",
        "correct": true,
        "explanation": "Elle correspond au régime saturant."
      },
      {
        "content": "Vmax s'exprime forcément en s⁻¹.",
        "correct": false,
        "explanation": "C'est kcat qui s'exprime en s⁻¹."
      },
      {
        "content": "Vmax reste identique si on double la quantité d'enzyme active.",
        "correct": false,
        "explanation": "Elle double dans le modèle simple."
      },
      {
        "content": "Vmax est obtenue à [S]=Km exactement.",
        "correct": false,
        "explanation": "On obtient alors Vmax/2."
      },
      {
        "content": "Vmax ne dépend jamais de la température ou du pH.",
        "correct": false,
        "explanation": "Comme l'activité, elle dépend des conditions."
      }
    ],
    "explanation": "Vmax est une capacité de réaction dépendant de la quantité d'enzyme ; kcat en est la normalisation molaire."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la fraction d'occupation des sites dans le modèle simple, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "À [S]=Km, la fraction ES/[E]t vaut 1/2.",
        "correct": true,
        "explanation": "La moitié de l'enzyme est alors sous forme ES dans ce modèle."
      },
      {
        "content": "À [S]=Km, tous les sites sont occupés.",
        "correct": false,
        "explanation": "La fraction vaut 1/2 dans le modèle simple."
      },
      {
        "content": "Dans le modèle simple, [ES]/[E]t=[S]/(Km+[S]) au quasi-état stationnaire.",
        "correct": true,
        "explanation": "Cette fraction a la même forme que v0/Vmax."
      },
      {
        "content": "À [S]≫Km, la fraction ES/[E]t tend vers 1.",
        "correct": true,
        "explanation": "La saturation est approchée asymptotiquement."
      },
      {
        "content": "À [S]=0, la fraction occupée vaut 1.",
        "correct": false,
        "explanation": "Elle vaut 0."
      }
    ],
    "explanation": "Dans le modèle simple, v0/Vmax et [ES]/[E]t suivent [S]/(Km+[S])."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel ordre apparent en substrat observe-t-on lorsque [S]≫Km ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0
    },
    "explanation": "Le modèle passe d'un régime approximativement d'ordre 1 à faible [S] à un régime d'ordre 0 à forte [S]."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur les conditions de vitesse initiale, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "L'inactivation de l'enzyme n'a aucun effet sur la pente.",
        "correct": false,
        "explanation": "Elle diminue la vitesse au cours du temps."
      },
      {
        "content": "La stabilité de l'enzyme doit être suffisante pendant l'essai.",
        "correct": true,
        "explanation": "Une inactivation fausserait la pente."
      },
      {
        "content": "La concentration de produit doit rester faible pendant la fenêtre de mesure.",
        "correct": true,
        "explanation": "La réaction inverse est alors limitée."
      },
      {
        "content": "Une forte courbure de P(t) est préférable pour estimer une pente initiale simple.",
        "correct": false,
        "explanation": "On privilégie la zone initiale linéaire."
      },
      {
        "content": "La concentration de produit doit être maximale au départ.",
        "correct": false,
        "explanation": "Elle doit être faible."
      }
    ],
    "explanation": "La vitesse initiale est estimée dans une courte fenêtre où substrat et enzyme restent pratiquement stables et produit faible.",
    "requiredSelectionCount": 2
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les calculs simples de Michaelis-Menten, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Si [S]=9Km, v0=0,50Vmax.",
        "correct": false,
        "explanation": "Elle vaut 0,90Vmax."
      },
      {
        "content": "Si [S]=9Km, alors v0=0,90 Vmax.",
        "correct": true,
        "explanation": "9/(1+9)=9/10."
      },
      {
        "content": "Si [S]=Km/3, alors v0=0,25 Vmax.",
        "correct": true,
        "explanation": "(1/3)/(1+1/3)=1/4."
      },
      {
        "content": "Atteindre exactement Vmax nécessiterait [S] infiniment grande dans le modèle idéal.",
        "correct": true,
        "explanation": "Vmax est une asymptote."
      },
      {
        "content": "Si [S]=3Km, alors v0=0,75 Vmax.",
        "correct": true,
        "explanation": "3/(1+3)=3/4."
      }
    ],
    "explanation": "Les rapports [S]/Km permettent de calculer rapidement la fraction de Vmax atteinte."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les calculs reliant kcat, enzyme et Vmax ?",
    "choices": [
      {
        "content": "kcat s'exprime en nM/s.",
        "correct": false,
        "explanation": "Il s'exprime en s⁻¹."
      },
      {
        "content": "kcat=Vmax×[E]t.",
        "correct": false,
        "explanation": "La relation correcte est Vmax/[E]t."
      },
      {
        "content": "À Vmax fixé, kcat=Vmax/[E]t.",
        "correct": true,
        "explanation": "Il faut connaître la concentration de sites actifs."
      },
      {
        "content": "Vmax est indépendante de [E]t.",
        "correct": false,
        "explanation": "Elle est proportionnelle à [E]t."
      },
      {
        "content": "Un dosage d'activité seul permet toujours de connaître kcat sans mesurer l'enzyme active.",
        "correct": false,
        "explanation": "Il faut connaître [E]t."
      }
    ],
    "explanation": "La relation Vmax=kcat[E]t permet de passer d'une capacité volumique au turnover par site actif."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'équation de Michaelis-Menten, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Pour un modèle simple, v0=Vmax[S]/(Km+[S]).",
        "correct": true,
        "explanation": "C'est la forme classique de l'équation."
      },
      {
        "content": "L'équation prédit une relation strictement linéaire v0-[S] à toutes concentrations.",
        "correct": false,
        "explanation": "La courbe est hyperbolique."
      },
      {
        "content": "Vmax est obtenue quand [S]=0.",
        "correct": false,
        "explanation": "La vitesse est alors nulle."
      },
      {
        "content": "Lorsque [S]≫Km, v0 tend vers Vmax.",
        "correct": true,
        "explanation": "L'enzyme devient saturée et la vitesse devient quasi indépendante de [S]."
      },
      {
        "content": "Lorsque [S]=Km, v0=Vmax.",
        "correct": false,
        "explanation": "La vitesse vaut la moitié de Vmax."
      }
    ],
    "explanation": "Michaelis-Menten décrit une hyperbole : v0=Vmax[S]/(Km+[S]), avec demi-vitesse à [S]=Km."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À quelle vitesse relative se trouve l'enzyme lorsque [S]=Km ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Vmax/2",
        "la moitié de Vmax",
        "50 % de Vmax"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Km est avant tout un paramètre cinétique ; son interprétation directe comme « affinité » est conditionnelle."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Vmax ne dépend jamais de la température ou du pH.",
        "correct": false,
        "explanation": "Comme l'activité, elle dépend des conditions."
      },
      {
        "content": "On attend idéalement que tout le substrat soit consommé avant de mesurer v0.",
        "correct": false,
        "explanation": "Cela ne mesure plus une vitesse initiale."
      },
      {
        "content": "Vmax s'exprime forcément en s⁻¹.",
        "correct": false,
        "explanation": "C'est kcat qui s'exprime en s⁻¹."
      },
      {
        "content": "La stabilité de l'enzyme doit être suffisante pendant l'essai.",
        "correct": true,
        "explanation": "Une inactivation fausserait la pente."
      },
      {
        "content": "Vmax n'est pas une constante intrinsèque indépendante de la quantité d'enzyme.",
        "correct": true,
        "explanation": "Contrairement à kcat, elle dépend de [E]t."
      },
      {
        "content": "La concentration de produit doit être maximale au départ.",
        "correct": false,
        "explanation": "Elle doit être faible."
      },
      {
        "content": "Vmax reste identique si on double la quantité d'enzyme active.",
        "correct": false,
        "explanation": "Elle double dans le modèle simple."
      },
      {
        "content": "La portion utilisée pour calculer v0 doit être approximativement linéaire.",
        "correct": true,
        "explanation": "Une courbure signale que les conditions évoluent."
      },
      {
        "content": "Vmax est l'asymptote de la courbe v0 en fonction de [S] dans le modèle de Michaelis-Menten.",
        "correct": true,
        "explanation": "Elle correspond au régime saturant."
      },
      {
        "content": "La concentration de produit doit rester faible pendant la fenêtre de mesure.",
        "correct": true,
        "explanation": "La réaction inverse est alors limitée."
      }
    ],
    "explanation": "Vmax est une capacité de réaction dépendant de la quantité d'enzyme ; kcat en est la normalisation molaire. La vitesse initiale est estimée dans une courte fenêtre où substrat et enzyme restent pratiquement stables et produit faible."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle fraction de l'enzyme est sous forme ES lorsque [S]=Km dans le modèle simple ?",
    "answer": {
      "type": "number",
      "value": 0.5,
      "tolerance": 0
    },
    "explanation": "Dans le modèle simple, v0/Vmax et [ES]/[E]t suivent [S]/(Km+[S])."
  }
];
