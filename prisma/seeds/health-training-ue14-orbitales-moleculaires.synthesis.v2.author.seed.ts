import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.3 – Synthèse */
export const UE14_CH3_SYNTHESIS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "L'aspirine possède un noyau benzénique et deux carbones carbonylés. Combien de carbones sp2 contient-elle au total ?",
    "answer": {
      "type": "number",
      "value": 8,
      "tolerance": 0
    },
    "explanation": "Les six carbones aromatiques et les deux carbones carbonylés sont sp2 ; le carbone du groupe méthyle est sp3."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les hybridations locales dans l'aspirine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les six carbones du noyau benzénique sont sp2.",
        "correct": true,
        "explanation": "Ils participent au système aromatique."
      },
      {
        "content": "Le carbone du groupe méthyle acétyle est sp3.",
        "correct": true,
        "explanation": "Il ne forme que des liaisons simples."
      },
      {
        "content": "Le noyau benzénique contient six carbones sp.",
        "correct": false,
        "explanation": "Ils sont sp2."
      },
      {
        "content": "Tous les neuf carbones sont sp2.",
        "correct": false,
        "explanation": "Le méthyle est sp3."
      },
      {
        "content": "Les carbones des deux groupes carbonyle sont sp2.",
        "correct": true,
        "explanation": "Chaque carbonyle est localement trigonale plan."
      }
    ],
    "explanation": "Une molécule complexe se lit centre par centre : aromaticité, carbonyles et carbones saturés n'ont pas la même hybridation."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de composantes $\\pi$ comporte $\\ce{CO2}$ dans une représentation localisée des deux doubles liaisons C=O ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Chaque double liaison C=O apporte une composante pi."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On compare le carbone de $\\ce{CO2}$ et celui de $\\ce{HCO3-}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone de HCO3− est approximativement sp2.",
        "correct": true,
        "explanation": "Trois domaines sigma, géométrie trigonale plane."
      },
      {
        "content": "Le carbone de CO2 est sp.",
        "correct": true,
        "explanation": "Deux domaines sigma, géométrie linéaire."
      },
      {
        "content": "HCO3− est tétraédrique autour du carbone.",
        "correct": false,
        "explanation": "La géométrie locale est plane."
      },
      {
        "content": "Les deux carbones ont nécessairement la même hybridation.",
        "correct": false,
        "explanation": "Leur nombre de domaines sigma diffère."
      },
      {
        "content": "CO2 possède deux orbitales p non hybridées sur le carbone.",
        "correct": true,
        "explanation": "Elles forment deux pi."
      }
    ],
    "explanation": "Les formes du carbone peuvent changer avec son environnement chimique."
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant $\\ce{HCN}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La molécule est linéaire.",
        "correct": true,
        "explanation": "Les centres C/N de la triple liaison sont compatibles avec sp."
      },
      {
        "content": "La triple liaison C≡N contient deux composantes pi.",
        "correct": true,
        "explanation": "Sigma + deux pi."
      },
      {
        "content": "HCN ne possède aucune liaison sigma.",
        "correct": false,
        "explanation": "Il en possède deux."
      },
      {
        "content": "Le carbone est sp3.",
        "correct": false,
        "explanation": "Il conserverait alors aucune p pour les pi."
      },
      {
        "content": "Le carbone est sp.",
        "correct": true,
        "explanation": "Deux directions sigma."
      }
    ],
    "explanation": "HCN associe une géométrie linéaire, une triple liaison et un centre carboné sp."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant $\\ce{N2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La triple liaison contient trois sigma.",
        "correct": false,
        "explanation": "Une seule sigma."
      },
      {
        "content": "Aucune orbitale p n'intervient.",
        "correct": false,
        "explanation": "Les pi proviennent de p."
      },
      {
        "content": "La molécule est linéaire.",
        "correct": true,
        "explanation": "Deux atomes définissent nécessairement une ligne."
      },
      {
        "content": "La triple liaison contient une sigma et deux pi.",
        "correct": true,
        "explanation": "Décomposition classique."
      },
      {
        "content": "Deux orbitales p orthogonales peuvent fournir les deux composantes pi.",
        "correct": true,
        "explanation": "Elles se recouvrent latéralement."
      }
    ],
    "explanation": "N2 illustre une triple liaison compacte et fortement liée."
  },
  {
    "order": 67,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'aromaticité du benzène, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les orbitales p sont parallèles et forment un système conjugué.",
        "correct": true,
        "explanation": "Le recouvrement s'étend autour du cycle."
      },
      {
        "content": "Les électrons pi sont délocalisés sur l'anneau.",
        "correct": true,
        "explanation": "La structure réelle n'a pas trois doubles liaisons figées."
      },
      {
        "content": "Le benzène est constitué de six carbones sp3.",
        "correct": false,
        "explanation": "Cela supprimerait le système pi."
      },
      {
        "content": "Les six carbones sont sp2.",
        "correct": true,
        "explanation": "Chaque carbone conserve une p."
      },
      {
        "content": "L'aromaticité implique une rotation libre autour de chaque liaison C–C comme dans l'éthane.",
        "correct": false,
        "explanation": "La conjugaison impose la planéité et rigidifie le cycle."
      }
    ],
    "explanation": "Le benzène est un exemple majeur de délocalisation pi et de planéité aromatique."
  },
  {
    "order": 68,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant $\\ce{NH3}$, $\\ce{NH4+}$, $\\ce{H2O}$ et $\\ce{H3O+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Toutes ces espèces sont linéaires.",
        "correct": false,
        "explanation": "Aucune ne l'est."
      },
      {
        "content": "H2O est AX2E2.",
        "correct": true,
        "explanation": "Deux liaisons, deux doublets."
      },
      {
        "content": "NH4+ est AX4.",
        "correct": true,
        "explanation": "Quatre liaisons, aucun doublet."
      },
      {
        "content": "NH4+ possède un doublet non liant sur l'azote.",
        "correct": false,
        "explanation": "Le doublet de NH3 a servi à former la quatrième liaison."
      },
      {
        "content": "NH3 et H3O+ sont AX3E1.",
        "correct": true,
        "explanation": "Trois liaisons et un doublet."
      }
    ],
    "explanation": "La comparaison acide-base de ces espèces montre comment un doublet non liant peut devenir un doublet liant."
  },
  {
    "order": 69,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans une description VSEPR simplifiée du fer hexacoordonné d'un complexe octaédrique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "VSEPR suffit à décrire quantitativement toute la structure électronique d'un complexe métallique.",
        "correct": false,
        "explanation": "Pour les complexes de métaux de transition, la théorie du champ de ligands et les OM sont plus appropriées."
      },
      {
        "content": "Une coordinence 6 impose une géométrie linéaire.",
        "correct": false,
        "explanation": "L'octaèdre est la géométrie classique."
      },
      {
        "content": "Une géométrie octaédrique est compatible avec six ligands.",
        "correct": true,
        "explanation": "Les directions idéales sont à 90°."
      },
      {
        "content": "Six directions de coordination entourent le centre.",
        "correct": true,
        "explanation": "C'est la coordinence 6."
      },
      {
        "content": "La notation géométrique simplifiée peut être rapprochée de AX6.",
        "correct": true,
        "explanation": "Elle décrit six directions autour du centre."
      }
    ],
    "explanation": "AX6 est une analogie géométrique utile ; elle ne remplace pas une description électronique spécifique des complexes métalliques."
  },
  {
    "order": 70,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Le carbone carbonylé de l'acétone est $\\mathrm{sp}^2$. Quelle géométrie locale attend-on autour de ce carbone ?",
    "choices": [
      {
        "content": "Octaédrique.",
        "correct": false,
        "explanation": "Six directions seraient nécessaires."
      },
      {
        "content": "Pyramidale.",
        "correct": false,
        "explanation": "Un carbone carbonylé ne porte pas de doublet non liant dans ce modèle."
      },
      {
        "content": "Linéaire.",
        "correct": false,
        "explanation": "Cela correspond à sp."
      },
      {
        "content": "Tétraédrique.",
        "correct": false,
        "explanation": "Cela correspond à sp3."
      },
      {
        "content": "Trigonale plane.",
        "correct": true,
        "explanation": "Trois domaines sigma sont disposés approximativement à 120°."
      }
    ],
    "explanation": "La planéité locale des carbonyles influence la géométrie et la réactivité des aldéhydes et cétones."
  }
];

export const UE14_CH3_SYNTHESIS_MASTER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les neuf carbones de l'aspirine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Six carbones aromatiques sont sp2.",
        "correct": true,
        "explanation": "Ils appartiennent au noyau benzénique."
      },
      {
        "content": "Aucun carbone n'est sp3.",
        "correct": false,
        "explanation": "Le méthyle est sp3."
      },
      {
        "content": "Les neuf carbones sont tous coplanaires par nécessité.",
        "correct": false,
        "explanation": "Les groupes substituants peuvent adopter des conformations hors du plan du cycle."
      },
      {
        "content": "Deux carbones carbonylés sont sp2.",
        "correct": true,
        "explanation": "Les fonctions ester et acide contiennent chacune un carbonyle."
      },
      {
        "content": "Un carbone méthyle est sp3.",
        "correct": true,
        "explanation": "Le groupe acétyle contient un CH3 saturé."
      }
    ],
    "explanation": "Le comptage local des hybridations donne 8 carbones sp2 et 1 carbone sp3."
  },
  {
    "order": 72,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le protoxyde d'azote $\\ce{N2O}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La molécule est tétraédrique autour de l'azote central.",
        "correct": false,
        "explanation": "Elle est linéaire."
      },
      {
        "content": "Le squelette N–N–O est approximativement linéaire.",
        "correct": true,
        "explanation": "La molécule est linéaire."
      },
      {
        "content": "Des formes mésomères contribuent à la description de la liaison.",
        "correct": true,
        "explanation": "La distribution électronique est délocalisée."
      },
      {
        "content": "L'atome central est compatible avec une organisation sp dans un modèle local.",
        "correct": true,
        "explanation": "Deux directions sigma autour du centre."
      },
      {
        "content": "La mésomérie implique une alternance temporelle entre molécules différentes.",
        "correct": false,
        "explanation": "Les formes limites ne sont pas des espèces qui s'interconvertissent."
      }
    ],
    "explanation": "N2O relie géométrie linéaire, hybridation locale et mésomérie."
  },
  {
    "order": 73,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On compare $\\ce{CO2}$ et $\\ce{HCO3-}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "HCO3− ne présente aucune délocalisation électronique.",
        "correct": false,
        "explanation": "Le groupe présente une mésomérie importante."
      },
      {
        "content": "Les deux espèces possèdent le même nombre de directions de liaison autour du carbone.",
        "correct": false,
        "explanation": "Deux pour CO2, trois pour HCO3−."
      },
      {
        "content": "CO2 possède deux composantes pi localisées dans la représentation O=C=O.",
        "correct": true,
        "explanation": "Une par double liaison."
      },
      {
        "content": "Le carbone de CO2 est sp et linéaire.",
        "correct": true,
        "explanation": "Deux domaines sigma."
      },
      {
        "content": "Le carbone de HCO3− est approximativement sp2 et trigonale plan.",
        "correct": true,
        "explanation": "Trois domaines sigma."
      }
    ],
    "explanation": "Le changement de nombre de domaines sigma explique le passage sp → sp2."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le méthanal $\\ce{H2C=O}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une orbitale p du carbone participe à la liaison pi C=O.",
        "correct": true,
        "explanation": "Elle est non hybridée."
      },
      {
        "content": "Le carbone carbonylé est sp2.",
        "correct": true,
        "explanation": "Trois directions sigma."
      },
      {
        "content": "La liaison C=O contient deux composantes sigma.",
        "correct": false,
        "explanation": "Elle contient sigma + pi."
      },
      {
        "content": "Le carbone est sp3.",
        "correct": false,
        "explanation": "Cela empêcherait la pi."
      },
      {
        "content": "La géométrie locale autour du carbone est trigonale plane.",
        "correct": true,
        "explanation": "Angles proches de 120°."
      }
    ],
    "explanation": "Le méthanal est un cas simple de centre carbonylé sp2."
  },
  {
    "order": 75,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de l'éthylène, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le squelette est approximativement plan.",
        "correct": true,
        "explanation": "Les centres sp2 sont plans."
      },
      {
        "content": "La rotation autour de C=C est limitée par la liaison pi.",
        "correct": true,
        "explanation": "Elle nécessiterait la perte du recouvrement latéral."
      },
      {
        "content": "La liaison C=C est une simple sigma.",
        "correct": false,
        "explanation": "Elle contient sigma + pi."
      },
      {
        "content": "Chaque carbone est sp2.",
        "correct": true,
        "explanation": "Trois directions sigma."
      },
      {
        "content": "Chaque carbone conserve deux orbitales p non hybridées.",
        "correct": false,
        "explanation": "Un carbone sp2 en conserve une."
      }
    ],
    "explanation": "La planéité et la rigidité de l'éthylène découlent de son système pi."
  },
  {
    "order": 76,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Un carbone sp participant à une triple liaison possède combien d'orbitales p non hybridées ?",
    "choices": [
      {
        "content": "Deux.",
        "correct": true,
        "explanation": "Deux p restent disponibles pour les deux liaisons pi."
      },
      {
        "content": "Zéro.",
        "correct": false,
        "explanation": "Cela correspondrait à sp3."
      },
      {
        "content": "Une.",
        "correct": false,
        "explanation": "Cela correspond à sp2."
      },
      {
        "content": "Trois.",
        "correct": false,
        "explanation": "Une orbitale p a été utilisée dans l'hybridation sp."
      },
      {
        "content": "Quatre.",
        "correct": false,
        "explanation": "Le carbone de valence ne possède pas quatre orbitales p."
      }
    ],
    "explanation": "La présence de deux p non hybridées est le critère orbital essentiel d'un carbone sp dans une triple liaison."
  },
  {
    "order": 77,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Deux orbitales p alignées sur l'axe internucléaire peuvent former quelles combinaisons moléculaires ?",
    "choices": [
      {
        "content": "Une orbitale $\\sigma$ liante par combinaison en phase.",
        "correct": true,
        "explanation": "La densité augmente entre les noyaux."
      },
      {
        "content": "Le nombre total d'orbitales est conservé.",
        "correct": true,
        "explanation": "Deux OA donnent deux OM."
      },
      {
        "content": "Une orbitale $\\sigma^*$ antiliante par combinaison en opposition de phase.",
        "correct": true,
        "explanation": "Un nœud apparaît entre les noyaux."
      },
      {
        "content": "Aucune combinaison antiliante n'est possible.",
        "correct": false,
        "explanation": "La combinaison antiliante existe nécessairement."
      },
      {
        "content": "Deux orbitales uniquement pi.",
        "correct": false,
        "explanation": "L'alignement axial donne une symétrie sigma."
      }
    ],
    "explanation": "Le nombre et la symétrie des OM dérivent directement des OA combinées."
  },
  {
    "order": 78,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{NH3}$ : AX3E1, pyramidale.",
        "correct": true,
        "explanation": "Trois liaisons et un doublet."
      },
      {
        "content": "$\\ce{CO2}$ : AX4, tétraédrique.",
        "correct": false,
        "explanation": "Une double liaison compte comme un domaine."
      },
      {
        "content": "$\\ce{NH4+}$ : AX3E1.",
        "correct": false,
        "explanation": "Il n'a pas de doublet non liant."
      },
      {
        "content": "$\\ce{NH4+}$ : AX4, tétraédrique.",
        "correct": true,
        "explanation": "Quatre liaisons."
      },
      {
        "content": "$\\ce{H3O+}$ : AX2E2.",
        "correct": false,
        "explanation": "C'est AX3E1."
      },
      {
        "content": "$\\ce{H3O+}$ : AX3E1, pyramidale.",
        "correct": true,
        "explanation": "Trois liaisons et un doublet."
      },
      {
        "content": "$\\ce{CO2}$ : AX2, linéaire.",
        "correct": true,
        "explanation": "Deux domaines."
      },
      {
        "content": "$\\ce{H2O}$ : AX2E2, coudée.",
        "correct": true,
        "explanation": "Deux liaisons et deux doublets."
      },
      {
        "content": "$\\ce{H2O}$ : AX2, linéaire.",
        "correct": false,
        "explanation": "Les deux doublets imposent une forme coudée."
      },
      {
        "content": "$\\ce{NH3}$ : AX4, tétraédrique moléculaire.",
        "correct": false,
        "explanation": "La forme visible est pyramidale."
      }
    ],
    "explanation": "Ce bilan exige de distinguer géométrie électronique, doublets non liants et géométrie moléculaire."
  },
  {
    "order": 79,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant $\\ce{PCl5}$ et $\\ce{SF6}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "SF6 est octaédrique.",
        "correct": true,
        "explanation": "Six positions équivalentes idéales."
      },
      {
        "content": "PCl5 est bipyramidal trigonale.",
        "correct": true,
        "explanation": "Trois équatoriales et deux axiales."
      },
      {
        "content": "Les deux molécules sont tétraédriques.",
        "correct": false,
        "explanation": "Elles dépassent quatre domaines."
      },
      {
        "content": "PCl5 possède cinq directions de liaison.",
        "correct": true,
        "explanation": "AX5."
      },
      {
        "content": "SF6 possède six directions de liaison.",
        "correct": true,
        "explanation": "AX6."
      }
    ],
    "explanation": "Ces espèces montrent que VSEPR couvre également cinq et six domaines autour d'un centre."
  },
  {
    "order": 80,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{HCN}$ contient deux liaisons pi.",
        "correct": true,
        "explanation": "Triple liaison C≡N."
      },
      {
        "content": "L'éthylène possède une rotation libre autour de C=C.",
        "correct": false,
        "explanation": "La pi limite la rotation."
      },
      {
        "content": "Le benzène est constitué de six carbones sp.",
        "correct": false,
        "explanation": "Ils sont sp2."
      },
      {
        "content": "$\\ce{HCN}$ est tétraédrique.",
        "correct": false,
        "explanation": "Il est linéaire."
      },
      {
        "content": "$\\ce{C6H6}$ possède six carbones sp2.",
        "correct": true,
        "explanation": "Cycle aromatique."
      },
      {
        "content": "Le benzène contient trois liaisons pi totalement indépendantes dans la structure réelle.",
        "correct": false,
        "explanation": "Le système est délocalisé."
      },
      {
        "content": "$\\ce{C2H4}$ possède deux carbones sp3.",
        "correct": false,
        "explanation": "Ils sont sp2."
      },
      {
        "content": "$\\ce{C2H4}$ possède deux carbones sp2.",
        "correct": true,
        "explanation": "Double liaison."
      },
      {
        "content": "Le benzène possède un système pi délocalisé.",
        "correct": true,
        "explanation": "Les p parallèles se recouvrent sur le cycle."
      },
      {
        "content": "$\\ce{HCN}$ possède un carbone sp.",
        "correct": true,
        "explanation": "Deux domaines sigma."
      }
    ],
    "explanation": "HCN, éthylène et benzène permettent de comparer sp, sp2, liaisons multiples et délocalisation."
  },
  {
    "order": 85,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux correspondances entièrement correctes.",
    "choices": [
      {
        "content": "$\\mathrm{sp}$ : 2 domaines, linéaire, 2 orbitales p non hybridées.",
        "correct": true,
        "explanation": "C'est la signature d'un centre sp."
      },
      {
        "content": "$\\mathrm{sp}^3$ : 3 domaines, trigonale plane.",
        "correct": false,
        "explanation": "sp3 correspond à 4 domaines."
      },
      {
        "content": "$\\mathrm{sp}^2$ : 3 domaines, trigonale plane, 1 orbitale p non hybridée.",
        "correct": true,
        "explanation": "C'est la signature d'un centre sp2."
      },
      {
        "content": "$\\mathrm{sp}^2$ : 2 domaines, linéaire.",
        "correct": false,
        "explanation": "C'est sp."
      },
      {
        "content": "$\\mathrm{sp}$ : 4 domaines, tétraédrique.",
        "correct": false,
        "explanation": "C'est sp3."
      }
    ],
    "explanation": "Le nombre d'orbitales hybrides et le nombre d'orbitales p restantes sont complémentaires."
  },
  {
    "order": 86,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Dans l'acide lactique $\\ce{CH3-CH(OH)-COOH}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone du groupe CH3 est sp3.",
        "correct": true,
        "explanation": "Il forme quatre liaisons sigma."
      },
      {
        "content": "Tous les carbones sont sp.",
        "correct": false,
        "explanation": "Aucun carbone n'est sp."
      },
      {
        "content": "Le carbone carboxylique est sp2.",
        "correct": true,
        "explanation": "Le carbonyle impose une géométrie plane."
      },
      {
        "content": "Le carbone portant OH est sp3.",
        "correct": true,
        "explanation": "Il possède quatre directions sigma."
      },
      {
        "content": "La molécule contient deux carbones sp2.",
        "correct": false,
        "explanation": "Un seul carbone, le carboxylique, est sp2."
      }
    ],
    "explanation": "L'acide lactique illustre la coexistence de centres sp3 et sp2 dans une même molécule biologique."
  }
];
