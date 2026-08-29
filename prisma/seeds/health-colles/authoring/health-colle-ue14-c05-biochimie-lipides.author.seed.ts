import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C05 — Biochimie — Lipides
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 * Périmètre : acides gras, eicosanoïdes, glycérides/glycérophospholipides, sphingolipides, stérols/stéroïdes/stérides.
 */
export const UE14_COLLE_C05_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la structure et de la nomenclature des acides gras, quelles propositions sont exactes ?",
    "explanation": "Un acide gras associe une fonction carboxylique et une chaîne hydrocarbonée. La notation Δ repère les doubles liaisons depuis le carbone carboxylique, alors que la série n/ω se lit depuis l’extrémité méthyle.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acides-gras-nomenclature"
    ],
    "choices": [
      {
        "content": "Le carbone de la fonction carboxylique est le carbone 1 dans la nomenclature usuelle des acides gras.",
        "correct": true,
        "explanation": "La numérotation Δ commence au carbone carboxylique, qui porte le numéro 1."
      },
      {
        "content": "Dans la nomenclature oméga, on compte depuis l’extrémité méthyle de la chaîne.",
        "correct": true,
        "explanation": "Le carbone terminal méthyle est le carbone ω."
      },
      {
        "content": "La notation 18:1 indique un acide gras à 18 carbones comportant une double liaison.",
        "correct": true,
        "explanation": "Le premier nombre indique le nombre de carbones, le second le nombre de doubles liaisons."
      },
      {
        "content": "Un acide gras noté 16:0 appartient nécessairement à la série n-6.",
        "correct": false,
        "explanation": "Sans double liaison, la notion de série oméga définie par la première insaturation n’est pas applicable de cette manière."
      },
      {
        "content": "Le carbone α correspond au carbone terminal méthyle de la chaîne.",
        "correct": false,
        "explanation": "Le carbone α est le carbone adjacent au carbone carboxylique ; le carbone terminal est le carbone ω."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de fonctions ester comporte un triacylglycérol dans lequel les trois fonctions alcool du glycérol sont estérifiées ? Donnez uniquement la valeur numérique.",
    "explanation": "Un triacylglycérol résulte de l’estérification des trois fonctions alcool du glycérol par trois acides gras : il possède donc trois fonctions ester.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:triacylglycerols"
    ],
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Un acide gras est noté 18:2 Δ9,12. À quelle série oméga appartient-il ?",
    "explanation": "En comptant depuis l’extrémité méthyle, la première double liaison se situe à six carbones : il s’agit de l’acide linoléique, de série n-6.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:series-omega"
    ],
    "choices": [
      {
        "content": "n-6",
        "correct": true,
        "explanation": "Pour 18:2 Δ9,12, la double liaison la plus proche de l’extrémité méthyle correspond à 18 − 12 = 6."
      },
      {
        "content": "n-3",
        "correct": false,
        "explanation": "Une série n-3 correspondrait à une première double liaison située à trois carbones de l’extrémité méthyle."
      },
      {
        "content": "n-9",
        "correct": false,
        "explanation": "n-9 correspond notamment à l’acide oléique 18:1 Δ9."
      },
      {
        "content": "n-12",
        "correct": false,
        "explanation": "La valeur 12 est une position Δ comptée depuis le carbone carboxylique, pas le numéro de série oméga."
      },
      {
        "content": "Il est impossible de déterminer la série à partir de cette notation.",
        "correct": false,
        "explanation": "La longueur de chaîne et la position de la double liaison la plus proche de l’extrémité méthyle suffisent à déterminer la série."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux facteurs qui tendent à augmenter le point de fusion d’un acide gras, toutes choses égales par ailleurs.",
    "explanation": "L’allongement de la chaîne augmente les interactions entre chaînes, tandis que les doubles liaisons cis perturbent leur empilement et abaissent généralement le point de fusion.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:proprietes-physiques-acides-gras"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "L’augmentation de la longueur de la chaîne carbonée.",
        "correct": true,
        "explanation": "Une chaîne plus longue présente davantage d’interactions dispersives, ce qui tend à augmenter le point de fusion."
      },
      {
        "content": "La diminution du nombre de doubles liaisons cis.",
        "correct": true,
        "explanation": "La saturation favorise un empilement plus régulier des chaînes et augmente généralement le point de fusion."
      },
      {
        "content": "L’ajout d’une double liaison cis supplémentaire.",
        "correct": false,
        "explanation": "Une double liaison cis introduit un coude qui gêne l’empilement et tend à abaisser le point de fusion."
      },
      {
        "content": "Le raccourcissement de la chaîne de 18 à 8 carbones.",
        "correct": false,
        "explanation": "Une chaîne plus courte présente moins d’interactions entre chaînes et fond généralement à plus basse température."
      },
      {
        "content": "Le remplacement d’un acide gras saturé par un acide gras polyinsaturé de même longueur.",
        "correct": false,
        "explanation": "L’augmentation de l’insaturation tend à diminuer le point de fusion."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les acides gras essentiels et leurs séries, quelles propositions sont exactes ?",
    "explanation": "L’être humain ne peut pas introduire certaines doubles liaisons au-delà de positions déterminées ; l’acide linoléique et l’acide α-linolénique doivent donc être apportés par l’alimentation et initient respectivement les séries n-6 et n-3.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acides-gras-essentiels"
    ],
    "choices": [
      {
        "content": "L’acide linoléique 18:2 appartient à la série n-6.",
        "correct": true,
        "explanation": "Sa double liaison la plus proche de l’extrémité méthyle définit la série n-6."
      },
      {
        "content": "L’acide α-linolénique 18:3 appartient à la série n-3.",
        "correct": true,
        "explanation": "Il constitue le précurseur nutritionnel majeur de la famille n-3."
      },
      {
        "content": "Ces deux acides gras peuvent être synthétisés de novo en quantité suffisante par l’être humain, ce qui les rend non essentiels.",
        "correct": false,
        "explanation": "Ils sont dits essentiels parce qu’ils doivent être fournis par l’alimentation."
      },
      {
        "content": "Le caractère essentiel d’un acide gras dépend uniquement du fait qu’il possède un nombre impair de carbones.",
        "correct": false,
        "explanation": "Il dépend principalement des capacités enzymatiques de désaturation, pas de la parité de la chaîne."
      },
      {
        "content": "L’acide stéarique 18:0 est un acide gras essentiel de la série n-3.",
        "correct": false,
        "explanation": "L’acide stéarique est saturé et n’appartient pas à une série oméga définie par une insaturation."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel est le nom commun de l’acide gras 20:4 Δ5,8,11,14, précurseur majeur de nombreux eicosanoïdes ?",
    "explanation": "Le 20:4 Δ5,8,11,14 est l’acide arachidonique, acide gras de la série n-6 et précurseur de nombreux prostanoïdes, leucotriènes et lipoxines.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acide-arachidonique"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "acide arachidonique",
        "arachidonique"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true,
        "normalizeUnicode": true
      }
    }
  },
  {
    "order": 7,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Une molécule inhibe spécifiquement les cyclo-oxygénases sans inhiber les lipoxygénases. Quelle conséquence biosynthétique est la plus directe ?",
    "explanation": "Les cyclo-oxygénases conduisent aux prostanoïdes, alors que les lipoxygénases conduisent notamment aux leucotriènes et aux lipoxines.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:eicosanoides-cox-lox"
    ],
    "choices": [
      {
        "content": "La synthèse des leucotriènes est supprimée alors que celle des prostaglandines est intacte.",
        "correct": false,
        "explanation": "Les leucotriènes dépendent principalement de la voie des lipoxygénases."
      },
      {
        "content": "La synthèse des prostaglandines et des thromboxanes diminue, tandis que la voie des leucotriènes n’est pas directement bloquée.",
        "correct": true,
        "explanation": "Prostaglandines et thromboxanes sont des prostanoïdes produits par la voie COX."
      },
      {
        "content": "La libération de l’acide arachidonique par la phospholipase A2 est nécessairement empêchée.",
        "correct": false,
        "explanation": "La phospholipase A2 agit en amont de la COX ; son activité n’est pas directement supprimée par un inhibiteur spécifique de COX."
      },
      {
        "content": "La synthèse de tous les lipides membranaires est interrompue.",
        "correct": false,
        "explanation": "Les cyclo-oxygénases interviennent dans la synthèse d’eicosanoïdes, pas dans l’ensemble de la biosynthèse membranaire."
      },
      {
        "content": "La synthèse du cholestérol est directement bloquée.",
        "correct": false,
        "explanation": "Le cholestérol appartient à une autre voie biosynthétique."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux associations médiateur–effet correctement appariées.",
    "explanation": "TXA₂ et PGI₂ exercent localement des effets opposés sur le tonus vasculaire et l’agrégation plaquettaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:prostanoides-effets"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "TXA₂ — vasoconstriction et stimulation de l’agrégation plaquettaire.",
        "correct": true,
        "explanation": "Le thromboxane A₂ produit notamment par les plaquettes favorise vasoconstriction et agrégation."
      },
      {
        "content": "PGI₂ — vasodilatation et inhibition de l’agrégation plaquettaire.",
        "correct": true,
        "explanation": "La prostacycline endothéliale exerce des effets antagonistes de ceux du TXA₂."
      },
      {
        "content": "TXA₂ — puissant inhibiteur de l’agrégation plaquettaire.",
        "correct": false,
        "explanation": "TXA₂ favorise au contraire l’agrégation plaquettaire."
      },
      {
        "content": "PGI₂ — bronchoconstriction comme fonction principale dans ce couple vasculaire.",
        "correct": false,
        "explanation": "Dans ce couple, PGI₂ est surtout décrite comme vasodilatatrice et antiagrégante."
      },
      {
        "content": "PGE₂ — enzyme qui hydrolyse l’acide arachidonique en position sn-2.",
        "correct": false,
        "explanation": "PGE₂ est une prostaglandine ; l’enzyme qui libère un acide gras en sn-2 est une phospholipase A₂."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la biosynthèse et des propriétés des eicosanoïdes, quelles propositions sont exactes ?",
    "explanation": "Les eicosanoïdes sont des médiateurs lipidiques à 20 carbones, souvent dérivés de l’acide arachidonique. Les voies COX et LOX donnent des familles différentes et leur action est généralement locale et brève.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:eicosanoides-integration"
    ],
    "choices": [
      {
        "content": "Les prostaglandines et les thromboxanes appartiennent à la famille des prostanoïdes.",
        "correct": true,
        "explanation": "Ces deux familles sont produites dans la branche cyclo-oxygénase."
      },
      {
        "content": "La 5-lipoxygénase participe à la formation du leucotriène A4 à partir de l’acide arachidonique.",
        "correct": true,
        "explanation": "LTA4 est un intermédiaire majeur de la voie des leucotriènes."
      },
      {
        "content": "Les eicosanoïdes exercent souvent une action locale avec une demi-vie courte.",
        "correct": true,
        "explanation": "De nombreux prostanoïdes sont des médiateurs locaux rapidement dégradés."
      },
      {
        "content": "Les lipoxines appartiennent à la voie des lipoxygénases plutôt qu’à la voie des cyclo-oxygénases.",
        "correct": true,
        "explanation": "Elles sont formées dans la branche LOX."
      },
      {
        "content": "Tous les eicosanoïdes sont des hormones stéroïdiennes dérivées du cholestérol.",
        "correct": false,
        "explanation": "Les eicosanoïdes dérivent d’acides gras polyinsaturés à 20 carbones et ne possèdent pas le noyau stéroïde."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "L’acide palmitique est noté 16:0. Combien d’atomes de carbone comporte sa chaîne ? Donnez uniquement la valeur numérique.",
    "explanation": "Dans la notation abrégée des acides gras n:m, n indique le nombre total d’atomes de carbone et m le nombre de doubles liaisons C=C. L’acide palmitique 16:0 possède donc 16 carbones et aucune double liaison.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:acide-palmitique"
    ],
    "answer": {
      "type": "number",
      "value": 16,
      "tolerance": 0
    }
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans la molécule A, quel alcool polaire correspond au groupement X porté par le phosphate ?",
    "explanation": "La molécule A est une phosphatidylcholine : le phosphate porté par le glycérol est estérifié par la choline. La nature de l’alcool fixé au phosphate contribue à définir la classe du glycérophospholipide.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:phosphatidylcholine"
    ],
    "choices": [
      {
        "content": "Sérine.",
        "correct": false,
        "explanation": "La sérine définit la phosphatidylsérine."
      },
      {
        "content": "Éthanolamine.",
        "correct": false,
        "explanation": "L’éthanolamine définit la phosphatidyléthanolamine."
      },
      {
        "content": "Choline.",
        "correct": true,
        "explanation": "La choline est la tête polaire des phosphatidylcholines, aussi appelées lécithines."
      },
      {
        "content": "Sphingosine.",
        "correct": false,
        "explanation": "La sphingosine est le squelette de base des sphingolipides, pas la tête polaire d’une phosphatidylcholine."
      },
      {
        "content": "Cholestérol.",
        "correct": false,
        "explanation": "Le cholestérol est un stérol et ne définit pas cette classe de glycérophospholipides."
      }
    ]
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "En comparant les molécules A et B, quelles propositions sont exactes ?",
    "explanation": "Un triacylglycérol est un glycérol dont les trois fonctions alcool sont estérifiées par des acides gras. Un acide phosphatidique possède deux chaînes acyles en sn-1 et sn-2 et un phosphate en sn-3 ; l’ajout d’un alcool sur ce phosphate conduit à différentes classes de glycérophospholipides. Un lysophospholipide résulte de la perte d’une chaîne acyle d’un phospholipide diacylé.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:glycerides-phospholipides"
    ],
    "choices": [
      {
        "content": "La molécule B comporte trois acides gras estérifiant les trois fonctions alcool du glycérol.",
        "correct": true,
        "explanation": "C’est la structure fondamentale d’un triglycéride."
      },
      {
        "content": "Dans la molécule A, deux acides gras estérifient les positions sn-1 et sn-2 du glycérol tandis qu’un phosphate est lié au sn-3.",
        "correct": true,
        "explanation": "Il constitue un précurseur structural de nombreux glycérophospholipides."
      },
      {
        "content": "La tête polaire d’un glycérophospholipide peut contenir notamment de la sérine, de l’éthanolamine, de la choline ou de l’inositol.",
        "correct": true,
        "explanation": "La nature de l’alcool lié au phosphate définit plusieurs classes de phospholipides."
      },
      {
        "content": "La molécule B possède obligatoirement un phosphate central responsable de son amphiphilie.",
        "correct": false,
        "explanation": "Le triacylglycérol ne contient pas de phosphate et est strongly hydrophobe."
      },
      {
        "content": "Un lysophospholipide possède nécessairement trois chaînes acyles.",
        "correct": false,
        "explanation": "Il résulte typiquement de la perte d’un acide gras d’un phospholipide, par exemple en sn-2."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "En vous appuyant sur l’organisation de la molécule A, sélectionnez exactement les deux associations enzyme–site de coupure correctes.",
    "explanation": "La phospholipase A1 hydrolyse l’ester portant l’acide gras en sn-1. La phospholipase A2 agit sur l’ester en sn-2. La phospholipase C coupe du côté glycérol du phosphodiester, alors que la phospholipase D hydrolyse la liaison entre le phosphate et l’alcool de la tête polaire.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:phospholipases"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "Phospholipase A1 — liaison ester de l’acide gras porté par le carbone sn-1.",
        "correct": true,
        "explanation": "PLA1 hydrolyse l’ester acyle en position sn-1."
      },
      {
        "content": "Phospholipase D — liaison entre le phosphate et l’alcool constituant la tête polaire.",
        "correct": true,
        "explanation": "PLD libère la tête alcool en hydrolysant cette liaison phosphodiester."
      },
      {
        "content": "Phospholipase A2 — liaison entre le glycérol et le phosphate.",
        "correct": false,
        "explanation": "PLA2 hydrolyse l’ester acyle en sn-2 ; la liaison glycérol–phosphate est la cible de PLC."
      },
      {
        "content": "Phospholipase C — liaison ester de l’acide gras en sn-1.",
        "correct": false,
        "explanation": "PLC coupe du côté glycérol–phosphate, pas une liaison acyle en sn-1."
      },
      {
        "content": "Phospholipase D — liaison amide du céramide.",
        "correct": false,
        "explanation": "La liaison amide du céramide appartient au métabolisme des sphingolipides et n’est pas la cible définissant PLD."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la molécule A, de son organisation membranaire et de la signalisation phospholipidique, quelles propositions sont exactes ?",
    "explanation": "Les glycérophospholipides sont amphiphiles : les chaînes acyles forment une région hydrophobe, tandis que le phosphate et l’alcool de tête contribuent à la région polaire. Cette organisation favorise leur association en structures membranaires en milieu aqueux. Certains phosphatidylinositols sont également des précurseurs ou acteurs de voies de signalisation.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:phospholipides-membrane-signalisation"
    ],
    "choices": [
      {
        "content": "Deux chaînes acyles constituent la majeure partie de la région hydrophobe d’un glycérophospholipide classique.",
        "correct": true,
        "explanation": "Les acides gras estérifiés au glycérol forment les deux bras hydrophobes."
      },
      {
        "content": "Le phosphate et l’alcool qui lui est lié participent à la tête polaire.",
        "correct": true,
        "explanation": "Avec le glycérol, ils constituent la région hydrophile de la molécule."
      },
      {
        "content": "Les phosphatidylinositols peuvent participer à des voies de signalisation intracellulaire.",
        "correct": true,
        "explanation": "Ils sont des composants membranaires minoritaires mais fonctionnellement importants."
      },
      {
        "content": "Le caractère amphiphile impose aux phospholipides de rester exclusivement sous forme de molécules isolées en milieu aqueux.",
        "correct": false,
        "explanation": "Ils s’auto-organisent notamment en bicouches, micelles ou liposomes selon les conditions."
      },
      {
        "content": "La présence d’un phosphate rend un glycérophospholipide totalement hydrophile et dépourvu de région apolaire.",
        "correct": false,
        "explanation": "Les chaînes acyles conservent une importante région hydrophobe."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel amino-diol à 18 carbones constitue le squelette de base des sphingolipides ?",
    "explanation": "La sphingosine est le squelette caractéristique des sphingolipides. Son amine en C2 peut former une liaison amide avec un acide gras pour donner un céramide.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:sphingosine"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "sphingosine",
        "la sphingosine"
      ],
      "normalization": {
        "trim": true,
        "collapseWhitespace": true,
        "caseSensitive": false,
        "ignoreAccents": true,
        "normalizeUnicode": true
      }
    }
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle description correspond à un céramide ?",
    "explanation": "Un céramide associe une sphingosine et un acide gras par une liaison amide impliquant l’amine en C2 de la sphingosine.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:ceramide"
    ],
    "choices": [
      {
        "content": "Un glycérol estérifié par trois acides gras.",
        "correct": false,
        "explanation": "Cette structure correspond à un triacylglycérol."
      },
      {
        "content": "Un cholestérol dont l’hydroxyle en C3 est estérifié par un acide gras.",
        "correct": false,
        "explanation": "Cette structure correspond à un stéride, ou ester de cholestérol."
      },
      {
        "content": "Un acide phosphatidique lié à une choline.",
        "correct": false,
        "explanation": "Cette structure correspond à une phosphatidylcholine."
      },
      {
        "content": "Une sphingosine liée à un acide gras par une liaison amide.",
        "correct": true,
        "explanation": "C’est la structure de base d’un céramide."
      },
      {
        "content": "Un acide arachidonique cyclisé par une cyclo-oxygénase.",
        "correct": false,
        "explanation": "Cela renvoie à la formation de prostanoïdes, pas à un céramide."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les sphingolipides et certaines sphingolipidoses, quelles propositions sont exactes ?",
    "explanation": "Les glycosphingolipides dérivent du céramide et portent un ou plusieurs oses en C1. Leur dégradation est lysosomale et des déficits enzymatiques peuvent provoquer des maladies d’accumulation caractéristiques.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:sphingolipidoses"
    ],
    "choices": [
      {
        "content": "La sphingomyéline contient un céramide et une tête phosphatée pouvant comporter de la choline.",
        "correct": true,
        "explanation": "Elle appartient aux phosphosphingolipides."
      },
      {
        "content": "Un cérébroside est un glycosphingolipide portant un seul ose sur le céramide.",
        "correct": true,
        "explanation": "Un glucosylcéramide ou un galactosylcéramide est un cérébroside."
      },
      {
        "content": "La maladie de Tay-Sachs est associée à un déficit en hexosaminidase et à une accumulation de ganglioside GM2.",
        "correct": true,
        "explanation": "Le défaut de dégradation du GM2 entraîne son accumulation."
      },
      {
        "content": "La maladie de Gaucher correspond à une accumulation de phosphatidylcholine due à un déficit en phospholipase A2.",
        "correct": false,
        "explanation": "Elle concerne la dégradation du glucosylcéramide, classiquement par déficit en glucocérébrosidase/β-glucosidase."
      },
      {
        "content": "Les gangliosides sont dépourvus de tout résidu glucidique.",
        "correct": false,
        "explanation": "Ils portent au contraire une chaîne oligosaccharidique contenant notamment un ou plusieurs résidus d’acide sialique."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "question": "Sélectionnez exactement les deux couples maladie–anomalie biochimique correctement appariés.",
    "explanation": "Les sphingolipidoses sont des maladies d’accumulation dues à des déficits d’enzymes de dégradation spécifiques.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:sphingolipidoses-couples"
    ],
    "requiredSelectionCount": 2,
    "choices": [
      {
        "content": "Tay-Sachs — déficit en β-hexosaminidase avec accumulation de GM2.",
        "correct": true,
        "explanation": "Le ganglioside GM2 s’accumule lorsque l’hexosaminidase nécessaire à sa dégradation est déficiente."
      },
      {
        "content": "Gaucher — déficit en glucocérébrosidase/β-glucosidase avec accumulation de glucosylcéramide.",
        "correct": true,
        "explanation": "Le glucosylcéramide n’est plus correctement dégradé et s’accumule."
      },
      {
        "content": "Fabry — déficit en cyclo-oxygénase avec accumulation de thromboxane A2.",
        "correct": false,
        "explanation": "Fabry est une sphingolipidose liée à un déficit en α-galactosidase A, pas à la voie COX."
      },
      {
        "content": "Krabbe — déficit en phospholipase D avec accumulation de phosphatidylcholine.",
        "correct": false,
        "explanation": "Krabbe concerne la dégradation de galactosylcéramides, pas celle des glycérophospholipides par PLD."
      },
      {
        "content": "Tay-Sachs — déficit en sphingomyélinase avec accumulation exclusive de cholestérol estérifié.",
        "correct": false,
        "explanation": "Le couple classique à retenir est déficit en hexosaminidase et accumulation de GM2."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des stérols, stérides et stéroïdes, quelles propositions sont exactes ?",
    "explanation": "Le noyau stérane comporte quatre cycles fusionnés. Un stérol porte notamment un hydroxyle en C3 ; son estérification par un acide gras forme un stéride plus hydrophobe.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:sterols-sterides-steroides"
    ],
    "choices": [
      {
        "content": "Le noyau stérane comporte trois cycles à six carbones et un cycle à cinq carbones.",
        "correct": true,
        "explanation": "Cette architecture tétracyclique est commune aux stéroïdes."
      },
      {
        "content": "Le cholestérol libre possède un groupement hydroxyle en C3 qui lui confère une petite région polaire.",
        "correct": true,
        "explanation": "Cet OH explique le caractère amphipathique du cholestérol libre."
      },
      {
        "content": "L’estérification de l’hydroxyle du cholestérol par un acide gras augmente son caractère hydrophobe.",
        "correct": true,
        "explanation": "Le groupement OH libre est masqué et la molécule devient plus apolaire."
      },
      {
        "content": "Un stéride est un glycérol portant trois acides gras.",
        "correct": false,
        "explanation": "Cette définition correspond à un triacylglycérol ; un stéride est un ester de stérol."
      },
      {
        "content": "Toutes les hormones stéroïdiennes possèdent une tête phosphate et deux chaînes acyles comme les glycérophospholipides.",
        "correct": false,
        "explanation": "Les hormones stéroïdiennes dérivent du noyau stéroïde et ne possèdent pas cette architecture phospholipidique."
      }
    ]
  },
  {
    "order": 20,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d’atomes de carbone comporte le cholestérol ? Donnez uniquement la valeur numérique.",
    "explanation": "Le cholestérol comporte 27 atomes de carbone.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:cholesterol"
    ],
    "answer": {
      "type": "number",
      "value": 27,
      "tolerance": 0
    }
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel composé appartient au groupe des stéroïdes à noyau prégnane comportant 21 carbones ?",
    "explanation": "Les stéroïdes à noyau prégnane comprennent notamment la progestérone, le cortisol et l’aldostérone.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:hormones-steroidiennes"
    ],
    "choices": [
      {
        "content": "Œstradiol.",
        "correct": false,
        "explanation": "Les œstrogènes sont rattachés au noyau estrane à 18 carbones."
      },
      {
        "content": "Testostérone.",
        "correct": false,
        "explanation": "Les androgènes comme la testostérone sont rattachés au noyau androstane à 19 carbones."
      },
      {
        "content": "Le cholestérol à 27 carbones.",
        "correct": false,
        "explanation": "Le cholestérol est un stérol à 27 carbones et un précurseur des hormones stéroïdiennes."
      },
      {
        "content": "Acide arachidonique.",
        "correct": false,
        "explanation": "L’acide arachidonique est un acide gras polyinsaturé à 20 carbones."
      },
      {
        "content": "Cortisol.",
        "correct": true,
        "explanation": "Le cortisol est un glucocorticoïde dérivé d’un squelette prégnane à 21 carbones."
      }
    ]
  },
  {
    "order": 22,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le cholestérol occupe plusieurs fonctions dans l’organisme. Quelles propositions sont exactes ?",
    "explanation": "Le cholestérol est à la fois un constituant membranaire et un précurseur de molécules dérivées, notamment hormones stéroïdiennes et acides biliaires. Son esterification sert notamment au stockage et au transport sous une forme plus hydrophobe.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:cholesterol-roles"
    ],
    "choices": [
      {
        "content": "Le cholestérol libre participe à la structure et à la modulation de la fluidité des membranes.",
        "correct": true,
        "explanation": "Il s’insère entre les phospholipides et contribue aux propriétés physiques de la membrane."
      },
      {
        "content": "Il constitue un précurseur des hormones stéroïdiennes.",
        "correct": true,
        "explanation": "Les hormones stéroïdiennes dérivent du cholestérol."
      },
      {
        "content": "Les acides biliaires sont des dérivés du cholestérol impliqués dans la digestion intestinale des lipides.",
        "correct": true,
        "explanation": "Ils facilitent notamment la dispersion des lipides dans le tube digestif."
      },
      {
        "content": "Le cholestérol estérifié est plus amphiphile que le cholestérol libre parce qu’il expose davantage son groupement OH.",
        "correct": false,
        "explanation": "L’estérification masque l’OH et rend la molécule plus hydrophobe."
      },
      {
        "content": "La vitamine D est un triacylglycérol de réserve du tissu adipeux.",
        "correct": false,
        "explanation": "La vitamine D est un dérivé stéroïdien du cholestérol, pas un triacylglycérol."
      }
    ]
  },
  {
    "order": 23,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "En vous appuyant sur les molécules A, B et C et sur les grandes familles lipidiques qu’elles illustrent, quelles propositions sont exactes ?",
    "explanation": "Les glycérophospholipides reposent sur un squelette glycérol, alors que les sphingolipides dérivent de la sphingosine. L’acylation de la fonction amine de la sphingosine forme un céramide. Le cholestérol appartient aux stérols et possède le noyau stérane caractéristique. Les eicosanoïdes constituent une famille différente, dérivée notamment de l’acide arachidonique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:comparaison-familles-lipidiques"
    ],
    "choices": [
      {
        "content": "Le squelette d’un glycérophospholipide classique est le glycérol.",
        "correct": true,
        "explanation": "Il porte généralement deux acides gras et un phosphate."
      },
      {
        "content": "Le squelette caractéristique des sphingolipides est la sphingosine.",
        "correct": true,
        "explanation": "La sphingosine est un amino-diol à longue chaîne."
      },
      {
        "content": "Un céramide contient une liaison amide entre un acide gras et la sphingosine.",
        "correct": true,
        "explanation": "Cette liaison implique l’amine en C2 de la sphingosine."
      },
      {
        "content": "Le cholestérol possède un noyau stérane et non un squelette glycérol triestérifié.",
        "correct": true,
        "explanation": "Sa structure tétracyclique le distingue nettement des glycérides."
      },
      {
        "content": "Les eicosanoïdes sont des glycosphingolipides constitués d’un céramide et de plusieurs oses.",
        "correct": false,
        "explanation": "Les eicosanoïdes dérivent d’acides gras à 20 carbones, alors que la description proposée correspond à des glycosphingolipides."
      }
    ]
  },
  {
    "order": 24,
    "difficulty": "HARD",
    "format": "QZONE",
    "question": "Sur la molécule A, sélectionnez le groupement phosphate du glycérophospholipide.",
    "explanation": "Dans un glycérophospholipide, le phosphate est lié au troisième carbone du glycérol et porte l’alcool constituant la tête polaire. Dans une phosphatidylcholine, cet alcool est la choline.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:qzone-phosphate-phospholipide"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c05/lipid-families-linked-q23-q24.svg",
      "alt": "Comparaison de trois structures lipidiques A, B et C représentant un glycérophospholipide, un céramide et un stérol, sans légende donnant leur nom.",
      "width": 1200,
      "height": 700
    },
    "expectedZones": [
      {
        "id": "target-phosphate",
        "label": "Groupement phosphate",
        "x": 0.15,
        "y": 0.52,
        "tolerance": 0.05
      }
    ],
    "defaultTolerance": 0.05
  },
  {
    "order": 25,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "question": "Pour cette synthèse sur les lipides, sélectionnez exactement les cinq propositions correctes.",
    "explanation": "Cette question croise nomenclature des acides gras, eicosanoïdes, phospholipides, sphingolipides et stérols. Les cinq propositions exactes reposent sur des critères structuraux ou enzymatiques distincts.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C05",
      "ec:BIOCHIMIE",
      "theme:synthese-lipides"
    ],
    "requiredSelectionCount": 5,
    "choices": [
      {
        "content": "Un acide gras 18:3 n-3 appartient à une famille oméga-3.",
        "correct": true,
        "explanation": "La notation n-3 indique que la première double liaison est située à trois carbones de l’extrémité méthyle."
      },
      {
        "content": "La voie des cyclo-oxygénases participe à la formation des prostanoïdes.",
        "correct": true,
        "explanation": "Les prostaglandines et thromboxanes dérivent de cette voie."
      },
      {
        "content": "Une phosphatidyléthanolamine possède de l’éthanolamine comme tête polaire liée au phosphate.",
        "correct": true,
        "explanation": "La tête polaire donne son nom à la classe de phospholipide."
      },
      {
        "content": "Un céramide est formé d’une sphingosine et d’un acide gras unis par une liaison amide.",
        "correct": true,
        "explanation": "Le groupement amine en C2 de la sphingosine est acylé par l’acide gras."
      },
      {
        "content": "Le cholestérol libre est amphipathique grâce notamment à son groupement hydroxyle.",
        "correct": true,
        "explanation": "Le reste de la molécule est largement hydrophobe, mais l’OH constitue une petite région polaire."
      },
      {
        "content": "Un triacylglycérol contient obligatoirement un groupement phosphate.",
        "correct": false,
        "explanation": "Il est constitué de glycérol estérifié par trois acides gras, sans phosphate obligatoire."
      },
      {
        "content": "Les leucotriènes sont produits principalement par la cyclo-oxygénase.",
        "correct": false,
        "explanation": "Ils sont issus de la voie des lipoxygénases."
      },
      {
        "content": "La phospholipase A2 hydrolyse spécifiquement l’ester acyle en sn-1.",
        "correct": false,
        "explanation": "PLA2 agit en sn-2 ; PLA1 agit en sn-1."
      },
      {
        "content": "La sphingomyéline est un triacylglycérol de réserve dépourvu d’azote et de phosphate.",
        "correct": false,
        "explanation": "La sphingomyéline dérive d’un céramide et comporte une tête phosphatée contenant souvent de la choline."
      },
      {
        "content": "L’estérification du cholestérol augmente l’exposition de son hydroxyle et renforce son hydrophilie.",
        "correct": false,
        "explanation": "L’estérification masque l’OH et augmente l’hydrophobicité."
      }
    ]
  }
];
