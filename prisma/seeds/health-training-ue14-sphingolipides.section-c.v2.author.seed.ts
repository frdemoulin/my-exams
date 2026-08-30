import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 Biochimie — Sphingolipides — Section C — Glycosphingolipides, cérébrosides et gangliosides */
export const UE14_BIOCH_CH7_SECTION_C_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 45,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les glycosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le premier ose est lié par une liaison O-glycosidique au C1 du céramide.",
        "correct": true,
        "explanation": "La liaison est classiquement bêta."
      },
      {
        "content": "Ils sont des triacylglycérols phosphorylés.",
        "correct": false,
        "explanation": "Leur noyau est un céramide."
      },
      {
        "content": "Ils ne peuvent contenir qu'un seul ose.",
        "correct": false,
        "explanation": "Les gangliosides portent des oligosaccharides."
      },
      {
        "content": "Ils possèdent tous obligatoirement un phosphate.",
        "correct": false,
        "explanation": "Ce serait un phosphosphingolipide."
      },
      {
        "content": "Ils ne portent pas de phosphate dans leur définition classique.",
        "correct": true,
        "explanation": "La tête est glucidique."
      }
    ],
    "explanation": "Les glycosphingolipides associent un céramide à une tête glucidique liée au C1."
  },
  {
    "order": 46,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les cérébrosides, laquelle est correcte ?",
    "choices": [
      {
        "content": "Le galactosylcéramide est absent de la myéline.",
        "correct": false,
        "explanation": "Il y est très abondant."
      },
      {
        "content": "Un cérébroside porte obligatoirement cinq oses.",
        "correct": false,
        "explanation": "Il n'en porte qu'un."
      },
      {
        "content": "Tous les cérébrosides sont des gangliosides.",
        "correct": false,
        "explanation": "Les gangliosides portent notamment un ou plusieurs acides sialiques."
      },
      {
        "content": "Le galactosylcéramide contient un galactose.",
        "correct": true,
        "explanation": "Il est particulièrement abondant dans la myéline."
      },
      {
        "content": "Le glucosylcéramide possède obligatoirement un phosphate.",
        "correct": false,
        "explanation": "Il n'en possède pas dans cette classe."
      }
    ],
    "explanation": "Les cérébrosides sont des monoglycosylcéramides ; GalCer est un composant majeur de la myéline."
  },
  {
    "order": 47,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel monosaccharide est porté par le glucosylcéramide ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "glucose",
        "un glucose"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le glucosylcéramide est un cérébroside et un précurseur majeur ; son accumulation caractérise Gaucher."
  },
  {
    "order": 48,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le galactosylcéramide, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La galactocérébrosidase participe à sa dégradation lysosomale.",
        "correct": true,
        "explanation": "Un déficit en GALC cause la maladie de Krabbe."
      },
      {
        "content": "Il est absent du système nerveux.",
        "correct": false,
        "explanation": "Il est abondant dans la myéline."
      },
      {
        "content": "Il est formé d'un céramide et d'un galactose.",
        "correct": true,
        "explanation": "C'est un cérébroside."
      },
      {
        "content": "Il est abondant dans la myéline.",
        "correct": true,
        "explanation": "Il joue un rôle structural dans le tissu nerveux."
      },
      {
        "content": "La maladie de Krabbe est due à une hexosaminidase A déficiente.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      }
    ],
    "explanation": "Le galactosylcéramide est un cérébroside de la myéline ; GALC et psychosine sont des repères essentiels de Krabbe."
  },
  {
    "order": 49,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant les gangliosides, laquelle est correcte ?",
    "choices": [
      {
        "content": "Ils sont particulièrement abondants dans les membranes neuronales.",
        "correct": true,
        "explanation": "Ils participent aux interactions de surface."
      },
      {
        "content": "Ils sont dépourvus de tout ose.",
        "correct": false,
        "explanation": "Ils possèdent une tête glucidique."
      },
      {
        "content": "Ils sont des phosphosphingolipides à choline.",
        "correct": false,
        "explanation": "Cela décrit la sphingomyéline."
      },
      {
        "content": "L'acide sialique est toujours fixé par une liaison ester à un hydroxyle.",
        "correct": false,
        "explanation": "La liaison dans les glycoconjugués est glycosidique."
      },
      {
        "content": "Ils sont tous électriquement neutres.",
        "correct": false,
        "explanation": "Les acides sialiques apportent une charge négative."
      }
    ],
    "explanation": "Les gangliosides sont des glycosphingolipides complexes contenant un ou plusieurs résidus d'acide sialique."
  },
  {
    "order": 50,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Concernant la nomenclature GM, GD, GT et GQ, sélectionnez exactement les deux affirmations exactes.",
    "choices": [
      {
        "content": "GM2 contient deux acides sialiques parce que son chiffre vaut 2.",
        "correct": false,
        "explanation": "GM2 est monosialylé."
      },
      {
        "content": "M, D, T et Q indiquent respectivement un, deux, trois ou quatre résidus d'acide sialique.",
        "correct": true,
        "explanation": "Cette partie du code est directement informative."
      },
      {
        "content": "M signifie trois acides sialiques.",
        "correct": false,
        "explanation": "M signifie mono."
      },
      {
        "content": "Le chiffre final distingue des structures au sein d'une même série.",
        "correct": true,
        "explanation": "Il ne doit pas être interprété comme un simple compteur universel du nombre total d'oses."
      },
      {
        "content": "Le chiffre final donne toujours exactement le nombre de monosaccharides.",
        "correct": false,
        "explanation": "La nomenclature historique est plus subtile."
      }
    ],
    "explanation": "Dans la nomenclature gangliosidique, M/D/T/Q encode le nombre d'acides sialiques ; le chiffre distingue les structures d'une série.",
    "requiredSelectionCount": 2
  },
  {
    "order": 51,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant GM3, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Sa structure de base peut être résumée comme céramide-glucose-galactose-acide sialique.",
        "correct": true,
        "explanation": "C'est un ganglioside relativement simple."
      },
      {
        "content": "GM3 contient trois acides sialiques.",
        "correct": false,
        "explanation": "La lettre M indique un seul acide sialique."
      },
      {
        "content": "Il dérive du lactosylcéramide par sialylation.",
        "correct": true,
        "explanation": "L'ajout d'un acide sialique produit GM3."
      },
      {
        "content": "GM3 est un monosialoganglioside.",
        "correct": true,
        "explanation": "Il contient un résidu d'acide sialique."
      },
      {
        "content": "Il sert de précurseur à des gangliosides plus complexes.",
        "correct": true,
        "explanation": "Des glycosyltransférases poursuivent l'élongation."
      }
    ],
    "explanation": "GM3 est un monosialoganglioside simple dérivé du lactosylcéramide."
  },
  {
    "order": 52,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans quelle maladie lysosomale le ganglioside GM2 s'accumule-t-il classiquement ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "Tay-Sachs",
        "maladie de Tay-Sachs",
        "Tay Sachs"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "GM2 est le ganglioside emblématique de Tay-Sachs, liée à un déficit d'hexosaminidase A."
  },
  {
    "order": 53,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation est correcte concernant les glycosphingolipides ?",
    "choices": [
      {
        "content": "Ils ne peuvent contenir qu'un seul ose.",
        "correct": false,
        "explanation": "Les gangliosides portent des oligosaccharides."
      },
      {
        "content": "Ils sont des triacylglycérols phosphorylés.",
        "correct": false,
        "explanation": "Leur noyau est un céramide."
      },
      {
        "content": "Le groupement glucidique est lié à l'amine C2 par une liaison peptidique.",
        "correct": false,
        "explanation": "Il est lié à l'OH C1."
      },
      {
        "content": "Ils possèdent tous obligatoirement un phosphate.",
        "correct": false,
        "explanation": "Ce serait un phosphosphingolipide."
      },
      {
        "content": "Ils sont formés d'un céramide portant un ou plusieurs résidus glucidiques.",
        "correct": true,
        "explanation": "La tête glucidique est attachée au C1."
      }
    ],
    "explanation": "Les glycosphingolipides associent un céramide à une tête glucidique liée au C1."
  },
  {
    "order": 54,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les cérébrosides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le glucosylcéramide contient un glucose.",
        "correct": true,
        "explanation": "Il est largement distribué et sert de précurseur à des glycosphingolipides complexes."
      },
      {
        "content": "Tous les cérébrosides sont des gangliosides.",
        "correct": false,
        "explanation": "Les gangliosides portent notamment un ou plusieurs acides sialiques."
      },
      {
        "content": "Un cérébroside est un monoglycosylcéramide.",
        "correct": true,
        "explanation": "Il porte un seul monosaccharide."
      },
      {
        "content": "Un cérébroside porte obligatoirement cinq oses.",
        "correct": false,
        "explanation": "Il n'en porte qu'un."
      },
      {
        "content": "Le glucosylcéramide possède obligatoirement un phosphate.",
        "correct": false,
        "explanation": "Il n'en possède pas dans cette classe."
      }
    ],
    "explanation": "Les cérébrosides sont des monoglycosylcéramides ; GalCer est un composant majeur de la myéline."
  },
  {
    "order": 55,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les glycosphingolipides, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont des constituants de membranes cellulaires.",
        "correct": true,
        "explanation": "Ils sont particulièrement importants dans le système nerveux et pour la reconnaissance cellulaire."
      },
      {
        "content": "Le groupement glucidique est lié à l'amine C2 par une liaison peptidique.",
        "correct": false,
        "explanation": "Il est lié à l'OH C1."
      },
      {
        "content": "Ils sont formés d'un céramide portant un ou plusieurs résidus glucidiques.",
        "correct": true,
        "explanation": "La tête glucidique est attachée au C1."
      },
      {
        "content": "Ils ne peuvent contenir qu'un seul ose.",
        "correct": false,
        "explanation": "Les gangliosides portent des oligosaccharides."
      },
      {
        "content": "Ils sont des triacylglycérols phosphorylés.",
        "correct": false,
        "explanation": "Leur noyau est un céramide."
      }
    ],
    "explanation": "Les glycosphingolipides associent un céramide à une tête glucidique liée au C1."
  },
  {
    "order": 56,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel cérébroside est particulièrement abondant dans la myéline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "galactosylcéramide",
        "galactosylceramide",
        "GalCer"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Les cérébrosides sont des monoglycosylcéramides ; GalCer est un composant majeur de la myéline."
  },
  {
    "order": 57,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une situation d'application, quel cérébroside est particulièrement abondant dans la myéline ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "galactosylcéramide",
        "galactosylceramide",
        "GalCer"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le galactosylcéramide est un composant majeur de la myéline."
  },
  {
    "order": 58,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant le galactosylcéramide, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est abondant dans la myéline.",
        "correct": true,
        "explanation": "Il joue un rôle structural dans le tissu nerveux."
      },
      {
        "content": "Il est formé d'un céramide et d'un galactose.",
        "correct": true,
        "explanation": "C'est un cérébroside."
      },
      {
        "content": "Il contient un glucose et aucun galactose.",
        "correct": false,
        "explanation": "Cela décrit le glucosylcéramide."
      },
      {
        "content": "La psychosine est un galactosylsphingosine particulièrement toxique dans Krabbe.",
        "correct": true,
        "explanation": "Son accumulation contribue à la démyélinisation."
      },
      {
        "content": "La maladie de Krabbe est due à une hexosaminidase A déficiente.",
        "correct": false,
        "explanation": "Cela décrit Tay-Sachs."
      }
    ],
    "explanation": "Le galactosylcéramide est un cérébroside de la myéline ; GALC et psychosine sont des repères essentiels de Krabbe."
  },
  {
    "order": 59,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Parmi les affirmations suivantes concernant les gangliosides, retenez exactement les deux correctes.",
    "choices": [
      {
        "content": "Ils sont dépourvus de tout ose.",
        "correct": false,
        "explanation": "Ils possèdent une tête glucidique."
      },
      {
        "content": "Ils sont des glycosphingolipides à tête oligosaccharidique contenant au moins un acide sialique.",
        "correct": true,
        "explanation": "L'acide sialique leur confère une charge négative."
      },
      {
        "content": "L'acide sialique est toujours fixé par une liaison ester à un hydroxyle.",
        "correct": false,
        "explanation": "La liaison dans les glycoconjugués est glycosidique."
      },
      {
        "content": "Ils sont tous électriquement neutres.",
        "correct": false,
        "explanation": "Les acides sialiques apportent une charge négative."
      },
      {
        "content": "L'acide sialique est relié par une liaison glycosidique.",
        "correct": true,
        "explanation": "Il n'est pas fixé par une simple liaison ester."
      }
    ],
    "explanation": "Les gangliosides sont des glycosphingolipides complexes contenant un ou plusieurs résidus d'acide sialique.",
    "requiredSelectionCount": 2
  },
  {
    "order": 60,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions sont exactes concernant la nomenclature GM, GD, GT et GQ ?",
    "choices": [
      {
        "content": "G signifie ganglioside.",
        "correct": true,
        "explanation": "La première lettre identifie la famille."
      },
      {
        "content": "GM2 et GM3 sont tous deux des monosialogangliosides.",
        "correct": true,
        "explanation": "La lettre M indique un acide sialique."
      },
      {
        "content": "M, D, T et Q indiquent respectivement un, deux, trois ou quatre résidus d'acide sialique.",
        "correct": true,
        "explanation": "Cette partie du code est directement informative."
      },
      {
        "content": "GM2 contient deux acides sialiques parce que son chiffre vaut 2.",
        "correct": false,
        "explanation": "GM2 est monosialylé."
      },
      {
        "content": "Le chiffre final distingue des structures au sein d'une même série.",
        "correct": true,
        "explanation": "Il ne doit pas être interprété comme un simple compteur universel du nombre total d'oses."
      }
    ],
    "explanation": "Dans la nomenclature gangliosidique, M/D/T/Q encode le nombre d'acides sialiques ; le chiffre distingue les structures d'une série."
  },
  {
    "order": 61,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel ganglioside simple dérive directement du lactosylcéramide par ajout d'un acide sialique ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GM3",
        "ganglioside GM3"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "GM3 est un monosialoganglioside simple dérivé du lactosylcéramide."
  },
  {
    "order": 62,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi les affirmations suivantes concernant GM2, laquelle est correcte ?",
    "choices": [
      {
        "content": "Tay-Sachs est due à un déficit en alpha-galactosidase A.",
        "correct": false,
        "explanation": "Cela décrit Fabry."
      },
      {
        "content": "GM2 est un triacylglycérol.",
        "correct": false,
        "explanation": "C'est un ganglioside."
      },
      {
        "content": "GM2 ne contient aucun acide sialique.",
        "correct": false,
        "explanation": "C'est un monosialoganglioside."
      },
      {
        "content": "Son accumulation touche particulièrement les neurones dans Tay-Sachs.",
        "correct": true,
        "explanation": "Cela explique la neurodégénérescence."
      },
      {
        "content": "GM2 est le substrat accumulé dans Gaucher.",
        "correct": false,
        "explanation": "Gaucher implique surtout glucosylcéramide."
      }
    ],
    "explanation": "GM2 est le ganglioside emblématique de Tay-Sachs, liée à un déficit d'hexosaminidase A."
  },
  {
    "order": 63,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel ganglioside s'accumule classiquement dans la maladie de Tay-Sachs ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "GM2",
        "ganglioside GM2"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le déficit en hexosaminidase A bloque le catabolisme lysosomal de GM2."
  },
  {
    "order": 64,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux propositions exactes concernant la nomenclature des gangliosides.",
    "choices": [
      {
        "content": "GM2 contient deux acides sialiques.",
        "correct": false,
        "explanation": "GM2 est un monosialoganglioside."
      },
      {
        "content": "La lettre M indique un seul résidu d'acide sialique.",
        "correct": true,
        "explanation": "M signifie monosialo."
      },
      {
        "content": "La lettre G indique un glycérophospholipide.",
        "correct": false,
        "explanation": "G indique ganglioside."
      },
      {
        "content": "Le chiffre final indique toujours exactement le nombre total d'oses.",
        "correct": false,
        "explanation": "Le suffixe numérique distingue historiquement des structures d'une série et ne se réduit pas à un simple compteur universel."
      },
      {
        "content": "La lettre D indique deux résidus d'acide sialique.",
        "correct": true,
        "explanation": "D signifie disialo."
      }
    ],
    "explanation": "M/D/T/Q encode le nombre de résidus sialiques ; le chiffre final ne doit pas être présenté comme un compteur universel du nombre total d'oses.",
    "requiredSelectionCount": 2
  },
  {
    "order": 65,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Parmi les affirmations suivantes concernant le glucosylcéramide, lesquelles sont correctes ?",
    "choices": [
      {
        "content": "Il est formé d'un céramide et d'un glucose.",
        "correct": true,
        "explanation": "C'est un cérébroside."
      },
      {
        "content": "Il est dégradé par l'alpha-galactosidase A dans Fabry.",
        "correct": false,
        "explanation": "Fabry concerne surtout Gb3."
      },
      {
        "content": "Sa déacylation peut former la glucosylsphingosine.",
        "correct": true,
        "explanation": "Ce lysosphingolipide peut aussi s'accumuler dans Gaucher."
      },
      {
        "content": "Il est un précurseur de nombreux glycosphingolipides plus complexes.",
        "correct": true,
        "explanation": "Des oses supplémentaires peuvent être ajoutés."
      },
      {
        "content": "Il ne peut jamais être dégradé dans les lysosomes.",
        "correct": false,
        "explanation": "Son catabolisme est lysosomal."
      }
    ],
    "explanation": "Le glucosylcéramide est un cérébroside et un précurseur majeur ; son accumulation caractérise Gaucher."
  },
  {
    "order": 66,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel monosaccharide est porté par le galactosylcéramide ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "galactose",
        "un galactose"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true
      }
    },
    "explanation": "Le galactosylcéramide est un cérébroside de la myéline ; GALC et psychosine sont des repères essentiels de Krabbe."
  }
];
