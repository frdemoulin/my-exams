import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.1 – Section D – Chaînes carbonées et nomenclature
 */

export const UE14_CH5_SECTION_D_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 67,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le degré d'un atome de carbone dans une chaîne carbonée, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un carbone tertiaire porte nécessairement un seul hydrogène.",
        "correct": false,
        "explanation": "Le caractère tertiaire dépend du nombre de voisins carbonés et non du nombre d'hydrogènes portés. Un carbone tertiaire est lié à trois autres carbones."
      },
      {
        "content": "Un carbone quaternaire est directement lié à quatre autres atomes de carbone.",
        "correct": true,
        "explanation": "Quatre voisins carbonés définissent un carbone quaternaire ; un tel carbone ne porte alors aucun hydrogène dans une structure organique neutre usuelle."
      },
      {
        "content": "Le degré d’un carbone se détermine en comptant uniquement les hydrogènes qu’il porte.",
        "correct": false,
        "explanation": "Le degré d’un carbone se détermine par le nombre d’atomes de carbone qui lui sont directement liés."
      },
      {
        "content": "Un carbone primaire est directement lié à un seul autre atome de carbone.",
        "correct": true,
        "explanation": "Le degré d'un carbone se détermine en comptant les autres atomes de carbone qui lui sont directement liés. Un seul voisin carboné correspond à un carbone primaire."
      },
      {
        "content": "Un carbone secondaire est directement lié à deux autres atomes de carbone.",
        "correct": true,
        "explanation": "Deux voisins carbonés définissent un carbone secondaire."
      }
    ],
    "explanation": "Le degré d'un carbone dépend du nombre d'atomes de carbone directement liés à celui-ci : un, deux, trois ou quatre voisins carbonés correspondent respectivement à un carbone primaire, secondaire, tertiaire ou quaternaire. Il ne faut pas définir ce degré en comptant simplement les hydrogènes portés."
  },
  {
    "order": 68,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le propane $\\ce{CH3-CH2-CH3}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les carbones terminaux sont secondaires parce qu'ils portent trois hydrogènes.",
        "correct": false,
        "explanation": "Le degré se détermine par le nombre de voisins carbonés, pas par le nombre d'hydrogènes. Chaque carbone terminal n'a qu'un voisin carboné et est donc primaire."
      },
      {
        "content": "Le carbone central est tertiaire.",
        "correct": false,
        "explanation": "Le carbone central du propane est directement lié à deux carbones : il est secondaire."
      },
      {
        "content": "Les deux carbones terminaux sont primaires.",
        "correct": true,
        "explanation": "Chaque carbone terminal est directement lié à un seul autre carbone : il est donc primaire."
      },
      {
        "content": "Le carbone central est secondaire.",
        "correct": true,
        "explanation": "Le carbone central est directement lié aux deux carbones terminaux : il possède deux voisins carbonés et est donc secondaire."
      },
      {
        "content": "La molécule possède un carbone tertiaire.",
        "correct": false,
        "explanation": "Aucun carbone du propane n'est directement lié à trois autres carbones."
      }
    ],
    "explanation": "Dans le propane, les deux carbones terminaux possèdent chacun un voisin carboné et sont primaires ; le carbone central en possède deux et est secondaire."
  },
  {
    "order": 69,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Dans le butane $\\ce{CH3-CH2-CH2-CH3}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les carbones terminaux sont tertiaires.",
        "correct": false,
        "explanation": "Les carbones terminaux du butane sont chacun directement liés à un seul carbone : ils sont primaires."
      },
      {
        "content": "Deux carbones sont primaires.",
        "correct": true,
        "explanation": "Les deux carbones terminaux sont chacun liés à un seul autre carbone : ils sont primaires."
      },
      {
        "content": "Deux carbones sont secondaires.",
        "correct": true,
        "explanation": "Les deux carbones internes sont chacun liés à deux autres carbones : ils sont secondaires."
      },
      {
        "content": "Un carbone est tertiaire parce que la molécule contient quatre carbones au total.",
        "correct": false,
        "explanation": "Le degré s'apprécie localement pour chaque carbone. Aucun carbone du butane n'est directement lié à trois autres carbones."
      },
      {
        "content": "Les deux groupes $\\ce{CH2}$ sont primaires parce qu'ils portent deux hydrogènes.",
        "correct": false,
        "explanation": "Chaque groupe $\\ce{CH2}$ interne est lié à deux autres carbones ; les carbones correspondants sont donc secondaires."
      }
    ],
    "explanation": "Le butane non ramifié comporte deux carbones primaires aux extrémités et deux carbones secondaires au centre."
  },
  {
    "order": 70,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La formule topologique du 2-méthylpropane est donnée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Les trois carbones périphériques sont primaires.",
        "correct": true,
        "explanation": "Chacun des trois carbones périphériques est lié uniquement au carbone central : ils sont donc primaires."
      },
      {
        "content": "Le carbone central est tertiaire.",
        "correct": true,
        "explanation": "Le carbone central est directement lié aux trois carbones périphériques : il possède trois voisins carbonés."
      },
      {
        "content": "Le carbone central est quaternaire parce qu'il occupe le centre de la ramification.",
        "correct": false,
        "explanation": "La position graphique ne détermine pas le degré. Le carbone central n'est lié qu'à trois autres carbones : il est tertiaire."
      },
      {
        "content": "La molécule possède un carbone secondaire.",
        "correct": false,
        "explanation": "Aucun carbone n'est directement lié à exactement deux autres carbones."
      },
      {
        "content": "Les trois carbones périphériques sont secondaires.",
        "correct": false,
        "explanation": "Chacun des trois carbones périphériques n’est lié qu’au carbone central : ils sont primaires."
      }
    ],
    "explanation": "Le 2-méthylpropane comporte trois carbones primaires et un carbone tertiaire. Le degré dépend du nombre de voisins carbonés, pas de la position du carbone sur le dessin.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "2-methylpropane-topological"
    }
  },
  {
    "order": 71,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "La formule topologique du 2,2-diméthylpropane est donnée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone central est quaternaire.",
        "correct": true,
        "explanation": "Le carbone central est directement lié à quatre autres carbones : il est donc quaternaire."
      },
      {
        "content": "Le carbone central est tertiaire parce qu'il ne porte aucun hydrogène.",
        "correct": false,
        "explanation": "L'absence d'hydrogène ne définit pas à elle seule le degré. Ici, le carbone central possède quatre voisins carbonés et est quaternaire."
      },
      {
        "content": "La molécule possède deux carbones secondaires.",
        "correct": false,
        "explanation": "Aucun carbone de cette molécule n'est lié à exactement deux autres carbones."
      },
      {
        "content": "Le carbone central porte un hydrogène.",
        "correct": false,
        "explanation": "Le carbone central du 2,2-diméthylpropane est lié à quatre carbones et ne porte aucun hydrogène."
      },
      {
        "content": "Les quatre carbones périphériques sont primaires.",
        "correct": true,
        "explanation": "Chaque carbone périphérique n'est lié qu'au carbone central : il possède un seul voisin carboné."
      }
    ],
    "explanation": "Le 2,2-diméthylpropane illustre clairement un carbone quaternaire : le carbone central est lié à quatre carbones primaires.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "2-2-dimethylpropane-topological"
    }
  },
  {
    "order": 72,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la propanone $\\ce{CH3-CO-CH3}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone carbonylé est quaternaire parce qu'il ne porte aucun hydrogène.",
        "correct": false,
        "explanation": "Le degré d'un carbone se détermine en comptant ses voisins carbonés. Le carbone carbonylé de la propanone n'en possède que deux ; l'absence d'hydrogène ne suffit pas à le qualifier de quaternaire."
      },
      {
        "content": "La double liaison $\\ce{C=O}$ compte comme deux voisins carbonés.",
        "correct": false,
        "explanation": "Le degré dépend du nombre d'atomes de carbone directement liés, pas de l'ordre des liaisons. L'oxygène du carbonyle n'est pas un voisin carboné."
      },
      {
        "content": "Le carbone carbonylé est secondaire car il est directement lié à deux carbones.",
        "correct": true,
        "explanation": "Dans la propanone, le carbone du carbonyle a deux voisins carbonés ; il est donc secondaire."
      },
      {
        "content": "Les deux carbones des groupes $\\ce{CH3}$ sont primaires.",
        "correct": true,
        "explanation": "Chacun de ces carbones méthyliques est directement lié uniquement au carbone carbonylé : ils sont primaires."
      },
      {
        "content": "Le carbone carbonylé est directement lié à deux autres carbones.",
        "correct": true,
        "explanation": "Le carbone du groupe $\\ce{C=O}$ est relié aux deux groupes méthyle ; il possède donc deux voisins carbonés."
      }
    ],
    "explanation": "La propanone montre pourquoi il ne faut pas déduire le degré d'un carbone à partir du nombre d'hydrogènes qu'il porte. On compte uniquement les autres carbones qui lui sont directement liés."
  },
  {
    "order": 73,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de l'éthène $\\ce{CH2=CH2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une double liaison empêche de déterminer quels atomes de carbone sont directement voisins.",
        "correct": false,
        "explanation": "La formule indique au contraire clairement que les deux carbones sont directement liés l'un à l'autre."
      },
      {
        "content": "La double liaison $\\ce{C=C}$ compte comme deux voisins carbonés pour chacun des deux carbones.",
        "correct": false,
        "explanation": "Le degré dépend du nombre d’atomes de carbone voisins, pas de l’ordre de la liaison qui les relie."
      },
      {
        "content": "Chaque carbone est directement lié à un seul autre carbone.",
        "correct": true,
        "explanation": "Chaque carbone de l'éthène a pour unique voisin carboné l'autre carbone de la double liaison."
      },
      {
        "content": "La double liaison entre les deux carbones ne crée pas deux voisins carbonés distincts.",
        "correct": true,
        "explanation": "Le degré dépend du nombre d'atomes de carbone voisins, et non du nombre de traits représentant la liaison."
      },
      {
        "content": "Chaque carbone doit être qualifié de secondaire uniquement parce qu'il porte deux hydrogènes.",
        "correct": false,
        "explanation": "Le nombre d'hydrogènes portés n'est pas le critère général de détermination du degré d'un carbone."
      }
    ],
    "explanation": "Une liaison multiple ne modifie pas le principe de comptage des voisins carbonés : on compte les atomes de carbone directement liés, pas le nombre de liaisons qui les unissent."
  },
  {
    "order": 74,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Dans l'éthanal $\\ce{CH3-CHO}$, sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "Les deux carbones de l’éthanal possèdent chacun un seul voisin carboné.",
        "correct": false,
        "explanation": "Cette affirmation est correcte ; elle ne fait donc pas partie des deux propositions incorrectes à sélectionner."
      },
      {
        "content": "Le carbone du groupe $\\ce{CH3}$ est secondaire.",
        "correct": true,
        "explanation": "Incorrect : ce carbone n'est directement lié qu'au carbone carbonylé. Il possède donc un seul voisin carboné et est primaire."
      },
      {
        "content": "Le carbone du groupe $\\ce{CHO}$ est tertiaire parce qu'il porte un hydrogène.",
        "correct": true,
        "explanation": "Incorrect : le degré ne se déduit pas du nombre d'hydrogènes. Le carbone carbonylé n'est directement lié qu'à un seul autre carbone."
      },
      {
        "content": "Le carbone du groupe $\\ce{CH3}$ est directement lié à un seul autre carbone.",
        "correct": false,
        "explanation": "Correct : son seul voisin carboné est le carbone du groupe aldéhyde."
      },
      {
        "content": "Le carbone carbonylé est directement lié à un seul autre carbone.",
        "correct": false,
        "explanation": "Correct : dans $\\ce{CH3-CHO}$, le carbone du carbonyle n'a qu'un voisin carboné, le carbone du groupe $\\ce{CH3}$."
      }
    ],
    "explanation": "Cette question rappelle qu'il faut lire la consigne jusqu'au bout : les deux propositions à sélectionner sont les propositions incorrectes. Le degré d'un carbone se détermine par le nombre de voisins carbonés, indépendamment du nombre d'hydrogènes portés."
  },
  {
    "order": 75,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de la lecture d'une formule topologique, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Chaque extrémité ou sommet non étiqueté représente généralement un atome de carbone.",
        "correct": true,
        "explanation": "Dans une formule topologique organique usuelle, les carbones sont généralement implicites aux sommets et aux extrémités des segments."
      },
      {
        "content": "Les hydrogènes liés aux carbones sont généralement implicites.",
        "correct": true,
        "explanation": "Ils ne sont pas écrits systématiquement ; on les déduit notamment de la valence du carbone."
      },
      {
        "content": "Un atome d'oxygène peut être omis exactement comme un carbone situé à un sommet.",
        "correct": false,
        "explanation": "Les hétéroatomes tels que O ou N sont normalement écrits explicitement dans une formule topologique."
      },
      {
        "content": "Chaque segment représente un atome de carbone supplémentaire.",
        "correct": false,
        "explanation": "Un segment représente une liaison. Les carbones se trouvent aux extrémités et aux sommets non étiquetés, pas au milieu de chaque segment."
      },
      {
        "content": "Les hétéroatomes comme O ou N sont généralement écrits explicitement dans une formule topologique.",
        "correct": true,
        "explanation": "La formule topologique omet surtout les carbones et les hydrogènes qui leur sont liés ; les hétéroatomes sont indiqués."
      }
    ],
    "explanation": "Pour lire une formule topologique, il faut distinguer les liaisons représentées par les segments des atomes de carbone implicites situés aux sommets et extrémités ; les hétéroatomes restent généralement explicites."
  },
  {
    "order": 76,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Dans le 2-méthylbutane $\\ce{CH3-CH(CH3)-CH2-CH3}$, combien de carbones sont primaires ? Donnez uniquement la valeur numérique.",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les trois groupes $\\ce{CH3}$ correspondent chacun à un carbone directement lié à un seul autre carbone. La molécule comporte donc 3 carbones primaires."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère le tert-butanol $\\ce{(CH3)3C-OH}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone portant $\\ce{OH}$ est quaternaire parce qu'il ne porte aucun hydrogène.",
        "correct": false,
        "explanation": "Il ne possède que trois voisins carbonés ; il est donc tertiaire. La liaison au groupe $\\ce{OH}$ ne constitue pas un quatrième voisin carboné."
      },
      {
        "content": "Un alcool tertiaire contient nécessairement trois groupes $\\ce{OH}$.",
        "correct": false,
        "explanation": "Le terme tertiaire décrit l'environnement carboné du carbone portant le groupe hydroxyle, et non le nombre de groupes $\\ce{OH}$."
      },
      {
        "content": "L’oxygène du groupe $\\ce{-OH}$ compte comme un voisin carboné du carbone fonctionnel.",
        "correct": false,
        "explanation": "Seuls les atomes de carbone directement liés sont comptés pour déterminer le degré d’un carbone."
      },
      {
        "content": "Le carbone portant le groupe $\\ce{OH}$ est tertiaire.",
        "correct": true,
        "explanation": "Ce carbone est directement lié à trois groupes méthyle, donc à trois autres carbones : il est tertiaire."
      },
      {
        "content": "La fonction alcool est tertiaire.",
        "correct": true,
        "explanation": "Un alcool est tertiaire lorsque le carbone portant $\\ce{OH}$ est directement lié à trois autres carbones."
      }
    ],
    "explanation": "Dans le tert-butanol, les deux classifications convergent : le carbone fonctionnel est tertiaire et la fonction alcool est tertiaire, car ce carbone est lié à trois autres carbones."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère le propan-2-ol $\\ce{CH3-CH(OH)-CH3}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le préfixe prop- indique que la fonction alcool est primaire.",
        "correct": false,
        "explanation": "Le préfixe prop- indique seulement que la chaîne principale comporte trois carbones ; il ne détermine pas la classe de l'alcool."
      },
      {
        "content": "Le carbone portant $\\ce{-OH}$ est primaire.",
        "correct": false,
        "explanation": "Il est directement lié à deux carbones ; il est donc secondaire."
      },
      {
        "content": "Le carbone portant le groupe $\\ce{OH}$ est secondaire.",
        "correct": true,
        "explanation": "Le carbone fonctionnel est directement lié aux deux carbones des groupes méthyle : il possède deux voisins carbonés."
      },
      {
        "content": "La fonction alcool est secondaire.",
        "correct": true,
        "explanation": "Le carbone portant $\\ce{OH}$ est directement lié à deux autres carbones, ce qui définit un alcool secondaire."
      },
      {
        "content": "Le carbone portant $\\ce{OH}$ est tertiaire parce qu'il porte un seul hydrogène.",
        "correct": false,
        "explanation": "Le nombre d'hydrogènes n'est pas le critère de détermination du degré. Ce carbone possède deux voisins carbonés et est secondaire."
      }
    ],
    "explanation": "Dans le propan-2-ol, le carbone portant $\\ce{OH}$ possède deux voisins carbonés : ce carbone est secondaire et l'alcool est également secondaire."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "On considère le propan-1-ol $\\ce{CH3-CH2-CH2-OH}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone portant $\\ce{-OH}$ est tertiaire.",
        "correct": false,
        "explanation": "Il est directement lié à deux carbones ; il est secondaire."
      },
      {
        "content": "Le carbone portant le groupe $\\ce{OH}$ est primaire.",
        "correct": true,
        "explanation": "Le carbone fonctionnel n'est directement lié qu'à un seul autre carbone : il est primaire."
      },
      {
        "content": "La fonction alcool est primaire.",
        "correct": true,
        "explanation": "Un alcool est primaire lorsque le carbone portant $\\ce{OH}$ est lié à un seul autre carbone."
      },
      {
        "content": "Le carbone portant $\\ce{OH}$ est secondaire uniquement parce qu'il s'agit d'un groupe $\\ce{CH2}$.",
        "correct": false,
        "explanation": "Le degré dépend des voisins carbonés, pas du nombre d'hydrogènes. Ce groupe $\\ce{CH2}$ terminal n'a qu'un seul voisin carboné."
      },
      {
        "content": "Un alcool primaire doit nécessairement ne contenir qu'un seul carbone au total.",
        "correct": false,
        "explanation": "La classe de l'alcool dépend uniquement de l'environnement du carbone portant $\\ce{OH}$ ; la molécule peut comporter plusieurs autres carbones."
      }
    ],
    "explanation": "Le propan-1-ol illustre un alcool primaire : le carbone portant le groupe hydroxyle est lié à un seul autre carbone."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'acide lactique est un composé rencontré dans le métabolisme énergétique. Il peut s'écrire $\\ce{CH3-CH(OH)-COOH}$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le carbone portant le groupe $\\ce{OH}$ est secondaire.",
        "correct": true,
        "explanation": "Ce carbone est directement lié au carbone du groupe $\\ce{CH3}$ et au carbone du groupe carboxyle : il possède deux voisins carbonés."
      },
      {
        "content": "La fonction alcool portée par ce carbone est secondaire.",
        "correct": true,
        "explanation": "Le carbone portant $\\ce{OH}$ est lié à deux autres carbones, ce qui correspond à un alcool secondaire."
      },
      {
        "content": "Le carbone du groupe carboxyle est quaternaire parce qu'il ne porte aucun hydrogène.",
        "correct": false,
        "explanation": "Le carbone du carboxyle n'est directement lié qu'à un seul autre carbone. L'absence d'hydrogène ne permet pas de conclure qu'un carbone est quaternaire."
      },
      {
        "content": "Le groupe $\\ce{-OH}$ du carboxyle constitue une seconde fonction alcool.",
        "correct": false,
        "explanation": "Le groupe $\\ce{-OH}$ intégré à $\\ce{-COOH}$ appartient à la fonction acide carboxylique et ne constitue pas une fonction alcool indépendante."
      },
      {
        "content": "Le carbone du groupe carboxyle est directement lié à un seul autre carbone.",
        "correct": true,
        "explanation": "Le carbone carboxylique est lié au carbone voisin de la chaîne et aux oxygènes de la fonction ; il n’a qu’un voisin carboné."
      }
    ],
    "explanation": "L'acide lactique associe une fonction alcool secondaire et une fonction acide carboxylique. Cette structure permet aussi de distinguer le degré d'un carbone du simple nombre d'hydrogènes qu'il porte."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La valine est un acide aminé essentiel. Elle est représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes concernant le degré de ses carbones ?",
    "choices": [
      {
        "content": "Le carbone ramifié de la chaîne latérale est tertiaire.",
        "correct": true,
        "explanation": "Ce carbone est directement lié au carbone alpha et aux deux carbones méthyliques : il possède trois voisins carbonés."
      },
      {
        "content": "Le carbone portant le groupe amine est tertiaire.",
        "correct": false,
        "explanation": "Le carbone alpha est directement lié à deux carbones : le carbone du carboxyle et le carbone ramifié de la chaîne latérale. Il est donc secondaire."
      },
      {
        "content": "Les deux carbones des groupes méthyle sont secondaires.",
        "correct": false,
        "explanation": "Chacun de ces carbones n'est directement lié qu'au carbone ramifié : ils sont primaires."
      },
      {
        "content": "Le carbone ramifié de la chaîne latérale est quaternaire.",
        "correct": false,
        "explanation": "Le carbone ramifié représenté n’est pas lié à quatre atomes de carbone."
      },
      {
        "content": "Le carbone du groupe carboxyle est primaire.",
        "correct": true,
        "explanation": "Le carbone du carboxyle est directement lié à un seul autre carbone, le carbone alpha : il est primaire."
      }
    ],
    "explanation": "Dans la valine, le degré de chaque carbone se déduit du nombre de voisins carbonés : le carbone du carboxyle et les méthyles sont primaires, le carbone alpha est secondaire et le carbone ramifié est tertiaire.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "valine-topological"
    }
  },
  {
    "order": 82,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les préfixes de nomenclature correspondant aux chaînes de 1 à 5 carbones, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "3 carbones → but-.",
        "correct": false,
        "explanation": "Trois carbones correspondent au préfixe prop-. Le préfixe but- correspond à quatre carbones."
      },
      {
        "content": "5 carbones → hex-.",
        "correct": false,
        "explanation": "Cinq carbones correspondent au préfixe pent-. Le préfixe hex- correspond à six carbones."
      },
      {
        "content": "Une chaîne de quatre carbones utilise le préfixe but-.",
        "correct": true,
        "explanation": "Quatre carbones correspondent au préfixe but-, comme dans butane."
      },
      {
        "content": "1 carbone → méth-.",
        "correct": true,
        "explanation": "Le préfixe méth- correspond à une chaîne comportant un seul carbone, comme dans le méthane."
      },
      {
        "content": "2 carbones → éth-.",
        "correct": true,
        "explanation": "Le préfixe éth- correspond à deux carbones, comme dans l'éthane."
      }
    ],
    "explanation": "Les cinq premiers préfixes sont méth-, éth-, prop-, but- et pent-, correspondant respectivement à 1, 2, 3, 4 et 5 carbones."
  },
  {
    "order": 83,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant les préfixes de nomenclature correspondant aux chaînes de 6 à 10 carbones, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "10 carbones → non-.",
        "correct": false,
        "explanation": "Dix carbones correspondent au préfixe déc-. Le préfixe non- correspond à neuf carbones."
      },
      {
        "content": "Une chaîne de neuf carbones utilise le préfixe déc-.",
        "correct": false,
        "explanation": "Neuf carbones correspondent au préfixe non- ; déc- correspond à dix carbones."
      },
      {
        "content": "6 carbones → hex-.",
        "correct": true,
        "explanation": "Le préfixe hex- correspond à une chaîne de six carbones."
      },
      {
        "content": "7 carbones → hept-.",
        "correct": true,
        "explanation": "Le préfixe hept- correspond à une chaîne de sept carbones."
      },
      {
        "content": "8 carbones → non-.",
        "correct": false,
        "explanation": "Huit carbones correspondent au préfixe oct-. Le préfixe non- correspond à neuf carbones."
      }
    ],
    "explanation": "De 6 à 10 carbones, les préfixes sont hex-, hept-, oct-, non- et déc-."
  },
  {
    "order": 84,
    "difficulty": "EASY",
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
    "explanation": "Une chaîne de six carbones utilise le préfixe hex-, comme dans le nom hexane."
  },
  {
    "order": 85,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel préfixe de nomenclature correspond à une chaîne de neuf carbones ?",
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
    "explanation": "Une chaîne de neuf carbones utilise le préfixe non-, comme dans le nom nonane."
  },
  {
    "order": 86,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Dans le nom « 2-méthylbutane », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le substituant méthyle apporte un carbone supplémentaire à la molécule.",
        "correct": true,
        "explanation": "Un groupe méthyle correspond à $-\\ce{CH3}$ et contient un carbone."
      },
      {
        "content": "La molécule contient cinq carbones au total.",
        "correct": true,
        "explanation": "La chaîne principale comporte quatre carbones et le substituant méthyle en ajoute un : la molécule en contient donc cinq au total."
      },
      {
        "content": "Le parent doit être appelé pentane dès qu'une molécule contient cinq carbones au total.",
        "correct": false,
        "explanation": "Le nom du parent dépend de la chaîne principale continue retenue, pas du simple nombre total de carbones présents dans toute la molécule."
      },
      {
        "content": "Le substituant indiqué par « méthyl- » contient deux carbones.",
        "correct": false,
        "explanation": "Un groupe méthyle contient un seul carbone."
      },
      {
        "content": "Le nom du parent indique une chaîne principale de quatre carbones.",
        "correct": true,
        "explanation": "Le préfixe but- correspond à quatre carbones : la chaîne principale retenue est donc un butane."
      }
    ],
    "explanation": "Dans une molécule ramifiée, le nombre total de carbones peut être supérieur au nombre de carbones de la chaîne principale. Le nom du parent décrit la chaîne principale, tandis que les ramifications sont nommées comme substituants."
  },
  {
    "order": 87,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos des groupes alkyles simples, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Propyle : $-\\ce{C3H8}$.",
        "correct": false,
        "explanation": "Le propane est $\\ce{C3H8}$ ; après retrait d'un hydrogène, le groupe propyle a pour formule $-\\ce{C3H7}$."
      },
      {
        "content": "Butyle : $-\\ce{C4H10}$.",
        "correct": false,
        "explanation": "Le butane est $\\ce{C4H10}$ ; le groupe butyle obtenu par retrait d'un hydrogène est $-\\ce{C4H9}$."
      },
      {
        "content": "Butyle : $\\ce{-C4H9}$.",
        "correct": true,
        "explanation": "Le groupe butyle dérive du butane par perte d’un hydrogène : $\\ce{C4H9-}$."
      },
      {
        "content": "Méthyle : $-\\ce{CH3}$.",
        "correct": true,
        "explanation": "Le groupe méthyle dérive du méthane $\\ce{CH4}$ par retrait d'un hydrogène."
      },
      {
        "content": "Éthyle : $-\\ce{C2H5}$.",
        "correct": true,
        "explanation": "Le groupe éthyle dérive de l'éthane $\\ce{C2H6}$ par retrait d'un hydrogène."
      }
    ],
    "explanation": "Un groupe alkyle dérive d'un alcane par retrait d'un atome d'hydrogène. Sa dénomination utilise le suffixe -yl."
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
        "explanation": "Le préfixe méth- correspond à une chaîne comportant un seul carbone."
      },
      {
        "content": "Prop- → 3 carbones.",
        "correct": true,
        "explanation": "Le préfixe prop- correspond à trois carbones, comme dans le propane."
      },
      {
        "content": "Pent- → 5 carbones.",
        "correct": true,
        "explanation": "Le préfixe pent- correspond à une chaîne de cinq carbones."
      },
      {
        "content": "Oct- → 8 carbones.",
        "correct": true,
        "explanation": "Le préfixe oct- correspond à huit carbones."
      },
      {
        "content": "Déc- → 10 carbones.",
        "correct": true,
        "explanation": "Le préfixe déc- correspond à dix carbones, comme dans le décane."
      },
      {
        "content": "Éth- → 3 carbones.",
        "correct": false,
        "explanation": "Le préfixe éth- correspond à deux carbones ; trois carbones correspondent à prop-."
      },
      {
        "content": "But- → 5 carbones.",
        "correct": false,
        "explanation": "Le préfixe but- correspond à quatre carbones ; cinq carbones correspondent à pent-."
      },
      {
        "content": "Hex- → 7 carbones.",
        "correct": false,
        "explanation": "Le préfixe hex- correspond à six carbones ; sept carbones correspondent à hept-."
      },
      {
        "content": "Hept- → 8 carbones.",
        "correct": false,
        "explanation": "Le préfixe hept- correspond à sept carbones ; huit carbones correspondent à oct-."
      },
      {
        "content": "Non- → 10 carbones.",
        "correct": false,
        "explanation": "Le préfixe non- correspond à neuf carbones ; dix carbones correspondent à déc-."
      }
    ],
    "explanation": "La mémorisation des préfixes méth-, éth-, prop-, but-, pent-, hex-, hept-, oct-, non- et déc- permet d'identifier rapidement la longueur d'une chaîne carbonée de 1 à 10 carbones."
  },
  {
    "order": 89,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La formule topologique de l'heptane est donnée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La formule brute de l’heptane est $\\ce{C7H14}$.",
        "correct": false,
        "explanation": "Un alcane acyclique saturé de sept carbones a pour formule $\\ce{C7H16}$."
      },
      {
        "content": "La molécule comporte sept carbones.",
        "correct": true,
        "explanation": "En comptant les deux extrémités et les sommets non étiquetés de la chaîne, on obtient sept atomes de carbone."
      },
      {
        "content": "Sa formule brute est $\\ce{C7H16}$.",
        "correct": true,
        "explanation": "L'heptane est un alcane acyclique saturé. Pour $n=7$, la formule générale $\\ce{C_nH_{2n+2}}$ donne $\\ce{C7H16}$."
      },
      {
        "content": "La chaîne représentée comporte sept liaisons carbone-carbone.",
        "correct": false,
        "explanation": "Une chaîne ouverte de sept carbones comporte six liaisons carbone-carbone successives."
      },
      {
        "content": "Le nom heptyle désigne cette molécule complète.",
        "correct": false,
        "explanation": "Heptane désigne l'alcane complet. Heptyle désigne un substituant dérivé de l'heptane par retrait d'un hydrogène."
      }
    ],
    "explanation": "La lecture d'une formule topologique permet de relier le nombre de carbones, le nom de l'alcane et sa formule brute.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "heptane-topological"
    }
  },
  {
    "order": 90,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi les quatre associations alcane → groupe alkyle suivantes, sélectionnez exactement les deux incorrectes.",
    "choices": [
      {
        "content": "Méthane $\\ce{CH4}$ → méthyle $-\\ce{CH3}$.",
        "correct": false,
        "explanation": "Correct : le groupe méthyle dérive du méthane par retrait d'un hydrogène."
      },
      {
        "content": "Éthane $\\ce{C2H6}$ → éthyle $-\\ce{C2H5}$.",
        "correct": false,
        "explanation": "Correct : le retrait d'un hydrogène à l'éthane conduit au groupe éthyle $-\\ce{C2H5}$."
      },
      {
        "content": "Propane $\\ce{C3H8}$ → propyle $-\\ce{C3H8}$.",
        "correct": true,
        "explanation": "Incorrect : le groupe propyle résulte du retrait d'un hydrogène au propane et a pour formule $-\\ce{C3H7}$."
      },
      {
        "content": "Butane $\\ce{C4H10}$ → butyle $-\\ce{C4H10}$.",
        "correct": true,
        "explanation": "Incorrect : le groupe butyle a pour formule $-\\ce{C4H9}$ après retrait d'un hydrogène au butane."
      },
      {
        "content": "Propane $\\ce{C3H8}$ → propyle $\\ce{-C3H7}$.",
        "correct": false,
        "explanation": "Cette association est correcte ; elle ne fait donc pas partie des deux propositions incorrectes à sélectionner."
      }
    ],
    "explanation": "Un groupe alkyle se forme formellement par retrait d'un hydrogène à l'alcane correspondant. La consigne demande ici de sélectionner les deux associations incorrectes."
  },
  {
    "order": 91,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel nom correspond à la structure $\\ce{CH3-CH(CH3)-CH2-CH3}$ ?",
    "choices": [
      {
        "content": "1-méthylbutane.",
        "correct": false,
        "explanation": "Ce nom ne respecte pas le choix de la plus longue chaîne principale pour la structure considérée."
      },
      {
        "content": "2-méthylbutane.",
        "correct": true,
        "explanation": "La plus longue chaîne continue contient quatre carbones et forme le parent butane. Le substituant méthyle reçoit l'indice 2 avec la numérotation la plus faible."
      },
      {
        "content": "3-méthylbutane.",
        "correct": false,
        "explanation": "La chaîne doit être numérotée depuis l'extrémité donnant l'indice le plus faible au substituant : 2 est préféré à 3."
      },
      {
        "content": "Pentane.",
        "correct": false,
        "explanation": "La molécule contient cinq carbones au total, mais aucune chaîne continue ne comporte cinq carbones."
      },
      {
        "content": "2-éthylpropane.",
        "correct": false,
        "explanation": "Le choix du parent doit privilégier la plus longue chaîne continue ; une chaîne de quatre carbones existe, donc le parent est butane et non propane."
      }
    ],
    "explanation": "Pour nommer une chaîne ramifiée, on identifie d'abord la plus longue chaîne continue, puis on la numérote de façon à attribuer au substituant l'indice le plus faible."
  },
  {
    "order": 92,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La formule topologique du 3-méthylhexane est donnée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le nom 4-méthylhexane doit être préféré à 3-méthylhexane.",
        "correct": false,
        "explanation": "On choisit le sens de numérotation donnant l'indice le plus faible au substituant : 3 est préféré à 4."
      },
      {
        "content": "Le préfixe hex- indique que la molécule ne peut contenir aucun carbone en dehors de la chaîne principale.",
        "correct": false,
        "explanation": "Le préfixe hex- décrit la chaîne principale. Des substituants carbonés peuvent ajouter d'autres carbones à la molécule."
      },
      {
        "content": "Le substituant méthyle apporte un carbone qui n’appartient pas à la chaîne principale.",
        "correct": true,
        "explanation": "Le parent hexane comporte six carbones ; le groupe méthyle apporte le septième carbone de la molécule."
      },
      {
        "content": "La chaîne principale comporte six carbones.",
        "correct": true,
        "explanation": "Le parent hexane correspond à une chaîne principale de six carbones."
      },
      {
        "content": "La molécule comporte sept carbones au total.",
        "correct": true,
        "explanation": "La chaîne principale apporte six carbones et le substituant méthyle en apporte un supplémentaire."
      }
    ],
    "explanation": "Le 3-méthylhexane illustre la distinction entre longueur de la chaîne principale et nombre total de carbones, ainsi que la règle du plus petit indice.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "3-methylhexane-topological"
    }
  },
  {
    "order": 93,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "L'isooctane est représenté ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le parent doit être octane simplement parce que la molécule possède huit carbones au total.",
        "correct": false,
        "explanation": "Le parent correspond à la chaîne principale continue retenue, pas au nombre total de carbones présents dans la molécule. Le nom systématique est 2,2,4-triméthylpentane."
      },
      {
        "content": "La chaîne principale de son nom systématique comporte huit carbones.",
        "correct": false,
        "explanation": "La structure représentée ne conduit pas à une chaîne principale de huit carbones."
      },
      {
        "content": "La molécule comporte huit carbones au total.",
        "correct": true,
        "explanation": "L'isooctane possède huit atomes de carbone, ce qui explique son nom usuel."
      },
      {
        "content": "La chaîne principale retenue pour son nom systématique comporte cinq carbones.",
        "correct": true,
        "explanation": "La plus longue chaîne continue appropriée est un pentane."
      },
      {
        "content": "Elle porte trois substituants méthyle en positions 2, 2 et 4.",
        "correct": true,
        "explanation": "La structure comporte deux groupes méthyle sur le carbone 2 et un groupe méthyle sur le carbone 4."
      }
    ],
    "explanation": "L'isooctane, ou 2,2,4-triméthylpentane, montre qu'une molécule peut contenir davantage de carbones au total que sa chaîne principale.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "isooctane-topological"
    }
  },
  {
    "order": 94,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "La valine est un acide aminé essentiel et peut s'écrire $\\ce{HOOC-CH(NH2)-CH(CH3)2}$. Quelles propositions sont exactes pour la chaîne principale contenant le carboxyle ?",
    "choices": [
      {
        "content": "La chaîne principale contenant le groupe carboxyle comporte cinq carbones.",
        "correct": false,
        "explanation": "Le nombre de carbones de la chaîne principale se détermine en incluant le carbone de la fonction acide carboxylique ; ici il ne vaut pas cinq."
      },
      {
        "content": "La chaîne principale comporte quatre carbones.",
        "correct": true,
        "explanation": "Le carbone du groupe carboxyle appartient à la chaîne principale, qui peut être prolongée sur trois autres carbones : le parent comporte donc quatre carbones."
      },
      {
        "content": "Un groupe méthyle reste substituant de cette chaîne.",
        "correct": true,
        "explanation": "Parmi les deux groupes méthyle de la ramification, l'un appartient à la chaîne principale et l'autre reste un substituant méthyle."
      },
      {
        "content": "Le carbone du groupe carboxyle doit être exclu du comptage de la chaîne principale.",
        "correct": false,
        "explanation": "Pour un acide carboxylique, le carbone du groupe carboxyle appartient au squelette principal et constitue le carbone 1."
      },
      {
        "content": "La molécule ne contient que quatre carbones au total.",
        "correct": false,
        "explanation": "La valine contient cinq carbones au total : quatre dans la chaîne principale et un dans le substituant méthyle."
      }
    ],
    "explanation": "Pour une molécule portant un acide carboxylique, le carbone du carboxyle est inclus dans la chaîne principale. Dans la valine, cette chaîne comporte quatre carbones et un méthyle reste substituant."
  },
  {
    "order": 95,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de la formule topologique du 2-méthylbutane représentée ci-dessous : [[QUESTION_DIAGRAM]] Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le comptage des sommets et extrémités conduit à cinq carbones au total.",
        "correct": true,
        "explanation": "La formule topologique représente cinq atomes de carbone : quatre dans la chaîne principale et un dans le substituant méthyle."
      },
      {
        "content": "La chaîne principale contient quatre carbones.",
        "correct": true,
        "explanation": "La plus longue chaîne continue comporte quatre carbones, ce qui conduit au parent butane."
      },
      {
        "content": "Le nom 3-méthylbutane est préféré parce que le substituant est plus proche de l'extrémité droite du dessin.",
        "correct": false,
        "explanation": "L'orientation graphique n'impose pas la numérotation. On choisit le sens qui donne le plus petit indice au substituant : 2 plutôt que 3."
      },
      {
        "content": "Tous les carbones de cette molécule sont secondaires.",
        "correct": false,
        "explanation": "Trois carbones sont primaires, un carbone est secondaire et le carbone ramifié est tertiaire."
      },
      {
        "content": "Le carbone portant la ramification méthyle est tertiaire.",
        "correct": true,
        "explanation": "Ce carbone est directement lié à trois autres carbones ; il est tertiaire."
      }
    ],
    "explanation": "La lecture correcte combine le comptage des carbones, le choix de la plus longue chaîne et la numérotation donnant l'indice le plus faible au substituant.",
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
        "content": "Le groupe hydroxyle reçoit l'indice 2.",
        "correct": true,
        "explanation": "La chaîne est numérotée de façon à attribuer au groupe hydroxyle, fonction principale ici, l'indice le plus faible : 2 plutôt que 5."
      },
      {
        "content": "Le substituant méthyle est situé en position 3.",
        "correct": true,
        "explanation": "Avec la numérotation imposée par le groupe hydroxyle, le substituant méthyle est porté par le carbone 3."
      },
      {
        "content": "La fonction alcool est tertiaire.",
        "correct": false,
        "explanation": "Le carbone portant $\\ce{OH}$ est directement lié à deux autres carbones : la fonction alcool est secondaire."
      },
      {
        "content": "Le carbone portant le groupe $\\ce{-OH}$ est tertiaire.",
        "correct": false,
        "explanation": "Le carbone fonctionnel est directement lié à deux carbones ; il est secondaire."
      },
      {
        "content": "La chaîne principale comporte six carbones.",
        "correct": true,
        "explanation": "Le parent hexan- correspond à une chaîne principale de six carbones."
      }
    ],
    "explanation": "Cette molécule combine plusieurs règles : choix d'une chaîne de six carbones, priorité de numérotation du groupe hydroxyle, localisation du substituant méthyle et classification de l'alcool.",
    "questionDiagram": {
      "type": "molecule",
      "molecule": "3-methylhexan-2-ol-topological"
    }
  },
  {
    "order": 97,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de carbones contient au total le 3-éthyl-2-méthylpentane ? Donnez uniquement la valeur numérique.",
    "answer": {
      "type": "number",
      "value": 8,
      "tolerance": 0
    },
    "explanation": "Le parent pentane apporte 5 carbones, le substituant éthyle en apporte 2 et le substituant méthyle en apporte 1. Le total est donc $5+2+1=8$ carbones."
  },
  {
    "order": 98,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Pour nommer une chaîne carbonée ramifiée simple, quelles démarches sont pertinentes ?",
    "choices": [
      {
        "content": "Numéroter systématiquement la chaîne de gauche à droite telle qu'elle est dessinée.",
        "correct": false,
        "explanation": "L'orientation du dessin n'a pas de valeur nomenclaturale. On choisit le sens de numérotation conformément aux règles d'attribution des indices."
      },
      {
        "content": "Identifier et nommer les substituants portés par la chaîne principale fait partie de la démarche.",
        "correct": true,
        "explanation": "Après le choix et la numérotation du parent, les substituants doivent être identifiés et localisés pour construire le nom."
      },
      {
        "content": "Identifier une chaîne principale appropriée, généralement la plus longue compatible avec la fonction principale.",
        "correct": true,
        "explanation": "La chaîne principale fournit le nom du parent et doit respecter les règles de priorité fonctionnelle lorsqu'une fonction principale est présente."
      },
      {
        "content": "Numéroter la chaîne de manière à attribuer les indices les plus faibles selon les règles applicables.",
        "correct": true,
        "explanation": "Le sens de numérotation n'est pas choisi arbitrairement : il doit minimiser les indices selon les règles de nomenclature."
      },
      {
        "content": "Choisir comme parent le nombre total de carbones de la molécule, même si ces carbones ne forment pas une chaîne continue.",
        "correct": false,
        "explanation": "Le parent correspond à une chaîne principale continue appropriée ; les carbones portés par les ramifications ne sont pas automatiquement inclus dans cette chaîne."
      }
    ],
    "explanation": "La nomenclature d'une chaîne ramifiée repose sur trois idées : choisir correctement le parent, numéroter selon les règles de plus faibles indices et identifier les substituants. L'orientation du dessin ou le nombre total de carbones ne suffisent pas."
  },
  {
    "order": 99,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux molécules comportant sept carbones au total.",
    "choices": [
      {
        "content": "2-éthylbutane.",
        "correct": false,
        "explanation": "Cette proposition ne correspond pas au nom systématique retenu pour la structure considérée."
      },
      {
        "content": "3-méthylhexane.",
        "correct": true,
        "explanation": "Le parent hexane apporte 6 carbones et le substituant méthyle en apporte 1 : le total est 7."
      },
      {
        "content": "Heptane.",
        "correct": true,
        "explanation": "Le préfixe hept- indique directement une chaîne de 7 carbones."
      },
      {
        "content": "2-méthylbutane.",
        "correct": false,
        "explanation": "Le parent butane comporte 4 carbones et le méthyle en ajoute 1 : cette molécule contient 5 carbones."
      },
      {
        "content": "2,2,4-triméthylpentane.",
        "correct": false,
        "explanation": "Le parent pentane apporte 5 carbones et les trois substituants méthyle en ajoutent 3 : cette molécule contient 8 carbones."
      }
    ],
    "explanation": "Pour déterminer le nombre total de carbones à partir d'un nom, on additionne les carbones de la chaîne principale et ceux des substituants."
  },
  {
    "order": 100,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Un carbone directement lié à un seul autre carbone est primaire.",
        "correct": true,
        "explanation": "Le degré d'un carbone dépend du nombre de voisins carbonés ; un seul voisin carboné correspond à un carbone primaire."
      },
      {
        "content": "Un carbone directement lié à deux autres carbones est secondaire.",
        "correct": true,
        "explanation": "Deux voisins carbonés définissent un carbone secondaire."
      },
      {
        "content": "Un carbone directement lié à trois autres carbones est tertiaire.",
        "correct": true,
        "explanation": "Trois voisins carbonés définissent un carbone tertiaire, indépendamment du nombre d'hydrogènes éventuellement portés."
      },
      {
        "content": "Un carbone directement lié à quatre autres carbones est quaternaire.",
        "correct": true,
        "explanation": "Quatre voisins carbonés définissent un carbone quaternaire."
      },
      {
        "content": "Le suffixe -yl désigne un groupe alkyle dérivé d'un alcane par retrait d'un hydrogène.",
        "correct": true,
        "explanation": "Méthyle, éthyle ou propyle sont par exemple des groupes alkyles dérivés respectivement du méthane, de l'éthane ou du propane."
      },
      {
        "content": "Le préfixe hex- correspond à cinq carbones.",
        "correct": false,
        "explanation": "Hex- correspond à six carbones ; cinq carbones correspondent à pent-."
      },
      {
        "content": "Le préfixe déc- correspond à neuf carbones.",
        "correct": false,
        "explanation": "Déc- correspond à dix carbones ; neuf carbones correspondent à non-."
      },
      {
        "content": "Un alcool tertiaire possède nécessairement trois groupes $\\ce{OH}$.",
        "correct": false,
        "explanation": "Un alcool tertiaire peut ne posséder qu'un seul groupe $\\ce{OH}$ ; le terme tertiaire indique que le carbone portant ce groupe est lié à trois autres carbones."
      },
      {
        "content": "Le nombre total de carbones d'une molécule ramifiée est toujours égal au nombre de carbones de sa chaîne principale.",
        "correct": false,
        "explanation": "Les substituants carbonés peuvent ajouter des carbones qui ne font pas partie de la chaîne principale."
      },
      {
        "content": "Une formule topologique écrit explicitement tous les hydrogènes liés aux carbones.",
        "correct": false,
        "explanation": "Les hydrogènes liés aux carbones sont généralement implicites dans une formule topologique et sont déduits de la valence."
      }
    ],
    "explanation": "Cette synthèse croise les notions essentielles de la section : degré des carbones, lecture topologique, préfixes de longueur de chaîne, groupes alkyles, distinction entre chaîne principale et nombre total de carbones, ainsi que classification d'un alcool."
  }
];
