import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.1 – Section D – Cyclisation, interconversion et pouvoir rotatoire
 */

export const UE14_BIOCH_CH1_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la cyclisation des oses :",
    "choices": [
      {
        "content": "Les glucides peuvent former des hétérocycles.",
        "correct": true,
        "explanation": "La cyclisation intramoléculaire forme un cycle comportant un atome d'oxygène."
      },
      {
        "content": "Une forme pyranique possède un cycle à 6 sommets.",
        "correct": true,
        "explanation": "Un pyranose possède un cycle à cinq carbones et un oxygène."
      },
      {
        "content": "Une forme furanique possède un cycle à 5 sommets.",
        "correct": true,
        "explanation": "Un furanose possède un cycle à quatre carbones et un oxygène."
      },
      {
        "content": "Toute cyclisation détruit la chaîne carbonée.",
        "correct": false,
        "explanation": "La chaîne se referme sans disparition générale du squelette."
      }
    ],
    "explanation": "Les oses cycliques sont notamment classés en pyranoses à six sommets et furanoses à cinq sommets."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Combien de sommets possède une forme pyranique ?",
    "choices": [
      {
        "content": "6.",
        "correct": true,
        "explanation": "Oxygène du cycle compris."
      },
      {
        "content": "5.",
        "correct": false,
        "explanation": "Cela correspond à une forme furanique."
      },
      {
        "content": "4.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "7.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "Le pyranose est un hétérocycle à six sommets."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Combien de sommets possède une forme furanique ?",
    "choices": [
      {
        "content": "5.",
        "correct": true,
        "explanation": "Oxygène du cycle compris."
      },
      {
        "content": "6.",
        "correct": false,
        "explanation": "Pyranose."
      },
      {
        "content": "3.",
        "correct": false,
        "explanation": "Non."
      },
      {
        "content": "8.",
        "correct": false,
        "explanation": "Non."
      }
    ],
    "explanation": "Le furanose est un hétérocycle à cinq sommets."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la forme pyranique du D-glucose :",
    "choices": [
      {
        "content": "Résulte d'un pont entre C1 et C5.",
        "correct": true,
        "explanation": "Le groupe OH de C5 réagit avec le carbonyle de C1."
      },
      {
        "content": "Fait intervenir la fonction aldéhyde de C1.",
        "correct": true,
        "explanation": "C1 est le carbone carbonylé de l'aldose."
      },
      {
        "content": "Conduit à un cycle contenant un oxygène.",
        "correct": true,
        "explanation": "Hétérocycle."
      },
      {
        "content": "Est la forme la moins fréquente du D-glucose.",
        "correct": false,
        "explanation": "Les formes glucopyraniques prédominent en solution aqueuse."
      }
    ],
    "explanation": "La cyclisation C1-C5 donne le glucopyranose."
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La forme furanique du D-glucose :",
    "choices": [
      {
        "content": "Résulte d'un pont entre C1 et C4.",
        "correct": true,
        "explanation": "Le groupe OH de C4 peut réagir avec le carbonyle de C1."
      },
      {
        "content": "Forme un cycle à cinq sommets.",
        "correct": true,
        "explanation": "La fermeture C1-C4 produit un cycle comprenant quatre carbones et un oxygène."
      },
      {
        "content": "Est minoritaire en solution aqueuse pour le D-glucose.",
        "correct": true,
        "explanation": "Les formes pyraniques du D-glucose sont nettement prédominantes."
      },
      {
        "content": "Résulte d'un pont C2-C5.",
        "correct": false,
        "explanation": "Ce couple concerne le fructose furanique."
      }
    ],
    "explanation": "La cyclisation C1-C4 donne un glucofuranose, minoritaire par rapport aux formes glucopyraniques en solution aqueuse."
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des conformations cycliques :",
    "choices": [
      {
        "content": "La forme pyranique peut adopter une conformation chaise.",
        "correct": true,
        "explanation": "Une conformation chaise limite la tension du cycle pyranique."
      },
      {
        "content": "Une conformation chaise est généralement plus stable qu'une conformation bateau pour un même pyranose.",
        "correct": true,
        "explanation": "La conformation chaise limite les interactions défavorables et la tension du cycle."
      },
      {
        "content": "La forme pyranique peut aussi adopter une conformation bateau.",
        "correct": true,
        "explanation": "La conformation bateau est une autre géométrie possible d'un cycle pyranique."
      },
      {
        "content": "La forme furanique peut adopter une conformation enveloppe.",
        "correct": true,
        "explanation": "Le plissement d'un cycle furanique peut produire une conformation enveloppe."
      }
    ],
    "explanation": "Les pyranoses adoptent notamment des conformations chaise ou bateau ; les furanoses peuvent adopter une conformation enveloppe."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Lors de la cyclisation d'un aldose :",
    "choices": [
      {
        "content": "Le C1 devient un nouveau carbone asymétrique.",
        "correct": true,
        "explanation": "Point central de la section anomères."
      },
      {
        "content": "Un C* supplémentaire apparaît.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Deux anomères α et β deviennent possibles.",
        "correct": true,
        "explanation": "Conséquence du nouveau C*."
      },
      {
        "content": "Le nombre de carbones de la molécule diminue.",
        "correct": false,
        "explanation": "La cyclisation ne retire pas de carbone."
      }
    ],
    "explanation": "Le carbone anomérique naît de la cyclisation du carbonyle."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel carbone devient anomérique lors de la cyclisation d'un aldose usuel ?",
    "choices": [
      {
        "content": "C1.",
        "correct": true,
        "explanation": "Ancien carbone aldéhydique."
      },
      {
        "content": "C2.",
        "correct": false,
        "explanation": "C2 est anomérique pour les cétoses."
      },
      {
        "content": "C5.",
        "correct": false,
        "explanation": "Il participe à la fermeture du glucose pyranique mais n'est pas le carbone anomérique."
      },
      {
        "content": "C6.",
        "correct": false,
        "explanation": "Carbone terminal du glucose."
      }
    ],
    "explanation": "Chez les aldoses, le carbone anomérique est C1."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel carbone devient anomérique lors de la cyclisation d'un 2-cétose usuel ?",
    "choices": [
      {
        "content": "C2.",
        "correct": true,
        "explanation": "Ancien carbone cétonique."
      },
      {
        "content": "C1.",
        "correct": false,
        "explanation": "Anomérique des aldoses."
      },
      {
        "content": "C5.",
        "correct": false,
        "explanation": "Partenaire de cyclisation du fructose furanique."
      },
      {
        "content": "C6.",
        "correct": false,
        "explanation": "Partenaire possible de la cyclisation pyranique du fructose."
      }
    ],
    "explanation": "Chez les cétoses, le carbone anomérique est C2."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des anomères α et β d'un ose :",
    "choices": [
      {
        "content": "α correspond à une position trans du OH anomérique par rapport au CH2OH.",
        "correct": true,
        "explanation": "Dans la représentation cyclique usuelle, α place le groupe OH anomérique du côté opposé au groupe CH2OH de référence."
      },
      {
        "content": "β correspond à une position cis du OH anomérique par rapport au CH2OH.",
        "correct": true,
        "explanation": "Dans la représentation cyclique usuelle, β place le groupe OH anomérique du même côté que le groupe CH2OH de référence."
      },
      {
        "content": "Les anomères sont des diastéréoisomères.",
        "correct": true,
        "explanation": "Ils diffèrent sur un centre stéréogène sans être images miroir l'un de l'autre."
      },
      {
        "content": "Ils sont nécessairement des énantiomères.",
        "correct": false,
        "explanation": "Deux anomères d'un même ose sont des diastéréoisomères."
      }
    ],
    "explanation": "La différence α/β porte sur la configuration du carbone anomérique."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Deux anomères d'un même ose :",
    "choices": [
      {
        "content": "Sont des épimères au carbone anomérique.",
        "correct": true,
        "explanation": "Ils diffèrent au carbone anomérique."
      },
      {
        "content": "Ne diffèrent que sur le nouveau C* créé lors de la cyclisation.",
        "correct": true,
        "explanation": "Le reste de la configuration de l'ose est conservé."
      },
      {
        "content": "Ont des pouvoirs rotatoires différents.",
        "correct": true,
        "explanation": "Les anomères α et β du glucose ont des pouvoirs rotatoires spécifiques différents."
      },
      {
        "content": "Ont toujours le même angle de rotation.",
        "correct": false,
        "explanation": "Les valeurs α et β du glucose diffèrent fortement."
      }
    ],
    "explanation": "L'anomérie relie cyclisation, épimérie et pouvoir rotatoire."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la cyclisation du D-fructose :",
    "choices": [
      {
        "content": "La forme furanique résulte d'une cyclisation C2-C5.",
        "correct": true,
        "explanation": "Le groupe OH de C5 réagit avec le carbonyle de C2."
      },
      {
        "content": "La forme furanique possède un cycle à cinq sommets.",
        "correct": true,
        "explanation": "Le fructofuranose possède un cycle comprenant quatre carbones et un oxygène."
      },
      {
        "content": "Une forme pyranique est possible par cyclisation C2-C6.",
        "correct": true,
        "explanation": "La réaction du groupe OH de C6 avec le carbonyle de C2 forme un fructopyranose."
      },
      {
        "content": "Le carbone anomérique est C1.",
        "correct": false,
        "explanation": "Il s'agit d'un cétose : C2."
      }
    ],
    "explanation": "Le D-fructose peut former un furanose par cyclisation C2-C5 ou un pyranose par cyclisation C2-C6 ; son carbone anomérique est C2."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour le D-glucose à l'équilibre en solution aqueuse proche de pH 7 :",
    "choices": [
      {
        "content": "Environ 99 % des formes sont cycliques.",
        "correct": true,
        "explanation": "La forme linéaire ne représente qu'une très faible fraction du D-glucose à l'équilibre."
      },
      {
        "content": "Environ un tiers correspond à la forme α.",
        "correct": true,
        "explanation": "L'α-D-glucopyranose représente approximativement un tiers du mélange à l'équilibre."
      },
      {
        "content": "Environ deux tiers correspondent à la forme β.",
        "correct": true,
        "explanation": "Le β-D-glucopyranose représente approximativement deux tiers du mélange à l'équilibre."
      },
      {
        "content": "99 % des formes sont linéaires.",
        "correct": false,
        "explanation": "À l'équilibre en solution aqueuse, la forme linéaire est très minoritaire."
      }
    ],
    "explanation": "À l'équilibre dans l'eau, le D-glucose est presque entièrement cyclique, avec environ un tiers de forme α et deux tiers de forme β."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du comportement d'un ose réducteur en milieu basique :",
    "choices": [
      {
        "content": "L'ouverture du cycle peut donner accès à une forme linéaire.",
        "correct": true,
        "explanation": "La forme cyclique est en équilibre avec une forme ouverte portant un carbonyle."
      },
      {
        "content": "La forme linéaire peut s'énoliser et participer à des interconversions aldose-cétose.",
        "correct": true,
        "explanation": "En milieu basique, l'intermédiaire énediol permet une isomérisation aldose-cétose."
      },
      {
        "content": "Une épimérisation peut également se produire via un intermédiaire énediol.",
        "correct": true,
        "explanation": "La reprotonation de l'intermédiaire plan peut modifier la configuration d'un centre stéréogène."
      },
      {
        "content": "L'ose reste exclusivement sous une unique forme pyranique.",
        "correct": false,
        "explanation": "L'ouverture du cycle et les interconversions excluent une forme pyranique unique et permanente."
      }
    ],
    "explanation": "En milieu basique, la forme ouverte d'un ose réducteur peut passer par un intermédiaire énediol, à l'origine d'isomérisations et d'épimérisations."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'interconversion α ↔ β :",
    "choices": [
      {
        "content": "Passe par une forme linéaire.",
        "correct": true,
        "explanation": "L'ouverture du cycle restitue temporairement la fonction carbonyle avant une nouvelle cyclisation."
      },
      {
        "content": "Permet de passer d'un anomère à l'autre.",
        "correct": true,
        "explanation": "Définition pratique."
      },
      {
        "content": "Conserve l'identité de l'ose.",
        "correct": true,
        "explanation": "Il s'agit du même ose sous des formes différentes."
      },
      {
        "content": "Exige une conversion en peptide.",
        "correct": false,
        "explanation": "Sans rapport."
      }
    ],
    "explanation": "La forme linéaire est l'intermédiaire entre les deux anomères."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "En milieu basique, l'interconversion des oses réducteurs peut permettre :",
    "choices": [
      {
        "content": "De passer d'un aldose à un cétose.",
        "correct": true,
        "explanation": "Un aldose peut s'isomériser en cétose via un intermédiaire énediol."
      },
      {
        "content": "De passer d'un cétose à un aldose.",
        "correct": true,
        "explanation": "La transformation via l'énediol est réversible."
      },
      {
        "content": "D'interconvertir des familles d'oses.",
        "correct": true,
        "explanation": "L'isomérisation peut déplacer la fonction carbonyle et changer la famille de l'ose."
      },
      {
        "content": "De déduire automatiquement la série D/L du signe du pouvoir rotatoire.",
        "correct": false,
        "explanation": "Le signe du pouvoir rotatoire ne détermine pas la série D/L."
      }
    ],
    "explanation": "En milieu basique, un intermédiaire énediol peut permettre des isomérisations aldose-cétose et des épimérisations."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le pouvoir rotatoire des sucres :",
    "choices": [
      {
        "content": "Concerne les oses possédant des carbones asymétriques.",
        "correct": true,
        "explanation": "Une molécule chirale peut dévier le plan de la lumière polarisée."
      },
      {
        "content": "Correspond à une déviation de la lumière polarisée.",
        "correct": true,
        "explanation": "Principe."
      },
      {
        "content": "Peut être positif pour une déviation vers la droite.",
        "correct": true,
        "explanation": "Dextrogyre."
      },
      {
        "content": "Peut être négatif pour une déviation vers la gauche.",
        "correct": true,
        "explanation": "Lévogyre."
      }
    ],
    "explanation": "Le signe +/− décrit le sens de déviation de la lumière polarisée."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un ose qui dévie la lumière polarisée vers la droite est dit :",
    "choices": [
      {
        "content": "Dextrogyre (+).",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Lévogyre (−).",
        "correct": false,
        "explanation": "Sens opposé."
      },
      {
        "content": "Toujours de série D.",
        "correct": false,
        "explanation": "D/L et +/− sont indépendants."
      },
      {
        "content": "Toujours de série L.",
        "correct": false,
        "explanation": "Même piège."
      }
    ],
    "explanation": "Le signe optique et la série structurale sont deux informations distinctes."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un ose qui dévie la lumière polarisée vers la gauche est dit :",
    "choices": [
      {
        "content": "Lévogyre (−).",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Dextrogyre (+).",
        "correct": false,
        "explanation": "Sens opposé."
      },
      {
        "content": "Toujours L.",
        "correct": false,
        "explanation": "L et − ne sont pas synonymes."
      },
      {
        "content": "Toujours D.",
        "correct": false,
        "explanation": "D peut être + ou −."
      }
    ],
    "explanation": "Lévogyre correspond au signe négatif, indépendamment de D/L."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quels exemples illustrent l'indépendance entre la série D/L et le signe du pouvoir rotatoire ?",
    "choices": [
      {
        "content": "Fructose naturel : D(−).",
        "correct": true,
        "explanation": "Le D-fructose naturel est lévogyre."
      },
      {
        "content": "Arabinose : L(+).",
        "correct": true,
        "explanation": "Le L-arabinose est dextrogyre."
      },
      {
        "content": "Glucose : D(+).",
        "correct": true,
        "explanation": "Le D-glucose est dextrogyre."
      },
      {
        "content": "Toute forme D est (+).",
        "correct": false,
        "explanation": "Le fructose D(−) contredit cette règle."
      }
    ],
    "explanation": "Ces exemples montrent que D/L ne prédit pas le signe du pouvoir rotatoire."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les anomères du D-glucose :",
    "choices": [
      {
        "content": "Le pouvoir rotatoire spécifique de l'α-D-glucose est proche de +112°.",
        "correct": true,
        "explanation": "La valeur usuelle est d'environ +112° dans des conditions de référence."
      },
      {
        "content": "Le pouvoir rotatoire spécifique du β-D-glucose est proche de +19°.",
        "correct": true,
        "explanation": "La valeur usuelle est d'environ +19° dans des conditions de référence."
      },
      {
        "content": "Ils dévient donc différemment la lumière polarisée.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Ils sont optiquement indiscernables.",
        "correct": false,
        "explanation": "Leurs angles diffèrent."
      }
    ],
    "explanation": "La différence de rotation des anomères accompagne leur interconversion en solution."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Un mélange équimolaire de D-glucose (+52,5°) et de L-glucose (−52,5°), mesurés dans les mêmes conditions :",
    "choices": [
      {
        "content": "A une rotation résultante nulle.",
        "correct": true,
        "explanation": "Les contributions s'annulent."
      },
      {
        "content": "Est un mélange racémique.",
        "correct": true,
        "explanation": "Un racémate contient deux énantiomères en proportions égales."
      },
      {
        "content": "Contient deux énantiomères en proportions égales.",
        "correct": true,
        "explanation": "D et L du même ose."
      },
      {
        "content": "A une rotation de +52,5°.",
        "correct": false,
        "explanation": "Les rotations opposées s'annulent."
      }
    ],
    "explanation": "L'exemple final illustre l'annulation du pouvoir rotatoire dans un mélange équimolaire d'énantiomères."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur ce glucopyranose simplifié, cliquez sur le carbone anomérique issu du carbone aldéhydique C1.",
    "image": {
      "src": "/images/training/ue14/biochimie/glucides-generalites-structure/glucopyranose-carbone-anomerique-qzone.svg",
      "alt": "Schéma original simplifié d'un cycle glucopyranose à six sommets avec le carbone anomérique à droite de l'oxygène du cycle",
      "width": 900,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "c1",
        "label": "C1, carbone anomérique",
        "x": 0.72,
        "y": 0.31,
        "tolerance": 0.085
      }
    ],
    "explanation": "Chez un aldose comme le glucose, le carbone carbonylé C1 devient le carbone anomérique lors de la cyclisation."
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un D-glucose cyclise sous forme pyranique. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La fermeture implique C1 et C5.",
        "correct": true,
        "explanation": "Le groupe OH de C5 réagit avec le carbonyle de C1."
      },
      {
        "content": "C1 devient un nouveau C*.",
        "correct": true,
        "explanation": "Carbone anomérique."
      },
      {
        "content": "Deux formes α et β deviennent possibles.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "Le cycle obtenu possède cinq sommets.",
        "correct": false,
        "explanation": "Le pyranose possède six sommets."
      }
    ],
    "explanation": "La cyclisation pyranique crée le carbone anomérique et les deux anomères."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un D-fructose cyclise sous forme furanique. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La cyclisation implique C2 et C5.",
        "correct": true,
        "explanation": "Forme furanique."
      },
      {
        "content": "Le cycle comporte cinq sommets.",
        "correct": true,
        "explanation": "Furanose."
      },
      {
        "content": "Le carbone anomérique est C2.",
        "correct": true,
        "explanation": "Ancien carbone cétonique."
      },
      {
        "content": "La forme pyranique C2-C6 est impossible.",
        "correct": false,
        "explanation": "Elle est possible mais moins mise en avant."
      }
    ],
    "explanation": "La cyclisation C2-C5 du D-fructose forme un fructofuranose à cinq sommets dont C2 est le carbone anomérique."
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare un anomère α et un anomère β du même D-aldose. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils diffèrent au carbone anomérique.",
        "correct": true,
        "explanation": "Différence structurale."
      },
      {
        "content": "α : OH anomérique trans au CH2OH.",
        "correct": true,
        "explanation": "Dans un D-ose, α place ces deux groupes sur des faces opposées du cycle."
      },
      {
        "content": "β : OH anomérique cis au CH2OH.",
        "correct": true,
        "explanation": "Dans un D-ose, β place ces deux groupes sur la même face du cycle."
      },
      {
        "content": "Ils sont énantiomères.",
        "correct": false,
        "explanation": "Ils sont diastéréoisomères/épimères."
      }
    ],
    "explanation": "La relation α/β est une épimérie au carbone anomérique."
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "On admet qu'à l'équilibre en solution aqueuse, environ deux tiers des molécules cycliques de D-glucose sont sous forme β. Sur 300 molécules cycliques, combien seraient approximativement β ?",
    "answer": {
      "type": "number",
      "value": 200,
      "tolerance": 0
    },
    "explanation": "Deux tiers de 300 donnent environ 200 molécules β."
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Dans l'exemple équimolaire D-glucose (+52,5°) / L-glucose (−52,5°), quelle rotation résultante attend-on, en degrés ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0
    },
    "explanation": "Les contributions opposées et égales s'annulent."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "On mélange 75 % de D-glucose (+52,5°) et 25 % de L-glucose (−52,5°), mesurés dans les mêmes conditions. En supposant une contribution linéaire des proportions, quelle rotation résultante obtient-on en degrés ?",
    "answer": {
      "type": "number",
      "value": 26.25,
      "tolerance": 0
    },
    "explanation": "0,75×52,5 + 0,25×(−52,5) = 26,25°."
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pourquoi l'interconversion α ↔ β modifie-t-elle le pouvoir rotatoire d'une solution de glucose ?",
    "choices": [
      {
        "content": "Les deux anomères ont des rotations différentes.",
        "correct": true,
        "explanation": "Les valeurs usuelles sont proches de +112° pour α et +19° pour β."
      },
      {
        "content": "Leurs proportions évoluent en solution.",
        "correct": true,
        "explanation": "Un équilibre est atteint."
      },
      {
        "content": "La rotation observée dépend donc de la composition du mélange.",
        "correct": true,
        "explanation": "Conséquence."
      },
      {
        "content": "D/L change nécessairement pendant cette interconversion.",
        "correct": false,
        "explanation": "L'ose reste de la même série."
      }
    ],
    "explanation": "La variation de rotation accompagne l'évolution des proportions d'anomères."
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quels couples « cycle / conformation » sont cohérents ?",
    "choices": [
      {
        "content": "Pyranose → chaise.",
        "correct": true,
        "explanation": "Un cycle pyranique peut adopter une conformation chaise."
      },
      {
        "content": "Pyranose → bateau.",
        "correct": true,
        "explanation": "Un cycle pyranique peut aussi adopter une conformation bateau."
      },
      {
        "content": "Furanose → enveloppe.",
        "correct": true,
        "explanation": "Un cycle furanique peut adopter une conformation enveloppe."
      },
      {
        "content": "Chaise → forme la plus stable parmi les conformations pyraniques montrées.",
        "correct": true,
        "explanation": "Pour un même pyranose, une chaise est généralement plus stable qu'un bateau."
      }
    ],
    "explanation": "Les formes cycliques ne sont pas planes et adoptent différentes conformations dans l'espace."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un ose réducteur est placé en milieu basique. Quelles transformations peuvent se produire ?",
    "choices": [
      {
        "content": "L'ouverture du cycle donne accès à une forme linéaire.",
        "correct": true,
        "explanation": "La forme ouverte porte le carbonyle nécessaire aux transformations ultérieures."
      },
      {
        "content": "Des interconversions aldose-cétose peuvent se produire via un intermédiaire énediol.",
        "correct": true,
        "explanation": "L'énediol peut redonner un aldose ou former un cétose."
      },
      {
        "content": "Une épimérisation peut modifier la configuration d'un carbone asymétrique.",
        "correct": true,
        "explanation": "La reprotonation de l'intermédiaire plan peut se faire sur l'une ou l'autre face."
      },
      {
        "content": "Le nombre de carbones change.",
        "correct": false,
        "explanation": "Le squelette carboné est conservé."
      }
    ],
    "explanation": "En milieu basique, l'ouverture du cycle puis la formation d'un énediol peuvent conduire à des isomérisations et à des épimérisations."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de l'activité optique et de la stéréochimie :",
    "choices": [
      {
        "content": "D/L renseigne sur une configuration structurale.",
        "correct": true,
        "explanation": "Lecture de Fischer."
      },
      {
        "content": "+/− renseigne sur le sens de rotation de la lumière.",
        "correct": true,
        "explanation": "Mesure optique."
      },
      {
        "content": "Ces deux informations sont indépendantes.",
        "correct": true,
        "explanation": "La série D/L est structurale, tandis que le signe +/− est expérimental."
      },
      {
        "content": "D(−) est impossible.",
        "correct": false,
        "explanation": "Le D-fructose naturel est lévogyre : il constitue un exemple D(−)."
      }
    ],
    "explanation": "Ne pas confondre série D/L et signe du pouvoir rotatoire est un objectif majeur."
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le glucopyranose résulte d'une cyclisation C1-C5.",
        "correct": true,
        "explanation": "Le groupe OH de C5 réagit avec le carbonyle de C1."
      },
      {
        "content": "Le fructofuranose résulte d'une cyclisation C2-C5.",
        "correct": true,
        "explanation": "Le groupe OH de C5 réagit avec le carbonyle de C2."
      },
      {
        "content": "Chez un aldose, C1 devient le carbone anomérique.",
        "correct": true,
        "explanation": "Le carbone carbonylé C1 devient un nouveau centre stéréogène."
      },
      {
        "content": "À l'équilibre dans l'eau, plus de 99 % du D-glucose est sous forme cyclique.",
        "correct": true,
        "explanation": "La forme linéaire du D-glucose est très minoritaire à l'équilibre en solution aqueuse."
      },
      {
        "content": "D/L est indépendant du signe +/−.",
        "correct": true,
        "explanation": "D/L décrit une configuration ; +/− décrit le sens de rotation optique."
      },
      {
        "content": "Une forme furanique possède six sommets.",
        "correct": false,
        "explanation": "Cinq."
      },
      {
        "content": "Le pouvoir rotatoire spécifique du β-D-glucose est proche de +112°.",
        "correct": false,
        "explanation": "Une valeur proche de +112° correspond à l'α-D-glucose ; celle du β-D-glucose est proche de +19°."
      },
      {
        "content": "Un ose réducteur reste exclusivement sous une forme cyclique unique en milieu basique.",
        "correct": false,
        "explanation": "L'ouverture du cycle et des interconversions via un énediol peuvent se produire."
      },
      {
        "content": "Les anomères sont des énantiomères.",
        "correct": false,
        "explanation": "Diastéréoisomères/épimères."
      },
      {
        "content": "Le D-fructose naturel est dextrogyre.",
        "correct": false,
        "explanation": "D(−)."
      }
    ],
    "explanation": "Cette sélection rassemble cyclisation, anomérie, interconversion et pouvoir rotatoire."
  }
];
