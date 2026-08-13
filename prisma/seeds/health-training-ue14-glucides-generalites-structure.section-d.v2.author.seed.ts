import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.1 – Section D – Cyclisation, interconversion et pouvoir rotatoire
 */

export const UE14_BIOCH_CH1_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la cyclisation des oses selon la fiche :",
    "choices": [
      {
        "content": "Les glucides peuvent former des hétérocycles.",
        "correct": true,
        "explanation": "C'est l'introduction de la section."
      },
      {
        "content": "Une forme pyranique possède un cycle à 6 sommets.",
        "correct": true,
        "explanation": "Repère donné."
      },
      {
        "content": "Une forme furanique possède un cycle à 5 sommets.",
        "correct": true,
        "explanation": "Repère donné."
      },
      {
        "content": "Toute cyclisation détruit la chaîne carbonée.",
        "correct": false,
        "explanation": "La chaîne se referme sans disparition générale du squelette."
      }
    ],
    "explanation": "Pyranoses et furanoses sont les deux grands types de cycles présentés."
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
    "question": "La forme pyranique du D-glucose, selon le schéma de la fiche :",
    "choices": [
      {
        "content": "Résulte d'un pont entre C1 et C5.",
        "correct": true,
        "explanation": "Cyclisation indiquée."
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
        "explanation": "La fiche indique qu'elle est la plus fréquente."
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
        "explanation": "Schéma du support."
      },
      {
        "content": "Est décrite comme très instable pour les aldoses.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Est donc peu fréquente pour le D-glucose.",
        "correct": true,
        "explanation": "Conséquence donnée."
      },
      {
        "content": "Résulte d'un pont C2-C5.",
        "correct": false,
        "explanation": "Ce couple concerne le fructose furanique."
      }
    ],
    "explanation": "Le D-glucose est surtout pyranique ; sa forme furanique C1-C4 est peu fréquente."
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
        "explanation": "Présentée."
      },
      {
        "content": "La chaise est décrite comme la plus stable.",
        "correct": true,
        "explanation": "Mention du support."
      },
      {
        "content": "La forme pyranique peut aussi adopter une conformation bateau.",
        "correct": true,
        "explanation": "Présentée."
      },
      {
        "content": "La forme furanique peut adopter une conformation enveloppe.",
        "correct": true,
        "explanation": "Présentée."
      }
    ],
    "explanation": "Le support distingue chaise, bateau et enveloppe selon la taille du cycle."
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
    "question": "Quel carbone est anomérique chez un aldose cyclisé dans le modèle de la fiche ?",
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
    "question": "Quel carbone est anomérique chez un cétose cyclisé dans le modèle de la fiche ?",
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
    "question": "À propos des anomères α et β dans la convention de la fiche :",
    "choices": [
      {
        "content": "α correspond à une position trans du OH anomérique par rapport au CH2OH.",
        "correct": true,
        "explanation": "Convention donnée."
      },
      {
        "content": "β correspond à une position cis du OH anomérique par rapport au CH2OH.",
        "correct": true,
        "explanation": "Convention donnée."
      },
      {
        "content": "Les anomères sont des diastéréoisomères.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Ils sont nécessairement des énantiomères.",
        "correct": false,
        "explanation": "La fiche précise qu'ils ne le sont pas."
      }
    ],
    "explanation": "La différence α/β porte sur la configuration du carbone anomérique."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La fiche précise aussi que les anomères :",
    "choices": [
      {
        "content": "Peuvent être considérés comme des épimères.",
        "correct": true,
        "explanation": "Ils diffèrent au carbone anomérique."
      },
      {
        "content": "Ne diffèrent que sur le nouveau C* créé lors de la cyclisation.",
        "correct": true,
        "explanation": "Dans la paire α/β d'un même ose."
      },
      {
        "content": "Ont des pouvoirs rotatoires différents.",
        "correct": true,
        "explanation": "Exemple du glucose donné."
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
    "question": "Pour le D-fructose selon la fiche :",
    "choices": [
      {
        "content": "La forme furanique résulte d'une cyclisation C2-C5.",
        "correct": true,
        "explanation": "Bilan donné."
      },
      {
        "content": "La forme furanique est la plus fréquente.",
        "correct": true,
        "explanation": "Point explicite."
      },
      {
        "content": "Une forme pyranique est possible par cyclisation C2-C6.",
        "correct": true,
        "explanation": "Autre possibilité."
      },
      {
        "content": "Le carbone anomérique est C1.",
        "correct": false,
        "explanation": "Il s'agit d'un cétose : C2."
      }
    ],
    "explanation": "Le D-fructose illustre une cyclisation différente de celle du D-glucose."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À pH 7, selon les valeurs de la fiche :",
    "choices": [
      {
        "content": "Environ 99 % des formes sont cycliques.",
        "correct": true,
        "explanation": "Valeur donnée."
      },
      {
        "content": "Environ un tiers correspond à la forme α.",
        "correct": true,
        "explanation": "Répartition indiquée."
      },
      {
        "content": "Environ deux tiers correspondent à la forme β.",
        "correct": true,
        "explanation": "Répartition indiquée."
      },
      {
        "content": "99 % des formes sont linéaires.",
        "correct": false,
        "explanation": "C'est la valeur donnée à pH basique."
      }
    ],
    "explanation": "À pH 7, le support décrit un équilibre très largement en faveur des formes cycliques."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À pH basique, selon la fiche :",
    "choices": [
      {
        "content": "Environ 99 % des formes sont linéaires.",
        "correct": true,
        "explanation": "Valeur donnée."
      },
      {
        "content": "La répartition diffère fortement de celle à pH 7.",
        "correct": true,
        "explanation": "À pH 7, 99 % sont cycliques."
      },
      {
        "content": "La forme linéaire joue un rôle dans les interconversions.",
        "correct": true,
        "explanation": "Elle sert d'intermédiaire α ↔ β."
      },
      {
        "content": "Les formes sont exclusivement pyraniques.",
        "correct": false,
        "explanation": "Le support met en avant les formes linéaires."
      }
    ],
    "explanation": "La fiche associe milieu basique à une forte proportion de formes linéaires."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'interconversion α ↔ β :",
    "choices": [
      {
        "content": "Passe par une forme linéaire dans le modèle de la fiche.",
        "correct": true,
        "explanation": "Schéma explicite."
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
    "question": "La fiche indique également qu'il est possible :",
    "choices": [
      {
        "content": "De passer d'un aldose à un cétose.",
        "correct": true,
        "explanation": "Interconversion de familles."
      },
      {
        "content": "De passer d'un cétose à un aldose.",
        "correct": true,
        "explanation": "Inverse mentionné."
      },
      {
        "content": "D'interconvertir des familles d'oses.",
        "correct": true,
        "explanation": "Point général."
      },
      {
        "content": "De déduire automatiquement la série D/L du signe du pouvoir rotatoire.",
        "correct": false,
        "explanation": "Ce point est explicitement faux."
      }
    ],
    "explanation": "La section interconversion ne se limite pas à α/β."
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
        "explanation": "Principe donné."
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
    "question": "La fiche insiste sur l'indépendance entre série D/L et signe optique. Les exemples donnés sont :",
    "choices": [
      {
        "content": "Fructose naturel : D(−).",
        "correct": true,
        "explanation": "Exemple explicite."
      },
      {
        "content": "Arabinose : L(+).",
        "correct": true,
        "explanation": "Exemple explicite."
      },
      {
        "content": "Glucose : D(+).",
        "correct": true,
        "explanation": "Exemple explicite."
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
        "content": "L'α-D-glucose est donné à environ +113°.",
        "correct": true,
        "explanation": "Valeur de la fiche."
      },
      {
        "content": "Le β-D-glucose est donné à environ +19°.",
        "correct": true,
        "explanation": "Valeur de la fiche."
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
    "question": "Un mélange équimolaire de D-glucose (+52,5°) et L-glucose (−52,5°), selon l'exemple de la fiche :",
    "choices": [
      {
        "content": "A une rotation résultante nulle.",
        "correct": true,
        "explanation": "Les contributions s'annulent."
      },
      {
        "content": "Est qualifié de racémique dans le support.",
        "correct": true,
        "explanation": "Terminologie utilisée."
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
        "explanation": "Bilan du support."
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
    "question": "Un D-fructose cyclise sous sa forme la plus fréquente selon la fiche. Quelles propositions sont exactes ?",
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
    "explanation": "Le fructofuranose est la forme la plus fréquente du D-fructose dans le support."
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare un anomère α et un anomère β du même D-aldose. Quelles propositions sont exactes selon la convention de la fiche ?",
    "choices": [
      {
        "content": "Ils diffèrent au carbone anomérique.",
        "correct": true,
        "explanation": "Différence structurale."
      },
      {
        "content": "α : OH anomérique trans au CH2OH.",
        "correct": true,
        "explanation": "Convention du support."
      },
      {
        "content": "β : OH anomérique cis au CH2OH.",
        "correct": true,
        "explanation": "Convention du support."
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
    "question": "À pH 7, la fiche indique environ deux tiers de forme β parmi les formes cycliques. Sur 300 molécules cycliques, combien seraient approximativement β selon ce modèle ?",
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
    "question": "On mélange 75 % de D-glucose (+52,5°) et 25 % de L-glucose (−52,5°). En supposant une contribution linéaire des proportions comme dans le raisonnement de la fiche, quelle rotation résultante obtient-on en degrés ?",
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
        "explanation": "+113° versus +19° dans la fiche."
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
    "question": "Quels couples « cycle / conformation » sont cohérents avec la fiche ?",
    "choices": [
      {
        "content": "Pyranose → chaise.",
        "correct": true,
        "explanation": "Conformation présentée."
      },
      {
        "content": "Pyranose → bateau.",
        "correct": true,
        "explanation": "Conformation présentée."
      },
      {
        "content": "Furanose → enveloppe.",
        "correct": true,
        "explanation": "Conformation présentée."
      },
      {
        "content": "Chaise → forme la plus stable parmi les conformations pyraniques montrées.",
        "correct": true,
        "explanation": "Mention explicite."
      }
    ],
    "explanation": "Les formes cycliques ne sont pas planes et adoptent différentes conformations dans l'espace."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Une solution d'ose passe d'un milieu à pH 7 à un milieu basique selon le modèle simplifié de la fiche. Quelles évolutions sont attendues ?",
    "choices": [
      {
        "content": "La proportion de formes linéaires augmente fortement.",
        "correct": true,
        "explanation": "99 % linéaires à pH basique selon le support."
      },
      {
        "content": "À pH 7, les formes cycliques dominaient.",
        "correct": true,
        "explanation": "99 % cycliques."
      },
      {
        "content": "L'accès à la forme linéaire favorise les interconversions α/β.",
        "correct": true,
        "explanation": "La forme linéaire sert d'intermédiaire."
      },
      {
        "content": "Le nombre de carbones change.",
        "correct": false,
        "explanation": "Le squelette carboné est conservé."
      }
    ],
    "explanation": "Le pH influence fortement la répartition linéaire/cyclique dans le modèle de la fiche."
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
        "explanation": "Avertissement explicite."
      },
      {
        "content": "D(−) est impossible.",
        "correct": false,
        "explanation": "Le fructose naturel est donné D(−)."
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
        "explanation": "Bilan."
      },
      {
        "content": "Le fructofuranose résulte d'une cyclisation C2-C5.",
        "correct": true,
        "explanation": "Bilan."
      },
      {
        "content": "Chez un aldose, C1 devient le carbone anomérique.",
        "correct": true,
        "explanation": "Anomérie."
      },
      {
        "content": "À pH 7, la fiche donne environ 99 % de formes cycliques.",
        "correct": true,
        "explanation": "Répartition."
      },
      {
        "content": "D/L est indépendant du signe +/−.",
        "correct": true,
        "explanation": "Avertissement."
      },
      {
        "content": "Une forme furanique possède six sommets.",
        "correct": false,
        "explanation": "Cinq."
      },
      {
        "content": "Le β-D-glucose est donné à +113°.",
        "correct": false,
        "explanation": "Cette valeur est celle de α."
      },
      {
        "content": "À pH basique, la fiche donne 99 % de formes cycliques.",
        "correct": false,
        "explanation": "Linéaires."
      },
      {
        "content": "Les anomères sont des énantiomères.",
        "correct": false,
        "explanation": "Diastéréoisomères/épimères."
      },
      {
        "content": "Le fructose naturel est donné D(+).",
        "correct": false,
        "explanation": "D(−)."
      }
    ],
    "explanation": "Cette sélection rassemble cyclisation, anomérie, interconversion et pouvoir rotatoire."
  }
];
