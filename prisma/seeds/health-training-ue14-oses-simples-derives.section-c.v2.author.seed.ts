import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie – Chapitre 1.2 – Section C – Osamines et acides sialiques */
export const UE14_BIOCH_CH2_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les osamines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une osamine est nécessairement un acide uronique.",
        "correct": false,
        "explanation": "Ce sont deux modifications différentes."
      },
      {
        "content": "La substitution amino porte obligatoirement sur C6.",
        "correct": false,
        "explanation": "Elle est classiquement en C2."
      },
      {
        "content": "Les osamines entrent dans de nombreux glycoconjugués.",
        "correct": true,
        "explanation": "GAG, glycoprotéines et glycolipides peuvent en contenir."
      },
      {
        "content": "Une osamine est un ose totalement dépourvu d'azote.",
        "correct": false,
        "explanation": "Elle contient précisément de l'azote."
      },
      {
        "content": "Une osamine conserve plusieurs fonctions hydroxyle.",
        "correct": true,
        "explanation": "La substitution ne supprime pas tous les OH."
      }
    ],
    "explanation": "Les osamines sont souvent des 2-amino-2-désoxyoses."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos des osamines N-acétylées, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Une N-acétylation retire tout l'azote de l'ose.",
        "correct": false,
        "explanation": "L'azote est conservé."
      },
      {
        "content": "N-acétylé signifie que l'acétyle est fixé uniquement sur un oxygène.",
        "correct": false,
        "explanation": "Le préfixe N indique une fixation sur l'azote."
      },
      {
        "content": "GalNAc est identique au galactose non aminé.",
        "correct": false,
        "explanation": "Il porte une fonction N-acétylée en C2."
      },
      {
        "content": "La N-acétylation conserve l'azote dans la molécule.",
        "correct": true,
        "explanation": "Il devient l'azote d'une amide."
      },
      {
        "content": "GlcNAc est un acide gras.",
        "correct": false,
        "explanation": "C'est un dérivé aminé du glucose."
      }
    ],
    "explanation": "GlcNAc et GalNAc sont des osamines N-acétylées très fréquentes dans les glycoconjugués."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel monomère dérivé constitue la chitine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "N-acétylglucosamine",
        "GlcNAc",
        "N acetylglucosamine",
        "N-acetylglucosamine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La chitine est un polymère structural de GlcNAc en bêta(1→4)."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le peptidoglycane bactérien, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Des chaînes peptidiques réticulent les motifs glucidiques.",
        "correct": true,
        "explanation": "Elles renforcent la paroi bactérienne."
      },
      {
        "content": "Le peptidoglycane est exclusivement constitué de cellulose.",
        "correct": false,
        "explanation": "Il contient GlcNAc et MurNAc."
      },
      {
        "content": "Le peptidoglycane contient de la N-acétylglucosamine.",
        "correct": true,
        "explanation": "GlcNAc est une unité glucidique du réseau."
      },
      {
        "content": "Il est un constituant normal majeur de la membrane nucléaire humaine.",
        "correct": false,
        "explanation": "Il appartient à la paroi bactérienne."
      },
      {
        "content": "Les unités glucidiques sont reliées par des liaisons bêta(1→4).",
        "correct": true,
        "explanation": "Le lysozyme cible cette chaîne."
      }
    ],
    "explanation": "La paroi bactérienne contient une chaîne GlcNAc–MurNAc réticulée par des peptides."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "À propos de l'acide sialique Neu5Ac, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Neu5Ac est un acide aminé protéinogène.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      },
      {
        "content": "Il est souvent situé à l'extrémité de chaînes glycaniques.",
        "correct": true,
        "explanation": "Cette position influence reconnaissance et interactions."
      },
      {
        "content": "Il confère une charge positive forte aux glycoconjugués.",
        "correct": false,
        "explanation": "Son carboxylate est négatif."
      },
      {
        "content": "Il est uniquement présent dans le noyau cellulaire.",
        "correct": false,
        "explanation": "Il est notamment abondant à la surface cellulaire."
      },
      {
        "content": "Il est dépourvu de fonction acide.",
        "correct": false,
        "explanation": "Il possède un carboxyle."
      }
    ],
    "explanation": "Neu5Ac ou NANA est le principal acide sialique humain et contribue à la charge négative de nombreux glycoconjugués."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la biosynthèse du Neu5Ac, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "Le phosphoénolpyruvate n'intervient jamais.",
        "correct": false,
        "explanation": "Il participe à la condensation."
      },
      {
        "content": "Un intermédiaire Neu5Ac-9-phosphate est formé.",
        "correct": true,
        "explanation": "Il est ensuite déphosphorylé."
      },
      {
        "content": "Le produit final physiologique doit rester obligatoirement phosphorylé en C9.",
        "correct": false,
        "explanation": "Le phosphate est retiré."
      },
      {
        "content": "La voie produit du glycogène.",
        "correct": false,
        "explanation": "Elle produit un acide sialique."
      },
      {
        "content": "La déphosphorylation finale produit le Neu5Ac libre.",
        "correct": true,
        "explanation": "Une phosphatase retire le phosphate."
      }
    ],
    "explanation": "La biosynthèse du Neu5Ac passe par ManNAc-6-P, PEP, Neu5Ac-9-P puis déphosphorylation.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la charge des acides sialiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Des répulsions électrostatiques peuvent apparaître entre chaînes riches en acides sialiques.",
        "correct": true,
        "explanation": "Les charges de même signe se repoussent."
      },
      {
        "content": "Les acides sialiques ne participent jamais à la reconnaissance cellulaire.",
        "correct": false,
        "explanation": "Ils y jouent un rôle important."
      },
      {
        "content": "Le carboxylate du Neu5Ac est négatif à pH physiologique.",
        "correct": true,
        "explanation": "Son carboxyle est largement déprotoné."
      },
      {
        "content": "Les chaînes sialylées sont nécessairement électriquement neutres.",
        "correct": false,
        "explanation": "Elles portent souvent des charges négatives."
      },
      {
        "content": "La charge peut influencer les interactions avec des protéines de reconnaissance.",
        "correct": true,
        "explanation": "Des lectines et récepteurs reconnaissent des motifs sialylés."
      }
    ],
    "explanation": "Le carboxylate du Neu5Ac explique une part importante de la charge négative des surfaces sialylées."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Citez un dérivé d'ose aminé fréquent dans les glycoconjugués.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "N-acétylglucosamine",
        "GlcNAc",
        "N-acétylgalactosamine",
        "GalNAc",
        "glucosamine",
        "galactosamine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les osamines et leurs dérivés N-acétylés sont des briques majeures des glycoconjugués."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur les osamines, laquelle est exacte ?",
    "choices": [
      {
        "content": "La substitution amino porte obligatoirement sur C6.",
        "correct": false,
        "explanation": "Elle est classiquement en C2."
      },
      {
        "content": "Une osamine conserve plusieurs fonctions hydroxyle.",
        "correct": true,
        "explanation": "La substitution ne supprime pas tous les OH."
      },
      {
        "content": "Une osamine est nécessairement un acide uronique.",
        "correct": false,
        "explanation": "Ce sont deux modifications différentes."
      },
      {
        "content": "Une osamine ne peut jamais être cyclique.",
        "correct": false,
        "explanation": "Elle peut conserver des formes anomériques."
      },
      {
        "content": "Une osamine est un ose totalement dépourvu d'azote.",
        "correct": false,
        "explanation": "Elle contient précisément de l'azote."
      }
    ],
    "explanation": "Les osamines sont souvent des 2-amino-2-désoxyoses."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les osamines N-acétylées, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une osamine est un ose totalement dépourvu d'azote.",
        "correct": false,
        "explanation": "Elle contient précisément de l'azote."
      },
      {
        "content": "La substitution amino porte obligatoirement sur C6.",
        "correct": false,
        "explanation": "Elle est classiquement en C2."
      },
      {
        "content": "Une osamine ne peut jamais être cyclique.",
        "correct": false,
        "explanation": "Elle peut conserver des formes anomériques."
      },
      {
        "content": "Dans les osamines biologiques classiques, la substitution concerne souvent C2.",
        "correct": true,
        "explanation": "Glucosamine et galactosamine sont des 2-amino-2-désoxyoses."
      },
      {
        "content": "Les osamines entrent dans de nombreux glycoconjugués.",
        "correct": true,
        "explanation": "GAG, glycoprotéines et glycolipides peuvent en contenir."
      }
    ],
    "explanation": "Les osamines sont souvent des 2-amino-2-désoxyoses."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les osamines, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Dans les osamines biologiques classiques, la substitution concerne souvent C2.",
        "correct": true,
        "explanation": "Glucosamine et galactosamine sont des 2-amino-2-désoxyoses."
      },
      {
        "content": "Une osamine est un dérivé d'ose portant une fonction amine.",
        "correct": true,
        "explanation": "Un OH est remplacé par un groupe amino."
      },
      {
        "content": "Les osamines entrent dans de nombreux glycoconjugués.",
        "correct": true,
        "explanation": "GAG, glycoprotéines et glycolipides peuvent en contenir."
      },
      {
        "content": "Une osamine ne peut jamais être cyclique.",
        "correct": false,
        "explanation": "Elle peut conserver des formes anomériques."
      },
      {
        "content": "Une osamine conserve plusieurs fonctions hydroxyle.",
        "correct": true,
        "explanation": "La substitution ne supprime pas tous les OH."
      }
    ],
    "explanation": "Les osamines sont souvent des 2-amino-2-désoxyoses."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Que signifie l'abréviation GlcNAc ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "N-acétylglucosamine",
        "N acetylglucosamine",
        "N-acetylglucosamine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "GlcNAc et GalNAc sont des osamines N-acétylées très fréquentes dans les glycoconjugués."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les propositions suivantes sur la chitine, laquelle est exacte ?",
    "choices": [
      {
        "content": "La chitine est un polymère de fructose.",
        "correct": false,
        "explanation": "Elle est formée de GlcNAc."
      },
      {
        "content": "La chitine est une protéine.",
        "correct": false,
        "explanation": "C'est un glucide polymérique."
      },
      {
        "content": "Les unités sont reliées principalement par des liaisons bêta(1→4).",
        "correct": true,
        "explanation": "Cette architecture rappelle celle de la cellulose."
      },
      {
        "content": "La chitine constitue la réserve de glycogène du foie.",
        "correct": false,
        "explanation": "C'est un polymère structural."
      },
      {
        "content": "Ses unités sont reliées par des liaisons alpha(1→6) uniquement.",
        "correct": false,
        "explanation": "La liaison principale est bêta(1→4)."
      }
    ],
    "explanation": "La chitine est un polymère structural de GlcNAc en bêta(1→4)."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le peptidoglycane bactérien, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le peptidoglycane contient de la N-acétylglucosamine.",
        "correct": true,
        "explanation": "GlcNAc est une unité glucidique du réseau."
      },
      {
        "content": "Les unités glucidiques sont reliées par des liaisons bêta(1→4).",
        "correct": true,
        "explanation": "Le lysozyme cible cette chaîne."
      },
      {
        "content": "Il ne contient aucun dérivé aminé d'ose.",
        "correct": false,
        "explanation": "Il en contient plusieurs."
      },
      {
        "content": "Des chaînes peptidiques réticulent les motifs glucidiques.",
        "correct": true,
        "explanation": "Elles renforcent la paroi bactérienne."
      },
      {
        "content": "Il contient aussi de l'acide N-acétylmuramique.",
        "correct": true,
        "explanation": "MurNAc alterne avec GlcNAc."
      }
    ],
    "explanation": "La paroi bactérienne contient une chaîne GlcNAc–MurNAc réticulée par des peptides."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "À propos de l'acide sialique Neu5Ac, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "Neu5Ac est un acide aminé protéinogène.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      },
      {
        "content": "Il possède une fonction carboxylique largement ionisée à pH physiologique.",
        "correct": true,
        "explanation": "Elle contribue à une charge négative de surface."
      },
      {
        "content": "Il est uniquement présent dans le noyau cellulaire.",
        "correct": false,
        "explanation": "Il est notamment abondant à la surface cellulaire."
      },
      {
        "content": "Il confère une charge positive forte aux glycoconjugués.",
        "correct": false,
        "explanation": "Son carboxylate est négatif."
      },
      {
        "content": "Il est souvent situé à l'extrémité de chaînes glycaniques.",
        "correct": true,
        "explanation": "Cette position influence reconnaissance et interactions."
      }
    ],
    "explanation": "Neu5Ac ou NANA est le principal acide sialique humain et contribue à la charge négative de nombreux glycoconjugués.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la biosynthèse du Neu5Ac, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Un intermédiaire Neu5Ac-9-phosphate est formé.",
        "correct": true,
        "explanation": "Il est ensuite déphosphorylé."
      },
      {
        "content": "La déphosphorylation finale produit le Neu5Ac libre.",
        "correct": true,
        "explanation": "Une phosphatase retire le phosphate."
      },
      {
        "content": "Le produit final physiologique doit rester obligatoirement phosphorylé en C9.",
        "correct": false,
        "explanation": "Le phosphate est retiré."
      },
      {
        "content": "Le phosphoénolpyruvate contribue au squelette carboné lors de la condensation.",
        "correct": true,
        "explanation": "Il fournit une partie du squelette du Neu5Ac."
      },
      {
        "content": "La voie produit du glycogène.",
        "correct": false,
        "explanation": "Elle produit un acide sialique."
      }
    ],
    "explanation": "La biosynthèse du Neu5Ac passe par ManNAc-6-P, PEP, Neu5Ac-9-P puis déphosphorylation."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel groupement du Neu5Ac porte principalement la charge négative à pH physiologique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "carboxylate",
        "COO-",
        "fonction carboxylate",
        "groupement carboxylate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le carboxylate du Neu5Ac explique une part importante de la charge négative des surfaces sialylées."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "À propos des glycoconjugués contenant des osamines, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Les GAG sont uniquement constitués d'acides aminés.",
        "correct": false,
        "explanation": "Ce sont des polysaccharides."
      },
      {
        "content": "Les osamines sont absentes de toutes les molécules humaines.",
        "correct": false,
        "explanation": "Elles sont très répandues."
      },
      {
        "content": "Les glycolipides sont obligatoirement dépourvus de glucides.",
        "correct": false,
        "explanation": "Leur nom indique précisément une portion glucidique."
      },
      {
        "content": "Une glycoprotéine ne peut contenir aucun sucre aminé.",
        "correct": false,
        "explanation": "Elle peut en contenir plusieurs."
      },
      {
        "content": "Certains glycolipides portent des oses aminés ou sialylés.",
        "correct": true,
        "explanation": "Les glycosphingolipides en sont des exemples."
      }
    ],
    "explanation": "Les osamines et leurs dérivés N-acétylés sont des briques majeures des glycoconjugués."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le principal acide sialique humain, souvent abrégé Neu5Ac ou NANA ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide N-acétylneuraminique",
        "Neu5Ac",
        "NANA",
        "acide sialique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Neu5Ac, ou acide N-acétylneuraminique, est le principal acide sialique humain."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Il possède une fonction carboxylique largement ionisée à pH physiologique.",
        "correct": true,
        "explanation": "Elle contribue à une charge négative de surface."
      },
      {
        "content": "Il est souvent situé à l'extrémité de chaînes glycaniques.",
        "correct": true,
        "explanation": "Cette position influence reconnaissance et interactions."
      },
      {
        "content": "Une N-acétylation retire tout l'azote de l'ose.",
        "correct": false,
        "explanation": "L'azote est conservé."
      },
      {
        "content": "Il est dépourvu de fonction acide.",
        "correct": false,
        "explanation": "Il possède un carboxyle."
      },
      {
        "content": "Il confère une charge positive forte aux glycoconjugués.",
        "correct": false,
        "explanation": "Son carboxylate est négatif."
      },
      {
        "content": "Il est présent dans des glycoprotéines et glycolipides.",
        "correct": true,
        "explanation": "Il contribue au glycocalyx."
      },
      {
        "content": "GlcNAc est un acide gras.",
        "correct": false,
        "explanation": "C'est un dérivé aminé du glucose."
      },
      {
        "content": "La N-acétylgalactosamine est souvent abrégée GalNAc.",
        "correct": true,
        "explanation": "Elle intervient notamment dans certains GAG et O-glycanes."
      },
      {
        "content": "Une N-acétylation transforme une amine en fonction amide N-acétylée.",
        "correct": true,
        "explanation": "Le groupe acétyl est fixé sur l'azote."
      },
      {
        "content": "Il est uniquement présent dans le noyau cellulaire.",
        "correct": false,
        "explanation": "Il est notamment abondant à la surface cellulaire."
      }
    ],
    "explanation": "GlcNAc et GalNAc sont des osamines N-acétylées très fréquentes dans les glycoconjugués. Neu5Ac ou NANA est le principal acide sialique humain et contribue à la charge négative de nombreux glycoconjugués."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la chitine, quelles propositions sont correctes ?",
    "choices": [
      {
        "content": "Les unités sont reliées principalement par des liaisons bêta(1→4).",
        "correct": true,
        "explanation": "Cette architecture rappelle celle de la cellulose."
      },
      {
        "content": "La chitine est présente dans l'exosquelette des arthropodes.",
        "correct": true,
        "explanation": "Crustacés et insectes en contiennent."
      },
      {
        "content": "La chitine est une protéine.",
        "correct": false,
        "explanation": "C'est un glucide polymérique."
      },
      {
        "content": "La chitine est un polysaccharide structural.",
        "correct": true,
        "explanation": "Elle n'est pas une réserve énergétique humaine."
      },
      {
        "content": "Ses unités sont reliées par des liaisons alpha(1→6) uniquement.",
        "correct": false,
        "explanation": "La liaison principale est bêta(1→4)."
      }
    ],
    "explanation": "La chitine est un polymère structural de GlcNAc en bêta(1→4)."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Citez l'un des deux dérivés glucidiques alternants du peptidoglycane bactérien.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "N-acétylglucosamine",
        "GlcNAc",
        "acide N-acétylmuramique",
        "MurNAc",
        "N-acetylglucosamine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La paroi bactérienne contient une chaîne GlcNAc–MurNAc réticulée par des peptides."
  },
  {
    "order": 67,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Cliquez sur le carbone qui porte classiquement la fonction amine dans la glucosamine.",
    "image": {
      "src": "/images/training/ue14/biochimie/glucides/ch2-glucosamine-c2-qzone.svg",
      "alt": "Chaîne glucidique simplifiée numérotée C1 à C6 avec NH2 sur C2",
      "width": 1200,
      "height": 600
    },
    "expectedZones": [
      {
        "id": "zone-67",
        "label": "Carbone C2",
        "x": 0.292,
        "y": 0.5,
        "tolerance": 0.075
      }
    ],
    "explanation": "La glucosamine est un 2-amino-2-désoxyglucose : la substitution NH2 caractéristique est portée par C2."
  },
  {
    "order": 68,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Que signifie l'abréviation GlcNAc ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "N-acétylglucosamine",
        "N acetylglucosamine",
        "N-acetylglucosamine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "GlcNAc et GalNAc sont des osamines N-acétylées très fréquentes dans les glycoconjugués."
  },
  {
    "order": 69,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Parmi les propositions suivantes sur la chitine, retenez exactement les deux exactes.",
    "choices": [
      {
        "content": "La chitine est un polymère de fructose.",
        "correct": false,
        "explanation": "Elle est formée de GlcNAc."
      },
      {
        "content": "La chitine est une protéine.",
        "correct": false,
        "explanation": "C'est un glucide polymérique."
      },
      {
        "content": "La chitine constitue la réserve de glycogène du foie.",
        "correct": false,
        "explanation": "C'est un polymère structural."
      },
      {
        "content": "La chitine est un polymère de N-acétylglucosamine.",
        "correct": true,
        "explanation": "Ses unités sont répétées."
      },
      {
        "content": "La chitine est un polysaccharide structural.",
        "correct": true,
        "explanation": "Elle n'est pas une réserve énergétique humaine."
      }
    ],
    "explanation": "La chitine est un polymère structural de GlcNAc en bêta(1→4).",
    "requiredSelectionCount": 2
  },
  {
    "order": 70,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le peptidoglycane bactérien, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il contient aussi de l'acide N-acétylmuramique.",
        "correct": true,
        "explanation": "MurNAc alterne avec GlcNAc."
      },
      {
        "content": "Le peptidoglycane contient de la N-acétylglucosamine.",
        "correct": true,
        "explanation": "GlcNAc est une unité glucidique du réseau."
      },
      {
        "content": "Des chaînes peptidiques réticulent les motifs glucidiques.",
        "correct": true,
        "explanation": "Elles renforcent la paroi bactérienne."
      },
      {
        "content": "Il ne contient aucun dérivé aminé d'ose.",
        "correct": false,
        "explanation": "Il en contient plusieurs."
      },
      {
        "content": "Le peptidoglycane est exclusivement constitué de cellulose.",
        "correct": false,
        "explanation": "Il contient GlcNAc et MurNAc."
      }
    ],
    "explanation": "La paroi bactérienne contient une chaîne GlcNAc–MurNAc réticulée par des peptides."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "À propos de l'acide sialique Neu5Ac, quelle proposition est exacte ?",
    "choices": [
      {
        "content": "Il est uniquement présent dans le noyau cellulaire.",
        "correct": false,
        "explanation": "Il est notamment abondant à la surface cellulaire."
      },
      {
        "content": "Il confère une charge positive forte aux glycoconjugués.",
        "correct": false,
        "explanation": "Son carboxylate est négatif."
      },
      {
        "content": "Il est dépourvu de fonction acide.",
        "correct": false,
        "explanation": "Il possède un carboxyle."
      },
      {
        "content": "Il possède une fonction carboxylique largement ionisée à pH physiologique.",
        "correct": true,
        "explanation": "Elle contribue à une charge négative de surface."
      },
      {
        "content": "Neu5Ac est un acide aminé protéinogène.",
        "correct": false,
        "explanation": "C'est un dérivé glucidique."
      }
    ],
    "explanation": "Neu5Ac ou NANA est le principal acide sialique humain et contribue à la charge négative de nombreux glycoconjugués."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur la biosynthèse du Neu5Ac, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "La déphosphorylation finale produit le Neu5Ac libre.",
        "correct": true,
        "explanation": "Une phosphatase retire le phosphate."
      },
      {
        "content": "Neu5Ac est synthétisé directement à partir d'un acide gras sans précurseur glucidique.",
        "correct": false,
        "explanation": "La voie part d'un dérivé du mannose."
      },
      {
        "content": "Le phosphoénolpyruvate contribue au squelette carboné lors de la condensation.",
        "correct": true,
        "explanation": "Il fournit une partie du squelette du Neu5Ac."
      },
      {
        "content": "Un intermédiaire Neu5Ac-9-phosphate est formé.",
        "correct": true,
        "explanation": "Il est ensuite déphosphorylé."
      },
      {
        "content": "La voie humaine passe par la N-acétylmannosamine-6-phosphate.",
        "correct": true,
        "explanation": "ManNAc-6-P est un précurseur."
      }
    ],
    "explanation": "La biosynthèse du Neu5Ac passe par ManNAc-6-P, PEP, Neu5Ac-9-P puis déphosphorylation."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel groupement du Neu5Ac porte principalement la charge négative à pH physiologique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "carboxylate",
        "COO-",
        "fonction carboxylate",
        "groupement carboxylate"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le carboxylate du Neu5Ac explique une part importante de la charge négative des surfaces sialylées."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Les glycolipides sont obligatoirement dépourvus de glucides.",
        "correct": false,
        "explanation": "Leur nom indique précisément une portion glucidique."
      },
      {
        "content": "La chitine est un polysaccharide structural.",
        "correct": true,
        "explanation": "Elle n'est pas une réserve énergétique humaine."
      },
      {
        "content": "Les unités sont reliées principalement par des liaisons bêta(1→4).",
        "correct": true,
        "explanation": "Cette architecture rappelle celle de la cellulose."
      },
      {
        "content": "La chitine est une protéine.",
        "correct": false,
        "explanation": "C'est un glucide polymérique."
      },
      {
        "content": "Les osamines sont absentes de toutes les molécules humaines.",
        "correct": false,
        "explanation": "Elles sont très répandues."
      },
      {
        "content": "Les glycosaminoglycanes contiennent souvent une osamine.",
        "correct": true,
        "explanation": "GlcNAc ou GalNAc est répétée avec un autre dérivé glucidique."
      },
      {
        "content": "La chitine est un polymère de N-acétylglucosamine.",
        "correct": true,
        "explanation": "Ses unités sont répétées."
      },
      {
        "content": "La chitine est présente dans l'exosquelette des arthropodes.",
        "correct": true,
        "explanation": "Crustacés et insectes en contiennent."
      },
      {
        "content": "Les GAG sont uniquement constitués d'acides aminés.",
        "correct": false,
        "explanation": "Ce sont des polysaccharides."
      },
      {
        "content": "Une glycoprotéine ne peut contenir aucun sucre aminé.",
        "correct": false,
        "explanation": "Elle peut en contenir plusieurs."
      }
    ],
    "explanation": "Les osamines et leurs dérivés N-acétylés sont des briques majeures des glycoconjugués. La chitine est un polymère structural de GlcNAc en bêta(1→4)."
  },
  {
    "order": 75,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur les osamines, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Une osamine est nécessairement un acide uronique.",
        "correct": false,
        "explanation": "Ce sont deux modifications différentes."
      },
      {
        "content": "Dans les osamines biologiques classiques, la substitution concerne souvent C2.",
        "correct": true,
        "explanation": "Glucosamine et galactosamine sont des 2-amino-2-désoxyoses."
      },
      {
        "content": "La substitution amino porte obligatoirement sur C6.",
        "correct": false,
        "explanation": "Elle est classiquement en C2."
      },
      {
        "content": "Les osamines entrent dans de nombreux glycoconjugués.",
        "correct": true,
        "explanation": "GAG, glycoprotéines et glycolipides peuvent en contenir."
      },
      {
        "content": "Une osamine est un ose totalement dépourvu d'azote.",
        "correct": false,
        "explanation": "Elle contient précisément de l'azote."
      }
    ],
    "explanation": "Les osamines sont souvent des 2-amino-2-désoxyoses."
  },
  {
    "order": 76,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle abréviation désigne classiquement la N-acétylgalactosamine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GalNAc",
        "galnac"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "GalNAc est l'abréviation usuelle de la N-acétylgalactosamine."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "À propos de la chitine, sélectionnez exactement les deux affirmations correctes.",
    "choices": [
      {
        "content": "La chitine est un polymère de fructose.",
        "correct": false,
        "explanation": "Elle est formée de GlcNAc."
      },
      {
        "content": "La chitine est une protéine.",
        "correct": false,
        "explanation": "C'est un glucide polymérique."
      },
      {
        "content": "Ses unités sont reliées par des liaisons alpha(1→6) uniquement.",
        "correct": false,
        "explanation": "La liaison principale est bêta(1→4)."
      },
      {
        "content": "La chitine est un polysaccharide structural.",
        "correct": true,
        "explanation": "Elle n'est pas une réserve énergétique humaine."
      },
      {
        "content": "La chitine est présente dans l'exosquelette des arthropodes.",
        "correct": true,
        "explanation": "Crustacés et insectes en contiennent."
      }
    ],
    "explanation": "La chitine est un polymère structural de GlcNAc en bêta(1→4).",
    "requiredSelectionCount": 2
  },
  {
    "order": 78,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes sur le peptidoglycane bactérien, lesquelles sont exactes ?",
    "choices": [
      {
        "content": "Les unités glucidiques sont reliées par des liaisons bêta(1→4).",
        "correct": true,
        "explanation": "Le lysozyme cible cette chaîne."
      },
      {
        "content": "Le peptidoglycane contient de la N-acétylglucosamine.",
        "correct": true,
        "explanation": "GlcNAc est une unité glucidique du réseau."
      },
      {
        "content": "Des chaînes peptidiques réticulent les motifs glucidiques.",
        "correct": true,
        "explanation": "Elles renforcent la paroi bactérienne."
      },
      {
        "content": "Il contient aussi de l'acide N-acétylmuramique.",
        "correct": true,
        "explanation": "MurNAc alterne avec GlcNAc."
      },
      {
        "content": "Il est un constituant normal majeur de la membrane nucléaire humaine.",
        "correct": false,
        "explanation": "Il appartient à la paroi bactérienne."
      }
    ],
    "explanation": "La paroi bactérienne contient une chaîne GlcNAc–MurNAc réticulée par des peptides."
  }
];
