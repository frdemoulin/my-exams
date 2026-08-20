import { TEX_UNITS } from './tex-units';
import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

const U = TEX_UNITS;

/**
 * UE14 – Chimie organique – Chapitre 2.2 – Synthèse
 */

export const UE14_CH6_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare le propanal et la propanone, tous deux de formule brute $\\ce{C3H6O}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont isomères fonctionnels.",
        "correct": true,
        "explanation": "Aldéhyde et cétone."
      },
      {
        "content": "Ils ont la même formule brute.",
        "correct": true,
        "explanation": "C3H6O."
      },
      {
        "content": "Ils sont énantiomères.",
        "correct": false,
        "explanation": "Leur connectivité est différente."
      },
      {
        "content": "Leur relation est un équilibre tautomérique imposé.",
        "correct": false,
        "explanation": "Ce sont deux isomères fonctionnels distincts."
      }
    ],
    "explanation": "La première étape d'une analyse d'isomérie consiste à distinguer constitution et stéréochimie."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Pour une chaîne linéaire à six carbones portant une seule fonction alcool, combien de positions non équivalentes permettent de former des isomères de position ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les positions distinctes sont 1, 2 et 3 ; les positions 4, 5 et 6 sont équivalentes par renumérotation."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'une double liaison susceptible d'isomérie E/Z, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chaque carbone sp2 doit porter deux substituants différents.",
        "correct": true,
        "explanation": "Condition d'existence de E/Z."
      },
      {
        "content": "Les priorités sont déterminées par les règles CIP.",
        "correct": true,
        "explanation": "On choisit le substituant prioritaire sur chaque carbone."
      },
      {
        "content": "Z correspond à des groupes prioritaires du même côté.",
        "correct": true,
        "explanation": "Zusammen."
      },
      {
        "content": "Une rotation libre autour de C=C permet de passer de E à Z sans apport d'énergie.",
        "correct": false,
        "explanation": "La liaison π empêche la rotation libre."
      }
    ],
    "explanation": "La géométrie E/Z combine rigidité de la double liaison et classement CIP."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une molécule possède une double liaison E/Z et un carbone asymétrique. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle peut porter simultanément un descripteur E/Z et un descripteur R/S.",
        "correct": true,
        "explanation": "Les deux éléments stéréogènes sont indépendants."
      },
      {
        "content": "Changer la configuration de la double liaison ne change pas nécessairement le centre R/S.",
        "correct": true,
        "explanation": "Les deux descripteurs peuvent varier indépendamment."
      },
      {
        "content": "La présence du centre chiral empêche toute isomérie géométrique.",
        "correct": false,
        "explanation": "Les deux peuvent coexister."
      },
      {
        "content": "E signifie nécessairement R.",
        "correct": false,
        "explanation": "Aucune correspondance entre les deux systèmes."
      }
    ],
    "explanation": "Une molécule peut cumuler plusieurs éléments stéréogènes et donc plusieurs descripteurs."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare la glycine et l'alanine : ![Glycine et alanine](/images/training/ue14/isomerie-enantiomerie/figure-c2-glycine-alanine.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La glycine ne possède pas de carbone α asymétrique.",
        "correct": true,
        "explanation": "Deux H sont portés par le carbone α."
      },
      {
        "content": "L'alanine possède un carbone α asymétrique.",
        "correct": true,
        "explanation": "Quatre substituants différents."
      },
      {
        "content": "Le seul fait d'être un acide aminé impose une chiralité.",
        "correct": false,
        "explanation": "La glycine est le contre-exemple."
      },
      {
        "content": "La présence de quatre substituants différents sur un carbone sp3 crée le centre stéréogène étudié.",
        "correct": true,
        "explanation": "Critère du cours."
      }
    ],
    "explanation": "La comparaison glycine/alanine constitue un repère central du chapitre."
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'alanine représentée ici est de configuration S : ![Alanine](/images/training/ue14/isomerie-enantiomerie/figure-d3-alanine.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ordre CIP est $\\ce{NH2}$ > $\\ce{COOH}$ > $\\ce{CH3}$ > H.",
        "correct": true,
        "explanation": "Ordre donné dans la fiche."
      },
      {
        "content": "H est de rang 4.",
        "correct": true,
        "explanation": "Z=1."
      },
      {
        "content": "R/S est déterminé par le signe (+)/(−) du polarimètre.",
        "correct": false,
        "explanation": "R/S provient de la structure."
      },
      {
        "content": "La configuration S ne permet pas à elle seule de savoir si l'alanine est (+) ou (−).",
        "correct": true,
        "explanation": "Aucune correspondance universelle."
      }
    ],
    "explanation": "Cette question relie classement CIP, configuration absolue et pouvoir rotatoire sans les confondre."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est l'excès énantiomérique d'un mélange racémique ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0.01,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "Un racémate est 50/50 : $ee=50-50=0\\,\\%$."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un mélange de deux énantiomères possède un excès énantiomérique de 70 %. Quelle proportion, en pourcentage, représente l'énantiomère majoritaire ?",
    "answer": {
      "type": "number",
      "value": 85,
      "tolerance": 0.01,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "Avec $M+m=100$ et $M-m=70$, on obtient $2M=170$ donc $M=85\\,\\%$."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la configuration R/S et du pouvoir rotatoire :",
    "choices": [
      {
        "content": "R/S décrit la disposition absolue des substituants autour d'un centre stéréogène.",
        "correct": true,
        "explanation": "Définition structurale."
      },
      {
        "content": "(+)/(−) décrit le sens d'une rotation optique mesurée.",
        "correct": true,
        "explanation": "Définition expérimentale."
      },
      {
        "content": "R n'est pas synonyme de (+).",
        "correct": true,
        "explanation": "Pas de relation universelle."
      },
      {
        "content": "S n'est pas synonyme de (−).",
        "correct": true,
        "explanation": "Même raison."
      }
    ],
    "explanation": "La distinction entre configuration et propriété optique doit rester systématique."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelle distinction entre tautomérie et isomérie de constitution est correcte ?",
    "choices": [
      {
        "content": "Des tautomères sont des formes interconvertibles en équilibre.",
        "correct": true,
        "explanation": "C'est le point souligné par la fiche."
      },
      {
        "content": "Des isomères fonctionnels comme propanal et propanone sont des structures distinctes de fonctions différentes.",
        "correct": true,
        "explanation": "Ils ne sont pas définis par un équilibre tautomérique."
      },
      {
        "content": "Une tautomérie peut déplacer un proton et une double liaison.",
        "correct": true,
        "explanation": "Cas céto-énolique."
      },
      {
        "content": "Toute paire d'isomères fonctionnels est nécessairement tautomère.",
        "correct": false,
        "explanation": "Les notions doivent être distinguées."
      }
    ],
    "explanation": "La tautomérie n'est pas une étiquette générale pour toute isomérie fonctionnelle."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une molécule possède deux centres asymétriques indépendants et une double liaison E/Z indépendante, sans symétrie réduisant le nombre de configurations. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les deux centres asymétriques apportent au maximum $2^2=4$ combinaisons R/S.",
        "correct": true,
        "explanation": "Deux choix par centre."
      },
      {
        "content": "La double liaison apporte deux possibilités E/Z.",
        "correct": true,
        "explanation": "Deux configurations géométriques."
      },
      {
        "content": "Le nombre maximal de stéréoisomères est $4\\times2=8$.",
        "correct": true,
        "explanation": "Les éléments stéréogènes sont indépendants."
      },
      {
        "content": "Le nombre maximal est nécessairement 3.",
        "correct": false,
        "explanation": "Cela ne tient pas compte des combinaisons."
      }
    ],
    "explanation": "En l'absence de symétrie, on multiplie les possibilités des éléments stéréogènes indépendants."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Une molécule possède trois centres asymétriques indépendants et aucune symétrie interne. Quel est le nombre maximal de configurations R/S ?",
    "answer": {
      "type": "number",
      "value": 8,
      "tolerance": 0
    },
    "explanation": "$2^3=8$ configurations maximales."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pour une structure à deux centres stéréogènes, on compare (R,R), (S,S) et (R,S). Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "(R,R) et (S,S) sont énantiomères lorsque la constitution est identique.",
        "correct": true,
        "explanation": "Tous les centres sont inversés."
      },
      {
        "content": "(R,R) et (R,S) sont diastéréoisomères.",
        "correct": true,
        "explanation": "Un seul centre est inversé."
      },
      {
        "content": "(S,S) et (R,S) sont diastéréoisomères.",
        "correct": true,
        "explanation": "Un seul centre est inversé."
      },
      {
        "content": "(R,R) et (R,S) sont images miroir l'un de l'autre.",
        "correct": false,
        "explanation": "L'image miroir de RR est SS."
      }
    ],
    "explanation": "La relation entre deux stéréoisomères dépend du nombre de centres dont la configuration est inversée."
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du 2,3-dichlorobutane, qui possède une forme méso dans le cas classique :",
    "choices": [
      {
        "content": "(2R,3R) et (2S,3S) forment un couple d'énantiomères.",
        "correct": true,
        "explanation": "Inversion de tous les centres."
      },
      {
        "content": "(2R,3S) et (2S,3R) peuvent désigner la même forme méso par symétrie.",
        "correct": true,
        "explanation": "La molécule possède un plan de symétrie interne."
      },
      {
        "content": "La forme méso est achirale.",
        "correct": true,
        "explanation": "Elle est superposable à son image miroir."
      },
      {
        "content": "Il existe quatre stéréoisomères distincts.",
        "correct": false,
        "explanation": "Il n'en existe que trois dans ce cas."
      }
    ],
    "explanation": "La symétrie réduit le nombre réel de stéréoisomères par rapport au maximum $2^2$."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de stéréoisomères distincts possède le 2,3-dichlorobutane dans le cas classique comprenant un couple RR/SS et une forme méso RS ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "On compte (R,R), (S,S) et une forme méso correspondant à (R,S)/(S,R)."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans des conditions identiques, un énantiomère pur donne une rotation de $-24^\\circ$. Un échantillon du même composé donne $-18^\\circ$. En supposant la rotation proportionnelle à l'excès énantiomérique, quel est l'ee de l'échantillon en pourcentage ?",
    "answer": {
      "type": "number",
      "value": 75,
      "tolerance": 0.1,
      "unit": "%",
      "displayUnit": U.PERCENT
    },
    "explanation": "$ee=|-18|/|-24|\\times100=75\\,\\%$."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles affirmations distinguent correctement configuration et conformation ?",
    "choices": [
      {
        "content": "R/S est une information de configuration.",
        "correct": true,
        "explanation": "Elle décrit l'arrangement absolu autour d'un centre."
      },
      {
        "content": "Une rotation autour d'une liaison simple peut modifier une conformation sans modifier R/S.",
        "correct": true,
        "explanation": "La configuration du centre demeure."
      },
      {
        "content": "Faire tourner toute la molécule dans l'espace ne change pas sa configuration absolue.",
        "correct": true,
        "explanation": "C'est seulement un changement de point de vue."
      },
      {
        "content": "Une conformation différente signifie automatiquement un énantiomère différent.",
        "correct": false,
        "explanation": "Des conformères peuvent être la même molécule."
      }
    ],
    "explanation": "Le chapitre met explicitement en garde contre la confusion configuration/conformation."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans un environnement achiral et dans les mêmes conditions, quelles propositions distinguent correctement énantiomères et diastéréoisomères ?",
    "choices": [
      {
        "content": "Deux énantiomères sont images miroir non superposables.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Des diastéréoisomères ne sont pas images miroir l'un de l'autre.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Deux énantiomères purs ont des rotations optiques opposées de même module.",
        "correct": true,
        "explanation": "Dans les mêmes conditions."
      },
      {
        "content": "Deux diastéréoisomères doivent nécessairement avoir toutes leurs propriétés physiques identiques.",
        "correct": false,
        "explanation": "Ils peuvent présenter des propriétés physiques différentes."
      }
    ],
    "explanation": "Énantiomères et diastéréoisomères sont deux relations distinctes entre stéréoisomères."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Associez correctement les relations d'isomérie aux situations suivantes.",
    "choices": [
      {
        "content": "Propanal/propanone : isomérie fonctionnelle.",
        "correct": true,
        "explanation": "Aldéhyde/cétone."
      },
      {
        "content": "Hexan-1-ol/hexan-2-ol : isomérie de position.",
        "correct": true,
        "explanation": "Même chaîne, même fonction, position différente."
      },
      {
        "content": "Cétone/énol en équilibre : tautomérie.",
        "correct": true,
        "explanation": "Interconversion avec déplacement de proton et de double liaison."
      },
      {
        "content": "Deux images miroir non superposables : énantiomérie.",
        "correct": true,
        "explanation": "Définition."
      }
    ],
    "explanation": "Une synthèse de chapitre doit permettre de nommer la relation avant de chercher un descripteur stéréochimique."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "La cystéine est représentée ici : ![Cystéine](/images/training/ue14/isomerie-enantiomerie/figure-d5-cysteine.svg)\n\nQuelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'ordre CIP indiqué dans le cours est $\\ce{NH2}$ > $\\ce{CH2SH}$ > $\\ce{COOH}$ > H.",
        "correct": true,
        "explanation": "Le soufre de la chaîne latérale lui donne priorité sur le carboxyle."
      },
      {
        "content": "La configuration représentée dans l'application de la fiche est R.",
        "correct": true,
        "explanation": "C'est le cas particulier de la cystéine."
      },
      {
        "content": "Le descripteur R impose que la cystéine soit dextrogyre.",
        "correct": false,
        "explanation": "R/S ne prédit pas le signe de rotation."
      },
      {
        "content": "Remplacer le soufre de la chaîne latérale par un oxygène peut modifier l'ordre relatif des priorités.",
        "correct": true,
        "explanation": "Le numéro atomique du premier point de différence intervient."
      }
    ],
    "explanation": "La cystéine combine le piège CIP du soufre et le piège R/S versus pouvoir rotatoire."
  },
  {
    "order": 131,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un composé possède un seul carbone asymétrique et une double liaison E/Z indépendante. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le nombre maximal de stéréoisomères est 4.",
        "correct": true,
        "explanation": "Deux possibilités R/S multipliées par deux possibilités E/Z."
      },
      {
        "content": "Les quatre combinaisons peuvent être notées (E,R), (E,S), (Z,R) et (Z,S).",
        "correct": true,
        "explanation": "Les deux descripteurs sont indépendants."
      },
      {
        "content": "Les formes (E,R) et (E,S) sont énantiomères si aucun autre élément ne rompt la relation miroir.",
        "correct": true,
        "explanation": "À E fixé, le seul centre est inversé."
      },
      {
        "content": "Passer de E à Z impose aussi R → S.",
        "correct": false,
        "explanation": "Les éléments stéréogènes varient indépendamment."
      }
    ],
    "explanation": "Cette question combine les deux principales sources de stéréoisomérie traitées dans le chapitre."
  },
  {
    "order": 132,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un racémate a un ee de 0 %.",
        "correct": true,
        "explanation": "50/50."
      },
      {
        "content": "Z signifie que les groupes prioritaires sont du même côté de C=C.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Un centre sp3 portant quatre substituants différents peut être asymétrique.",
        "correct": true,
        "explanation": "Critère central."
      },
      {
        "content": "CIP classe d'abord selon le numéro atomique.",
        "correct": true,
        "explanation": "Premier critère."
      },
      {
        "content": "R/S ne prédit pas le signe du pouvoir rotatoire.",
        "correct": true,
        "explanation": "Informations indépendantes."
      },
      {
        "content": "Une molécule avec deux centres asymétriques possède toujours exactement quatre stéréoisomères.",
        "correct": false,
        "explanation": "Une symétrie peut réduire ce nombre."
      },
      {
        "content": "Un racémate ne contient aucune molécule chirale.",
        "correct": false,
        "explanation": "Il contient les deux énantiomères."
      },
      {
        "content": "Une tautomérie est une simple rotation autour d'une liaison simple.",
        "correct": false,
        "explanation": "Elle implique une réorganisation chimique."
      },
      {
        "content": "E et Z sont synonymes de R et S.",
        "correct": false,
        "explanation": "Descripteurs différents."
      },
      {
        "content": "Glycine possède un carbone α asymétrique.",
        "correct": false,
        "explanation": "Le carbone α porte deux H."
      }
    ],
    "explanation": "La dernière question croise les notions indispensables du chapitre sans introduire de notion extérieure."
  }
];
