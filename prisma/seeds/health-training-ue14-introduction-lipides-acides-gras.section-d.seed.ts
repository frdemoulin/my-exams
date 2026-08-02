import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SECTION_D_ORDER = 4;

export const SECTION_D_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "91": [
    "Densité des acides gras"
  ],
  "92": [
    "Solubilité"
  ],
  "93": [
    "Couche monomoléculaire"
  ],
  "94": [
    "Micelles"
  ],
  "95": [
    "Longueur et point de fusion"
  ],
  "96": [
    "Désaturation et état physique"
  ],
  "97": [
    "Estérification"
  ],
  "98": [
    "Réactions des désaturés"
  ],
  "99": [
    "Rôles biologiques et trans"
  ],
  "100": [
    "Oméga 3"
  ],
  "101": [
    "Densité des acides gras"
  ],
  "102": [
    "Solubilité"
  ],
  "103": [
    "Couche monomoléculaire"
  ],
  "104": [
    "Micelles"
  ],
  "105": [
    "Longueur et point de fusion"
  ],
  "106": [
    "Désaturation et état physique"
  ],
  "107": [
    "Estérification"
  ],
  "108": [
    "Réactions des désaturés"
  ],
  "109": [
    "Rôles biologiques et trans"
  ],
  "110": [
    "Oméga 3"
  ],
  "111": [
    "Densité des acides gras"
  ],
  "112": [
    "Solubilité"
  ],
  "113": [
    "Couche monomoléculaire"
  ],
  "114": [
    "Micelles"
  ],
  "115": [
    "Longueur et point de fusion"
  ],
  "116": [
    "Désaturation et état physique"
  ],
  "117": [
    "Estérification"
  ],
  "118": [
    "Réactions des désaturés"
  ],
  "119": [
    "Rôles biologiques et trans"
  ],
  "120": [
    "Oméga 3"
  ]
};

export const SECTION_D_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "proprietes-physiques",
    "title": "Propriétés physiques",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
    "stage": "DISCOVER",
    "sectionOrder": 4,
    "questionOrders": [
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100
    ]
  },
  {
    "order": 2,
    "slug": "reactions-roles-biologiques",
    "title": "Réactions et rôles biologiques",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
    "stage": "PRACTICE",
    "sectionOrder": 4,
    "questionOrders": [
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110
    ]
  },
  {
    "order": 3,
    "slug": "omega3-sante",
    "title": "Oméga 3 et santé",
    "description": "Dix questions ciblées sur cette partie du chapitre.",
    "stage": "MASTER",
    "sectionOrder": 4,
    "items": [
      {
        "type": "GROUP",
        "title": "Analyse 1",
        "sharedStatement": "Les questions suivantes partagent un même axe de raisonnement.",
        "questionOrders": [
          111,
          112,
          113
        ]
      },
      {
        "type": "GROUP",
        "title": "Analyse 2",
        "sharedStatement": "Les questions suivantes croisent plusieurs notions de la section.",
        "questionOrders": [
          114,
          115,
          116
        ]
      },
      {
        "type": "GROUP",
        "title": "Analyse 3",
        "sharedStatement": "Les questions suivantes concluent le travail transversal.",
        "questionOrders": [
          117,
          118,
          119,
          120
        ]
      }
    ]
  }
];

export const SECTION_D_QUESTIONS: SeedQuestion[] = [
  {
    "order": 91,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de densité des acides gras :",
    "choices": [
      "Leur masse moléculaire est souvent comprise entre 250 et 300 Da.",
      "L’acide palmitique possède une masse de 18 Da.",
      "Leur densité est inférieure à celle de l’eau.",
      "Leur masse moléculaire est toujours nulle."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les acides gras ont une faible densité et surnagent sur l’eau.",
    "choiceExplanations": [
      "Vrai. C’est l’intervalle indiqué.",
      "Faux. Faux : la valeur citée est 256 Da.",
      "Vrai. La fiche le précise.",
      "Faux. Faux : elle est de l’ordre de 250–300 Da."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "monolayer-micelle"
    }
  },
  {
    "order": 92,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de solubilité :",
    "choices": [
      "La chaîne carbonée est la partie la plus hydrophile.",
      "Ils sont solubles dans le chloroforme.",
      "La présence de COOH garantit une solubilité totale quelle que soit la chaîne.",
      "Ils sont solubles dans le benzène."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "La longue chaîne hydrophobe explique l’insolubilité dans l’eau.",
    "choiceExplanations": [
      "Faux. Faux : elle est hydrophobe.",
      "Vrai. Ce solvant organique est cité.",
      "Faux. Faux : la chaîne longue domine le comportement.",
      "Vrai. Ce solvant organique est cité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-amphiphile"
    }
  },
  {
    "order": 93,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de couche monomoléculaire :",
    "choices": [
      "La couche peut se former spontanément.",
      "La chaîne hydrophobe se dissout entièrement dans l’eau.",
      "Leur chaîne hydrophobe tend à éviter l’eau.",
      "La densité élevée les fait couler avant toute organisation."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les acides gras peuvent s’orienter spontanément à l’interface eau-air.",
    "choiceExplanations": [
      "Vrai. La fiche qualifie ce comportement de spontané.",
      "Faux. Faux : elle évite l’eau.",
      "Vrai. Elle est non mouillable.",
      "Faux. Faux : leur densité est faible."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "monolayer-micelle"
    }
  },
  {
    "order": 94,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de micelles :",
    "choices": [
      "L’agitation transforme les acides gras en glucose.",
      "Le caractère amphiphile permet une organisation des têtes et des chaînes.",
      "Une micelle prouve une dissolution moléculaire totale.",
      "L’agitation peut conduire à la formation de micelles."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "L’agitation d’une monocouche peut former des micelles peu stables.",
    "choiceExplanations": [
      "Faux. Faux : elle modifie leur organisation.",
      "Vrai. Il explique la structure.",
      "Faux. Faux : il s’agit d’une dispersion organisée.",
      "Vrai. La fiche le précise."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "monolayer-micelle"
    }
  },
  {
    "order": 95,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de longueur et point de fusion :",
    "choices": [
      "Les longues chaînes ont tendance à rester solides à des températures plus élevées.",
      "Le point de fusion est la température de passage liquide-gaz.",
      "Il augmente lorsque le nombre de carbones augmente.",
      "La longueur de chaîne n’a aucun effet."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Le point de fusion augmente avec le nombre de carbones.",
    "choiceExplanations": [
      "Vrai. Cela découle de l’augmentation du point de fusion.",
      "Faux. Faux : il s’agit du passage solide-liquide.",
      "Vrai. C’est la tendance indiquée.",
      "Faux. Faux : elle est un facteur déterminant."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "melting-point-factors"
    }
  },
  {
    "order": 96,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de désaturation et état physique :",
    "choices": [
      "L’acide oléique est solide à toute température.",
      "Un 18:1 a tendance à fondre plus bas qu’un 18:0 comparable.",
      "Tous les saturés sont liquides à 37 °C.",
      "La présence de doubles liaisons abaisse le point de fusion."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les doubles liaisons abaissent le point de fusion.",
    "choiceExplanations": [
      "Faux. Faux : il est liquide à température ambiante.",
      "Vrai. La désaturation abaisse la fusion.",
      "Faux. Faux : ceux de plus de 10 carbones sont indiqués solides.",
      "Vrai. C’est la tendance indiquée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "melting-point-factors"
    }
  },
  {
    "order": 97,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de estérification :",
    "choices": [
      "La réaction est très fréquente in vivo.",
      "Le produit principal est toujours du dioxyde de carbone.",
      "Le produit comporte une fonction ester.",
      "La réaction détruit tous les carbones de la chaîne."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "L’acide gras réagit avec un alcool pour former un ester et de l’eau.",
    "choiceExplanations": [
      "Vrai. La fiche le souligne.",
      "Faux. Faux : le bilan donne ester et eau.",
      "Vrai. C’est le produit caractéristique.",
      "Faux. Faux : la chaîne est conservée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-reactions"
    }
  },
  {
    "order": 98,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de réactions des désaturés :",
    "choices": [
      "La réduction de l’oléique donne nécessairement le linolénique.",
      "La réduction diminue le nombre de doubles liaisons.",
      "L’acide élaïdique est la forme cis de l’oléique.",
      "Les maladies cardiovasculaires sont citées à propos de l’oxydation."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Cis-trans, réduction et oxydation sont présentées parmi les propriétés chimiques.",
    "choiceExplanations": [
      "Faux. Faux : elle donne le stéarique.",
      "Vrai. Elle augmente la saturation.",
      "Faux. Faux : il est la forme trans.",
      "Vrai. Elles figurent dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-reactions"
    }
  },
  {
    "order": 99,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de rôles biologiques et trans :",
    "choices": [
      "Ils peuvent constituer une réserve énergétique.",
      "Les produits transformés sont exclus des sources de trans.",
      "Les acides gras trans industriels sont associés à des effets néfastes.",
      "Ils ne peuvent jamais fournir d’énergie."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les acides gras ont des rôles structuraux, énergétiques et métaboliques.",
    "choiceExplanations": [
      "Vrai. La réserve est citée.",
      "Faux. Faux : ils sont cités.",
      "Vrai. La fiche le souligne.",
      "Faux. Faux : leur oxydation en libère."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 100,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de oméga 3 :",
    "choices": [
      "Ils sont décrits comme nuisibles au fonctionnement cérébral.",
      "Des propriétés anti-inflammatoires et une protection cardiovasculaire sont citées.",
      "La conversion humaine des oméga 3 est illimitée.",
      "La source principale des oméga 3 reste alimentaire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Le linolénique est un oméga 3 essentiel précurseur limité de l’EPA et du DHA.",
    "choiceExplanations": [
      "Faux. Faux : ils y sont importants.",
      "Vrai. Ces bénéfices sont indiqués.",
      "Faux. Faux : elle est limitée.",
      "Vrai. La fiche le conclut."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "omega3-pathway"
    }
  },
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant densité des acides gras :",
    "choices": [
      "Ils peuvent surnager à la surface de l’eau.",
      "Ils coulent nécessairement au fond de l’eau.",
      "Ils occupent un volume important relativement à leur masse.",
      "L’acide palmitique est donné à 256 Da."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les acides gras ont une faible densité et surnagent sur l’eau.",
    "choiceExplanations": [
      "Vrai. C’est une conséquence de leur faible densité.",
      "Faux. Faux : ils surnagent.",
      "Vrai. La fiche relie cela à leur faible densité.",
      "Vrai. Cette valeur est citée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "monolayer-micelle"
    }
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant solubilité :",
    "choices": [
      "Le benzène est cité comme solvant aqueux.",
      "Les acides gras sont totalement insolubles dans l’eau à partir de 8 carbones selon la fiche.",
      "Ils sont solubles dans l’éther.",
      "La chaîne carbonée contribue à l’hydrophobie."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "La longue chaîne hydrophobe explique l’insolubilité dans l’eau.",
    "choiceExplanations": [
      "Faux. Faux : il s’agit d’un solvant organique.",
      "Vrai. Le seuil est indiqué.",
      "Vrai. Ce solvant organique est cité.",
      "Vrai. Elle s’oppose à l’hydrosolubilité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-amphiphile"
    }
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant couche monomoléculaire :",
    "choices": [
      "Leur tête hydrophile peut se placer au contact de l’eau.",
      "La faible densité favorise leur présence en surface.",
      "Ils peuvent former une couche monomoléculaire à la surface de l’eau.",
      "Le comportement interfacial est indépendant du caractère amphiphile."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Les acides gras peuvent s’orienter spontanément à l’interface eau-air.",
    "choiceExplanations": [
      "Vrai. Cette orientation est cohérente avec le schéma.",
      "Vrai. Ils surnagent.",
      "Vrai. Ce comportement est représenté.",
      "Faux. Faux : il en découle."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "monolayer-micelle"
    }
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant micelles :",
    "choices": [
      "La micelle résulte d’une dispersion après agitation.",
      "Les micelles sont décrites comme de petites gouttelettes lipidiques.",
      "Une micelle est une protéine fibreuse.",
      "Elles sont souvent peu stables dans le contexte décrit."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "L’agitation d’une monocouche peut former des micelles peu stables.",
    "choiceExplanations": [
      "Vrai. Le schéma la relie à l’agitation.",
      "Vrai. C’est le vocabulaire utilisé.",
      "Faux. Faux : c’est une structure lipidique.",
      "Vrai. La faible stabilité est indiquée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "monolayer-micelle"
    }
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant longueur et point de fusion :",
    "choices": [
      "La longueur de chaîne est un déterminant du point de fusion.",
      "Le point de fusion diminue toujours quand la chaîne s’allonge.",
      "Deux saturés de longueurs différentes peuvent avoir des points de fusion différents.",
      "Le point de fusion est la température de passage solide-liquide."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Le point de fusion augmente avec le nombre de carbones.",
    "choiceExplanations": [
      "Vrai. Elle fait partie des deux facteurs majeurs.",
      "Faux. Faux : il augmente.",
      "Vrai. La longueur influence cette propriété.",
      "Vrai. C’est la définition donnée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "melting-point-factors"
    }
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant désaturation et état physique :",
    "choices": [
      "Un 18:0 est plus désaturé qu’un 18:1.",
      "Les saturés de moins de 5 carbones sont liquides à température ambiante.",
      "L’acide oléique 18:1 est liquide à température ambiante.",
      "Les saturés de plus de 10 carbones sont indiqués solides à 37 °C."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les doubles liaisons abaissent le point de fusion.",
    "choiceExplanations": [
      "Faux. Faux : le 18:0 est saturé.",
      "Vrai. La fiche le précise.",
      "Vrai. Cet exemple est donné.",
      "Vrai. La fiche le précise."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "melting-point-factors"
    }
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant estérification :",
    "choices": [
      "L’estérification fait réagir une fonction acide avec une fonction alcool.",
      "Une molécule d’eau est libérée dans le bilan présenté.",
      "La fonction COOH de l’acide gras participe à la réaction.",
      "L’estérification est absente des systèmes biologiques."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "L’acide gras réagit avec un alcool pour former un ester et de l’eau.",
    "choiceExplanations": [
      "Vrai. Ce sont les deux fonctions impliquées.",
      "Vrai. H₂O figure parmi les produits.",
      "Vrai. Elle fournit la partie acyle.",
      "Faux. Faux : elle est dite fréquente in vivo."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-reactions"
    }
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant réactions des désaturés :",
    "choices": [
      "L’oxydation des désaturés peut intervenir dans des processus pathologiques.",
      "Une isomérisation peut convertir l’acide oléique cis en acide élaïdique trans.",
      "La réduction augmente le nombre de doubles liaisons.",
      "La réduction de l’acide oléique peut donner l’acide stéarique."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Cis-trans, réduction et oxydation sont présentées parmi les propriétés chimiques.",
    "choiceExplanations": [
      "Vrai. La fiche le précise.",
      "Vrai. Cet exemple est donné.",
      "Faux. Faux : elle le diminue.",
      "Vrai. Le 18:1 devient 18:0."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-reactions"
    }
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant rôles biologiques et trans :",
    "choices": [
      "Les maladies cardiovasculaires et les cancers sont cités pour les trans.",
      "Les acides gras n’ont aucun rôle membranaire.",
      "Les acides gras participent à la structure des membranes cellulaires.",
      "L’acide arachidonique illustre un rôle de précurseur métabolique."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les acides gras ont des rôles structuraux, énergétiques et métaboliques.",
    "choiceExplanations": [
      "Vrai. Ces risques sont mentionnés.",
      "Faux. Faux : un rôle structural est cité.",
      "Vrai. Le rôle structural est cité.",
      "Vrai. Il est cité comme précurseur."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant oméga 3 :",
    "choices": [
      "L’EPA et le DHA sont classés dans la série ω9.",
      "Il est principalement retrouvé dans certaines huiles végétales.",
      "Les oméga 3 sont importants pour le développement et le fonctionnement cérébral.",
      "L’acide linolénique est un acide gras indispensable."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Le linolénique est un oméga 3 essentiel précurseur limité de l’EPA et du DHA.",
    "choiceExplanations": [
      "Faux. Faux : la voie les place dans la série n-3.",
      "Vrai. Cette origine est indiquée.",
      "Vrai. Ces rôles sont cités.",
      "Vrai. La fiche le précise."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "omega3-pathway"
    }
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à densité des acides gras :",
    "choices": [
      "La densité n’a aucun lien avec leur comportement à la surface de l’eau.",
      "L’acide palmitique possède une masse de 18 Da.",
      "Ils coulent nécessairement au fond de l’eau.",
      "Ils occupent un volume important relativement à leur masse."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Les acides gras ont une faible densité et surnagent sur l’eau.",
    "choiceExplanations": [
      "Faux. Faux : elle contribue à leur flottation.",
      "Faux. Faux : la valeur citée est 256 Da.",
      "Faux. Faux : ils surnagent.",
      "Vrai. La fiche relie cela à leur faible densité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "monolayer-micelle"
    }
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à solubilité :",
    "choices": [
      "La chaîne carbonée est la partie la plus hydrophile.",
      "Le benzène est cité comme solvant aqueux.",
      "Les acides gras sont totalement insolubles dans l’eau à partir de 8 carbones selon la fiche.",
      "À partir de 8 carbones, ils sont parfaitement miscibles à l’eau."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "La longue chaîne hydrophobe explique l’insolubilité dans l’eau.",
    "choiceExplanations": [
      "Faux. Faux : elle est hydrophobe.",
      "Faux. Faux : il s’agit d’un solvant organique.",
      "Vrai. Le seuil est indiqué.",
      "Faux. Faux : ils sont indiqués comme insolubles."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-amphiphile"
    }
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à couche monomoléculaire :",
    "choices": [
      "Le comportement interfacial est indépendant du caractère amphiphile.",
      "Leur tête hydrophile peut se placer au contact de l’eau.",
      "La tête carboxylique est orientée exclusivement vers l’air par hydrophobie.",
      "La densité élevée les fait couler avant toute organisation."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "Les acides gras peuvent s’orienter spontanément à l’interface eau-air.",
    "choiceExplanations": [
      "Faux. Faux : il en découle.",
      "Vrai. Cette orientation est cohérente avec le schéma.",
      "Faux. Faux : elle est hydrophile.",
      "Faux. Faux : leur densité est faible."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "monolayer-micelle"
    }
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à micelles :",
    "choices": [
      "Elles sont souvent peu stables dans le contexte décrit.",
      "Les micelles décrites sont toujours parfaitement stables.",
      "Une micelle prouve une dissolution moléculaire totale.",
      "Une micelle est une protéine fibreuse."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "L’agitation d’une monocouche peut former des micelles peu stables.",
    "choiceExplanations": [
      "Vrai. La faible stabilité est indiquée.",
      "Faux. Faux : elles sont souvent peu stables.",
      "Faux. Faux : il s’agit d’une dispersion organisée.",
      "Faux. Faux : c’est une structure lipidique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "monolayer-micelle"
    }
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à longueur et point de fusion :",
    "choices": [
      "Tous les acides gras ont exactement le même point de fusion.",
      "Le point de fusion est la température de passage liquide-gaz.",
      "Le point de fusion diminue toujours quand la chaîne s’allonge.",
      "Deux saturés de longueurs différentes peuvent avoir des points de fusion différents."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Le point de fusion augmente avec le nombre de carbones.",
    "choiceExplanations": [
      "Faux. Faux : la structure le modifie.",
      "Faux. Faux : il s’agit du passage solide-liquide.",
      "Faux. Faux : il augmente.",
      "Vrai. La longueur influence cette propriété."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "melting-point-factors"
    }
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à désaturation et état physique :",
    "choices": [
      "L’acide oléique est solide à toute température.",
      "Un 18:0 est plus désaturé qu’un 18:1.",
      "Les saturés de moins de 5 carbones sont liquides à température ambiante.",
      "L’état physique ne dépend jamais de la structure."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Les doubles liaisons abaissent le point de fusion.",
    "choiceExplanations": [
      "Faux. Faux : il est liquide à température ambiante.",
      "Faux. Faux : le 18:0 est saturé.",
      "Vrai. La fiche le précise.",
      "Faux. Faux : longueur et doubles liaisons interviennent."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "melting-point-factors"
    }
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à estérification :",
    "choices": [
      "L’estérification est absente des systèmes biologiques.",
      "L’estérification fait réagir une fonction acide avec une fonction alcool.",
      "L’estérification forme obligatoirement une amine.",
      "La réaction détruit tous les carbones de la chaîne."
    ],
    "correctChoiceIndexes": [
      1
    ],
    "explanation": "L’acide gras réagit avec un alcool pour former un ester et de l’eau.",
    "choiceExplanations": [
      "Faux. Faux : elle est dite fréquente in vivo.",
      "Vrai. Ce sont les deux fonctions impliquées.",
      "Faux. Faux : elle forme un ester.",
      "Faux. Faux : la chaîne est conservée."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-reactions"
    }
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à réactions des désaturés :",
    "choices": [
      "La réduction de l’acide oléique peut donner l’acide stéarique.",
      "L’isomérisation cis-trans change le nombre total de carbones.",
      "L’acide élaïdique est la forme cis de l’oléique.",
      "La réduction augmente le nombre de doubles liaisons."
    ],
    "correctChoiceIndexes": [
      0
    ],
    "explanation": "Cis-trans, réduction et oxydation sont présentées parmi les propriétés chimiques.",
    "choiceExplanations": [
      "Vrai. Le 18:1 devient 18:0.",
      "Faux. Faux : elle change la géométrie.",
      "Faux. Faux : il est la forme trans.",
      "Faux. Faux : elle le diminue."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-reactions"
    }
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à rôles biologiques et trans :",
    "choices": [
      "L’acide arachidonique est présenté comme sans intérêt métabolique.",
      "Les produits transformés sont exclus des sources de trans.",
      "Les acides gras n’ont aucun rôle membranaire.",
      "Les acides gras participent à la structure des membranes cellulaires."
    ],
    "correctChoiceIndexes": [
      3
    ],
    "explanation": "Les acides gras ont des rôles structuraux, énergétiques et métaboliques.",
    "choiceExplanations": [
      "Faux. Faux : il est précurseur.",
      "Faux. Faux : ils sont cités.",
      "Faux. Faux : un rôle structural est cité.",
      "Vrai. Le rôle structural est cité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "cis-trans-double-bond"
    }
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "answerFormat": "MULTIPLE",
    "question": "Parmi les propositions suivantes relatives à oméga 3 :",
    "choices": [
      "Ils sont décrits comme nuisibles au fonctionnement cérébral.",
      "L’EPA et le DHA sont classés dans la série ω9.",
      "Il est principalement retrouvé dans certaines huiles végétales.",
      "L’alimentation ne fournit aucun oméga 3."
    ],
    "correctChoiceIndexes": [
      2
    ],
    "explanation": "Le linolénique est un oméga 3 essentiel précurseur limité de l’EPA et du DHA.",
    "choiceExplanations": [
      "Faux. Faux : ils y sont importants.",
      "Faux. Faux : la voie les place dans la série n-3.",
      "Vrai. Cette origine est indiquée.",
      "Faux. Faux : elle reste la source principale."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "omega3-pathway"
    }
  }
];
