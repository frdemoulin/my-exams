import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.1 – Section B – Chiralité, représentations et filiation */
export const UE14_BIOCH_CH1_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant un carbone asymétrique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un carbone asymétrique tétraédrique porte quatre substituants différents.",
        "correct": true,
        "explanation": "Cette condition en fait un centre stéréogène."
      },
      {
        "content": "On note souvent un tel carbone $\\mathrm{C^*}$.",
        "correct": true,
        "explanation": "Cette notation signale un centre de chiralité."
      },
      {
        "content": "Un carbone sp2 trigonal plan n'est pas un carbone asymétrique tétraédrique classique.",
        "correct": true,
        "explanation": "Il ne porte pas quatre substituants tétraédriques."
      },
      {
        "content": "Un carbone asymétrique peut rendre une molécule chirale.",
        "correct": true,
        "explanation": "La symétrie globale de la molécule doit aussi être considérée."
      },
      {
        "content": "Tout carbone portant un OH est asymétrique.",
        "correct": false,
        "explanation": "Il faut quatre substituants différents."
      }
    ],
    "explanation": "Un carbone asymétrique est un centre tétraédrique lié à quatre substituants différents."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de la projection de Fischer, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Toutes les liaisons sont réellement dans le plan de la feuille.",
        "correct": false,
        "explanation": "La projection encode une géométrie tridimensionnelle."
      },
      {
        "content": "Une projection de Fischer ne permet pas de comparer deux oses.",
        "correct": false,
        "explanation": "Elle est précisément utilisée pour cela."
      },
      {
        "content": "Elle facilite la comparaison des configurations des oses.",
        "correct": true,
        "explanation": "Elle rend lisibles les positions droite/gauche des OH."
      },
      {
        "content": "Les liaisons horizontales s'éloignent de l'observateur.",
        "correct": false,
        "explanation": "Elles viennent vers l'observateur."
      },
      {
        "content": "Le carbone le plus oxydé est obligatoirement placé en bas.",
        "correct": false,
        "explanation": "La convention usuelle le place en haut."
      }
    ],
    "explanation": "La projection de Fischer encode la stéréochimie avec chaîne verticale et liaisons horizontales vers l'observateur."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "De quel côté se trouve l'OH du carbone de référence d'un D-ose en projection de Fischer ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "droite",
        "à droite",
        "a droite"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La série D/L est une configuration relative et ne prédit pas le signe du pouvoir rotatoire."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la série L d'un ose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "D et L sont déterminés par la masse moléculaire.",
        "correct": false,
        "explanation": "Ils dépendent de la configuration."
      },
      {
        "content": "Le L-fucose est un exemple biologique de sucre de série L chez l'être humain.",
        "correct": true,
        "explanation": "Il intervient dans des glycoconjugués."
      },
      {
        "content": "La lettre L ne signifie pas nécessairement lévogyre.",
        "correct": true,
        "explanation": "Le signe optique est indépendant de D/L."
      },
      {
        "content": "L'acide L-iduronique est un autre dérivé de série L présent chez l'être humain.",
        "correct": true,
        "explanation": "Il entre dans certains glycosaminoglycanes."
      },
      {
        "content": "En Fischer, l'OH de référence d'un L-ose est à droite.",
        "correct": false,
        "explanation": "À droite correspond à D."
      }
    ],
    "explanation": "Les séries D et L sont définies par configuration relative ; quelques dérivés de série L ont un rôle biologique humain."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'attribution d'une configuration R/S à un carbone asymétrique d'un ose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un carbone asymétrique doit être lié à quatre carbones.",
        "correct": false,
        "explanation": "Les substituants peuvent comporter H, O ou d'autres atomes."
      },
      {
        "content": "Tout carbone portant un OH est asymétrique.",
        "correct": false,
        "explanation": "Il faut quatre substituants différents."
      },
      {
        "content": "Un carbone asymétrique tétraédrique porte quatre substituants différents.",
        "correct": true,
        "explanation": "Cette condition en fait un centre stéréogène."
      },
      {
        "content": "Un carbone sp2 trigonal plan n'est pas un carbone asymétrique tétraédrique classique.",
        "correct": true,
        "explanation": "Il ne porte pas quatre substituants tétraédriques."
      },
      {
        "content": "Un carbone d'un groupe carbonyle est un centre chiral tétraédrique.",
        "correct": false,
        "explanation": "Il est sp2 et plan."
      }
    ],
    "explanation": "Un carbone asymétrique est un centre tétraédrique lié à quatre substituants différents."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur le glycéraldéhyde et la filiation D/L, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "La dihydroxyacétone possède deux énantiomères D et L.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "D- et L-glycéraldéhyde sont identiques et superposables.",
        "correct": false,
        "explanation": "Ils sont images miroir non superposables."
      },
      {
        "content": "Le glycéraldéhyde possède un seul centre stéréogène.",
        "correct": true,
        "explanation": "Son carbone C2 est asymétrique."
      },
      {
        "content": "La dihydroxyacétone ne définit pas de série D/L car elle est achirale.",
        "correct": true,
        "explanation": "Elle ne possède aucun C*."
      },
      {
        "content": "La série D/L est définie par le nombre d'oxygènes.",
        "correct": false,
        "explanation": "Elle est stéréochimique."
      }
    ],
    "explanation": "La filiation D/L des oses est référée au glycéraldéhyde.",
    "requiredSelectionCount": 2
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant D/L et pouvoir rotatoire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le signe +/− du pouvoir rotatoire est mesuré expérimentalement.",
        "correct": true,
        "explanation": "Il décrit le sens de rotation de la lumière polarisée."
      },
      {
        "content": "Tout D-ose est nécessairement dextrogyre.",
        "correct": false,
        "explanation": "D et + ne sont pas synonymes."
      },
      {
        "content": "Deux énantiomères purs ont le même signe de rotation.",
        "correct": false,
        "explanation": "Leurs signes sont opposés."
      },
      {
        "content": "Deux énantiomères purs ont des pouvoirs rotatoires de même module et de signes opposés dans les mêmes conditions.",
        "correct": true,
        "explanation": "C'est une propriété des énantiomères."
      },
      {
        "content": "Tout L-ose est nécessairement lévogyre.",
        "correct": false,
        "explanation": "L et − ne sont pas synonymes."
      }
    ],
    "explanation": "Il faut dissocier la configuration D/L du signe expérimental du pouvoir rotatoire."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel 6-désoxyose de série L est fréquent dans des glycoconjugués humains ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "L-fucose",
        "fucose",
        "le L-fucose"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La série D prédomine chez l'être humain, avec des exceptions biologiquement importantes comme L-fucose et L-iduronate."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur un carbone asymétrique, laquelle est exacte ?",
    "choices": [
      {
        "content": "Un carbone asymétrique tétraédrique porte quatre substituants différents.",
        "correct": true,
        "explanation": "Cette condition en fait un centre stéréogène."
      },
      {
        "content": "Un carbone asymétrique doit être lié à quatre carbones.",
        "correct": false,
        "explanation": "Les substituants peuvent comporter H, O ou d'autres atomes."
      },
      {
        "content": "Un carbone d'un groupe carbonyle est un centre chiral tétraédrique.",
        "correct": false,
        "explanation": "Il est sp2 et plan."
      },
      {
        "content": "La présence d'un C* rend la molécule automatiquement achirale.",
        "correct": false,
        "explanation": "Elle favorise au contraire la chiralité, sous réserve de la symétrie globale."
      },
      {
        "content": "Tout carbone portant un OH est asymétrique.",
        "correct": false,
        "explanation": "Il faut quatre substituants différents."
      }
    ],
    "explanation": "Un carbone asymétrique est un centre tétraédrique lié à quatre substituants différents."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la projection de Fischer, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle facilite la comparaison des configurations des oses.",
        "correct": true,
        "explanation": "Elle rend lisibles les positions droite/gauche des OH."
      },
      {
        "content": "Le carbone le plus oxydé est obligatoirement placé en bas.",
        "correct": false,
        "explanation": "La convention usuelle le place en haut."
      },
      {
        "content": "Les liaisons verticales sont dirigées vers l'arrière.",
        "correct": true,
        "explanation": "Elles s'éloignent de l'observateur."
      },
      {
        "content": "Les liaisons horizontales s'éloignent de l'observateur.",
        "correct": false,
        "explanation": "Elles viennent vers l'observateur."
      },
      {
        "content": "Les liaisons horizontales sont dirigées vers l'observateur.",
        "correct": true,
        "explanation": "C'est la convention géométrique de Fischer."
      }
    ],
    "explanation": "La projection de Fischer encode la stéréochimie avec chaîne verticale et liaisons horizontales vers l'observateur."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant un carbone asymétrique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un carbone asymétrique doit être lié à quatre carbones.",
        "correct": false,
        "explanation": "Les substituants peuvent comporter H, O ou d'autres atomes."
      },
      {
        "content": "La présence d'un C* rend la molécule automatiquement achirale.",
        "correct": false,
        "explanation": "Elle favorise au contraire la chiralité, sous réserve de la symétrie globale."
      },
      {
        "content": "On note souvent un tel carbone $\\mathrm{C^*}$.",
        "correct": true,
        "explanation": "Cette notation signale un centre de chiralité."
      },
      {
        "content": "Un carbone d'un groupe carbonyle est un centre chiral tétraédrique.",
        "correct": false,
        "explanation": "Il est sp2 et plan."
      },
      {
        "content": "Un carbone asymétrique peut rendre une molécule chirale.",
        "correct": true,
        "explanation": "La symétrie globale de la molécule doit aussi être considérée."
      }
    ],
    "explanation": "Un carbone asymétrique est un centre tétraédrique lié à quatre substituants différents."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Comment s'appelle la représentation plane à chaîne verticale utilisée classiquement pour comparer les oses ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "projection de Fischer",
        "Fischer",
        "représentation de Fischer",
        "representation de Fischer"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La projection de Fischer encode la stéréochimie avec chaîne verticale et liaisons horizontales vers l'observateur."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la projection de Newman appliquée à une chaîne carbonée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle représente la molécule observée dans l'axe d'une liaison entre deux atomes.",
        "correct": true,
        "explanation": "L'atome avant et l'atome arrière sont vus selon l'axe de liaison."
      },
      {
        "content": "Elle permet de visualiser l'orientation relative des substituants portés par deux atomes adjacents.",
        "correct": true,
        "explanation": "Elle est particulièrement utile pour comparer des conformations."
      },
      {
        "content": "Elle peut compléter une analyse stéréochimique sans remplacer la projection de Fischer des oses.",
        "correct": true,
        "explanation": "Les deux représentations répondent à des objectifs différents."
      },
      {
        "content": "Elle place conventionnellement toute la chaîne carbonée verticalement avec les liaisons horizontales vers l'observateur.",
        "correct": false,
        "explanation": "Cette convention correspond à la projection de Fischer."
      },
      {
        "content": "Elle ne contient aucune information spatiale.",
        "correct": false,
        "explanation": "Son intérêt principal est précisément de représenter l'organisation spatiale autour d'une liaison."
      }
    ],
    "explanation": "La projection de Newman décrit une conformation autour d'une liaison ; la projection de Fischer code efficacement la configuration d'une chaîne d'ose."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la série L d'un ose, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "En Fischer, l'OH de référence d'un L-ose est à droite.",
        "correct": false,
        "explanation": "À droite correspond à D."
      },
      {
        "content": "En projection de Fischer, l'OH du carbone asymétrique de référence est à gauche pour un L-ose.",
        "correct": true,
        "explanation": "C'est la convention relative au L-glycéraldéhyde."
      },
      {
        "content": "Le L-fucose est un exemple biologique de sucre de série L chez l'être humain.",
        "correct": true,
        "explanation": "Il intervient dans des glycoconjugués."
      },
      {
        "content": "Tous les oses biologiques humains sont exclusivement de série D.",
        "correct": false,
        "explanation": "L-fucose et L-iduronate constituent des exemples de série L."
      },
      {
        "content": "L'acide L-iduronique est un autre dérivé de série L présent chez l'être humain.",
        "correct": true,
        "explanation": "Il entre dans certains glycosaminoglycanes."
      }
    ],
    "explanation": "Les séries D et L sont définies par configuration relative ; quelques dérivés de série L ont un rôle biologique humain."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos du nombre de stéréoisomères d'un ose, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Un cétohexose usuel comme le fructose ouvert possède trois centres stéréogènes, C3 à C5.",
        "correct": true,
        "explanation": "C2 est carbonylé."
      },
      {
        "content": "Avec n centres stéréogènes indépendants et sans symétrie réductrice, le maximum est $2^n$.",
        "correct": true,
        "explanation": "Chaque centre peut prendre deux configurations."
      },
      {
        "content": "Le carbone carbonylé sp2 du glucose ouvert est un centre asymétrique.",
        "correct": false,
        "explanation": "Il est plan."
      },
      {
        "content": "Le nombre maximal de stéréoisomères est toujours égal au nombre de carbones.",
        "correct": false,
        "explanation": "Il dépend des centres stéréogènes."
      },
      {
        "content": "Un aldohexose ne peut avoir que deux stéréoisomères.",
        "correct": false,
        "explanation": "Quatre centres conduisent jusqu'à 16 configurations."
      }
    ],
    "explanation": "Le nombre maximal de configurations est $2^n$ pour n centres stéréogènes indépendants.",
    "requiredSelectionCount": 2
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le glycéraldéhyde et la filiation D/L, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Le glycéraldéhyde possède un seul centre stéréogène.",
        "correct": true,
        "explanation": "Son carbone C2 est asymétrique."
      },
      {
        "content": "Le glycéraldéhyde possède quatre centres asymétriques.",
        "correct": false,
        "explanation": "Il n'en possède qu'un."
      },
      {
        "content": "D- et L-glycéraldéhyde sont identiques et superposables.",
        "correct": false,
        "explanation": "Ils sont images miroir non superposables."
      },
      {
        "content": "La dihydroxyacétone ne définit pas de série D/L car elle est achirale.",
        "correct": true,
        "explanation": "Elle ne possède aucun C*."
      },
      {
        "content": "La dihydroxyacétone possède deux énantiomères D et L.",
        "correct": false,
        "explanation": "Elle est achirale."
      }
    ],
    "explanation": "La filiation D/L des oses est référée au glycéraldéhyde."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle notation décrit la configuration relative d'un ose : D/L ou +/− ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "D/L",
        "D et L",
        "D-L"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Il faut dissocier la configuration D/L du signe expérimental du pouvoir rotatoire."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos des exceptions biologiques de série L, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le L-fucose est l'énantiomère du D-glucose.",
        "correct": false,
        "explanation": "Ce sont des sucres différents."
      },
      {
        "content": "Tous les glucides humains sont des L-oses.",
        "correct": false,
        "explanation": "La série D prédomine."
      },
      {
        "content": "Aucun sucre de série L n'est rencontré chez l'être humain.",
        "correct": false,
        "explanation": "L-fucose et L-iduronate sont des contre-exemples."
      },
      {
        "content": "La majorité des oses usuels du métabolisme humain appartiennent à la série D.",
        "correct": true,
        "explanation": "Glucose, galactose et mannose sont D."
      },
      {
        "content": "L-iduronate est un acide aminé.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique acide."
      }
    ],
    "explanation": "La série D prédomine chez l'être humain, avec des exceptions biologiquement importantes comme L-fucose et L-iduronate."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur un carbone asymétrique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Tout carbone portant un OH est asymétrique.",
        "correct": false,
        "explanation": "Il faut quatre substituants différents."
      },
      {
        "content": "La présence d'un C* rend la molécule automatiquement achirale.",
        "correct": false,
        "explanation": "Elle favorise au contraire la chiralité, sous réserve de la symétrie globale."
      },
      {
        "content": "Un carbone asymétrique doit être lié à quatre carbones.",
        "correct": false,
        "explanation": "Les substituants peuvent comporter H, O ou d'autres atomes."
      },
      {
        "content": "Un carbone sp2 trigonal plan n'est pas un carbone asymétrique tétraédrique classique.",
        "correct": true,
        "explanation": "Il ne porte pas quatre substituants tétraédriques."
      },
      {
        "content": "On note souvent un tel carbone $\\mathrm{C^*}$.",
        "correct": true,
        "explanation": "Cette notation signale un centre de chiralité."
      }
    ],
    "explanation": "Un carbone asymétrique est un centre tétraédrique lié à quatre substituants différents."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Dans cette projection de Fischer du D-glucose, cliquez sur le dernier carbone asymétrique utilisé pour déterminer la série D/L.",
    "image": {
      "src": "/images/training/ue14/biochimie/glucides/ch1-fischer-d-glucose-c5-qzone.svg",
      "alt": "Projection de Fischer simplifiée du D-glucose avec carbones C2 à C5 indiqués",
      "width": 1200,
      "height": 600
    },
    "expectedZones": [
      {
        "id": "zone-42",
        "label": "Carbone C5",
        "x": 0.5,
        "y": 0.665,
        "tolerance": 0.07
      }
    ],
    "explanation": "Pour un aldohexose comme le glucose, la série D/L est déterminée par le carbone asymétrique le plus éloigné du carbonyle, ici C5."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la série D d'un ose, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Elle est déterminée par la configuration du carbone asymétrique le plus éloigné du carbonyle.",
        "correct": true,
        "explanation": "C'est le carbone de référence de la filiation."
      },
      {
        "content": "La série D dépend uniquement du nombre total de carbones.",
        "correct": false,
        "explanation": "Elle dépend de la configuration."
      },
      {
        "content": "Le D-glucose appartient à la série D.",
        "correct": true,
        "explanation": "Son OH de référence est à droite en Fischer."
      },
      {
        "content": "En projection de Fischer, l'OH de ce carbone est à droite pour un D-ose.",
        "correct": true,
        "explanation": "C'est la convention relative au D-glycéraldéhyde."
      },
      {
        "content": "D signifie obligatoirement que le pouvoir rotatoire est positif.",
        "correct": false,
        "explanation": "D/L et +/− sont indépendants."
      }
    ],
    "explanation": "La série D/L est une configuration relative et ne prédit pas le signe du pouvoir rotatoire."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez un ose ou dérivé glucidique humain classique de série L.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "L-fucose",
        "fucose",
        "acide L-iduronique",
        "L-iduronate",
        "acide iduronique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les séries D et L sont définies par configuration relative ; quelques dérivés de série L ont un rôle biologique humain."
  }
];
