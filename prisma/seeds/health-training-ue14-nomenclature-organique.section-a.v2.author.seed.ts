import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/**
 * UE14 – Chimie organique – Chapitre 2.8 – Section A – La méthode : chaîne principale et numérotation
 * Ordres 1–22 (22 questions)
 * A1 — Trouver la chaîne principale et la fonction : ordres 1–10, DISCOVER
 * A2 — Numéroter et construire le nom : ordres 11–22, PRACTICE
 */

export const UE14_CH12_SECTION_A_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pour nommer méthodiquement une molécule organique, quel enchaînement constitue le meilleur point de départ ?",
    "choices": [
      {
        "content": "Identifier la fonction principale lorsqu'il y en a une, choisir la chaîne principale, numéroter, repérer les substituants et insaturations, puis assembler le nom.",
        "correct": true,
        "explanation": "Cette démarche évite de choisir trop tôt un parent ou un sens de numérotation qui deviendrait incompatible avec la fonction principale ou les indices à attribuer."
      },
      {
        "content": "Numéroter d'abord la structure de gauche à droite, puis rechercher la fonction principale.",
        "correct": false,
        "explanation": "L'orientation du dessin ne fixe pas la numérotation. La fonction principale et le choix du parent doivent être examinés avant de fixer les indices."
      },
      {
        "content": "Compter tous les carbones de la molécule et utiliser automatiquement ce nombre pour choisir le nom du parent.",
        "correct": false,
        "explanation": "Le parent décrit une chaîne principale continue appropriée, pas nécessairement tous les carbones de la molécule."
      },
      {
        "content": "Nommer d'abord les substituants, puis choisir ensuite la chaîne principale qui les porte.",
        "correct": false,
        "explanation": "Les substituants sont définis par rapport à la chaîne principale ; celle-ci doit donc être choisie avant leur localisation définitive."
      },
      {
        "content": "Choisir le suffixe uniquement à partir de la longueur de la chaîne carbonée.",
        "correct": false,
        "explanation": "Le suffixe traduit notamment la fonction principale ou le type d'insaturation ; la longueur de chaîne fournit le radical du parent."
      }
    ],
    "explanation": "Une méthode robuste consiste à identifier d'abord la fonction principale lorsqu'elle existe, puis à choisir le parent, fixer la numérotation, repérer les éléments à nommer et seulement ensuite assembler le nom complet."
  },
  {
    "order": 2,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Pour choisir la chaîne principale d'un alcane ramifié simple, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La chaîne principale doit être continue.",
        "correct": true,
        "explanation": "Une chaîne principale suit une succession continue de liaisons carbone-carbone ; on ne peut pas sauter d'un carbone à un autre."
      },
      {
        "content": "On recherche en priorité la plus longue chaîne carbonée continue dans les cas simples considérés ici.",
        "correct": true,
        "explanation": "Pour un alcane ramifié simple sans autre fonction ni insaturation concurrente, la plus longue chaîne continue fournit le parent."
      },
      {
        "content": "La chaîne principale doit nécessairement contenir tous les carbones de la molécule.",
        "correct": false,
        "explanation": "Les carbones appartenant aux ramifications restent hors de la chaîne principale et sont décrits comme substituants."
      },
      {
        "content": "La chaîne principale est forcément la ligne la plus horizontale sur le dessin.",
        "correct": false,
        "explanation": "L'orientation graphique n'a aucune valeur nomenclaturale ; seule la connectivité des atomes compte."
      },
      {
        "content": "Deux dessins orientés différemment d'une même molécule conduisent au même choix de parent.",
        "correct": true,
        "explanation": "Tourner ou retourner une structure ne modifie pas sa connectivité ni les règles de choix de la chaîne principale."
      }
    ],
    "explanation": "Dans un alcane ramifié simple, le parent est construit sur une chaîne carbonée continue, généralement la plus longue. La disposition graphique de la formule ne doit pas influencer ce choix."
  },
  {
    "order": 3,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "On considère la structure $\\ce{CH3-CH2-CH(CH3)-CH2-CH3}$. Quel parent doit être retenu pour commencer son nom ?",
    "choices": [
      {
        "content": "Pentane.",
        "correct": true,
        "explanation": "La plus longue chaîne carbonée continue contient cinq carbones : le parent est donc pentane."
      },
      {
        "content": "Hexane.",
        "correct": false,
        "explanation": "La molécule possède six carbones au total, mais aucune chaîne continue n'en contient six."
      },
      {
        "content": "Butane.",
        "correct": false,
        "explanation": "Une chaîne continue de cinq carbones existe ; une chaîne de quatre carbones n'est donc pas le bon parent."
      },
      {
        "content": "Propane.",
        "correct": false,
        "explanation": "La structure contient une chaîne continue bien plus longue que trois carbones."
      },
      {
        "content": "Éthane.",
        "correct": false,
        "explanation": "Le parent doit représenter la chaîne principale, ici constituée de cinq carbones."
      }
    ],
    "explanation": "Le premier réflexe est de distinguer le nombre total de carbones du nombre de carbones de la chaîne principale. Ici, six carbones sont présents au total, mais le parent est un pentane."
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de carbones comporte la chaîne principale du 2,2-diméthylbutane ? Donnez uniquement la valeur numérique.",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Le terme butane indique une chaîne principale de quatre carbones. Les deux groupes méthyle sont des substituants et ne changent pas la longueur du parent."
  },
  {
    "order": 5,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "On considère $\\ce{CH3-CH(CH3)-CH2-CH2-CH3}$. Quelles propositions sont exactes concernant sa numérotation ?",
    "choices": [
      {
        "content": "En numérotant depuis l'extrémité la plus proche de la ramification, le groupe méthyle reçoit l'indice 2.",
        "correct": true,
        "explanation": "Depuis cette extrémité, le carbone portant le méthyle est le carbone 2."
      },
      {
        "content": "En numérotant depuis l'autre extrémité, le groupe méthyle recevrait l'indice 4.",
        "correct": true,
        "explanation": "Le même carbone est alors rencontré en quatrième position."
      },
      {
        "content": "Entre les indices 2 et 4, l'indice 2 doit être retenu.",
        "correct": true,
        "explanation": "Le sens de numérotation choisi doit fournir l'indice le plus faible au substituant dans ce cas simple."
      },
      {
        "content": "Le sens de numérotation dépend de la gauche et de la droite du dessin.",
        "correct": false,
        "explanation": "Une molécule peut être retournée sans changer de nom. La numérotation dépend des indices obtenus, pas de la page."
      },
      {
        "content": "Le nom obtenu est 2-méthylpentane.",
        "correct": true,
        "explanation": "La chaîne principale est un pentane et le substituant méthyle est placé en position 2."
      }
    ],
    "explanation": "Après avoir choisi le parent pentane, on compare les deux sens de numérotation. Le méthyle reçoit 2 dans un sens et 4 dans l'autre : le plus petit indice conduit à 2-méthylpentane."
  },
  {
    "order": 6,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Dans le nom « 3-méthylhexane », que signifie le nombre 3 ?",
    "choices": [
      {
        "content": "Le groupe méthyle est porté par le carbone 3 de la chaîne principale.",
        "correct": true,
        "explanation": "Le nombre placé devant le substituant est son indice de position sur la chaîne principale numérotée."
      },
      {
        "content": "La chaîne principale contient trois carbones.",
        "correct": false,
        "explanation": "La chaîne principale contient six carbones, comme l'indique le radical hex-."
      },
      {
        "content": "La molécule contient exactement trois groupes méthyle.",
        "correct": false,
        "explanation": "Le nombre 3 est un indice de position ; il ne donne pas le nombre de groupes méthyle."
      },
      {
        "content": "Le troisième carbone est forcément un carbone tertiaire.",
        "correct": false,
        "explanation": "Un indice de position ne renseigne pas directement sur le degré du carbone concerné."
      },
      {
        "content": "La molécule contient trois carbones en dehors de la chaîne principale.",
        "correct": false,
        "explanation": "Le nom indique ici un seul substituant méthyle, donc un seul carbone supplémentaire hors du parent."
      }
    ],
    "explanation": "Un nombre placé devant un substituant est un locant : il indique sa position sur la chaîne principale. Il ne doit pas être confondu avec un nombre d'atomes ou de substituants."
  },
  {
    "order": 7,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant l'écriture d'un nom organique simple, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Deux indices numériques successifs se séparent par une virgule, comme dans 2,3-diméthylbutane.",
        "correct": true,
        "explanation": "Les virgules séparent les nombres lorsqu'une même partie du nom comporte plusieurs locants."
      },
      {
        "content": "Un indice et le mot qui le suit sont séparés par un tiret, comme dans 3-méthylhexane.",
        "correct": true,
        "explanation": "Le tiret sépare classiquement un nombre et une partie alphabétique du nom."
      },
      {
        "content": "Le préfixe di- indique que le même type de substituant est présent deux fois.",
        "correct": true,
        "explanation": "Dans diméthyl-, deux substituants méthyle sont indiqués et chacun reçoit son locant."
      },
      {
        "content": "Lorsque des substituants différents sont cités, leur ordre dans le nom tient compte de l'ordre alphabétique de leurs noms.",
        "correct": true,
        "explanation": "Par exemple, éthyl- est cité avant méthyl- dans un nom comportant ces deux substituants."
      },
      {
        "content": "Il faut insérer un espace entre chaque indice et le substituant correspondant, par exemple « 3 méthylhexane ».",
        "correct": false,
        "explanation": "La forme attendue utilise un tiret : 3-méthylhexane."
      }
    ],
    "explanation": "La syntaxe du nom fait partie de la méthode : virgules entre nombres, tirets entre nombres et mots, préfixes multiplicatifs pour les substituants répétés et ordre alphabétique des substituants différents."
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "À propos de quelques substituants alkyles simples, quelles associations sont exactes ?",
    "choices": [
      {
        "content": "Méthyle : $\\ce{-CH3}$.",
        "correct": true,
        "explanation": "Le groupe méthyle dérive du méthane par retrait d'un hydrogène."
      },
      {
        "content": "Éthyle : $\\ce{-C2H5}$.",
        "correct": true,
        "explanation": "Le groupe éthyle dérive de l'éthane $\\ce{C2H6}$ par retrait d'un hydrogène."
      },
      {
        "content": "Propyle : $\\ce{-C3H7}$.",
        "correct": true,
        "explanation": "Le groupe propyle dérive du propane $\\ce{C3H8}$ par retrait d'un hydrogène."
      },
      {
        "content": "Méthyle : $\\ce{-CH4}$.",
        "correct": false,
        "explanation": "$\\ce{CH4}$ est le méthane ; un substituant méthyle possède un hydrogène de moins : $\\ce{-CH3}$."
      },
      {
        "content": "Éthyle : $\\ce{-C2H6}$.",
        "correct": false,
        "explanation": "$\\ce{C2H6}$ est l'éthane. Le substituant éthyle est $\\ce{-C2H5}$."
      }
    ],
    "explanation": "Les substituants alkyles usuels dérivent des alcanes par retrait formel d'un hydrogène : méthyle $\\ce{-CH3}$, éthyle $\\ce{-C2H5}$, propyle $\\ce{-C3H7}$."
  },
  {
    "order": 9,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Pour construire le nom d'une molécule organique simple, sélectionnez exactement les deux démarches incorrectes.",
    "choices": [
      {
        "content": "Choisir le sens de numérotation uniquement parce que le dessin se lit naturellement de gauche à droite.",
        "correct": true,
        "explanation": "Incorrect : la gauche et la droite du dessin sont arbitraires. Le sens de numérotation doit être choisi à partir des règles d'attribution des indices."
      },
      {
        "content": "Identifier la chaîne principale avant de localiser définitivement les substituants.",
        "correct": false,
        "explanation": "Correct : les substituants sont définis et numérotés par rapport à la chaîne principale."
      },
      {
        "content": "Vérifier les locants obtenus avant d'assembler le nom final.",
        "correct": false,
        "explanation": "Correct : cette vérification évite notamment de conserver une numérotation donnant des indices inutilement élevés."
      },
      {
        "content": "Utiliser automatiquement le nombre total de carbones de la molécule comme longueur du parent.",
        "correct": true,
        "explanation": "Incorrect : des carbones peuvent appartenir à des ramifications et rester hors de la chaîne principale."
      },
      {
        "content": "Distinguer le parent des substituants fait partie de la démarche.",
        "correct": false,
        "explanation": "Correct : le parent donne l'ossature principale du nom et les substituants complètent cette description."
      }
    ],
    "explanation": "Les deux erreurs classiques sont de laisser l'orientation du dessin dicter la numérotation et de confondre nombre total de carbones avec longueur du parent."
  },
  {
    "order": 10,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes sur la méthode de nomenclature, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La chaîne principale fournit le nom du parent.",
        "correct": true,
        "explanation": "Le radical du parent dépend notamment de la longueur de la chaîne principale retenue."
      },
      {
        "content": "Un locant indique la position d'un élément nommé sur la chaîne principale.",
        "correct": true,
        "explanation": "Les nombres tels que 2 ou 3 localisent une ramification, une insaturation ou une fonction lorsque la règle l'exige."
      },
      {
        "content": "Un groupe méthyle est un substituant carboné à un carbone.",
        "correct": true,
        "explanation": "Le groupe méthyle correspond à $\\ce{-CH3}$ et apporte un carbone."
      },
      {
        "content": "Une double liaison carbone-carbone peut être signalée par la terminaison -ène avec un indice de position lorsque nécessaire.",
        "correct": true,
        "explanation": "Par exemple, but-2-ène localise la double liaison entre les carbones 2 et 3."
      },
      {
        "content": "L'assemblage du nom se fait après le choix du parent et de la numérotation.",
        "correct": true,
        "explanation": "Construire le nom trop tôt expose à conserver un mauvais parent ou de mauvais locants."
      },
      {
        "content": "Le côté gauche d'un dessin reçoit toujours le numéro 1.",
        "correct": false,
        "explanation": "L'orientation graphique est arbitraire ; le numéro 1 dépend des règles de numérotation."
      },
      {
        "content": "Le nombre total de carbones est toujours égal à la longueur de la chaîne principale.",
        "correct": false,
        "explanation": "Une molécule ramifiée peut contenir des carbones en dehors de la chaîne principale."
      },
      {
        "content": "Deux locants numériques successifs sont séparés par un tiret, comme 2-3-diméthylbutane.",
        "correct": false,
        "explanation": "Deux nombres successifs se séparent par une virgule : 2,3-diméthylbutane."
      },
      {
        "content": "Le préfixe éthyl- désigne un substituant comportant trois carbones.",
        "correct": false,
        "explanation": "Éthyl- correspond à deux carbones ; trois carbones correspondent à propyl-."
      },
      {
        "content": "Une molécule doit être renommée différemment lorsqu'on retourne son dessin horizontalement.",
        "correct": false,
        "explanation": "La nomenclature dépend de la connectivité et non de l'orientation de la représentation."
      }
    ],
    "explanation": "Cette synthèse reprend les repères de base : parent, locants, substituants, insaturations, syntaxe et indépendance vis-à-vis de l'orientation du dessin."
  },
  {
    "order": 11,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel nom correspond à la structure $\\ce{CH3-CH2-CH(CH3)-CH2-CH3}$ ?",
    "choices": [
      {
        "content": "3-méthylpentane.",
        "correct": true,
        "explanation": "La chaîne principale compte cinq carbones et le substituant méthyle se trouve sur le carbone 3, quelle que soit l'extrémité choisie pour commencer le comptage."
      },
      {
        "content": "2-méthylpentane.",
        "correct": false,
        "explanation": "Le substituant n'est pas porté par le carbone 2 de la chaîne principale de cinq carbones."
      },
      {
        "content": "3-éthylbutane.",
        "correct": false,
        "explanation": "Une chaîne continue de cinq carbones existe ; le parent doit donc être pentane plutôt que butane."
      },
      {
        "content": "Hexane.",
        "correct": false,
        "explanation": "La molécule possède six carbones au total, mais ils ne forment pas une chaîne continue de six carbones."
      },
      {
        "content": "2-éthylbutane.",
        "correct": false,
        "explanation": "Ce choix utilise un parent plus court alors qu'une chaîne principale de cinq carbones est disponible."
      }
    ],
    "explanation": "Méthode : choisir la plus longue chaîne continue, ici pentane ; numéroter ; repérer le méthyle, ici en position 3 ; assembler : 3-méthylpentane."
  },
  {
    "order": 12,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH(CH3)-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2-méthylpropane",
        "2-methylpropane"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La plus longue chaîne continue comporte trois carbones : propane. Le quatrième carbone forme un substituant méthyle porté par le carbone 2 : 2-méthylpropane."
  },
  {
    "order": 13,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du nom « 2,3-diméthylbutane », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La chaîne principale comporte quatre carbones.",
        "correct": true,
        "explanation": "Le radical but- correspond à quatre carbones dans le parent."
      },
      {
        "content": "La molécule comporte six carbones au total.",
        "correct": true,
        "explanation": "Le parent butane apporte quatre carbones et les deux substituants méthyle en apportent deux supplémentaires."
      },
      {
        "content": "Les deux substituants sont portés par les carbones 2 et 3.",
        "correct": true,
        "explanation": "Les locants 2,3 indiquent précisément les positions des deux groupes méthyle."
      },
      {
        "content": "Le préfixe di- indique une chaîne principale de deux carbones.",
        "correct": false,
        "explanation": "Di- indique ici que le substituant méthyle est présent deux fois ; il ne décrit pas la longueur du parent."
      },
      {
        "content": "Le nom signifie que la molécule possède trois groupes méthyle substituants.",
        "correct": false,
        "explanation": "Le préfixe di- indique deux substituants méthyle, pas trois."
      }
    ],
    "explanation": "Lire un nom revient à le décomposer : parent butane = 4 carbones ; di-méthyl = deux substituants à un carbone ; locants 2 et 3 = leurs positions."
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel nom correspond à $\\ce{CH3-CH2-CH(CH2CH3)-CH2-CH3}$ ?",
    "choices": [
      {
        "content": "3-éthylpentane.",
        "correct": true,
        "explanation": "La plus longue chaîne continue comporte cinq carbones. Le groupe éthyle restant est porté par le carbone 3."
      },
      {
        "content": "3-méthylhexane.",
        "correct": false,
        "explanation": "Il n'existe pas ici de chaîne continue de six carbones ; le parent ne peut donc pas être hexane."
      },
      {
        "content": "2-éthylpentane.",
        "correct": false,
        "explanation": "Le carbone portant le substituant est le carbone central de la chaîne de cinq carbones, donc le carbone 3."
      },
      {
        "content": "Heptane.",
        "correct": false,
        "explanation": "La molécule contient sept carbones au total, mais ils ne constituent pas une seule chaîne continue de sept carbones."
      },
      {
        "content": "3-propylbutane.",
        "correct": false,
        "explanation": "Une chaîne principale de cinq carbones est disponible ; un parent butane serait trop court."
      }
    ],
    "explanation": "La structure contient sept carbones au total, mais le parent est une chaîne continue de cinq carbones. Le substituant à deux carbones est un éthyle en position 3 : 3-éthylpentane."
  },
  {
    "order": 15,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel est le nom de $\\ce{CH3-CH=CH-CH3}$ ?",
    "choices": [
      {
        "content": "But-2-ène.",
        "correct": true,
        "explanation": "La chaîne comporte quatre carbones et la double liaison commence au carbone 2 : but-2-ène."
      },
      {
        "content": "But-1-ène.",
        "correct": false,
        "explanation": "La double liaison n'est pas terminale ; elle relie les carbones 2 et 3."
      },
      {
        "content": "Butane.",
        "correct": false,
        "explanation": "La présence d'une double liaison impose la terminaison -ène plutôt que -ane."
      },
      {
        "content": "Prop-2-ène.",
        "correct": false,
        "explanation": "La chaîne principale comporte quatre carbones, pas trois."
      },
      {
        "content": "2-méthylprop-1-ène.",
        "correct": false,
        "explanation": "Cette proposition décrit une structure ramifiée différente."
      }
    ],
    "explanation": "Méthode : quatre carbones donnent but-, la double liaison est située entre C2 et C3, d'où le locant 2 et le nom but-2-ène."
  },
  {
    "order": 16,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH2=CH-CH2-CH2-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "pent-1-ène",
        "pent-1-ene"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La chaîne principale comporte cinq carbones. On numérote depuis l'extrémité la plus proche de la double liaison, qui commence alors au carbone 1 : pent-1-ène."
  },
  {
    "order": 17,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos du nom « 4-méthylhex-2-ène », quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "La chaîne principale comporte six carbones.",
        "correct": true,
        "explanation": "Le radical hex- correspond à une chaîne principale de six carbones."
      },
      {
        "content": "La double liaison relie les carbones 2 et 3 de la chaîne principale.",
        "correct": true,
        "explanation": "Le locant 2 de hex-2-ène désigne le premier carbone de la double liaison."
      },
      {
        "content": "Un groupe méthyle est porté par le carbone 4.",
        "correct": true,
        "explanation": "Le locant 4 placé devant méthyl- indique la position du substituant."
      },
      {
        "content": "La molécule contient sept carbones au total.",
        "correct": true,
        "explanation": "Six carbones appartiennent au parent et le substituant méthyle en ajoute un."
      },
      {
        "content": "Le nom indique une double liaison entre les carbones 4 et 5.",
        "correct": false,
        "explanation": "La double liaison est localisée par le locant 2, donc entre C2 et C3."
      }
    ],
    "explanation": "Le nom se lit par blocs : 4-méthyl = substituant en C4 ; hex = six carbones dans le parent ; 2-ène = double liaison commençant en C2."
  },
  {
    "order": 18,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "La structure représentée correspond à un méthylhexène. Pour obtenir le plus petit indice de la double liaison, cliquez sur l'extrémité de la chaîne principale qui doit recevoir le numéro 1.",
    "image": {
      "src": "/images/training/ue14/chimie/nomenclature-organique/section-a-4-methylhex-2-ene-qzone.svg",
      "alt": "Formule topologique simplifiée du 4-méthylhex-2-ène, avec une chaîne principale de six carbones, une double liaison proche de l'extrémité gauche et un substituant méthyle",
      "width": 1200,
      "height": 500
    },
    "expectedZones": [
      {
        "id": "carbon-1-left-end",
        "label": "Extrémité donnant le carbone 1",
        "x": 0.1,
        "y": 0.52,
        "tolerance": 0.075
      }
    ],
    "explanation": "On choisit le sens de numérotation qui donne l'indice le plus faible à la double liaison. En partant de l'extrémité gauche, elle commence en C2 ; depuis l'autre extrémité, elle commencerait en C4."
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quel nom correspond à $\\ce{CH3-C(CH3)2-CH2-CH3}$ ?",
    "choices": [
      {
        "content": "2,2-diméthylbutane.",
        "correct": true,
        "explanation": "La plus longue chaîne continue comporte quatre carbones et les deux groupes méthyle sont tous deux portés par le carbone 2."
      },
      {
        "content": "3,3-diméthylbutane.",
        "correct": false,
        "explanation": "La chaîne doit être numérotée depuis l'extrémité donnant les plus petits locants : 2,2 est préféré à 3,3."
      },
      {
        "content": "2-méthylpentane.",
        "correct": false,
        "explanation": "Aucune chaîne continue de cinq carbones n'existe dans cette structure."
      },
      {
        "content": "Hexane.",
        "correct": false,
        "explanation": "La molécule contient six carbones au total, mais ils ne forment pas une chaîne linéaire continue de six carbones."
      },
      {
        "content": "2-éthyl-2-méthylpropane.",
        "correct": false,
        "explanation": "Cette proposition utilise un parent plus court alors qu'une chaîne continue de quatre carbones est disponible."
      }
    ],
    "explanation": "Méthode : parent butane, numérotation donnant 2,2 plutôt que 3,3, puis deux substituants méthyle sur le même carbone : 2,2-diméthylbutane."
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "On considère $\\ce{CH3-CH2-CH(CH3)-CH2-CH3}$. Sélectionnez exactement les deux propositions incorrectes.",
    "choices": [
      {
        "content": "La chaîne principale comporte cinq carbones.",
        "correct": false,
        "explanation": "Correct : la plus longue chaîne continue est un pentane."
      },
      {
        "content": "Le substituant méthyle reçoit l'indice 3 quel que soit le sens de numérotation de cette chaîne.",
        "correct": false,
        "explanation": "Correct : le carbone central d'une chaîne de cinq carbones est le carbone 3 depuis les deux extrémités."
      },
      {
        "content": "La molécule comporte six carbones au total.",
        "correct": false,
        "explanation": "Correct : cinq carbones appartiennent au parent et le méthyle en ajoute un."
      },
      {
        "content": "Le parent doit être hexane puisque la molécule contient six carbones au total.",
        "correct": true,
        "explanation": "Incorrect : les six carbones ne forment pas une chaîne continue ; le parent est pentane."
      },
      {
        "content": "Le nom 2-méthylpentane est préférable car il faut toujours rapprocher un substituant d'une extrémité.",
        "correct": true,
        "explanation": "Incorrect : dans cette structure, le méthyle est réellement en position 3 ; on ne peut pas modifier sa position par convention."
      }
    ],
    "explanation": "La structure se nomme 3-méthylpentane. Le piège consiste à confondre nombre total de carbones avec longueur du parent ou à vouloir artificiellement réduire un locant qui est fixé par la connectivité."
  },
  {
    "order": 21,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Donnez le nom systématique de $\\ce{CH3-CH(CH3)-CH2-CH(CH3)-CH3}$.",
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "2,4-diméthylpentane",
        "2,4-dimethylpentane"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    },
    "explanation": "La plus longue chaîne continue comporte cinq carbones. Deux groupes méthyle sont présents et la numérotation donne les locants 2 et 4 : 2,4-diméthylpentane."
  },
  {
    "order": 22,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "On considère le nom « 3-éthyl-2-méthylpentane ». Parmi les dix propositions suivantes, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "La chaîne principale comporte cinq carbones.",
        "correct": true,
        "explanation": "Le parent pentane indique cinq carbones dans la chaîne principale."
      },
      {
        "content": "La molécule comporte huit carbones au total.",
        "correct": true,
        "explanation": "Le parent apporte 5 carbones, l'éthyle 2 et le méthyle 1 : au total 8."
      },
      {
        "content": "Les substituants sont portés par les carbones 2 et 3.",
        "correct": true,
        "explanation": "Le méthyle est en C2 et l'éthyle en C3."
      },
      {
        "content": "Dans le nom, éthyl- est cité avant méthyl- conformément à l'ordre alphabétique.",
        "correct": true,
        "explanation": "Pour des substituants différents, l'ordre alphabétique conduit ici à éthyl- avant méthyl-."
      },
      {
        "content": "Avec ce choix de chaîne, la numérotation 2,3 est préférable à 3,4.",
        "correct": true,
        "explanation": "Le sens opposé donnerait des locants plus élevés, 3 et 4."
      },
      {
        "content": "Le parent est octane puisque la molécule contient huit carbones au total.",
        "correct": false,
        "explanation": "Le parent décrit la chaîne principale continue retenue, ici un pentane, et non le nombre total de carbones."
      },
      {
        "content": "La molécule comporte sept carbones au total.",
        "correct": false,
        "explanation": "Le total est 5 + 2 + 1 = 8 carbones."
      },
      {
        "content": "Le nom préféré est 2-méthyl-3-éthylpentane parce que le plus petit locant doit être cité en premier.",
        "correct": false,
        "explanation": "L'ordre de citation des substituants différents est alphabétique : éthyl- avant méthyl-."
      },
      {
        "content": "L'ordre alphabétique impose de numéroter la chaîne depuis l'extrémité la plus proche du substituant éthyle, même si les locants deviennent 3 et 4.",
        "correct": false,
        "explanation": "Le choix du sens de numérotation vise d'abord les locants appropriés ; l'ordre alphabétique ne justifie pas de remplacer 2,3 par 3,4."
      },
      {
        "content": "Le préfixe pent- signifie que la molécule ne peut pas comporter de carbones hors de la chaîne principale.",
        "correct": false,
        "explanation": "Les substituants carbonés ajoutent ici trois carbones en dehors de la chaîne principale."
      }
    ],
    "explanation": "Cette question mobilise toute la méthode : lire le parent, compter les substituants, vérifier la numérotation, distinguer longueur du parent et nombre total de carbones, puis respecter l'ordre alphabétique dans l'assemblage du nom."
  }
];
