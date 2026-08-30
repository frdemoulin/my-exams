import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — 4.2 Mesure d'une activité enzymatique — Synthèse — Mesure d'une activité enzymatique */
export const UE14_BIOCH_CH15_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la cinétique enzymatique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La vitesse dépend des conditions expérimentales, notamment pH et température.",
        "correct": true,
        "explanation": "Une activité mesurée n'a de sens qu'avec des conditions définies."
      },
      {
        "content": "Une vitesse peut être suivie par disparition du substrat ou apparition du produit.",
        "correct": true,
        "explanation": "Les deux approches donnent la même information stœchiométrique si la réaction est simple."
      },
      {
        "content": "Les mesures initiales limitent les effets de l'épuisement du substrat et de l'accumulation de produit.",
        "correct": true,
        "explanation": "C'est pourquoi v0 est privilégiée."
      },
      {
        "content": "Une activité mesurée est universelle quel que soit le pH ou la température.",
        "correct": false,
        "explanation": "Elle dépend des conditions."
      },
      {
        "content": "Elle décrit uniquement la structure tridimensionnelle des enzymes.",
        "correct": false,
        "explanation": "Elle étudie surtout les vitesses de réaction."
      }
    ],
    "explanation": "La cinétique enzymatique étudie les vitesses et privilégie souvent la vitesse initiale dans des conditions expérimentales définies."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle dérivée temporelle est approximativement nulle sous l'hypothèse de quasi-état stationnaire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "d[ES]/dt",
        "variation de [ES]",
        "dES/dt"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le quasi-état stationnaire signifie [ES] approximativement constante, pas équilibre thermodynamique."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes sur le bilan de concentration enzymatique, laquelle est correcte ?",
    "choices": [
      {
        "content": "Une diminution de [E] libre prouve une destruction de l'enzyme.",
        "correct": false,
        "explanation": "Elle peut simplement refléter la formation de ES."
      },
      {
        "content": "La relation correcte est [E]t=[E]-[ES].",
        "correct": false,
        "explanation": "Les deux populations s'additionnent."
      },
      {
        "content": "À saturation, aucune enzyme ne lie le substrat.",
        "correct": false,
        "explanation": "Une grande fraction est engagée dans ES."
      },
      {
        "content": "La concentration totale en enzyme reste constante pendant une mesure initiale si l'enzyme n'est ni ajoutée ni inactivée.",
        "correct": true,
        "explanation": "La catalyse régénère l'enzyme."
      },
      {
        "content": "L'enzyme totale est consommée à mesure que le produit se forme.",
        "correct": false,
        "explanation": "Elle est régénérée."
      }
    ],
    "explanation": "Dans le modèle simple, [E]t=[E]+[ES] ; l'enzyme libre varie, la quantité totale est conservée."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la mesure spectrophotométrique par Beer-Lambert, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La loi de Beer-Lambert s'écrit A=ε·l·c dans son domaine de validité.",
        "correct": true,
        "explanation": "A est sans dimension et ε dépend de la longueur d'onde."
      },
      {
        "content": "A est toujours proportionnelle à c².",
        "correct": false,
        "explanation": "Dans le régime linéaire, A est proportionnelle à c."
      },
      {
        "content": "Une pente ΔA/Δt peut être convertie en vitesse de variation de concentration si ε et l sont connus.",
        "correct": true,
        "explanation": "v=(ΔA/Δt)/(εl) en valeur absolue selon l'espèce suivie."
      },
      {
        "content": "Le signe de la pente dépend de l'espèce absorbante suivie.",
        "correct": true,
        "explanation": "Un substrat consommé peut donner une pente négative."
      },
      {
        "content": "Une mesure cinétique utilise plusieurs points dans la zone initiale linéaire.",
        "correct": true,
        "explanation": "La pente est plus robuste qu'une mesure unique."
      }
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d'absorbance en vitesse de concentration lorsque ε et l sont connus."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À combien de nkat correspond approximativement 1 U ?",
    "answer": {
      "type": "number",
      "value": 16.67,
      "tolerance": 0.05
    },
    "explanation": "1 U = 1 µmol·min⁻¹ ≈ 16,67 nkat dans des conditions de mesure définies."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur le katal, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Le katal mesure une absorbance.",
        "correct": false,
        "explanation": "Il mesure une activité catalytique."
      },
      {
        "content": "1 nkat correspond à 10⁻9 mol·s⁻1.",
        "correct": true,
        "explanation": "Les sous-multiples sont donc courants."
      },
      {
        "content": "Le symbole du katal est K.",
        "correct": false,
        "explanation": "Le symbole est kat."
      },
      {
        "content": "1 kat vaut 1 µmol/min.",
        "correct": false,
        "explanation": "Cela correspond à 1 U."
      },
      {
        "content": "1 kat correspond à 1 mol de transformation par seconde.",
        "correct": true,
        "explanation": "Il s'agit d'une unité très grande pour beaucoup d'analyses biologiques."
      }
    ],
    "explanation": "Le katal est l'unité SI d'activité catalytique : 1 kat=1 mol·s⁻¹.",
    "requiredSelectionCount": 2
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la concentration d'activité catalytique ?",
    "choices": [
      {
        "content": "Elle ne doit pas être confondue avec la concentration molaire de l'enzyme.",
        "correct": true,
        "explanation": "L'une mesure un effet catalytique, l'autre une quantité de matière d'enzyme."
      },
      {
        "content": "Elle rapporte une activité catalytique à un volume de solution.",
        "correct": true,
        "explanation": "Elle peut s'exprimer en U/L ou kat/L."
      },
      {
        "content": "Elle ne dépend jamais du protocole.",
        "correct": false,
        "explanation": "Les conditions de dosage sont essentielles."
      },
      {
        "content": "Elle s'exprime nécessairement en mg/L d'enzyme.",
        "correct": false,
        "explanation": "C'est alors une concentration massique."
      },
      {
        "content": "U/L et µmol·L⁻¹·min⁻¹ sont incompatibles.",
        "correct": false,
        "explanation": "Ils expriment la même dimension d'activité par volume."
      }
    ],
    "explanation": "La concentration d'activité rapporte une vitesse catalytique à un volume ; elle n'est pas une concentration molaire d'enzyme."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la constante catalytique kcat ?",
    "choices": [
      {
        "content": "kcat est le nombre de cycles catalytiques par site actif et par seconde à substrat saturant dans un modèle simple.",
        "correct": true,
        "explanation": "On l'appelle aussi turnover number."
      },
      {
        "content": "kcat est nécessairement égal à Km.",
        "correct": false,
        "explanation": "Ce sont des paramètres distincts."
      },
      {
        "content": "Vmax est indépendante de la quantité d'enzyme.",
        "correct": false,
        "explanation": "Elle est proportionnelle à [E]t."
      },
      {
        "content": "kcat s'exprime en mol/L.",
        "correct": false,
        "explanation": "Son unité est s⁻¹."
      },
      {
        "content": "kcat se définit à substrat très faible uniquement.",
        "correct": false,
        "explanation": "Il est associé au régime saturant."
      }
    ],
    "explanation": "kcat est le turnover à saturation et vérifie Vmax=kcat[E]t pour un modèle simple."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur l'activité spécifique, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Elle est obligatoirement identique avant et après purification.",
        "correct": false,
        "explanation": "Elle augmente généralement avec l'enrichissement de l'enzyme active."
      },
      {
        "content": "Elle rapporte l'activité catalytique à une masse de protéines.",
        "correct": true,
        "explanation": "Elle s'exprime souvent en U/mg."
      },
      {
        "content": "Lors d'une purification enzymatique, l'activité spécifique augmente généralement si l'enzyme est enrichie.",
        "correct": true,
        "explanation": "Elle sert d'indicateur de pureté fonctionnelle."
      },
      {
        "content": "U/mg et s⁻¹ sont la même grandeur sans information supplémentaire.",
        "correct": false,
        "explanation": "kcat normalise par quantité molaire de sites actifs."
      },
      {
        "content": "Elle ne correspond pas nécessairement à kcat.",
        "correct": true,
        "explanation": "La masse totale de protéines peut inclure de nombreuses espèces non enzymatiques."
      }
    ],
    "explanation": "L'activité spécifique est une activité par masse de protéines, utile notamment pour suivre une purification."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle est la valeur de v0/Vmax lorsque [S]=Km ?",
    "answer": {
      "type": "number",
      "value": 0.5,
      "tolerance": 0
    },
    "explanation": "Michaelis-Menten décrit une hyperbole : v0=Vmax[S]/(Km+[S]), avec demi-vitesse à [S]=Km."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la cinétique enzymatique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La vitesse dépend des conditions expérimentales, notamment pH et température.",
        "correct": true,
        "explanation": "Une activité mesurée n'a de sens qu'avec des conditions définies."
      },
      {
        "content": "Les mesures initiales limitent les effets de l'épuisement du substrat et de l'accumulation de produit.",
        "correct": true,
        "explanation": "C'est pourquoi v0 est privilégiée."
      },
      {
        "content": "Elle décrit uniquement la structure tridimensionnelle des enzymes.",
        "correct": false,
        "explanation": "Elle étudie surtout les vitesses de réaction."
      },
      {
        "content": "Une vitesse peut être suivie par disparition du substrat ou apparition du produit.",
        "correct": true,
        "explanation": "Les deux approches donnent la même information stœchiométrique si la réaction est simple."
      },
      {
        "content": "Elle étudie la vitesse des réactions enzymatiques et les paramètres qui la modifient.",
        "correct": true,
        "explanation": "La cinétique relie conditions expérimentales et vitesse observée."
      }
    ],
    "explanation": "La cinétique enzymatique étudie les vitesses et privilégie souvent la vitesse initiale dans des conditions expérimentales définies."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "L'état stationnaire est-il synonyme d'équilibre thermodynamique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non, un flux net peut persister"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le quasi-état stationnaire signifie [ES] approximativement constante, pas équilibre thermodynamique."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant le bilan de concentration enzymatique, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Une diminution de [E] libre prouve une destruction de l'enzyme.",
        "correct": false,
        "explanation": "Elle peut simplement refléter la formation de ES."
      },
      {
        "content": "À forte saturation en substrat, une grande fraction de l'enzyme peut être sous forme ES.",
        "correct": true,
        "explanation": "Cela mène au plateau de vitesse."
      },
      {
        "content": "La relation correcte est [E]t=[E]-[ES].",
        "correct": false,
        "explanation": "Les deux populations s'additionnent."
      },
      {
        "content": "La concentration totale en enzyme reste constante pendant une mesure initiale si l'enzyme n'est ni ajoutée ni inactivée.",
        "correct": true,
        "explanation": "La catalyse régénère l'enzyme."
      },
      {
        "content": "L'enzyme totale est consommée à mesure que le produit se forme.",
        "correct": false,
        "explanation": "Elle est régénérée."
      }
    ],
    "explanation": "Dans le modèle simple, [E]t=[E]+[ES] ; l'enzyme libre varie, la quantité totale est conservée.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement la mesure spectrophotométrique par Beer-Lambert ?",
    "choices": [
      {
        "content": "La loi de Beer-Lambert s'écrit A=ε·l·c dans son domaine de validité.",
        "correct": true,
        "explanation": "A est sans dimension et ε dépend de la longueur d'onde."
      },
      {
        "content": "La longueur de cuve n'intervient pas dans Beer-Lambert.",
        "correct": false,
        "explanation": "A est proportionnelle à l."
      },
      {
        "content": "Une pente d'absorbance suffit sans connaître ε ni l pour obtenir une concentration absolue.",
        "correct": false,
        "explanation": "Ces paramètres sont nécessaires."
      },
      {
        "content": "Le signe de la pente dépend de l'espèce absorbante suivie.",
        "correct": true,
        "explanation": "Un substrat consommé peut donner une pente négative."
      },
      {
        "content": "A est toujours proportionnelle à c².",
        "correct": false,
        "explanation": "Dans le régime linéaire, A est proportionnelle à c."
      }
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d'absorbance en vitesse de concentration lorsque ε et l sont connus."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l'unité enzymatique U ?",
    "choices": [
      {
        "content": "1 U est une unité de masse enzymatique.",
        "correct": false,
        "explanation": "C'est une unité d'activité."
      },
      {
        "content": "1 U correspond à environ 16,67 nkat.",
        "correct": true,
        "explanation": "La conversion découle de 1 µmol/min en mol/s."
      },
      {
        "content": "1 U vaut 60 kat.",
        "correct": false,
        "explanation": "La conversion est bien plus petite."
      },
      {
        "content": "Une activité en U est indépendante des conditions expérimentales.",
        "correct": false,
        "explanation": "Elle doit être définie pour un système donné."
      },
      {
        "content": "1 U vaut 1 mol/s.",
        "correct": false,
        "explanation": "Cela définit 1 kat."
      }
    ],
    "explanation": "1 U = 1 µmol·min⁻¹ ≈ 16,67 nkat dans des conditions de mesure définies."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le katal, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Le symbole du katal est K.",
        "correct": false,
        "explanation": "Le symbole est kat."
      },
      {
        "content": "Le katal est l'unité SI cohérente d'activité catalytique.",
        "correct": true,
        "explanation": "Son symbole est kat."
      },
      {
        "content": "1 kat correspond à 1 mol de transformation par seconde.",
        "correct": true,
        "explanation": "Il s'agit d'une unité très grande pour beaucoup d'analyses biologiques."
      },
      {
        "content": "1 nkat correspond à 10⁻9 mol·s⁻1.",
        "correct": true,
        "explanation": "Les sous-multiples sont donc courants."
      },
      {
        "content": "1 nkat vaut 1 mol/s.",
        "correct": false,
        "explanation": "Il vaut 10⁻9 mol/s."
      }
    ],
    "explanation": "Le katal est l'unité SI d'activité catalytique : 1 kat=1 mol·s⁻¹."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle unité courante exprime une concentration d'activité enzymatique en laboratoire ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "U/L",
        "UI/L",
        "kat/L"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La concentration d'activité rapporte une vitesse catalytique à un volume ; elle n'est pas une concentration molaire d'enzyme."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Km est une vitesse exprimée en mol/s.",
        "correct": false,
        "explanation": "Km a l'unité d'une concentration."
      },
      {
        "content": "Vmax est indépendante de la quantité d'enzyme.",
        "correct": false,
        "explanation": "Elle est proportionnelle à [E]t."
      },
      {
        "content": "Km est la concentration de substrat donnant v0=Vmax/2 dans le modèle de Michaelis-Menten.",
        "correct": true,
        "explanation": "C'est sa définition cinétique la plus sûre."
      },
      {
        "content": "kcat est le nombre de cycles catalytiques par site actif et par seconde à substrat saturant dans un modèle simple.",
        "correct": true,
        "explanation": "On l'appelle aussi turnover number."
      },
      {
        "content": "kcat caractérise l'étape globale de turnover sous les conditions expérimentales considérées.",
        "correct": true,
        "explanation": "Il peut résumer plusieurs étapes microscopiques."
      },
      {
        "content": "kcat se définit à substrat très faible uniquement.",
        "correct": false,
        "explanation": "Il est associé au régime saturant."
      },
      {
        "content": "Son unité est s⁻¹.",
        "correct": true,
        "explanation": "Il s'agit d'une fréquence de turnover."
      },
      {
        "content": "kcat s'exprime en mol/L.",
        "correct": false,
        "explanation": "Son unité est s⁻¹."
      },
      {
        "content": "Un Km plus faible n'implique pas universellement une plus forte affinité sans information mécanistique.",
        "correct": true,
        "explanation": "Cette interprétation pédagogique est une approximation."
      },
      {
        "content": "Km est toujours exactement la constante de dissociation Kd.",
        "correct": false,
        "explanation": "Ce n'est pas vrai en général."
      }
    ],
    "explanation": "kcat est le turnover à saturation et vérifie Vmax=kcat[E]t pour un modèle simple. Km est avant tout un paramètre cinétique ; son interprétation directe comme « affinité » est conditionnelle."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant l'activité spécifique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle rapporte l'activité catalytique à une masse de protéines.",
        "correct": true,
        "explanation": "Elle s'exprime souvent en U/mg."
      },
      {
        "content": "Son interprétation dépend du protocole de dosage de l'activité.",
        "correct": true,
        "explanation": "Les conditions doivent être comparables."
      },
      {
        "content": "U/mg et s⁻¹ sont la même grandeur sans information supplémentaire.",
        "correct": false,
        "explanation": "kcat normalise par quantité molaire de sites actifs."
      },
      {
        "content": "Elle ne correspond pas nécessairement à kcat.",
        "correct": true,
        "explanation": "La masse totale de protéines peut inclure de nombreuses espèces non enzymatiques."
      },
      {
        "content": "Lors d'une purification enzymatique, l'activité spécifique augmente généralement si l'enzyme est enrichie.",
        "correct": true,
        "explanation": "Elle sert d'indicateur de pureté fonctionnelle."
      }
    ],
    "explanation": "L'activité spécifique est une activité par masse de protéines, utile notamment pour suivre une purification. À distinguer de l'activité molaire spécifique : exprimée par mole d'enzyme, celle-ci rejoint kcat lorsque le substrat est saturant."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle est la valeur de v0/Vmax lorsque [S]=Km ?",
    "answer": {
      "type": "number",
      "value": 0.5,
      "tolerance": 0
    },
    "explanation": "Michaelis-Menten décrit une hyperbole : v0=Vmax[S]/(Km+[S]), avec demi-vitesse à [S]=Km."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes sur la constante de Michaelis Km, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Km est une vitesse exprimée en mol/s.",
        "correct": false,
        "explanation": "Km a l'unité d'une concentration."
      },
      {
        "content": "Km est toujours exactement la constante de dissociation Kd.",
        "correct": false,
        "explanation": "Ce n'est pas vrai en général."
      },
      {
        "content": "Km n'est pas généralement égal à la constante de dissociation Kd de ES.",
        "correct": true,
        "explanation": "L'égalité n'apparaît que dans certaines limites, notamment rapid-equilibrium."
      },
      {
        "content": "Km correspond à [S] lorsque v0=Vmax.",
        "correct": false,
        "explanation": "À [S]=Km, v0=Vmax/2."
      },
      {
        "content": "Km est la concentration de substrat donnant v0=Vmax/2 dans le modèle de Michaelis-Menten.",
        "correct": true,
        "explanation": "C'est sa définition cinétique la plus sûre."
      }
    ],
    "explanation": "Km est avant tout un paramètre cinétique ; son interprétation directe comme « affinité » est conditionnelle.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Que devient Vmax si l'on double [E]t sans modifier kcat ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "elle double",
        "Vmax double",
        "×2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Vmax est une capacité de réaction dépendant de la quantité d'enzyme ; kcat en est la normalisation molaire."
  }
];
