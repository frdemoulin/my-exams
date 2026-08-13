import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie – Chapitre 1.1 – Section B – Chiralité, représentations et filiation
 */

export const UE14_BIOCH_CH1_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Un carbone asymétrique, noté $\\mathrm{C^*}$ dans la fiche :",
    "choices": [
      {
        "content": "Est lié à quatre substituants différents.",
        "correct": true,
        "explanation": "C'est la définition donnée."
      },
      {
        "content": "Constitue un centre de chiralité.",
        "correct": true,
        "explanation": "La fiche utilise cette notion."
      },
      {
        "content": "Doit être lié à quatre atomes de carbone.",
        "correct": false,
        "explanation": "Les quatre substituants doivent être différents, pas nécessairement carbonés."
      },
      {
        "content": "Peut contribuer à rendre une molécule chirale.",
        "correct": true,
        "explanation": "Un ou plusieurs C* peuvent rendre la molécule chirale."
      }
    ],
    "explanation": "Le carbone asymétrique est un carbone tétraédrique portant quatre substituants différents."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du glycéraldéhyde $\\mathrm{C_3H_6O_3}$ :",
    "choices": [
      {
        "content": "Il possède un carbone asymétrique.",
        "correct": true,
        "explanation": "Le carbone central porte quatre substituants différents."
      },
      {
        "content": "Il est chiral.",
        "correct": true,
        "explanation": "La fiche l'utilise comme exemple de molécule chirale."
      },
      {
        "content": "Il ne possède aucun centre de chiralité.",
        "correct": false,
        "explanation": "Il en possède un."
      },
      {
        "content": "Il n'est pas superposable à son image dans le miroir.",
        "correct": true,
        "explanation": "C'est la conséquence indiquée."
      }
    ],
    "explanation": "Le glycéraldéhyde est l'exemple simple de triose chiral du support."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la dihydroxyacétone $\\mathrm{C_3H_6O_3}$ :",
    "choices": [
      {
        "content": "Elle ne possède aucun carbone asymétrique.",
        "correct": true,
        "explanation": "Contre-exemple du support."
      },
      {
        "content": "Elle est achirale.",
        "correct": true,
        "explanation": "La fiche le précise."
      },
      {
        "content": "Elle possède le même nombre de C* que le glycéraldéhyde.",
        "correct": false,
        "explanation": "Le glycéraldéhyde en possède un, elle aucun."
      },
      {
        "content": "Elle est un cétose.",
        "correct": true,
        "explanation": "Sa fonction carbonyle est une cétone."
      }
    ],
    "explanation": "La dihydroxyacétone sert de contre-exemple achiral au glycéraldéhyde."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une molécule chirale, dans l'explication de la fiche :",
    "choices": [
      {
        "content": "N'est pas superposable à son image dans un miroir.",
        "correct": true,
        "explanation": "Critère donné."
      },
      {
        "content": "Peut ne pas avoir de plan de symétrie.",
        "correct": true,
        "explanation": "Le support l'utilise pour le glycéraldéhyde."
      },
      {
        "content": "Est nécessairement identique à son image miroir.",
        "correct": false,
        "explanation": "C'est précisément l'inverse."
      },
      {
        "content": "Peut posséder un ou plusieurs carbones asymétriques.",
        "correct": true,
        "explanation": "Définition de la molécule chirale utilisée."
      }
    ],
    "explanation": "La chiralité traduit une dissymétrie spatiale de la molécule."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour le carbone asymétrique du glycéraldéhyde, quel ordre de priorité est donné dans la fiche ?",
    "choices": [
      {
        "content": "$\\mathrm{OH > CHO > CH_2OH > H}$.",
        "correct": true,
        "explanation": "Ordre explicitement indiqué."
      },
      {
        "content": "$\\mathrm{H > OH > CHO > CH_2OH}$.",
        "correct": false,
        "explanation": "Ordre inverse incorrect."
      },
      {
        "content": "OH est prioritaire sur H.",
        "correct": true,
        "explanation": "Conséquence directe de l'ordre."
      },
      {
        "content": "H est le substituant de priorité la plus faible.",
        "correct": true,
        "explanation": "Il est placé en dernier."
      }
    ],
    "explanation": "Le support donne l'ordre OH > CHO > CH2OH > H pour illustrer la classification autour du C*."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la nomenclature R/S dans cette fiche de biochimie :",
    "choices": [
      {
        "content": "Elle peut être déterminée pour chaque carbone asymétrique.",
        "correct": true,
        "explanation": "La fiche le précise."
      },
      {
        "content": "Elle est décrite comme très précise.",
        "correct": true,
        "explanation": "Formulation du support."
      },
      {
        "content": "Elle est jugée peu parlante lorsque le nombre de carbones augmente.",
        "correct": true,
        "explanation": "Raison donnée pour privilégier D/L en biochimie."
      },
      {
        "content": "Elle remplace totalement la série D/L dans la suite du cours.",
        "correct": false,
        "explanation": "Le support privilégie au contraire D/L."
      }
    ],
    "explanation": "La fiche rappelle R/S puis explique pourquoi la biochimie utilise beaucoup la série D/L."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans une projection de Fischer d'un ose, quel carbone asymétrique est surtout utilisé pour déterminer la série D/L ?",
    "choices": [
      {
        "content": "Le dernier carbone asymétrique, c'est-à-dire l'avant-dernier carbone de la molécule.",
        "correct": true,
        "explanation": "Règle donnée."
      },
      {
        "content": "Toujours le carbone C1.",
        "correct": false,
        "explanation": "C1 est souvent carbonylé chez les aldoses."
      },
      {
        "content": "Toujours le premier carbone asymétrique.",
        "correct": false,
        "explanation": "La série dépend du dernier C*."
      },
      {
        "content": "Le carbone carbonylé uniquement.",
        "correct": false,
        "explanation": "Ce n'est pas le critère."
      }
    ],
    "explanation": "La série D/L se lit sur le dernier C* de la projection de Fischer."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le modèle de Fischer présenté :",
    "choices": [
      {
        "content": "Série D : OH du dernier C* à droite.",
        "correct": true,
        "explanation": "Critère explicite."
      },
      {
        "content": "Série L : OH du dernier C* à gauche.",
        "correct": true,
        "explanation": "Critère explicite."
      },
      {
        "content": "D signifie obligatoirement dextrogyre (+).",
        "correct": false,
        "explanation": "La fiche insiste ensuite sur l'indépendance D/L et +/−."
      },
      {
        "content": "L signifie obligatoirement lévogyre (−).",
        "correct": false,
        "explanation": "Même piège."
      }
    ],
    "explanation": "La position du OH du dernier carbone asymétrique détermine D ou L, pas le signe du pouvoir rotatoire."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Selon le tableau de la fiche, pour le dernier C* :",
    "choices": [
      {
        "content": "Une configuration D est associée à R.",
        "correct": true,
        "explanation": "Association présentée localement."
      },
      {
        "content": "Une configuration L est associée à S.",
        "correct": true,
        "explanation": "Association présentée localement."
      },
      {
        "content": "D place le OH à droite en Fischer.",
        "correct": true,
        "explanation": "Critère graphique."
      },
      {
        "content": "L place le OH à droite.",
        "correct": false,
        "explanation": "L le place à gauche."
      }
    ],
    "explanation": "La banque reprend ici la correspondance telle qu'elle est présentée dans le support."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la distribution biologique des séries D/L :",
    "choices": [
      {
        "content": "La grande majorité des formes naturelles citées sont D.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "Des formes L sont rencontrées chez des bactéries et virus.",
        "correct": true,
        "explanation": "Point du support."
      },
      {
        "content": "L-fucose est cité comme exception chez l'Homme.",
        "correct": true,
        "explanation": "Exemple donné."
      },
      {
        "content": "Acide L-iduronique est cité comme autre exception chez l'Homme.",
        "correct": true,
        "explanation": "Exemple donné."
      }
    ],
    "explanation": "La fiche présente deux exceptions humaines de série L : L-fucose et acide L-iduronique."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du L-fucose et de l'acide L-iduronique :",
    "choices": [
      {
        "content": "Le L-fucose est associé aux glycoprotéines et glycolipides.",
        "correct": true,
        "explanation": "Contexte cité."
      },
      {
        "content": "L'acide L-iduronique est associé aux glycosaminoglycanes.",
        "correct": true,
        "explanation": "Contexte cité."
      },
      {
        "content": "Ils illustrent des formes L présentes chez l'Homme.",
        "correct": true,
        "explanation": "Pourquoi ils sont cités."
      },
      {
        "content": "Ils prouvent que toutes les formes humaines sont L.",
        "correct": false,
        "explanation": "La grande majorité est D."
      }
    ],
    "explanation": "Ces deux molécules sont des exceptions à la prédominance des séries D."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour déterminer la série d'un ose en Fischer, quelle démarche est correcte ?",
    "choices": [
      {
        "content": "Repérer le dernier carbone asymétrique.",
        "correct": true,
        "explanation": "Étape principale."
      },
      {
        "content": "Observer la position de son groupe OH.",
        "correct": true,
        "explanation": "Droite ou gauche."
      },
      {
        "content": "OH à droite → série D.",
        "correct": true,
        "explanation": "Règle du support."
      },
      {
        "content": "Utiliser le signe (+/−) du pouvoir rotatoire à la place.",
        "correct": false,
        "explanation": "D/L et signe optique sont indépendants."
      }
    ],
    "explanation": "La série D/L est une information structurale issue de la projection de Fischer."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la projection de Newman dans la fiche :",
    "choices": [
      {
        "content": "Elle représente l'environnement spatial autour d'une liaison.",
        "correct": true,
        "explanation": "C'est la représentation montrée."
      },
      {
        "content": "Elle permet d'illustrer des configurations autour d'un carbone asymétrique.",
        "correct": true,
        "explanation": "Utilisation dans le support."
      },
      {
        "content": "La fiche rappelle le classement des substituants pour déterminer R ou S.",
        "correct": true,
        "explanation": "OH > CHO > CH2OH > H est donné."
      },
      {
        "content": "Elle constitue la seule représentation utilisée pour les oses.",
        "correct": false,
        "explanation": "La projection de Fischer est largement utilisée ensuite."
      }
    ],
    "explanation": "Newman introduit la représentation spatiale avant le recours privilégié à Fischer."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones asymétriques possède un aldohexose linéaire dans le modèle de filiation de la fiche ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Pour un aldose à n carbones, la filiation donne n−2 carbones asymétriques ; pour n=6, cela fait 4."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones asymétriques possède un cétohexose linéaire dans le modèle de filiation de la fiche ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Pour un cétose à n carbones, la filiation donne n−3 carbones asymétriques ; pour n=6, cela fait 3."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le nombre de stéréoisomères dans la filiation de la fiche :",
    "choices": [
      {
        "content": "Un aldose à n carbones possède $2^{n-2}$ stéréoisomères.",
        "correct": true,
        "explanation": "Relation utilisée dans le tableau de filiation."
      },
      {
        "content": "Un cétose à n carbones possède $2^{n-3}$ stéréoisomères.",
        "correct": true,
        "explanation": "Relation utilisée dans le tableau de filiation."
      },
      {
        "content": "Un aldohexose possède 16 stéréoisomères.",
        "correct": true,
        "explanation": "$2^4=16$."
      },
      {
        "content": "Un cétohexose possède 16 stéréoisomères.",
        "correct": false,
        "explanation": "Il en possède 8 dans ce modèle : $2^3$."
      }
    ],
    "explanation": "Le nombre de stéréoisomères dépend du nombre de centres de chiralité."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Combien de stéréoisomères possède un aldohexose selon la filiation du support ?",
    "choices": [
      {
        "content": "16.",
        "correct": true,
        "explanation": "$2^{6-2}=16$."
      },
      {
        "content": "8.",
        "correct": false,
        "explanation": "Valeur du cétohexose."
      },
      {
        "content": "4.",
        "correct": false,
        "explanation": "Trop faible."
      },
      {
        "content": "32.",
        "correct": false,
        "explanation": "Trop élevé."
      }
    ],
    "explanation": "Un aldohexose linéaire comporte quatre C*, donc 16 configurations."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Combien de stéréoisomères possède un cétohexose selon la filiation du support ?",
    "choices": [
      {
        "content": "8.",
        "correct": true,
        "explanation": "$2^{6-3}=8$."
      },
      {
        "content": "16.",
        "correct": false,
        "explanation": "Valeur de l'aldohexose."
      },
      {
        "content": "2.",
        "correct": false,
        "explanation": "Trop faible."
      },
      {
        "content": "64.",
        "correct": false,
        "explanation": "Trop élevé."
      }
    ],
    "explanation": "Un cétohexose comporte trois C*, donc huit configurations."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le glycéraldéhyde et la dihydroxyacétone illustrent aussi le calcul de stéréoisomères :",
    "choices": [
      {
        "content": "L'aldotriose possède deux stéréoisomères.",
        "correct": true,
        "explanation": "Un C* → 2 possibilités."
      },
      {
        "content": "Le cétotriose ne possède aucun C*.",
        "correct": true,
        "explanation": "La dihydroxyacétone est achirale."
      },
      {
        "content": "Le cétotriose n'a qu'une configuration stéréochimique dans ce modèle.",
        "correct": true,
        "explanation": "$2^{3-3}=1$."
      },
      {
        "content": "Les deux possèdent deux énantiomères.",
        "correct": false,
        "explanation": "La dihydroxyacétone n'est pas chirale."
      }
    ],
    "explanation": "Le triose met en évidence la différence entre aldose chiral et cétose achiral."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sur cette projection de Fischer simplifiée d'un D-aldohexose, cliquez sur le dernier carbone asymétrique utilisé pour déterminer la série D/L.",
    "image": {
      "src": "/images/training/ue14/biochimie/glucides-generalites-structure/fischer-dernier-carbone-asymetrique-qzone.svg",
      "alt": "Projection de Fischer originale simplifiée d'un aldohexose avec C1 à C6 alignés verticalement",
      "width": 700,
      "height": 900
    },
    "expectedZones": [
      {
        "id": "c5",
        "label": "C5, dernier carbone asymétrique",
        "x": 0.5,
        "y": 0.72,
        "tolerance": 0.075
      }
    ],
    "explanation": "Pour un aldohexose, C5 est le dernier carbone asymétrique, situé juste avant le carbone terminal C6. La position de son OH détermine la série D ou L."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une projection de Fischer d'un aldohexose montre le OH de C5 à droite. Quelles conclusions sont justifiées par la fiche ?",
    "choices": [
      {
        "content": "L'ose appartient à la série D.",
        "correct": true,
        "explanation": "C5 est le dernier C* de l'aldohexose."
      },
      {
        "content": "L'information se lit sur le dernier carbone asymétrique.",
        "correct": true,
        "explanation": "Règle générale."
      },
      {
        "content": "On ne peut pas en déduire à elle seule le signe + ou − du pouvoir rotatoire.",
        "correct": true,
        "explanation": "Indépendance rappelée plus loin."
      },
      {
        "content": "L'ose est nécessairement dextrogyre.",
        "correct": false,
        "explanation": "D ne signifie pas +."
      }
    ],
    "explanation": "La série D est structurale et ne préjuge pas du sens de rotation optique."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un carbone asymétrique porte quatre substituants différents.",
        "correct": true,
        "explanation": "Définition."
      },
      {
        "content": "Le glycéraldéhyde est chiral.",
        "correct": true,
        "explanation": "Exemple du support."
      },
      {
        "content": "La dihydroxyacétone est achirale.",
        "correct": true,
        "explanation": "Contre-exemple."
      },
      {
        "content": "OH à droite sur le dernier C* en Fischer correspond à D.",
        "correct": true,
        "explanation": "Critère."
      },
      {
        "content": "Un aldohexose possède 16 stéréoisomères dans la filiation de la fiche.",
        "correct": true,
        "explanation": "$2^4$."
      },
      {
        "content": "D signifie toujours pouvoir rotatoire positif.",
        "correct": false,
        "explanation": "Indépendance D/L et +/−."
      },
      {
        "content": "Le cétohexose possède 16 stéréoisomères.",
        "correct": false,
        "explanation": "8."
      },
      {
        "content": "La série se lit sur le premier carbone de la molécule.",
        "correct": false,
        "explanation": "Sur le dernier C*."
      },
      {
        "content": "La dihydroxyacétone possède un C*.",
        "correct": false,
        "explanation": "Aucun."
      },
      {
        "content": "Toutes les formes humaines sont D sans exception.",
        "correct": false,
        "explanation": "L-fucose et acide L-iduronique sont cités."
      }
    ],
    "explanation": "Cette sélection consolide chiralité, série D/L et filiation."
  }
];
