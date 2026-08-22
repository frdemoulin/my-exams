import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.8 – Section B – Alcools, thiols et amines
 * Ordres 23–44 (22 questions)
 * B1 — Alcools, thiols et amines — fondamentaux : ordres 23–32, DISCOVER
 * B2 — Alcools, thiols et amines — application : ordres 33–44, PRACTICE
 */

export const UE14_CH12_SECTION_B_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 23,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH(OH)-CH3}$ ?",
    "choices": [
      {
        "content": "Propan-2-ol.",
        "correct": true,
        "explanation": "La chaîne principale comporte trois carbones et le groupe hydroxyle est porté par le carbone 2 : propan-2-ol."
      },
      {
        "content": "Propan-1-ol.",
        "correct": false,
        "explanation": "Le groupe hydroxyle n'est pas en extrémité de chaîne : il est porté par le carbone 2."
      },
      {
        "content": "Propanone.",
        "correct": false,
        "explanation": "Propanone désigne une cétone comportant un groupe carbonyle, pas un alcool."
      },
      {
        "content": "2-hydroxypropane.",
        "correct": false,
        "explanation": "Lorsque l'alcool est la fonction principale dans ce cas simple, on me emploie le suffixe -ol plutôt que le préfixe hydroxy-."
      },
      {
        "content": "Éthanol.",
        "correct": false,
        "explanation": "La chaîne principale contient trois carbones, et non deux."
      }
    ],
    "explanation": "Méthode : identifier l'alcool comme fonction principale, retenir une chaîne de trois carbones, la numéroter pour localiser $\\ce{-OH}$, puis utiliser le suffixe -ol : propan-2-ol."
  },
  {
    "order": 24,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour nommer un alcool aliphatique simple dont le groupe $\\ce{-OH}$ est la fonction principale, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La chaîne principale doit contenir le carbone portant le groupe $\\ce{-OH}$.",
        "correct": true,
        "explanation": "Le carbone portant la fonction principale doit appartenir au parent retenu."
      },
      {
        "content": "On utilise le suffixe -ol.",
        "correct": true,
        "explanation": "Lorsqu'il constitue la fonction principale, le groupe hydroxyle est traduit par le suffixe -ol."
      },
      {
        "content": "La numérotation doit donner au groupe $\\ce{-OH}$ l'indice approprié le plus faible.",
        "correct": true,
        "explanation": "La fonction principale guide la numérotation ; son locant doit être minimisé selon les règles étudiées."
      },
      {
        "content": "La position du groupe $\\ce{-OH}$ est toujours ignorée dans le nom.",
        "correct": false,
        "explanation": "Lorsque plusieurs positions sont possibles, le locant de la fonction alcool doit être précisé, par exemple dans butan-2-ol."
      },
      {
        "content": "Le nombre total de carbones de la molécule suffit toujours à choisir la chaîne principale.",
        "correct": false,
        "explanation": "Le parent dépend d'une chaîne continue appropriée contenant la fonction principale, et non du simple total des carbones."
      }
    ],
    "explanation": "Pour un alcool simple : fonction principale → chaîne contenant le carbone porteur de $\\ce{-OH}$ → numérotation → suffixe -ol. Le nom doit rendre explicite la position de la fonction lorsque cela est nécessaire."
  },
  {
    "order": 25,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH2-OH}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "éthanol",
        "ethanol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La chaîne comporte deux carbones : éthan-. Le groupe hydroxyle est la fonction principale : on utilise le suffixe -ol. Le nom est éthanol."
  },
  {
    "order": 26,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH2-SH}$ ?",
    "choices": [
      {
        "content": "Éthanethiol.",
        "correct": true,
        "explanation": "Le parent comporte deux carbones et la fonction $\\ce{-SH}$ est nommée ici avec le suffixe -thiol : éthanethiol."
      },
      {
        "content": "Éthanol.",
        "correct": false,
        "explanation": "Éthanol contient un groupe $\\ce{-OH}$ ; ici l'hétéroatome est le soufre."
      },
      {
        "content": "Méthanethiol.",
        "correct": false,
        "explanation": "La structure contient deux carbones, pas un seul."
      },
      {
        "content": "Éthanamine.",
        "correct": false,
        "explanation": "Une amine comporterait un groupe azoté, par exemple $\\ce{-NH2}$."
      },
      {
        "content": "Thioéthane.",
        "correct": false,
        "explanation": "Pour la fonction thiol principale, la nomenclature utilisée ici emploie le suffixe -thiol."
      }
    ],
    "explanation": "La méthode est la même que pour l'alcool : choisir le parent carboné puis traduire la fonction principale par son suffixe. Deux carbones + fonction thiol donnent éthanethiol."
  },
  {
    "order": 27,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant la nomenclature d'un thiol simple, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le groupe caractéristique est $\\ce{-SH}$.",
        "correct": true,
        "explanation": "Un thiol comporte un groupe sulfhydryle $\\ce{-SH}$ lié au squelette carboné."
      },
      {
        "content": "Lorsque le thiol est la fonction principale dans les cas simples étudiés ici, on utilise le suffixe -thiol.",
        "correct": true,
        "explanation": "Le suffixe -thiol permet de construire des noms comme éthanethiol ou propan-2-thiol."
      },
      {
        "content": "Le carbone portant $\\ce{-SH}$ reçoit un locant lorsque plusieurs positions sont possibles.",
        "correct": true,
        "explanation": "Par exemple, $\\ce{CH3-CH(SH)-CH3}$ se nomme propan-2-thiol."
      },
      {
        "content": "La présence de soufre impose toujours le suffixe -sulfure.",
        "correct": false,
        "explanation": "La fonction thiol possède sa propre nomenclature ; la simple présence de soufre ne conduit pas automatiquement à un nom en -sulfure."
      },
      {
        "content": "Un thiol et un alcool portant le même squelette carboné ont nécessairement le même suffixe.",
        "correct": false,
        "explanation": "L'alcool utilise -ol alors que le thiol utilise -thiol."
      }
    ],
    "explanation": "Le thiol se reconnaît par $\\ce{-SH}$. Dans un composé monofonctionnel simple, la chaîne est numérotée pour localiser la fonction et le nom est construit avec le suffixe -thiol."
  },
  {
    "order": 28,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH(SH)-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "propan-2-thiol",
        "propan 2 thiol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La chaîne principale compte trois carbones et le groupe $\\ce{-SH}$ est porté par le carbone 2 : propan-2-thiol."
  },
  {
    "order": 29,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH2-CH2-NH2}$ ?",
    "choices": [
      {
        "content": "Propan-1-amine.",
        "correct": true,
        "explanation": "Le parent comporte trois carbones et le groupe amine est porté par le carbone terminal : propan-1-amine."
      },
      {
        "content": "Propan-2-amine.",
        "correct": false,
        "explanation": "Le groupe $\\ce{-NH2}$ n'est pas porté par le carbone central."
      },
      {
        "content": "Butan-1-amine.",
        "correct": false,
        "explanation": "La chaîne comporte trois carbones, pas quatre."
      },
      {
        "content": "Propan-1-ol.",
        "correct": false,
        "explanation": "Le suffixe -ol correspond à un alcool ; ici la fonction est une amine."
      },
      {
        "content": "1-aminopropane.",
        "correct": false,
        "explanation": "Dans ce composé monofonctionnel simple, l'amine est la fonction principale et est exprimée par le suffixe -amine."
      }
    ],
    "explanation": "Pour une amine primaire aliphatique simple : parent carboné → position du carbone lié à $\\ce{-NH2}$ → suffixe -amine. Ici : propan-1-amine."
  },
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos du nom d'une amine primaire aliphatique simple de type $\\ce{R-NH2}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Le suffixe -amine peut être utilisé lorsque l'amine est la fonction principale.",
        "correct": true,
        "explanation": "C'est le cas dans des noms comme propan-1-amine ou butan-2-amine."
      },
      {
        "content": "La position du carbone lié à $\\ce{-NH2}$ peut apparaître dans le nom.",
        "correct": true,
        "explanation": "Le locant distingue par exemple propan-1-amine de propan-2-amine."
      },
      {
        "content": "Le choix du sens de numérotation doit tenir compte de la position de la fonction amine.",
        "correct": true,
        "explanation": "Dans un composé monofonctionnel simple, on numérote le parent de manière à attribuer à la fonction son locant approprié le plus faible."
      },
      {
        "content": "Le groupe $\\ce{-NH2}$ transforme automatiquement le parent en alcool.",
        "correct": false,
        "explanation": "Le groupe $\\ce{-NH2}$ caractérise ici une amine, et non un alcool."
      },
      {
        "content": "Le suffixe -amine indique à lui seul que la chaîne principale possède exactement un carbone.",
        "correct": false,
        "explanation": "La longueur de la chaîne est donnée par méth-, éth-, prop-, but-, etc. ; -amine décrit la fonction."
      }
    ],
    "explanation": "La logique reste transversale : identifier la fonction, choisir le parent, numéroter, puis assembler le nom. Pour une amine principale simple, le suffixe -amine est ajouté au nom du parent."
  },
  {
    "order": 31,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "À propos de $\\ce{CH3-CH2-CH(OH)-CH3}$, sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "La chaîne principale comporte quatre carbones.",
        "correct": false,
        "explanation": "Correct : le parent est un butane."
      },
      {
        "content": "La fonction principale est un alcool.",
        "correct": false,
        "explanation": "Correct : la molécule possède un groupe hydroxyle $\\ce{-OH}$."
      },
      {
        "content": "La numérotation correcte place le groupe $\\ce{-OH}$ en position 2.",
        "correct": false,
        "explanation": "Correct : depuis l'extrémité la plus proche de la fonction, le carbone porteur de $\\ce{-OH}$ est C2."
      },
      {
        "content": "Le nom systématique est butan-3-ol.",
        "correct": true,
        "explanation": "Incorrect : on retient le locant 2 plutôt que 3 ; le nom est butan-2-ol."
      },
      {
        "content": "Le sens gauche-droite du dessin impose toujours le numéro 1 à l'extrémité gauche.",
        "correct": true,
        "explanation": "Incorrect : l'orientation graphique ne détermine jamais la numérotation."
      }
    ],
    "explanation": "La structure se nomme butan-2-ol. Le point essentiel est de numéroter le parent en fonction de la fonction principale, indépendamment de l'orientation du dessin."
  },
  {
    "order": 32,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix associations suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "$\\ce{CH3-OH}$ : méthanol.",
        "correct": true,
        "explanation": "Un carbone et une fonction alcool donnent méthanol."
      },
      {
        "content": "$\\ce{CH3-CH2-SH}$ : éthanethiol.",
        "correct": true,
        "explanation": "Deux carbones et une fonction thiol donnent éthanethiol."
      },
      {
        "content": "$\\ce{CH3-CH2-NH2}$ : éthanamine.",
        "correct": true,
        "explanation": "La chaîne comporte deux carbones et l'amine est la fonction principale."
      },
      {
        "content": "$\\ce{CH3-CH(OH)-CH3}$ : propan-2-ol.",
        "correct": true,
        "explanation": "Le groupe hydroxyle est porté par C2 d'un parent propane."
      },
      {
        "content": "$\\ce{CH3-CH(SH)-CH3}$ : propan-2-thiol.",
        "correct": true,
        "explanation": "Le groupe thiol est porté par C2 d'un parent propane."
      },
      {
        "content": "$\\ce{CH3-OH}$ : méthanethiol.",
        "correct": false,
        "explanation": "Méthanethiol contientrait $\\ce{-SH}$ ; $\\ce{CH3-OH}$ est le méthanol."
      },
      {
        "content": "$\\ce{CH3-CH2-SH}$ : éthanol.",
        "correct": false,
        "explanation": "Éthanol comporte $\\ce{-OH}$, pas $\\ce{-SH}$."
      },
      {
        "content": "$\\ce{CH3-CH2-NH2}$ : propan-1-amine.",
        "correct": false,
        "explanation": "La structure ne contient que deux carbones."
      },
      {
        "content": "$\\ce{CH3-CH(OH)-CH3}$ : propan-1-ol.",
        "correct": false,
        "explanation": "Le groupe hydroxyle est porté par le carbone 2."
      },
      {
        "content": "$\\ce{CH3-CH(SH)-CH3}$ : propan-1-thiol.",
        "correct": false,
        "explanation": "Le groupe $\\ce{-SH}$ est porté par le carbone 2."
      }
    ],
    "explanation": "Ce quiz impose de relier simultanément le squelette carboné, la fonction et son locant. Le suffixe distingue notamment alcool (-ol), thiol (-thiol) et amine (-amine)."
  },
  {
    "order": 33,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH(OH)-CH(CH3)-CH3}$ ?",
    "choices": [
      {
        "content": "3-méthylbutan-2-ol.",
        "correct": true,
        "explanation": "Le parent de quatre carbones contient le carbone portant $\\ce{-OH}$. La fonction reçoit l'indice 2 et le méthyle l'indice 3."
      },
      {
        "content": "2-méthylbutan-3-ol.",
        "correct": false,
        "explanation": "Le sens de numérotation doit privilégier le plus petit locant de la fonction alcool : 2 plutôt que 3."
      },
      {
        "content": "2-méthylbutan-2-ol.",
        "correct": false,
        "explanation": "Dans cette structure, le groupe méthyle n'est pas porté par le même carbone que le groupe hydroxyle."
      },
      {
        "content": "3-méthylbutan-3-ol.",
        "correct": false,
        "explanation": "La fonction alcool doit recevoir le locant 2 avec la numérotation correcte."
      },
      {
        "content": "Pentan-2-ol.",
        "correct": false,
        "explanation": "Aucune chaîne continue de cinq carbones contenant le carbone porteur de $\\ce{-OH}$ n'existe."
      }
    ],
    "explanation": "Méthode complète : fonction alcool → parent butane → numérotation donnant -OH en C2 → méthyle en C3 → 3-méthylbutan-2-ol."
  },
  {
    "order": 34,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH2-CH(SH)-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "butan-2-thiol",
        "butan 2 thiol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La chaîne principale comporte quatre carbones. On numérote depuis l'extrémité la plus proche du groupe $\\ce{-SH}$ : il est alors en C2. Le nom est butan-2-thiol."
  },
  {
    "order": 35,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du nom « 3-méthylbutan-2-ol », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La chaîne principale comporte quatre carbones.",
        "correct": true,
        "explanation": "Le radical butan- indique un parent de quatre carbones."
      },
      {
        "content": "Le groupe hydroxyle est porté par le carbone 2.",
        "correct": true,
        "explanation": "Le locant 2 placé avant -ol localise la fonction alcool."
      },
      {
        "content": "Un groupe méthyle est porté par le carbone 3.",
        "correct": true,
        "explanation": "Le préfixe 3-méthyl- indique un substituant méthyle en C3."
      },
      {
        "content": "La molécule comporte cinq carbones au total.",
        "correct": true,
        "explanation": "Le parent en contient quatre et le substituant méthyle en ajoute un."
      },
      {
        "content": "Le nom indique un groupe thiol porté par le carbone 2.",
        "correct": false,
        "explanation": "Le suffixe -ol indique un alcool ; un thiol serait signalé par -thiol."
      }
    ],
    "explanation": "Lire un nom dans l'autre sens fait partie de l'apprentissage : 3-méthyl / butan / 2-ol permet de reconstruire substituant, parent et position de la fonction."
  },
  {
    "order": 36,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom systématique de $\\ce{CH3-CH(NH2)-CH2-CH3}$ ?",
    "choices": [
      {
        "content": "Butan-2-amine.",
        "correct": true,
        "explanation": "Le parent comporte quatre carbones et le groupe amine est porté par C2 avec la numérotation correcte."
      },
      {
        "content": "Butan-3-amine.",
        "correct": false,
        "explanation": "On numérote depuis l'extrémité la plus proche de la fonction : 2 est préféré à 3."
      },
      {
        "content": "Propan-2-amine.",
        "correct": false,
        "explanation": "La chaîne principale appropriée comporte quatre carbones."
      },
      {
        "content": "Butan-2-ol.",
        "correct": false,
        "explanation": "La fonction présente est une amine, pas un alcool."
      },
      {
        "content": "2-aminobutane.",
        "correct": false,
        "explanation": "Dans le cadre monofonctionnel travaillé ici, l'amine principale est exprimée par le suffixe -amine : butan-2-amine."
      }
    ],
    "explanation": "La méthode ne change pas : parent butane, fonction amine en C2, suffixe -amine. On obtient butan-2-amine."
  },
  {
    "order": 37,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de l'amine secondaire $\\ce{CH3-CH2-NH-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "N-méthyléthanamine",
        "N-methylethanamine",
        "n-méthyléthanamine",
        "n-methylethanamine"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La plus longue chaîne liée à l'azote fournit ici le parent éthanamine. Le second groupe carboné est un méthyle porté directement par l'azote : N-méthyléthanamine."
  },
  {
    "order": 38,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la nomenclature des amines portant des substituants directement sur l'azote, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La lettre N peut servir de locant pour signaler qu'un substituant est directement porté par l'azote.",
        "correct": true,
        "explanation": "Dans N-méthyléthanamine, N- indique que le groupe méthyle est attaché à l'azote."
      },
      {
        "content": "$\\ce{CH3-CH2-NH-CH3}$ peut se nommer N-méthyléthanamine.",
        "correct": true,
        "explanation": "Le parent éthanamine porte un substituant méthyle sur l'azote."
      },
      {
        "content": "Dans N,N-diméthyléthanamine, les deux groupes méthyle sont directement liés à l'azote.",
        "correct": true,
        "explanation": "La répétition N,N- localise les deux substituants méthyle sur l'atome d'azote."
      },
      {
        "content": "La lettre N signifie que la chaîne principale contient N carbones.",
        "correct": false,
        "explanation": "N est ici un locant atomique désignant l'azote, pas un nombre de carbones."
      },
      {
        "content": "Un substituant porté par l'azote reçoit obligatoirement un locant numérique comme 1-, 2- ou 3-.",
        "correct": false,
        "explanation": "Lorsqu'il est attaché directement à l'azote, le locant N permet précisément de le distinguer d'un substituant porté par un carbone."
      }
    ],
    "explanation": "Les amines N-substituées ajoutent une étape à la méthode : distinguer le parent carboné des groupes fixés directement sur l'azote, qui sont repérés par N-."
  },
  {
    "order": 39,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "À propos de $\\ce{CH3-CH2-NH-CH3}$, sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "La molécule est une amine secondaire.",
        "correct": false,
        "explanation": "Correct : l'azote est lié à deux groupes carbonés et porte encore un hydrogène."
      },
      {
        "content": "Le groupe éthyle peut fournir le parent éthanamine.",
        "correct": false,
        "explanation": "Correct : la chaîne carbonée la plus longue liée à l'azote comporte ici deux carbones."
      },
      {
        "content": "Le groupe méthyle directement lié à l'azote est indiqué par N-méthyl-.",
        "correct": false,
        "explanation": "Correct : N- localise le substituant méthyle sur l'atome d'azote."
      },
      {
        "content": "Le nom systématique attendu ici est 1-méthyléthanamine.",
        "correct": true,
        "explanation": "Incorrect : le méthyle est porté par l'azote, pas par le carbone 1 ; le locant attendu est N-."
      },
      {
        "content": "Le nom systématique attendu ici est propan-2-amine.",
        "correct": true,
        "explanation": "Incorrect : les trois carbones ne constituent pas une chaîne continue de trois carbones ; ils sont répartis de part et d'autre de l'azote."
      }
    ],
    "explanation": "La difficulté est de ne pas « traverser » l'azote pour inventer une chaîne carbonée continue. Le parent est éthanamine et le substituant sur l'azote est N-méthyl-."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-C(OH)(CH3)-CH2-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2-méthylbutan-2-ol",
        "2-methylbutan-2-ol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La plus longue chaîne contenant le carbone porteur de $\\ce{-OH}$ compte quatre carbones. En C2 se trouvent à la fois le groupe hydroxyle et un substituant méthyle : 2-méthylbutan-2-ol."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles propositions distinguent correctement butan-1-ol et butan-2-ol ?",
    "choices": [
      {
        "content": "Ils possèdent tous deux une chaîne principale de quatre carbones.",
        "correct": true,
        "explanation": "Le parent butan- est commun aux deux noms."
      },
      {
        "content": "Dans butan-1-ol, le groupe hydroxyle est porté par un carbone terminal.",
        "correct": true,
        "explanation": "Le locant 1 situe $\\ce{-OH}$ à l'extrémité de la chaîne."
      },
      {
        "content": "Dans butan-2-ol, le groupe hydroxyle est porté par le carbone 2.",
        "correct": true,
        "explanation": "Le locant 2 localise directement la fonction alcool."
      },
      {
        "content": "Ils ont nécessairement la même structure parce qu'ils portent le même suffixe.",
        "correct": false,
        "explanation": "Ils appartiennent à la même famille, mais diffèrent par la position du groupe hydroxyle."
      },
      {
        "content": "Le chiffre placé avant -ol peut être supprimé dans les deux noms sans perte d'information.",
        "correct": false,
        "explanation": "Le locant est nécessaire pour distinguer les deux isomères de position."
      }
    ],
    "explanation": "La nomenclature sert précisément à distinguer des structures proches : même parent et même fonction, mais locant différent pour le groupe hydroxyle."
  },
  {
    "order": 42,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "Le nom 2-méthylbutan-2-ol décrit une chaîne principale de quatre carbones.",
        "correct": true,
        "explanation": "Le parent butan- contient quatre carbones."
      },
      {
        "content": "Dans 2-méthylbutan-2-ol, le groupe hydroxyle et le substituant méthyle sont portés par le même carbone.",
        "correct": true,
        "explanation": "Les deux éléments portent le locant 2."
      },
      {
        "content": "N-méthyléthanamine contient un substituant méthyle directement lié à l'azote.",
        "correct": true,
        "explanation": "Le locant N- indique une substitution sur l'azote."
      },
      {
        "content": "Butan-2-thiol indique un groupe $\\ce{-SH}$ porté par le carbone 2.",
        "correct": true,
        "explanation": "Le suffixe -thiol et le locant 2 localisent la fonction."
      },
      {
        "content": "Propan-2-amine et propan-1-amine se distinguent par la position de la fonction amine.",
        "correct": true,
        "explanation": "Le locant précise le carbone auquel le groupe amine est lié."
      },
      {
        "content": "Dans butan-2-ol, le chiffre 2 indique que la molécule comporte deux groupes hydroxyle.",
        "correct": false,
        "explanation": "Le chiffre 2 est un locant, pas un multiplicateur."
      },
      {
        "content": "Éthanethiol possède trois carbones.",
        "correct": false,
        "explanation": "Éthan- correspond à deux carbones."
      },
      {
        "content": "N,N-diméthyléthanamine indique deux groupes méthyle portés par le carbone 1.",
        "correct": false,
        "explanation": "N,N- signifie que les deux groupes méthyle sont portés par l'azote."
      },
      {
        "content": "Le suffixe -amine indique une fonction alcool.",
        "correct": false,
        "explanation": "-amine désigne une amine ; -ol désigne un alcool."
      },
      {
        "content": "La présence d'une ramification permet d'ignorer la position de la fonction principale.",
        "correct": false,
        "explanation": "La fonction principale reste déterminante pour le choix et la numérotation du parent."
      }
    ],
    "explanation": "Cette synthèse oblige à lire les noms par blocs : substituants, parent, locants et suffixe. Elle introduit aussi le locant N- propre aux substituants portés directement par l'azote."
  },
  {
    "order": 43,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "On considère $\\ce{CH2=CH-CH2-CH(OH)-CH3}$. Quelles propositions sont exactes pour construire son nom ?",
    "choices": [
      {
        "content": "La chaîne principale comporte cinq carbones.",
        "correct": true,
        "explanation": "La chaîne continue contenant à la fois le groupe hydroxyle et la double liaison compte cinq carbones."
      },
      {
        "content": "La fonction alcool doit recevoir le locant 2 avec la numérotation correcte.",
        "correct": true,
        "explanation": "On numérote depuis l'extrémité la plus proche du groupe $\\ce{-OH}$ : il se trouve alors en C2."
      },
      {
        "content": "Avec cette numérotation, la double liaison commence au carbone 4.",
        "correct": true,
        "explanation": "La double liaison relie alors C4 et C5."
      },
      {
        "content": "Le nom cohérent avec cette numérotation est pent-4-en-2-ol.",
        "correct": true,
        "explanation": "Le parent est pent-, la double liaison est en 4 et l'alcool en 2 : pent-4-en-2-ol."
      },
      {
        "content": "Il faut privilégier le locant 1 de la double liaison et nommer pent-1-en-4-ol.",
        "correct": false,
        "explanation": "Lorsque l'alcool est la fonction principale, sa position guide ici le choix du sens de numérotation ; le locant 2 de -ol est préféré."
      }
    ],
    "explanation": "Ce cas combine deux compétences : conserver une chaîne contenant la fonction alcool et l'insaturation, puis numéroter en donnant la priorité de locant à la fonction principale. On obtient pent-4-en-2-ol."
  },
  {
    "order": 44,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH=CH-CH(OH)-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pent-3-en-2-ol"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La chaîne principale comporte cinq carbones. On numérote depuis l'extrémité la plus proche du groupe hydroxyle : $\\ce{-OH}$ est en C2 et la double liaison commence en C3. Le nom est pent-3-en-2-ol."
  }
];
