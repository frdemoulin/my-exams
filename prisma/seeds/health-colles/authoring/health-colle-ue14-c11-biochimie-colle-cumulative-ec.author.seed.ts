import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';
import { TEX_UNITS, texQuantity } from '../../tex-units';

const U = TEX_UNITS;

/**
 * UE14 — Colle C11 — Biochimie — Colle cumulative EC
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C11_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les glucides, les lipides, ainsi que l’enzymologie, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le D-glucose et le D-galactose sont épimères en C4. Les acides gras sont des acides carboxyliques à chaîne hydrocarbonée.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "La série oméga d’un acide gras est déterminée en numérotant depuis le carbone carboxylique.",
        "correct": false,
        "explanation": "La nomenclature oméga compte depuis l’extrémité méthyle."
      },
      {
        "content": "Le D-glucose et le D-galactose sont épimères en C4.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par la configuration du carbone 4."
      },
      {
        "content": "Les acides gras sont des acides carboxyliques à chaîne hydrocarbonée.",
        "correct": true,
        "explanation": "Ils associent une fonction carboxylique hydrophile et une chaîne carbonée hydrophobe."
      },
      {
        "content": "Un acide gras saturé possède obligatoirement plusieurs doubles liaisons cis.",
        "correct": false,
        "explanation": "Un acide gras saturé n’a pas de double liaison C=C."
      },
      {
        "content": "À l’état stationnaire, la concentration totale d’enzyme chute progressivement à zéro.",
        "correct": false,
        "explanation": "L’enzyme est conservée ; elle alterne formes libre et complexée."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Pour une enzyme de Michaelis-Menten, si $[S]=K_m$, quelle fraction de $V_{max}$ vaut $v_0$ ? Donnez 0,5 sous forme numérique.",
    "explanation": "$v_0=V_{max}[S]/(K_m+[S])=V_{max}/2$.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 0.5,
      "tolerance": 0.01
    }
  },
  {
    "order": 3,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les acides aminés et les protéines ?",
    "explanation": "C’est la structure générale, avec la glycine comme cas achiral.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:aa-structure"
    ],
    "choices": [
      {
        "content": "Les acides aminés protéinogènes possèdent généralement un carbone α lié à un groupe amino, un carboxyle, un hydrogène et une chaîne latérale.",
        "correct": true,
        "explanation": "C’est la structure générale, avec la glycine comme cas achiral."
      },
      {
        "content": "Un triacylglycérol est un phospholipide contenant nécessairement un phosphate.",
        "correct": false,
        "explanation": "Il s’agit d’un triester du glycérol sans phosphate."
      },
      {
        "content": "Le point isoélectrique signifie qu’aucun groupement de l’acide aminé ne porte de charge.",
        "correct": false,
        "explanation": "La charge nette est nulle, mais des charges positives et négatives peuvent coexister."
      },
      {
        "content": "1 U est exactement égale à 1 kat.",
        "correct": false,
        "explanation": "Les unités diffèrent de nombreux ordres de grandeur."
      },
      {
        "content": "Le D-fructose est un aldopentose.",
        "correct": false,
        "explanation": "Le D-fructose est un cétohexose."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant l’enzymologie ainsi que les acides aminés et les protéines.",
    "explanation": "Les deux points à retenir sont les suivants : Les acides aminés protéinogènes possèdent généralement un carbone α lié à un groupe amino, un carboxyle, un hydrogène et une chaîne latérale. La vitesse initiale d’une réaction enzymatique est mesurée dans la portion initiale approximativement linéaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "La glycine possède deux centres stéréogènes.",
        "correct": false,
        "explanation": "Elle est achirale."
      },
      {
        "content": "Les acides aminés protéinogènes possèdent généralement un carbone α lié à un groupe amino, un carboxyle, un hydrogène et une chaîne latérale.",
        "correct": true,
        "explanation": "C’est la structure générale, avec la glycine comme cas achiral."
      },
      {
        "content": String.raw`Un katal correspond à $${texQuantity(1, U.MICROMOL_PER_MIN)}$.`,
        "correct": false,
        "explanation": String.raw`Cette définition correspond à $${texQuantity(1, U.ENZYME_UNIT)}$ ; un katal vaut $${texQuantity(1, U.MOL_PER_S)}$.`
      },
      {
        "content": "La série D ou L d’un ose est déterminée par le signe de son pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L décrit une configuration relative, pas le signe +/− de rotation optique."
      },
      {
        "content": "La vitesse initiale d’une réaction enzymatique est mesurée dans la portion initiale approximativement linéaire.",
        "correct": true,
        "explanation": "Cette phase minimise l’influence de l’épuisement du substrat et de l’accumulation du produit."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les glucides, l’enzymologie, ainsi que les lipides, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le D-glucose et le D-mannose sont épimères en C2. La vitesse initiale d’une réaction enzymatique est mesurée dans la portion initiale approximativement linéaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:triacylglycerols"
    ],
    "choices": [
      {
        "content": "Un triacylglycérol est un phospholipide contenant nécessairement un phosphate.",
        "correct": false,
        "explanation": "Il s’agit d’un triester du glycérol sans phosphate."
      },
      {
        "content": "Le D-glucose et le D-mannose sont épimères en C2.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par la configuration du carbone 2."
      },
      {
        "content": "La vitesse initiale d’une réaction enzymatique est mesurée dans la portion initiale approximativement linéaire.",
        "correct": true,
        "explanation": "Cette phase minimise l’influence de l’épuisement du substrat et de l’accumulation du produit."
      },
      {
        "content": "La série D ou L d’un ose est déterminée par le signe de son pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L décrit une configuration relative, pas le signe +/− de rotation optique."
      },
      {
        "content": String.raw`Un katal correspond à $${texQuantity(1, U.MICROMOL_PER_MIN)}$.`,
        "correct": false,
        "explanation": String.raw`Cette définition correspond à $${texQuantity(1, U.ENZYME_UNIT)}$ ; un katal vaut $${texQuantity(1, U.MOL_PER_S)}$.`
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Dans une représentation de Lineweaver-Burk, que vaut l’ordonnée à l’origine ?",
    "explanation": "L’ordonnée à l’origine vaut 1/Vmax.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "1/Vmax",
        "1/V_max",
        "1/Vₘₐₓ"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement l’enzymologie ?",
    "explanation": "Cette phase minimise l’influence de l’épuisement du substrat et de l’accumulation du produit.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:activite"
    ],
    "choices": [
      {
        "content": "Le D-fructose est un aldopentose.",
        "correct": false,
        "explanation": "Le D-fructose est un cétohexose."
      },
      {
        "content": "La vitesse initiale d’une réaction enzymatique est mesurée dans la portion initiale approximativement linéaire.",
        "correct": true,
        "explanation": "Cette phase minimise l’influence de l’épuisement du substrat et de l’accumulation du produit."
      },
      {
        "content": "La phospholipase A2 coupe la liaison phosphodiester entre phosphate et tête polaire.",
        "correct": false,
        "explanation": "Elle hydrolyse l’ester acyle en sn-2."
      },
      {
        "content": "La liaison peptidique tourne librement comme une liaison simple C–C.",
        "correct": false,
        "explanation": "Son caractère partiel de double liaison limite fortement la rotation."
      },
      {
        "content": "Km s’exprime en secondes.",
        "correct": false,
        "explanation": "Km est une concentration."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant les glucides ainsi que les lipides.",
    "explanation": "Les deux points à retenir sont les suivants : Un acide gras saturé ne possède pas de double liaison C=C dans sa chaîne. Le D-glucose et le D-mannose sont épimères en C2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Un triacylglycérol est un phospholipide contenant nécessairement un phosphate.",
        "correct": false,
        "explanation": "Il s’agit d’un triester du glycérol sans phosphate."
      },
      {
        "content": "Un acide gras saturé ne possède pas de double liaison C=C dans sa chaîne.",
        "correct": true,
        "explanation": "Saturé signifie absence de double liaison carbone-carbone."
      },
      {
        "content": "Le point isoélectrique signifie qu’aucun groupement de l’acide aminé ne porte de charge.",
        "correct": false,
        "explanation": "La charge nette est nulle, mais des charges positives et négatives peuvent coexister."
      },
      {
        "content": "1 U est exactement égale à 1 kat.",
        "correct": false,
        "explanation": "Les unités diffèrent de nombreux ordres de grandeur."
      },
      {
        "content": "Le D-glucose et le D-mannose sont épimères en C2.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par la configuration du carbone 2."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions portant sur les glucides, les lipides, ainsi que les acides aminés et les protéines, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : La glycine est achirale car son carbone α porte deux hydrogènes. Dans l’approximation d’état stationnaire, d[ES]/dt est proche de zéro. Le D-glucose est un aldohexose. Un acide gras saturé ne possède pas de double liaison C=C dans sa chaîne. Les doubles liaisons cis introduisent généralement un coude dans la chaîne d’un acide gras.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "La glycine est achirale car son carbone α porte deux hydrogènes.",
        "correct": true,
        "explanation": "Elle ne possède pas quatre substituants différents."
      },
      {
        "content": "Dans l’approximation d’état stationnaire, d[ES]/dt est proche de zéro.",
        "correct": true,
        "explanation": "La concentration du complexe ES varie peu pendant la mesure initiale."
      },
      {
        "content": "Un triacylglycérol est un phospholipide contenant nécessairement un phosphate.",
        "correct": false,
        "explanation": "Il s’agit d’un triester du glycérol sans phosphate."
      },
      {
        "content": "1 U est exactement égale à 1 kat.",
        "correct": false,
        "explanation": "Les unités diffèrent de nombreux ordres de grandeur."
      },
      {
        "content": "Le D-glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction aldéhyde et six carbones."
      },
      {
        "content": "La série D ou L d’un ose est déterminée par le signe de son pouvoir rotatoire.",
        "correct": false,
        "explanation": "D/L décrit une configuration relative, pas le signe +/− de rotation optique."
      },
      {
        "content": "Un acide gras saturé ne possède pas de double liaison C=C dans sa chaîne.",
        "correct": true,
        "explanation": "Saturé signifie absence de double liaison carbone-carbone."
      },
      {
        "content": "Le point isoélectrique signifie qu’aucun groupement de l’acide aminé ne porte de charge.",
        "correct": false,
        "explanation": "La charge nette est nulle, mais des charges positives et négatives peuvent coexister."
      },
      {
        "content": "Le D-fructose est un aldopentose.",
        "correct": false,
        "explanation": "Le D-fructose est un cétohexose."
      },
      {
        "content": "Les doubles liaisons cis introduisent généralement un coude dans la chaîne d’un acide gras.",
        "correct": true,
        "explanation": "La géométrie cis limite l’empilement régulier."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l’enzymologie, les glucides, ainsi que les acides aminés et les protéines, quelles propositions sont exactes ?",
    "explanation": "À retenir : La glycine est achirale car son carbone α porte deux hydrogènes. Dans l’approximation d’état stationnaire, d[ES]/dt est proche de zéro.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:aa-structure"
    ],
    "choices": [
      {
        "content": "La glycine est achirale car son carbone α porte deux hydrogènes.",
        "correct": true,
        "explanation": "Elle ne possède pas quatre substituants différents."
      },
      {
        "content": "Le D-fructose est un aldopentose.",
        "correct": false,
        "explanation": "Le D-fructose est un cétohexose."
      },
      {
        "content": "Dans l’approximation d’état stationnaire, d[ES]/dt est proche de zéro.",
        "correct": true,
        "explanation": "La concentration du complexe ES varie peu pendant la mesure initiale."
      },
      {
        "content": "1 U est exactement égale à 1 kat.",
        "correct": false,
        "explanation": "Les unités diffèrent de nombreux ordres de grandeur."
      },
      {
        "content": "La phospholipase A2 coupe la liaison phosphodiester entre phosphate et tête polaire.",
        "correct": false,
        "explanation": "Elle hydrolyse l’ester acyle en sn-2."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans une représentation de Lineweaver-Burk, que vaut l’abscisse à l’origine ?",
    "explanation": "L’abscisse à l’origine vaut −1/Km.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "-1/Km",
        "−1/Km",
        "-1/K_m",
        "−1/K_m"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 12,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les glucides ?",
    "explanation": "Ils ne diffèrent que par la configuration du carbone 2.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:epimerie"
    ],
    "choices": [
      {
        "content": "Km s’exprime en secondes.",
        "correct": false,
        "explanation": "Km est une concentration."
      },
      {
        "content": "Le carbone anomérique du glucose correspond au carbone C6.",
        "correct": false,
        "explanation": "Le carbone anomérique du glucose est C1."
      },
      {
        "content": "Le D-glucose et le D-mannose sont épimères en C2.",
        "correct": true,
        "explanation": "Ils ne diffèrent que par la configuration du carbone 2."
      },
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des ponts disulfure entre chaque résidu.",
        "correct": false,
        "explanation": "Les liaisons hydrogène du squelette sont la stabilisation fondamentale de l’hélice."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant les acides aminés et les protéines ainsi que l’enzymologie.",
    "explanation": "Les deux points à retenir sont les suivants : Dans l’approximation d’état stationnaire, d[ES]/dt est proche de zéro. La glycine est achirale car son carbone α porte deux hydrogènes.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "La liaison peptidique tourne librement comme une liaison simple C–C.",
        "correct": false,
        "explanation": "Son caractère partiel de double liaison limite fortement la rotation."
      },
      {
        "content": "Le D-fructose est un aldopentose.",
        "correct": false,
        "explanation": "Le D-fructose est un cétohexose."
      },
      {
        "content": "Dans l’approximation d’état stationnaire, d[ES]/dt est proche de zéro.",
        "correct": true,
        "explanation": "La concentration du complexe ES varie peu pendant la mesure initiale."
      },
      {
        "content": "La glycine est achirale car son carbone α porte deux hydrogènes.",
        "correct": true,
        "explanation": "Elle ne possède pas quatre substituants différents."
      },
      {
        "content": "La phospholipase A2 coupe la liaison phosphodiester entre phosphate et tête polaire.",
        "correct": false,
        "explanation": "Elle hydrolyse l’ester acyle en sn-2."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les glucides, les lipides, ainsi que les acides aminés et les protéines, quelles propositions sont exactes ?",
    "explanation": "À retenir : Les doubles liaisons cis introduisent généralement un coude dans la chaîne d’un acide gras. La proline possède une chaîne latérale cyclisée sur l’azote α.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:anomerie"
    ],
    "choices": [
      {
        "content": "Le carbone anomérique du glucose correspond au carbone C6.",
        "correct": false,
        "explanation": "Le carbone anomérique du glucose est C1."
      },
      {
        "content": "Km s’exprime en secondes.",
        "correct": false,
        "explanation": "Km est une concentration."
      },
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      },
      {
        "content": "Les doubles liaisons cis introduisent généralement un coude dans la chaîne d’un acide gras.",
        "correct": true,
        "explanation": "La géométrie cis limite l’empilement régulier."
      },
      {
        "content": "La proline possède une chaîne latérale cyclisée sur l’azote α.",
        "correct": true,
        "explanation": "Sa structure rigidifie localement la chaîne polypeptidique."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": String.raw`Une activité de $${texQuantity(60, U.ENZYME_UNIT)}$ correspond à combien de micromoles de substrat transformé par minute ? Donnez uniquement la valeur numérique.`,
    "explanation": String.raw`Par définition, $${texQuantity(1, U.ENZYME_UNIT)} = ${texQuantity(1, U.MICROMOL_PER_MIN)}$.`,
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 60,
      "tolerance": 0
    }
  },
  {
    "order": 16,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement les lipides ?",
    "explanation": "Saturé signifie absence de double liaison carbone-carbone.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "Une hélice α est stabilisée principalement par des ponts disulfure entre chaque résidu.",
        "correct": false,
        "explanation": "Les liaisons hydrogène du squelette sont la stabilisation fondamentale de l’hélice."
      },
      {
        "content": "Lorsque [S] = Km, v0 = Vmax.",
        "correct": false,
        "explanation": "v0 = Vmax/2."
      },
      {
        "content": "Les anomères α et β sont des énantiomères.",
        "correct": false,
        "explanation": "Ce sont des diastéréoisomères qui diffèrent au carbone anomérique."
      },
      {
        "content": "Un acide gras saturé ne possède pas de double liaison C=C dans sa chaîne.",
        "correct": true,
        "explanation": "Saturé signifie absence de double liaison carbone-carbone."
      },
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces cinq affirmations portant sur les glucides ainsi que les lipides, retenez exactement les deux correctes.",
    "explanation": "Les deux points à retenir sont les suivants : Les doubles liaisons cis introduisent généralement un coude dans la chaîne d’un acide gras. Le D-glucose est un aldohexose.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Km s’exprime en secondes.",
        "correct": false,
        "explanation": "Km est une concentration."
      },
      {
        "content": "Le carbone anomérique du glucose correspond au carbone C6.",
        "correct": false,
        "explanation": "Le carbone anomérique du glucose est C1."
      },
      {
        "content": "Les doubles liaisons cis introduisent généralement un coude dans la chaîne d’un acide gras.",
        "correct": true,
        "explanation": "La géométrie cis limite l’empilement régulier."
      },
      {
        "content": "Le D-glucose est un aldohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction aldéhyde et six carbones."
      },
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions portant sur les glucides, les acides aminés et les protéines, ainsi que l’enzymologie, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : Le D-fructose est un cétohexose. L’acide linoléique est un acide gras essentiel de la série n-6. À pH physiologique, de nombreux acides aminés libres sont majoritairement sous forme zwitterionique. La proline possède une chaîne latérale cyclisée sur l’azote α. L’état stationnaire n’est pas synonyme d’équilibre thermodynamique enzyme-substrat.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "Le D-fructose est un cétohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction cétone et six carbones."
      },
      {
        "content": "Le carbone anomérique du glucose correspond au carbone C6.",
        "correct": false,
        "explanation": "Le carbone anomérique du glucose est C1."
      },
      {
        "content": "L’acide linoléique est un acide gras essentiel de la série n-6.",
        "correct": true,
        "explanation": "L’humain ne synthétise pas les doubles liaisons nécessaires à sa production de novo."
      },
      {
        "content": "À pH physiologique, de nombreux acides aminés libres sont majoritairement sous forme zwitterionique.",
        "correct": true,
        "explanation": "Le carboxyle est souvent déprotoné et l’amine protonée."
      },
      {
        "content": "La liaison peptidique tourne librement comme une liaison simple C–C.",
        "correct": false,
        "explanation": "Son caractère partiel de double liaison limite fortement la rotation."
      },
      {
        "content": "Les eicosanoïdes sont stockés en grande quantité dans des vésicules avant leur libération.",
        "correct": false,
        "explanation": "Ils sont généralement synthétisés à la demande à partir de précurseurs lipidiques."
      },
      {
        "content": "Km s’exprime en secondes.",
        "correct": false,
        "explanation": "Km est une concentration."
      },
      {
        "content": "La proline possède une chaîne latérale cyclisée sur l’azote α.",
        "correct": true,
        "explanation": "Sa structure rigidifie localement la chaîne polypeptidique."
      },
      {
        "content": "La phospholipase A2 coupe la liaison phosphodiester entre phosphate et tête polaire.",
        "correct": false,
        "explanation": "Elle hydrolyse l’ester acyle en sn-2."
      },
      {
        "content": "L’état stationnaire n’est pas synonyme d’équilibre thermodynamique enzyme-substrat.",
        "correct": true,
        "explanation": "Un flux net de réaction persiste."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur les glucides, l’enzymologie, ainsi que les lipides, quelles affirmations sont correctes ?",
    "explanation": "À retenir : L’acide linoléique est un acide gras essentiel de la série n-6. Le D-fructose est un cétohexose.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:acides-gras"
    ],
    "choices": [
      {
        "content": "L’acide linoléique est un acide gras essentiel de la série n-6.",
        "correct": true,
        "explanation": "L’humain ne synthétise pas les doubles liaisons nécessaires à sa production de novo."
      },
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "Les anomères α et β sont des énantiomères.",
        "correct": false,
        "explanation": "Ce sont des diastéréoisomères qui diffèrent au carbone anomérique."
      },
      {
        "content": "Le D-fructose est un cétohexose.",
        "correct": true,
        "explanation": "Sa forme ouverte possède une fonction cétone et six carbones."
      },
      {
        "content": "Lorsque [S] = Km, v0 = Vmax.",
        "correct": false,
        "explanation": "v0 = Vmax/2."
      }
    ]
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": String.raw`Quel est le nom de l’unité SI d’activité catalytique égale à $${texQuantity(1, U.MOL_PER_S)}$ ?`,
    "explanation": "L’unité SI est le katal.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "katal",
        "kat"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant les acides aminés et les protéines, quelle proposition est exacte ?",
    "explanation": "Elle ne possède pas quatre substituants différents.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:aa-structure"
    ],
    "choices": [
      {
        "content": "Les leucotriènes sont synthétisés principalement par les cyclo-oxygénases.",
        "correct": false,
        "explanation": "Ils dérivent des lipoxygénases."
      },
      {
        "content": "Les feuillets β sont toujours antiparallèles.",
        "correct": false,
        "explanation": "Ils peuvent être parallèles ou antiparallèles."
      },
      {
        "content": "Vmax est indépendante de la concentration totale en enzyme.",
        "correct": false,
        "explanation": "Dans le modèle simple, Vmax = kcat[E]t."
      },
      {
        "content": "La cyclisation d’un ose supprime définitivement toute possibilité de forme ouverte.",
        "correct": false,
        "explanation": "En solution, un équilibre subsiste entre formes cycliques et une faible proportion de forme ouverte."
      },
      {
        "content": "La glycine est achirale car son carbone α porte deux hydrogènes.",
        "correct": true,
        "explanation": "Elle ne possède pas quatre substituants différents."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l’enzymologie, les glucides, ainsi que les lipides, quelles propositions sont exactes ?",
    "explanation": "À retenir : La loi de Beer-Lambert s’écrit A = ε·l·c. Deux énantiomères sont images l’un de l’autre dans un miroir et non superposables. L’acide α-linolénique est un acide gras essentiel de la série n-3.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:beer-lambert"
    ],
    "choices": [
      {
        "content": "La loi de Beer-Lambert s’écrit A = ε·l·c.",
        "correct": true,
        "explanation": "L’absorbance est proportionnelle à la concentration pour des conditions adaptées."
      },
      {
        "content": "Deux énantiomères sont images l’un de l’autre dans un miroir et non superposables.",
        "correct": true,
        "explanation": "C’est la définition de l’énantiomérie."
      },
      {
        "content": "L’acide α-linolénique est un acide gras essentiel de la série n-3.",
        "correct": true,
        "explanation": "Il constitue un précurseur de la famille n-3."
      },
      {
        "content": "La cyclisation d’un ose supprime définitivement toute possibilité de forme ouverte.",
        "correct": false,
        "explanation": "En solution, un équilibre subsiste entre formes cycliques et une faible proportion de forme ouverte."
      },
      {
        "content": "Vmax est indépendante de la concentration totale en enzyme.",
        "correct": false,
        "explanation": "Dans le modèle simple, Vmax = kcat[E]t."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Une préparation enzymatique transforme $6 MICROMOL$ de substrat en $2 MIN$. Quelle est son activité ? Donnez uniquement la valeur numérique, exprimée en $MICROMOL_PER_MIN$.\n\nDonnées : $1\\,\\mathrm U = 1\\,MICROMOL_PER_MIN$.",
    "explanation": String.raw`$6/2=${texQuantity(3, U.MICROMOL_PER_MIN)}$, soit $${texQuantity(3, U.ENZYME_UNIT)}$.`,
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:calcul-activite-enzymatique"
    ],
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0,
      "unit": "µmol/min",
      "displayUnit": U.MICROMOL_PER_MIN
    }
  },
  {
    "order": 24,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant l’enzymologie, quelle proposition est exacte ?",
    "explanation": "La concentration du complexe ES varie peu pendant la mesure initiale.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:stationnaire"
    ],
    "choices": [
      {
        "content": "Dans l’approximation d’état stationnaire, d[ES]/dt est proche de zéro.",
        "correct": true,
        "explanation": "La concentration du complexe ES varie peu pendant la mesure initiale."
      },
      {
        "content": "La cyclisation d’un ose supprime définitivement toute possibilité de forme ouverte.",
        "correct": false,
        "explanation": "En solution, un équilibre subsiste entre formes cycliques et une faible proportion de forme ouverte."
      },
      {
        "content": "Un céramide est formé de glycérol et de trois acides gras.",
        "correct": false,
        "explanation": "C’est la description d’un triacylglycérol ; le céramide associe sphingosine et acide gras."
      },
      {
        "content": "HbA adulte est composée de quatre chaînes β.",
        "correct": false,
        "explanation": "HbA = α2β2."
      },
      {
        "content": "À très forte [S], la vitesse devient proportionnelle à [S] sans limite.",
        "correct": false,
        "explanation": "La saturation conduit vers Vmax."
      }
    ]
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les glucides, les acides aminés et les protéines, ainsi que l’enzymologie, quelles propositions sont exactes ?",
    "explanation": String.raw`À retenir : une unité enzymatique $${U.ENZYME_UNIT}$ correspond à $${texQuantity(1, U.MICROMOL)}$ de substrat transformé par minute dans des conditions définies ; dans une projection de Fischer d’un D-ose, le groupe OH du carbone asymétrique le plus éloigné du carbonyle est à droite ; le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.`,
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:michaelis"
    ],
    "choices": [
      {
        "content": "À très forte [S], la vitesse devient proportionnelle à [S] sans limite.",
        "correct": false,
        "explanation": "La saturation conduit vers Vmax."
      },
      {
        "content": String.raw`Une unité enzymatique $${U.ENZYME_UNIT}$ correspond à $${texQuantity(1, U.MICROMOL)}$ de substrat transformé par minute dans des conditions définies.`,
        "correct": true,
        "explanation": "C’est la définition pratique de l’unité U."
      },
      {
        "content": "Dans une projection de Fischer d’un D-ose, le groupe OH du carbone asymétrique le plus éloigné du carbonyle est à droite.",
        "correct": true,
        "explanation": "Ce critère définit la série D."
      },
      {
        "content": "Le point isoélectrique correspond au pH où la charge nette moyenne de l’espèce est nulle.",
        "correct": true,
        "explanation": "Il ne signifie pas absence de charges internes."
      },
      {
        "content": "Le saccharose possède un carbone anomérique libre et est fortement réducteur.",
        "correct": false,
        "explanation": "Les deux carbones anomériques sont engagés ; le saccharose est non réducteur."
      }
    ]
  },
  {
    "order": 26,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant l’enzymologie ainsi que les lipides, quelles propositions sont exactes ?",
    "explanation": String.raw`À retenir : un triacylglycérol est formé par estérification des trois hydroxyles du glycérol par des acides gras ; la liaison peptidique présente un caractère partiel de double liaison ; un katal correspond à $${texQuantity(1, U.MOL_PER_S)}$.`,
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:triacylglycerols"
    ],
    "choices": [
      {
        "content": "Un triacylglycérol est formé par estérification des trois hydroxyles du glycérol par des acides gras.",
        "correct": true,
        "explanation": "Il comporte trois fonctions ester."
      },
      {
        "content": "La liaison peptidique présente un caractère partiel de double liaison.",
        "correct": true,
        "explanation": "La résonance limite sa rotation et favorise sa planéité."
      },
      {
        "content": "L’abscisse à l’origine de Lineweaver-Burk vaut +1/Km.",
        "correct": false,
        "explanation": "Elle vaut −1/Km."
      },
      {
        "content": "Le glycogène est un polymère linéaire relié exclusivement par des liaisons β(1→4).",
        "correct": false,
        "explanation": "Le glycogène est ramifié, avec liaisons α(1→4) et α(1→6)."
      },
      {
        "content": String.raw`Un katal correspond à $${texQuantity(1, U.MOL_PER_S)}$.`,
        "correct": true,
        "explanation": "Le katal est l’unité SI d’activité catalytique."
      }
    ]
  },
  {
    "order": 27,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur les glucides, les lipides, ainsi que l’enzymologie, quelles affirmations sont correctes ?",
    "explanation": "À retenir : Les triacylglycérols constituent une forme majeure de réserve énergétique. Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques. 1 U vaut environ 16,67 nkat. La cyclisation du glucose crée un nouveau centre stéréogène : le carbone anomérique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:triacylglycerols"
    ],
    "choices": [
      {
        "content": "Les triacylglycérols constituent une forme majeure de réserve énergétique.",
        "correct": true,
        "explanation": "Ils sont stockés notamment dans les adipocytes."
      },
      {
        "content": "La loi de Beer-Lambert relie directement l’absorbance à la masse molaire sans coefficient d’extinction.",
        "correct": false,
        "explanation": "Elle implique ε, l et c."
      },
      {
        "content": "Les résidus d’une chaîne polypeptidique sont reliés par des liaisons peptidiques.",
        "correct": true,
        "explanation": "La liaison implique le carboxyle d’un AA et l’amine du suivant."
      },
      {
        "content": "1 U vaut environ 16,67 nkat.",
        "correct": true,
        "explanation": String.raw`$${texQuantity(1, U.MICROMOL_PER_MIN)} = \frac{10^{-6}}{60}\,${U.MOL_PER_S} \approx 1{,}667\times10^{-8}\,${U.MOL_PER_S}$.`
      },
      {
        "content": "La cyclisation du glucose crée un nouveau centre stéréogène : le carbone anomérique.",
        "correct": true,
        "explanation": "Le carbone carbonylé devient le carbone anomérique lors de l’hémiacétalisation."
      }
    ]
  },
  {
    "order": 28,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Parmi les propositions suivantes portant sur les glucides, les lipides, ainsi que l’enzymologie, lesquelles sont exactes ?",
    "explanation": "À retenir : Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique. 1 U vaut environ 16,67 nkat. Pour le D-glucopyranose, l’anomère α porte classiquement le OH anomérique opposé au groupe CH2OH de référence. Un glycérophospholipide comporte un squelette glycérol, deux chaînes hydrophobes et un phosphate.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:stationnaire"
    ],
    "choices": [
      {
        "content": "L’état stationnaire signifie qu’aucun produit n’est formé.",
        "correct": false,
        "explanation": "Un flux de produit est précisément mesuré."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique.",
        "correct": true,
        "explanation": "Les liaisons relient classiquement C=O(i) et N–H(i+4)."
      },
      {
        "content": "1 U vaut environ 16,67 nkat.",
        "correct": true,
        "explanation": String.raw`$${texQuantity(1, U.MICROMOL_PER_MIN)} = \frac{10^{-6}}{60}\,${U.MOL_PER_S} \approx 1{,}667\times10^{-8}\,${U.MOL_PER_S}$.`
      },
      {
        "content": "Pour le D-glucopyranose, l’anomère α porte classiquement le OH anomérique opposé au groupe CH2OH de référence.",
        "correct": true,
        "explanation": "En Haworth usuelle d’un D-ose, α correspond à une relation trans entre OH anomérique et CH2OH."
      },
      {
        "content": "Un glycérophospholipide comporte un squelette glycérol, deux chaînes hydrophobes et un phosphate.",
        "correct": true,
        "explanation": "Le phosphate porte la tête polaire avec un alcool substituant."
      }
    ]
  },
  {
    "order": 29,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sélectionnez sur l’axe des abscisses l’intersection correspondant à $-1/K_m$.",
    "explanation": "La zone attendue correspond à : Abscisse à l’origine −1/Km.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c11/lineweaver-burk-intercept-qzone.svg",
      "alt": "Droite de Lineweaver-Burk",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Abscisse à l’origine −1/Km",
        "x": 0.28,
        "y": 0.8,
        "tolerance": 0.07
      }
    ],
    "defaultTolerance": 0.07
  },
  {
    "order": 30,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Sur les glucides, les lipides, ainsi que les acides aminés et les protéines, quelles affirmations sont correctes ?",
    "explanation": "À retenir : L’activité spécifique peut s’exprimer en U par mg de protéines. Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique. La phospholipase A2 hydrolyse l’acide gras en position sn-2 des glycérophospholipides. La mutarotation correspond à l’évolution du pouvoir rotatoire liée à l’interconversion des anomères en solution.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C11",
      "ec:BIOCHIMIE",
      "theme:unites"
    ],
    "choices": [
      {
        "content": "L’activité spécifique peut s’exprimer en U par mg de protéines.",
        "correct": true,
        "explanation": "Elle rapporte une activité à une masse de protéines."
      },
      {
        "content": "Une hélice α est stabilisée principalement par des liaisons hydrogène intrachaîne du squelette peptidique.",
        "correct": true,
        "explanation": "Les liaisons relient classiquement C=O(i) et N–H(i+4)."
      },
      {
        "content": "Le maltose est non réducteur car ses deux carbones anomériques sont engagés.",
        "correct": false,
        "explanation": "Le maltose conserve un carbone anomérique libre et est réducteur."
      },
      {
        "content": "La phospholipase A2 hydrolyse l’acide gras en position sn-2 des glycérophospholipides.",
        "correct": true,
        "explanation": "Cette position porte souvent un acide gras polyinsaturé comme l’arachidonate."
      },
      {
        "content": "La mutarotation correspond à l’évolution du pouvoir rotatoire liée à l’interconversion des anomères en solution.",
        "correct": true,
        "explanation": "Les formes α et β s’interconvertissent via la forme ouverte."
      }
    ]
  }
];
