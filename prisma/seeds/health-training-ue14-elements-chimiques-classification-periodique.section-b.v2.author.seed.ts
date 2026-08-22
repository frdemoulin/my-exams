import type { HealthTrainingAuthorQuestion } from './health-training-ue14.shared';

/** UE14 – Chimie générale – Chapitre 1.1 – Section B – Organisation et configuration électronique */
export const UE14_CH1_ORGANISATION_DISCOVER_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 30,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle association entre nombre quantique et information décrite est correcte ?",
    "choices": [
      {
        "content": "$n$ ne peut prendre que la valeur 0.",
        "correct": false,
        "explanation": "n prend les valeurs entières positives 1,2,3..."
      },
      {
        "content": "$m_s$ détermine le numéro atomique.",
        "correct": false,
        "explanation": "$m_s$ décrit la projection du spin électronique."
      },
      {
        "content": "$n$ repère principalement la couche électronique.",
        "correct": true,
        "explanation": "Le nombre quantique principal n caractérise le niveau principal."
      },
      {
        "content": "$\\ell$ donne directement le nombre de neutrons.",
        "correct": false,
        "explanation": "ℓ caractérise la sous-couche électronique."
      },
      {
        "content": "$m_\\ell$ donne le nombre total d'électrons de l'atome.",
        "correct": false,
        "explanation": "$m_\\ell$ distingue les orbitales d'une sous-couche."
      }
    ],
    "explanation": "Les nombres quantiques décrivent successivement le niveau principal, la sous-couche, l'orbitale et le spin."
  },
  {
    "order": 31,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quelle valeur de $\\ell$ correspond à une sous-couche p ?",
    "answer": {
      "type": "number",
      "value": 1,
      "tolerance": 0
    },
    "explanation": "La correspondance est s→0, p→1, d→2, f→3."
  },
  {
    "order": 32,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle configuration électronique correspond au bore neutre ($Z=5$) dans son état fondamental ?",
    "choices": [
      {
        "content": "$1s^2\\,2p^3$.",
        "correct": false,
        "explanation": "La sous-couche 2s ne peut pas être sautée."
      },
      {
        "content": "$1s^2\\,2s^1\\,2p^2$.",
        "correct": false,
        "explanation": "2s se remplit avant 2p."
      },
      {
        "content": "$1s^2\\,2s^3$.",
        "correct": false,
        "explanation": "Une orbitale s ne peut contenir que deux électrons."
      },
      {
        "content": "$1s^2\\,2s^2\\,2p^1$.",
        "correct": true,
        "explanation": "La configuration contient cinq électrons et respecte l'ordre de remplissage."
      },
      {
        "content": "$1s^2\\,2s^2\\,2p^2$.",
        "correct": false,
        "explanation": "Cette configuration contient six électrons."
      }
    ],
    "explanation": "Le remplissage fondamental du bore est $1s^2\\,2s^2\\,2p^1$."
  },
  {
    "order": 33,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle proposition décrit correctement le nombre quantique principal n ?",
    "choices": [
      {
        "content": "Il prend les valeurs entières positives 1, 2, 3… et repère le niveau principal.",
        "correct": true,
        "explanation": "n est associé aux couches électroniques K, L, M, N…"
      },
      {
        "content": "Il donne le nombre de neutrons du noyau.",
        "correct": false,
        "explanation": "Les neutrons relèvent de la composition nucléaire."
      },
      {
        "content": "Il est identique au spin de l'électron.",
        "correct": false,
        "explanation": "Le spin est décrit par $m_s$."
      },
      {
        "content": "Il donne la trajectoire exacte de l'électron.",
        "correct": false,
        "explanation": "La mécanique quantique décrit des probabilités de présence, pas des trajectoires classiques."
      },
      {
        "content": "Il prend uniquement les valeurs 0,1,2,3.",
        "correct": false,
        "explanation": "Cette série correspond plutôt aux premières valeurs possibles de ℓ."
      }
    ],
    "explanation": "Le nombre quantique principal n caractérise la couche et contribue à déterminer l'énergie et l'extension spatiale de l'orbitale."
  },
  {
    "order": 34,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle représentation en cases quantiques correspond à l'azote neutre ($Z=7$) dans son état fondamental ?",
    "choices": [
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "up",
                "down",
                "up"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Les électrons célibataires d'orbitales dégénérées doivent avoir des spins parallèles dans l'état de plus basse énergie."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "pair",
                "pair",
                "empty"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Cette représentation contient huit électrons."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "pair",
                "up",
                "empty"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Un appariement apparaît alors qu'une orbitale p est encore vide."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "up"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "pair",
                "up",
                "up"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "La sous-couche 2s n'est pas remplie avant 2p."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "up",
                "up",
                "up"
              ]
            }
          ]
        },
        "correct": true,
        "explanation": "$1s^2\\,2s^2\\,2p^3$ respecte Hund : les trois orbitales p sont occupées séparément avant appariement."
      }
    ],
    "explanation": "Pour $2p^3$, la règle de Hund conduit à trois électrons célibataires de spins parallèles dans les trois orbitales p."
  },
  {
    "order": 35,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux correspondances exactes.",
    "choices": [
      {
        "content": "$\\ell=4$ correspond à une sous-couche f.",
        "correct": false,
        "explanation": "f correspond à $\\ell=3$ ; $\\ell=4$ correspond à g."
      },
      {
        "content": "$\\ell=0$ correspond à une sous-couche s.",
        "correct": true,
        "explanation": "Correspondance correcte."
      },
      {
        "content": "$\\ell=1$ correspond à une sous-couche d.",
        "correct": false,
        "explanation": "$\\ell=1$ correspond à p."
      },
      {
        "content": "$\\ell=3$ correspond à une sous-couche p.",
        "correct": false,
        "explanation": "$\\ell=3$ correspond à f."
      },
      {
        "content": "$\\ell=2$ correspond à une sous-couche d.",
        "correct": true,
        "explanation": "Correspondance correcte."
      }
    ],
    "explanation": "Les premières correspondances sont 0→s, 1→p, 2→d, 3→f."
  },
  {
    "order": 36,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Pour le fer neutre, dont la configuration se termine par $4s^2\\,3d^6$, quelle est la couche de plus grand nombre quantique principal occupée ?",
    "choices": [
      {
        "content": "La couche n=2.",
        "correct": false,
        "explanation": "Les couches n=3 et n=4 sont également occupées."
      },
      {
        "content": "La couche n=3 uniquement, car les électrons d sont toujours externes.",
        "correct": false,
        "explanation": "Le plus grand n occupé reste 4."
      },
      {
        "content": "Aucune couche : un métal de transition n'a pas de nombre quantique principal.",
        "correct": false,
        "explanation": "Les électrons d'un métal de transition sont décrits par les mêmes nombres quantiques."
      },
      {
        "content": "La couche n=1.",
        "correct": false,
        "explanation": "Ce n'est pas la couche la plus externe."
      },
      {
        "content": "La couche n=4, contenant notamment les électrons 4s.",
        "correct": true,
        "explanation": "Le plus grand n présent est 4."
      }
    ],
    "explanation": "Pour les métaux de transition, distinguer la couche de plus grand n des électrons susceptibles de participer à la chimie : les sous-couches ns et (n−1)d peuvent toutes deux intervenir."
  },
  {
    "order": 37,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien de valeurs différentes de $\\ell$ sont autorisées pour une couche de nombre quantique principal $n=4$ ?",
    "answer": {
      "type": "number",
      "value": 4,
      "tolerance": 0
    },
    "explanation": "Pour n=4, $\\ell$ peut valoir 0, 1, 2 ou 3, soit quatre valeurs."
  },
  {
    "order": 38,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Combien d'orbitales contient une sous-couche p ?",
    "answer": {
      "type": "number",
      "value": 3,
      "tolerance": 0
    },
    "explanation": "Le nombre d'orbitales vaut $2\\ell+1$. Pour p, $\\ell=1$, donc 3 orbitales."
  },
  {
    "order": 39,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "Quelle représentation respecte la règle de Hund pour une sous-couche p contenant trois électrons ?",
    "choices": [
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "\\mathrm{p}",
              "boxes": [
                "pair",
                "up",
                "empty"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Un doublet est formé alors qu'une orbitale reste vide."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "\\mathrm{p}",
              "boxes": [
                "pair",
                "empty",
                "up"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Une orbitale reste vide alors qu'un appariement existe déjà."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "\\mathrm{p}",
              "boxes": [
                "up",
                "down",
                "up"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Les spins des électrons célibataires ne sont pas parallèles."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "\\mathrm{p}",
              "boxes": [
                "up",
                "up",
                "up"
              ]
            }
          ]
        },
        "correct": true,
        "explanation": "Les orbitales dégénérées sont occupées séparément avec des spins parallèles avant appariement."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "\\mathrm{p}",
              "boxes": [
                "pair",
                "pair",
                "empty"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Cette représentation contient quatre électrons."
      }
    ],
    "explanation": "La règle de Hund minimise l'appariement prématuré dans les orbitales de même énergie."
  }
];

export const UE14_CH1_ORGANISATION_PRACTICE_V2_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 28,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant les quatre nombres quantiques d'un électron, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "$\\ell$ repère la sous-couche.",
        "correct": true,
        "explanation": "Pour une valeur de n, ℓ varie de 0 à n−1."
      },
      {
        "content": "$m_\\ell$ est toujours égal à n.",
        "correct": false,
        "explanation": "$m_\\ell$ dépend de ℓ, pas directement de n."
      },
      {
        "content": "$m_\\ell$ distingue les orbitales d'une même sous-couche.",
        "correct": true,
        "explanation": "$m_\\ell$ varie de −ℓ à +ℓ."
      },
      {
        "content": "n repère le niveau principal.",
        "correct": true,
        "explanation": "n=1,2,3…"
      },
      {
        "content": "$m_s$ peut prendre les valeurs $+1/2$ ou $-1/2$.",
        "correct": true,
        "explanation": "Ce sont les deux projections possibles du spin."
      }
    ],
    "explanation": "Un état électronique atomique est caractérisé par n, ℓ, $m_\\ell$ et $m_s$, soumis à des domaines de valeurs précis."
  },
  {
    "order": 29,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien d'orbitales contient une sous-couche d ?",
    "answer": {
      "type": "number",
      "value": 5,
      "tolerance": 0
    },
    "explanation": "Pour d, $\\ell=2$ ; $2\\ell+1=5$ orbitales."
  },
  {
    "order": 40,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle représentation en cases quantiques correspond à l'oxygène neutre ($Z=8$) dans son état fondamental ?",
    "choices": [
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "pair",
                "pair",
                "empty"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Deux appariements sont créés alors qu'une orbitale p reste vide."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "up",
                "up",
                "up"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Cette représentation ne contient que sept électrons."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "pair",
                "down",
                "up"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "Les électrons célibataires des orbitales dégénérées doivent avoir des spins parallèles dans l'état fondamental."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "up"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "pair",
                "pair",
                "up"
              ]
            }
          ]
        },
        "correct": false,
        "explanation": "La sous-couche 2s devrait être remplie."
      },
      {
        "content": {
          "type": "quantum-boxes",
          "orbitals": [
            {
              "label": "1\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{s}",
              "boxes": [
                "pair"
              ]
            },
            {
              "label": "2\\mathrm{p}",
              "boxes": [
                "pair",
                "up",
                "up"
              ]
            }
          ]
        },
        "correct": true,
        "explanation": "L'oxygène est $1s^2 2s^2 2p^4$ ; Hund impose d'abord trois occupations simples puis un appariement."
      }
    ],
    "explanation": "Pour $2p^4$, une orbitale p contient un doublet et les deux autres un électron célibataire de spin parallèle."
  },
  {
    "order": 41,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Quelles situations constituent une violation des règles de remplissage électronique dans l'état fondamental ?",
    "choices": [
      {
        "content": "Placer deux électrons de même spin dans une même orbitale.",
        "correct": true,
        "explanation": "Cela viole le principe d'exclusion de Pauli."
      },
      {
        "content": "Former un doublet dans une orbitale p alors qu'une autre orbitale p dégénérée est vide.",
        "correct": true,
        "explanation": "Cela viole la règle de Hund."
      },
      {
        "content": "Remplir 2p avant d'avoir rempli 2s.",
        "correct": true,
        "explanation": "Cela ne respecte pas l'ordre énergétique usuel pour les atomes légers."
      },
      {
        "content": "Placer deux électrons de spins opposés dans une même orbitale.",
        "correct": false,
        "explanation": "C'est précisément la situation autorisée par Pauli."
      },
      {
        "content": "Occuper séparément trois orbitales p par trois électrons de spins parallèles.",
        "correct": false,
        "explanation": "C'est la répartition conforme à Hund pour p³."
      }
    ],
    "explanation": "Pauli, Hund et l'ordre énergétique de remplissage sont trois contraintes distinctes et complémentaires."
  },
  {
    "order": 42,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle définition décrit le mieux une orbitale atomique ?",
    "choices": [
      {
        "content": "Un emplacement ponctuel où l'électron se trouve en permanence.",
        "correct": false,
        "explanation": "La position n'est pas déterminée de cette manière."
      },
      {
        "content": "Une région de l'espace décrite par une fonction d'onde, associée à une distribution de probabilité de présence de l'électron.",
        "correct": true,
        "explanation": "Une orbitale n'est pas une trajectoire classique."
      },
      {
        "content": "Une trajectoire circulaire fixe parcourue par l'électron.",
        "correct": false,
        "explanation": "Cette image classique ne décrit pas le modèle quantique."
      },
      {
        "content": "Un nombre entier égal au numéro atomique.",
        "correct": false,
        "explanation": "Une orbitale n'est pas un nombre atomique."
      },
      {
        "content": "Un type de nucléon du noyau.",
        "correct": false,
        "explanation": "Les orbitales décrivent les électrons, pas les nucléons."
      }
    ],
    "explanation": "L'orbitale atomique est un objet quantique ; $|\\psi|^2$ est relié à la densité de probabilité de présence."
  },
  {
    "order": 43,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la forme et l'organisation des orbitales atomiques, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Une sous-couche s contient trois orbitales.",
        "correct": false,
        "explanation": "Une sous-couche s ne contient qu'une seule orbitale."
      },
      {
        "content": "Une orbitale s possède une symétrie sphérique autour du noyau.",
        "correct": true,
        "explanation": "Les orbitales s sont isotropes en angle."
      },
      {
        "content": "Une sous-couche d contient cinq orbitales.",
        "correct": true,
        "explanation": "Pour ℓ=2, il existe cinq valeurs de $m_\\ell$."
      },
      {
        "content": "Une sous-couche p contient trois orbitales orientées différemment.",
        "correct": true,
        "explanation": "On les note souvent $p_x$, $p_y$ et $p_z$."
      },
      {
        "content": "Toutes les orbitales p ont exactement la même orientation spatiale.",
        "correct": false,
        "explanation": "Elles se distinguent notamment par leur orientation."
      }
    ],
    "explanation": "La valeur de ℓ détermine le type de sous-couche et le nombre d'orbitales $2\\ell+1$."
  },
  {
    "order": 44,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Le fer neutre a pour configuration fondamentale $[\\mathrm{Ar}]\\,3d^6\\,4s^2$. Combien d'électrons occupent la sous-couche 3d ?",
    "answer": {
      "type": "number",
      "value": 6,
      "tolerance": 0
    },
    "explanation": "L'exposant de $3d^6$ donne directement le nombre d'électrons dans cette sous-couche."
  },
  {
    "order": 45,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "À propos des électrons externes du fer $[\\mathrm{Ar}]\\,3d^6\\,4s^2$, quelles propositions sont exactes ?",
    "choices": [
      {
        "content": "Il est toujours correct de limiter les électrons de valence aux seuls électrons 4s.",
        "correct": false,
        "explanation": "Pour les métaux de transition, la notion de valence peut inclure les électrons (n−1)d."
      },
      {
        "content": "Les électrons 3d peuvent participer à la chimie du métal de transition.",
        "correct": true,
        "explanation": "La chimie des métaux de transition implique souvent les orbitales d."
      },
      {
        "content": "Le plus grand nombre quantique principal occupé est n=4.",
        "correct": true,
        "explanation": "Les électrons 4s appartiennent à la couche n=4."
      },
      {
        "content": "La configuration du fer se termine par $4p^6$.",
        "correct": false,
        "explanation": "Le fer fondamental se termine par $3d^6 4s^2$."
      },
      {
        "content": "La sous-couche 3d est partiellement remplie.",
        "correct": true,
        "explanation": "Elle contient 6 électrons sur une capacité maximale de 10."
      }
    ],
    "explanation": "Pour les métaux de transition, il faut distinguer la couche de plus grand n et les orbitales impliquées dans la réactivité chimique."
  },
  {
    "order": 46,
    "difficulty": "MEDIUM",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux quadruplets $(n,\\ell,m_\\ell,m_s)$ autorisés.",
    "choices": [
      {
        "content": "$(1,0,0,0)$",
        "correct": false,
        "explanation": "Le spin ne peut pas valoir 0 : $m_s=\\pm1/2$."
      },
      {
        "content": "$(3,2,-1,+1/2)$",
        "correct": true,
        "explanation": "Pour n=3, ℓ=2 est autorisé ; $m_\\ell=-1$ est compris entre −2 et +2."
      },
      {
        "content": "$(3,1,2,-1/2)$",
        "correct": false,
        "explanation": "Pour ℓ=1, $m_\\ell$ ne peut valoir que −1,0,+1."
      },
      {
        "content": "$(2,2,0,+1/2)$",
        "correct": false,
        "explanation": "Pour n=2, ℓ ne peut valoir que 0 ou 1."
      },
      {
        "content": "$(4,0,0,-1/2)$",
        "correct": true,
        "explanation": "Pour une orbitale s, ℓ=0 et $m_\\ell=0$."
      }
    ],
    "explanation": "Vérifier successivement $n\\ge1$, $0\\le\\ell\\le n-1$, $-\\ell\\le m_\\ell\\le\\ell$ et $m_s=\\pm1/2$."
  },
  {
    "order": 47,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Dans l'ordre de remplissage usuel des orbitales atomiques neutres, quelle sous-couche est occupée avant 3d ?",
    "choices": [
      {
        "content": "4d.",
        "correct": false,
        "explanation": "4d est occupée bien plus tard."
      },
      {
        "content": "4s.",
        "correct": true,
        "explanation": "La règle de Madelung conduit à remplir 4s avant 3d pour la construction des configurations neutres usuelles."
      },
      {
        "content": "4p.",
        "correct": false,
        "explanation": "4p est remplie après 3d."
      },
      {
        "content": "2p.",
        "correct": false,
        "explanation": "2p est certes plus basse en énergie, mais la question porte sur la sous-couche immédiatement précédant 3d dans l'ordre usuel."
      },
      {
        "content": "5s.",
        "correct": false,
        "explanation": "5s intervient plus tard."
      }
    ],
    "explanation": "L'ordre de construction usuel autour de cette zone est ... 3p, 4s, 3d, 4p ... ; l'ionisation des métaux de transition obéit ensuite à des considérations énergétiques plus fines."
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle est la capacité électronique maximale d'une sous-couche d ?",
    "answer": {
      "type": "number",
      "value": 10,
      "tolerance": 0
    },
    "explanation": "Une sous-couche d contient 5 orbitales, chacune pouvant accueillir 2 électrons : 10 électrons."
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quelle est la capacité électronique maximale de la couche M, correspondant à $n=3$ ?",
    "answer": {
      "type": "number",
      "value": 18,
      "tolerance": 0
    },
    "explanation": "La capacité maximale d'une couche vaut $2n^2$. Pour n=3 : $2\\times9=18$ électrons."
  }
];
