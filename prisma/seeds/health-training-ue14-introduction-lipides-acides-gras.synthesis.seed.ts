import type { SeedQuestion, SeedQuiz } from './health-training-ue14.shared';

export const SYNTHESIS_SECTION_ORDER = 5;

export const SYNTHESIS_THEME_LABELS_BY_ORDER: Record<number, string[]> = {
  "121": [
    "Classification transversale"
  ],
  "122": [
    "Structure et numérotation"
  ],
  "123": [
    "Saturés de référence"
  ],
  "124": [
    "Longueurs de chaîne"
  ],
  "125": [
    "Notations Δ et ω"
  ],
  "126": [
    "Mono- et polydésaturés"
  ],
  "127": [
    "Acides gras essentiels"
  ],
  "128": [
    "Propriétés physiques"
  ],
  "129": [
    "Réactions chimiques"
  ],
  "130": [
    "Rôles et santé"
  ],
  "131": [
    "Classification transversale"
  ],
  "132": [
    "Structure et numérotation"
  ],
  "133": [
    "Saturés de référence"
  ],
  "134": [
    "Longueurs de chaîne"
  ],
  "135": [
    "Notations Δ et ω"
  ],
  "136": [
    "Mono- et polydésaturés"
  ],
  "137": [
    "Acides gras essentiels"
  ],
  "138": [
    "Propriétés physiques"
  ],
  "139": [
    "Réactions chimiques"
  ],
  "140": [
    "Rôles et santé"
  ]
};

export const SYNTHESIS_QUIZZES: SeedQuiz[] = [
  {
    "order": 1,
    "slug": "synthese-structures-nomenclature-proprietes",
    "title": "Structures, nomenclature et propriétés",
    "description": "Synthèse transversale de l’ensemble du chapitre.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Structure et nomenclature",
        "sharedStatement": "Les questions suivantes mobilisent les repères structuraux et les notations.",
        "questionOrders": [
          121,
          122,
          123,
          124
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés et transformations",
        "sharedStatement": "Les questions suivantes relient structure, comportement et réactions.",
        "questionOrders": [
          125,
          126,
          127
        ]
      },
      {
        "type": "GROUP",
        "title": "Biologie et santé",
        "sharedStatement": "Les questions suivantes portent sur les rôles biologiques et nutritionnels.",
        "questionOrders": [
          128,
          129,
          130
        ]
      }
    ]
  },
  {
    "order": 2,
    "slug": "synthese-raisonnement-transversal",
    "title": "Raisonnement transversal",
    "description": "Synthèse transversale de l’ensemble du chapitre.",
    "stage": "MASTER",
    "sectionOrder": 5,
    "items": [
      {
        "type": "GROUP",
        "title": "Structure et nomenclature",
        "sharedStatement": "Les questions suivantes mobilisent les repères structuraux et les notations.",
        "questionOrders": [
          131,
          132,
          133,
          134
        ]
      },
      {
        "type": "GROUP",
        "title": "Propriétés et transformations",
        "sharedStatement": "Les questions suivantes relient structure, comportement et réactions.",
        "questionOrders": [
          135,
          136,
          137
        ]
      },
      {
        "type": "GROUP",
        "title": "Biologie et santé",
        "sharedStatement": "Les questions suivantes portent sur les rôles biologiques et nutritionnels.",
        "questionOrders": [
          138,
          139,
          140
        ]
      }
    ]
  }
];

export const SYNTHESIS_QUESTIONS: SeedQuestion[] = [
  {
    "order": 121,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de classification transversale :",
    "choices": [
      "Les acides gras sont classés parmi les lipides simples.",
      "Les sphingolipides sont des glycérides.",
      "Les phospholipides sont classés parmi les lipides complexes.",
      "Les acides gras sont exclus des lipides."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "La classification situe les acides gras parmi les lipides simples et les eicosanoïdes comme dérivés.",
    "choiceExplanations": [
      "Vrai. Ils figurent dans cette branche.",
      "Faux. Faux : ce sont des lipides complexes distincts.",
      "Vrai. Ils figurent dans cette branche.",
      "Faux. Faux : ils sont une famille de lipides simples."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lipid-classification"
    }
  },
  {
    "order": 122,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de structure et numérotation :",
    "choices": [
      "La formule générique d’un acide gras est R–NH₂.",
      "Le groupement COOH constitue la fonction acide.",
      "La chaîne R disparaît lors de la définition de l’acide gras.",
      "Il possède une longue chaîne carbonée."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Un acide gras possède une tête carboxylique hydrophile, une chaîne hydrophobe et des repères C1, α et ω.",
    "choiceExplanations": [
      "Faux. Faux : la formule est R–COOH.",
      "Vrai. Il s’agit de la fonction carboxylique.",
      "Faux. Faux : elle est une partie structurale majeure.",
      "Vrai. La chaîne R est une caractéristique essentielle."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "carbon-numbering"
    }
  },
  {
    "order": 123,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de saturés de référence :",
    "choices": [
      "Il est l’un des acides gras saturés abondants chez les mammifères.",
      "L’acide stéarique possède 16 carbones.",
      "Son nom systématique est acide hexadécanoïque.",
      "Son nom systématique est acide octadécanoïque."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Palmitique et stéarique sont les saturés 16:0 et 18:0.",
    "choiceExplanations": [
      "Vrai. La fiche le cite.",
      "Faux. Faux : il en possède 18.",
      "Vrai. C’est le nom donné.",
      "Faux. Faux : ce nom correspond au stéarique."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 124,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de longueurs de chaîne :",
    "choices": [
      "6:0 correspond à l’acide oléique.",
      "Une très longue chaîne comporte plus de 20 carbones.",
      "La longueur ne sert jamais à classer les acides gras.",
      "4:0 correspond à l’acide butyrique ou butanoïque."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les intervalles et noms du tableau permettent de classer les saturés.",
    "choiceExplanations": [
      "Faux. Faux : l’oléique est 18:1.",
      "Vrai. C’est le seuil donné.",
      "Faux. Faux : c’est un critère majeur.",
      "Vrai. Cette correspondance figure dans le tableau."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 125,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de notations δ et ω :",
    "choices": [
      "La position indiquée est celle du premier carbone impliqué dans la double liaison.",
      "La série ω se compte depuis le COOH.",
      "On repère la première double liaison rencontrée depuis cette extrémité.",
      "Un 18:1 Δ9 appartient à la série ω18."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Les repères Δ et ω décrivent les positions depuis des extrémités opposées.",
    "choiceExplanations": [
      "Vrai. La fiche le précise.",
      "Faux. Faux : elle part du méthyle terminal.",
      "Vrai. C’est la définition de la série.",
      "Faux. Faux : il appartient à ω9."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 126,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de mono- et polydésaturés :",
    "choices": [
      "Il appartient à la série ω7.",
      "Sa double liaison est en position Δ9.",
      "Il est polydésaturé à trois doubles liaisons.",
      "L’acide oléique possède 18 carbones."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Oléique, palmitoléique, linoléique et linolénique illustrent plusieurs notations.",
    "choiceExplanations": [
      "Faux. Faux : il appartient à ω9.",
      "Vrai. La position est donnée.",
      "Faux. Faux : il est monodésaturé.",
      "Vrai. Le symbole commence par 18."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "oleic-palmitoleic"
    }
  },
  {
    "order": 127,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de acides gras essentiels :",
    "choices": [
      "La source principale des oméga 3 reste alimentaire.",
      "Ils sont décrits comme nuisibles au fonctionnement cérébral.",
      "Il est principalement retrouvé dans certaines huiles végétales.",
      "L’acide linolénique est un saturé 18:0."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Linoléique et linolénique doivent être apportés par l’alimentation.",
    "choiceExplanations": [
      "Vrai. La fiche le conclut.",
      "Faux. Faux : ils y sont importants.",
      "Vrai. Cette origine est indiquée.",
      "Faux. Faux : il est 18:3 n-3."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 128,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de propriétés physiques :",
    "choices": [
      "La chaîne hydrophobe se dissout entièrement dans l’eau.",
      "Ils sont solubles dans l’éther.",
      "Le benzène est cité comme solvant aqueux.",
      "La chaîne carbonée contribue à l’hydrophobie."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Densité, solubilité, interfaces et fusion dépendent de la structure.",
    "choiceExplanations": [
      "Faux. Faux : elle évite l’eau.",
      "Vrai. Ce solvant organique est cité.",
      "Faux. Faux : il s’agit d’un solvant organique.",
      "Vrai. Elle s’oppose à l’hydrosolubilité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "melting-point-factors"
    }
  },
  {
    "order": 129,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de réactions chimiques :",
    "choices": [
      "L’oxydation des désaturés peut intervenir dans des processus pathologiques.",
      "La réduction augmente le nombre de doubles liaisons.",
      "L’estérification fait réagir une fonction acide avec une fonction alcool.",
      "Aucun alcool n’intervient."
    ],
    "correctChoiceIndexes": [
      0,
      2
    ],
    "explanation": "Estérification, isomérisation, réduction et oxydation sont présentées.",
    "choiceExplanations": [
      "Vrai. La fiche le précise.",
      "Faux. Faux : elle le diminue.",
      "Vrai. Ce sont les deux fonctions impliquées.",
      "Faux. Faux : une fonction alcool réagit."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-reactions"
    }
  },
  {
    "order": 130,
    "difficulty": "EASY",
    "answerFormat": "MULTIPLE",
    "question": "À propos de rôles et santé :",
    "choices": [
      "L’EPA et le DHA sont classés dans la série ω9.",
      "Des propriétés anti-inflammatoires et une protection cardiovasculaire sont citées.",
      "Ils ne peuvent jamais fournir d’énergie.",
      "La source principale des oméga 3 reste alimentaire."
    ],
    "correctChoiceIndexes": [
      1,
      3
    ],
    "explanation": "Les rôles biologiques, les trans et les oméga 3 relient biochimie et santé.",
    "choiceExplanations": [
      "Faux. Faux : la voie les place dans la série n-3.",
      "Vrai. Ces bénéfices sont indiqués.",
      "Faux. Faux : leur oxydation en libère.",
      "Vrai. La fiche le conclut."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "omega3-pathway"
    }
  },
  {
    "order": 131,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant classification transversale :",
    "choices": [
      "Les sphingolipides sont classés parmi les lipides complexes.",
      "Les eicosanoïdes sont rattachés aux protéines.",
      "Les eicosanoïdes sont présentés comme des dérivés d’acides gras.",
      "Les glycérides sont classés parmi les lipides simples."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "La classification situe les acides gras parmi les lipides simples et les eicosanoïdes comme dérivés.",
    "choiceExplanations": [
      "Vrai. Ils figurent dans cette branche.",
      "Faux. Faux : ils dérivent d’acides gras.",
      "Vrai. Le schéma les rattache aux acides gras.",
      "Vrai. Ils figurent dans cette branche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "lipid-classification"
    }
  },
  {
    "order": 132,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant structure et numérotation :",
    "choices": [
      "Le groupement COOH est la partie exclusivement hydrophobe.",
      "La fonction acide correspond au pôle hydrophile.",
      "Sa formule générique peut s’écrire R–COOH.",
      "La chaîne R contribue au caractère « gras »."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Un acide gras possède une tête carboxylique hydrophile, une chaîne hydrophobe et des repères C1, α et ω.",
    "choiceExplanations": [
      "Faux. Faux : il forme le pôle hydrophile.",
      "Vrai. Elle est dite mouillable.",
      "Vrai. C’est la formule donnée.",
      "Vrai. La fiche relie la chaîne à l’insolubilité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "carbon-numbering"
    }
  },
  {
    "order": 133,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant saturés de référence :",
    "choices": [
      "Son symbole est 18:0.",
      "Il appartient aux acides gras à longue chaîne.",
      "L’acide stéarique possède 18 carbones.",
      "Il appartient aux très longues chaînes."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Palmitique et stéarique sont les saturés 16:0 et 18:0.",
    "choiceExplanations": [
      "Vrai. Il ne possède aucune double liaison.",
      "Vrai. La classe 16–20 carbones est longue.",
      "Vrai. Le premier nombre de 18:0 l’indique.",
      "Faux. Faux : 16 carbones est une longue chaîne."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "palmitic-stearic"
    }
  },
  {
    "order": 134,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant longueurs de chaîne :",
    "choices": [
      "18:0 appartient aux longues chaînes.",
      "6:0 correspond à l’acide caproïque ou hexanoïque.",
      "4:0 correspond à l’acide stéarique.",
      "8:0 correspond à l’acide caprylique ou octanoïque."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Les intervalles et noms du tableau permettent de classer les saturés.",
    "choiceExplanations": [
      "Vrai. Dix-huit est compris entre 16 et 20.",
      "Vrai. Cette correspondance figure dans le tableau.",
      "Faux. Faux : le stéarique est 18:0.",
      "Vrai. Cette correspondance figure dans le tableau."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "saturated-chain-lengths"
    }
  },
  {
    "order": 135,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant notations δ et ω :",
    "choices": [
      "La notation n-9 est équivalente à ω9.",
      "La notation n-9 signifie neuf doubles liaisons.",
      "La série est couramment employée en nutrition.",
      "Le comptage de la série ω part du carbone oméga."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Les repères Δ et ω décrivent les positions depuis des extrémités opposées.",
    "choiceExplanations": [
      "Vrai. Les deux notations sont utilisées.",
      "Faux. Faux : elle indique la série.",
      "Vrai. La fiche le souligne.",
      "Vrai. C’est l’origine du repère."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "delta-omega-numbering"
    }
  },
  {
    "order": 136,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant mono- et polydésaturés :",
    "choices": [
      "Il possède 16 carbones.",
      "Son nom systématique est acide cis-9-octadécamonoénoïque.",
      "Il possède une double liaison.",
      "Il appartient à la série ω9 ou n-9."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Oléique, palmitoléique, linoléique et linolénique illustrent plusieurs notations.",
    "choiceExplanations": [
      "Faux. Faux : il en possède 18.",
      "Vrai. C’est le nom indiqué.",
      "Vrai. Le symbole contient :1.",
      "Vrai. 18 − 9 = 9."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "oleic-palmitoleic"
    }
  },
  {
    "order": 137,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant acides gras essentiels :",
    "choices": [
      "Des propriétés anti-inflammatoires et une protection cardiovasculaire sont citées.",
      "Une conversion limitée peut conduire à l’EPA puis au DHA.",
      "Les oméga 3 sont importants pour le développement et le fonctionnement cérébral.",
      "Les oméga 3 sont présentés comme exclusivement pro-inflammatoires."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      2
    ],
    "explanation": "Linoléique et linolénique doivent être apportés par l’alimentation.",
    "choiceExplanations": [
      "Vrai. Ces bénéfices sont indiqués.",
      "Vrai. La voie représentée le montre.",
      "Vrai. Ces rôles sont cités.",
      "Faux. Faux : des propriétés anti-inflammatoires sont citées."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "linoleic-linolenic"
    }
  },
  {
    "order": 138,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant propriétés physiques :",
    "choices": [
      "Ils sont solubles dans le chloroforme.",
      "Ils peuvent former une couche monomoléculaire à la surface de l’eau.",
      "La présence de COOH garantit une solubilité totale quelle que soit la chaîne.",
      "Leur tête hydrophile peut se placer au contact de l’eau."
    ],
    "correctChoiceIndexes": [
      0,
      1,
      3
    ],
    "explanation": "Densité, solubilité, interfaces et fusion dépendent de la structure.",
    "choiceExplanations": [
      "Vrai. Ce solvant organique est cité.",
      "Vrai. Ce comportement est représenté.",
      "Faux. Faux : la chaîne longue domine le comportement.",
      "Vrai. Cette orientation est cohérente avec le schéma."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "melting-point-factors"
    }
  },
  {
    "order": 139,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant réactions chimiques :",
    "choices": [
      "Le produit comporte une fonction ester.",
      "L’estérification forme obligatoirement une amine.",
      "Une molécule d’eau est libérée dans le bilan présenté.",
      "Les maladies cardiovasculaires sont citées à propos de l’oxydation."
    ],
    "correctChoiceIndexes": [
      0,
      2,
      3
    ],
    "explanation": "Estérification, isomérisation, réduction et oxydation sont présentées.",
    "choiceExplanations": [
      "Vrai. C’est le produit caractéristique.",
      "Faux. Faux : elle forme un ester.",
      "Vrai. H₂O figure parmi les produits.",
      "Vrai. Elles figurent dans la fiche."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "fatty-acid-reactions"
    }
  },
  {
    "order": 140,
    "difficulty": "MEDIUM",
    "answerFormat": "MULTIPLE",
    "question": "Concernant rôles et santé :",
    "choices": [
      "Les acides gras n’ont aucun rôle membranaire.",
      "Leur oxydation peut libérer de l’énergie.",
      "Les oméga 3 sont importants pour le développement et le fonctionnement cérébral.",
      "Les acides gras participent à la structure des membranes cellulaires."
    ],
    "correctChoiceIndexes": [
      1,
      2,
      3
    ],
    "explanation": "Les rôles biologiques, les trans et les oméga 3 relient biochimie et santé.",
    "choiceExplanations": [
      "Faux. Faux : un rôle structural est cité.",
      "Vrai. Le rôle énergétique est cité.",
      "Vrai. Ces rôles sont cités.",
      "Vrai. Le rôle structural est cité."
    ],
    "questionDiagram": {
      "type": "lipid",
      "diagram": "omega3-pathway"
    }
  }
];
