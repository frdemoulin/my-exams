import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.1 – Synthèse */
export const UE14_BIOCH_CH1_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les rôles biologiques des glucides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont absents du monde animal.",
        "correct": false,
        "explanation": "Les animaux contiennent et métabolisent de nombreux glucides."
      },
      {
        "content": "Ils peuvent fournir de l'énergie aux cellules.",
        "correct": true,
        "explanation": "Le glucose est un substrat énergétique majeur."
      },
      {
        "content": "Le ribose et le 2-désoxyribose entrent dans la constitution des acides nucléiques.",
        "correct": true,
        "explanation": "Ils appartiennent respectivement à l'ARN et à l'ADN."
      },
      {
        "content": "Le glycogène constitue une réserve glucidique chez l'être humain.",
        "correct": true,
        "explanation": "Il est stocké surtout dans le foie et les muscles."
      },
      {
        "content": "Des motifs glucidiques participent à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Les glycoconjugués de surface contribuent au glycocalyx."
      }
    ],
    "explanation": "Les glucides assurent des fonctions énergétiques, de réserve, structurales et de reconnaissance."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de kilocalories fournit approximativement 1 g de glucides assimilables ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0.2
    },
    "explanation": "Les valeurs conventionnelles sont d'environ 4 kcal/g pour les glucides et les protéines et 9 kcal/g pour les lipides."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la structure générale d'un ose simple, laquelle est exacte ?",
    "choices": [
      {
        "content": "Les oses usuels possèdent obligatoirement une chaîne très ramifiée.",
        "correct": false,
        "explanation": "Les chaînes simples étudiées sont non ramifiées."
      },
      {
        "content": "Un ose ne possède jamais de fonction carbonyle.",
        "correct": false,
        "explanation": "La forme ouverte comporte un aldéhyde ou une cétone."
      },
      {
        "content": "Les oses usuels étudiés possèdent une chaîne carbonée non ramifiée avant cyclisation.",
        "correct": true,
        "explanation": "La numérotation suit le carbone le plus oxydé."
      },
      {
        "content": "La formule générale usuelle est $\\mathrm{C_nH_nO_{2n}}$.",
        "correct": false,
        "explanation": "Le rapport H/O usuel n'est pas celui-ci."
      },
      {
        "content": "Un ose simple est dépourvu d'oxygène.",
        "correct": false,
        "explanation": "Les oses comportent plusieurs atomes d'oxygène."
      }
    ],
    "explanation": "Un ose est un monosaccharide portant une fonction carbonyle et plusieurs groupes hydroxyle."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les aldoses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le glycéraldéhyde est l'aldotriose de référence.",
        "correct": true,
        "explanation": "Il contient trois carbones."
      },
      {
        "content": "Un aldose possède une fonction aldéhyde en C1 dans sa forme ouverte.",
        "correct": true,
        "explanation": "Le carbone carbonylé terminal est numéroté C1."
      },
      {
        "content": "Un aldose ne peut pas se cycliser.",
        "correct": false,
        "explanation": "De nombreux aldoses sont majoritairement cycliques en solution."
      },
      {
        "content": "Le fructose est un aldose.",
        "correct": false,
        "explanation": "Le fructose est un cétose."
      },
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Il possède six carbones et une fonction aldéhyde dans sa forme ouverte."
      }
    ],
    "explanation": "Dans un aldose, la fonction aldéhyde terminale définit le carbone C1."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de les cétoses, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Le fructose est un cétohexose.",
        "correct": true,
        "explanation": "Il possède six carbones et une cétone dans sa forme ouverte."
      },
      {
        "content": "Un cétose ne contient aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Il en contient plusieurs."
      },
      {
        "content": "La dihydroxyacétone possède un carbone asymétrique.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "Dans les cétoses usuels étudiés, le carbonyle est souvent en C2.",
        "correct": true,
        "explanation": "Le fructose en est l'exemple majeur."
      },
      {
        "content": "Un cétose possède nécessairement un aldéhyde terminal en C1.",
        "correct": false,
        "explanation": "Cela définit un aldose."
      }
    ],
    "explanation": "Un cétose possède un carbonyle interne ; le fructose est le cétohexose classique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la nomenclature selon le nombre de carbones, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Un pentose possède cinq carbones.",
        "correct": true,
        "explanation": "Le ribose est un aldopentose."
      },
      {
        "content": "Un hexose possède six carbones.",
        "correct": true,
        "explanation": "Glucose, galactose et mannose sont des aldohexoses."
      },
      {
        "content": "Un pentose possède six carbones.",
        "correct": false,
        "explanation": "Un pentose en possède cinq."
      },
      {
        "content": "Un triose possède trois carbones.",
        "correct": true,
        "explanation": "Le préfixe tri- indique trois carbones."
      },
      {
        "content": "Le terme aldohexose combine nature du carbonyle et nombre de carbones.",
        "correct": true,
        "explanation": "Aldo- indique l'aldéhyde et hex- six carbones."
      }
    ],
    "explanation": "Triose, tétrose, pentose et hexose décrivent respectivement 3, 4, 5 et 6 carbones."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel triose est achiral ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dihydroxyacétone",
        "dihydroxyacetone",
        "la dihydroxyacétone",
        "la dihydroxyacetone"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le glycéraldéhyde est un aldotriose chiral ; la dihydroxyacétone est un cétotriose achiral."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos de la numérotation des oses ouverts, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "La numérotation vise à donner le plus petit indice au carbone carbonylé.",
        "correct": true,
        "explanation": "Le carbone le plus oxydé est prioritaire."
      },
      {
        "content": "La numérotation commence toujours par l'extrémité la plus éloignée du carbonyle.",
        "correct": false,
        "explanation": "Elle commence du côté le plus proche."
      },
      {
        "content": "Le glucose ouvert possède son carbonyle en C6.",
        "correct": false,
        "explanation": "Il est en C1."
      },
      {
        "content": "Le fructose ouvert possède sa cétone en C6.",
        "correct": false,
        "explanation": "Elle est en C2."
      },
      {
        "content": "La numérotation des carbones est sans intérêt pour l'épimérie.",
        "correct": false,
        "explanation": "L'épimérie est définie par une position carbonée précise."
      }
    ],
    "explanation": "La numérotation des oses part du côté du carbone le plus oxydé."
  },
  {
    "order": 109,
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
        "content": "Un carbone asymétrique tétraédrique porte quatre substituants différents.",
        "correct": true,
        "explanation": "Cette condition en fait un centre stéréogène."
      }
    ],
    "explanation": "Un carbone asymétrique est un centre tétraédrique lié à quatre substituants différents."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
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
        "content": "Un aldohexose ouvert possède quatre centres stéréogènes usuels, C2 à C5.",
        "correct": true,
        "explanation": "C1 est carbonylé et C6 est CH2OH."
      },
      {
        "content": "Le carbone le plus oxydé est obligatoirement placé en bas.",
        "correct": false,
        "explanation": "La convention usuelle le place en haut."
      },
      {
        "content": "Une projection de Fischer ne permet pas de comparer deux oses.",
        "correct": false,
        "explanation": "Elle est précisément utilisée pour cela."
      },
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
        "content": "Les liaisons horizontales sont dirigées vers l'observateur.",
        "correct": true,
        "explanation": "C'est la convention géométrique de Fischer."
      },
      {
        "content": "Un aldohexose ne peut avoir que deux stéréoisomères.",
        "correct": false,
        "explanation": "Quatre centres conduisent jusqu'à 16 configurations."
      },
      {
        "content": "Les liaisons verticales sont dirigées vers l'arrière.",
        "correct": true,
        "explanation": "Elles s'éloignent de l'observateur."
      }
    ],
    "explanation": "La projection de Fischer encode la stéréochimie avec chaîne verticale et liaisons horizontales vers l'observateur. Le nombre maximal de configurations est $2^n$ pour n centres stéréogènes indépendants."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les rôles biologiques des glucides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les groupes sanguins ABO sont indépendants de tout motif glucidique.",
        "correct": false,
        "explanation": "Des déterminants glucidiques participent aux antigènes ABO."
      },
      {
        "content": "Le glycogène constitue une réserve glucidique chez l'être humain.",
        "correct": true,
        "explanation": "Il est stocké surtout dans le foie et les muscles."
      },
      {
        "content": "Ils peuvent fournir de l'énergie aux cellules.",
        "correct": true,
        "explanation": "Le glucose est un substrat énergétique majeur."
      },
      {
        "content": "Des motifs glucidiques participent à la reconnaissance cellulaire.",
        "correct": true,
        "explanation": "Les glycoconjugués de surface contribuent au glycocalyx."
      },
      {
        "content": "Le ribose et le 2-désoxyribose entrent dans la constitution des acides nucléiques.",
        "correct": true,
        "explanation": "Ils appartiennent respectivement à l'ARN et à l'ADN."
      }
    ],
    "explanation": "Les glucides assurent des fonctions énergétiques, de réserve, structurales et de reconnaissance."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de kilocalories fournit approximativement 1 g de glucides assimilables ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0.2
    },
    "explanation": "Les valeurs conventionnelles sont d'environ 4 kcal/g pour les glucides et les protéines et 9 kcal/g pour les lipides."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la structure générale d'un ose simple, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Un ose ne possède jamais de fonction carbonyle.",
        "correct": false,
        "explanation": "La forme ouverte comporte un aldéhyde ou une cétone."
      },
      {
        "content": "La formule générale usuelle est $\\mathrm{C_nH_nO_{2n}}$.",
        "correct": false,
        "explanation": "Le rapport H/O usuel n'est pas celui-ci."
      },
      {
        "content": "Un ose porte une fonction carbonyle dans sa forme ouverte.",
        "correct": true,
        "explanation": "Cette fonction est un aldéhyde ou une cétone."
      },
      {
        "content": "Les oses usuels possèdent obligatoirement une chaîne très ramifiée.",
        "correct": false,
        "explanation": "Les chaînes simples étudiées sont non ramifiées."
      },
      {
        "content": "De nombreux oses simples suivent la formule approchée $\\mathrm{C_nH_{2n}O_n}$.",
        "correct": true,
        "explanation": "Cette écriture correspond au motif $(\\mathrm{CH_2O})_n$."
      }
    ],
    "explanation": "Un ose est un monosaccharide portant une fonction carbonyle et plusieurs groupes hydroxyle.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les aldoses, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un aldose possède nécessairement une cétone en C2.",
        "correct": false,
        "explanation": "Cela décrit un 2-cétose usuel."
      },
      {
        "content": "Le glucose est un aldohexose.",
        "correct": true,
        "explanation": "Il possède six carbones et une fonction aldéhyde dans sa forme ouverte."
      },
      {
        "content": "Le fructose est un aldose.",
        "correct": false,
        "explanation": "Le fructose est un cétose."
      },
      {
        "content": "Un aldose possède une fonction aldéhyde en C1 dans sa forme ouverte.",
        "correct": true,
        "explanation": "Le carbone carbonylé terminal est numéroté C1."
      },
      {
        "content": "Le carbone aldéhydique d'un aldose est toujours C6.",
        "correct": false,
        "explanation": "Il est C1."
      }
    ],
    "explanation": "Dans un aldose, la fonction aldéhyde terminale définit le carbone C1."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos de les cétoses, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Le glucose est un cétose.",
        "correct": false,
        "explanation": "Le glucose est un aldose."
      },
      {
        "content": "Un cétose possède nécessairement un aldéhyde terminal en C1.",
        "correct": false,
        "explanation": "Cela définit un aldose."
      },
      {
        "content": "Un cétose ne contient aucun groupe hydroxyle.",
        "correct": false,
        "explanation": "Il en contient plusieurs."
      },
      {
        "content": "La dihydroxyacétone possède un carbone asymétrique.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "Un cétose porte une fonction cétone dans sa forme ouverte.",
        "correct": true,
        "explanation": "Le carbonyle est interne."
      }
    ],
    "explanation": "Un cétose possède un carbonyle interne ; le fructose est le cétohexose classique."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la nomenclature selon le nombre de carbones, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Un pentose possède cinq carbones.",
        "correct": true,
        "explanation": "Le ribose est un aldopentose."
      },
      {
        "content": "Un hexose possède trois carbones.",
        "correct": false,
        "explanation": "Un hexose en possède six."
      },
      {
        "content": "Un triose possède trois carbones.",
        "correct": true,
        "explanation": "Le préfixe tri- indique trois carbones."
      },
      {
        "content": "Un cétohexose est nécessairement un aldéhyde.",
        "correct": false,
        "explanation": "Céto- indique une cétone."
      },
      {
        "content": "Le terme aldohexose combine nature du carbonyle et nombre de carbones.",
        "correct": true,
        "explanation": "Aldo- indique l'aldéhyde et hex- six carbones."
      }
    ],
    "explanation": "Triose, tétrose, pentose et hexose décrivent respectivement 3, 4, 5 et 6 carbones."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Un mélange contient 70 % d'un énantiomère de rotation +50° et 30 % de son énantiomère de rotation -50°. Quelle rotation moyenne obtient-on en degrés ?",
    "answer": {
      "type": "number",
      "value": 20,
      "tolerance": 0.1
    },
    "explanation": "La moyenne vaut $0{,}70\\times50+0{,}30\\times(-50)=20^\\circ$."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La numérotation des carbones est sans intérêt pour l'épimérie.",
        "correct": false,
        "explanation": "L'épimérie est définie par une position carbonée précise."
      },
      {
        "content": "Le D-glucose appartient à la série D.",
        "correct": true,
        "explanation": "Son OH de référence est à droite en Fischer."
      },
      {
        "content": "Dans un aldose, le carbone carbonylé est C1.",
        "correct": true,
        "explanation": "La fonction aldéhyde est terminale."
      },
      {
        "content": "Le fructose ouvert possède sa cétone en C6.",
        "correct": false,
        "explanation": "Elle est en C2."
      },
      {
        "content": "La position des hydroxyles est définie relativement à cette numérotation.",
        "correct": true,
        "explanation": "Elle sert à comparer les stéréoisomères."
      },
      {
        "content": "D signifie obligatoirement que le pouvoir rotatoire est positif.",
        "correct": false,
        "explanation": "D/L et +/− sont indépendants."
      },
      {
        "content": "La numérotation commence toujours par l'extrémité la plus éloignée du carbonyle.",
        "correct": false,
        "explanation": "Elle commence du côté le plus proche."
      },
      {
        "content": "La numérotation vise à donner le plus petit indice au carbone carbonylé.",
        "correct": true,
        "explanation": "Le carbone le plus oxydé est prioritaire."
      },
      {
        "content": "La série D est déterminée par la position du premier OH en haut de la chaîne.",
        "correct": false,
        "explanation": "On examine le carbone asymétrique le plus éloigné du carbonyle."
      },
      {
        "content": "En projection de Fischer, l'OH de ce carbone est à droite pour un D-ose.",
        "correct": true,
        "explanation": "C'est la convention relative au D-glycéraldéhyde."
      }
    ],
    "explanation": "La numérotation des oses part du côté du carbone le plus oxydé. La série D/L est une configuration relative et ne prédit pas le signe du pouvoir rotatoire."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur un carbone asymétrique, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Tout carbone portant un OH est asymétrique.",
        "correct": false,
        "explanation": "Il faut quatre substituants différents."
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
        "content": "Un carbone d'un groupe carbonyle est un centre chiral tétraédrique.",
        "correct": false,
        "explanation": "Il est sp2 et plan."
      },
      {
        "content": "Un carbone asymétrique tétraédrique porte quatre substituants différents.",
        "correct": true,
        "explanation": "Cette condition en fait un centre stéréogène."
      }
    ],
    "explanation": "Un carbone asymétrique est un centre tétraédrique lié à quatre substituants différents."
  },
  {
    "order": 120,
    "difficulty": "HARD",
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
    "order": 121,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "À propos de la série D d'un ose, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Dans un D-ose, l'OH de référence est à gauche en Fischer.",
        "correct": false,
        "explanation": "À gauche correspond à la série L."
      },
      {
        "content": "Elle est déterminée par la configuration du carbone asymétrique le plus éloigné du carbonyle.",
        "correct": true,
        "explanation": "C'est le carbone de référence de la filiation."
      },
      {
        "content": "La série D est déterminée par la position du premier OH en haut de la chaîne.",
        "correct": false,
        "explanation": "On examine le carbone asymétrique le plus éloigné du carbonyle."
      },
      {
        "content": "La série D dépend uniquement du nombre total de carbones.",
        "correct": false,
        "explanation": "Elle dépend de la configuration."
      },
      {
        "content": "La lettre D ne signifie pas nécessairement dextrogyre.",
        "correct": true,
        "explanation": "Le signe du pouvoir rotatoire est une propriété expérimentale distincte."
      }
    ],
    "explanation": "La série D/L est une configuration relative et ne prédit pas le signe du pouvoir rotatoire.",
    "requiredSelectionCount": 2
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la série L d'un ose, lesquelles sont exactes ?",
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
        "content": "En Fischer, l'OH de référence d'un L-ose est à droite.",
        "correct": false,
        "explanation": "À droite correspond à D."
      },
      {
        "content": "En projection de Fischer, l'OH du carbone asymétrique de référence est à gauche pour un L-ose.",
        "correct": true,
        "explanation": "C'est la convention relative au L-glycéraldéhyde."
      }
    ],
    "explanation": "Les séries D et L sont définies par configuration relative ; quelques dérivés de série L ont un rôle biologique humain."
  }
];
