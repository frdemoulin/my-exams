import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 Biochimie — Glycérides et glycérophospholipides — Section A
 */

export const UE14_BIOCH_CH6_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la structure du glycérol :",
    "choices": [
      {
        "content": "Le glycérol comporte trois carbones.",
        "correct": true,
        "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
      },
      {
        "content": "Il possède trois fonctions alcool.",
        "correct": true,
        "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
      },
      {
        "content": "C1 et C3 portent des alcools primaires.",
        "correct": true,
        "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
      },
      {
        "content": "Le C2 porte un alcool primaire.",
        "correct": false,
        "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
      }
    ],
    "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Combien de carbones possède le glycérol ?",
    "choices": [
      {
        "content": "3",
        "correct": true,
        "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
      },
      {
        "content": "2",
        "correct": false,
        "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
      },
      {
        "content": "4",
        "correct": false,
        "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
      },
      {
        "content": "6",
        "correct": false,
        "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
      }
    ],
    "explanation": "Le glycérol est un trialcool à trois carbones ; C2 porte l'alcool secondaire."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la numérotation du glycérol :",
    "choices": [
      {
        "content": "C1 correspond à la position α.",
        "correct": true,
        "explanation": "Dans la nomenclature traditionnelle, les positions 1, 2 et 3 sont aussi notées α, β et α′."
      },
      {
        "content": "C2 correspond à la position β.",
        "correct": true,
        "explanation": "La position centrale C2 correspond à β."
      },
      {
        "content": "C3 peut être noté α′.",
        "correct": true,
        "explanation": "La seconde extrémité du glycérol peut être notée α′."
      },
      {
        "content": "La notation α, β, α′ rend C1 et C3 strictement équivalents pour toutes les enzymes.",
        "correct": false,
        "explanation": "Les extrémités du glycérol sont énantiotopiques et peuvent être distinguées par une enzyme."
      }
    ],
    "explanation": "La nomenclature stéréospécifique sn permet de distinguer les positions du squelette glycérol."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle lettre traditionnelle correspond à C2 ?",
    "choices": [
      {
        "content": "β",
        "correct": true,
        "explanation": "La position centrale C2 est traditionnellement notée β."
      },
      {
        "content": "α",
        "correct": false,
        "explanation": "α correspond à une position terminale, pas à C2."
      },
      {
        "content": "α′",
        "correct": false,
        "explanation": "α′ correspond à l'autre position terminale, pas à C2."
      },
      {
        "content": "γ",
        "correct": false,
        "explanation": "La notation traditionnelle de C2 est β."
      }
    ],
    "explanation": "C2 est la position β du glycérol."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la stéréospécificité du glycérol :",
    "choices": [
      {
        "content": "C1 et C3 sont énantiotopiques et peuvent être distingués par une enzyme.",
        "correct": true,
        "explanation": "La tridimensionnalité permet une reconnaissance enzymatique spécifique."
      },
      {
        "content": "De nombreuses enzymes distinguent les positions du glycérol.",
        "correct": true,
        "explanation": "La tridimensionnalité permet une reconnaissance enzymatique spécifique."
      },
      {
        "content": "La glycérol kinase forme du sn-glycérol-3-phosphate.",
        "correct": true,
        "explanation": "La tridimensionnalité permet une reconnaissance enzymatique spécifique."
      },
      {
        "content": "La glycérol kinase phosphoryle indifféremment C1 ou C3.",
        "correct": false,
        "explanation": "La tridimensionnalité permet une reconnaissance enzymatique spécifique."
      }
    ],
    "explanation": "La tridimensionnalité permet une reconnaissance enzymatique spécifique."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle position est phosphorylée dans le sn-glycérol-3-phosphate formé par la glycérol kinase ?",
    "choices": [
      {
        "content": "C3",
        "correct": true,
        "explanation": "La glycérol kinase forme le sn-glycérol-3-phosphate."
      },
      {
        "content": "C1",
        "correct": false,
        "explanation": "La tridimensionnalité permet une reconnaissance enzymatique spécifique."
      },
      {
        "content": "C2",
        "correct": false,
        "explanation": "La tridimensionnalité permet une reconnaissance enzymatique spécifique."
      },
      {
        "content": "les trois positions",
        "correct": false,
        "explanation": "La tridimensionnalité permet une reconnaissance enzymatique spécifique."
      }
    ],
    "explanation": "La tridimensionnalité permet une reconnaissance enzymatique spécifique."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des monoacylglycérols :",
    "choices": [
      {
        "content": "Ils portent un seul acide gras.",
        "correct": true,
        "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
      },
      {
        "content": "L'acide gras peut être fixé en C1.",
        "correct": true,
        "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
      },
      {
        "content": "L'acide gras peut être fixé en C2.",
        "correct": true,
        "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
      },
      {
        "content": "La liaison entre glycérol et acide gras est une liaison amide.",
        "correct": false,
        "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
      }
    ],
    "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Comment appelle-t-on la forme portant l'acyle en C2 ?",
    "choices": [
      {
        "content": "2-monoacylglycérol",
        "correct": true,
        "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
      },
      {
        "content": "1,3-diacylglycérol",
        "correct": false,
        "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
      },
      {
        "content": "triacylglycérol",
        "correct": false,
        "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
      },
      {
        "content": "phosphatidate",
        "correct": false,
        "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
      }
    ],
    "explanation": "Un monoacylglycérol est un monoester du glycérol ; la position C2 correspond à la forme β."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des diacylglycérols :",
    "choices": [
      {
        "content": "Ils portent deux acides gras.",
        "correct": true,
        "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
      },
      {
        "content": "Le 1,3-diacylglycérol est estérifié sur les deux alcools primaires.",
        "correct": true,
        "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
      },
      {
        "content": "Le 1,2-diacylglycérol implique un alcool primaire et l'alcool secondaire.",
        "correct": true,
        "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
      },
      {
        "content": "Le 1,3-diacylglycérol possède trois acides gras.",
        "correct": false,
        "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
      }
    ],
    "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel diacylglycérol est estérifié sur C1 et C3 ?",
    "choices": [
      {
        "content": "1,3-diacylglycérol",
        "correct": true,
        "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
      },
      {
        "content": "1,2-diacylglycérol",
        "correct": false,
        "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
      },
      {
        "content": "2-monoacylglycérol",
        "correct": false,
        "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
      },
      {
        "content": "triacylglycérol",
        "correct": false,
        "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
      }
    ],
    "explanation": "Les diacylglycérols se distinguent notamment par les positions 1,2 ou 1,3."
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des triacylglycérols :",
    "choices": [
      {
        "content": "Ils portent trois acides gras.",
        "correct": true,
        "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
      },
      {
        "content": "Les trois fonctions alcool du glycérol sont estérifiées.",
        "correct": true,
        "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
      },
      {
        "content": "Ils sont aussi appelés triglycérides.",
        "correct": true,
        "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
      },
      {
        "content": "Ils dérivent de la sphingosine.",
        "correct": false,
        "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
      }
    ],
    "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
  },
  {
    "order": 12,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Combien d'acides gras porte un triacylglycérol ?",
    "choices": [
      {
        "content": "3",
        "correct": true,
        "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
      },
      {
        "content": "1",
        "correct": false,
        "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
      },
      {
        "content": "2",
        "correct": false,
        "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
      },
      {
        "content": "4",
        "correct": false,
        "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
      }
    ],
    "explanation": "Le triacylglycérol correspond à l'estérification complète du glycérol."
  },
  {
    "order": 13,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des triglycérides homogènes et mixtes :",
    "choices": [
      {
        "content": "Un triglycéride homogène porte trois acides gras identiques.",
        "correct": true,
        "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
      },
      {
        "content": "Un triglycéride mixte porte au moins deux chaînes acyles différentes.",
        "correct": true,
        "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
      },
      {
        "content": "La nature des chaînes acyles influence les propriétés physiques.",
        "correct": true,
        "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
      },
      {
        "content": "Un triglycéride mixte ne contient qu'un seul acide gras.",
        "correct": false,
        "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
      }
    ],
    "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
  },
  {
    "order": 14,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Comment appelle-t-on un triglycéride dont R1=R2=R3 ?",
    "choices": [
      {
        "content": "triglycéride homogène",
        "correct": true,
        "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
      },
      {
        "content": "triglycéride mixte",
        "correct": false,
        "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
      },
      {
        "content": "lysophospholipide",
        "correct": false,
        "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
      },
      {
        "content": "céramide",
        "correct": false,
        "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
      }
    ],
    "explanation": "Homogène et mixte décrivent l'identité ou non des trois chaînes acyles."
  },
  {
    "order": 15,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du 1,3-distéaryl-2-oléyl-glycérol :",
    "choices": [
      {
        "content": "Il porte deux stéaryls en C1 et C3.",
        "correct": true,
        "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
      },
      {
        "content": "Il porte un oléyl en C2.",
        "correct": true,
        "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
      },
      {
        "content": "C'est un triglycéride mixte.",
        "correct": true,
        "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
      },
      {
        "content": "Il ne contient aucun résidu saturé.",
        "correct": false,
        "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
      }
    ],
    "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
  },
  {
    "order": 16,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle chaîne est portée en C2 dans cet exemple ?",
    "choices": [
      {
        "content": "oléyl",
        "correct": true,
        "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
      },
      {
        "content": "stéaryl",
        "correct": false,
        "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
      },
      {
        "content": "palmitoyl",
        "correct": false,
        "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
      },
      {
        "content": "arachidonyl",
        "correct": false,
        "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
      }
    ],
    "explanation": "L'exemple associe deux chaînes stéaryles saturées et une chaîne oléyle mono-insaturée."
  },
  {
    "order": 17,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'estérification du glycérol :",
    "choices": [
      {
        "content": "Les fonctions alcool du glycérol peuvent être estérifiées par des acides gras.",
        "correct": true,
        "explanation": "Les acylglycérols sont des esters d'acides gras et de glycérol."
      },
      {
        "content": "La liaison formée est une liaison ester.",
        "correct": true,
        "explanation": "Les acylglycérols sont des esters d'acides gras et de glycérol."
      },
      {
        "content": "Le nombre de fonctions estérifiées détermine mono-, di- ou triacylglycérol.",
        "correct": true,
        "explanation": "Les acylglycérols sont des esters d'acides gras et de glycérol."
      },
      {
        "content": "L'estérification remplace nécessairement les trois carbones du glycérol par du phosphate.",
        "correct": false,
        "explanation": "Les acylglycérols sont des esters d'acides gras et de glycérol."
      }
    ],
    "explanation": "Les acylglycérols sont des esters d'acides gras et de glycérol."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel autre nom donne-t-on aux glycérides ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acylglycérols",
        "acylglycerols"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true,
        "ignoreAccents": true
      }
    },
    "explanation": "Glycérides et acylglycérols sont synonymes."
  },
  {
    "order": 19,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des fonctions alcool du glycérol :",
    "choices": [
      {
        "content": "C1 porte un alcool primaire.",
        "correct": true,
        "explanation": "Le carbone central C2 porte l'alcool secondaire."
      },
      {
        "content": "C2 porte un alcool secondaire.",
        "correct": true,
        "explanation": "Le carbone central C2 porte l'alcool secondaire."
      },
      {
        "content": "C3 porte un alcool primaire.",
        "correct": true,
        "explanation": "Le carbone central C2 porte l'alcool secondaire."
      },
      {
        "content": "Le glycérol ne possède qu'une seule fonction alcool.",
        "correct": false,
        "explanation": "Le carbone central C2 porte l'alcool secondaire."
      }
    ],
    "explanation": "Le carbone central C2 porte l'alcool secondaire."
  },
  {
    "order": 20,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel carbone porte l'alcool secondaire ?",
    "choices": [
      {
        "content": "C2",
        "correct": true,
        "explanation": "Le carbone central C2 porte l'alcool secondaire."
      },
      {
        "content": "C1",
        "correct": false,
        "explanation": "Le carbone central C2 porte l'alcool secondaire."
      },
      {
        "content": "C3",
        "correct": false,
        "explanation": "Le carbone central C2 porte l'alcool secondaire."
      },
      {
        "content": "aucun",
        "correct": false,
        "explanation": "Le carbone central C2 porte l'alcool secondaire."
      }
    ],
    "explanation": "Le carbone central C2 porte l'alcool secondaire."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux positions du glycérol portant un alcool primaire.",
    "choices": [
      {
        "content": "C1",
        "correct": true,
        "explanation": "C1 est primaire."
      },
      {
        "content": "C3",
        "correct": true,
        "explanation": "C3 est primaire."
      },
      {
        "content": "C2",
        "correct": false,
        "explanation": "C2 est secondaire."
      },
      {
        "content": "C4",
        "correct": false,
        "explanation": "Le glycérol n'a pas de C4."
      }
    ],
    "explanation": "Les alcools primaires sont en C1 et C3."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le glycérol possède 3 carbones.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "C2 porte l'alcool secondaire.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Un monoacylglycérol porte un acide gras.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Un diacylglycérol porte deux acides gras.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "Un triacylglycérol porte trois acides gras.",
        "correct": true,
        "explanation": "Repère."
      },
      {
        "content": "C1 et C3 sont toujours indiscernables pour les enzymes.",
        "correct": false,
        "explanation": "Une enzyme peut distinguer les deux positions énantiotopiques."
      },
      {
        "content": "La liaison acyle-glycérol est une amide.",
        "correct": false,
        "explanation": "C'est un ester."
      },
      {
        "content": "Un triglycéride homogène porte trois chaînes différentes.",
        "correct": false,
        "explanation": "Identiques."
      },
      {
        "content": "Le glycérol possède 6 carbones.",
        "correct": false,
        "explanation": "3."
      },
      {
        "content": "La glycérol kinase produit du glycérol-2-phosphate.",
        "correct": false,
        "explanation": "Elle produit du sn-glycérol-3-phosphate."
      }
    ],
    "explanation": "Cette synthèse structurelle clôt la section."
  }
];
