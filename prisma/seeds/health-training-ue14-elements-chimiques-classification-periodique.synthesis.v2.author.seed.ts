import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.1 – Synthèse */
export const UE14_CH1_SYNTHESIS_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 75,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Les noyaux $\\ce{^{127}_{53}I}$ et $\\ce{^{131}_{53}I}$ diffèrent de combien de neutrons ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "$N_{127}=127-53=74$ et $N_{131}=131-53=78$ ; la différence est de 4 neutrons."
  },
  {
    "order": 76,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos de $\\ce{^{127}_{53}I}$ et $\\ce{^{131}_{53}I}$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Ils sont isotopes l'un de l'autre.",
        "correct": true,
        "explanation": "Même Z, A différent."
      },
      {
        "content": "Ils appartiennent au même élément chimique.",
        "correct": true,
        "explanation": "Leur numéro atomique est identique."
      },
      {
        "content": "Ils possèdent le même nombre d'électrons s'ils sont considérés comme atomes neutres.",
        "correct": true,
        "explanation": "Ils ont alors chacun 53 électrons."
      },
      {
        "content": "Ils ont le même nombre de neutrons.",
        "correct": false,
        "explanation": "Leur nombre de masse diffère."
      },
      {
        "content": "Ils ont nécessairement la même stabilité nucléaire.",
        "correct": false,
        "explanation": "I-127 est stable alors que I-131 est radioactif."
      }
    ],
    "explanation": "L'isotopie conserve la structure électronique de l'atome neutre tout en modifiant la composition nucléaire."
  },
  {
    "order": 77,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le cobalt 60 est un radionucléide de numéro atomique $Z=27$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Son noyau contient 33 neutrons.",
        "correct": true,
        "explanation": "$N=60-27=33$."
      },
      {
        "content": "Son noyau contient 27 protons.",
        "correct": true,
        "explanation": "Z est le nombre de protons."
      },
      {
        "content": "Le cobalt appartient au bloc d.",
        "correct": true,
        "explanation": "C'est un métal de transition."
      },
      {
        "content": "Le nombre 60 correspond au numéro atomique.",
        "correct": false,
        "explanation": "60 est le nombre de masse A."
      },
      {
        "content": "Un atome neutre de cobalt 60 possède 27 électrons.",
        "correct": true,
        "explanation": "La neutralité impose 27 électrons."
      }
    ],
    "explanation": "Une seule notation nucléaire permet de relier composition du noyau, neutralité électronique et identité chimique."
  },
  {
    "order": 78,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle configuration électronique correspond au calcium neutre ($Z=20$) dans son état fondamental ?",
    "choices": [
      {
        "content": "$[Ar]4s^2$.",
        "correct": true,
        "explanation": "Après le cœur argon de 18 électrons, les deux électrons restants occupent 4s."
      },
      {
        "content": "$[Ne]3s^2$.",
        "correct": false,
        "explanation": "Cette configuration correspond au magnésium."
      },
      {
        "content": "$[Kr]5s^2$.",
        "correct": false,
        "explanation": "Cette configuration correspondrait à un élément beaucoup plus lourd."
      },
      {
        "content": "$[Ar]4p^2$.",
        "correct": false,
        "explanation": "La sous-couche 4p n'est pas occupée avant 3d."
      },
      {
        "content": "$[Ar]3d^2$.",
        "correct": false,
        "explanation": "4s se remplit avant 3d pour le calcium neutre."
      }
    ],
    "explanation": "Le calcium est un alcalino-terreux de période 4, configuration externe 4s²."
  },
  {
    "order": 79,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle est la valeur de $\\ell$ pour les électrons de la sous-couche 4s du calcium ?",
    "answer": {
      "type": "number",
      "value": 0,
      "tolerance": 0
    },
    "explanation": "Toute sous-couche s correspond à $\\ell=0$, quel que soit n."
  },
  {
    "order": 80,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle représentation correspond à la configuration de valence du phosphore neutre ($Z=15$) ?",
    "choices": [
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "3\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "3\\mathrm{p}",
              "boxes": [
                "pair",
                "pair",
                "up"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Cette représentation correspond à 3p⁵."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "3\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "3\\mathrm{p}",
              "boxes": [
                "up",
                "up",
                "up"
              ]
            }
          ]
        },
        "correct": true,
        "explanation": "Le phosphore possède la configuration externe 3s²3p³."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "3\\mathrm{s}",
              "boxes": [
                "up"
              ]
            },
            {
              "label": "3\\mathrm{p}",
              "boxes": [
                "pair",
                "up",
                "up"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "3s devrait contenir un doublet."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "3\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "3\\mathrm{p}",
              "boxes": [
                "pair",
                "up",
                "empty"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Hund impose trois occupations simples pour 3p³."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "3\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "3\\mathrm{p}",
              "boxes": [
                "empty",
                "empty",
                "empty"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Elle omet les trois électrons 3p."
      }
    ],
    "explanation": "Le phosphore a cinq électrons de valence : 3s²3p³, avec trois électrons célibataires dans les orbitales p."
  },
  {
    "order": 81,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'électrons célibataires possède le phosphore neutre dans sa couche de valence $3s^2 3p^3$ ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Les trois électrons 3p occupent séparément les trois orbitales p selon Hund."
  },
  {
    "order": 82,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Un mélange isotopique de bore contient 20 % de bore 10 et 80 % de bore 11. En prenant les masses 10 u et 11 u, quelle est la masse atomique moyenne en u ?",
    "answer": {
      "type": "number",
      "value": 10.8,
      "tolerance": 0.01
    },
    "explanation": "La moyenne pondérée vaut $0{,}20\\times10+0{,}80\\times11=10{,}8\\,\\mathrm{u}$. Le bore 10 est notamment étudié dans le contexte de la capture neutronique au bore."
  },
  {
    "order": 83,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Le sélénium a une configuration externe $4s^2 4p^4$. Quelle position est cohérente ?",
    "choices": [
      {
        "content": "Période 3, groupe 16, bloc p.",
        "correct": false,
        "explanation": "Le plus grand n est 4."
      },
      {
        "content": "Période 4, groupe 14, bloc d.",
        "correct": false,
        "explanation": "La sous-couche en cours de remplissage est p."
      },
      {
        "content": "Période 4, groupe 18, bloc p.",
        "correct": false,
        "explanation": "Le groupe 18 aurait une configuration externe np⁶."
      },
      {
        "content": "Période 4, groupe 16, bloc p.",
        "correct": true,
        "explanation": "n=4 indique la période 4 et ns²np⁴ le groupe 16."
      },
      {
        "content": "Période 5, groupe 2, bloc s.",
        "correct": false,
        "explanation": "Cette proposition ne correspond pas à la configuration donnée."
      }
    ],
    "explanation": "La configuration externe suffit ici à lire période, groupe principal et bloc."
  },
  {
    "order": 84,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Le gadolinium est un lanthanide utilisé dans certains agents de contraste en IRM sous forme chélatée. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il se situe dans la période 6.",
        "correct": true,
        "explanation": "Les lanthanides appartiennent à la période 6."
      },
      {
        "content": "Il appartient au bloc f.",
        "correct": true,
        "explanation": "Sa configuration met en jeu les orbitales 4f."
      },
      {
        "content": "C'est un halogène du groupe 17.",
        "correct": false,
        "explanation": "Le gadolinium est un métal du bloc f."
      },
      {
        "content": "Le gadolinium libre et un complexe chélaté de gadolinium sont chimiquement équivalents en matière de sécurité biologique.",
        "correct": false,
        "explanation": "La chélation modifie fortement la réactivité et la biodisponibilité du métal."
      },
      {
        "content": "Il appartient à la série des lanthanides.",
        "correct": true,
        "explanation": "Le gadolinium est un élément de la série 4f."
      }
    ],
    "explanation": "La position périodique du gadolinium explique sa nature métallique ; en clinique, il est administré sous forme de complexes conçus pour limiter la présence d'ion libre."
  }
];

export const UE14_CH1_SYNTHESIS_MASTER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 27,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le modèle atomique et nucléaire, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Un noyau lié présente un défaut de masse associé à son énergie de liaison.",
        "correct": true,
        "explanation": "La masse du noyau est inférieure à la somme des masses des nucléons séparés."
      },
      {
        "content": "Toute espèce radioactive est artificielle.",
        "correct": false,
        "explanation": "De nombreux radionucléides sont naturels."
      },
      {
        "content": "La quasi-totalité de la masse atomique est concentrée dans le noyau.",
        "correct": true,
        "explanation": "Les nucléons sont beaucoup plus massifs que les électrons."
      },
      {
        "content": "Deux isotopes ont le même Z mais des nombres de neutrons différents.",
        "correct": true,
        "explanation": "C'est la définition de l'isotopie."
      },
      {
        "content": "Un atome neutre possède nécessairement N=Z.",
        "correct": false,
        "explanation": "La neutralité impose seulement le même nombre de protons et d'électrons."
      }
    ],
    "explanation": "Cette synthèse distingue clairement neutralité électronique, isotopie et stabilité nucléaire."
  },
  {
    "order": 48,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle est la capacité électronique maximale d'une sous-couche f ?",
    "answer": {
      "type": "number",
      "value": 14,
      "tolerance": 0
    },
    "explanation": "Une sous-couche f contient 7 orbitales ; à deux électrons par orbitale, elle peut accueillir 14 électrons."
  },
  {
    "order": 49,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant les orbitales atomiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une orbitale s possède un plan nodal angulaire passant par le noyau.",
        "correct": false,
        "explanation": "Les orbitales s n'ont pas de nœud angulaire ; elles peuvent avoir des nœuds radiaux selon n."
      },
      {
        "content": "Une orbitale représente une trajectoire géométrique fixe de l'électron.",
        "correct": false,
        "explanation": "Elle décrit un état quantique et une distribution de probabilité."
      },
      {
        "content": "Une sous-couche d contient cinq orbitales.",
        "correct": true,
        "explanation": "Pour ℓ=2, il existe cinq valeurs de $m_\\ell$."
      },
      {
        "content": "Une orbitale donnée peut contenir au maximum deux électrons de spins opposés.",
        "correct": true,
        "explanation": "C'est une conséquence du principe de Pauli."
      },
      {
        "content": "Une sous-couche p contient trois orbitales.",
        "correct": true,
        "explanation": "Pour ℓ=1, $2\\ell+1=3$."
      }
    ],
    "explanation": "Nombre d'orbitales, capacité électronique et forme spatiale relèvent de notions différentes qu'il faut éviter de confondre."
  },
  {
    "order": 50,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Selon la règle de Madelung $(n+\\ell)$, quelle sous-couche est remplie avant 3d ?",
    "choices": [
      {
        "content": "5p.",
        "correct": false,
        "explanation": "5p est encore plus élevée dans l'ordre de remplissage."
      },
      {
        "content": "5s.",
        "correct": false,
        "explanation": "5s a n+ℓ=5 et n=5, donc vient après 3d."
      },
      {
        "content": "4p.",
        "correct": false,
        "explanation": "4p a n+ℓ=5 mais n=4, donc elle vient après 3d qui a n=3 à égalité de n+ℓ."
      },
      {
        "content": "4s.",
        "correct": true,
        "explanation": "4s a n+ℓ=4, tandis que 3d a n+ℓ=5."
      },
      {
        "content": "4d.",
        "correct": false,
        "explanation": "4d a n+ℓ=6."
      }
    ],
    "explanation": "La règle $n+\\ell$ permet de retrouver l'ordre 4s avant 3d ; à égalité de $n+\\ell$, le plus petit n est rempli d'abord."
  },
  {
    "order": 51,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Quelle configuration électronique identifie le chlore neutre ($Z=17$) ?",
    "choices": [
      {
        "content": "$[Ne]3s^1$.",
        "correct": false,
        "explanation": "Cette configuration correspond au sodium."
      },
      {
        "content": "$[Ne]3s^2 3p^5$.",
        "correct": true,
        "explanation": "Le cœur néon apporte 10 électrons, puis 7 électrons occupent la couche n=3."
      },
      {
        "content": "$[He]2s^2 2p^5$.",
        "correct": false,
        "explanation": "Cette configuration correspond au fluor."
      },
      {
        "content": "$[Ar]4s^1$.",
        "correct": false,
        "explanation": "Cette configuration correspond au potassium."
      },
      {
        "content": "$[Ne]3s^2 3p^6$.",
        "correct": false,
        "explanation": "Cette configuration correspond à l'argon."
      }
    ],
    "explanation": "Le chlore possède sept électrons de valence, ce qui le place parmi les halogènes."
  },
  {
    "order": 52,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Le nickel neutre possède la configuration fondamentale approchée $[Ar]3d^8 4s^2$. Combien d'électrons occupent la sous-couche 3d ?",
    "answer": {
      "type": "number",
      "value": 8,
      "tolerance": 0
    },
    "explanation": "L'exposant 8 de $3d^8$ donne directement le nombre d'électrons de la sous-couche d."
  },
  {
    "order": 53,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "À propos du nickel $[Ar]3d^8 4s^2$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il appartient à la période 4.",
        "correct": true,
        "explanation": "Le plus grand n occupé est 4."
      },
      {
        "content": "Il appartient au groupe 18 des gaz nobles.",
        "correct": false,
        "explanation": "Le nickel est dans le groupe 10."
      },
      {
        "content": "C'est un métal de transition.",
        "correct": true,
        "explanation": "Le nickel appartient aux éléments du bloc d."
      },
      {
        "content": "Sa chimie peut impliquer les électrons 3d et 4s.",
        "correct": true,
        "explanation": "Les états d'oxydation et les liaisons des métaux de transition mobilisent ces niveaux proches en énergie."
      },
      {
        "content": "Il appartient au bloc d.",
        "correct": true,
        "explanation": "La sous-couche d est en cours de remplissage dans cette série."
      }
    ],
    "explanation": "Pour un métal de transition, la notion d'électrons de valence ne doit pas être réduite mécaniquement à la seule couche de plus grand n."
  },
  {
    "order": 54,
    "difficulty": "HARD",
    "format": "QRU",
    "question": "Un atome neutre a pour configuration $[Ne]3s^2$. Quelle identification est correcte ?",
    "choices": [
      {
        "content": "Néon, groupe 18, période 2.",
        "correct": false,
        "explanation": "Le néon est le cœur électronique indiqué entre crochets."
      },
      {
        "content": "Magnésium, groupe 2, période 3.",
        "correct": true,
        "explanation": "La configuration contient 12 électrons et se termine par 3s²."
      },
      {
        "content": "Calcium, groupe 2, période 4.",
        "correct": false,
        "explanation": "Le calcium se termine par 4s²."
      },
      {
        "content": "Sodium, groupe 1, période 3.",
        "correct": false,
        "explanation": "Le sodium se termine par 3s¹."
      },
      {
        "content": "Aluminium, groupe 13, période 3.",
        "correct": false,
        "explanation": "L'aluminium se termine par 3p¹."
      }
    ],
    "explanation": "Reconnaître une configuration complète permet d'identifier l'élément sans ambiguïté."
  },
  {
    "order": 71,
    "difficulty": "HARD",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi les dix propositions suivantes concernant la deuxième période, sélectionnez exactement les cinq correctes.",
    "choices": [
      {
        "content": "C précède B.",
        "correct": false,
        "explanation": "B a Z=5 et C Z=6."
      },
      {
        "content": "F précède Ne.",
        "correct": true,
        "explanation": "Z(F)=9 et Z(Ne)=10."
      },
      {
        "content": "O précède N.",
        "correct": false,
        "explanation": "N a Z=7 et O Z=8."
      },
      {
        "content": "Ne précède F.",
        "correct": false,
        "explanation": "Ne possède Z=10, après F de Z=9."
      },
      {
        "content": "Li précède Be.",
        "correct": true,
        "explanation": "Z(Li)=3 et Z(Be)=4."
      },
      {
        "content": "N précède O.",
        "correct": true,
        "explanation": "Z(N)=7 et Z(O)=8."
      },
      {
        "content": "B précède C.",
        "correct": true,
        "explanation": "Z(B)=5 et Z(C)=6."
      },
      {
        "content": "La deuxième période commence par H.",
        "correct": false,
        "explanation": "H appartient à la première période."
      },
      {
        "content": "Be précède Li.",
        "correct": false,
        "explanation": "Li a le plus petit Z des deux."
      },
      {
        "content": "L'ordre complet est Li, Be, B, C, N, O, F, Ne.",
        "correct": true,
        "explanation": "C'est l'ordre croissant des numéros atomiques 3 à 10."
      }
    ],
    "explanation": "L'ordre des éléments suit strictement le numéro atomique croissant."
  },
  {
    "order": 74,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Un atome neutre possède $Z=26$ et la configuration $[Ar]3d^6 4s^2$. Quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il appartient à la période 4.",
        "correct": true,
        "explanation": "Le plus grand n occupé est 4."
      },
      {
        "content": "Il appartient au bloc d.",
        "correct": true,
        "explanation": "La série correspond au remplissage des orbitales 3d."
      },
      {
        "content": "C'est un métal de transition.",
        "correct": true,
        "explanation": "Le fer est un élément du bloc d."
      },
      {
        "content": "Il s'agit du fer.",
        "correct": true,
        "explanation": "Le fer possède Z=26."
      },
      {
        "content": "Il appartient au groupe 17 des halogènes.",
        "correct": false,
        "explanation": "Le fer est dans le groupe 8."
      }
    ],
    "explanation": "La configuration électronique permet de retrouver simultanément l'identité et la position périodique du fer."
  },
  {
    "order": 7,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quelle est la capacité électronique maximale de la couche N, correspondant à $n=4$ ?",
    "answer": {
      "type": "number",
      "value": 32,
      "tolerance": 0
    },
    "explanation": "La capacité maximale d'une couche est $2n^2$ : pour n=4, $2\\times16=32$ électrons."
  },
  {
    "order": 63,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Le chlore naturel est constitué d'environ 75 % de $\\ce{^{35}Cl}$ et 25 % de $\\ce{^{37}Cl}$. En prenant les masses 35 u et 37 u, quelle masse atomique moyenne obtient-on en u ?",
    "answer": {
      "type": "number",
      "value": 35.5,
      "tolerance": 0.01
    },
    "explanation": "La moyenne pondérée vaut $0{,}75\\times35+0{,}25\\times37=35{,}5\\,\\mathrm{u}$."
  }
];
