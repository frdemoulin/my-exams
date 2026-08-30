import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.3 – Section B – Hybridation et géométrie des molécules simples */
export const UE14_CH3_HYBRIDATION_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 21,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le modèle d'hybridation des orbitales atomiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il combine des orbitales atomiques de valence d'un même atome.",
        "correct": true,
        "explanation": "Le modèle construit des orbitales hybrides locales."
      },
      {
        "content": "Il transforme les électrons en particules suivant des trajectoires fixes.",
        "correct": false,
        "explanation": "Le modèle reste quantique."
      },
      {
        "content": "Il exige toujours l'utilisation d'orbitales d.",
        "correct": false,
        "explanation": "Les hybridations sp, sp2 et sp3 utilisent s et p."
      },
      {
        "content": "Il aide à rationaliser l'orientation des liaisons dans l'espace.",
        "correct": true,
        "explanation": "sp, sp2 et sp3 correspondent à des directions caractéristiques."
      },
      {
        "content": "Le nombre d'orbitales hybrides obtenues est égal au nombre d'orbitales combinées.",
        "correct": true,
        "explanation": "Le nombre total d'orbitales est conservé."
      }
    ],
    "explanation": "L'hybridation est un modèle local de liaison ; elle complète, sans remplacer, les descriptions quantiques plus générales."
  },
  {
    "order": 22,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux caractéristiques d'une hybridation $\\mathrm{sp}$.",
    "choices": [
      {
        "content": "Deux orbitales hybrides sont orientées à $180^\\circ$.",
        "correct": true,
        "explanation": "La géométrie électronique est linéaire."
      },
      {
        "content": "Une orbitale s et une orbitale p sont combinées.",
        "correct": true,
        "explanation": "Elles donnent deux hybrides sp."
      },
      {
        "content": "Quatre hybrides tétraédriques sont produits.",
        "correct": false,
        "explanation": "Cela correspond à sp3."
      },
      {
        "content": "Trois orbitales p restent non hybridées.",
        "correct": false,
        "explanation": "Deux orbitales p restent non hybridées."
      },
      {
        "content": "Trois orbitales hybrides coplanaires sont formées.",
        "correct": false,
        "explanation": "Cela correspond à sp2."
      }
    ],
    "explanation": "L'hybridation sp produit deux directions opposées et laisse deux orbitales p disponibles pour d'éventuelles liaisons pi."
  },
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le modèle local de $\\ce{BeH2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le béryllium central peut être décrit avec deux orbitales hybrides sp.",
        "correct": true,
        "explanation": "Deux directions de liaison sont nécessaires."
      },
      {
        "content": "Le béryllium est décrit comme sp3.",
        "correct": false,
        "explanation": "Deux domaines conduisent à sp."
      },
      {
        "content": "L'angle H–Be–H est voisin de $109{,}5^\\circ$.",
        "correct": false,
        "explanation": "Il est proche de 180°."
      },
      {
        "content": "La molécule est linéaire.",
        "correct": true,
        "explanation": "Les deux domaines sont séparés de 180°."
      },
      {
        "content": "Les deux liaisons Be–H sont équivalentes dans ce modèle.",
        "correct": true,
        "explanation": "Les deux hybrides sp sont équivalents."
      }
    ],
    "explanation": "BeH2 constitue un exemple simple reliant deux domaines électroniques, sp et géométrie linéaire."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle association décrit correctement une hybridation $\\mathrm{sp}^2$ ?",
    "choices": [
      {
        "content": "Aucune orbitale p ne reste disponible pour une liaison pi.",
        "correct": false,
        "explanation": "Une orbitale p reste non hybridée."
      },
      {
        "content": "Une orbitale s et deux orbitales p donnent trois hybrides coplanaires proches de $120^\\circ$.",
        "correct": true,
        "explanation": "Une orbitale p reste non hybridée."
      },
      {
        "content": "Une s et trois p donnent quatre hybrides tétraédriques.",
        "correct": false,
        "explanation": "C'est sp3."
      },
      {
        "content": "Une s et une p donnent deux hybrides à 180°.",
        "correct": false,
        "explanation": "C'est sp."
      },
      {
        "content": "Deux s et deux p donnent quatre hybrides carrés plans.",
        "correct": false,
        "explanation": "Ce n'est pas le modèle usuel."
      }
    ],
    "explanation": "sp2 décrit notamment les carbones d'une double liaison et les carbones carbonylés."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle association décrit correctement une hybridation $\\mathrm{sp}^3$ ?",
    "choices": [
      {
        "content": "Une orbitale s et trois orbitales p donnent quatre hybrides orientés selon un tétraèdre.",
        "correct": true,
        "explanation": "L'angle idéal est proche de 109,5°."
      },
      {
        "content": "Deux orbitales p restent non hybridées.",
        "correct": false,
        "explanation": "En sp3, les trois p sont hybridées."
      },
      {
        "content": "Une s et une p donnent deux hybrides linéaires.",
        "correct": false,
        "explanation": "C'est sp."
      },
      {
        "content": "Une s et deux p donnent trois hybrides plans.",
        "correct": false,
        "explanation": "C'est sp2."
      },
      {
        "content": "Elle impose toujours une géométrie moléculaire tétraédrique visible.",
        "correct": false,
        "explanation": "Des doublets non liants peuvent donner des formes pyramidale ou coudée."
      }
    ],
    "explanation": "La géométrie électronique sp3 comporte quatre domaines ; la géométrie moléculaire dépend ensuite des doublets liants et non liants."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans le méthane $\\ce{CH4}$, combien d'orbitales hybrides $\\mathrm{sp}^3$ équivalentes porte le carbone ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Les quatre hybrides sp3 sont dirigés vers les sommets d'un tétraèdre."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'ammoniac $\\ce{NH3}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'azote est sp dans l'ammoniac.",
        "correct": false,
        "explanation": "Il est décrit comme sp3."
      },
      {
        "content": "L'azote peut être décrit par quatre orbitales sp3.",
        "correct": true,
        "explanation": "Il existe quatre domaines électroniques."
      },
      {
        "content": "Une orbitale contient un doublet non liant.",
        "correct": true,
        "explanation": "Ce doublet modifie les angles et la forme."
      },
      {
        "content": "La géométrie moléculaire est parfaitement tétraédrique avec quatre hydrogènes.",
        "correct": false,
        "explanation": "La forme visible est pyramidale à trois hydrogènes."
      },
      {
        "content": "Trois orbitales sont engagées dans les liaisons N–H.",
        "correct": true,
        "explanation": "Il y a trois liaisons."
      }
    ],
    "explanation": "NH3 illustre la différence entre géométrie électronique tétraédrique et géométrie moléculaire pyramidale."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de doublets non liants porte l'oxygène central de $\\ce{H2O}$ dans le modèle de Lewis usuel ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "L'oxygène forme deux liaisons O–H et conserve deux doublets non liants."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "On compare $\\ce{CH4}$, $\\ce{NH3}$ et $\\ce{H2O}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les trois molécules ont exactement la même géométrie moléculaire.",
        "correct": false,
        "explanation": "Elles sont tétraédrique, pyramidale et coudée."
      },
      {
        "content": "Le nombre de doublets non liants du centre vaut respectivement 0, 1 et 2.",
        "correct": true,
        "explanation": "Cette progression modifie les géométries."
      },
      {
        "content": "L'eau est linéaire dans son état fondamental.",
        "correct": false,
        "explanation": "Elle est coudée."
      },
      {
        "content": "Les angles H–X–H diminuent globalement de CH4 vers NH3 puis H2O.",
        "correct": true,
        "explanation": "Les doublets non liants exercent des répulsions plus fortes."
      },
      {
        "content": "Les trois centres peuvent être décrits avec quatre domaines électroniques.",
        "correct": true,
        "explanation": "Ils correspondent à une organisation électronique proche du tétraèdre."
      }
    ],
    "explanation": "La répulsion des doublets non liants explique la diminution des angles par rapport au tétraèdre idéal."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux associations correctes.",
    "choices": [
      {
        "content": "$\\mathrm{sp}^2$ → organisation tétraédrique.",
        "correct": false,
        "explanation": "C'est sp3."
      },
      {
        "content": "$\\mathrm{sp}^2$ → organisation trigonale plane, environ $120^\\circ$.",
        "correct": true,
        "explanation": "Trois domaines électroniques."
      },
      {
        "content": "$\\mathrm{sp}^3$ → organisation linéaire.",
        "correct": false,
        "explanation": "sp3 correspond à quatre directions tétraédriques."
      },
      {
        "content": "$\\mathrm{sp}$ → quatre directions à $109{,}5^\\circ$.",
        "correct": false,
        "explanation": "C'est sp3."
      },
      {
        "content": "$\\mathrm{sp}$ → organisation linéaire, $180^\\circ$.",
        "correct": true,
        "explanation": "Deux domaines électroniques."
      }
    ],
    "explanation": "Le nombre d'hybrides vaut 2, 3 ou 4 pour sp, sp2 ou sp3."
  }
];

export const UE14_CH3_HYBRIDATION_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 31,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Le carbone carbonylé de l'acétone $\\ce{CH3-C(=O)-CH3}$ est décrit comme $\\mathrm{sp}^2$. Quelle conséquence en découle ?",
    "choices": [
      {
        "content": "Sa géométrie locale est linéaire.",
        "correct": false,
        "explanation": "Elle est trigonale plane."
      },
      {
        "content": "Il possède quatre hybrides sp3 et aucune orbitale p disponible.",
        "correct": false,
        "explanation": "Cela correspondrait à un carbone saturé."
      },
      {
        "content": "Il possède trois directions hybrides coplanaires et une orbitale p non hybridée.",
        "correct": true,
        "explanation": "Cette orbitale p participe à la liaison pi C=O."
      },
      {
        "content": "Il ne peut former aucune liaison pi.",
        "correct": false,
        "explanation": "Il en forme précisément une avec l'oxygène."
      },
      {
        "content": "Il possède deux hybrides sp et deux orbitales p non hybridées.",
        "correct": false,
        "explanation": "C'est le modèle d'un centre sp."
      }
    ],
    "explanation": "Un carbone carbonylé sp2 est approximativement plan, avec une orbitale p perpendiculaire au plan sigma."
  },
  {
    "order": 32,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le carbone central de $\\ce{CO2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Deux orbitales p non hybridées restent disponibles.",
        "correct": true,
        "explanation": "Elles forment les deux composantes pi."
      },
      {
        "content": "Le carbone est sp3.",
        "correct": false,
        "explanation": "Il n'existe pas quatre domaines sigma autour du carbone."
      },
      {
        "content": "La molécule est linéaire autour du carbone.",
        "correct": true,
        "explanation": "Les deux hybrides sp sont opposés."
      },
      {
        "content": "Aucune liaison pi n'est présente.",
        "correct": false,
        "explanation": "Il y en a deux."
      },
      {
        "content": "Il est décrit comme sp.",
        "correct": true,
        "explanation": "Deux domaines sigma conduisent à sp."
      }
    ],
    "explanation": "CO2 constitue un exemple majeur de centre sp combinant deux liaisons sigma et deux liaisons pi."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Lors de la protonation $\\ce{NH3 -> NH4+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le doublet non liant de NH3 sert à former une nouvelle liaison N–H.",
        "correct": true,
        "explanation": "Il est donné au proton."
      },
      {
        "content": "L'azote devient sp après protonation.",
        "correct": false,
        "explanation": "Il reste compatible avec une description sp3."
      },
      {
        "content": "NH4+ possède une géométrie tétraédrique.",
        "correct": true,
        "explanation": "Quatre liaisons et aucun doublet non liant."
      },
      {
        "content": "NH4+ possède encore un doublet non liant sur l'azote.",
        "correct": false,
        "explanation": "Le doublet a servi à la liaison."
      },
      {
        "content": "L'azote reste décrit avec quatre domaines électroniques avant et après protonation.",
        "correct": true,
        "explanation": "NH3 : 3 liaisons + 1 doublet ; NH4+ : 4 liaisons."
      }
    ],
    "explanation": "La protonation change la nature d'un domaine électronique sans changer le nombre total de domaines autour de l'azote."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l'occupation des orbitales sp3 de $\\ce{NH3}$ et $\\ce{H2O}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les doublets non liants exercent des répulsions importantes.",
        "correct": true,
        "explanation": "Ils influencent fortement les angles."
      },
      {
        "content": "NH3 ne possède aucun domaine non liant.",
        "correct": false,
        "explanation": "Il en possède un."
      },
      {
        "content": "H2O possède deux doublets non liants sur l'oxygène.",
        "correct": true,
        "explanation": "Deux des quatre domaines ne sont pas liants."
      },
      {
        "content": "H2O possède quatre liaisons O–H.",
        "correct": false,
        "explanation": "Elle n'en possède que deux."
      },
      {
        "content": "NH3 possède un doublet non liant sur l'azote.",
        "correct": true,
        "explanation": "Un domaine sp3 contient ce doublet."
      }
    ],
    "explanation": "Les doublets non liants modifient la géométrie moléculaire sans changer l'organisation électronique de base à quatre domaines."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel enchaînement hybridation → géométrie électronique est correct ?",
    "choices": [
      {
        "content": "Les hybridations n'ont aucun lien avec l'organisation spatiale.",
        "correct": false,
        "explanation": "Le modèle est précisément utilisé pour cette relation."
      },
      {
        "content": "$\\mathrm{sp}$ → linéaire ; $\\mathrm{sp}^2$ → trigonale plane ; $\\mathrm{sp}^3$ → tétraédrique.",
        "correct": true,
        "explanation": "C'est la correspondance fondamentale."
      },
      {
        "content": "$\\mathrm{sp}$ → coudée ; $\\mathrm{sp}^2$ → pyramidale ; $\\mathrm{sp}^3$ → linéaire.",
        "correct": false,
        "explanation": "Ces formes dépendent aussi des doublets et ne correspondent pas directement."
      },
      {
        "content": "$\\mathrm{sp}$ → octaédrique ; $\\mathrm{sp}^2$ → bipyramidale ; $\\mathrm{sp}^3$ → linéaire.",
        "correct": false,
        "explanation": "Ces associations sont incorrectes."
      },
      {
        "content": "$\\mathrm{sp}$ → tétraédrique ; $\\mathrm{sp}^2$ → linéaire ; $\\mathrm{sp}^3$ → plane.",
        "correct": false,
        "explanation": "Les trois correspondances sont inversées."
      }
    ],
    "explanation": "Cette correspondance sert de base au raisonnement local sur de nombreuses molécules organiques."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans l'éthanol $\\ce{CH3-CH2-OH}$, quelles propositions sont exactes dans un modèle local simple ?",
    "choices": [
      {
        "content": "L'oxygène ne possède aucun doublet non liant.",
        "correct": false,
        "explanation": "Il en possède deux."
      },
      {
        "content": "Les deux carbones sont sp3.",
        "correct": true,
        "explanation": "Chacun forme quatre liaisons sigma."
      },
      {
        "content": "La molécule ne comporte aucune liaison pi.",
        "correct": true,
        "explanation": "Toutes les liaisons sont simples."
      },
      {
        "content": "Le carbone du groupe CH3 est sp2.",
        "correct": false,
        "explanation": "Il est saturé et sp3."
      },
      {
        "content": "L'oxygène peut être décrit comme sp3.",
        "correct": true,
        "explanation": "Deux liaisons et deux doublets non liants donnent quatre domaines."
      }
    ],
    "explanation": "L'éthanol est un bon exemple de squelette entièrement sigma avec centres sp3."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones sp3 contient l'acide lactique $\\ce{CH3-CH(OH)-COOH}$ ?",
    "answer": {
      "type": "number",
      "value": 2,
      "tolerance": 0
    },
    "explanation": "Le carbone du CH3 et le carbone porteur de OH sont sp3 ; le carbone carboxylique est sp2."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le carbone de l'ion hydrogénocarbonate $\\ce{HCO3-}$ dans une description mésomère usuelle, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La géométrie locale est approximativement trigonale plane.",
        "correct": true,
        "explanation": "Les trois oxygènes définissent un arrangement plan."
      },
      {
        "content": "Les trois liaisons C–O sont nécessairement décrites comme totalement indépendantes sans délocalisation.",
        "correct": false,
        "explanation": "La charge et le caractère pi sont délocalisés."
      },
      {
        "content": "Il est approximativement sp2.",
        "correct": true,
        "explanation": "Trois directions sigma entourent le carbone."
      },
      {
        "content": "Le carbone est sp3 tétraédrique.",
        "correct": false,
        "explanation": "La géométrie est plane."
      },
      {
        "content": "Une orbitale p permet la délocalisation électronique sur le groupe carbonate.",
        "correct": true,
        "explanation": "La mésomérie implique ce système pi."
      }
    ],
    "explanation": "L'hydrogénocarbonate relie hybridation sp2 et mésomérie."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quel est l'intérêt du modèle d'hybridation ?",
    "choices": [
      {
        "content": "Décrire exactement toutes les propriétés électroniques de toute molécule.",
        "correct": false,
        "explanation": "C'est un modèle local et simplifié."
      },
      {
        "content": "Remplacer totalement la mécanique quantique moléculaire.",
        "correct": false,
        "explanation": "Il en constitue une rationalisation pédagogique."
      },
      {
        "content": "Fournir un langage simple pour comparer des centres sp, sp2 et sp3.",
        "correct": true,
        "explanation": "Il est pratique pour la chimie structurale."
      },
      {
        "content": "Relier liaisons multiples et orbitales p non hybridées.",
        "correct": true,
        "explanation": "Les pi utilisent les orbitales restantes."
      },
      {
        "content": "Rationaliser l'orientation locale des liaisons.",
        "correct": true,
        "explanation": "Les hybrides pointent dans des directions géométriques définies."
      }
    ],
    "explanation": "Le modèle d'hybridation est utile s'il est employé comme outil descriptif, pas comme une réalité indépendante des orbitales moléculaires."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de l'ion oxonium $\\ce{H3O+}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il reste un doublet non liant sur l'oxygène.",
        "correct": true,
        "explanation": "Le centre possède quatre domaines."
      },
      {
        "content": "L'oxygène possède trois liaisons O–H.",
        "correct": true,
        "explanation": "Trois hydrogènes sont liés au centre."
      },
      {
        "content": "L'oxygène est décrit comme sp.",
        "correct": false,
        "explanation": "Il est compatible avec sp3."
      },
      {
        "content": "La géométrie est linéaire.",
        "correct": false,
        "explanation": "Quatre domaines électroniques excluent une forme linéaire."
      },
      {
        "content": "La géométrie moléculaire est pyramidale.",
        "correct": true,
        "explanation": "Type AX3E1."
      }
    ],
    "explanation": "H3O+ et NH3 partagent le type VSEPR AX3E1 et une forme pyramidale."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'orbitales p non hybridées restent sur un carbone $\\mathrm{sp}^2$ ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "Une s et deux p sont hybridées ; une orbitale p reste non hybridée."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux centres carbonés typiquement décrits comme $\\mathrm{sp}$.",
    "choices": [
      {
        "content": "Le carbone du groupe nitrile dans $\\ce{H-C#N}$.",
        "correct": true,
        "explanation": "La triple liaison est compatible avec sp."
      },
      {
        "content": "Le carbone carbonylé de l'acétone.",
        "correct": false,
        "explanation": "Il est sp2."
      },
      {
        "content": "Un carbone du méthane $\\ce{CH4}$.",
        "correct": false,
        "explanation": "Il est sp3."
      },
      {
        "content": "Le carbone central de $\\ce{CO2}$.",
        "correct": true,
        "explanation": "Deux domaines sigma et deux orbitales p non hybridées."
      },
      {
        "content": "Un carbone de l'éthylène $\\ce{C2H4}$.",
        "correct": false,
        "explanation": "Il est sp2."
      }
    ],
    "explanation": "Un centre sp est associé à deux directions sigma et à deux orbitales p non hybridées."
  }
];
