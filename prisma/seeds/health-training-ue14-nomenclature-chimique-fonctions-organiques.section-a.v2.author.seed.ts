import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section A – Formule brute et composition
 */

export const UE14_CH5_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la nomenclature chimique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle vise à désigner les molécules avec précision.",
        "correct": true,
        "explanation": "C'est son objectif principal."
      },
      {
        "content": "Une nomenclature internationale facilite la communication entre chimistes.",
        "correct": true,
        "explanation": "Un langage partagé limite les ambiguïtés."
      },
      {
        "content": "Un nom commercial de médicament est nécessairement un nom chimique officiel.",
        "correct": false,
        "explanation": "Nom commercial et nom chimique sont deux notions distinctes."
      },
      {
        "content": "Elle devient inutile lorsque la molécule est complexe.",
        "correct": false,
        "explanation": "La précision devient au contraire particulièrement utile."
      }
    ],
    "explanation": "La nomenclature fournit un langage commun pour identifier sans ambiguïté les espèces chimiques."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Une formule brute telle que $\\ce{C2H6O}$ permet d'affirmer que :",
    "choices": [
      {
        "content": "La molécule contient deux atomes de carbone.",
        "correct": true,
        "explanation": "L'indice 2 s'applique au carbone."
      },
      {
        "content": "Elle contient six atomes d'hydrogène.",
        "correct": true,
        "explanation": "L'indice 6 s'applique à H."
      },
      {
        "content": "Elle contient un seul atome d'oxygène.",
        "correct": true,
        "explanation": "L'absence d'indice signifie 1."
      },
      {
        "content": "Elle impose un unique enchaînement possible des atomes.",
        "correct": false,
        "explanation": "Éthanol et éther diméthylique ont notamment cette même formule brute."
      }
    ],
    "explanation": "La formule brute donne la nature et le nombre des atomes, mais pas leur enchaînement."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "L'éthanol $\\ce{CH3CH2OH}$ et l'éther diméthylique $\\ce{CH3OCH3}$ ont la même formule brute $\\ce{C2H6O}$. Sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "Ils ont la même composition élémentaire.",
        "correct": true,
        "explanation": "Ils contiennent les mêmes nombres de C, H et O."
      },
      {
        "content": "Ils illustrent que la formule brute ne suffit pas toujours à connaître la structure.",
        "correct": true,
        "explanation": "Leur enchaînement atomique diffère."
      },
      {
        "content": "Ils ont nécessairement la même fonction chimique.",
        "correct": false,
        "explanation": "L'un est un alcool, l'autre un éther."
      },
      {
        "content": "Ils ont des masses molaires différentes.",
        "correct": false,
        "explanation": "Une même formule brute donne la même masse molaire."
      }
    ],
    "explanation": "Des molécules distinctes peuvent partager une formule brute : la structure et les fonctions exigent une représentation plus informative."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Parmi les éléments suivants, lesquels figurent parmi les constituants usuels de la matière organique cités dans la fiche ?",
    "choices": [
      {
        "content": "Carbone.",
        "correct": true,
        "explanation": "C est un élément majeur de la matière organique."
      },
      {
        "content": "Hydrogène.",
        "correct": true,
        "explanation": "H est très fréquent."
      },
      {
        "content": "Oxygène.",
        "correct": true,
        "explanation": "O intervient dans de nombreuses fonctions."
      },
      {
        "content": "Azote et soufre.",
        "correct": true,
        "explanation": "N et S sont également explicitement cités."
      }
    ],
    "explanation": "La fiche cite principalement C, H, O, N et S parmi les éléments constitutifs de la matière organique."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les valences usuelles présentées dans le cours, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "L'hydrogène et les halogènes sont généralement monovalents.",
        "correct": true,
        "explanation": "Ils forment habituellement une liaison simple."
      },
      {
        "content": "L'oxygène est généralement divalent.",
        "correct": true,
        "explanation": "Deux simples ou une double."
      },
      {
        "content": "L'azote est généralement trivalent.",
        "correct": true,
        "explanation": "Trois simples, une triple, ou une double et une simple dans le cadre présenté."
      },
      {
        "content": "Le carbone est généralement tétravalent.",
        "correct": true,
        "explanation": "La somme des ordres de liaison autour du carbone vaut habituellement quatre."
      }
    ],
    "explanation": "Ces valences usuelles servent à contrôler rapidement la cohérence d'une représentation organique."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle représentation satisfait la tétravalence habituelle du carbone ?",
    "choices": [
      {
        "content": "$\\ce{CH4}$",
        "correct": true,
        "explanation": "Le carbone forme quatre liaisons simples."
      },
      {
        "content": "$\\ce{CH5}$",
        "correct": false,
        "explanation": "Cinq liaisons simples dépasseraient la tétravalence usuelle."
      },
      {
        "content": "$\\ce{CH3}$ neutre avec trois liaisons et aucun électron célibataire indiqué.",
        "correct": false,
        "explanation": "La valence du carbone n'est pas complétée dans cette description."
      },
      {
        "content": "$\\ce{C-H}$ comme unique liaison d'un carbone neutre isolé.",
        "correct": false,
        "explanation": "Une seule liaison ne satisfait pas la tétravalence usuelle."
      }
    ],
    "explanation": "Le méthane est l'exemple le plus simple d'un carbone tétravalent portant quatre liaisons simples."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La microanalyse chimique d'un composé pur peut fournir :",
    "choices": [
      {
        "content": "La liste des éléments présents.",
        "correct": true,
        "explanation": "C'est un objectif de l'analyse élémentaire."
      },
      {
        "content": "Le pourcentage massique de chaque élément.",
        "correct": true,
        "explanation": "La fiche donne explicitement cette information."
      },
      {
        "content": "La géométrie tridimensionnelle exacte.",
        "correct": false,
        "explanation": "La microanalyse ne donne pas l'organisation spatiale."
      },
      {
        "content": "Toujours la formule brute exacte sans autre donnée.",
        "correct": false,
        "explanation": "La masse molaire peut être nécessaire pour passer de la formule empirique à la formule brute."
      }
    ],
    "explanation": "La microanalyse renseigne sur la composition élémentaire ; elle ne remplace pas une méthode structurale."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Données : $M_{\\mathrm C}=12$, $M_{\\mathrm H}=1$ et $M_{\\mathrm O}=16\\,\\mathrm{g\\,mol^{-1}}$. Quelle est la masse molaire de l'éthanol $\\ce{C2H6O}$, en $\\mathrm{g\\,mol^{-1}}$ ?",
    "answer": {
      "type": "number",
      "value": 46,
      "tolerance": 0.01,
      "unit": "g/mol",
      "acceptedUnits": [
        "g/mol",
        "g·mol-1",
        "g mol-1"
      ]
    },
    "explanation": "$2\\times12+6\\times1+16=46\\,\\mathrm{g\\,mol^{-1}}$."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans $\\ce{CO2}$, avec $M_{\\mathrm C}=12$ et $M_{\\mathrm O}=16$, quel est le pourcentage massique de carbone ? Donnez la valeur en pourcentage, arrondie à l'unité.",
    "answer": {
      "type": "number",
      "value": 27,
      "tolerance": 1,
      "unit": "%"
    },
    "explanation": "$M(\\ce{CO2})=44$ et $12/44\\times100\\approx27{,}3\\,\\%$, soit environ $27\\,\\%$."
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux étapes utiles pour exploiter une microanalyse afin de proposer une formule.",
    "choices": [
      {
        "content": "Convertir les pourcentages massiques en quantités relatives de matière.",
        "correct": true,
        "explanation": "On divise notamment chaque contribution par la masse atomique correspondante."
      },
      {
        "content": "Ramener les rapports obtenus à de petits nombres entiers.",
        "correct": true,
        "explanation": "Cela permet d'obtenir une formule empirique."
      },
      {
        "content": "Déduire directement la géométrie moléculaire des seuls pourcentages.",
        "correct": false,
        "explanation": "La composition ne donne pas la géométrie."
      },
      {
        "content": "Ignorer la masse molaire lorsqu'elle est fournie.",
        "correct": false,
        "explanation": "Elle peut permettre de déterminer le facteur entre formule empirique et formule brute."
      }
    ],
    "explanation": "La microanalyse conduit d'abord à des rapports atomiques ; la masse molaire peut ensuite fixer le multiple entier correspondant à la formule brute."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une formule semi-développée est $\\ce{CH3-CH(OH)-CH2-NH2}$. Combien d'atomes d'hydrogène contient la molécule au total ?",
    "answer": {
      "type": "number",
      "value": 9
    },
    "explanation": "On compte $3+1+1$ sur le groupe OH, $2$, puis $2$ sur $\\ce{NH2}$ : total 9."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour $\\ce{CH3-CH(OH)-CH2-NH2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La formule brute est $\\ce{C3H9NO}$.",
        "correct": true,
        "explanation": "Le décompte donne C3H9NO."
      },
      {
        "content": "La molécule contient trois carbones.",
        "correct": true,
        "explanation": "Trois groupes carbonés sont visibles."
      },
      {
        "content": "Elle contient deux oxygènes.",
        "correct": false,
        "explanation": "Un seul O est présent dans OH."
      },
      {
        "content": "Elle contient une fonction amine.",
        "correct": true,
        "explanation": "Le motif NH2 est une amine primaire."
      }
    ],
    "explanation": "Le passage d'une formule semi-développée à la formule brute exige de compter aussi les hydrogènes portés par les hétéroatomes."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle est la masse molaire de l'acide éthanoïque $\\ce{C2H4O2}$ avec $M_{\\mathrm C}=12$, $M_{\\mathrm H}=1$ et $M_{\\mathrm O}=16\\,\\mathrm{g\\,mol^{-1}}$ ?",
    "answer": {
      "type": "number",
      "value": 60,
      "tolerance": 0.01,
      "unit": "g/mol",
      "acceptedUnits": [
        "g/mol",
        "g·mol-1",
        "g mol-1"
      ]
    },
    "explanation": "$2\\times12+4\\times1+2\\times16=60\\,\\mathrm{g\\,mol^{-1}}$."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Une espèce a pour formule empirique $\\ce{CH2O}$ et une masse molaire de $180\\,\\mathrm{g\\,mol^{-1}}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La masse molaire de l'unité empirique vaut $30\\,\\mathrm{g\\,mol^{-1}}$.",
        "correct": true,
        "explanation": "12+2+16=30."
      },
      {
        "content": "Le facteur multiplicatif est 6.",
        "correct": true,
        "explanation": "180/30=6."
      },
      {
        "content": "La formule brute est $\\ce{C6H12O6}$.",
        "correct": true,
        "explanation": "Tous les indices sont multipliés par 6."
      },
      {
        "content": "La formule brute est nécessairement $\\ce{CH2O}$.",
        "correct": false,
        "explanation": "La formule empirique n'est que le rapport entier minimal."
      }
    ],
    "explanation": "La masse molaire distingue la formule empirique minimale de la formule brute réelle."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Une microanalyse d'un composé contenant seulement C, H et O donne environ 40,0 % C, 6,7 % H et 53,3 % O. Quelle formule empirique correspond à ces rapports ?",
    "choices": [
      {
        "content": "$\\ce{CH2O}$",
        "correct": true,
        "explanation": "Pour 100 g : 40/12≈3,33 ; 6,7/1=6,7 ; 53,3/16≈3,33, soit environ 1:2:1."
      },
      {
        "content": "$\\ce{C2H2O}$",
        "correct": false,
        "explanation": "Le rapport C:H ne correspond pas."
      },
      {
        "content": "$\\ce{CH4O}$",
        "correct": false,
        "explanation": "Le rapport H est trop élevé."
      },
      {
        "content": "$\\ce{C2H4O}$",
        "correct": false,
        "explanation": "Ce n'est pas le rapport entier minimal."
      }
    ],
    "explanation": "La conversion des masses en quantités de matière conduit au rapport C:H:O ≈ 1:2:1."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "L'urée a pour formule $\\ce{CH4N2O}$. Avec $M_{\\mathrm C}=12$, $M_{\\mathrm H}=1$, $M_{\\mathrm N}=14$ et $M_{\\mathrm O}=16$, quel est approximativement le pourcentage massique d'azote ?",
    "answer": {
      "type": "number",
      "value": 47,
      "tolerance": 1,
      "unit": "%"
    },
    "explanation": "$M=12+4+28+16=60$ et la masse due à N vaut 28 ; $28/60\\times100\\approx46{,}7\\,\\%$."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Une formule empirique vaut $\\ce{C2H4O}$ et la masse molaire mesurée vaut $88\\,\\mathrm{g\\,mol^{-1}}$. Sélectionnez exactement les deux propositions correctes.",
    "choices": [
      {
        "content": "La masse molaire de $\\ce{C2H4O}$ vaut $44\\,\\mathrm{g\\,mol^{-1}}$.",
        "correct": true,
        "explanation": "24+4+16=44."
      },
      {
        "content": "La formule brute est $\\ce{C4H8O2}$.",
        "correct": true,
        "explanation": "Le facteur multiplicatif vaut 2."
      },
      {
        "content": "Le facteur multiplicatif vaut 4.",
        "correct": false,
        "explanation": "88/44=2."
      },
      {
        "content": "La formule brute reste forcément $\\ce{C2H4O}$.",
        "correct": false,
        "explanation": "La masse molaire montre qu'il faut doubler les indices."
      }
    ],
    "explanation": "Le rapport entre masse molaire réelle et masse de la formule empirique donne le facteur multiplicatif entier."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour contrôler une formule développée neutre simple, quelles vérifications sont pertinentes ?",
    "choices": [
      {
        "content": "Un hydrogène ordinaire ne porte qu'une liaison.",
        "correct": true,
        "explanation": "H est monovalent."
      },
      {
        "content": "Un oxygène neutre usuel totalise deux ordres de liaison.",
        "correct": true,
        "explanation": "Deux simples ou une double."
      },
      {
        "content": "Un azote neutre usuel totalise généralement trois ordres de liaison.",
        "correct": true,
        "explanation": "C'est la valence présentée dans la fiche."
      },
      {
        "content": "Un carbone neutre usuel totalise généralement quatre ordres de liaison.",
        "correct": true,
        "explanation": "C'est la tétravalence du carbone."
      }
    ],
    "explanation": "Le contrôle des valences usuelles constitue une vérification rapide de cohérence des représentations."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel mot désigne la formule qui donne seulement le plus petit rapport entier entre les nombres d'atomes ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "formule empirique",
        "empirique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La formule empirique exprime le rapport entier minimal des éléments."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le sildénafil et le paclitaxel sont cités dans la fiche comme molécules complexes. Quelles conclusions sont justes ?",
    "choices": [
      {
        "content": "Une formule brute reste utile pour connaître la composition.",
        "correct": true,
        "explanation": "Elle donne nature et nombre des atomes."
      },
      {
        "content": "La formule brute ne suffit pas à reconstruire facilement leur structure.",
        "correct": true,
        "explanation": "C'est précisément le message de la fiche."
      },
      {
        "content": "Le nom commercial remplace définitivement la nomenclature chimique.",
        "correct": false,
        "explanation": "Il répond à un autre usage."
      },
      {
        "content": "Deux molécules différentes peuvent partager une même formule brute.",
        "correct": true,
        "explanation": "L'isomérie rend cela possible."
      }
    ],
    "explanation": "Pour les molécules complexes, formule brute, structure et dénomination apportent des informations complémentaires."
  },
  {
    "order": 21,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Une molécule a pour formule $\\ce{C4H10O}$. Combien d'atomes contient-elle au total ?",
    "answer": {
      "type": "number",
      "value": 15
    },
    "explanation": "Il y a 4 carbones, 10 hydrogènes et 1 oxygène : $4+10+1=15$."
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix affirmations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La formule brute indique la composition élémentaire.",
        "correct": true,
        "explanation": "Elle donne nature et nombre des atomes."
      },
      {
        "content": "La microanalyse fournit des pourcentages massiques.",
        "correct": true,
        "explanation": "C'est son principe."
      },
      {
        "content": "Le carbone est usuellement tétravalent.",
        "correct": true,
        "explanation": "Quatre ordres de liaison."
      },
      {
        "content": "L'oxygène neutre est usuellement divalent.",
        "correct": true,
        "explanation": "Deux ordres de liaison."
      },
      {
        "content": "L'hydrogène est usuellement monovalent.",
        "correct": true,
        "explanation": "Une liaison."
      },
      {
        "content": "La formule brute donne toujours la géométrie.",
        "correct": false,
        "explanation": "Elle ne donne pas l'espace."
      },
      {
        "content": "Une même formule brute interdit toute isomérie.",
        "correct": false,
        "explanation": "Plusieurs structures peuvent partager la formule."
      },
      {
        "content": "L'azote neutre usuel est toujours pentavalent.",
        "correct": false,
        "explanation": "La fiche le présente trivalent."
      },
      {
        "content": "La microanalyse suffit toujours sans masse molaire.",
        "correct": false,
        "explanation": "Une ambiguïté de facteur peut persister."
      },
      {
        "content": "Un nom commercial est une formule brute.",
        "correct": false,
        "explanation": "Ce sont deux types d'information différents."
      }
    ],
    "explanation": "Cette question rassemble les repères de base sur composition, valence et limites de la formule brute."
  }
];
