import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section D – Chaînes carbonées et nomenclature
 */

export const UE14_CH5_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans la convention spécifique utilisée par la fiche rémoise pour qualifier un atome de carbone, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Carbone primaire : il porte trois hydrogènes.",
        "correct": true,
        "explanation": "C'est la convention locale de la fiche."
      },
      {
        "content": "Carbone secondaire : il porte deux hydrogènes.",
        "correct": true,
        "explanation": "C'est la convention locale."
      },
      {
        "content": "Carbone tertiaire : il porte un hydrogène.",
        "correct": true,
        "explanation": "C'est la convention locale."
      },
      {
        "content": "Carbone quaternaire : il ne porte aucun hydrogène.",
        "correct": true,
        "explanation": "C'est la convention locale, y compris pour certains carbones engagés dans des liaisons multiples."
      }
    ],
    "explanation": "Dans ce chapitre rémois, ces termes sont définis par le nombre d'hydrogènes directement portés par le carbone. Il faut appliquer cette convention telle qu'elle est enseignée."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le propane $\\ce{CH3-CH2-CH3}$, selon la convention de la fiche :",
    "choices": [
      {
        "content": "Les deux carbones terminaux sont primaires.",
        "correct": true,
        "explanation": "Chaque CH3 porte trois H."
      },
      {
        "content": "Le carbone central est secondaire.",
        "correct": true,
        "explanation": "Le CH2 porte deux H."
      },
      {
        "content": "La molécule possède un carbone tertiaire.",
        "correct": false,
        "explanation": "Aucun carbone CH n'est présent."
      },
      {
        "content": "La molécule ne possède aucun carbone quaternaire.",
        "correct": true,
        "explanation": "Tous portent au moins deux H."
      }
    ],
    "explanation": "Le nombre d'hydrogènes portés permet ici de classer directement les trois carbones."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le butane $\\ce{CH3-CH2-CH2-CH3}$, selon la convention de la fiche :",
    "choices": [
      {
        "content": "Deux carbones sont primaires.",
        "correct": true,
        "explanation": "Les deux CH3 terminaux."
      },
      {
        "content": "Deux carbones sont secondaires.",
        "correct": true,
        "explanation": "Les deux CH2 internes."
      },
      {
        "content": "Un carbone est tertiaire.",
        "correct": false,
        "explanation": "Il n'y a pas de CH."
      },
      {
        "content": "Aucun carbone n'est quaternaire.",
        "correct": true,
        "explanation": "Aucun carbone n'est dépourvu d'H."
      }
    ],
    "explanation": "Le butane associe deux carbones primaires et deux secondaires dans cette convention."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La formule topologique du 2-méthylpropane est donnée ci-dessous : [[QUESTION_DIAGRAM]] Selon la convention de la fiche, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les trois carbones périphériques sont primaires.",
        "correct": true,
        "explanation": "Ce sont trois groupes CH3."
      },
      {
        "content": "Le carbone central est tertiaire.",
        "correct": true,
        "explanation": "Il porte un seul hydrogène."
      },
      {
        "content": "Il existe un carbone secondaire.",
        "correct": false,
        "explanation": "Aucun CH2."
      },
      {
        "content": "Il n'existe aucun carbone quaternaire.",
        "correct": true,
        "explanation": "Tous les carbones portent au moins un H."
      }
    ],
    "explanation": "Le 2-méthylpropane contient trois CH3 et un CH : trois carbones primaires et un tertiaire selon la convention locale.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "2-methylpropane-topological"
    }
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La formule topologique du 2,2-diméthylpropane est donnée ci-dessous : [[QUESTION_DIAGRAM]] Selon la convention de la fiche :",
    "choices": [
      {
        "content": "Les quatre carbones périphériques sont primaires.",
        "correct": true,
        "explanation": "Ce sont quatre CH3."
      },
      {
        "content": "Le carbone central ne porte aucun hydrogène.",
        "correct": true,
        "explanation": "Il est lié à quatre carbones."
      },
      {
        "content": "Le carbone central est qualifié de quaternaire.",
        "correct": true,
        "explanation": "Aucun H n'est porté par lui."
      },
      {
        "content": "Le carbone central est tertiaire.",
        "correct": false,
        "explanation": "Un carbone tertiaire porte un H dans cette convention."
      }
    ],
    "explanation": "Le motif central C(CH3)4 illustre le cas évident d'un carbone sans hydrogène.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "2-2-dimethylpropane-topological"
    }
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la propanone $\\ce{CH3-CO-CH3}$, selon la convention de la fiche rémoise :",
    "choices": [
      {
        "content": "Les deux carbones méthyliques sont primaires.",
        "correct": true,
        "explanation": "Chaque CH3 porte trois H."
      },
      {
        "content": "Le carbone carbonylé ne porte aucun hydrogène.",
        "correct": true,
        "explanation": "Il est lié aux deux méthyles et à O."
      },
      {
        "content": "Le carbone carbonylé est qualifié de quaternaire dans cette convention.",
        "correct": true,
        "explanation": "La fiche précise qu'un carbone sans H peut être engagé dans une liaison multiple."
      },
      {
        "content": "Le carbone carbonylé est secondaire parce qu'il est lié à deux carbones.",
        "correct": false,
        "explanation": "Ce serait une autre convention ; la fiche classe ici selon le nombre d'H."
      }
    ],
    "explanation": "Cette question souligne le caractère local de la convention : un carbone carbonylé sans hydrogène est rangé parmi les carbones quaternaires dans la fiche."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans l'éthène $\\ce{CH2=CH2}$, selon la convention de la fiche :",
    "choices": [
      {
        "content": "Chaque carbone porte deux hydrogènes.",
        "correct": true,
        "explanation": "La formule l'indique."
      },
      {
        "content": "Chaque carbone est donc qualifié de secondaire.",
        "correct": true,
        "explanation": "Deux H → secondaire dans la fiche."
      },
      {
        "content": "La double liaison empêche d'appliquer cette convention.",
        "correct": false,
        "explanation": "La fiche permet de classer aussi des carbones engagés dans des liaisons multiples."
      },
      {
        "content": "La molécule possède deux carbones primaires.",
        "correct": false,
        "explanation": "Aucun carbone CH3."
      }
    ],
    "explanation": "Le type de liaison C=C n'empêche pas de compter les hydrogènes portés par chaque carbone."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans l'éthanal $\\ce{CH3-CHO}$, selon la convention de la fiche :",
    "choices": [
      {
        "content": "Le carbone du groupe CH3 est primaire.",
        "correct": true,
        "explanation": "Il porte trois H."
      },
      {
        "content": "Le carbone aldéhydique porte un hydrogène.",
        "correct": true,
        "explanation": "Le motif CHO l'indique."
      },
      {
        "content": "Le carbone aldéhydique est donc qualifié de tertiaire.",
        "correct": true,
        "explanation": "Un H → tertiaire dans cette convention."
      },
      {
        "content": "Le carbone aldéhydique est quaternaire.",
        "correct": false,
        "explanation": "Il porte un hydrogène."
      }
    ],
    "explanation": "La convention locale dépend exclusivement du nombre d'hydrogènes liés au carbone considéré."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la lecture d'une formule topologique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chaque extrémité ou sommet non étiqueté représente généralement un carbone.",
        "correct": true,
        "explanation": "C'est la règle de lecture."
      },
      {
        "content": "Les hydrogènes liés aux carbones sont généralement implicites.",
        "correct": true,
        "explanation": "On les déduit de la valence du carbone."
      },
      {
        "content": "Les hétéroatomes comme O ou N restent écrits.",
        "correct": true,
        "explanation": "Ils ne sont pas omis."
      },
      {
        "content": "Une formule topologique interdit de reconstituer le nombre d'hydrogènes.",
        "correct": false,
        "explanation": "La valence permet justement de les déduire."
      }
    ],
    "explanation": "La formule topologique simplifie le dessin tout en conservant suffisamment d'information pour reconstituer la chaîne et les hydrogènes implicites."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans le 2-méthylbutane $\\ce{CH3-CH(CH3)-CH2-CH3}$, combien de carbones sont primaires selon la convention de la fiche ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les trois groupes CH3 portent chacun trois hydrogènes : ils sont primaires."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère le tert-butanol $\\ce{(CH3)3C-OH}$. Quelles propositions sont exactes en distinguant bien les deux classifications du cours ?",
    "choices": [
      {
        "content": "Le carbone portant OH ne porte aucun hydrogène.",
        "correct": true,
        "explanation": "Il est lié à trois méthyles et à O."
      },
      {
        "content": "Ce carbone est qualifié de quaternaire selon la convention locale sur les hydrogènes.",
        "correct": true,
        "explanation": "Zéro H → quaternaire."
      },
      {
        "content": "La fonction alcool est tertiaire.",
        "correct": true,
        "explanation": "Le carbone fonctionnel est lié à trois autres carbones."
      },
      {
        "content": "« carbone quaternaire » et « alcool tertiaire » décrivent ici deux critères différents.",
        "correct": true,
        "explanation": "L'un compte les H, l'autre les voisins carbonés du carbone fonctionnel."
      }
    ],
    "explanation": "La fiche met explicitement en garde contre la confusion entre degré du carbone et classe de l'alcool."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère le propan-2-ol $\\ce{CH3-CH(OH)-CH3}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone portant OH porte un hydrogène.",
        "correct": true,
        "explanation": "C'est un groupe CH."
      },
      {
        "content": "Il est qualifié de tertiaire selon la convention locale du degré des carbones.",
        "correct": true,
        "explanation": "Un H → tertiaire."
      },
      {
        "content": "La fonction alcool est secondaire.",
        "correct": true,
        "explanation": "Le carbone fonctionnel est lié à deux carbones."
      },
      {
        "content": "Le carbone est secondaire et l'alcool tertiaire.",
        "correct": false,
        "explanation": "Les deux classifications sont inversées ici."
      }
    ],
    "explanation": "Le même carbone peut être tertiaire selon le nombre d'H tout en portant un alcool secondaire selon le nombre de voisins carbonés."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère le propan-1-ol $\\ce{CH3-CH2-CH2-OH}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone portant OH porte deux hydrogènes.",
        "correct": true,
        "explanation": "C'est CH2."
      },
      {
        "content": "Il est qualifié de secondaire selon la convention locale du degré des carbones.",
        "correct": true,
        "explanation": "Deux H → secondaire."
      },
      {
        "content": "La fonction alcool est primaire.",
        "correct": true,
        "explanation": "Ce carbone est lié à un seul autre carbone."
      },
      {
        "content": "La classe de l'alcool se déduit uniquement du nombre d'hydrogènes portés.",
        "correct": false,
        "explanation": "Elle dépend des voisins carbonés."
      }
    ],
    "explanation": "Le propan-1-ol est l'exemple utile pour dissocier clairement « carbone secondaire » et « alcool primaire »."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'acide lactique peut s'écrire $\\ce{CH3-CH(OH)-COOH}$. Quelles propositions sont exactes dans les conventions du chapitre ?",
    "choices": [
      {
        "content": "Le carbone portant OH est qualifié de tertiaire selon le nombre d'H.",
        "correct": true,
        "explanation": "Il porte un H."
      },
      {
        "content": "La fonction alcool portée par ce carbone est secondaire.",
        "correct": true,
        "explanation": "Il est lié à deux carbones."
      },
      {
        "content": "Le carbone du carboxyle ne porte aucun H et est qualifié de quaternaire dans la convention locale.",
        "correct": true,
        "explanation": "Zéro H."
      },
      {
        "content": "Le groupe COOH est une fonction alcool.",
        "correct": false,
        "explanation": "Le OH appartient à l'acide carboxylique."
      }
    ],
    "explanation": "Cette molécule combine les deux classifications et rappelle qu'un OH intégré à COOH n'est pas une fonction alcool indépendante."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La valine est représentée ci-dessous : [[QUESTION_DIAGRAM]] Dans la convention locale de la fiche, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone du carboxyle est qualifié de quaternaire.",
        "correct": true,
        "explanation": "Il ne porte aucun H."
      },
      {
        "content": "Le carbone portant le groupe amine est qualifié de tertiaire.",
        "correct": true,
        "explanation": "Il porte un H."
      },
      {
        "content": "Le carbone ramifié de la chaîne latérale est également tertiaire.",
        "correct": true,
        "explanation": "C'est un CH."
      },
      {
        "content": "Les deux carbones méthyliques sont secondaires.",
        "correct": false,
        "explanation": "Ils sont primaires car CH3."
      }
    ],
    "explanation": "La lecture de la formule permet de classer chaque carbone selon le nombre d'hydrogènes qu'il porte.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "valine-topological"
    }
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les préfixes de nomenclature de 1 à 5 carbones, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "1 → méth-.",
        "correct": true,
        "explanation": "Méthane."
      },
      {
        "content": "2 → éth-.",
        "correct": true,
        "explanation": "Éthane."
      },
      {
        "content": "3 → prop-.",
        "correct": true,
        "explanation": "Propane."
      },
      {
        "content": "4 → but- et 5 → pent-.",
        "correct": true,
        "explanation": "Butane et pentane."
      }
    ],
    "explanation": "La série débute par méth-, éth-, prop-, but-, pent-."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les préfixes de 6 à 10 carbones, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "6 → hex-.",
        "correct": true,
        "explanation": "Hexane."
      },
      {
        "content": "7 → hept-.",
        "correct": true,
        "explanation": "Heptane."
      },
      {
        "content": "8 → oct-.",
        "correct": true,
        "explanation": "Octane."
      },
      {
        "content": "9 → non- et 10 → déc-.",
        "correct": true,
        "explanation": "Nonane et décane."
      }
    ],
    "explanation": "La fin de la série étudiée est hex-, hept-, oct-, non-, déc-."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel préfixe de nomenclature correspond à une chaîne de six carbones ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "hex",
        "hex-"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Six carbones correspondent au préfixe hex-, comme dans hexane."
  },
  {
    "order": 85,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel préfixe correspond à neuf carbones ?",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "non",
        "non-"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "Neuf carbones correspondent au préfixe non-, comme dans nonane."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le nom « 2-méthylbutane », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le parent butane contient quatre carbones.",
        "correct": true,
        "explanation": "But- signifie 4."
      },
      {
        "content": "Le substituant méthyle contient un carbone.",
        "correct": true,
        "explanation": "Méthyle correspond à CH3-."
      },
      {
        "content": "La molécule contient cinq carbones au total.",
        "correct": true,
        "explanation": "4 + 1 = 5."
      },
      {
        "content": "Le parent doit être appelé pentane uniquement parce que la molécule a cinq carbones au total.",
        "correct": false,
        "explanation": "Le nom du parent dépend de la chaîne principale retenue."
      }
    ],
    "explanation": "Le préfixe du parent décrit la chaîne principale ; les substituants ajoutent des carbones au total sans nécessairement allonger cette chaîne."
  },
  {
    "order": 87,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des groupes alkyles simples, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Méthyle : $\\ce{CH3-}$.",
        "correct": true,
        "explanation": "Un carbone."
      },
      {
        "content": "Éthyle : $\\ce{C2H5-}$.",
        "correct": true,
        "explanation": "Deux carbones."
      },
      {
        "content": "Propyle : $\\ce{C3H7-}$.",
        "correct": true,
        "explanation": "Trois carbones."
      },
      {
        "content": "Butyle : $\\ce{C4H9-}$.",
        "correct": true,
        "explanation": "Quatre carbones."
      }
    ],
    "explanation": "Les groupes alkyles correspondent aux alcanes auxquels on retire un hydrogène, d'où le suffixe -yl."
  },
  {
    "order": 88,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Méth- → 1 carbone.",
        "correct": true,
        "explanation": "Correct."
      },
      {
        "content": "Prop- → 3 carbones.",
        "correct": true,
        "explanation": "Correct."
      },
      {
        "content": "Pent- → 5 carbones.",
        "correct": true,
        "explanation": "Correct."
      },
      {
        "content": "Oct- → 8 carbones.",
        "correct": true,
        "explanation": "Correct."
      },
      {
        "content": "Déc- → 10 carbones.",
        "correct": true,
        "explanation": "Correct."
      },
      {
        "content": "Éth- → 3 carbones.",
        "correct": false,
        "explanation": "Éth- = 2."
      },
      {
        "content": "But- → 5 carbones.",
        "correct": false,
        "explanation": "But- = 4."
      },
      {
        "content": "Hex- → 7 carbones.",
        "correct": false,
        "explanation": "Hex- = 6."
      },
      {
        "content": "Hept- → 8 carbones.",
        "correct": false,
        "explanation": "Hept- = 7."
      },
      {
        "content": "Non- → 10 carbones.",
        "correct": false,
        "explanation": "Non- = 9."
      }
    ],
    "explanation": "Cette sélection consolide la série des préfixes de 1 à 10 carbones."
  },
  {
    "order": 89,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "La formule topologique de l'heptane est donnée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Elle comporte sept carbones.",
        "correct": true,
        "explanation": "Chaque sommet et extrémité non étiqueté compte."
      },
      {
        "content": "Le préfixe du parent est hept-.",
        "correct": true,
        "explanation": "Sept carbones."
      },
      {
        "content": "La formule brute de l'alcane est $\\ce{C7H16}$.",
        "correct": true,
        "explanation": "Pour un alcane acyclique saturé : CnH2n+2."
      },
      {
        "content": "Il s'agit d'un groupe heptyle.",
        "correct": false,
        "explanation": "La molécule complète saturée est l'heptane."
      }
    ],
    "explanation": "Le passage formule topologique ↔ nom ↔ formule brute est une compétence transversale de nomenclature.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "heptane-topological"
    }
  },
  {
    "order": 90,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos des couples alcane / groupe alkyle, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Méthane $\\ce{CH4}$ → méthyle $\\ce{CH3-}$.",
        "correct": true,
        "explanation": "Retrait d'un H."
      },
      {
        "content": "Éthane $\\ce{C2H6}$ → éthyle $\\ce{C2H5-}$.",
        "correct": true,
        "explanation": "Retrait d'un H."
      },
      {
        "content": "Propane $\\ce{C3H8}$ → propyle $\\ce{C3H7-}$.",
        "correct": true,
        "explanation": "Retrait d'un H."
      },
      {
        "content": "Butane $\\ce{C4H10}$ → butyle $\\ce{C4H9-}$.",
        "correct": true,
        "explanation": "Retrait d'un H."
      }
    ],
    "explanation": "Le suffixe -ane désigne l'alcane ; -yl désigne le substituant dérivé par perte d'un hydrogène."
  },
  {
    "order": 91,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quel nom correspond à la structure $\\ce{CH3-CH(CH3)-CH2-CH3}$ ?",
    "choices": [
      {
        "content": "2-méthylbutane.",
        "correct": true,
        "explanation": "La chaîne principale compte quatre carbones et le méthyle est en position 2."
      },
      {
        "content": "3-méthylbutane.",
        "correct": false,
        "explanation": "On choisit l'indice le plus petit."
      },
      {
        "content": "Pentane.",
        "correct": false,
        "explanation": "La chaîne continue la plus longue ne contient que quatre carbones."
      },
      {
        "content": "2-éthylpropane.",
        "correct": false,
        "explanation": "Le choix du parent doit privilégier la chaîne la plus longue."
      }
    ],
    "explanation": "La nomenclature d'une chaîne ramifiée simple repose sur le choix du parent puis la position du substituant."
  },
  {
    "order": 92,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "La formule topologique du 3-méthylhexane est donnée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La chaîne principale comporte six carbones.",
        "correct": true,
        "explanation": "Hex- = 6."
      },
      {
        "content": "Le substituant est un méthyle.",
        "correct": true,
        "explanation": "Un carbone supplémentaire."
      },
      {
        "content": "Le substituant est porté par le carbone 3 lorsque l'on choisit la numérotation la plus faible.",
        "correct": true,
        "explanation": "3 est préféré à 4."
      },
      {
        "content": "La molécule possède sept carbones au total.",
        "correct": true,
        "explanation": "6 + 1."
      }
    ],
    "explanation": "Cette structure mobilise simultanément longueur du parent, substituant et numérotation.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "3-methylhexane-topological"
    }
  },
  {
    "order": 93,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "L'isooctane est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La molécule comporte huit carbones au total.",
        "correct": true,
        "explanation": "C8."
      },
      {
        "content": "La chaîne principale est un pentane.",
        "correct": true,
        "explanation": "La plus longue chaîne retenue contient cinq carbones."
      },
      {
        "content": "Elle porte trois substituants méthyle en 2,2,4.",
        "correct": true,
        "explanation": "C'est la structure du 2,2,4-triméthylpentane."
      },
      {
        "content": "Son nom systématique est 2,2,4-triméthylpentane.",
        "correct": true,
        "explanation": "C'est le nom de référence de l'isooctane."
      }
    ],
    "explanation": "L'isooctane constitue un bon exemple de chaîne ramifiée où le nombre total de carbones dépasse la longueur de la chaîne principale.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "isooctane-topological"
    }
  },
  {
    "order": 94,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "La valine peut s'écrire $\\ce{HOOC-CH(NH2)-CH(CH3)2}$. Quelles propositions sont exactes pour la chaîne carbonée principale contenant le carboxyle ?",
    "choices": [
      {
        "content": "Elle comporte quatre carbones.",
        "correct": true,
        "explanation": "Le carbone carboxylique doit être inclus et la plus longue chaîne en contient quatre."
      },
      {
        "content": "Le préfixe du parent est but-.",
        "correct": true,
        "explanation": "Quatre carbones."
      },
      {
        "content": "Un groupe méthyle reste substituant de cette chaîne.",
        "correct": true,
        "explanation": "Le second méthyle de la ramification n'appartient pas au parent."
      },
      {
        "content": "La molécule ne contient que quatre carbones au total.",
        "correct": false,
        "explanation": "Elle en contient cinq."
      }
    ],
    "explanation": "Une molécule peut contenir davantage de carbones que sa chaîne principale retenue pour la nomenclature."
  },
  {
    "order": 95,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos de la formule topologique du 2-méthylbutane : [[QUESTION_DIAGRAM]]",
    "choices": [
      {
        "content": "Le comptage des sommets et extrémités donne cinq carbones.",
        "correct": true,
        "explanation": "La molécule est C5."
      },
      {
        "content": "La chaîne principale choisie contient quatre carbones.",
        "correct": true,
        "explanation": "Butane."
      },
      {
        "content": "Le groupe méthyle est en position 2.",
        "correct": true,
        "explanation": "Numérotation la plus faible."
      },
      {
        "content": "Tous les carbones sont secondaires selon la convention locale.",
        "correct": false,
        "explanation": "Trois sont primaires et un est tertiaire, notamment."
      }
    ],
    "explanation": "Cette lecture combine formule topologique, choix de chaîne et convention locale du degré des carbones.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "2-methylbutane-topological"
    }
  },
  {
    "order": 96,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On considère le 3-méthylhexan-2-ol représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La chaîne principale comporte six carbones.",
        "correct": true,
        "explanation": "Le parent est hexane."
      },
      {
        "content": "Le groupe hydroxyle reçoit l'indice 2.",
        "correct": true,
        "explanation": "Le suffixe fonctionnel doit recevoir l'indice le plus faible compatible."
      },
      {
        "content": "Un substituant méthyle est en position 3.",
        "correct": true,
        "explanation": "D'où 3-méthyl."
      },
      {
        "content": "La fonction alcool est secondaire.",
        "correct": true,
        "explanation": "Le carbone portant OH est lié à deux carbones."
      }
    ],
    "explanation": "Cette molécule combine nomenclature de chaîne et classification d'une fonction alcool.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "3-methylhexan-2-ol-topological"
    }
  },
  {
    "order": 97,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Combien de carbones contient au total le 3-éthyl-2-méthylpentane ?",
    "answer": {
      "type": "number",
      "value": 8,
      "tolerance": 0
    },
    "explanation": "La chaîne principale apporte 5 carbones, l'éthyle 2 et le méthyle 1 : total 8."
  },
  {
    "order": 98,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Pour nommer une chaîne ramifiée simple, quelles étapes sont cohérentes avec les exercices de ce chapitre ?",
    "choices": [
      {
        "content": "Identifier une chaîne principale appropriée, généralement la plus longue compatible avec la fonction prioritaire étudiée.",
        "correct": true,
        "explanation": "Le parent détermine le préfixe principal."
      },
      {
        "content": "Numéroter afin d'obtenir les indices les plus faibles selon les règles appliquées.",
        "correct": true,
        "explanation": "Cela permet de localiser substituants ou fonctions."
      },
      {
        "content": "Identifier les substituants alkyles.",
        "correct": true,
        "explanation": "Méthyle, éthyle, etc."
      },
      {
        "content": "Confondre le nombre total de carbones avec la longueur du parent.",
        "correct": false,
        "explanation": "Une molécule ramifiée peut avoir plus de carbones au total que sa chaîne principale."
      }
    ],
    "explanation": "La lecture d'une chaîne ramifiée demande de séparer parent, indices et substituants."
  },
  {
    "order": 99,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux molécules comportant sept carbones au total.",
    "choices": [
      {
        "content": "3-méthylhexane.",
        "correct": true,
        "explanation": "6 + 1 = 7."
      },
      {
        "content": "Heptane.",
        "correct": true,
        "explanation": "Le préfixe hept- correspond à sept carbones."
      },
      {
        "content": "2-méthylbutane.",
        "correct": false,
        "explanation": "4 + 1 = 5."
      },
      {
        "content": "2,2,4-triméthylpentane.",
        "correct": false,
        "explanation": "5 + 3 = 8."
      }
    ],
    "explanation": "Le décompte total se fait en additionnant les carbones du parent et des substituants indiqués par le nom."
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un carbone CH3 est primaire dans la convention locale.",
        "correct": true,
        "explanation": "Trois H."
      },
      {
        "content": "Un carbone CH2 est secondaire dans la convention locale.",
        "correct": true,
        "explanation": "Deux H."
      },
      {
        "content": "Un carbone CH est tertiaire dans la convention locale.",
        "correct": true,
        "explanation": "Un H."
      },
      {
        "content": "Un carbone sans H est quaternaire dans la convention locale.",
        "correct": true,
        "explanation": "Zéro H."
      },
      {
        "content": "Le suffixe -yl désigne un groupe alkyle.",
        "correct": true,
        "explanation": "Méthyle, éthyle, etc."
      },
      {
        "content": "Hex- signifie cinq carbones.",
        "correct": false,
        "explanation": "Hex- = 6."
      },
      {
        "content": "Déc- signifie neuf carbones.",
        "correct": false,
        "explanation": "Déc- = 10."
      },
      {
        "content": "Un alcool tertiaire possède trois groupes OH.",
        "correct": false,
        "explanation": "Il possède un carbone fonctionnel lié à trois carbones."
      },
      {
        "content": "Le nombre total de carbones est toujours égal à la longueur de la chaîne principale.",
        "correct": false,
        "explanation": "Les ramifications ajoutent des carbones."
      },
      {
        "content": "Une formule topologique écrit tous les hydrogènes liés au carbone.",
        "correct": false,
        "explanation": "Ils sont généralement implicites."
      }
    ],
    "explanation": "Cette sélection clôt la section en croisant convention locale des carbones, préfixes, groupes alkyles et lecture des chaînes."
  }
];
