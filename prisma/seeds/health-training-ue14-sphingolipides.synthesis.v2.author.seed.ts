import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Sphingolipides — Synthèse — Sphingolipides */
export const UE14_BIOCH_CH7_SYNTHESIS_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 101,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède un squelette glycérol à trois carbones.",
        "correct": false,
        "explanation": "Elle possède une longue chaîne C18."
      },
      {
        "content": "Elle porte un alcool secondaire en C3.",
        "correct": true,
        "explanation": "Cet OH reste libre dans plusieurs sphingolipides majeurs."
      },
      {
        "content": "C1 porte l'acide gras du céramide par liaison amide.",
        "correct": false,
        "explanation": "L'acide gras est amidé sur l'amine de C2."
      },
      {
        "content": "C'est une base sphingoïde à 18 carbones.",
        "correct": true,
        "explanation": "La sphingosine constitue un squelette majeur des sphingolipides."
      },
      {
        "content": "C2 porte une fonction carboxylique.",
        "correct": false,
        "explanation": "C2 porte une amine."
      }
    ],
    "explanation": "La sphingosine est une base sphingoïde C18 portant notamment OH en C1/C3 et une amine en C2."
  },
  {
    "order": 102,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Entre quels carbones se situe la double liaison caractéristique de la sphingosine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "C4 et C5",
        "4 et 5",
        "entre C4 et C5",
        "C4-C5"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les fonctions de la sphingosine sont positionnelles : C1 tête polaire, C2 N-acylation, C3 alcool secondaire, C4-C5 double liaison trans."
  },
  {
    "order": 103,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le céramide ?",
    "choices": [
      {
        "content": "La longueur de la chaîne N-acyle varie selon l'espèce moléculaire.",
        "correct": true,
        "explanation": "Les chaînes longues et très longues sont fréquentes."
      },
      {
        "content": "L'acide gras est lié au C1 par une liaison O-glycosidique.",
        "correct": false,
        "explanation": "La liaison de l'acide gras est une amide en C2."
      },
      {
        "content": "Il contient obligatoirement une choline.",
        "correct": false,
        "explanation": "La choline caractérise notamment la sphingomyéline."
      },
      {
        "content": "Il ne peut servir de précurseur à aucun autre sphingolipide.",
        "correct": false,
        "explanation": "Il est un carrefour de biosynthèse et de catabolisme."
      },
      {
        "content": "Il est un triester du glycérol.",
        "correct": false,
        "explanation": "Cela décrit un triacylglycérol."
      }
    ],
    "explanation": "Le céramide est une base sphingoïde N-acylée ; la liaison amide en C2 est fondamentale."
  },
  {
    "order": 104,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la céramidase, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son action est l'une des étapes du catabolisme des sphingolipides.",
        "correct": true,
        "explanation": "Le céramide est un intermédiaire central."
      },
      {
        "content": "Elle transforme directement la sphingomyéline en phosphatidylcholine.",
        "correct": false,
        "explanation": "Ce n'est pas sa réaction."
      },
      {
        "content": "Elle coupe une liaison glycosidique de GM2.",
        "correct": false,
        "explanation": "Ce rôle relève d'autres hydrolases lysosomales."
      },
      {
        "content": "Elle est distincte de la sphingomyélinase.",
        "correct": true,
        "explanation": "La sphingomyélinase produit du céramide à partir de sphingomyéline."
      },
      {
        "content": "Elle hydrolyse la liaison amide du céramide.",
        "correct": true,
        "explanation": "Elle libère une base sphingoïde et un acide gras."
      }
    ],
    "explanation": "La céramidase hydrolyse la liaison amide du céramide."
  },
  {
    "order": 105,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les rôles des céramides, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Ils sont des intermédiaires du métabolisme des sphingolipides.",
        "correct": true,
        "explanation": "De nombreuses classes convergent ou divergent via le céramide."
      },
      {
        "content": "Ils participent à la barrière lipidique de l'épiderme.",
        "correct": true,
        "explanation": "Les céramides sont importants pour la cohésion et la limitation des pertes en eau."
      },
      {
        "content": "Ils ne peuvent jamais agir comme médiateurs.",
        "correct": false,
        "explanation": "Le céramide est bioactif."
      },
      {
        "content": "Ils sont uniquement des molécules de réserve énergétique adipocytaire.",
        "correct": false,
        "explanation": "Leur rôle principal n'est pas celui des TAG."
      },
      {
        "content": "Ils sont chimiquement des polysaccharides.",
        "correct": false,
        "explanation": "Ce sont des sphingolipides."
      }
    ],
    "explanation": "Les céramides ont des rôles structuraux, métaboliques et de signalisation, notamment dans la barrière cutanée.",
    "requiredSelectionCount": 2
  },
  {
    "order": 106,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le céramide comme carrefour ?",
    "choices": [
      {
        "content": "Il peut servir de précurseur à la sphingomyéline.",
        "correct": true,
        "explanation": "Une tête phosphocholine peut être transférée sur C1."
      },
      {
        "content": "Le céramide n'a aucun lien métabolique avec la sphingomyéline.",
        "correct": false,
        "explanation": "Les deux sont directement interconvertibles par certaines voies."
      },
      {
        "content": "Il peut être formé par dégradation de la sphingomyéline.",
        "correct": true,
        "explanation": "Une sphingomyélinase libère du céramide."
      },
      {
        "content": "Sa dégradation peut redonner une base sphingoïde.",
        "correct": true,
        "explanation": "La céramidase hydrolyse la liaison amide."
      },
      {
        "content": "Il peut servir de précurseur à des glycosphingolipides.",
        "correct": true,
        "explanation": "Une tête glucidique est ajoutée en C1."
      }
    ],
    "explanation": "Le céramide est le noyau commun d'un grand nombre de sphingolipides complexes."
  },
  {
    "order": 107,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel carbone de la sphingosine est phosphorylé dans la sphingosine-1-phosphate ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "La S1P est une sphingosine phosphorylée en C1 et un médiateur bioactif ; sa dérégulation est impliquée dans diverses pathologies sans relation causale simpliste."
  },
  {
    "order": 108,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la sphingomyéline, laquelle est correcte ?",
    "choices": [
      {
        "content": "L'acide gras est relié à la sphingosine par une liaison ester.",
        "correct": false,
        "explanation": "Il est lié par une amide."
      },
      {
        "content": "Elle associe un céramide et une phosphocholine dans sa forme majeure chez les mammifères.",
        "correct": true,
        "explanation": "Le phosphate est porté sur l'alcool C1."
      },
      {
        "content": "Elle ne contient jamais de phosphate.",
        "correct": false,
        "explanation": "Le phosphate est caractéristique."
      },
      {
        "content": "Elle possède obligatoirement plusieurs oses en C1.",
        "correct": false,
        "explanation": "Cela décrit des glycosphingolipides."
      },
      {
        "content": "Elle est un glycérophospholipide à glycérol.",
        "correct": false,
        "explanation": "Son squelette est un céramide."
      }
    ],
    "explanation": "La sphingomyéline est un phosphosphingolipide à noyau céramide et tête phosphocholine."
  },
  {
    "order": 109,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la sphingomyélinase ?",
    "choices": [
      {
        "content": "Elle est une glycosidase digestive du lactose.",
        "correct": false,
        "explanation": "Aucun rapport."
      },
      {
        "content": "Elle est distincte de la céramidase.",
        "correct": true,
        "explanation": "La céramidase agit en aval sur le céramide."
      },
      {
        "content": "Elle produit du glycogène.",
        "correct": false,
        "explanation": "Elle agit sur un sphingolipide."
      },
      {
        "content": "Elle hydrolyse directement le céramide en sphingosine.",
        "correct": false,
        "explanation": "Cela décrit la céramidase."
      },
      {
        "content": "Son activité relie structure membranaire et signalisation par le céramide.",
        "correct": true,
        "explanation": "Le produit céramide est bioactif."
      }
    ],
    "explanation": "La sphingomyélinase transforme la sphingomyéline en céramide."
  },
  {
    "order": 110,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le premier ose est lié par une liaison O-glycosidique au C1 du céramide.",
        "correct": true,
        "explanation": "La liaison est classiquement bêta."
      },
      {
        "content": "Ils sont des constituants de membranes cellulaires.",
        "correct": true,
        "explanation": "Ils sont particulièrement importants dans le système nerveux et pour la reconnaissance cellulaire."
      },
      {
        "content": "Ils ne peuvent contenir qu'un seul ose.",
        "correct": false,
        "explanation": "Les gangliosides portent des oligosaccharides."
      },
      {
        "content": "Elle est présente dans le système nerveux central et périphérique.",
        "correct": true,
        "explanation": "La myéline est riche en sphingolipides."
      },
      {
        "content": "Le seul rôle de la sphingomyéline est le stockage calorique.",
        "correct": false,
        "explanation": "C'est surtout un lipide membranaire."
      },
      {
        "content": "La démyélinisation accélère toujours la conduction.",
        "correct": false,
        "explanation": "Elle la ralentit ou la bloque."
      },
      {
        "content": "Son rôle est structural mais aussi lié à la signalisation membranaire.",
        "correct": true,
        "explanation": "Ses métabolites sont bioactifs."
      },
      {
        "content": "La myéline est constituée uniquement de protéines.",
        "correct": false,
        "explanation": "Elle contient une forte proportion de lipides."
      },
      {
        "content": "Une démyélinisation perturbe la conduction nerveuse.",
        "correct": true,
        "explanation": "La myéline facilite la conduction saltatoire."
      },
      {
        "content": "Le groupement glucidique est lié à l'amine C2 par une liaison peptidique.",
        "correct": false,
        "explanation": "Il est lié à l'OH C1."
      }
    ],
    "explanation": "La sphingomyéline est un sphingolipide membranaire important, notamment dans la gaine de myéline. Les glycosphingolipides associent un céramide à une tête glucidique liée au C1."
  },
  {
    "order": 111,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle porte un alcool primaire en C1.",
        "correct": true,
        "explanation": "C1 peut recevoir une tête phosphatée ou glucidique."
      },
      {
        "content": "C2 porte une fonction carboxylique.",
        "correct": false,
        "explanation": "C2 porte une amine."
      },
      {
        "content": "Elle est dépourvue d'azote.",
        "correct": false,
        "explanation": "Elle contient une fonction amine."
      },
      {
        "content": "Elle possède un squelette glycérol à trois carbones.",
        "correct": false,
        "explanation": "Elle possède une longue chaîne C18."
      },
      {
        "content": "Elle porte un alcool secondaire en C3.",
        "correct": true,
        "explanation": "Cet OH reste libre dans plusieurs sphingolipides majeurs."
      }
    ],
    "explanation": "La sphingosine est une base sphingoïde C18 portant notamment OH en C1/C3 et une amine en C2."
  },
  {
    "order": 112,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Entre quels carbones se situe la double liaison caractéristique de la sphingosine ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "C4 et C5",
        "4 et 5",
        "entre C4 et C5",
        "C4-C5"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les fonctions de la sphingosine sont positionnelles : C1 tête polaire, C2 N-acylation, C3 alcool secondaire, C4-C5 double liaison trans."
  },
  {
    "order": 113,
    "difficulty": "HARD",
    "format": "QRP",
    "question": "Concernant le céramide, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "L'acide gras est lié au C1 par une liaison O-glycosidique.",
        "correct": false,
        "explanation": "La liaison de l'acide gras est une amide en C2."
      },
      {
        "content": "Le céramide sert d'intermédiaire métabolique et de molécule bioactive.",
        "correct": true,
        "explanation": "Il participe aussi à l'organisation membranaire."
      },
      {
        "content": "Il contient obligatoirement une choline.",
        "correct": false,
        "explanation": "La choline caractérise notamment la sphingomyéline."
      },
      {
        "content": "Il associe une base sphingoïde et un acide gras.",
        "correct": true,
        "explanation": "Le céramide est le noyau de nombreux sphingolipides."
      },
      {
        "content": "Il ne peut servir de précurseur à aucun autre sphingolipide.",
        "correct": false,
        "explanation": "Il est un carrefour de biosynthèse et de catabolisme."
      }
    ],
    "explanation": "Le céramide est une base sphingoïde N-acylée ; la liaison amide en C2 est fondamentale.",
    "requiredSelectionCount": 2
  },
  {
    "order": 114,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la céramidase, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle ajoute un acide gras au céramide.",
        "correct": false,
        "explanation": "Elle hydrolyse le céramide."
      },
      {
        "content": "Elle est synonyme de phospholipase A2.",
        "correct": false,
        "explanation": "Ce sont des enzymes différentes."
      },
      {
        "content": "Elle est distincte de la sphingomyélinase.",
        "correct": true,
        "explanation": "La sphingomyélinase produit du céramide à partir de sphingomyéline."
      },
      {
        "content": "Elle hydrolyse la liaison amide du céramide.",
        "correct": true,
        "explanation": "Elle libère une base sphingoïde et un acide gras."
      },
      {
        "content": "Elle agit sur une liaison N-acyle.",
        "correct": true,
        "explanation": "Cette liaison associe acide gras et sphingosine."
      }
    ],
    "explanation": "La céramidase hydrolyse la liaison amide du céramide."
  },
  {
    "order": 115,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle enzyme est déficiente dans la maladie de Fabry ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "alpha-galactosidase A",
        "α-galactosidase A",
        "GLA"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La maladie de Fabry est due à un déficit en alpha-galactosidase A."
  },
  {
    "order": 116,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le céramide comme carrefour ?",
    "choices": [
      {
        "content": "Il peut être formé par dégradation de la sphingomyéline.",
        "correct": true,
        "explanation": "Une sphingomyélinase libère du céramide."
      },
      {
        "content": "Il peut servir de précurseur à la sphingomyéline.",
        "correct": true,
        "explanation": "Une tête phosphocholine peut être transférée sur C1."
      },
      {
        "content": "Sa dégradation peut redonner une base sphingoïde.",
        "correct": true,
        "explanation": "La céramidase hydrolyse la liaison amide."
      },
      {
        "content": "Il peut servir de précurseur à des glycosphingolipides.",
        "correct": true,
        "explanation": "Une tête glucidique est ajoutée en C1."
      },
      {
        "content": "Il ne peut jamais recevoir de tête glucidique.",
        "correct": false,
        "explanation": "Les glycosphingolipides en dérivent."
      }
    ],
    "explanation": "Le céramide est le noyau commun d'un grand nombre de sphingolipides complexes."
  },
  {
    "order": 117,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel carbone de la sphingosine est phosphorylé dans la sphingosine-1-phosphate ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "La S1P est une sphingosine phosphorylée en C1 et un médiateur bioactif ; sa dérégulation est impliquée dans diverses pathologies sans relation causale simpliste."
  },
  {
    "order": 118,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Elle ne contient jamais de phosphate.",
        "correct": false,
        "explanation": "Le phosphate est caractéristique."
      },
      {
        "content": "Elle est une maladie de surcharge lysosomale en glucosylcéramide.",
        "correct": false,
        "explanation": "Cela décrit Gaucher."
      },
      {
        "content": "La tête phosphatée est reliée au C1 par une liaison phosphodiester.",
        "correct": true,
        "explanation": "Le céramide fournit le squelette hydrophobe."
      },
      {
        "content": "Elle possède obligatoirement plusieurs oses en C1.",
        "correct": false,
        "explanation": "Cela décrit des glycosphingolipides."
      },
      {
        "content": "Elle appartient aux phosphosphingolipides.",
        "correct": true,
        "explanation": "Elle contient un phosphate mais pas de squelette glycérol."
      },
      {
        "content": "Elle est un constituant membranaire important.",
        "correct": true,
        "explanation": "Elle est particulièrement abondante dans la myéline."
      },
      {
        "content": "Elle est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "C'est une maladie inflammatoire démyélinisante du système nerveux central.",
        "correct": true,
        "explanation": "La myéline et les axones peuvent être lésés."
      },
      {
        "content": "La perte de myéline perturbe la conduction de l'influx nerveux.",
        "correct": true,
        "explanation": "Les voies neurologiques deviennent moins efficaces."
      },
      {
        "content": "Elle est un glycérophospholipide à glycérol.",
        "correct": false,
        "explanation": "Son squelette est un céramide."
      }
    ],
    "explanation": "La sphingomyéline est un phosphosphingolipide à noyau céramide et tête phosphocholine. La sclérose en plaques sert de contexte clinique de démyélinisation, distinct des sphingolipidoses enzymatiques."
  },
  {
    "order": 119,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle enzyme est déficiente dans la maladie de Krabbe ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "galactocérébrosidase",
        "galactocerebrosidase",
        "GALC",
        "galactosylcéramidase"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Krabbe est due à un déficit en GALC et s'accompagne notamment d'une accumulation de psychosine."
  },
  {
    "order": 120,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle structure nerveuse est particulièrement riche en sphingomyéline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "gaine de myéline",
        "myéline",
        "la myéline"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "La sphingomyéline est un sphingolipide membranaire important, notamment dans la gaine de myéline."
  },
  {
    "order": 121,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle enzyme est déficiente dans la maladie de Tay-Sachs ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "bêta-hexosaminidase A",
        "beta-hexosaminidase A",
        "hexosaminidase A",
        "Hex A",
        "HEXA"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Tay-Sachs est due à un déficit en hexosaminidase A, nécessaire au catabolisme de GM2."
  },
  {
    "order": 122,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la tête phosphoéthanolamine de sphingolipides ?",
    "choices": [
      {
        "content": "La présence d'un phosphate distingue les phosphosphingolipides des glycosphingolipides.",
        "correct": true,
        "explanation": "La tête polaire n'est alors pas glucidique."
      },
      {
        "content": "Les glycosphingolipides contiennent nécessairement un phosphate.",
        "correct": false,
        "explanation": "Ils sont définis par une tête glucidique."
      },
      {
        "content": "L'éthanolamine est un aminoalcool.",
        "correct": true,
        "explanation": "Elle peut être liée via un phosphate."
      },
      {
        "content": "L'éthanolamine est un monosaccharide.",
        "correct": false,
        "explanation": "C'est un aminoalcool."
      },
      {
        "content": "Une phosphoéthanolamine peut constituer une tête phosphatée de certains sphingolipides.",
        "correct": true,
        "explanation": "Elle est moins classique que la phosphocholine dans la sphingomyéline mammalienne."
      }
    ],
    "explanation": "Les phosphosphingolipides portent une tête phosphatée sur un noyau céramide ; la phosphocholine domine classiquement chez les mammifères."
  }
];
