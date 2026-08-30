import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Sphingolipides — Section A — Sphingosine et céramides */
export const UE14_BIOCH_CH7_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la sphingosine, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle possède un squelette glycérol à trois carbones.",
        "correct": false,
        "explanation": "Elle possède une longue chaîne C18."
      },
      {
        "content": "C1 porte l'acide gras du céramide par liaison amide.",
        "correct": false,
        "explanation": "L'acide gras est amidé sur l'amine de C2."
      },
      {
        "content": "Elle est dépourvue d'azote.",
        "correct": false,
        "explanation": "Elle contient une fonction amine."
      },
      {
        "content": "Elle porte un alcool primaire en C1.",
        "correct": true,
        "explanation": "C1 peut recevoir une tête phosphatée ou glucidique."
      },
      {
        "content": "Elle porte une fonction amine en C2.",
        "correct": true,
        "explanation": "Cette amine forme la liaison amide du céramide."
      }
    ],
    "explanation": "La sphingosine est une base sphingoïde C18 portant notamment OH en C1/C3 et une amine en C2."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les fonctions de la sphingosine, laquelle est correcte ?",
    "choices": [
      {
        "content": "C1 porte la fonction amine.",
        "correct": false,
        "explanation": "L'amine est en C2."
      },
      {
        "content": "La double liaison caractéristique est entre C1 et C2.",
        "correct": false,
        "explanation": "Elle est classiquement C4-C5."
      },
      {
        "content": "C3 est obligatoirement estérifié par un phosphate dans tous les sphingolipides.",
        "correct": false,
        "explanation": "Ce n'est pas une règle des classes étudiées."
      },
      {
        "content": "C3 porte un alcool secondaire.",
        "correct": true,
        "explanation": "Il n'est pas la position principale de fixation des têtes étudiées."
      },
      {
        "content": "C2 porte l'alcool primaire.",
        "correct": false,
        "explanation": "L'alcool primaire est en C1."
      }
    ],
    "explanation": "Les fonctions de la sphingosine sont positionnelles : C1 tête polaire, C2 N-acylation, C3 alcool secondaire, C4-C5 double liaison trans."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de carbones comporte la sphingosine classique ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "La sphingosine de référence est une base sphingoïde C18."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la céramidase, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son action est l'une des étapes du catabolisme des sphingolipides.",
        "correct": true,
        "explanation": "Le céramide est un intermédiaire central."
      },
      {
        "content": "Elle coupe une liaison glycosidique de GM2.",
        "correct": false,
        "explanation": "Ce rôle relève d'autres hydrolases lysosomales."
      },
      {
        "content": "Elle transforme directement la sphingomyéline en phosphatidylcholine.",
        "correct": false,
        "explanation": "Ce n'est pas sa réaction."
      },
      {
        "content": "Elle agit sur une liaison N-acyle.",
        "correct": true,
        "explanation": "Cette liaison associe acide gras et sphingosine."
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
    "order": 5,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les rôles des céramides, laquelle est correcte ?",
    "choices": [
      {
        "content": "Ils participent à la barrière lipidique de l'épiderme.",
        "correct": true,
        "explanation": "Les céramides sont importants pour la cohésion et la limitation des pertes en eau."
      },
      {
        "content": "Ils sont chimiquement des polysaccharides.",
        "correct": false,
        "explanation": "Ce sont des sphingolipides."
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
        "content": "Ils sont absents de la peau.",
        "correct": false,
        "explanation": "Ils sont importants dans la barrière cutanée."
      }
    ],
    "explanation": "Les céramides ont des rôles structuraux, métaboliques et de signalisation, notamment dans la barrière cutanée."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant le céramide comme carrefour, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "Il est obligatoirement terminé par un ganglioside GM2.",
        "correct": false,
        "explanation": "Les têtes sont très diverses."
      },
      {
        "content": "Sa dégradation produit exclusivement du glucose.",
        "correct": false,
        "explanation": "Elle libère notamment sphingosine et acide gras."
      },
      {
        "content": "Il ne peut jamais recevoir de tête glucidique.",
        "correct": false,
        "explanation": "Les glycosphingolipides en dérivent."
      },
      {
        "content": "Il peut être formé par dégradation de la sphingomyéline.",
        "correct": true,
        "explanation": "Une sphingomyélinase libère du céramide."
      },
      {
        "content": "Il peut servir de précurseur à la sphingomyéline.",
        "correct": true,
        "explanation": "Une tête phosphocholine peut être transférée sur C1."
      }
    ],
    "explanation": "Le céramide est le noyau commun d'un grand nombre de sphingolipides complexes.",
    "requiredSelectionCount": 2
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la sphingosine-1-phosphate, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle est produite par une hexosaminidase.",
        "correct": false,
        "explanation": "Elle est produite par une sphingosine kinase."
      },
      {
        "content": "Elle résulte de la phosphorylation de la sphingosine en C1.",
        "correct": true,
        "explanation": "Une sphingosine kinase catalyse cette réaction."
      },
      {
        "content": "Elle intervient dans la survie, la migration et d'autres réponses cellulaires.",
        "correct": true,
        "explanation": "Ses effets dépendent du contexte."
      },
      {
        "content": "Son équilibre avec céramide et sphingosine participe à la régulation cellulaire.",
        "correct": true,
        "explanation": "Le métabolisme sphingolipidique est dynamique."
      },
      {
        "content": "C'est un médiateur lipidique bioactif.",
        "correct": true,
        "explanation": "Elle agit notamment via des récepteurs spécifiques."
      }
    ],
    "explanation": "La S1P est une sphingosine phosphorylée en C1 et un médiateur bioactif ; sa dérégulation est impliquée dans diverses pathologies sans relation causale simpliste."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans une situation d'application, combien de carbones comporte la sphingosine classique ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "La sphingosine est une base sphingoïde C18 portant notamment OH en C1/C3 et une amine en C2."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les fonctions de la sphingosine ?",
    "choices": [
      {
        "content": "C1 porte la fonction amine.",
        "correct": false,
        "explanation": "L'amine est en C2."
      },
      {
        "content": "C3 est obligatoirement estérifié par un phosphate dans tous les sphingolipides.",
        "correct": false,
        "explanation": "Ce n'est pas une règle des classes étudiées."
      },
      {
        "content": "La sphingosine comporte classiquement une double liaison trans entre C4 et C5.",
        "correct": true,
        "explanation": "C'est un repère structural."
      },
      {
        "content": "C2 porte l'alcool primaire.",
        "correct": false,
        "explanation": "L'alcool primaire est en C1."
      },
      {
        "content": "La double liaison caractéristique est entre C1 et C2.",
        "correct": false,
        "explanation": "Elle est classiquement C4-C5."
      }
    ],
    "explanation": "Les fonctions de la sphingosine sont positionnelles : C1 tête polaire, C2 N-acylation, C3 alcool secondaire, C4-C5 double liaison trans."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le céramide, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le céramide sert d'intermédiaire métabolique et de molécule bioactive.",
        "correct": true,
        "explanation": "Il participe aussi à l'organisation membranaire."
      },
      {
        "content": "Il est un triester du glycérol.",
        "correct": false,
        "explanation": "Cela décrit un triacylglycérol."
      },
      {
        "content": "Il contient obligatoirement une choline.",
        "correct": false,
        "explanation": "La choline caractérise notamment la sphingomyéline."
      },
      {
        "content": "L'acide gras est lié par une liaison amide à l'amine de C2.",
        "correct": true,
        "explanation": "La fonction carboxyle de l'acide gras réagit avec l'amine."
      },
      {
        "content": "L'acide gras est lié au C1 par une liaison O-glycosidique.",
        "correct": false,
        "explanation": "La liaison de l'acide gras est une amide en C2."
      }
    ],
    "explanation": "Le céramide est une base sphingoïde N-acylée ; la liaison amide en C2 est fondamentale."
  },
  {
    "order": 11,
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
        "content": "Elle porte une fonction amine en C2.",
        "correct": true,
        "explanation": "Cette amine forme la liaison amide du céramide."
      },
      {
        "content": "Elle porte un alcool primaire en C1.",
        "correct": true,
        "explanation": "C1 peut recevoir une tête phosphatée ou glucidique."
      },
      {
        "content": "Elle est dépourvue d'azote.",
        "correct": false,
        "explanation": "Elle contient une fonction amine."
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
    "order": 12,
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
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant le céramide ?",
    "choices": [
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
        "content": "L'acide gras est lié au C1 par une liaison O-glycosidique.",
        "correct": false,
        "explanation": "La liaison de l'acide gras est une amide en C2."
      },
      {
        "content": "L'acide gras est lié par une liaison amide à l'amine de C2.",
        "correct": true,
        "explanation": "La fonction carboxyle de l'acide gras réagit avec l'amine."
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
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle liaison unit l'acide gras à l'amine C2 de la sphingosine dans un céramide ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "liaison amide",
        "amide"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le carboxyle de l'acide gras et l'amine C2 forment une liaison amide."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les rôles des céramides, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Ils participent à la barrière lipidique de l'épiderme.",
        "correct": true,
        "explanation": "Les céramides sont importants pour la cohésion et la limitation des pertes en eau."
      },
      {
        "content": "Ils participent à des voies de signalisation cellulaire.",
        "correct": true,
        "explanation": "Selon le contexte, ils peuvent favoriser différenciation, stress ou apoptose."
      },
      {
        "content": "Ils ne peuvent jamais agir comme médiateurs.",
        "correct": false,
        "explanation": "Le céramide est bioactif."
      },
      {
        "content": "Ils sont absents de la peau.",
        "correct": false,
        "explanation": "Ils sont importants dans la barrière cutanée."
      },
      {
        "content": "Ils sont uniquement des molécules de réserve énergétique adipocytaire.",
        "correct": false,
        "explanation": "Leur rôle principal n'est pas celui des TAG."
      }
    ],
    "explanation": "Les céramides ont des rôles structuraux, métaboliques et de signalisation, notamment dans la barrière cutanée.",
    "requiredSelectionCount": 2
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant le céramide comme carrefour ?",
    "choices": [
      {
        "content": "Sa dégradation produit exclusivement du glucose.",
        "correct": false,
        "explanation": "Elle libère notamment sphingosine et acide gras."
      },
      {
        "content": "Il peut servir de précurseur à la sphingomyéline.",
        "correct": true,
        "explanation": "Une tête phosphocholine peut être transférée sur C1."
      },
      {
        "content": "Il peut servir de précurseur à des glycosphingolipides.",
        "correct": true,
        "explanation": "Une tête glucidique est ajoutée en C1."
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
      }
    ],
    "explanation": "Le céramide est le noyau commun d'un grand nombre de sphingolipides complexes."
  },
  {
    "order": 17,
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
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant la sphingosine, laquelle est correcte ?",
    "choices": [
      {
        "content": "Elle possède un squelette glycérol à trois carbones.",
        "correct": false,
        "explanation": "Elle possède une longue chaîne C18."
      },
      {
        "content": "C1 porte l'acide gras du céramide par liaison amide.",
        "correct": false,
        "explanation": "L'acide gras est amidé sur l'amine de C2."
      },
      {
        "content": "Elle porte une fonction amine en C2.",
        "correct": true,
        "explanation": "Cette amine forme la liaison amide du céramide."
      },
      {
        "content": "Elle est dépourvue d'azote.",
        "correct": false,
        "explanation": "Elle contient une fonction amine."
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
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant les fonctions de la sphingosine ?",
    "choices": [
      {
        "content": "La double liaison caractéristique est entre C1 et C2.",
        "correct": false,
        "explanation": "Elle est classiquement C4-C5."
      },
      {
        "content": "C2 porte l'alcool primaire.",
        "correct": false,
        "explanation": "L'alcool primaire est en C1."
      },
      {
        "content": "C3 porte un alcool secondaire.",
        "correct": true,
        "explanation": "Il n'est pas la position principale de fixation des têtes étudiées."
      },
      {
        "content": "La sphingosine comporte classiquement une double liaison trans entre C4 et C5.",
        "correct": true,
        "explanation": "C'est un repère structural."
      },
      {
        "content": "C1 porte la fonction amine.",
        "correct": false,
        "explanation": "L'amine est en C2."
      }
    ],
    "explanation": "Les fonctions de la sphingosine sont positionnelles : C1 tête polaire, C2 N-acylation, C3 alcool secondaire, C4-C5 double liaison trans."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le céramide n'a aucun lien métabolique avec la sphingomyéline.",
        "correct": false,
        "explanation": "Les deux sont directement interconvertibles par certaines voies."
      },
      {
        "content": "Sa dégradation produit exclusivement du glucose.",
        "correct": false,
        "explanation": "Elle libère notamment sphingosine et acide gras."
      },
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
        "content": "Il ne peut jamais recevoir de tête glucidique.",
        "correct": false,
        "explanation": "Les glycosphingolipides en dérivent."
      },
      {
        "content": "L'acide gras est lié par une liaison amide à l'amine de C2.",
        "correct": true,
        "explanation": "La fonction carboxyle de l'acide gras réagit avec l'amine."
      },
      {
        "content": "Il peut servir de précurseur à la sphingomyéline.",
        "correct": true,
        "explanation": "Une tête phosphocholine peut être transférée sur C1."
      },
      {
        "content": "Il peut être formé par dégradation de la sphingomyéline.",
        "correct": true,
        "explanation": "Une sphingomyélinase libère du céramide."
      },
      {
        "content": "Il associe une base sphingoïde et un acide gras.",
        "correct": true,
        "explanation": "Le céramide est le noyau de nombreux sphingolipides."
      }
    ],
    "explanation": "Le céramide est une base sphingoïde N-acylée ; la liaison amide en C2 est fondamentale. Le céramide est le noyau commun d'un grand nombre de sphingolipides complexes."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant la céramidase, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Son action est l'une des étapes du catabolisme des sphingolipides.",
        "correct": true,
        "explanation": "Le céramide est un intermédiaire central."
      },
      {
        "content": "Elle agit sur une liaison N-acyle.",
        "correct": true,
        "explanation": "Cette liaison associe acide gras et sphingosine."
      },
      {
        "content": "Elle ajoute un acide gras au céramide.",
        "correct": false,
        "explanation": "Elle hydrolyse le céramide."
      },
      {
        "content": "Elle transforme directement la sphingomyéline en phosphatidylcholine.",
        "correct": false,
        "explanation": "Ce n'est pas sa réaction."
      },
      {
        "content": "Elle est distincte de la sphingomyélinase.",
        "correct": true,
        "explanation": "La sphingomyélinase produit du céramide à partir de sphingomyéline."
      }
    ],
    "explanation": "La céramidase hydrolyse la liaison amide du céramide."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel rôle cutané majeur est associé aux céramides ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "barrière cutanée",
        "barrière de l'épiderme",
        "cohésion et hydratation de la peau",
        "limitation des pertes en eau"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les céramides ont des rôles structuraux, métaboliques et de signalisation, notamment dans la barrière cutanée."
  }
];
