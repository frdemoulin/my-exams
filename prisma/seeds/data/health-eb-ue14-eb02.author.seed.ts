/*
 * UE14 EB02 — editorial source authored and frozen by ChatGPT.
 * Technical integration agents must not rewrite any pedagogical/scientific content.
 * The JSON file EB02-UE14-EDITORIAL-SEED.json is the comparison source of truth.
 */

export const UE14_EB02_EDITORIAL_SEED = {
  "exam": {
    "code": "EB02",
    "slug": "eb02",
    "title": "Examen blanc UE14 — EB02",
    "courseUnit": "UE14",
    "durationMinutes": 150,
    "durationSeconds": 9000,
    "questionCount": 100
  },
  "sections": [
    {
      "order": 1,
      "teachingElementKey": "CHIMIE",
      "title": "Chimie",
      "questionStableIds": [
        "eb02-q01",
        "eb02-q02",
        "eb02-q03",
        "eb02-q04",
        "eb02-q05",
        "eb02-q06",
        "eb02-q07",
        "eb02-q08",
        "eb02-q09",
        "eb02-q10",
        "eb02-q11",
        "eb02-q12",
        "eb02-q13",
        "eb02-q14",
        "eb02-q15",
        "eb02-q16",
        "eb02-q17",
        "eb02-q18",
        "eb02-q19",
        "eb02-q20",
        "eb02-q21",
        "eb02-q22",
        "eb02-q23",
        "eb02-q24",
        "eb02-q25",
        "eb02-q26",
        "eb02-q27",
        "eb02-q28"
      ]
    },
    {
      "order": 2,
      "teachingElementKey": "BIOCHIMIE",
      "title": "Biochimie",
      "questionStableIds": [
        "eb02-q29",
        "eb02-q30",
        "eb02-q31",
        "eb02-q32",
        "eb02-q33",
        "eb02-q34",
        "eb02-q35",
        "eb02-q36",
        "eb02-q37",
        "eb02-q38",
        "eb02-q39",
        "eb02-q40",
        "eb02-q41",
        "eb02-q42",
        "eb02-q43",
        "eb02-q44",
        "eb02-q45",
        "eb02-q46",
        "eb02-q47",
        "eb02-q48",
        "eb02-q49",
        "eb02-q50",
        "eb02-q51",
        "eb02-q52",
        "eb02-q53",
        "eb02-q54",
        "eb02-q55",
        "eb02-q56",
        "eb02-q57",
        "eb02-q58",
        "eb02-q59",
        "eb02-q60",
        "eb02-q61",
        "eb02-q62"
      ]
    },
    {
      "order": 3,
      "teachingElementKey": "BIOLOGIE_CELLULAIRE",
      "title": "Biologie cellulaire",
      "questionStableIds": [
        "eb02-q63",
        "eb02-q64",
        "eb02-q65",
        "eb02-q66",
        "eb02-q67",
        "eb02-q68",
        "eb02-q69",
        "eb02-q70",
        "eb02-q71",
        "eb02-q72",
        "eb02-q73",
        "eb02-q74",
        "eb02-q75",
        "eb02-q76",
        "eb02-q77",
        "eb02-q78",
        "eb02-q79",
        "eb02-q80",
        "eb02-q81",
        "eb02-q82",
        "eb02-q83",
        "eb02-q84",
        "eb02-q85",
        "eb02-q86",
        "eb02-q87",
        "eb02-q88",
        "eb02-q89",
        "eb02-q90",
        "eb02-q91",
        "eb02-q92",
        "eb02-q93",
        "eb02-q94",
        "eb02-q95",
        "eb02-q96",
        "eb02-q97",
        "eb02-q98",
        "eb02-q99",
        "eb02-q100"
      ]
    }
  ],
  "groups": [
    {
      "id": "G1",
      "title": "Données communes — Substitution SN2 du 2-bromobutane",
      "questionStableIds": [
        "eb02-q18",
        "eb02-q19",
        "eb02-q20"
      ],
      "sharedStatement": "On étudie la substitution d’un échantillon énantiomériquement pur de 2-bromobutane par l’ion hydroxyde $\\ce{HO-}$ dans des conditions favorisant une substitution nucléophile bimoléculaire $\\mathrm{S_N2}$."
    },
    {
      "id": "G2",
      "title": "Données communes — Cinétique de Michaelis–Menten avec inhibiteur",
      "questionStableIds": [
        "eb02-q54",
        "eb02-q55",
        "eb02-q56"
      ],
      "sharedStatement": "Une enzyme michaelienne présente sans inhibiteur $V_{max}=120\\,\\mathrm{U}$ et $K_m=2\\,\\mathrm{mmol}\\cdot\\mathrm{L}^{-1}$. En présence d’un inhibiteur réversible, le plateau reste à $120\\,\\mathrm{U}$ tandis que le $K_m$ apparent devient $8\\,\\mathrm{mmol}\\cdot\\mathrm{L}^{-1}$. Le même jeu de données est représenté sur le graphique de la question Q56."
    },
    {
      "id": "G3",
      "title": "Données communes — Endocytose du LDL par récepteur",
      "questionStableIds": [
        "eb02-q72",
        "eb02-q73",
        "eb02-q74"
      ],
      "sharedStatement": "Dans l’étude d’une hypercholestérolémie familiale, on analyse d’abord le fonctionnement normal d’un hépatocyte exprimant un récepteur LDL fonctionnel. Le LDL circulant se fixe au récepteur, puis le complexe est concentré dans un puits d’endocytose avant un tri intracellulaire."
    },
    {
      "id": "G4",
      "title": "Données communes — Dommage de l’ADN et checkpoint G1/S",
      "questionStableIds": [
        "eb02-q93",
        "eb02-q94"
      ],
      "sharedStatement": "Une population de cellules diploïdes en phase G1 est exposée à un agent provoquant des lésions de l’ADN. Une réponse p53–p21 fonctionnelle est activée avant l’entrée en phase S."
    }
  ],
  "questions": [
    {
      "stableId": "eb02-q01",
      "order": 1,
      "ec": "CHIMIE",
      "chapter": "1.1 Éléments chimiques / classification",
      "axis": "Ions et nombre d’électrons",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a7a4d32a918b78a835ff27d"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "On considère l’ion $^{23}_{11}\\mathrm{Na}^{+}$. Quelle proposition est exacte ?",
      "explanation": "$Z=11$ fixe 11 protons. La charge $+1$ signifie que l’atome a perdu un électron : l’ion possède donc 10 électrons.",
      "choices": [
        {
          "content": "Il possède 11 protons et 10 électrons.",
          "correct": true,
          "explanation": "$Z=11$ donne 11 protons ; la charge $+1$ correspond à un électron de moins que l’atome neutre."
        },
        {
          "content": "Il possède 10 protons et 11 électrons.",
          "correct": false,
          "explanation": "Une ionisation ne modifie pas le noyau : le sodium conserve 11 protons."
        },
        {
          "content": "Il possède 23 protons.",
          "correct": false,
          "explanation": "23 est le nombre de masse $A$, pas le numéro atomique."
        },
        {
          "content": "Il possède 12 neutrons et 12 électrons.",
          "correct": false,
          "explanation": "Il possède bien 12 neutrons, mais seulement 10 électrons."
        },
        {
          "content": "Sa charge positive provient d’un proton ajouté au noyau.",
          "correct": false,
          "explanation": "Le cation résulte d’une perte d’électron, pas d’un changement de $Z$."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q02",
      "order": 2,
      "ec": "CHIMIE",
      "chapter": "1.1 Éléments chimiques / classification",
      "axis": "Magnésium, chlore et périodicité",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7b93dd1dff71cd982c43c1"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Le potassium ($Z=19$) et le fluor ($Z=9$) sont considérés. Quelles affirmations relient correctement configuration électronique et ionisation ?",
      "explanation": "Le potassium possède un électron de valence $4s^1$ et tend à former $\\ce{K+}$ par perte d’un électron ; le fluor possède sept électrons de valence et tend à former $\\ce{F-}$ par gain d’un électron.",
      "choices": [
        {
          "content": "Le potassium neutre possède un électron de valence dans la couche $n=4$.",
          "correct": true,
          "explanation": "Sa configuration se termine par $4s^1$."
        },
        {
          "content": "Le fluor neutre possède sept électrons de valence.",
          "correct": true,
          "explanation": "Sa couche externe est $2s^2 2p^5$."
        },
        {
          "content": "$\\ce{K+}$ est obtenu par perte d’un électron.",
          "correct": true,
          "explanation": "Le potassium perd l’électron $4s$."
        },
        {
          "content": "$\\ce{F-}$ possède dix électrons.",
          "correct": true,
          "explanation": "Le fluor neutre en possède neuf et l’anion en a gagné un."
        },
        {
          "content": "Former $\\ce{K+}$ transforme le noyau de potassium en noyau d’argon.",
          "correct": false,
          "explanation": "L’ionisation ne modifie ni $Z$ ni le noyau."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q03",
      "order": 3,
      "ec": "CHIMIE",
      "chapter": "1.1 Éléments chimiques / classification",
      "axis": "Configuration électronique",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7b8ca93d6fc9b257c55ab8"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "L’atome de soufre possède $Z=16$. Écrivez sa configuration électronique fondamentale complète.",
      "explanation": "Les 16 électrons se répartissent selon $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$",
          "1s2 2s2 2p6 3s2 3p4"
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
      "stableId": "eb02-q04",
      "order": 4,
      "ec": "CHIMIE",
      "chapter": "1.2 Ions / électronégativité / liaisons",
      "axis": "Tendances périodiques",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7b93dd1dff71cd982c43c0"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "On compare fluor, chlore et sodium dans la classification périodique. Sélectionnez exactement les deux affirmations correctes.",
      "explanation": "Les tendances périodiques s’interprètent à numéro atomique fixé pour chaque élément : dans une période l’électronégativité augmente globalement vers la droite, tandis que le rayon atomique diminue.",
      "choices": [
        {
          "content": "Le fluor est plus électronégatif que le chlore.",
          "correct": true,
          "explanation": "Dans une même colonne, l’électronégativité diminue globalement en descendant."
        },
        {
          "content": "Le sodium est plus électronégatif que le chlore.",
          "correct": false,
          "explanation": "Dans la période 3, le chlore est nettement plus électronégatif que le sodium."
        },
        {
          "content": "Le rayon atomique du sodium est plus petit que celui du chlore dans la même période.",
          "correct": false,
          "explanation": "Le rayon atomique diminue globalement de gauche à droite ; le sodium est donc plus grand."
        },
        {
          "content": "Dans la période 3, l’électronégativité augmente globalement du sodium vers le chlore.",
          "correct": true,
          "explanation": "L’attraction exercée sur les électrons de liaison augmente globalement vers la droite."
        },
        {
          "content": "La formation d’un ion change la position de l’élément dans la classification en modifiant $Z$.",
          "correct": false,
          "explanation": "L’ionisation ne modifie pas le numéro atomique."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q05",
      "order": 5,
      "ec": "CHIMIE",
      "chapter": "1.2 Ions / électronégativité / liaisons",
      "axis": "Polarité et moment dipolaire",
      "format": "QRM",
      "difficulty": "EASY",
      "themeIds": [
        "6a8a0d8dd6a47c332b5a3b66"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "À propos de la polarité des liaisons et des molécules, quelles propositions sont exactes ?",
      "explanation": "Une liaison polarisée résulte d’une différence d’électronégativité. Le moment dipolaire moléculaire est une somme vectorielle : une molécule peut donc contenir des liaisons polarisées tout en étant apolaire.",
      "choices": [
        {
          "content": "Dans $\\ce{H-Cl}$, le chlore porte la charge partielle négative.",
          "correct": true,
          "explanation": "Le chlore est plus électronégatif que l’hydrogène."
        },
        {
          "content": "Une liaison entre deux atomes identiques comme $\\ce{Cl-Cl}$ n’est pas polarisée.",
          "correct": true,
          "explanation": "Les électronégativités sont identiques."
        },
        {
          "content": "$\\ce{CO2}$ possède des liaisons $\\ce{C=O}$ polarisées.",
          "correct": true,
          "explanation": "L’oxygène est plus électronégatif que le carbone."
        },
        {
          "content": "Une molécule linéaire et symétrique comme $\\ce{CO2}$ peut avoir un moment dipolaire total nul.",
          "correct": true,
          "explanation": "Les deux moments de liaison opposés se compensent."
        },
        {
          "content": "Toute molécule comportant au moins une liaison polarisée possède nécessairement un moment dipolaire non nul.",
          "correct": false,
          "explanation": "La géométrie peut conduire à une compensation vectorielle."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q06",
      "order": 6,
      "ec": "CHIMIE",
      "chapter": "1.3 Orbitales moléculaires",
      "axis": "Liaisons sigma et pi",
      "format": "QRU",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8a0d88d6a47c332b5a3b45"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Dans une molécule d’éthyne $\\ce{HC#CH}$, quelle proposition est exacte ?",
      "explanation": "Une triple liaison comporte une liaison $\\sigma$ et deux liaisons $\\pi$ ; chaque carbone de l’éthyne est hybridé $sp$.",
      "choices": [
        {
          "content": "La liaison $\\ce{C#C}$ comporte trois liaisons $\\sigma$.",
          "correct": false,
          "explanation": "Une triple liaison n’a qu’une composante $\\sigma$."
        },
        {
          "content": "La liaison $\\ce{C#C}$ comporte une liaison $\\sigma$ et une liaison $\\pi$.",
          "correct": false,
          "explanation": "Elle comporte deux liaisons $\\pi$."
        },
        {
          "content": "Chaque carbone est hybridé $sp^3$.",
          "correct": false,
          "explanation": "Dans un alcyne, le carbone engagé dans la triple liaison est $sp$."
        },
        {
          "content": "La liaison $\\ce{C#C}$ comporte une liaison $\\sigma$ et deux liaisons $\\pi$.",
          "correct": true,
          "explanation": "C’est la composition canonique d’une triple liaison."
        },
        {
          "content": "La géométrie autour de chaque carbone est tétraédrique.",
          "correct": false,
          "explanation": "L’hybridation $sp$ conduit à une géométrie linéaire."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q07",
      "order": 7,
      "ec": "CHIMIE",
      "chapter": "1.3 Orbitales moléculaires",
      "axis": "Hybridation et géométrie",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8a0d9ad6a47c332b5a3bb5"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant l’hybridation et la géométrie ?",
      "explanation": "Les hybridations $sp$, $sp^2$ et $sp^3$ correspondent respectivement à des géométries idéalisées linéaire, trigonale plane et tétraédrique.",
      "choices": [
        {
          "content": "Un carbone $sp$ présente idéalement un angle de $180^\\circ$.",
          "correct": true,
          "explanation": "Deux directions hybrides opposées donnent une géométrie linéaire."
        },
        {
          "content": "Un carbone $sp^2$ est idéalement tétraédrique.",
          "correct": false,
          "explanation": "Il est trigonal plan."
        },
        {
          "content": "Un carbone $sp^3$ est idéalement tétraédrique.",
          "correct": true,
          "explanation": "Quatre directions hybrides donnent une géométrie tétraédrique."
        },
        {
          "content": "Le terme « hybridation diagonale » est le synonyme scientifique de $sp$.",
          "correct": false,
          "explanation": "La géométrie $sp$ est dite linéaire ou digonale, pas « diagonale »."
        },
        {
          "content": "Une double liaison $\\ce{C=C}$ impose que chacun des deux carbones soit $sp$.",
          "correct": false,
          "explanation": "Les carbones d’un alcène simple sont $sp^2$."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q08",
      "order": 8,
      "ec": "CHIMIE",
      "chapter": "1.4 Forces intermoléculaires",
      "axis": "Interactions et température d’ébullition",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8a106631d779778c65337e"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "On compare des molécules de masses molaires proches. Quelles propositions sont exactes ?",
      "explanation": "Les liaisons hydrogène et les interactions dipôle-dipôle renforcent les attractions intermoléculaires. Leur effet peut augmenter la température d’ébullition à masse comparable.",
      "choices": [
        {
          "content": "Un alcool peut former des liaisons hydrogène grâce à son groupe $\\ce{O-H}$.",
          "correct": true,
          "explanation": "L’oxygène électronégatif et l’hydrogène lié à O permettent ces interactions."
        },
        {
          "content": "Un alcane apolaire ne présente aucune interaction attractive entre molécules.",
          "correct": false,
          "explanation": "Les forces de dispersion existent même pour les molécules apolaires."
        },
        {
          "content": "À masse comparable, des interactions intermoléculaires plus fortes tendent à augmenter la température d’ébullition.",
          "correct": true,
          "explanation": "Il faut davantage d’énergie pour séparer les molécules."
        },
        {
          "content": "Une liaison hydrogène est une liaison covalente classique entre deux molécules.",
          "correct": false,
          "explanation": "C’est une interaction non covalente."
        },
        {
          "content": "Une molécule polaire peut présenter des interactions dipôle-dipôle.",
          "correct": true,
          "explanation": "Les dipôles permanents peuvent s’orienter de façon attractive."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q09",
      "order": 9,
      "ec": "CHIMIE",
      "chapter": "1.3 Orbitales moléculaires / 2.1 Fonctions",
      "axis": "Carbone sp d’un nitrile",
      "format": "QZONE",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8a0d9ad6a47c332b5a3bb5",
        "6a7ce15da2c08979a9142619"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sur la formule du propanenitrile, sélectionnez le carbone du groupe nitrile, hybridé $sp$.",
      "explanation": "Dans un nitrile $\\ce{-C#N}$, le carbone de la triple liaison est hybridé $sp$ et présente une géométrie linéaire.",
      "image": {
        "src": "/images/training/ue14/exam-blancs/eb02/q09-propanenitrile-sp-carbon.svg",
        "alt": "Formule du propanenitrile CH3-CH2-C≡N",
        "width": 1000,
        "height": 420
      },
      "expectedZones": [
        {
          "id": "nitrile-carbon",
          "label": "Carbone du nitrile",
          "x": 0.68,
          "y": 0.5,
          "tolerance": 0.075
        }
      ],
      "defaultTolerance": 0.075
    },
    {
      "stableId": "eb02-q10",
      "order": 10,
      "ec": "CHIMIE",
      "chapter": "2.1 Fonctions chimiques",
      "axis": "Identification d’une fonction nitrile",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a7ce15da2c08979a9142619"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelle proposition décrit correctement la fonction présente dans $\\ce{CH3-CH2-C#N}$ ?",
      "explanation": "Le motif terminal $\\ce{-C#N}$ définit une fonction nitrile.",
      "choices": [
        {
          "content": "Il s’agit d’un amide.",
          "correct": false,
          "explanation": "Un amide comporte un motif carbonyle lié à un azote."
        },
        {
          "content": "Il s’agit d’une amine primaire.",
          "correct": false,
          "explanation": "Une amine ne contient pas la triple liaison $\\ce{C#N}$."
        },
        {
          "content": "Il s’agit d’un aldéhyde.",
          "correct": false,
          "explanation": "Un aldéhyde comporte le groupe $\\ce{-CHO}$."
        },
        {
          "content": "Il s’agit d’un ester.",
          "correct": false,
          "explanation": "Un ester comporte le motif $\\ce{-COO-}$."
        },
        {
          "content": "Il s’agit d’un nitrile.",
          "correct": true,
          "explanation": "Le groupe $\\ce{-C#N}$ est caractéristique des nitriles."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q11",
      "order": 11,
      "ec": "CHIMIE",
      "chapter": "2.1 / 2.8 Fonctions et nomenclature",
      "axis": "Nomenclature d’un nitrile",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a89f6520a0bc2f74d7f5c0c",
        "6a89f6510a0bc2f74d7f5c08"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Donnez le nom systématique de $\\ce{CH3-CH2-C#N}$.",
      "explanation": "Le carbone du nitrile appartient à la chaîne principale : la molécule possède trois carbones et se nomme propanenitrile.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "propanenitrile",
          "propane nitrile"
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
      "stableId": "eb02-q12",
      "order": 12,
      "ec": "CHIMIE",
      "chapter": "2.2 Isomérie / énantiomérie",
      "axis": "Isomérie de constitution",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7da47760f468cd34ba49e3"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions décrivent correctement des relations d’isomérie de constitution ?",
      "explanation": "Des isomères de constitution ont la même formule brute mais une connectivité différente. Cela se distingue des stéréoisomères, qui conservent la même connectivité.",
      "choices": [
        {
          "content": "Butan-1-ol et butan-2-ol sont des isomères de position.",
          "correct": true,
          "explanation": "La fonction alcool occupe une position différente sur le même squelette."
        },
        {
          "content": "Butane et 2-méthylpropane ont des formules brutes différentes.",
          "correct": false,
          "explanation": "Ils ont tous deux la formule brute $\\ce{C4H10}$."
        },
        {
          "content": "Butane et 2-méthylpropane sont des isomères de chaîne.",
          "correct": true,
          "explanation": "Le squelette carboné est différent."
        },
        {
          "content": "Deux énantiomères sont des isomères de constitution.",
          "correct": false,
          "explanation": "Ils ont la même connectivité et diffèrent par leur arrangement spatial."
        },
        {
          "content": "Une tautomérie céto-énolique correspond toujours à une simple rotation autour d’une liaison simple.",
          "correct": false,
          "explanation": "Elle implique un déplacement de proton et une réorganisation de liaison."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q13",
      "order": 13,
      "ec": "CHIMIE",
      "chapter": "2.2 Isomérie / énantiomérie",
      "axis": "R/S, énantiomères et activité optique",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a7da47c60f468cd34ba49fb"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Un mélange contient 70 % de l’énantiomère $R$ et 30 % de l’énantiomère $S$. Quelles propositions sont exactes ?",
      "explanation": "L’excès énantiomérique vaut la différence des proportions : $70-30=40\\,\\%$ en faveur de $R$. Le signe du pouvoir rotatoire ne peut pas être déduit de la seule configuration $R/S$.",
      "choices": [
        {
          "content": "L’énantiomère $R$ est majoritaire.",
          "correct": true,
          "explanation": "Il représente 70 % du mélange."
        },
        {
          "content": "L’excès énantiomérique vaut $40\\,\\%$ en faveur de $R$.",
          "correct": true,
          "explanation": "$ee=70\\%-30\\%=40\\%$."
        },
        {
          "content": "Le mélange contient les deux énantiomères.",
          "correct": true,
          "explanation": "Les deux formes sont présentes à 70 % et 30 %."
        },
        {
          "content": "Le mélange est racémique.",
          "correct": false,
          "explanation": "Un racémate contient 50 % de chaque énantiomère et possède un $ee$ nul."
        },
        {
          "content": "La configuration majoritaire $R$ impose un pouvoir rotatoire positif.",
          "correct": false,
          "explanation": "Le signe du pouvoir rotatoire n’est pas déduit de la configuration absolue."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q14",
      "order": 14,
      "ec": "CHIMIE",
      "chapter": "2.2 Isomérie / énantiomérie",
      "axis": "Configuration E/Z",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7da47a60f468cd34ba49f1"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Pour une double liaison $\\ce{C=C}$ portant sur chaque carbone deux substituants différents, sélectionnez exactement les deux propositions exactes.",
      "explanation": "L’attribution $E/Z$ repose sur les priorités CIP de part et d’autre de la double liaison. Les groupes prioritaires du même côté donnent $Z$, ceux de côtés opposés donnent $E$.",
      "choices": [
        {
          "content": "La configuration $Z$ signifie que les deux substituants de plus forte priorité sont du même côté.",
          "correct": true,
          "explanation": "$Z$ vient de zusammen, « ensemble »."
        },
        {
          "content": "La configuration $E$ signifie que les deux substituants de plus forte priorité sont du même côté.",
          "correct": false,
          "explanation": "En $E$, ils sont opposés."
        },
        {
          "content": "Les priorités sont attribuées uniquement en comparant les masses molaires des groupes entiers.",
          "correct": false,
          "explanation": "On applique les règles CIP à partir des numéros atomiques des atomes directement liés, puis en progressant."
        },
        {
          "content": "Une double liaison avec deux substituants identiques sur un même carbone ne permet pas une isomérie $E/Z$.",
          "correct": true,
          "explanation": "Il faut deux substituants différents sur chacun des carbones de la double liaison."
        },
        {
          "content": "$E/Z$ est une autre façon d’écrire la configuration absolue $R/S$ d’un carbone asymétrique.",
          "correct": false,
          "explanation": "Les deux nomenclatures concernent des objets stéréochimiques différents."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q15",
      "order": 15,
      "ec": "CHIMIE",
      "chapter": "2.3 Hydrocarbures",
      "axis": "Hydrogénation d’un alcène",
      "format": "QRU",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7dafb88752b34dca61d8f6"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "On hydrogène complètement le but-2-ène par $\\ce{H2}$ en présence d’un catalyseur adapté. Quel produit organique principal obtient-on ?",
      "explanation": "L’hydrogénation ajoute un hydrogène sur chacun des carbones de la double liaison et transforme l’alcène en alcane.",
      "choices": [
        {
          "content": "Butan-2-ol.",
          "correct": false,
          "explanation": "L’hydrogénation n’introduit pas de groupe hydroxyle."
        },
        {
          "content": "Butanone.",
          "correct": false,
          "explanation": "Aucun groupe carbonyle n’est formé."
        },
        {
          "content": "Butane.",
          "correct": true,
          "explanation": "La double liaison est saturée pour donner l’alcane correspondant."
        },
        {
          "content": "But-1-yne.",
          "correct": false,
          "explanation": "L’hydrogénation ne crée pas une triple liaison."
        },
        {
          "content": "Acide butanoïque.",
          "correct": false,
          "explanation": "Il ne s’agit pas d’une oxydation."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q16",
      "order": 16,
      "ec": "CHIMIE",
      "chapter": "2.3 Hydrocarbures",
      "axis": "Clivage oxydant d’un alcène",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a7dafb98752b34dca61d8fe"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "À propos de l’oxydation des alcènes, quelles propositions sont exactes ?",
      "explanation": "Selon les conditions, l’oxydation d’un alcène peut préserver le squelette avec formation de fonctions oxygénées ou provoquer un clivage de la double liaison. Les produits dépendent de la substitution des carbones.",
      "choices": [
        {
          "content": "Une oxydation forte peut conduire à la coupure de la liaison $\\ce{C=C}$.",
          "correct": true,
          "explanation": "Certaines conditions oxydantes provoquent un clivage du squelette au niveau de la double liaison."
        },
        {
          "content": "La double liaison est un site de réactivité privilégié des alcènes.",
          "correct": true,
          "explanation": "Les électrons $\\pi$ sont plus accessibles que ceux de la liaison $\\sigma$."
        },
        {
          "content": "Toute oxydation d’un alcène donne obligatoirement un alcool primaire unique.",
          "correct": false,
          "explanation": "Les produits dépendent des conditions et de la substitution."
        },
        {
          "content": "Une oxydation douce peut conduire à introduire deux groupes hydroxyle sur les carbones initialement engagés dans la double liaison.",
          "correct": true,
          "explanation": "Une dihydroxylation peut donner un diol vicinal."
        },
        {
          "content": "Un clivage oxydant d’une double liaison peut conduire à des composés carbonylés ou à des produits plus oxydés selon la substitution et les conditions.",
          "correct": true,
          "explanation": "La nature finale des produits dépend des substituants de l’alcène et de la force des conditions oxydantes."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q17",
      "order": 17,
      "ec": "CHIMIE",
      "chapter": "2.4 Alcools / amines / halogénés",
      "axis": "Oxydation d’un alcool primaire",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7db6fe05ec0659eae74631"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quel aldéhyde obtient-on par oxydation ménagée du propan-1-ol dans le modèle du cours ?",
      "explanation": "L’oxydation ménagée d’un alcool primaire conduit à l’aldéhyde de même squelette : le propan-1-ol donne le propanal.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "propanal"
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
      "stableId": "eb02-q18",
      "order": 18,
      "ec": "CHIMIE",
      "chapter": "2.4 Alcools / amines / halogénés",
      "axis": "SN2 sur un dérivé halogéné",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a7db70105ec0659eae74643",
        "6a7da47c60f468cd34ba49fb"
      ],
      "groupId": "G1",
      "medicalContext": false,
      "question": "Quelles propositions sont compatibles avec une substitution $\\mathrm{S_N2}$ sur le substrat indiqué ?",
      "explanation": "Une $\\mathrm{S_N2}$ est concertée : l’attaque nucléophile et le départ du groupe partant ont lieu dans la même étape. Sur un centre stéréogène, l’attaque arrière conduit à une inversion de configuration.",
      "choices": [
        {
          "content": "Le mécanisme est concerté.",
          "correct": true,
          "explanation": "La formation et la rupture de liaison se produisent au cours de la même étape élémentaire."
        },
        {
          "content": "Un carbocation plan libre est un intermédiaire obligatoire.",
          "correct": false,
          "explanation": "Un carbocation caractérise plutôt le modèle $\\mathrm{S_N1}$."
        },
        {
          "content": "L’attaque nucléophile se fait du côté opposé au groupe partant.",
          "correct": true,
          "explanation": "L’attaque arrière est caractéristique de la $\\mathrm{S_N2}$."
        },
        {
          "content": "Le centre attaqué peut subir une inversion de configuration.",
          "correct": true,
          "explanation": "L’attaque arrière conduit à l’inversion dite de Walden."
        },
        {
          "content": "La vitesse dépend à la fois du substrat et du nucléophile dans le modèle bimoléculaire.",
          "correct": true,
          "explanation": "La loi de vitesse de la $\\mathrm{S_N2}$ dépend des deux réactifs."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q19",
      "order": 19,
      "ec": "CHIMIE",
      "chapter": "2.4 Alcools / amines / halogénés",
      "axis": "Produit de substitution",
      "format": "QROC",
      "difficulty": "HARD",
      "themeIds": [
        "6a7db70105ec0659eae74643"
      ],
      "groupId": "G1",
      "medicalContext": false,
      "question": "Après substitution de $\\ce{Br}$ par $\\ce{OH}$, donnez le nom du produit organique obtenu.",
      "explanation": "Le squelette à quatre carbones est conservé et le groupe hydroxyle remplace le brome sur le carbone 2 : le produit est le butan-2-ol.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "butan-2-ol",
          "2-butanol"
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
      "stableId": "eb02-q20",
      "order": 20,
      "ec": "CHIMIE",
      "chapter": "2.4 Alcools / amines / halogénés",
      "axis": "Carbone attaqué en SN2",
      "format": "QZONE",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7db70105ec0659eae74643"
      ],
      "groupId": "G1",
      "medicalContext": false,
      "question": "Sur le 2-bromobutane représenté, sélectionnez le carbone directement attaqué par le nucléophile lors de la substitution.",
      "explanation": "En $\\mathrm{S_N2}$, le nucléophile attaque le carbone porteur du groupe partant, ici le carbone 2 lié au brome.",
      "image": {
        "src": "/images/training/ue14/exam-blancs/eb02/q20-2-bromobutane-reactive-carbon.svg",
        "alt": "Formule du 2-bromobutane avec groupe bromure sur le carbone 2",
        "width": 1100,
        "height": 430
      },
      "expectedZones": [
        {
          "id": "c2-bromo",
          "label": "Carbone porteur du brome",
          "x": 0.41,
          "y": 0.5,
          "tolerance": 0.08
        }
      ],
      "defaultTolerance": 0.08
    },
    {
      "stableId": "eb02-q21",
      "order": 21,
      "ec": "CHIMIE",
      "chapter": "2.4 Alcools / amines / halogénés",
      "axis": "Comparer SN1 et SN2",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a7db70205ec0659eae74647"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions permettent de distinguer correctement $\\mathrm{S_N1}$ et $\\mathrm{S_N2}$ dans le modèle étudié ?",
      "explanation": "La $\\mathrm{S_N1}$ passe par un carbocation et peut conduire à une racémisation ; la $\\mathrm{S_N2}$ est concertée et conduit à une inversion sur un centre stéréogène.",
      "choices": [
        {
          "content": "L’observation d’un carbocation intermédiaire oriente vers une $\\mathrm{S_N1}$.",
          "correct": true,
          "explanation": "La formation du carbocation est l’étape caractéristique du modèle $\\mathrm{S_N1}$."
        },
        {
          "content": "Une inversion stéréochimique unique est compatible avec une $\\mathrm{S_N2}$.",
          "correct": true,
          "explanation": "L’attaque arrière impose une inversion."
        },
        {
          "content": "Une $\\mathrm{S_N2}$ implique obligatoirement une racémisation 50/50.",
          "correct": false,
          "explanation": "La racémisation est associée au carbocation plan de la $\\mathrm{S_N1}$."
        },
        {
          "content": "Une $\\mathrm{S_N1}$ est un mécanisme concerté sans intermédiaire.",
          "correct": false,
          "explanation": "Elle est décrite en plusieurs étapes avec carbocation."
        },
        {
          "content": "La vitesse d’une $\\mathrm{S_N1}$ dépend nécessairement de la concentration du nucléophile dans l’étape cinétiquement déterminante.",
          "correct": false,
          "explanation": "Dans le modèle simple, l’étape déterminante est l’ionisation unimoléculaire du substrat."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q22",
      "order": 22,
      "ec": "CHIMIE",
      "chapter": "2.5 Esters / thioesters / amides",
      "axis": "Dérivés d’acides carboxyliques",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7dbefab676934885fd010f"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sélectionnez exactement les deux propositions correctes.",
      "explanation": "Les esters et les amides sont des dérivés d’acides carboxyliques. Un thioester possède un soufre à la place de l’oxygène alkoxy d’un ester.",
      "choices": [
        {
          "content": "Le motif $\\ce{R-C(=O)-OR'}$ correspond à un ester.",
          "correct": true,
          "explanation": "Le carbonyle est lié à un oxygène alkoxy."
        },
        {
          "content": "Le motif $\\ce{R-C(=O)-NR'R''}$ correspond à un amide.",
          "correct": true,
          "explanation": "Le carbonyle est directement lié à un azote."
        },
        {
          "content": "Un thioester est un thiol portant simplement un groupe $\\ce{-SH}$.",
          "correct": false,
          "explanation": "Un thioester possède le motif $\\ce{R-C(=O)-SR'}$."
        },
        {
          "content": "Un amide ne contient jamais de groupe carbonyle.",
          "correct": false,
          "explanation": "Le carbonyle est constitutif de la fonction amide."
        },
        {
          "content": "Un ester et un acide carboxylique ont nécessairement exactement la même réactivité.",
          "correct": false,
          "explanation": "Le remplacement de $\\ce{-OH}$ par $\\ce{-OR'}$ modifie les propriétés et la réactivité."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q23",
      "order": 23,
      "ec": "CHIMIE",
      "chapter": "2.6 Aldéhydes / cétones",
      "axis": "Condensation carbonyle-amine",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7dc4d8b73f1ee1e829c2f5"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "À propos de la réaction d’un aldéhyde avec une amine primaire, quelles propositions sont exactes dans le modèle étudié ?",
      "explanation": "La condensation d’un aldéhyde avec une amine primaire peut conduire à une imine avec élimination d’eau. Le carbone du carbonyle est le centre électrophile initial.",
      "choices": [
        {
          "content": "Le carbone du carbonyle joue le rôle de centre électrophile.",
          "correct": true,
          "explanation": "La polarisation $\\ce{C=O}$ rend le carbone partiellement positif."
        },
        {
          "content": "Une imine peut être formée après condensation.",
          "correct": true,
          "explanation": "Une amine primaire et un aldéhyde peuvent conduire à une imine."
        },
        {
          "content": "Un organomagnésien est obligatoirement requis.",
          "correct": false,
          "explanation": "La condensation carbonyle-amine n’exige pas de réactif de Grignard."
        },
        {
          "content": "La réaction implique nécessairement la formation d’un ester.",
          "correct": false,
          "explanation": "Le produit caractéristique visé est une imine."
        },
        {
          "content": "L’oxygène carbonylé devient obligatoirement l’azote de l’imine.",
          "correct": false,
          "explanation": "L’azote provient de l’amine ; l’oxygène est éliminé au cours de la déshydratation."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q24",
      "order": 24,
      "ec": "CHIMIE",
      "chapter": "2.7 Acides carboxyliques et fonctions diverses",
      "axis": "Acide carboxylique / carboxylate",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a7dd07747be2e611a3217a0"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelle proposition est exacte concernant un acide carboxylique et sa base conjuguée ?",
      "explanation": "Le départ du proton du groupe carboxyle conduit à un carboxylate, dont la charge négative est délocalisée sur les deux oxygènes.",
      "choices": [
        {
          "content": "La déprotonation forme un carbocation.",
          "correct": false,
          "explanation": "Elle forme un anion carboxylate."
        },
        {
          "content": "La base conjuguée perd le carbone du groupe carboxyle.",
          "correct": false,
          "explanation": "Le squelette carboné est conservé."
        },
        {
          "content": "La déprotonation transforme la fonction en amide.",
          "correct": false,
          "explanation": "Aucun azote n’est introduit."
        },
        {
          "content": "La déprotonation du groupe $\\ce{-COOH}$ conduit à un carboxylate $\\ce{-COO-}$.",
          "correct": true,
          "explanation": "C’est la base conjuguée de l’acide carboxylique."
        },
        {
          "content": "Le carboxylate possède une charge positive délocalisée.",
          "correct": false,
          "explanation": "La charge est négative."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q25",
      "order": 25,
      "ec": "CHIMIE",
      "chapter": "2.8 Nomenclature organique",
      "axis": "Nomenclature polyfonctionnelle",
      "format": "QRPL",
      "difficulty": "HARD",
      "themeIds": [
        "6a89f6520a0bc2f74d7f5c0c",
        "6a89f6520a0bc2f74d7f5c0d"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Pour établir le nom systématique de $\\ce{HOOC-CH(OH)-CH2-CH3}$, sélectionnez exactement les cinq affirmations correctes.",
      "explanation": "La fonction acide carboxylique est principale ; son carbone est $\\mathrm{C}1$. Le squelette comporte quatre carbones et le groupe hydroxyle est en $\\mathrm{C}2$ : le nom est acide 2-hydroxybutanoïque.",
      "choices": [
        {
          "content": "La fonction principale est l’acide carboxylique.",
          "correct": true,
          "explanation": "Elle impose le suffixe acide ...oïque."
        },
        {
          "content": "Le carbone du carboxyle est numéroté $\\mathrm{C}1$.",
          "correct": true,
          "explanation": "La fonction principale fixe l’origine de la numérotation."
        },
        {
          "content": "La chaîne principale comporte quatre carbones.",
          "correct": true,
          "explanation": "Le squelette parent est celui de l’acide butanoïque."
        },
        {
          "content": "Le groupe $\\ce{-OH}$ est exprimé par le préfixe hydroxy-.",
          "correct": true,
          "explanation": "L’alcool est une fonction secondaire dans ce contexte."
        },
        {
          "content": "Le nom acide 2-hydroxybutanoïque est cohérent avec la structure.",
          "correct": true,
          "explanation": "Le groupe hydroxy se trouve sur le carbone 2 du squelette butanoïque."
        },
        {
          "content": "La fonction alcool impose ici le suffixe -ol à la place de la fonction acide.",
          "correct": false,
          "explanation": "L’acide carboxylique est prioritaire."
        },
        {
          "content": "La numérotation doit commencer par l’extrémité éthyle.",
          "correct": false,
          "explanation": "Elle commence au carbone de la fonction acide."
        },
        {
          "content": "Le carbone carboxylique est exclu du squelette parent.",
          "correct": false,
          "explanation": "Il appartient à la chaîne principale."
        },
        {
          "content": "Le squelette parent est le propane.",
          "correct": false,
          "explanation": "Il comporte quatre carbones."
        },
        {
          "content": "La molécule est nécessairement nommée comme un ester.",
          "correct": false,
          "explanation": "Elle porte un acide carboxylique libre, pas un ester."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 5
    },
    {
      "stableId": "eb02-q26",
      "order": 26,
      "ec": "CHIMIE",
      "chapter": "2.8 Nomenclature organique",
      "axis": "Structure et réactivité d’une molécule polyfonctionnelle",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a89f6520a0bc2f74d7f5c0d",
        "6a7ce15da2c08979a9142619"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes pour une molécule contenant à la fois une fonction acide carboxylique et une fonction amine ?",
      "explanation": "Une molécule polyfonctionnelle conserve les propriétés chimiques de plusieurs fonctions. La nomenclature hiérarchise les fonctions, mais ne fait pas disparaître les autres centres réactifs.",
      "choices": [
        {
          "content": "La présence d’un acide carboxylique n’efface pas chimiquement la fonction amine.",
          "correct": true,
          "explanation": "Les deux fonctions sont présentes dans la structure."
        },
        {
          "content": "Une molécule polyfonctionnelle ne peut posséder qu’un seul site réactif.",
          "correct": false,
          "explanation": "Plusieurs fonctions peuvent être impliquées dans des réactions différentes."
        },
        {
          "content": "Le choix du suffixe principal relève d’une priorité de nomenclature, pas de l’élimination des autres fonctions.",
          "correct": true,
          "explanation": "Les fonctions secondaires restent exprimées par des préfixes."
        },
        {
          "content": "Toute fonction amine devient automatiquement la fonction principale.",
          "correct": false,
          "explanation": "Sa priorité dépend des autres fonctions présentes."
        },
        {
          "content": "Une fonction carboxylique ne peut jamais exister sous forme carboxylate.",
          "correct": false,
          "explanation": "Elle peut être déprotonée selon les conditions acido-basiques."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q27",
      "order": 27,
      "ec": "CHIMIE",
      "chapter": "2.8 Nomenclature organique",
      "axis": "Lecture d’une réduction",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a7dc4d8b73f1ee1e829c2f2"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "On transforme la propanone $\\ce{CH3-CO-CH3}$ en propan-2-ol. Quelle qualification est correcte ?",
      "explanation": "Le carbone carbonylé gagne des liaisons à l’hydrogène et le carbonyle devient alcool : il s’agit d’une réduction.",
      "choices": [
        {
          "content": "Oxydation.",
          "correct": false,
          "explanation": "Le produit est plus réduit que la cétone."
        },
        {
          "content": "Réduction.",
          "correct": true,
          "explanation": "Une cétone réduite donne un alcool secondaire."
        },
        {
          "content": "Estérification.",
          "correct": false,
          "explanation": "Aucun ester n’est formé."
        },
        {
          "content": "Amidification.",
          "correct": false,
          "explanation": "Aucun amide n’est formé."
        },
        {
          "content": "Polymérisation.",
          "correct": false,
          "explanation": "Le nombre de molécules et le squelette ne correspondent pas à une polymérisation."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q28",
      "order": 28,
      "ec": "CHIMIE",
      "chapter": "2.8 Nomenclature organique",
      "axis": "Nom d’un alcool secondaire",
      "format": "QROC",
      "difficulty": "EASY",
      "themeIds": [
        "6a89f6510a0bc2f74d7f5c09"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Donnez le nom systématique de $\\ce{CH3-CH(OH)-CH3}$.",
      "explanation": "La chaîne principale comporte trois carbones et le groupe hydroxyle est porté par le carbone 2 : propan-2-ol.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "propan-2-ol",
          "2-propanol",
          "isopropanol"
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
      "stableId": "eb02-q29",
      "order": 29,
      "ec": "BIOCHIMIE",
      "chapter": "1.1 Glucides — généralités",
      "axis": "Rôles et propriétés générales",
      "format": "QRM",
      "difficulty": "EASY",
      "themeIds": [
        "6a7dda5c689c52db81009ecb"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "À propos des glucides, quelles propositions sont exactes ?",
      "explanation": "Les glucides remplissent des fonctions énergétiques, structurales et de reconnaissance. Ils entrent aussi dans la composition de molécules fondamentales.",
      "choices": [
        {
          "content": "Le glucose constitue une source énergétique majeure.",
          "correct": true,
          "explanation": "Il alimente notamment les voies productrices d’énergie."
        },
        {
          "content": "Des glucides participent à la reconnaissance à la surface cellulaire.",
          "correct": true,
          "explanation": "Les glycoconjugués de surface portent des déterminants de reconnaissance."
        },
        {
          "content": "Tous les glucides sont uniquement des molécules de réserve.",
          "correct": false,
          "explanation": "Ils peuvent aussi être structuraux ou participer à la signalisation/reconnaissance."
        },
        {
          "content": "L’ADN ne contient aucun ose.",
          "correct": false,
          "explanation": "Le désoxyribose est un ose constitutif de l’ADN."
        },
        {
          "content": "Les glucides sont absents des glycoprotéines.",
          "correct": false,
          "explanation": "Par définition, une glycoprotéine porte une partie glucidique."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q30",
      "order": 30,
      "ec": "BIOCHIMIE",
      "chapter": "1.2 Oses simples et dérivés",
      "axis": "Anomérie alpha/bêta",
      "format": "QRU",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7dda62689c52db81009ee5"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Dans un D-glucopyranose, quelle affirmation décrit correctement l’anomérie $\\alpha/\\beta$ ?",
      "explanation": "L’anomérie compare l’orientation du substituant porté par le carbone anomérique à celle du groupe de référence ; elle est distincte de la série D/L.",
      "choices": [
        {
          "content": "Elle dépend de l’orientation du substituant porté par le carbone anomérique dans la forme cyclique.",
          "correct": true,
          "explanation": "Le carbone anomérique est créé lors de la cyclisation."
        },
        {
          "content": "Elle se déduit directement du signe du pouvoir rotatoire.",
          "correct": false,
          "explanation": "$\\alpha/\\beta$ et signe optique sont des notions distinctes."
        },
        {
          "content": "Elle indique si l’ose possède six carbones.",
          "correct": false,
          "explanation": "Le nombre de carbones est une autre classification."
        },
        {
          "content": "Elle est identique à la série D/L.",
          "correct": false,
          "explanation": "D/L est défini à partir de la configuration du carbone asymétrique de référence dans la projection de Fischer."
        },
        {
          "content": "Elle disparaît uniquement parce qu’un ose est réducteur.",
          "correct": false,
          "explanation": "Les anomères existent indépendamment du caractère réducteur ; un carbone anomérique libre peut mutaroter."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q31",
      "order": 31,
      "ec": "BIOCHIMIE",
      "chapter": "1.2 Oses simples et dérivés",
      "axis": "Épimérie et oses",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7e11c575d63c56a9d1e839"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant les principaux oses ?",
      "explanation": "Des épimères diffèrent par la configuration d’un seul carbone asymétrique. Le galactose est l’épimère en $\\mathrm{C}4$ du glucose ; le mannose est l’épimère en $\\mathrm{C}2$ du glucose.",
      "choices": [
        {
          "content": "Le D-galactose est un épimère en $\\mathrm{C}4$ du D-glucose.",
          "correct": true,
          "explanation": "Ils ne diffèrent que par la configuration du carbone 4."
        },
        {
          "content": "Le D-mannose est un épimère en $\\mathrm{C}2$ du D-glucose.",
          "correct": true,
          "explanation": "La différence porte sur le carbone 2."
        },
        {
          "content": "Le D-fructose est un aldohexose.",
          "correct": false,
          "explanation": "Le fructose est un cétohexose."
        },
        {
          "content": "Le D-glucose est un aldohexose.",
          "correct": true,
          "explanation": "Sa forme linéaire porte une fonction aldéhyde et six carbones."
        },
        {
          "content": "Deux épimères ont la même formule brute.",
          "correct": true,
          "explanation": "Ils diffèrent par configuration, pas par composition atomique."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q32",
      "order": 32,
      "ec": "BIOCHIMIE",
      "chapter": "1.3 Osides / GAG / protéoglycanes",
      "axis": "Liaison du lactose",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7e2073cd27601b0acc15bc"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Indiquez la nature de la liaison osidique du lactose entre le galactose et le glucose.",
      "explanation": "Le lactose associe un galactose à un glucose par une liaison $\\beta(1\\rightarrow4)$.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "β(1→4)",
          "beta(1→4)",
          "beta 1-4",
          "β 1-4",
          "liaison β(1→4)",
          "liaison beta(1→4)"
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
      "stableId": "eb02-q33",
      "order": 33,
      "ec": "BIOCHIMIE",
      "chapter": "1.3 Osides / GAG / protéoglycanes",
      "axis": "GAG, protéoglycanes et glycoprotéines",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7e2075cd27601b0acc15c7"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant les glycoconjugués ?",
      "explanation": "Les protéoglycanes associent une protéine cœur à de longues chaînes de GAG. Les glycoprotéines portent des chaînes glucidiques souvent plus courtes et ramifiées.",
      "choices": [
        {
          "content": "Un protéoglycane comporte une protéine cœur.",
          "correct": true,
          "explanation": "Les GAG sont attachés à une protéine centrale."
        },
        {
          "content": "Les GAG sont des chaînes glucidiques répétitives.",
          "correct": true,
          "explanation": "Ils comportent des motifs disaccharidiques répétés selon le type de GAG."
        },
        {
          "content": "Une glycoprotéine est obligatoirement constituée à plus de 90 % de GAG.",
          "correct": false,
          "explanation": "Cette description ne définit pas les glycoprotéines."
        },
        {
          "content": "Les protéoglycanes peuvent participer aux propriétés de la matrice extracellulaire.",
          "correct": true,
          "explanation": "Leur forte hydratation et leurs interactions contribuent à la matrice."
        },
        {
          "content": "Un GAG est une protéine fibreuse dépourvue de glucides.",
          "correct": false,
          "explanation": "C’est un polymère glucidique."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q34",
      "order": 34,
      "ec": "BIOCHIMIE",
      "chapter": "2.1 Introduction aux lipides / acides gras",
      "axis": "Nomenclature d’un acide gras",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a7e208ccd27601b0acc1659"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Un acide gras est noté $20:4\\,\\Delta^{5,8,11,14}$. Quelle lecture est correcte ?",
      "explanation": "Cette notation décrit un acide gras à 20 carbones et quatre doubles liaisons dont les positions, comptées depuis le carboxyle, commencent en $\\Delta^5$, $\\Delta^8$, $\\Delta^{11}$ et $\\Delta^{14}$.",
      "choices": [
        {
          "content": "Il possède quatre carbones et vingt doubles liaisons.",
          "correct": false,
          "explanation": "Les deux nombres ont été inversés."
        },
        {
          "content": "Il est saturé puisque le premier nombre est supérieur au second.",
          "correct": false,
          "explanation": "Les quatre doubles liaisons indiquent qu’il est polyinsaturé."
        },
        {
          "content": "Il possède 20 carbones et quatre doubles liaisons aux positions indiquées en notation $\\Delta$.",
          "correct": true,
          "explanation": "C’est la lecture directe de $20:4\\,\\Delta^{5,8,11,14}$."
        },
        {
          "content": "Le symbole $\\Delta$ numérote exclusivement depuis l’extrémité méthyle.",
          "correct": false,
          "explanation": "La notation $\\Delta$ part du carbone carboxylique."
        },
        {
          "content": "Le nombre 20 indique le nombre de doubles liaisons.",
          "correct": false,
          "explanation": "Il indique le nombre total de carbones."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q35",
      "order": 35,
      "ec": "BIOCHIMIE",
      "chapter": "2.1 Introduction aux lipides / acides gras",
      "axis": "Séries oméga",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7e208ecd27601b0acc1665"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sélectionnez exactement les deux propositions correctes concernant les séries $n/\\omega$.",
      "explanation": "La série $\\omega$ ou $n$ repère la première double liaison en partant de l’extrémité méthyle. Elle ne se confond pas avec la notation $\\Delta$, comptée depuis le carboxyle.",
      "choices": [
        {
          "content": "La série $\\omega$ se compte à partir de l’extrémité méthyle.",
          "correct": true,
          "explanation": "C’est le repère de la nomenclature oméga."
        },
        {
          "content": "La notation $\\Delta$ se compte à partir du carbone carboxylique.",
          "correct": true,
          "explanation": "Le carbone du carboxyle est le carbone 1 pour la notation $\\Delta$."
        },
        {
          "content": "Un acide gras $\\omega$-3 possède obligatoirement exactement trois doubles liaisons.",
          "correct": false,
          "explanation": "Le chiffre 3 désigne la position de la première double liaison depuis l’extrémité méthyle."
        },
        {
          "content": "$\\omega$-6 signifie que la sixième double liaison est saturée.",
          "correct": false,
          "explanation": "La notation indique la position de la première double liaison depuis l’extrémité méthyle."
        },
        {
          "content": "Les notations $\\omega$ et $\\Delta$ utilisent toujours le même point de départ.",
          "correct": false,
          "explanation": "Leur origine de numérotation est opposée."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q36",
      "order": 36,
      "ec": "BIOCHIMIE",
      "chapter": "2.3 Eicosanoïdes",
      "axis": "Précurseur et voies enzymatiques",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7e20a3cd27601b0acc16ed"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "À propos des eicosanoïdes, quelles propositions sont exactes ?",
      "explanation": "Les eicosanoïdes dérivent d’acides gras polyinsaturés, notamment de l’acide arachidonique. Les cyclo-oxygénases et lipoxygénases orientent vers des familles différentes de médiateurs.",
      "choices": [
        {
          "content": "L’acide arachidonique peut servir de précurseur à des eicosanoïdes.",
          "correct": true,
          "explanation": "Il est un précurseur majeur de ces médiateurs lipidiques."
        },
        {
          "content": "Les cyclo-oxygénases participent à la formation de prostanoïdes.",
          "correct": true,
          "explanation": "La voie COX conduit notamment aux prostaglandines et thromboxanes."
        },
        {
          "content": "Les lipoxygénases participent à la formation de leucotriènes.",
          "correct": true,
          "explanation": "La voie LOX produit notamment des leucotriènes."
        },
        {
          "content": "Les eicosanoïdes sont des protéines enzymatiques stockées dans le noyau.",
          "correct": false,
          "explanation": "Ce sont des médiateurs lipidiques."
        },
        {
          "content": "La phospholipase A2 transforme directement l’acide arachidonique en prostaglandine finale.",
          "correct": false,
          "explanation": "Elle peut libérer l’acide arachidonique ; les enzymes en aval réalisent sa conversion."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q37",
      "order": 37,
      "ec": "BIOCHIMIE",
      "chapter": "1.2 Oses simples et dérivés",
      "axis": "Carbone anomérique du glucose",
      "format": "QZONE",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7dda62689c52db81009ee5"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sur le D-glucopyranose schématique, sélectionnez le carbone anomérique.",
      "explanation": "Chez le glucose cyclisé, le carbone anomérique est le carbone 1, issu du carbone carbonylé de la forme linéaire.",
      "image": {
        "src": "/images/training/ue14/exam-blancs/eb02/q37-glucopyranose-anomeric-carbon.svg",
        "alt": "Schéma de D-glucopyranose avec numérotation implicite des carbones",
        "width": 900,
        "height": 650
      },
      "expectedZones": [
        {
          "id": "anomeric-c1",
          "label": "Carbone anomérique C1",
          "x": 0.73,
          "y": 0.36,
          "tolerance": 0.085
        }
      ],
      "defaultTolerance": 0.085
    },
    {
      "stableId": "eb02-q38",
      "order": 38,
      "ec": "BIOCHIMIE",
      "chapter": "2.4–2.5 Glycérides / glycérophospholipides",
      "axis": "Produits des phospholipases",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a7e2c37efd01033fcc18b2a",
        "6a7e20a3cd27601b0acc16ec"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant les phospholipases ?",
      "explanation": "Les phospholipases se distinguent par le site hydrolysé. PLA2 libère l’acide gras en $sn$-2 ; PLC et PLD coupent de part et d’autre du phosphate et génèrent des produits différents.",
      "choices": [
        {
          "content": "La phospholipase A2 libère l’acide gras porté en $sn$-2.",
          "correct": true,
          "explanation": "Elle hydrolyse la liaison ester en position $sn$-2."
        },
        {
          "content": "La phospholipase C peut produire un diacylglycérol à partir de certains phosphoinositides.",
          "correct": true,
          "explanation": "La coupure côté glycérol laisse un DAG."
        },
        {
          "content": "La phospholipase D est strictement identique à la PLA2.",
          "correct": false,
          "explanation": "Le site de coupure est différent."
        },
        {
          "content": "PLA1 et PLA2 coupent nécessairement toutes deux la liaison entre phosphate et tête polaire.",
          "correct": false,
          "explanation": "Elles hydrolysent les esters des chaînes acyles."
        },
        {
          "content": "Une phospholipase ne peut jamais participer à la génération de molécules de signalisation.",
          "correct": false,
          "explanation": "Des produits comme DAG ou acide arachidonique peuvent participer à la signalisation."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q39",
      "order": 39,
      "ec": "BIOCHIMIE",
      "chapter": "2.6 Sphingolipides",
      "axis": "Céramide et dérivés sphingolipidiques",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7e2c4cefd01033fcc18bb1"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant les sphingolipides ?",
      "explanation": "Le céramide associe une sphingosine à un acide gras par une liaison amide. L’ajout de têtes polaires diverses produit différentes familles de sphingolipides.",
      "choices": [
        {
          "content": "Le céramide comporte une sphingosine.",
          "correct": true,
          "explanation": "La sphingosine constitue le squelette de base."
        },
        {
          "content": "Un acide gras est lié à la sphingosine par une liaison amide.",
          "correct": true,
          "explanation": "Le groupement amine de la sphingosine forme la liaison amide."
        },
        {
          "content": "La sphingomyéline contient un groupement phosphocholine.",
          "correct": true,
          "explanation": "C’est un phosphosphingolipide."
        },
        {
          "content": "Les cérébrosides sont des glycosphingolipides.",
          "correct": true,
          "explanation": "Ils portent un ose comme tête polaire."
        },
        {
          "content": "Tous les sphingolipides sont des triacylglycérols.",
          "correct": false,
          "explanation": "Ils reposent sur un squelette sphingosine, pas glycérol triacylé."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q40",
      "order": 40,
      "ec": "BIOCHIMIE",
      "chapter": "2.7 Stérols / stéroïdes / stérides",
      "axis": "Stérols et stérides",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a7e2c62efd01033fcc18c3f"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "L’hydroxyle en $\\mathrm{C}3$ du cholestérol est estérifié par un acide gras. Comment classer le produit obtenu ?",
      "explanation": "L’estérification du groupe hydroxyle d’un stérol par un acide gras forme un stéride, aussi appelé ester de cholestérol dans ce cas.",
      "choices": [
        {
          "content": "Un glycosaminoglycane.",
          "correct": false,
          "explanation": "Les GAG sont des polymères glucidiques."
        },
        {
          "content": "Un stéride.",
          "correct": true,
          "explanation": "Un stéride est un ester de stérol."
        },
        {
          "content": "Un triacylglycérol.",
          "correct": false,
          "explanation": "Le produit conserve le squelette stéroïdien du cholestérol."
        },
        {
          "content": "Un peptide cyclique.",
          "correct": false,
          "explanation": "Aucune liaison peptidique n’est impliquée."
        },
        {
          "content": "Un nucléotide.",
          "correct": false,
          "explanation": "Aucun motif sucre-phosphate-base n’est formé."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q41",
      "order": 41,
      "ec": "BIOCHIMIE",
      "chapter": "2.4–2.7 Lipides membranaires",
      "axis": "Organisation des lipides",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7e2c37efd01033fcc18b2a",
        "6a7e2c62efd01033fcc18c3f"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Une bicouche artificielle contient des glycérophospholipides et du cholestérol. Sélectionnez exactement les deux affirmations qui décrivent correctement leur organisation.",
      "explanation": "Les glycérophospholipides et le cholestérol participent à l’organisation membranaire. Leurs propriétés amphiphiles ou hydrophobes conditionnent leur comportement dans la bicouche.",
      "choices": [
        {
          "content": "Les glycérophospholipides sont amphiphiles.",
          "correct": true,
          "explanation": "Ils possèdent une tête polaire et des chaînes hydrophobes."
        },
        {
          "content": "Le cholestérol peut s’insérer entre les phospholipides d’une membrane.",
          "correct": true,
          "explanation": "Son groupe hydroxyle reste proche des têtes polaires tandis que son noyau hydrophobe s’insère dans la bicouche."
        },
        {
          "content": "Les triacylglycérols constituent obligatoirement la majorité structurale de toute membrane plasmique.",
          "correct": false,
          "explanation": "Ils sont surtout des lipides de réserve."
        },
        {
          "content": "Un glycérophospholipide est dépourvu de toute partie hydrophobe.",
          "correct": false,
          "explanation": "Ses chaînes acyles sont hydrophobes."
        },
        {
          "content": "Le cholestérol est un GAG.",
          "correct": false,
          "explanation": "C’est un stérol."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q42",
      "order": 42,
      "ec": "BIOCHIMIE",
      "chapter": "2.6 Sphingolipides",
      "axis": "Définition du céramide",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7e2c4defd01033fcc18bb6"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Comment nomme-t-on la molécule formée par une sphingosine liée à un acide gras par une liaison amide ?",
      "explanation": "Cette structure de base est le céramide, précurseur central de nombreux sphingolipides.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "céramide",
          "ceramide"
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
      "stableId": "eb02-q43",
      "order": 43,
      "ec": "BIOCHIMIE",
      "chapter": "2.6 Sphingolipides",
      "axis": "Comparer sphingomyéline et glycosphingolipides",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a7e2c4defd01033fcc18bb7"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "On part d’un céramide et l’on modifie uniquement sa tête polaire. Quelles affirmations permettent de reconnaître correctement les dérivés obtenus ?",
      "explanation": "Les sphingolipides partagent le céramide comme noyau structural, puis se distinguent par leur tête polaire. La sphingomyéline comporte une phosphocholine ; les glycosphingolipides portent des résidus glucidiques.",
      "choices": [
        {
          "content": "La sphingomyéline dérive du céramide.",
          "correct": true,
          "explanation": "Le céramide en constitue le noyau lipidique."
        },
        {
          "content": "Un cérébroside porte une tête glucidique.",
          "correct": true,
          "explanation": "Les cérébrosides sont des glycosphingolipides."
        },
        {
          "content": "La sphingomyéline est un triacylglycérol.",
          "correct": false,
          "explanation": "Elle possède un squelette sphingosine/céramide."
        },
        {
          "content": "Un ganglioside est défini par l’absence totale de glucides.",
          "correct": false,
          "explanation": "Les gangliosides sont des glycosphingolipides complexes."
        },
        {
          "content": "Le céramide ne contient aucune liaison amide.",
          "correct": false,
          "explanation": "La liaison entre acide gras et sphingosine est une amide."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q44",
      "order": 44,
      "ec": "BIOCHIMIE",
      "chapter": "2.7 Stérols / stéroïdes / stérides",
      "axis": "Noyau stérane",
      "format": "QRU",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7e2c62efd01033fcc18c3f"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelle proposition est exacte concernant le noyau stérane ?",
      "explanation": "Le noyau stérane comporte quatre cycles fusionnés, trois à six carbones et un à cinq carbones.",
      "choices": [
        {
          "content": "Il est constitué d’un seul cycle à six carbones.",
          "correct": false,
          "explanation": "Il comporte quatre cycles fusionnés."
        },
        {
          "content": "Il est un polysaccharide ramifié.",
          "correct": false,
          "explanation": "Il s’agit d’un squelette hydrocarboné cyclique."
        },
        {
          "content": "Il comporte uniquement des cycles aromatiques benzéniques.",
          "correct": false,
          "explanation": "Le noyau stérane n’est pas défini comme un ensemble de quatre benzènes."
        },
        {
          "content": "Il contient obligatoirement un groupement phosphate.",
          "correct": false,
          "explanation": "Le phosphate n’est pas constitutif du noyau."
        },
        {
          "content": "Il comporte trois cycles à six carbones et un cycle à cinq carbones.",
          "correct": true,
          "explanation": "C’est l’architecture tétracyclique du noyau stérane."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q45",
      "order": 45,
      "ec": "BIOCHIMIE",
      "chapter": "3.1 Acides aminés",
      "axis": "Charge, pH et point isoélectrique",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6e39760c23d446b3994abc"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "À propos de l’ionisation des acides aminés, quelles propositions sont exactes ?",
      "explanation": "La charge nette dépend de l’état de protonation des fonctions ionisables. Au point isoélectrique, la charge nette moyenne est nulle.",
      "choices": [
        {
          "content": "Le point isoélectrique correspond à une charge nette moyenne nulle.",
          "correct": true,
          "explanation": "C’est la définition du $pI$."
        },
        {
          "content": "À pH très acide, les fonctions ionisables tendent à être davantage protonées.",
          "correct": true,
          "explanation": "L’abondance de protons favorise les formes protonées."
        },
        {
          "content": "À pH très basique, un groupement carboxyle est majoritairement sous forme $\\ce{-COOH}$.",
          "correct": false,
          "explanation": "Il tend à être déprotoné en $\\ce{-COO-}$."
        },
        {
          "content": "La chaîne latérale de certains acides aminés peut contribuer à la charge totale.",
          "correct": true,
          "explanation": "Certaines chaînes latérales sont ionisables."
        },
        {
          "content": "Tous les acides aminés ont exactement le même $pI$.",
          "correct": false,
          "explanation": "Le $pI$ dépend des groupements ionisables."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q46",
      "order": 46,
      "ec": "BIOCHIMIE",
      "chapter": "3.1 Acides aminés",
      "axis": "Classification des chaînes latérales",
      "format": "QRPL",
      "difficulty": "HARD",
      "themeIds": [
        "6a89f45b0a0bc2f74d7f51c3"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Parmi les dix propositions, sélectionnez exactement cinq classifications correctes.",
      "explanation": "Les propriétés des chaînes latérales permettent de distinguer des acides aminés hydrophobes, polaires, acides, basiques, aromatiques ou soufrés.",
      "choices": [
        {
          "content": "Leucine — chaîne latérale hydrophobe.",
          "correct": true,
          "explanation": "La leucine est un acide aminé aliphatique hydrophobe."
        },
        {
          "content": "Aspartate — chaîne latérale acide.",
          "correct": true,
          "explanation": "Son groupement carboxylate latéral est acide."
        },
        {
          "content": "Lysine — chaîne latérale basique.",
          "correct": true,
          "explanation": "Son groupement amino latéral peut être protoné."
        },
        {
          "content": "Sérine — chaîne latérale polaire non chargée.",
          "correct": true,
          "explanation": "Son hydroxyle la rend polaire."
        },
        {
          "content": "Phénylalanine — chaîne latérale aromatique.",
          "correct": true,
          "explanation": "Elle porte un noyau phényl."
        },
        {
          "content": "Valine — chaîne latérale fortement acide.",
          "correct": false,
          "explanation": "La valine est hydrophobe."
        },
        {
          "content": "Glutamate — chaîne latérale basique.",
          "correct": false,
          "explanation": "Il possède une fonction carboxylate latérale acide."
        },
        {
          "content": "Arginine — chaîne latérale apolaire sans groupement ionisable.",
          "correct": false,
          "explanation": "Le guanidinium est basique et ionisable."
        },
        {
          "content": "Cystéine — dépourvue de soufre.",
          "correct": false,
          "explanation": "La cystéine porte un thiol soufré."
        },
        {
          "content": "Tyrosine — dépourvue de noyau aromatique.",
          "correct": false,
          "explanation": "Elle possède un noyau phénolique aromatique."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 5
    },
    {
      "stableId": "eb02-q47",
      "order": 47,
      "ec": "BIOCHIMIE",
      "chapter": "3.2 Structure des peptides et protéines",
      "axis": "Nature de la liaison peptidique",
      "format": "QROC",
      "difficulty": "EASY",
      "themeIds": [
        "6a6e398d0c23d446b3994c0c"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelle fonction chimique correspond à la liaison peptidique ?",
      "explanation": "La liaison peptidique résulte de la condensation d’une fonction carboxylique et d’une fonction amine ; chimiquement, c’est une liaison amide.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "amide",
          "liaison amide",
          "fonction amide"
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
      "stableId": "eb02-q48",
      "order": 48,
      "ec": "BIOCHIMIE",
      "chapter": "3.2 Structure des peptides et protéines",
      "axis": "Structures secondaires et ponts disulfure",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7ee31ceb2cff79ffcc2685",
        "6a7ee319eb2cff79ffcc2677"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant la structure des protéines ?",
      "explanation": "La structure secondaire inclut notamment hélices $\\alpha$ et feuillets $\\beta$, stabilisés par des liaisons hydrogène du squelette peptidique. Les ponts disulfure impliquent deux cystéines.",
      "choices": [
        {
          "content": "Une hélice $\\alpha$ est une structure secondaire.",
          "correct": true,
          "explanation": "Elle correspond à un motif régulier du squelette peptidique."
        },
        {
          "content": "Un pont disulfure se forme entre deux résidus de cystéine.",
          "correct": true,
          "explanation": "L’oxydation de deux thiols peut former une liaison $\\ce{S-S}$."
        },
        {
          "content": "La liaison peptidique est totalement libre en rotation autour de $\\ce{C-N}$.",
          "correct": false,
          "explanation": "La mésomérie lui confère un caractère partiellement double et limite la rotation."
        },
        {
          "content": "Un feuillet $\\beta$ est une structure primaire.",
          "correct": false,
          "explanation": "C’est une structure secondaire."
        },
        {
          "content": "Les ponts disulfure sont obligatoirement des interactions ioniques non covalentes.",
          "correct": false,
          "explanation": "Ce sont des liaisons covalentes."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q49",
      "order": 49,
      "ec": "BIOCHIMIE",
      "chapter": "3.4 Rôles biologiques des protéines (1)",
      "axis": "Structure des immunoglobulines",
      "format": "QRU",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7f15322704406d760875ea"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelle proposition décrit correctement l’organisation générale d’une immunoglobuline monomérique classique ?",
      "explanation": "Une immunoglobuline monomérique comporte deux chaînes lourdes et deux chaînes légères reliées notamment par des ponts disulfure.",
      "choices": [
        {
          "content": "Deux chaînes lourdes associées, sans chaînes légères.",
          "correct": false,
          "explanation": "Une immunoglobuline monomérique classique associe aussi deux chaînes légères."
        },
        {
          "content": "Deux chaînes lourdes et deux chaînes légères.",
          "correct": true,
          "explanation": "C’est l’architecture générale d’un monomère d’immunoglobuline."
        },
        {
          "content": "Une chaîne lourde et deux chaînes légères.",
          "correct": false,
          "explanation": "Le modèle canonique comporte deux chaînes lourdes et deux chaînes légères."
        },
        {
          "content": "Deux chaînes polypeptidiques identiques uniquement.",
          "correct": false,
          "explanation": "L’immunoglobuline classique comporte quatre chaînes, réparties en deux lourdes et deux légères."
        },
        {
          "content": "Trois sous-unités différentes $\\alpha$, $\\beta$ et $\\gamma$.",
          "correct": false,
          "explanation": "Cette organisation évoque d’autres complexes protéiques et non une immunoglobuline monomérique classique."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q50",
      "order": 50,
      "ec": "BIOCHIMIE",
      "chapter": "3.4 Rôles biologiques des protéines (1)",
      "axis": "Associer protéines et fonctions",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7f13fb8f2039a3fa5c26df"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sélectionnez exactement les deux associations correctes.",
      "explanation": "Les protéines ont des rôles spécialisés : transport, structure, catalyse, signalisation ou défense. La bonne association dépend de la protéine considérée.",
      "choices": [
        {
          "content": "Hémoglobine — transport de l’oxygène.",
          "correct": true,
          "explanation": "L’hémoglobine fixe réversiblement l’oxygène dans les hématies."
        },
        {
          "content": "Immunoglobuline — reconnaissance d’antigènes.",
          "correct": true,
          "explanation": "Les anticorps reconnaissent spécifiquement des antigènes."
        },
        {
          "content": "Collagène — moteur moléculaire utilisant l’ATP pour se déplacer sur les microtubules.",
          "correct": false,
          "explanation": "Le collagène est surtout une protéine structurale de la matrice extracellulaire ; les moteurs sur microtubules sont notamment kinésines et dynéines."
        },
        {
          "content": "Myosine — canal de jonction communicante entre deux cellules.",
          "correct": false,
          "explanation": "Les myosines sont des moteurs associés à l’actine ; les canaux de jonction communicante sont formés à partir de connexines."
        },
        {
          "content": "Connexine — protéine fibrillaire majeure du collagène extracellulaire.",
          "correct": false,
          "explanation": "Les connexines sont des protéines membranaires assemblées en connexons ; elles ne constituent pas les fibres de collagène."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q51",
      "order": 51,
      "ec": "BIOCHIMIE",
      "chapter": "3.5 Rôles biologiques des protéines (2)",
      "axis": "Myosine et contraction",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7f15312704406d760875e6",
        "6a7f15382704406d76087609"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant la myosine et l’actine ?",
      "explanation": "Les myosines sont des moteurs moléculaires dépendants de l’ATP. Dans la contraction musculaire, le raccourcissement du sarcomère résulte du glissement relatif des filaments, pas du raccourcissement des filaments eux-mêmes.",
      "choices": [
        {
          "content": "La myosine utilise l’énergie de l’hydrolyse de l’ATP.",
          "correct": true,
          "explanation": "L’activité ATPasique du moteur fournit l’énergie du cycle mécanique."
        },
        {
          "content": "Le raccourcissement du sarcomère résulte du glissement des filaments d’actine et de myosine.",
          "correct": true,
          "explanation": "Les filaments se déplacent l’un par rapport à l’autre."
        },
        {
          "content": "Les filaments d’actine raccourcissent chimiquement à chaque cycle de contraction.",
          "correct": false,
          "explanation": "Leur longueur reste essentiellement constante dans le modèle du glissement."
        },
        {
          "content": "La myosine est un polysaccharide moteur.",
          "correct": false,
          "explanation": "C’est une protéine."
        },
        {
          "content": "L’ATP n’intervient jamais dans la motilité liée aux myosines.",
          "correct": false,
          "explanation": "L’hydrolyse de l’ATP est centrale."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q52",
      "order": 52,
      "ec": "BIOCHIMIE",
      "chapter": "3.4 Rôles biologiques des protéines (1)",
      "axis": "P-glycoprotéine et résistance aux médicaments",
      "format": "QRU",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7f13ff8f2039a3fa5c26f3"
      ],
      "groupId": null,
      "medicalContext": true,
      "question": "Une cellule tumorale surexprime la P-glycoprotéine (P-gp). Quelle conséquence est la plus directement compatible avec ce mécanisme ?",
      "explanation": "La P-glycoprotéine appartient aux transporteurs ABC utilisant l’ATP et peut expulser divers xénobiotiques, contribuant à une résistance multidrogue.",
      "choices": [
        {
          "content": "La concentration intracellulaire des substrats de P-gp augmente parce que leur efflux diminue.",
          "correct": false,
          "explanation": "La surexpression d’une pompe d’efflux tend au contraire à diminuer la concentration intracellulaire de ses substrats."
        },
        {
          "content": "P-gp agit principalement en hydrolysant chimiquement les médicaments dans le cytosol.",
          "correct": false,
          "explanation": "P-gp est un transporteur ABC : elle déplace des substrats à travers la membrane plutôt que de les dégrader chimiquement."
        },
        {
          "content": "P-gp internalise ses substrats par endocytose médiée par clathrine.",
          "correct": false,
          "explanation": "Son mécanisme est celui d’un transporteur membranaire dépendant de l’ATP, pas celui d’un récepteur d’endocytose."
        },
        {
          "content": "La surexpression de P-gp augmente nécessairement la sensibilité cellulaire à tous les médicaments.",
          "correct": false,
          "explanation": "Pour certains substrats, un efflux accru peut au contraire contribuer à une résistance multidrogue."
        },
        {
          "content": "L’efflux de certains médicaments augmente, ce qui peut réduire leur concentration intracellulaire.",
          "correct": true,
          "explanation": "C’est un mécanisme classique de résistance multidrogue."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q53",
      "order": 53,
      "ec": "BIOCHIMIE",
      "chapter": "4.1 Enzymologie — propriétés et mécanisme",
      "axis": "Cofacteur organique",
      "format": "QROC",
      "difficulty": "EASY",
      "themeIds": [
        "6a6e3d37db61a3ea18ae7760"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Comment nomme-t-on un cofacteur organique participant à l’activité d’une enzyme ?",
      "explanation": "Un cofacteur organique est appelé coenzyme ; certains sont liés transitoirement, d’autres plus étroitement.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "coenzyme",
          "un coenzyme"
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
      "stableId": "eb02-q54",
      "order": 54,
      "ec": "BIOCHIMIE",
      "chapter": "4.2 Mesure d’activité enzymatique",
      "axis": "Données Michaelis-Menten",
      "format": "QRU",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7f15712704406d76087753"
      ],
      "groupId": "G2",
      "medicalContext": false,
      "question": "En présence de l’inhibiteur, quelle conclusion est la plus directement compatible avec les données fournies ?",
      "explanation": "Le même plateau $V_{max}$ avec un $K_m$ apparent augmenté est le profil d’une inhibition compétitive pure dans le modèle de Michaelis-Menten.",
      "choices": [
        {
          "content": "L’inhibiteur diminue à la fois $K_m$ et $V_{max}$ dans la même proportion.",
          "correct": false,
          "explanation": "Ce profil correspondrait à une inhibition incompétitive pure."
        },
        {
          "content": "L’enzyme n’est plus saturable.",
          "correct": false,
          "explanation": "Un plateau de vitesse est toujours observé."
        },
        {
          "content": "L’inhibition est compatible avec une compétition pour le site actif : $K_m$ apparent augmente et $V_{max}$ reste inchangée.",
          "correct": true,
          "explanation": "C’est le profil cinétique attendu d’une inhibition compétitive pure."
        },
        {
          "content": "L’inhibiteur augmente nécessairement $V_{max}$.",
          "correct": false,
          "explanation": "Le plateau reste inchangé."
        },
        {
          "content": "$K_m$ devient nul.",
          "correct": false,
          "explanation": "Les données indiquent au contraire une augmentation du $K_m$ apparent."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q55",
      "order": 55,
      "ec": "BIOCHIMIE",
      "chapter": "4.1–4.2 Enzymologie",
      "axis": "Interprétation cinétique de l’inhibiteur",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a7f15712704406d76087753",
        "6a6e3d4fdb61a3ea18ae78b5"
      ],
      "groupId": "G2",
      "medicalContext": false,
      "question": "Quelles propositions sont exactes à partir des données communes ?",
      "explanation": "Une inhibition compétitive pure augmente le $K_m$ apparent sans changer $V_{max}$. L’effet peut être partiellement surmonté par une forte concentration de substrat.",
      "choices": [
        {
          "content": "Le $K_m$ apparent est augmenté.",
          "correct": true,
          "explanation": "Il faut davantage de substrat pour atteindre $V_{max}/2$."
        },
        {
          "content": "$V_{max}$ est diminuée dans les données.",
          "correct": false,
          "explanation": "Le plateau est identique avec et sans inhibiteur."
        },
        {
          "content": "Une forte concentration en substrat peut limiter l’effet relatif d’un inhibiteur compétitif.",
          "correct": true,
          "explanation": "Le substrat entre en compétition avec l’inhibiteur pour le site actif."
        },
        {
          "content": "Le profil impose une inhibition incompétitive pure.",
          "correct": false,
          "explanation": "Une incompétitive diminue simultanément $K_m$ et $V_{max}$."
        },
        {
          "content": "L’inhibiteur détruit nécessairement de façon irréversible l’enzyme.",
          "correct": false,
          "explanation": "Le profil décrit une inhibition réversible compétitive."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q56",
      "order": 56,
      "ec": "BIOCHIMIE",
      "chapter": "4.2 Mesure d’activité enzymatique",
      "axis": "Plateau de Vmax sur Michaelis-Menten",
      "format": "QZONE",
      "difficulty": "HARD",
      "themeIds": [
        "6a7f15712704406d76087753"
      ],
      "groupId": "G2",
      "medicalContext": false,
      "question": "Sur le graphique de Michaelis–Menten, sélectionnez le plateau correspondant à $V_{max}$, commun aux deux courbes.",
      "explanation": "Lorsque la concentration en substrat devient élevée, la vitesse tend vers un plateau : $V_{max}$. Dans le scénario compétitif, ce plateau est inchangé.",
      "image": {
        "src": "/images/training/ue14/exam-blancs/eb02/q56-michaelis-vmax-plateau.svg",
        "alt": "Deux courbes de Michaelis-Menten, témoin et inhibition compétitive, convergeant vers le même plateau Vmax",
        "width": 1100,
        "height": 650
      },
      "expectedZones": [
        {
          "id": "vmax-plateau",
          "label": "Plateau Vmax",
          "x": 0.82,
          "y": 0.14,
          "tolerance": 0.075
        }
      ],
      "defaultTolerance": 0.075
    },
    {
      "stableId": "eb02-q57",
      "order": 57,
      "ec": "BIOCHIMIE",
      "chapter": "4.2 Mesure d’activité enzymatique",
      "axis": "Activité spécifique",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a7f156f2704406d7608774e"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Après une étape de purification, un échantillon conserve $60\\,\\mathrm{U}$ d’activité enzymatique pour $5\\,\\mathrm{mg}$ de protéines. Donnez uniquement la valeur numérique de son activité spécifique, en $\\mathrm{U}\\cdot\\mathrm{mg}^{-1}$.",
      "explanation": "L’activité spécifique vaut $60/5=12\\,\\mathrm{U}\\cdot\\mathrm{mg}^{-1}$.",
      "answer": {
        "type": "number",
        "numericAnswer": {
          "value": 12,
          "tolerance": 0,
          "unit": "U/mg",
          "displayUnit": "\\mathrm{U}\\cdot\\mathrm{mg}^{-1}"
        }
      }
    },
    {
      "stableId": "eb02-q58",
      "order": 58,
      "ec": "BIOCHIMIE",
      "chapter": "4.1–4.2 Enzymologie",
      "axis": "Inhibitions enzymatiques",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a6e3d4fdb61a3ea18ae78b5",
        "6a7f15732704406d76087761"
      ],
      "groupId": null,
      "medicalContext": true,
      "question": "Un médicament agit comme inhibiteur réversible d’une enzyme. Quelles propositions sont exactes ?",
      "explanation": "Le profil cinétique permet de distinguer plusieurs modes d’inhibition réversible. Une compétitive pure laisse $V_{max}$ inchangée, une incompétitive diminue $K_m$ et $V_{max}$ dans la même proportion, et une non compétitive pure diminue $V_{max}$ sans modifier $K_m$.",
      "choices": [
        {
          "content": "Une inhibition compétitive pure augmente le $K_m$ apparent.",
          "correct": true,
          "explanation": "Le substrat doit atteindre une concentration plus élevée pour une demi-vitesse maximale."
        },
        {
          "content": "Une inhibition non compétitive pure diminue $V_{max}$ sans modifier $K_m$.",
          "correct": true,
          "explanation": "C’est le cas idéal d’affinités égales pour E et ES."
        },
        {
          "content": "Une inhibition incompétitive pure diminue $K_m$ et $V_{max}$ dans la même proportion.",
          "correct": true,
          "explanation": "Le complexe ES est stabilisé et les deux paramètres diminuent proportionnellement."
        },
        {
          "content": "Toute inhibition réversible impose $V_{max}=0$.",
          "correct": false,
          "explanation": "Une activité résiduelle existe et les paramètres dépendent du mécanisme."
        },
        {
          "content": "Une inhibition compétitive pure diminue nécessairement $V_{max}$.",
          "correct": false,
          "explanation": "$V_{max}$ reste inchangée dans le modèle pur."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q59",
      "order": 59,
      "ec": "BIOCHIMIE",
      "chapter": "4.1 Enzymologie",
      "axis": "Régulation allostérique",
      "format": "QRP",
      "difficulty": "HARD",
      "themeIds": [
        "6a7f15542704406d760876b1"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Un effecteur se fixe réversiblement sur une enzyme en dehors du site actif et modifie son activité. Sélectionnez exactement les deux conclusions correctes.",
      "explanation": "Un effecteur allostérique se fixe sur un site distinct du site actif et modifie l’équilibre conformationnel de l’enzyme. Son effet peut être activateur ou inhibiteur.",
      "choices": [
        {
          "content": "Un effecteur allostérique doit nécessairement se fixer de façon covalente à l’enzyme.",
          "correct": false,
          "explanation": "La fixation allostérique peut être réversible et non covalente."
        },
        {
          "content": "Un site allostérique est distinct du site actif.",
          "correct": true,
          "explanation": "La fixation régulatrice se produit sur un autre site."
        },
        {
          "content": "Un effecteur allostérique peut modifier l’activité enzymatique.",
          "correct": true,
          "explanation": "Il peut stabiliser des états plus ou moins actifs."
        },
        {
          "content": "Une régulation allostérique exige toujours une enzyme oligomérique à plusieurs sous-unités.",
          "correct": false,
          "explanation": "L’oligomérie est fréquente dans les modèles allostériques classiques, mais elle n’est pas une condition universelle de toute régulation allostérique."
        },
        {
          "content": "Toute enzyme allostérique suit obligatoirement une cinétique michaelienne hyperbolique simple.",
          "correct": false,
          "explanation": "Les enzymes allostériques peuvent présenter des comportements coopératifs non michaelien simples."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q60",
      "order": 60,
      "ec": "BIOCHIMIE",
      "chapter": "4.2 Mesure d’activité enzymatique",
      "axis": "Synthèse cinétique enzymatique",
      "format": "QRPL",
      "difficulty": "HARD",
      "themeIds": [
        "6a6e3d4edb61a3ea18ae78af",
        "6a7f156e2704406d76087749"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Parmi les dix propositions, sélectionnez exactement cinq propositions exactes.",
      "explanation": "Le raisonnement cinétique distingue vitesse initiale, $K_m$, $V_{max}$, unités d’activité et représentations graphiques. Les cinq propositions exactes reprennent ces relations sans confondre $K_m$ et $K_d$.",
      "choices": [
        {
          "content": "$v=V_{max}/2$ lorsque $[S]=K_m$ dans le modèle michaelien.",
          "correct": true,
          "explanation": "C’est la propriété opérationnelle de $K_m$."
        },
        {
          "content": "À substrat saturant, la vitesse tend vers $V_{max}$.",
          "correct": true,
          "explanation": "L’enzyme devient majoritairement occupée par le substrat."
        },
        {
          "content": "Une unité enzymatique U correspond à $1\\,\\mu\\mathrm{mol}\\cdot\\mathrm{min}^{-1}$ dans des conditions définies.",
          "correct": true,
          "explanation": "C’est la définition usuelle de l’unité U."
        },
        {
          "content": "L’ordonnée à l’origine de Lineweaver–Burk vaut $1/V_{max}$.",
          "correct": true,
          "explanation": "La forme linéarisée est $1/v=(K_m/V_{max})(1/[S])+1/V_{max}$."
        },
        {
          "content": "L’abscisse à l’origine de Lineweaver–Burk vaut $-1/K_m$.",
          "correct": true,
          "explanation": "On obtient cette valeur pour $1/v=0$."
        },
        {
          "content": "$K_m$ est toujours exactement égal à $K_d$.",
          "correct": false,
          "explanation": "L’égalité n’est pas générale."
        },
        {
          "content": "Une inhibition compétitive pure diminue obligatoirement $V_{max}$.",
          "correct": false,
          "explanation": "$V_{max}$ reste inchangée."
        },
        {
          "content": "L’activité spécifique s’exprime nécessairement en molarité.",
          "correct": false,
          "explanation": "Elle rapporte une activité à une masse de protéines, par exemple U/mg."
        },
        {
          "content": "Une enzyme modifie la constante d’équilibre thermodynamique de la réaction.",
          "correct": false,
          "explanation": "Elle accélère l’approche de l’équilibre sans changer $K_{eq}$."
        },
        {
          "content": "Une enzyme augmente l’énergie d’activation.",
          "correct": false,
          "explanation": "Elle diminue l’énergie d’activation."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 5
    },
    {
      "stableId": "eb02-q61",
      "order": 61,
      "ec": "BIOCHIMIE",
      "chapter": "3.2–4.2 Protéines et enzymologie",
      "axis": "Structure protéique et activité",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a7ee317eb2cff79ffcc266e"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant le lien entre structure protéique et activité enzymatique ?",
      "explanation": "La fonction enzymatique dépend de la conformation tridimensionnelle, de l’organisation du site actif et de la dynamique de la protéine. Une dénaturation peut donc altérer l’activité.",
      "choices": [
        {
          "content": "La conformation tridimensionnelle contribue à former le site actif.",
          "correct": true,
          "explanation": "Des résidus éloignés dans la séquence peuvent être rapprochés dans l’espace."
        },
        {
          "content": "Une dénaturation peut diminuer l’activité enzymatique sans rompre toutes les liaisons peptidiques.",
          "correct": true,
          "explanation": "Les structures secondaire/tertiaire peuvent être perturbées tandis que la chaîne primaire reste intacte."
        },
        {
          "content": "La structure primaire peut influencer la structure tridimensionnelle et donc l’activité.",
          "correct": true,
          "explanation": "La séquence conditionne le repliement et les interactions."
        },
        {
          "content": "Une enzyme reste nécessairement pleinement active quelle que soit sa conformation.",
          "correct": false,
          "explanation": "La conformation est déterminante pour l’activité."
        },
        {
          "content": "Le site actif est toujours une molécule indépendante de la protéine.",
          "correct": false,
          "explanation": "Il est généralement constitué par des résidus de la protéine et éventuellement des cofacteurs."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q62",
      "order": 62,
      "ec": "BIOCHIMIE",
      "chapter": "1.3 Glucides + 2.6 Sphingolipides",
      "axis": "Identification d’un glycosphingolipide",
      "format": "QROC",
      "difficulty": "HARD",
      "themeIds": [
        "6a7dda5c689c52db81009ecb",
        "6a7e2c4cefd01033fcc18bb1"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Une molécule possède un noyau céramide et une tête oligosaccharidique contenant de l’acide sialique. À quelle grande famille de sphingolipides appartient-elle ?",
      "explanation": "Un glycosphingolipide complexe contenant un ou plusieurs résidus d’acide sialique appartient à la famille des gangliosides.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "ganglioside",
          "gangliosides"
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
      "stableId": "eb02-q63",
      "order": 63,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch1 Organisation de la cellule",
      "axis": "Organisation eucaryote",
      "format": "QRM",
      "difficulty": "EASY",
      "themeIds": [
        "6a8e0f057e71f38a3e530dd1"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant une cellule eucaryote animale ?",
      "explanation": "Une cellule eucaryote animale possède un noyau et des organites membranaires, mais pas de paroi cellulosique ni de chloroplastes.",
      "choices": [
        {
          "content": "Elle possède un noyau délimité par une enveloppe nucléaire.",
          "correct": true,
          "explanation": "Le noyau est un compartiment caractéristique des eucaryotes."
        },
        {
          "content": "Elle peut contenir des mitochondries.",
          "correct": true,
          "explanation": "Les mitochondries sont des organites eucaryotes."
        },
        {
          "content": "Elle possède une membrane plasmique.",
          "correct": true,
          "explanation": "Toutes les cellules sont limitées par une membrane."
        },
        {
          "content": "Elle possède obligatoirement une paroi cellulosique.",
          "correct": false,
          "explanation": "La paroi cellulosique caractérise les cellules végétales, pas les cellules animales."
        },
        {
          "content": "Elle possède obligatoirement des chloroplastes.",
          "correct": false,
          "explanation": "Les cellules animales n’ont pas de chloroplastes."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q64",
      "order": 64,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch1 Organisation / méthodes",
      "axis": "Immunofluorescence indirecte",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a8e0f057e71f38a3e530dd4"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Lors d’un immunomarquage indirect, quel élément porte classiquement le fluorochrome dans le schéma le plus courant ?",
      "explanation": "Dans le marquage indirect, l’anticorps primaire reconnaît l’antigène et un anticorps secondaire marqué reconnaît le primaire.",
      "choices": [
        {
          "content": "L’anticorps primaire, comme dans un immunomarquage direct.",
          "correct": false,
          "explanation": "Dans un marquage indirect classique, l’anticorps primaire reconnaît l’antigène mais c’est l’anticorps secondaire qui porte le fluorochrome."
        },
        {
          "content": "L’antigène cible, qui doit être préalablement couplé au fluorochrome.",
          "correct": false,
          "explanation": "L’antigène n’a pas à être fluorescent : il est reconnu par l’anticorps primaire."
        },
        {
          "content": "Les deux anticorps primaire et secondaire portent obligatoirement le même fluorochrome.",
          "correct": false,
          "explanation": "Le principe indirect repose classiquement sur un anticorps primaire non marqué détecté par un anticorps secondaire marqué."
        },
        {
          "content": "L’anticorps secondaire.",
          "correct": true,
          "explanation": "Il porte couramment le fluorochrome et reconnaît l’anticorps primaire."
        },
        {
          "content": "Un fluorochrome libre diffusant dans le milieu, sans anticorps de détection.",
          "correct": false,
          "explanation": "Un fluorochrome libre n’apporte pas la spécificité antigénique assurée par les anticorps."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q65",
      "order": 65,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch2 Membrane plasmique",
      "axis": "Glycocalyx",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f1c7e71f38a3e530e51"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sur quelle face de la membrane plasmique les chaînes glucidiques des glycoprotéines et glycolipides sont-elles exposées ?",
      "explanation": "Les chaînes glucidiques membranaires sont orientées vers le milieu extracellulaire ; elles contribuent notamment au glycocalyx.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "face extracellulaire",
          "face externe",
          "feuillet extracellulaire",
          "face exoplasmique",
          "feuillet exoplasmique"
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
      "stableId": "eb02-q66",
      "order": 66,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch2 Membrane plasmique",
      "axis": "Transport actif secondaire",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f1c7e71f38a3e530e53"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Comment appelle-t-on un transport qui utilise l’énergie d’un gradient ionique préexistant pour déplacer un autre soluté contre son gradient, sans hydrolyser directement l’ATP au niveau du cotransporteur ?",
      "explanation": "Ce mécanisme est un transport actif secondaire : l’énergie vient du gradient électrochimique établi par un autre système.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "transport actif secondaire",
          "actif secondaire"
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
      "stableId": "eb02-q67",
      "order": 67,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch2 Membrane plasmique",
      "axis": "Na+/K+ ATPase et gradients",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a8e0f1c7e71f38a3e530e53"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant la $\\ce{Na+/K+}$-ATPase ?",
      "explanation": "La pompe utilise l’ATP pour expulser trois $\\ce{Na+}$ et faire entrer deux $\\ce{K+}$ par cycle. Elle contribue au maintien des gradients ioniques et est électrogène.",
      "choices": [
        {
          "content": "Elle hydrolyse directement de l’ATP.",
          "correct": true,
          "explanation": "C’est une pompe de transport actif primaire."
        },
        {
          "content": "Elle expulse trois $\\ce{Na+}$ vers le milieu extracellulaire.",
          "correct": true,
          "explanation": "C’est la stœchiométrie classique du cycle."
        },
        {
          "content": "Elle fait entrer deux $\\ce{K+}$ dans la cellule.",
          "correct": true,
          "explanation": "Deux ions potassium sont importés par cycle."
        },
        {
          "content": "Elle contribue au maintien des gradients de sodium et de potassium.",
          "correct": true,
          "explanation": "Ces gradients soutiennent de nombreux transports et le potentiel membranaire."
        },
        {
          "content": "Elle fait entrer trois $\\ce{Na+}$ et sortir deux $\\ce{K+}$.",
          "correct": false,
          "explanation": "Le sens est inversé."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q68",
      "order": 68,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch2 Membrane plasmique",
      "axis": "Récepteurs et canaux",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f1c7e71f38a3e530e52"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sélectionnez exactement les deux propositions correctes.",
      "explanation": "Un canal ionique permet le passage d’ions selon les conditions électrochimiques ; son ouverture peut être contrôlée par un ligand ou le voltage. Un transporteur ne se confond pas avec un canal ouvert.",
      "choices": [
        {
          "content": "Un canal voltage-dépendant peut changer d’état selon le potentiel membranaire.",
          "correct": true,
          "explanation": "Le voltage contrôle son ouverture ou sa fermeture."
        },
        {
          "content": "Un récepteur ionotrope peut associer reconnaissance d’un ligand et ouverture d’un canal.",
          "correct": true,
          "explanation": "La liaison du ligand peut directement contrôler le pore ionique."
        },
        {
          "content": "Un récepteur ionotrope doit d’abord activer une protéine G avant que son canal ne puisse s’ouvrir.",
          "correct": false,
          "explanation": "Un récepteur ionotrope associe directement reconnaissance du ligand et fonction canal ; cette étape de protéine G caractérise plutôt des récepteurs métabotropes."
        },
        {
          "content": "Un canal ionique utilise directement l’hydrolyse de l’ATP pour imposer systématiquement un flux contre le gradient électrochimique.",
          "correct": false,
          "explanation": "Un canal laisse passer les ions selon leur gradient électrochimique lorsqu’il est ouvert ; ce n’est pas une pompe ATPase."
        },
        {
          "content": "Un transporteur ABC est simplement un canal ionique ouvert en permanence.",
          "correct": false,
          "explanation": "Les transporteurs ABC utilisent l’ATP et fonctionnent par changements conformationnels ; ils ne sont pas des pores ouverts permanents."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q69",
      "order": 69,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch3 Cytosquelette",
      "axis": "Microtubules, actine et filaments intermédiaires",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f337e71f38a3e530edb"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant les trois grandes familles du cytosquelette ?",
      "explanation": "Microtubules, microfilaments d’actine et filaments intermédiaires diffèrent par leurs protéines constitutives et leurs propriétés dynamiques.",
      "choices": [
        {
          "content": "Les microtubules sont constitués de tubuline.",
          "correct": true,
          "explanation": "Les dimères de tubuline alpha/bêta s’assemblent en microtubules."
        },
        {
          "content": "Les microfilaments sont constitués d’actine.",
          "correct": true,
          "explanation": "L’actine G polymérise en filaments d’actine."
        },
        {
          "content": "Les filaments intermédiaires regroupent plusieurs familles de protéines comme kératines, vimentine ou lamines.",
          "correct": true,
          "explanation": "Leur composition dépend du type cellulaire et du compartiment."
        },
        {
          "content": "Les filaments intermédiaires sont les plus dynamiques et polarisés des trois familles.",
          "correct": false,
          "explanation": "Ils sont plutôt stables et non polarisés."
        },
        {
          "content": "Les microtubules sont absents de tout transport intracellulaire.",
          "correct": false,
          "explanation": "Ils servent de rails aux moteurs moléculaires."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q70",
      "order": 70,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch3 Cytosquelette",
      "axis": "Moteur rétrograde sur microtubules",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f327e71f38a3e530ed8"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quel moteur moléculaire assure classiquement un transport rétrograde vers l’extrémité moins des microtubules ?",
      "explanation": "La dynéine cytoplasmique se déplace classiquement vers l’extrémité moins des microtubules, généralement orientée vers le centrosome.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "dynéine",
          "dyneine",
          "dynéine cytoplasmique",
          "dyneine cytoplasmique"
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
      "stableId": "eb02-q71",
      "order": 71,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch3 Cytosquelette",
      "axis": "Centrosome et réseau microtubulaire",
      "format": "QZONE",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f337e71f38a3e530eda",
        "6a8e0f337e71f38a3e530edb"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sur le schéma cellulaire, sélectionnez le centrosome, centre organisateur d’où rayonne le réseau de microtubules.",
      "explanation": "Le centrosome est situé près du noyau et organise la nucléation du réseau de microtubules ; leurs extrémités moins sont orientées vers ce centre.",
      "image": {
        "src": "/images/training/ue14/exam-blancs/eb02/q71-centrosome-microtubules.svg",
        "alt": "Cellule schématique montrant un noyau et un réseau radial de microtubules organisé autour d’un centrosome",
        "width": 1100,
        "height": 700
      },
      "expectedZones": [
        {
          "id": "centrosome",
          "label": "Centrosome",
          "x": 0.55,
          "y": 0.52,
          "tolerance": 0.1
        }
      ],
      "defaultTolerance": 0.1
    },
    {
      "stableId": "eb02-q72",
      "order": 72,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch4 Système endomembranaire I",
      "axis": "Endocytose médiée par récepteur",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a6f9de0b849f867f6f72023"
      ],
      "groupId": "G3",
      "medicalContext": true,
      "question": "Quelle étape initie spécifiquement l’internalisation du LDL dans le scénario décrit ?",
      "explanation": "L’endocytose médiée par récepteur commence par la liaison du LDL à son récepteur membranaire, suivie de la concentration des complexes dans des puits recouverts.",
      "choices": [
        {
          "content": "Hydrolyse du LDL dans le lysosome avant toute liaison membranaire.",
          "correct": false,
          "explanation": "L’hydrolyse intervient après internalisation et trafic endosomal."
        },
        {
          "content": "Entrée directe du LDL à travers la bicouche par diffusion simple.",
          "correct": false,
          "explanation": "Le LDL est une particule macromoléculaire internalisée par endocytose."
        },
        {
          "content": "Passage du LDL par un pore nucléaire.",
          "correct": false,
          "explanation": "Le noyau n’est pas la porte d’entrée de ce cargo."
        },
        {
          "content": "Liaison du LDL à son récepteur à la membrane plasmique.",
          "correct": true,
          "explanation": "La reconnaissance ligand-récepteur déclenche la concentration dans les puits d’endocytose."
        },
        {
          "content": "Translocation cotraductionnelle du LDL via Sec61.",
          "correct": false,
          "explanation": "Sec61 concerne l’entrée de protéines nouvellement synthétisées dans le RE."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q73",
      "order": 73,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch4 Système endomembranaire I",
      "axis": "Clathrine, adaptateurs, dynamine et tri LDL",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a6f9de0b849f867f6f72023"
      ],
      "groupId": "G3",
      "medicalContext": true,
      "question": "Quelles propositions sont exactes concernant la suite du trajet ?",
      "explanation": "L’endocytose du LDL implique adaptateurs et clathrine pour la formation du puits, dynamine pour la scission, déshabillage de la vésicule puis tri endosomal. Le récepteur LDL recycle majoritairement tandis que le LDL poursuit vers la voie endolysosomale.",
      "choices": [
        {
          "content": "Les adaptateurs participent à la sélection/concentration des complexes ligand-récepteur.",
          "correct": true,
          "explanation": "Ils relient les cargos membranaires au manteau de clathrine."
        },
        {
          "content": "La clathrine participe à la courbure et au manteau du puits endocytaire.",
          "correct": true,
          "explanation": "Les triskélions de clathrine forment une cage."
        },
        {
          "content": "La dynamine est une GTPase participant à la scission du col vésiculaire.",
          "correct": true,
          "explanation": "Son activité est essentielle à la séparation de nombreuses vésicules à clathrine."
        },
        {
          "content": "Le récepteur LDL peut être recyclé vers la membrane plasmique après dissociation du ligand.",
          "correct": true,
          "explanation": "Le tri endosomal sépare le récepteur du LDL."
        },
        {
          "content": "Après internalisation, le récepteur LDL est obligatoirement dégradé avec son ligand dans le lysosome à chaque cycle.",
          "correct": false,
          "explanation": "Le tri endosomal permet généralement le recyclage du récepteur LDL vers la membrane, tandis que le LDL poursuit vers la voie endolysosomale."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q74",
      "order": 74,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch4 Système endomembranaire I",
      "axis": "Compartiment de tri initial du LDL",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6f9de0b849f867f6f72023"
      ],
      "groupId": "G3",
      "medicalContext": true,
      "question": "Dans quel compartiment endocytaire le récepteur LDL se dissocie-t-il du LDL avant son recyclage, du fait notamment de l’acidification ?",
      "explanation": "Le tri initial se déroule dans l’endosome précoce, déjà acidifié, où ligand et récepteur peuvent se dissocier avant des devenirs différents.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "endosome précoce",
          "endosome precoce",
          "endosome précoce de tri",
          "early endosome"
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
      "stableId": "eb02-q75",
      "order": 75,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch4–Ch5 Système endomembranaire",
      "axis": "Manteaux vésiculaires et directions de trafic",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a6f9de0b849f867f6f72022",
        "6a6fa05eb4071341bc2beac2"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant les manteaux vésiculaires ?",
      "explanation": "Les manteaux participent à des étapes de bourgeonnement et de sélection de cargos. COPII est surtout associé au trafic RE→Golgi, COPI au retour Golgi→RE et aux flux intra-Golgi, et la clathrine à plusieurs voies endocytaires et post-Golgi.",
      "choices": [
        {
          "content": "COPII participe principalement au trafic antérograde du RE vers le Golgi.",
          "correct": true,
          "explanation": "Il forme des vésicules quittant le RE."
        },
        {
          "content": "COPI participe notamment au trafic rétrograde Golgi vers RE.",
          "correct": true,
          "explanation": "Il récupère notamment certains composants vers le RE."
        },
        {
          "content": "La clathrine participe à l’endocytose médiée par récepteur.",
          "correct": true,
          "explanation": "Les puits recouverts de clathrine concentrent certains cargos."
        },
        {
          "content": "COPII assure principalement le trafic rétrograde du Golgi vers le RE.",
          "correct": false,
          "explanation": "Le trafic rétrograde Golgi→RE est surtout associé à COPI ; COPII assure principalement la sortie du RE vers le Golgi."
        },
        {
          "content": "La clathrine est le manteau principal des vésicules assurant la sortie constitutive du RE vers le Golgi.",
          "correct": false,
          "explanation": "La sortie du RE vers le Golgi est principalement associée à COPII ; la clathrine intervient notamment dans l’endocytose et certains trafics post-Golgi."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q76",
      "order": 76,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch5 RER / Golgi / lysosomes",
      "axis": "N-glycosylation",
      "format": "QRU",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6fa05eb4071341bc2beac2"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelle proposition est exacte concernant la N-glycosylation de nombreuses protéines de la voie sécrétoire ?",
      "explanation": "La N-glycosylation débute dans la lumière du réticulum endoplasmique sur un résidu asparagine d’un motif approprié, puis les chaînes peuvent être remaniées dans le Golgi.",
      "choices": [
        {
          "content": "Elle débute classiquement dans le Golgi par fixation d’un sucre sur l’oxygène d’une sérine ou d’une thréonine.",
          "correct": false,
          "explanation": "Cette description correspond plutôt à l’O-glycosylation ; la N-glycosylation débute dans le RE sur une asparagine."
        },
        {
          "content": "Le précurseur oligosaccharidique est transféré sur l’oxygène d’une sérine dans la lumière du RE.",
          "correct": false,
          "explanation": "La N-glycosylation porte sur l’azote d’une asparagine d’un motif approprié, et non sur l’oxygène d’une sérine."
        },
        {
          "content": "Elle n’intervient qu’après l’exocytose, une fois la protéine arrivée dans le milieu extracellulaire.",
          "correct": false,
          "explanation": "La N-glycosylation débute pendant le transit dans le RE puis est remaniée dans la voie sécrétoire."
        },
        {
          "content": "Elle concerne uniquement les protéines cytosoliques qui ne pénètrent jamais dans le réticulum endoplasmique.",
          "correct": false,
          "explanation": "Elle concerne de nombreuses protéines luminales, membranaires ou sécrétées de la voie sécrétoire."
        },
        {
          "content": "Elle peut débuter dans le réticulum endoplasmique sur une asparagine.",
          "correct": true,
          "explanation": "Le précurseur oligosaccharidique est transféré sur l’azote d’une asparagine."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q77",
      "order": 77,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch5 RER / Golgi / lysosomes",
      "axis": "Lysosome et autophagie",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6fa05eb4071341bc2beac2",
        "6a6fa05eb4071341bc2beac4"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant les lysosomes et l’autophagie ?",
      "explanation": "Le lysosome est un compartiment acide riche en hydrolases. L’autophagie permet d’acheminer du matériel cytoplasmique vers la dégradation lysosomale.",
      "choices": [
        {
          "content": "La lumière lysosomale est acide.",
          "correct": true,
          "explanation": "Les pompes à protons contribuent à maintenir un pH bas."
        },
        {
          "content": "Des hydrolases lysosomales fonctionnent de façon optimale en milieu acide.",
          "correct": true,
          "explanation": "L’environnement lysosomal favorise leur activité."
        },
        {
          "content": "L’autophagie peut participer au renouvellement d’organites.",
          "correct": true,
          "explanation": "Des organites ou portions de cytoplasme peuvent être dégradés."
        },
        {
          "content": "Le lysosome possède un génome propre qui code toutes ses hydrolases.",
          "correct": false,
          "explanation": "Les hydrolases sont codées par le génome nucléaire et acheminées par la voie sécrétoire."
        },
        {
          "content": "L’autophagosome est l’équivalent exact d’un ribosome libre.",
          "correct": false,
          "explanation": "Ce sont des structures de nature et de fonction différentes."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q78",
      "order": 78,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch4–Ch5 Système endomembranaire",
      "axis": "Rab/SNARE et fusion",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6fa05eb4071341bc2beac4"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sélectionnez exactement les deux propositions correctes concernant l’adressage et la fusion vésiculaires.",
      "explanation": "Les protéines Rab participent à la spécificité d’adressage et les SNARE à l’appariement/fusion des membranes. Elles ne remplacent pas les manteaux de bourgeonnement ni les moteurs du cytosquelette.",
      "choices": [
        {
          "content": "Des protéines Rab participent à la spécificité du ciblage vésiculaire.",
          "correct": true,
          "explanation": "Elles organisent des interactions avec des effecteurs de ciblage."
        },
        {
          "content": "Des SNARE participent à l’appariement et à la fusion de membranes.",
          "correct": true,
          "explanation": "Leur appariement rapproche les membranes."
        },
        {
          "content": "Les protéines Rab constituent le manteau mécanique qui courbe directement la membrane au moment du bourgeonnement.",
          "correct": false,
          "explanation": "Les Rab régulent surtout le ciblage et l’identité des compartiments ; les manteaux tels que COPI, COPII ou clathrine assurent la courbure/bourgeonnement."
        },
        {
          "content": "Les SNARE sont des petites GTPases qui déterminent à elles seules l’identité des compartiments.",
          "correct": false,
          "explanation": "Les SNARE sont des protéines d’appariement/fusion ; les Rab sont des petites GTPases importantes pour le ciblage."
        },
        {
          "content": "Le même couple de SNARE doit nécessairement fonctionner indifféremment pour toutes les fusions vésiculaires cellulaires.",
          "correct": false,
          "explanation": "La spécificité des fusions repose sur des combinaisons de protéines de ciblage et de SNARE adaptées aux compartiments concernés."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q79",
      "order": 79,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch6 Peroxysomes",
      "axis": "Organisation générale",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a8e0f747e71f38a3e531069"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quel organite correspond à la description suivante : une seule membrane, pas de génome propre, nombreuses enzymes oxydatives et présence de catalase ?",
      "explanation": "Cette combinaison de propriétés caractérise le peroxysome.",
      "choices": [
        {
          "content": "Le peroxysome.",
          "correct": true,
          "explanation": "Il possède une membrane unique, pas de génome et contient notamment la catalase."
        },
        {
          "content": "La mitochondrie.",
          "correct": false,
          "explanation": "Elle possède deux membranes et un génome propre."
        },
        {
          "content": "Le noyau.",
          "correct": false,
          "explanation": "Il possède une enveloppe double et contient le génome nucléaire."
        },
        {
          "content": "Le lysosome.",
          "correct": false,
          "explanation": "Il est riche en hydrolases acides et ne correspond pas à cette description oxydative."
        },
        {
          "content": "Le nucléole.",
          "correct": false,
          "explanation": "Le nucléole n’est pas un organite membranaire."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q80",
      "order": 80,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch6 Peroxysomes",
      "axis": "Import PTS1 / PEX5",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f747e71f38a3e531069"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant l’import de protéines dans la matrice peroxysomale ?",
      "explanation": "De nombreuses protéines matricielles sont synthétisées dans le cytosol, portent un signal PTS et sont reconnues par des peroxines. Le signal PTS1 C-terminal est reconnu classiquement par PEX5.",
      "choices": [
        {
          "content": "Le signal PTS1 est classiquement C-terminal.",
          "correct": true,
          "explanation": "Le prototype est un motif terminal de type SKL."
        },
        {
          "content": "PEX5 reconnaît de nombreuses protéines portant un PTS1.",
          "correct": true,
          "explanation": "PEX5 est le récepteur cytosolique principal de PTS1."
        },
        {
          "content": "Les protéines matricielles peroxysomales peuvent être synthétisées sur des ribosomes cytosoliques.",
          "correct": true,
          "explanation": "L’import est principalement post-traductionnel."
        },
        {
          "content": "PTS1 est le peptide signal N-terminal clivé par la peptidase mitochondriale.",
          "correct": false,
          "explanation": "Il s’agit d’un signal peroxysomal C-terminal et il n’est pas le signal mitochondrial."
        },
        {
          "content": "Le peroxysome utilise systématiquement Sec61 pour importer ses protéines matricielles.",
          "correct": false,
          "explanation": "Sec61 appartient au translocon du réticulum endoplasmique."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q81",
      "order": 81,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch6 Peroxysomes",
      "axis": "Oxydation peroxysomale et peroxyde d’hydrogène",
      "format": "QROC",
      "difficulty": "HARD",
      "themeIds": [
        "6a8e0f747e71f38a3e53106b"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quel composé réactif de l’oxygène peut être formé lorsque les électrons issus de la première étape de la $\\beta$-oxydation peroxysomale sont transférés directement à $\\ce{O2}$ ?",
      "explanation": "L’acyl-CoA oxydase transfère des électrons à l’oxygène moléculaire, ce qui peut former du peroxyde d’hydrogène $\\ce{H2O2}$, ensuite pris en charge notamment par la catalase.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "H2O2",
          "H₂O₂",
          "peroxyde d’hydrogène",
          "peroxyde d'hydrogene",
          "eau oxygénée"
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
      "stableId": "eb02-q82",
      "order": 82,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch6 Peroxysomes",
      "axis": "Fonctions métaboliques du peroxysome",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f747e71f38a3e53106c",
        "6a8e0f747e71f38a3e53106b"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant les fonctions métaboliques des peroxysomes ?",
      "explanation": "Les peroxysomes participent notamment à la $\\beta$-oxydation de VLCFA, à certaines étapes de synthèse lipidique et à des réactions d’oxydation produisant du $\\ce{H2O2}$.",
      "choices": [
        {
          "content": "Ils participent à la $\\beta$-oxydation des acides gras à très longue chaîne.",
          "correct": true,
          "explanation": "Le raccourcissement peroxysomal précède souvent un relais mitochondrial."
        },
        {
          "content": "Ils contiennent de la catalase.",
          "correct": true,
          "explanation": "Cette enzyme dégrade le peroxyde d’hydrogène."
        },
        {
          "content": "Ils participent aux premières étapes de synthèse des plasmalogènes.",
          "correct": true,
          "explanation": "Cette biosynthèse implique le peroxysome puis le RE."
        },
        {
          "content": "Ils peuvent participer à l’alpha-oxydation de l’acide phytanique.",
          "correct": true,
          "explanation": "Cette voie est une fonction peroxysomale importante."
        },
        {
          "content": "Ils synthétisent l’ATP par une chaîne respiratoire couplée à une ATP synthase peroxysomale.",
          "correct": false,
          "explanation": "Le peroxysome ne possède pas ce système de phosphorylation oxydative."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q83",
      "order": 83,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch6–Ch7 Organites",
      "axis": "Peroxysome versus mitochondrie",
      "format": "QRP",
      "difficulty": "HARD",
      "themeIds": [
        "6a6fa34f5b1a508a2191a53b"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sélectionnez exactement les deux propositions correctes.",
      "explanation": "Peroxysomes et mitochondries partagent certaines fonctions oxydatives mais diffèrent profondément : le peroxysome a une membrane et pas de génome, tandis que la mitochondrie a deux membranes et un génome propre.",
      "choices": [
        {
          "content": "La mitochondrie possède un génome propre.",
          "correct": true,
          "explanation": "L’ADN mitochondrial est distinct de l’ADN nucléaire."
        },
        {
          "content": "Le peroxysome ne possède pas de génome propre.",
          "correct": true,
          "explanation": "Ses protéines sont majoritairement codées par le noyau."
        },
        {
          "content": "La $\\beta$-oxydation peroxysomale est directement couplée à une ATP synthase utilisant le gradient de protons de l’organite.",
          "correct": false,
          "explanation": "Le peroxysome ne possède pas de chaîne respiratoire couplée à une ATP synthase ; ses oxydations ne produisent pas l’ATP par ce mécanisme."
        },
        {
          "content": "Toutes les protéines de la chaîne respiratoire mitochondriale sont codées par l’ADN mitochondrial.",
          "correct": false,
          "explanation": "Une grande partie des protéines mitochondriales, y compris de nombreuses sous-unités de la chaîne respiratoire, est codée par le génome nucléaire."
        },
        {
          "content": "Les protéines matricielles portant un PTS1 sont importées dans la mitochondrie par le complexe TOM.",
          "correct": false,
          "explanation": "PTS1 est un signal peroxysomal reconnu classiquement par PEX5 ; TOM appartient à l’import mitochondrial."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q84",
      "order": 84,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch7 Mitochondrie",
      "axis": "Membranes et import des protéines",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f897e71f38a3e5310f2"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant l’organisation mitochondriale ?",
      "explanation": "La mitochondrie possède une membrane externe et une membrane interne. La membrane interne forme les crêtes et porte notamment la chaîne respiratoire ; de nombreuses protéines codées par le noyau sont importées.",
      "choices": [
        {
          "content": "La mitochondrie possède deux membranes d’enveloppe.",
          "correct": true,
          "explanation": "Une membrane externe et une membrane interne délimitent l’espace intermembranaire."
        },
        {
          "content": "La membrane interne forme des crêtes.",
          "correct": true,
          "explanation": "Ces replis augmentent sa surface."
        },
        {
          "content": "Toutes les protéines mitochondriales sont codées par l’ADN mitochondrial.",
          "correct": false,
          "explanation": "La majorité est codée par le génome nucléaire."
        },
        {
          "content": "La chaîne respiratoire est portée par la membrane plasmique de la cellule.",
          "correct": false,
          "explanation": "Elle est située dans la membrane interne mitochondriale."
        },
        {
          "content": "La matrice est située à l’extérieur de la membrane externe.",
          "correct": false,
          "explanation": "Elle est le compartiment interne délimité par la membrane interne."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q85",
      "order": 85,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch7 Mitochondrie",
      "axis": "Cyanure et complexe IV",
      "format": "QRM",
      "difficulty": "HARD",
      "themeIds": [
        "6a6fa5613f91c6201e5dd8d7"
      ],
      "groupId": null,
      "medicalContext": true,
      "question": "Une intoxication au cyanure inhibe fortement le complexe IV de la chaîne respiratoire. Quelles conséquences sont cohérentes ?",
      "explanation": "Le complexe IV transfère les électrons au dioxygène, accepteur final, et participe au pompage de protons. Son inhibition bloque le flux électronique terminal et compromet la phosphorylation oxydative.",
      "choices": [
        {
          "content": "Le transfert final des électrons vers $\\ce{O2}$ est bloqué.",
          "correct": true,
          "explanation": "Le complexe IV est la cytochrome c oxydase qui réduit l’oxygène."
        },
        {
          "content": "La consommation mitochondriale d’oxygène liée à la chaîne respiratoire diminue fortement.",
          "correct": true,
          "explanation": "Le flux terminal vers l’oxygène est interrompu."
        },
        {
          "content": "Le gradient protonique mitochondrial tend à ne plus être entretenu normalement.",
          "correct": true,
          "explanation": "Le pompage dépend du flux électronique à travers I, III et IV."
        },
        {
          "content": "La synthèse d’ATP par phosphorylation oxydative est compromise.",
          "correct": true,
          "explanation": "L’ATP synthase dépend du gradient protonique."
        },
        {
          "content": "Le complexe II devient automatiquement une pompe à protons capable de remplacer le complexe IV.",
          "correct": false,
          "explanation": "Le complexe II ne pompe pas de protons et ne remplace pas le complexe IV."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q86",
      "order": 86,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch7 Mitochondrie",
      "axis": "Génome mitochondrial",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a6fa5613f91c6201e5dd8d7"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelle proposition est exacte concernant le génome mitochondrial humain ?",
      "explanation": "La mitochondrie possède son propre ADN, transmis classiquement par la mère, mais son autonomie est limitée car de nombreuses protéines mitochondriales sont codées par le noyau.",
      "choices": [
        {
          "content": "Il code toutes les protéines présentes dans la mitochondrie.",
          "correct": false,
          "explanation": "La majorité des protéines mitochondriales sont codées par le noyau."
        },
        {
          "content": "Il est contenu dans le nucléole.",
          "correct": false,
          "explanation": "Il est localisé dans la matrice mitochondriale."
        },
        {
          "content": "Il constitue un génome distinct du génome nucléaire et sa transmission est classiquement maternelle.",
          "correct": true,
          "explanation": "C’est une particularité du génome mitochondrial."
        },
        {
          "content": "Il disparaît nécessairement pendant la phase G1.",
          "correct": false,
          "explanation": "La réplication de l’ADNmt n’est pas calquée rigidement sur le cycle nucléaire."
        },
        {
          "content": "Il est identique à un chromosome nucléaire linéaire entouré d’une enveloppe nucléaire.",
          "correct": false,
          "explanation": "L’ADN mitochondrial a une organisation distincte."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q87",
      "order": 87,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch7 Mitochondrie",
      "axis": "Force motrice de l’ATP synthase",
      "format": "QROC",
      "difficulty": "HARD",
      "themeIds": [
        "6a8e0f8a7e71f38a3e5310f3"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelle force énergétique directement utilisée par l’ATP synthase mitochondriale résulte de l’accumulation de protons dans l’espace intermembranaire ?",
      "explanation": "Le retour des protons vers la matrice est entraîné par leur gradient électrochimique, souvent appelé force proton-motrice.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "gradient électrochimique de protons",
          "gradient electrochimique de protons",
          "gradient protonique",
          "force proton-motrice",
          "force proton motrice"
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
      "stableId": "eb02-q88",
      "order": 88,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch7 Mitochondrie",
      "axis": "TOM et TIM",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f897e71f38a3e5310f2"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sélectionnez exactement les deux propositions correctes concernant l’import mitochondrial de nombreuses protéines codées par le noyau.",
      "explanation": "Les complexes TOM et TIM assurent des étapes successives de translocation à travers les membranes externe et interne pour de nombreuses protéines destinées à la matrice.",
      "choices": [
        {
          "content": "TOM participe au passage à travers la membrane externe.",
          "correct": true,
          "explanation": "TOM signifie translocase of the outer membrane."
        },
        {
          "content": "TIM participe au passage à travers la membrane interne.",
          "correct": true,
          "explanation": "TIM signifie translocase of the inner membrane."
        },
        {
          "content": "TOM est une phospholipase lysosomale.",
          "correct": false,
          "explanation": "Il s’agit d’un complexe de translocation mitochondrial."
        },
        {
          "content": "TIM est un récepteur du signal PTS1 peroxysomal.",
          "correct": false,
          "explanation": "PEX5 reconnaît classiquement PTS1."
        },
        {
          "content": "Toutes les protéines importées sont codées par l’ADN mitochondrial.",
          "correct": false,
          "explanation": "L’import concerne précisément de nombreuses protéines codées par le noyau."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q89",
      "order": 89,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch8 Noyau",
      "axis": "Enveloppe nucléaire et pores",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a8e0f9f7e71f38a3e531179"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant l’enveloppe nucléaire ?",
      "explanation": "L’enveloppe nucléaire comprend deux membranes séparées par un espace périnucléaire. La membrane externe est continue avec le RE et les pores nucléaires assurent les échanges nucléocytoplasmiques sélectifs.",
      "choices": [
        {
          "content": "Elle comporte deux membranes.",
          "correct": true,
          "explanation": "Une membrane interne et une membrane externe entourent le nucléoplasme."
        },
        {
          "content": "La membrane externe est continue avec le réticulum endoplasmique.",
          "correct": true,
          "explanation": "Cette continuité explique leur relation structurale."
        },
        {
          "content": "Les pores nucléaires permettent des échanges nucléocytoplasmiques sélectifs.",
          "correct": true,
          "explanation": "Les complexes de pores contrôlent le trafic."
        },
        {
          "content": "L’enveloppe nucléaire ne se réorganise jamais pendant la mitose.",
          "correct": false,
          "explanation": "Elle se désassemble puis se reconstitue lors de la mitose ouverte des cellules animales."
        },
        {
          "content": "L’ADN nucléaire traverse librement les pores vers le cytosol en interphase.",
          "correct": false,
          "explanation": "L’ADN reste dans le noyau."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q90",
      "order": 90,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch9 Cycle cellulaire",
      "axis": "Kinétochore",
      "format": "QZONE",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6faa839a5abf9bf4c72763"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sur le chromosome métaphasique schématique, sélectionnez un kinétochore, structure d’attachement des microtubules du fuseau.",
      "explanation": "Le kinétochore est un complexe protéique assemblé au niveau du centromère de chaque chromatide ; il relie le chromosome aux microtubules kinétochoriens.",
      "image": {
        "src": "/images/training/ue14/exam-blancs/eb02/q90-metaphase-kinetochore.svg",
        "alt": "Chromosome métaphasique à deux chromatides avec régions centromériques et microtubules du fuseau",
        "width": 1100,
        "height": 680
      },
      "expectedZones": [
        {
          "id": "kinetochore",
          "label": "Kinétochore",
          "x": 0.48,
          "y": 0.493,
          "tolerance": 0.055
        }
      ],
      "defaultTolerance": 0.055
    },
    {
      "stableId": "eb02-q91",
      "order": 91,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch8 Noyau",
      "axis": "Lamina et chromatine périphérique",
      "format": "QRM",
      "difficulty": "EASY",
      "themeIds": [
        "6a8e0f9f7e71f38a3e53117a"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant la lamina nucléaire ?",
      "explanation": "La lamina est un réseau de lamines, protéines de filaments intermédiaires, situé sous la membrane nucléaire interne. Elle contribue à la forme du noyau et interagit avec la chromatine.",
      "choices": [
        {
          "content": "Elle est constituée de lamines.",
          "correct": true,
          "explanation": "Les lamines appartiennent à la famille des filaments intermédiaires."
        },
        {
          "content": "Elle se situe au contact de la face nucléoplasmique de l’enveloppe nucléaire interne.",
          "correct": true,
          "explanation": "La lamina tapisse l’intérieur du noyau."
        },
        {
          "content": "Elle contribue à la résistance mécanique et à la forme du noyau.",
          "correct": true,
          "explanation": "Elle soutient l’enveloppe nucléaire."
        },
        {
          "content": "Elle peut interagir avec la chromatine périphérique.",
          "correct": true,
          "explanation": "La lamina participe à l’organisation nucléaire."
        },
        {
          "content": "Elle est constituée de laminine, protéine majeure de la membrane basale.",
          "correct": false,
          "explanation": "Lamine et laminine sont des protéines différentes."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q92",
      "order": 92,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch8 Noyau",
      "axis": "Signal NLS et import nucléaire",
      "format": "QRU",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6fa88b82070d802a35975d"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Une protéine nucléaire de grande taille perd son signal de localisation nucléaire (NLS). Quelle conséquence est la plus directe ?",
      "explanation": "Un NLS fonctionnel est nécessaire à la reconnaissance par le système d’import pour de nombreuses protéines nucléaires. Sa perte diminue l’import actif du cargo.",
      "choices": [
        {
          "content": "L’import nucléaire actif de la protéine diminue et elle tend à rester dans le cytosol.",
          "correct": true,
          "explanation": "Sans signal reconnu, le cargo n’est plus efficacement pris en charge par les importines."
        },
        {
          "content": "L’import nucléaire actif reste inchangé car un NLS sert uniquement à l’export du noyau.",
          "correct": false,
          "explanation": "Un NLS sert à l’adressage/import nucléaire de nombreuses protéines ; sa perte réduit cette reconnaissance."
        },
        {
          "content": "La grande taille de la protéine suffit à accélérer sa diffusion passive à travers le pore nucléaire.",
          "correct": false,
          "explanation": "La grande taille limite au contraire la diffusion passive ; les macromolécules utilisent un transport sélectif."
        },
        {
          "content": "La perte du NLS augmente directement son affinité pour les importines nucléaires.",
          "correct": false,
          "explanation": "La disparition du signal d’adressage diminue la reconnaissance par le système d’import."
        },
        {
          "content": "La protéine est nécessairement exportée du noyau plus rapidement, même si elle n’y est plus efficacement importée.",
          "correct": false,
          "explanation": "La conséquence directe est d’abord une diminution de l’import ; un effet obligatoire sur l’export ne peut pas être déduit."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q93",
      "order": 93,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch9 Cycle cellulaire",
      "axis": "Dommages ADN et arrêt G1/S",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6faa829a5abf9bf4c72760"
      ],
      "groupId": "G4",
      "medicalContext": false,
      "question": "Après un dommage important de l’ADN en G1, quelles propositions sont exactes ?",
      "explanation": "Une réponse canonique implique l’activation de p53, l’induction de p21 et l’inhibition de complexes cycline-CDK, ce qui freine la transition G1/S et laisse du temps pour la réparation ou d’autres décisions cellulaires.",
      "choices": [
        {
          "content": "p53 peut contribuer à l’induction de p21.",
          "correct": true,
          "explanation": "p21 est une cible transcriptionnelle classique de p53."
        },
        {
          "content": "p21 peut inhiber des complexes cycline-CDK impliqués dans la transition G1/S.",
          "correct": true,
          "explanation": "L’inhibition des CDK freine la progression."
        },
        {
          "content": "Le frein sur les CDK favorise le maintien de Rb dans un état moins phosphorylé, ce qui limite l’activité d’E2F.",
          "correct": true,
          "explanation": "La voie Rb-E2F est un point majeur du contrôle G1/S."
        },
        {
          "content": "La cellule peut retarder l’entrée en phase S pour permettre une réponse au dommage.",
          "correct": true,
          "explanation": "Le checkpoint évite de poursuivre immédiatement la réplication d’un ADN lésé."
        },
        {
          "content": "p21 active directement la séparase pour déclencher l’anaphase.",
          "correct": false,
          "explanation": "La séparase intervient en mitose, pas dans le checkpoint G1/S."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q94",
      "order": 94,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch9 Cycle cellulaire",
      "axis": "Rb-E2F et complexes cycline-CDK",
      "format": "QRM",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6faa839a5abf9bf4c72762",
        "6a6faa839a5abf9bf4c72761"
      ],
      "groupId": "G4",
      "medicalContext": false,
      "question": "Quelles propositions sont exactes concernant le contrôle de la transition G1/S dans ce contexte ?",
      "explanation": "La phosphorylation de Rb par les complexes cycline-CDK favorise la libération d’E2F et l’expression de gènes nécessaires à la phase S. Une inhibition de ces complexes par p21 freine ce processus.",
      "choices": [
        {
          "content": "L’activation des complexes cycline-CDK de G1 favorise la phosphorylation de Rb.",
          "correct": true,
          "explanation": "Cette phosphorylation réduit l’inhibition exercée par Rb sur E2F."
        },
        {
          "content": "L’augmentation de p21 peut freiner la progression G1/S.",
          "correct": true,
          "explanation": "p21 inhibe des CDK et participe à l’arrêt du cycle."
        },
        {
          "content": "Wee1 active CDK1 en la déphosphorylant.",
          "correct": false,
          "explanation": "Wee1 ajoute une phosphorylation inhibitrice ; Cdc25 déphosphoryle pour activer CDK1."
        },
        {
          "content": "Le checkpoint G1/S dépend uniquement du complexe II mitochondrial.",
          "correct": false,
          "explanation": "Il implique des régulateurs nucléaires du cycle cellulaire."
        },
        {
          "content": "E2F est une hydrolase lysosomale marquée par M6P.",
          "correct": false,
          "explanation": "E2F est un facteur de transcription du cycle cellulaire."
        }
      ],
      "answerFormat": "MULTIPLE"
    },
    {
      "stableId": "eb02-q95",
      "order": 95,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch9 Cycle cellulaire",
      "axis": "Fuseau et bi-orientation",
      "format": "QRP",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6faa839a5abf9bf4c72763"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Sélectionnez exactement les deux propositions correctes concernant l’attachement des chromosomes au fuseau.",
      "explanation": "Chaque paire de chromatides sœurs doit établir une bi-orientation correcte : les kinétochores sœurs sont attachés à des microtubules provenant de pôles opposés, ce qui crée la tension requise avant l’anaphase.",
      "choices": [
        {
          "content": "Les kinétochores s’assemblent au niveau des centromères.",
          "correct": true,
          "explanation": "Le kinétochore est la plateforme protéique de liaison au fuseau."
        },
        {
          "content": "La bi-orientation correspond à l’attachement des kinétochores sœurs à des pôles opposés.",
          "correct": true,
          "explanation": "Cette géométrie permet la ségrégation correcte."
        },
        {
          "content": "Les microtubules kinétochoriens sont constitués d’actine.",
          "correct": false,
          "explanation": "Ce sont des microtubules de tubuline."
        },
        {
          "content": "Le checkpoint du fuseau favorise l’anaphase tant qu’un kinétochore reste non attaché.",
          "correct": false,
          "explanation": "Les kinétochores non attachés maintiennent le checkpoint actif et retardent l’anaphase."
        },
        {
          "content": "La cohésine est une pompe à protons du fuseau.",
          "correct": false,
          "explanation": "C’est un complexe protéique assurant la cohésion des chromatides."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 2
    },
    {
      "stableId": "eb02-q96",
      "order": 96,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch9 Cycle cellulaire",
      "axis": "Quantité d’ADN en G2",
      "format": "QROC",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6faa829a5abf9bf4c72760"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Dans une cellule somatique diploïde ayant terminé la réplication mais n’ayant pas encore commencé la mitose, indiquez l’état en notation $n/C$.",
      "explanation": "Après la phase S, le nombre de chromosomes reste $2n$ mais chaque chromosome possède deux chromatides : la quantité d’ADN est $4C$.",
      "answer": {
        "type": "text",
        "acceptedAnswers": [
          "2n/4C",
          "2n / 4C",
          "2n 4C",
          "2n/4c"
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
      "stableId": "eb02-q97",
      "order": 97,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch9 Cycle cellulaire",
      "axis": "Quiescence G0",
      "format": "QRU",
      "difficulty": "EASY",
      "themeIds": [
        "6a6faa829a5abf9bf4c72760"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Quelle proposition décrit correctement l’état G0 ?",
      "explanation": "G0 est un état de quiescence hors du cycle prolifératif actif. Certaines cellules peuvent y entrer de façon réversible, d’autres de façon durable selon le contexte.",
      "choices": [
        {
          "content": "G0 correspond nécessairement à la mitose.",
          "correct": false,
          "explanation": "La mitose est la phase M."
        },
        {
          "content": "G0 est un état de quiescence en dehors de la progression cyclique active.",
          "correct": true,
          "explanation": "La cellule ne progresse pas activement vers une nouvelle division."
        },
        {
          "content": "G0 est la phase où l’ADN est obligatoirement répliqué.",
          "correct": false,
          "explanation": "La réplication se déroule en phase S."
        },
        {
          "content": "Toute cellule en G0 est morte.",
          "correct": false,
          "explanation": "Une cellule quiescente peut rester viable et fonctionnelle."
        },
        {
          "content": "G0 signifie que la cellule possède zéro chromosome.",
          "correct": false,
          "explanation": "Le terme ne décrit pas la ploïdie."
        }
      ],
      "answerFormat": "SINGLE"
    },
    {
      "stableId": "eb02-q98",
      "order": 98,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch8 Noyau + Ch9 Cycle",
      "axis": "Synthèse noyau et cycle",
      "format": "QRPL",
      "difficulty": "HARD",
      "themeIds": [
        "6a6fa88b82070d802a359760",
        "6a6faa839a5abf9bf4c72764"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Parmi les dix propositions suivantes, sélectionnez exactement cinq propositions exactes.",
      "explanation": "Le noyau est un compartiment dynamique dont l’enveloppe, la chromatine et les mécanismes de transport sont coordonnés avec le cycle cellulaire.",
      "choices": [
        {
          "content": "L’enveloppe nucléaire comporte deux membranes.",
          "correct": true,
          "explanation": "Une membrane interne et une externe délimitent l’espace périnucléaire."
        },
        {
          "content": "Les pores nucléaires sont des complexes de nucléoporines.",
          "correct": true,
          "explanation": "Ils assurent le trafic nucléocytoplasmique."
        },
        {
          "content": "La lamina est constituée de lamines.",
          "correct": true,
          "explanation": "Les lamines sont des filaments intermédiaires nucléaires."
        },
        {
          "content": "En G2, une cellule diploïde est $2n/4C$.",
          "correct": true,
          "explanation": "La réplication a doublé la quantité d’ADN sans doubler le nombre de chromosomes."
        },
        {
          "content": "Le nucléole n’est pas entouré d’une membrane.",
          "correct": true,
          "explanation": "C’est un compartiment nucléaire non membranaire."
        },
        {
          "content": "La laminine est la principale protéine de la lamina nucléaire.",
          "correct": false,
          "explanation": "La lamina est constituée de lamines."
        },
        {
          "content": "L’ADN nucléaire quitte librement le noyau par les pores en interphase.",
          "correct": false,
          "explanation": "L’ADN reste dans le noyau."
        },
        {
          "content": "La phase S correspond à la séparation des chromatides sœurs.",
          "correct": false,
          "explanation": "La séparation a lieu en anaphase ; S correspond à la réplication."
        },
        {
          "content": "Les kinétochores sont des vésicules lysosomales.",
          "correct": false,
          "explanation": "Ce sont des complexes protéiques au centromère."
        },
        {
          "content": "G0 signifie absence totale d’ADN.",
          "correct": false,
          "explanation": "G0 décrit l’état prolifératif, pas l’absence de génome."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 5
    },
    {
      "stableId": "eb02-q99",
      "order": 99,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch4–Ch5 Système endomembranaire",
      "axis": "Synthèse trafic et adressage",
      "format": "QRPL",
      "difficulty": "MEDIUM",
      "themeIds": [
        "6a6fa05eb4071341bc2beac6"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Parmi les dix propositions suivantes, sélectionnez exactement cinq propositions exactes.",
      "explanation": "Le système endomembranaire combine entrée dans le RE, transport vésiculaire, maturation golgienne, endocytose, recyclage et adressage lysosomal.",
      "choices": [
        {
          "content": "COPII participe au trafic du RE vers le Golgi.",
          "correct": true,
          "explanation": "Il assure un trafic antérograde de sortie du RE."
        },
        {
          "content": "COPI participe notamment au retour Golgi vers RE.",
          "correct": true,
          "explanation": "Il intervient dans des flux rétrogrades."
        },
        {
          "content": "La clathrine participe à l’endocytose médiée par récepteur.",
          "correct": true,
          "explanation": "Elle forme le manteau de nombreux puits endocytaires."
        },
        {
          "content": "Le mannose-6-phosphate participe au tri de nombreuses hydrolases lysosomales.",
          "correct": true,
          "explanation": "Le récepteur M6P contribue à leur adressage."
        },
        {
          "content": "La N-glycosylation de nombreuses protéines sécrétoires débute dans le RE.",
          "correct": true,
          "explanation": "Elle commence dans la lumière du RE."
        },
        {
          "content": "PTS1 est un signal de tri lysosomal reconnu par le récepteur M6P.",
          "correct": false,
          "explanation": "PTS1 est un signal peroxysomal reconnu par PEX5."
        },
        {
          "content": "TOM est un manteau vésiculaire du Golgi.",
          "correct": false,
          "explanation": "TOM est une translocase mitochondriale."
        },
        {
          "content": "Les lysosomes possèdent un génome propre.",
          "correct": false,
          "explanation": "Ils n’ont pas d’ADN propre."
        },
        {
          "content": "La clathrine synthétise les phospholipides des vésicules.",
          "correct": false,
          "explanation": "Elle constitue un manteau protéique."
        },
        {
          "content": "COPII assure l’import des protéines nucléaires à travers les pores.",
          "correct": false,
          "explanation": "Le trafic nucléaire utilise importines et complexes de pores."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 5
    },
    {
      "stableId": "eb02-q100",
      "order": 100,
      "ec": "BIOLOGIE_CELLULAIRE",
      "chapter": "Ch6–Ch8 Organites",
      "axis": "Synthèse mitochondrie / peroxysome / noyau",
      "format": "QRPL",
      "difficulty": "HARD",
      "themeIds": [
        "6a6fa5613f91c6201e5dd8da",
        "6a6fa34f5b1a508a2191a53b"
      ],
      "groupId": null,
      "medicalContext": false,
      "question": "Parmi les dix propositions suivantes, sélectionnez exactement cinq propositions exactes.",
      "explanation": "Les principaux compartiments étudiés possèdent des signatures distinctes : mitochondrie à deux membranes et génome propre, peroxysome à une membrane sans génome, noyau à enveloppe double et pores, lysosome acide à membrane unique.",
      "choices": [
        {
          "content": "La mitochondrie possède deux membranes.",
          "correct": true,
          "explanation": "Une membrane externe et une interne entourent l’espace intermembranaire et la matrice."
        },
        {
          "content": "Le peroxysome possède une membrane unique.",
          "correct": true,
          "explanation": "Il n’a pas de double enveloppe."
        },
        {
          "content": "Le peroxysome ne possède pas de génome propre.",
          "correct": true,
          "explanation": "Ses protéines sont principalement codées par le noyau."
        },
        {
          "content": "Le noyau est entouré d’une enveloppe à deux membranes percée de pores.",
          "correct": true,
          "explanation": "Les pores assurent les échanges nucléocytoplasmiques."
        },
        {
          "content": "Le lysosome est un compartiment acide délimité par une membrane.",
          "correct": true,
          "explanation": "Son acidité permet l’activité de nombreuses hydrolases."
        },
        {
          "content": "Le complexe II mitochondrial pompe directement des protons.",
          "correct": false,
          "explanation": "Il transfère des électrons mais ne pompe pas de protons."
        },
        {
          "content": "PEX5 est la translocase principale de la membrane externe mitochondriale.",
          "correct": false,
          "explanation": "PEX5 est un récepteur peroxysomal ; TOM est mitochondrial."
        },
        {
          "content": "Le noyau possède une ATP synthase dans ses pores.",
          "correct": false,
          "explanation": "Les pores nucléaires ne sont pas des ATP synthases."
        },
        {
          "content": "Le lysosome possède un ADN circulaire propre.",
          "correct": false,
          "explanation": "Il ne possède pas de génome."
        },
        {
          "content": "La mitochondrie appartient au système endomembranaire classique.",
          "correct": false,
          "explanation": "Elle est un organite distinct du SEM."
        }
      ],
      "answerFormat": "MULTIPLE",
      "requiredSelectionCount": 5
    }
  ]
} as const;
