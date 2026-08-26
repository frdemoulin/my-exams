import type { HealthTrainingAuthorQuestion } from '@/core/questions/health-author-question.types';

/**
 * UE14 — Colle C03 — Biologie cellulaire — Architecture cellulaire
 * Questions dédiées à l’évaluation ; ne pas exposer dans les quiz d’apprentissage.
 */
export const UE14_COLLE_C03_QUESTIONS: HealthTrainingAuthorQuestion[] = [
  {
    "order": 1,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la membrane plasmique et les transports ainsi que le cytosquelette et les moteurs moléculaires, quelles propositions sont exactes ?",
    "explanation": "À retenir : Le cholestérol module la fluidité des membranes animales. La membrane plasmique est une bicouche lipidique contenant notamment des protéines.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:membrane"
    ],
    "choices": [
      {
        "content": "Le cholestérol module la fluidité des membranes animales.",
        "correct": true,
        "explanation": "Il amortit les variations de fluidité selon la température et la composition lipidique."
      },
      {
        "content": "Les microtubules sont constitués d’actine globulaire.",
        "correct": false,
        "explanation": "Ils sont constitués de tubuline α/β ; l’actine forme les microfilaments."
      },
      {
        "content": "La diffusion facilitée permet toujours de déplacer un soluté contre son gradient sans énergie.",
        "correct": false,
        "explanation": "Contre le gradient, un mécanisme actif ou un couplage énergétique est nécessaire."
      },
      {
        "content": "La membrane plasmique est une bicouche lipidique contenant notamment des protéines.",
        "correct": true,
        "explanation": "Le modèle de mosaïque fluide associe lipides et protéines membranaires."
      },
      {
        "content": "Une membrane biologique est un feuillet protéique rigide dépourvu de lipides.",
        "correct": false,
        "explanation": "Elle repose sur une bicouche lipidique associée à des protéines."
      }
    ]
  },
  {
    "order": 2,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Combien de protofilaments comporte typiquement un microtubule cytoplasmique ?",
    "explanation": "Le microtubule cytoplasmique canonique comporte 13 protofilaments.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "number",
      "value": 13,
      "tolerance": 0
    }
  },
  {
    "order": 3,
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Quelle affirmation décrit correctement la membrane plasmique et les transports ?",
    "explanation": "Ils possèdent une tête hydrophile et des chaînes hydrophobes.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:membrane"
    ],
    "choices": [
      {
        "content": "Les phospholipides membranaires sont amphiphiles.",
        "correct": true,
        "explanation": "Ils possèdent une tête hydrophile et des chaînes hydrophobes."
      },
      {
        "content": "L’immunofluorescence directe exige obligatoirement un anticorps secondaire fluorescent.",
        "correct": false,
        "explanation": "En direct, l’anticorps primaire est lui-même marqué."
      },
      {
        "content": "L’hybridation in situ sert uniquement à détecter des protéines.",
        "correct": false,
        "explanation": "Elle détecte des séquences d’acides nucléiques complémentaires."
      },
      {
        "content": "L’électroporation détruit nécessairement et irréversiblement toute membrane plasmique.",
        "correct": false,
        "explanation": "La perméabilisation recherchée est transitoire et compatible avec la survie d’une fraction des cellules."
      },
      {
        "content": "Une lignée primaire est par définition immortelle.",
        "correct": false,
        "explanation": "Les cultures primaires ont généralement une durée de vie/prolifération limitée."
      }
    ]
  },
  {
    "order": 4,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant la membrane plasmique et les transports.",
    "explanation": "Les deux points à retenir sont les suivants : Les phospholipides membranaires sont amphiphiles. La diffusion simple à travers la bicouche ne nécessite pas de protéine de transport.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Toutes les protéines transmembranaires ont leur extrémité N-terminale à l’extérieur de la cellule.",
        "correct": false,
        "explanation": "La topologie n’est pas universelle."
      },
      {
        "content": "Les phospholipides membranaires sont amphiphiles.",
        "correct": true,
        "explanation": "Ils possèdent une tête hydrophile et des chaînes hydrophobes."
      },
      {
        "content": "Les filaments intermédiaires possèdent une extrémité + et une extrémité − fortement distinctes.",
        "correct": false,
        "explanation": "Ils n’ont pas de polarité structurale nette comparable à l’actine ou aux microtubules."
      },
      {
        "content": "La diffusion simple à travers la bicouche ne nécessite pas de protéine de transport.",
        "correct": true,
        "explanation": "Elle résulte du passage spontané selon le gradient pour des molécules compatibles avec le cœur hydrophobe."
      },
      {
        "content": "La dynéine cytoplasmique se déplace typiquement vers l’extrémité + des microtubules.",
        "correct": false,
        "explanation": "La dynéine se déplace classiquement vers l’extrémité − ; la plupart des kinésines vers +."
      }
    ]
  },
  {
    "order": 5,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Concernant la membrane plasmique et les transports, le cytosquelette et les moteurs moléculaires, ainsi que les méthodes d’étude cellulaire, quelles propositions sont exactes ?",
    "explanation": "À retenir : La diffusion simple à travers la bicouche ne nécessite pas de protéine de transport. La diffusion facilitée reste un transport passif suivant le gradient électrochimique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:transport"
    ],
    "choices": [
      {
        "content": "La diffusion simple à travers la bicouche ne nécessite pas de protéine de transport.",
        "correct": true,
        "explanation": "Elle résulte du passage spontané selon le gradient pour des molécules compatibles avec le cœur hydrophobe."
      },
      {
        "content": "Toutes les protéines transmembranaires ont leur extrémité N-terminale à l’extérieur de la cellule.",
        "correct": false,
        "explanation": "La topologie n’est pas universelle."
      },
      {
        "content": "L’immunofluorescence directe exige obligatoirement un anticorps secondaire fluorescent.",
        "correct": false,
        "explanation": "En direct, l’anticorps primaire est lui-même marqué."
      },
      {
        "content": "La diffusion facilitée reste un transport passif suivant le gradient électrochimique.",
        "correct": true,
        "explanation": "Elle utilise une protéine mais ne consomme pas directement d’énergie pour déplacer contre le gradient."
      },
      {
        "content": "La dynéine cytoplasmique se déplace typiquement vers l’extrémité + des microtubules.",
        "correct": false,
        "explanation": "La dynéine se déplace classiquement vers l’extrémité − ; la plupart des kinésines vers +."
      }
    ]
  },
  {
    "order": 6,
    "difficulty": "MEDIUM",
    "format": "QROC",
    "question": "Quel polymère du cytosquelette est constitué d’hétérodimères α/β-tubuline ?",
    "explanation": "Les microtubules sont des polymères de tubuline α/β.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "microtubule",
        "microtubules"
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
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Concernant la membrane plasmique et les transports, quelle proposition est exacte ?",
    "explanation": "Elle résulte du passage spontané selon le gradient pour des molécules compatibles avec le cœur hydrophobe.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:transport"
    ],
    "choices": [
      {
        "content": "Une lignée primaire est par définition immortelle.",
        "correct": false,
        "explanation": "Les cultures primaires ont généralement une durée de vie/prolifération limitée."
      },
      {
        "content": "La diffusion simple à travers la bicouche ne nécessite pas de protéine de transport.",
        "correct": true,
        "explanation": "Elle résulte du passage spontané selon le gradient pour des molécules compatibles avec le cœur hydrophobe."
      },
      {
        "content": "Les membranes sont parfaitement symétriques entre les deux feuillets.",
        "correct": false,
        "explanation": "Les compositions lipidiques et protéiques des deux feuillets sont asymétriques."
      },
      {
        "content": "Le transport actif primaire utilise uniquement un gradient ionique préexistant, sans hydrolyse directe d’ATP.",
        "correct": false,
        "explanation": "C’est le transport actif secondaire qui exploite typiquement un gradient ; le primaire utilise directement une source d’énergie comme l’ATP."
      },
      {
        "content": "Une membrane biologique est un feuillet protéique rigide dépourvu de lipides.",
        "correct": false,
        "explanation": "Elle repose sur une bicouche lipidique associée à des protéines."
      }
    ]
  },
  {
    "order": 8,
    "difficulty": "EASY",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Parmi ces cinq affirmations portant sur la membrane plasmique et les transports, retenez exactement les deux correctes.",
    "explanation": "Les deux points à retenir sont les suivants : La pompe Na+/K+-ATPase est un exemple de transport actif primaire. La diffusion facilitée reste un transport passif suivant le gradient électrochimique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "L’hybridation in situ sert uniquement à détecter des protéines.",
        "correct": false,
        "explanation": "Elle détecte des séquences d’acides nucléiques complémentaires."
      },
      {
        "content": "L’électroporation détruit nécessairement et irréversiblement toute membrane plasmique.",
        "correct": false,
        "explanation": "La perméabilisation recherchée est transitoire et compatible avec la survie d’une fraction des cellules."
      },
      {
        "content": "L’immunofluorescence directe exige obligatoirement un anticorps secondaire fluorescent.",
        "correct": false,
        "explanation": "En direct, l’anticorps primaire est lui-même marqué."
      },
      {
        "content": "La pompe Na+/K+-ATPase est un exemple de transport actif primaire.",
        "correct": true,
        "explanation": "Elle hydrolyse directement l’ATP pour entretenir les gradients Na+ et K+."
      },
      {
        "content": "La diffusion facilitée reste un transport passif suivant le gradient électrochimique.",
        "correct": true,
        "explanation": "Elle utilise une protéine mais ne consomme pas directement d’énergie pour déplacer contre le gradient."
      }
    ]
  },
  {
    "order": 9,
    "difficulty": "MEDIUM",
    "format": "QRPL",
    "requiredSelectionCount": 5,
    "question": "Parmi ces dix propositions portant sur le cytosquelette et les moteurs moléculaires ainsi que la membrane plasmique et les transports, sélectionnez exactement les cinq exactes.",
    "explanation": "Les cinq points à retenir sont les suivants : La pompe Na+/K+-ATPase est un exemple de transport actif primaire. Les filaments d’actine sont polarisés. Un microtubule cytoplasmique comporte typiquement 13 protofilaments. Les microtubules sont constitués d’hétérodimères α/β-tubuline. La β-tubuline porte le GTP échangeable impliqué dans la dynamique des microtubules.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:synthese-transversale"
    ],
    "choices": [
      {
        "content": "La pompe Na+/K+-ATPase est un exemple de transport actif primaire.",
        "correct": true,
        "explanation": "Elle hydrolyse directement l’ATP pour entretenir les gradients Na+ et K+."
      },
      {
        "content": "L’électroporation détruit nécessairement et irréversiblement toute membrane plasmique.",
        "correct": false,
        "explanation": "La perméabilisation recherchée est transitoire et compatible avec la survie d’une fraction des cellules."
      },
      {
        "content": "Les filaments d’actine sont polarisés.",
        "correct": true,
        "explanation": "Ils possèdent une extrémité plus et une extrémité moins présentant des cinétiques différentes."
      },
      {
        "content": "Toutes les protéines transmembranaires ont leur extrémité N-terminale à l’extérieur de la cellule.",
        "correct": false,
        "explanation": "La topologie n’est pas universelle."
      },
      {
        "content": "Une lignée primaire est par définition immortelle.",
        "correct": false,
        "explanation": "Les cultures primaires ont généralement une durée de vie/prolifération limitée."
      },
      {
        "content": "L’immunofluorescence directe exige obligatoirement un anticorps secondaire fluorescent.",
        "correct": false,
        "explanation": "En direct, l’anticorps primaire est lui-même marqué."
      },
      {
        "content": "Un microtubule cytoplasmique comporte typiquement 13 protofilaments.",
        "correct": true,
        "explanation": "C’est l’architecture la plus courante des microtubules cytoplasmiques."
      },
      {
        "content": "Les microtubules sont constitués d’hétérodimères α/β-tubuline.",
        "correct": true,
        "explanation": "Les dimères s’assemblent en protofilaments puis en microtubules."
      },
      {
        "content": "L’hybridation in situ sert uniquement à détecter des protéines.",
        "correct": false,
        "explanation": "Elle détecte des séquences d’acides nucléiques complémentaires."
      },
      {
        "content": "La β-tubuline porte le GTP échangeable impliqué dans la dynamique des microtubules.",
        "correct": true,
        "explanation": "Le GTP de la β-tubuline peut être hydrolysé après incorporation."
      }
    ]
  },
  {
    "order": 10,
    "difficulty": "EASY",
    "format": "QRM",
    "question": "Concernant le cytosquelette et les moteurs moléculaires ainsi que la membrane plasmique et les transports, quelles propositions sont exactes ?",
    "explanation": "À retenir : La β-tubuline porte le GTP échangeable impliqué dans la dynamique des microtubules. Un microtubule cytoplasmique comporte typiquement 13 protofilaments. Les microtubules sont constitués d’hétérodimères α/β-tubuline.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:microtubules"
    ],
    "choices": [
      {
        "content": "La β-tubuline porte le GTP échangeable impliqué dans la dynamique des microtubules.",
        "correct": true,
        "explanation": "Le GTP de la β-tubuline peut être hydrolysé après incorporation."
      },
      {
        "content": "L’électroporation détruit nécessairement et irréversiblement toute membrane plasmique.",
        "correct": false,
        "explanation": "La perméabilisation recherchée est transitoire et compatible avec la survie d’une fraction des cellules."
      },
      {
        "content": "Une lignée primaire est par définition immortelle.",
        "correct": false,
        "explanation": "Les cultures primaires ont généralement une durée de vie/prolifération limitée."
      },
      {
        "content": "Un microtubule cytoplasmique comporte typiquement 13 protofilaments.",
        "correct": true,
        "explanation": "C’est l’architecture la plus courante des microtubules cytoplasmiques."
      },
      {
        "content": "Les microtubules sont constitués d’hétérodimères α/β-tubuline.",
        "correct": true,
        "explanation": "Les dimères s’assemblent en protofilaments puis en microtubules."
      }
    ]
  },
  {
    "order": 11,
    "difficulty": "HARD",
    "format": "QROC",
    "question": "Quel polymère forme les microfilaments du cytosquelette ?",
    "explanation": "Les microfilaments correspondent à l’actine F polymérisée.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "actine",
        "F-actine",
        "actine F"
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
    "difficulty": "MEDIUM",
    "format": "QRU",
    "question": "Parmi ces cinq affirmations sur la membrane plasmique et les transports, laquelle est correcte ?",
    "explanation": "Elle utilise une protéine mais ne consomme pas directement d’énergie pour déplacer contre le gradient.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:transport"
    ],
    "choices": [
      {
        "content": "Une membrane biologique est un feuillet protéique rigide dépourvu de lipides.",
        "correct": false,
        "explanation": "Elle repose sur une bicouche lipidique associée à des protéines."
      },
      {
        "content": "La diffusion facilitée permet toujours de déplacer un soluté contre son gradient sans énergie.",
        "correct": false,
        "explanation": "Contre le gradient, un mécanisme actif ou un couplage énergétique est nécessaire."
      },
      {
        "content": "La diffusion facilitée reste un transport passif suivant le gradient électrochimique.",
        "correct": true,
        "explanation": "Elle utilise une protéine mais ne consomme pas directement d’énergie pour déplacer contre le gradient."
      },
      {
        "content": "Les microtubules sont constitués d’actine globulaire.",
        "correct": false,
        "explanation": "Ils sont constitués de tubuline α/β ; l’actine forme les microfilaments."
      },
      {
        "content": "Les filaments intermédiaires possèdent une extrémité + et une extrémité − fortement distinctes.",
        "correct": false,
        "explanation": "Ils n’ont pas de polarité structurale nette comparable à l’actine ou aux microtubules."
      }
    ]
  },
  {
    "order": 13,
    "difficulty": "HARD",
    "format": "QRP",
    "requiredSelectionCount": 2,
    "question": "Sélectionnez exactement les deux propositions exactes concernant le cytosquelette et les moteurs moléculaires.",
    "explanation": "Les deux points à retenir sont les suivants : Les microtubules sont constitués d’hétérodimères α/β-tubuline. Un microtubule cytoplasmique comporte typiquement 13 protofilaments.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:selection-precise"
    ],
    "choices": [
      {
        "content": "Les membranes sont parfaitement symétriques entre les deux feuillets.",
        "correct": false,
        "explanation": "Les compositions lipidiques et protéiques des deux feuillets sont asymétriques."
      },
      {
        "content": "Les microtubules sont constitués d’hétérodimères α/β-tubuline.",
        "correct": true,
        "explanation": "Les dimères s’assemblent en protofilaments puis en microtubules."
      },
      {
        "content": "Le transport actif primaire utilise uniquement un gradient ionique préexistant, sans hydrolyse directe d’ATP.",
        "correct": false,
        "explanation": "C’est le transport actif secondaire qui exploite typiquement un gradient ; le primaire utilise directement une source d’énergie comme l’ATP."
      },
      {
        "content": "Une lignée primaire est par définition immortelle.",
        "correct": false,
        "explanation": "Les cultures primaires ont généralement une durée de vie/prolifération limitée."
      },
      {
        "content": "Un microtubule cytoplasmique comporte typiquement 13 protofilaments.",
        "correct": true,
        "explanation": "C’est l’architecture la plus courante des microtubules cytoplasmiques."
      }
    ]
  },
  {
    "order": 14,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur le cytosquelette et les moteurs moléculaires ainsi que la membrane plasmique et les transports, quelles affirmations sont correctes ?",
    "explanation": "À retenir : Les filaments intermédiaires sont globalement moins polarisés que l’actine et les microtubules. La myosine II participe à la contraction actomyosine. Les filaments d’actine sont polarisés.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:filaments-intermediaires"
    ],
    "choices": [
      {
        "content": "Les filaments intermédiaires sont globalement moins polarisés que l’actine et les microtubules.",
        "correct": true,
        "explanation": "Leur assemblage antiparallèle leur fait perdre une polarité structurale nette."
      },
      {
        "content": "La myosine II participe à la contraction actomyosine.",
        "correct": true,
        "explanation": "Elle forme notamment des filaments bipolaires dans les structures contractiles."
      },
      {
        "content": "La diffusion facilitée permet toujours de déplacer un soluté contre son gradient sans énergie.",
        "correct": false,
        "explanation": "Contre le gradient, un mécanisme actif ou un couplage énergétique est nécessaire."
      },
      {
        "content": "Une membrane biologique est un feuillet protéique rigide dépourvu de lipides.",
        "correct": false,
        "explanation": "Elle repose sur une bicouche lipidique associée à des protéines."
      },
      {
        "content": "Les filaments d’actine sont polarisés.",
        "correct": true,
        "explanation": "Ils possèdent une extrémité plus et une extrémité moins présentant des cinétiques différentes."
      }
    ]
  },
  {
    "order": 15,
    "difficulty": "EASY",
    "format": "QROC",
    "question": "Quel moteur moléculaire se déplace classiquement vers l’extrémité moins des microtubules ?",
    "explanation": "La dynéine cytoplasmique est un moteur dirigé vers l’extrémité −.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qroc-integration"
    ],
    "answer": {
      "type": "text",
      "acceptedAnswers": [
        "dynéine",
        "dyneine",
        "dynéine cytoplasmique"
      ],
      "normalization": {
        "trim": true,
        "caseSensitive": false,
        "collapseWhitespace": true
      }
    }
  },
  {
    "order": 16,
    "difficulty": "EASY",
    "format": "QRU",
    "question": "La membrane plasmique et les transports : quelle affirmation est juste ?",
    "explanation": "Elle hydrolyse directement l’ATP pour entretenir les gradients Na+ et K+.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:transport"
    ],
    "choices": [
      {
        "content": "Les filaments intermédiaires possèdent une extrémité + et une extrémité − fortement distinctes.",
        "correct": false,
        "explanation": "Ils n’ont pas de polarité structurale nette comparable à l’actine ou aux microtubules."
      },
      {
        "content": "La dynéine cytoplasmique se déplace typiquement vers l’extrémité + des microtubules.",
        "correct": false,
        "explanation": "La dynéine se déplace classiquement vers l’extrémité − ; la plupart des kinésines vers +."
      },
      {
        "content": "Toutes les protéines transmembranaires ont leur extrémité N-terminale à l’extérieur de la cellule.",
        "correct": false,
        "explanation": "La topologie n’est pas universelle."
      },
      {
        "content": "La pompe Na+/K+-ATPase est un exemple de transport actif primaire.",
        "correct": true,
        "explanation": "Elle hydrolyse directement l’ATP pour entretenir les gradients Na+ et K+."
      },
      {
        "content": "L’immunofluorescence directe exige obligatoirement un anticorps secondaire fluorescent.",
        "correct": false,
        "explanation": "En direct, l’anticorps primaire est lui-même marqué."
      }
    ]
  },
  {
    "order": 17,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant le cytosquelette et les moteurs moléculaires ainsi que les méthodes d’étude cellulaire, quelles propositions sont exactes ?",
    "explanation": "À retenir : La culture primaire conserve souvent davantage de caractéristiques du tissu d’origine qu’une lignée transformée. Une lignée continue peut proliférer durablement dans des conditions de culture adaptées. L’immunofluorescence indirecte utilise un anticorps secondaire fluorescent reconnaissant l’anticorps primaire. La GFP peut être exprimée dans une cellule vivante à partir d’une construction génétique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:moteurs"
    ],
    "choices": [
      {
        "content": "La dynéine cytoplasmique se déplace typiquement vers l’extrémité + des microtubules.",
        "correct": false,
        "explanation": "La dynéine se déplace classiquement vers l’extrémité − ; la plupart des kinésines vers +."
      },
      {
        "content": "La culture primaire conserve souvent davantage de caractéristiques du tissu d’origine qu’une lignée transformée.",
        "correct": true,
        "explanation": "Les cellules primaires sont proches du prélèvement mais ont une durée de vie limitée."
      },
      {
        "content": "Une lignée continue peut proliférer durablement dans des conditions de culture adaptées.",
        "correct": true,
        "explanation": "Une transformation ou immortalisation permet un potentiel de prolifération prolongé."
      },
      {
        "content": "L’immunofluorescence indirecte utilise un anticorps secondaire fluorescent reconnaissant l’anticorps primaire.",
        "correct": true,
        "explanation": "Ce montage permet notamment une amplification du signal."
      },
      {
        "content": "La GFP peut être exprimée dans une cellule vivante à partir d’une construction génétique.",
        "correct": true,
        "explanation": "Une protéine d’intérêt fusionnée à GFP peut être suivie dans des cellules vivantes."
      }
    ]
  },
  {
    "order": 18,
    "difficulty": "HARD",
    "format": "QRM",
    "question": "Concernant la membrane plasmique et les transports, quelles propositions sont exactes ?",
    "explanation": "À retenir : L’électroporation provoque transitoirement une perméabilisation de membrane favorisant l’entrée de macromolécules. Une protéine transmembranaire n’a pas une orientation N-ter extracellulaire/C-ter cytosolique universelle. La membrane plasmique est une bicouche lipidique contenant notamment des protéines. La GFP peut être exprimée dans une cellule vivante à partir d’une construction génétique.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:transfection"
    ],
    "choices": [
      {
        "content": "L’électroporation provoque transitoirement une perméabilisation de membrane favorisant l’entrée de macromolécules.",
        "correct": true,
        "explanation": "Des impulsions électriques créent des pores transitoires."
      },
      {
        "content": "Une protéine transmembranaire n’a pas une orientation N-ter extracellulaire/C-ter cytosolique universelle.",
        "correct": true,
        "explanation": "La topologie dépend des signaux d’adressage et d’insertion propres à chaque protéine."
      },
      {
        "content": "La membrane plasmique est une bicouche lipidique contenant notamment des protéines.",
        "correct": true,
        "explanation": "Le modèle de mosaïque fluide associe lipides et protéines membranaires."
      },
      {
        "content": "L’électroporation détruit nécessairement et irréversiblement toute membrane plasmique.",
        "correct": false,
        "explanation": "La perméabilisation recherchée est transitoire et compatible avec la survie d’une fraction des cellules."
      },
      {
        "content": "La GFP peut être exprimée dans une cellule vivante à partir d’une construction génétique.",
        "correct": true,
        "explanation": "Une protéine d’intérêt fusionnée à GFP peut être suivie dans des cellules vivantes."
      }
    ]
  },
  {
    "order": 19,
    "difficulty": "MEDIUM",
    "format": "QZONE",
    "question": "Sélectionnez la zone correspondant au cortex d’actine sous-membranaire.",
    "explanation": "La zone attendue correspond à : Cortex d’actine.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:qzone"
    ],
    "image": {
      "src": "/images/training/ue14/colles/c03/cell-actin-cortex-qzone.svg",
      "alt": "Cellule avec cortex et cytosquelette",
      "width": 960,
      "height": 560
    },
    "expectedZones": [
      {
        "id": "target",
        "label": "Cortex d’actine",
        "x": 0.5,
        "y": 0.86,
        "tolerance": 0.08
      }
    ],
    "defaultTolerance": 0.08
  },
  {
    "order": 20,
    "difficulty": "MEDIUM",
    "format": "QRM",
    "question": "Sur la membrane plasmique et les transports, quelles affirmations sont correctes ?",
    "explanation": "À retenir : Le cholestérol module la fluidité des membranes animales. Les phospholipides membranaires sont amphiphiles. La diffusion simple à travers la bicouche ne nécessite pas de protéine de transport. La membrane plasmique est une bicouche lipidique contenant notamment des protéines.",
    "tags": [
      "usage:COLLE",
      "ue:UE14",
      "colle:C03",
      "ec:BIOLOGIE_CELLULAIRE",
      "theme:membrane"
    ],
    "choices": [
      {
        "content": "Le cholestérol module la fluidité des membranes animales.",
        "correct": true,
        "explanation": "Il amortit les variations de fluidité selon la température et la composition lipidique."
      },
      {
        "content": "Les phospholipides membranaires sont amphiphiles.",
        "correct": true,
        "explanation": "Ils possèdent une tête hydrophile et des chaînes hydrophobes."
      },
      {
        "content": "La diffusion simple à travers la bicouche ne nécessite pas de protéine de transport.",
        "correct": true,
        "explanation": "Elle résulte du passage spontané selon le gradient pour des molécules compatibles avec le cœur hydrophobe."
      },
      {
        "content": "Une membrane biologique est un feuillet protéique rigide dépourvu de lipides.",
        "correct": false,
        "explanation": "Elle repose sur une bicouche lipidique associée à des protéines."
      },
      {
        "content": "La membrane plasmique est une bicouche lipidique contenant notamment des protéines.",
        "correct": true,
        "explanation": "Le modèle de mosaïque fluide associe lipides et protéines membranaires."
      }
    ]
  }
];
