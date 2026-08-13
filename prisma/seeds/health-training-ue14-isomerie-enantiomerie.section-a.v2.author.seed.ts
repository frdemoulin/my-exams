import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.2 – Section A – Les différentes formes d'isomérie
 */

export const UE14_CH6_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'isomérie, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Deux isomères possèdent la même formule brute.",
        "correct": true,
        "explanation": "C'est la condition commune aux isomères."
      },
      {
        "content": "Ils peuvent avoir des structures développées différentes.",
        "correct": true,
        "explanation": "L'organisation des atomes peut différer."
      },
      {
        "content": "Ils ont nécessairement des propriétés pharmacologiques identiques.",
        "correct": false,
        "explanation": "La fiche souligne au contraire que des isomères peuvent avoir des propriétés pharmacologiques différentes."
      },
      {
        "content": "Une formule brute suffit toujours à identifier une structure unique.",
        "correct": false,
        "explanation": "Plusieurs structures peuvent partager la même formule brute."
      }
    ],
    "explanation": "L'isomérie correspond à plusieurs structures possibles pour une même composition globale."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle situation correspond le mieux à une isomérie fonctionnelle ?",
    "choices": [
      {
        "content": "Deux molécules de même formule brute appartenant à des fonctions chimiques différentes.",
        "correct": true,
        "explanation": "C'est le principe de l'isomérie fonctionnelle."
      },
      {
        "content": "Deux molécules de formules brutes différentes portant toutes deux un alcool.",
        "correct": false,
        "explanation": "La formule brute doit être la même."
      },
      {
        "content": "Deux conformations obtenues par rotation autour d'une liaison simple.",
        "correct": false,
        "explanation": "Il ne s'agit pas d'isomères de constitution."
      },
      {
        "content": "Deux dessins identiques d'une même molécule simplement tournés sur la feuille.",
        "correct": false,
        "explanation": "Ce sont deux représentations de la même molécule."
      }
    ],
    "explanation": "L'isomérie fonctionnelle conserve la formule brute mais modifie la famille fonctionnelle."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Le propanal $\\ce{CH3CH2CHO}$ et la propanone $\\ce{CH3COCH3}$ ont pour formule brute $\\ce{C3H6O}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont isomères.",
        "correct": true,
        "explanation": "Ils ont la même formule brute mais des structures différentes."
      },
      {
        "content": "Ils illustrent une isomérie fonctionnelle.",
        "correct": true,
        "explanation": "Le premier est un aldéhyde, le second une cétone."
      },
      {
        "content": "Ils constituent un couple d'énantiomères.",
        "correct": false,
        "explanation": "La différence porte sur la constitution, pas sur une image miroir non superposable."
      },
      {
        "content": "Ils appartiennent à la même fonction chimique.",
        "correct": false,
        "explanation": "Aldéhyde et cétone sont deux fonctions différentes."
      }
    ],
    "explanation": "Ce couple est l'exemple classique d'une même formule brute donnant deux fonctions carbonylées différentes."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'isomérie de position, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les molécules ont la même formule brute.",
        "correct": true,
        "explanation": "Elles restent isomères."
      },
      {
        "content": "Elles conservent la même chaîne carbonée dans le modèle du cours.",
        "correct": true,
        "explanation": "La fiche insiste sur ce point."
      },
      {
        "content": "Elles portent le même groupe fonctionnel.",
        "correct": true,
        "explanation": "C'est la position de la fonction qui varie."
      },
      {
        "content": "La fonction chimique doit obligatoirement changer.",
        "correct": false,
        "explanation": "Ce serait une isomérie fonctionnelle."
      }
    ],
    "explanation": "Dans l'isomérie de position, la fonction reste identique mais change de position sur la même chaîne."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "On compare l'hexan-1-ol, l'hexan-2-ol et l'hexan-3-ol. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils ont la même formule brute.",
        "correct": true,
        "explanation": "Ce sont trois alcools de formule C6H14O."
      },
      {
        "content": "Ils portent tous une fonction alcool.",
        "correct": true,
        "explanation": "Le groupe OH est conservé."
      },
      {
        "content": "Ils diffèrent par la position du groupe OH.",
        "correct": true,
        "explanation": "Positions 1, 2 et 3."
      },
      {
        "content": "Ils illustrent une isomérie fonctionnelle.",
        "correct": false,
        "explanation": "La fonction alcool ne change pas."
      }
    ],
    "explanation": "Ils constituent l'exemple de la fiche pour l'isomérie de position."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la tautomérie dans le cadre de ce chapitre, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle doit être distinguée d'une simple isomérie fonctionnelle.",
        "correct": true,
        "explanation": "La fiche en fait explicitement la distinction."
      },
      {
        "content": "Les formes tautomères peuvent être en équilibre l'une avec l'autre.",
        "correct": true,
        "explanation": "Elles s'interconvertissent dans certaines conditions."
      },
      {
        "content": "La tautomérie peut mettre en jeu une double liaison et un déplacement de proton.",
        "correct": true,
        "explanation": "C'est le principe de l'équilibre céto-énolique."
      },
      {
        "content": "Deux formes tautomères sont nécessairement deux substances sans interconversion possible.",
        "correct": false,
        "explanation": "Le caractère d'équilibre est essentiel."
      }
    ],
    "explanation": "La tautomérie décrit des formes interconvertibles en équilibre, par exemple les formes céto et énol."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Le couple cétone/énol présenté dans la fiche doit être interprété comme :",
    "choices": [
      {
        "content": "Deux formes tautomères en équilibre.",
        "correct": true,
        "explanation": "C'est l'exemple donné."
      },
      {
        "content": "Deux énantiomères.",
        "correct": false,
        "explanation": "Aucune relation d'image miroir n'est impliquée."
      },
      {
        "content": "Deux isomères de position d'un alcool.",
        "correct": false,
        "explanation": "La transformation est une tautomérie."
      },
      {
        "content": "Deux molécules de formules brutes différentes.",
        "correct": false,
        "explanation": "La composition globale est conservée."
      }
    ],
    "explanation": "La forme céto et la forme énol s'interconvertissent ; la fiche demande de ne pas les classer comme de simples isomères fonctionnels indépendants."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pourquoi l'isomérie est-elle importante pour les médicaments ?",
    "choices": [
      {
        "content": "Deux isomères peuvent interagir différemment avec des cibles biologiques.",
        "correct": true,
        "explanation": "Les cibles biologiques ont elles-mêmes une organisation tridimensionnelle."
      },
      {
        "content": "Deux isomères peuvent avoir des propriétés pharmacologiques différentes.",
        "correct": true,
        "explanation": "C'est explicitement souligné dans la fiche."
      },
      {
        "content": "La même formule brute garantit toujours la même activité.",
        "correct": false,
        "explanation": "La structure compte."
      },
      {
        "content": "L'isomérie n'a d'intérêt qu'en chimie minérale.",
        "correct": false,
        "explanation": "Elle est centrale en chimie organique et médicinale."
      }
    ],
    "explanation": "La composition chimique ne suffit pas : l'organisation des atomes peut modifier les interactions biologiques."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Deux représentations montrent exactement le même enchaînement atomique et deviennent superposables après une simple rotation de la feuille. Elles correspondent :",
    "choices": [
      {
        "content": "À la même molécule.",
        "correct": true,
        "explanation": "Un changement d'orientation du dessin ne crée pas un nouvel isomère."
      },
      {
        "content": "À deux isomères fonctionnels.",
        "correct": false,
        "explanation": "La fonction et la constitution n'ont pas changé."
      },
      {
        "content": "À deux énantiomères.",
        "correct": false,
        "explanation": "La superposabilité exclut l'énantiomérie."
      },
      {
        "content": "À deux isomères de position.",
        "correct": false,
        "explanation": "Aucun groupe n'a changé de position."
      }
    ],
    "explanation": "Avant de classer une relation d'isomérie, il faut vérifier que les deux dessins représentent réellement des structures différentes."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux couples illustrant une isomérie de constitution.",
    "choices": [
      {
        "content": "Propanal / propanone.",
        "correct": true,
        "explanation": "Même formule brute, fonctions différentes."
      },
      {
        "content": "Hexan-1-ol / hexan-2-ol.",
        "correct": true,
        "explanation": "Même chaîne et même fonction, position différente."
      },
      {
        "content": "Deux dessins superposables du méthane.",
        "correct": false,
        "explanation": "Il s'agit de la même molécule."
      },
      {
        "content": "Les deux formes miroir non superposables d'un carbone asymétrique.",
        "correct": false,
        "explanation": "Ce sont des stéréoisomères, pas des isomères de constitution."
      }
    ],
    "explanation": "Isomérie fonctionnelle et isomérie de position sont deux formes d'isomérie de constitution."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère $\\ce{C2H6O}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'éthanol et l'éther diméthylique ont cette formule brute.",
        "correct": true,
        "explanation": "Les deux structures correspondent à C2H6O."
      },
      {
        "content": "Ils sont isomères fonctionnels.",
        "correct": true,
        "explanation": "Alcool contre éther."
      },
      {
        "content": "Ils sont énantiomères.",
        "correct": false,
        "explanation": "Ils n'ont pas la même connectivité."
      },
      {
        "content": "La formule brute seule ne permet pas de choisir entre ces deux structures.",
        "correct": true,
        "explanation": "Elle ne donne pas l'enchaînement."
      }
    ],
    "explanation": "Une petite formule brute peut déjà correspondre à plusieurs fonctions."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare le propan-1-ol et le propan-2-ol. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils ont la même chaîne carbonée.",
        "correct": true,
        "explanation": "La chaîne est celle du propane."
      },
      {
        "content": "Ils ont la même fonction chimique.",
        "correct": true,
        "explanation": "Ce sont deux alcools."
      },
      {
        "content": "Le groupe OH n'occupe pas la même position.",
        "correct": true,
        "explanation": "Carbone 1 contre carbone 2."
      },
      {
        "content": "Ils sont isomères fonctionnels.",
        "correct": false,
        "explanation": "La fonction ne change pas."
      }
    ],
    "explanation": "Le couple constitue une isomérie de position."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du couple propanal/propanone, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une interconversion rapide entre les deux dans un même équilibre tautomérique n'est pas ce qui définit leur relation.",
        "correct": true,
        "explanation": "Ce sont deux isomères fonctionnels distincts."
      },
      {
        "content": "Leur formule brute est identique.",
        "correct": true,
        "explanation": "C3H6O."
      },
      {
        "content": "La fonction carbonyle n'a pas le même environnement.",
        "correct": true,
        "explanation": "Aldéhyde contre cétone."
      },
      {
        "content": "Ils ont obligatoirement le même nom systématique.",
        "correct": false,
        "explanation": "Leur structure impose des noms différents."
      }
    ],
    "explanation": "La tautomérie ne doit pas être confondue avec la simple existence de deux isomères fonctionnels."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Deux molécules ont la même formule brute et la même fonction alcool, mais l'une est butan-1-ol et l'autre 2-méthylpropan-1-ol. La conclusion la plus sûre est :",
    "choices": [
      {
        "content": "Ce sont des isomères de constitution, mais pas des isomères de position au sens strict de la fiche car la chaîne carbonée change.",
        "correct": true,
        "explanation": "La fiche réserve l'isomérie de position à une même chaîne."
      },
      {
        "content": "Ce sont des énantiomères.",
        "correct": false,
        "explanation": "La connectivité diffère."
      },
      {
        "content": "Ce sont des tautomères.",
        "correct": false,
        "explanation": "Aucun équilibre tautomerique n'est en jeu."
      },
      {
        "content": "Ce sont deux représentations de la même molécule.",
        "correct": false,
        "explanation": "Le squelette carboné diffère."
      }
    ],
    "explanation": "Cette question évite d'élargir abusivement la notion d'isomérie de position."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos d'un équilibre céto-énolique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La formule brute globale reste la même.",
        "correct": true,
        "explanation": "Les formes sont tautomères."
      },
      {
        "content": "La position d'un proton et d'une double liaison change.",
        "correct": true,
        "explanation": "C'est le réarrangement caractéristique."
      },
      {
        "content": "Les deux formes peuvent coexister en proportions différentes selon les conditions.",
        "correct": true,
        "explanation": "Il s'agit d'un équilibre."
      },
      {
        "content": "Il s'agit d'une simple rotation autour d'une liaison simple.",
        "correct": false,
        "explanation": "Il y a réorganisation de liaisons."
      }
    ],
    "explanation": "La tautomérie correspond à une interconversion chimique réversible et non à une simple conformation."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La fiche illustre aussi des formes lactame/lactime de l'uracile. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ces formes relèvent d'un équilibre tautomérique.",
        "correct": true,
        "explanation": "Elles sont présentées comme différentes formes interconvertibles."
      },
      {
        "content": "Les classer comme des molécules totalement indépendantes sans équilibre serait trompeur.",
        "correct": true,
        "explanation": "La notion de tautomérie insiste sur l'interconversion."
      },
      {
        "content": "Elles ont nécessairement des formules brutes différentes.",
        "correct": false,
        "explanation": "Une tautomérie conserve la formule brute."
      },
      {
        "content": "Elles constituent nécessairement un couple d'énantiomères.",
        "correct": false,
        "explanation": "La relation n'est pas une image miroir."
      }
    ],
    "explanation": "L'exemple de l'uracile rappelle que la tautomérie peut concerner des molécules biologiquement importantes."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Lequel de ces couples n'est PAS un couple d'isomères ?",
    "choices": [
      {
        "content": "$\\ce{C2H6O}$ et $\\ce{C3H8O}$.",
        "correct": true,
        "explanation": "Les formules brutes sont différentes."
      },
      {
        "content": "Éthanol et éther diméthylique.",
        "correct": false,
        "explanation": "Ils sont isomères fonctionnels."
      },
      {
        "content": "Propan-1-ol et propan-2-ol.",
        "correct": false,
        "explanation": "Ils sont isomères de position."
      },
      {
        "content": "Deux énantiomères d'une molécule chirale.",
        "correct": false,
        "explanation": "Ils sont stéréoisomères."
      }
    ],
    "explanation": "Des isomères doivent obligatoirement partager la même formule brute."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Deux structures ont la même formule brute. Quelle démarche est pertinente pour classer leur relation ?",
    "choices": [
      {
        "content": "Comparer d'abord l'enchaînement des atomes.",
        "correct": true,
        "explanation": "Cela distingue constitution et stéréoisomérie."
      },
      {
        "content": "Identifier les fonctions chimiques.",
        "correct": true,
        "explanation": "Cela permet de reconnaître une isomérie fonctionnelle."
      },
      {
        "content": "Vérifier si seule la position d'une même fonction change sur la même chaîne.",
        "correct": true,
        "explanation": "C'est le critère de l'isomérie de position."
      },
      {
        "content": "Conclure automatiquement qu'elles sont énantiomères.",
        "correct": false,
        "explanation": "L'énantiomérie exige une relation spatiale particulière."
      }
    ],
    "explanation": "La classification se fait progressivement : formule brute, connectivité, fonctions puis géométrie spatiale."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Même formule brute est une condition nécessaire pour parler d'isomérie.",
        "correct": true,
        "explanation": "Condition de base."
      },
      {
        "content": "Propanal et propanone sont isomères fonctionnels.",
        "correct": true,
        "explanation": "Aldéhyde/cétone."
      },
      {
        "content": "Hexan-1-ol et hexan-2-ol sont isomères de position.",
        "correct": true,
        "explanation": "Même chaîne et même fonction."
      },
      {
        "content": "Une tautomérie correspond à un équilibre entre formes interconvertibles.",
        "correct": true,
        "explanation": "Principe du cours."
      },
      {
        "content": "Deux isomères peuvent avoir des propriétés pharmacologiques différentes.",
        "correct": true,
        "explanation": "Point médical du cours."
      },
      {
        "content": "Deux formules brutes différentes peuvent être des isomères.",
        "correct": false,
        "explanation": "Impossible par définition."
      },
      {
        "content": "Une simple rotation du dessin crée un nouvel isomère.",
        "correct": false,
        "explanation": "La molécule reste identique."
      },
      {
        "content": "Tous les isomères sont des énantiomères.",
        "correct": false,
        "explanation": "L'énantiomérie n'est qu'un cas de stéréoisomérie."
      },
      {
        "content": "L'isomérie de position exige un changement de fonction.",
        "correct": false,
        "explanation": "La fonction reste la même."
      },
      {
        "content": "Les tautomères ne peuvent jamais s'interconvertir.",
        "correct": false,
        "explanation": "C'est l'inverse."
      }
    ],
    "explanation": "Cette sélection consolide les distinctions fondamentales de la première section."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors du développement d'un principe actif, pourquoi identifier précisément l'isomère étudié ?",
    "choices": [
      {
        "content": "Deux structures de même formule brute peuvent ne pas appartenir à la même fonction.",
        "correct": true,
        "explanation": "La fonction influence la réactivité."
      },
      {
        "content": "Deux stéréoisomères peuvent être reconnus différemment par une cible biologique.",
        "correct": true,
        "explanation": "Les cibles biologiques sont tridimensionnelles."
      },
      {
        "content": "La formule brute seule ne garantit pas l'identité moléculaire.",
        "correct": true,
        "explanation": "Elle ne donne ni connectivité ni stéréochimie."
      },
      {
        "content": "L'isomérie est sans influence possible sur l'activité biologique.",
        "correct": false,
        "explanation": "La fiche insiste sur l'importance pharmacologique."
      }
    ],
    "explanation": "L'identité d'un médicament doit inclure sa structure, pas seulement sa composition élémentaire."
  },
  {
    "order": 121,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Pour la formule brute $\\ce{C3H6O}$, sélectionnez exactement les deux structures appartenant à deux fonctions différentes parmi les propositions suivantes.",
    "choices": [
      {
        "content": "Propanal $\\ce{CH3CH2CHO}$.",
        "correct": true,
        "explanation": "Aldéhyde."
      },
      {
        "content": "Propanone $\\ce{CH3COCH3}$.",
        "correct": true,
        "explanation": "Cétone."
      },
      {
        "content": "Propan-1-ol $\\ce{C3H8O}$.",
        "correct": false,
        "explanation": "La formule brute n'est pas C3H6O."
      },
      {
        "content": "Propane $\\ce{C3H8}$.",
        "correct": false,
        "explanation": "La formule brute diffère."
      }
    ],
    "explanation": "Propanal et propanone partagent C3H6O mais appartiennent à deux fonctions distinctes."
  },
  {
    "order": 122,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Sur une chaîne linéaire à six carbones, combien de positions différentes non équivalentes permettent de placer une unique fonction alcool sans changer la chaîne ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Par symétrie, les positions distinctes sont 1, 2 et 3 : hexan-1-ol, hexan-2-ol et hexan-3-ol."
  }
];
