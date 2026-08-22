import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.8 – Section C – Aldéhydes, cétones et nitriles
 * Ordres 45–66 (22 questions)
 * C1 — Aldéhydes, cétones et nitriles — fondamentaux : ordres 45–54, DISCOVER
 * C2 — Aldéhydes, cétones et nitriles — application : ordres 55–66, PRACTICE
 */

export const UE14_CH12_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{H-CHO}$ ?",
    "choices": [
      {
        "content": "Méthanal.",
        "correct": true,
        "explanation": "La molécule possède un seul carbone et une fonction aldéhyde : méthanal."
      },
      {
        "content": "Méthanol.",
        "correct": false,
        "explanation": "Méthanol désigne un alcool de formule $\\ce{CH3OH}$."
      },
      {
        "content": "Méthanone.",
        "correct": false,
        "explanation": "Le suffixe -one correspond à une cétone, pas à un aldéhyde."
      },
      {
        "content": "Éthanal.",
        "correct": false,
        "explanation": "Éthanal comporte deux carbones."
      },
      {
        "content": "Méthanenitrile.",
        "correct": false,
        "explanation": "Un nitrile comporte le motif $\\ce{C#N}$, absent ici."
      }
    ],
    "explanation": "Pour un aldéhyde simple, le carbone du groupe $\\ce{-CHO}$ appartient à la chaîne principale. Un seul carbone donne méthan-, puis le suffixe -al : méthanal."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour nommer un aldéhyde aliphatique simple lorsque $\\ce{-CHO}$ est la fonction principale, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone du groupe aldéhyde appartient à la chaîne principale.",
        "correct": true,
        "explanation": "Le carbone carbonylé de $\\ce{-CHO}$ fait partie du parent carboné."
      },
      {
        "content": "Ce carbone correspond au carbone 1 de la chaîne.",
        "correct": true,
        "explanation": "La fonction aldéhyde terminale fixe l'origine de la numérotation."
      },
      {
        "content": "On utilise le suffixe -al.",
        "correct": true,
        "explanation": "Des noms comme éthanal ou propanal utilisent le suffixe -al."
      },
      {
        "content": "Le carbone du groupe $\\ce{-CHO}$ est exclu du comptage de la chaîne.",
        "correct": false,
        "explanation": "Il est au contraire inclus dans le nombre de carbones du parent."
      },
      {
        "content": "Le suffixe -one est celui d'un aldéhyde.",
        "correct": false,
        "explanation": "Le suffixe -one correspond à une cétone."
      }
    ],
    "explanation": "Réflexe à retenir : le carbone de $\\ce{-CHO}$ compte dans le parent et constitue C1 ; la fonction principale aldéhyde est exprimée par le suffixe -al."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH2-CHO}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "propanal"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le carbone du groupe $\\ce{-CHO}$ est inclus dans la chaîne : trois carbones donnent propan-, puis la fonction aldéhyde impose -al. Le nom est propanal."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-C(=O)-CH2-CH3}$ ?",
    "choices": [
      {
        "content": "Butan-2-one.",
        "correct": true,
        "explanation": "La chaîne comporte quatre carbones et le groupe carbonyle de la cétone est en position 2."
      },
      {
        "content": "Butan-3-one.",
        "correct": false,
        "explanation": "On numérote depuis l'extrémité la plus proche du groupe carbonyle : le locant correct est 2."
      },
      {
        "content": "Butanal.",
        "correct": false,
        "explanation": "Butanal est un aldéhyde terminal ; ici le carbonyle est interne."
      },
      {
        "content": "Propan-2-one.",
        "correct": false,
        "explanation": "La chaîne principale comporte quatre carbones."
      },
      {
        "content": "Butanenitrile.",
        "correct": false,
        "explanation": "La structure ne comporte pas de groupe nitrile $\\ce{C#N}$."
      }
    ],
    "explanation": "Pour une cétone : choisir la chaîne contenant le carbone carbonylé, numéroter pour donner à $\\ce{C=O}$ le plus petit locant, puis utiliser -one. Ici : butan-2-one."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la nomenclature d'une cétone aliphatique simple, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone du groupe $\\ce{C=O}$ appartient à la chaîne principale.",
        "correct": true,
        "explanation": "Le carbone carbonylé fait partie du squelette du parent."
      },
      {
        "content": "La position du groupe carbonyle peut être indiquée par un locant.",
        "correct": true,
        "explanation": "Par exemple, butan-2-one localise le carbonyle en C2."
      },
      {
        "content": "On utilise le suffixe -one lorsque la cétone est la fonction principale.",
        "correct": true,
        "explanation": "Le suffixe -one caractérise ici la fonction cétone principale."
      },
      {
        "content": "Une cétone simple possède nécessairement son groupe carbonyle sur le carbone 1.",
        "correct": false,
        "explanation": "Un carbonyle en bout de chaîne lié à un hydrogène correspond à un aldéhyde ; dans une cétone, le carbonyle est interne."
      },
      {
        "content": "La numérotation peut être choisie sans tenir compte de la position du carbonyle.",
        "correct": false,
        "explanation": "La fonction principale doit recevoir le locant approprié le plus faible."
      }
    ],
    "explanation": "La méthode reste la même : fonction principale → parent contenant le carbonyle → numérotation → locant → suffixe -one."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH2-C(=O)-CH2-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pentan-3-one"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La chaîne principale compte cinq carbones. Le groupe carbonyle est nécessairement en C3 quel que soit le sens de lecture : pentan-3-one."
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH2-C#N}$ ?",
    "choices": [
      {
        "content": "Propanenitrile.",
        "correct": true,
        "explanation": "Le carbone du groupe nitrile compte dans la chaîne principale : trois carbones au total donnent propanenitrile."
      },
      {
        "content": "Éthanenitrile.",
        "correct": false,
        "explanation": "Cette réponse oublie le carbone du groupe $\\ce{C#N}$ dans le comptage du parent."
      },
      {
        "content": "Propanal.",
        "correct": false,
        "explanation": "Propanal possède un groupe aldéhyde $\\ce{-CHO}$, absent ici."
      },
      {
        "content": "Propan-2-one.",
        "correct": false,
        "explanation": "Une cétone comporte un groupe carbonyle $\\ce{C=O}$, pas un nitrile."
      },
      {
        "content": "3-cyanopropane.",
        "correct": false,
        "explanation": "Lorsque le nitrile est la fonction principale dans ce cas simple, on l'exprime par le suffixe -nitrile et son carbone appartient au parent."
      }
    ],
    "explanation": "Point clé : le carbone de $\\ce{C#N}$ fait partie de la chaîne principale et constitue C1. $\\ce{CH3-CH2-C#N}$ possède donc trois carbones : propanenitrile."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour nommer un nitrile aliphatique simple lorsque $\\ce{C#N}$ est la fonction principale, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone du groupe nitrile est inclus dans la chaîne principale.",
        "correct": true,
        "explanation": "Le carbone de $\\ce{C#N}$ appartient au parent carboné."
      },
      {
        "content": "Le carbone du nitrile correspond au carbone 1.",
        "correct": true,
        "explanation": "La numérotation du parent commence au carbone de la fonction nitrile."
      },
      {
        "content": "On utilise le suffixe -nitrile.",
        "correct": true,
        "explanation": "Des noms comme propanenitrile ou butanenitrile emploient le suffixe -nitrile."
      },
      {
        "content": "Le carbone du nitrile est ignoré lorsqu'on détermine méth-, éth-, prop- ou but-.",
        "correct": false,
        "explanation": "L'oublier conduit précisément à sous-estimer d'un carbone la longueur du parent."
      },
      {
        "content": "Le nitrile se nomme avec le suffixe -ol.",
        "correct": false,
        "explanation": "Le suffixe -ol désigne une fonction alcool."
      }
    ],
    "explanation": "Pour les nitriles simples, la difficulté classique est le comptage : le carbone de $\\ce{C#N}$ est C1 et compte dans le nom de la chaîne."
  },
  {
    "order": 53,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "À propos de $\\ce{(CH3)2CH-CHO}$, sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "La fonction principale est un aldéhyde.",
        "correct": false,
        "explanation": "Correct : le groupe terminal $\\ce{-CHO}$ caractérise un aldéhyde."
      },
      {
        "content": "La chaîne principale comporte trois carbones.",
        "correct": false,
        "explanation": "Correct : le parent est propanal."
      },
      {
        "content": "Le nom systématique est 2-méthylpropanal.",
        "correct": false,
        "explanation": "Correct : le parent propanal porte un substituant méthyle en C2."
      },
      {
        "content": "Le nom systématique est 2-méthylpropan-1-one.",
        "correct": true,
        "explanation": "Incorrect : la fonction est un aldéhyde, pas une cétone."
      },
      {
        "content": "Le carbone du groupe aldéhyde peut être numéroté 3 si le dessin est orienté de gauche à droite.",
        "correct": true,
        "explanation": "Incorrect : l'orientation du dessin ne commande pas la numérotation ; le carbone aldéhydique est C1."
      }
    ],
    "explanation": "La structure se nomme 2-méthylpropanal. Le carbone aldéhydique est inclus dans le parent et fixe C1, indépendamment de la façon dont la formule est dessinée."
  },
  {
    "order": 54,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{H-CHO}$ : méthanal.",
        "correct": true,
        "explanation": "Un carbone et une fonction aldéhyde donnent méthanal."
      },
      {
        "content": "$\\ce{CH3-CH2-CHO}$ : propanal.",
        "correct": true,
        "explanation": "Le carbone aldéhydique est inclus : la chaîne compte trois carbones."
      },
      {
        "content": "$\\ce{CH3-C(=O)-CH2-CH3}$ : butan-2-one.",
        "correct": true,
        "explanation": "La cétone comporte quatre carbones et le carbonyle est en C2."
      },
      {
        "content": "$\\ce{CH3-CH2-C#N}$ : propanenitrile.",
        "correct": true,
        "explanation": "Le carbone du nitrile compte dans le parent de trois carbones."
      },
      {
        "content": "$\\ce{(CH3)2CH-CHO}$ : 2-méthylpropanal.",
        "correct": true,
        "explanation": "Le parent propanal porte un groupe méthyle en C2."
      },
      {
        "content": "$\\ce{H-CHO}$ : méthanone.",
        "correct": false,
        "explanation": "La structure est un aldéhyde, pas une cétone."
      },
      {
        "content": "$\\ce{CH3-CH2-CHO}$ : éthanal.",
        "correct": false,
        "explanation": "Cette proposition oublie le carbone du groupe aldéhyde."
      },
      {
        "content": "$\\ce{CH3-C(=O)-CH2-CH3}$ : butan-3-one.",
        "correct": false,
        "explanation": "Le plus petit locant du carbonyle est 2."
      },
      {
        "content": "$\\ce{CH3-CH2-C#N}$ : éthanenitrile.",
        "correct": false,
        "explanation": "Le carbone nitrile doit être inclus dans le comptage."
      },
      {
        "content": "$\\ce{(CH3)2CH-CHO}$ : 3-méthylpropanal.",
        "correct": false,
        "explanation": "La numérotation part du carbone aldéhydique ; le méthyle est donc en C2."
      }
    ],
    "explanation": "Cette synthèse DISCOVER vérifie trois automatismes : le carbone de l'aldéhyde compte et vaut C1, le carbonyle d'une cétone doit recevoir le plus petit locant, et le carbone du nitrile compte également comme C1."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH(CH3)-CHO}$ ?",
    "choices": [
      {
        "content": "2-méthylpropanal.",
        "correct": true,
        "explanation": "Le parent contenant le carbone aldéhydique possède trois carbones et porte un méthyle en C2."
      },
      {
        "content": "2-méthylpropan-1-one.",
        "correct": false,
        "explanation": "Le groupe terminal $\\ce{-CHO}$ correspond à un aldéhyde, donc au suffixe -al."
      },
      {
        "content": "3-méthylpropanal.",
        "correct": false,
        "explanation": "La numérotation commence au carbone aldéhydique, qui est C1 ; le méthyle est en C2."
      },
      {
        "content": "Butanal.",
        "correct": false,
        "explanation": "Les quatre carbones totaux ne forment pas ici une chaîne continue de quatre carbones contenant le groupe aldéhyde."
      },
      {
        "content": "Propan-2-one.",
        "correct": false,
        "explanation": "Propan-2-one est une cétone et ne correspond pas à cette structure ramifiée."
      }
    ],
    "explanation": "Méthode : fonction aldéhyde → carbone de $\\ce{-CHO}$ = C1 → parent de trois carbones → méthyle en C2 → 2-méthylpropanal."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH(CH3)-CH2-CHO}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "3-méthylbutanal",
        "3-methylbutanal"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "En partant du carbone aldéhydique C1, le parent comporte quatre carbones et le substituant méthyle se trouve en C3 : 3-méthylbutanal."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Que peut-on déduire directement du nom « 3-méthylbutanal » ?",
    "choices": [
      {
        "content": "La fonction principale est un aldéhyde.",
        "correct": true,
        "explanation": "Le suffixe -al signale la fonction aldéhyde principale."
      },
      {
        "content": "La chaîne principale comporte quatre carbones, carbone aldéhydique compris.",
        "correct": true,
        "explanation": "Butan- correspond à un parent de quatre carbones incluant le carbone de $\\ce{-CHO}$."
      },
      {
        "content": "Le carbone du groupe aldéhyde est le carbone 1.",
        "correct": true,
        "explanation": "Dans ce type de composé, le carbone aldéhydique fixe l'origine de la numérotation."
      },
      {
        "content": "Un substituant méthyle est porté par le carbone 3.",
        "correct": true,
        "explanation": "Le préfixe 3-méthyl- localise le substituant sur C3."
      },
      {
        "content": "La molécule est une cétone parce qu'elle contient un groupe $\\ce{C=O}$.",
        "correct": false,
        "explanation": "La nature du carbonyle dépend de son environnement ; le suffixe -al indique ici un aldéhyde."
      }
    ],
    "explanation": "Lire le nom à rebours est une compétence de nomenclature : 3-méthyl / butan / al permet de reconstruire substituant, parent et fonction."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-C(=O)-CH2-CH(CH3)-CH3}$ ?",
    "choices": [
      {
        "content": "4-méthylpentan-2-one.",
        "correct": true,
        "explanation": "La chaîne principale compte cinq carbones, le carbonyle est en C2 et le méthyle en C4."
      },
      {
        "content": "2-méthylpentan-4-one.",
        "correct": false,
        "explanation": "Le groupe carbonyle doit recevoir le plus petit locant : 2 plutôt que 4."
      },
      {
        "content": "4-méthylpentan-4-one.",
        "correct": false,
        "explanation": "La numérotation correcte place le carbonyle en C2."
      },
      {
        "content": "2-méthylpentanal.",
        "correct": false,
        "explanation": "Le carbonyle est interne : il s'agit d'une cétone, pas d'un aldéhyde."
      },
      {
        "content": "Hexan-2-one.",
        "correct": false,
        "explanation": "Les six carbones totaux ne constituent pas une chaîne continue de six carbones contenant le carbonyle."
      }
    ],
    "explanation": "La fonction cétone commande la numérotation : parent pentane, carbonyle en C2, substituant méthyle en C4 → 4-méthylpentan-2-one."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH(CH3)-C(=O)-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "3-méthylbutan-2-one",
        "3-methylbutan-2-one"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La chaîne principale comporte quatre carbones. On numérote depuis l'extrémité la plus proche du carbonyle : il est en C2 et le méthyle en C3. Le nom est 3-méthylbutan-2-one."
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Pour nommer correctement la cétone ramifiée représentée, cliquez sur l'extrémité de la chaîne principale qui doit recevoir le numéro 1 afin de donner au groupe carbonyle le plus petit locant.",
    "image": {
      "src": "/images/training/ue14/chimie/nomenclature-organique/section-c-ketone-numbering-qzone.svg",
      "alt": "Formule topologique simplifiée d'une cétone ramifiée correspondant au 4-méthylpentan-2-one",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "left-end-carbon-1",
        "label": "Extrémité donnant le carbone 1",
        "x": 0.115,
        "y": 0.6,
        "tolerance": 0.07
      }
    ],
    "explanation": "En partant de l'extrémité gauche, le carbone carbonylé reçoit le locant 2. Depuis l'autre extrémité, il recevrait le locant 4. La fonction cétone principale impose donc la numérotation depuis la gauche."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare $\\ce{CH3-C(=O)-CH2-CH2-CH3}$ et $\\ce{CH3-CH2-C(=O)-CH2-CH3}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La première molécule se nomme pentan-2-one.",
        "correct": true,
        "explanation": "Le carbonyle de la première structure reçoit le locant 2."
      },
      {
        "content": "La seconde molécule se nomme pentan-3-one.",
        "correct": true,
        "explanation": "Le carbonyle est au centre de la chaîne de cinq carbones."
      },
      {
        "content": "Les deux molécules possèdent la même chaîne principale de cinq carbones.",
        "correct": true,
        "explanation": "Le parent est pentane dans les deux cas."
      },
      {
        "content": "Les deux noms doivent être identiques puisque les molécules possèdent toutes deux une fonction cétone.",
        "correct": false,
        "explanation": "Le locant du carbonyle distingue les deux isomères de position."
      },
      {
        "content": "Le locant du groupe carbonyle peut toujours être supprimé d'un nom de cétone.",
        "correct": false,
        "explanation": "Il est nécessaire dès que plusieurs positions du carbonyle sont possibles."
      }
    ],
    "explanation": "Même fonction et même nombre de carbones ne signifient pas même structure : pentan-2-one et pentan-3-one se distinguent par la position du groupe carbonyle."
  },
  {
    "order": 62,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH2-C(=O)-CH(CH3)-CH3}$ ?",
    "choices": [
      {
        "content": "2-méthylpentan-3-one.",
        "correct": true,
        "explanation": "Le carbonyle est en C3 dans les deux sens ; on choisit alors le sens donnant au méthyle le plus petit locant, soit C2."
      },
      {
        "content": "4-méthylpentan-3-one.",
        "correct": false,
        "explanation": "À locant identique pour la cétone, on retient le sens donnant le plus petit locant au substituant : 2 plutôt que 4."
      },
      {
        "content": "2-méthylpentan-2-one.",
        "correct": false,
        "explanation": "Le groupe carbonyle est au carbone central, donc en C3."
      },
      {
        "content": "Hexan-3-one.",
        "correct": false,
        "explanation": "Le groupe méthyle est une ramification ; il n'existe pas de chaîne continue de six carbones contenant le carbonyle."
      },
      {
        "content": "2-méthylpentanal.",
        "correct": false,
        "explanation": "Le carbonyle est interne, donc la fonction est une cétone et non un aldéhyde."
      }
    ],
    "explanation": "Quand le locant de la fonction principale est identique dans les deux sens, on départage la numérotation avec les locants des substituants. On obtient 2-méthylpentan-3-one."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH(CH3)-CH2-C#N}$ ?",
    "choices": [
      {
        "content": "3-méthylbutanenitrile.",
        "correct": true,
        "explanation": "Le carbone du nitrile est C1 ; le parent comporte quatre carbones et le méthyle se trouve en C3."
      },
      {
        "content": "2-méthylbutanenitrile.",
        "correct": false,
        "explanation": "En comptant depuis le carbone du nitrile C1, le substituant méthyle est en C3."
      },
      {
        "content": "3-méthylpropanenitrile.",
        "correct": false,
        "explanation": "Le parent compte quatre carbones en incluant celui du nitrile."
      },
      {
        "content": "4-méthylbutanenitrile.",
        "correct": false,
        "explanation": "La numérotation est imposée par le carbone nitrile C1 ; le méthyle est en C3."
      },
      {
        "content": "Pentanenitrile.",
        "correct": false,
        "explanation": "Les cinq carbones totaux ne forment pas une chaîne continue de cinq carbones contenant le carbone nitrile."
      }
    ],
    "explanation": "Toujours commencer le comptage au carbone du nitrile : C1 = $\\ce{C#N}$, puis C2 = $\\ce{CH2}$, C3 = carbone portant le méthyle, C4 = extrémité. D'où 3-méthylbutanenitrile."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH(CH3)-C#N}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2-méthylpropanenitrile",
        "2-methylpropanenitrile"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Le carbone du nitrile constitue C1. La chaîne principale comporte trois carbones et porte un substituant méthyle en C2 : 2-méthylpropanenitrile."
  },
  {
    "order": 65,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions incorrectes concernant les règles vues pour aldéhydes, cétones et nitriles.",
    "choices": [
      {
        "content": "Dans un aldéhyde aliphatique simple, le carbone de $\\ce{-CHO}$ est inclus dans le parent.",
        "correct": false,
        "explanation": "Correct : ce carbone appartient à la chaîne principale."
      },
      {
        "content": "Dans un nitrile simple, le carbone de $\\ce{C#N}$ correspond au carbone 1.",
        "correct": false,
        "explanation": "Correct : il fixe l'origine de la numérotation."
      },
      {
        "content": "Dans une cétone, le locant du carbonyle permet de distinguer des isomères de position.",
        "correct": false,
        "explanation": "Correct : pentan-2-one et pentan-3-one en sont un exemple."
      },
      {
        "content": "Pour $\\ce{CH3-CH2-C#N}$, la chaîne principale ne compte que deux carbones.",
        "correct": true,
        "explanation": "Incorrect : le carbone du nitrile compte aussi ; le parent possède trois carbones."
      },
      {
        "content": "Un groupe carbonyle interne se nomme systématiquement avec le suffixe -al.",
        "correct": true,
        "explanation": "Incorrect : dans les cétones principales étudiées ici, le groupe carbonyle interne conduit au suffixe -one."
      }
    ],
    "explanation": "Les deux pièges majeurs sont l'oubli du carbone nitrile dans le comptage et la confusion entre aldéhyde terminal (-al) et cétone interne (-one)."
  },
  {
    "order": 66,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Dans 3-méthylbutanal, le carbone du groupe aldéhyde est C1.",
        "correct": true,
        "explanation": "Le carbone aldéhydique fixe l'origine de la numérotation."
      },
      {
        "content": "Dans 4-méthylpentan-2-one, le groupe carbonyle est en C2.",
        "correct": true,
        "explanation": "Le locant 2 placé avant -one localise la cétone."
      },
      {
        "content": "Dans 3-méthylbutanenitrile, le carbone du nitrile est inclus dans les quatre carbones du parent.",
        "correct": true,
        "explanation": "Le suffixe -nitrile inclut le carbone de $\\ce{C#N}$ dans le parent."
      },
      {
        "content": "$\\ce{CH3-CH(CH3)-CHO}$ se nomme 2-méthylpropanal.",
        "correct": true,
        "explanation": "Le parent propanal porte un méthyle en C2."
      },
      {
        "content": "$\\ce{CH3-CH2-C(=O)-CH(CH3)-CH3}$ se nomme 2-méthylpentan-3-one.",
        "correct": true,
        "explanation": "Le carbonyle est en C3 dans les deux sens ; le méthyle reçoit alors le locant 2."
      },
      {
        "content": "Dans propanenitrile, le groupe $\\ce{C#N}$ est attaché à une chaîne de trois carbones qui ne comprend pas son propre carbone.",
        "correct": false,
        "explanation": "Le carbone du nitrile fait lui-même partie des trois carbones du parent."
      },
      {
        "content": "Pentan-2-one et pentan-3-one sont deux noms d'une même molécule.",
        "correct": false,
        "explanation": "Ils correspondent à deux positions différentes du groupe carbonyle."
      },
      {
        "content": "Le carbone aldéhydique reçoit un locant choisi librement selon l'orientation du dessin.",
        "correct": false,
        "explanation": "Dans les aldéhydes simples étudiés ici, ce carbone est C1."
      },
      {
        "content": "Le suffixe -al désigne une cétone alors que -one désigne un aldéhyde.",
        "correct": false,
        "explanation": "C'est l'inverse : -al pour l'aldéhyde, -one pour la cétone."
      },
      {
        "content": "Pour nommer un nitrile ramifié, on commence à numéroter à l'extrémité opposée au groupe $\\ce{C#N}$.",
        "correct": false,
        "explanation": "Le carbone du nitrile est C1 ; la numérotation commence donc de ce côté."
      }
    ],
    "explanation": "La synthèse PRACTICE mobilise la méthode complète : identifier la fonction, savoir quels carbones appartiennent au parent, fixer l'origine de la numérotation, localiser les substituants puis assembler le nom."
  }
];
