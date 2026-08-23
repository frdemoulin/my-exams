import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — 4.2 Mesure d'une activité enzymatique — Section A — Mesure d'activité et paramètres catalytiques */
export const UE14_BIOCH_CH15_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la cinétique enzymatique, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Seule la disparition du produit peut être utilisée pour mesurer la vitesse.",
        "correct": false,
        "explanation": "On suit typiquement produit formé ou substrat consommé."
      },
      {
        "content": "Elle étudie la vitesse des réactions enzymatiques et les paramètres qui la modifient.",
        "correct": true,
        "explanation": "La cinétique relie conditions expérimentales et vitesse observée."
      },
      {
        "content": "La vitesse dépend des conditions expérimentales, notamment pH et température.",
        "correct": true,
        "explanation": "Une activité mesurée n'a de sens qu'avec des conditions définies."
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
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant l'état quasi-stationnaire en cinétique enzymatique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "La concentration totale en enzyme disparaît rapidement pendant la réaction.",
        "correct": false,
        "explanation": "La quantité totale d'enzyme est conservée hors inactivation/dégradation."
      },
      {
        "content": "À l'état stationnaire, le produit est déjà à sa concentration d'équilibre finale.",
        "correct": false,
        "explanation": "On travaille au contraire au début de la réaction."
      },
      {
        "content": "État stationnaire signifie nécessairement équilibre chimique complet.",
        "correct": false,
        "explanation": "Il peut exister un flux net de produit."
      },
      {
        "content": "Un état stationnaire n'est pas nécessairement un équilibre thermodynamique.",
        "correct": true,
        "explanation": "Un flux net de produit peut persister."
      },
      {
        "content": "La condition d[ES]/dt≈0 impose [ES]=0.",
        "correct": false,
        "explanation": "[ES] peut être non nulle et presque constante."
      }
    ],
    "explanation": "Le quasi-état stationnaire signifie [ES] approximativement constante, pas équilibre thermodynamique."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle concentration reste normalement constante : enzyme libre ou enzyme totale ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "enzyme totale",
        "[E]t",
        "concentration totale en enzyme"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Dans le modèle simple, [E]t=[E]+[ES] ; l'enzyme libre varie, la quantité totale est conservée."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la mesure spectrophotométrique par Beer-Lambert, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "La longueur de cuve n'intervient pas dans Beer-Lambert.",
        "correct": false,
        "explanation": "A est proportionnelle à l."
      },
      {
        "content": "Le signe de la pente dépend de l'espèce absorbante suivie.",
        "correct": true,
        "explanation": "Un substrat consommé peut donner une pente négative."
      },
      {
        "content": "Une pente ΔA/Δt peut être convertie en vitesse de variation de concentration si ε et l sont connus.",
        "correct": true,
        "explanation": "v=(ΔA/Δt)/(εl) en valeur absolue selon l'espèce suivie."
      },
      {
        "content": "Une mesure cinétique utilise plusieurs points dans la zone initiale linéaire.",
        "correct": true,
        "explanation": "La pente est plus robuste qu'une mesure unique."
      },
      {
        "content": "La loi de Beer-Lambert ne peut jamais être utilisée en cinétique enzymatique.",
        "correct": false,
        "explanation": "Elle est très courante."
      }
    ],
    "explanation": "Beer-Lambert permet de convertir une pente d'absorbance en vitesse de concentration lorsque ε et l sont connus."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant l'unité enzymatique U.",
    "choices": [
      {
        "content": "1 U correspond à environ 16,67 nkat.",
        "correct": true,
        "explanation": "La conversion découle de 1 µmol/min en mol/s."
      },
      {
        "content": "1 U est une unité de masse enzymatique.",
        "correct": false,
        "explanation": "C'est une unité d'activité."
      },
      {
        "content": "Une activité en U est indépendante des conditions expérimentales.",
        "correct": false,
        "explanation": "Elle doit être définie pour un système donné."
      },
      {
        "content": "Une unité enzymatique U correspond à 1 µmol de substrat transformé par minute dans des conditions définies.",
        "correct": true,
        "explanation": "L'ancienne unité hors SI reste couramment utilisée."
      },
      {
        "content": "1 U vaut 1 mol/s.",
        "correct": false,
        "explanation": "Cela définit 1 kat."
      }
    ],
    "explanation": "1 U = 1 µmol·min⁻¹ ≈ 16,67 nkat dans des conditions de mesure définies.",
    "requiredSelectionCount": 2
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le katal, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "1 U vaut environ 16,67 nkat.",
        "correct": true,
        "explanation": "La conversion est exacte à l'arrondi près."
      },
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
        "content": "1 kat correspond à 1 mol de transformation par seconde.",
        "correct": true,
        "explanation": "Il s'agit d'une unité très grande pour beaucoup d'analyses biologiques."
      },
      {
        "content": "Le katal est l'unité SI cohérente d'activité catalytique.",
        "correct": true,
        "explanation": "Son symbole est kat."
      }
    ],
    "explanation": "Le katal est l'unité SI d'activité catalytique : 1 kat=1 mol·s⁻¹."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Concernant la concentration d'activité catalytique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Elle ne dépend jamais du protocole.",
        "correct": false,
        "explanation": "Les conditions de dosage sont essentielles."
      },
      {
        "content": "U/L et µmol·L⁻¹·min⁻¹ sont incompatibles.",
        "correct": false,
        "explanation": "Ils expriment la même dimension d'activité par volume."
      },
      {
        "content": "Elle correspond exactement à kcat en toutes circonstances.",
        "correct": false,
        "explanation": "kcat est normalisé par quantité d'enzyme active et saturation en substrat."
      },
      {
        "content": "Elle s'exprime nécessairement en mg/L d'enzyme.",
        "correct": false,
        "explanation": "C'est alors une concentration massique."
      },
      {
        "content": "Elle rapporte une activité catalytique à un volume de solution.",
        "correct": true,
        "explanation": "Elle peut s'exprimer en U/L ou kat/L."
      }
    ],
    "explanation": "La concentration d'activité rapporte une vitesse catalytique à un volume ; elle n'est pas une concentration molaire d'enzyme."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle est l'unité usuelle de kcat ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "s-1",
        "s⁻¹",
        "par seconde"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "kcat est le turnover à saturation et vérifie Vmax=kcat[E]t pour un modèle simple."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l'activité spécifique ?",
    "choices": [
      {
        "content": "Elle ne correspond pas nécessairement à kcat.",
        "correct": true,
        "explanation": "La masse totale de protéines peut inclure de nombreuses espèces non enzymatiques."
      },
      {
        "content": "Elle ne peut jamais être utilisée pour suivre une purification.",
        "correct": false,
        "explanation": "C'est un usage classique."
      },
      {
        "content": "Elle est obligatoirement identique avant et après purification.",
        "correct": false,
        "explanation": "Elle augmente généralement avec l'enrichissement de l'enzyme active."
      },
      {
        "content": "U/mg et s⁻¹ sont la même grandeur sans information supplémentaire.",
        "correct": false,
        "explanation": "kcat normalise par quantité molaire de sites actifs."
      },
      {
        "content": "Elle s'exprime toujours en mol/L.",
        "correct": false,
        "explanation": "Elle est une activité par masse."
      }
    ],
    "explanation": "L'activité spécifique est une activité par masse de protéines, utile notamment pour suivre une purification."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la cinétique enzymatique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les mesures initiales limitent les effets de l'épuisement du substrat et de l'accumulation de produit.",
        "correct": true,
        "explanation": "C'est pourquoi v0 est privilégiée."
      },
      {
        "content": "Seule la disparition du produit peut être utilisée pour mesurer la vitesse.",
        "correct": false,
        "explanation": "On suit typiquement produit formé ou substrat consommé."
      },
      {
        "content": "Elle décrit uniquement la structure tridimensionnelle des enzymes.",
        "correct": false,
        "explanation": "Elle étudie surtout les vitesses de réaction."
      },
      {
        "content": "Une activité mesurée est universelle quel que soit le pH ou la température.",
        "correct": false,
        "explanation": "Elle dépend des conditions."
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
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la cinétique enzymatique, lesquelles sont correctes ?",
    "choices": [
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
        "content": "La vitesse dépend des conditions expérimentales, notamment pH et température.",
        "correct": true,
        "explanation": "Une activité mesurée n'a de sens qu'avec des conditions définies."
      },
      {
        "content": "La vitesse enzymatique est indépendante de la concentration en substrat.",
        "correct": false,
        "explanation": "Elle en dépend généralement."
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
    "order": 12,
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
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement le bilan de concentration enzymatique ?",
    "choices": [
      {
        "content": "L'enzyme totale est consommée à mesure que le produit se forme.",
        "correct": false,
        "explanation": "Elle est régénérée."
      },
      {
        "content": "À saturation, aucune enzyme ne lie le substrat.",
        "correct": false,
        "explanation": "Une grande fraction est engagée dans ES."
      },
      {
        "content": "La relation correcte est [E]t=[E]-[ES].",
        "correct": false,
        "explanation": "Les deux populations s'additionnent."
      },
      {
        "content": "Une diminution de [E] libre prouve une destruction de l'enzyme.",
        "correct": false,
        "explanation": "Elle peut simplement refléter la formation de ES."
      },
      {
        "content": "À forte saturation en substrat, une grande fraction de l'enzyme peut être sous forme ES.",
        "correct": true,
        "explanation": "Cela mène au plateau de vitesse."
      }
    ],
    "explanation": "Dans le modèle simple, [E]t=[E]+[ES] ; l'enzyme libre varie, la quantité totale est conservée."
  },
  {
    "order": 14,
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
        "content": "Le signe de la pente dépend de l'espèce absorbante suivie.",
        "correct": true,
        "explanation": "Un substrat consommé peut donner une pente négative."
      },
      {
        "content": "La longueur de cuve n'intervient pas dans Beer-Lambert.",
        "correct": false,
        "explanation": "A est proportionnelle à l."
      },
      {
        "content": "Une pente ΔA/Δt peut être convertie en vitesse de variation de concentration si ε et l sont connus.",
        "correct": true,
        "explanation": "v=(ΔA/Δt)/(εl) en valeur absolue selon l'espèce suivie."
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
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "À combien de micromoles par minute correspond 1 U ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "1 U = 1 µmol·min⁻¹ ≈ 16,67 nkat dans des conditions de mesure définies."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Concernant le katal, choisissez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Le katal mesure une absorbance.",
        "correct": false,
        "explanation": "Il mesure une activité catalytique."
      },
      {
        "content": "1 nkat vaut 1 mol/s.",
        "correct": false,
        "explanation": "Il vaut 10⁻9 mol/s."
      },
      {
        "content": "1 kat correspond à 1 mol de transformation par seconde.",
        "correct": true,
        "explanation": "Il s'agit d'une unité très grande pour beaucoup d'analyses biologiques."
      },
      {
        "content": "Le symbole du katal est K.",
        "correct": false,
        "explanation": "Le symbole est kat."
      },
      {
        "content": "Le katal est l'unité SI cohérente d'activité catalytique.",
        "correct": true,
        "explanation": "Son symbole est kat."
      }
    ],
    "explanation": "Le katal est l'unité SI d'activité catalytique : 1 kat=1 mol·s⁻¹.",
    "requiredSelectionCount": 2
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la concentration d'activité catalytique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "U/L et µmol·L⁻¹·min⁻¹ sont incompatibles.",
        "correct": false,
        "explanation": "Ils expriment la même dimension d'activité par volume."
      },
      {
        "content": "Elle correspond exactement à kcat en toutes circonstances.",
        "correct": false,
        "explanation": "kcat est normalisé par quantité d'enzyme active et saturation en substrat."
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
        "content": "Elle ne doit pas être confondue avec la concentration molaire de l'enzyme.",
        "correct": true,
        "explanation": "L'une mesure un effet catalytique, l'autre une quantité de matière d'enzyme."
      }
    ],
    "explanation": "La concentration d'activité rapporte une vitesse catalytique à un volume ; elle n'est pas une concentration molaire d'enzyme."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant la constante catalytique kcat, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "kcat se définit à substrat très faible uniquement.",
        "correct": false,
        "explanation": "Il est associé au régime saturant."
      },
      {
        "content": "kcat s'exprime en mol/L.",
        "correct": false,
        "explanation": "Son unité est s⁻¹."
      },
      {
        "content": "Vmax est indépendante de la quantité d'enzyme.",
        "correct": false,
        "explanation": "Elle est proportionnelle à [E]t."
      },
      {
        "content": "kcat est nécessairement égal à Km.",
        "correct": false,
        "explanation": "Ce sont des paramètres distincts."
      },
      {
        "content": "Son unité est s⁻¹.",
        "correct": true,
        "explanation": "Il s'agit d'une fréquence de turnover."
      }
    ],
    "explanation": "kcat est le turnover à saturation et vérifie Vmax=kcat[E]t pour un modèle simple."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions décrivent correctement l'activité spécifique ?",
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
        "content": "Elle ne peut jamais être utilisée pour suivre une purification.",
        "correct": false,
        "explanation": "C'est un usage classique."
      },
      {
        "content": "Elle est obligatoirement identique avant et après purification.",
        "correct": false,
        "explanation": "Elle augmente généralement avec l'enrichissement de l'enzyme active."
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
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelles deux grandeurs chimiques peut-on suivre pour mesurer une vitesse enzymatique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "disparition du substrat et apparition du produit",
        "substrat consommé et produit formé"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La cinétique enzymatique étudie les vitesses et privilégie souvent la vitesse initiale dans des conditions expérimentales définies."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant l'état quasi-stationnaire en cinétique enzymatique, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "État stationnaire signifie nécessairement équilibre chimique complet.",
        "correct": false,
        "explanation": "Il peut exister un flux net de produit."
      },
      {
        "content": "À l'état stationnaire, le produit est déjà à sa concentration d'équilibre finale.",
        "correct": false,
        "explanation": "On travaille au contraire au début de la réaction."
      },
      {
        "content": "La condition d[ES]/dt≈0 impose [ES]=0.",
        "correct": false,
        "explanation": "[ES] peut être non nulle et presque constante."
      },
      {
        "content": "Les mesures de vitesse initiale sont réalisées avant accumulation importante de produit.",
        "correct": true,
        "explanation": "Cela limite la réaction inverse et d'autres complications."
      },
      {
        "content": "La concentration totale en enzyme disparaît rapidement pendant la réaction.",
        "correct": false,
        "explanation": "La quantité totale d'enzyme est conservée hors inactivation/dégradation."
      }
    ],
    "explanation": "Le quasi-état stationnaire signifie [ES] approximativement constante, pas équilibre thermodynamique."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle relation relie enzyme totale, enzyme libre et complexe ES dans le modèle simple ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "[E]t = [E] + [ES]",
        "Et = E + ES",
        "E totale = E libre + ES"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Dans le modèle simple, [E]t=[E]+[ES] ; l'enzyme libre varie, la quantité totale est conservée."
  }
];
